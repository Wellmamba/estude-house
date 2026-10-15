// Cadastro com aprovação: quem se cadastra fica "pending" até um gestor aprovar; ao aprovar, a pessoa recebe
// por e-mail um link e um código ("invited") e só entra depois de ativar ("active").
// Chaves: signups/p:<id> (aguardando), signups/i:<id> (aprovado, falta ativar), signups/r:<id> (recusado), invites/i:<id>.
import crypto from "node:crypto";
import { store, pmap } from "./db.mjs";
import { secret, normalizeEmail, isValidEmail, emailKey } from "./auth.mjs";
import { now } from "./clock.mjs";
import { sendMail, mailerOn, inviteMail } from "./mailer.mjs";

const INVITE_HOURS = 48, MAX_TRIES = 5;
export const approvalOn = () => process.env.SIGNUP_APPROVAL !== "off";

const mac = (s) => crypto.createHmac("sha256", secret()).update(s).digest("hex");
const same = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto.timingSafeEqual(x, y); };
const ix = () => store("signups");
const invites = () => store("invites");

export async function track(id, st) {
  const s = await ix();
  await Promise.all(["p", "i", "r"].filter((k) => k !== st).map((k) => s.delete(`${k}:${id}`)));
  await s.set(`${st}:${id}`, { at: now() });
}
export async function untrack(id) {
  const s = await ix();
  await Promise.all(["p", "i", "r"].map((k) => s.delete(`${k}:${id}`)));
  await (await invites()).delete("i:" + id);
}
export async function pendingCount() {
  return (await (await ix()).keys({ prefix: "p:" })).length;
}

const origin = (req) => (process.env.SITE_URL || "").replace(/\/+$/, "") || new URL(req.url).origin;

// Gera link + código novos (os antigos deixam de valer) e tenta enviar por e-mail.
async function issue(ctx, req, admin, u, resend) {
  const token = crypto.randomBytes(24).toString("base64url");
  const code = String(crypto.randomInt(0, 1e6)).padStart(6, "0");
  await (await invites()).set("i:" + u.id, { tokenHash: mac("t:" + token), codeHash: mac(`c:${u.id}:${code}`), exp: now() + INVITE_HOURS * 3600e3, tries: 0, at: now() });
  u.access = "invited"; u.invitedAt = now(); u.invitedBy = admin.id;
  await ctx.saveUser(u);
  await track(u.id, "i");
  const link = `${origin(req)}/#/ativar?u=${encodeURIComponent(u.id)}&t=${token}`;
  let sent = false, reason = null;
  if (mailerOn()) {
    const r = await sendMail({ to: u.email, ...inviteMail({ name: u.name, link, code, hours: INVITE_HOURS }) });
    sent = r.ok; reason = r.ok ? null : r.error;
  } else reason = "O envio de e-mail ainda não foi configurado.";
  await ctx.logEvent(req, resend ? "cadastro_reenviado" : "cadastro_aprovado", admin, { target: u.email, emailSent: sent });
  // Se o e-mail não saiu, a administração recebe o link e o código para entregar à pessoa por outro canal.
  return sent ? { ok: true, emailSent: true } : { ok: true, emailSent: false, reason, link, code };
}

// Público: confirma o acesso por link (u + t) ou por e-mail + código.
export async function activate(ctx, req, body) {
  const bad = () => ctx.fail(400, "Link ou código inválido ou expirado. Peça um novo à administração.");
  const inv = await invites();
  let u = null, rec = null;
  if (body.t) {
    const id = String(body.u || "");
    u = id ? await ctx.loadUser(id) : null;
    rec = u && u.access === "invited" ? await inv.get("i:" + id) : null;
    if (!rec || rec.exp < now() || !same(rec.tokenHash, mac("t:" + String(body.t)))) bad();
  } else {
    const email = normalizeEmail(body.email);
    const code = String(body.code || "").replace(/\D/g, "");
    if (!isValidEmail(email) || code.length !== 6) bad();
    u = await ctx.findByEmail(email);
    rec = u && u.access === "invited" ? await inv.get("i:" + u.id) : null;
    if (!rec || rec.exp < now()) bad();
    if (rec.tries >= MAX_TRIES) ctx.fail(429, "Muitas tentativas com esse código. Peça um novo à administração.");
    if (!same(rec.codeHash, mac(`c:${u.id}:${code}`))) {
      rec.tries += 1;
      await inv.set("i:" + u.id, rec);
      if (rec.tries >= MAX_TRIES) ctx.fail(429, "Muitas tentativas com esse código. Peça um novo à administração.");
      ctx.fail(400, "Código incorreto. Confira o e-mail e tente de novo.");
    }
  }
  u.access = "active"; u.activatedAt = now();
  await ctx.saveUser(u);
  await untrack(u.id);
  await ctx.logEvent(req, "cadastro_ativado", u);
  return ctx.json({ ok: true, email: u.email, name: u.name });
}

const view = (u, st) => ({ id: u.id, name: u.name, email: u.email, createdAt: u.createdAt, access: u.access, invitedAt: u.invitedAt || null, expired: st === "i" && now() > (u.invitedAt || 0) + INVITE_HOURS * 3600e3, reason: u.rejectReason || null });

// Rotas de administração: admin/signups...
export async function handleAdmin(ctx, { req, method, path, body, admin }) {
  const parts = path.split("/");
  if (parts[1] !== "signups") return null;
  const s = await ix();
  if (parts.length === 2 && method === "GET") {
    const keys = await s.keys();
    const rows = (await pmap(keys, async (k) => { const u = await ctx.loadUser(k.slice(2)); return u ? view(u, k[0]) : null; })).filter(Boolean);
    rows.sort((a, b) => b.createdAt - a.createdAt);
    return ctx.json({ signups: rows, emailOn: mailerOn(), approval: approvalOn() });
  }
  const id = parts[2];
  const u = id ? await ctx.loadUser(id) : null;
  if (!u || !u.access || u.access === "active") ctx.fail(404, "Esse cadastro não está mais na fila.");
  if (parts[3] === "approve" && method === "POST") {
    if (u.access === "invited") ctx.fail(409, "Esse cadastro já foi aprovado. Use Reenviar para mandar um novo link.");
    delete u.rejectReason;
    return ctx.json(await issue(ctx, req, admin, u, false));
  }
  if (parts[3] === "resend" && method === "POST") {
    if (u.access !== "invited") ctx.fail(409, "Só dá para reenviar para cadastros já aprovados.");
    return ctx.json(await issue(ctx, req, admin, u, true));
  }
  if (parts[3] === "reject" && method === "POST") {
    if (u.access === "rejected") return ctx.json({ ok: true });
    u.access = "rejected"; u.rejectReason = String(body.reason || "").replace(/[\u0000-\u001f]/g, " ").trim().slice(0, 200) || undefined;
    await ctx.saveUser(u);
    await (await invites()).delete("i:" + u.id);
    await track(u.id, "r");
    await ctx.logEvent(req, "cadastro_recusado", admin, { target: u.email });
    return ctx.json({ ok: true });
  }
  if (parts.length === 3 && method === "DELETE") {
    await ctx.removeUser(u);
    await ctx.logEvent(req, "cadastro_removido", admin, { target: u.email });
    return ctx.json({ ok: true });
  }
  return null;
}

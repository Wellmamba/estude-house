// Cadastro com aprovação: quem se cadastra fica "pending" até um gestor aprovar. Ao aprovar, o sistema gera um
// código de 6 dígitos que o gestor entrega à pessoa ("invited"); ela digita o código com o e-mail do cadastro e
// só então entra ("active"). Não há envio de e-mail.
// Chaves: signups/p:<id> (aguardando), signups/i:<id> (aprovado, falta ativar), signups/r:<id> (recusado), invites/i:<id>.
import crypto from "node:crypto";
import { store, pmap } from "./db.mjs";
import { secret, normalizeEmail, isValidEmail, emailKey } from "./auth.mjs";
import { now } from "./clock.mjs";

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

// Gera um código novo (o anterior deixa de valer) e devolve para o gestor entregar à pessoa.
async function issue(ctx, req, admin, u, resend) {
  const code = String(crypto.randomInt(0, 1e6)).padStart(6, "0");
  await (await invites()).set("i:" + u.id, { codeHash: mac(`c:${u.id}:${code}`), exp: now() + INVITE_HOURS * 3600e3, tries: 0, at: now() });
  u.access = "invited"; u.invitedAt = now(); u.invitedBy = admin.id;
  await ctx.saveUser(u);
  await track(u.id, "i");
  await ctx.logEvent(req, resend ? "cadastro_novo_codigo" : "cadastro_aprovado", admin, { target: u.email });
  return { ok: true, code, hours: INVITE_HOURS };
}

// Público: confirma o acesso com o e-mail do cadastro e o código que o gestor entregou.
export async function activate(ctx, req, body) {
  const bad = () => ctx.fail(400, "Código inválido ou expirado. Peça um novo a um gestor.");
  const inv = await invites();
  const email = normalizeEmail(body.email);
  const code = String(body.code || "").replace(/\D/g, "");
  if (!isValidEmail(email) || code.length !== 6) bad();
  const u = await ctx.findByEmail(email);
  const rec = u && u.access === "invited" ? await inv.get("i:" + u.id) : null;
  if (!rec || rec.exp < now()) bad();
  if (rec.tries >= MAX_TRIES) ctx.fail(429, "Muitas tentativas com esse código. Peça um novo a um gestor.");
  if (!same(rec.codeHash, mac(`c:${u.id}:${code}`))) {
    rec.tries += 1;
    await inv.set("i:" + u.id, rec);
    if (rec.tries >= MAX_TRIES) ctx.fail(429, "Muitas tentativas com esse código. Peça um novo a um gestor.");
    ctx.fail(400, "Código incorreto. Confira com o gestor e tente de novo.");
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
    return ctx.json({ signups: rows, approval: approvalOn() });
  }
  const id = parts[2];
  const u = id ? await ctx.loadUser(id) : null;
  if (!u || !u.access || u.access === "active") ctx.fail(404, "Esse cadastro não está mais na fila.");
  if (parts[3] === "approve" && method === "POST") {
    if (u.access === "invited") ctx.fail(409, "Esse cadastro já foi aprovado. Use Gerar novo código se a pessoa perdeu o código.");
    delete u.rejectReason;
    return ctx.json(await issue(ctx, req, admin, u, false));
  }
  if (parts[3] === "resend" && method === "POST") {
    if (u.access !== "invited") ctx.fail(409, "Só dá para gerar novo código para cadastros já aprovados.");
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

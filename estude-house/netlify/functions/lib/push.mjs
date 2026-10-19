// Avisos no PC e no celular (Web Push): mesmo com o site fechado, o aparelho recebe a notificação.
// Chaves em store("push"): vapid (par de chaves do servidor), sub:<pessoa>:<aparelho>, prefs:<pessoa>, last:<pessoa>, bc:<tempo invertido> (avisos do gestor).
import crypto from "node:crypto";
import { store, pmap } from "./db.mjs";
import { now } from "./clock.mjs";
import { can } from "./auth.mjs";
import * as notify from "./notify.mjs";

/* o que cada pessoa pode ligar ou desligar */
export const CATS = {
  interacoes: { label: "Marcações e comentários", hint: "Quando alguém marca você com @ ou comenta no seu post." },
  meus_posts: { label: "Aprovação dos meus posts", hint: "Quando o gestor aprova ou recusa um post ou uma dúvida sua." },
  avisos: { label: "Avisos da equipe", hint: "Comunicados dos gestores para o time." },
  provas: { label: "Provas e trilhas novas", hint: "Quando uma prova ou trilha é liberada para você." },
  videos: { label: "Vídeos novos nos Reels", hint: "No máximo um aviso a cada 6 horas." },
  lembretes: { label: "Lembrete de check-in e sequência", hint: "Um lembrete por dia útil, só se você ainda não fez o check-in." },
  resumo: { label: "Resumo da semana", hint: "Toda segunda-feira: como o time foi e quem lidera o ranking." },
};
const TYPE_CAT = { mention: "interacoes", comment: "interacoes", approved: "meus_posts", rejected: "meus_posts", forum_ok: "meus_posts", forum_no: "meus_posts", all: "avisos", broadcast: "avisos", prova_nova: "provas", reel: "videos", checkin: "lembretes", streak: "lembretes", weekly: "resumo" };
const THROTTLE = { videos: 6 * 3600e3 };
const MAX_SUBS = 6;
/* só aceitamos endereços dos serviços de push dos navegadores (evita mandar o servidor chamar sites quaisquer) */
const PUSH_HOSTS = [/(^|\.)googleapis\.com$/, /(^|\.)push\.services\.mozilla\.com$/, /(^|\.)push\.apple\.com$/, /(^|\.)notify\.windows\.com$/, /(^|\.)mozaws\.net$/];

const clip = (s, n) => { const t = String(s || "").replace(/\s+/g, " ").trim(); return t.length > n ? t.slice(0, n - 1) + "…" : t; };
const db = () => store("push");
const t13 = (n) => String(n).padStart(13, "0");

/* ───── chaves do servidor (VAPID) ───── */
let wpMod = null;
async function lib() {
  if (wpMod === null) { try { wpMod = (await import("web-push")).default; } catch { wpMod = false; } }
  return wpMod || null;
}
export async function vapid() {
  if (process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) return { publicKey: process.env.VAPID_PUBLIC_KEY, privateKey: process.env.VAPID_PRIVATE_KEY };
  const s = await db();
  let k = await s.get("vapid");
  if (!k) {
    const wp = await lib();
    if (!wp) return null;
    k = wp.generateVAPIDKeys();
    await s.set("vapid", k);
  }
  return k;
}
const SUBJECT = () => process.env.VAPID_SUBJECT || "mailto:wellington.moreira@mambadigital.com.br";

/* ───── envio (trocável nos testes) ───── */
let transport = null;
export const setTransport = (fn) => { transport = fn; };
async function deliver(sub, payload, opts) {
  if (transport) return transport(sub, payload, opts);
  const wp = await lib(), k = await vapid();
  if (!wp || !k) throw Object.assign(new Error("push indisponível"), { statusCode: 0 });
  return wp.sendNotification(sub, JSON.stringify(payload), { TTL: opts.ttl ?? 86400, urgency: opts.urgency || "normal", vapidDetails: { subject: SUBJECT(), publicKey: k.publicKey, privateKey: k.privateKey }, timeout: 8000 });
}

/* ───── aparelhos e preferências ───── */
const subKey = (uid, endpoint) => `sub:${uid}:${crypto.createHash("sha1").update(endpoint).digest("hex").slice(0, 16)}`;
export async function subsOf(uid) {
  const s = await db();
  const keys = await s.keys({ prefix: `sub:${uid}:` });
  return (await pmap(keys, async (k) => { const v = await s.get(k); return v ? { k, ...v } : null; })).filter(Boolean);
}
export async function prefsOf(uid) {
  const saved = (await (await db()).get("prefs:" + uid)) || {};
  return Object.fromEntries(Object.keys(CATS).map((c) => [c, saved[c] !== false]));
}
function checkSub(sub, fail) {
  let u;
  try { u = new URL(String(sub?.endpoint || "")); } catch { fail(400, "Aparelho não reconhecido."); }
  if (u.protocol !== "https:" || !PUSH_HOSTS.some((re) => re.test(u.hostname))) fail(400, "Esse navegador usa um serviço de avisos que não é aceito.");
  const p256dh = String(sub.keys?.p256dh || ""), auth = String(sub.keys?.auth || "");
  if (p256dh.length < 40 || p256dh.length > 200 || auth.length < 10 || auth.length > 60) fail(400, "Chaves do aparelho inválidas.");
  return { endpoint: u.href, keys: { p256dh, auth } };
}
export async function saveSub(user, sub, label, fail) {
  const clean = checkSub(sub, fail);
  const s = await db();
  const mine = await subsOf(user.id);
  const key = subKey(user.id, clean.endpoint);
  const others = mine.filter((x) => x.k !== key).sort((a, b) => a.createdAt - b.createdAt);
  for (const old of others.slice(0, Math.max(0, others.length + 1 - MAX_SUBS))) await s.delete(old.k);
  const prev = mine.find((x) => x.k === key);
  /* o mesmo navegador não pode ficar ligado a duas pessoas: o aviso é de quem entrou por último */
  const hash = key.split(":")[2];
  for (const k of await s.keys({ prefix: "sub:" })) if (k.endsWith(":" + hash) && k !== key) await s.delete(k);
  await s.set(key, { ...clean, label: clip(label, 60) || "Aparelho", createdAt: prev?.createdAt || now(), seenAt: now() });
  return mine.length + (prev ? 0 : 1);
}
export async function removeSub(user, endpoint) {
  await (await db()).delete(subKey(user.id, String(endpoint || "")));
}
export async function savePrefs(uid, input) {
  const cur = await prefsOf(uid);
  for (const c of Object.keys(CATS)) if (typeof input?.[c] === "boolean") cur[c] = input[c];
  await (await db()).set("prefs:" + uid, cur);
  return cur;
}

/* ───── mandar para uma pessoa ───── */
export async function sendTo(uid, payload, { cat = "avisos", throttle = THROTTLE[cat] || 0, force = false } = {}) {
  try {
    const s = await db();
    const subs = await subsOf(uid);
    if (!subs.length) return { sent: 0, devices: 0 };
    if (!force) {
      if ((await prefsOf(uid))[cat] === false) return { sent: 0, devices: subs.length, skipped: "pref" };
      if (throttle) {
        const last = (await s.get("last:" + uid)) || {};
        if (last[cat] && now() - last[cat] < throttle) return { sent: 0, devices: subs.length, skipped: "throttle" };
        last[cat] = now();
        await s.set("last:" + uid, last);
      }
    }
    let sent = 0;
    for (const sub of subs) {
      try { await deliver({ endpoint: sub.endpoint, keys: sub.keys }, { icon: "/icons/icon-192.png", badge: "/icons/badge-96.png", ...payload }, {}); sent++; }
      catch (e) { if (e?.statusCode === 404 || e?.statusCode === 410) await s.delete(sub.k); }
    }
    return { sent, devices: subs.length };
  } catch { return { sent: 0, devices: 0, error: true }; }
}

/* A notificação do sino vira também um aviso no aparelho. */
const TEXT = {
  mention: (n, by) => [`${by} marcou você`, n.where === "comment" ? "em um comentário" : "em um post"],
  comment: (n, by) => [`${by} comentou no seu post`, ""],
  approved: () => ["Seu post foi aprovado 🎉", "Ele já está no Feed e rendeu XP."],
  rejected: () => ["Seu post precisa de ajustes", ""],
  forum_ok: () => ["Sua dúvida virou publicação", "O gestor aprovou e já está no fórum."],
  forum_no: () => ["Sua dúvida foi analisada", "Veja a resposta do gestor."],
  prova_nova: () => ["Prova liberada para você", "Abra as Trilhas e faça quando puder."],
  reel: (n, by) => [`${by} publicou um vídeo novo`, ""],
  all: (n, by) => [`${by} avisou a equipe`, ""],
};
export function payloadFor(type, { by, postId, text, link, where }) {
  const f = TEXT[type];
  if (!f) return null;
  const who = by?.nickname ? "@" + by.nickname : (by?.name || "Alguém").split(" ")[0];
  const [title, lead] = f({ where }, who);
  const body = clip([lead, text].filter(Boolean).join(": ").replace(/^: /, ""), 140) || lead;
  const url = link ? link.replace(/^\//, "") : postId ? "#/post/" + postId : "#/";
  return { title, body, url: "/" + url.replace(/^\/?/, ""), tag: `${type}-${postId || "x"}` };
}
export async function sendNotice(uid, type, info) {
  const cat = TYPE_CAT[type];
  const p = payloadFor(type, info);
  if (!cat || !p) return null;
  return Promise.race([sendTo(uid, p, { cat }), new Promise((r) => setTimeout(() => r(null), 4500))]);
}

/* ───── mandar para vários (aviso do gestor, @todos, lembretes) ───── */
export async function subscribedUserIds() {
  const keys = await (await db()).keys({ prefix: "sub:" });
  return [...new Set(keys.map((k) => k.split(":")[1]))];
}
export async function broadcast({ payload, cat = "avisos", loadUser, audience = "todos", exclude = [], force = false }) {
  const ids = (await subscribedUserIds()).filter((id) => !exclude.includes(id));
  let people = 0, devices = 0;
  await pmap(ids, async (id) => {
    if (audience !== "todos") {
      const u = loadUser ? await loadUser(id) : null;
      const staff = u && (u.role === "admin" || u.role === "subadmin");
      if (!u || (audience === "alunos" && staff) || (audience === "gestores" && !staff)) return;
    }
    const r = await sendTo(id, payload, { cat, force });
    if (r.sent) { people++; devices += r.sent; }
  }, 40); // 40 pessoas ao mesmo tempo: 300 pessoas leva poucos segundos
  return { people, devices, reach: ids.length };
}

/* ───── rotas ───── */
export async function handle(ctx, { method, path, body, user, req }) {
  const { json, fail } = ctx;
  if (path === "push/key" && method === "GET") {
    const k = await vapid();
    return json({ key: k?.publicKey || null, enabled: !!k });
  }
  if (path === "push/status" && method === "GET") {
    const [subs, prefs] = await Promise.all([subsOf(user.id), prefsOf(user.id)]);
    return json({ devices: subs.map((s) => ({ label: s.label, at: s.seenAt, endpoint: s.endpoint })), prefs, cats: CATS });
  }
  if (path === "push/subscribe" && method === "POST") {
    if (!(await vapid())) fail(503, "Os avisos no aparelho ainda não estão disponíveis neste servidor.");
    const n = await saveSub(user, body.subscription, body.label, fail);
    await ctx.logEvent(req, "push_ativado", user, { aparelhos: n });
    return json({ ok: true, devices: n });
  }
  if (path === "push/unsubscribe" && method === "POST") { await removeSub(user, body.endpoint); return json({ ok: true }); }
  if (path === "push/prefs" && method === "PUT") return json({ prefs: await savePrefs(user.id, body) });
  if (path === "push/test" && method === "POST") {
    const r = await sendTo(user.id, { title: "Tudo certo por aqui ✅", body: "Os avisos do BRYANT SHOOT chegam neste aparelho.", url: "/#/", tag: "teste" }, { cat: "avisos", force: true });
    if (!r.devices) fail(409, "Este aparelho ainda não tem avisos ativados.");
    return json(r);
  }

  /* gestor: aviso para o time */
  if (path === "admin/push" && method === "GET") {
    if (!can(user, "publicar")) fail(403, "Você não tem permissão para esta área.");
    const s = await db();
    const ids = await subscribedUserIds();
    const devices = (await s.keys({ prefix: "sub:" })).length;
    const hist = (await pmap(await s.keys({ prefix: "bc:", limit: 15 }), (k) => s.get(k))).filter(Boolean);
    return json({ people: ids.length, devices, history: hist });
  }
  if (path === "admin/push/broadcast" && method === "POST") {
    if (!can(user, "publicar")) fail(403, "Você não tem permissão para esta área.");
    const title = clip(body.title, 60), text = clip(body.body, 160);
    if (title.length < 3) fail(400, "Escreva um título com pelo menos 3 letras.");
    const audience = ["todos", "alunos", "gestores"].includes(body.audience) ? body.audience : "todos";
    let link = String(body.url || "").trim();
    if (link && !/^#\/[\w\-/?=&%.]*$/.test(link)) fail(400, "O destino precisa ser uma tela do sistema.");
    if (!link) link = "#/";
    const payload = { title, body: text, url: "/" + link, tag: "aviso-" + now() };
    const [r] = await Promise.all([
      broadcast({ payload, cat: "avisos", loadUser: ctx.loadUser, audience, exclude: [user.id] }),
      notify.notifyAll({ by: user, title, text, link, audience }),
    ]);
    const s = await db();
    await s.set("bc:" + t13(9e12 - now()), { at: now(), by: user.name, title, body: text, audience, people: r.people, devices: r.devices });
    await ctx.logEvent(req, "aviso_enviado", user, { audience, pessoas: r.people });
    return json({ ok: true, ...r });
  }
  return null;
}

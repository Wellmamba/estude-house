// Notificações (o sino): menção por @apelido, @todos (só gestor), comentário no seu post e resultado de aprovação.
// Cada pessoa tem um documento (u:<id>) com as últimas notificações e o horário da última leitura.
// "@todos" não duplica para cada pessoa: vai uma vez para o mural "all", e cada um lê esse mural junto com o seu.
import { store, cached, bust, clone, pmap } from "./db.mjs";
import { newId, can } from "./auth.mjs";
import { now } from "./clock.mjs";
import * as wpush from "./push.mjs";

const KEEP = 40;
const MAX_MENTIONS = 12;
const MENTION = /(?:^|[^\w@.])@([a-z][a-z0-9_.]{2,19})/gi;

const clip = (s, n = 110) => { const t = String(s || "").replace(/\s+/g, " ").trim(); return t.length > n ? t.slice(0, n - 1) + "…" : t; };
// O mural "all" (@todos e avisos) é igual para todo mundo: fica guardado por 8 s na instância.
const doc = async (key) => (key === "all"
  ? clone(await cached("notif:all", 8000, async () => (await (await store("notif")).get("all")) || { items: [], readAt: 0 }))
  : (await (await store("notif")).get(key)) || { items: [], readAt: 0 });

// Quem foi marcado no texto: { ids: [userId], all: boolean }
export async function mentionsIn(text, author) {
  const ns = await store("nicks");
  const nicks = new Set();
  let all = false;
  for (const m of String(text || "").matchAll(MENTION)) {
    let n = m[1].toLowerCase().replace(/[._]+$/, "");
    if (n === "todos" || n === "all") { if (can(author, "publicar")) all = true; continue; }
    nicks.add(n);
    if (nicks.size >= MAX_MENTIONS) break;
  }
  const ids = [];
  for (const n of nicks) {
    const id = await ns.get("n:" + n);
    if (id && id !== author?.id && !ids.includes(id)) ids.push(id);
  }
  return { ids, all };
}

async function push(userId, item) {
  const s = await store("notif");
  const d = (await s.get("u:" + userId)) || { items: [], readAt: 0 };
  d.items = [item, ...d.items].slice(0, KEEP);
  await s.set("u:" + userId, d);
}

const base = (type, by, postId, text, link) => ({ id: newId("n_"), type, at: now(), by: by?.id || null, postId: postId || null, text: clip(text), ...(link ? { link } : {}) });

// Avisa quem foi marcado. `where`: "post" ou "comment". Devolve os ids avisados (para não avisar duas vezes).
// only (Set de ids): post de comunidade avisa só quem pode ver; @todos não vale ali.
export async function notifyMentions({ text, author, postId, where, skip = [], only = null }) {
  const m = await mentionsIn(text, author);
  const ids = only ? m.ids.filter((i) => only.has(i)) : m.ids, all = only ? false : m.all;
  const sent = [];
  if (all) {
    const s = await store("notif");
    const d = (await s.get("all")) || { items: [] };
    d.items = [{ ...base("all", author, postId, text), where }, ...d.items].slice(0, KEEP);
    await s.set("all", d); bust("notif:all");
    const p = wpush.payloadFor("all", { by: author, postId, text });
    if (p) await Promise.race([wpush.broadcast({ payload: p, cat: "avisos", exclude: [author?.id] }), new Promise((r) => setTimeout(r, 5000))]).catch(() => {});
  }
  for (const id of ids) {
    if (skip.includes(id)) continue;
    await push(id, { ...base("mention", author, postId, text), where });
    await wpush.sendNotice(id, "mention", { by: author, postId, text, where });
    sent.push(id);
  }
  return { sent, all };
}

export async function notifyUser(userId, type, by, postId, text, link) {
  await push(userId, base(type, by, postId, text, link));
  await wpush.sendNotice(userId, type, { by, postId, text, link });
}

// Aviso do gestor para o time: vai para o mural "all" (o sino de todos) e, se a pessoa ativou, para o aparelho.
export async function notifyAll({ by, title, text, link, audience = "todos" }) {
  const s = await store("notif");
  const d = (await s.get("all")) || { items: [] };
  d.items = [{ ...base("all", by, null, [title, text].filter(Boolean).join(": "), link), ...(audience !== "todos" ? { aud: audience } : {}) }, ...d.items].slice(0, KEEP);
  await s.set("all", d); bust("notif:all");
}
const isStaffRole = (u) => u?.role === "admin" || u?.role === "subadmin";

// Post de comunidade: cada time tem o seu mural (t:<time>), então não disputa lugar com os avisos de todos.
// `ids` são as pessoas do time (menos quem postou); recebem também o aviso no aparelho, se tiverem ativado.
export async function notifyTeam({ by, team, ids, postId, text }) {
  const s = await store("notif");
  const d = (await s.get("t:" + team.id)) || { items: [] };
  d.items = [{ ...base("community", by, postId, text), where: team.name }, ...d.items].slice(0, KEEP);
  await s.set("t:" + team.id, d);
  await Promise.race([
    pmap(ids, (id) => wpush.sendNotice(id, "community", { by, postId, text, where: team.name }).catch(() => {}), 16),
    new Promise((r) => setTimeout(r, 6000)),
  ]);
}

// Lista da pessoa: as dela + @todos (a partir de quando ela entrou), mais novas primeiro.
export async function listFor(user, limit = 30) {
  const [mine, all, team] = await Promise.all([doc("u:" + user.id), doc("all"), user.teamId ? doc("t:" + user.teamId) : { items: [] }]);
  const since = user.createdAt || 0;
  const items = [...mine.items, ...team.items.filter((i) => i.at >= since && i.by !== user.id), ...all.items.filter((i) => i.at >= since && i.by !== user.id && (!i.aud || (i.aud === "gestores") === isStaffRole(user)))].sort((a, b) => b.at - a.at).slice(0, limit);
  return { items: items.map((i) => ({ ...i, unread: i.at > (mine.readAt || 0) })), readAt: mine.readAt || 0 };
}
export async function unreadCount(user) {
  const { items } = await listFor(user, KEEP);
  return items.filter((i) => i.unread).length;
}
export async function markRead(user) {
  const s = await store("notif");
  const d = (await s.get("u:" + user.id)) || { items: [], readAt: 0 };
  d.readAt = now();
  await s.set("u:" + user.id, d);
}
export async function forget(userId) { try { await (await store("notif")).delete("u:" + userId); } catch {} }

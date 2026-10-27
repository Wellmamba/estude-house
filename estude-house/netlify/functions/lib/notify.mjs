// Notificações (o sino): avisos da equipe, prova liberada e resposta às dúvidas do fórum.
// Cada pessoa tem um documento (u:<id>) com as últimas notificações e o horário da última leitura.
// "@todos" não duplica para cada pessoa: vai uma vez para o mural "all", e cada um lê esse mural junto com o seu.
import { store, cached, bust, clone } from "./db.mjs";
import { newId } from "./auth.mjs";
import { now } from "./clock.mjs";
import * as wpush from "./push.mjs";

const KEEP = 40;

const clip = (s, n = 110) => { const t = String(s || "").replace(/\s+/g, " ").trim(); return t.length > n ? t.slice(0, n - 1) + "…" : t; };
// O mural "all" (@todos e avisos) é igual para todo mundo: fica guardado por 8 s na instância.
const doc = async (key) => (key === "all"
  ? clone(await cached("notif:all", 8000, async () => (await (await store("notif")).get("all")) || { items: [], readAt: 0 }))
  : (await (await store("notif")).get(key)) || { items: [], readAt: 0 });

async function push(userId, item) {
  const s = await store("notif");
  const d = (await s.get("u:" + userId)) || { items: [], readAt: 0 };
  d.items = [item, ...d.items].slice(0, KEEP);
  await s.set("u:" + userId, d);
}

const base = (type, by, postId, text, link) => ({ id: newId("n_"), type, at: now(), by: by?.id || null, postId: postId || null, text: clip(text), ...(link ? { link } : {}) });

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

// Lista da pessoa: as dela + avisos da equipe (a partir de quando ela entrou), mais novas primeiro.
export async function listFor(user, limit = 30) {
  const [mine, all] = await Promise.all([doc("u:" + user.id), doc("all")]);
  const since = user.createdAt || 0;
  const items = [...mine.items, ...all.items.filter((i) => i.at >= since && i.by !== user.id && (!i.aud || (i.aud === "gestores") === isStaffRole(user)))].sort((a, b) => b.at - a.at).slice(0, limit);
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

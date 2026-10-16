// Destaques: stories fixos (não somem em 24 horas). Só gestores publicam; o aluno assiste e ganha XP.
// Chaves: store "hl": d:<tempo invertido>:<id> (o destaque) e ix:<id>; store "hlseen": <pessoa>:<id> (quem já assistiu até o fim).
import { store, pmap } from "./db.mjs";
import { newId, can } from "./auth.mjs";
import { now } from "./clock.mjs";
import * as eng from "./engage.mjs";
import { sanitizeMedia, cleanMultiline, publishFor } from "./social.mjs";

const MAX_TITLE = 24, MAX_SLIDES = 20, MAX_TEXT = 280, SHOW = 30;
const MOODS = ["gold", "violet", "pink", "mint", "dark"];
const t13 = (n) => String(n).padStart(13, "0");
const inv = (ts) => t13(9e12 - ts);
const hl = () => store("hl");
const seenStore = () => store("hlseen");

async function find(id) {
  const s = await hl();
  const ix = await s.get("ix:" + id);
  if (!ix) return null;
  const doc = await s.get(ix.k);
  return doc ? { doc, key: ix.k } : null;
}

async function seenIds(userId) {
  const keys = await (await seenStore()).keys({ prefix: userId + ":" });
  return new Set(keys.map((k) => k.slice(userId.length + 1)));
}

async function resetSeen(id, keepUserId) {
  const ss = await seenStore();
  const keys = (await ss.keys({})).filter((k) => k.endsWith(":" + id) && !k.startsWith(keepUserId + ":"));
  await pmap(keys, (k) => ss.delete(k));
}

/* quantos destaques novos (ainda não assistidos até o fim) a pessoa tem */
export async function unseenCount(user) {
  const [keys, seen] = await Promise.all([(await hl()).keys({ prefix: "d:", limit: SHOW }), seenIds(user.id)]);
  return keys.filter((k) => !seen.has(k.split(":")[2])).length;
}

function sanitizeSlides(list, fail, cloud) {
  if (!Array.isArray(list) || !list.length) fail(400, "Coloque pelo menos um card no destaque.");
  if (list.length > MAX_SLIDES) fail(400, `No máximo ${MAX_SLIDES} cards por destaque.`);
  return list.map((s, i) => {
    const text = cleanMultiline(s?.text, MAX_TEXT);
    const raw = s?.media ? [s.media] : [];
    const media = sanitizeMedia(raw, fail).filter((m) => m.type === "image" || m.type === "video")[0];
    if (raw.length && !media) fail(400, `O card ${i + 1} aceita só foto ou vídeo.`);
    if (!text && !media) fail(400, `O card ${i + 1} está vazio: escreva um texto ou coloque uma foto ou vídeo.`);
    const out = { mood: MOODS.includes(s?.mood) ? s.mood : "violet" };
    if (text) out.text = text;
    if (media) out.media = { type: media.type, url: media.url };
    return out;
  });
}

export async function handle(ctx, { req, method, path, body, user }) {
  const { json, fail } = ctx;
  const parts = path.split("/");
  if (parts[0] !== "destaques") return null;
  const isAdmin = can(user, "publicar");

  /* barra de destaques: os não assistidos primeiro */
  if (path === "destaques" && method === "GET") {
    const s = await hl();
    const [keys, seen] = await Promise.all([s.keys({ prefix: "d:", limit: SHOW }), seenIds(user.id)]);
    const docs = (await pmap(keys, (k) => s.get(k))).filter(Boolean);
    const au = new Map();
    for (const id of new Set(docs.map((d) => d.authorId))) {
      const u = await ctx.loadUser(id);
      au.set(id, u ? { id: u.id, name: u.name, nickname: u.nickname || null, avatar: u.avatar || null, role: u.role } : { id, name: "Gestor", nickname: null, avatar: null, role: "admin" });
    }
    const items = docs.map((d) => {
      const first = d.slides[0] || {};
      // a bolinha mostra a foto de perfil de quem postou (cover só serve de reserva quando a pessoa não tem foto)
      return { id: d.id, title: d.title, author: au.get(d.authorId), createdAt: d.createdAt, count: d.slides.length, seen: seen.has(d.id), cover: first.media?.type === "image" ? first.media.url : null, mood: first.mood || "violet", hasVideo: d.slides.some((x) => x.media?.type === "video") };
    });
    items.sort((a, b) => (a.seen === b.seen ? b.createdAt - a.createdAt : a.seen ? 1 : -1));
    return json({ items, unseen: items.filter((x) => !x.seen).length, canPost: isAdmin, maxSlides: MAX_SLIDES, maxTitle: MAX_TITLE, maxText: MAX_TEXT });
  }

  /* publicar (só gestor) */
  if (path === "destaques" && method === "POST") {
    if (!isAdmin) fail(403, "Só gestores publicam destaques.");
    const title = String(body.title ?? "").replace(/\s+/g, " ").trim().slice(0, MAX_TITLE);
    if (title.length < 2) fail(400, "Dê um nome curto ao destaque (ele aparece embaixo da bolinha).");
    const slides = sanitizeSlides(body.slides, fail);
    const t = now();
    const d = { id: newId("hl_"), authorId: user.id, title, slides, createdAt: t };
    const k = `d:${inv(t)}:${d.id}`;
    const s = await hl();
    await Promise.all([s.set(k, d), s.set("ix:" + d.id, { k }), (await seenStore()).set(`${user.id}:${d.id}`, { at: t, own: true })]);
    await ctx.logEvent(req, "destaque_publicado", user, { destaque: d.id, titulo: title, cards: slides.length });
    return json({ item: { id: d.id, title, count: slides.length } }, 201);
  }

  const id = parts[1];
  if (!id) return null;

  /* assistir: devolve os cards */
  if (parts.length === 2 && method === "GET") {
    const f = await find(id);
    if (!f) fail(404, "Esse destaque não existe mais.");
    const u = await ctx.loadUser(f.doc.authorId);
    return json({ destaque: { id: f.doc.id, title: f.doc.title, createdAt: f.doc.createdAt, slides: f.doc.slides, author: u ? { id: u.id, name: u.name, nickname: u.nickname || null, avatar: u.avatar || null, role: u.role } : null }, seen: (await seenIds(user.id)).has(id) });
  }

  /* marcar como assistido até o fim (rende XP uma única vez por destaque) */
  if (parts[2] === "seen" && method === "POST") {
    const f = await find(id);
    if (!f) fail(404, "Esse destaque não existe mais.");
    const ss = await seenStore();
    const k = `${user.id}:${id}`;
    if (await ss.get(k)) return json({ ok: true, gained: 0, goals: [] });
    await ss.set(k, { at: now() });
    const r = f.doc.authorId === user.id ? { gained: 0, goals: [] } : await eng.record(user, "destaque", "Assistiu um destaque");
    return json({ ok: true, gained: r.gained, goals: r.goals });
  }

  /* editar (só gestor): troca o nome e a lista de cards inteira. Serve para acrescentar, tirar e reordenar cards. */
  if (parts.length === 2 && method === "PUT") {
    if (!isAdmin) fail(403, "Só gestores editam destaques.");
    const f = await find(id);
    if (!f) fail(404, "Esse destaque não existe mais.");
    const title = String(body.title ?? f.doc.title).replace(/\s+/g, " ").trim().slice(0, MAX_TITLE);
    if (title.length < 2) fail(400, "Dê um nome curto ao destaque (ele aparece embaixo da bolinha).");
    const slides = sanitizeSlides(body.slides, fail);
    const doc = { ...f.doc, title, slides, editedAt: now() };
    await (await hl()).set(f.key, doc);
    // quem já tinha assistido volta a ver como novo quando entram cards novos
    if (slides.length > f.doc.slides.length) await resetSeen(id, user.id);
    await ctx.logEvent(req, "destaque_editado", user, { destaque: id, titulo: title, cards: slides.length });
    return json({ item: { id, title, count: slides.length } });
  }

  /* vira post do feed e sai dos destaques. body.slide = número do card ("all" = destaque inteiro) */
  if (parts[2] === "to-feed" && method === "POST") {
    if (!isAdmin) fail(403, "Só gestores transformam destaques em post.");
    const f = await find(id);
    if (!f) fail(404, "Esse destaque não existe mais.");
    const all = body.slide === "all";
    const n = Number(body.slide);
    if (!all && !(Number.isInteger(n) && n >= 0 && n < f.doc.slides.length)) fail(400, "Card inválido.");
    const picked = all ? f.doc.slides : [f.doc.slides[n]];
    const media = picked.map((s) => s.media).filter(Boolean);
    if (media.length > 4) fail(400, "Um post aceita até 4 fotos ou vídeos. Transforme os cards em partes (um por vez).");
    const text = picked.map((s) => s.text).filter(Boolean).join("\n\n");
    if (!text && !media.length) fail(400, "Esse card está vazio.");
    const authorId = (await ctx.loadUser(f.doc.authorId)) ? f.doc.authorId : user.id;
    const post = await publishFor(authorId, { text, media });
    const s = await hl();
    const rest = all ? [] : f.doc.slides.filter((_, k) => k !== n);
    if (rest.length) await s.set(f.key, { ...f.doc, slides: rest, editedAt: now() });
    else await Promise.all([s.delete(f.key), s.delete("ix:" + id)]);
    await ctx.logEvent(req, "destaque_virou_post", user, { destaque: id, titulo: f.doc.title, post: post.id, cards: picked.length });
    return json({ ok: true, post: post.id, removed: !rest.length, left: rest.length });
  }

  if (parts.length === 2 && method === "DELETE") {
    if (!isAdmin) fail(403, "Só gestores apagam destaques.");
    const f = await find(id);
    if (!f) fail(404, "Esse destaque não existe mais.");
    const s = await hl();
    await Promise.all([s.delete(f.key), s.delete("ix:" + id)]);
    await ctx.logEvent(req, "destaque_apagado", user, { destaque: id, titulo: f.doc.title });
    return json({ ok: true });
  }
  return null;
}

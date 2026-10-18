// Destaques: stories que o gestor publica; o aluno assiste e ganha XP. O gestor escolhe quanto tempo o destaque fica no ar
// (24 horas, 1 semana ou para sempre) e pode pôr uma enquete em qualquer card.
// Chaves: store "hl": d:<tempo invertido>:<id> (o destaque) e ix:<id>; store "hlseen": <pessoa>:<id> (quem já assistiu até o fim);
// store "hlpoll": <enquete>:<pessoa>:<opção> (o voto; ler só as chaves já basta para contar).
import { store, pmap } from "./db.mjs";
import { newId, can } from "./auth.mjs";
import { now } from "./clock.mjs";
import * as eng from "./engage.mjs";
import { sanitizeMedia, cleanMultiline, publishFor } from "./social.mjs";

const MAX_TITLE = 24, MAX_SLIDES = 20, MAX_TEXT = 280, SHOW = 30, SCAN = 45;
const MAX_POLL_Q = 90, MAX_POLL_OPT = 40, MIN_OPTS = 2, MAX_OPTS = 4;
const HOUR = 3600e3;
const DURATIONS = { "24h": 24 * HOUR, "7d": 7 * 24 * HOUR, forever: 0 };
const MOODS = ["gold", "violet", "pink", "mint", "dark"];
const t13 = (n) => String(n).padStart(13, "0");
const inv = (ts) => t13(9e12 - ts);
const hl = () => store("hl");
const seenStore = () => store("hlseen");
const voteStore = () => store("hlpoll");
const oneLine = (v, n) => String(v ?? "").replace(/\s+/g, " ").trim().slice(0, n);

/* no ar: sem prazo, ou o prazo ainda não chegou */
const isLive = (d, t = now()) => !d.expiresAt || d.expiresAt > t;
const expiresFor = (dur, t) => (DURATIONS[dur] ? t + DURATIONS[dur] : null);
function parseDuration(v, fail, fallback) {
  if (v === undefined || v === null || v === "") return fallback;
  if (!(v in DURATIONS)) fail(400, "Escolha quanto tempo o destaque fica no ar: 24 horas, 1 semana ou para sempre.");
  return v;
}

/* Os destaques mais novos ficam guardados na memória por alguns segundos: a barra do Feed e o selo "novo" (/me)
   perguntam o tempo todo e não precisam ler tudo de novo a cada vez. Qualquer mudança aqui zera o guardado. */
const cache = { at: 0, docs: [], busy: null };
const bust = () => { cache.at = 0; };
async function recent() {
  if (Date.now() - cache.at < 8000 && cache.docs) return cache.docs;
  if (cache.busy) return cache.busy;
  cache.busy = (async () => {
    const s = await hl();
    const keys = await s.keys({ prefix: "d:", limit: SCAN });
    const docs = (await pmap(keys, (k) => s.get(k))).filter(Boolean);
    cache.docs = docs; cache.at = Date.now();
    return docs;
  })().finally(() => { cache.busy = null; });
  return cache.busy;
}

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
  const [docs, seen] = await Promise.all([recent(), seenIds(user.id)]);
  return docs.filter((d) => isLive(d) && !seen.has(d.id)).slice(0, SHOW).length;
}

function sanitizePoll(p, fail, i) {
  if (p == null) return null;
  const q = oneLine(p.q, MAX_POLL_Q);
  if (q.length < 3) fail(400, `Escreva a pergunta da enquete do card ${i + 1}.`);
  const options = (Array.isArray(p.options) ? p.options : []).map((o) => oneLine(o, MAX_POLL_OPT)).filter(Boolean);
  if (options.length < MIN_OPTS) fail(400, `A enquete do card ${i + 1} precisa de pelo menos ${MIN_OPTS} opções.`);
  if (options.length > MAX_OPTS) fail(400, `A enquete do card ${i + 1} aceita no máximo ${MAX_OPTS} opções.`);
  if (new Set(options.map((o) => o.toLowerCase())).size !== options.length) fail(400, `A enquete do card ${i + 1} tem opções repetidas.`);
  return { q, options, mode: p.mode === "secret" ? "secret" : "open" };
}

// prev = cards que já estavam salvos: quem mantém o id (e a mesma enquete) mantém também os votos.
function sanitizeSlides(list, fail, prev = []) {
  if (!Array.isArray(list) || !list.length) fail(400, "Coloque pelo menos um card no destaque.");
  if (list.length > MAX_SLIDES) fail(400, `No máximo ${MAX_SLIDES} cards por destaque.`);
  const before = new Map(prev.filter((x) => x.id).map((x) => [x.id, x]));
  const used = new Set();
  return list.map((s, i) => {
    const text = cleanMultiline(s?.text, MAX_TEXT);
    const raw = s?.media ? [s.media] : [];
    const media = sanitizeMedia(raw, fail).filter((m) => m.type === "image" || m.type === "video")[0];
    if (raw.length && !media) fail(400, `O card ${i + 1} aceita só foto ou vídeo.`);
    const poll = sanitizePoll(s?.poll, fail, i);
    if (!text && !media && !poll) fail(400, `O card ${i + 1} está vazio: escreva um texto, ponha uma foto ou vídeo, ou crie uma enquete.`);
    const old = typeof s?.id === "string" && before.has(s.id) && !used.has(s.id) ? before.get(s.id) : null;
    const id = old ? old.id : newId("sl_");
    used.add(id);
    const out = { id, mood: MOODS.includes(s?.mood) ? s.mood : "violet" };
    if (text) out.text = text;
    if (media) out.media = { type: media.type, url: media.url };
    if (poll) {
      const same = old?.poll && old.poll.q === poll.q && old.poll.mode === poll.mode && JSON.stringify(old.poll.options) === JSON.stringify(poll.options);
      out.poll = { ...poll, pid: same ? old.poll.pid : newId("pl_") };
    }
    return out;
  });
}

const pollIds = (slides) => (slides || []).map((x) => x.poll?.pid).filter(Boolean);
async function purgeVotes(pids) {
  if (!pids.length) return;
  const vs = await voteStore();
  await pmap(pids, async (pid) => { const ks = await vs.keys({ prefix: pid + ":" }); await pmap(ks, (k) => vs.delete(k)); });
}

/* o card como o aluno recebe: a enquete traz as opções, o voto dele e (quando pode) o resultado. O id interno da enquete não sai. */
async function slideView(slide, user, admin) {
  const { poll, ...rest } = slide;
  if (!poll) return rest;
  const keys = await (await voteStore()).keys({ prefix: poll.pid + ":" });
  const counts = poll.options.map(() => 0);
  let mine = null;
  for (const k of keys) {
    const [, uid, oi] = k.split(":");
    if (counts[oi] === undefined) continue;
    counts[oi]++;
    if (uid === user.id) mine = Number(oi);
  }
  const total = counts.reduce((a, b) => a + b, 0);
  const show = admin || (poll.mode === "open" && mine !== null);
  return {
    ...rest,
    poll: {
      q: poll.q, mode: poll.mode, mine,
      total: show ? total : undefined,
      options: poll.options.map((t, oi) => (show ? { t, n: counts[oi], pct: total ? Math.round((counts[oi] / total) * 100) : 0 } : { t })),
    },
  };
}

export async function handle(ctx, { req, method, path, body, user }) {
  const { json, fail } = ctx;
  const parts = path.split("/");
  if (parts[0] !== "destaques") return null;
  const isAdmin = can(user, "publicar");

  /* barra de destaques: os não assistidos primeiro */
  if (path === "destaques" && method === "GET") {
    const [all, seen] = await Promise.all([recent(), seenIds(user.id)]);
    // aluno só vê o que está no ar; gestor também vê os vencidos (marcados), para poder renovar ou apagar
    const docs = all.filter((d) => isAdmin || isLive(d)).slice(0, SHOW);
    const au = new Map();
    for (const id of new Set(docs.map((d) => d.authorId))) {
      const u = await ctx.loadUser(id);
      au.set(id, u ? { id: u.id, name: u.name, nickname: u.nickname || null, avatar: u.avatar || null, role: u.role } : { id, name: "Gestor", nickname: null, avatar: null, role: "admin" });
    }
    const items = docs.map((d) => {
      const first = d.slides[0] || {};
      // a bolinha mostra a foto de perfil de quem postou (cover só serve de reserva quando a pessoa não tem foto)
      return { id: d.id, title: d.title, author: au.get(d.authorId), createdAt: d.createdAt, expiresAt: d.expiresAt || null, expired: !isLive(d), hasPoll: d.slides.some((x) => x.poll), count: d.slides.length, seen: seen.has(d.id), cover: first.media?.type === "image" ? first.media.url : null, mood: first.mood || "violet", hasVideo: d.slides.some((x) => x.media?.type === "video") };
    });
    items.sort((a, b) => (a.expired !== b.expired ? (a.expired ? 1 : -1) : a.seen === b.seen ? b.createdAt - a.createdAt : a.seen ? 1 : -1));
    return json({ items, unseen: items.filter((x) => !x.seen && !x.expired).length, canPost: isAdmin, maxSlides: MAX_SLIDES, maxTitle: MAX_TITLE, maxText: MAX_TEXT, poll: { maxQuestion: MAX_POLL_Q, maxOption: MAX_POLL_OPT, minOptions: MIN_OPTS, maxOptions: MAX_OPTS } });
  }

  /* publicar (só gestor) */
  if (path === "destaques" && method === "POST") {
    if (!isAdmin) fail(403, "Só gestores publicam destaques.");
    const title = String(body.title ?? "").replace(/\s+/g, " ").trim().slice(0, MAX_TITLE);
    if (title.length < 2) fail(400, "Dê um nome curto ao destaque (ele aparece embaixo da bolinha).");
    const slides = sanitizeSlides(body.slides, fail);
    const duration = parseDuration(body.duration, fail, "forever");
    const t = now();
    const d = { id: newId("hl_"), authorId: user.id, title, slides, createdAt: t };
    if (DURATIONS[duration]) d.expiresAt = expiresFor(duration, t);
    const k = `d:${inv(t)}:${d.id}`;
    const s = await hl();
    await Promise.all([s.set(k, d), s.set("ix:" + d.id, { k }), (await seenStore()).set(`${user.id}:${d.id}`, { at: t, own: true })]);
    bust();
    await ctx.logEvent(req, "destaque_publicado", user, { destaque: d.id, titulo: title, cards: slides.length, duracao: duration, enquetes: pollIds(slides).length });
    return json({ item: { id: d.id, title, count: slides.length, expiresAt: d.expiresAt || null } }, 201);
  }

  const id = parts[1];
  if (!id) return null;

  /* assistir: devolve os cards */
  if (parts.length === 2 && method === "GET") {
    const f = await find(id);
    if (!f) fail(404, "Esse destaque não existe mais.");
    if (!isAdmin && !isLive(f.doc)) fail(404, "Esse destaque saiu do ar.");
    const u = await ctx.loadUser(f.doc.authorId);
    const slides = await pmap(f.doc.slides, (x) => slideView(x, user, isAdmin), 4);
    return json({ destaque: { id: f.doc.id, title: f.doc.title, createdAt: f.doc.createdAt, expiresAt: f.doc.expiresAt || null, expired: !isLive(f.doc), slides, author: u ? { id: u.id, name: u.name, nickname: u.nickname || null, avatar: u.avatar || null, role: u.role } : null }, seen: (await seenIds(user.id)).has(id) });
  }

  /* marcar como assistido até o fim (rende XP uma única vez por destaque) */
  if (parts[2] === "seen" && method === "POST") {
    const f = await find(id);
    if (!f || (!isAdmin && !isLive(f.doc))) fail(404, "Esse destaque não existe mais.");
    const ss = await seenStore();
    const k = `${user.id}:${id}`;
    if (await ss.get(k)) return json({ ok: true, gained: 0, goals: [] });
    await ss.set(k, { at: now() });
    const r = f.doc.authorId === user.id ? { gained: 0, goals: [] } : await eng.record(user, "destaque", "Assistiu um destaque");
    return json({ ok: true, gained: r.gained, goals: r.goals });
  }

  /* votar na enquete de um card: uma resposta por pessoa, sem trocar depois */
  if (parts[2] === "vote" && method === "POST") {
    const f = await find(id);
    if (!f || (!isAdmin && !isLive(f.doc))) fail(404, "Esse destaque saiu do ar.");
    const slide = f.doc.slides.find((x) => x.id === body.slide);
    if (!slide?.poll) fail(404, "Esse card não tem enquete.");
    if (!isLive(f.doc)) fail(409, "Esse destaque já saiu do ar.");
    const oi = Number(body.o);
    if (!Number.isInteger(oi) || oi < 0 || oi >= slide.poll.options.length) fail(400, "Opção inválida.");
    const vs = await voteStore();
    if ((await vs.keys({ prefix: `${slide.poll.pid}:${user.id}:` })).length) fail(409, "Você já votou nessa enquete.");
    await vs.set(`${slide.poll.pid}:${user.id}:${oi}`, { at: now() });
    return json({ poll: (await slideView(slide, user, isAdmin)).poll });
  }

  /* editar (só gestor): troca o nome e a lista de cards inteira. Serve para acrescentar, tirar e reordenar cards. */
  if (parts.length === 2 && method === "PUT") {
    if (!isAdmin) fail(403, "Só gestores editam destaques.");
    const f = await find(id);
    if (!f) fail(404, "Esse destaque não existe mais.");
    const title = String(body.title ?? f.doc.title).replace(/\s+/g, " ").trim().slice(0, MAX_TITLE);
    if (title.length < 2) fail(400, "Dê um nome curto ao destaque (ele aparece embaixo da bolinha).");
    const slides = sanitizeSlides(body.slides, fail, f.doc.slides);
    const duration = parseDuration(body.duration, fail, null); // sem o campo = mantém o prazo de antes; com ele, conta a partir de agora
    const doc = { ...f.doc, title, slides, editedAt: now() };
    if (duration) { if (DURATIONS[duration]) doc.expiresAt = expiresFor(duration, now()); else delete doc.expiresAt; }
    await (await hl()).set(f.key, doc);
    bust();
    const keepPids = new Set(pollIds(slides));
    await purgeVotes(pollIds(f.doc.slides).filter((p) => !keepPids.has(p)));
    // quem já tinha assistido volta a ver como novo quando entram cards novos
    if (slides.length > f.doc.slides.length) await resetSeen(id, user.id);
    await ctx.logEvent(req, "destaque_editado", user, { destaque: id, titulo: title, cards: slides.length, ...(duration ? { duracao: duration } : {}) });
    return json({ item: { id, title, count: slides.length, expiresAt: doc.expiresAt || null } });
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
    const polls = picked.map((s) => s.poll).filter(Boolean);
    if (polls.length > 1) fail(400, "Um post aceita uma enquete só. Transforme os cards em partes (um por vez).");
    const poll = polls[0] ? { mode: polls[0].mode, closed: false, questions: [{ text: polls[0].q, options: polls[0].options }] } : undefined;
    if (!text && !media.length && !poll) fail(400, "Esse card está vazio.");
    const authorId = (await ctx.loadUser(f.doc.authorId)) ? f.doc.authorId : user.id;
    const post = await publishFor(authorId, { text, media, poll });
    const s = await hl();
    const rest = all ? [] : f.doc.slides.filter((_, k) => k !== n);
    if (rest.length) await s.set(f.key, { ...f.doc, slides: rest, editedAt: now() });
    else await Promise.all([s.delete(f.key), s.delete("ix:" + id)]);
    bust();
    await purgeVotes(pollIds(picked));
    await ctx.logEvent(req, "destaque_virou_post", user, { destaque: id, titulo: f.doc.title, post: post.id, cards: picked.length });
    return json({ ok: true, post: post.id, removed: !rest.length, left: rest.length });
  }

  if (parts.length === 2 && method === "DELETE") {
    if (!isAdmin) fail(403, "Só gestores apagam destaques.");
    const f = await find(id);
    if (!f) fail(404, "Esse destaque não existe mais.");
    const s = await hl();
    await Promise.all([s.delete(f.key), s.delete("ix:" + id)]);
    bust();
    await purgeVotes(pollIds(f.doc.slides));
    await ctx.logEvent(req, "destaque_apagado", user, { destaque: id, titulo: f.doc.title });
    return json({ ok: true });
  }
  return null;
}

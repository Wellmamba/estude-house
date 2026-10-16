// Feed, hype, comentários, moderação, apelido (@), perfil, busca e envio de arquivos.
// Chaves: feed/pub:<tempo invertido>:<id> (publicados, mais novos primeiro), feed/pend:<autor>:<tempo>:<id> (aguardando),
// feed/rej:<autor>:<tempo>:<id> (recusados), feed/ix:<id> (onde está cada post), feed/au:<autor>:<tempo invertido>:<id> (posts por pessoa),
// hypes/<post>:<pessoa>, comments/<post>:<tempo>-<sufixo>, nicks/n:<apelido>.
import crypto from "node:crypto";
import { store, pmap } from "./db.mjs";
import { newId, isLive } from "./auth.mjs";
import { now } from "./clock.mjs";
import * as eng from "./engage.mjs";
import * as mod from "./moderation.mjs";
import * as notify from "./notify.mjs";
import { match, snippet } from "./textsearch.mjs";
import * as forum from "./forum.mjs";

const MAX_TEXT = 2000, MAX_COMMENT = 500, MAX_MEDIA = 4, PAGE = 12, MAX_PENDING = 3;
const MAX_TAGS = 30, MAX_PINNED = 3, MAX_QUESTIONS = 6, MAX_OPTIONS = 8;
const TAG_COLORS = ["gold", "purple", "green", "red", "blue", "orange", "pink", "gray"];
const BLOCKED_MSG = "Não foi possível enviar: o texto tem linguagem ofensiva. Reescreva com respeito.";
const RESERVED = new Set(["admin", "adm", "mamba", "suporte", "gestor", "gestora", "estude", "house", "root", "todos", "all", "everyone", "eu", "voce", "ninguem", "moderador"]);
const MEDIA_TYPES = ["image", "video", "file", "link"];

const t13 = (n) => String(n).padStart(13, "0");
const inv = (ts) => t13(9e12 - ts);

/* ---------- cache curto por instância (só para leituras repetidas em rajada) ---------- */
const MEMO = new Map();
const TTL = process.env.LOCAL_DB ? 0 : 5000;
async function memo(key, ttl, fn) {
  const t = process.env.LOCAL_DB ? 0 : ttl;
  const hit = MEMO.get(key);
  if (t && hit && hit.at > Date.now() - t) return hit.v;
  const v = await fn();
  if (t) MEMO.set(key, { at: Date.now(), v });
  return v;
}
const bust = (prefix) => { for (const k of MEMO.keys()) if (k.startsWith(prefix)) MEMO.delete(k); };

/* ---------- envio de arquivos (Cloudinary) ---------- */
const cloud = () => ({ name: process.env.CLOUDINARY_CLOUD_NAME || "", key: process.env.CLOUDINARY_API_KEY || "", secret: process.env.CLOUDINARY_API_SECRET || "" });
export const uploadsOn = () => { const c = cloud(); return !!(c.name && c.key && c.secret); };

export function sanitizeMedia(list, fail) {
  if (list == null) return [];
  if (!Array.isArray(list)) fail(400, "Anexos inválidos.");
  if (list.length > MAX_MEDIA) fail(400, `No máximo ${MAX_MEDIA} anexos por post.`);
  return list.map((m) => {
    const type = String(m?.type || "");
    if (!MEDIA_TYPES.includes(type)) fail(400, "Tipo de anexo inválido.");
    const raw = String(m.url || "").trim();
    let u;
    try { u = new URL(raw); } catch { fail(400, "Um dos links é inválido."); }
    if (raw.length > 700) fail(400, "Link longo demais.");
    if (type === "link") {
      if (!["http:", "https:"].includes(u.protocol)) fail(400, "Use links que começam com http ou https.");
    } else {
      if (!uploadsOn()) fail(400, "O envio de arquivos ainda não está configurado.");
      if (u.protocol !== "https:" || u.hostname !== "res.cloudinary.com" || !u.pathname.startsWith(`/${cloud().name}/`)) fail(400, "Arquivo não reconhecido. Envie pelo botão de anexar.");
    }
    const out = { type, url: u.href };
    if (m.name) out.name = String(m.name).replace(/[\u0000-\u001f]/g, " ").trim().slice(0, 120);
    if (Number.isFinite(Number(m.bytes))) out.bytes = Math.max(0, Math.round(Number(m.bytes)));
    return out;
  });
}

function signUpload(user) {
  const c = cloud();
  const params = { folder: "estude-house", timestamp: Math.floor(Date.now() / 1000) };
  const toSign = Object.keys(params).sort().map((k) => `${k}=${params[k]}`).join("&");
  const signature = crypto.createHash("sha1").update(toSign + c.secret).digest("hex");
  return { cloudName: c.name, apiKey: c.key, ...params, signature, url: `https://api.cloudinary.com/v1_1/${c.name}/auto/upload` };
}

/* ---------- textos ---------- */
export const cleanMultiline = (s, max) => String(s ?? "").replace(/\r\n?/g, "\n").replace(/[\u0000-\u0009\u000b-\u001f]/g, " ").replace(/\n{3,}/g, "\n\n").trim().slice(0, max);

/* ---------- gravação dos posts ---------- */
const feed = () => store("feed");
const pubKey = (d) => `pub:${inv(d.publishedAt)}:${d.id}`;
const pendKey = (d) => `pend:${d.authorId}:${t13(d.createdAt)}:${d.id}`;
const rejKey = (d) => `rej:${d.authorId}:${t13(d.createdAt)}:${d.id}`;
const auKey = (d) => `au:${d.authorId}:${inv(d.publishedAt)}:${d.id}`;

// Chaves extras de um post publicado: por autor (au), por tag (tg) e fixados (pin).
const tgKey = (d) => `tg:${d.tag}:${inv(d.publishedAt)}:${d.id}`;
const pinKey = (d) => `pin:${inv(d.pinnedAt)}:${d.id}`;
const extraKeys = (d) => (d.status !== "published" ? [] : [auKey(d), d.tag ? tgKey(d) : null, d.pinnedAt ? pinKey(d) : null].filter(Boolean));

async function putPost(d, kind) {
  const f = await feed();
  const k = kind === "pub" ? pubKey(d) : kind === "pend" ? pendKey(d) : rejKey(d);
  await Promise.all([
    f.set(k, d),
    f.set("ix:" + d.id, { k, st: d.status, a: d.authorId }),
    ...(kind === "pub" ? extraKeys(d).map((x) => f.set(x, { k })) : []),
  ]);
  bust("posts");
}

// Troca tag ou fixação de um post publicado, mantendo os índices em dia.
async function updatePost(found, change) {
  const f = await feed();
  const before = found.doc;
  const after = { ...before, ...change };
  if (!after.tag) delete after.tag;
  if (!after.pinnedAt) delete after.pinnedAt;
  const oldKeys = new Set(extraKeys(before)), newKeys = new Set(extraKeys(after));
  await f.set(found.key, after);
  await Promise.all([
    ...[...oldKeys].filter((x) => !newKeys.has(x)).map((x) => f.delete(x)),
    ...[...newKeys].filter((x) => !oldKeys.has(x)).map((x) => f.set(x, { k: found.key })),
  ]);
  bust("posts");
  return after;
}

/* ---------- tags ---------- */
async function loadTags() {
  const d = await (await feed()).get("tags");
  return Array.isArray(d?.list) ? d.list : [];
}
const saveTags = async (list) => (await feed()).set("tags", { list });
const tagView = (t) => ({ id: t.id, name: t.name, color: t.color });
function tagName(raw, list, fail, selfId) {
  const name = String(raw ?? "").replace(/\s+/g, " ").trim();
  if (name.length < 2 || name.length > 24) fail(400, "O nome da tag precisa ter de 2 a 24 letras.");
  if (list.some((t) => t.id !== selfId && t.name.toLowerCase() === name.toLowerCase())) fail(409, "Já existe uma tag com esse nome.");
  return name;
}

/* ---------- enquetes ---------- */
const oneLine = (s, n) => String(s ?? "").replace(/\s+/g, " ").trim().slice(0, n);
function sanitizePoll(p, fail) {
  if (p == null) return null;
  const qs = Array.isArray(p.questions) ? p.questions : [];
  if (!qs.length) fail(400, "A enquete precisa de pelo menos uma pergunta.");
  if (qs.length > MAX_QUESTIONS) fail(400, `No máximo ${MAX_QUESTIONS} perguntas por enquete.`);
  return {
    mode: p.mode === "secret" ? "secret" : "open",
    closed: false,
    questions: qs.map((q, i) => {
      const text = oneLine(q?.text, 140);
      if (text.length < 3) fail(400, `Escreva a pergunta ${i + 1}.`);
      const opts = (Array.isArray(q?.options) ? q.options : []).map((o) => oneLine(o, 80)).filter(Boolean);
      if (opts.length < 2) fail(400, `A pergunta ${i + 1} precisa de pelo menos 2 opções.`);
      if (opts.length > MAX_OPTIONS) fail(400, `No máximo ${MAX_OPTIONS} opções por pergunta.`);
      if (new Set(opts.map((o) => o.toLowerCase())).size !== opts.length) fail(400, `A pergunta ${i + 1} tem opções repetidas.`);
      return { text, options: opts };
    }),
  };
}
// Votos: polls/<post>:<pergunta>:<pessoa>:<opção>. Ler só as chaves já basta para contar.
async function pollFor(d, user) {
  const p = d.poll;
  if (!p) return null;
  const admin = user.role === "admin";
  const live = d.status === "published";
  const keys = live ? await memo("polls:" + d.id, TTL, async () => (await store("polls")).keys({ prefix: d.id + ":" })) : [];
  const counts = p.questions.map((q) => q.options.map(() => 0));
  const mine = {}, voters = new Set();
  for (const k of keys) {
    const [, qi, uid, oi] = k.split(":");
    if (counts[qi]?.[oi] === undefined) continue;
    counts[qi][oi]++; voters.add(uid);
    if (uid === user.id) mine[qi] = Number(oi);
  }
  return {
    mode: p.mode, closed: !!p.closed, live,
    voters: admin || (p.mode === "open" && (voters.has(user.id) || p.closed)) ? voters.size : undefined,
    questions: p.questions.map((q, qi) => {
      const my = mine[qi] ?? null;
      const show = live && (admin || (p.mode === "open" && (my !== null || p.closed)));
      const total = counts[qi].reduce((a, b) => a + b, 0);
      return {
        text: q.text, mine: my, total: show ? total : undefined,
        options: q.options.map((t, oi) => (show ? { t, n: counts[qi][oi], pct: total ? Math.round((counts[qi][oi] / total) * 100) : 0 } : { t })),
      };
    }),
  };
}

async function findPost(id) {
  const f = await feed();
  const ix = await f.get("ix:" + id);
  if (!ix) return null;
  const doc = await f.get(ix.k);
  return doc ? { doc, key: ix.k } : null;
}

/* ---------- visão dos posts ---------- */
async function authorsFor(ctx, ids) {
  const uniq = [...new Set(ids)];
  const users = await pmap(uniq, (id) => ctx.loadUser(id));
  const map = new Map();
  uniq.forEach((id, i) => {
    const u = users[i];
    map.set(id, u ? { id: u.id, name: u.name, nickname: u.nickname || null, avatar: u.avatar || null, role: u.role } : { id, name: "Pessoa removida", nickname: null, avatar: null, role: "aluno" });
  });
  return map;
}

async function countsFor(id, meId) {
  return memo("posts:c:" + id, TTL, async () => {
    const [h, c] = await Promise.all([(await store("hypes")).keys({ prefix: id + ":" }), (await store("comments")).keys({ prefix: id + ":" })]);
    return { hypers: h.map((k) => k.slice(id.length + 1)), comments: c.length };
  }).then((x) => ({ hypes: x.hypers.length, comments: x.comments, hyped: x.hypers.includes(meId) }));
}

async function views(ctx, docs, user, { withCounts = true } = {}) {
  const [authors, tags, polls] = await Promise.all([authorsFor(ctx, docs.map((d) => d.authorId)), loadTags(), pmap(docs, (d) => pollFor(d, user))]);
  const tagMap = new Map(tags.map((t) => [t.id, t]));
  const counts = withCounts ? await pmap(docs, (d) => (d.status === "published" ? countsFor(d.id, user.id) : { hypes: 0, comments: 0, hyped: false })) : [];
  return docs.map((d, i) => ({
    id: d.id, author: authors.get(d.authorId), text: d.text, media: d.media || [],
    tag: d.tag && tagMap.has(d.tag) ? tagView(tagMap.get(d.tag)) : null, pinned: !!d.pinnedAt, poll: polls[i],
    status: d.status, createdAt: d.createdAt, publishedAt: d.publishedAt || null, reason: d.reason || null,
    ...(withCounts ? counts[i] : {}),
    canDelete: user.role === "admin" || d.authorId === user.id,
  }));
}

/* ---------- rotas ---------- */
export async function handle(ctx, { req, method, path, url, body, user }) {
  const { json, fail } = ctx;
  const parts = path.split("/");
  const isAdmin = user.role === "admin";
  const needAdmin = () => { if (!isAdmin) fail(403, "Área restrita a administradores."); };

  /* --- feed --- */
  if (path === "feed" && method === "GET") {
    const f = await feed();
    const author = url.searchParams.get("author") || "";
    const tag = url.searchParams.get("tag") || "";
    const after = url.searchParams.get("after") || "";
    const indirect = !!(author || tag);
    const prefix = author ? `au:${author}:` : tag ? `tg:${tag}:` : "pub:";
    const keys = await f.keys({ prefix, after, limit: PAGE + 1 });
    const page = keys.slice(0, PAGE);
    let docs = (await pmap(page, async (k) => (indirect ? (await f.get((await f.get(k))?.k || "x")) : f.get(k)))).filter(Boolean);
    if (!indirect) {
      // fixados: ficam no topo do feed principal e não se repetem na lista comum
      const pins = (await pmap(await f.keys({ prefix: "pin:" }), async (k) => f.get((await f.get(k))?.k || "x"))).filter((d) => d && d.status === "published");
      const pinIds = new Set(pins.map((d) => d.id));
      docs = docs.filter((d) => !pinIds.has(d.id));
      if (!after) docs = [...pins, ...docs];
    }
    return json({ posts: await views(ctx, docs, user), next: keys.length > PAGE ? page[page.length - 1] : null });
  }
  // Sondagem leve: o navegador pergunta de tempos em tempos se há post novo, sem baixar o feed inteiro.
  // Sem "since" devolve o marcador do topo atual; com "since" conta quantos posts são mais novos que ele.
  if (path === "feed/pulse" && method === "GET") {
    const f = await feed();
    const tag = url.searchParams.get("tag") || "";
    const since = url.searchParams.get("since") || "";
    const prefix = tag ? `tg:${tag}:` : "pub:";
    const keys = await f.keys({ prefix, limit: 21 });
    const pins = (await f.keys({ prefix: "pin:" })).join("|");
    const top = keys[0] || "";
    const fresh = since ? keys.filter((k) => k < since).length : 0;
    return json({ top, fresh, more: fresh >= 21, pins });
  }
  if (path === "feed/tags" && method === "GET") return json({ tags: (await loadTags()).map(tagView), colors: TAG_COLORS });
  if (path === "feed/status" && method === "GET") return json({ uploads: uploadsOn(), maxMedia: MAX_MEDIA, maxText: MAX_TEXT, maxQuestions: MAX_QUESTIONS, maxOptions: MAX_OPTIONS, maxPinned: MAX_PINNED });
  if (path === "feed/upload-sign" && method === "POST") {
    if (!uploadsOn()) fail(503, "O envio de arquivos ainda não foi configurado pela administração.");
    const rl = await store("rl");
    const key = "up:" + user.id;
    const s = (await rl.get(key)) || { n: 0, at: 0 };
    if (now() - s.at > 3600e3) { s.n = 0; s.at = now(); }
    if (++s.n > 40) fail(429, "Muitos envios seguidos. Tente de novo em alguns minutos.");
    await rl.set(key, s);
    return json(signUpload(user));
  }
  if (path === "feed/mine" && method === "GET") {
    const f = await feed();
    const keys = [...await f.keys({ prefix: `pend:${user.id}:` }), ...await f.keys({ prefix: `rej:${user.id}:` })];
    const docs = (await pmap(keys, (k) => f.get(k))).filter(Boolean).sort((a, b) => b.createdAt - a.createdAt);
    return json({ posts: await views(ctx, docs, user, { withCounts: false }), maxPending: MAX_PENDING });
  }
  if (path === "feed/post" && method === "POST") {
    const text = cleanMultiline(body.text, MAX_TEXT);
    const media = sanitizeMedia(body.media, fail);
    if (body.poll != null && !isAdmin) fail(403, "Só gestores criam enquetes.");
    const poll = sanitizePoll(body.poll, fail);
    if (!text && !media.length && !poll) fail(400, "Escreva algo ou anexe um arquivo, link ou enquete.");
    let tag = null;
    if (body.tag) {
      if (!isAdmin) fail(403, "Só gestores escolhem a tag do post.");
      if (!(await loadTags()).some((t) => t.id === body.tag)) fail(400, "Essa tag não existe mais.");
      tag = String(body.tag);
    }
    const bad = await mod.check(text, user);
    if (bad) { await ctx.logEvent(req, "post_bloqueado", user, { palavra: bad }); fail(422, BLOCKED_MSG); }
    const f = await feed();
    if (body.pinned && isAdmin && (await f.keys({ prefix: "pin:" })).length >= MAX_PINNED) fail(409, `No máximo ${MAX_PINNED} posts fixados. Desafixe um antes.`);
    if (!isAdmin) {
      const pending = await f.keys({ prefix: `pend:${user.id}:` });
      if (pending.length >= MAX_PENDING) fail(429, `Você já tem ${MAX_PENDING} posts aguardando aprovação. Espere a análise do gestor.`);
    }
    const t = now();
    const doc = { id: newId("po_"), authorId: user.id, text, media, createdAt: t, status: isAdmin ? "published" : "pending", publishedAt: isAdmin ? t : null };
    if (poll) doc.poll = poll;
    if (tag) doc.tag = tag;
    if (isAdmin && body.pinned) doc.pinnedAt = t;
    await putPost(doc, isAdmin ? "pub" : "pend");
    await ctx.logEvent(req, "post_criado", user, { post: doc.id, status: doc.status });
    if (isAdmin) await notify.notifyMentions({ text, author: user, postId: doc.id, where: "post" });
    const [view] = await views(ctx, [doc], user);
    return json({ post: view, status: doc.status }, 201);
  }
  if (parts[0] === "feed" && parts[1] === "post" && parts[2]) {
    const found = await findPost(parts[2]);
    if (method === "GET") {
      if (!found || (found.doc.status !== "published" && found.doc.authorId !== user.id && !isAdmin)) fail(404, "Post não encontrado.");
      return json({ post: (await views(ctx, [found.doc], user))[0] });
    }
    if (method === "PATCH") {
      needAdmin();
      if (!found || found.doc.status !== "published") fail(404, "Post não encontrado.");
      const change = {};
      if (body.tag !== undefined) {
        if (body.tag && !(await loadTags()).some((t) => t.id === body.tag)) fail(400, "Essa tag não existe mais.");
        change.tag = body.tag ? String(body.tag) : null;
      }
      if (body.pinned !== undefined) {
        if (body.pinned && !found.doc.pinnedAt) {
          const pins = await (await feed()).keys({ prefix: "pin:" });
          if (pins.length >= MAX_PINNED) fail(409, `No máximo ${MAX_PINNED} posts fixados. Desafixe um antes.`);
        }
        change.pinnedAt = body.pinned ? found.doc.pinnedAt || now() : null;
      }
      if (body.pollClosed !== undefined) {
        if (!found.doc.poll) fail(400, "Esse post não tem enquete.");
        change.poll = { ...found.doc.poll, closed: !!body.pollClosed };
      }
      const after = await updatePost(found, change);
      bust("polls:" + after.id);
      await ctx.logEvent(req, "post_editado", user, { post: after.id, ...(body.tag !== undefined ? { tag: after.tag || "nenhuma" } : {}), ...(body.pinned !== undefined ? { fixado: !!after.pinnedAt } : {}), ...(body.pollClosed !== undefined ? { enquete_encerrada: !!after.poll?.closed } : {}) });
      return json({ post: (await views(ctx, [after], user))[0] });
    }
    if (method === "DELETE") {
      if (!found) fail(404, "Post não encontrado.");
      if (!isAdmin && found.doc.authorId !== user.id) fail(403, "Só quem publicou ou a administração pode remover.");
      const f = await feed();
      await Promise.all([f.delete(found.key), f.delete("ix:" + found.doc.id), ...extraKeys(found.doc).map((x) => f.delete(x))]);
      const [hs, cs, ps] = [await store("hypes"), await store("comments"), await store("polls")];
      await Promise.all([
        found.doc.poll ? ps.keys({ prefix: found.doc.id + ":" }).then((ks) => pmap(ks, (k) => ps.delete(k))) : null,
        hs.keys({ prefix: found.doc.id + ":" }).then((ks) => pmap(ks, (k) => hs.delete(k))),
        cs.keys({ prefix: found.doc.id + ":" }).then((ks) => pmap(ks, (k) => cs.delete(k))),
      ]);
      bust("posts");
      await ctx.logEvent(req, "post_removido", user, { post: found.doc.id, autor: found.doc.authorId });
      return json({ ok: true });
    }
  }

  /* --- enquete: votar (uma resposta por pergunta, sem trocar depois) --- */
  if (parts[0] === "feed" && parts[1] === "vote" && parts[2] && method === "POST") {
    const found = await findPost(parts[2]);
    if (!found || found.doc.status !== "published" || !found.doc.poll) fail(404, "Enquete não encontrada.");
    const poll = found.doc.poll;
    if (poll.closed) fail(409, "Essa enquete foi encerrada.");
    const qi = Number(body.q), oi = Number(body.o);
    if (!Number.isInteger(qi) || !poll.questions[qi] || !Number.isInteger(oi) || !poll.questions[qi].options[oi]) fail(400, "Opção inválida.");
    const ps = await store("polls");
    const had = await ps.keys({ prefix: `${found.doc.id}:${qi}:${user.id}:` });
    if (had.length) fail(409, "Você já respondeu essa pergunta.");
    await ps.set(`${found.doc.id}:${qi}:${user.id}:${oi}`, { at: now() });
    bust("polls:" + found.doc.id);
    return json({ poll: await pollFor(found.doc, user) });
  }

  /* --- hype --- */
  if (parts[0] === "feed" && parts[1] === "hype" && parts[2] && method === "POST") {
    const found = await findPost(parts[2]);
    if (!found || found.doc.status !== "published") fail(404, "Post não encontrado.");
    const hs = await store("hypes");
    const k = `${found.doc.id}:${user.id}`;
    let gained = 0, goals = [];
    if (!(await hs.get(k))) {
      await hs.set(k, { at: now() });
      bust("posts:c:" + found.doc.id);
      if (found.doc.authorId !== user.id) ({ gained, goals } = await eng.record(user, "hype", "Hype em um post"));
    }
    const c = await countsFor(found.doc.id, user.id);
    return json({ ...c, hyped: true, gained, goals });
  }

  /* --- comentários --- */
  if (parts[0] === "feed" && parts[1] === "comments" && parts[2] && method === "GET") {
    const found = await findPost(parts[2]);
    if (!found || found.doc.status !== "published") fail(404, "Post não encontrado.");
    const cs = await store("comments");
    const keys = await cs.keys({ prefix: found.doc.id + ":", limit: 200 });
    const docs = (await pmap(keys, (k) => cs.get(k))).filter(Boolean);
    const authors = await authorsFor(ctx, docs.map((c) => c.authorId));
    return json({ comments: docs.map((c) => ({ id: c.id, author: authors.get(c.authorId), text: c.text, at: c.at, canDelete: isAdmin || c.authorId === user.id })) });
  }
  if (parts[0] === "feed" && parts[1] === "comment" && parts[2] && method === "POST") {
    const found = await findPost(parts[2]);
    if (!found || found.doc.status !== "published") fail(404, "Post não encontrado.");
    const text = cleanMultiline(body.text, MAX_COMMENT).replace(/\n+/g, " ");
    if (text.length < 1) fail(400, "Escreva o comentário.");
    const bad = await mod.check(text, user);
    if (bad) { await ctx.logEvent(req, "comentario_bloqueado", user, { post: found.doc.id, palavra: bad }); fail(422, BLOCKED_MSG); }
    const t = now();
    const c = { id: `${t13(t)}-${newId().slice(0, 5)}`, postId: found.doc.id, authorId: user.id, text, at: t };
    await (await store("comments")).set(`${found.doc.id}:${c.id}`, c);
    bust("posts:c:" + found.doc.id);
    const told = await notify.notifyMentions({ text, author: user, postId: found.doc.id, where: "comment" });
    if (found.doc.authorId !== user.id && !told.sent.includes(found.doc.authorId)) await notify.notifyUser(found.doc.authorId, "comment", user, found.doc.id, text);
    let gained = 0, goals = [];
    if (text.length >= 8) ({ gained, goals } = await eng.record(user, "comment", "Comentário em um post"));
    const a = await authorsFor(ctx, [user.id]);
    return json({ comment: { id: c.id, author: a.get(user.id), text, at: t, canDelete: true }, gained, goals }, 201);
  }
  if (parts[0] === "feed" && parts[1] === "comment" && parts[2] && parts[3] && method === "DELETE") {
    const cs = await store("comments");
    const k = `${parts[2]}:${parts[3]}`;
    const c = await cs.get(k);
    if (!c) fail(404, "Comentário não encontrado.");
    if (!isAdmin && c.authorId !== user.id) fail(403, "Só quem comentou ou a administração pode remover.");
    await cs.delete(k);
    bust("posts:c:" + parts[2]);
    return json({ ok: true });
  }

  /* --- moderação --- */
  if (path === "admin/feed/pending" && method === "GET") {
    needAdmin();
    const f = await feed();
    const keys = await f.keys({ prefix: "pend:" });
    const docs = (await pmap(keys, (k) => f.get(k))).filter(Boolean).sort((a, b) => a.createdAt - b.createdAt);
    return json({ posts: await views(ctx, docs, user, { withCounts: false }) });
  }
  if (parts[0] === "admin" && parts[1] === "feed" && parts[2] && ["approve", "reject"].includes(parts[3]) && method === "POST") {
    needAdmin();
    const found = await findPost(parts[2]);
    if (!found || found.doc.status !== "pending") fail(404, "Esse post não está mais aguardando aprovação.");
    const f = await feed();
    const d = found.doc;
    await f.delete(found.key);
    if (parts[3] === "approve") {
      d.status = "published"; d.publishedAt = now(); d.approvedBy = user.id;
      await putPost(d, "pub");
      const author = await ctx.loadUser(d.authorId);
      const r = author ? await eng.record(author, "post", "Post aprovado no feed") : { gained: 0, goals: [] };
      await ctx.logEvent(req, "post_aprovado", user, { post: d.id, autor: author?.email || d.authorId, xp: r.gained });
      if (author) await notify.notifyMentions({ text: d.text, author, postId: d.id, where: "post" });
      await notify.notifyUser(d.authorId, "approved", user, d.id, d.text || "Seu post");
      return json({ ok: true, xp: r.gained });
    }
    d.status = "rejected"; d.reason = cleanMultiline(body.reason, 200).replace(/\n+/g, " ") || null; d.reviewedBy = user.id;
    await putPost(d, "rej");
    await ctx.logEvent(req, "post_recusado", user, { post: d.id, motivo: d.reason || "" });
    await notify.notifyUser(d.authorId, "rejected", user, d.id, d.reason || d.text || "Seu post");
    return json({ ok: true });
  }
  if (path === "admin/engage/config" && method === "GET") { needAdmin(); return json({ config: await eng.loadCfg(), metrics: eng.METRICS, defaults: eng.DEFAULT_CFG }); }
  if (path === "admin/engage/config" && method === "PUT") {
    needAdmin();
    const cfg = await eng.saveCfg(body, newId, fail);
    await ctx.logEvent(req, "admin_config_engajamento", user, { metas: cfg.goals.length });
    return json({ config: cfg });
  }

  /* --- tags (gestão) e moderação --- */
  if (path === "admin/tags" && method === "POST") {
    needAdmin();
    const list = await loadTags();
    if (list.length >= MAX_TAGS) fail(400, `No máximo ${MAX_TAGS} tags.`);
    const t = { id: newId("tg_"), name: tagName(body.name, list, fail), color: TAG_COLORS.includes(body.color) ? body.color : "gold", createdAt: now() };
    await saveTags([...list, t]);
    await ctx.logEvent(req, "tag_criada", user, { tag: t.name });
    return json({ tag: tagView(t), tags: [...list, t].map(tagView) }, 201);
  }
  if (parts[0] === "admin" && parts[1] === "tags" && parts[2] && ["PATCH", "DELETE"].includes(method)) {
    needAdmin();
    const list = await loadTags();
    const t = list.find((x) => x.id === parts[2]);
    if (!t) fail(404, "Tag não encontrada.");
    if (method === "PATCH") {
      if (body.name !== undefined) t.name = tagName(body.name, list, fail, t.id);
      if (body.color !== undefined) { if (!TAG_COLORS.includes(body.color)) fail(400, "Cor inválida."); t.color = body.color; }
      await saveTags(list);
      bust("posts");
      await ctx.logEvent(req, "tag_editada", user, { tag: t.name });
      return json({ tags: list.map(tagView) });
    }
    const f = await feed();
    await Promise.all([saveTags(list.filter((x) => x.id !== t.id)), f.keys({ prefix: `tg:${t.id}:` }).then((ks) => pmap(ks, (k) => f.delete(k)))]);
    bust("posts");
    await ctx.logEvent(req, "tag_removida", user, { tag: t.name });
    return json({ tags: list.filter((x) => x.id !== t.id).map(tagView) });
  }
  if (path === "admin/moderation" && method === "GET") { needAdmin(); return json({ moderation: await mod.loadMod() }); }
  if (path === "admin/moderation" && method === "PUT") {
    needAdmin();
    const m = await mod.saveMod(body, fail);
    await ctx.logEvent(req, "admin_moderacao", user, { filtro: m.on ? "ligado" : "desligado", palavras: m.words.length });
    return json({ moderation: m });
  }
  if (path === "admin/moderation/test" && method === "POST") {
    needAdmin();
    const m = await mod.loadMod();
    return json({ hit: mod.offense(String(body.text || ""), m.words) });
  }

  /* --- notificações e lista para marcar pessoas --- */
  if (path === "notifs" && method === "GET") {
    const { items } = await notify.listFor(user);
    const authors = await authorsFor(ctx, items.map((i) => i.by).filter(Boolean));
    return json({ items: items.map((i) => ({ ...i, by: i.by ? authors.get(i.by) : null })), unread: items.filter((i) => i.unread).length });
  }
  if (path === "notifs/read" && method === "POST") { await notify.markRead(user); return json({ ok: true }); }
  if (path === "people/mentions" && method === "GET") {
    const people = await memo("people", 30000, () => ctx.allUsers());
    return json({
      people: people.filter((u) => isLive(u) && u.nickname).map((u) => ({ id: u.id, name: u.name, nickname: u.nickname, avatar: u.avatar || null, role: u.role }))
        .sort((a, b) => a.name.localeCompare(b.name, "pt-BR")).slice(0, 600),
      todos: isAdmin,
    });
  }

  /* --- XP, check-in e ranking --- */
  if (path === "engage/me" && method === "GET") return json(await eng.view(user));
  if (path === "engage/checkin" && method === "POST") return json(await eng.checkin(user, fail));
  if (path === "engage/ranking" && method === "GET") {
    const period = ["week", "month", "all"].includes(url.searchParams.get("period")) ? url.searchParams.get("period") : "week";
    const students = (await ctx.allUsers()).filter((u) => u.role === "aluno" && isLive(u));
    return json(await eng.ranking(period, students, user.id));
  }

  /* --- apelido e perfil --- */
  if (path === "auth/profile" && method === "POST") {
    if (body.nickname === undefined && body.avatar === undefined) fail(400, "Nada para salvar.");
    let changed = false;
    if (body.nickname !== undefined) {
      const nick = String(body.nickname ?? "").trim().replace(/^@/, "").toLowerCase();
      const bad = nickProblem(nick);
      if (bad) fail(400, bad);
      if (nick !== user.nickname) {
        if (user.nickname && user.nickAt && now() - user.nickAt < 7 * 864e5) fail(429, "Você pode trocar o @ de novo depois de 7 dias.");
        const ns = await store("nicks");
        const owner = await ns.get("n:" + nick);
        if (owner && owner !== user.id) fail(409, "Esse @ já está em uso. Escolha outro.");
        await ns.set("n:" + nick, user.id);
        if (user.nickname) await ns.delete("n:" + user.nickname);
        user.nickname = nick; user.nickAt = now();
        changed = true;
      }
    }
    if (body.avatar !== undefined) {
      const raw = String(body.avatar || "").trim();
      if (!raw) { if (user.avatar) { delete user.avatar; changed = true; } }
      else {
        if (!uploadsOn()) fail(400, "O envio de fotos ainda não está configurado.");
        let u;
        try { u = new URL(raw); } catch { fail(400, "Foto inválida."); }
        if (raw.length > 500 || u.protocol !== "https:" || u.hostname !== "res.cloudinary.com" || !u.pathname.startsWith(`/${cloud().name}/image/upload/`)) fail(400, "Foto não reconhecida. Envie pelo botão de foto.");
        if (u.href !== user.avatar) { user.avatar = u.href; changed = true; }
      }
    }
    if (changed) { await ctx.saveUser(user); bust("people"); bust("posts"); }
    return json({ user: ctx.publicUser(user) });
  }
  if (path === "people/check" && method === "GET") {
    const nick = String(url.searchParams.get("nick") || "").trim().replace(/^@/, "").toLowerCase();
    const bad = nickProblem(nick);
    if (bad) return json({ ok: false, reason: bad });
    const owner = await (await store("nicks")).get("n:" + nick);
    return json(owner && owner !== user.id ? { ok: false, reason: "Esse @ já está em uso." } : { ok: true });
  }
  if (parts[0] === "people" && parts[1] && method === "GET") {
    const key = decodeURIComponent(parts[1]).replace(/^@/, "").toLowerCase();
    const id = (await (await store("nicks")).get("n:" + key)) || parts[1];
    const u = await ctx.loadUser(id);
    if (!u || !isLive(u)) fail(404, "Pessoa não encontrada.");
    const e = u.role === "aluno" ? eng.summary(await eng.loadEng(u.id)) : null;
    return json({ person: { id: u.id, name: u.name, nickname: u.nickname || null, avatar: u.avatar || null, role: u.role, joinedAt: u.createdAt, engage: e } });
  }

  /* --- busca --- */
  if (path === "search" && method === "GET") return json(await search(ctx, user, String(url.searchParams.get("q") || "").slice(0, 80), String(url.searchParams.get("tag") || "")));

  return null;
}

function nickProblem(nick) {
  if (!/^[a-z][a-z0-9_.]{2,19}$/.test(nick)) return "O @ precisa ter de 3 a 20 caracteres: letras minúsculas, números, ponto ou sublinhado, começando por letra.";
  if (/[._]{2}/.test(nick) || /[._]$/.test(nick)) return "O @ não pode ter sinais repetidos nem terminar em ponto ou sublinhado.";
  if (RESERVED.has(nick)) return "Esse @ é reservado. Escolha outro.";
  return null;
}

/* ---------- busca em pessoas e posts ---------- */
async function search(ctx, user, q, tagId = "") {
  const tags = await loadTags();
  const tag = tagId ? tags.find((t) => t.id === tagId) : null;
  if (tagId && !tag) return { people: [], posts: [], forum: [], tag: null };
  if (norm1(q).length < 2) {
    if (!tag) return { people: [], posts: [], forum: [] };
    // só a tag escolhida: lista os posts mais recentes dela
    const f = await feed();
    const keys = await f.keys({ prefix: `tg:${tag.id}:`, limit: 15 });
    const docs = (await pmap(keys, async (k) => f.get((await f.get(k))?.k || "x"))).filter(Boolean);
    const authors = await authorsFor(ctx, docs.map((p) => p.authorId));
    return { people: [], forum: [], tag: tagView(tag), posts: docs.map((p) => ({ id: p.id, author: authors.get(p.authorId), snippet: String(p.text || (p.poll ? "Enquete: " + p.poll.questions[0].text : "") || (p.media || []).map((m) => m.name || m.url).join(" ")).slice(0, 160), publishedAt: p.publishedAt, media: (p.media || []).map((m) => m.type), tag: tagView(tag) })) };
  }
  const people = await memo("people", 30000, () => ctx.allUsers());
  const qPerson = q.replace(/^@/, "");
  const pRows = [];
  for (const u of tag ? [] : people) {
    if (!isLive(u)) continue;
    const m = match(qPerson, [{ text: u.name, weight: 3 }, { text: u.nickname || "", weight: 3 }, ...(user.role === "admin" ? [{ text: u.email, weight: 2 }] : [])]);
    if (m) pRows.push({ s: m.score, p: { id: u.id, name: u.name, nickname: u.nickname || null, avatar: u.avatar || null, role: u.role } });
  }
  pRows.sort((a, b) => b.s - a.s);

  const posts = await memo("posts:recent", 30000, async () => {
    const f = await feed();
    const keys = await f.keys({ prefix: "pub:", limit: 300 });
    return (await pmap(keys, (k) => f.get(k))).filter(Boolean);
  });
  const authors = await authorsFor(ctx, posts.map((p) => p.authorId));
  const hRows = [];
  const tagMap = new Map(tags.map((t) => [t.id, t]));
  for (const p of posts) {
    if (tag && p.tag !== tag.id) continue;
    const a = authors.get(p.authorId);
    const links = (p.media || []).filter((m) => m.type === "link").map((m) => m.url).join(" ");
    const files = (p.media || []).map((m) => m.name || "").join(" ");
    const pollText = p.poll ? p.poll.questions.map((x) => x.text + " " + x.options.join(" ")).join(" ") : "";
    const m = match(q, [{ text: p.text, weight: 1 }, { text: `${a.name} ${a.nickname || ""}`, weight: 1.5 }, { text: files + " " + links, weight: 0.8 }, { text: pollText, weight: 1 }, { text: tagMap.get(p.tag)?.name || "", weight: 1.2 }]);
    if (m) hRows.push({ s: m.score + p.publishedAt / 1e15, p, a });
  }
  hRows.sort((a, b) => b.s - a.s);
  return {
    people: pRows.slice(0, 8).map((r) => r.p),
    forum: tag ? [] : await forum.search(q),
    tag: tag ? tagView(tag) : undefined,
    posts: hRows.slice(0, 15).map(({ p, a }) => ({ id: p.id, author: a, snippet: snippet(p.text || (p.poll ? "Enquete: " + p.poll.questions[0].text : "") || (p.media || []).map((m) => m.name || m.url).join(" "), q), publishedAt: p.publishedAt, media: (p.media || []).map((m) => m.type), tag: tagMap.get(p.tag) ? tagView(tagMap.get(p.tag)) : null })),
  };
}
const norm1 = (s) => String(s || "").replace(/[^\p{L}\p{N}]/gu, "");

export async function pendingCount() {
  return (await (await feed()).keys({ prefix: "pend:" })).length;
}

// Feed, hype, comentários, moderação, apelido (@), perfil, busca e envio de arquivos.
// Chaves: feed/pub:<tempo invertido>:<id> (publicados, mais novos primeiro), feed/pend:<autor>:<tempo>:<id> (aguardando),
// feed/rej:<autor>:<tempo>:<id> (recusados), feed/ix:<id> (onde está cada post), feed/au:<autor>:<tempo invertido>:<id> (posts por pessoa),
// hypes/<post>:<pessoa>, comments/<post>:<tempo>-<sufixo>, nicks/n:<apelido>.
import crypto from "node:crypto";
import { store, pmap } from "./db.mjs";
import { newId, isLive } from "./auth.mjs";
import { now } from "./clock.mjs";
import * as eng from "./engage.mjs";
import { match, snippet } from "./textsearch.mjs";

const MAX_TEXT = 2000, MAX_COMMENT = 500, MAX_MEDIA = 4, PAGE = 12, MAX_PENDING = 3;
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

function sanitizeMedia(list, fail) {
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
const cleanMultiline = (s, max) => String(s ?? "").replace(/\r\n?/g, "\n").replace(/[\u0000-\u0009\u000b-\u001f]/g, " ").replace(/\n{3,}/g, "\n\n").trim().slice(0, max);

/* ---------- gravação dos posts ---------- */
const feed = () => store("feed");
const pubKey = (d) => `pub:${inv(d.publishedAt)}:${d.id}`;
const pendKey = (d) => `pend:${d.authorId}:${t13(d.createdAt)}:${d.id}`;
const rejKey = (d) => `rej:${d.authorId}:${t13(d.createdAt)}:${d.id}`;
const auKey = (d) => `au:${d.authorId}:${inv(d.publishedAt)}:${d.id}`;

async function putPost(d, kind) {
  const f = await feed();
  const k = kind === "pub" ? pubKey(d) : kind === "pend" ? pendKey(d) : rejKey(d);
  await Promise.all([
    f.set(k, d),
    f.set("ix:" + d.id, { k, st: d.status, a: d.authorId }),
    kind === "pub" ? f.set(auKey(d), { k }) : null,
  ]);
  bust("posts");
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
  const authors = await authorsFor(ctx, docs.map((d) => d.authorId));
  const counts = withCounts ? await pmap(docs, (d) => (d.status === "published" ? countsFor(d.id, user.id) : { hypes: 0, comments: 0, hyped: false })) : [];
  return docs.map((d, i) => ({
    id: d.id, author: authors.get(d.authorId), text: d.text, media: d.media || [],
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
    const after = url.searchParams.get("after") || "";
    const prefix = author ? `au:${author}:` : "pub:";
    const keys = await f.keys({ prefix, after, limit: PAGE + 1 });
    const page = keys.slice(0, PAGE);
    const docs = (await pmap(page, async (k) => (author ? (await f.get((await f.get(k))?.k || "x")) : f.get(k)))).filter(Boolean);
    return json({ posts: await views(ctx, docs, user), next: keys.length > PAGE ? page[page.length - 1] : null });
  }
  if (path === "feed/status" && method === "GET") return json({ uploads: uploadsOn(), maxMedia: MAX_MEDIA, maxText: MAX_TEXT });
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
    if (!text && !media.length) fail(400, "Escreva algo ou anexe um arquivo ou link.");
    const f = await feed();
    if (!isAdmin) {
      const pending = await f.keys({ prefix: `pend:${user.id}:` });
      if (pending.length >= MAX_PENDING) fail(429, `Você já tem ${MAX_PENDING} posts aguardando aprovação. Espere a análise do gestor.`);
    }
    const t = now();
    const doc = { id: newId("po_"), authorId: user.id, text, media, createdAt: t, status: isAdmin ? "published" : "pending", publishedAt: isAdmin ? t : null };
    await putPost(doc, isAdmin ? "pub" : "pend");
    await ctx.logEvent(req, "post_criado", user, { post: doc.id, status: doc.status });
    const [view] = await views(ctx, [doc], user);
    return json({ post: view, status: doc.status }, 201);
  }
  if (parts[0] === "feed" && parts[1] === "post" && parts[2]) {
    const found = await findPost(parts[2]);
    if (method === "GET") {
      if (!found || (found.doc.status !== "published" && found.doc.authorId !== user.id && !isAdmin)) fail(404, "Post não encontrado.");
      return json({ post: (await views(ctx, [found.doc], user))[0] });
    }
    if (method === "DELETE") {
      if (!found) fail(404, "Post não encontrado.");
      if (!isAdmin && found.doc.authorId !== user.id) fail(403, "Só quem publicou ou a administração pode remover.");
      const f = await feed();
      await Promise.all([f.delete(found.key), f.delete("ix:" + found.doc.id), found.doc.status === "published" ? f.delete(auKey(found.doc)) : null]);
      const [hs, cs] = [await store("hypes"), await store("comments")];
      await Promise.all([
        hs.keys({ prefix: found.doc.id + ":" }).then((ks) => pmap(ks, (k) => hs.delete(k))),
        cs.keys({ prefix: found.doc.id + ":" }).then((ks) => pmap(ks, (k) => cs.delete(k))),
      ]);
      bust("posts");
      await ctx.logEvent(req, "post_removido", user, { post: found.doc.id, autor: found.doc.authorId });
      return json({ ok: true });
    }
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
    const t = now();
    const c = { id: `${t13(t)}-${newId().slice(0, 5)}`, postId: found.doc.id, authorId: user.id, text, at: t };
    await (await store("comments")).set(`${found.doc.id}:${c.id}`, c);
    bust("posts:c:" + found.doc.id);
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
      return json({ ok: true, xp: r.gained });
    }
    d.status = "rejected"; d.reason = cleanMultiline(body.reason, 200).replace(/\n+/g, " ") || null; d.reviewedBy = user.id;
    await putPost(d, "rej");
    await ctx.logEvent(req, "post_recusado", user, { post: d.id, motivo: d.reason || "" });
    return json({ ok: true });
  }
  if (path === "admin/engage/config" && method === "GET") { needAdmin(); return json({ config: await eng.loadCfg(), metrics: eng.METRICS, defaults: eng.DEFAULT_CFG }); }
  if (path === "admin/engage/config" && method === "PUT") {
    needAdmin();
    const cfg = await eng.saveCfg(body, newId, fail);
    await ctx.logEvent(req, "admin_config_engajamento", user, { metas: cfg.goals.length });
    return json({ config: cfg });
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
  if (path === "search" && method === "GET") return json(await search(ctx, user, String(url.searchParams.get("q") || "").slice(0, 80)));

  return null;
}

function nickProblem(nick) {
  if (!/^[a-z][a-z0-9_.]{2,19}$/.test(nick)) return "O @ precisa ter de 3 a 20 caracteres: letras minúsculas, números, ponto ou sublinhado, começando por letra.";
  if (/[._]{2}/.test(nick) || /[._]$/.test(nick)) return "O @ não pode ter sinais repetidos nem terminar em ponto ou sublinhado.";
  if (RESERVED.has(nick)) return "Esse @ é reservado. Escolha outro.";
  return null;
}

/* ---------- busca em pessoas e posts ---------- */
async function search(ctx, user, q) {
  if (norm1(q).length < 2) return { people: [], posts: [] };
  const people = await memo("people", 30000, () => ctx.allUsers());
  const qPerson = q.replace(/^@/, "");
  const pRows = [];
  for (const u of people) {
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
  for (const p of posts) {
    const a = authors.get(p.authorId);
    const links = (p.media || []).filter((m) => m.type === "link").map((m) => m.url).join(" ");
    const files = (p.media || []).map((m) => m.name || "").join(" ");
    const m = match(q, [{ text: p.text, weight: 1 }, { text: `${a.name} ${a.nickname || ""}`, weight: 1.5 }, { text: files + " " + links, weight: 0.8 }]);
    if (m) hRows.push({ s: m.score + p.publishedAt / 1e15, p, a });
  }
  hRows.sort((a, b) => b.s - a.s);
  return {
    people: pRows.slice(0, 8).map((r) => r.p),
    posts: hRows.slice(0, 15).map(({ p, a }) => ({ id: p.id, author: a, snippet: snippet(p.text || (p.media || []).map((m) => m.name || m.url).join(" "), q), publishedAt: p.publishedAt, media: (p.media || []).map((m) => m.type) })),
  };
}
const norm1 = (s) => String(s || "").replace(/[^\p{L}\p{N}]/gu, "");

export async function pendingCount() {
  return (await (await feed()).keys({ prefix: "pend:" })).length;
}

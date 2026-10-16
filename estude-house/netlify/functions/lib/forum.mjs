// Fórum dos gestores: publicações simples (título, categoria opcional e texto) que só gestores escrevem.
// O aluno não vê o fórum no menu: os posts aparecem na busca e ele abre para ler.
// Chaves (store "forum"): f:<tempo invertido>:<id> (o post) e ix:<id> (onde está cada post).
import { store, pmap } from "./db.mjs";
import { newId } from "./auth.mjs";
import { now } from "./clock.mjs";
import { match, snippet } from "./textsearch.mjs";
import { FORUM_MANUAL } from "./forum-manual.mjs";

const MAX_TITLE = 120, MAX_CAT = 30, MAX_TEXT = 8000, PAGE = 20, MAX_POSTS = 2000;
const t13 = (n) => String(n).padStart(13, "0");
const inv = (ts) => t13(9e12 - ts);
const forum = () => store("forum");
const clean = (s, max) => String(s ?? "").replace(/\r\n?/g, "\n").replace(/[\u0000-\u0009\u000b-\u001f]/g, " ").replace(/\n{3,}/g, "\n\n").trim().slice(0, max);
const oneLine = (s, max) => String(s ?? "").replace(/\s+/g, " ").trim().slice(0, max);

/* cache curto por instância: a busca lê o fórum inteiro uma vez a cada 20 s */
let CACHE = null;
const bust = () => { CACHE = null; };
async function all() {
  const ttl = process.env.LOCAL_DB ? 0 : 20000;
  if (ttl && CACHE && CACHE.at > Date.now() - ttl) return CACHE.docs;
  const f = await forum();
  const keys = await f.keys({ prefix: "f:", limit: MAX_POSTS });
  const docs = (await pmap(keys, (k) => f.get(k))).filter(Boolean);
  if (ttl) CACHE = { at: Date.now(), docs };
  return docs;
}

async function find(id) {
  const f = await forum();
  const ix = await f.get("ix:" + id);
  if (!ix) return null;
  const doc = await f.get(ix.k);
  return doc ? { doc, key: ix.k } : null;
}

const view = (d, author) => ({
  id: d.id, title: d.title, category: d.category || null, text: d.text,
  author: author || null, createdAt: d.createdAt, updatedAt: d.updatedAt || null,
});

/* Busca: devolve os posts do fórum que combinam (qualquer pessoa logada pode ler). */
export async function search(q) {
  const docs = await all();
  const rows = [];
  for (const d of docs) {
    const m = match(q, [{ text: d.title, weight: 3 }, { text: d.category || "", weight: 2 }, { text: d.text, weight: 1 }]);
    if (m) rows.push({ s: m.score + d.createdAt / 1e15, d });
  }
  rows.sort((a, b) => b.s - a.s);
  return rows.slice(0, 8).map(({ d }) => ({ id: d.id, title: d.title, category: d.category || null, snippet: snippet(d.text, q), createdAt: d.createdAt }));
}

export async function handle(ctx, { req, method, path, url, body, user }) {
  const { json, fail } = ctx;
  const parts = path.split("/");
  if (parts[0] !== "forum") return null;
  const isAdmin = user.role === "admin";
  const needAdmin = () => { if (!isAdmin) fail(403, "Área restrita a administradores."); };
  const authorOf = async (id) => { const u = await ctx.loadUser(id); return u ? { id: u.id, name: u.name, nickname: u.nickname || null, avatar: u.avatar || null, role: u.role } : { id, name: "Gestor", nickname: null, avatar: null, role: "admin" }; };

  /* lista (gestão) */
  if (path === "forum" && method === "GET") {
    needAdmin();
    const f = await forum();
    const after = url.searchParams.get("after") || "";
    const keys = await f.keys({ prefix: "f:", after, limit: PAGE + 1 });
    const page = keys.slice(0, PAGE);
    const docs = (await pmap(page, (k) => f.get(k))).filter(Boolean);
    const cats = [...new Set((await all()).map((d) => d.category).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR"));
    const au = new Map();
    for (const id of new Set(docs.map((d) => d.authorId))) au.set(id, await authorOf(id));
    return json({ items: docs.map((d) => view(d, au.get(d.authorId))), next: keys.length > PAGE ? page[page.length - 1] : null, categories: cats });
  }

  /* publicar */
  if (path === "forum" && method === "POST") {
    needAdmin();
    const title = oneLine(body.title, MAX_TITLE);
    const text = clean(body.text, MAX_TEXT);
    const category = oneLine(body.category, MAX_CAT) || null;
    if (title.length < 3) fail(400, "Escreva um título (mínimo 3 letras).");
    if (text.length < 3) fail(400, "Escreva o texto da publicação.");
    const f = await forum();
    if ((await f.keys({ prefix: "f:", limit: MAX_POSTS + 1 })).length >= MAX_POSTS) fail(400, `O fórum chegou ao limite de ${MAX_POSTS} publicações.`);
    const t = now();
    const d = { id: newId("fo_"), title, text, authorId: user.id, createdAt: t };
    if (category) d.category = category;
    const k = `f:${inv(t)}:${d.id}`;
    await Promise.all([f.set(k, d), f.set("ix:" + d.id, { k })]);
    bust();
    await ctx.logEvent(req, "forum_publicou", user, { post: d.id, titulo: title });
    return json({ post: view(d, await authorOf(user.id)) }, 201);
  }

  /* importa de uma vez os posts iniciais do manual (uma publicação por categoria). Pode repetir sem duplicar. */
  if (path === "forum/importar-manuais" && method === "POST") {
    needAdmin();
    const f = await forum();
    const existing = (await f.keys({ prefix: "f:", limit: MAX_POSTS + 1 })).length;
    const have = new Set((await pmap(FORUM_MANUAL, async (m) => ((await f.get("seed:" + m.key)) ? m.key : null))).filter(Boolean));
    const todo = FORUM_MANUAL.filter((m) => !have.has(m.key));
    if (existing + todo.length > MAX_POSTS) fail(400, `O fórum chegaria a mais de ${MAX_POSTS} publicações. Apague alguma antes de importar.`);
    const base = now();
    /* a ordem do manual vira a ordem da lista: o primeiro da fila fica por cima */
    await pmap(todo.map((m, i) => ({ m, t: base - i })), async ({ m, t }) => {
      const d = { id: newId("fo_"), title: m.title, text: m.text, category: m.category, authorId: user.id, createdAt: t, seed: m.key };
      const k = `f:${inv(t)}:${d.id}`;
      await Promise.all([f.set(k, d), f.set("ix:" + d.id, { k }), f.set("seed:" + m.key, { id: d.id })]);
    });
    bust();
    if (todo.length) await ctx.logEvent(req, "forum_importou_manuais", user, { criados: todo.length });
    return json({ created: todo.length, skipped: FORUM_MANUAL.length - todo.length, total: FORUM_MANUAL.length }, todo.length ? 201 : 200);
  }

  const id = parts[1];
  if (!id) return null;
  const found = await find(id);

  /* ler (qualquer pessoa logada: chega pela busca) */
  if (parts.length === 2 && method === "GET") {
    if (!found) fail(404, "Publicação não encontrada. Ela pode ter sido apagada.");
    return json({ post: view(found.doc, await authorOf(found.doc.authorId)), canEdit: isAdmin });
  }
  if (parts.length === 2 && method === "PATCH") {
    needAdmin();
    if (!found) fail(404, "Publicação não encontrada.");
    const d = { ...found.doc };
    if (body.title !== undefined) { d.title = oneLine(body.title, MAX_TITLE); if (d.title.length < 3) fail(400, "Escreva um título (mínimo 3 letras)."); }
    if (body.text !== undefined) { d.text = clean(body.text, MAX_TEXT); if (d.text.length < 3) fail(400, "Escreva o texto da publicação."); }
    if (body.category !== undefined) { const c = oneLine(body.category, MAX_CAT); if (c) d.category = c; else delete d.category; }
    d.updatedAt = now();
    await (await forum()).set(found.key, d);
    bust();
    await ctx.logEvent(req, "forum_editou", user, { post: d.id });
    return json({ post: view(d, await authorOf(d.authorId)) });
  }
  if (parts.length === 2 && method === "DELETE") {
    needAdmin();
    if (!found) fail(404, "Publicação não encontrada.");
    const f = await forum();
    await Promise.all([f.delete(found.key), f.delete("ix:" + id)]);
    bust();
    await ctx.logEvent(req, "forum_apagou", user, { post: id, titulo: found.doc.title });
    return json({ ok: true });
  }
  return null;
}

// Fórum dos gestores: publicações simples (título, categoria opcional e texto) que só gestores escrevem.
// O aluno não vê o fórum no menu: os posts aparecem na busca e ele abre para ler.
// Chaves (store "forum"): f:<tempo invertido>:<id> (o post) e ix:<id> (onde está cada post).
import { store, pmap, cached } from "./db.mjs";
import { newId, can, isStaff } from "./auth.mjs";
import * as notify from "./notify.mjs";
import * as mod from "./moderation.mjs";
import { now } from "./clock.mjs";
import { match, snippet } from "./textsearch.mjs";
import { FORUM_MANUAL } from "./forum-manual.mjs";

const MAX_TITLE = 120, MAX_CAT = 30, MAX_TEXT = 8000, PAGE = 20, MAX_POSTS = 2000;
const MAX_SUB_TEXT = 2000, MAX_PENDING_SUB = 5;
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
  const isAdmin = can(user, "forum");
  const needAdmin = () => { if (!isAdmin) fail(403, "Você não tem permissão para esta área."); };
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


  /* ───── dúvidas e sugestões dos alunos: o aluno envia, o gestor aprova ou reprova ─────
     sg:<id>              o envio (status pending | approved | rejected)
     sp:<inv>:<id>        fila de pendentes (mais antigos primeiro)
     su:<aluno>:<inv>:<id> envios de cada aluno (mais novos primeiro)
     sd:<inv>:<id>        já decididos (mais recentes primeiro) */
  if (parts[1] === "envios") {
    const f = await forum();
    const getSub = async (sid) => (sid ? f.get("sg:" + sid) : null);
    const authorView = async (uid) => { const u = await ctx.loadUser(uid); return u ? { id: u.id, name: u.name, nickname: u.nickname || null, avatar: u.avatar || null } : { id: uid, name: "Ex-aluno", nickname: null, avatar: null }; };
    const subView = async (d, withAuthor) => ({
      id: d.id, type: d.type, title: d.title, text: d.text, status: d.status, reason: d.reason || null,
      createdAt: d.createdAt, updatedAt: d.updatedAt || null, decidedAt: d.decidedAt || null, postId: d.postId || null,
      ...(withAuthor ? { author: await authorView(d.userId) } : {}),
    });
    const reindex = async (d, was) => {
      const kPend = `sp:${inv(d.createdAt)}:${d.id}`;
      if (was === "pending") await f.delete(kPend);
      if (d.status === "pending") await f.set(kPend, { id: d.id });
      await f.set(`su:${d.userId}:${inv(d.createdAt)}:${d.id}`, { id: d.id });
      if (d.status !== "pending" && d.decidedAt) await f.set(`sd:${inv(d.decidedAt)}:${d.id}`, { id: d.id });
    };
    const checkFields = (b, d = {}) => {
      const type = b.type === undefined ? d.type : b.type;
      if (!["duvida", "sugestao"].includes(type)) fail(400, "Escolha se é uma dúvida ou uma sugestão.");
      const title = oneLine(b.title === undefined ? d.title : b.title, MAX_TITLE);
      const text = clean(b.text === undefined ? d.text : b.text, MAX_SUB_TEXT);
      if (title.length < 5) fail(400, "Escreva um título (mínimo 5 letras).");
      if (text.length < 10) fail(400, "Conte um pouco mais no texto (mínimo 10 letras).");
      return { type, title, text };
    };

    /* aluno: meus envios */
    if (parts.length === 2 && method === "GET" && !isAdmin) {
      if (isStaff(user)) fail(403, "Você não tem permissão para esta área.");
      const keys = await f.keys({ prefix: `su:${user.id}:`, limit: 60 });
      const docs = (await pmap(keys, async (k) => getSub((await f.get(k))?.id))).filter(Boolean);
      return json({ items: await Promise.all(docs.map((d) => subView(d, false))), max: MAX_PENDING_SUB, pending: docs.filter((d) => d.status === "pending").length });
    }
    /* gestor: fila e histórico */
    if (parts.length === 2 && method === "GET") {
      const status = url.searchParams.get("status") === "done" ? "done" : "pending";
      let docs;
      if (status === "pending") {
        const keys = await f.keys({ prefix: "sp:", limit: 200 });
        docs = (await pmap(keys, async (k) => getSub((await f.get(k))?.id))).filter((d) => d && d.status === "pending").sort((a, b) => a.createdAt - b.createdAt);
      } else {
        const keys = await f.keys({ prefix: "sd:", limit: 40 });
        docs = (await pmap(keys, async (k) => getSub((await f.get(k))?.id))).filter((d) => d && d.status !== "pending");
      }
      const items = [];
      for (const d of docs) items.push(await subView(d, true));
      return json({ items, pending: (await f.keys({ prefix: "sp:", limit: 500 })).length });
    }
    /* aluno: enviar */
    if (parts.length === 2 && method === "POST") {
      if (user.role !== "aluno") fail(403, "Só alunos enviam dúvidas e sugestões. Gestores publicam direto no fórum.");
      const { type, title, text } = checkFields(body);
      const bad = await mod.check(`${title}\n${text}`, user);
      if (bad) { await ctx.logEvent(req, "forum_envio_bloqueado", user, { palavra: bad }); fail(422, "Não foi possível enviar: o texto tem linguagem ofensiva. Reescreva com respeito."); }
      const mine = (await pmap(await f.keys({ prefix: `su:${user.id}:`, limit: 60 }), async (k) => getSub((await f.get(k))?.id))).filter(Boolean);
      if (mine.filter((d) => d.status === "pending").length >= MAX_PENDING_SUB) fail(429, `Você já tem ${MAX_PENDING_SUB} envios aguardando análise. Espere a resposta do gestor.`);
      const t = now();
      const d = { id: newId("sg_"), userId: user.id, type, title, text, status: "pending", createdAt: t };
      await f.set("sg:" + d.id, d);
      await reindex(d, null);
      await ctx.logEvent(req, "forum_envio", user, { envio: d.id, tipo: type });
      return json({ item: await subView(d, false) }, 201);
    }
    const sid = parts[2];
    const d = await getSub(sid);
    /* aluno: editar / reenviar (pendente ou reprovado) */
    if (sid && parts.length === 3 && method === "PATCH") {
      if (!d || d.userId !== user.id) fail(404, "Envio não encontrado.");
      if (d.status === "approved") fail(409, "Esse envio já foi aprovado e virou publicação do fórum.");
      const { type, title, text } = checkFields(body, d);
      const bad = await mod.check(`${title}\n${text}`, user);
      if (bad) fail(422, "Não foi possível enviar: o texto tem linguagem ofensiva. Reescreva com respeito.");
      const was = d.status;
      if (was === "rejected") {
        const keys = await f.keys({ prefix: `su:${user.id}:`, limit: 60 });
        const open = (await pmap(keys, async (k) => getSub((await f.get(k))?.id))).filter((x) => x && x.status === "pending").length;
        if (open >= MAX_PENDING_SUB) fail(429, `Você já tem ${MAX_PENDING_SUB} envios aguardando análise. Espere a resposta do gestor.`);
        await f.delete(`sd:${inv(d.decidedAt)}:${d.id}`);
      }
      Object.assign(d, { type, title, text, status: "pending", updatedAt: now() });
      delete d.reason; delete d.decidedAt; delete d.reviewedBy;
      await f.set("sg:" + d.id, d);
      await reindex(d, was === "pending" ? "pending" : null);
      await ctx.logEvent(req, was === "rejected" ? "forum_reenvio" : "forum_envio_editado", user, { envio: d.id });
      return json({ item: await subView(d, false) });
    }
    /* aluno: apagar o próprio envio que ainda não virou publicação */
    if (sid && parts.length === 3 && method === "DELETE") {
      if (!d || d.userId !== user.id) fail(404, "Envio não encontrado.");
      if (d.status === "approved") fail(409, "Esse envio já virou publicação do fórum.");
      await Promise.all([f.delete("sg:" + d.id), f.delete(`sp:${inv(d.createdAt)}:${d.id}`), f.delete(`su:${d.userId}:${inv(d.createdAt)}:${d.id}`), d.decidedAt ? f.delete(`sd:${inv(d.decidedAt)}:${d.id}`) : null]);
      return json({ ok: true });
    }
    /* gestor: aprovar (pode ajustar título, texto e categoria antes) ou reprovar */
    if (sid && parts.length === 4 && method === "POST" && ["aprovar", "reprovar"].includes(parts[3])) {
      needAdmin();
      if (!d) fail(404, "Envio não encontrado.");
      if (d.status !== "pending") fail(409, d.status === "approved" ? "Esse envio já foi aprovado." : "Esse envio já foi reprovado.");
      const t = now();
      if (parts[3] === "reprovar") {
        d.status = "rejected"; d.reason = oneLine(body.reason, 300) || null; d.decidedAt = t; d.reviewedBy = user.id;
        await f.set("sg:" + d.id, d);
        await f.delete(`sp:${inv(d.createdAt)}:${d.id}`);
        await reindex({ ...d }, null);
        await notify.notifyUser(d.userId, "forum_no", user, null, d.reason ? `${d.title} — ${d.reason}` : d.title, "#/forum/envios");
        await ctx.logEvent(req, "forum_reprovou", user, { envio: d.id, motivo: d.reason || "" });
        return json({ ok: true });
      }
      const title = body.title !== undefined ? oneLine(body.title, MAX_TITLE) : d.title;
      const text = body.text !== undefined ? clean(body.text, MAX_TEXT) : d.text;
      const category = oneLine(body.category, MAX_CAT) || (d.type === "duvida" ? "Dúvida" : "Sugestão");
      if (title.length < 3 || text.length < 3) fail(400, "Título e texto não podem ficar vazios.");
      if ((await f.keys({ prefix: "f:", limit: MAX_POSTS + 1 })).length >= MAX_POSTS) fail(400, `O fórum chegou ao limite de ${MAX_POSTS} publicações.`);
      const post = { id: newId("fo_"), title, text, category, authorId: user.id, createdAt: t, askedBy: d.userId, fromEnvio: d.id };
      const k = `f:${inv(t)}:${post.id}`;
      await Promise.all([f.set(k, post), f.set("ix:" + post.id, { k })]);
      bust();
      d.status = "approved"; d.decidedAt = t; d.reviewedBy = user.id; d.postId = post.id;
      await f.set("sg:" + d.id, d);
      await f.delete(`sp:${inv(d.createdAt)}:${d.id}`);
      await reindex({ ...d }, null);
      await notify.notifyUser(d.userId, "forum_ok", user, null, d.title, "#/forum/" + post.id);
      await ctx.logEvent(req, "forum_aprovou", user, { envio: d.id, post: post.id });
      return json({ ok: true, post: view(post, await authorOf(user.id)) });
    }
    return null;
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

/* quantos envios de alunos aguardam análise (selo no menu do gestor) */
export async function pendingCount() { return cached("forum:pend", 8000, async () => (await (await forum()).keys({ prefix: "sp:", limit: 500 })).length); }

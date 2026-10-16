// Teste de Destaques (stories fixos), Fórum dos gestores e aulas em sequência: node test/destaques.mjs
process.env.LOCAL_DB = "1";
process.env.SIGNUP_APPROVAL = "off";
process.env.ADMIN_EMAILS = "wellington.moreira@mambadigital.com.br";

import assert from "node:assert/strict";
import handler from "../netlify/functions/api.mjs";
import { TRAILS } from "../netlify/functions/lib/manifest.mjs";

let passed = 0;
const ok = (m) => { passed++; console.log("  ✓", m); };

async function call(method, route, { token, body } = {}) {
  const headers = { "content-type": "application/json" };
  if (token) headers.authorization = "Bearer " + token;
  const res = await handler(new Request("http://local/api/" + route, { method, headers, body: body ? JSON.stringify(body) : undefined }));
  return { status: res.status, data: await res.json() };
}
async function signup(name, email) {
  const r = await call("POST", "auth/register", { body: { name, email, password: "Senha1234", password2: "Senha1234" } });
  assert.equal(r.status, 201, JSON.stringify(r.data));
  return { token: r.data.token, id: r.data.user.id };
}

const adm = await signup("Wellington", "wellington.moreira@mambadigital.com.br");
const ana = await signup("Ana Aluna", "ana@exemplo.com");
const leo = await signup("Leo Aluno", "leo@exemplo.com");

console.log("Destaques");
let id1, id2;
{
  let r = await call("POST", "destaques", { token: ana.token, body: { title: "Oi", slides: [{ text: "x" }] } });
  assert.equal(r.status, 403); ok("aluno não publica destaque");

  r = await call("POST", "destaques", { token: adm.token, body: { title: "Meta da semana", slides: [{ text: "Bora bater 5 posts", mood: "gold" }, { text: "Segundo card", mood: "pink" }] } });
  assert.equal(r.status, 201, JSON.stringify(r.data)); id1 = r.data.item.id;
  ok("gestor publica destaque com 2 cards");

  r = await call("POST", "destaques", { token: adm.token, body: { title: "", slides: [{ text: "x" }] } });
  assert.equal(r.status, 400); ok("destaque precisa de nome");
  r = await call("POST", "destaques", { token: adm.token, body: { title: "Vazio", slides: [{ text: "  " }] } });
  assert.equal(r.status, 400); ok("card vazio é recusado");
  r = await call("POST", "destaques", { token: adm.token, body: { title: "Muitos", slides: Array.from({ length: 21 }, () => ({ text: "a" })) } });
  assert.equal(r.status, 400); ok("no máximo 20 cards");
  r = await call("POST", "destaques", { token: adm.token, body: { title: "Foto", slides: [{ media: { type: "image", url: "https://exemplo.com/a.jpg" } }] } });
  assert.equal(r.status, 400); ok("foto precisa vir do envio da plataforma");

  r = await call("POST", "destaques", { token: adm.token, body: { title: "Dica", slides: [{ text: "Use o @ nos posts", mood: "mint" }] } });
  id2 = r.data.item.id;

  r = await call("GET", "destaques", { token: ana.token });
  assert.equal(r.data.items.length, 2); assert.equal(r.data.unseen, 2); assert.equal(r.data.canPost, false);
  assert.ok(r.data.items.every((x) => !x.seen)); ok("aluno vê as bolinhas, as duas como novas");
  r = await call("GET", "me", { token: ana.token });
  assert.equal(r.data.destaques, 2); ok("/me informa quantos destaques novos");

  r = await call("GET", "destaques", { token: adm.token });
  assert.equal(r.data.canPost, true); assert.equal(r.data.unseen, 0); ok("gestor vê os próprios como já vistos");

  r = await call("GET", "destaques/" + id1, { token: ana.token });
  assert.equal(r.data.destaque.slides.length, 2); assert.equal(r.data.destaque.slides[0].mood, "gold"); ok("aluno abre os cards");

  const before = (await call("GET", "me", { token: ana.token })).data.engage.xp;
  r = await call("POST", `destaques/${id1}/seen`, { token: ana.token });
  assert.equal(r.status, 200); assert.equal(r.data.gained, 3);
  r = await call("POST", `destaques/${id1}/seen`, { token: ana.token });
  assert.equal(r.data.gained, 0);
  const after = (await call("GET", "me", { token: ana.token })).data;
  assert.equal(after.engage.xp, before + 3); assert.equal(after.destaques, 1); ok("assistir rende +3 XP uma única vez e tira o selo de novo");

  r = await call("GET", "destaques", { token: ana.token });
  assert.equal(r.data.items[0].seen, false); assert.equal(r.data.items[1].seen, true); ok("não assistidos ficam na frente");
  r = await call("GET", "destaques", { token: leo.token });
  assert.equal(r.data.unseen, 2); ok("o que a Ana viu não muda para o Leo");

  r = await call("POST", `destaques/${id1}/seen`, { token: adm.token });
  assert.equal(r.data.gained, 0); ok("gestor não ganha XP");

  r = await call("DELETE", "destaques/" + id2, { token: ana.token });
  assert.equal(r.status, 403);
  r = await call("DELETE", "destaques/" + id2, { token: adm.token });
  assert.equal(r.status, 200);
  r = await call("GET", "destaques/" + id2, { token: ana.token });
  assert.equal(r.status, 404); ok("só gestor apaga; some para todos");

  // editar: acrescentar cards a um destaque que já existe
  r = await call("PUT", "destaques/" + id1, { token: ana.token, body: { title: "x", slides: [{ text: "x" }] } });
  assert.equal(r.status, 403); ok("aluno não edita destaque");
  r = await call("PUT", "destaques/" + id1, { token: adm.token, body: { title: "Meta da semana", slides: [{ text: "Bora bater 5 posts", mood: "gold" }, { text: "Segundo card", mood: "pink" }, { text: "Terceiro card, novo", mood: "mint" }] } });
  assert.equal(r.status, 200, JSON.stringify(r.data)); assert.equal(r.data.item.count, 3);
  r = await call("GET", "destaques/" + id1, { token: ana.token });
  assert.equal(r.data.destaque.slides.length, 3); assert.equal(r.data.destaque.slides[2].text, "Terceiro card, novo");
  r = await call("GET", "destaques", { token: ana.token });
  assert.equal(r.data.items.find((x) => x.id === id1).seen, false); ok("gestor acrescenta card e quem já viu volta a ver como novo");
  r = await call("GET", "destaques", { token: adm.token });
  assert.equal(r.data.items.find((x) => x.id === id1).seen, true);
  assert.equal(r.data.items[0].author.name, "Wellington"); ok("a bolinha traz o autor (foto de perfil) e o gestor segue como visto");

  // virar post do feed
  r = await call("POST", `destaques/${id1}/to-feed`, { token: ana.token, body: { slide: 0 } });
  assert.equal(r.status, 403); ok("aluno não transforma destaque em post");
  r = await call("POST", `destaques/${id1}/to-feed`, { token: adm.token, body: { slide: 9 } });
  assert.equal(r.status, 400);
  r = await call("POST", `destaques/${id1}/to-feed`, { token: adm.token, body: { slide: 1 } });
  assert.equal(r.status, 200, JSON.stringify(r.data)); assert.equal(r.data.left, 2); assert.equal(r.data.removed, false);
  const postId = r.data.post;
  r = await call("GET", "destaques/" + id1, { token: ana.token });
  assert.deepEqual(r.data.destaque.slides.map((x) => x.text), ["Bora bater 5 posts", "Terceiro card, novo"]);
  r = await call("GET", "feed", { token: ana.token });
  const hit = r.data.posts.find((x) => x.id === postId);
  assert.ok(hit && hit.text === "Segundo card" && hit.author.name === "Wellington"); ok("um card vira post publicado no Feed e sai do destaque");
  r = await call("POST", `destaques/${id1}/to-feed`, { token: adm.token, body: { slide: "all" } });
  assert.equal(r.status, 200); assert.equal(r.data.removed, true);
  r = await call("GET", "destaques/" + id1, { token: ana.token });
  assert.equal(r.status, 404);
  r = await call("GET", "feed", { token: ana.token });
  assert.ok(r.data.posts.some((x) => x.text.includes("Bora bater 5 posts") && x.text.includes("Terceiro card, novo"))); ok("o destaque inteiro vira um post e some da barra");

  r = await call("GET", "admin/engage/config", { token: adm.token });
  assert.equal(r.data.config.xp.destaque, 3); assert.equal(r.data.config.caps.destaque, 10); ok("XP do destaque aparece na configuração");
  const cfg = r.data.config; cfg.xp.destaque = 5;
  r = await call("PUT", "admin/engage/config", { token: adm.token, body: cfg });
  assert.equal(r.data.config.xp.destaque, 5); ok("gestor ajusta o XP do destaque");
}

console.log("Fórum dos gestores");
{
  let r = await call("POST", "forum", { token: ana.token, body: { title: "Tentativa", text: "texto qualquer" } });
  assert.equal(r.status, 403); ok("aluno não publica no fórum");
  r = await call("GET", "forum", { token: ana.token });
  assert.equal(r.status, 403); ok("aluno não lista a gestão do fórum");

  r = await call("POST", "forum", { token: adm.token, body: { title: "Lista de ferramentas úteis", category: "Processos", text: "Planilha de comissão do Mercado Livre\n\nCalculadora de DIFAL e tabela de alíquotas" } });
  assert.equal(r.status, 201, JSON.stringify(r.data));
  const fid = r.data.post.id; ok("gestor publica uma publicação simples");
  r = await call("POST", "forum", { token: adm.token, body: { title: "ab", text: "x" } });
  assert.equal(r.status, 400); ok("título e texto mínimos");

  r = await call("GET", "search?q=" + encodeURIComponent("calculadora difal"), { token: ana.token });
  assert.equal(r.data.forum.length, 1); assert.equal(r.data.forum[0].id, fid); assert.ok(r.data.forum[0].snippet.length > 0); ok("a busca do aluno acha o post do fórum (pelo texto)");
  r = await call("GET", "search?q=" + encodeURIComponent("ferramenta"), { token: ana.token });
  assert.equal(r.data.forum.length, 1); ok("e pelo título, com palavra parecida");
  r = await call("GET", "search?q=" + encodeURIComponent("processos"), { token: leo.token });
  assert.equal(r.data.forum.length, 1); ok("e pela categoria");
  r = await call("GET", "forum/" + fid, { token: ana.token });
  assert.equal(r.status, 200); assert.equal(r.data.post.title, "Lista de ferramentas úteis"); assert.equal(r.data.canEdit, false); ok("aluno abre e lê a publicação");

  r = await call("PATCH", "forum/" + fid, { token: ana.token, body: { title: "Hackeado" } });
  assert.equal(r.status, 403);
  r = await call("PATCH", "forum/" + fid, { token: adm.token, body: { title: "Ferramentas úteis do time", category: "" } });
  assert.equal(r.data.post.title, "Ferramentas úteis do time"); assert.equal(r.data.post.category, null); assert.ok(r.data.post.updatedAt); ok("gestor edita");
  r = await call("GET", "forum", { token: adm.token });
  assert.equal(r.data.items.length, 1); ok("gestor lista");

  r = await call("DELETE", "forum/" + fid, { token: ana.token });
  assert.equal(r.status, 403);
  r = await call("DELETE", "forum/" + fid, { token: adm.token });
  assert.equal(r.status, 200);
  r = await call("GET", "search?q=difal", { token: ana.token });
  assert.equal(r.data.forum.length, 0);
  r = await call("GET", "forum/" + fid, { token: ana.token });
  assert.equal(r.status, 404); ok("apagar tira do fórum e da busca");

  /* manuais iniciais: uma publicação por categoria */
  r = await call("POST", "forum/importar-manuais", { token: ana.token, body: {} });
  assert.equal(r.status, 403); ok("aluno não importa os manuais");
  r = await call("POST", "forum/importar-manuais", { token: adm.token, body: {} });
  assert.equal(r.status, 201, JSON.stringify(r.data)); assert.equal(r.data.created, 90); assert.equal(r.data.skipped, 0); ok("gestor importa os 90 posts do manual");
  r = await call("POST", "forum/importar-manuais", { token: adm.token, body: {} });
  assert.equal(r.status, 200); assert.equal(r.data.created, 0); assert.equal(r.data.skipped, 90); ok("importar de novo não duplica");
  let n = 0, next = null;
  const cats = new Set();
  do {
    r = await call("GET", "forum" + (next ? "?after=" + encodeURIComponent(next) : ""), { token: adm.token });
    n += r.data.items.length; r.data.items.forEach((x) => { assert.ok(x.text.length <= 8000 && x.title.length <= 120); cats.add(x.category); }); next = r.data.next;
  } while (next);
  assert.equal(n, 90); assert.deepEqual([...cats].sort(), ["Amazon", "Bling", "Mercado Livre", "Shopee", "TikTok Shop", "Upseller"]); ok("90 publicações em 6 plataformas");
  for (const [q, cat] of [["gmv max", "TikTok Shop"], ["certificado digital A1", "Bling"], ["shopee xpress", "Shopee"], ["product ads", "Mercado Livre"], ["conciliação bancária", "Bling"], ["central de educação do vendedor", "Shopee"], ["Upseller vídeos tutoriais", "Upseller"]]) {
    r = await call("GET", "search?q=" + encodeURIComponent(q), { token: ana.token });
    assert.ok(r.data.forum.some((f) => f.category === cat), `a busca "${q}" deveria achar um post de ${cat}: ` + JSON.stringify(r.data.forum.map((f) => f.title)));
  }
  ok("o aluno acha os passos básicos pela busca");
}

console.log("Aulas em sequência");
{
  const t = TRAILS[0], m = t.modules[0];
  let r = await call("POST", "progress/lesson", { token: leo.token, body: { lessonId: m.lessons[2] } });
  assert.equal(r.status, 403); ok("aluno não pula para a 3ª aula");
  r = await call("POST", "progress/lesson", { token: leo.token, body: { lessonId: m.lessons[1] } });
  assert.equal(r.status, 403); ok("nem para a 2ª");
  r = await call("POST", "progress/lesson", { token: leo.token, body: { lessonId: m.lessons[0] } });
  assert.equal(r.status, 200);
  r = await call("POST", "progress/lesson", { token: leo.token, body: { lessonId: m.lessons[1] } });
  assert.equal(r.status, 200); ok("assistiu a anterior, a próxima abre");
  r = await call("POST", "progress/lesson", { token: adm.token, body: { lessonId: m.lessons[5] } });
  assert.equal(r.status, 200); ok("gestor navega livre pela trilha");
  r = await call("POST", "progress/lesson", { token: leo.token, body: { lessonId: m.lessons[0] } });
  assert.equal(r.status, 200); ok("rever aula já feita continua valendo");
}

console.log(`\n${passed} verificações de destaques, fórum e aulas em sequência passaram.`);

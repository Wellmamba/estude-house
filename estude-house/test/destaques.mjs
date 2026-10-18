// Teste de Destaques (stories fixos), Fórum dos gestores e aulas em sequência: node test/destaques.mjs
process.env.LOCAL_DB = "1";
process.env.SIGNUP_APPROVAL = "off";
process.env.ADMIN_EMAILS = "wellington.moreira@mambadigital.com.br";

import assert from "node:assert/strict";
import handler from "../netlify/functions/api.mjs";
import { TRAILS } from "../netlify/functions/lib/manifest.mjs";
import { setClock } from "../netlify/functions/lib/clock.mjs";
let skew = 0;
setClock(() => Date.now() + skew);

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

console.log("Destaques: prazo e enquete");
{
  const H = 3600e3;
  const pollSlide = (mode = "open") => ({ text: "Antes de começar", poll: { q: "Qual horário é melhor?", options: ["9h", "14h", "16h"], mode } });
  let r = await call("POST", "destaques", { token: adm.token, body: { title: "Dia", duration: "24h", slides: [{ text: "Vale por 1 dia" }] } });
  assert.equal(r.status, 201, JSON.stringify(r.data)); const d24 = r.data.item.id;
  assert.ok(Math.abs(r.data.item.expiresAt - (Date.now() + 24 * H)) < 5000); ok("prazo de 24 horas grava o fim");
  r = await call("POST", "destaques", { token: adm.token, body: { title: "Semana", duration: "7d", slides: [{ text: "Vale por 1 semana" }] } });
  const d7 = r.data.item.id; assert.ok(Math.abs(r.data.item.expiresAt - (Date.now() + 168 * H)) < 5000); ok("prazo de 1 semana");
  r = await call("POST", "destaques", { token: adm.token, body: { title: "Sempre", duration: "forever", slides: [{ text: "Sem prazo" }] } });
  const dF = r.data.item.id; assert.equal(r.data.item.expiresAt, null); ok("para sempre não tem fim");
  r = await call("POST", "destaques", { token: adm.token, body: { title: "Ruim", duration: "3h", slides: [{ text: "x" }] } });
  assert.equal(r.status, 400); ok("prazo desconhecido é recusado");

  r = await call("GET", "destaques", { token: ana.token });
  assert.ok([d24, d7, dF].every((i) => r.data.items.some((x) => x.id === i))); ok("aluno vê os três enquanto estão no ar");

  // enquete
  r = await call("POST", "destaques", { token: adm.token, body: { title: "Enquete", slides: [pollSlide(), { text: "sem enquete" }] } });
  assert.equal(r.status, 201, JSON.stringify(r.data)); const dp = r.data.item.id;
  for (const bad of [{ q: "x", options: ["a", "b"] }, { q: "Pergunta ok", options: ["só uma"] }, { q: "Pergunta ok", options: ["a", "A"] }, { q: "Pergunta ok", options: ["a", "b", "c", "d", "e"] }]) {
    r = await call("POST", "destaques", { token: adm.token, body: { title: "Ruim", slides: [{ poll: bad }] } });
    assert.equal(r.status, 400, JSON.stringify(bad));
  }
  ok("enquete exige pergunta e de 2 a 4 opções diferentes");
  r = await call("POST", "destaques", { token: adm.token, body: { title: "Só enq", slides: [{ poll: { q: "Pode ser só enquete?", options: ["sim", "claro"] } }] } });
  assert.equal(r.status, 201); const dOnly = r.data.item.id; ok("card pode ter só a enquete");

  r = await call("GET", "destaques/" + dp, { token: ana.token });
  const sl = r.data.destaque.slides[0];
  assert.ok(sl.id && sl.poll.options.length === 3 && sl.poll.mine === null && sl.poll.total === undefined && sl.poll.options[0].n === undefined);
  assert.equal(JSON.stringify(r.data).includes("pid"), false); ok("aluno vê a enquete sem resultado e sem o id interno");

  r = await call("POST", `destaques/${dp}/vote`, { token: ana.token, body: { slide: sl.id, o: 1 } });
  assert.equal(r.status, 200, JSON.stringify(r.data)); assert.equal(r.data.poll.mine, 1); assert.equal(r.data.poll.total, 1); assert.equal(r.data.poll.options[1].pct, 100); ok("voto em enquete aberta mostra o resultado");
  r = await call("POST", `destaques/${dp}/vote`, { token: ana.token, body: { slide: sl.id, o: 0 } });
  assert.equal(r.status, 409); ok("um voto por pessoa");
  r = await call("POST", `destaques/${dp}/vote`, { token: leo.token, body: { slide: sl.id, o: 9 } });
  assert.equal(r.status, 400); ok("opção inexistente é recusada");
  r = await call("POST", `destaques/${dp}/vote`, { token: leo.token, body: { slide: "nao-existe", o: 0 } });
  assert.equal(r.status, 404); ok("card sem enquete não aceita voto");
  r = await call("POST", `destaques/${dp}/vote`, { token: leo.token, body: { slide: sl.id, o: 1 } });
  assert.equal(r.data.poll.total, 2); assert.equal(r.data.poll.options[1].pct, 100); ok("segundo voto soma");
  r = await call("GET", "destaques/" + dp, { token: adm.token });
  assert.equal(r.data.destaque.slides[0].poll.total, 2); ok("gestor vê o resultado mesmo sem votar");

  // secreta
  r = await call("POST", "destaques", { token: adm.token, body: { title: "Secreta", slides: [pollSlide("secret")] } });
  const ds = r.data.item.id; const ssl = (await call("GET", "destaques/" + ds, { token: ana.token })).data.destaque.slides[0];
  r = await call("POST", `destaques/${ds}/vote`, { token: ana.token, body: { slide: ssl.id, o: 2 } });
  assert.equal(r.data.poll.mine, 2); assert.equal(r.data.poll.total, undefined); assert.equal(r.data.poll.options[0].n, undefined); ok("enquete secreta não mostra o resultado a quem vota");
  r = await call("GET", "destaques/" + ds, { token: adm.token });
  assert.equal(r.data.destaque.slides[0].poll.total, 1); assert.equal(r.data.destaque.slides[0].poll.options[2].n, 1); ok("gestor vê o resultado da secreta");

  // editar mantém os votos; mudar a pergunta zera
  const cur = (await call("GET", "destaques/" + dp, { token: adm.token })).data.destaque;
  const same = cur.slides.map((x) => ({ id: x.id, text: x.text, mood: x.mood, poll: x.poll && { q: x.poll.q, mode: x.poll.mode, options: x.poll.options.map((o) => o.t) } }));
  r = await call("PUT", "destaques/" + dp, { token: adm.token, body: { title: "Enquete", slides: same } });
  assert.equal(r.status, 200, JSON.stringify(r.data));
  assert.equal((await call("GET", "destaques/" + dp, { token: adm.token })).data.destaque.slides[0].poll.total, 2); ok("editar sem mexer na enquete mantém os votos");
  assert.equal((await call("GET", "destaques/" + dp, { token: ana.token })).data.destaque.slides[0].poll.mine, 1); ok("quem votou continua com o voto dele");
  same[0].poll.options[0] = "8h";
  await call("PUT", "destaques/" + dp, { token: adm.token, body: { title: "Enquete", slides: same } });
  const after = (await call("GET", "destaques/" + dp, { token: adm.token })).data.destaque;
  assert.equal(after.slides[0].poll.total, 0); ok("mudar as opções zera os votos");
  assert.equal(after.expiresAt, null); ok("editar sem o campo prazo não mexe no prazo");

  // virar post leva a enquete
  r = await call("POST", `destaques/${dOnly}/to-feed`, { token: adm.token, body: { slide: 0 } });
  assert.equal(r.status, 200, JSON.stringify(r.data));
  r = await call("GET", "feed", { token: ana.token });
  const post = r.data.posts.find((x) => x.poll?.questions?.[0]?.text === "Pode ser só enquete?");
  assert.ok(post, "post com enquete no feed"); ok("card com enquete vira post de feed com a enquete");

  // apagar limpa os votos
  r = await call("DELETE", "destaques/" + ds, { token: adm.token });
  assert.equal(r.status, 200); ok("apagar destaque com enquete");

  // vencimento
  skew = 25 * H;
  r = await call("GET", "destaques", { token: ana.token });
  assert.ok(!r.data.items.some((x) => x.id === d24)); assert.ok(r.data.items.some((x) => x.id === d7 && x.id)); ok("depois de 25 horas o de 24h some para o aluno");
  assert.equal((await call("GET", "destaques/" + d24, { token: ana.token })).status, 404); ok("link direto do vencido também não abre");
  assert.equal((await call("POST", `destaques/${d24}/seen`, { token: ana.token })).status, 404);
  r = await call("GET", "destaques", { token: adm.token });
  const ex = r.data.items.find((x) => x.id === d24); assert.ok(ex && ex.expired === true); assert.equal(r.data.items[r.data.items.length - 1].id, d24); ok("gestor ainda vê o vencido, marcado, no fim da fila");
  r = await call("GET", "me", { token: ana.token });
  const feedUnseen = (await call("GET", "destaques", { token: ana.token })).data.unseen;
  assert.equal(r.data.destaques, feedUnseen); ok("o contador de novos ignora os vencidos");
  r = await call("PUT", "destaques/" + d24, { token: adm.token, body: { title: "Dia", duration: "7d", slides: [{ text: "Vale por 1 dia" }] } });
  assert.equal(r.status, 200); assert.ok(r.data.item.expiresAt > Date.now() + 6 * 24 * H);
  assert.ok((await call("GET", "destaques", { token: ana.token })).data.items.some((x) => x.id === d24)); ok("gestor renova o prazo e o destaque volta ao ar");
  r = await call("POST", `destaques/${dp}/vote`, { token: leo.token, body: { slide: after.slides[0].id, o: 0 } });
  assert.equal(r.status, 200);
  skew = 8 * 24 * H;
  assert.ok(!(await call("GET", "destaques", { token: ana.token })).data.items.some((x) => x.id === d7)); ok("depois de 8 dias o de 1 semana sai");
  assert.ok((await call("GET", "destaques", { token: ana.token })).data.items.some((x) => x.id === dF)); ok("o de para sempre continua");
  skew = 0;
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

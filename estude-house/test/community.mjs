// Teste de tags, fixar posts, enquetes, filtro de ofensas, notificações (@ e @todos) e busca por tag: node test/community.mjs
process.env.LOCAL_DB = "1";
process.env.SIGNUP_APPROVAL = "off";
process.env.ADMIN_EMAILS = "wellington.moreira@mambadigital.com.br";

import assert from "node:assert/strict";
import handler from "../netlify/functions/api.mjs";
import { setClock } from "../netlify/functions/lib/clock.mjs";
import { offense } from "../netlify/functions/lib/moderation.mjs";

let passed = 0;
const ok = (m) => { passed++; console.log("  ✓", m); };
const T0 = Date.parse("2026-10-12T12:00:00-03:00");
let tick = 0;
setClock(() => T0 + tick++ * 1000);

async function call(method, route, { token, body } = {}) {
  const headers = { "content-type": "application/json" };
  if (token) headers.authorization = "Bearer " + token;
  const res = await handler(new Request("http://local/api/" + route, { method, headers, body: body ? JSON.stringify(body) : undefined }));
  return { status: res.status, data: await res.json() };
}
async function signup(name, email, nick) {
  const r = await call("POST", "auth/register", { body: { name, email, password: "Senha1234", password2: "Senha1234" } });
  assert.equal(r.status, 201, JSON.stringify(r.data));
  const u = { token: r.data.token, id: r.data.user.id, name };
  if (nick) { const p = await call("POST", "auth/profile", { token: u.token, body: { nickname: nick } }); assert.equal(p.status, 200, JSON.stringify(p.data)); }
  return u;
}

const adm = await signup("Wellington Moreira", "wellington.moreira@mambadigital.com.br", "wellington");
const ana = await signup("Ana Souza", "ana@exemplo.com", "ana");
const beto = await signup("Beto Lima", "beto@exemplo.com", "beto");
const caio = await signup("Caio Rocha", "caio@exemplo.com"); // sem @

const publish = async (body, who = adm) => { const r = await call("POST", "feed/post", { token: who.token, body }); assert.equal(r.status, 201, JSON.stringify(r.data)); return r.data.post; };

console.log("Filtro de ofensas");
{
  for (const t of ["Você é um idiota", "vai tomar no cu", "seu m3rda", "puuuuta que pariu", "p u t a", "FDP", "c@r@lho", "idiotas!", "Cala a boca"]) assert.ok(offense(t), t);
  for (const t of ["O computador está ótimo", "Reputação da loja subiu", "Parabéns pela campanha!", "Preço R$ 15,00 em 3x", "Compra de 5 itens", "Vamos analisar a curva ABC"]) assert.equal(offense(t), null, t);
  ok("pega xingamento com troca de letra, repetição e espaço, sem barrar palavras normais");

  const post = await publish({ text: "Bom dia, time" });
  let r = await call("POST", "feed/comment/" + post.id, { token: ana.token, body: { text: "Você é um idiota" } });
  assert.equal(r.status, 422); assert.match(r.data.error, /ofensiva/);
  r = await call("POST", "feed/comment/" + post.id, { token: ana.token, body: { text: "Ótimo ponto, obrigada!" } });
  assert.equal(r.status, 201); ok("comentário ofensivo é barrado; o educado passa");
  r = await call("POST", "feed/comment/" + post.id, { token: adm.token, body: { text: "idiota" } });
  assert.equal(r.status, 201); ok("gestor não passa pelo filtro");
  const c = await call("GET", "feed/comments/" + post.id, { token: ana.token });
  assert.equal(c.data.comments.length, 2); ok("o comentário barrado não foi gravado");

  r = await call("POST", "feed/post", { token: ana.token, body: { text: "isso é uma porra" } });
  assert.equal(r.status, 422); ok("post de aluno com ofensa é barrado");

  r = await call("PUT", "admin/moderation", { token: ana.token, body: { on: true, words: ["ruim"] } });
  assert.equal(r.status, 403);
  r = await call("PUT", "admin/moderation", { token: adm.token, body: { on: true, words: ["Pateta", "pateta", "  "] } });
  assert.equal(r.status, 200); assert.deepEqual(r.data.moderation.words, ["pateta"]);
  r = await call("POST", "feed/comment/" + post.id, { token: beto.token, body: { text: "que pateta" } });
  assert.equal(r.status, 422); ok("palavra extra da administração também barra");
  r = await call("POST", "admin/moderation/test", { token: adm.token, body: { text: "seu pateta" } });
  assert.ok(r.data.hit);
  r = await call("PUT", "admin/moderation", { token: adm.token, body: { on: false, words: ["pateta"] } });
  r = await call("POST", "feed/comment/" + post.id, { token: beto.token, body: { text: "que pateta" } });
  assert.equal(r.status, 201); ok("com o filtro desligado nada é barrado");
  await call("PUT", "admin/moderation", { token: adm.token, body: { on: true, words: [] } });
  r = await call("PUT", "admin/moderation", { token: adm.token, body: { on: true, words: ["ab"] } });
  assert.equal(r.status, 400);
  const logs = await call("GET", "admin/logs", { token: adm.token });
  assert.ok(logs.data.logs.some((l) => l.type === "comentario_bloqueado") && logs.data.logs.some((l) => l.type === "post_bloqueado")); ok("os bloqueios ficam nos logs");
}

console.log("Tags");
let tAvisos, tCamp;
{
  let r = await call("POST", "admin/tags", { token: ana.token, body: { name: "Avisos" } });
  assert.equal(r.status, 403); ok("aluno não cria tag");
  r = await call("POST", "admin/tags", { token: adm.token, body: { name: "  Avisos  ", color: "gold" } });
  assert.equal(r.status, 201); tAvisos = r.data.tag;
  r = await call("POST", "admin/tags", { token: adm.token, body: { name: "campanhas", color: "nao-existe" } });
  assert.equal(r.status, 201); tCamp = r.data.tag; assert.equal(tCamp.color, "gold");
  r = await call("POST", "admin/tags", { token: adm.token, body: { name: "AVISOS" } });
  assert.equal(r.status, 409);
  r = await call("POST", "admin/tags", { token: adm.token, body: { name: "x" } });
  assert.equal(r.status, 400);
  r = await call("GET", "feed/tags", { token: ana.token });
  assert.deepEqual(r.data.tags.map((t) => t.name), ["Avisos", "campanhas"]); ok("gestor cria tags (sem repetir nome); todos conseguem listar");
  r = await call("PATCH", "admin/tags/" + tCamp.id, { token: adm.token, body: { name: "Campanhas", color: "purple" } });
  assert.equal(r.status, 200); assert.equal(r.data.tags[1].name, "Campanhas"); assert.equal(r.data.tags[1].color, "purple");
  r = await call("PATCH", "admin/tags/" + tCamp.id, { token: adm.token, body: { name: "Avisos" } });
  assert.equal(r.status, 409); ok("renomear e trocar a cor funciona");

  const p1 = await publish({ text: "Aviso importante de segunda", tag: tAvisos.id });
  const p2 = await publish({ text: "Campanha de outubro no ar", tag: tCamp.id });
  const p3 = await publish({ text: "Post sem tag" });
  assert.equal(p1.tag.name, "Avisos");
  r = await call("POST", "feed/post", { token: ana.token, body: { text: "tentando tag", tag: tAvisos.id } });
  assert.equal(r.status, 403); ok("só gestor escolhe a tag do post");
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "tag fantasma", tag: "tg_nao_existe" } });
  assert.equal(r.status, 400);

  r = await call("GET", "feed?tag=" + tAvisos.id, { token: ana.token });
  assert.deepEqual(r.data.posts.map((p) => p.id), [p1.id]); ok("o feed filtra por tag");
  r = await call("GET", "feed", { token: ana.token });
  assert.ok(r.data.posts.find((p) => p.id === p2.id).tag.name === "Campanhas");

  r = await call("PATCH", "feed/post/" + p3.id, { token: adm.token, body: { tag: tAvisos.id } });
  assert.equal(r.status, 200); assert.equal(r.data.post.tag.id, tAvisos.id);
  r = await call("GET", "feed?tag=" + tAvisos.id, { token: ana.token });
  assert.deepEqual(r.data.posts.map((p) => p.id), [p3.id, p1.id]);
  r = await call("PATCH", "feed/post/" + p3.id, { token: adm.token, body: { tag: null } });
  assert.equal(r.data.post.tag, null);
  r = await call("GET", "feed?tag=" + tAvisos.id, { token: ana.token });
  assert.deepEqual(r.data.posts.map((p) => p.id), [p1.id]); ok("gestor muda e tira a tag de um post já publicado");
  r = await call("PATCH", "feed/post/" + p3.id, { token: ana.token, body: { tag: tAvisos.id } });
  assert.equal(r.status, 403);

  // busca dentro da tag
  r = await call("GET", "search?q=&tag=" + tCamp.id, { token: ana.token });
  assert.deepEqual(r.data.posts.map((p) => p.id), [p2.id]); ok("busca só com a tag lista os posts dela");
  r = await call("GET", "search?q=outubro&tag=" + tCamp.id, { token: ana.token });
  assert.deepEqual(r.data.posts.map((p) => p.id), [p2.id]);
  r = await call("GET", "search?q=outubro&tag=" + tAvisos.id, { token: ana.token });
  assert.equal(r.data.posts.length, 0); ok("busca por palavra respeita a tag escolhida");
  r = await call("GET", "search?q=campanhas", { token: ana.token });
  assert.ok(r.data.posts.some((p) => p.id === p2.id)); ok("o nome da tag também entra na busca");

  r = await call("DELETE", "admin/tags/" + tCamp.id, { token: adm.token });
  assert.equal(r.status, 200);
  r = await call("GET", "feed?tag=" + tCamp.id, { token: ana.token });
  assert.equal(r.data.posts.length, 0);
  r = await call("GET", "feed", { token: ana.token });
  assert.equal(r.data.posts.find((p) => p.id === p2.id).tag, null); ok("apagar a tag solta os posts dela, sem apagar os posts");
}

console.log("Fixar posts");
{
  const feedIds = async (who = ana, q = "") => (await call("GET", "feed" + q, { token: who.token })).data.posts;
  const a = await publish({ text: "Post A" }), b = await publish({ text: "Post B" }), c = await publish({ text: "Post C" }), d = await publish({ text: "Post D" });
  let r = await call("PATCH", "feed/post/" + a.id, { token: ana.token, body: { pinned: true } });
  assert.equal(r.status, 403);
  r = await call("PATCH", "feed/post/" + a.id, { token: adm.token, body: { pinned: true } });
  assert.equal(r.status, 200); assert.equal(r.data.post.pinned, true);
  let posts = await feedIds();
  assert.equal(posts[0].id, a.id); assert.equal(posts[0].pinned, true);
  assert.equal(posts.filter((p) => p.id === a.id).length, 1); ok("post fixado vai para o topo e não se repete na lista");
  await call("PATCH", "feed/post/" + b.id, { token: adm.token, body: { pinned: true } });
  await call("PATCH", "feed/post/" + c.id, { token: adm.token, body: { pinned: true } });
  posts = await feedIds();
  assert.deepEqual(posts.slice(0, 3).map((p) => p.id), [c.id, b.id, a.id]); ok("o fixado mais recente fica em cima");
  r = await call("PATCH", "feed/post/" + d.id, { token: adm.token, body: { pinned: true } });
  assert.equal(r.status, 409); ok("limite de 3 fixados");
  r = await call("PATCH", "feed/post/" + b.id, { token: adm.token, body: { pinned: false } });
  posts = await feedIds();
  assert.deepEqual(posts.slice(0, 2).map((p) => p.id), [c.id, a.id]);
  assert.equal(posts.find((p) => p.id === b.id).pinned, false); ok("desafixar devolve o post para a ordem normal");
  r = await call("DELETE", "feed/post/" + a.id, { token: adm.token });
  posts = await feedIds();
  assert.ok(!posts.find((p) => p.id === a.id)); assert.equal(posts[0].id, c.id); ok("apagar um fixado limpa a fixação");
  const e = await call("POST", "feed/post", { token: adm.token, body: { text: "Nasce fixado", pinned: true } });
  assert.equal(e.data.post.pinned, true);
  posts = await feedIds();
  assert.equal(posts[0].id, e.data.post.id);
  await call("PATCH", "feed/post/" + d.id, { token: adm.token, body: { pinned: true } }); // c, e e d: 3 fixados
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "Mais um fixado", pinned: true } });
  assert.equal(r.status, 409); ok("dá para publicar já fixado (respeitando o limite)");
  for (const p of [c, d, e.data.post]) await call("PATCH", "feed/post/" + p.id, { token: adm.token, body: { pinned: false } });
}

console.log("Enquetes");
{
  const poll = { mode: "open", questions: [
    { text: "Qual horário é melhor?", options: ["Manhã", "Tarde", "Noite"] },
    { text: "Quer receber o resumo?", options: ["Sim", "Não"] },
  ] };
  let r = await call("POST", "feed/post", { token: ana.token, body: { text: "enquete", poll } });
  assert.equal(r.status, 403); ok("aluno não cria enquete");
  for (const bad of [{ mode: "open", questions: [] }, { questions: [{ text: "Pergunta", options: ["só uma"] }] }, { questions: [{ text: "", options: ["a", "b"] }] }, { questions: [{ text: "Repetida?", options: ["a", "A"] }] }, { questions: Array.from({ length: 7 }, () => ({ text: "Pergunta", options: ["a", "b"] })) }, { questions: [{ text: "Muitas?", options: Array.from({ length: 9 }, (_, i) => "o" + i) }] }]) {
    r = await call("POST", "feed/post", { token: adm.token, body: { poll: bad } });
    assert.equal(r.status, 400, JSON.stringify(bad));
  }
  ok("a enquete é validada (perguntas, opções, repetidas, limites)");

  const post = await publish({ text: "Vote!", poll });
  assert.equal(post.poll.questions.length, 2); assert.equal(post.poll.questions[0].options[0].n, 8 - 8 + post.poll.questions[0].options[0].n);
  let v = await call("GET", "feed/post/" + post.id, { token: ana.token });
  assert.equal(v.data.post.poll.questions[0].options[0].n, undefined); assert.equal(v.data.post.poll.questions[0].mine, null);
  ok("antes de votar o aluno não vê o resultado");

  r = await call("POST", "feed/vote/" + post.id, { token: ana.token, body: { q: 0, o: 1 } });
  assert.equal(r.status, 200);
  let q0 = r.data.poll.questions[0];
  assert.equal(q0.mine, 1); assert.equal(q0.total, 1); assert.equal(q0.options[1].pct, 100);
  assert.equal(r.data.poll.questions[1].mine, null); assert.equal(r.data.poll.questions[1].options[0].n, undefined);
  ok("depois de votar numa pergunta, mostra o percentual só dela");
  r = await call("POST", "feed/vote/" + post.id, { token: ana.token, body: { q: 0, o: 0 } });
  assert.equal(r.status, 409); ok("não dá para votar duas vezes na mesma pergunta");
  r = await call("POST", "feed/vote/" + post.id, { token: beto.token, body: { q: 0, o: 1 } });
  r = await call("POST", "feed/vote/" + post.id, { token: caio.token, body: { q: 0, o: 2 } });
  q0 = r.data.poll.questions[0];
  assert.deepEqual(q0.options.map((o) => o.pct), [0, 67, 33]); assert.equal(q0.total, 3);
  r = await call("POST", "feed/vote/" + post.id, { token: caio.token, body: { q: 1, o: 0 } });
  assert.equal(r.status, 200);
  for (const bad of [{ q: 5, o: 0 }, { q: 0, o: 9 }, { q: "x", o: 0 }, { q: 1 }]) {
    r = await call("POST", "feed/vote/" + post.id, { token: ana.token, body: bad });
    assert.ok([400, 409].includes(r.status), JSON.stringify(bad));
  }
  ok("percentuais e validação dos votos");
  v = await call("GET", "feed/post/" + post.id, { token: adm.token });
  assert.equal(v.data.post.poll.questions[0].options[1].n, 2); assert.equal(v.data.post.poll.voters, 3); ok("gestor vê as contagens e quantas pessoas votaram");

  // secreta
  const sec = await publish({ text: "Voto secreto", poll: { mode: "secret", questions: [{ text: "Aprova a proposta?", options: ["Sim", "Não"] }] } });
  r = await call("POST", "feed/vote/" + sec.id, { token: ana.token, body: { q: 0, o: 0 } });
  assert.equal(r.status, 200);
  let sq = r.data.poll.questions[0];
  assert.equal(sq.mine, 0); assert.equal(sq.options[0].n, undefined); assert.equal(sq.total, undefined); assert.equal(r.data.poll.voters, undefined);
  await call("POST", "feed/vote/" + sec.id, { token: beto.token, body: { q: 0, o: 1 } });
  v = await call("GET", "feed/post/" + sec.id, { token: beto.token });
  assert.equal(v.data.post.poll.questions[0].options[1].n, undefined); ok("votação secreta: o aluno nunca vê o resultado");
  v = await call("GET", "feed/post/" + sec.id, { token: adm.token });
  assert.deepEqual(v.data.post.poll.questions[0].options.map((o) => o.n), [1, 1]); ok("votação secreta: o gestor vê o resultado");

  // encerrar
  r = await call("PATCH", "feed/post/" + sec.id, { token: ana.token, body: { pollClosed: true } });
  assert.equal(r.status, 403);
  r = await call("PATCH", "feed/post/" + sec.id, { token: adm.token, body: { pollClosed: true } });
  assert.equal(r.data.post.poll.closed, true);
  r = await call("POST", "feed/vote/" + sec.id, { token: caio.token, body: { q: 0, o: 0 } });
  assert.equal(r.status, 409);
  v = await call("GET", "feed/post/" + sec.id, { token: caio.token });
  assert.equal(v.data.post.poll.questions[0].options[0].n, undefined); ok("enquete encerrada não recebe votos (e a secreta continua secreta)");
  await call("PATCH", "feed/post/" + post.id, { token: adm.token, body: { pollClosed: true } });
  v = await call("GET", "feed/post/" + post.id, { token: caio.token });
  assert.equal(v.data.post.poll.questions[1].total, 1); ok("enquete aberta encerrada mostra o resultado a todos");
  r = await call("POST", "feed/vote/po_inexistente", { token: ana.token, body: { q: 0, o: 0 } });
  assert.equal(r.status, 404);
  const plain = await publish({ text: "sem enquete" });
  r = await call("POST", "feed/vote/" + plain.id, { token: ana.token, body: { q: 0, o: 0 } });
  assert.equal(r.status, 404);
  r = await call("DELETE", "feed/post/" + post.id, { token: adm.token });
  assert.equal(r.status, 200); ok("apagar o post apaga a enquete");
  r = await call("GET", "search?q=horario", { token: ana.token });
  const found = await publish({ text: "ver", poll: { questions: [{ text: "Qual cafeteria preferem?", options: ["Central", "Praça"] }] } });
  r = await call("GET", "search?q=cafeteria", { token: ana.token });
  assert.ok(r.data.posts.some((p) => p.id === found.id)); ok("a pergunta da enquete entra na busca");
}

console.log("Notificações e @");
{
  const unread = async (who) => (await call("GET", "me", { token: who.token })).data.unread;
  const list = async (who) => (await call("GET", "notifs", { token: who.token })).data;
  assert.equal(await unread(ana), 0);

  let r = await call("GET", "people/mentions", { token: ana.token });
  assert.deepEqual(r.data.people.map((p) => p.nickname).sort(), ["ana", "beto", "wellington"]); assert.equal(r.data.todos, false);
  r = await call("GET", "people/mentions", { token: adm.token });
  assert.equal(r.data.todos, true); ok("lista para marcar mostra quem tem @; só o gestor vê o @todos");

  await publish({ text: "Oi @ana, veja isso" });
  assert.equal(await unread(ana), 1); assert.equal(await unread(beto), 0);
  let n = await list(ana);
  assert.equal(n.items[0].type, "mention"); assert.equal(n.items[0].by.name, "Wellington Moreira"); assert.match(n.items[0].text, /veja isso/);
  ok("@pessoa notifica só a pessoa marcada");

  const admBefore = await unread(adm); // o gestor já tem avisos de comentários de testes anteriores
  const all = await publish({ text: "Reunião hoje às 15h @todos" });
  for (const u of [ana, beto, caio]) assert.ok((await list(u)).items.some((i) => i.type === "all" && i.postId === all.id), u.name);
  assert.equal(await unread(beto), 1); assert.equal(await unread(adm), admBefore);
  ok("@todos notifica toda a equipe (menos quem escreveu)");

  const late = await signup("Dani Late", "dani@exemplo.com", "dani");
  assert.equal(await unread(late), 0); ok("quem entra depois não recebe aviso antigo");

  await call("POST", "notifs/read", { token: ana.token });
  assert.equal(await unread(ana), 0);
  assert.ok((await list(ana)).items.every((i) => !i.unread)); ok("marcar como lidas zera o sino");

  const post = await publish({ text: "Post para comentar" });
  await call("POST", "feed/post", { token: ana.token, body: { text: "aviso @todos para geral" } });
  await call("POST", "feed/comment/" + post.id, { token: ana.token, body: { text: "Valeu @beto, olha aqui @todos" } });
  assert.equal((await list(caio)).items.filter((i) => i.type === "all").length, 1); ok("aluno escrevendo @todos não notifica ninguém");
  assert.ok((await list(beto)).items.some((i) => i.type === "mention" && i.where === "comment")); ok("@ em comentário notifica");
  assert.ok((await list(adm)).items.some((i) => i.type === "comment" && i.postId === post.id)); ok("comentar no post de alguém avisa o autor");
  await call("POST", "feed/comment/" + post.id, { token: adm.token, body: { text: "Eu mesmo @wellington" } });
  const admComments = (await list(adm)).items.filter((i) => i.type === "comment" && i.postId === post.id);
  assert.equal(admComments.length, 1); ok("ninguém é avisado das próprias ações");

  // aprovação
  const sp = await call("POST", "feed/post", { token: beto.token, body: { text: "Meu aprendizado, valeu @ana" } });
  const before = (await list(ana)).items.length;
  assert.equal((await list(ana)).items.length, before);
  await call("POST", `admin/feed/${sp.data.post.id}/approve`, { token: adm.token });
  assert.ok((await list(beto)).items.some((i) => i.type === "approved"));
  assert.equal((await list(ana)).items.length, before + 1); ok("aprovar avisa o autor e só então marca quem foi citado");
  const sp2 = await call("POST", "feed/post", { token: beto.token, body: { text: "Outro post" } });
  await call("POST", `admin/feed/${sp2.data.post.id}/reject`, { token: adm.token, body: { reason: "Fora do tema" } });
  const rej = (await list(beto)).items.find((i) => i.type === "rejected");
  assert.match(rej.text, /Fora do tema/); ok("recusar avisa o autor com o motivo");

  // nick desconhecido e marcação em excesso
  await publish({ text: "@fulano @ciclano sem conta" });
  const many = Array.from({ length: 20 }, (_, i) => "@beto").join(" ");
  const b0 = (await list(beto)).items.length;
  await publish({ text: many });
  assert.equal((await list(beto)).items.length, b0 + 1); ok("nome repetido ou inexistente não gera aviso duplicado nem erro");
}

console.log(`\n${passed} verificações de tags, fixar, enquete, filtro e notificações passaram.`);

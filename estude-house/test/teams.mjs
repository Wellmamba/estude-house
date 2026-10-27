// Teste das comunidades por time (posts que só o time escolhido vê): node test/teams.mjs
process.env.LOCAL_DB = "1";
process.env.SIGNUP_APPROVAL = "off";
process.env.ADMIN_EMAILS = "wellington.moreira@mambadigital.com.br";

import assert from "node:assert/strict";
import handler from "../netlify/functions/api.mjs";

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
const sem = await signup("Sem Time", "sem@exemplo.com");
const sub = await signup("Bia Sub", "bia@exemplo.com");
await call("PATCH", "admin/users/" + sub.id, { token: adm.token, body: { role: "subadmin", perms: ["publicar", "moderar"] } });

console.log("Cadastro de times");
let roxo, ouro;
{
  let r = await call("POST", "admin/teams", { token: ana.token, body: { name: "Time Roxo" } });
  assert.equal(r.status, 403); ok("aluno não cria time");
  r = await call("POST", "admin/teams", { token: sub.token, body: { name: "Time Roxo" } });
  assert.equal(r.status, 403); ok("sub-adm sem 'usuarios' também não");
  r = await call("POST", "admin/teams", { token: adm.token, body: { name: "Time Roxo", color: "purple", emoji: "🏀" } });
  assert.equal(r.status, 201); roxo = r.data.team; assert.equal(roxo.emoji, "🏀"); ok("admin cria time com nome, cor e emoji");
  r = await call("POST", "admin/teams", { token: adm.token, body: { name: "time roxo" } });
  assert.equal(r.status, 409); ok("nome repetido é recusado");
  r = await call("POST", "admin/teams", { token: adm.token, body: { name: "Time Ouro", color: "gold", crest: "https://exemplo.com/x.png" } });
  assert.equal(r.status, 400); ok("brasão só aceita foto enviada pelo botão (Cloudinary da empresa)");
  r = await call("POST", "admin/teams", { token: adm.token, body: { name: "Time Ouro", color: "gold" } });
  assert.equal(r.status, 201); ouro = r.data.team; ok("segundo time criado");
  r = await call("GET", "feed/teams", { token: ana.token });
  assert.equal(r.data.teams.length, 2); assert.equal(r.data.mine, null); ok("aluno vê a lista de times (para as tags) e ainda não tem time");
}

console.log("Time de cada aluno");
{
  let r = await call("PATCH", "admin/users/" + ana.id, { token: adm.token, body: { team: roxo.id } });
  assert.equal(r.status, 200); ok("admin define o time da Ana");
  r = await call("PATCH", "admin/users/" + leo.id, { token: adm.token, body: { team: ouro.id } });
  assert.equal(r.status, 200);
  r = await call("PATCH", "admin/users/" + sem.id, { token: adm.token, body: { team: "tm_inexistente" } });
  assert.equal(r.status, 400); ok("time inexistente é recusado");
  r = await call("GET", "me", { token: ana.token });
  assert.equal(r.data.user.team, roxo.id); ok("a sessão da Ana mostra o time dela");
  r = await call("GET", "admin/users/" + ana.id, { token: adm.token });
  assert.equal(r.data.user.team, roxo.id); ok("o perfil no admin mostra o time");
  r = await call("POST", "admin/users", { token: adm.token, body: { name: "Novo Aluno", email: "novo@exemplo.com", team: ouro.id } });
  assert.equal(r.status, 201); assert.equal(r.data.user.team, ouro.id); ok("novo acesso já nasce no time escolhido");
  r = await call("GET", "admin/teams", { token: adm.token });
  const rowOuro = r.data.teams.find((t) => t.id === ouro.id);
  assert.equal(rowOuro.members, 2); ok("a gestão vê quantas pessoas tem em cada time");
}

console.log("Postar para uma comunidade");
let geral, postRoxo, postOuro;
{
  let r = await call("POST", "feed/post", { token: adm.token, body: { text: "Aviso para todo mundo" } });
  geral = r.data.post.id; assert.equal(r.status, 201);
  r = await call("POST", "feed/post", { token: ana.token, body: { text: "Tentando postar no time", community: roxo.id } });
  assert.equal(r.status, 403); ok("aluno não escolhe comunidade");
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "Só pro roxo", community: "tm_nao_existe" } });
  assert.equal(r.status, 400); ok("comunidade inexistente é recusada");
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "Só pro roxo", community: roxo.id, pinned: true } });
  assert.equal(r.status, 400); ok("post de comunidade não é fixado no feed geral");
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "Só pro roxo", community: roxo.id } });
  assert.equal(r.status, 201); postRoxo = r.data.post.id; assert.equal(r.data.post.community.name, "Time Roxo"); ok("admin publica na comunidade Roxa");
  r = await call("POST", "feed/post", { token: sub.token, body: { text: "Só pro ouro", community: ouro.id } });
  assert.equal(r.status, 201); postOuro = r.data.post.id; ok("sub-adm com 'publicar' também escolhe a comunidade");
}

console.log("Quem vê o quê");
{
  const ids = (r) => r.data.posts.map((p) => p.id);
  let r = await call("GET", "feed", { token: ana.token });
  assert.ok(ids(r).includes(geral) && ids(r).includes(postRoxo) && !ids(r).includes(postOuro)); ok("Ana vê o geral e o post do time dela, não o do outro time");
  r = await call("GET", "feed", { token: leo.token });
  assert.ok(ids(r).includes(geral) && ids(r).includes(postOuro) && !ids(r).includes(postRoxo)); ok("Leo vê o geral e o post do time dele");
  r = await call("GET", "feed", { token: sem.token });
  assert.deepEqual(ids(r), [geral]); ok("quem não tem time só vê o geral");
  r = await call("GET", "feed", { token: adm.token });
  assert.ok(ids(r).includes(postRoxo) && ids(r).includes(postOuro) && ids(r).includes(geral)); ok("a gestão vê tudo");
  r = await call("GET", "feed?community=" + roxo.id, { token: ana.token });
  assert.deepEqual(ids(r), [postRoxo]); ok("filtro por comunidade mostra só os posts dela");
  r = await call("GET", "feed?community=" + roxo.id, { token: leo.token });
  assert.equal(r.status, 404); ok("filtro de outra comunidade é recusado");
  r = await call("GET", "feed?author=" + adm.id, { token: leo.token });
  assert.ok(!ids(r).includes(postRoxo)); ok("o perfil do autor não revela post de outra comunidade");
  r = await call("GET", "feed/post/" + postRoxo, { token: leo.token });
  assert.equal(r.status, 404); ok("abrir o post de outro time pelo endereço dá 404");
  r = await call("POST", "feed/hype/" + postRoxo, { token: leo.token });
  assert.equal(r.status, 404); ok("não dá hype em post de outro time");
  r = await call("POST", "feed/comment/" + postRoxo, { token: leo.token, body: { text: "furando a regra" } });
  assert.equal(r.status, 404); ok("não comenta em post de outro time");
  r = await call("GET", "feed/comments/" + postRoxo, { token: leo.token });
  assert.equal(r.status, 404); ok("não lê comentários de outro time");
  r = await call("POST", "feed/comment/" + postRoxo, { token: ana.token, body: { text: "oi time" } });
  assert.equal(r.status, 201); ok("quem é do time comenta");
  r = await call("GET", "search?q=roxo", { token: leo.token });
  assert.ok(!JSON.stringify(r.data).includes(postRoxo)); ok("a busca não mostra post de outro time");
  r = await call("GET", "feed/pulse", { token: leo.token });
  assert.equal(r.status, 200); ok("sondagem de post novo funciona com times");
}

console.log("Paginação junta geral e comunidade");
{
  for (let i = 0; i < 14; i++) await call("POST", "feed/post", { token: adm.token, body: { text: "Geral " + i, ...(i % 2 ? { community: roxo.id } : {}) } });
  let seen = new Set(), after = "", pages = 0;
  do {
    const r = await call("GET", "feed" + (after ? "?after=" + encodeURIComponent(after) : ""), { token: ana.token });
    r.data.posts.forEach((p) => { assert.ok(!seen.has(p.id), "post repetido"); seen.add(p.id); });
    after = r.data.next || ""; pages++;
  } while (after && pages < 10);
  assert.ok(pages >= 2 && seen.size >= 16); ok("a Ana percorre as páginas sem repetir nem perder post (" + seen.size + " posts em " + pages + " páginas)");
}

console.log("Apagar time");
{
  let r = await call("DELETE", "admin/teams/" + roxo.id, { token: adm.token });
  assert.equal(r.status, 409); ok("não apaga time que ainda tem gente");
  await call("PATCH", "admin/users/" + ana.id, { token: adm.token, body: { team: null } });
  r = await call("DELETE", "admin/teams/" + roxo.id, { token: adm.token });
  assert.equal(r.status, 409); ok("nem time que ainda tem posts na comunidade");
  r = await call("PATCH", "admin/teams/" + ouro.id, { token: adm.token, body: { name: "Time Dourado", color: "orange" } });
  assert.equal(r.status, 200); assert.equal(r.data.team.name, "Time Dourado"); ok("renomear o time muda nas tags dos posts");
}

console.log(`\n${passed} verificações de comunidades passaram.`);

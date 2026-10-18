// Teste de "quem vê a trilha" (todos os alunos ou só os escolhidos): node test/audience.mjs
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
const bia = await signup("Bia Sub", "bia@exemplo.com");
const cau = await signup("Caio Sub", "caio@exemplo.com");
await call("PATCH", "admin/users/" + bia.id, { token: adm.token, body: { role: "subadmin", perms: ["trilhas"] } });
await call("PATCH", "admin/users/" + cau.id, { token: adm.token, body: { role: "subadmin", perms: ["forum"] } });

const T = TRAILS[0];
const lesson1 = T.modules[0].lessons[0];

console.log("Padrão: trilha aparece para todos");
{
  let r = await call("GET", "me", { token: ana.token });
  assert.deepEqual(r.data.hidden, []); ok("sem atribuição, ninguém tem trilha escondida");
  r = await call("GET", "admin/trails", { token: adm.token });
  const row = r.data.trails.find((t) => t.id === T.id);
  assert.equal(row.audience, "all"); assert.equal(row.students, 2); ok("lista do gestor mostra 'todos os alunos'");
}

console.log("Atribuir: só quem o admin escolhe");
{
  let r = await call("GET", `admin/trails/${T.id}/audience`, { token: ana.token });
  assert.equal(r.status, 403); ok("aluno não vê nem muda a atribuição");
  r = await call("GET", `admin/trails/${T.id}/audience`, { token: cau.token });
  assert.equal(r.status, 403); ok("sub-adm sem 'trilhas' também não");
  r = await call("GET", `admin/trails/${T.id}/audience`, { token: bia.token });
  assert.equal(r.status, 200); assert.equal(r.data.mode, "all"); assert.equal(r.data.students.length, 2); ok("sub-adm com 'trilhas' vê o modo e a lista de alunos (sem gestores)");

  r = await call("PUT", `admin/trails/${T.id}/audience`, { token: bia.token, body: { mode: "assigned", users: [ana.id, bia.id, "u_inventado"] } });
  assert.equal(r.status, 200, JSON.stringify(r.data)); assert.equal(r.data.assigned, 1); ok("sub-adm com 'trilhas' atribui; só alunos de verdade entram");

  r = await call("GET", "me", { token: leo.token });
  assert.ok(r.data.hidden.includes(T.id)); assert.ok(r.data.restricted.includes(T.id)); ok("quem não recebeu a trilha tem ela escondida");
  r = await call("GET", "me", { token: ana.token });
  assert.ok(!r.data.hidden.includes(T.id)); ok("quem recebeu continua vendo");
  r = await call("GET", "me", { token: adm.token });
  assert.deepEqual(r.data.hidden, []); ok("gestor vê todas, sempre");

  r = await call("POST", "progress/lesson", { token: leo.token, body: { lessonId: lesson1 } });
  assert.equal(r.status, 403); assert.match(r.data.error, /não está liberada/); ok("o servidor barra aula de trilha não atribuída");
  r = await call("POST", "exam/start", { token: leo.token, body: { scope: T.modules[0].id } });
  assert.equal(r.status, 403); ok("e a prova");
  r = await call("POST", "progress/lesson", { token: ana.token, body: { lessonId: lesson1 } });
  assert.equal(r.status, 200); ok("quem recebeu estuda normalmente");

  r = await call("GET", "admin/trails", { token: adm.token });
  const row = r.data.trails.find((t) => t.id === T.id);
  assert.equal(row.audience, "assigned"); assert.equal(row.assigned, 1); ok("lista do gestor mostra 'só escolhidos' e quantos");

  r = await call("GET", `admin/trails/${T.id}/audience`, { token: adm.token });
  assert.equal(r.data.students.find((s) => s.id === ana.id).has, true); assert.equal(r.data.students.find((s) => s.id === leo.id).has, false); ok("a lista marca quem já recebeu");

  r = await call("GET", "admin/overview", { token: adm.token });
  assert.equal(r.data.trails[T.id].restricted, true); assert.equal(r.data.trails[T.id].audience, 1); ok("o painel conta só quem recebeu a trilha");
}

console.log("Dar e tirar acesso de uma pessoa");
{
  let r = await call("PATCH", "admin/users/" + leo.id, { token: bia.token, body: { trails: [T.id] } });
  assert.equal(r.status, 403); ok("sub-adm só com 'trilhas' não mexe no cadastro do aluno");
  r = await call("PATCH", "admin/users/" + leo.id, { token: adm.token, body: { trails: [T.id, "inexistente"] } });
  assert.equal(r.status, 200); assert.deepEqual(r.data.user.trailAccess, [T.id]); ok("admin libera a trilha para o Leo pela página dele (id inexistente é ignorado)");
  r = await call("POST", "progress/lesson", { token: leo.token, body: { lessonId: lesson1 } });
  assert.equal(r.status, 200); ok("e ele já consegue estudar");
  r = await call("PATCH", "admin/users/" + leo.id, { token: adm.token, body: { trails: [] } });
  r = await call("POST", "progress/lesson", { token: leo.token, body: { lessonId: T.modules[0].lessons[1] } });
  assert.equal(r.status, 403); ok("tirar o acesso fecha de novo (o progresso dele fica guardado)");
  r = await call("GET", "me", { token: leo.token });
  assert.ok(r.data.progress.trails[T.id].lessonsDone >= 1); ok("o que ele já fez continua salvo");
}

console.log("Voltar para todos");
{
  let r = await call("PUT", `admin/trails/${T.id}/audience`, { token: adm.token, body: { mode: "all" } });
  assert.equal(r.status, 200);
  r = await call("GET", "me", { token: leo.token });
  assert.ok(!r.data.hidden.includes(T.id)); assert.ok(!r.data.restricted.includes(T.id)); ok("trilha volta a aparecer para todos os alunos");
  r = await call("PUT", `admin/trails/${T.id}/audience`, { token: adm.token, body: { mode: "assigned", users: [] } });
  r = await call("GET", "me", { token: ana.token });
  assert.ok(r.data.hidden.includes(T.id)); ok("atribuir a ninguém esconde de todos os alunos (só o gestor vê)");
  await call("PUT", `admin/trails/${T.id}/audience`, { token: adm.token, body: { mode: "all" } });
}

console.log("Trilha criada no construtor");
{
  let r = await call("POST", "admin/trails", { token: adm.token, body: { title: "Atendimento nota 10" } });
  const tid = r.data.trail.id;
  const draft = JSON.parse(JSON.stringify(r.data.trail.draft));
  draft.title = "Atendimento nota 10"; draft.finalSize = 5;
  const q = (n) => ({ q: `Pergunta ${n}?`, options: ["Certa", "Errada A", "Errada B"], answer: [0], why: "Porque sim." });
  draft.modules[0].title = "Primeiro contato"; draft.modules[0].lessons[0].title = "Regra dos 5 minutos";
  draft.modules[0].questions = [q(1), q(2), q(3)]; draft.finalQuestions = [q(4), q(5), q(6), q(7), q(8)];
  r = await call("PUT", "admin/trails/" + tid, { token: adm.token, body: { rev: 1, draft } });
  assert.equal(r.status, 200, JSON.stringify(r.data));
  r = await call("POST", `admin/trails/${tid}/publish`, { token: adm.token });
  assert.equal(r.status, 200, JSON.stringify(r.data));

  r = await call("GET", "trails/custom", { token: leo.token });
  assert.equal(r.data.trails.length, 1); ok("trilha nova nasce para todos os alunos");
  const ver1 = r.data.ver;

  r = await call("PUT", `admin/trails/${tid}/audience`, { token: adm.token, body: { mode: "assigned", users: [ana.id] } });
  assert.equal(r.status, 200);
  r = await call("GET", "trails/custom", { token: leo.token });
  assert.equal(r.data.trails.length, 0); ok("quem não recebeu nem baixa o conteúdo da trilha criada");
  r = await call("GET", "trails/custom", { token: ana.token });
  assert.equal(r.data.trails.length, 1); ok("quem recebeu baixa");
  r = await call("GET", "me", { token: leo.token });
  assert.notEqual(r.data.ctv, ver1); ok("a versão muda, então os aparelhos atualizam a lista sozinhos");
  r = await call("GET", "trails/custom", { token: adm.token });
  assert.equal(r.data.trails.length, 1); ok("gestor sempre baixa");

  r = await call("DELETE", "admin/trails/" + tid, { token: adm.token });
  assert.equal(r.status, 200);
}
console.log(`\n${passed} verificações de quem vê a trilha passaram.`);

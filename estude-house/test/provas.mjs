// Teste das provas avulsas e do tour guiado: node test/provas.mjs
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
const bia = await signup("Bia Aluna", "bia@exemplo.com");

const Q = (n, extra = {}) => ({ q: `Pergunta ${n}?`, options: ["Certa", "Errada A", "Errada B"], answer: [0], why: `Porque ${n}.`, topic: "Tema " + (n % 2), ...extra });

console.log("Prova avulsa: criar e publicar");
let pid, doc;
{
  let r = await call("POST", "admin/provas", { token: ana.token, body: { title: "Nao" } });
  assert.equal(r.status, 403); ok("aluno não cria prova");
  r = await call("POST", "admin/provas", { token: adm.token, body: { title: "x" } });
  assert.equal(r.status, 400); ok("prova precisa de nome");
  r = await call("POST", "admin/provas", { token: adm.token, body: { title: "Prova de Reputação" } });
  assert.equal(r.status, 201); doc = r.data.prova; pid = doc.id;
  assert.equal(doc.status, "rascunho"); assert.equal(doc.audience.mode, "assigned"); ok("nasce como rascunho, para ninguém");

  r = await call("POST", `admin/provas/${pid}/status`, { token: adm.token, body: { status: "publicada" } });
  assert.equal(r.status, 400); assert.ok(r.data.problems.length); ok("sem questões não publica");

  r = await call("PUT", `admin/provas/${pid}`, { token: adm.token, body: { rev: doc.rev, title: "Prova de Reputação", tag: "Mercado Livre", description: "Teste rápido", passPct: 70, size: 0, reveal: "pass", questions: [Q(1), Q(2), Q(3), Q(4)] } });
  assert.equal(r.status, 200, JSON.stringify(r.data)); doc = r.data.prova;
  assert.equal(doc.questions.length, 4); assert.deepEqual(doc.questions.map((q) => q.id), ["q1", "q2", "q3", "q4"]); ok("salva 4 questões com ids");
  r = await call("PUT", `admin/provas/${pid}`, { token: adm.token, body: { rev: 1, title: "Velho", questions: [] } });
  assert.equal(r.status, 409); ok("salvar com versão velha é recusado");
  r = await call("PUT", `admin/provas/${pid}`, { token: adm.token, body: { rev: doc.rev, ...doc, questions: [{ ...doc.questions[0], answer: [] }, ...doc.questions.slice(1)] } });
  assert.equal(r.status, 200);
  r = await call("POST", `admin/provas/${pid}/status`, { token: adm.token, body: { status: "publicada" } });
  assert.equal(r.status, 400); assert.match(r.data.error, /Questão 1/); ok("questão sem alternativa certa trava a publicação");
  doc = (await call("GET", `admin/provas/${pid}`, { token: adm.token })).data.prova;
  r = await call("PUT", `admin/provas/${pid}`, { token: adm.token, body: { rev: doc.rev, ...doc, questions: [Q(1, { id: "q1" }), ...doc.questions.slice(1)] } });
  assert.equal(r.status, 200); doc = r.data.prova; ok("corrige a questão");

  r = await call("GET", "provas", { token: ana.token });
  assert.equal(r.data.items.length, 0); ok("rascunho não aparece para o aluno");

  // escolher alunos: só Ana e Bia
  r = await call("GET", `admin/provas/${pid}/audience`, { token: adm.token });
  assert.equal(r.data.mode, "assigned"); assert.equal(r.data.students.length, 3); ok("lista os alunos para escolher");
  r = await call("PUT", `admin/provas/${pid}/audience`, { token: adm.token, body: { mode: "assigned", users: [ana.id, bia.id] } });
  assert.equal(r.status, 200); assert.equal(r.data.assigned, 2);
  r = await call("POST", `admin/provas/${pid}/status`, { token: adm.token, body: { status: "publicada" } });
  assert.equal(r.status, 200); assert.equal(r.data.prova.status, "publicada"); ok("publica");

  r = await call("GET", "provas", { token: ana.token });
  assert.equal(r.data.items.length, 1); assert.equal(r.data.pending, 1); assert.equal(r.data.items[0].total, 4); assert.equal(r.data.items[0].tag, "Mercado Livre");
  assert.equal(JSON.stringify(r.data).includes("answer"), false); ok("Ana vê a prova (sem gabarito)");
  r = await call("GET", "provas", { token: leo.token });
  assert.equal(r.data.items.length, 0); ok("Leo, que não foi escolhido, não vê");
  r = await call("POST", `provas/${pid}/start`, { token: leo.token });
  assert.equal(r.status, 404); ok("e não consegue começar pela API");
  r = await call("GET", "notifs", { token: ana.token });
  assert.ok(r.data.items.some((n) => n.type === "prova_nova" && n.link === "#/prova/" + pid)); ok("Ana recebe aviso no sino");
  r = await call("GET", "notifs", { token: leo.token });
  assert.ok(!r.data.items.some((n) => n.type === "prova_nova")); ok("Leo não recebe");

  r = await call("PUT", `admin/provas/${pid}/audience`, { token: adm.token, body: { mode: "assigned", users: [ana.id, bia.id, leo.id] } });
  r = await call("GET", "provas", { token: leo.token });
  assert.equal(r.data.items.length, 1); ok("incluir o Leo depois libera para ele");
  r = await call("GET", "notifs", { token: leo.token });
  assert.ok(r.data.items.some((n) => n.type === "prova_nova")); ok("e ele recebe o aviso");
  await call("PUT", `admin/provas/${pid}/audience`, { token: adm.token, body: { mode: "assigned", users: [ana.id, bia.id] } });
  r = await call("GET", "notifs", { token: ana.token });
  assert.equal(r.data.items.filter((n) => n.type === "prova_nova").length, 1); ok("não repete o aviso");
}

console.log("Prova avulsa: fazer a prova");
{
  let r = await call("POST", `provas/${pid}/start`, { token: ana.token });
  assert.equal(r.status, 200); const a1 = r.data;
  assert.equal(a1.questions.length, 4); assert.ok(a1.questions.every((q) => q.options.length === 3 && q.type === "single")); ok("começa com as 4 questões");
  r = await call("POST", `provas/${pid}/start`, { token: ana.token });
  assert.equal(r.data.attemptId, a1.attemptId); assert.equal(r.data.resumed, true); ok("fechar a página e voltar retoma a mesma tentativa");

  // acha a alternativa certa em cada pergunta: a certa tem o texto "Certa"
  const sheet = (qs, right) => Object.fromEntries(qs.map((q, i) => [q.id, [i < right ? q.options.indexOf("Certa") : q.options.indexOf("Errada A")]]));
  r = await call("POST", `provas/${pid}/submit`, { token: ana.token, body: { attemptId: a1.attemptId, answers: sheet(a1.questions, 2) } });
  assert.equal(r.status, 200); assert.equal(r.data.result.pct, 50); assert.equal(r.data.result.passed, false);
  assert.equal(r.data.result.review, undefined); assert.equal(r.data.result.hidden, 2); assert.ok(r.data.result.topics.length); ok("50%: reprovou e não vê o gabarito");
  r = await call("POST", `provas/${pid}/submit`, { token: ana.token, body: { attemptId: a1.attemptId, answers: {} } });
  assert.equal(r.status, 409); ok("não envia duas vezes");
  r = await call("POST", `provas/${pid}/submit`, { token: bia.token, body: { attemptId: a1.attemptId, answers: {} } });
  assert.equal(r.status, 404); ok("tentativa de outra pessoa não vale");

  r = await call("POST", `provas/${pid}/start`, { token: ana.token });
  const a2 = r.data; assert.notEqual(a2.attemptId, a1.attemptId);
  r = await call("POST", `provas/${pid}/submit`, { token: ana.token, body: { attemptId: a2.attemptId, answers: sheet(a2.questions, 3) } });
  assert.equal(r.data.result.pct, 75); assert.equal(r.data.result.passed, true); assert.equal(r.data.result.review.length, 1);
  assert.ok(r.data.result.review[0].why && r.data.result.review[0].right.length === 1); ok("75%: aprova e vê o gabarito do que errou");
  r = await call("POST", `provas/${pid}/start`, { token: ana.token });
  assert.equal(r.status, 409); ok("aprovada, não refaz");
  r = await call("GET", "provas", { token: ana.token });
  assert.equal(r.data.items[0].status, "approved"); assert.equal(r.data.pending, 0); assert.equal(r.data.items[0].attempts, 2); assert.equal(r.data.items[0].bestPct, 75); ok("lista mostra aprovada, 2 tentativas, melhor 75%");

  // a nota mínima vale; 'sempre mostrar gabarito'
  let d = (await call("GET", `admin/provas/${pid}`, { token: adm.token })).data.prova;
  await call("PUT", `admin/provas/${pid}`, { token: adm.token, body: { rev: d.rev, ...d, passPct: 100, reveal: "always", size: 2 } });
  r = await call("POST", `provas/${pid}/start`, { token: bia.token });
  assert.equal(r.data.questions.length, 2); ok("'questões por tentativa' sorteia só 2");
  const a3 = r.data;
  r = await call("POST", `provas/${pid}/submit`, { token: bia.token, body: { attemptId: a3.attemptId, answers: sheet(a3.questions, 1) } });
  assert.equal(r.data.result.passed, false); assert.equal(r.data.result.review.length, 1); assert.equal(r.data.result.hidden, 0); ok("gabarito 'sempre' aparece mesmo reprovando");

  // resultados do gestor
  r = await call("GET", `admin/provas/${pid}/results`, { token: adm.token });
  assert.equal(r.data.rows.length, 2); const rowAna = r.data.rows.find((x) => x.id === ana.id);
  assert.equal(rowAna.status, "approved"); assert.equal(rowAna.attempts, 2); assert.equal(r.data.rows.find((x) => x.id === bia.id).status, "pending"); ok("gestor vê quem fez, quantas vezes e a nota");
  r = await call("GET", "admin/provas", { token: adm.token });
  const row = r.data.provas[0]; assert.equal(row.started, 2); assert.equal(row.approved, 1); assert.equal(row.assigned, 2); ok("painel resume iniciados e aprovados");

  // encerrar e para todos
  r = await call("POST", `admin/provas/${pid}/status`, { token: adm.token, body: { status: "encerrada" } });
  r = await call("GET", "provas", { token: bia.token });
  assert.equal(r.data.items.length, 0); ok("prova encerrada some para o aluno");
  await call("POST", `admin/provas/${pid}/status`, { token: adm.token, body: { status: "publicada" } });
  await call("PUT", `admin/provas/${pid}/audience`, { token: adm.token, body: { mode: "all" } });
  r = await call("GET", "provas", { token: leo.token });
  assert.equal(r.data.items.length, 1); ok("'todos os alunos' libera para quem não estava na lista");
  r = await call("DELETE", `admin/provas/${pid}`, { token: ana.token });
  assert.equal(r.status, 403);
  r = await call("DELETE", `admin/provas/${pid}`, { token: adm.token });
  assert.equal(r.status, 200); assert.equal((await call("GET", "provas", { token: leo.token })).data.items.length, 0); ok("apagar remove a prova");
}

console.log("Tour guiado");
{
  let r = await call("GET", "me", { token: leo.token });
  assert.equal(r.data.user.tourSeen, false); ok("quem nunca viu o tour entra como 'não visto'");
  r = await call("POST", "auth/tour", { token: leo.token, body: {} });
  assert.equal(r.data.tour, true);
  r = await call("GET", "me", { token: leo.token });
  assert.equal(r.data.user.tourSeen, true); ok("depois de concluir/pular, não aparece mais");
  r = await call("POST", "auth/tour", { token: leo.token, body: { reset: true } });
  assert.equal((await call("GET", "me", { token: leo.token })).data.user.tourSeen, false); ok("'Rever o tour' liga de novo");
  assert.equal((await call("GET", "me", { token: ana.token })).data.user.tourSeen, false); ok("cada pessoa tem o seu");
}

console.log(`\n${passed} verificações de prova avulsa e tour passaram.`);

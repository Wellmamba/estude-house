// Teste de ponta a ponta da API, sem rede: node test/run.mjs
process.env.LOCAL_DB = "1";
process.env.SIGNUP_APPROVAL = "off"; // estes testes cadastram muita gente: a aprovação é testada em test/approval.mjs
process.env.ADMIN_EMAILS = "wellington.moreira@mambadigital.com.br";

import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "../netlify/functions/api.mjs";
import { TRAILS, EXAM_SIZE, examSizeFor } from "../netlify/functions/lib/manifest.mjs";
import { QUESTIONS, byId } from "../netlify/functions/lib/questions/index.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const COURSE = TRAILS[0]; // PriceBot, a primeira trilha
const MOD = COURSE.modules.map((m) => m.id); // ids dos módulos, na ordem da trilha
let passed = 0;
const ok = (name) => { passed++; console.log("  ✓", name); };

async function call(method, route, { token, body } = {}) {
  const headers = { "content-type": "application/json" };
  if (token) headers.authorization = "Bearer " + token;
  const res = await handler(new Request("http://local/api/" + route, { method, headers, body: body ? JSON.stringify(body) : undefined }));
  const data = await res.json();
  return { status: res.status, data };
}

// monta as respostas: acerta `right` questões e erra o resto
function answerSheet(questions, right) {
  const answers = {};
  questions.forEach((q, i) => {
    const bank = byId(q.id);
    const correctTexts = bank.answer.map((a) => bank.options[a]);
    const correctShown = q.options.map((t, idx) => (correctTexts.includes(t) ? idx : -1)).filter((x) => x >= 0);
    if (i < right) answers[q.id] = correctShown;
    else {
      const wrongShown = q.options.map((t, idx) => (correctTexts.includes(t) ? -1 : idx)).filter((x) => x >= 0);
      answers[q.id] = [wrongShown[0]];
    }
  });
  return answers;
}

async function finishLessons(token, mod) {
  for (const l of mod.lessons) {
    const r = await call("POST", "progress/lesson", { token, body: { lessonId: l } });
    assert.equal(r.status, 200);
  }
}

async function takeExam(token, scope, right) {
  const s = await call("POST", "exam/start", { token, body: { scope } });
  assert.equal(s.status, 200, JSON.stringify(s.data));
  const sub = await call("POST", "exam/submit", { token, body: { attemptId: s.data.attemptId, answers: answerSheet(s.data.questions, right) } });
  assert.equal(sub.status, 200, JSON.stringify(sub.data));
  return { start: s.data, result: sub.data.result, progress: sub.data.progress };
}

console.log("Banco de questões");
{
  const ids = new Set();
  for (const q of QUESTIONS) {
    assert.ok(!ids.has(q.id), "id duplicado " + q.id); ids.add(q.id);
    assert.ok(q.options.length >= 4, q.id + " precisa de 4+ alternativas");
    assert.ok(q.answer.length >= 1 && q.answer.every((a) => a >= 0 && a < q.options.length), q.id + " gabarito inválido");
    assert.ok(q.why && q.why.length > 20, q.id + " sem explicação");
    assert.equal(new Set(q.options).size, q.options.length, q.id + " alternativas repetidas");
  }
  for (const m of COURSE.modules) {
    const n = QUESTIONS.filter((q) => q.module === m.id).length;
    assert.ok(n >= examSizeFor(m.id) + 2, `${m.id} tem só ${n} questões (precisa de folga para sortear)`);
  }
  assert.ok(QUESTIONS.filter((q) => q.module === "final").length >= 6);
  assert.ok(QUESTIONS.some((q) => q.answer.length > 1), "falta questão de múltipla escolha");
  ok(`${QUESTIONS.length} questões válidas`);
}
{
  // A prova do módulo de ambientação é o quiz completo da ferramenta: 15 questões, todas as áreas do portal.
  const { drawQuestionIds } = await import("../netlify/functions/lib/exam.mjs");
  const areasAll = new Set(QUESTIONS.filter((q) => q.module === "m0").map((q) => q.area));
  assert.equal(areasAll.size, 9);
  for (let i = 0; i < 300; i++) {
    const ids = drawQuestionIds("m0");
    assert.equal(ids.length, examSizeFor("m0"));
    assert.equal(new Set(ids).size, ids.length);
    const got = new Set(ids.map((id) => QUESTIONS.find((q) => q.id === id).area));
    assert.equal(got.size, areasAll.size, "a prova de ambientação deixou uma área de fora");
  }
  ok("300 sorteios da prova de ambientação: 15 questões únicas, as 9 áreas sempre presentes");
}

console.log("Conteúdo x manifesto");
{
  // Carrega o content.js de cada trilha (public/trilhas/<id>/content.js) e compara com o servidor.
  const dir = path.join(here, "../public/trilhas");
  const win = {};
  const ctx = vm.createContext({ window: win });
  for (const d of fs.readdirSync(dir, { withFileTypes: true }).filter((x) => x.isDirectory())) {
    const f = path.join(dir, d.name, "content.js");
    if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
  }
  const client = win.TRILHAS || [];
  assert.equal(JSON.stringify(client.map((t) => t.id).sort()), JSON.stringify(TRAILS.map((t) => t.id).sort()), "as trilhas do site e do servidor precisam ser as mesmas");
  const seen = new Set();
  for (const t of TRAILS) {
    const ct = client.find((x) => x.id === t.id);
    assert.equal(ct.finalScope || "final", t.finalScope, `${t.id}: finalScope diferente`);
    assert.equal(JSON.stringify(ct.modules.map((m) => m.id)), JSON.stringify(t.modules.map((m) => m.id)), `${t.id}: módulos divergentes`);
    for (const m of t.modules) {
      const cm = ct.modules.find((x) => x.id === m.id);
      assert.equal(JSON.stringify(cm.lessons.map((l) => l.id)), JSON.stringify(m.lessons), "aulas divergentes em " + m.id);
    }
    for (const id of [...t.modules.map((m) => m.id), ...t.modules.flatMap((m) => m.lessons), t.finalScope]) {
      assert.ok(!seen.has(id), "id repetido entre trilhas: " + id); seen.add(id);
    }
    // A prova final sorteia questões dos módulos da trilha e as exclusivas dela (módulo = finalScope); o conjunto precisa cobrir o tamanho da prova.
    const pool = QUESTIONS.filter((q) => q.module === t.finalScope || t.modules.some((m) => m.id === q.module)).length;
    assert.ok(pool >= Math.max(t.finalSize || 30, 6), `${t.id}: faltam questões para a prova final (${pool})`);
  }
  ok(`${TRAILS.length} trilha(s): módulos, aulas e provas finais batem com o servidor e não repetem ids`);
}

console.log("Cadastro e login");
const MASTER = "wellington.moreira@mambadigital.com.br";
let master, aluno;
{
  let r = await call("POST", "auth/register", { body: { name: "Ana Souza", email: "ana@exemplo.com", password: "Senha1234", password2: "Senha9999" } });
  assert.equal(r.status, 400); ok("senhas diferentes são recusadas");
  r = await call("POST", "auth/register", { body: { name: "Ana Souza", email: "ana@exemplo.com", password: "curta", password2: "curta" } });
  assert.equal(r.status, 400); ok("senha fraca é recusada");
  r = await call("POST", "auth/register", { body: { name: "Ana Souza", email: "ana@exemplo.com", password: "Senha1234", password2: "Senha1234" } });
  assert.equal(r.status, 201); aluno = r.data; assert.equal(aluno.user.role, "aluno"); ok("aluna se cadastra");
  r = await call("POST", "auth/register", { body: { name: "Ana", email: "ANA@exemplo.com", password: "Senha1234", password2: "Senha1234" } });
  assert.equal(r.status, 409); ok("e-mail repetido (qualquer caixa) é recusado");
  r = await call("POST", "auth/register", { body: { name: "Wellington Moreira", email: MASTER, password: "Master1234", password2: "Master1234" } });
  assert.equal(r.status, 201); master = r.data; assert.equal(master.user.role, "admin"); ok("e-mail master vira admin");
  r = await call("POST", "auth/login", { body: { email: "ana@exemplo.com", password: "errada123" } });
  assert.equal(r.status, 401); ok("senha errada falha");
  r = await call("POST", "auth/login", { body: { email: "ana@exemplo.com", password: "Senha1234" } });
  assert.equal(r.status, 200); aluno.token = r.data.token; ok("login funciona");
  r = await call("GET", "me");
  assert.equal(r.status, 401); ok("rota protegida sem token");
  r = await call("GET", "admin/users", { token: aluno.token });
  assert.equal(r.status, 403); ok("aluno não acessa admin");
}

console.log("Bloqueios");
{
  const t = aluno.token;
  let r = await call("POST", "exam/start", { token: t, body: { scope: MOD[0] } });
  assert.equal(r.status, 403); ok("prova do módulo exige aulas concluídas");
  r = await call("POST", "progress/lesson", { token: t, body: { lessonId: COURSE.modules[1].lessons[0] } });
  assert.equal(r.status, 403); ok("módulo 2 bloqueado antes de aprovar o 1");
  r = await call("POST", "exam/start", { token: t, body: { scope: "final" } });
  assert.equal(r.status, 403); ok("prova final bloqueada");
}

console.log("Regra: até 70% → refazer tudo");
{
  const t = aluno.token;
  await finishLessons(t, COURSE.modules[0]);
  const e = await takeExam(t, MOD[0], 10); // 10/15 = 66,7% (a prova de ambientação tem 15 questões)
  assert.equal(e.result.outcome, "reprovado");
  assert.equal(e.result.review, undefined, "não pode vazar gabarito");
  assert.equal(e.progress.trails.pricebot.modules[0].done, 0, "aulas do módulo devem ser zeradas");
  ok("66,7% reprova e zera as aulas do módulo");
  await finishLessons(t, COURSE.modules[0]);
  const e70 = await takeExam(t, MOD[0], 10);
  assert.equal(e70.result.outcome, "reprovado");
  ok("repete o ciclo");
}

console.log("Regra: de 70% a 90% → refaz só os erros");
{
  const t = aluno.token;
  await finishLessons(t, COURSE.modules[0]);
  const e = await takeExam(t, MOD[0], 12); // 12/15 = 80%
  assert.equal(e.result.outcome, "refazer-erros");
  assert.equal(e.result.remaining, 3);
  assert.equal(e.result.review, undefined);
  assert.ok(e.result.topics.length >= 1);
  assert.equal(e.progress.trails.pricebot.modules[0].done, COURSE.modules[0].lessons.length, "aulas continuam concluídas");
  ok("80% manda refazer só 3 questões, sem mostrar o gabarito");
  const s = await call("POST", "exam/start", { token: t, body: { scope: MOD[0] } });
  assert.equal(s.data.mode, "retry"); assert.equal(s.data.total, 3);
  const again = await call("POST", "exam/start", { token: t, body: { scope: MOD[0] } });
  assert.equal(again.data.attemptId, s.data.attemptId); assert.equal(again.data.resumed, true);
  ok("a prova de recuperação tem 3 questões e retoma sem sortear de novo");
  const bad = await call("POST", "exam/submit", { token: t, body: { attemptId: s.data.attemptId, answers: answerSheet(s.data.questions, 2) } });
  assert.equal(bad.data.result.outcome, "refazer-erros"); assert.equal(bad.data.result.remaining, 1);
  ok("errar de novo mantém só a questão errada");
  const s2 = await call("POST", "exam/start", { token: t, body: { scope: MOD[0] } });
  assert.equal(s2.data.total, 1);
  const good = await call("POST", "exam/submit", { token: t, body: { attemptId: s2.data.attemptId, answers: answerSheet(s2.data.questions, 1) } });
  assert.equal(good.data.result.outcome, "aprovado");
  assert.equal(good.data.progress.exams[MOD[0]].status, "approved");
  ok("acertar a última aprova o módulo");
  const redo = await call("POST", "exam/start", { token: t, body: { scope: MOD[0] } });
  assert.equal(redo.status, 409); ok("não dá para refazer prova já aprovada");
}

console.log("Regra: acima de 90% → aprovado, vê o erro e o gabarito");
{
  const t = aluno.token;
  await finishLessons(t, COURSE.modules[1]);
  const e = await takeExam(t, MOD[1], 11); // 11/12 = 91,7%
  assert.equal(e.result.outcome, "aprovado");
  assert.equal(e.result.review.length, 1);
  const rv = e.result.review[0];
  assert.ok(rv.right.length >= 1 && rv.why && rv.options.length >= 4 && Array.isArray(rv.picked));
  assert.equal(e.progress.exams[MOD[1]].status, "approved");
  ok("91,7% aprova, mostra a questão errada com resposta certa e explicação");
}

console.log("Fronteiras exatas");
{
  const t = aluno.token;
  await finishLessons(t, COURSE.modules[2]);
  // 12 questões: 9/12 = 75% (refazer), 11/12 aprovado. Fronteira de 90% exige 10,8 → 11.
  const e = await takeExam(t, MOD[2], 9);
  assert.equal(e.result.outcome, "refazer-erros"); ok("75% → refazer erros");
  const s = await call("POST", "exam/start", { token: t, body: { scope: MOD[2] } });
  const done = await call("POST", "exam/submit", { token: t, body: { attemptId: s.data.attemptId, answers: answerSheet(s.data.questions, s.data.total) } });
  assert.equal(done.data.result.outcome, "aprovado");
}

console.log("Trilha completa e prova final");
{
  const t = aluno.token;
  for (const i of COURSE.modules.map((_, k) => k).filter((k) => k >= 3)) {
    await finishLessons(t, COURSE.modules[i]);
    const e = await takeExam(t, COURSE.modules[i].id, 12);
    assert.equal(e.result.outcome, "aprovado");
    assert.equal(e.result.review.length, 0);
  }
  ok(`módulos 4 a ${COURSE.modules.length} aprovados com 100%`);
  let f = await takeExam(t, "final", 21); // 21/30 = 70% exato → reprova
  assert.equal(f.start.total, EXAM_SIZE.final);
  assert.equal(f.result.outcome, "reprovado"); assert.equal(f.result.resetAll, true);
  assert.equal(f.progress.trails.pricebot.finalUnlocked, false);
  assert.ok(f.progress.trails.pricebot.modules.every((m) => m.done === 0 && m.exam === "reset"));
  ok("70% exato na final reprova e zera toda a trilha");
  const lock = await call("POST", "progress/lesson", { token: t, body: { lessonId: COURSE.modules[1].lessons[0] } });
  assert.equal(lock.status, 403); ok("depois do reset, módulos voltam a bloquear");
  for (const m of COURSE.modules) {
    await finishLessons(t, m);
    const e = await takeExam(t, m.id, examSizeFor(m.id));
    assert.equal(e.result.outcome, "aprovado");
  }
  f = await takeExam(t, "final", 28); // 28/30 = 93,3%
  assert.equal(f.result.outcome, "aprovado"); assert.equal(f.result.review.length, 2);
  ok("93,3% na final aprova, com 2 erros revisados");
  const c = await call("GET", "certificate", { token: t });
  assert.equal(c.status, 200); assert.equal(c.data.name, "Ana Souza"); assert.match(c.data.code, /^[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}$/);
  ok("certificado liberado");
  const me = await call("GET", "me", { token: t });
  assert.ok(me.data.progress.xp >= COURSE.modules.length * 100 + 300);
}

console.log("Administração");
{
  const t = master.token;
  let r = await call("GET", "admin/overview", { token: t });
  assert.equal(r.status, 200); assert.equal(r.data.trails.pricebot.approved, 1); ok("visão geral");
  r = await call("POST", "admin/users", { token: t, body: { name: "Carlos Lima", email: "carlos@exemplo.com", role: "aluno" } });
  assert.equal(r.status, 201); assert.ok(r.data.password, "gera senha"); const carlos = r.data.user;
  ok("cria acesso com senha gerada");
  const login = await call("POST", "auth/login", { body: { email: "carlos@exemplo.com", password: r.data.password } });
  assert.equal(login.status, 200); ok("acesso criado consegue entrar");
  r = await call("POST", "admin/users/bulk", { token: t, body: { text: "Nome,Email,Senha,Perfil\nBia Rocha,bia@exemplo.com,,aluno\nDiego Alves;diego@exemplo.com;Diego2026x;adm\nSem Email,,,\nBia Rocha,bia@exemplo.com,,aluno" } });
  assert.equal(r.status, 200);
  assert.equal(r.data.results.filter((x) => x.ok).length, 2); assert.equal(r.data.results.filter((x) => !x.ok).length, 2);
  assert.equal(r.data.results.find((x) => x.email === "diego@exemplo.com").role, "admin");
  ok("subida em lote cria, aceita perfil adm e rejeita linhas ruins");
  r = await call("PATCH", "admin/users/" + carlos.id, { token: t, body: { role: "admin" } });
  assert.equal(r.status, 200); assert.equal(r.data.user.role, "admin"); ok("promove aluno a admin");
  const carlosToken = (await call("POST", "auth/login", { body: { email: "carlos@exemplo.com", password: "x" } })).status;
  const list = await call("GET", "admin/users", { token: t });
  const me = list.data.users.find((u) => u.email === MASTER);
  r = await call("PATCH", "admin/users/" + me.id, { token: t, body: { role: "aluno" } });
  assert.equal(r.status, 403); ok("master não pode ser rebaixado");
  r = await call("DELETE", "admin/users/" + me.id, { token: t });
  assert.equal(r.status, 403); ok("master não pode ser removido");
  r = await call("PATCH", "admin/users/" + carlos.id, { token: t, body: { active: false } });
  assert.equal(r.status, 200);
  const blocked = await call("POST", "auth/login", { body: { email: "carlos@exemplo.com", password: "qualquer1" } });
  assert.ok([401, 403].includes(blocked.status)); ok("desativar bloqueia o acesso");
  const ana = list.data.users.find((u) => u.email === "ana@exemplo.com");
  r = await call("GET", "admin/users/" + ana.id, { token: t });
  assert.equal(r.status, 200); assert.ok(r.data.history.length > 5); ok("detalhe do aluno traz histórico de provas");
  r = await call("POST", `admin/users/${ana.id}/reset`, { token: t, body: { scope: "m2" } });
  assert.equal(r.status, 200); assert.equal(r.data.progress.exams.final, undefined); ok("reset de módulo");
  r = await call("GET", "admin/logs?limit=500", { token: t });
  assert.equal(r.status, 200); assert.ok(r.data.logs.length > 20);
  const types = new Set(r.data.logs.map((l) => l.type));
  for (const need of ["cadastro", "login", "login_falhou", "aula_concluida", "prova_iniciada", "prova_enviada", "admin_criou_acesso"]) assert.ok(types.has(need), "falta log " + need);
  assert.ok(r.data.logs[0].ts >= r.data.logs[r.data.logs.length - 1].ts, "mais recente primeiro");
  ok("logs registrados e ordenados do mais novo ao mais antigo");
  r = await call("GET", "admin/logs?type=login_falhou", { token: t });
  assert.ok(r.data.logs.every((l) => l.type === "login_falhou")); ok("filtro de logs por tipo");
  r = await call("GET", "admin/questions", { token: t });
  assert.equal(r.status, 200); assert.ok(r.data.questions[0].answer); ok("master vê o banco com gabarito");
  r = await call("DELETE", "admin/users/" + ana.id, { token: t });
  assert.equal(r.status, 200); ok("remove usuário");
}

console.log("Bloqueio por tentativas");
{
  let last;
  for (let i = 0; i < 6; i++) last = await call("POST", "auth/login", { body: { email: "bia@exemplo.com", password: "errada" + i } });
  assert.equal(last.status, 429); ok("5 erros travam o login por 10 minutos");
}

console.log("Várias trilhas (trilha fictícia de teste)");
{
  // Registra uma segunda trilha só para o teste: 2 módulos, prova final própria de 6 questões.
  const fake = {
    id: "teste", title: "Trilha de teste", finalScope: "final-teste", finalSize: 6,
    modules: [
      { id: "t-m1", lessons: ["t-l1-1", "t-l1-2"] },
      { id: "t-m2", lessons: ["t-l2-1"] },
    ],
  };
  const mk = (module, n) => Array.from({ length: n }, (_, i) => ({
    id: `${module}-${String(i + 1).padStart(2, "0")}`, module, topic: "Tema " + module,
    q: `Pergunta ${i + 1} do ${module}?`, options: ["Certa de verdade", "Errada um", "Errada dois", "Errada três"], answer: [0],
    why: "Explicação suficientemente longa para passar na checagem do teste.",
  }));
  const fakeQs = [...mk("t-m1", 14), ...mk("t-m2", 14), ...mk("final-teste", 8)];
  TRAILS.push(fake); QUESTIONS.push(...fakeQs);

  const r0 = await call("POST", "auth/register", { body: { name: "Lia Campos", email: "lia@exemplo.com", password: "Senha1234", password2: "Senha1234" } });
  assert.equal(r0.status, 201);
  const t = r0.data.token;
  let me = (await call("GET", "me", { token: t })).data.progress;
  assert.ok(["pricebot", "teste"].every((id) => me.trails[id]), "todas as trilhas aparecem no andamento");
  assert.equal(me.trails.teste.modules[0].unlocked, true);
  assert.equal(me.trails.teste.modules[1].unlocked, false);
  assert.equal(me.trails.pricebot.lessonsDone, 0);
  ok("cada trilha tem o próprio andamento; só o 1º módulo de cada uma começa liberado");

  let r = await call("POST", "progress/lesson", { token: t, body: { lessonId: "t-l2-1" } });
  assert.equal(r.status, 403); ok("módulo 2 da trilha nova bloqueado antes de aprovar o 1");
  r = await call("POST", "progress/lesson", { token: t, body: { lessonId: COURSE.modules[0].lessons[0] } });
  assert.equal(r.status, 200);
  r = await call("POST", "exam/start", { token: t, body: { scope: "final-teste" } });
  assert.equal(r.status, 403); ok("prova final da trilha nova bloqueada");
  r = await call("POST", "exam/start", { token: t, body: { scope: "nao-existe" } });
  assert.ok(r.status >= 400 && r.status < 500); ok("prova de trilha inexistente é recusada");

  // aprova a trilha de teste inteira (módulo 1, módulo 2)
  await finishLessons(t, fake.modules[0]);
  let e = await takeExam(t, "t-m1", examSizeFor("t-m1"));
  assert.equal(e.result.outcome, "aprovado");
  assert.equal(e.progress.trails.teste.modules[1].unlocked, true);
  assert.equal(e.progress.trails.teste.finalUnlocked, false);
  assert.equal(e.progress.trails.pricebot.modulesApproved, 0, "a outra trilha não muda");
  await finishLessons(t, fake.modules[1]);
  e = await takeExam(t, "t-m2", examSizeFor("t-m2"));
  assert.equal(e.progress.trails.teste.finalUnlocked, true);
  assert.equal(e.progress.trails.pricebot.finalUnlocked, false);
  ok("aprovar módulos da trilha nova libera a final dela e não mexe na PriceBot");

  // prova final: tamanho próprio e questões só da trilha
  for (let i = 0; i < 40; i++) {
    const { drawQuestionIds } = await import("../netlify/functions/lib/exam.mjs");
    const ids = drawQuestionIds("final-teste");
    assert.equal(ids.length, 6); assert.equal(new Set(ids).size, 6);
    assert.ok(ids.every((id) => /^(t-m1|t-m2|final-teste)-/.test(id)), "a final da trilha não pode sortear questões de outra trilha");
  }
  ok("a prova final sorteia 6 questões, só da própria trilha");

  // reprovar a final zera só a trilha de teste
  let f = await takeExam(t, "final-teste", 3);
  assert.equal(f.result.outcome, "reprovado"); assert.equal(f.result.resetAll, true);
  assert.equal(f.progress.trails.teste.lessonsDone, 0);
  assert.equal(f.progress.trails.pricebot.lessonsDone, 1, "a lição da PriceBot continua");
  ok("reprovar na final da trilha nova zera só ela");

  for (const m of fake.modules) { await finishLessons(t, m); await takeExam(t, m.id, examSizeFor(m.id)); }
  f = await takeExam(t, "final-teste", 6);
  assert.equal(f.result.outcome, "aprovado");
  assert.equal(f.progress.trails.teste.finalStatus, "approved");
  assert.notEqual(f.progress.trails.pricebot.finalStatus, "approved");
  ok("aprovação na final da trilha nova");

  r = await call("GET", "certificate", { token: t });
  assert.equal(r.status, 403); ok("certificado da PriceBot continua bloqueado");
  r = await call("GET", "certificate?trail=teste", { token: t });
  assert.equal(r.status, 200); assert.equal(r.data.course, "Trilha de teste"); assert.match(r.data.code, /^[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}$/);
  r = await call("GET", "certificate?trail=nada", { token: t });
  assert.equal(r.status, 404); ok("certificado por trilha (e trilha inexistente dá 404)");

  // painel do admin
  const adm = master.token;
  r = await call("GET", "admin/overview", { token: adm });
  assert.equal(r.data.trails.teste.approved, 1); assert.ok(r.data.trails.teste.funnel.length === 2);
  const users = (await call("GET", "admin/users", { token: adm })).data.users;
  const lia = users.find((u) => u.email === "lia@exemplo.com");
  assert.equal(lia.trails.teste.finalStatus, "approved"); assert.equal(lia.trails.pricebot.lessonsDone, 1);
  ok("painel mostra números por trilha");
  r = await call("POST", `admin/users/${lia.id}/reset`, { token: adm, body: { scope: "trail:teste" } });
  assert.equal(r.status, 200);
  assert.equal(r.data.progress.trails.teste.lessonsDone, 0); assert.equal(r.data.progress.trails.teste.finalStatus, null);
  assert.equal(r.data.progress.trails.pricebot.lessonsDone, 1);
  r = await call("POST", `admin/users/${lia.id}/reset`, { token: adm, body: { scope: "trail:nada" } });
  assert.equal(r.status, 400);
  ok("zerar uma trilha pelo admin não toca nas outras");
  await call("DELETE", "admin/users/" + lia.id, { token: adm });

  TRAILS.pop(); QUESTIONS.splice(QUESTIONS.length - fakeQs.length, fakeQs.length);
}

console.log(`\n${passed} verificações passaram.`);

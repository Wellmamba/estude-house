// Teste do construtor de trilhas e do liga/desliga de trilhas: node test/trails.mjs
process.env.LOCAL_DB = "1";
process.env.SIGNUP_APPROVAL = "off";
process.env.ADMIN_EMAILS = "wellington.moreira@mambadigital.com.br";

import assert from "node:assert/strict";
import handler from "../netlify/functions/api.mjs";
import { TRAILS } from "../netlify/functions/lib/manifest.mjs";
import { QUESTIONS } from "../netlify/functions/lib/questions/index.mjs";
import * as trailsLib from "../netlify/functions/lib/trails.mjs";

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
const builtinCount = TRAILS.length;
const builtinQs = QUESTIONS.length;

const q = (n, right = 0) => ({ q: `Pergunta ${n}?`, options: ["Certa", "Errada A", "Errada B", "Errada C"], answer: [right], why: "Porque sim." });

console.log("Construtor: criar e salvar");
let tid, doc;
{
  let r = await call("POST", "admin/trails", { token: ana.token, body: { title: "x" } });
  assert.equal(r.status, 403); ok("aluno não cria trilha");

  r = await call("POST", "admin/trails", { token: adm.token, body: { title: "Atendimento nota 10" } });
  assert.equal(r.status, 201, JSON.stringify(r.data));
  doc = r.data.trail; tid = doc.id;
  assert.match(tid, /^c[0-9a-f]{6}$/);
  assert.equal(doc.draft.modules.length, 1); assert.equal(doc.draft.modules[0].lessons[0].blocks[0].t, "hook");
  ok("gestor cria trilha nova, já com módulo, aula e capa de exemplo");

  r = await call("GET", "admin/trails", { token: adm.token });
  const row = r.data.trails.find((t) => t.id === tid);
  assert.equal(row.status, "rascunho"); assert.ok(r.data.trails.some((t) => t.id === "gf" && t.kind === "nativa" && t.active)); ok("lista mostra nativas e criadas, com o estado de cada");

  r = await call("GET", "trails/custom", { token: ana.token });
  assert.equal(r.data.trails.length, 0); ok("rascunho não aparece para o aluno");

  // monta uma trilha com 2 módulos, vários tipos de card, textos sujos e links perigosos
  const draft = JSON.parse(JSON.stringify(doc.draft));
  draft.title = "Atendimento nota 10"; draft.tag = "Atendimento"; draft.tagline = "Responder bem, rápido e sem drama."; draft.finalSize = 8;
  draft.modules[0].title = "Primeiro contato"; draft.modules[0].tagline = "A primeira resposta decide a venda.";
  draft.modules[0].lessons[0].title = "A regra dos 5 minutos";
  draft.modules[0].lessons[0].blocks = [
    { t: "hook", emoji: "💬", title: "Responda rápido", text: "Quem responde em <b>5 min</b> vende mais.<script>alert(1)</script>" },
    { t: "big", html: "5 minutos <b>mudam</b> tudo", sub: "Dado interno", style: { bg: "gold", font: "serif", size: 1.2, align: "center" } },
    { t: "chart", kind: "bar", title: "Conversão por tempo de resposta", unit: "%", data: [{ label: "5 min", value: 32 }, { label: "1 h", value: 14 }, { label: "1 dia", value: 4 }] },
    { t: "img", url: "https://res.cloudinary.com/demo/image/upload/sample.jpg", caption: "Exemplo" },
    { t: "mvideo", kind: "link", url: "https://www.youtube.com/watch?v=abc123xyz", autoplay: true },
    { t: "quiz", q: "Qual o tempo ideal?", options: ["5 min", "1 dia", "1 semana"], answer: [0], why: "Rápido vende." },
    { t: "free", style: { bg: "#552583", img: "javascript:alert(1)" }, layers: [
      { id: "a", k: "text", x: 10, y: 20, w: 80, html: "Oi <i>gente</i>", size: 9, color: "#fdb927", font: "display" },
      { id: "b", k: "img", x: 10, y: 50, w: 40, h: 30, url: "http://inseguro.com/a.png" },
      { id: "c", k: "bomba", x: 1, y: 1 },
    ] },
    { t: "bomba", html: "<img src=x onerror=alert(1)>" },
  ];
  draft.modules[0].questions = [q(1), q(2), q(3), q(4)];
  draft.modules.push({ title: "Reclamações", tagline: "Transformar reclamação em venda.", lessons: [{ title: "Respire e responda", minutes: 4, goal: "Manter a calma", blocks: [{ t: "p", title: "Passo 1", html: "Leia tudo antes de responder." }] }], questions: [q(5), q(6), q(7)] });
  draft.finalQuestions = [q(8), q(9), q(10), q(11), q(12)];

  r = await call("PUT", "admin/trails/" + tid, { token: adm.token, body: { rev: doc.rev, draft } });
  assert.equal(r.status, 200, JSON.stringify(r.data));
  const sv = r.data.draft;
  const b = sv.modules[0].lessons[0].blocks;
  assert.equal(b.length, 7, "bloco desconhecido some");
  assert.ok(!JSON.stringify(sv).includes("<script"), "script nunca fica salvo");
  assert.ok(!b[0].text.includes("<script") && b[0].text.includes("<b>5 min</b>"), "negrito fica, script vira texto"); ok("textos são limpos: negrito fica, script e tags desconhecidas não");
  assert.equal(b[6].style.img, undefined); assert.equal(b[6].layers.length, 2); assert.equal(b[6].layers[1].url, "");
  assert.equal(b[6].layers[0].html, "Oi <i>gente</i>"); ok("card livre: link inseguro e elemento desconhecido são descartados");
  assert.equal(b[1].style.font, "serif"); assert.equal(b[1].style.align, "center"); assert.equal(b[1].style.size, 1.2); ok("fonte, tamanho, alinhamento e fundo do card ficam salvos");
  doc.rev = r.data.rev;
  doc.draft = sv;

  r = await call("PUT", "admin/trails/" + tid, { token: adm.token, body: { rev: 1, draft } });
  assert.equal(r.status, 409); ok("duas pessoas editando: a segunda é avisada em vez de apagar o trabalho da primeira");
}

console.log("Construtor: publicar");
{
  // incompleto
  let r = await call("POST", "admin/trails", { token: adm.token, body: { title: "Vazia" } });
  const empty = r.data.trail.id;
  r = await call("POST", `admin/trails/${empty}/publish`, { token: adm.token });
  assert.equal(r.status, 422); assert.ok(r.data.problems.some((p) => /prova/i.test(p))); ok("não publica sem prova: diz o que falta");
  await call("DELETE", "admin/trails/" + empty, { token: adm.token });

  // a trilha montada tem um quiz com a resposta fora das alternativas? (o servidor ajusta) e um card livre com imagem vazia
  r = await call("POST", `admin/trails/${tid}/publish`, { token: adm.token });
  assert.equal(r.status, 200, JSON.stringify(r.data)); ok("trilha completa publica");

  assert.equal(TRAILS.length, builtinCount + 1); assert.ok(QUESTIONS.length > builtinQs); ok("entra no manifesto e no banco de questões");

  r = await call("GET", "trails/custom", { token: ana.token });
  assert.equal(r.data.trails.length, 1);
  const t = r.data.trails[0];
  assert.equal(t.id, tid); assert.equal(t.modules[0].n, 1); assert.equal(t.modules[1].n, 2); assert.equal(t.finalScope, "final-" + tid);
  assert.ok(!JSON.stringify(t).includes("Errada A"), "respostas da prova não vão para o aluno"); ok("aluno recebe o conteúdo, sem o gabarito da prova");

  r = await call("GET", "trails/custom?v=" + r.data.ver, { token: ana.token });
  assert.equal(r.data.same, true); ok("quem já tem a versão atual não baixa de novo");

  r = await call("GET", "me", { token: ana.token });
  assert.ok(r.data.progress.trails[tid]); assert.equal(r.data.progress.trails[tid].lessonsTotal, 2); ok("/me já traz o andamento da trilha nova");
}

console.log("Aluno percorre a trilha criada");
{
  const t = (await call("GET", "trails/custom", { token: ana.token })).data.trails[0];
  const [m1, m2] = t.modules;
  let r = await call("POST", "progress/lesson", { token: ana.token, body: { lessonId: m2.lessons[0].id } });
  assert.equal(r.status, 403); ok("módulo 2 começa bloqueado");
  r = await call("POST", "progress/lesson", { token: ana.token, body: { lessonId: m1.lessons[0].id } });
  assert.equal(r.status, 200); assert.equal(r.data.progress.trails[tid].modules[0].done, 1); ok("conclui a aula 1");

  // prova do módulo 1: só as 4 questões dele, sem repetir
  r = await call("POST", "exam/start", { token: ana.token, body: { scope: m1.id } });
  assert.equal(r.status, 200, JSON.stringify(r.data)); assert.equal(r.data.total, 4);
  assert.ok(r.data.questions.every((x) => /^Pergunta \d\?$/.test(x.q)));
  const ans = {};
  for (const x of r.data.questions) ans[x.id] = [x.options.indexOf("Certa")];
  const sub = await call("POST", "exam/submit", { token: ana.token, body: { attemptId: r.data.attemptId, answers: ans } });
  assert.equal(sub.data.result.outcome, "aprovado"); assert.equal(sub.data.progress.trails[tid].modulesApproved, 1); ok("prova do módulo 1: aprovada e libera o módulo 2");

  await call("POST", "progress/lesson", { token: ana.token, body: { lessonId: m2.lessons[0].id } });
  r = await call("POST", "exam/start", { token: ana.token, body: { scope: m2.id } });
  const a2 = {};
  for (const x of r.data.questions) a2[x.id] = [x.options.indexOf("Certa")];
  await call("POST", "exam/submit", { token: ana.token, body: { attemptId: r.data.attemptId, answers: a2 } });

  r = await call("POST", "exam/start", { token: ana.token, body: { scope: t.finalScope } });
  assert.equal(r.status, 200, JSON.stringify(r.data)); assert.ok(r.data.total >= 5 && r.data.total <= 8); ok("prova final sorteia dos módulos e das questões da final");
  const a3 = {};
  for (const x of r.data.questions) a3[x.id] = [x.options.indexOf("Certa")];
  const fin = await call("POST", "exam/submit", { token: ana.token, body: { attemptId: r.data.attemptId, answers: a3 } });
  assert.equal(fin.data.result.outcome, "aprovado");
  r = await call("GET", "certificate?trail=" + tid, { token: ana.token });
  assert.equal(r.status, 200); assert.equal(r.data.course, "Atendimento nota 10"); ok("aprovada na final: certificado da trilha criada");
}

console.log("Editar depois de publicada");
{
  let r = await call("GET", "admin/trails/" + tid, { token: adm.token });
  const d = JSON.parse(JSON.stringify(r.data.trail.draft));
  const lessonId = d.modules[0].lessons[0].id, qid = d.modules[0].questions[0].id;
  d.modules[0].questions.splice(0, 1);
  d.modules[0].lessons.push({ title: "Aula nova", minutes: 2, blocks: [{ t: "p", html: "Texto" }] });
  d.modules.push({ title: "Novo módulo", lessons: [{ title: "x", blocks: [{ t: "p", html: "y" }] }], questions: [] });
  r = await call("PUT", "admin/trails/" + tid, { token: adm.token, body: { rev: r.data.trail.rev, draft: d } });
  assert.equal(r.status, 200);
  const nd = r.data.draft;
  assert.equal(nd.modules[0].lessons[0].id, lessonId); ok("ids das aulas existentes são mantidos (o progresso dos alunos não se perde)");
  assert.ok(nd.modules[0].lessons[1].id.startsWith(tid + "-l")); assert.notEqual(nd.modules[0].lessons[1].id, lessonId); ok("aula nova ganha id novo");

  // aluno ainda vê a versão publicada até publicar de novo
  r = await call("GET", "trails/custom", { token: ana.token });
  assert.equal(r.data.trails[0].modules.length, 2); ok("alunos continuam vendo a versão publicada enquanto o gestor edita");

  r = await call("POST", `admin/trails/${tid}/publish`, { token: adm.token });
  assert.equal(r.status, 422); assert.ok(r.data.problems.some((p) => /Módulo 3/.test(p))); ok("a mudança só vale quando passa pela checagem de publicação");
  assert.ok(qid);
}

console.log("Ativar e inativar trilhas");
{
  let r = await call("GET", "me", { token: ana.token });
  assert.deepEqual(r.data.inactive, []);

  r = await call("POST", "admin/trails/gf/active", { token: ana.token, body: { active: false } });
  assert.equal(r.status, 403); ok("aluno não inativa trilha");

  r = await call("POST", "admin/trails/gf/active", { token: adm.token, body: { active: false } });
  assert.equal(r.status, 200); assert.deepEqual(r.data.inactive, ["gf"]); ok("gestor inativa uma trilha nativa");

  r = await call("GET", "me", { token: ana.token });
  assert.deepEqual(r.data.inactive, ["gf"]); ok("/me avisa quais trilhas estão inativas");

  r = await call("POST", "progress/lesson", { token: ana.token, body: { lessonId: "gf-l1-1" } });
  assert.equal(r.status, 403); assert.match(r.data.error, /inativa/); ok("aluno não conclui aula de trilha inativa");
  r = await call("POST", "exam/start", { token: ana.token, body: { scope: "gf-m1" } });
  assert.equal(r.status, 403); ok("nem inicia prova");
  r = await call("POST", "progress/lesson", { token: adm.token, body: { lessonId: "gf-l1-1" } });
  assert.equal(r.status, 200); ok("gestor continua livre para testar");

  r = await call("POST", `admin/trails/${tid}/active`, { token: adm.token, body: { active: false } });
  assert.deepEqual(r.data.inactive.sort(), ["gf", tid].sort()); ok("também inativa uma trilha criada no construtor");
  r = await call("GET", "admin/trails", { token: adm.token });
  assert.equal(r.data.trails.find((t) => t.id === tid).active, false); assert.equal(r.data.trails.find((t) => t.id === "gf").active, false); ok("lista do gestor mostra as inativas");

  r = await call("POST", "admin/trails/gf/active", { token: adm.token, body: { active: true } });
  assert.deepEqual(r.data.inactive, [tid]);
  r = await call("POST", "progress/lesson", { token: ana.token, body: { lessonId: "gf-l1-1" } });
  assert.equal(r.status, 200); ok("reativada: o aluno volta a estudar e o progresso dele continua lá");
  await call("POST", `admin/trails/${tid}/active`, { token: adm.token, body: { active: true } });

  r = await call("POST", "admin/trails/inexistente/active", { token: adm.token, body: { active: false } });
  assert.equal(r.status, 404); ok("trilha que não existe dá erro claro");
}

console.log("Duplicar e excluir");
{
  let r = await call("POST", `admin/trails/${tid}/duplicate`, { token: adm.token });
  assert.equal(r.status, 201); const cp = r.data.trail;
  assert.notEqual(cp.id, tid); assert.equal(cp.draft.title, "Atendimento nota 10 (cópia)");
  assert.ok(JSON.stringify(cp.draft).includes(cp.id + "-l") && !JSON.stringify(cp.draft).includes(tid + "-")); ok("cópia usa ids próprios");
  r = await call("DELETE", "admin/trails/" + cp.id, { token: adm.token });
  assert.equal(r.status, 200);
  r = await call("GET", "admin/trails/" + cp.id, { token: adm.token });
  assert.equal(r.status, 404); ok("exclui a cópia");

  r = await call("DELETE", "admin/trails/" + tid, { token: adm.token });
  assert.equal(r.status, 200); assert.equal(TRAILS.length, builtinCount); assert.equal(QUESTIONS.length, builtinQs); ok("excluir a publicada tira do manifesto e do banco de questões");
  r = await call("DELETE", "admin/trails/pricebot", { token: adm.token });
  assert.equal(r.status, 400); ok("trilha nativa não se exclui");
}

console.log("Limpeza de HTML");
{
  assert.equal(trailsLib.cleanHtml("<b>a</b> & <i>b</i> <u>c</u><br/>d"), "<b>a</b> &amp; <i>b</i> <u>c</u><br>d");
  assert.equal(trailsLib.cleanHtml('<a href="x" onclick="y">oi</a><img src=x onerror=1>'), "&lt;a href=\"x\" onclick=\"y\"&gt;oi&lt;/a&gt;&lt;img src=x onerror=1&gt;");
  assert.equal(trailsLib.cleanHtml("5 &lt; 6"), "5 &lt; 6"); ok("HTML: só b, i, u, mark e br; o resto vira texto");
}

console.log(`\n${passed} verificações do construtor de trilhas passaram.`);

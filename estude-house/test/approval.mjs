// Teste do cadastro com aprovação do gestor e código de ativação (sem e-mail): node test/approval.mjs
process.env.LOCAL_DB = "1";
process.env.ADMIN_EMAILS = "wellington.moreira@mambadigital.com.br";
delete process.env.SIGNUP_APPROVAL; // aprovação ligada (padrão)

import assert from "node:assert/strict";
import handler from "../netlify/functions/api.mjs";
import { setClock } from "../netlify/functions/lib/clock.mjs";

let passed = 0;
const ok = (m) => { passed++; console.log("  ✓", m); };
const T0 = Date.parse("2026-10-15T12:00:00-03:00");
let offset = 0, tick = 0;
setClock(() => T0 + offset + tick++);
const HOUR = 3600e3;

async function call(method, route, { token, body } = {}) {
  const headers = { "content-type": "application/json" };
  if (token) headers.authorization = "Bearer " + token;
  const res = await handler(new Request("http://site.test/api/" + route, { method, headers, body: body ? JSON.stringify(body) : undefined }));
  return { status: res.status, data: await res.json() };
}
const reg = (name, email) => call("POST", "auth/register", { body: { name, email, password: "Senha1234", password2: "Senha1234" } });
const login = (email, password = "Senha1234") => call("POST", "auth/login", { body: { email, password } });

const MASTER = "wellington.moreira@mambadigital.com.br";

console.log("Cadastro com aprovação");
const rm = await reg("Wellington Moreira", MASTER);
assert.equal(rm.status, 201); assert.ok(rm.data.token);
const adm = rm.data.token;
ok("o master entra direto, sem fila (evita ficar trancado do lado de fora)");

let r = await reg("Bia Lima", "bia@exemplo.com");
assert.equal(r.status, 202); assert.equal(r.data.pending, true); assert.ok(!r.data.token);
ok("quem se cadastra recebe 202, sem sessão");

r = await login("bia@exemplo.com");
assert.equal(r.status, 403); assert.equal(r.data.state, "pending"); assert.ok(!r.data.token);
ok("login antes da aprovação é recusado e diz que está aguardando");
r = await login("bia@exemplo.com", "SenhaErrada1");
assert.equal(r.status, 401);
ok("senha errada continua dando erro genérico (não revela o estado a quem não tem a senha)");

r = await call("GET", "admin/signups", { token: adm });
assert.equal(r.status, 200); assert.equal(r.data.signups.length, 1); assert.equal(r.data.signups[0].access, "pending");
const bia = r.data.signups[0];
ok("o gestor vê a pessoa na fila de cadastros");
r = await call("GET", "me", { token: adm });
assert.equal(r.data.pendingSignups, 1);
ok("o contador de pendências do gestor inclui o cadastro");
r = await call("GET", "admin/users", { token: adm });
assert.ok(!r.data.users.some((u) => u.email === "bia@exemplo.com"));
ok("quem está na fila não aparece em Acessos nem nos números do painel");

r = await call("POST", `admin/signups/${bia.id}/approve`, {});
assert.equal(r.status, 401);
ok("sem sessão de gestor ninguém aprova");

// ao aprovar, o gestor recebe o código para entregar à pessoa
r = await call("POST", `admin/signups/${bia.id}/approve`, { token: adm });
assert.equal(r.status, 200); assert.ok(/^\d{6}$/.test(r.data.code)); assert.ok(!r.data.link && r.data.emailSent === undefined);
const manual = r.data;
ok("a aprovação devolve um código de 6 dígitos para o gestor entregar (sem e-mail)");

r = await login("bia@exemplo.com");
assert.equal(r.status, 403); assert.equal(r.data.state, "invited");
ok("depois de aprovada, falta ativar: o login ainda não entra");

// código errado e depois certo
for (let i = 0; i < 2; i++) {
  r = await call("POST", "auth/activate", { body: { email: "bia@exemplo.com", code: "000000" } });
  assert.equal(r.status, 400);
}
ok("código errado é recusado");
r = await call("POST", "auth/activate", { body: { email: "bia@exemplo.com", code: manual.code } });
assert.equal(r.status, 200); assert.equal(r.data.email, "bia@exemplo.com");
ok("o código certo ativa o acesso");
r = await login("bia@exemplo.com");
assert.equal(r.status, 200); assert.ok(r.data.token);
ok("depois de ativar, o login funciona com a senha escolhida");
r = await call("POST", "auth/activate", { body: { email: "bia@exemplo.com", code: manual.code } });
assert.equal(r.status, 400);
ok("o código só vale uma vez");

console.log("Novo código, expiração e limites");
await reg("Davi Reis", "davi@exemplo.com");
r = await call("GET", "admin/signups", { token: adm });
const davi = r.data.signups.find((s) => s.email === "davi@exemplo.com");
r = await call("POST", `admin/signups/${davi.id}/approve`, { token: adm });
const c1 = r.data.code;
r = await call("POST", `admin/signups/${davi.id}/approve`, { token: adm });
assert.equal(r.status, 409);
ok("aprovar de novo não gera outro código sem querer");
r = await call("POST", `admin/signups/${davi.id}/resend`, { token: adm });
assert.equal(r.status, 200); const c2 = r.data.code;
assert.notEqual(c1, c2);
r = await call("POST", "auth/activate", { body: { email: "davi@exemplo.com", code: c1 } });
assert.equal(r.status, 400);
ok("gerar novo código invalida o anterior");
r = await call("POST", "auth/activate", { body: { u: davi.id, t: "qualquer" } });
assert.equal(r.status, 400);
ok("não existe mais ativação por link");
r = await call("POST", "auth/activate", { body: { email: "DAVI@exemplo.com ", code: c2 } });
assert.equal(r.status, 200);
r = await login("davi@exemplo.com");
assert.equal(r.status, 200);
ok("o código novo ativa (e-mail em qualquer caixa) e a pessoa entra com a senha");
r = await call("POST", "auth/activate", { body: { email: "bia@exemplo.com", code: "123456" } });
assert.equal(r.status, 400);
ok("quem já está ativo não ativa de novo");

await reg("Eva Nunes", "eva@exemplo.com");
r = await call("GET", "admin/signups", { token: adm });
const eva = r.data.signups.find((s) => s.email === "eva@exemplo.com");
r = await call("POST", `admin/signups/${eva.id}/approve`, { token: adm });
const evaCode = r.data.code;
offset += 49 * HOUR;
r = await call("POST", "auth/activate", { body: { email: "eva@exemplo.com", code: evaCode } });
assert.equal(r.status, 400);
ok("o código expira depois de 48 horas");
r = await call("GET", "admin/signups", { token: adm });
assert.equal(r.data.signups.find((s) => s.email === "eva@exemplo.com").expired, true);
ok("a lista do gestor marca o código como expirado");
r = await call("POST", `admin/signups/${eva.id}/resend`, { token: adm });
const e2 = r.data.code;
for (let i = 0; i < 5; i++) r = await call("POST", "auth/activate", { body: { email: "eva@exemplo.com", code: e2 === "111111" ? "222222" : "111111" } });
assert.equal(r.status, 429);
r = await call("POST", "auth/activate", { body: { email: "eva@exemplo.com", code: e2 } });
assert.equal(r.status, 429);
ok("depois de 5 códigos errados o código é bloqueado");
r = await call("POST", `admin/signups/${eva.id}/resend`, { token: adm });
r = await call("POST", "auth/activate", { body: { email: "eva@exemplo.com", code: r.data.code } });
assert.equal(r.status, 200);
ok("o gestor gera outro código e a pessoa consegue ativar");

console.log("Recusa e remoção");
await reg("Fábio Melo", "fabio@exemplo.com");
r = await call("GET", "admin/signups", { token: adm });
const fabio = r.data.signups.find((s) => s.email === "fabio@exemplo.com");
r = await call("POST", `admin/signups/${fabio.id}/reject`, { token: adm, body: { reason: "Não é do time" } });
assert.equal(r.status, 200);
r = await login("fabio@exemplo.com");
assert.equal(r.status, 403); assert.equal(r.data.state, "rejected");
ok("cadastro recusado não entra");
r = await call("POST", `admin/signups/${fabio.id}/approve`, { token: adm });
assert.equal(r.status, 200);
ok("o gestor pode voltar atrás e aprovar depois");
r = await call("DELETE", `admin/signups/${fabio.id}`, { token: adm });
assert.equal(r.status, 200);
r = await reg("Fábio Melo", "fabio@exemplo.com");
assert.equal(r.status, 202);
ok("remover o cadastro libera o e-mail para tentar de novo");

// alunos não mexem na fila
const alu = (await login("bia@exemplo.com")).data.token;
r = await call("GET", "admin/signups", { token: alu });
assert.equal(r.status, 403);
ok("aluno não acessa a fila de cadastros");

// interruptor de emergência
process.env.SIGNUP_APPROVAL = "off";
r = await reg("Gil Prado", "gil@exemplo.com");
assert.equal(r.status, 201); assert.ok(r.data.token);
ok("SIGNUP_APPROVAL=off volta ao cadastro livre");

console.log(`\n${passed} verificações de aprovação de cadastro passaram.`);

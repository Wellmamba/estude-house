// Backup do banco (só master) e carga no ambiente local: node test/backup.mjs
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
const reg = async (name, email) => { const r = await call("POST", "auth/register", { body: { name, email, password: "Senha1234", password2: "Senha1234" } }); assert.equal(r.status, 201); return r.data; };

const adm = await reg("Wellington", "wellington.moreira@mambadigital.com.br");
const ana = await reg("Ana Aluna", "ana@exemplo.com");
const gest = await reg("Gestor Comum", "gestor@exemplo.com");
await call("PATCH", "admin/users/" + gest.user.id, { token: adm.token, body: { role: "admin" } });

console.log("Backup do banco");
{
  let r = await call("GET", "me", { token: adm.token });
  assert.equal(r.data.user.master, true); ok("a sessão do master informa que ele é master");
  r = await call("GET", "me", { token: gest.token });
  assert.ok(!r.data.user.master); ok("outro administrador não é master");

  for (const t of [ana.token, gest.token]) {
    r = await call("GET", "admin/backup", { token: t }); assert.equal(r.status, 403);
    r = await call("GET", "admin/backup/users", { token: t }); assert.equal(r.status, 403);
  }
  ok("aluno e administrador comum não baixam o banco");
  r = await call("GET", "admin/backup", { token: adm.token });
  assert.equal(r.status, 200); assert.ok(r.data.stores.includes("users")); assert.ok(!r.data.stores.includes("rl"));
  ok("o master recebe a lista de bancos (sem o de limite de tentativas)");

  r = await call("GET", "admin/backup/users", { token: adm.token });
  assert.equal(r.status, 200);
  const emails = r.data.entries.map(([, v]) => v.email).sort();
  assert.deepEqual(emails, ["ana@exemplo.com", "gestor@exemplo.com", "wellington.moreira@mambadigital.com.br"]);
  assert.equal(r.data.next, null); ok("o master recebe os registros de cada banco");
  r = await call("GET", "admin/backup/rl", { token: adm.token }); assert.equal(r.status, 404);
  r = await call("GET", "admin/backup/xyz", { token: adm.token }); assert.equal(r.status, 404);
  ok("banco fora da lista não sai");
  r = await call("GET", "admin/logs?type=backup_baixado", { token: adm.token });
  assert.ok((r.data.logs || r.data.rows || r.data.items || []).some((l) => l.type === "backup_baixado")); ok("o download fica registrado nos logs");
}
console.log(`\n${passed} verificações de backup passaram.`);

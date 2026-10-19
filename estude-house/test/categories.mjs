// Categorias de trilha controladas pelo gestor: node test/categories.mjs
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
const bia = await signup("Bia Sub", "bia@exemplo.com");
const cau = await signup("Caio Sub", "caio@exemplo.com");
await call("PATCH", "admin/users/" + bia.id, { token: adm.token, body: { role: "subadmin", perms: ["trilhas"] } });
await call("PATCH", "admin/users/" + cau.id, { token: adm.token, body: { role: "subadmin", perms: ["forum"] } });
const T = TRAILS[0];

console.log("Permissões");
{
  for (const [m, rt, b] of [["GET", "admin/trails/categories"], ["PUT", "admin/trails/categories", { list: ["X"] }], ["POST", `admin/trails/${T.id}/category`, { category: "X" }]]) {
    let r = await call(m, rt, { token: ana.token, body: b }); assert.equal(r.status, 403, "aluno " + rt);
    r = await call(m, rt, { token: cau.token, body: b }); assert.equal(r.status, 403, "sub sem permissão " + rt);
    r = await call(m, rt, { body: b }); assert.equal(r.status, 401, "sem login " + rt);
  }
  ok("aluno, sub-adm sem a permissão de trilhas e visitante não mexem em categorias");
}

console.log("Lista de categorias");
{
  let r = await call("GET", "admin/trails/categories", { token: adm.token });
  assert.equal(r.status, 200); assert.deepEqual(r.data.list, []); ok("começa vazia");
  r = await call("PUT", "admin/trails/categories", { token: bia.token, body: { list: ["Mercado Livre", "  Shopee ", "shopee", "Trilha", "", "Atendimento"] } });
  assert.equal(r.status, 200, JSON.stringify(r.data));
  assert.deepEqual(r.data.list, ["Mercado Livre", "Shopee", "Atendimento"]); ok("limpa espaços, duplicadas (sem diferenciar maiúscula), vazias e o nome reservado 'Trilha'; sub-adm com permissão pode");
  r = await call("PUT", "admin/trails/categories", { token: adm.token, body: { list: Array.from({ length: 31 }, (_, i) => "C" + i) } });
  assert.equal(r.status, 400); ok("limite de 30 categorias");
}

console.log("Atribuir categoria a qualquer trilha (inclusive nativa)");
{
  let r = await call("POST", `admin/trails/${T.id}/category`, { token: adm.token, body: { category: "Shopee" } });
  assert.equal(r.status, 200, JSON.stringify(r.data)); assert.equal(r.data.map[T.id], "Shopee"); ok("trilha nativa recebe a categoria escolhida");
  r = await call("GET", "me", { token: ana.token });
  assert.equal(r.data.cats.map[T.id], "Shopee"); assert.ok(r.data.cats.list.includes("Shopee")); ok("o aluno recebe a categoria no /me");
  r = await call("POST", `admin/trails/${T.id}/category`, { token: adm.token, body: { category: "Nova Categoria" } });
  assert.equal(r.status, 200); assert.ok(r.data.list.includes("Nova Categoria")); assert.equal(r.data.map[T.id], "Nova Categoria"); ok("nome novo cria a categoria na hora");
  r = await call("POST", `admin/trails/${T.id}/category`, { token: adm.token, body: { category: "nova categoria" } });
  assert.equal(r.data.map[T.id], "Nova Categoria"); assert.equal(r.data.list.filter((x) => x.toLowerCase() === "nova categoria").length, 1); ok("não duplica por diferença de maiúscula");
  r = await call("POST", `admin/trails/inexistente/category`, { token: adm.token, body: { category: "X" } });
  assert.ok([404, 400].includes(r.status)); ok("trilha inexistente é recusada");
  r = await call("POST", `admin/trails/${T.id}/category`, { token: adm.token, body: { category: "Trilha" } });
  assert.equal(r.status, 400); ok("'Trilha' não vale como categoria");
  r = await call("POST", `admin/trails/${T.id}/category`, { token: adm.token, body: { category: "<img src=x onerror=1>".repeat(5) } });
  assert.equal(r.status, 200); assert.ok(r.data.map[T.id].length <= 24); ok("nome enorme é cortado em 24 caracteres");
  r = await call("POST", `admin/trails/${T.id}/category`, { token: adm.token, body: { category: "" } });
  assert.equal(r.data.map[T.id], undefined); assert.equal(r.data.category, ""); ok("categoria vazia volta ao padrão do arquivo");
}

console.log("Trilha criada/importada, renomear e excluir categoria");
{
  let r = await call("POST", "admin/trails", { token: adm.token, body: { title: "Trilha de teste" } });
  const tid = r.data.trail.id;
  r = await call("POST", `admin/trails/${tid}/category`, { token: adm.token, body: { category: "Mercado Livre" } });
  assert.equal(r.data.map[tid], "Mercado Livre"); ok("trilha criada recebe categoria sem precisar publicar");
  await call("POST", `admin/trails/${T.id}/category`, { token: adm.token, body: { category: "Mercado Livre" } });
  r = await call("PUT", "admin/trails/categories", { token: adm.token, body: { list: ["Marketplaces", "Shopee", "Atendimento", "Nova Categoria"], renames: { "Mercado Livre": "Marketplaces" } } });
  assert.equal(r.data.map[tid], "Marketplaces"); assert.equal(r.data.map[T.id], "Marketplaces"); ok("renomear leva as trilhas junto");
  r = await call("PUT", "admin/trails/categories", { token: adm.token, body: { list: ["Shopee"] } });
  assert.equal(r.data.map[tid], undefined); assert.equal(r.data.map[T.id], undefined); ok("excluir categoria devolve as trilhas ao padrão");
  await call("POST", `admin/trails/${tid}/category`, { token: adm.token, body: { category: "Shopee" } });
  r = await call("DELETE", "admin/trails/" + tid, { token: adm.token });
  assert.equal(r.status, 200);
  r = await call("GET", "admin/trails/categories", { token: adm.token });
  assert.equal(r.data.map[tid], undefined); ok("excluir a trilha limpa a atribuição");
}

console.log(`\n${passed} checagens ok`);

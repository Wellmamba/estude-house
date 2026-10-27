// Teste do perfil Sub-adm (permissões) e do Fórum do aluno (dúvidas e sugestões): node test/subadmin.mjs
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
const bia = await signup("Bia Gestora", "bia@exemplo.com");
const cau = await signup("Caio Gestor", "caio@exemplo.com");

console.log("Sub-adm: o administrador escolhe o perfil e as permissões");
{
  let r = await call("PATCH", "admin/users/" + bia.id, { token: ana.token, body: { role: "subadmin" } });
  assert.equal(r.status, 403); ok("aluno não muda perfil de ninguém");

  r = await call("PATCH", "admin/users/" + bia.id, { token: adm.token, body: { role: "subadmin", perms: ["aprovar", "forum", "xxx"] } });
  assert.equal(r.status, 200, JSON.stringify(r.data));
  assert.equal(r.data.user.role, "subadmin"); assert.deepEqual(r.data.user.perms, ["aprovar", "forum"]);
  ok("admin transforma um perfil em sub-adm; permissão inventada é descartada");

  r = await call("GET", "me", { token: bia.token });
  assert.equal(r.data.user.role, "subadmin"); assert.deepEqual(r.data.user.perms, ["aprovar", "forum"]);
  ok("/me mostra o perfil e as permissões");

  r = await call("PATCH", "admin/users/" + cau.id, { token: adm.token, body: { role: "subadmin" } });
  assert.deepEqual(r.data.user.perms, []); ok("sub-adm novo começa sem nenhuma permissão");

  // sem permissão: tudo fechado
  for (const [m, route] of [["GET", "admin/users"], ["GET", "admin/overview"], ["GET", "admin/logs"], ["GET", "admin/signups"], ["GET", "admin/questions"], ["GET", "forum"]]) {
    r = await call(m, route, { token: cau.token });
    assert.equal(r.status, 403, `${route} deveria dar 403, deu ${r.status}`);
  }
  ok("sub-adm sem permissão não entra em nenhuma área de gestão");
  r = await call("POST", "forum", { token: cau.token, body: { title: "Teste", text: "Teste de texto" } });
  assert.equal(r.status, 403);
  r = await call("GET", "admin/trails", { token: cau.token });
  assert.equal(r.status, 403); ok("nem fórum ou trilhas");

  // com permissão: só aquelas
  r = await call("GET", "admin/signups", { token: bia.token });
  assert.notEqual(r.status, 403); ok("e a de cadastros");
  r = await call("GET", "admin/users", { token: bia.token });
  assert.equal(r.status, 403); ok("mas não vê os acessos (falta 'usuarios')");
  r = await call("POST", "forum", { token: bia.token, body: { title: "Cadastro de produto", category: "Bling", text: "Passo a passo do cadastro." } });
  assert.equal(r.status, 201, JSON.stringify(r.data)); ok("com 'forum' escreve no fórum oficial");

  r = await call("PATCH", "admin/users/" + cau.id, { token: adm.token, body: { perms: ["usuarios", "publicar"] } });
  assert.deepEqual(r.data.user.perms, ["usuarios", "publicar"]); ok("admin ajusta as permissões depois");

  // limites do sub-adm com 'usuarios'
  r = await call("GET", "admin/users", { token: cau.token });
  assert.equal(r.status, 200); ok("com 'usuarios' vê os acessos");
  r = await call("PATCH", "admin/users/" + ana.id, { token: cau.token, body: { role: "admin" } });
  assert.equal(r.status, 403); ok("sub-adm não promove ninguém");
  r = await call("PATCH", "admin/users/" + bia.id, { token: cau.token, body: { active: false } });
  assert.equal(r.status, 403); ok("nem mexe em outro gestor");
  r = await call("PATCH", "admin/users/" + cau.id, { token: cau.token, body: { perms: ["aprovar", "usuarios", "publicar", "forum", "trilhas"] } });
  assert.equal(r.status, 403); ok("nem aumenta as próprias permissões");
  r = await call("DELETE", "admin/users/" + leo.id, { token: cau.token });
  assert.equal(r.status, 403); ok("nem remove acessos");
  r = await call("POST", "admin/users", { token: cau.token, body: { name: "Novo Gestor", email: "novo@exemplo.com", role: "admin" } });
  assert.equal(r.status, 201); assert.equal(r.data.user.role, "aluno"); ok("criar acesso com perfil admin vira aluno");
  r = await call("POST", "admin/users/" + leo.id + "/reset", { token: cau.token, body: { scope: "all" } });
  assert.equal(r.status, 200); ok("mas zera o progresso de aluno");

  r = await call("POST", "admin/users", { token: adm.token, body: { name: "Duda Sub", email: "duda@exemplo.com", role: "subadmin", perms: ["publicar"] } });
  assert.equal(r.status, 201); assert.equal(r.data.user.role, "subadmin"); assert.deepEqual(r.data.user.perms, ["publicar"]);
  ok("admin já cria o acesso como sub-adm com permissões");

  r = await call("PATCH", "admin/users/" + bia.id, { token: adm.token, body: { role: "aluno" } });
  assert.equal(r.data.user.role, "aluno"); assert.equal(r.data.user.perms, undefined);
  r = await call("GET", "admin/signups", { token: bia.token });
  assert.equal(r.status, 403); ok("voltou a aluno: perde tudo na hora");
  r = await call("PATCH", "admin/users/" + bia.id, { token: adm.token, body: { role: "subadmin", perms: ["aprovar", "forum"] } });
  assert.equal(r.status, 200);

  r = await call("PATCH", "admin/users/" + adm.id, { token: adm.token, body: { role: "aluno" } });
  assert.equal(r.status, 403); ok("o master continua intocável");
}

console.log("Fórum do aluno: enviar, aprovar e reprovar");
{
  let r = await call("POST", "forum/envios", { token: ana.token, body: { type: "duvida", title: "Como emitir NF de devolução?", text: "Estou no Bling e não acho o botão da devolução." } });
  assert.equal(r.status, 201, JSON.stringify(r.data)); assert.equal(r.data.item.status, "pending");
  const e1 = r.data.item.id; ok("aluno envia uma dúvida e ela fica pendente");
  r = await call("POST", "forum/envios", { token: ana.token, body: { type: "sugestao", title: "Aula sobre Shopee Ads", text: "Seria bom ter uma aula só sobre anúncios da Shopee." } });
  const e2 = r.data.item.id;
  r = await call("POST", "forum/envios", { token: ana.token, body: { type: "outro", title: "Título ok", text: "Texto grande o bastante" } });
  assert.equal(r.status, 400); ok("tipo precisa ser dúvida ou sugestão");
  r = await call("POST", "forum/envios", { token: ana.token, body: { type: "duvida", title: "Oi", text: "curto" } });
  assert.equal(r.status, 400); ok("título e texto muito curtos são recusados");
  r = await call("POST", "forum/envios", { token: ana.token, body: { type: "duvida", title: "Posso usar palavrão?", text: "Isso é uma merda, não funciona nada" } });
  assert.ok([201, 422].includes(r.status));

  r = await call("GET", "forum/envios", { token: ana.token });
  assert.equal(r.status, 200); assert.ok(r.data.items.length >= 2); assert.ok(r.data.items.every((x) => x.author === undefined)); ok("aluno vê só os próprios envios");
  r = await call("GET", "forum/envios", { token: leo.token });
  assert.equal(r.data.items.length, 0); ok("outro aluno não vê os dela");

  r = await call("GET", "forum/envios?status=pending", { token: ana.token });
  assert.equal(r.status, 200);
  r = await call("POST", `forum/envios/${e1}/aprovar`, { token: ana.token, body: {} });
  assert.equal(r.status, 403); ok("aluno não aprova");
  r = await call("POST", `forum/envios/${e1}/aprovar`, { token: cau.token, body: {} });
  assert.equal(r.status, 403); ok("sub-adm sem 'forum' também não");

  r = await call("GET", "me", { token: bia.token });
  assert.ok(r.data.pendingForum >= 2); ok("/me avisa o gestor quantos envios esperam");
  r = await call("GET", "forum/envios?status=pending", { token: bia.token });
  assert.equal(r.status, 200); assert.ok(r.data.items.length >= 2); assert.equal(r.data.items[0].author.name, "Ana Aluna"); ok("gestor vê a fila com o autor");

  // busca antes
  r = await call("GET", "search?q=" + encodeURIComponent("devolução"), { token: leo.token });
  assert.ok(!(r.data.forum || []).some((x) => /devolução/i.test(x.title))); ok("envio pendente ainda não aparece na busca");

  r = await call("POST", `forum/envios/${e1}/aprovar`, { token: bia.token, body: { title: "Como emitir NF de devolução no Bling", text: "1. Abra a venda.\n\n2. Clique em Devolver.", category: "Bling" } });
  assert.equal(r.status, 200, JSON.stringify(r.data)); const postId = r.data.post.id; ok("sub-adm com 'forum' aprova (ajustando título e texto)");
  r = await call("POST", `forum/envios/${e1}/aprovar`, { token: bia.token, body: {} });
  assert.equal(r.status, 409); ok("não aprova duas vezes");

  r = await call("GET", "forum/" + postId, { token: leo.token });
  assert.equal(r.status, 200); assert.equal(r.data.post.category, "Bling"); ok("o outro aluno lê a publicação no fórum oficial");
  r = await call("GET", "search?q=" + encodeURIComponent("devolução bling"), { token: leo.token });
  assert.ok((r.data.forum || []).some((x) => x.id === postId)); ok("e ela aparece na busca");

  r = await call("GET", "forum/envios", { token: ana.token });
  const mine1 = r.data.items.find((x) => x.id === e1);
  assert.equal(mine1.status, "approved"); assert.equal(mine1.postId, postId); ok("a aluna vê o envio como aprovado, com o link do fórum");
  r = await call("GET", "notifs", { token: ana.token });
  assert.ok(r.data.items.some((n) => n.type === "forum_ok" && n.link === "#/forum/" + postId)); ok("e recebe o aviso no sino");

  r = await call("PATCH", `forum/envios/${e1}`, { token: ana.token, body: { title: "Mudei de ideia sobre isso" } });
  assert.equal(r.status, 409); ok("aprovado não se edita");

  // reprovar
  r = await call("POST", `forum/envios/${e2}/reprovar`, { token: bia.token, body: { reason: "Já existe aula sobre isso. Veja o módulo de Ads." } });
  assert.equal(r.status, 200); ok("gestor reprova com motivo");
  r = await call("GET", "forum/envios", { token: ana.token });
  const mine2 = r.data.items.find((x) => x.id === e2);
  assert.equal(mine2.status, "rejected"); assert.match(mine2.reason, /Já existe/); ok("volta para a aluna como reprovado, com o motivo");
  r = await call("GET", "notifs", { token: ana.token });
  assert.ok(r.data.items.some((n) => n.type === "forum_no")); ok("e ela é avisada");
  r = await call("GET", "forum", { token: adm.token });
  assert.ok(!r.data.items.some((x) => /Shopee Ads/.test(x.title))); ok("o reprovado não vai para o fórum oficial");

  r = await call("GET", "forum/envios?status=done", { token: adm.token });
  assert.ok(r.data.items.length >= 2 && r.data.items.every((x) => x.status !== "pending")); ok("histórico do gestor mostra aprovados e reprovados");

  // reenviar
  r = await call("PATCH", `forum/envios/${e2}`, { token: leo.token, body: { title: "Tentando mexer no alheio" } });
  assert.equal(r.status, 404); ok("ninguém edita o envio dos outros");
  r = await call("PATCH", `forum/envios/${e2}`, { token: ana.token, body: { title: "Aula sobre Shopee Ads (campanhas)", text: "Sugiro uma aula só sobre campanhas de produto na Shopee Ads, com exemplos." } });
  assert.equal(r.status, 200); assert.equal(r.data.item.status, "pending"); assert.equal(r.data.item.reason, null); ok("a aluna ajusta e reenvia: volta para a fila");
  r = await call("GET", "forum/envios?status=pending", { token: bia.token });
  assert.ok(r.data.items.some((x) => x.id === e2)); ok("e o gestor vê de novo");
  r = await call("DELETE", `forum/envios/${e2}`, { token: ana.token });
  assert.equal(r.status, 200);
  r = await call("GET", "forum/envios?status=pending", { token: bia.token });
  assert.ok(!r.data.items.some((x) => x.id === e2)); ok("apagar o envio tira da fila");

  // limite de pendentes
  let last;
  for (let i = 0; i < 7; i++) last = await call("POST", "forum/envios", { token: leo.token, body: { type: "duvida", title: `Pergunta número ${i + 1} do Leo`, text: "Texto da pergunta com tamanho suficiente." } });
  assert.equal(last.status, 429); ok("no máximo 5 envios esperando análise por aluno");

  // gestor não usa a rota do aluno
  r = await call("POST", "forum/envios", { token: adm.token, body: { type: "duvida", title: "Gestor testando", text: "Gestor publica direto no fórum." } });
  assert.equal(r.status, 403); ok("gestor publica direto, não envia para análise");
}

console.log(`\n${passed} verificações de sub-adm e de dúvidas/sugestões passaram.`);

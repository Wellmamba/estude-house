// Teste dos avisos no aparelho (Web Push), dos Reels, dos tipos de post e do aviso do gestor: node test/push.mjs
process.env.LOCAL_DB = "1";
process.env.SIGNUP_APPROVAL = "off";
process.env.ADMIN_EMAILS = "wellington.moreira@mambadigital.com.br";

import assert from "node:assert/strict";
import crypto from "node:crypto";
import handler from "../netlify/functions/api.mjs";
import { setClock } from "../netlify/functions/lib/clock.mjs";
import * as push from "../netlify/functions/lib/push.mjs";

let passed = 0;
const ok = (m) => { passed++; console.log("  ✓", m); };
const T0 = Date.parse("2026-10-19T12:00:00-03:00"); // segunda-feira
let now = T0;
setClock(() => now);

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
  if (nick) await call("POST", "auth/profile", { token: u.token, body: { nickname: nick } });
  return u;
}
/* assinatura de mentira com chaves de verdade (formato que o navegador entrega) */
function fakeSub(n) {
  const ecdh = crypto.createECDH("prime256v1"); ecdh.generateKeys();
  return { endpoint: `https://fcm.googleapis.com/fcm/send/teste-${n}-${crypto.randomBytes(6).toString("hex")}`, keys: { p256dh: ecdh.getPublicKey().toString("base64url"), auth: crypto.randomBytes(16).toString("base64url") } };
}
const sent = [];
push.setTransport(async (sub, payload) => { sent.push({ endpoint: sub.endpoint, payload }); if (sub.endpoint.includes("morto")) throw Object.assign(new Error("gone"), { statusCode: 410 }); return { statusCode: 201 }; });

const adm = await signup("Wellington Moreira", "wellington.moreira@mambadigital.com.br", "wellington");
const ana = await signup("Ana Souza", "ana@exemplo.com", "ana");
const beto = await signup("Beto Lima", "beto@exemplo.com", "beto");

console.log("Chaves e aparelhos");
{
  let r = await call("GET", "push/key", { token: ana.token });
  assert.equal(r.status, 200); assert.ok(r.data.key && r.data.key.length > 60, "chave pública do servidor");
  const again = await call("GET", "push/key", { token: beto.token });
  assert.equal(again.data.key, r.data.key);
  ok("o servidor cria as chaves sozinho e devolve sempre a mesma");
  r = await call("GET", "push/key");
  assert.equal(r.status, 401);
  ok("sem sessão não há chave");

  r = await call("POST", "push/subscribe", { token: ana.token, body: { subscription: { endpoint: "https://evil.example.com/x", keys: { p256dh: "a".repeat(87), auth: "b".repeat(22) } } } });
  assert.equal(r.status, 400);
  r = await call("POST", "push/subscribe", { token: ana.token, body: { subscription: { endpoint: "http://fcm.googleapis.com/x", keys: { p256dh: "a".repeat(87), auth: "b".repeat(22) } } } });
  assert.equal(r.status, 400);
  r = await call("POST", "push/subscribe", { token: ana.token, body: { subscription: { endpoint: "https://fcm.googleapis.com/fcm/send/abc", keys: { p256dh: "x", auth: "y" } } } });
  assert.equal(r.status, 400);
  ok("só endereços dos serviços de push dos navegadores e chaves bem formadas são aceitos");

  var subAna = fakeSub("ana");
  r = await call("POST", "push/subscribe", { token: ana.token, body: { subscription: subAna, label: "Chrome no Windows" } });
  assert.equal(r.status, 200); assert.equal(r.data.devices, 1);
  r = await call("POST", "push/subscribe", { token: ana.token, body: { subscription: subAna, label: "Chrome no Windows" } });
  assert.equal(r.data.devices, 1, "mesmo aparelho não duplica");
  ok("ativar duas vezes no mesmo aparelho conta uma só");

  r = await call("POST", "push/subscribe", { token: beto.token, body: { subscription: subAna, label: "Mesmo navegador" } });
  assert.equal(r.status, 200);
  assert.equal((await call("GET", "push/status", { token: ana.token })).data.devices.length, 0);
  assert.equal((await call("GET", "push/status", { token: beto.token })).data.devices.length, 1);
  await call("POST", "push/subscribe", { token: ana.token, body: { subscription: subAna, label: "Chrome no Windows" } });
  ok("o mesmo navegador fica só com quem entrou por último");

  for (let i = 0; i < 8; i++) await call("POST", "push/subscribe", { token: ana.token, body: { subscription: fakeSub("x" + i), label: "extra " + i } });
  r = await call("GET", "push/status", { token: ana.token });
  assert.ok(r.data.devices.length <= 6);
  ok("no máximo 6 aparelhos por pessoa (os mais antigos saem)");
  subAna = fakeSub("ana2");
  await call("POST", "push/subscribe", { token: ana.token, body: { subscription: subAna, label: "Principal" } });
}

console.log("Preferências e teste");
{
  let r = await call("GET", "push/status", { token: ana.token });
  assert.ok(Object.values(r.data.prefs).every((v) => v === true));
  assert.ok(r.data.cats.meus_posts && r.data.cats.avisos && r.data.cats.provas);
  ok("tudo vem ligado por padrão e a lista de categorias acompanha");
  r = await call("PUT", "push/prefs", { token: ana.token, body: { provas: false, naoexiste: false } });
  assert.equal(r.data.prefs.provas, false); assert.equal(r.data.prefs.avisos, true); assert.ok(!("naoexiste" in r.data.prefs));
  ok("a pessoa desliga uma categoria sem mexer nas outras");
  sent.length = 0;
  r = await call("POST", "push/test", { token: ana.token });
  assert.equal(r.status, 200);
  assert.ok(sent.some((s) => s.payload.title.includes("Tudo certo")));
  r = await call("POST", "push/test", { token: (await signup("Sem Aparelho", "sem@exemplo.com")).token });
  assert.equal(r.status, 409);
  ok("o teste chega no aparelho; quem não ativou recebe um aviso claro");
  await call("PUT", "push/prefs", { token: ana.token, body: { provas: true } });
}

console.log("Avisos nascem das notificações do sino");
{
  sent.length = 0;
  const e = await call("POST", "forum/envios", { token: ana.token, body: { type: "duvida", title: "Como emitir NF de devolução?", text: "Estou no Bling e não acho o botão da devolução." } });
  assert.equal(e.status, 201, JSON.stringify(e.data));
  let r = await call("POST", `forum/envios/${e.data.item.id}/aprovar`, { token: adm.token, body: {} });
  assert.equal(r.status, 200, JSON.stringify(r.data));
  const a = sent.find((s) => /virou publica/i.test(s.payload.title) && s.endpoint === subAna.endpoint);
  assert.ok(a, "aprovar manda aviso ao autor"); assert.ok(a.payload.url.includes("#/forum/"));
  ok("aprovar uma dúvida avisa o autor no aparelho e abre a publicação");

  await call("PUT", "push/prefs", { token: ana.token, body: { meus_posts: false } });
  sent.length = 0;
  const e2 = await call("POST", "forum/envios", { token: ana.token, body: { type: "sugestao", title: "Aula sobre Shopee Ads", text: "Seria bom ter uma aula só sobre anúncios da Shopee." } });
  await call("POST", `forum/envios/${e2.data.item.id}/aprovar`, { token: adm.token, body: {} });
  assert.ok(!sent.some((s) => s.endpoint === subAna.endpoint));
  await call("PUT", "push/prefs", { token: ana.token, body: { meus_posts: true } });
  ok("categoria desligada não manda aviso");
}

console.log("Aparelho que morreu");
{
  const dead = fakeSub("morto");
  const c = await signup("Caio", "caio@exemplo.com");
  await call("POST", "push/subscribe", { token: c.token, body: { subscription: dead, label: "velho" } });
  const r = await push.sendTo(c.id, { title: "x", body: "y" }, { cat: "avisos" });
  assert.equal(r.sent, 0);
  assert.equal((await call("GET", "push/status", { token: c.token })).data.devices.length, 0);
  ok("endereço que o serviço de push recusa (410) é apagado");
}

console.log("Aviso do gestor para o time");
{
  let r = await call("POST", "admin/push/broadcast", { token: ana.token, body: { title: "Oi", body: "x" } });
  assert.equal(r.status, 403);
  r = await call("POST", "admin/push/broadcast", { token: adm.token, body: { title: "ab" } });
  assert.equal(r.status, 400);
  r = await call("POST", "admin/push/broadcast", { token: adm.token, body: { title: "Link ruim", body: "x", url: "https://site.externo.com" } });
  assert.equal(r.status, 400);
  ok("só gestor envia; título e destino são conferidos (destino só dentro do sistema)");
  sent.length = 0;
  r = await call("POST", "admin/push/broadcast", { token: adm.token, body: { title: "Reunião hoje", body: "Às 16h no Meet", url: "#/trilhas", audience: "alunos" } });
  assert.equal(r.status, 200); assert.ok(r.data.people >= 1);
  assert.ok(sent.every((s) => s.payload.url === "/#/trilhas" && s.payload.title === "Reunião hoje"));
  ok("o aviso chega nos aparelhos e abre a tela escolhida");
  const n = await call("GET", "notifs", { token: ana.token });
  assert.ok(n.data.items.some((i) => i.type === "all" && /Reunião hoje/.test(i.text)));
  const nb = await call("GET", "notifs", { token: beto.token });
  assert.ok(nb.data.items.some((i) => i.type === "all" && /Reunião hoje/.test(i.text)));
  const nAdm = await call("GET", "notifs", { token: adm.token });
  assert.ok(!nAdm.data.items.some((i) => /Reunião hoje/.test(i.text)));
  ok("o mesmo aviso aparece no sininho dos alunos (e não de quem enviou)");
  r = await call("GET", "admin/push", { token: adm.token });
  assert.equal(r.status, 200); assert.ok(r.data.devices >= 2); assert.equal(r.data.history[0].title, "Reunião hoje");
  ok("o gestor vê quantos aparelhos têm aviso e o histórico");
  await call("POST", "admin/push/broadcast", { token: adm.token, body: { title: "Só gestores", body: "teste", audience: "gestores" } });
  const gAna = (await call("GET", "notifs", { token: ana.token })).data.items;
  assert.ok(!gAna.some((i) => /Só gestores/.test(i.text)));
  ok("aviso só para gestores não aparece para alunos");
}

console.log(`\n${passed} verificações de avisos passaram.`);

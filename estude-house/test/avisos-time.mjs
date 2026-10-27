// Teste dos avisos da comunidade, da mensagem do dia e da foto/time pelo administrador: node test/avisos-time.mjs
process.env.LOCAL_DB = "1";
process.env.SIGNUP_APPROVAL = "off";
process.env.ADMIN_EMAILS = "wellington.moreira@mambadigital.com.br";
process.env.CLOUDINARY_CLOUD_NAME = "mamba"; process.env.CLOUDINARY_API_KEY = "key123"; process.env.CLOUDINARY_API_SECRET = "segredo";

import assert from "node:assert/strict";
import crypto from "node:crypto";
import handler from "../netlify/functions/api.mjs";
import { setClock } from "../netlify/functions/lib/clock.mjs";
import * as push from "../netlify/functions/lib/push.mjs";
import * as jobs from "../netlify/functions/lib/push-jobs.mjs";
import { DAILY, pickDaily, dayNumber } from "../netlify/functions/lib/daily.mjs";

let passed = 0;
const ok = (m) => { passed++; console.log("  ✓", m); };
let now = Date.parse("2026-10-21T09:00:00-03:00"); // quarta-feira
setClock(() => now);
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
function fakeSub(n) {
  const ecdh = crypto.createECDH("prime256v1"); ecdh.generateKeys();
  return { endpoint: `https://fcm.googleapis.com/fcm/send/teste-${n}-${crypto.randomBytes(6).toString("hex")}`, keys: { p256dh: ecdh.getPublicKey().toString("base64url"), auth: crypto.randomBytes(16).toString("base64url") } };
}
const sent = [];
push.setTransport(async (sub, payload) => { sent.push({ endpoint: sub.endpoint, payload }); return { statusCode: 201 }; });

const adm = await signup("Wellington", "wellington.moreira@mambadigital.com.br");
const ana = await signup("Ana Aluna", "ana@exemplo.com");
const leo = await signup("Leo Aluno", "leo@exemplo.com");
const sem = await signup("Sem Time", "sem@exemplo.com");
const sub = await signup("Bia Sub", "bia@exemplo.com");
await call("PATCH", "admin/users/" + sub.id, { token: adm.token, body: { role: "subadmin", perms: ["publicar", "moderar", "usuarios"] } });
const roxo = (await call("POST", "admin/teams", { token: adm.token, body: { name: "Time Roxo", color: "purple", emoji: "🏀" } })).data.team;
const ouro = (await call("POST", "admin/teams", { token: adm.token, body: { name: "Time Ouro", color: "gold", emoji: "🥇" } })).data.team;
await call("PATCH", "admin/users/" + ana.id, { token: adm.token, body: { team: roxo.id } });
await call("PATCH", "admin/users/" + leo.id, { token: adm.token, body: { team: ouro.id } });
const subAna = fakeSub("ana"), subLeo = fakeSub("leo"), subSem = fakeSub("sem");
for (const [u, s] of [[ana, subAna], [leo, subLeo], [sem, subSem]]) await call("POST", "push/subscribe", { token: u.token, body: { subscription: s, label: "t" } });

console.log("Time para qualquer perfil e foto pelo administrador");
{
  let r = await call("PATCH", "admin/users/" + sub.id, { token: adm.token, body: { team: roxo.id } });
  assert.equal(r.status, 200); assert.equal(r.data.user.team, roxo.id);
  ok("o administrador define o time de um sub-administrador");
  r = await call("PATCH", "admin/users/" + adm.id, { token: sub.token, body: { team: ouro.id } });
  assert.ok(r.status === 403 || r.status === 400, "sub-adm não mexe em administrador");
  r = await call("PATCH", "admin/users/" + ana.id, { token: sub.token, body: { team: ouro.id } });
  assert.equal(r.status, 200); assert.equal(r.data.user.team, ouro.id);
  await call("PATCH", "admin/users/" + ana.id, { token: sub.token, body: { team: roxo.id } });
  ok("sub-adm com acesso a pessoas troca o time de aluno");

  const good = "https://res.cloudinary.com/mamba/image/upload/v1/estude-house/ana.jpg";
  r = await call("PATCH", "admin/users/" + ana.id, { token: adm.token, body: { avatar: good } });
  assert.equal(r.status, 200); assert.equal(r.data.user.avatar, good);
  r = await call("PATCH", "admin/users/" + ana.id, { token: ana.token, body: { avatar: good } });
  assert.ok(r.status === 403, "aluno não usa a rota da gestão");
  r = await call("PATCH", "admin/users/" + ana.id, { token: adm.token, body: { avatar: "https://evil.example.com/a.png" } });
  assert.equal(r.status, 400);
  ok("o administrador cadastra a foto do aluno (só imagem do Cloudinary da empresa)");
  r = await call("PATCH", "admin/users/" + ana.id, { token: adm.token, body: { avatar: "" } });
  assert.equal(r.status, 200); assert.ok(!r.data.user.avatar);
  ok("e remove a foto");

  r = await call("POST", "feed/post", { token: sub.token, body: { text: "Post geral do sub-adm do time roxo" } });
  assert.equal(r.status, 201);
  assert.equal(r.data.post.author.team?.id, roxo.id);
  assert.ok(!("teamId" in r.data.post.author));
  ok("quem tem time (inclusive adm e sub) aparece no post com a tag do time");
}

console.log("Aviso de post da comunidade");
{
  sent.length = 0;
  let r = await call("POST", "feed/post", { token: adm.token, body: { text: "Reunião do time roxo amanhã às 10h", community: roxo.id } });
  assert.equal(r.status, 201); const post = r.data.post;
  const bell = async (u) => (await call("GET", "notifs", { token: u.token })).data;
  let b = await bell(ana);
  assert.ok(b.items.some((i) => i.type === "community" && i.postId === post.id && i.where === "Time Roxo") && b.unread >= 1);
  ok("quem é do time recebe no sino");
  b = await bell(leo); assert.ok(!b.items.some((i) => i.type === "community"));
  b = await bell(sem); assert.ok(!b.items.some((i) => i.type === "community"));
  ok("quem é de outro time ou não tem time não recebe");
  b = await bell(adm); assert.ok(!b.items.some((i) => i.type === "community"), "quem postou não é avisado");
  b = await bell(sub); assert.ok(b.items.some((i) => i.type === "community"), "sub-adm do mesmo time recebe");
  ok("sub-administrador do mesmo time também recebe; quem postou, não");
  assert.ok(sent.some((s) => s.endpoint === subAna.endpoint && /Time Roxo/.test(s.payload.title) && /reuni/i.test(s.payload.body)));
  assert.ok(!sent.some((s) => s.endpoint === subLeo.endpoint || s.endpoint === subSem.endpoint));
  ok("o aviso no aparelho vai só para o time");
  await call("PUT", "push/prefs", { token: ana.token, body: { comunidade: false } });
  now += 11 * 60e3; sent.length = 0;
  await call("POST", "feed/post", { token: adm.token, body: { text: "Segundo aviso do roxo", community: roxo.id } });
  assert.ok(!sent.some((s) => s.endpoint === subAna.endpoint));
  b = await bell(ana); assert.equal(b.items.filter((i) => i.type === "community").length, 2, "o sino mostra os dois mesmo com o aparelho desligado");
  ok("quem desligou a categoria 'comunidade' não recebe no aparelho, mas vê no sino");
  await call("PUT", "push/prefs", { token: ana.token, body: { comunidade: true } });
  r = await call("GET", "push/status", { token: ana.token });
  assert.ok(r.data.cats.comunidade && r.data.cats.curiosidade);
  ok("as duas categorias novas aparecem nas preferências de aviso");
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "Post geral para todos" } });
  b = await bell(ana); assert.ok(!b.items.some((i) => i.postId === r.data.post.id));
  ok("post para todos continua sem encher o sino (só marcação com @)");
}

console.log("Mensagem do dia");
{
  assert.equal(DAILY.length, 42);
  const titles = new Set(DAILY.map((d) => d[0])); assert.equal(titles.size, DAILY.length);
  assert.ok(DAILY.every(([t, b, u]) => t.length <= 70 && b.length <= 140 && /^#\//.test(u)));
  ok("42 mensagens, sem título repetido, dentro do tamanho e levando para telas do sistema");
  const seen = []; let d0 = "2026-10-26";
  for (let i = 0; i < DAILY.length; i++) { const [y, m, d] = d0.split("-").map(Number); seen.push(pickDaily(new Date(Date.UTC(y, m - 1, d + i)).toISOString().slice(0, 10)).title); }
  assert.equal(new Set(seen).size, DAILY.length);
  assert.ok(seen.every((t, i) => i === 0 || t !== seen[i - 1]));
  ok("em 42 dias seguidos todas aparecem uma vez e nunca duas iguais em sequência");
  assert.equal(pickDaily("2026-10-22").title, pickDaily("2026-10-22").title);
  assert.ok(dayNumber("2026-10-22") - dayNumber("2026-10-21") === 1);

  now = Date.parse("2026-10-22T14:00:00-03:00"); sent.length = 0;
  let r = await jobs.run("daily");
  const mine = sent.filter((s) => s.endpoint === subAna.endpoint);
  assert.equal(mine.length, 1); assert.equal(mine[0].payload.title, pickDaily("2026-10-22").title);
  assert.ok(sent.some((s) => s.endpoint === subLeo.endpoint) && !sent.some((s) => /Wellington/.test(s.payload.body)));
  ok("o aviso do dia vai para os alunos com aparelho ativo, com a mensagem daquele dia");
  sent.length = 0; await jobs.run("daily");
  assert.equal(sent.length, 0); ok("rodar de novo no mesmo dia não manda duas vezes");
  await call("PUT", "push/prefs", { token: leo.token, body: { curiosidade: false } });
  now = Date.parse("2026-10-23T14:00:00-03:00"); sent.length = 0;
  await jobs.run("daily");
  assert.ok(sent.some((s) => s.endpoint === subAna.endpoint) && !sent.some((s) => s.endpoint === subLeo.endpoint));
  assert.notEqual(sent.find((s) => s.endpoint === subAna.endpoint).payload.title, mine[0].payload.title);
  ok("no dia seguinte a mensagem muda; quem desligou 'Mensagem do dia' não recebe");
}

console.log("Lembrete das 18h não é bloqueado pelo das 9h");
{
  const x = await signup("Xis", "xis@exemplo.com"); const sx = fakeSub("xis");
  await call("POST", "push/subscribe", { token: x.token, body: { subscription: sx, label: "t" } });
  now = Date.parse("2026-10-26T09:00:00-03:00");
  await call("POST", "engage/checkin", { token: x.token });
  now = Date.parse("2026-10-27T09:00:00-03:00"); sent.length = 0;
  await jobs.run("checkin");
  assert.ok(sent.some((s) => s.endpoint === sx.endpoint && /check-in/i.test(s.payload.title)));
  now = Date.parse("2026-10-27T18:00:00-03:00"); sent.length = 0;
  await jobs.run("streak");
  assert.ok(sent.some((s) => s.endpoint === sx.endpoint && /sequência/i.test(s.payload.title)));
  ok("quem recebeu o lembrete de manhã e ainda não fez o check-in recebe o aviso de sequência à tarde");
}

console.log(`\n${passed} verificações passaram.`);

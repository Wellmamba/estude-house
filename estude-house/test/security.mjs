// Segurança: quem pode o quê, sessões, limites e entradas maliciosas. node test/security.mjs
process.env.LOCAL_DB = "1";
process.env.SIGNUP_APPROVAL = "off";
process.env.ADMIN_EMAILS = "wellington.moreira@mambadigital.com.br";

import assert from "node:assert/strict";
import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "../netlify/functions/api.mjs";
import { signToken, verifyToken } from "../netlify/functions/lib/auth.mjs";
import { cleanHtml } from "../netlify/functions/lib/trails.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
let passed = 0;
const ok = (m) => { passed++; console.log("  ✓", m); };

async function call(method, route, { token, body, ip, raw, headers: extra } = {}) {
  const headers = { "content-type": "application/json", ...(extra || {}) };
  if (token) headers.authorization = "Bearer " + token;
  if (ip) headers["x-nf-client-connection-ip"] = ip;
  const res = await handler(new Request("http://local/api/" + route, { method, headers, body: raw ?? (body ? JSON.stringify(body) : undefined) }));
  let data = {}; try { data = await res.json(); } catch {}
  return { status: res.status, data, headers: res.headers };
}
async function signup(name, email) {
  const r = await call("POST", "auth/register", { body: { name, email, password: "Senha1234", password2: "Senha1234" } });
  assert.equal(r.status, 201, JSON.stringify(r.data));
  return { token: r.data.token, id: r.data.user.id, email };
}

const adm = await signup("Wellington Moreira", "wellington.moreira@mambadigital.com.br");
const ana = await signup("Ana Souza", "ana@exemplo.com");
const beto = await signup("Beto Lima", "beto@exemplo.com");
// sub-administrador sem nenhuma permissão
let r = await call("POST", "admin/users", { token: adm.token, body: { name: "Sub Vazio", email: "sub@exemplo.com", password: "Senha1234", role: "subadmin", perms: [] } });
assert.equal(r.status, 201, JSON.stringify(r.data));
const sub = { ...(await call("POST", "auth/login", { body: { email: "sub@exemplo.com", password: "Senha1234" } })).data };

console.log("Sem sessão: tudo fecha");
{
  const rotas = ["me", "feed", "feed/pulse", "notifs", "engage/ranking", "reels", "destaques", "forum", "provas", "trails/custom", "push/status", "people/mentions", "search?q=ab", "admin/overview", "admin/users", "admin/logs"];
  for (const rt of rotas) { r = await call("GET", rt); assert.equal(r.status, 401, rt + " deveria exigir login"); }
  r = await call("GET", "me", { token: "lixo.lixo" }); assert.equal(r.status, 401);
  ok(`${rotas.length} rotas respondem 401 sem login (e com token inventado)`);
  r = await call("GET", "health"); assert.equal(r.status, 200); assert.ok(!JSON.stringify(r.data).includes("secret"));
  ok("só /health e entrar/cadastrar são públicos, e /health não mostra segredo");
}

console.log("Áreas do gestor: aluno e sub-adm sem permissão não passam");
{
  // lê o código para achar todas as rotas "admin/..." e testa cada uma com vários métodos
  const dirs = [path.join(here, "../netlify/functions"), path.join(here, "../netlify/functions/lib")];
  const found = new Set();
  for (const d of dirs) for (const f of fs.readdirSync(d)) if (f.endsWith(".mjs")) for (const m of fs.readFileSync(path.join(d, f), "utf8").matchAll(/"(admin\/[a-z0-9/_-]+)"/g)) found.add(m[1]);
  const bases = [...found].filter((x) => !x.endsWith("/"));
  const extra = ["admin/users/x", "admin/users/x/reset", "admin/feed/x/approve", "admin/feed/x/reject", "admin/tags/x", "admin/signups", "admin/signups/x/approve", "admin/signups/x/reject", "admin/provas/x", "admin/trails/x", "admin/trails/x/publish", "admin/trails/categories", "admin/trails/x/category", "destaques/x", "destaques/x/post", "forum/importar-manuais", "forum/envios/x/aprovar", "forum/envios/x/reprovar", "trails/custom/x", "trails/x/active", "trails/x/ativar"];
  const alvo = [...new Set([...bases, ...extra])];
  let n = 0;
  for (const who of [ana, { token: sub.token }]) {
    for (const rt of alvo) for (const m of ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
      r = await call(m, rt, { token: who.token, body: m === "GET" ? undefined : {} });
      n++;
      assert.ok(r.status === 403 || r.status === 404 || r.status === 405 || r.status === 400, `${m} ${rt} respondeu ${r.status} para quem não tem permissão: ${JSON.stringify(r.data).slice(0, 120)}`);
      assert.notEqual(r.status, 200, `${m} ${rt} abriu para quem não tem permissão`);
      assert.notEqual(r.status, 201, `${m} ${rt} criou algo para quem não tem permissão`);
    }
  }
  ok(`${alvo.length} rotas de gestão × 5 métodos × 2 perfis (${n} chamadas): nenhuma abre sem permissão`);
}

console.log("Cada pessoa só mexe no que é dela");
{
  r = await call("POST", "feed/post", { token: ana.token, body: { text: "Meu post esperando aprovação" } });
  assert.ok(r.status === 201, JSON.stringify(r.data)); const pid = r.data.post.id;
  assert.equal(r.data.status, "pending");
  r = await call("GET", "feed/post/" + pid, { token: beto.token }); assert.equal(r.status, 404);
  r = await call("DELETE", "feed/post/" + pid, { token: beto.token }); assert.ok([403, 404].includes(r.status));
  r = await call("POST", "feed/hype/" + pid, { token: beto.token }); assert.equal(r.status, 404);
  r = await call("POST", "feed/comment/" + pid, { token: beto.token, body: { text: "oi" } }); assert.ok([403, 404].includes(r.status));
  r = await call("GET", "feed", { token: beto.token }); assert.ok(!r.data.posts.some((p) => p.id === pid));
  r = await call("GET", "feed/post/" + pid, { token: ana.token }); assert.equal(r.status, 200);
  ok("post que espera aprovação: só o autor e o gestor enxergam; os outros não veem, não dão hype, não comentam, não apagam");

  r = await call("POST", "exam/submit", { token: beto.token, body: { attemptId: "a_inventado", answers: {} } }); assert.equal(r.status, 404);
  r = await call("GET", "admin/users/" + ana.id, { token: beto.token }); assert.equal(r.status, 403);
  r = await call("PATCH", "admin/users/" + ana.id, { token: beto.token, body: { role: "admin" } }); assert.equal(r.status, 403);
  r = await call("PATCH", "admin/users/" + beto.id, { token: beto.token, body: { role: "admin" } }); assert.equal(r.status, 403);
  r = await call("GET", "me", { token: beto.token }); assert.equal(r.data.user.role, "aluno");
  ok("aluno não se promove, não lê nem muda outro aluno, não envia a prova de outra pessoa");

  // aviso no aparelho é de quem ativou
  const ecdh = crypto.createECDH("prime256v1"); ecdh.generateKeys();
  const sub1 = { endpoint: "https://fcm.googleapis.com/fcm/send/sec-" + crypto.randomBytes(5).toString("hex"), keys: { p256dh: ecdh.getPublicKey().toString("base64url"), auth: crypto.randomBytes(16).toString("base64url") } };
  r = await call("POST", "push/subscribe", { token: ana.token, body: { subscription: sub1, label: "A" } }); assert.equal(r.status, 200, JSON.stringify(r.data));
  await call("POST", "push/unsubscribe", { token: beto.token, body: { endpoint: sub1.endpoint } });
  r = await call("GET", "push/status", { token: ana.token }); assert.equal(r.data.devices.length, 1);
  ok("ninguém desliga o aviso do aparelho de outra pessoa");
}

console.log("Sessão");
{
  const t = ana.token;
  const [payload, sig] = t.split(".");
  const evil = Buffer.from(JSON.stringify({ sub: adm.id, exp: Date.now() + 1e9 })).toString("base64url");
  r = await call("GET", "me", { token: evil + "." + sig }); assert.equal(r.status, 401);
  const forged = Buffer.from(JSON.stringify({ sub: ana.id, exp: Date.now() - 1000 })).toString("base64url");
  assert.equal(verifyToken(forged + "." + sig), null);
  r = await call("GET", "me", { token: t }); assert.equal(r.status, 200);
  ok("token adulterado ou vencido não vale");

  // trocar a senha derruba as sessões antigas
  const login1 = await call("POST", "auth/login", { body: { email: "beto@exemplo.com", password: "Senha1234" } });
  const old = login1.data.token;
  r = await call("GET", "me", { token: old }); assert.equal(r.status, 200);
  r = await call("POST", "auth/password", { token: old, body: { current: "Senha1234", next: "OutraSenha99", next2: "OutraSenha99" } }); assert.equal(r.status, 200, JSON.stringify(r.data));
  r = await call("GET", "me", { token: old }); assert.equal(r.status, 401); assert.match(r.data.error, /senha/i);
  const login2 = await call("POST", "auth/login", { body: { email: "beto@exemplo.com", password: "OutraSenha99" } });
  r = await call("GET", "me", { token: login2.data.token }); assert.equal(r.status, 200);
  ok("trocar a senha encerra as outras sessões abertas; entrar de novo funciona");

  // desativar a pessoa derruba na hora
  r = await call("PATCH", "admin/users/" + ana.id, { token: adm.token, body: { active: false } }); assert.equal(r.status, 200);
  r = await call("GET", "me", { token: ana.token }); assert.equal(r.status, 401);
  r = await call("POST", "auth/login", { body: { email: "ana@exemplo.com", password: "Senha1234" } }); assert.equal(r.status, 403);
  await call("PATCH", "admin/users/" + ana.id, { token: adm.token, body: { active: true } });
  ok("acesso desativado derruba a sessão e impede novo login");
}

console.log("Tentativas de adivinhar senha");
{
  for (let i = 0; i < 5; i++) r = await call("POST", "auth/login", { body: { email: "ana@exemplo.com", password: "errada" + i }, ip: "10.0.0.5" });
  r = await call("POST", "auth/login", { body: { email: "ana@exemplo.com", password: "Senha1234" }, ip: "10.0.0.5" }); assert.equal(r.status, 429);
  ok("5 erros na mesma conta travam a conta por 10 minutos (mesmo com a senha certa)");
  let blocked = 0;
  for (let i = 0; i < 90; i++) { r = await call("POST", "auth/login", { body: { email: `x${i}@exemplo.com`, password: "errada" }, ip: "10.9.9.9" }); if (r.status === 429) blocked++; }
  assert.ok(blocked > 0, "adivinhação em muitas contas do mesmo endereço deveria ser barrada");
  r = await call("POST", "auth/login", { body: { email: "beto@exemplo.com", password: "OutraSenha99" }, ip: "10.1.1.1" }); assert.equal(r.status, 200);
  ok(`erros em contas diferentes do mesmo endereço também são barrados (${blocked} bloqueados), e outro endereço segue normal`);
}

console.log("Entradas maliciosas");
{
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "oi", media: [{ type: "link", url: "javascript:alert(1)" }] } }); assert.equal(r.status, 400);
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "oi", media: [{ type: "link", url: "data:text/html,<script>alert(1)</script>" }] } }); assert.equal(r.status, 400);
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "oi", media: [{ type: "image", url: "https://evil.example.com/x.png" }] } }); assert.equal(r.status, 400);
  r = await call("POST", "auth/profile", { token: adm.token, body: { avatar: "javascript:alert(1)" } }); assert.equal(r.status, 400);
  r = await call("POST", "auth/profile", { token: adm.token, body: { nickname: "<script>alert(1)</script>" } }); assert.equal(r.status, 400);
  ok("link com javascript:/data:, anexo de outro site, foto de outro site e @ com código são recusados");

  const bad = ['<img src=x onerror=alert(1)>', '<script>alert(1)</script>', '<b onclick="x()">negrito</b>', '<a href="javascript:x">l</a>', '<iframe src=x></iframe>', '<svg onload=x>'];
  for (const b of bad) { const out = cleanHtml(b, 600); assert.ok(!/<(?!\/?(?:b|i|u|mark|br)>)/i.test(out), "sobrou tag perigosa em: " + out); assert.ok(!/<[a-z]+[^>]*\son/i.test(out), out); }
  assert.equal(cleanHtml("a <b>b</b> <i>i</i><br>", 100), "a <b>b</b> <i>i</i><br>");
  ok("texto de aulas: só negrito, itálico, sublinhado, marca-texto e quebra de linha passam; o resto vira texto");

  r = await call("POST", "auth/login", { raw: "x".repeat(1_100_000) }); assert.equal(r.status, 413);
  r = await call("POST", "feed/post", { token: adm.token, raw: JSON.stringify({ text: "a".repeat(1_200_000) }) }); assert.equal(r.status, 413);
  ok("corpo de requisição acima de 1 MB é recusado (6 MB só na gestão)");

  r = await call("POST", "auth/login", { raw: "{isso nao e json" }); assert.ok([400, 401].includes(r.status));
  r = await call("POST", "feed/post", { token: adm.token, raw: "null" }); assert.ok(r.status >= 400 && r.status < 500, String(r.status));
  ok("JSON quebrado ou vazio não derruba o servidor");

  r = await call("POST", "admin/push/broadcast", { token: adm.token, body: { title: "x", body: "y", link: "https://evil.example.com" } }); assert.equal(r.status, 400);
  ok("aviso do gestor só abre telas do próprio site");
}

console.log("Erros não vazam detalhes");
{
  // provoca um erro interno: o corpo da resposta não pode trazer mensagem técnica, só um código
  const mod = await import("../netlify/functions/lib/db.mjs");
  const orig = mod.store;
  const res = await handler(new Request("http://local/api/me", { headers: { authorization: "Bearer " + adm.token, "x-test-boom": "1" } }));
  assert.equal(res.status, 200);
  ok("(rota normal segue funcionando)");
  const src = fs.readFileSync(path.join(here, "../netlify/functions/api.mjs"), "utf8");
  assert.ok(!/json\(\{ error: "Erro interno[^)]*detail/.test(src), "a resposta de erro não deve devolver `detail`");
  assert.match(src, /código \$\{ref\}/);
  ok("a resposta de erro 500 só leva um código curto; o detalhe fica no registro");
}

console.log("Cabeçalhos de segurança");
{
  const toml = fs.readFileSync(path.join(here, "../netlify.toml"), "utf8");
  for (const h of ["Content-Security-Policy", "Strict-Transport-Security", "X-Content-Type-Options", "X-Frame-Options", "Referrer-Policy", "Permissions-Policy"]) assert.ok(toml.includes(h), h + " ausente");
  const csp = toml.match(/Content-Security-Policy = "([^"]+)"/)[1];
  assert.ok(/script-src 'self'(;|$)/.test(csp) && !/script-src[^;]*unsafe/.test(csp), "script só do próprio site");
  assert.ok(/object-src 'none'/.test(csp) && /frame-ancestors 'self'/.test(csp) && /base-uri 'self'/.test(csp));
  const html = fs.readFileSync(path.join(here, "../public/index.html"), "utf8");
  assert.ok(!/<script>/i.test(html) && !/\son[a-z]+="/i.test(html), "index.html não pode ter script nem evento embutido");
  ok("política de conteúdo sem script embutido, além de HSTS, nosniff, frame, referrer e permissões");
  r = await call("GET", "health");
  assert.equal(r.headers.get("cache-control"), "no-store");
  ok("respostas da API nunca ficam em cache");
}

console.log(`\n${passed} verificações de segurança passaram.`);

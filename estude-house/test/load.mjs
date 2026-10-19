// Carga e custo por requisição: node test/load.mjs [pessoas]
// Simula o dia de aula (muita gente ao mesmo tempo) com o banco em memória e latência de rede simulada.
// Mostra quantas operações no banco cada tela gasta e como ficam os tempos com todos juntos.
process.env.LOCAL_DB = "1";
process.env.CACHE_FORCE = "1"; // liga os caches de curta duração, como em produção
process.env.SIGNUP_APPROVAL = "off";
process.env.ADMIN_EMAILS = "wellington.moreira@mambadigital.com.br";
process.env.BLOB_LAT_MS = process.env.BLOB_LAT_MS || "35";
const N = Number(process.argv[2]) || 300;

import assert from "node:assert/strict";
import handler from "../netlify/functions/api.mjs";
import { OPS } from "../netlify/functions/lib/db.mjs";
import { signToken, hashPassword, newId, emailKey } from "../netlify/functions/lib/auth.mjs";
import { store } from "../netlify/functions/lib/db.mjs";

async function call(method, route, { token, body } = {}) {
  const headers = { "content-type": "application/json" };
  if (token) headers.authorization = "Bearer " + token;
  const t0 = performance.now();
  const res = await handler(new Request("http://local/api/" + route, { method, headers, body: body ? JSON.stringify(body) : undefined }));
  const data = await res.json().catch(() => ({}));
  return { status: res.status, data, ms: performance.now() - t0 };
}
const snap = () => ({ ...OPS });
const diff = (a) => { const b = OPS; return { get: b.get - a.get, set: b.set - a.set, keys: b.keys - a.keys }; };
const pct = (arr, p) => { const s = [...arr].sort((x, y) => x - y); return s[Math.min(s.length - 1, Math.floor(s.length * p))]; };

/* ── semeia: gestor, N alunos já com apelido, posts, hypes e comentários ── */
const lat = process.env.BLOB_LAT_MS; process.env.BLOB_LAT_MS = "0";
const users = await store("users"), emails = await store("emails"), nicks = await store("nicks");
const passHash = hashPassword("Senha1234");
const people = [];
for (let i = 0; i < N + 1; i++) {
  const id = newId("u_"), email = i === 0 ? "wellington.moreira@mambadigital.com.br" : `aluno${i}@exemplo.com`;
  const u = { id, name: i === 0 ? "Wellington Moreira" : `Aluno Numero ${i}`, email, role: i === 0 ? "admin" : "aluno", passHash, active: true, createdAt: Date.now(), nickname: i === 0 ? "wellington" : "aluno" + i, tourAt: Date.now() };
  await users.set("u:" + id, u); await emails.set(emailKey(email), id); await nicks.set("n:" + u.nickname, id);
  people.push({ ...u, token: signToken(id) });
}
const admin = people[0], students = people.slice(1);
const postIds = [];
for (let i = 0; i < 25; i++) {
  const r = await call("POST", "feed/post", { token: admin.token, body: { text: `Post número ${i} do time. Veja como ficou @aluno${i + 1}`, kind: ["dica", "case", "curiosidade"][i % 3] } });
  assert.equal(r.status, 201, JSON.stringify(r.data)); postIds.push(r.data.post?.id || r.data.id);
}
for (let i = 0; i < 60; i++) {
  const s = students[i % students.length], pid = postIds[i % postIds.length];
  await call("POST", `feed/hype/${pid}`, { token: s.token }); if (i % 3 === 0) await call("POST", `feed/comment/${pid}`, { token: s.token, body: { text: "Muito bom!" } });
}
for (const s of students.slice(0, 80)) await call("POST", "engage/checkin", { token: s.token });
process.env.BLOB_LAT_MS = lat;
console.log(`Semeado: ${N} alunos, ${postIds.length} posts. Latência simulada do banco: ${lat} ms por operação.\n`);

/* ── custo de cada tela para UMA pessoa (cache frio e depois quente) ── */
const me = students[5];
const routes = [
  ["me", "GET", "me"], ["feed", "GET", "feed"], ["feed/pulse", "GET", "feed/pulse"], ["feed/tags", "GET", "feed/tags"], ["notifs", "GET", "notifs"],
  ["destaques", "GET", "destaques"], ["reels", "GET", "reels"], ["engage/me", "GET", "engage/me"], ["ranking (semana)", "GET", "engage/ranking?period=week"],
  ["people/mentions", "GET", "people/mentions"], ["push/status", "GET", "push/status"],
];
console.log("Operações no banco por requisição (1ª vez → 2ª vez, com cache):");
const cost = {};
for (const [label, m, r] of routes) {
  const a = snap(); const x = await call(m, r, { token: me.token }); const d1 = diff(a);
  const b = snap(); const y = await call(m, r, { token: students[7].token }); const d2 = diff(b);
  cost[label] = { first: d1, second: d2 };
  console.log(`  ${label.padEnd(18)} ${String(x.status).padEnd(4)} ${String(d1.get + d1.keys).padStart(4)} leituras/listas → ${String(d2.get + d2.keys).padStart(4)}   (${Math.round(x.ms)} ms → ${Math.round(y.ms)} ms)`);
}

/* ── todo mundo junto: cada pessoa faz a rotina de abrir o app e ficar uns minutos ── */
const mix = [["me"], ["feed"], ["destaques"], ["notifs"], ["feed/pulse"], ["engage/me"], ["engage/ranking?period=week"], ["feed/pulse"], ["me"], ["feed/pulse"]];
const times = []; let errors = 0, byStatus = {};
const t0 = performance.now(); const o0 = snap();
await Promise.all(students.map(async (s, i) => {
  await new Promise((r) => setTimeout(r, (i % 50) * 8)); // chegam em ~400 ms
  for (const [r] of mix) { const x = await call("GET", r, { token: s.token }); times.push(x.ms); byStatus[x.status] = (byStatus[x.status] || 0) + 1; if (x.status >= 400) errors++; }
}));
const wall = performance.now() - t0, od = diff(o0);
console.log(`\n${N} pessoas × ${mix.length} requisições juntas: ${times.length} requisições em ${(wall / 1000).toFixed(1)} s`);
console.log(`  tempo por requisição: mediana ${Math.round(pct(times, .5))} ms · p95 ${Math.round(pct(times, .95))} ms · máx ${Math.round(Math.max(...times))} ms`);
console.log(`  operações no banco: ${od.get} leituras, ${od.keys} listagens, ${od.set} gravações (${((od.get + od.keys) / times.length).toFixed(1)} leituras por requisição)`);
console.log(`  respostas: ${JSON.stringify(byStatus)} · erros: ${errors}`);

/* ── gravações ao mesmo tempo: todo mundo dá hype e comenta no mesmo post ── */
const target = postIds[0];
const h0 = performance.now();
const rs = await Promise.all(students.map((s) => call("POST", `feed/hype/${target}`, { token: s.token })));
const hy = await call("GET", `feed/post/${target}`, { token: admin.token });
const hp = hy.data.post;
console.log(`\nHype simultâneo de ${N} pessoas no mesmo post: ${Math.round(performance.now() - h0)} ms · falhas: ${rs.filter((r) => r.status >= 400).length} · hypes contados: ${hp?.hypes}`);
if (process.env.STRICT) { assert.ok(hp.hypes >= N); }

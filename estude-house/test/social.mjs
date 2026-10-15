// Teste de feed, hype, aprovação, check-in, metas, ranking, apelido (@) e busca: node test/social.mjs
process.env.LOCAL_DB = "1";
process.env.SIGNUP_APPROVAL = "off"; // estes testes cadastram muita gente: a aprovação é testada em test/approval.mjs
process.env.ADMIN_EMAILS = "wellington.moreira@mambadigital.com.br";

import assert from "node:assert/strict";
import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "../netlify/functions/api.mjs";
import { setClock } from "../netlify/functions/lib/clock.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
let passed = 0;
const ok = (m) => { passed++; console.log("  ✓", m); };

const T0 = Date.parse("2026-10-12T12:00:00-03:00"); // segunda-feira
let offset = 0;
let tick = 0;
setClock(() => T0 + offset + tick++); // avança 1 ms a cada leitura, como o tempo real
const DAY = 864e5;

async function call(method, route, { token, body } = {}) {
  const headers = { "content-type": "application/json" };
  if (token) headers.authorization = "Bearer " + token;
  const res = await handler(new Request("http://local/api/" + route, { method, headers, body: body ? JSON.stringify(body) : undefined }));
  return { status: res.status, data: await res.json() };
}
async function signup(name, email) {
  const r = await call("POST", "auth/register", { body: { name, email, password: "Senha1234", password2: "Senha1234" } });
  assert.equal(r.status, 201, JSON.stringify(r.data));
  return { token: r.data.token, id: r.data.user.id, name };
}

console.log("Busca: arquivo do site igual ao do servidor");
{
  const core = fs.readFileSync(path.join(here, "../scripts/textsearch-core.js"), "utf8");
  const server = fs.readFileSync(path.join(here, "../netlify/functions/lib/textsearch.mjs"), "utf8");
  const client = fs.readFileSync(path.join(here, "../public/assets/textsearch.js"), "utf8");
  assert.ok(server.endsWith(core), "rode: node scripts/sync-textsearch.mjs");
  assert.ok(client.includes(core.replace(/^export /gm, "")), "rode: node scripts/sync-textsearch.mjs");
  ok("a busca do site e a do servidor vêm do mesmo código");
}

const adm = await signup("Wellington Moreira", "wellington.moreira@mambadigital.com.br");
const ana = await signup("Ana Souza", "ana@exemplo.com");
const beto = await signup("Beto Lima", "beto@exemplo.com");
const caio = await signup("Caio Rocha", "caio@exemplo.com");

console.log("Apelido (@)");
{
  let r = await call("POST", "auth/profile", { token: ana.token, body: { nickname: "@Ana.Souza" } });
  assert.equal(r.status, 200); assert.equal(r.data.user.nickname, "ana.souza");
  r = await call("POST", "auth/profile", { token: beto.token, body: { nickname: "ana.souza" } });
  assert.equal(r.status, 409); ok("@ repetido é recusado (qualquer caixa)");
  for (const bad of ["ab", "1abc", "a b c", "admin", "ana..x", "ana.", "x".repeat(21)]) {
    r = await call("POST", "auth/profile", { token: beto.token, body: { nickname: bad } });
    assert.equal(r.status, 400, bad);
  }
  ok("@ inválido ou reservado é recusado");
  r = await call("GET", "people/check?nick=ana.souza", { token: beto.token });
  assert.equal(r.data.ok, false);
  r = await call("GET", "people/check?nick=beto.lima", { token: beto.token });
  assert.equal(r.data.ok, true);
  r = await call("POST", "auth/profile", { token: beto.token, body: { nickname: "beto.lima" } });
  assert.equal(r.status, 200);
  r = await call("POST", "auth/profile", { token: beto.token, body: { nickname: "beto2" } });
  assert.equal(r.status, 429); ok("trocar o @ de novo só depois de 7 dias");
  offset += 8 * DAY;
  r = await call("POST", "auth/profile", { token: beto.token, body: { nickname: "beto" } });
  assert.equal(r.status, 200);
  r = await call("POST", "auth/profile", { token: caio.token, body: { nickname: "beto.lima" } });
  assert.equal(r.status, 200); ok("o @ antigo é liberado quando a pessoa troca");
  offset -= 8 * DAY; // volta para a segunda-feira
  r = await call("GET", "people/ana.souza", { token: beto.token });
  assert.equal(r.status, 200); assert.equal(r.data.person.name, "Ana Souza");
  r = await call("GET", "people/nao.existe", { token: beto.token });
  assert.equal(r.status, 404); ok("perfil por @");
}

console.log("Posts e aprovação");
let anaPost;
{
  let r = await call("POST", "feed/post", { token: ana.token, body: { text: "  " } });
  assert.equal(r.status, 400); ok("post vazio é recusado");
  r = await call("POST", "feed/post", { token: ana.token, body: { text: "Dicas de precificação no Mercado Livre: olhe a margem antes de entrar em promoção.\n\nSegunda linha com @beto.lima" } });
  assert.equal(r.status, 201); assert.equal(r.data.status, "pending"); anaPost = r.data.post;
  assert.ok(anaPost.text.includes("\n\n"), "mantém quebras de linha");
  r = await call("GET", "feed", { token: beto.token });
  assert.equal(r.data.posts.length, 0); ok("post de aluno fica fora do feed até ser aprovado");
  r = await call("GET", "feed/mine", { token: ana.token });
  assert.equal(r.data.posts.length, 1); assert.equal(r.data.posts[0].status, "pending");
  r = await call("GET", "admin/feed/pending", { token: beto.token });
  assert.equal(r.status, 403);
  r = await call("GET", "admin/feed/pending", { token: adm.token });
  assert.equal(r.data.posts.length, 1);
  r = await call("GET", "me", { token: adm.token });
  assert.equal(r.data.pending, 1); ok("gestor vê a fila de aprovação");
  await call("POST", "feed/post", { token: ana.token, body: { text: "segundo" } });
  await call("POST", "feed/post", { token: ana.token, body: { text: "terceiro" } });
  r = await call("POST", "feed/post", { token: ana.token, body: { text: "quarto" } });
  assert.equal(r.status, 429); ok("máximo de 3 posts aguardando por aluno");
  r = await call("POST", `admin/feed/${anaPost.id}/approve`, { token: beto.token });
  assert.equal(r.status, 403);
  r = await call("POST", `admin/feed/${anaPost.id}/approve`, { token: adm.token });
  assert.equal(r.status, 200); assert.equal(r.data.xp, 30 + 50, "30 do post + 50 da meta semanal");
  r = await call("POST", `admin/feed/${anaPost.id}/approve`, { token: adm.token });
  assert.equal(r.status, 404);
  r = await call("GET", "feed", { token: beto.token });
  assert.equal(r.data.posts.length, 1); assert.equal(r.data.posts[0].author.nickname, "ana.souza");
  r = await call("GET", "engage/me", { token: ana.token });
  assert.equal(r.data.xp, 80); ok("aprovar publica o post e dá XP ao autor (com a meta semanal)");
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "Aviso do gestor para todo o time" } });
  assert.equal(r.data.status, "published");
  r = await call("GET", "engage/me", { token: adm.token });
  assert.equal(r.data.earns, false); assert.equal(r.data.xp, 0); ok("post de gestor sai direto e gestor não ganha XP");
  r = await call("GET", "feed", { token: beto.token });
  assert.equal(r.data.posts[0].author.role, "admin", "o mais novo primeiro");
}

console.log("Recusar post");
{
  let r = await call("GET", "admin/feed/pending", { token: adm.token });
  const id = r.data.posts[0].id;
  r = await call("POST", `admin/feed/${id}/reject`, { token: adm.token, body: { reason: "Sem relação com o time" } });
  assert.equal(r.status, 200);
  r = await call("GET", "feed/mine", { token: ana.token });
  const rej = r.data.posts.find((p) => p.id === id);
  assert.equal(rej.status, "rejected"); assert.equal(rej.reason, "Sem relação com o time");
  r = await call("GET", "engage/me", { token: ana.token });
  assert.equal(r.data.xp, 80);
  r = await call("GET", `feed/post/${id}`, { token: beto.token });
  assert.equal(r.status, 404);
  r = await call("GET", `feed/post/${id}`, { token: ana.token });
  assert.equal(r.status, 200); ok("recusado volta ao autor com o motivo, sem XP e sem aparecer para os outros");
}

console.log("Anexos e links");
{
  let r = await call("POST", "feed/post", { token: adm.token, body: { text: "link", media: [{ type: "link", url: "javascript:alert(1)" }] } });
  assert.equal(r.status, 400);
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "link", media: [{ type: "link", url: "https://www.youtube.com/watch?v=abc123" }] } });
  assert.equal(r.status, 201); assert.equal(r.data.post.media[0].url, "https://www.youtube.com/watch?v=abc123");
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "foto", media: [{ type: "image", url: "https://res.cloudinary.com/demo/image/upload/x.jpg" }] } });
  assert.equal(r.status, 400); ok("upload sem Cloudinary configurado é recusado");
  r = await call("POST", "feed/upload-sign", { token: adm.token });
  assert.equal(r.status, 503);
  r = await call("GET", "health"); assert.equal(r.data.uploads, "desligado");
  process.env.CLOUDINARY_CLOUD_NAME = "mamba"; process.env.CLOUDINARY_API_KEY = "key123"; process.env.CLOUDINARY_API_SECRET = "segredo";
  r = await call("GET", "health"); assert.equal(r.data.uploads, "cloudinary");
  r = await call("POST", "feed/upload-sign", { token: ana.token });
  assert.equal(r.status, 200);
  const expect = crypto.createHash("sha1").update(`folder=estude-house&timestamp=${r.data.timestamp}segredo`).digest("hex");
  assert.equal(r.data.signature, expect); assert.equal(r.data.apiKey, "key123"); assert.ok(!JSON.stringify(r.data).includes("segredo"));
  ok("assinatura do upload confere e não vaza o segredo");
  for (const url of ["https://res.cloudinary.com/outro/image/upload/x.jpg", "http://res.cloudinary.com/mamba/image/upload/x.jpg", "https://evil.com/mamba/x.jpg"]) {
    r = await call("POST", "feed/post", { token: adm.token, body: { text: "foto", media: [{ type: "image", url }] } });
    assert.equal(r.status, 400, url);
  }
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "", media: [
    { type: "image", url: "https://res.cloudinary.com/mamba/image/upload/v1/estude-house/a.jpg", name: "a.jpg", bytes: 1234 },
    { type: "video", url: "https://res.cloudinary.com/mamba/video/upload/v1/estude-house/b.mov", name: "b.mov" },
    { type: "file", url: "https://res.cloudinary.com/mamba/raw/upload/v1/estude-house/c.pdf", name: "c.pdf" }] } });
  assert.equal(r.status, 201); assert.equal(r.data.post.media.length, 3);
  r = await call("POST", "feed/post", { token: adm.token, body: { text: "x", media: Array.from({ length: 5 }, () => ({ type: "link", url: "https://a.com" })) } });
  assert.equal(r.status, 400); ok("só aceita arquivos do Cloudinary da conta, até 4 anexos");
  delete process.env.CLOUDINARY_CLOUD_NAME; delete process.env.CLOUDINARY_API_KEY; delete process.env.CLOUDINARY_API_SECRET;
}

console.log("Hype, comentários e limites de XP");
{
  const feed = (await call("GET", "feed", { token: beto.token })).data.posts;
  const post = feed.find((p) => p.author.nickname === "ana.souza");
  let before = (await call("GET", "engage/me", { token: beto.token })).data.xp;
  let r = await call("POST", `feed/hype/${post.id}`, { token: beto.token });
  assert.equal(r.status, 200); assert.equal(r.data.hypes, 1); assert.equal(r.data.hyped, true); assert.equal(r.data.gained, 1);
  r = await call("POST", `feed/hype/${post.id}`, { token: beto.token });
  assert.equal(r.data.hypes, 1); assert.equal(r.data.gained, 0); ok("hype vale uma vez por post e rende XP só na primeira");
  r = await call("POST", `feed/hype/${post.id}`, { token: ana.token });
  assert.equal(r.data.gained, 0); assert.equal(r.data.hypes, 2); ok("hype no próprio post conta, mas não rende XP");
  r = await call("GET", "feed", { token: beto.token });
  const seen = r.data.posts.find((p) => p.id === post.id);
  assert.equal(seen.hypes, 2); assert.equal(seen.hyped, true);
  r = await call("GET", "feed", { token: caio.token });
  assert.equal(r.data.posts.find((p) => p.id === post.id).hyped, false);

  // limite diário: 10 hypes rendem XP; a meta "5 hypes hoje" dá +10 uma vez
  const many = [];
  for (let i = 0; i < 12; i++) { const x = await call("POST", "feed/post", { token: adm.token, body: { text: "post " + i } }); many.push(x.data.post.id); }
  let gainedTotal = 0;
  for (const id of many) { const x = await call("POST", `feed/hype/${id}`, { token: beto.token }); gainedTotal += x.data.gained; }
  const hyperXp = 10 * 1 + 10; // 10 hypes com XP (o 1º post de hype já contou 1 acima, então sobram 9) + meta de 5 hypes
  const now = (await call("GET", "engage/me", { token: beto.token })).data;
  assert.equal(now.today.hype, 13);
  assert.equal(now.xp - before, 10 + 10, "10 hypes com XP no dia + 10 da meta diária");
  ok("limite de 10 hypes com XP por dia e meta de 5 hypes paga uma vez");

  // comentários
  r = await call("POST", `feed/comment/${post.id}`, { token: beto.token, body: { text: "Boa dica, vou aplicar!" } });
  assert.equal(r.status, 201); assert.equal(r.data.gained, 2); const c1 = r.data.comment;
  r = await call("POST", `feed/comment/${post.id}`, { token: beto.token, body: { text: "top" } });
  assert.equal(r.data.gained, 0); ok("comentário curto não rende XP");
  r = await call("GET", `feed/comments/${post.id}`, { token: caio.token });
  assert.equal(r.data.comments.length, 2); assert.equal(r.data.comments[0].author.name, "Beto Lima");
  assert.equal(r.data.comments[0].canDelete, false);
  r = await call("DELETE", `feed/comment/${post.id}/${c1.id}`, { token: caio.token });
  assert.equal(r.status, 403);
  r = await call("DELETE", `feed/comment/${post.id}/${c1.id}`, { token: adm.token });
  assert.equal(r.status, 200);
  r = await call("GET", `feed/post/${post.id}`, { token: caio.token });
  assert.equal(r.data.post.comments, 1); ok("comentários: quem pode apagar e contagem no feed");
  for (let i = 0; i < 6; i++) await call("POST", `feed/comment/${post.id}`, { token: caio.token, body: { text: "comentário número " + i } });
  const cx = (await call("GET", "engage/me", { token: caio.token })).data;
  assert.equal(cx.today.comment, 6); assert.equal(cx.xp, 5 * 2 + 25, "5 comentários com XP + meta de 5 comentários na semana");
  ok("limite de 5 comentários com XP por dia; meta semanal de comentários paga uma vez");
}

console.log("Check-in e sequência");
{
  const bt = beto.token;
  const x0 = (await call("GET", "engage/me", { token: bt })).data.xp;
  let r = await call("POST", "engage/checkin", { token: bt });
  assert.equal(r.status, 200); assert.equal(r.data.gained, 10); assert.equal(r.data.streak, 1);
  r = await call("POST", "engage/checkin", { token: bt });
  assert.equal(r.status, 409); ok("um check-in por dia");
  r = await call("POST", "engage/checkin", { token: adm.token });
  assert.equal(r.status, 403); ok("gestor não faz check-in");
  offset += DAY; // terça
  r = await call("POST", "engage/checkin", { token: bt });
  assert.equal(r.data.streak, 2); assert.equal(r.data.gained, 12); ok("dia seguido soma bônus");
  offset += 2 * DAY; // quinta: pulou a quarta
  r = await call("POST", "engage/checkin", { token: bt });
  assert.equal(r.data.streak, 1); assert.equal(r.data.gained, 10); ok("pular um dia zera a sequência");
  offset += DAY; // sexta (4º check-in da semana)
  r = await call("POST", "engage/checkin", { token: bt });
  assert.equal(r.data.goals.length, 0);
  // check-in da segunda (feito acima) + terça + quinta + sexta = 4; falta 1 para a meta de 5
  offset += DAY; // sábado
  r = await call("POST", "engage/checkin", { token: bt });
  assert.equal(r.data.goals.length, 1); assert.equal(r.data.goals[0].xp, 40); ok("meta de 5 check-ins na semana paga +40");
  offset += DAY; // domingo (mesma semana)
  r = await call("POST", "engage/checkin", { token: bt });
  assert.equal(r.data.goals.length, 0); ok("a meta paga uma vez por semana");
  offset += DAY; // nova segunda
  const v = (await call("GET", "engage/me", { token: bt })).data;
  const wk = v.goals.find((g) => g.id === "g-checkin-semana");
  assert.equal(wk.progress, 0); assert.equal(wk.done, false); ok("a meta recomeça na semana seguinte");
  offset -= 7 * DAY;
}

console.log("Ranking");
{
  offset += 7 * DAY; // semana nova: ninguém tem XP nela ainda
  let r = await call("GET", "engage/ranking?period=week", { token: ana.token });
  assert.equal(r.data.rows.length, 0);
  await call("POST", "engage/checkin", { token: caio.token });
  r = await call("GET", "engage/ranking?period=week", { token: ana.token });
  assert.equal(r.data.rows.length, 1); assert.equal(r.data.rows[0].name, "Caio Rocha"); assert.equal(r.data.me, null);
  offset -= 7 * DAY;
  r = await call("GET", "engage/ranking?period=all", { token: ana.token });
  const names = r.data.rows.map((x) => x.name);
  assert.ok(!names.includes("Wellington Moreira"), "gestor fora do ranking");
  for (let i = 1; i < r.data.rows.length; i++) assert.ok(r.data.rows[i - 1].xp >= r.data.rows[i].xp);
  assert.equal(r.data.me.name, "Ana Souza"); assert.ok(r.data.me.pos >= 1);
  r = await call("GET", "engage/ranking?period=month", { token: ana.token });
  assert.ok(r.data.rows.length >= 3); ok("ranking por semana, mês e geral, só com alunos");
}

console.log("Busca");
{
  let r = await call("GET", "search?q=ana", { token: beto.token });
  assert.equal(r.data.people[0].name, "Ana Souza");
  r = await call("GET", "search?q=%40ana.souza", { token: beto.token });
  assert.equal(r.data.people[0].nickname, "ana.souza");
  r = await call("GET", "search?q=souzza", { token: beto.token });
  assert.equal(r.data.people[0].name, "Ana Souza"); ok("busca de pessoas por nome, @ e erro de digitação");
  r = await call("GET", "search?q=ana%40exemplo.com", { token: beto.token });
  assert.equal(r.data.people.length, 0);
  r = await call("GET", "search?q=ana%40exemplo.com", { token: adm.token });
  assert.ok(r.data.people.length >= 1); ok("e-mail só é pesquisável pelo gestor");
  r = await call("GET", "search?q=margem", { token: beto.token });
  assert.ok(r.data.posts.some((p) => /margem/.test(p.snippet)), "acha pela palavra");
  r = await call("GET", "search?q=lucratividade", { token: beto.token });
  assert.ok(r.data.posts.length >= 1, "acha por termo parecido (lucratividade ~ margem)");
  r = await call("GET", "search?q=precos", { token: beto.token });
  assert.ok(r.data.posts.length >= 1, "acha plural / termo relacionado");
  r = await call("GET", "search?q=banana", { token: beto.token });
  assert.equal(r.data.posts.length, 0); assert.equal(r.data.people.length, 0);
  r = await call("GET", "search?q=terceiro", { token: beto.token });
  assert.equal(r.data.posts.length, 0); ok("busca em posts: palavra, termos parecidos, e posts não aprovados não aparecem");
  r = await call("GET", "search?q=a", { token: beto.token });
  assert.deepEqual(r.data, { people: [], posts: [] });
}

console.log("Posts por pessoa, páginas e remoção");
{
  let r = await call("GET", `feed?author=${ana.id}`, { token: beto.token });
  assert.equal(r.data.posts.length, 1); assert.equal(r.data.posts[0].author.id, ana.id);
  r = await call("GET", "feed", { token: beto.token });
  assert.equal(r.data.posts.length, 12); assert.ok(r.data.next);
  const first = r.data.posts.map((p) => p.id);
  const r2 = await call("GET", "feed?after=" + encodeURIComponent(r.data.next), { token: beto.token });
  assert.ok(r2.data.posts.length >= 1); assert.ok(r2.data.posts.every((p) => !first.includes(p.id))); ok("paginação do feed sem repetir post");
  const mine = r2.data.posts.find((p) => p.author.id === ana.id) || (await call("GET", `feed?author=${ana.id}`, { token: ana.token })).data.posts[0];
  let d = await call("DELETE", `feed/post/${mine.id}`, { token: caio.token });
  assert.equal(d.status, 403);
  d = await call("DELETE", `feed/post/${mine.id}`, { token: ana.token });
  assert.equal(d.status, 200);
  d = await call("GET", `feed/post/${mine.id}`, { token: ana.token });
  assert.equal(d.status, 404);
  r = await call("GET", `feed?author=${ana.id}`, { token: beto.token });
  assert.equal(r.data.posts.length, 0); ok("autor remove o próprio post; outro aluno não");
  const adminPost = (await call("GET", "feed", { token: beto.token })).data.posts[0];
  d = await call("DELETE", `feed/post/${adminPost.id}`, { token: adm.token });
  assert.equal(d.status, 200); ok("gestor remove qualquer post");
}

console.log("Configuração de XP e metas");
{
  let r = await call("GET", "admin/engage/config", { token: ana.token });
  assert.equal(r.status, 403);
  r = await call("GET", "admin/engage/config", { token: adm.token });
  assert.equal(r.status, 200); const cfg = r.data.config; assert.equal(cfg.xp.checkin, 10); assert.equal(cfg.goals.length, 4);
  r = await call("PUT", "admin/engage/config", { token: adm.token, body: { ...cfg, xp: { ...cfg.xp, checkin: -5 } } });
  assert.equal(r.status, 400);
  r = await call("PUT", "admin/engage/config", { token: adm.token, body: { ...cfg, goals: [{ title: "x", metric: "checkin", target: 1, period: "day", xp: 5 }] } });
  assert.equal(r.status, 400);
  r = await call("PUT", "admin/engage/config", { token: adm.token, body: { ...cfg, xp: { ...cfg.xp, checkin: 25 }, goals: [...cfg.goals.slice(0, 3), { title: "Meta nova: 2 hypes no dia", metric: "hype", target: 2, period: "day", xp: 7 }] } });
  assert.equal(r.status, 200); assert.equal(r.data.config.goals.length, 4); assert.ok(r.data.config.goals[3].id);
  offset += 20 * DAY;
  r = await call("POST", "engage/checkin", { token: ana.token });
  assert.equal(r.data.gained, 25); ok("o gestor muda o XP e as metas, e vale na hora");
  const v = (await call("GET", "engage/me", { token: ana.token })).data;
  assert.ok(v.goals.some((g) => g.title.startsWith("Meta nova")));
  offset -= 20 * DAY;
}

console.log("Foto de perfil");
{
  const good = "https://res.cloudinary.com/mamba/image/upload/v1/estude-house/ana.jpg";
  let r = await call("POST", "auth/profile", { token: ana.token, body: { avatar: good } });
  assert.equal(r.status, 400); ok("sem Cloudinary configurado a foto é recusada");
  process.env.CLOUDINARY_CLOUD_NAME = "mamba"; process.env.CLOUDINARY_API_KEY = "key123"; process.env.CLOUDINARY_API_SECRET = "segredo";
  for (const bad of ["http://res.cloudinary.com/mamba/image/upload/a.jpg", "https://evil.com/mamba/image/upload/a.jpg", "https://res.cloudinary.com/outra/image/upload/a.jpg", "https://res.cloudinary.com/mamba/video/upload/a.mp4", "javascript:alert(1)"]) {
    r = await call("POST", "auth/profile", { token: ana.token, body: { avatar: bad } });
    assert.equal(r.status, 400, bad);
  }
  ok("só aceita foto do Cloudinary da conta (imagem, https)");
  r = await call("POST", "auth/profile", { token: ana.token, body: { avatar: good } });
  assert.equal(r.status, 200); assert.equal(r.data.user.avatar, good); assert.equal(r.data.user.nickname, "ana.souza");
  r = await call("GET", "me", { token: ana.token });
  assert.equal(r.data.user.avatar, good); ok("a foto é salva sem mexer no @");
  let p = (await call("POST", "feed/post", { token: ana.token, body: { text: "Post com foto de perfil" } })).data;
  const fp = await call("GET", "feed/post/" + p.post.id, { token: adm.token });
  assert.equal(fp.data.post.author.avatar, good);
  r = await call("GET", "people/ana.souza", { token: beto.token });
  assert.equal(r.data.person.avatar, good);
  r = await call("GET", "search?q=ana", { token: beto.token });
  assert.equal(r.data.people.find((x) => x.id === ana.id).avatar, good);
  r = await call("GET", "engage/ranking?period=all", { token: beto.token });
  assert.ok(r.data.rows.every((x) => "avatar" in x));
  ok("a foto aparece nos posts, no perfil, na busca e no ranking");
  r = await call("POST", "auth/profile", { token: ana.token, body: { avatar: "" } });
  assert.equal(r.status, 200); assert.equal(r.data.user.avatar, null);
  r = await call("GET", "people/ana.souza", { token: beto.token });
  assert.equal(r.data.person.avatar, null); ok("a pessoa pode remover a foto");
  r = await call("POST", "auth/profile", { token: ana.token, body: {} });
  assert.equal(r.status, 400);
  delete process.env.CLOUDINARY_CLOUD_NAME; delete process.env.CLOUDINARY_API_KEY; delete process.env.CLOUDINARY_API_SECRET;
}

console.log("Painel do gestor e remoção de pessoa");
{
  let r = await call("GET", "admin/users", { token: adm.token });
  const row = r.data.users.find((u) => u.email === "ana@exemplo.com");
  assert.equal(row.nickname, "ana.souza"); assert.ok(row.xpEngage > 0); assert.ok(row.xp >= row.xpEngage);
  r = await call("DELETE", "admin/users/" + ana.id, { token: adm.token });
  assert.equal(r.status, 200);
  offset += 30 * DAY;
  r = await call("POST", "auth/profile", { token: caio.token, body: { nickname: "ana.souza" } });
  assert.equal(r.status, 200); ok("remover a pessoa libera o @ dela");
}

console.log(`\n${passed} verificações de feed e engajamento passaram.`);

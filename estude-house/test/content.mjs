// Valida o conteúdo estático: telas e áreas, simulações, versões dos quizzes e equilíbrio dos bancos de questões.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = (f) => path.join(root, "public", f);
let passed = 0;
const ok = (m) => { passed++; console.log("  ✓ " + m); };

// Cada trilha vive em public/trilhas/<id>/ (content.js, practice.js, screens.js, img/). Carrega todas.
const win = { };
const ctx = vm.createContext({ window: win, console });
const trailDirs = fs.readdirSync(pub("trilhas"), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort();
for (const d of trailDirs) {
  for (const f of ["content.js", "screens.js", "practice.js"]) {
    const rel = `trilhas/${d}/${f}`;
    if (fs.existsSync(pub(rel))) vm.runInContext(fs.readFileSync(pub(rel), "utf8"), ctx, { filename: rel });
  }
}
const TELAS = win.TELAS || {}, PRATICA = win.PRATICA || {};
const lessons = win.TRILHAS.flatMap((t) => t.modules.flatMap((m) => m.lessons.map((l) => ({ t, m, l }))));

console.log("Conteúdo");
{
  let shots = 0, finds = 0;
  for (const { l } of lessons) for (const b of l.blocks) {
    if (b.t === "shot") { shots++; assert.ok(TELAS[b.tela], `${l.id}: tela inexistente ${b.tela}`); (b.spots || []).forEach((id) => assert.ok(TELAS[b.tela].spots.some((s) => s[0] === id || s.id === id), `${l.id}: área ${id} não existe em ${b.tela}`)); }
    if (b.t === "find") { finds++; b.telas.forEach((t) => assert.ok(TELAS[t], `${l.id}: tela inexistente ${t}`)); }
  }
  ok(`${shots} telas anotadas e ${finds} exercícios apontam para telas e áreas que existem`);
  for (const t of Object.values(TELAS)) assert.ok(fs.existsSync(pub(t.src.replace(/^\//, ""))), "imagem ausente: " + t.src);
  ok("todas as imagens das telas existem");
}
{
  const calc = fs.readFileSync(pub("assets/calc.js"), "utf8") + fs.readFileSync(pub("assets/calc-gf.js"), "utf8");
  const kinds = new Set([...calc.matchAll(/^    (\w+)\(\) \{/gm)].map((m) => m[1]));
  let n = 0;
  for (const { l } of lessons) for (const b of l.blocks) if (b.t === "sim") { n++; assert.ok(kinds.has(b.kind), `${l.id}: simulação desconhecida ${b.kind}`); }
  ok(`${n} simulações usam geradores que existem (${[...kinds].join(", ")})`);
}
{
  let total = 0;
  for (const { l } of lessons) {
    const quizzes = l.blocks.filter((b) => b.t === "quiz");
    const v = PRATICA[l.id] || [];
    assert.equal(v.length, quizzes.length, `${l.id}: ${quizzes.length} quizzes e ${v.length} conjuntos de versões`);
    v.forEach((vs, i) => { assert.ok(vs.length >= 3, `${l.id}#${i}: precisa de 3 versões ou mais`); total += vs.length; });
  }
  Object.keys(PRATICA).forEach((id) => assert.ok(lessons.some(({ l }) => l.id === id), "aula inexistente nas versões: " + id));
  ok(`todos os quizzes das aulas têm 3 versões ou mais (${total} versões no total)`);
}
{
  // Trilha Brand Protection Program: os 8 vídeos oficiais são obrigatórios, na ordem da playlist, cada um numa aula.
  const bpp = win.TRILHAS.find((t) => t.id === "bpp");
  assert.ok(bpp, "trilha bpp ausente");
  const ids = ["WOs5Liq-N-0", "5HyKcokl9nk", "Yuam9PU0TD4", "r2V3RuoWWn4", "CLUZlDWrOYg", "rsLYznpOws4", "m4oEACXivkw", "PvUdAP1dfWc"];
  const got = bpp.modules.flatMap((m) => m.lessons.flatMap((l) => l.blocks.filter((b) => b.t === "video").map((b) => b.id)));
  for (const id of ids) assert.ok(got.includes(id), "vídeo obrigatório ausente na trilha bpp: " + id);
  assert.equal(new Set(got).size, got.length, "vídeo repetido na trilha bpp");
  for (const l of bpp.modules.flatMap((m) => m.lessons)) assert.ok(l.blocks.some((b) => b.t === "video") || ["bpp-l3-1", "bpp-l3-2", "bpp-l3-3"].includes(l.id), l.id + " sem vídeo");
  const quizzes = bpp.modules.flatMap((m) => m.lessons.flatMap((l) => l.blocks.filter((b) => b.t === "quiz")));
  assert.ok(quizzes.length >= 14);
  ok(`trilha bpp: os 8 vídeos oficiais estão nas aulas e há ${quizzes.length} quizzes de verificação`);
}
{
  // Trilha Live Commerce Shopee: os 15 vídeos oficiais da playlist são obrigatórios, cada um em uma aula, e toda aula tem quiz.
  const live = win.TRILHAS.find((t) => t.id === "live");
  assert.ok(live, "trilha live ausente");
  const ids = ["yZkls1yTXfU", "gCNuzvjlBo0", "mEOxqUZEXos", "jmW8lp-5nag", "tCWlR7CMP68", "VkUzF95Vsw8", "6osFUlAAmBs", "v4q5CtzJuIQ", "2FQpUlo8Nxk", "hA3OiqrhZh0", "x7h1XCb7DEY", "Uj6MTz9s8_o", "QlPc8ncVHyg", "WQhJ-JJoQuM", "zghs-pK29Ow"];
  const got = live.modules.flatMap((m) => m.lessons.flatMap((l) => l.blocks.filter((b) => b.t === "video").map((b) => b.id)));
  for (const id of ids) assert.ok(got.includes(id), "vídeo obrigatório ausente na trilha live: " + id);
  assert.equal(new Set(got).size, got.length, "vídeo repetido na trilha live");
  assert.equal(got.length, ids.length, "a trilha live deve ter exatamente os 15 vídeos");
  for (const l of live.modules.flatMap((m) => m.lessons)) assert.ok(l.blocks.some((b) => b.t === "quiz"), l.id + " sem quiz");
  const lessons = live.modules.flatMap((m) => m.lessons);
  assert.equal(lessons.length, 17);
  ok(`trilha live: os 15 vídeos oficiais estão nas aulas e há ${lessons.length} aulas com quiz`);
}
{
  const files = [];
  for (const f of fs.readdirSync(path.join(root, "netlify/functions/lib/questions"))) if (/^(?!index)[\w-]+\.mjs$/.test(f)) files.push("netlify/functions/lib/questions/" + f);
  for (const d of trailDirs) if (fs.existsSync(pub(`trilhas/${d}/practice.js`))) files.push(`public/trilhas/${d}/practice.js`);
  for (const f of files) {
    try { execFileSync("node", [path.join(root, "scripts/check-bank.mjs"), path.join(root, f)], { stdio: "pipe" }); }
    catch (e) { assert.fail(`${f} fora do padrão:\n${e.stdout}`); }
  }
  ok(`${files.length} bancos de questões equilibrados (alternativas de tamanho parecido, sem a certa se destacar)`);
}
{
  // O construtor (navegador) e o servidor precisam concordar sobre os tipos de card e o formato de cada um.
  const { cleanBlock, CARD_TYPES } = await import("../netlify/functions/lib/trails.mjs");
  const stub = { h: () => ({}), icon: () => ({}), esc: (x) => x };
  vm.runInNewContext(fs.readFileSync(pub("assets/builder-cards.js"), "utf8"), { M: stub, window: {}, console });
  const CARDS = stub.builder.CARDS;
  assert.deepEqual(Object.keys(CARDS).sort(), [...CARD_TYPES].sort(), "tipos de card do construtor x servidor");
  for (const [t, def] of Object.entries(CARDS)) {
    const b = def.make();
    const c = cleanBlock(JSON.parse(JSON.stringify(b)));
    assert.ok(c && c.t === t, `${t}: o servidor recusou o card padrão`);
    for (const k of Object.keys(b)) {
      if (k === "layers") assert.equal(c.layers.length, b.layers.length, `${t}: camadas`);
      else if (k === "style") assert.equal(c.style?.bg, b.style.bg, `${t}: fundo`);
      else assert.equal(JSON.stringify(c[k]), JSON.stringify(b[k]), `${t}.${k}: o servidor mudou o valor padrão`);
    }
  }
  ok(`${Object.keys(CARDS).length} tipos de card do construtor são aceitos pelo servidor sem mudar nada`);
}
{
  const front = fs.readFileSync(pub("assets/lib.js"), "utf8").match(/M\.BUILD = "([^"]+)"/)?.[1];
  const back = fs.readFileSync(path.join(root, "netlify/functions/api.mjs"), "utf8").match(/const BUILD = "([^"]+)"/)?.[1];
  assert.ok(front && front === back, `versão do site (${front}) e do servidor (${back}) precisam ser iguais`);
  ok(`a versão do site e a do servidor são iguais (${back})`);
  const html = fs.readFileSync(pub("index.html"), "utf8");
  const urls = [...html.matchAll(/(?:src|href)="(\/(?:assets|trilhas)\/[^"?]+\.(?:js|css))(\?v=[^"]*)?"/g)];
  assert.ok(urls.length > 5);
  for (const [, u, v] of urls) assert.equal(v, "?v=" + back, `${u} no index.html sem a versão atual — rode: node scripts/stamp-version.mjs`);
  ok(`todos os ${urls.length} arquivos do index.html carregam com ?v=${back}`);
}
console.log(`\n${passed} verificações de conteúdo passaram.`);

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
  const calc = fs.readFileSync(pub("assets/calc.js"), "utf8");
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
  const files = [];
  for (const f of fs.readdirSync(path.join(root, "netlify/functions/lib/questions"))) if (/^(?!index)[\w-]+\.mjs$/.test(f)) files.push("netlify/functions/lib/questions/" + f);
  for (const d of trailDirs) if (fs.existsSync(pub(`trilhas/${d}/practice.js`))) files.push(`public/trilhas/${d}/practice.js`);
  for (const f of files) {
    try { execFileSync("node", [path.join(root, "scripts/check-bank.mjs"), path.join(root, f)], { stdio: "pipe" }); }
    catch (e) { assert.fail(`${f} fora do padrão:\n${e.stdout}`); }
  }
  ok(`${files.length} bancos de questões equilibrados (alternativas de tamanho parecido, sem a certa se destacar)`);
}
console.log(`\n${passed} verificações de conteúdo passaram.`);

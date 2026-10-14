// Verifica um arquivo de questões (netlify/functions/lib/questions/*.mjs) ou de prática (public/assets/practice/*.js).
// Uso: node scripts/check-bank.mjs <arquivo>
// Regras: estrutura válida, alternativas de tamanho parecido (a certa não pode se destacar pelo tamanho).
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { pathToFileURL } from "node:url";

const file = process.argv[2];
if (!file) { console.error("Informe o arquivo."); process.exit(2); }
const abs = path.resolve(file);
const errors = [], warns = [];
let items = []; // { label, q }

if (abs.endsWith(".mjs")) {
  const mod = await import(pathToFileURL(abs).href);
  for (const q of mod.default) items.push({ label: q.id, q, bank: true });
} else {
  const win = {};
  vm.runInNewContext(fs.readFileSync(abs, "utf8"), { window: win });
  const P = win.PRATICA || {};
  for (const [lesson, quizzes] of Object.entries(P)) {
    quizzes.forEach((variants, qi) => {
      if (!Array.isArray(variants) || variants.length < 3) errors.push(`${lesson}#${qi}: precisa de pelo menos 3 variantes`);
      (variants || []).forEach((q, vi) => q !== "base" && items.push({ label: `${lesson}#${qi}.v${vi}`, q, bank: false }));
    });
  }
}

const ids = new Set();
let single = 0, longestCorrect = 0;
const pos = {};
for (const { label, q, bank } of items) {
  const e = (m) => errors.push(`${label}: ${m}`);
  if (bank) { if (ids.has(q.id)) e("id repetido"); ids.add(q.id); if (!q.module || !q.topic) e("faltam module/topic"); }
  if (typeof q.q !== "string" || q.q.length < 15) e("enunciado ausente ou curto");
  if (!Array.isArray(q.options) || q.options.length < 4 || q.options.length > 6) { e("precisa de 4 a 6 alternativas"); continue; }
  if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== q.options.length) e("alternativas repetidas");
  if (!Array.isArray(q.answer) || !q.answer.length || q.answer.some((i) => !Number.isInteger(i) || i < 0 || i >= q.options.length)) { e("answer inválido"); continue; }
  if (typeof q.why !== "string" || q.why.length < 30) e("explicação (why) ausente ou curta");
  const lens = q.options.map((o) => o.length);
  const min = Math.min(...lens), max = Math.max(...lens);
  if (min < 12) e("há alternativa curta demais (menos de 12 caracteres)");
  if (max / Math.max(min, 1) > 1.45) e(`alternativas desiguais (maior/menor = ${(max / min).toFixed(2)}; limite 1,45)`);
  if (q.answer.length === 1) {
    single++;
    pos[q.answer[0]] = (pos[q.answer[0]] || 0) + 1;
    const c = lens[q.answer[0]];
    const others = lens.filter((_, i) => i !== q.answer[0]);
    const second = Math.max(...others);
    if (c > second) longestCorrect++;
    if (c > second * 1.15) e(`a certa é ${Math.round((c / second - 1) * 100)}% maior que a maior errada: dá pista pelo tamanho`);
  } else {
    const avgRight = q.answer.reduce((a, i) => a + lens[i], 0) / q.answer.length;
    const wrong = lens.filter((_, i) => !q.answer.includes(i));
    const avgWrong = wrong.reduce((a, b) => a + b, 0) / wrong.length;
    if (avgRight > avgWrong * 1.25) e("as certas são bem maiores que as erradas (múltipla escolha)");
  }
}
const share = single ? longestCorrect / single : 0;
if (single >= 6 && share > 0.35) errors.push(`em ${Math.round(share * 100)}% das questões de escolha única a certa é a maior (limite 35%)`);
if (single >= 6) {
  const maxPos = Math.max(...Object.values(pos));
  if (maxPos / single > 0.4) warns.push(`posição da resposta certa concentrada no arquivo-fonte (o sorteio no exame/atividade embaralha): ${JSON.stringify(pos)}`);
}
if (warns.length) console.log(warns.map((x) => " ! " + x).join("\n"));
console.log(`${path.basename(file)}: ${items.length} questões, escolha única ${single}, certa=maior em ${Math.round(share * 100)}%, posições ${JSON.stringify(pos)}`);
if (errors.length) { console.log(errors.map((x) => " ✗ " + x).join("\n")); process.exit(1); }
console.log(" ✓ ok");

// Gera, no fim de public/assets/app.css, a cópia dos estilos de celular para quando a pessoa escolhe
// "Celular" num computador (html[data-mode="mobile"]). Rode de novo depois de mexer nos blocos @media (max-width: 980/860/680px).
//   node scripts/sync-mobile-css.mjs
import { readFileSync, writeFileSync } from "node:fs";
const file = new URL("../public/assets/app.css", import.meta.url);
const BEGIN = "/* ===MODO-CELULAR-BEGIN=== */", END = "/* ===MODO-CELULAR-END=== */";
let css = readFileSync(file, "utf8");
const i = css.indexOf(BEGIN);
if (i >= 0) css = css.slice(0, i).trimEnd() + "\n";
const widths = new Set(["980", "860", "680"]);
const out = [];
const re = /@media \(max-width: (\d+)px\) \{/g;
let m;
while ((m = re.exec(css))) {
  let depth = 1, j = re.lastIndex;
  while (depth && j < css.length) { const ch = css[j++]; if (ch === "{") depth++; else if (ch === "}") depth--; }
  if (!widths.has(m[1])) continue;
  const inner = css.slice(re.lastIndex, j - 1);
  // regras simples "seletor { declarações }" (sem @-regras aninhadas)
  for (const r of inner.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const sel = r[1].trim();
    if (!sel || sel.startsWith("@")) continue;
    const pref = sel.split(",").map((s) => `html[data-mode="mobile"] ${s.trim()}`).join(", ");
    out.push(`${pref} {${r[2]}}`);
  }
}
const extra = [
  `html[data-mode="mobile"] .shell, html[data-mode="mobile"] .auth { max-width: 480px; margin-left: auto; margin-right: auto; }`,
  `html[data-mode="mobile"] input, html[data-mode="mobile"] select, html[data-mode="mobile"] textarea { font-size: 16px; }`,
];
css += `\n${BEGIN}\n/* gerado por scripts/sync-mobile-css.mjs: não edite aqui */\n${out.join("\n")}\n${extra.join("\n")}\n${END}\n`;
writeFileSync(file, css);
console.log(`modo celular: ${out.length} regras copiadas`);

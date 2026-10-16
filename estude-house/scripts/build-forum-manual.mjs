// Gera netlify/functions/lib/forum-manual.mjs a partir dos arquivos de rascunho do manual (um bloco por categoria).
// Uso: node scripts/build-forum-manual.mjs <pasta com c0.txt, c1.txt ...>
// Formato de cada bloco:  @@Título|Manual Plataforma|N   (linhas "1. Item" com descrição opcional)   Fontes oficiais:  - link
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = process.argv[2];
if (!dir) { console.error("Passe a pasta com os rascunhos (c0.txt, c1.txt...)."); process.exit(1); }
const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "netlify", "functions", "lib", "forum-manual.mjs");
const MAX_TEXT = 7600, MAX_TITLE = 120, MAX_CAT = 30;

const files = fs.readdirSync(dir).filter((f) => /^c\d+\.txt$/.test(f)).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
const raw = files.map((f) => fs.readFileSync(path.join(dir, f), "utf8")).join("\n");
const blocks = raw.split(/^@@/m).slice(1);

const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const posts = [];
const seen = new Set();

for (const b of blocks) {
  const nl = b.indexOf("\n");
  const [title, plat] = b.slice(0, nl).split("|");
  const platform = plat.replace(/^Manual\s+/, "").trim();
  const body = b.slice(nl + 1);
  const [itemsPart, srcPart = ""] = body.split(/^Fontes oficiais:\s*$/m);
  /* itens: "N. título" + linhas de descrição até a próxima numeração */
  const items = [];
  for (const line of itemsPart.split("\n")) {
    const m = line.match(/^(\d+)\.\s+(.*)$/);
    if (m) items.push({ t: m[2].trim(), d: [] });
    else if (line.trim() && items.length) items[items.length - 1].d.push(line.trim());
  }
  if (!items.length) throw new Error("bloco sem itens: " + title);
  const links = [...new Set(srcPart.split("\n").map((l) => l.replace(/^-\s*/, "").trim()).filter((l) => /^https?:\/\//.test(l)))].slice(0, 8);
  const hasDesc = items.some((i) => i.d.length);
  const cat = platform.slice(0, MAX_CAT);
  const shortTitle = title.replace(/\s+/g, " ").trim();
  const head = `${platform} · ${shortTitle.replace(new RegExp("^" + platform.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ":\\s*"), "")}. Resumo do manual de operação do suporte técnico (${items.length} orientações${hasDesc ? "" : ", em formato de índice"}). Confira sempre a fonte oficial antes de aplicar num cliente.`;
  const foot = links.length ? "Fontes oficiais:\n" + links.map((l) => "- " + l).join("\n") : "";
  const lines = items.map((it, i) => `${i + 1}. ${it.t}${it.d.length ? "\n" + it.d.join(" ") : ""}`);

  /* divide em partes que cabem no limite do fórum */
  const parts = [];
  let cur = [], size = head.length + foot.length + 40;
  for (const l of lines) {
    if (cur.length && size + l.length + 2 > MAX_TEXT) { parts.push(cur); cur = []; size = head.length + foot.length + 40; }
    cur.push(l); size += l.length + 2;
  }
  if (cur.length) parts.push(cur);
  parts.forEach((p, idx) => {
    const suffix = parts.length > 1 ? ` (parte ${idx + 1}/${parts.length})` : "";
    const t = (shortTitle + suffix).slice(0, MAX_TITLE);
    const key = slug(shortTitle + suffix);
    if (seen.has(key)) throw new Error("título duplicado: " + key);
    seen.add(key);
    const text = [head + (parts.length > 1 ? ` Parte ${idx + 1} de ${parts.length}.` : ""), p.join("\n\n"), foot].filter(Boolean).join("\n\n");
    if (text.length > 8000) throw new Error("texto grande demais: " + t + " " + text.length);
    posts.push({ key, title: t, category: cat, text });
  });
}

const out = `// GERADO por scripts/build-forum-manual.mjs. Não edite à mão.\n// Posts iniciais do Fórum: resumo do manual de operação do suporte técnico (Amazon, Mercado Livre, Shopee, TikTok Shop, Bling, Upseller).\nexport const FORUM_MANUAL = ${JSON.stringify(posts, null, 1)};\n`;
fs.writeFileSync(OUT, out);
const byCat = {};
for (const p of posts) byCat[p.category] = (byCat[p.category] || 0) + 1;
console.log(`${blocks.length} categorias -> ${posts.length} posts`, byCat, "maior texto:", Math.max(...posts.map((p) => p.text.length)));

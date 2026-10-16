// Confere se as aulas estão no formato de stories (cards curtos, linguagem direta).
// Uso:  node scripts/check-stories.mjs <content.js | modulo.cjs> [--base baseline.json]
//   content.js  → confere todas as trilhas do arquivo (window.TRILHAS)
//   modulo.cjs  → arquivo com  module.exports = { id, n, title, tagline, outcome, lessons: [...] }
// --base: compara com o "retrato" do conteúdo original (mesmos quizzes, simulações, vídeos e telas).
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";

const args = process.argv.slice(2);
const bi = args.indexOf("--base");
const file = args.find((a, i) => !a.startsWith("--") && !(bi >= 0 && i === bi + 1));
const baseFile = bi >= 0 ? args[bi + 1] : null;
const needVisual = args.includes("--require-visual");
if (!file) { console.error("Informe o arquivo."); process.exit(2); }
const abs = path.resolve(file);
let modules = [];
if (abs.endsWith(".cjs")) {
  const m = createRequire(import.meta.url)(abs);
  modules = [m];
} else {
  const win = {};
  vm.runInNewContext(fs.readFileSync(abs, "utf8"), { window: win });
  modules = (win.TRILHAS || []).flatMap((t) => t.modules);
}
const base = baseFile ? JSON.parse(fs.readFileSync(baseFile, "utf8")) : null;

const strip = (s) => String(s ?? "").replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/\s+/g, " ").trim();
const words = (s) => (strip(s) ? strip(s).split(" ").length : 0);
const longest = (s) => Math.max(0, ...strip(s).split(/(?<=[.!?…])\s+/).map((x) => x.split(" ").length));
const errors = [];
let cards = 0, lessons = 0;

for (const mod of modules) {
  for (const k of ["title", "tagline", "outcome"]) if (!mod[k]) errors.push(`${mod.id}: falta ${k}`);
  if (words(mod.title) > 7) errors.push(`${mod.id}: título do módulo longo (máx. 7 palavras)`);
  if (words(mod.tagline) > 18) errors.push(`${mod.id}: tagline longa (máx. 18 palavras)`);
  for (const l of mod.lessons) {
    lessons++;
    const E = (m) => errors.push(`${l.id}: ${m}`);
    const bl = l.blocks || [];
    cards += bl.length;
    if (words(l.title) > 8) E("título longo (máx. 8 palavras)");
    if (words(l.goal) > 22 || !l.goal) E("goal ausente ou longo (máx. 22 palavras)");
    if (!(l.minutes >= 2 && l.minutes <= 8)) E("minutes entre 2 e 8");
    if (bl.length < 10 || bl.length > 24) E(`${bl.length} cards (de 10 a 24)`);
    if (bl[0]?.t !== "hook") E("o primeiro card precisa ser hook");
    if (needVisual) {
      const VIS = new Set(["chart", "flow", "table", "tree", "timeline", "stairs", "anno", "lab"]);
      if (!bl.some((b) => VIS.has(b.t))) E("falta um card visual (chart, flow, table, tree, timeline, stairs, anno ou lab)");
      if (!bl.some((b) => b.t === "quiz")) E("falta um quiz");
    }
    if (bl[bl.length - 1]?.t !== "recap") E("o último card precisa ser recap");
    bl.forEach((b, i) => {
      const at = `card ${i + 1} (${b.t})`;
      const e = (m) => E(`${at}: ${m}`);
      const sent = (s, what) => { if (longest(s) > 24) e(`frase longa em ${what} (máx. 24 palavras)`); };
      switch (b.t) {
        case "h": e("bloco h não existe mais: use title no card"); break;
        case "hook": if (!b.title || words(b.title) > 9) e("title de 1 a 9 palavras"); if (words(b.text) > 28) e("text com mais de 28 palavras"); sent(b.text, "text"); break;
        case "big": if (words(b.html) > 18) e("html com mais de 18 palavras"); if (words(b.sub) > 18) e("sub com mais de 18 palavras"); break;
        case "jargon": if (!b.term || !b.means) e("faltam term e means"); if (words(b.means) > 24) e("means longo"); if (words(b.ex) > 26) e("ex longo"); break;
        case "conta": if (!(b.rows || []).length || b.rows.length > 7) e("rows de 1 a 7 linhas"); if (!b.total) e("falta total"); if (words(b.note) > 30) e("note longa"); break;
        case "recap": if (!b.items || b.items.length < 3 || b.items.length > 5) e("recap de 3 a 5 itens"); (b.items || []).forEach((t) => { if (words(t) > 12) e("item de recap longo (máx. 12 palavras)"); }); break;
        case "p": if (words(b.html) > 48) e(`texto com ${words(b.html)} palavras (máx. 48)`); if (b.title && words(b.title) > 8) e("title longo"); sent(b.html, "texto"); break;
        case "list": if (!b.items || b.items.length > 5) e("lista com mais de 5 itens"); (b.items || []).forEach((t) => { if (words(t) > 15) e("item de lista longo (máx. 15 palavras)"); }); break;
        case "steps": if (!b.items || b.items.length > 4) e("steps com mais de 4 passos"); (b.items || []).forEach((s) => { if (words(s.title) + words(s.html) > 26) e("passo longo (máx. 26 palavras)"); }); break;
        case "compare": for (const side of [b.left, b.right]) { if (!side || side.items.length > 4) e("compare com mais de 4 itens por lado"); (side?.items || []).forEach((t) => { if (words(t) > 13) e("item de compare longo (máx. 13 palavras)"); }); } break;
        case "callout": if (words(b.html) > 48) e(`callout com ${words(b.html)} palavras (máx. 48)`); sent(b.html, "callout"); break;
        case "say": if (words(b.html) > 42) e("say longo (máx. 42 palavras)"); break;
        case "term": if (!b.items || b.items.length > 3) e("term com mais de 3 itens"); (b.items || []).forEach((t) => { if (words(t.def) > 24) e("definição longa"); }); break;
        case "shot": if (!(b.spots || []).length) e("shot precisa de spots (1 a 4 áreas)"); if ((b.spots || []).length > 4) e("shot com mais de 4 áreas (divida em mais cards)"); if (words(b.caption) > 30) e("caption longa"); break;
        case "quiz": if (words(b.q) > 40) e("pergunta longa"); break;
        case "chart": {
          const KINDS = ["bar", "hbar", "line", "donut", "stack", "waterfall", "funnel", "matrix", "meter", "pareto"];
          if (!KINDS.includes(b.kind)) { e("chart.kind inválido: " + b.kind); break; }
          if (words(b.title) > 8) e("title do gráfico longo (máx. 8 palavras)");
          if (words(b.caption) > 30) e("caption do gráfico longa (máx. 30 palavras)");
          const lab = (x) => { if (!x || String(x.label ?? "").length < 1 || String(x.label).length > 24) e("label de item vazio ou com mais de 24 caracteres: " + JSON.stringify(x?.label)); };
          if (b.kind === "line") {
            if (!Array.isArray(b.x) || b.x.length < 3 || b.x.length > 8) e("line: x com 3 a 8 rótulos");
            if (!Array.isArray(b.series) || !b.series.length || b.series.length > 3) e("line: de 1 a 3 series");
            (b.series || []).forEach((sr) => { if (!sr.name || !Array.isArray(sr.values) || sr.values.length !== (b.x || []).length || sr.values.some((v) => typeof v !== "number")) e("line: cada serie precisa de name e values numéricos do mesmo tamanho de x"); });
          } else if (b.kind === "matrix") {
            if (!b.x || !b.y) e("matrix: faltam x e y (nomes dos eixos)");
            if (!Array.isArray(b.quad) || b.quad.length !== 4) e("matrix: quad com 4 textos [cima-esq, cima-dir, baixo-esq, baixo-dir]");
            if (!Array.isArray(b.points) || b.points.length < 3 || b.points.length > 7) e("matrix: de 3 a 7 pontos");
            (b.points || []).forEach((pt) => { lab(pt); if (!(pt.x >= 0 && pt.x <= 10 && pt.y >= 0 && pt.y <= 10)) e("matrix: x e y de 0 a 10"); });
          } else if (b.kind === "meter") {
            if (!Array.isArray(b.zones) || b.zones.length < 2 || b.zones.length > 6) e("meter: de 2 a 6 zonas");
            (b.zones || []).forEach((z) => { if (!z.label || typeof z.from !== "number" || typeof z.to !== "number") e("meter: cada zona precisa de label, from e to"); });
            if (typeof b.value !== "number") e("meter: falta value numérico");
          } else {
            const n = (b.data || []).length;
            const [lo, hi] = b.kind === "waterfall" ? [3, 8] : b.kind === "donut" || b.kind === "stack" ? [2, 6] : b.kind === "funnel" ? [3, 6] : [2, 7];
            if (n < lo || n > hi) e(`${b.kind}: data com ${lo} a ${hi} itens`);
            (b.data || []).forEach((d) => { lab(d); if (typeof d.value !== "number" && !(b.kind === "waterfall" && d.type === "total")) e("item sem value numérico: " + d.label); });
          }
          break;
        }
        case "flow": if (!Array.isArray(b.items) || b.items.length < 2 || b.items.length > 6) e("flow de 2 a 6 itens"); (b.items || []).forEach((it) => { if (!it.title || words(it.title) > 6) e("flow: title de 1 a 6 palavras"); if (words(it.text) > 14) e("flow: text longo (máx. 14 palavras)"); }); if (words(b.caption) > 30) e("caption longa"); break;
        case "table": {
          if (!Array.isArray(b.head) || b.head.length < 2 || b.head.length > 4) e("table: head com 2 a 4 colunas");
          if (!Array.isArray(b.rows) || b.rows.length < 2 || b.rows.length > 6) e("table: de 2 a 6 linhas");
          (b.rows || []).forEach((r) => { if (r.length !== (b.head || []).length) e("table: linha com número de colunas diferente do head"); r.forEach((c) => { if (words(c) > 10) e("table: célula longa (máx. 10 palavras)"); }); });
          if (words(b.caption) > 30) e("caption longa");
          break;
        }
        case "tree": if (!b.root) e("tree: falta root"); if (!Array.isArray(b.branches) || b.branches.length < 2 || b.branches.length > 4) e("tree: de 2 a 4 branches"); (b.branches || []).forEach((br) => { if (!br.label || !Array.isArray(br.items) || br.items.length < 1 || br.items.length > 3) e("tree: branch com label e de 1 a 3 items"); (br.items || []).forEach((t) => { if (words(t) > 12) e("tree: item longo (máx. 12 palavras)"); }); }); break;
        case "timeline": if (!Array.isArray(b.items) || b.items.length < 3 || b.items.length > 7) e("timeline de 3 a 7 itens"); (b.items || []).forEach((it) => { if (!it.when || !it.label || words(it.label) > 8) e("timeline: when e label (máx. 8 palavras)"); if (words(it.text) > 14) e("timeline: text longo (máx. 14 palavras)"); }); break;
        case "stairs": if (!Array.isArray(b.items) || b.items.length < 3 || b.items.length > 5) e("stairs de 3 a 5 degraus"); (b.items || []).forEach((it) => { if (!it.tag || !it.title) e("stairs: tag e title"); if (words(it.text) > 16) e("stairs: text longo (máx. 16 palavras)"); }); break;
        case "anno": {
          const N = { anuncio: 6, nfe: 5, ads: 5, planilha: 5 }[b.preset];
          if (!N) { e("anno.preset inválido (anuncio, nfe, ads, planilha)"); break; }
          if (!Array.isArray(b.notes) || b.notes.length !== N) e(`anno ${b.preset}: notes precisa ter exatamente ${N} textos`);
          (b.notes || []).forEach((t) => { if (words(t) > 16) e("anno: nota longa (máx. 16 palavras)"); });
          break;
        }
        case "lab": {
          const P = ["preco", "roas", "promo", "full", "regime", "cobertura", "pe"];
          if (!P.includes(b.preset)) e("lab.preset inválido: " + b.preset);
          if (words(b.intro) > 30) e("lab: intro longa (máx. 30 palavras)");
          break;
        }
        case "sim": case "find": case "video": case "ruler": break;
        default: e("tipo de bloco desconhecido");
      }
    });
    /* comparação com o conteúdo original */
    const o = base && base[l.id];
    if (base && !o) E("aula não existe no conteúdo original");
    if (o) {
      const quizzes = bl.filter((b) => b.t === "quiz");
      if (quizzes.length !== o.quizzes.length) E(`${quizzes.length} quizzes, o original tem ${o.quizzes.length}`);
      quizzes.forEach((q, i) => {
        const oq = o.quizzes[i]; if (!oq) return;
        if (q.options.length !== oq.n) E(`quiz ${i + 1}: ${q.options.length} alternativas, o original tem ${oq.n}`);
        if (!!q.multi !== oq.multi) E(`quiz ${i + 1}: multi diferente do original`);
        if ((q.answer || []).length !== oq.answers) E(`quiz ${i + 1}: quantidade de respostas certas diferente do original`);
      });
      const sims = bl.filter((b) => b.t === "sim").map((b) => b.kind).join();
      if (sims !== o.sims.join()) E(`simulações [${sims}] diferem do original [${o.sims.join()}]`);
      const vids = bl.filter((b) => b.t === "video").map((b) => b.id).join();
      if (vids !== o.videos.join()) E("vídeos diferentes do original");
      const finds = JSON.stringify(bl.filter((b) => b.t === "find").map((b) => b.telas || [b.tela]));
      if (finds !== JSON.stringify(o.finds)) E("exercícios find diferentes do original");
      const shown = {};
      bl.filter((b) => b.t === "shot").forEach((b) => { (shown[b.tela] ||= new Set()); (b.spots || []).forEach((s) => shown[b.tela].add(s)); });
      for (const [tela, spots] of Object.entries(o.shots)) for (const s of spots) if (!shown[tela]?.has(s)) E(`área ${s} da tela ${tela} sumiu`);
    }
  }
}
if (errors.length) { console.log(errors.join("\n")); console.log(`\n✗ ${errors.length} problema(s)`); process.exit(1); }
console.log(`${lessons} aulas, ${cards} cards ✓ ok`);

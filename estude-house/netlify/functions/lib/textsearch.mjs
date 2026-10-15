/* ARQUIVO GERADO por scripts/sync-textsearch.mjs a partir de scripts/textsearch-core.js. Não edite aqui. */
/* Busca por palavras parecidas: ignora acento e maiúscula, aceita plural/derivações simples,
   erro de digitação (1 a 2 letras) e uma lista curta de termos relacionados do dia a dia da Mamba.
   Fonte única: scripts/textsearch-core.js. O comando `node scripts/sync-textsearch.mjs` copia este
   código para o site (public/assets/textsearch.js) e para o servidor (netlify/functions/lib/textsearch.mjs). */
const STOP = new Set("de da do das dos a o as os e em no na nos nas para por com um uma uns umas que se ao aos ou ja mais muito como sobre entre ate sem seu sua seus suas meu minha eu voce".split(" "));

// Termos relacionados (já sem acento). Cada grupo é tratado como "parecido".
const RELATED = [
  ["preco", "precificacao", "valor", "tarifa"],
  ["margem", "lucro", "lucratividade", "rentabilidade"],
  ["anuncio", "listagem", "publicacao", "produto"],
  ["promocao", "campanha", "desconto", "oferta", "cupom"],
  ["frete", "envio", "logistica", "entrega"],
  ["venda", "faturamento", "pedido", "receita"],
  ["concorrente", "concorrencia", "competidor"],
  ["catalogo", "buybox", "disputa"],
  ["ads", "publicidade", "patrocinado", "acos", "roas"],
  ["treino", "treinamento", "formacao", "curso", "trilha", "aula"],
  ["reuniao", "alinhamento", "call"],
  ["cliente", "seller", "vendedor", "lojista"],
  ["relatorio", "planilha", "dashboard", "painel"],
];

export function norm(s) {
  return String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9@#]+/g, " ").trim();
}

const SUFFIXES = ["amentos", "imentos", "adoras", "adores", "acoes", "icoes", "mente", "amento", "imento", "adora", "ador", "acao", "icao", "idade", "ismo", "ista", "oes", "aes", "ais", "eis", "ois", "res", "ns", "es", "s"];
export function stem(w) {
  if (w.length <= 3) return w;
  for (const suf of SUFFIXES) {
    if (w.length - suf.length >= 3 && w.endsWith(suf)) return w.slice(0, -suf.length);
  }
  return w;
}

export function tokens(s) {
  return norm(s).split(" ").filter((t) => t && !STOP.has(t)).map((t) => (t[0] === "@" || t[0] === "#" ? t : stem(t)));
}

function lev(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let min = i;
    for (let j = 1; j <= b.length; j++) {
      const v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      cur.push(v); if (v < min) min = v;
    }
    if (min > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

const REL = new Map();
for (const g of RELATED) for (const w of g) REL.set(stem(w), g.map(stem).filter((x) => x !== stem(w)));

// Quanto a palavra do texto (já normalizada e "stemmed") combina com o termo buscado: 0 a 1
export function wordScore(q, w) {
  if (q === w) return 1;
  if (q.length >= 3 && w.startsWith(q)) return 0.85;
  if (w.length >= 4 && q.startsWith(w)) return 0.55;
  const rel = REL.get(q);
  if (rel && rel.includes(w)) return 0.55;
  const d = q.length >= 8 ? 2 : q.length >= 5 ? 1 : 0;
  if (d && lev(q, w, d) <= d) return d === 2 ? 0.55 : 0.65;
  return 0;
}

// fields: [{ text, weight }]. Retorna { score, matched } ou null se não combina.
export function match(query, fields) {
  const qt = tokens(query);
  if (!qt.length) return null;
  const qnorm = norm(query);
  let total = 0, covered = 0, phrase = 0;
  const per = qt.map(() => 0);
  for (const f of fields) {
    const text = String(f.text ?? "");
    if (!text) continue;
    const words = tokens(text);
    if (qnorm.length >= 3 && norm(text).includes(qnorm)) phrase = Math.max(phrase, 2 * f.weight);
    qt.forEach((q, i) => {
      let best = 0;
      for (const w of words) { const s = wordScore(q, w); if (s > best) best = s; if (best === 1) break; }
      if (best) per[i] = Math.max(per[i], best * f.weight);
    });
  }
  per.forEach((v) => { if (v > 0) { covered++; total += v; } });
  const need = qt.length === 1 ? 1 : Math.ceil(qt.length * 0.6);
  if (covered < need) return null;
  return { score: total + phrase + covered * 0.1 };
}

// Esta palavra do texto combina com a busca? (para destacar no resultado)
export function wordMatches(word, queryTokens) {
  const w = tokens(word)[0];
  if (!w) return false;
  return queryTokens.some((q) => wordScore(q, w) >= 0.55);
}

// Trecho do texto em volta da primeira palavra que combina
export function snippet(text, query, size = 150) {
  const clean = String(text ?? "").replace(/\s+/g, " ").trim();
  const qt = tokens(query);
  const re = /[\p{L}\p{N}@#]+/gu;
  let m, at = -1;
  while ((m = re.exec(clean))) { if (wordMatches(m[0], qt)) { at = m.index; break; } }
  if (at < 0) return clean.slice(0, size) + (clean.length > size ? "…" : "");
  const start = Math.max(0, at - Math.floor(size / 3));
  const end = Math.min(clean.length, start + size);
  return (start > 0 ? "…" : "") + clean.slice(start, end) + (end < clean.length ? "…" : "");
}

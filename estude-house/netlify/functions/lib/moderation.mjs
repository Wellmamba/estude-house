// Filtro de linguagem ofensiva (português do Brasil) para comentários e posts de alunos.
// Compara palavra inteira (não bloqueia "computador" por conter "puta"), ignora acento e maiúscula,
// entende troca de letra por número ("m3rda"), letras repetidas ("puuuta"), letras separadas ("p u t a")
// e plural. A administração pode somar palavras próprias (ver "Tags e moderação").
import { store } from "./db.mjs";
import { isStaff } from "./auth.mjs";

const WORDS = `
porra caralho carai cacete merda bosta puta puto putaria putinha putao buceta boceta xoxota xereca punheta piroca
idiota imbecil babaca otario otaria escroto escrota arrombado arrombada desgracado desgracada vagabundo vagabunda
vadia cretino cretina retardado retardada canalha viado viadinho viadao sapatao traveco aleijado mongoloide
fdp pqp vsf tnc vtnc krl fodase fudase foder fuder fodam
`.split(/\s+/).filter(Boolean);

const PHRASES = [
  "filho da puta", "filha da puta", "vai tomar no cu", "tomar no cu", "vai se foder", "vai se fuder", "vai te foder", "va se foder",
  "vai a merda", "vai pra puta que pariu", "puta que pariu", "foda se", "cala a boca", "cala boca", "vou te matar", "te mato", "vou te bater",
  "pau no cu", "enfia no cu", "chupa meu", "seu lixo", "sua lixo", "seu merda", "sua merda", "seu idiota", "sua idiota",
];

const LEET = { 0: "o", 1: "i", 3: "e", 4: "a", 5: "s", 7: "t", "@": "a", $: "s", "€": "e" };

export function normalize(s) {
  let t = String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  // troca número/símbolo por letra só dentro de palavras que já têm letra ("m3rda"); "15,00" e "idiotas!" ficam como estão
  t = t.split(/\s+/).map((w) => (/[a-z]/.test(w) ? w.replace(/!(?=[a-z])/g, "i").replace(/[0134578@$€]/g, (c) => LEET[c] ?? c) : w)).join(" ");
  return t;
}
const collapse = (w) => w.replace(/(.)\1+/g, "$1"); // "puuuta" e "pooorra" viram "puta" e "pora"
const strip = (s) => s.replace(/[^a-z]+/g, " ").trim();

const BASE = new Set(WORDS.map((w) => collapse(w)));
const BASE_PHRASES = PHRASES.map((p) => strip(normalize(p)).split(" ").map(collapse).join(" "));

function wordHit(tok, extra) {
  if (!tok) return null;
  const c = collapse(tok);
  for (const form of [c, c.endsWith("s") ? c.slice(0, -1) : null, c.endsWith("es") ? c.slice(0, -2) : null]) {
    if (form && (BASE.has(form) || extra.has(form))) return form;
  }
  return null;
}

// Devolve a palavra ou expressão que causou o bloqueio, ou null se o texto está limpo.
export function offense(text, extraWords = []) {
  const extra = new Set(extraWords.map((w) => collapse(strip(normalize(w)))).filter(Boolean));
  const clean = strip(normalize(text));
  if (!clean) return null;
  const toks = clean.split(" ");
  const ctoks = toks.map(collapse);

  // palavra a palavra
  for (const t of toks) { const h = wordHit(t, extra); if (h) return h; }

  // letras soltas: "p u t a", "m e r d a"
  let run = "";
  const flush = () => { if (run.length >= 3) { const h = wordHit(run, extra); if (h) return h; } run = ""; return null; };
  for (const t of toks) {
    if (t.length === 1) run += t;
    else { const h = flush(); if (h) return h; }
  }
  { const h = flush(); if (h) return h; }

  // expressões
  const joined = " " + ctoks.join(" ") + " ";
  for (const p of BASE_PHRASES) if (joined.includes(" " + p + " ")) return p;
  for (const w of extra) if (w.includes(" ") && joined.includes(" " + w + " ")) return w;
  return null;
}

/* ---------- lista própria da administração ---------- */
const doc = async () => (await (await store("feed")).get("mod")) || { on: true, words: [] };
export async function loadMod() {
  const d = await doc();
  return { on: d.on !== false, words: Array.isArray(d.words) ? d.words : [] };
}
export async function saveMod(input, fail) {
  const words = [];
  for (const raw of Array.isArray(input?.words) ? input.words : []) {
    const w = String(raw || "").replace(/\s+/g, " ").trim().toLowerCase().slice(0, 40);
    if (!w) continue;
    if (w.length < 3) fail(400, `“${w}” é curta demais. Use pelo menos 3 letras.`);
    if (!words.includes(w)) words.push(w);
  }
  if (words.length > 200) fail(400, "No máximo 200 palavras próprias.");
  const d = { on: input?.on !== false, words };
  await (await store("feed")).set("mod", d);
  return d;
}

// Confere um texto para quem não é gestor. Devolve a palavra barrada ou null.
export async function check(text, user) {
  if (isStaff(user)) return null;
  const m = await loadMod();
  if (!m.on) return null;
  return offense(text, m.words);
}

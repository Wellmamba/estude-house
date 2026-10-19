// Trilhas criadas pelo gestor (construtor) e ativar/inativar qualquer trilha.
//
// Banco (store "trails"):
//   meta        → { ver, flags: { [trilha]: { active:false, by, at } }, trails: { [id]: { liveRev, live } } }
//   t:<id>      → { id, rev, status, draft, live, qArchive, createdBy, createdAt, updatedAt, publishedAt }
//
// Cada instância do servidor guarda em memória só as trilhas PUBLICADAS e confere o `meta` a cada poucos
// segundos (uma leitura pequena). Quando algo muda, recarrega só o que mudou e atualiza o manifesto
// (TRAILS), o banco de questões (QUESTIONS) e a lista de trilhas inativas.
//
// Formato do rascunho (`draft`), o mesmo que o editor usa:
//   { title, tag, tagline, subtitle, finalSize, seq:{m,l,q},
//     modules:[{ id, title, tagline, outcome, examSize, lessons:[{ id, title, minutes, goal, blocks:[...] }], questions:[...] }],
//     finalQuestions:[...] }
// Questão da prova: { id, q, options:[...], answer:[índices], why, topic }.

import crypto from "node:crypto";
import { store, pmap } from "./db.mjs";
import { newId, can } from "./auth.mjs";
import { now } from "./clock.mjs";
import { isLive } from "./auth.mjs";
import { TRAILS, BUILTIN_IDS, setCustomTrails, setInactive, isTrailActive, inactiveIds, setRestricted, restrictedIds, isRestricted, trailVisibleTo } from "./manifest.mjs";
import { setCustomQuestions } from "./questions/index.mjs";

/* ───────────────────────── limpeza de texto ───────────────────────── */

const ctrl = /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g;
const S = (v, max = 200) => String(v ?? "").replace(ctrl, " ").replace(/\r/g, "").trim().slice(0, max);
const N = (v, lo, hi, def) => { const n = Number(v); return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : def; };
const B = (v) => v === true || v === "true";
const arr = (v, max) => (Array.isArray(v) ? v.slice(0, max) : []);
const pick = (v, list, def) => (list.includes(v) ? v : def);
const EMOJI = /^[\p{Extended_Pictographic}\p{Emoji_Component}‍️▶•★✓✔✨]{1,12}$/u;
const E = (v) => { const s = S(v, 16); return s && EMOJI.test(s) ? s : ""; };
const COLOR = /^#[0-9a-fA-F]{3,8}$/;
const C = (v, def = "") => { const s = S(v, 12); return COLOR.test(s) ? s : def; };

// HTML permitido nos textos: só negrito, itálico, sublinhado, marca-texto e quebra de linha, sem atributos.
// O resto vira texto comum (< e > escapados), então nada de script chega ao aluno.
const ALLOWED = /(<\/?(?:b|i|u|mark|br)\s*\/?>)/gi;
export function cleanHtml(v, max = 600) {
  const raw = String(v ?? "").replace(ctrl, " ").replace(/\r/g, "").trim().slice(0, max * 2);
  const out = raw.split(ALLOWED).map((part, i) => {
    if (i % 2) return part.toLowerCase().replace(/\s+/g, "").replace("/>", ">");
    return part.replace(/&(?!(?:amp|lt|gt|quot|#39|nbsp);)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }).join("");
  return out.slice(0, max * 2);
}
const H = (v, max) => cleanHtml(v, max);

// Links de imagem e vídeo: só https.
function U(v) {
  // imagem embutida no arquivo da trilha (importação): só jpeg, png ou webp, até ~450 KB
  if (typeof v === "string" && v.length <= 450_000 && /^data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(v)) return v;
  const raw = S(v, 700);
  if (!raw) return "";
  // imagens que vêm junto com o site: só dentro de /trilhas/, sem "..".
  if (/^\/trilhas\/[A-Za-z0-9_\-./]+\.(?:jpe?g|png|webp|gif|svg|mp4|webm)$/i.test(raw) && !raw.includes("..")) return raw;
  try { const u = new URL(raw); return u.protocol === "https:" ? u.href : ""; } catch { return ""; }
}

const FONTS = ["sans", "display", "serif", "mono", "hand"];
const MOODS = ["night", "plum", "violet", "pink", "mint", "amber", "dark", "gold"];
const TONES = ["gold", "violet", "mint", "pink", "amber", "sky", "plum", "grey"];
const tone = (v) => (TONES.includes(v) ? v : "");

function cleanBg(v) {
  const s = S(v, 40);
  if (MOODS.includes(s)) return s;
  if (COLOR.test(s)) return s;
  const g = s.match(/^g:(#[0-9a-fA-F]{3,8}),(#[0-9a-fA-F]{3,8})$/);
  return g ? s : "";
}

function cleanStyle(st) {
  if (!st || typeof st !== "object") return undefined;
  const o = {};
  const bg = cleanBg(st.bg); if (bg) o.bg = bg;
  const img = U(st.img); if (img) { o.img = img; o.dim = N(st.dim, 0, 85, 35); }
  if (FONTS.includes(st.font) && st.font !== "sans") o.font = st.font;
  const size = N(st.size, 0.7, 1.9, 1); if (size !== 1) o.size = Math.round(size * 100) / 100;
  const color = C(st.color); if (color) o.color = color;
  if (["left", "center", "right"].includes(st.align)) o.align = st.align;
  if (["top", "bottom"].includes(st.v)) o.v = st.v;
  return Object.keys(o).length ? o : undefined;
}

/* ───────────────────────── blocos (cards) ───────────────────────── */

const strList = (v, n, max) => arr(v, n).map((x) => H(x, max)).filter((x) => x);
const plainList = (v, n, max) => arr(v, n).map((x) => S(x, max)).filter((x) => x);

const TYPES = {
  hook: (b) => ({ emoji: E(b.emoji), title: S(b.title, 120), text: H(b.text, 400) }),
  big: (b) => ({ emoji: E(b.emoji), html: H(b.html, 300), sub: H(b.sub, 300) }),
  p: (b) => ({ title: S(b.title, 100), html: H(b.html, 1400) }),
  list: (b) => ({ title: S(b.title, 100), items: strList(b.items, 12, 220) }),
  steps: (b) => ({ title: S(b.title, 100), items: arr(b.items, 8).map((s) => ({ title: S(s?.title, 80), html: H(s?.html, 260) })).filter((s) => s.title || s.html) }),
  jargon: (b) => ({ tag: S(b.tag, 40), term: S(b.term, 60), means: H(b.means, 320), ex: H(b.ex, 320) }),
  conta: (b) => ({
    title: S(b.title, 60),
    rows: arr(b.rows, 10).map((r) => [H(r?.[0], 90), S(r?.[1], 30), pick(r?.[2], ["pos", "neg"], "")]).filter((r) => r[0] || r[1]),
    total: Array.isArray(b.total) && (b.total[0] || b.total[1]) ? [H(b.total[0], 90), S(b.total[1], 30)] : undefined,
    note: H(b.note, 300),
  }),
  compare: (b) => {
    const side = (x) => ({ title: S(x?.title, 60), tone: x?.tone === "bad" ? "bad" : "good", items: strList(x?.items, 8, 200) });
    return { left: side(b.left), right: side(b.right) };
  },
  callout: (b) => ({ tone: pick(b.tone, ["dica", "atencao", "regra", "exemplo"], "dica"), title: S(b.title, 60), html: H(b.html, 700) }),
  say: (b) => ({ title: S(b.title, 60), html: H(b.html, 600) }),
  recap: (b) => ({ title: S(b.title, 60), items: strList(b.items, 8, 200) }),
  chart: (b) => {
    const kind = pick(b.kind, ["bar", "hbar", "line", "donut", "stack", "funnel"], "bar");
    const o = { kind, title: S(b.title, 80), caption: H(b.caption, 300), unit: S(b.unit, 8) };
    if (kind === "line") {
      o.x = arr(b.x, 12).map((x) => S(x, 14));
      o.series = arr(b.series, 3).map((s) => ({ name: S(s?.name, 30), tone: tone(s?.tone), values: arr(s?.values, 12).map((v) => N(v, -1e9, 1e9, 0)) }));
    } else {
      o.data = arr(b.data, 12).map((d) => ({ label: S(d?.label, 30), value: N(d?.value, -1e9, 1e9, 0), tone: tone(d?.tone) }));
      if (kind === "donut" && b.center) o.center = S(b.center, 20);
    }
    return o;
  },
  table: (b) => {
    const head = arr(b.head, 6).map((x) => H(x, 40));
    return { title: S(b.title, 80), caption: H(b.caption, 300), head, rows: arr(b.rows, 20).map((r) => arr(r, head.length || 6).map((x) => H(x, 80))) };
  },
  flow: (b) => ({
    title: S(b.title, 80), caption: H(b.caption, 300), loop: B(b.loop),
    items: arr(b.items, 8).map((it) => ({ icon: E(it?.icon) || "•", title: S(it?.title, 60), text: H(it?.text, 200) })),
  }),
  timeline: (b) => ({
    title: S(b.title, 80), caption: H(b.caption, 300),
    items: arr(b.items, 8).map((it) => ({ when: S(it?.when, 24), label: S(it?.label, 60), text: H(it?.text, 200), tone: tone(it?.tone) })),
  }),
  img: (b) => ({ url: U(b.url), caption: H(b.caption, 240), fit: b.fit === "contain" ? "contain" : "cover", alt: S(b.alt, 120) }),
  mvideo: (b) => ({
    kind: pick(b.kind, ["upload", "link"], "link"), url: U(b.url) || S(b.url, 700).replace(/^(?!https:\/\/).*/, ""),
    caption: H(b.caption, 240), autoplay: b.autoplay !== false, loop: B(b.loop), muted: B(b.muted), fit: b.fit === "cover" ? "cover" : "contain",
  }),
  quiz: (b) => {
    const options = plainList(b.options, 6, 200);
    return {
      q: H(b.q, 400), options,
      answer: [...new Set(arr(b.answer, 6).map(Number).filter((i) => Number.isInteger(i) && i >= 0 && i < options.length))].sort((a, c) => a - c),
      multi: B(b.multi), why: H(b.why, 500),
    };
  },
  free: (b) => ({
    ratio: pick(b.ratio, ["9/16", "3/4", "1/1", "16/10"], "9/16"),
    layers: arr(b.layers, 24).filter((l) => ["text", "img", "video", "shape", "emoji"].includes(l?.k)).map((l, i) => {
      const k = l.k;
      const o = {
        id: S(l?.id, 12) || "L" + i, k,
        x: N(l?.x, -50, 150, 10), y: N(l?.y, -50, 150, 10), w: N(l?.w, 2, 150, 60), h: N(l?.h, 1, 150, 20), rot: N(l?.rot, -180, 180, 0),
      };
      if (k === "text") Object.assign(o, {
        html: H(l?.html, 700), font: pick(l?.font, FONTS, "sans"), size: N(l?.size, 1.5, 40, 6), color: C(l?.color, "#ffffff"),
        align: pick(l?.align, ["left", "center", "right"], "left"), bold: B(l?.bold), bg: C(l?.bg), lh: N(l?.lh, 0.9, 2, 1.2),
      });
      if (k === "emoji") Object.assign(o, { emoji: E(l?.emoji) || "⭐", size: N(l?.size, 3, 60, 14) });
      if (k === "img") Object.assign(o, { url: U(l?.url), fit: l?.fit === "contain" ? "contain" : "cover", r: N(l?.r, 0, 50, 0) });
      if (k === "video") Object.assign(o, { url: U(l?.url) || "", kind: pick(l?.kind, ["upload", "link"], "link"), autoplay: l?.autoplay !== false, loop: B(l?.loop), muted: B(l?.muted), r: N(l?.r, 0, 50, 0) });
      if (k === "shape") Object.assign(o, { fill: C(l?.fill, "#ffffff33"), r: N(l?.r, 0, 50, 8) });
      return o;
    }),
  }),
};

export const CARD_TYPES = Object.keys(TYPES);

export function cleanBlock(b) {
  if (!b || typeof b !== "object" || !TYPES[b.t]) return null;
  const o = { t: b.t, ...TYPES[b.t](b) };
  for (const k of Object.keys(o)) if (o[k] === undefined) delete o[k];
  const st = cleanStyle(b.style);
  if (st) o.style = st;
  return o;
}

// O que falta para o card poder ser publicado. Devolve texto curto ou "".
function cardProblem(b) {
  const has = (...v) => v.some((x) => (Array.isArray(x) ? x.length : String(x || "").replace(/<[^>]*>/g, "").trim()));
  switch (b.t) {
    case "hook": return has(b.title) ? "" : "falta o título da capa";
    case "big": return has(b.html) ? "" : "falta o texto";
    case "p": return has(b.html, b.title) ? "" : "texto vazio";
    case "list": case "recap": return b.items.length ? "" : "lista vazia";
    case "steps": return b.items.length ? "" : "passo a passo vazio";
    case "jargon": return has(b.term) && has(b.means) ? "" : "falta o termo ou o significado";
    case "conta": return b.rows.length ? "" : "conta sem linhas";
    case "compare": return b.left.items.length && b.right.items.length ? "" : "os dois lados precisam de itens";
    case "callout": case "say": return has(b.html) ? "" : "texto vazio";
    case "chart":
      if (b.kind === "line") return b.x.length >= 2 && b.series.length && b.series.every((s) => s.values.length === b.x.length) ? "" : "gráfico de linhas precisa de 2 pontos ou mais e a mesma quantidade de valores em cada série";
      return b.data.length >= 2 && b.data.every((d) => d.label) ? "" : "gráfico precisa de 2 itens com nome";
    case "table": return b.head.length && b.rows.length ? "" : "tabela sem cabeçalho ou linhas";
    case "flow": case "timeline": return b.items.length >= 2 ? "" : "precisa de 2 etapas ou mais";
    case "img": return b.url ? "" : "falta a imagem";
    case "mvideo": return b.url ? "" : "falta o vídeo";
    case "quiz": return has(b.q) && b.options.length >= 2 && b.answer.length >= 1 ? "" : "quiz precisa de pergunta, 2 alternativas ou mais e a resposta certa";
    case "free": return b.layers.length ? "" : "card livre sem nenhum elemento";
    default: return "";
  }
}

/* ───────────────────────── rascunho ───────────────────────── */

const LIMITS = { modules: 24, lessons: 24, blocks: 60, qMod: 80, qFinal: 160, bytes: 1_800_000 };

function cleanQuestion(q, idOf) {
  const options = plainList(q?.options, 6, 200);
  return {
    id: idOf,
    q: S(q?.q, 400),
    options,
    answer: [...new Set(arr(q?.answer, 6).map(Number).filter((i) => Number.isInteger(i) && i >= 0 && i < options.length))].sort((a, b) => a - b),
    why: S(q?.why, 500),
    topic: S(q?.topic, 60),
  };
}

// Ids: os que já existem são mantidos (o progresso dos alunos depende deles). Itens novos recebem id novo.
export function cleanDraft(raw, trailId) {
  const d = raw && typeof raw === "object" ? raw : {};
  const seq = { m: N(d.seq?.m, 0, 1e6, 0), l: N(d.seq?.l, 0, 1e6, 0), q: N(d.seq?.q, 0, 1e6, 0) };
  const used = new Set();
  const fresh = (kind, make) => { let id; do { id = make(++seq[kind]); } while (used.has(id)); used.add(id); return id; };
  const keep = (id, pattern, kind, make) => {
    const s = S(id, 60);
    if (s && pattern.test(s) && !used.has(s)) {
      used.add(s);
      // mantém o contador acima de qualquer id usado
      const n = Number(s.match(/(\d+)$/)?.[1] || 0);
      if (n > seq[kind]) seq[kind] = n;
      return s;
    }
    return fresh(kind, make);
  };
  const modRe = new RegExp(`^${trailId}-m\\d+$`), lesRe = new RegExp(`^${trailId}-l\\d+$`), qRe = new RegExp(`^${trailId}-q\\d+$`);
  const qid = (q) => keep(q?.id, qRe, "q", (n) => `${trailId}-q${n}`);
  const modules = arr(d.modules, LIMITS.modules).map((m) => ({
    id: keep(m?.id, modRe, "m", (n) => `${trailId}-m${n}`),
    title: S(m?.title, 80), tagline: S(m?.tagline, 160), outcome: S(m?.outcome, 200),
    examSize: N(m?.examSize, 3, 40, 0) || undefined,
    lessons: arr(m?.lessons, LIMITS.lessons).map((l) => ({
      id: keep(l?.id, lesRe, "l", (n) => `${trailId}-l${n}`),
      title: S(l?.title, 80), minutes: N(l?.minutes, 1, 60, 3), goal: S(l?.goal, 200),
      blocks: arr(l?.blocks, LIMITS.blocks).map(cleanBlock).filter(Boolean),
    })),
    questions: arr(m?.questions, LIMITS.qMod).map((q) => cleanQuestion(q, qid(q))),
  }));
  const out = {
    title: S(d.title, 80), tag: S(d.tag, 24), tagline: S(d.tagline, 200), subtitle: S(d.subtitle, 160),
    finalSize: N(d.finalSize, 5, 60, 20),
    seq, modules,
    finalQuestions: arr(d.finalQuestions, LIMITS.qFinal).map((q) => cleanQuestion(q, qid(q))),
  };
  return out;
}

export const draftBytes = (d) => JSON.stringify(d).length;

export function emptyDraft(trailId, title) {
  return cleanDraft({
    title: title || "Nova trilha", tag: "Trilha", tagline: "", subtitle: "", finalSize: 20,
    modules: [{
      title: "Módulo 1", tagline: "", outcome: "",
      lessons: [{ title: "Aula 1", minutes: 3, goal: "", blocks: [{ t: "hook", emoji: "🏀", title: "Bora começar", text: "Escreva aqui a abertura da aula." }] }],
      questions: [],
    }],
    finalQuestions: [],
  }, trailId);
}

// Lista do que impede a publicação (vazia = pode publicar).
export function problems(d) {
  const out = [];
  if (d.title.length < 3) out.push("Dê um nome à trilha (3 letras ou mais).");
  if (!d.modules.length) out.push("A trilha precisa de pelo menos 1 módulo.");
  d.modules.forEach((m, mi) => {
    const mn = `Módulo ${mi + 1}${m.title ? ` (${m.title})` : ""}`;
    if (!m.title) out.push(`${mn}: falta o título.`);
    if (!m.lessons.length) out.push(`${mn}: precisa de pelo menos 1 aula.`);
    m.lessons.forEach((l, li) => {
      const ln = `${mn}, aula ${li + 1}${l.title ? ` (${l.title})` : ""}`;
      if (!l.title) out.push(`${ln}: falta o título.`);
      if (!l.blocks.length) out.push(`${ln}: nenhum card ainda.`);
      l.blocks.forEach((b, bi) => { const p = cardProblem(b); if (p) out.push(`${ln}, card ${bi + 1}: ${p}.`); });
    });
    const bad = m.questions.findIndex((q) => !q.q || q.options.length < 2 || !q.answer.length);
    if (m.questions.length < 3) out.push(`${mn}: a prova precisa de pelo menos 3 questões (tem ${m.questions.length}).`);
    else if (bad >= 0) out.push(`${mn}: a questão ${bad + 1} da prova está incompleta (pergunta, 2 alternativas e a certa).`);
  });
  const badF = d.finalQuestions.findIndex((q) => !q.q || q.options.length < 2 || !q.answer.length);
  if (d.finalQuestions.length < 5) out.push(`Prova final: precisa de pelo menos 5 questões (tem ${d.finalQuestions.length}).`);
  else if (badF >= 0) out.push(`Prova final: a questão ${badF + 1} está incompleta.`);
  return out;
}

/* ───────────────────────── derivações ───────────────────────── */

const finalScopeOf = (id) => `final-${id}`;

function toManifest(id, d) {
  const totalQ = d.modules.reduce((a, m) => a + m.questions.length, 0) + d.finalQuestions.length;
  return {
    id, title: d.title, finalScope: finalScopeOf(id), custom: true,
    finalSize: Math.max(3, Math.min(d.finalSize || 20, totalQ)),
    modules: d.modules.map((m) => ({ id: m.id, lessons: m.lessons.map((l) => l.id), ...(m.examSize ? { examSize: m.examSize } : {}) })),
  };
}

// O que o aluno recebe: conteúdo das aulas. As questões da prova NUNCA vão junto.
function toClient(id, d, extra = {}) {
  return {
    id, finalScope: finalScopeOf(id), custom: true, title: d.title, tag: d.tag || "Trilha",
    tagline: d.tagline, subtitle: d.subtitle || d.tagline, finalSize: toManifest(id, d).finalSize,
    modules: d.modules.map((m, i) => ({
      id: m.id, n: i + 1, title: m.title, tagline: m.tagline, outcome: m.outcome, examSize: Math.max(1, Math.min(m.examSize || 12, m.questions.length)),
      lessons: m.lessons.map((l) => ({ id: l.id, title: l.title, minutes: l.minutes, goal: l.goal, blocks: l.blocks })),
    })),
    ...extra,
  };
}

function toQuestions(id, d) {
  const out = [];
  for (const m of d.modules) for (const q of m.questions) out.push({ ...q, module: m.id, topic: q.topic || m.title });
  for (const q of d.finalQuestions) out.push({ ...q, module: finalScopeOf(id), topic: q.topic || "Prova final" });
  return out;
}

/* ───────────────────────── registro em memória ───────────────────────── */

const st = { ver: -1, checkedAt: 0, docs: new Map(), loading: null };
const S_ = () => store("trails");
const emptyMeta = () => ({ ver: 0, flags: {}, trails: {}, audience: {}, cats: { list: [], map: {} } });

/* ── Categorias: 100% do gestor ──
   cats.list = categorias que o gestor criou (ordem dele); cats.map = categoria escolhida por trilha (nativa, criada ou importada).
   Trilha sem escolha usa, só como ponto de partida, a etiqueta que veio no arquivo; o gestor pode trocar a qualquer momento. */
const CAT_MAX = 24, CAT_LIMIT = 30;
const catName = (v) => S(v, CAT_MAX).replace(/\s+/g, " ");
const CATS = { list: [], map: {} };
export const categories = () => ({ list: [...CATS.list], map: { ...CATS.map } });
function setCats(c) {
  CATS.list = Array.isArray(c?.list) ? c.list.map(catName).filter(Boolean) : [];
  CATS.map = {};
  for (const [id, name] of Object.entries(c?.map || {})) if (CATS.list.includes(name)) CATS.map[id] = name;
}
const sameName = (a, b) => a.localeCompare(b, "pt-BR", { sensitivity: "base" }) === 0;

function rebuild(meta) {
  const trails = [], active = [], archived = [];
  for (const [id, info] of Object.entries(meta.trails)) {
    const doc = st.docs.get(id);
    if (!info.live || !doc?.live) continue;
    trails.push(toManifest(id, doc.live));
    active.push(...toQuestions(id, doc.live));
    archived.push(...(doc.qArchive || []));
  }
  setCustomTrails(trails);
  setCustomQuestions(active, archived);
  setInactive(Object.entries(meta.flags).filter(([, f]) => f?.active === false).map(([id]) => id));
  setRestricted(Object.entries(meta.audience || {}).filter(([, a]) => a?.mode === "assigned").map(([id]) => id));
  setCats(meta.cats);
}

async function doSync(force) {
  const meta = (await (await S_()).get("meta")) || emptyMeta();
  if (!force && meta.ver === st.ver) return meta;
  const wanted = Object.entries(meta.trails).filter(([, i]) => i.live);
  const need = wanted.filter(([id, i]) => st.docs.get(id)?.liveRev !== i.liveRev);
  const loaded = await pmap(need, async ([id]) => (await (await S_()).get("t:" + id)), 6);
  for (const doc of loaded) if (doc) st.docs.set(doc.id, { ...doc, liveRev: meta.trails[doc.id].liveRev });
  for (const id of [...st.docs.keys()]) if (!meta.trails[id]?.live) st.docs.delete(id);
  rebuild(meta);
  st.ver = meta.ver;
  return meta;
}

// Chamado no começo de cada requisição: barato (no máximo uma leitura pequena a cada 4 s por instância).
export async function sync(force = false) {
  if (!force && Date.now() - st.checkedAt < 4000 && st.ver >= 0) return;
  if (st.loading) return st.loading;
  st.checkedAt = Date.now();
  st.loading = doSync(force).finally(() => { st.loading = null; });
  return st.loading;
}

export const version = () => st.ver;
export const inactive = () => inactiveIds();
export const restricted = () => restrictedIds();
// o gestor mudou quem vê o quê: faz os aparelhos baixarem a lista de trilhas de novo
export async function bumpVersion() { await mutateMeta(() => {}); }

// Lê-modifica-grava o meta (raro: só quando o gestor publica, inativa ou exclui).
async function mutateMeta(fn) {
  const s = await S_();
  const meta = (await s.get("meta")) || emptyMeta();
  fn(meta);
  meta.ver = (meta.ver || 0) + 1;
  await s.set("meta", meta);
  await doSync(true);
  st.checkedAt = Date.now();
  return meta;
}

/* ───────────────────────── rotas ───────────────────────── */

const MAX_TRAILS = 60;
const ID_OK = /^c[0-9a-f]{6}$/;

export async function handle(ctx, { req, method, path, url, body, user }) {
  const { json, fail, logEvent } = ctx;

  // aluno e gestor: conteúdo das trilhas criadas (publicadas)
  if (path === "trails/custom" && method === "GET") {
    if (url.searchParams.get("v") === String(st.ver)) return json({ same: true, ver: st.ver });
    const list = [];
    for (const [id, doc] of st.docs) if (doc.live && trailVisibleTo(user, id)) list.push(toClient(id, doc.live));
    return json({ ver: st.ver, trails: list });
  }

  if (!path.startsWith("admin/trails")) return null;
  if (!can(user, "trilhas")) fail(403, "Você não tem permissão para esta área.");
  const parts = path.split("/"); // admin, trails, :id, ação
  const id = parts[2] || "";
  const action = parts[3] || "";

  const flags = async () => ((await (await S_()).get("meta")) || emptyMeta());
  const load = async (tid) => {
    if (!ID_OK.test(tid)) fail(404, "Trilha não encontrada.");
    const doc = await (await S_()).get("t:" + tid);
    if (!doc) fail(404, "Trilha não encontrada.");
    return doc;
  };

  // categorias (lista do gestor): ver, criar, renomear, reordenar, excluir
  if (id === "categories" && !action) {
    const meta = await flags();
    const cur = meta.cats || { list: [], map: {} };
    if (method === "GET") return json({ list: cur.list, map: cur.map });
    if (method === "PUT") {
      const raw = Array.isArray(body.list) ? body.list : [];
      const list = [];
      for (const r of raw) { const n = catName(r); if (n && n.toLowerCase() !== "trilha" && !list.some((x) => sameName(x, n))) list.push(n); }
      if (list.length > CAT_LIMIT) fail(400, `No máximo ${CAT_LIMIT} categorias.`);
      // renomear: { "Nome antigo": "Nome novo" } leva junto as trilhas que estavam nela
      const ren = body.renames && typeof body.renames === "object" ? body.renames : {};
      await mutateMeta((m) => {
        const old = m.cats || { list: [], map: {} };
        const map = {};
        for (const [tid, name] of Object.entries(old.map || {})) {
          const to = catName(ren[name] ?? name);
          if (list.includes(to)) map[tid] = to;
        }
        m.cats = { list, map };
      });
      await logEvent(req, "categorias_editadas", user, { total: list.length });
      return json({ ok: true, ...categories() });
    }
    return null;
  }

  // lista: nativas + criadas
  if (!id && method === "GET") {
    const meta = await flags();
    const ids = Object.keys(meta.trails);
    const s = await S_();
    const docs = (await pmap((await s.keys({ prefix: "t:" })), (k) => s.get(k), 8)).filter(Boolean);
    const students = (await ctx.allUsers()).filter((u) => u.role === "aluno" && isLive(u));
    const aud = (tid) => ({ audience: meta.audience?.[tid]?.mode === "assigned" ? "assigned" : "all", assigned: students.filter((u) => (u.trailAccess || []).includes(tid)).length, students: students.length });
    const rows = TRAILS.filter((t) => BUILTIN_IDS.has(t.id)).map((t) => ({
      id: t.id, kind: "nativa", title: t.title, active: isTrailActive(t.id), ...aud(t.id),
      modules: t.modules.length, lessons: t.modules.reduce((a, m) => a + m.lessons.length, 0),
    }));
    for (const doc of docs) {
      const d = doc.draft;
      rows.push({
        id: doc.id, kind: "criada", title: d.title || "(sem nome)", tag: d.tag || "", status: doc.live ? (doc.dirty ? "publicada-com-mudancas" : "publicada") : "rascunho",
        active: isTrailActive(doc.id), ...aud(doc.id), modules: d.modules.length, lessons: d.modules.reduce((a, m) => a + m.lessons.length, 0),
        cards: d.modules.reduce((a, m) => a + m.lessons.reduce((b, l) => b + l.blocks.length, 0), 0),
        updatedAt: doc.updatedAt, publishedAt: doc.publishedAt || null, live: !!meta.trails[doc.id]?.live,
      });
    }
    return json({ trails: rows, ver: meta.ver, ids });
  }

  // importar uma trilha pronta (arquivo .json) como rascunho novo; nada aparece pros alunos até publicar
  if (id === "import" && !action && method === "POST") {
    const s = await S_();
    if ((await s.keys({ prefix: "t:" })).length >= MAX_TRAILS) fail(409, `Limite de ${MAX_TRAILS} trilhas criadas. Exclua alguma que não usa mais.`);
    const src = body?.draft && typeof body.draft === "object" ? body.draft : body;
    if (!src || !Array.isArray(src.modules) || !src.modules.length) fail(400, "Esse arquivo não parece uma trilha do BRYANT SHOOT.");
    const tid = "c" + crypto.randomBytes(3).toString("hex");
    const draft = cleanDraft(src, tid);
    if (draftBytes(draft) > LIMITS.bytes) fail(413, "A trilha ficou grande demais para importar.");
    const t = now();
    const doc = { id: tid, rev: 1, draft, live: null, dirty: true, qArchive: [], createdBy: user.id, createdAt: t, updatedAt: t, publishedAt: null };
    await s.set("t:" + tid, doc);
    await logEvent(req, "trilha_importada", user, { trilha: tid, title: draft.title });
    return json({ trail: doc, problems: problems(draft) }, 201);
  }

  // criar
  if (!id && method === "POST") {
    const s = await S_();
    if ((await s.keys({ prefix: "t:" })).length >= MAX_TRAILS) fail(409, `Limite de ${MAX_TRAILS} trilhas criadas. Exclua alguma que não usa mais.`);
    const tid = "c" + crypto.randomBytes(3).toString("hex");
    const t = now();
    const doc = { id: tid, rev: 1, draft: emptyDraft(tid, S(body.title, 80)), live: null, dirty: true, qArchive: [], createdBy: user.id, createdAt: t, updatedAt: t, publishedAt: null };
    await s.set("t:" + tid, doc);
    await logEvent(req, "trilha_criada", user, { trilha: tid, title: doc.draft.title });
    return json({ trail: doc }, 201);
  }

  // categoria da trilha (vale para nativas, criadas e importadas); "" volta ao padrão do arquivo
  if (action === "category" && method === "POST") {
    if (!BUILTIN_IDS.has(id)) await load(id);
    const name = catName(body.category);
    if (name.toLowerCase() === "trilha") fail(400, "Escolha outro nome para a categoria.");
    const meta0 = await flags();
    const have = meta0.cats?.list || [];
    if (name && !have.some((x) => sameName(x, name)) && have.length >= CAT_LIMIT) fail(400, `No máximo ${CAT_LIMIT} categorias.`);
    let final = name;
    await mutateMeta((m) => {
      const c = m.cats || (m.cats = { list: [], map: {} });
      c.map = c.map || {};
      if (!name) { delete c.map[id]; return; }
      final = c.list.find((x) => sameName(x, name)) || name;
      if (!c.list.includes(final)) c.list.push(final);
      c.map[id] = final;
    });
    await logEvent(req, "trilha_categoria", user, { trilha: id, categoria: final || "(padrão)" });
    return json({ ok: true, id, category: name ? final : "", ...categories() });
  }

  // ativar / inativar (vale para nativas e criadas)
  if (action === "active" && method === "POST") {
    if (!BUILTIN_IDS.has(id)) await load(id);
    const on = body.active !== false;
    await mutateMeta((m) => { if (on) delete m.flags[id]; else m.flags[id] = { active: false, by: user.id, at: now() }; });
    await logEvent(req, on ? "trilha_ativada" : "trilha_inativada", user, { trilha: id });
    return json({ ok: true, id, active: on, inactive: inactiveIds(), ver: st.ver });
  }

  // quem vê a trilha: todos os alunos (padrão) ou só os escolhidos
  if (action === "audience" && (method === "GET" || method === "PUT")) {
    if (!BUILTIN_IDS.has(id)) await load(id);
    const students = (await ctx.allUsers()).filter((u) => u.role === "aluno" && isLive(u));
    if (method === "GET") {
      const meta = await flags();
      return json({
        mode: meta.audience?.[id]?.mode === "assigned" ? "assigned" : "all",
        students: students.map((u) => ({ id: u.id, name: u.name, email: u.email, nickname: u.nickname || null, avatar: u.avatar || null, has: (u.trailAccess || []).includes(id) }))
          .sort((a, b) => a.name.localeCompare(b.name, "pt-BR")),
      });
    }
    const assigned = body.mode === "assigned";
    const want = new Set(Array.isArray(body.users) ? body.users.map(String) : []);
    await mutateMeta((m) => { m.audience = m.audience || {}; if (assigned) m.audience[id] = { mode: "assigned", by: user.id, at: now() }; else delete m.audience[id]; });
    let changed = 0;
    if (assigned) {
      await pmap(students.filter((u) => (u.trailAccess || []).includes(id) !== want.has(u.id)), async (u) => {
        const list = new Set(u.trailAccess || []);
        if (want.has(u.id)) list.add(id); else list.delete(id);
        u.trailAccess = [...list];
        await ctx.saveUser(u);
        changed++;
      }, 8);
    }
    await logEvent(req, "trilha_audiencia", user, { trilha: id, quem: assigned ? `${want.size} escolhidos` : "todos os alunos" });
    return json({ ok: true, mode: assigned ? "assigned" : "all", assigned: assigned ? students.filter((u) => want.has(u.id)).length : 0, changed });
  }

  if (BUILTIN_IDS.has(id)) fail(400, "As trilhas nativas não são editadas pelo construtor. Você pode ativar, inativar ou duplicar o formato.");

  if (!action && method === "GET") return json({ trail: await load(id) });

  if (!action && method === "PUT") {
    const doc = await load(id);
    if (Number(body.rev) !== doc.rev) fail(409, "Outra pessoa salvou esta trilha depois que você abriu. Recarregue a página para não perder o trabalho dela.", { rev: doc.rev });
    const draft = cleanDraft(body.draft, id);
    if (draftBytes(draft) > LIMITS.bytes) fail(413, "A trilha ficou grande demais para salvar. Divida em duas trilhas ou use menos cards livres.");
    // questões removidas que já foram publicadas continuam valendo para provas em andamento
    if (doc.live) {
      const keepIds = new Set([...draft.modules.flatMap((m) => m.questions), ...draft.finalQuestions].map((q) => q.id));
      const old = toQuestions(id, doc.live).filter((q) => !keepIds.has(q.id));
      const have = new Set((doc.qArchive || []).map((q) => q.id));
      doc.qArchive = [...(doc.qArchive || []), ...old.filter((q) => !have.has(q.id))].slice(-400);
    }
    doc.draft = draft;
    doc.rev += 1;
    doc.dirty = true;
    doc.updatedAt = now();
    await (await S_()).set("t:" + id, doc);
    return json({ ok: true, rev: doc.rev, draft, updatedAt: doc.updatedAt });
  }

  if (action === "publish" && method === "POST") {
    const doc = await load(id);
    const list = problems(doc.draft);
    if (list.length) fail(422, "Ainda faltam coisas para publicar.", { problems: list.slice(0, 40) });
    doc.live = doc.draft;
    doc.dirty = false;
    doc.publishedAt = now();
    doc.rev += 1;
    await (await S_()).set("t:" + id, doc);
    await mutateMeta((m) => { m.trails[id] = { live: true, liveRev: doc.publishedAt }; });
    await logEvent(req, "trilha_publicada", user, { trilha: id, title: doc.live.title });
    return json({ ok: true, rev: doc.rev, publishedAt: doc.publishedAt });
  }

  if (action === "duplicate" && method === "POST") {
    const doc = await load(id);
    const s = await S_();
    if ((await s.keys({ prefix: "t:" })).length >= MAX_TRAILS) fail(409, `Limite de ${MAX_TRAILS} trilhas criadas.`);
    const tid = "c" + crypto.randomBytes(3).toString("hex");
    // refaz os ids com o prefixo da nova trilha (os itens viram novos para o progresso dos alunos)
    const map = JSON.parse(JSON.stringify(doc.draft).split(id).join(tid));
    map.title = S(`${doc.draft.title} (cópia)`, 80);
    const t = now();
    const copy = { id: tid, rev: 1, draft: cleanDraft(map, tid), live: null, dirty: true, qArchive: [], createdBy: user.id, createdAt: t, updatedAt: t, publishedAt: null };
    await s.set("t:" + tid, copy);
    await logEvent(req, "trilha_duplicada", user, { de: id, trilha: tid });
    return json({ trail: copy }, 201);
  }

  if (!action && method === "DELETE") {
    const doc = await load(id);
    await (await S_()).delete("t:" + id);
    await mutateMeta((m) => { delete m.trails[id]; delete m.flags[id]; if (m.audience) delete m.audience[id]; if (m.cats?.map) delete m.cats.map[id]; });
    await logEvent(req, "trilha_excluida", user, { trilha: id, title: doc.draft.title });
    return json({ ok: true });
  }

  return null;
}

export { isTrailActive, inactiveIds, isRestricted, restrictedIds };
export const _internal = { toManifest, toClient, toQuestions, finalScopeOf };

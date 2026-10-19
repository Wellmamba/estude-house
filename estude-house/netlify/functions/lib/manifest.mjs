// Estrutura da trilha PriceBot. Precisa bater com public/assets/content.js
// (o teste `npm test` confere isso).

// Cada trilha tem: id (sem espaços), título, `finalScope` (id da prova final dela) e módulos.
// Os ids de módulos, aulas e provas finais precisam ser ÚNICOS em todas as trilhas.
// A trilha PriceBot mantém os ids originais (m0..m6, "final") para preservar o progresso de quem já estuda.
// Para uma trilha nova, use um prefixo no id (ex.: "ads-m1", "ads-l1-1", finalScope "final-ads").
// Opcional: `finalSize` = quantas questões a prova final dessa trilha sorteia (padrão: EXAM_SIZE.final).
const BUILTIN_TRAILS = [
  {
    id: "pricebot",
    title: "Formação PriceBot",
    finalScope: "final",
    modules: [
      { id: "m0", lessons: ["l0-1", "l0-2", "l0-3", "l0-4", "l0-5", "l0-6", "l0-7", "l0-8", "l0-9", "l0-10"] },
      { id: "m1", lessons: ["l1-1", "l1-2", "l1-3"] },
      { id: "m2", lessons: ["l2-1", "l2-2", "l2-3", "l2-4"] },
      { id: "m3", lessons: ["l3-1", "l3-2", "l3-3", "l3-4"] },
      { id: "m4", lessons: ["l4-1", "l4-2", "l4-3", "l4-4"] },
      { id: "m5", lessons: ["l5-1", "l5-2", "l5-3", "l5-4"] },
      { id: "m6", lessons: ["l6-1", "l6-2", "l6-3", "l6-4"] },
    ],
  },
  {
    id: "rt",
    title: "Reforma Tributária nos Marketplaces",
    finalScope: "final-rt",
    modules: [
      { id: "rt-m1", lessons: ["rt-l1-1", "rt-l1-2", "rt-l1-3", "rt-l1-4", "rt-l1-5"] },
      { id: "rt-m2", lessons: ["rt-l2-1", "rt-l2-2", "rt-l2-3", "rt-l2-4"] },
      { id: "rt-m3", lessons: ["rt-l3-1", "rt-l3-2", "rt-l3-3", "rt-l3-4"] },
      { id: "rt-m4", lessons: ["rt-l4-1", "rt-l4-2", "rt-l4-3"] },
    ],
  },
  {
    id: "bpp",
    title: "Brand Protection Program (Mercado Livre)",
    finalScope: "final-bpp",
    finalSize: 15,
    modules: [
      { id: "bpp-m1", examSize: 8, lessons: ["bpp-l1-1", "bpp-l1-2"] },
      { id: "bpp-m2", examSize: 8, lessons: ["bpp-l2-1", "bpp-l2-2", "bpp-l2-3", "bpp-l2-4", "bpp-l2-5"] },
      { id: "bpp-m3", examSize: 8, lessons: ["bpp-l3-1", "bpp-l3-2", "bpp-l3-3"] },
    ],
  },
  {
    id: "live",
    title: "Live Commerce Shopee",
    finalScope: "final-live",
    finalSize: 20,
    modules: [
      { id: "live-m1", examSize: 8, lessons: ["live-l1-1", "live-l1-2", "live-l1-3"] },
      { id: "live-m2", examSize: 8, lessons: ["live-l2-1", "live-l2-2", "live-l2-3", "live-l2-4"] },
      { id: "live-m3", examSize: 8, lessons: ["live-l3-1", "live-l3-2", "live-l3-3", "live-l3-4"] },
      { id: "live-m4", examSize: 8, lessons: ["live-l4-1", "live-l4-2", "live-l4-3"] },
      { id: "live-m5", examSize: 8, lessons: ["live-l5-1", "live-l5-2", "live-l5-3"] },
    ],
  },
  {
    id: "gf",
    title: "Grade de Formação Mamba",
    finalScope: "final-gf",
    finalSize: 40,
    modules: [
      { id: "gf-m1", lessons: ["gf-l1-1", "gf-l1-2", "gf-l1-3"] },
      { id: "gf-m2", lessons: ["gf-l2-1", "gf-l2-2", "gf-l2-3", "gf-l2-4", "gf-l2-5"] },
      { id: "gf-m3", lessons: ["gf-l3-1", "gf-l3-2", "gf-l3-3", "gf-l3-4", "gf-l3-5"] },
      { id: "gf-m4", lessons: ["gf-l4-1", "gf-l4-2", "gf-l4-3", "gf-l4-4", "gf-l4-5"] },
      { id: "gf-m5", lessons: ["gf-l5-1", "gf-l5-2", "gf-l5-3", "gf-l5-4", "gf-l5-5", "gf-l5-6"] },
      { id: "gf-m6", lessons: ["gf-l6-1", "gf-l6-2", "gf-l6-3", "gf-l6-4", "gf-l6-5", "gf-l6-6"] },
      { id: "gf-m7", lessons: ["gf-l7-1", "gf-l7-2", "gf-l7-3", "gf-l7-4", "gf-l7-5", "gf-l7-6"] },
      { id: "gf-m8", lessons: ["gf-l8-1", "gf-l8-2", "gf-l8-3", "gf-l8-4", "gf-l8-5", "gf-l8-6"] },
      { id: "gf-m9", lessons: ["gf-l9-1", "gf-l9-2", "gf-l9-3", "gf-l9-4", "gf-l9-5"] },
      { id: "gf-m10", lessons: ["gf-l10-1", "gf-l10-2", "gf-l10-3"] },
      { id: "gf-m11", lessons: ["gf-l11-1", "gf-l11-2", "gf-l11-3", "gf-l11-4", "gf-l11-5", "gf-l11-6"] },
      { id: "gf-m12", lessons: ["gf-l12-1", "gf-l12-2", "gf-l12-3", "gf-l12-4"] },
      { id: "gf-m13", lessons: ["gf-l13-1", "gf-l13-2", "gf-l13-3", "gf-l13-4"] },
      { id: "gf-m14", lessons: ["gf-l14-1", "gf-l14-2", "gf-l14-3", "gf-l14-4"] },
    ],
  },
];


// Trilhas nativas (acima) + trilhas criadas pelo gestor no construtor (carregadas do banco por lib/trails.mjs).
// O array é o mesmo objeto o tempo todo: setCustomTrails troca só a parte das trilhas criadas.
export const TRAILS = [...BUILTIN_TRAILS];
export const BUILTIN_IDS = new Set(BUILTIN_TRAILS.map((t) => t.id));
export function setCustomTrails(list) {
  TRAILS.length = BUILTIN_TRAILS.length;
  TRAILS.push(...list);
}
// Trilhas inativas: somem para o aluno e não aceitam aula nem prova nova. O gestor continua vendo tudo.
const INACTIVE = new Set();
export function setInactive(ids) { INACTIVE.clear(); for (const id of ids) INACTIVE.add(id); }
export const isTrailActive = (id) => !INACTIVE.has(id);
export const inactiveIds = () => [...INACTIVE];
// Trilhas "só para quem o admin escolher": o aluno vê apenas se a trilha estiver na lista dele (user.trailAccess).
const RESTRICTED = new Set();
export function setRestricted(ids) { RESTRICTED.clear(); for (const id of ids) RESTRICTED.add(id); }
export const isRestricted = (id) => RESTRICTED.has(id);
export const restrictedIds = () => [...RESTRICTED];
export const hasTrailAccess = (user, id) => Array.isArray(user?.trailAccess) && user.trailAccess.includes(id);
// Gestor vê tudo. Aluno vê se a trilha está ativa e (é para todos ou foi atribuída a ele).
export function trailVisibleTo(user, id) {
  if (user?.role === "admin" || user?.role === "subadmin") return true;
  if (INACTIVE.has(id)) return false;
  return !RESTRICTED.has(id) || hasTrailAccess(user, id);
}
// Ids das trilhas que somem para esta pessoa (inativas ou não atribuídas a ela).
export function hiddenIdsFor(user, allIds) { return allIds.filter((id) => !trailVisibleTo(user, id)); }

export const trailById = (id) => TRAILS.find((t) => t.id === id) || null;
export const trailOfLesson = (lessonId) => TRAILS.find((t) => t.modules.some((m) => m.lessons.includes(lessonId))) || null;
// Para um id de prova (módulo ou final) devolve { trail, module, index, isFinal }; ou null.
export function trailOfScope(scope) {
  for (const t of TRAILS) {
    if (t.finalScope === scope) return { trail: t, module: null, index: t.modules.length, isFinal: true };
    const i = t.modules.findIndex((m) => m.id === scope);
    if (i >= 0) return { trail: t, module: t.modules[i], index: i, isFinal: false };
  }
  return null;
}
export const isFinalScope = (scope) => TRAILS.some((t) => t.finalScope === scope);

// Quantas questões cada prova sorteia do banco.
// O módulo de ambientação (m0) é o quiz completo da ferramenta: tem mais questões e sorteia
// pelo menos uma de cada área do portal (campo `area` das questões).
export const EXAM_SIZE = { module: 12, final: 30, m0: 15 };
export const examSizeFor = (scope) => {
  const r = trailOfScope(scope);
  if (r?.isFinal) return r.trail.finalSize || EXAM_SIZE.final;
  return r?.module?.examSize || EXAM_SIZE[scope] || EXAM_SIZE.module;
};

// Regras de aprovação (em % de acerto).
//   nota <= failMax            → reprovado: refaz tudo
//   failMax < nota <= passAbove → refaz só as questões erradas
//   nota > passAbove           → aprovado (vê erros e gabarito, sem refazer)
export const RULES = { failMax: 70, passAbove: 90 };

// Reprovação na prova final zera a trilha inteira (aulas e provas de módulo).
export const FINAL_FAIL_RESETS_ALL = true;

export const XP = { lesson: 20, module: 100, final: 300 };

export const allLessonIds = () => TRAILS.flatMap((t) => t.modules.flatMap((m) => m.lessons));

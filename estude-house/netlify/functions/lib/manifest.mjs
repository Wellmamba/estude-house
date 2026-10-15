// Estrutura da trilha PriceBot. Precisa bater com public/assets/content.js
// (o teste `npm test` confere isso).

// Cada trilha tem: id (sem espaços), título, `finalScope` (id da prova final dela) e módulos.
// Os ids de módulos, aulas e provas finais precisam ser ÚNICOS em todas as trilhas.
// A trilha PriceBot mantém os ids originais (m0..m6, "final") para preservar o progresso de quem já estuda.
// Para uma trilha nova, use um prefixo no id (ex.: "ads-m1", "ads-l1-1", finalScope "final-ads").
// Opcional: `finalSize` = quantas questões a prova final dessa trilha sorteia (padrão: EXAM_SIZE.final).
export const TRAILS = [
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
];

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
  return EXAM_SIZE[scope] || EXAM_SIZE.module;
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

// Estrutura da trilha PriceBot. Precisa bater com public/assets/content.js
// (o teste `npm test` confere isso).

export const COURSE = {
  id: "pricebot",
  title: "Formação PriceBot",
  modules: [
    { id: "m1", lessons: ["l1-1", "l1-2", "l1-3"] },
    { id: "m2", lessons: ["l2-1", "l2-2", "l2-3", "l2-4"] },
    { id: "m3", lessons: ["l3-1", "l3-2", "l3-3", "l3-4"] },
    { id: "m4", lessons: ["l4-1", "l4-2", "l4-3", "l4-4"] },
    { id: "m5", lessons: ["l5-1", "l5-2", "l5-3", "l5-4"] },
    { id: "m6", lessons: ["l6-1", "l6-2", "l6-3", "l6-4"] },
  ],
};

// Quantas questões cada prova sorteia do banco.
export const EXAM_SIZE = { module: 12, final: 30 };

// Regras de aprovação (em % de acerto).
//   nota <= failMax            → reprovado: refaz tudo
//   failMax < nota <= passAbove → refaz só as questões erradas
//   nota > passAbove           → aprovado (vê erros e gabarito, sem refazer)
export const RULES = { failMax: 70, passAbove: 90 };

// Reprovação na prova final zera a trilha inteira (aulas e provas de módulo).
export const FINAL_FAIL_RESETS_ALL = true;

export const XP = { lesson: 20, module: 100, final: 300 };

export const allLessonIds = () => COURSE.modules.flatMap((m) => m.lessons);
export const moduleIndex = (id) => COURSE.modules.findIndex((m) => m.id === id);

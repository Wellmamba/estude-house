import m0 from "./m0.mjs";
import m1 from "./m1.mjs";
import m2 from "./m2.mjs";
import m3 from "./m3.mjs";
import m4 from "./m4.mjs";
import m5 from "./m5.mjs";
import m6 from "./m6.mjs";
import final from "./final.mjs";
import rtM1 from "./rt-m1.mjs";
import rtM2 from "./rt-m2.mjs";
import rtM3 from "./rt-m3.mjs";
import rtM4 from "./rt-m4.mjs";
import rtFinal from "./rt-final.mjs";
import bppM1 from "./bpp-m1.mjs";
import bppM2 from "./bpp-m2.mjs";
import bppM3 from "./bpp-m3.mjs";
import bppFinal from "./bpp-final.mjs";
import liveM1 from "./live-m1.mjs";
import liveM2 from "./live-m2.mjs";
import liveM3 from "./live-m3.mjs";
import liveM4 from "./live-m4.mjs";
import liveM5 from "./live-m5.mjs";
import liveFinal from "./live-final.mjs";
import gfM1 from "./gf-m1.mjs";
import gfM2 from "./gf-m2.mjs";
import gfM3 from "./gf-m3.mjs";
import gfM4 from "./gf-m4.mjs";
import gfM5 from "./gf-m5.mjs";
import gfM6 from "./gf-m6.mjs";
import gfM7 from "./gf-m7.mjs";
import gfM8 from "./gf-m8.mjs";
import gfM9 from "./gf-m9.mjs";
import gfM10 from "./gf-m10.mjs";
import gfM11 from "./gf-m11.mjs";
import gfM12 from "./gf-m12.mjs";
import gfM13 from "./gf-m13.mjs";
import gfM14 from "./gf-m14.mjs";
import formacaoFinais from "./formacao-finais.mjs";

// Formato de cada questão:
// { id, module, topic, q, options: [...], answer: [índices corretos], why }
// answer com 1 índice = escolha única; com 2+ = múltipla escolha (tudo ou nada).

export const QUESTIONS = [...m0, ...m1, ...m2, ...m3, ...m4, ...m5, ...m6, ...final, ...rtM1, ...rtM2, ...rtM3, ...rtM4, ...rtFinal, ...bppM1, ...bppM2, ...bppM3, ...bppFinal, ...liveM1, ...liveM2, ...liveM3, ...liveM4, ...liveM5, ...liveFinal, ...gfM1, ...gfM2, ...gfM3, ...gfM4, ...gfM5, ...gfM6, ...gfM7, ...gfM8, ...gfM9, ...gfM10, ...gfM11, ...gfM12, ...gfM13, ...gfM14, ...formacaoFinais];

const BUILTIN_COUNT = QUESTIONS.length;
const map = new Map(QUESTIONS.map((q) => [q.id, q]));
// Questões das trilhas criadas pelo gestor. `archived` guarda as que saíram do banco depois de
// uma prova já ter sido sorteada com elas (para a correção dessas tentativas não quebrar).
const extra = new Map();
export function setCustomQuestions(active, archived = []) {
  QUESTIONS.length = BUILTIN_COUNT;
  QUESTIONS.push(...active);
  extra.clear();
  for (const q of archived) extra.set(q.id, q);
  for (const q of active) extra.set(q.id, q);
}
export const byId = (id) => map.get(id) || extra.get(id) || QUESTIONS.find((q) => q.id === id);

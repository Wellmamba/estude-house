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

// Formato de cada questão:
// { id, module, topic, q, options: [...], answer: [índices corretos], why }
// answer com 1 índice = escolha única; com 2+ = múltipla escolha (tudo ou nada).

export const QUESTIONS = [...m0, ...m1, ...m2, ...m3, ...m4, ...m5, ...m6, ...final, ...rtM1, ...rtM2, ...rtM3, ...rtM4, ...rtFinal];

const map = new Map(QUESTIONS.map((q) => [q.id, q]));
export const byId = (id) => map.get(id) || QUESTIONS.find((q) => q.id === id);

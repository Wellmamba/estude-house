import crypto from "node:crypto";
import { QUESTIONS, byId } from "./questions/index.mjs";
import { COURSE, EXAM_SIZE, RULES } from "./manifest.mjs";

export function outcomeFor(pct) {
  if (pct <= RULES.failMax) return "reprovado";
  if (pct > RULES.passAbove) return "aprovado";
  return "refazer-erros";
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = crypto.randomInt(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick(pool, n) {
  return shuffle(pool).slice(0, n);
}

// Sorteia os ids de questões de uma prova nova.
export function drawQuestionIds(scope) {
  if (scope === "final") {
    const ids = [];
    const perModule = Math.floor((EXAM_SIZE.final - 6) / COURSE.modules.length); // 3 por módulo (7 módulos); o resto vem das questões da prova final
    for (const m of COURSE.modules) {
      ids.push(...pick(QUESTIONS.filter((q) => q.module === m.id), perModule).map((q) => q.id));
    }
    const extras = QUESTIONS.filter((q) => q.module === "final");
    const need = EXAM_SIZE.final - ids.length;
    ids.push(...pick(extras, need).map((q) => q.id));
    // completa se faltou algo
    if (ids.length < EXAM_SIZE.final) {
      const rest = QUESTIONS.filter((q) => !ids.includes(q.id));
      ids.push(...pick(rest, EXAM_SIZE.final - ids.length).map((q) => q.id));
    }
    return shuffle(ids);
  }
  const pool = QUESTIONS.filter((q) => q.module === scope);
  return pick(pool, Math.min(EXAM_SIZE.module, pool.length)).map((q) => q.id);
}

// Monta os itens da tentativa, com a ordem das alternativas embaralhada.
export function buildItems(qids) {
  return qids.map((qid) => {
    const q = byId(qid);
    return { qid, perm: shuffle(q.options.map((_, i) => i)) };
  });
}

// O que o aluno recebe: sem gabarito.
export function publicQuestions(items) {
  return items.map((it, n) => {
    const q = byId(it.qid);
    return {
      n: n + 1,
      id: q.id,
      type: q.answer.length > 1 ? "multi" : "single",
      topic: q.topic,
      q: q.q,
      options: it.perm.map((orig) => q.options[orig]),
    };
  });
}

// answers: { [qid]: [índices exibidos] }
export function grade(items, answers) {
  const results = items.map((it) => {
    const q = byId(it.qid);
    const shown = Array.isArray(answers?.[it.qid]) ? answers[it.qid] : [];
    const picked = [...new Set(shown.map(Number))]
      .filter((i) => Number.isInteger(i) && i >= 0 && i < it.perm.length)
      .map((i) => it.perm[i])
      .sort((a, b) => a - b);
    const right = [...q.answer].sort((a, b) => a - b);
    const ok = picked.length === right.length && picked.every((v, i) => v === right[i]);
    return { qid: it.qid, ok, picked, right };
  });
  const correct = results.filter((r) => r.ok).length;
  const pct = items.length ? Math.round((correct / items.length) * 1000) / 10 : 0;
  return { results, correct, total: items.length, pct };
}

// Revisão completa de uma questão (só enviada quando o aluno foi aprovado).
export function reviewItem(r) {
  const q = byId(r.qid);
  return {
    id: q.id,
    topic: q.topic,
    q: q.q,
    options: q.options,
    picked: r.picked,
    right: r.right,
    why: q.why,
    ok: r.ok,
  };
}

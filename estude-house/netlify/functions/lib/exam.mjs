import crypto from "node:crypto";
import { QUESTIONS, byId } from "./questions/index.mjs";
import { RULES, examSizeFor, trailOfScope } from "./manifest.mjs";

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
  const info = trailOfScope(scope);
  if (info?.isFinal) {
    // Prova final: algumas questões de cada módulo da trilha + questões exclusivas da prova final (módulo = id da final).
    const size = examSizeFor(scope);
    const t = info.trail;
    const extrasN = Math.min(6, Math.floor(size / 5));
    const perModule = Math.floor((size - extrasN) / t.modules.length);
    const ids = [];
    for (const m of t.modules) {
      ids.push(...pick(QUESTIONS.filter((q) => q.module === m.id), perModule).map((q) => q.id));
    }
    const extras = QUESTIONS.filter((q) => q.module === scope);
    ids.push(...pick(extras, size - ids.length).map((q) => q.id));
    // completa se faltou algo (sempre dentro da mesma trilha)
    if (ids.length < size) {
      const own = new Set([...t.modules.map((m) => m.id), scope]);
      const rest = QUESTIONS.filter((q) => own.has(q.module) && !ids.includes(q.id));
      ids.push(...pick(rest, size - ids.length).map((q) => q.id));
    }
    return shuffle(ids);
  }
  const pool = QUESTIONS.filter((q) => q.module === scope);
  const size = Math.min(examSizeFor(scope), pool.length);
  // Questões com `area`: sorteio em rodadas, uma de cada área por vez, para a prova cobrir tudo.
  if (pool.length && pool.every((q) => q.area)) {
    const byArea = new Map();
    for (const q of pool) byArea.set(q.area, [...(byArea.get(q.area) || []), q]);
    const lists = shuffle([...byArea.values()]).map((l) => shuffle(l));
    const ids = [];
    for (let round = 0; ids.length < size; round++) {
      let took = false;
      for (const l of shuffle(lists)) {
        if (ids.length >= size) break;
        if (l[round]) { ids.push(l[round].id); took = true; }
      }
      if (!took) break;
    }
    return shuffle(ids);
  }
  return pick(pool, size).map((q) => q.id);
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

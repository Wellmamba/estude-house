// XP de engajamento: check-in diário, posts aprovados, hypes, comentários e metas.
// Cada aluno tem um documento próprio (eng:<id>), então ninguém disputa a gravação de outra pessoa.
import { store, pmap } from "./db.mjs";
import { now, dayKey, addDays, weekKey, monthKey, daysOfWeek } from "./clock.mjs";

export const METRICS = { checkin: "check-ins", hype: "hypes dados", comment: "comentários", post: "posts aprovados" };
const KEEP_DAYS = 75;

export const DEFAULT_CFG = {
  // XP de cada ação. "streakBonus": a cada dia seguido de check-in soma esse valor (até "streakBonusMax").
  xp: { checkin: 10, streakBonus: 2, streakBonusMax: 10, hype: 1, comment: 2, post: 30 },
  // Quantas ações por dia ainda rendem XP (evita farmar com cliques).
  caps: { hype: 10, comment: 5, post: 2 },
  goals: [
    { id: "g-checkin-semana", title: "Check-in em 5 dias da semana", metric: "checkin", target: 5, period: "week", xp: 40, active: true },
    { id: "g-hype-dia", title: "Dê 5 hypes hoje", metric: "hype", target: 5, period: "day", xp: 10, active: true },
    { id: "g-comentario-semana", title: "Comente em 5 posts na semana", metric: "comment", target: 5, period: "week", xp: 25, active: true },
    { id: "g-post-semana", title: "Tenha 1 post aprovado na semana", metric: "post", target: 1, period: "week", xp: 50, active: true },
  ],
};

const emptyEng = () => ({ xp: 0, checkins: 0, streak: 0, best: 0, lastCheckin: null, days: {}, goals: {}, log: [] });

export async function loadEng(userId) {
  const e = await (await store("eng")).get("e:" + userId);
  return e ? { ...emptyEng(), ...e } : emptyEng();
}
const saveEng = async (userId, e) => (await store("eng")).set("e:" + userId, e);

export async function loadCfg() {
  const saved = await (await store("feed")).get("cfg");
  if (!saved) return structuredClone(DEFAULT_CFG);
  return {
    xp: { ...DEFAULT_CFG.xp, ...(saved.xp || {}) },
    caps: { ...DEFAULT_CFG.caps, ...(saved.caps || {}) },
    goals: Array.isArray(saved.goals) ? saved.goals : structuredClone(DEFAULT_CFG.goals),
  };
}

// Valida e grava a configuração enviada pela administração.
export async function saveCfg(input, newId, fail) {
  const num = (v, min, max, label) => {
    const n = Math.round(Number(v));
    if (!Number.isFinite(n) || n < min || n > max) fail(400, `${label}: use um número de ${min} a ${max}.`);
    return n;
  };
  const cfg = { xp: {}, caps: {}, goals: [] };
  const x = input?.xp || {}, c = input?.caps || {};
  cfg.xp.checkin = num(x.checkin ?? DEFAULT_CFG.xp.checkin, 0, 1000, "XP do check-in");
  cfg.xp.streakBonus = num(x.streakBonus ?? DEFAULT_CFG.xp.streakBonus, 0, 100, "Bônus por dia seguido");
  cfg.xp.streakBonusMax = num(x.streakBonusMax ?? DEFAULT_CFG.xp.streakBonusMax, 0, 1000, "Bônus máximo");
  cfg.xp.hype = num(x.hype ?? DEFAULT_CFG.xp.hype, 0, 1000, "XP do hype");
  cfg.xp.comment = num(x.comment ?? DEFAULT_CFG.xp.comment, 0, 1000, "XP do comentário");
  cfg.xp.post = num(x.post ?? DEFAULT_CFG.xp.post, 0, 1000, "XP do post aprovado");
  for (const k of ["hype", "comment", "post"]) cfg.caps[k] = num(c[k] ?? DEFAULT_CFG.caps[k], 1, 100, `Limite diário de ${METRICS[k]}`);
  const goals = Array.isArray(input?.goals) ? input.goals : [];
  if (goals.length > 12) fail(400, "No máximo 12 metas.");
  const seen = new Set();
  for (const g of goals) {
    const title = String(g.title || "").replace(/\s+/g, " ").trim().slice(0, 80);
    if (title.length < 3) fail(400, "Toda meta precisa de um nome.");
    if (!METRICS[g.metric]) fail(400, "Tipo de meta inválido.");
    if (!["day", "week"].includes(g.period)) fail(400, "O período da meta deve ser dia ou semana.");
    let id = String(g.id || "").replace(/[^\w-]/g, "").slice(0, 40) || newId("g-");
    if (seen.has(id)) id = newId("g-");
    seen.add(id);
    cfg.goals.push({ id, title, metric: g.metric, period: g.period, target: num(g.target, 1, 100, "Alvo da meta"), xp: num(g.xp, 0, 1000, "XP da meta"), active: g.active !== false });
  }
  await (await store("feed")).set("cfg", cfg);
  return cfg;
}

const dayRec = (e, day) => (e.days[day] ||= { xp: 0, checkin: 0, hype: 0, comment: 0, post: 0 });

function periodDays(goal, day) {
  return goal.period === "day" ? [day] : daysOfWeek(weekKey(day));
}
const periodKey = (goal, day) => (goal.period === "day" ? day : weekKey(day));

function goalProgress(e, goal, day) {
  let n = 0;
  for (const d of periodDays(goal, day)) n += e.days[d]?.[goal.metric] || 0;
  return n;
}

function logLine(e, text, xp) {
  e.log = [{ at: now(), text, xp }, ...(e.log || [])].slice(0, 30);
}

// Entrega o XP das metas que acabaram de ser batidas.
function settleGoals(e, cfg, day, d) {
  const done = [];
  let gain = 0;
  for (const g of cfg.goals) {
    if (!g.active) continue;
    const k = `${g.id}|${periodKey(g, day)}`;
    if (e.goals[k]) continue;
    if (goalProgress(e, g, day) >= g.target) {
      e.goals[k] = now();
      gain += g.xp;
      done.push({ id: g.id, title: g.title, xp: g.xp });
      logLine(e, `Meta batida: ${g.title}`, g.xp);
    }
  }
  if (gain) { e.xp += gain; d.xp += gain; }
  return done;
}

function prune(e, day) {
  const cut = addDays(day, -KEEP_DAYS);
  for (const k of Object.keys(e.days)) if (k < cut) delete e.days[k];
  for (const k of Object.keys(e.goals)) if (k.split("|")[1] < cut) delete e.goals[k];
}

export const earns = (user) => user?.role === "aluno";
export const effectiveStreak = (e, day = dayKey()) => (e.lastCheckin === day || e.lastCheckin === addDays(day, -1) ? e.streak : 0);

// Registra uma ação (hype, comment, post) e entrega o XP, respeitando o limite diário e as metas.
export async function record(user, kind, text) {
  if (!earns(user)) return { gained: 0, goals: [] };
  const [e, cfg] = await Promise.all([loadEng(user.id), loadCfg()]);
  const day = dayKey();
  const d = dayRec(e, day);
  d[kind] = (d[kind] || 0) + 1;
  let gained = 0;
  if (d[kind] <= (cfg.caps[kind] ?? 1e9) && cfg.xp[kind]) {
    gained = cfg.xp[kind];
    e.xp += gained; d.xp += gained;
    logLine(e, text || METRICS[kind], gained);
  }
  const goals = settleGoals(e, cfg, day, d);
  prune(e, day);
  await saveEng(user.id, e);
  return { gained: gained + goals.reduce((a, g) => a + g.xp, 0), goals };
}

export async function checkin(user, fail) {
  if (!earns(user)) fail(403, "O check-in vale para alunos.");
  const [e, cfg] = await Promise.all([loadEng(user.id), loadCfg()]);
  const day = dayKey();
  if (e.lastCheckin === day) fail(409, "Você já fez o check-in de hoje.");
  e.streak = e.lastCheckin === addDays(day, -1) ? e.streak + 1 : 1;
  e.best = Math.max(e.best || 0, e.streak);
  e.lastCheckin = day;
  e.checkins += 1;
  const d = dayRec(e, day);
  d.checkin = 1;
  const bonus = Math.min((e.streak - 1) * cfg.xp.streakBonus, cfg.xp.streakBonusMax);
  const gained = cfg.xp.checkin + bonus;
  e.xp += gained; d.xp += gained;
  logLine(e, e.streak > 1 ? `Check-in diário (${e.streak} dias seguidos)` : "Check-in diário", gained);
  const goals = settleGoals(e, cfg, day, d);
  prune(e, day);
  await saveEng(user.id, e);
  return { gained: gained + goals.reduce((a, g) => a + g.xp, 0), bonus, goals, streak: e.streak };
}

export function summary(e) {
  const day = dayKey();
  return { xp: e.xp, streak: effectiveStreak(e, day), checkedToday: e.lastCheckin === day, best: e.best || 0 };
}

export async function view(user) {
  const [e, cfg] = await Promise.all([loadEng(user.id), loadCfg()]);
  const day = dayKey();
  const today = e.days[day] || {};
  return {
    ...summary(e),
    checkins: e.checkins,
    today: { xp: today.xp || 0, hype: today.hype || 0, comment: today.comment || 0, post: today.post || 0 },
    earns: earns(user),
    goals: cfg.goals.filter((g) => g.active).map((g) => {
      const progress = goalProgress(e, g, day);
      return { id: g.id, title: g.title, metric: g.metric, period: g.period, target: g.target, xp: g.xp, progress: Math.min(progress, g.target), done: !!e.goals[`${g.id}|${periodKey(g, day)}`] };
    }),
    rules: { xp: cfg.xp, caps: cfg.caps },
    log: e.log.slice(0, 8),
  };
}

// Ranking de engajamento. period: "week" | "month" | "all". `students` = usuários com perfil aluno.
export async function ranking(period, students, meId) {
  const day = dayKey();
  const wk = weekKey(day), mo = monthKey(day);
  const engs = await pmap(students, (u) => loadEng(u.id));
  const rows = students.map((u, i) => {
    const e = engs[i];
    let score = 0;
    if (period === "all") score = e.xp;
    else for (const [k, v] of Object.entries(e.days)) {
      if (period === "week" ? k >= wk && k <= addDays(wk, 6) : k.startsWith(mo)) score += v.xp || 0;
    }
    return { id: u.id, name: u.name, nickname: u.nickname || null, xp: score, streak: effectiveStreak(e, day) };
  });
  rows.sort((a, b) => b.xp - a.xp || a.name.localeCompare(b.name, "pt-BR"));
  const ranked = rows.filter((r) => r.xp > 0).map((r, i) => ({ ...r, pos: i + 1 }));
  const me = ranked.find((r) => r.id === meId) || null;
  return { period, rows: ranked.slice(0, 100), me, total: ranked.length, since: period === "week" ? wk : period === "month" ? mo : null };
}

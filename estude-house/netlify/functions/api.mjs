import { store, pmap, blobsMode, cached, bust, clone } from "./lib/db.mjs";
import {
  normalizeEmail, isValidEmail, emailKey, hashPassword, verifyPassword, signToken, verifyToken,
  passwordProblem, randomPassword, newId, certCode, isMaster, domainAllowed, isLive, can, isStaff, cleanPerms, passVersion,
} from "./lib/auth.mjs";
import { TRAILS, EXAM_SIZE, RULES, FINAL_FAIL_RESETS_ALL, XP, trailById, trailOfLesson, trailOfScope, isFinalScope, isTrailActive, trailVisibleTo, hiddenIdsFor, isRestricted } from "./lib/manifest.mjs";
import { QUESTIONS, byId } from "./lib/questions/index.mjs";
import * as trailsLib from "./lib/trails.mjs";
import * as social from "./lib/social.mjs";
import * as eng from "./lib/engage.mjs";
import * as signup from "./lib/signup.mjs";
import * as notify from "./lib/notify.mjs";
import * as destaques from "./lib/destaques.mjs";
import * as provas from "./lib/provas.mjs";
import * as forum from "./lib/forum.mjs";
import * as reelsLib from "./lib/reels.mjs";
import * as pushLib from "./lib/push.mjs";
import { now } from "./lib/clock.mjs";
import { outcomeFor, drawQuestionIds, buildItems, publicQuestions, grade, reviewItem } from "./lib/exam.mjs";

export const config = { path: "/api/*" };

/* ---------- utilidades ---------- */

const JSON_HEADERS = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
// Muda a cada correção publicada: abra /api/health no site para ver qual versão está no ar.
const BUILD = "2026-10-27-a";
const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
class HttpError extends Error {
  constructor(status, message, extra) { super(message); this.status = status; this.extra = extra; }
}
const fail = (status, message, extra) => { throw new HttpError(status, message, extra); };

// Tamanho máximo do que o navegador pode mandar: 1 MB nas telas comuns; 6 MB (limite do Netlify) na gestão,
// onde a importação de trilhas leva imagens dentro do arquivo.
async function readBody(req, path = "") {
  if (req.method === "GET" || req.method === "HEAD") return {};
  const limit = path.startsWith("admin/") ? 6e6 : 1e6;
  if (Number(req.headers.get("content-length") || 0) > limit) fail(413, "O envio é grande demais.");
  const raw = await req.text();
  if (raw.length > limit) fail(413, "O envio é grande demais.");
  try { return JSON.parse(raw) || {}; } catch { return {}; }
}

const clientIp = (req) =>
  req.headers.get("x-nf-client-connection-ip") ||
  (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
  "";

const cleanText = (s, max) => String(s ?? "").replace(/[\u0000-\u001f]/g, " ").trim().slice(0, max);

/* ---------- logs ---------- */

async function logEvent(req, type, user, meta = {}) {
  try {
    const logs = await store("logs");
    const key = `${String(9e12 - Date.now()).padStart(13, "0")}-${newId().slice(0, 6)}`;
    await logs.set(key, {
      ts: Date.now(),
      type,
      userId: user?.id || null,
      email: user?.email || meta.email || null,
      name: user?.name || null,
      ip: clientIp(req),
      ua: cleanText(req.headers.get("user-agent"), 160),
      meta,
    });
  } catch (e) {
    console.error("log falhou", e);
  }
}

/* ---------- usuários e progresso ---------- */

const emptyProgress = () => ({ lessons: {}, exams: {}, active: {}, history: [] });

async function loadProgress(userId) {
  const p = await (await store("progress")).get("p:" + userId);
  return p ? { ...emptyProgress(), ...p } : emptyProgress();
}
async function saveProgress(userId, p) {
  await (await store("progress")).set("p:" + userId, p);
  bust("adm:all");
}
// O cadastro da pessoa é lido a cada requisição (para saber se o acesso continua ativo). Fica guardado por 10 s
// na instância; quem grava (saveUser) limpa na hora, então desativar alguém vale em até 10 s em qualquer instância.
const USER_TTL = 10000;
async function loadUser(id) {
  if (!id) return null;
  return clone(await cached("user:" + id, USER_TTL, async () => (await (await store("users")).get("u:" + id)) ?? null));
}
async function saveUser(u) {
  await (await store("users")).set("u:" + u.id, u);
  bust("user:" + u.id); bust("allusers");
}
async function findByEmail(email) {
  const id = await (await store("emails")).get(emailKey(email));
  return id ? loadUser(id) : null;
}

const publicUser = (u) => ({ id: u.id, name: u.name, email: u.email, role: u.role, nickname: u.nickname || null, avatar: u.avatar || null, team: u.teamId || null, ...(u.role === "subadmin" ? { perms: cleanPerms(u.perms) } : {}) });

function computeXp(p) {
  const lessons = Object.keys(p.lessons).length * XP.lesson;
  let exams = 0;
  for (const [scope, e] of Object.entries(p.exams)) {
    if (e?.status === "approved") exams += isFinalScope(scope) ? XP.final : XP.module;
  }
  return lessons + exams;
}

function moduleState(p, t, idx) {
  const m = t.modules[idx];
  const done = m.lessons.filter((id) => p.lessons[id]).length;
  const prevOk = idx === 0 || p.exams[t.modules[idx - 1].id]?.status === "approved";
  return { id: m.id, done, total: m.lessons.length, unlocked: prevOk, exam: p.exams[m.id]?.status || null };
}

const allModulesApproved = (p, t) => t.modules.every((m) => p.exams[m.id]?.status === "approved");

// Resumo do andamento em uma trilha.
function trailView(p, t) {
  const lessonIds = t.modules.flatMap((m) => m.lessons);
  return {
    modules: t.modules.map((_, i) => moduleState(p, t, i)),
    finalUnlocked: allModulesApproved(p, t),
    finalStatus: p.exams[t.finalScope]?.status || null,
    lessonsDone: lessonIds.filter((id) => p.lessons[id]).length,
    lessonsTotal: lessonIds.length,
    modulesApproved: t.modules.filter((m) => p.exams[m.id]?.status === "approved").length,
  };
}

function progressView(p) {
  return {
    lessons: p.lessons,
    exams: p.exams,
    active: p.active,
    xp: computeXp(p),
    trails: Object.fromEntries(TRAILS.map((t) => [t.id, trailView(p, t)])),
    history: (p.history || []).slice(-20).reverse(),
  };
}

/* ---------- autenticação ---------- */

async function requireUser(req) {
  const h = req.headers.get("authorization") || "";
  const token = h.startsWith("Bearer ") ? h.slice(7) : "";
  const data = verifyToken(token);
  if (!data) fail(401, "Sessão expirada. Entre novamente.");
  const user = await loadUser(data.sub);
  if (!user || !isLive(user)) fail(401, "Acesso desativado. Fale com a administração.");
  if (data.v && data.v !== passVersion(user.passHash)) fail(401, "Sua senha foi alterada. Entre novamente.");
  return user;
}

async function createUser({ name, email, password, role = "aluno", perms = null, createdBy = null, access = undefined }) {
  const users = await store("users");
  const emails = await store("emails");
  const id = newId("u_");
  const user = {
    id, name, email, role: isMaster(email) ? "admin" : role,
    passHash: hashPassword(password), active: true, createdAt: now(), lastLoginAt: null, createdBy,
  };
  if (user.role === "subadmin") user.perms = cleanPerms(perms);
  if (access) user.access = access;
  await users.set("u:" + id, user);
  await emails.set(emailKey(email), id);
  bust("allusers");
  return user;
}

async function register(req, body) {
  const name = cleanText(body.name, 80);
  const email = normalizeEmail(body.email);
  if (name.length < 2) fail(400, "Informe seu nome completo.");
  if (!isValidEmail(email)) fail(400, "Informe um e-mail válido.");
  if (!domainAllowed(email)) fail(403, "Este e-mail não está autorizado a se cadastrar. Use seu e-mail corporativo.");
  if (typeof body.password !== "string" || body.password !== body.password2) fail(400, "As duas senhas precisam ser iguais.");
  const problem = passwordProblem(body.password, email);
  if (problem) fail(400, problem);
  if (await findByEmail(email)) fail(409, "Este e-mail já tem cadastro. Use Entrar.");
  const needsApproval = signup.approvalOn() && !isMaster(email);
  const ip = clientIp(req);
  if (needsApproval && ip) {
    // Freio contra cadastros em massa: 8 por hora por endereço.
    const rl = await store("rl");
    const k = "reg:" + emailKey(ip);
    const st = (await rl.get(k)) || { n: 0, at: 0 };
    if (Date.now() - st.at > 3600e3) { st.n = 0; st.at = Date.now(); }
    if (++st.n > 8) fail(429, "Muitos cadastros deste aparelho. Tente de novo mais tarde.");
    await rl.set(k, st);
  }
  const user = await createUser({ name, email, password: body.password, access: needsApproval ? "pending" : undefined });
  if (needsApproval) {
    await signup.track(user.id, "p");
    await logEvent(req, "cadastro_pendente", user);
    return json({ pending: true, email, message: "Cadastro recebido! Um gestor vai analisar. Quando for aprovado, peça a ele o código de ativação." }, 202);
  }
  await logEvent(req, "cadastro", user);
  return json({ token: signToken(user.id, user.passHash), user: publicUser(user) }, 201);
}

async function login(req, body) {
  const email = normalizeEmail(body.email);
  const rl = await store("rl");
  const key = "login:" + emailKey(email);
  const state = (await rl.get(key)) || { count: 0, until: 0 };
  if (state.until > Date.now()) {
    const min = Math.ceil((state.until - Date.now()) / 60000);
    fail(429, `Muitas tentativas. Tente de novo em ${min} min.`);
  }
  // Freio por endereço: quem erra a senha de muitas contas diferentes (adivinhação em massa) é barrado.
  // O limite é alto de propósito: um escritório inteiro pode sair do mesmo endereço.
  const ip = clientIp(req);
  const ipKey = ip ? "loginip:" + emailKey(ip) : null;
  const ipState = ipKey ? (await rl.get(ipKey)) || { n: 0, at: 0, until: 0 } : null;
  if (ipState && ipState.until > Date.now()) fail(429, "Muitas tentativas deste aparelho. Tente de novo em alguns minutos.");
  const user = isValidEmail(email) ? await findByEmail(email) : null;
  const ok = user && verifyPassword(String(body.password || ""), user.passHash);
  if (!ok) {
    if (ipState) {
      if (Date.now() - ipState.at > 10 * 60 * 1000) { ipState.n = 0; ipState.at = Date.now(); }
      if (++ipState.n >= 80) { ipState.until = Date.now() + 10 * 60 * 1000; ipState.n = 0; }
      await rl.set(ipKey, ipState);
    }
    state.count += 1;
    if (state.count >= 5) { state.until = Date.now() + 10 * 60 * 1000; state.count = 0; }
    await rl.set(key, state);
    await logEvent(req, "login_falhou", user, { email });
    fail(401, "E-mail ou senha incorretos.");
  }
  if (user.active === false) fail(403, "Acesso desativado. Fale com a administração.");
  if (user.access === "pending") fail(403, "Seu cadastro foi recebido e está aguardando a aprovação de um gestor. Quando for aprovado, peça a ele o código de ativação.", { state: "pending" });
  if (user.access === "invited") fail(403, "Seu cadastro foi aprovado. Falta ativar o acesso com o código de 6 dígitos que o gestor te entrega.", { state: "invited", email: user.email });
  if (user.access === "rejected") fail(403, "Seu cadastro não foi aprovado. Fale com a administração.", { state: "rejected" });
  if (isMaster(user.email) && user.role !== "admin") user.role = "admin";
  user.lastLoginAt = Date.now();
  // Gravações independentes rodam juntas (menos espera no login).
  await Promise.all([
    state.count || state.until ? rl.set(key, { count: 0, until: 0 }) : null,
    saveUser(user),
    logEvent(req, "login", user),
  ]);
  return json({ token: signToken(user.id, user.passHash), user: publicUser(user) });
}

/* ---------- progresso e provas ---------- */

function examScope(scope) {
  const info = trailOfScope(String(scope || ""));
  if (!info) fail(400, "Prova inexistente.");
  return info;
}

// Trilha inativa: o aluno não estuda nem faz prova (o gestor continua livre para testar).
function needActive(user, trail) {
  if (!trailVisibleTo(user, trail.id)) fail(403, isTrailActive(trail.id) ? "Esta trilha não está liberada para você. Fale com a administração." : "Esta trilha está inativa no momento.");
}

async function completeLesson(req, user, body) {
  const lessonId = String(body.lessonId || "");
  const trail = trailOfLesson(lessonId);
  if (!trail) fail(400, "Aula inexistente.");
  needActive(user, trail);
  const mod = trail.modules.find((m) => m.lessons.includes(lessonId));
  const p = await loadProgress(user.id);
  const idx = trail.modules.indexOf(mod);
  if (!isStaff(user) && !moduleState(p, trail, idx).unlocked) fail(403, "Este módulo ainda está bloqueado.");
  const li = mod.lessons.indexOf(lessonId);
  // o aluno assiste na ordem: a aula só abre depois de concluir a anterior (gestor navega livre)
  if (!isStaff(user) && li > 0 && !p.lessons[lessonId] && !p.lessons[mod.lessons[li - 1]]) fail(403, "Assista a aula anterior primeiro.");
  if (p.exams[mod.id]?.status === "approved") return json({ progress: progressView(p) });
  if (!p.lessons[lessonId]) {
    p.lessons[lessonId] = Date.now();
    await Promise.all([saveProgress(user.id, p), logEvent(req, "aula_concluida", user, { lessonId })]);
  }
  return json({ progress: progressView(p) });
}

async function startExam(req, user, body) {
  const { trail, isFinal, index } = examScope(body.scope);
  needActive(user, trail);
  const scope = isFinal ? trail.finalScope : trail.modules[index].id;
  const p = await loadProgress(user.id);
  const isAdmin = isStaff(user);
  if (isFinal) {
    if (!isAdmin && !allModulesApproved(p, trail)) fail(403, "Seja aprovado em todos os módulos para liberar a prova final.");
  } else {
    const st = moduleState(p, trail, index);
    if (!isAdmin && !st.unlocked) fail(403, "Este módulo ainda está bloqueado.");
    if (!isAdmin && st.done < st.total) fail(403, "Conclua todas as aulas do módulo antes da prova.");
  }
  const ex = p.exams[scope];
  if (ex?.status === "approved") fail(409, "Você já foi aprovado nesta prova.");

  const attempts = await store("attempts");
  const activeId = p.active[scope];
  if (activeId) {
    const a = await attempts.get("a:" + activeId);
    if (a && !a.submittedAt) {
      return json({ attemptId: a.id, scope, mode: a.mode, total: a.items.length, questions: publicQuestions(a.items), resumed: true });
    }
  }

  let mode = "full";
  let qids;
  if (ex?.status === "retry" && ex.retry?.qids?.length) {
    mode = "retry";
    qids = ex.retry.qids;
  } else {
    qids = drawQuestionIds(scope);
  }
  const attempt = {
    id: newId("a_"), userId: user.id, scope, mode, createdAt: Date.now(),
    items: buildItems(qids), submittedAt: null,
  };
  p.active[scope] = attempt.id;
  await Promise.all([
    attempts.set("a:" + attempt.id, attempt),
    saveProgress(user.id, p),
    logEvent(req, "prova_iniciada", user, { scope, mode, total: attempt.items.length }),
  ]);
  return json({ attemptId: attempt.id, scope, mode, total: attempt.items.length, questions: publicQuestions(attempt.items) });
}

function resetModuleLessons(p, moduleId) {
  const m = trailOfScope(moduleId)?.module;
  if (m) for (const id of m.lessons) delete p.lessons[id];
}

async function submitExam(req, user, body) {
  const attempts = await store("attempts");
  const attempt = await attempts.get("a:" + String(body.attemptId || ""));
  if (!attempt || attempt.userId !== user.id) fail(404, "Prova não encontrada.");
  if (attempt.submittedAt) fail(409, "Esta prova já foi enviada.");
  const scope = attempt.scope;
  const scopeInfo = trailOfScope(scope);
  if (!scopeInfo) fail(410, "Esta prova não existe mais.");
  needActive(user, scopeInfo.trail);
  const p = await loadProgress(user.id);

  const g = grade(attempt.items, body.answers || {});
  const wrong = g.results.filter((r) => !r.ok);
  const prev = p.exams[scope] || {};
  const base = {
    attempts: (prev.attempts || 0) + 1,
    bestPct: Math.max(prev.bestPct || 0, attempt.mode === "full" ? g.pct : 0),
    lastPct: attempt.mode === "full" ? g.pct : prev.lastPct ?? null,
  };
  let result;

  if (attempt.mode === "retry") {
    if (wrong.length === 0) {
      p.exams[scope] = { ...prev, ...base, status: "approved", passedAt: Date.now(), passedVia: "retry", retry: null };
      result = { mode: "retry", outcome: "aprovado", pct: prev.lastPct ?? null, correct: g.correct, total: g.total, passedViaRetry: true };
    } else {
      p.exams[scope] = { ...prev, ...base, status: "retry", retry: { qids: wrong.map((r) => r.qid) } };
      result = {
        mode: "retry", outcome: "refazer-erros", correct: g.correct, total: g.total, remaining: wrong.length,
        topics: [...new Set(wrong.map((r) => byId(r.qid)?.topic).filter(Boolean))],
      };
    }
  } else {
    const outcome = outcomeFor(g.pct);
    if (outcome === "aprovado") {
      p.exams[scope] = { ...base, status: "approved", passedAt: Date.now(), passedVia: "full", retry: null };
      result = {
        mode: "full", outcome, pct: g.pct, correct: g.correct, total: g.total,
        review: wrong.map(reviewItem),
      };
    } else if (outcome === "refazer-erros") {
      p.exams[scope] = { ...base, status: "retry", retry: { qids: wrong.map((r) => r.qid) } };
      result = {
        mode: "full", outcome, pct: g.pct, correct: g.correct, total: g.total, remaining: wrong.length,
        topics: [...new Set(wrong.map((r) => byId(r.qid)?.topic).filter(Boolean))],
      };
    } else {
      // reprovado: refaz tudo
      const info = trailOfScope(scope);
      if (info.isFinal && FINAL_FAIL_RESETS_ALL) {
        for (const m of info.trail.modules) {
          resetModuleLessons(p, m.id);
          const pe = p.exams[m.id] || {};
          p.exams[m.id] = { attempts: pe.attempts || 0, bestPct: pe.bestPct || 0, lastPct: pe.lastPct ?? null, status: "reset" };
        }
        p.exams[scope] = { ...base, status: "reset" };
        result = { mode: "full", outcome, pct: g.pct, correct: g.correct, total: g.total, resetAll: true };
      } else {
        if (!info.isFinal) resetModuleLessons(p, scope);
        p.exams[scope] = { ...base, status: "reset" };
        result = { mode: "full", outcome, pct: g.pct, correct: g.correct, total: g.total, resetModule: scope };
      }
    }
  }

  attempt.submittedAt = Date.now();
  attempt.result = { ...result, review: undefined };
  delete p.active[scope];
  p.history = [...(p.history || []), {
    scope, mode: attempt.mode, outcome: result.outcome, pct: result.pct ?? g.pct,
    correct: g.correct, total: g.total, at: Date.now(),
  }].slice(-60);
  await Promise.all([
    attempts.set("a:" + attempt.id, attempt),
    saveProgress(user.id, p),
    logEvent(req, "prova_enviada", user, { scope, mode: attempt.mode, outcome: result.outcome, pct: g.pct, correct: g.correct, total: g.total }),
  ]);
  return json({ result, progress: progressView(p) });
}

async function certificate(req, user, url) {
  const trail = trailById(url.searchParams.get("trail") || TRAILS[0].id);
  if (!trail) fail(404, "Trilha inexistente.");
  const p = await loadProgress(user.id);
  const f = p.exams[trail.finalScope];
  if (f?.status !== "approved") fail(403, "O certificado é liberado após a aprovação na prova final.");
  // A trilha original (PriceBot) mantém o código de verificação que já foi emitido.
  const code = certCode(trail.id === TRAILS[0].id ? user.id : `${user.id}|${trail.id}`, f.passedAt);
  return json({
    name: user.name, course: trail.title, trail: trail.id, finishedAt: f.passedAt,
    pct: f.bestPct || f.lastPct || null, code,
  });
}

/* ---------- administração ---------- */

function userSummary(u, p, e) {
  return {
    id: u.id, name: u.name, email: u.email, role: u.role, active: u.active !== false,
    createdAt: u.createdAt, lastLoginAt: u.lastLoginAt,
    lessonsDone: Object.keys(p.lessons).length,
    trails: Object.fromEntries(TRAILS.map((t) => { const v = trailView(p, t); return [t.id, { lessonsDone: v.lessonsDone, modulesApproved: v.modulesApproved, finalStatus: v.finalStatus }]; })),
    xp: computeXp(p) + (e?.xp || 0),
    xpEngage: e?.xp || 0,
    nickname: u.nickname || null,
    avatar: u.avatar || null,
    team: u.teamId || null,
    master: isMaster(u.email),
    ...(u.role === "aluno" ? { trailAccess: u.trailAccess || [] } : {}),
    ...(u.role === "subadmin" ? { perms: cleanPerms(u.perms) } : {}),
  };
}

// Lista de todo mundo: 300 leituras. Fica guardada por 20 s (várias telas pedem: marcar com @, ranking, provas).
async function allUsers() {
  return clone(await cached("allusers", 20000, async () => {
    const users = await store("users");
    const keys = await users.keys({ prefix: "u:" });
    return (await pmap(keys, (k) => users.get(k), 24)).filter(Boolean);
  }));
}

// Usuários + progresso de cada um, lidos em paralelo (uma leitura por pessoa).
async function allWithProgress() {
  return clone(await cached("adm:all", 15000, async () => {
    const list = await allUsers();
    const [progs, engs] = await Promise.all([pmap(list, (u) => loadProgress(u.id), 24), pmap(list, (u) => eng.loadEng(u.id), 24)]);
    return list.map((u, i) => ({ u, p: progs[i], e: engs[i] }));
  }));
}

async function adminOverview() {
  const all = (await allWithProgress()).filter(({ u }) => !u.access || u.access === "active");
  const rows = all.map(({ u, p, e }) => userSummary(u, p, e));
  const alunos = rows.filter((r) => r.role === "aluno");
  const alunoRows = all.filter(({ u }) => u.role === "aluno");
  const trails = {};
  for (const t of TRAILS) {
    /* trilha só para escolhidos: as contas consideram apenas quem recebeu a trilha */
    const pool = isRestricted(t.id) ? alunoRows.filter(({ u }) => (u.trailAccess || []).includes(t.id)) : alunoRows;
    const poolIds = new Set(pool.map(({ u }) => u.id));
    const poolRows = alunos.filter((r) => poolIds.has(r.id));
    const alunoProgress = pool.map(({ p }) => p);
    const totalLessons = t.modules.reduce((a, m) => a + m.lessons.length, 0);
    const funnel = t.modules.map((m) => {
      let started = 0, approved = 0;
      for (const p of alunoProgress) {
        if (m.lessons.some((l) => p.lessons[l]) || p.exams[m.id]) started++;
        if (p.exams[m.id]?.status === "approved") approved++;
      }
      return { id: m.id, started, approved };
    });
    const lessonsOf = (r) => r.trails[t.id].lessonsDone;
    trails[t.id] = {
      started: poolRows.filter((r) => lessonsOf(r) > 0).length,
      approved: poolRows.filter((r) => r.trails[t.id].finalStatus === "approved").length,
      avgProgress: poolRows.length ? Math.round((poolRows.reduce((a, r) => a + lessonsOf(r), 0) / (poolRows.length * totalLessons)) * 100) : 0,
      funnel, audience: pool.length, restricted: isRestricted(t.id),
    };
  }
  const logs = await store("logs");
  const keys = await logs.keys({ limit: 8 });
  const recent = await pmap(keys, (k) => logs.get(k));
  return json({
    users: rows.length, alunos: alunos.length, admins: rows.length - alunos.length,
    trails, recent: recent.filter(Boolean),
    rules: { ...RULES, examSize: EXAM_SIZE, finalFailResetsAll: FINAL_FAIL_RESETS_ALL },
  });
}

async function adminUsers() {
  const rows = (await allWithProgress()).filter(({ u }) => !u.access || u.access === "active").map(({ u, p, e }) => userSummary(u, p, e));
  rows.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  return json({ users: rows });
}

async function adminUserDetail(id) {
  const u = await loadUser(id);
  if (!u) fail(404, "Usuário não encontrado.");
  const p = await loadProgress(id);
  return json({ user: userSummary(u, p, await eng.loadEng(id)), progress: progressView(p), history: [...(p.history || [])].reverse() });
}

/* só o admin cria e muda gestores; sub-adm com a permissão "usuários" mexe apenas em alunos */
const roleFrom = (v) => (v === "admin" ? "admin" : v === "subadmin" ? "subadmin" : "aluno");
const onlyAdminTouchesStaff = (actor, target) => { if (actor.role !== "admin" && target.role !== "aluno") fail(403, "Só administradores mexem em gestores."); };

async function adminCreateUser(req, admin, body) {
  const name = cleanText(body.name, 80);
  const email = normalizeEmail(body.email);
  const role = admin.role === "admin" ? roleFrom(body.role) : "aluno";
  if (name.length < 2) fail(400, "Informe o nome.");
  if (!isValidEmail(email)) fail(400, "E-mail inválido.");
  if (await findByEmail(email)) fail(409, "Este e-mail já tem cadastro.");
  let password = String(body.password || "");
  let generated = false;
  if (!password) { password = randomPassword(); generated = true; }
  else {
    const problem = passwordProblem(password, email);
    if (problem) fail(400, problem);
  }
  if (body.team && !(await social.teamExists(String(body.team)))) fail(400, "Esse time não existe mais.");
  const user = await createUser({ name, email, password, role, perms: body.perms, createdBy: admin.id });
  if (body.team) { user.teamId = String(body.team); await saveUser(user); }
  await logEvent(req, "admin_criou_acesso", admin, { target: email, role: user.role, ...(user.teamId ? { time: user.teamId } : {}) });
  return json({ user: userSummary(user, emptyProgress()), password: generated ? password : null }, 201);
}

function parseBulk(text) {
  return String(text || "").split(/\r?\n/).map((l) => l.trim()).filter(Boolean).map((line) => {
    const sep = line.includes("\t") ? "\t" : line.includes(";") ? ";" : ",";
    const [name, email, password, role] = line.split(sep).map((s) => s.trim());
    return { name, email, password, role };
  }).filter((r) => !/^nome$/i.test(r.name || ""));
}

async function adminBulk(req, admin, body) {
  const rows = parseBulk(body.text).slice(0, 300);
  if (!rows.length) fail(400, "Cole ao menos uma linha: nome, e-mail, senha (opcional), perfil (opcional).");
  const results = [];
  for (const r of rows) {
    const email = normalizeEmail(r.email);
    try {
      if (cleanText(r.name, 80).length < 2) throw new Error("nome ausente");
      if (!isValidEmail(email)) throw new Error("e-mail inválido");
      if (await findByEmail(email)) throw new Error("já cadastrado");
      let password = r.password || "";
      let generated = false;
      if (!password) { password = randomPassword(); generated = true; }
      else { const pr = passwordProblem(password, email); if (pr) throw new Error(pr); }
      const role = admin.role !== "admin" ? "aluno" : /^adm/i.test(r.role || "") ? "admin" : /^sub/i.test(r.role || "") ? "subadmin" : "aluno";
      const u = await createUser({ name: cleanText(r.name, 80), email, password, role, createdBy: admin.id });
      results.push({ email, ok: true, role: u.role, password: generated ? password : null });
    } catch (e) {
      results.push({ email: email || r.email || "?", ok: false, error: e.message });
    }
  }
  await logEvent(req, "admin_subiu_acessos", admin, { total: rows.length, criados: results.filter((x) => x.ok).length });
  return json({ results });
}

async function adminPatchUser(req, admin, id, body) {
  const u = await loadUser(id);
  if (!u) fail(404, "Usuário não encontrado.");
  const master = isMaster(u.email);
  onlyAdminTouchesStaff(admin, u);
  const changes = {};
  let trailsChanged = false;
  if (body.name !== undefined) {
    const n = cleanText(body.name, 80);
    if (n.length < 2) fail(400, "Nome inválido.");
    u.name = n; changes.name = n;
  }
  if (body.role !== undefined) {
    if (master) fail(403, "O acesso master não pode ter o perfil alterado.");
    if (id === admin.id) fail(400, "Você não pode alterar o próprio perfil.");
    if (admin.role !== "admin") fail(403, "Só administradores mudam o perfil de acesso.");
    u.role = roleFrom(body.role); changes.role = u.role;
    if (u.role === "subadmin") { u.perms = cleanPerms(body.perms !== undefined ? body.perms : u.perms); changes.perms = u.perms; }
    else delete u.perms;
  }
  if (body.perms !== undefined && body.role === undefined) {
    if (admin.role !== "admin") fail(403, "Só administradores definem permissões.");
    if (u.role !== "subadmin") fail(400, "Só sub-administradores têm permissões configuráveis.");
    u.perms = cleanPerms(body.perms); changes.perms = u.perms;
  }
  if (body.trails !== undefined) {
    if (u.role !== "aluno") fail(400, "Atribuição de trilhas vale só para alunos.");
    const ok = new Set(TRAILS.map((t) => t.id));
    u.trailAccess = [...new Set((Array.isArray(body.trails) ? body.trails : []).map(String).filter((t) => ok.has(t)))]; changes.trilhas = u.trailAccess.join(",") || "nenhuma";
    trailsChanged = true;
  }
  if (body.team !== undefined) {
    if (body.team) {
      if (!(await social.teamExists(String(body.team)))) fail(400, "Esse time não existe mais.");
      u.teamId = String(body.team);
    } else delete u.teamId;
    changes.time = u.teamId || "nenhum";
  }
  if (body.active !== undefined) {
    if (master) fail(403, "O acesso master não pode ser desativado.");
    if (id === admin.id) fail(400, "Você não pode desativar o próprio acesso.");
    u.active = !!body.active; changes.active = u.active;
  }
  let newPassword = null;
  if (body.password !== undefined) {
    const pr = passwordProblem(String(body.password), u.email);
    if (pr) fail(400, pr);
    u.passHash = hashPassword(String(body.password)); changes.password = "redefinida"; newPassword = true;
  }
  await saveUser(u);
  if (trailsChanged) await trailsLib.bumpVersion().catch(() => {});
  await logEvent(req, "admin_alterou_usuario", admin, { target: u.email, ...changes });
  return json({ user: userSummary(u, await loadProgress(id)), passwordChanged: !!newPassword });
}

async function adminResetProgress(req, admin, id, body) {
  const u = await loadUser(id);
  if (!u) fail(404, "Usuário não encontrado.");
  onlyAdminTouchesStaff(admin, u);
  const p = await loadProgress(id);
  const scope = String(body.scope || "all");
  if (scope === "all") {
    p.lessons = {}; p.exams = {}; p.active = {};
  } else if (scope.startsWith("trail:")) {
    // zera uma trilha inteira (aulas e provas)
    const t = trailById(scope.slice(6));
    if (!t) fail(400, "Trilha inexistente.");
    for (const m of t.modules) { resetModuleLessons(p, m.id); delete p.exams[m.id]; delete p.active[m.id]; }
    delete p.exams[t.finalScope]; delete p.active[t.finalScope];
  } else {
    const info = trailOfScope(scope);
    if (!info) fail(400, "Módulo inexistente.");
    if (!info.isFinal) {
      // zerar um módulo também zera a prova final da trilha dele
      resetModuleLessons(p, scope);
      delete p.exams[scope];
      delete p.active[scope];
    }
    delete p.exams[info.trail.finalScope];
    delete p.active[info.trail.finalScope];
  }
  await saveProgress(id, p);
  await logEvent(req, "admin_zerou_progresso", admin, { target: u.email, scope });
  return json({ ok: true, progress: progressView(p) });
}

async function adminDeleteUser(req, admin, id) {
  const u = await loadUser(id);
  if (!u) fail(404, "Usuário não encontrado.");
  if (admin.role !== "admin") fail(403, "Só administradores removem acessos.");
  if (isMaster(u.email)) fail(403, "O acesso master não pode ser removido.");
  if (id === admin.id) fail(400, "Você não pode remover o próprio acesso.");
  await removeUser(u);
  await logEvent(req, "admin_removeu_usuario", admin, { target: u.email });
  return json({ ok: true });
}

async function removeUser(u) {
  bust("user:" + u.id); bust("allusers");
  await (await store("users")).delete("u:" + u.id);
  await (await store("emails")).delete(emailKey(u.email));
  await (await store("progress")).delete("p:" + u.id);
  await (await store("eng")).delete("e:" + u.id);
  if (u.nickname) await (await store("nicks")).delete("n:" + u.nickname);
  await signup.untrack(u.id);
  await notify.forget(u.id);
}

async function adminLogs(url) {
  const type = url.searchParams.get("type") || "";
  const q = (url.searchParams.get("q") || "").toLowerCase();
  const after = url.searchParams.get("after") || "";
  const limit = Math.min(Number(url.searchParams.get("limit")) || 60, 200);
  const logs = await store("logs");
  const out = [];
  let cursor = after;
  let exhausted = false;
  // Uma listagem por requisição (cara) e leituras em paralelo, em blocos de 40.
  const keys = await logs.keys({ after, limit: 1200 });
  if (keys.length < 1200) exhausted = true;
  let i = 0;
  while (out.length < limit && i < keys.length) {
    const chunk = keys.slice(i, i + 40);
    const entries = await pmap(chunk, (k) => logs.get(k), 20);
    for (let j = 0; j < chunk.length; j++) {
      const k = chunk[j], entry = entries[j];
      cursor = k; i++;
      if (!entry) continue;
      if (type && entry.type !== type) continue;
      if (q && !(`${entry.email || ""} ${entry.name || ""} ${entry.ip || ""} ${JSON.stringify(entry.meta || {})}`.toLowerCase().includes(q))) continue;
      out.push({ key: k, ...entry });
      if (out.length >= limit) break;
    }
  }
  if (i >= keys.length && keys.length < 1200) exhausted = true;
  return json({ logs: out, next: exhausted && i >= keys.length ? null : cursor });
}

function adminQuestions() {
  return json({
    rules: { ...RULES, examSize: EXAM_SIZE },
    questions: QUESTIONS.map((q) => ({ ...q, type: q.answer.length > 1 ? "multi" : "single" })),
  });
}

/* ---------- roteador ---------- */

// Depois de qualquer gravação, os números derivados (contadores de pendências, painel do gestor) são recalculados.
export default async (req, context) => {
  const res = await handleApi(req, context);
  if (req.method !== "GET" && req.method !== "HEAD" && res.status < 400) { bust("forum:pend"); bust("signup:pend"); bust("adm:"); }
  return res;
};

async function handleApi(req, context) {
  try {
    const url = new URL(req.url);
    const path = url.pathname.replace(/^\/api\/?/, "").replace(/\/+$/, "");
    const method = req.method.toUpperCase();
    if (method === "OPTIONS") return new Response(null, { status: 204 });
    const body = await readBody(req, path);

    if (path === "health") return json({ ok: true, build: BUILD, blobs: blobsMode(), uploads: social.uploadsOn() ? "cloudinary" : "desligado", push: (await pushLib.vapid()) ? "ativo" : "indisponível", rules: RULES });
    if (path === "auth/register" && method === "POST") return await register(req, body);
    if (path === "auth/login" && method === "POST") return await login(req, body);
    if (path === "auth/activate" && method === "POST") return await signup.activate({ json, fail, logEvent, loadUser, saveUser, findByEmail }, req, body);

    const user = await requireUser(req);
    // trilhas criadas no construtor + trilhas inativas (barato: no máximo uma leitura pequena a cada 4 s)
    await trailsLib.sync().catch((e) => console.error("trilhas não carregaram", e));

    if (path === "me" && method === "GET") {
      const [p, e, pending, pendingSignups, unread, newDest, pendingForum] = await Promise.all([
        loadProgress(user.id),
        user.role === "aluno" ? eng.loadEng(user.id) : null,
        can(user, "aprovar") ? social.pendingCount() : 0,
        can(user, "aprovar") ? signup.pendingCount() : 0,
        notify.unreadCount(user).catch(() => 0),
        destaques.unseenCount(user).catch(() => 0),
        can(user, "forum") ? forum.pendingCount().catch(() => 0) : 0,
      ]);
      return json({ user: { ...publicUser(user), tourSeen: !!user.tourAt }, progress: progressView(p), engage: e ? eng.summary(e) : { xp: 0, streak: 0, checkedToday: false }, pending, pendingSignups, pendingForum, unread, destaques: newDest, ctv: trailsLib.version(), inactive: trailsLib.inactive(), restricted: trailsLib.restricted(), cats: trailsLib.categories(), hidden: hiddenIdsFor(user, TRAILS.map((t) => t.id)), rules: { ...RULES, examSize: EXAM_SIZE } });
    }
    // tour guiado: marca que a pessoa já viu (ou volta a mostrar no próximo acesso)
    if (path === "auth/tour" && method === "POST") {
      if (body.reset === true) delete user.tourAt; else user.tourAt = user.tourAt || Date.now();
      await saveUser(user);
      return json({ ok: true, tour: !!user.tourAt });
    }
    if (path === "auth/password" && method === "POST") {
      if (!verifyPassword(String(body.current || ""), user.passHash)) fail(400, "A senha atual não confere.");
      if (body.next !== body.next2) fail(400, "As duas senhas novas precisam ser iguais.");
      const pr = passwordProblem(String(body.next || ""), user.email);
      if (pr) fail(400, pr);
      user.passHash = hashPassword(String(body.next));
      await saveUser(user);
      await logEvent(req, "senha_alterada", user);
      return json({ ok: true });
    }
    if (path === "progress/lesson" && method === "POST") return await completeLesson(req, user, body);
    if (path === "exam/start" && method === "POST") return await startExam(req, user, body);
    if (path === "exam/submit" && method === "POST") return await submitExam(req, user, body);
    if (path === "certificate" && method === "GET") return await certificate(req, user, url);

    const social_ = await social.handle(
      { json, fail, logEvent, loadUser, saveUser, allUsers, publicUser },
      { req, method, path, url, body, user },
    );
    if (social_) return social_;

    const ctx2 = { json, fail, logEvent, loadUser, saveUser, allUsers, publicUser };
    const trails_ = await trailsLib.handle(ctx2, { req, method, path, url, body, user });
    if (trails_) return trails_;
    const dest_ = await destaques.handle(ctx2, { req, method, path, url, body, user });
    if (dest_) return dest_;
    const push_ = await pushLib.handle(ctx2, { req, method, path, url, body, user });
    if (push_) return push_;
    const reels_ = await reelsLib.handle(ctx2, { req, method, path, url, body, user });
    if (reels_) return reels_;
    const provas_ = await provas.handle(ctx2, { req, method, path, url, body, user });
    if (provas_) return provas_;
    const forum_ = await forum.handle(ctx2, { req, method, path, url, body, user });
    if (forum_) return forum_;

    if (path.startsWith("admin/")) {
      const admin = user; // já autenticado acima
      const need = (perm) => { if (!can(admin, perm)) fail(403, "Você não tem permissão para esta área."); };
      const parts = path.split("/");
      if (path === "admin/overview" && method === "GET") { need("usuarios"); return await adminOverview(); }
      if (parts[1] === "signups") {
        need("aprovar");
        const r = await signup.handleAdmin({ json, fail, logEvent, loadUser, saveUser, findByEmail, removeUser, teamExists: social.teamExists }, { req, method, path, body, admin });
        if (r) return r;
      }
      if (path === "admin/users" && method === "GET") { need("usuarios"); return await adminUsers(); }
      if (path === "admin/users" && method === "POST") { need("usuarios"); return await adminCreateUser(req, admin, body); }
      if (path === "admin/users/bulk" && method === "POST") { need("usuarios"); return await adminBulk(req, admin, body); }
      if (path === "admin/logs" && method === "GET") { need("usuarios"); return await adminLogs(url); }
      if (path === "admin/questions" && method === "GET") { need("trilhas"); return adminQuestions(); }
      if (parts[1] === "users" && parts[2]) {
        need("usuarios");
        const id = parts[2];
        if (parts.length === 3 && method === "GET") return await adminUserDetail(id);
        if (parts.length === 3 && method === "PATCH") return await adminPatchUser(req, admin, id, body);
        if (parts.length === 3 && method === "DELETE") return await adminDeleteUser(req, admin, id);
        if (parts[3] === "reset" && method === "POST") return await adminResetProgress(req, admin, id, body);
      }
    }
    return json({ error: "Rota não encontrada." }, 404);
  } catch (e) {
    if (e instanceof HttpError) return json({ error: e.message, ...(e.extra || {}) }, e.status);
    console.error("erro no servidor:", e);
    if (e.status) return json({ error: e.message }, e.status);
    // Mostra um código curto do erro: ajuda a administração a achar a causa no log do Netlify.
    // O detalhe técnico fica só no registro (Logs do gestor e do Netlify); para o navegador vai só um código curto.
    const detail = cleanText(`${e.name || "Error"}: ${e.message || ""}`, 140);
    const ref = newId().slice(0, 6).toUpperCase();
    console.error("erro", ref, detail);
    try {
      await logEvent(req, "erro_servidor", null, { path: new URL(req.url).pathname, method: req.method, detail, ref });
    } catch {}
    return json({ error: `Erro interno. Tente novamente em instantes. (código ${ref})`, ref }, 500);
  }
}

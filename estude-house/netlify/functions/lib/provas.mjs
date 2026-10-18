// Provas avulsas: uma prova criada pelo gestor, sem trilha, que ele libera para todos os alunos ou só para quem escolher.
//
// Bancos:
//   store "provas"    → p:<id>  { id, rev, title, description, tag, passPct, size, reveal, status, audience:{mode,users}, seq, questions:[...],
//                                  notified:[ids], createdBy, createdAt, updatedAt, publishedAt }
//   store "provares"  → <prova>:<pessoa>  { attempts, bestPct, lastPct, status:"approved"|"pending", passedAt, lastAt, active }
//   store "provaatt"  → <tentativa>  { id, pid, userId, items:[{qid, perm}], qs:{ [qid]: questão }, createdAt, submittedAt }
// Questão: { id, q, options:[...], answer:[índices certos], why, topic }. A correção acontece aqui, no servidor.

import crypto from "node:crypto";
import { store, pmap } from "./db.mjs";
import { newId, can, isLive } from "./auth.mjs";
import { now } from "./clock.mjs";
import * as notify from "./notify.mjs";

const ctrl = /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g;
const S = (v, max = 200) => String(v ?? "").replace(ctrl, " ").replace(/\r/g, "").trim().slice(0, max);
const line = (v, max) => S(v, max).replace(/\s+/g, " ");
const N = (v, lo, hi, def) => { const n = Number(v); return Number.isFinite(n) ? Math.min(hi, Math.max(lo, Math.round(n))) : def; };
const arr = (v, max) => (Array.isArray(v) ? v.slice(0, max) : []);

export const LIMITS = { questions: 100, options: 6, minOptions: 2, title: 80, tag: 24, desc: 400, q: 400, opt: 200, why: 500, topic: 60, minToPublish: 3 };
const STATUS = ["rascunho", "publicada", "encerrada"];
const REVEAL = ["pass", "always"];

const shuffle = (a) => { const x = [...a]; for (let i = x.length - 1; i > 0; i--) { const j = crypto.randomInt(i + 1); [x[i], x[j]] = [x[j], x[i]]; } return x; };

function cleanQuestion(q, id) {
  const options = arr(q?.options, LIMITS.options).map((o) => line(o, LIMITS.opt)).filter(Boolean);
  const answer = [...new Set(arr(q?.answer, LIMITS.options).map(Number).filter((i) => Number.isInteger(i) && i >= 0 && i < options.length))].sort((a, b) => a - b);
  return { id, q: S(q?.q, LIMITS.q), options, answer, why: S(q?.why, LIMITS.why), topic: line(q?.topic, LIMITS.topic) };
}

// Mantém os ids que já existem (para os resultados antigos continuarem batendo); itens novos recebem id novo.
export function cleanContent(raw, prev) {
  const d = raw && typeof raw === "object" ? raw : {};
  let seq = Math.max(Number(prev?.seq) || 0, 0);
  const used = new Set();
  const known = new Set((prev?.questions || []).map((q) => q.id));
  const questions = arr(d.questions, LIMITS.questions).map((q) => {
    let id = typeof q?.id === "string" && /^q\d+$/.test(q.id) && known.has(q.id) && !used.has(q.id) ? q.id : null;
    if (!id) { do { id = "q" + ++seq; } while (used.has(id) || known.has(id)); }
    used.add(id);
    return cleanQuestion(q, id);
  });
  return {
    title: line(d.title, LIMITS.title), description: S(d.description, LIMITS.desc), tag: line(d.tag, LIMITS.tag),
    passPct: N(d.passPct, 30, 100, 70), size: N(d.size, 0, LIMITS.questions, 0),
    reveal: REVEAL.includes(d.reveal) ? d.reveal : "pass",
    seq, questions,
  };
}

export function problems(doc) {
  const out = [];
  if (doc.title.length < 3) out.push("Dê um nome à prova (3 letras ou mais).");
  if (doc.questions.length < LIMITS.minToPublish) out.push(`A prova precisa de pelo menos ${LIMITS.minToPublish} questões (tem ${doc.questions.length}).`);
  doc.questions.forEach((q, i) => {
    if (!q.q) out.push(`Questão ${i + 1}: falta a pergunta.`);
    else if (q.options.length < LIMITS.minOptions) out.push(`Questão ${i + 1}: precisa de pelo menos ${LIMITS.minOptions} alternativas.`);
    else if (!q.answer.length) out.push(`Questão ${i + 1}: marque a alternativa certa.`);
  });
  if (doc.size && doc.size > doc.questions.length) out.push(`Você pediu ${doc.size} questões por tentativa, mas a prova tem só ${doc.questions.length}.`);
  return out;
}

const P = () => store("provas");
const R = () => store("provares");
const A = () => store("provaatt");
const ID_OK = /^pv[0-9a-f]{6}$/;
const isStaff = (u) => u?.role === "admin" || u?.role === "subadmin";

const audienceOf = (doc) => (doc.audience?.mode === "assigned" ? "assigned" : "all");
const seesIt = (doc, user) => isStaff(user) || (doc.status === "publicada" && (audienceOf(doc) === "all" || (doc.audience?.users || []).includes(user.id)));
const perAttempt = (doc) => (doc.size && doc.size < doc.questions.length ? doc.size : doc.questions.length);

const summary = (doc, my) => ({
  id: doc.id, title: doc.title, description: doc.description, tag: doc.tag || "Provas", passPct: doc.passPct, total: perAttempt(doc),
  status: my?.status || "new", attempts: my?.attempts || 0, bestPct: my?.bestPct ?? null, lastPct: my?.lastPct ?? null, passedAt: my?.passedAt || null,
  restricted: audienceOf(doc) === "assigned",
});

async function students(ctx) { return (await ctx.allUsers()).filter((u) => u.role === "aluno" && isLive(u)); }

async function tell(doc, by, ids) {
  const fresh = ids.filter((id) => !(doc.notified || []).includes(id));
  if (!fresh.length) return;
  await pmap(fresh, (id) => notify.notifyUser(id, "prova_nova", by, null, doc.title, "#/prova/" + doc.id).catch(() => {}), 8);
  doc.notified = [...(doc.notified || []), ...fresh].slice(-2000);
}

export async function handle(ctx, { req, method, path, url, body, user }) {
  const { json, fail, logEvent } = ctx;

  /* ───── aluno (e gestor testando) ───── */
  if (path === "provas" && method === "GET") {
    const s = await P(), r = await R();
    const keys = await s.keys({ prefix: "p:" });
    const docs = (await pmap(keys, (k) => s.get(k), 8)).filter(Boolean).filter((d) => d.status === "publicada" && seesIt(d, user));
    const mine = await pmap(docs, (d) => r.get(`${d.id}:${user.id}`), 8);
    const items = docs.map((d, i) => summary(d, mine[i])).sort((a, b) => (a.status === "approved") - (b.status === "approved") || a.title.localeCompare(b.title, "pt-BR"));
    return json({ items, pending: items.filter((x) => x.status !== "approved").length });
  }

  const m = path.match(/^provas\/([^/]+)(?:\/(start|submit))?$/);
  if (m) {
    const [, pid, action] = m;
    if (!ID_OK.test(pid)) fail(404, "Prova não encontrada.");
    const doc = await (await P()).get("p:" + pid);
    if (!doc || !seesIt(doc, user) || (doc.status !== "publicada" && !isStaff(user))) fail(404, "Prova não encontrada ou não liberada para você.");
    const rs = await R();
    const rkey = `${pid}:${user.id}`;
    const my = (await rs.get(rkey)) || null;

    if (!action && method === "GET") {
      if (doc.status !== "publicada") fail(404, "Esta prova ainda não foi publicada.");
      return json({ prova: summary(doc, my) });
    }

    if (action === "start" && method === "POST") {
      if (doc.status !== "publicada") fail(409, doc.status === "encerrada" ? "Esta prova foi encerrada." : "Esta prova ainda não foi publicada.");
      if (my?.status === "approved") fail(409, "Você já foi aprovado nesta prova.");
      const at = await A();
      if (my?.active) {
        const a = await at.get(my.active);
        if (a && !a.submittedAt && a.pid === pid) return json({ attemptId: a.id, total: a.items.length, questions: publicQuestions(a), resumed: true });
      }
      const picked = shuffle(doc.questions).slice(0, perAttempt(doc));
      const qs = Object.fromEntries(picked.map((q) => [q.id, q]));
      const att = { id: newId("pa_"), pid, userId: user.id, createdAt: now(), submittedAt: null, qs, items: picked.map((q) => ({ qid: q.id, perm: shuffle(q.options.map((_, i) => i)) })) };
      await Promise.all([
        at.set(att.id, att),
        rs.set(rkey, { ...(my || { attempts: 0, bestPct: 0, lastPct: null, status: "pending" }), active: att.id }),
        logEvent(req, "prova_avulsa_iniciada", user, { prova: pid, titulo: doc.title, total: att.items.length }),
      ]);
      return json({ attemptId: att.id, total: att.items.length, questions: publicQuestions(att) });
    }

    if (action === "submit" && method === "POST") {
      const at = await A();
      const att = await at.get(String(body.attemptId || ""));
      if (!att || att.userId !== user.id || att.pid !== pid) fail(404, "Tentativa não encontrada.");
      if (att.submittedAt) fail(409, "Esta prova já foi enviada.");
      const answers = body.answers && typeof body.answers === "object" ? body.answers : {};
      const results = att.items.map((it) => {
        const q = att.qs[it.qid];
        const shown = Array.isArray(answers[it.qid]) ? answers[it.qid] : [];
        const picked = [...new Set(shown.map(Number))].filter((i) => Number.isInteger(i) && i >= 0 && i < it.perm.length).map((i) => it.perm[i]).sort((a, b) => a - b);
        const ok = picked.length === q.answer.length && picked.every((v, i) => v === q.answer[i]);
        return { q, ok, picked };
      });
      const correct = results.filter((r) => r.ok).length;
      const total = results.length;
      const pct = total ? Math.round((correct / total) * 1000) / 10 : 0;
      const passed = pct >= doc.passPct;
      const wrong = results.filter((r) => !r.ok);
      const t = now();
      att.submittedAt = t;
      att.result = { pct, correct, total, passed };
      const next = {
        attempts: (my?.attempts || 0) + 1, bestPct: Math.max(my?.bestPct || 0, pct), lastPct: pct, lastAt: t,
        status: passed ? "approved" : "pending", ...(passed ? { passedAt: t } : my?.passedAt ? { passedAt: my.passedAt } : {}),
        name: user.name,
      };
      await Promise.all([
        at.set(att.id, att),
        rs.set(rkey, next),
        logEvent(req, "prova_avulsa_enviada", user, { prova: pid, titulo: doc.title, pct, correct, total, aprovado: passed }),
      ]);
      const reveal = passed || doc.reveal === "always";
      return json({
        result: {
          pct, correct, total, passed, passPct: doc.passPct, attempts: next.attempts,
          topics: passed ? [] : [...new Set(wrong.map((r) => r.q.topic).filter(Boolean))],
          review: reveal ? wrong.map((r) => ({ id: r.q.id, topic: r.q.topic, q: r.q.q, options: r.q.options, picked: r.picked, right: r.q.answer, why: r.q.why })) : undefined,
          hidden: !reveal && wrong.length ? wrong.length : 0,
        },
        prova: summary(doc, next),
      });
    }
    return null;
  }

  /* ───── gestor ───── */
  if (!path.startsWith("admin/provas")) return null;
  if (!can(user, "trilhas")) fail(403, "Você não tem permissão para esta área.");
  const parts = path.split("/"); // admin, provas, :id, ação
  const id = parts[2] || "";
  const action = parts[3] || "";
  const s = await P();
  const load = async () => {
    if (!ID_OK.test(id)) fail(404, "Prova não encontrada.");
    const doc = await s.get("p:" + id);
    if (!doc) fail(404, "Prova não encontrada.");
    return doc;
  };

  if (!id && method === "GET") {
    const keys = await s.keys({ prefix: "p:" });
    const docs = (await pmap(keys, (k) => s.get(k), 8)).filter(Boolean);
    const stu = await students(ctx);
    const r = await R();
    const rows = await pmap(docs, async (d) => {
      const rk = await r.keys({ prefix: d.id + ":" });
      const res = (await pmap(rk, (k) => r.get(k), 8)).filter(Boolean);
      const assigned = audienceOf(d) === "assigned" ? stu.filter((u) => (d.audience.users || []).includes(u.id)).length : stu.length;
      return {
        id: d.id, title: d.title || "(sem nome)", tag: d.tag || "", status: d.status, questions: d.questions.length, passPct: d.passPct,
        audience: audienceOf(d), assigned, students: stu.length, started: res.length, approved: res.filter((x) => x.status === "approved").length,
        updatedAt: d.updatedAt, publishedAt: d.publishedAt || null,
      };
    }, 4);
    rows.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
    return json({ provas: rows });
  }

  if (!id && method === "POST") {
    const title = line(body.title, LIMITS.title);
    if (title.length < 3) fail(400, "Dê um nome com pelo menos 3 letras.");
    const keys = await s.keys({ prefix: "p:" });
    if (keys.length >= 200) fail(400, "Limite de provas atingido. Apague alguma que não usa mais.");
    const t = now();
    const doc = {
      id: "pv" + crypto.randomBytes(3).toString("hex"), rev: 1, ...cleanContent({ title, passPct: 70, questions: [] }), status: "rascunho",
      audience: { mode: "assigned", users: [] }, notified: [], createdBy: user.id, createdAt: t, updatedAt: t,
    };
    await s.set("p:" + doc.id, doc);
    await logEvent(req, "prova_avulsa_criada", user, { prova: doc.id, titulo: title });
    return json({ prova: doc }, 201);
  }

  if (id && !action && method === "GET") return json({ prova: await load() });

  if (id && !action && method === "PUT") {
    const doc = await load();
    if (Number(body.rev) !== doc.rev) fail(409, "Outra pessoa salvou esta prova depois que você abriu. Recarregue a página para não perder o trabalho dela.", { rev: doc.rev });
    const next = { ...doc, ...cleanContent(body, doc), rev: doc.rev + 1, updatedAt: now() };
    if (next.status === "publicada") {
      const p = problems(next);
      if (p.length) fail(400, "Para salvar uma prova publicada, corrija: " + p[0], { problems: p });
    }
    await s.set("p:" + id, next);
    return json({ prova: next });
  }

  if (id && !action && method === "DELETE") {
    await load();
    const r = await R();
    const rk = await r.keys({ prefix: id + ":" });
    await Promise.all([s.delete("p:" + id), ...rk.map((k) => r.delete(k))]);
    await logEvent(req, "prova_avulsa_apagada", user, { prova: id });
    return json({ ok: true });
  }

  if (action === "status" && method === "POST") {
    const doc = await load();
    const to = STATUS.includes(body.status) ? body.status : "";
    if (!to) fail(400, "Situação inválida.");
    if (to === "publicada") {
      const p = problems(doc);
      if (p.length) fail(400, "Ainda não dá para publicar: " + p[0], { problems: p });
    }
    doc.status = to;
    if (to === "publicada" && !doc.publishedAt) doc.publishedAt = now();
    if (to === "publicada") {
      const stu = await students(ctx);
      await tell(doc, user, audienceOf(doc) === "all" ? stu.map((u) => u.id) : stu.filter((u) => doc.audience.users.includes(u.id)).map((u) => u.id));
    }
    doc.updatedAt = now(); doc.rev++;
    await s.set("p:" + id, doc);
    await logEvent(req, "prova_avulsa_situacao", user, { prova: id, titulo: doc.title, situacao: to });
    return json({ prova: doc });
  }

  if (action === "audience" && (method === "GET" || method === "PUT")) {
    const doc = await load();
    const stu = await students(ctx);
    const has = new Set(doc.audience?.users || []);
    if (method === "GET") {
      return json({
        mode: audienceOf(doc),
        students: stu.map((u) => ({ id: u.id, name: u.name, email: u.email, nickname: u.nickname || null, avatar: u.avatar || null, has: has.has(u.id) }))
          .sort((a, b) => a.name.localeCompare(b.name, "pt-BR")),
      });
    }
    const assigned = body.mode === "assigned";
    const want = [...new Set((Array.isArray(body.users) ? body.users : []).map(String))].filter((x) => stu.some((u) => u.id === x));
    doc.audience = { mode: assigned ? "assigned" : "all", users: assigned ? want : [] };
    if (doc.status === "publicada") await tell(doc, user, assigned ? want : stu.map((u) => u.id));
    doc.updatedAt = now(); doc.rev++;
    await s.set("p:" + id, doc);
    await logEvent(req, "prova_avulsa_audiencia", user, { prova: id, quem: assigned ? `${want.length} escolhidos` : "todos os alunos" });
    return json({ ok: true, mode: doc.audience.mode, assigned: assigned ? want.length : stu.length, rev: doc.rev });
  }

  if (action === "results" && method === "GET") {
    const doc = await load();
    const stu = await students(ctx);
    const r = await R();
    const inAud = audienceOf(doc) === "all" ? stu : stu.filter((u) => doc.audience.users.includes(u.id));
    const res = await pmap(inAud, (u) => r.get(`${id}:${u.id}`), 8);
    const rows = inAud.map((u, i) => ({
      id: u.id, name: u.name, email: u.email, nickname: u.nickname || null, avatar: u.avatar || null,
      status: res[i]?.status || "new", attempts: res[i]?.attempts || 0, bestPct: res[i]?.bestPct ?? null, lastPct: res[i]?.lastPct ?? null, lastAt: res[i]?.lastAt || null, passedAt: res[i]?.passedAt || null,
    })).sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    return json({ prova: { id, title: doc.title, passPct: doc.passPct, status: doc.status }, rows });
  }
  return null;
}

// O que o aluno recebe: sem gabarito, alternativas na ordem sorteada.
function publicQuestions(att) {
  return att.items.map((it, n) => {
    const q = att.qs[it.qid];
    return { n: n + 1, id: q.id, type: q.answer.length > 1 ? "multi" : "single", topic: q.topic, q: q.q, options: it.perm.map((o) => q.options[o]) };
  });
}

export const _internal = { cleanContent, problems };

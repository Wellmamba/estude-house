/* Base: DOM, API, sessão, toasts, modal, formatação. Tudo sob window.M */
(function () {
  const M = (window.M = window.M || {});

  /* ───── DOM ───── */
  M.h = function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v == null || v === false) continue;
        if (k === "class") el.className = v;
        else if (k === "html") el.innerHTML = v;
        else if (k === "text") el.textContent = v;
        else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
        else if (k === "dataset") Object.assign(el.dataset, v);
        else if (v === true) el.setAttribute(k, "");
        else el.setAttribute(k, v);
      }
    }
    append(el, kids);
    return el;
  };
  function append(el, kids) {
    for (const k of kids.flat(Infinity)) {
      if (k == null || k === false) continue;
      el.append(k.nodeType ? k : document.createTextNode(String(k)));
    }
  }
  /* replaceChildren ignora null/false e aceita listas aninhadas (evita o texto "null" na tela) */
  const nativeReplace = Element.prototype.replaceChildren;
  Element.prototype.replaceChildren = function (...kids) {
    return nativeReplace.apply(this, kids.flat(Infinity).filter((k) => k != null && k !== false));
  };
  M.svg = function svg(markup) {
    const t = document.createElement("template");
    t.innerHTML = markup.trim();
    return t.content.firstChild;
  };
  M.esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  M.mount = function (el) {
    const app = document.getElementById("app");
    app.replaceChildren(el);
    return el;
  };

  /* ───── armazenamento seguro ───── */
  M.store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} },
    del(k) { try { localStorage.removeItem(k); } catch {} },
  };

  /* ───── API ───── */
  M.session = { token: M.store.get("ma.token") || "", user: null, progress: null, rules: null };
  M.setToken = (t) => { M.session.token = t || ""; t ? M.store.set("ma.token", t) : M.store.del("ma.token"); };

  /* Pede de novo (até 2 vezes, com espera crescente e aleatória) quando o servidor falha por instantes
     (erro 5xx ou queda de rede). Só repete leituras, login e conclusão de aula, que podem ser enviados
     duas vezes sem efeito colateral. A espera aleatória evita que muitos alunos repitam ao mesmo tempo. */
  const SAFE_RETRY = (method, path) => method === "GET" || path === "progress/lesson" || path === "auth/login";
  const WAITS = [700, 1800];
  M.api = async function api(method, path, body) {
    for (let i = 0; ; i++) {
      try {
        return await apiOnce(method, path, body);
      } catch (e) {
        const again = SAFE_RETRY(method, path) && (e.status >= 500 || e.status === 0) && i < WAITS.length;
        if (!again) throw e;
        await new Promise((r) => setTimeout(r, WAITS[i] + Math.random() * 500));
      }
    }
  };
  async function apiOnce(method, path, body) {
    const headers = {};
    if (body !== undefined) headers["content-type"] = "application/json";
    if (M.session.token) headers.authorization = "Bearer " + M.session.token;
    let res;
    try {
      res = await fetch("/api/" + path, { method, headers, body: body !== undefined ? JSON.stringify(body) : undefined });
    } catch {
      throw Object.assign(new Error("Sem conexão com o servidor. Verifique a internet e tente de novo."), { status: 0 });
    }
    let data = null;
    try { data = await res.json(); } catch {}
    if (!res.ok) {
      let msg = data?.error || (res.status === 404 ? "O servidor da plataforma não respondeu. Confira se as Functions do Netlify estão publicadas." : "Algo deu errado. Tente novamente.");
      if (data?.detail) msg += ` (${data.detail})`;
      const err = Object.assign(new Error(msg), { status: res.status, data });
      if (res.status === 401 && M.session.token && path !== "auth/login") {
        M.setToken(""); M.session.user = null;
        if (M.onSessionLost) M.onSessionLost(msg);
      }
      throw err;
    }
    return data;
  }
  M.get = (p) => M.api("GET", p);
  M.post = (p, b) => M.api("POST", p, b || {});

  /* ───── toasts ───── */
  M.toast = function (msg, kind) {
    const box = document.getElementById("toasts");
    const t = M.h("div", { class: "toast " + (kind || ""), role: kind === "err" ? "alert" : "status", text: msg });
    box.append(t);
    setTimeout(() => t.remove(), kind === "err" ? 7000 : 3800);
  };

  /* ───── modal ───── */
  M.modal = function (build) {
    return new Promise((resolve) => {
      const dlg = M.h("dialog");
      const close = (v) => { dlg.close(); dlg.remove(); resolve(v); };
      const body = build(close);
      dlg.append(M.h("div", { class: "dlg" }, body));
      dlg.addEventListener("cancel", () => { dlg.remove(); resolve(undefined); });
      document.body.append(dlg);
      dlg.showModal();
    });
  };
  M.confirm = function ({ title, text, ok = "Confirmar", danger = false }) {
    return M.modal((close) => [
      M.h("h3", { text: title }),
      M.h("p", { class: "muted", html: text }),
      M.h("div", { class: "dlg-actions" },
        M.h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(false), text: "Cancelar" }),
        M.h("button", { class: "btn " + (danger ? "btn-danger" : "btn-gold"), type: "button", onclick: () => close(true), text: ok })),
    ]);
  };

  /* ───── formatação ───── */
  M.fmtDate = (ts) => (ts ? new Date(ts).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" }) : "—");
  M.fmtDateTime = (ts) => (ts ? new Date(ts).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit" }) : "—");
  M.firstName = (n) => String(n || "").trim().split(/\s+/)[0] || "";
  M.fmtPct = (n) => String(Math.round(n * 10) / 10).replace(".", ",");
  M.pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

  /* ───── currículo: consultas (várias trilhas) ───── */
  /* Cada trilha se registra em window.TRILHAS (ver public/trilhas/<nome>/content.js).
     Ids de módulos, aulas e provas finais são únicos entre todas as trilhas. */
  M.trails = () => window.TRILHAS || [];
  M.trailById = (id) => M.trails().find((t) => t.id === id) || null;
  M.trailOfModule = (id) => M.trails().find((t) => t.modules.some((m) => m.id === id)) || null;
  M.trailOfLesson = (id) => M.trails().find((t) => t.modules.some((m) => m.lessons.some((l) => l.id === id))) || null;
  M.finalScope = (t) => t.finalScope || "final";
  M.trailOfFinal = (scope) => M.trails().find((t) => M.finalScope(t) === scope) || null;
  M.isFinal = (scope) => !!M.trailOfFinal(scope);
  M.trailOfScope = (scope) => M.trailOfFinal(scope) || M.trailOfModule(scope);
  M.trailHref = (t) => "#/t/" + t.id;
  M.curso = () => M.trails()[0];
  M.modulo = (id) => { for (const t of M.trails()) { const m = t.modules.find((x) => x.id === id); if (m) return m; } return undefined; };
  M.aula = (id) => {
    for (const t of M.trails()) {
      for (const m of t.modules) {
        const i = m.lessons.findIndex((l) => l.id === id);
        if (i >= 0) return { trail: t, mod: m, lesson: m.lessons[i], index: i };
      }
    }
    return null;
  };
  M.totalLessons = (t) => (t || M.curso()).modules.reduce((a, m) => a + m.lessons.length, 0);
  /* andamento do aluno em uma trilha: { modules[], finalUnlocked, finalStatus, lessonsDone, lessonsTotal, modulesApproved } */
  M.tp = (t, progress) => (progress || M.session.progress)?.trails?.[t.id];
  /* quantas questões a prova sorteia */
  M.examSize = (scope) => {
    const ex = M.session.rules?.examSize || {};
    const fin = M.trailOfFinal(scope);
    if (fin) return fin.finalSize || ex.final || 30;
    return ex[scope] || ex.module || 12;
  };
  M.isAdmin = () => M.session.user?.role === "admin";

  /* ───── ícones (traço simples, um único estilo) ───── */
  const P = {
    home: "M3 11 12 3l9 8M5 10v10h14V10",
    book: "M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3zM4 17a3 3 0 0 1 3-3h11",
    cert: "M5 3h14v14H5zM9 21l3-3 3 3M8 8h8M8 12h5",
    user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M4 21c0-4 4-6 8-6s8 2 8 6",
    shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
    users: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M2 20c0-3.5 3-5.5 7-5.5M16 11a3 3 0 1 0 0-6M17 14.5c3 .3 5 2 5 5.5",
    list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    help: "M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7M12 17h.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18",
    out: "M9 4H5v16h4M16 8l4 4-4 4M20 12H9",
    menu: "M4 7h16M4 12h16M4 17h16",
    check: "M5 12.5 10 17 19 7",
    lock: "M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3",
    arrow: "M5 12h14M13 6l6 6-6 6",
    back: "M19 12H5M11 6l-6 6 6 6",
  };
  M.icon = (name, size = 20) =>
    M.svg(`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${P[name] || ""}"/></svg>`);

  /* marca: aro de basquete */
  M.brand = function (href) {
    return M.h("a", { class: "brand", href: href || "#/" },
      M.h("span", { class: "brand-mark" }, M.svg(
        `<svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="9" fill="none" stroke="#fdb927" stroke-width="3.2"/><path d="M7 16h18M16 7c3 3 3 15 0 18M16 7c-3 3-3 15 0 18" stroke="#fdb927" stroke-width="1.6" fill="none" opacity=".75"/></svg>`)),
      M.h("span", { class: "brand-name" }, "Estude House", M.h("small", { text: "Ambiente de estudos da Mamba" })));
  };

  /* rótulos de exame; com `withTrail`, acrescenta o nome da trilha (útil quando há mais de uma) */
  M.examName = (scope, withTrail) => {
    const fin = M.trailOfFinal(scope);
    const t = fin || M.trailOfModule(scope);
    const base = fin ? "Prova final" : "Prova do módulo " + (M.modulo(scope)?.n ?? scope);
    return withTrail && t && M.trails().length > 1 ? `${base} · ${t.title}` : base;
  };
})();

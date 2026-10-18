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

  /* ───── tipo de tela: celular ou computador (escolha salva neste aparelho) ───── */
  const MODE_KEY = "eh-mode";
  M.getMode = () => { try { const m = localStorage.getItem(MODE_KEY); return m === "mobile" || m === "pc" ? m : null; } catch { return null; } };
  M.effectiveMode = () => M.getMode() || (matchMedia("(max-width: 860px)").matches ? "mobile" : "pc");
  M.setMode = (m) => {
    try { if (m) localStorage.setItem(MODE_KEY, m); else localStorage.removeItem(MODE_KEY); } catch {}
    location.reload(); // recarrega para o navegador reler o tamanho da tela
  };
  M.BUILD = "2026-10-18-n"; // igual ao BUILD de netlify/functions/api.mjs
  M.modeSwitch = function ({ label = true } = {}) {
    const cur = M.effectiveMode(), saved = M.getMode();
    const opt = (k, icon, text) => M.h("button", { type: "button", class: "mode-opt", "aria-pressed": String(cur === k), onclick: () => { if (saved !== k) M.setMode(k); } }, M.icon(icon, 18), M.h("span", { text }));
    return M.h("div", { class: "mode-switch" },
      label ? M.h("span", { class: "mode-label", id: "mode-label", text: "Ver o sistema no" }) : null,
      M.h("div", { class: "mode-btns", role: "group", "aria-labelledby": label ? "mode-label" : null, "aria-label": label ? null : "Tipo de tela" }, opt("mobile", "phone", "Celular"), opt("pc", "monitor", "Computador")),
      saved ? M.h("button", { type: "button", class: "linkish mode-auto", onclick: () => M.setMode(null), text: "Voltar ao automático" }) : null);
  };

  /* endereços das telas principais */
  M.homeHref = "#/";
  M.trailsHref = "#/trilhas";
  /* XP total = XP das trilhas + XP de engajamento */
  M.totalXp = () => (M.session.progress?.xp || 0) + (M.session.engage?.xp || 0);

  /* ───── pessoas ───── */
  const AV = ["#6b3fa0", "#8a52c8", "#4d2c86", "#b07d12", "#7a4bb3", "#a35fd1", "#5a3a9e", "#c28a14"];
  M.avatar = function (p, size = 40) {
    const name = p?.name || "?";
    const init = name.trim().split(/\s+/).slice(0, 2).map((x) => x[0]).join("").toUpperCase();
    let hsh = 0; for (const ch of String(p?.id || name)) hsh = (hsh * 31 + ch.charCodeAt(0)) >>> 0;
    const el = M.h("span", { class: "avatar" + (p?.role === "admin" || p?.role === "subadmin" ? " is-admin" : "") + (p?.avatar ? " has-img" : ""), "aria-hidden": "true", style: `width:${size}px;height:${size}px;font-size:${Math.round(size * 0.38)}px;background:${AV[hsh % AV.length]}`, text: p?.avatar ? "" : init });
    if (p?.avatar) {
      const img = M.h("img", { src: M.avatarUrl(p.avatar, size * 2), alt: "", loading: "lazy", decoding: "async" });
      img.addEventListener("error", () => { img.remove(); el.classList.remove("has-img"); el.textContent = init; });
      el.append(img);
    }
    return el;
  };
  /* foto de perfil: recorte quadrado leve, servido pelo Cloudinary */
  M.avatarUrl = (url, px) => (String(url).includes("/image/upload/") ? String(url).replace("/image/upload/", `/image/upload/c_fill,g_auto,w_${px},h_${px},f_auto,q_auto/`) : url);
  M.profileHref = (p) => "#/u/" + encodeURIComponent(p.nickname || p.id);
  M.timeAgo = function (ts) {
    const s = Math.max(0, (Date.now() - ts) / 1000);
    if (s < 60) return "agora";
    if (s < 3600) return Math.floor(s / 60) + " min";
    if (s < 86400) return Math.floor(s / 3600) + " h";
    if (s < 7 * 86400) return Math.floor(s / 86400) + " d";
    return new Date(ts).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
  };

  /* ───── currículo: consultas (várias trilhas) ───── */
  /* Cada trilha se registra em window.TRILHAS (ver public/trilhas/<nome>/content.js).
     Ids de módulos, aulas e provas finais são únicos entre todas as trilhas. */
  /* Trilhas nativas (window.TRILHAS) + trilhas criadas no construtor (M.customTrails, vindas do servidor).
     Trilha inativa some para o aluno; o gestor vê todas. */
  M.customTrails = [];
  M.allTrails = () => [...(window.TRILHAS || []), ...M.customTrails];
  M.isInactive = (id) => (M.session.inactive || []).includes(id);
  M.isRestricted = (id) => (M.session.restricted || []).includes(id);
  /* aluno só enxerga trilha ativa e (liberada para todos ou atribuída a ele); o servidor manda a lista das escondidas */
  M.trails = () => (M.isAdmin() ? M.allTrails() : M.allTrails().filter((t) => !M.isInactive(t.id) && !(M.session.hidden || []).includes(t.id)));
  /* baixa as trilhas criadas quando a versão mudou (o /me traz o número da versão) */
  M.syncCustomTrails = async function (ctv) {
    if (ctv == null || ctv === M.ctv) return;
    const d = await M.get("trails/custom" + (M.ctv != null ? "?v=" + M.ctv : ""));
    if (!d.same) M.customTrails = d.trails || [];
    M.ctv = d.ver ?? ctv;
  };
  M.trailById = (id) => M.trails().find((t) => t.id === id) || null;
  M.trailOfModule = (id) => M.trails().find((t) => t.modules.some((m) => m.id === id)) || null;
  M.trailOfLesson = (id) => M.trails().find((t) => t.modules.some((m) => m.lessons.some((l) => l.id === id))) || null;
  M.finalScope = (t) => t.finalScope || "final";
  M.trailOfFinal = (scope) => M.trails().find((t) => M.finalScope(t) === scope) || null;
  M.isFinal = (scope) => !!M.trailOfFinal(scope);
  M.trailOfScope = (scope) => M.trailOfFinal(scope) || M.trailOfModule(scope);
  M.trailHref = (t) => "#/t/" + t.id;
  M.curso = () => M.allTrails()[0];
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
    return M.modulo(scope)?.examSize || ex[scope] || ex.module || 12;
  };
  /* gestor = administrador ou sub-administrador. O que cada um pode fazer vem das permissões. */
  M.isAdmin = () => ["admin", "subadmin"].includes(M.session.user?.role);
  M.isFull = () => M.session.user?.role === "admin";
  M.can = (perm) => { const u = M.session.user; return !!u && (u.role === "admin" || (u.role === "subadmin" && (u.perms || []).includes(perm))); };
  M.PERMS = [
    { k: "aprovar", label: "Aprovações", desc: "Aprovar cadastros e posts do feed" },
    { k: "moderar", label: "Moderação", desc: "Remover posts e comentários, gerenciar tags e o filtro de palavras" },
    { k: "publicar", label: "Publicar", desc: "Publicar direto no feed, criar enquetes, fixar posts, usar @todos e gerenciar os Destaques" },
    { k: "forum", label: "Fórum", desc: "Escrever o Fórum oficial e aprovar as dúvidas e sugestões dos alunos" },
    { k: "trilhas", label: "Trilhas", desc: "Criar, editar, ativar e desativar trilhas e ver o banco de questões" },
    { k: "engajamento", label: "Engajamento", desc: "Configurar XP, metas e regras de engajamento" },
    { k: "usuarios", label: "Acessos e painel", desc: "Ver o painel, os alunos e os registros; criar acessos de aluno e zerar progresso" },
  ];
  M.roleLabel = (u) => (u?.master ? "Master" : u?.role === "admin" ? "Administrador" : u?.role === "subadmin" ? "Sub-administrador" : "Aluno");

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
    rocket: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14M21 21l-5-5",
    chat: "M4 5h16v11H9l-5 4zM8 9h8M8 12h5",
    image: "M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4M9 9.5h.01",
    phone: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2",
    monitor: "M3 4h18v12H3zM8 20h8M12 16v4",
    camera: "M4 8h3l2-3h6l2 3h3v11H4zM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
    video: "M4 6h11v12H4zM15 10l5-3v10l-5-3",
    link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1",
    file: "M6 3h8l5 5v13H6zM14 3v5h5M9 13h7M9 17h7",
    clip: "M20 11l-8.5 8.5a5 5 0 0 1-7-7L13 4a3.3 3.3 0 0 1 4.7 4.7l-8.6 8.6a1.7 1.7 0 0 1-2.4-2.4L14 7",
    trophy: "M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v2a3 3 0 0 0 4 3M16 6h4v2a3 3 0 0 1-4 3M12 13v4M8 21h8M10 17h4",
    star: "M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.3l1-6.2L3 9.7l6.2-.9z",
    send: "M4 12l16-8-6 17-3-7zM11 14l4-4",
    x: "M6 6l12 12M18 6 6 18",
    plus: "M12 5v14M5 12h14",
    trash: "M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13M10 11v6M14 11v6",
    flag: "M5 21V4M5 5h12l-2 4 2 4H5",
    inbox: "M4 13l2-8h12l2 8M4 13v6h16v-6M4 13h5l1 2h4l1-2h5",
    bolt: "M13 3 5 13h6l-1 8 8-10h-6z",
    smile: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.5 14.2s1.2 2 3.5 2 3.5-2 3.5-2M9 9.5h.01M15 9.5h.01",
    bell: "M6 9a6 6 0 0 1 12 0c0 6 2.5 8 2.5 8h-17S6 15 6 9M10.3 20.5a2 2 0 0 0 3.4 0",
    tag: "M3 3h8.2l9.8 9.8a1.5 1.5 0 0 1 0 2.1l-5.2 5.2a1.5 1.5 0 0 1-2.1 0L3 10.3zM7.5 7.5h.01",
    pin: "M12 17v5M8 3h8l-1 6 3 4H6l3-4zM6 13h12",
    chart: "M5 20V11M12 20V4M19 20v-6",
    more: "M5 12h.01M12 12h.01M19 12h.01",
    pause: "M8 5v14M16 5v14", play: "M7 4l13 8-13 8z", edit: "M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z",
    vol: "M11 5L6 9H2v6h4l5 4V5zM15.5 8.5a5 5 0 010 7M19 5a9 9 0 010 14", mute: "M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6",
    up: "M12 19V5M5 12l7-7 7 7", down: "M12 5v14M19 12l-7 7-7-7",
  };
  M.icon = (name, size = 20) =>
    M.svg(`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${P[name] || ""}"/></svg>`);

  /* logo: bola de basquete */
  M.ballSvg = (size = 24) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14" fill="#f58220"/><path d="M16 2v28M2 16h28M5.6 5.6C11 10.5 11 21.5 5.6 26.4M26.4 5.6C21 10.5 21 21.5 26.4 26.4" fill="none" stroke="#2a1206" stroke-width="1.7" stroke-linecap="round"/><circle cx="16" cy="16" r="14" fill="none" stroke="#2a1206" stroke-width="1.7"/></svg>`;

  /* marca: BRYANT SHOOT + bola de basquete */
  M.brand = function (href) {
    return M.h("a", { class: "brand", href: href || "#/" },
      M.h("span", { class: "brand-mark" }, M.svg(M.ballSvg(26))),
      M.h("span", { class: "brand-name" }, "BRYANT SHOOT", M.h("small", { text: "Ambiente de estudos da Mamba" })));
  };

  /* rótulos de exame; com `withTrail`, acrescenta o nome da trilha (útil quando há mais de uma) */
  M.examName = (scope, withTrail) => {
    const fin = M.trailOfFinal(scope);
    const t = fin || M.trailOfModule(scope);
    const base = fin ? "Prova final" : "Prova do módulo " + (M.modulo(scope)?.n ?? scope);
    return withTrail && t && M.trails().length > 1 ? `${base} · ${t.title}` : base;
  };
})();

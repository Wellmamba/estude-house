/* Roteador por hash e inicialização. */
(function () {
  const { h } = M;
  let seq = 0;

  const T = (text) => ({ text });
  const trailCrumb = (t) => ({ text: t.title, href: M.trailHref(t) });
  const routes = [
    [/^#?\/?$/, "home", () => ({ key: "home", crumbs: [T("Feed")], view: () => M.views.home() })],
    [/^#\/trilhas$/, "trails", () => ({ key: "trails", crumbs: [T("Trilhas")], view: () => M.views.trails() })],
    [/^#\/post\/([\w-]+)$/, "post", (m) => ({ key: "home", crumbs: [{ text: "Feed", href: "#/" }, T("Post")], view: () => M.views.post(m[1]) })],
    [/^#\/u\/([^/?]+)$/, "profile", (m) => ({ key: "home", crumbs: [{ text: "Feed", href: "#/" }, T("Perfil")], view: () => M.views.profile(decodeURIComponent(m[1])) })],
    [/^#\/forum\/envios$/, "forum-envios", () => ({ key: "forum-envios", crumbs: [T("Dúvidas e sugestões")], view: () => M.views.forumEnvios() })],
    [/^#\/forum\/([\w-]+)$/, "search", (m) => ({ key: "search", crumbs: [{ text: "Busca", href: "#/busca" }, T("Fórum")], view: () => M.views.forumPost(m[1]) })],
    [/^#\/admin\/forum(?:\?(.*))?$/, "admin", (m) => { const q = new URLSearchParams(m[1] || ""); return { key: "admin-forum", crumbs: [T("Administração"), T("Fórum")], view: () => M.views.forumAdmin(q.get("e") || "", q.get("tab") || ""), wide: false }; }],
    [/^#\/ranking$/, "rank", () => ({ key: "rank", crumbs: [T("Ranking")], view: () => M.views.ranking() })],
    [/^#\/busca(?:\?(.*))?$/, "search", (m) => { const q = new URLSearchParams(m[1] || ""); return { key: "search", crumbs: [T("Busca")], view: () => M.views.search(q.get("q") || "", q.get("tag") || "") }; }],
    [/^#\/tag\/([\w-]+)$/, "tag", (m) => ({ key: "home", crumbs: [{ text: "Feed", href: "#/" }, T("Tag")], view: () => M.views.home({ tag: m[1] }) })],
    [/^#\/admin\/trilhas$/, "admin", () => ({ key: "admin-trails", crumbs: [T("Administração"), T("Trilhas")], view: () => M.views.adminTrails(), wide: true })],
    [/^#\/admin\/trilhas\/(c[0-9a-f]{6})$/, "admin", (m) => ({ key: "admin-trails", crumbs: [T("Administração"), { text: "Trilhas", href: "#/admin/trilhas" }, T("Editor")], view: () => M.views.trailBuilder(m[1]), wide: true, bare: true })],
    [/^#\/admin\/tags$/, "admin", () => ({ key: "admin-tags", crumbs: [T("Administração"), T("Tags e moderação")], view: () => M.views.adminTags(), wide: true })],
    [/^#\/admin\/aprovacoes$/, "admin", () => ({ key: "admin-approve", crumbs: [T("Administração"), T("Aprovações")], view: () => M.views.adminApprovals(), wide: true })],
    [/^#\/admin\/engajamento$/, "admin", () => ({ key: "admin-engage", crumbs: [T("Administração"), T("Engajamento")], view: () => M.views.adminEngage(), wide: true })],
    [/^#\/t\/([\w-]+)$/, "trail", (m) => ({ key: "trails", crumbs: [{ text: "Trilhas", href: M.trailsHref }, T(M.trailById(m[1])?.title || "Trilha")], view: () => M.views.trail(m[1]) })],
    [/^#\/m\/([\w-]+)$/, "module", (m) => { const t = M.trailOfModule(m[1]); return { key: "trails", crumbs: [{ text: "Trilhas", href: M.trailsHref }, t ? trailCrumb(t) : T("Trilha"), T("Módulo " + (M.modulo(m[1])?.n ?? ""))], view: () => M.views.module(m[1]) }; }],
    [/^#\/l\/([\w-]+)$/, "lesson", (m) => { const t = M.aula(m[1])?.trail; return { key: "trails", crumbs: [{ text: "Trilhas", href: M.trailsHref }, t ? trailCrumb(t) : T("Trilha")], view: () => M.views.lesson(m[1]) }; }],
    [/^#\/exam\/([\w-]+)$/, "exam", (m) => { const t = M.trailOfScope(m[1]); return { key: "trails", crumbs: [{ text: "Trilhas", href: M.trailsHref }, t ? trailCrumb(t) : T("Trilha"), T(M.examName(m[1]))], view: () => M.views.exam(m[1]) }; }],
    [/^#\/cert$/, "cert", () => ({ key: "cert", crumbs: [T("Certificados")], view: () => M.views.cert() })],
    [/^#\/cert\/([\w-]+)$/, "cert", (m) => ({ key: "cert", crumbs: [{ text: "Certificados", href: "#/cert" }, T(M.trailById(m[1])?.title || "Certificado")], view: () => M.views.cert(m[1]) })],
    [/^#\/conta$/, "conta", () => ({ key: "conta", crumbs: [{ text: "Minha conta" }], view: () => M.views.account() })],
    [/^#\/admin$/, "admin", () => ({ key: "admin", crumbs: [{ text: "Administração" }, { text: "Painel" }], view: () => M.views.adminHome(), wide: true })],
    [/^#\/admin\/usuarios$/, "admin", () => ({ key: "admin-users", crumbs: [{ text: "Administração" }, { text: "Acessos" }], view: () => M.views.adminUsers(), wide: true })],
    [/^#\/admin\/usuarios\/([\w-]+)$/, "admin", (m) => ({ key: "admin-users", crumbs: [{ text: "Administração" }, { text: "Acessos", href: "#/admin/usuarios" }, { text: "Pessoa" }], view: () => M.views.adminUser(m[1]), wide: true })],
    [/^#\/admin\/logs$/, "admin", () => ({ key: "admin-logs", crumbs: [{ text: "Administração" }, { text: "Logs" }], view: () => M.views.adminLogs(), wide: true })],
    [/^#\/admin\/perguntas$/, "admin", () => ({ key: "admin-q", crumbs: [{ text: "Administração" }, { text: "Banco de questões" }], view: () => M.views.adminQuestions(), wide: true })],
  ];

  M.render = async function render() {
    const my = ++seq;
    const hash = location.hash || "#/";

    /* ativar acesso por link ou código (não precisa de sessão) */
    if (/^#\/ativar/.test(hash)) {
      M.resetShell();
      M.mount(M.views.activate(hash.split("?")[1] || ""));
      document.title = "Ativar acesso · Estude House";
      return;
    }

    /* telas sem sessão */
    if (/^#\/(entrar|cadastro)$/.test(hash)) {
      if (M.session.token && !M.session.user) { try { await M.refreshMe(); } catch {} if (my !== seq) return; }
      if (M.session.token && M.session.user) { location.hash = "#/"; return; }
      M.resetShell();
      M.mount(M.views.auth(hash === "#/cadastro" ? "cadastro" : "entrar"));
      document.title = "Entrar · Estude House";
      return;
    }
    if (!M.session.token) { location.hash = "#/entrar"; return; }

    if (!M.session.user) {
      M.mount(M.loading("Carregando…"));
      try { await M.refreshMe(); }
      catch (e) {
        if (e.status === 401) { location.hash = "#/entrar"; return; }
        M.mount(h("div", { class: "empty", style: "margin:80px auto;max-width:520px" }, h("h3", { text: "Não foi possível conectar" }), h("p", { text: e.message }),
          h("button", { class: "btn btn-gold", type: "button", onclick: () => M.render(), text: "Tentar de novo" })));
        return;
      }
      if (my !== seq) return;
    }

    let def = null;
    for (const [re, , build] of routes) {
      const m = hash.match(re);
      if (m) { def = build(m); break; }
    }
    if (!def) { M.setPage("home", [{ text: "Página não encontrada" }], M.notFound()); return; }
    if (def.key.startsWith("admin")) {
      /* cada área do menu pede uma permissão; sem ela, a pessoa vai para a primeira área que pode usar */
      const NEED = { admin: "usuarios", "admin-users": "usuarios", "admin-logs": "usuarios", "admin-q": "trilhas", "admin-trails": "trilhas", "admin-tags": "moderar", "admin-approve": "aprovar", "admin-engage": "engajamento", "admin-forum": "forum" };
      if (!M.isAdmin()) { location.hash = "#/"; return; }
      if (NEED[def.key] && !M.can(NEED[def.key])) {
        const first = [["usuarios", "#/admin"], ["aprovar", "#/admin/aprovacoes"], ["forum", "#/admin/forum"], ["moderar", "#/admin/tags"], ["trilhas", "#/admin/trilhas"], ["engajamento", "#/admin/engajamento"]].find(([k]) => M.can(k));
        location.hash = first ? first[1] : "#/"; return;
      }
    }
    if (def.key === "forum-envios" && M.session.user.role !== "aluno") { location.hash = M.can("forum") ? "#/admin/forum?tab=envios" : "#/"; return; }

    M.setPage(def.key, def.crumbs, M.loading());
    try {
      const node = await def.view();
      if (my !== seq) return;
      M.setPage(def.key, node._crumbs || def.crumbs, node, { wide: def.wide });
      document.title = (node._crumbs ? node._crumbs[node._crumbs.length - 1].text : def.crumbs[def.crumbs.length - 1].text) + " · Estude House";
    } catch (e) {
      if (my !== seq || e.status === 401) return;
      M.setPage(def.key, def.crumbs, h("div", { class: "empty" }, h("h3", { text: "Não foi possível abrir esta página" }), h("p", { text: e.message }),
        h("button", { class: "btn btn-gold", type: "button", onclick: () => M.render(), text: "Tentar de novo" })));
    }
  };

  M.onSessionLost = (msg) => {
    M.resetShell();
    location.hash = "#/entrar";
    M.toast(msg || "Sessão expirada. Entre novamente.", "err");
  };

  window.addEventListener("hashchange", () => M.render());
  M.render();
})();

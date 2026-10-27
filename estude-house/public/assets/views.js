/* Telas do aluno: entrada, casca, trilha, módulo, aula, conta, certificado. */
(function () {
  const { h, svg } = M;
  M.views = M.views || {};

  M.go = (hash) => { if (location.hash === hash) M.render(); else location.hash = hash; };
  M.refreshMe = async function () {
    const d = await M.get("me");
    /* se o admin mudou o perfil ou as permissões desta pessoa, o menu lateral é refeito */
    const sig = (x) => (x ? x.role + "|" + (x.perms || []).join(",") : "");
    const changed = !!M.session.user && sig(M.session.user) !== sig(d.user);
    M.session.user = d.user; M.session.progress = d.progress; M.session.rules = d.rules; M.session.inactive = d.inactive || []; M.session.restricted = d.restricted || []; M.session.cats = d.cats || { list: [], map: {} }; M.session.hidden = d.hidden || [];
    if (changed) M.resetShell();
    try { await M.syncCustomTrails(d.ctv); } catch (e) { console.warn("trilhas criadas não carregaram", e); }
    M.session.engage = d.engage || { xp: 0, streak: 0, checkedToday: false }; M.session.pending = d.pending || 0; M.session.pendingSignups = d.pendingSignups || 0; M.session.pendingForum = d.pendingForum || 0; M.session.unread = d.unread || 0; M.session.destaques = d.destaques || 0;
    if (M.updateBell) M.updateBell();
    return d;
  };

  /* ───── playbook: a trilha desenhada como jogada ───── */
  function wrapLabel(s, max = 15) {
    const words = s.split(" "); const lines = [""];
    for (const w of words) {
      const cur = lines[lines.length - 1];
      if ((cur + " " + w).trim().length <= max || !cur) lines[lines.length - 1] = (cur + " " + w).trim();
      else lines.push(w);
    }
    return lines.slice(0, 2);
  }

  M.playbook = function (progress, { interactive = true, trail } = {}) {
    const t = trail || M.curso();
    const mods = t.modules;
    const n = mods.length + 1;
    const W = 1000, stepX = (W - 120) / (n - 1);
    const pts = Array.from({ length: n }, (_, i) => ({ x: 60 + i * stepX, y: i % 2 ? 78 : 168 }));
    const p = progress;
    const stateOf = (i) => {
      if (!p) return i === 0 ? "avail" : "locked";
      if (i < mods.length) {
        const st = p.modules[i];
        if (st.exam === "approved") return "done";
        return st.unlocked || M.isAdmin() ? "avail" : "locked";
      }
      if (p.finalStatus === "approved") return "done";
      return p.finalUnlocked || M.isAdmin() ? "avail" : "locked";
    };
    const states = pts.map((_, i) => stateOf(i));
    const current = states.findIndex((s) => s === "avail");

    let paths = "";
    for (let i = 0; i < n - 1; i++) {
      const a = pts[i], b = pts[i + 1], mx = (a.x + b.x) / 2;
      paths += `<path class="pb-path ${states[i] === "done" ? "done" : ""}" d="M${a.x} ${a.y} C${mx} ${a.y} ${mx} ${b.y} ${b.x} ${b.y}"/>`;
    }
    let nodes = "";
    pts.forEach((pt, i) => {
      const isFinal = i === n - 1;
      const m = mods[i];
      const st = states[i];
      const title = isFinal ? "Prova final" : m.title;
      const href = isFinal ? "#/exam/" + M.finalScope(t) : "#/m/" + m.id;
      const frac = !p || isFinal ? (st === "done" ? 100 : 0) : Math.round((p.modules[i].done / p.modules[i].total) * 100);
      const sub = isFinal ? (st === "done" ? "aprovado" : st === "locked" ? "bloqueada" : "liberada")
        : !p ? `${m.lessons.length} aulas` : st === "done" ? "aprovado" : `${p.modules[i].done}/${p.modules[i].total} aulas`;
      const r = isFinal ? 38 : 32;
      const lines = wrapLabel(title);
      const body = `
        ${i === current ? `<circle class="pb-pulse" cx="${pt.x}" cy="${pt.y}" r="${r}"/>` : ""}
        <circle class="base" cx="${pt.x}" cy="${pt.y}" r="${r}"/>
        ${st === "avail" && frac > 0 ? `<circle class="pb-ring" cx="${pt.x}" cy="${pt.y}" r="${r + 6}" pathLength="100" stroke-dasharray="${frac} 100"/>` : ""}
        ${st === "locked"
          ? `<g transform="translate(${pt.x - 10} ${pt.y - 11})" fill="none" stroke="#bcb0dc" stroke-width="2" stroke-linecap="round"><rect x="2" y="9" width="16" height="12" rx="2"/><path d="M5 9V6a5 5 0 0 1 10 0v3"/></g>`
          : st === "done" && isFinal ? `<path d="M${pt.x - 12} ${pt.y} l8 9 l16 -18" fill="none" stroke="#1a0f2e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`
          : `<text class="num" x="${pt.x}" y="${pt.y}">${isFinal ? "★" : m.n}</text>`}
        ${lines.map((l, k) => `<text class="lab" x="${pt.x}" y="${pt.y + r + 22 + k * 17}" style="paint-order:stroke;stroke:#150b2b;stroke-width:5px">${M.esc(l)}</text>`).join("")}
        <text class="sub" x="${pt.x}" y="${pt.y + r + 22 + lines.length * 17}" style="paint-order:stroke;stroke:#150b2b;stroke-width:4px">${M.esc(sub)}</text>`;
      nodes += interactive && st !== "locked"
        ? `<g class="pb-node ${st}"><a href="${href}" aria-label="${M.esc(title)}: ${M.esc(sub)}">${body}</a></g>`
        : `<g class="pb-node ${st}" ${interactive ? `role="img" aria-label="${M.esc(title)}: bloqueado"` : ""}>${body}</g>`;
    });
    const el = svg(`<svg viewBox="0 28 ${W} 262" role="group" aria-label="Mapa da trilha ${M.esc(t.title)}">${paths}${nodes}</svg>`);
    return h("div", { class: "playbook pb-scroll" }, el);
  };

  /* capa: o caminho de qualquer formação, sem citar um curso específico */
  M.heroPlay = function () {
    const steps = [["1", "Aulas e vídeos", "no seu ritmo"], ["2", "Quizzes", "feedback na hora"], ["3", "Provas", "nota para avançar"], ["★", "Certificado", "ao concluir"]];
    const W = 1000, stepX = (W - 160) / 3;
    const pts = steps.map((_, i) => ({ x: 80 + i * stepX, y: i % 2 ? 78 : 150 }));
    let paths = "", nodes = "";
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], mx = (a.x + b.x) / 2;
      paths += `<path class="pb-path" d="M${a.x} ${a.y} C${mx} ${a.y} ${mx} ${b.y} ${b.x} ${b.y}"/>`;
    }
    pts.forEach((pt, i) => {
      const last = i === pts.length - 1;
      nodes += `<g class="pb-node ${last ? "done" : "avail"}">
        ${i === 0 ? `<circle class="pb-pulse" cx="${pt.x}" cy="${pt.y}" r="34"/>` : ""}
        <circle class="base" cx="${pt.x}" cy="${pt.y}" r="34"/>
        <text class="num" x="${pt.x}" y="${pt.y}">${steps[i][0]}</text>
        <text class="lab" x="${pt.x}" y="${pt.y + 66}" style="font-size:23px;paint-order:stroke;stroke:#150b2b;stroke-width:5px">${steps[i][1]}</text>
        <text class="sub" x="${pt.x}" y="${pt.y + 90}" style="font-size:19px;paint-order:stroke;stroke:#150b2b;stroke-width:4px">${steps[i][2]}</text></g>`;
    });
    return h("div", { class: "playbook pb-scroll" }, svg(`<svg viewBox="0 28 ${W} 250" role="img" aria-label="Como funciona: aulas e vídeos, quizzes, provas e certificado">${paths}${nodes}</svg>`));
  };

  /* ───── menu do gestor em grupos: cada grupo vira um menu recolhível e uma faixa de abas no topo da tela ───── */
  M.adminGroups = () => [
    { id: "com", label: "Comunidade", icon: "chat", items: [
      { key: "admin-approve", href: "#/admin/aprovacoes", icon: "flag", text: "Aprovações", perm: "aprovar", badge: true },
      { key: "admin-forum", href: "#/admin/forum", icon: "chat", text: "Fórum", perm: "forum", badge: true },
      { key: "admin-tags", href: "#/admin/tags", icon: "tag", text: "Tags e moderação", perm: "moderar" },
      { key: "admin-times", href: "#/admin/times", icon: "users", text: "Times e comunidades", perm: "usuarios" },
      { key: "admin-avisos", href: "#/admin/avisos", icon: "bell", text: "Avisos", perm: "publicar" },
    ] },
    { id: "cont", label: "Conteúdo", icon: "book", items: [
      { key: "admin-trails", href: "#/admin/trilhas", icon: "book", text: "Trilhas", perm: "trilhas" },
      { key: "admin-trails", href: "#/admin/provas", icon: "cert", text: "Provas avulsas", perm: "trilhas" },
      { key: "admin-q", href: "#/admin/perguntas", icon: "help", text: "Banco de questões", perm: "trilhas" },
    ] },
    { id: "pes", label: "Pessoas", icon: "users", items: [
      { key: "admin-users", href: "#/admin/usuarios", icon: "users", text: "Acessos", perm: "usuarios" },
      { key: "admin-engage", href: "#/admin/engajamento", icon: "bolt", text: "Engajamento", perm: "engajamento" },
      { key: "admin-logs", href: "#/admin/logs", icon: "list", text: "Logs", perm: "usuarios" },
    ] },
  ].map((g) => ({ ...g, items: g.items.filter((i) => M.can(i.perm)) })).filter((g) => g.items.length);
  M.adminBadge = (key) => (key === "admin-approve" ? (M.session.pending || 0) + (M.session.pendingSignups || 0) : key === "admin-forum" ? M.session.pendingForum || 0 : 0);
  const grpState = () => { try { return JSON.parse(localStorage.getItem("eh-grp") || "{}"); } catch { return {}; } };
  const grpSave = (st) => { try { localStorage.setItem("eh-grp", JSON.stringify(st)); } catch {} };

  /* faixa de abas no topo das telas de gestão: troca de tela sem abrir o menu */
  function adminStrip() {
    const hash = (location.hash || "").split("?")[0];
    const g = M.adminGroups().find((x) => x.items.some((i) => i.href === hash));
    if (!g || g.items.length < 2) return null;
    return h("nav", { class: "admin-tabs", "aria-label": g.label },
      h("span", { class: "at-label" }, M.icon(g.icon, 16), g.label),
      h("div", { class: "at-row" }, g.items.map((i) => {
        const n = i.badge ? M.adminBadge(i.key) : 0;
        return h("a", { class: "at", href: i.href, "aria-current": i.href === hash ? "page" : null }, i.text, n ? h("b", { class: "at-n", text: String(n) }) : null);
      })));
  }

  /* ───── casca ───── */
  let shell = null;
  M.resetShell = () => { shell = null; };
  function buildShell() {
    const u = M.session.user;
    const link = (key, href, icon, text, badge) => h("a", { href, "data-key": key }, M.icon(icon), h("span", { text }), badge ? h("span", badge === "dst" ? { class: "nav-badge", "data-dst-badge": "", hidden: true } : { class: "nav-badge", hidden: true }) : null);
    const nav = h("nav", { class: "nav", "aria-label": "Principal" },
      h("div", { class: "nav-sep", text: "Estudos" }),
      link("home", "#/", "home", "Feed", "dst"),
      link("reels", "#/reels", "reels", "Reels"),
      link("trails", "#/trilhas", "book", "Trilhas"),
      link("rank", "#/ranking", "trophy", "Ranking"),
      u.role === "aluno" ? link("forum-envios", "#/forum/envios", "chat", "Dúvidas e sugestões") : null,
      link("cert", "#/cert", "cert", "Certificados"),
      h("div", { class: "nav-sep", text: "Sua conta" }),
      link("conta", "#/conta", "user", "Minha conta"),
      M.isAdmin() ? [
        h("div", { class: "nav-sep", text: u.role === "subadmin" ? "Sub-administração" : "Administração" }),
        M.can("usuarios") ? link("admin", "#/admin", "shield", "Painel") : null,
        M.adminGroups().map((g) => {
          const st = grpState();
          const open = st[g.id] !== false && st[g.id] !== undefined ? true : false;
          const head = h("button", { class: "nav-grp-h", type: "button", "aria-expanded": String(open), "aria-controls": "grp-" + g.id }, M.icon(g.icon), h("span", { text: g.label }), h("b", { class: "grp-badge", "data-grp-badge": g.id, hidden: true }), h("span", { class: "grp-chev" }, M.icon("chev", 16)));
          const body = h("div", { class: "nav-grp-b", id: "grp-" + g.id }, g.items.map((it) => link(it.key, it.href, it.icon, it.text, it.badge)));
          const wrap = h("div", { class: "nav-grp" + (open ? " open" : ""), "data-grp": g.id }, head, body);
          head.addEventListener("click", () => { const o = !wrap.classList.contains("open"); wrap.classList.toggle("open", o); head.setAttribute("aria-expanded", String(o)); const s2 = grpState(); s2[g.id] = o; grpSave(s2); });
          return wrap;
        }),
      ] : null);
    const side = h("aside", { class: "side", id: "side" },
      M.brand("#/"), nav,
      h("div", { class: "side-foot" },
        h("div", { class: "me-card" },
          h("a", { href: "#/conta", class: "me-av", "aria-label": "Minha foto e conta" }, M.avatar(u, 38)),
          h("div", { class: "me-txt", title: u.name + " · " + u.email }, h("strong", { text: u.name }), h("span", { text: u.role === "admin" || u.role === "subadmin" ? (u.role === "subadmin" ? "Sub-adm · " : "Gestor · ") + u.email : u.email })),
          h("button", { class: "me-out", type: "button", title: "Sair", "aria-label": "Sair da conta", onclick: M.logout }, M.icon("out", 18))),
        M.modeSwitch({ label: false })));
    const menuBtn = h("button", { class: "btn btn-ghost btn-sm menu-btn", type: "button", "aria-label": "Abrir menu", "aria-controls": "side", "aria-expanded": "false" }, M.icon("menu", 18));
    menuBtn.addEventListener("click", () => {
      const open = side.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    side.addEventListener("click", (e) => { if (e.target.closest("a")) setDrawer(false); });
    const crumbs = h("div", { class: "crumbs" });
    const xp = h("button", { class: "chip chip-gold xp-btn", type: "button", "aria-label": "Abrir meu XP, check-in e metas", onclick: () => M.openXp() }, M.icon("bolt", 16), h("span", { class: "xp-val" }));
    const sInput = h("input", { type: "search", placeholder: "Buscar pessoas, posts e aulas", "aria-label": "Buscar no sistema", enterkeyhint: "search" });
    const search = h("form", { class: "top-search", role: "search" }, M.icon("search", 18), sInput);
    search.addEventListener("submit", (e) => { e.preventDefault(); const v = sInput.value.trim(); if (v) location.hash = "#/busca?q=" + encodeURIComponent(v); });
    const topBrand = h("a", { class: "top-brand", href: "#/", "aria-label": "BRYANT SHOOT: ir para o Feed" },
      h("span", { class: "brand-mark" }, svg(M.ballSvg(22))),
      h("span", { text: "BRYANT SHOOT" }));
    const searchBtn = h("a", { class: "icon-btn top-search-btn", href: "#/busca", "aria-label": "Buscar" }, M.icon("search", 22));
    const top = h("header", { class: "top" }, menuBtn, topBrand, crumbs, h("span", { class: "spacer" }), search, searchBtn, M.bell(), xp);
    const page = h("div", { class: "page", id: "main", tabindex: "-1" });
    const main = h("main", { class: "main" }, top, page);

    /* menu de baixo, como no Instagram (só aparece no celular) */
    const tab = (key, href, icon, label, dst) => h("a", { class: "tab", href, "data-key": key, "aria-label": label }, h("span", { class: "tab-ico" }, M.icon(icon, 26), dst ? h("i", { class: "tab-dot", "data-dst-badge": "", hidden: true }) : null), h("span", { class: "tab-txt", text: label }));
    /* "Você" abre uma tela própria (conta, certificados, gestão…) em vez do menu lateral do PC */
    const meTab = h("a", { class: "tab tab-me", href: "#/voce", "data-key": "voce", "aria-label": "Você: conta, certificados e mais" },
      h("span", { class: "tab-ico" }, M.avatar(u, 28), h("i", { class: "tab-dot", "data-me-badge": "", hidden: true })), h("span", { class: "tab-txt", text: "Você" }));
    const setDrawer = (open) => { side.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", String(open)); };
    const tabbar = h("nav", { class: "tabbar", "aria-label": "Navegação do celular" },
      tab("home", "#/", "home", "Feed", true), tab("reels", "#/reels", "reels", "Reels"), tab("trails", "#/trilhas", "book", "Trilhas"), tab("rank", "#/ranking", "trophy", "Ranking"), meTab);
    const root = h("div", { class: "shell" }, side, main, tabbar);
    root.addEventListener("click", (e) => { if (side.classList.contains("open") && !side.contains(e.target) && !menuBtn.contains(e.target)) setDrawer(false); });
    M.mount(root);
    return { root, side, nav, crumbs, xp, page, tabbar, meTab };
  }

  /* soma das pendências de cada grupo, para o gestor ver sem abrir o menu */
  function paintGroupBadges() {
    if (!shell) return;
    const me = M.adminGroups().reduce((a, g) => a + g.items.reduce((b, i) => b + (i.badge ? M.adminBadge(i.key) : 0), 0), 0);
    M.adminGroups().forEach((g) => {
      const n = g.items.reduce((b, i) => b + (i.badge ? M.adminBadge(i.key) : 0), 0);
      const el = shell.nav.querySelector(`[data-grp-badge="${g.id}"]`);
      if (el) { el.hidden = !n; el.textContent = String(n || ""); }
    });
    const dot = shell.tabbar.querySelector("[data-me-badge]");
    if (dot) { dot.hidden = !me; dot.textContent = me ? String(me) : ""; }
  }
  M.paintGroupBadges = paintGroupBadges;

  M.updateXpChip = function () {
    const v = shell?.xp?.querySelector(".xp-val");
    if (v) v.textContent = M.session.progress ? `${M.totalXp()} XP` : "";
  };
  M.setPage = function (key, crumbParts, node, { wide = false } = {}) {
    if (!shell || !document.body.contains(shell.root)) shell = buildShell();
    const hashPath = (location.hash || "#/").split("?")[0];
    shell.nav.querySelectorAll("a").forEach((a) => {
      const sameKey = a.dataset.key === key;
      /* duas entradas com a mesma chave (Trilhas e Provas avulsas): vale a que bate com o endereço */
      const twins = sameKey && shell.nav.querySelectorAll(`a[data-key="${key}"]`).length > 1;
      const on = twins ? a.getAttribute("href") === hashPath || (a.getAttribute("href") === "#/admin/trilhas" && hashPath.startsWith("#/admin/trilhas")) : sameKey;
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    shell.nav.querySelectorAll(".nav-grp").forEach((g) => { if (g.querySelector('a[aria-current="page"]')) { g.classList.add("open", "has-current"); g.querySelector(".nav-grp-h").setAttribute("aria-expanded", "true"); } else g.classList.remove("has-current"); });
    shell.crumbs.replaceChildren(...(crumbParts || []).flatMap((c, i) => {
      const el = c.href ? h("a", { href: c.href, text: c.text }) : h("span", { text: c.text });
      return i ? [" / ", el] : [el];
    }));
    M.updateXpChip();
    shell.tabbar.querySelectorAll("a.tab").forEach((a) => { if (a.dataset.key === key) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    const meKeys = /^(conta|cert|admin|voce|forum-envios)/.test(key);
    if (meKeys) { shell.meTab.setAttribute("data-on", ""); shell.meTab.setAttribute("aria-current", "page"); } else { shell.meTab.removeAttribute("data-on"); shell.meTab.removeAttribute("aria-current"); }
    if (M.paintBadges) M.paintBadges();
    const badge = shell.nav.querySelector('[data-key="admin-approve"] .nav-badge');
    const nPend = (M.session.pending || 0) + (M.session.pendingSignups || 0);
    if (badge) { badge.hidden = !(nPend > 0); badge.textContent = String(nPend || ""); }
    const fBadge = shell.nav.querySelector('[data-key="admin-forum"] .nav-badge');
    if (fBadge) { const n = M.session.pendingForum || 0; fBadge.hidden = !(n > 0); fBadge.textContent = String(n || ""); }
    shell.page.className = "page" + (wide ? " page-wide" : "") + (key === "reels" ? " page-reels" : "");
    const strip = key.startsWith("admin") ? adminStrip() : null;
    shell.page.replaceChildren(...(strip ? [strip, node] : [node]));
    document.body.classList.toggle("is-reels", key === "reels");
    paintGroupBadges();
    window.scrollTo(0, 0);
    shell.page.focus({ preventScroll: true });
  };
  M.loading = (text) => h("div", { class: "loading", role: "status", text: text || "Carregando…" });

  M.logout = function () {
    M.setToken(""); M.session.user = null; M.session.progress = null; shell = null;
    location.hash = "#/entrar"; M.render();
  };

  /* ───── entrada ───── */
  M.views.auth = function (mode) {
    let tab = mode === "cadastro" ? "cadastro" : "entrar";
    const err = h("div");
    const form = h("form", { novalidate: true });
    const tabs = h("div", { class: "tabs", role: "tablist" });
    const card = h("div", { class: "auth-card" }, tabs, err, form);

    function field(id, label, type, ac, hint) {
      return h("div", { class: "field" },
        h("label", { for: id, text: label }),
        h("input", { class: "input", id, name: id, type, autocomplete: ac, required: true }),
        hint ? h("span", { class: "hint", text: hint }) : null);
    }
    function draw() {
      tabs.replaceChildren(
        ...[["entrar", "Entrar"], ["cadastro", "Criar conta"]].map(([k, t]) =>
          h("button", { type: "button", role: "tab", "aria-selected": String(tab === k), text: t, onclick: () => { tab = k; err.replaceChildren(); draw(); } })));
      const isReg = tab === "cadastro";
      const btn = h("button", { class: "btn btn-gold", type: "submit", style: "width:100%", text: isReg ? "Criar minha conta" : "Entrar" });
      form.replaceChildren(
        isReg ? field("name", "Nome completo", "text", "name") : null,
        field("email", "E-mail", "email", "email"),
        field("password", "Senha", "password", isReg ? "new-password" : "current-password", isReg ? "Mínimo de 8 caracteres, com letras e números." : null),
        isReg ? field("password2", "Repita a senha", "password", "new-password") : null,
        btn,
        h("p", { class: "muted small", style: "margin:14px 0 0", text: isReg ? "Seu cadastro passa pela aprovação de um gestor. Quando for aprovado, o gestor te entrega um código de ativação." : "Ainda não tem conta? Crie na aba ao lado. Se um administrador criou seu acesso, entre com o e-mail e a senha que ele enviou." }),
        isReg ? null : h("p", { class: "small", style: "margin:10px 0 0" }, h("a", { href: "#/ativar", text: "Tenho um código de ativação" })));
      if (!isReg && M.session.prefillEmail) { const em = form.querySelector("#email"); if (em) em.value = M.session.prefillEmail; M.session.prefillEmail = ""; const pw = form.querySelector("#password"); if (pw) pw.focus(); }
      form.onsubmit = async (e) => {
        e.preventDefault();
        err.replaceChildren();
        const v = Object.fromEntries(new FormData(form).entries());
        if (isReg && v.password !== v.password2) {
          err.replaceChildren(h("div", { class: "form-error", role: "alert", text: "As duas senhas precisam ser iguais." }));
          return;
        }
        btn.disabled = true; btn.textContent = "Aguarde…";
        try {
          const d = await M.post(isReg ? "auth/register" : "auth/login", v);
          if (d.pending) {
            card.replaceChildren(h("div", { class: "auth-done", role: "status" },
              h("span", { class: "ck-ico" }, M.icon("check", 22)),
              h("h3", { text: "Cadastro enviado" }),
              h("p", { text: "Um gestor vai analisar o seu cadastro. Quando for aprovado, peça a ele o código de ativação de 6 dígitos. Você vai usar o e-mail " + d.email + " junto com o código." }),
              h("p", { class: "muted small", text: "Se tiver urgência, avise o gestor da sua equipe." }),
              h("div", { class: "row" }, h("a", { class: "btn btn-ghost", href: "#/ativar?e=" + encodeURIComponent(d.email), text: "Já tenho o código" }), h("a", { class: "btn btn-ghost", href: "#/entrar", onclick: () => { tab = "entrar"; }, text: "Voltar ao início" }))));
            return;
          }
          M.setToken(d.token);
          await M.refreshMe();
          M.resetShell();
          M.toast(isReg ? "Conta criada. Bem-vindo, " + M.firstName(d.user.name) + "." : "Bem-vindo de volta, " + M.firstName(d.user.name) + ".", "ok");
          M.go("#/");
        } catch (ex) {
          const st = ex.data?.state;
          err.replaceChildren(h("div", { class: st ? "form-note" : "form-error", role: "alert" }, ex.message,
            st === "invited" ? h("div", { style: "margin-top:10px" }, h("a", { class: "btn btn-gold btn-sm", href: "#/ativar?e=" + encodeURIComponent(ex.data.email || v.email || "") }, "Digitar meu código")) : null));
          btn.disabled = false; btn.textContent = isReg ? "Criar minha conta" : "Entrar";
        }
      };
    }
    draw();
    return authShell(card);
  };

  function authShell(card) {
    return h("div", { class: "auth" },
      h("section", { class: "auth-hero" },
        M.brand("#/entrar"),
        h("h1", { text: "Seu ambiente de estudos." }),
        h("p", { class: "lead", text: "Trilhas com aulas em vídeo, textos, quizzes e provas. Você estuda no seu ritmo, prova o que aprendeu e sai com certificado." }),
        M.heroPlay(),
        h("p", { class: "muted small", text: "Novas formações e testes da Mamba Digital entram aqui o tempo todo, com o mesmo login." })),
      h("div", { class: "auth-card-wrap" }, h("div", { class: "auth-stack" }, card, M.modeSwitch())));
  }

  /* ───── ativar o acesso (código entregue por um gestor) ───── */
  M.views.activate = function (qs) {
    const q = new URLSearchParams(qs || "");
    const card = h("div", { class: "auth-card" });
    const done = (email) => {
      card.replaceChildren(h("div", { class: "auth-done", role: "status" },
        h("span", { class: "ck-ico" }, M.icon("check", 22)),
        h("h3", { text: "Acesso ativado" }),
        h("p", { text: "Pronto! Agora entre com o seu e-mail e a senha que você escolheu no cadastro." }),
        h("button", { class: "btn btn-gold", type: "button", onclick: () => { M.session.prefillEmail = email || ""; location.hash = "#/entrar"; }, text: "Entrar agora" })));
    };
    function codeForm() {
      const err = h("div");
      const email = h("input", { class: "input", id: "a-email", type: "email", autocomplete: "email", required: true, value: q.get("e") || "" });
      const code = h("input", { class: "input code-input", id: "a-code", type: "text", inputmode: "numeric", autocomplete: "one-time-code", maxlength: "6", placeholder: "000000", required: true });
      code.addEventListener("input", () => { code.value = code.value.replace(/\D/g, "").slice(0, 6); });
      const btn = h("button", { class: "btn btn-gold", type: "submit", style: "width:100%", text: "Ativar meu acesso" });
      const form = h("form", { novalidate: true },
        h("h3", { style: "margin-bottom:6px", text: "Ativar o acesso" }),
        h("p", { class: "muted small", style: "margin:0 0 16px", text: "Digite o e-mail do cadastro e o código de 6 dígitos que um gestor te entregou." }),
        err,
        h("div", { class: "field" }, h("label", { for: "a-email", text: "E-mail" }), email),
        h("div", { class: "field" }, h("label", { for: "a-code", text: "Código de 6 dígitos" }), code),
        btn,
        h("p", { class: "small", style: "margin:14px 0 0" }, h("a", { href: "#/entrar", text: "Voltar para Entrar" })));
      form.onsubmit = async (e) => {
        e.preventDefault(); err.replaceChildren();
        btn.disabled = true; btn.textContent = "Aguarde…";
        try { const d = await M.post("auth/activate", { email: email.value, code: code.value }); done(d.email); }
        catch (ex) { err.replaceChildren(h("div", { class: "form-error", role: "alert", text: ex.message })); btn.disabled = false; btn.textContent = "Ativar meu acesso"; }
      };
      card.replaceChildren(form);
      (q.get("e") ? code : email).focus();
    }
    codeForm();
    return authShell(card);
  };

  /* ───── trilhas: andamento ───── */
  function nextStep(t) {
    const p = M.session.progress, v = M.tp(t), mods = t.modules;
    for (let i = 0; i < mods.length; i++) {
      const st = v.modules[i];
      if (st.exam === "approved") continue;
      if (!st.unlocked && !M.isAdmin()) break;
      const l = mods[i].lessons.find((x) => !p.lessons[x.id]);
      if (l) return { kind: "lesson", href: "#/l/" + l.id, title: l.title, mod: mods[i], retry: false };
      return { kind: "exam", href: "#/exam/" + mods[i].id, title: M.examName(mods[i].id), mod: mods[i], retry: st.exam === "retry" };
    }
    const fs = M.finalScope(t);
    if (v.finalUnlocked) {
      if (v.finalStatus === "approved") return { kind: "cert", href: "#/cert/" + t.id, title: "Seu certificado" };
      return { kind: "exam", href: "#/exam/" + fs, title: "Prova final", retry: v.finalStatus === "retry" };
    }
    return null;
  }
  const minutesOf = (t) => t.modules.reduce((a, m) => a + m.lessons.reduce((b, l) => b + (l.minutes || 0), 0), 0);
  const hoursText = (min) => (min < 90 ? `${min} min` : `≈ ${Math.round(min / 60)} h`);
  function lastActivity(t, p) {
    let ts = 0;
    for (const m of t.modules) for (const l of m.lessons) ts = Math.max(ts, Number(p.lessons[l.id]) || 0);
    const scopes = new Set([...t.modules.map((m) => m.id), M.finalScope(t)]);
    for (const x of p.history || []) if (scopes.has(x.scope)) ts = Math.max(ts, x.at || 0);
    return ts;
  }
  function stateOfTrail(t) {
    const v = M.tp(t);
    if (v.finalStatus === "approved") return "done";
    if (v.lessonsDone > 0 || v.modulesApproved > 0) return "going";
    return "new";
  }
  const STATE_CHIP = { done: ["chip chip-good", "Concluída"], going: ["chip chip-gold", "Em andamento"], new: ["chip", "Não iniciada"] };

  /* ───── início: menu de trilhas ───── */
  M.views.trails = async function (catKey) {
    const [, provas] = await Promise.all([M.refreshMe(), M.loadProvas()]);
    const p = M.session.progress, trails = M.trails();
    const views = trails.map((t) => M.tp(t));
    const doneTrails = trails.filter((t) => stateOfTrail(t) === "done").length;
    const lessons = Object.keys(p.lessons).length;
    const mods = views.reduce((a, v) => a + v.modulesApproved, 0);

    /* "continue de onde parou": a trilha começada e não concluída com atividade mais recente */
    const going = trails.filter((t) => stateOfTrail(t) === "going" && nextStep(t)).sort((a, b) => lastActivity(b, p) - lastActivity(a, p))[0];
    let resume = null;
    if (going) {
      const ns = nextStep(going);
      resume = h("section", { class: "panel next-card", "aria-label": "Continuar estudando" },
        h("div", null,
          h("span", { class: "chip chip-gold", text: "Continue de onde parou" }),
          h("h3", { style: "margin-top:12px", text: ns.kind === "lesson" ? ns.title : ns.retry ? ns.title + ": refazer os erros" : ns.title }),
          h("p", { class: "muted", style: "margin:6px 0 0", text: `${going.title}${ns.mod ? " · Módulo " + ns.mod.n : ""}` })),
        h("a", { class: "btn btn-gold", href: ns.href }, ns.kind === "lesson" ? "Continuar aula" : "Fazer a prova", M.icon("arrow", 18)));
    }

    /* ── catálogo: trilhas e provas viram "itens" com categoria, para filtrar e agrupar ── */
    const catOf = (tag) => { const c = String(tag || "").trim(); return !c || c.toLowerCase() === "trilha" ? "Geral" : c; };
    const items = [];
    for (const t of trails) items.push({ kind: "trail", cat: M.catOfTrail(t), title: t.title, text: `${t.tagline || ""} ${t.subtitle || ""}`, state: stateOfTrail(t), t });
    for (const pv of provas) items.push({ kind: "prova", cat: catOf(pv.tag === "Provas" ? "" : pv.tag), title: pv.title, text: pv.description || "", state: pv.status === "approved" ? "done" : pv.attempts ? "going" : "new", pv });
    for (const x of window.PROXIMAS || []) items.push({ kind: "soon", cat: x.id && M.session.cats?.map?.[x.id] ? M.session.cats.map[x.id] : catOf(x.tag), title: x.title, text: x.tagline || "", state: "new", x });
    const F = M.trailFilter || (M.trailFilter = { q: "", state: "" });
    /* ordem das categorias: a que o gestor definiu; as sem lista vêm depois (A–Z) e "Geral" por último */
    const order = M.session.cats?.list || [];
    const rank = (c) => (c === "Geral" ? 1e6 : order.indexOf(c) >= 0 ? order.indexOf(c) : 1e5);
    const cats = [...new Set(items.map((i) => i.cat))].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b, "pt-BR"));
    const nProvas = items.filter((i) => i.kind === "prova").length;
    /* a categoria aberta vem da rota (#/trilhas/c/<nome>); nome que não existe mais volta para o início */
    const openCat = catKey === "@provas" ? (nProvas ? "@provas" : "") : cats.includes(catKey) ? catKey : "";

    const stateChip = (st) => STATE_CHIP[st];
    function cardFor(it) {
      if (it.kind === "trail") {
        const t = it.t, v = M.tp(t), st = it.state, chip = stateChip(st);
        const pct = M.pct(v.lessonsDone, v.lessonsTotal);
        return h("a", { class: "trail-card" + (st === "done" ? " is-done" : ""), href: M.trailHref(t) },
          h("div", { class: "row row-between" },
            h("span", { class: "chip chip-tag", text: "Trilha" }),
            h("span", { class: "row" }, M.isInactive(t.id) ? h("span", { class: "chip chip-bad", text: "Inativa" }) : M.isRestricted(t.id) ? h("span", { class: "chip chip-gold", text: "Só escolhidos" }) : null, h("span", { class: chip[0], text: chip[1] }))),
          h("h3", { text: t.title }),
          h("p", { class: "trail-tag", text: t.tagline }),
          h("div", { class: "trail-meta" },
            h("span", { text: `${t.modules.length} ${t.modules.length === 1 ? "módulo" : "módulos"}` }), h("span", { text: `${v.lessonsTotal} ${v.lessonsTotal === 1 ? "aula" : "aulas"}` }), h("span", { text: hoursText(minutesOf(t)) })),
          h("div", { class: "trail-prog" },
            h("div", { class: "bar", role: "progressbar", "aria-valuenow": String(pct), "aria-valuemin": "0", "aria-valuemax": "100", "aria-label": `Progresso em ${t.title}` }, h("i", { style: `width:${pct}%` })),
            h("span", { class: "small muted", text: `${v.lessonsDone}/${v.lessonsTotal} aulas · ${v.modulesApproved}/${t.modules.length} módulos aprovados` })),
          h("span", { class: "trail-cta" }, st === "done" ? "Rever a trilha" : st === "going" ? "Continuar" : "Começar trilha", M.icon("arrow", 18)));
      }
      if (it.kind === "prova") {
        const pv = it.pv, st = it.state;
        const chip = st === "done" ? ["chip chip-good", "Aprovado"] : st === "going" ? ["chip chip-gold", `${pv.attempts} ${pv.attempts === 1 ? "tentativa" : "tentativas"}`] : ["chip chip-warn", "Para fazer"];
        return h("a", { class: "trail-card is-prova" + (st === "done" ? " is-done" : ""), href: "#/prova/" + pv.id },
          h("div", { class: "row row-between" }, h("span", { class: "chip chip-tag", text: "Prova" }), h("span", { class: "row" }, pv.restricted ? h("span", { class: "chip chip-gold", text: "Só escolhidos" }) : null, h("span", { class: chip[0], text: chip[1] }))),
          h("h3", { text: pv.title }),
          h("p", { class: "trail-tag", text: pv.description || "Prova avulsa liberada pela administração." }),
          h("div", { class: "trail-meta" }, h("span", { text: `${pv.total} ${pv.total === 1 ? "questão" : "questões"}` }), h("span", { text: `nota mínima ${pv.passPct}%` }), pv.bestPct != null && pv.attempts ? h("span", { text: `melhor nota ${M.fmtPct(pv.bestPct)}%` }) : null),
          h("span", { class: "trail-cta" }, st === "done" ? "Ver resultado" : st === "going" ? "Tentar de novo" : "Fazer a prova", M.icon("arrow", 18)));
      }
      return h("div", { class: "trail-card is-soon", "aria-label": it.title + " (em breve)" },
        h("div", { class: "row row-between" }, h("span", { class: "chip chip-tag", text: "Trilha" }), h("span", { class: "chip", text: "Em breve" })),
        h("h3", { text: it.title }), h("p", { class: "trail-tag", text: it.text }),
        h("span", { class: "trail-cta muted", text: "Disponível em breve" }));
    }

    /* ── filtros: busca e situação (valem dentro da categoria aberta ou, no início, em todas) ── */
    const search = h("input", { class: "input", type: "search", placeholder: openCat ? "Buscar nesta categoria" : "Buscar trilha ou prova", "aria-label": "Buscar trilha ou prova", value: F.q });
    const stateSel = h("select", { class: "input", "aria-label": "Situação" }, [["", "Todas as situações"], ["going", "Em andamento"], ["new", "Não iniciadas"], ["done", "Concluídas"]].map(([v, l]) => h("option", { value: v, text: l })));
    stateSel.value = F.state;
    const result = h("div", { class: "cat-result" });
    const norm = (v) => String(v || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const catHref = (c) => "#/trilhas/c/" + encodeURIComponent(c);

    function visible() {
      const q = norm(F.q.trim());
      return items.filter((i) => (!openCat || (openCat === "@provas" ? i.kind === "prova" : i.cat === openCat))
        && (!F.state || (i.kind !== "soon" && i.state === F.state))
        && (!q || norm(`${i.title} ${i.text} ${i.cat}`).includes(q)));
    }
    function grid(list) { return h("div", { class: "trail-grid dense" }, list.map(cardFor)); }

    /* card de uma categoria: nome, quantas trilhas/provas, progresso e um aperitivo do que tem dentro */
    function catCard(c) {
      const inCat = c === "@provas" ? items.filter((i) => i.kind === "prova") : items.filter((i) => i.cat === c);
      const tr = inCat.filter((i) => i.kind === "trail"), pv = inCat.filter((i) => i.kind === "prova"), soon = inCat.filter((i) => i.kind === "soon");
      const total = tr.reduce((a, i) => a + M.tp(i.t).lessonsTotal, 0), done = tr.reduce((a, i) => a + M.tp(i.t).lessonsDone, 0);
      const pct = M.pct(done, total);
      const pend = pv.filter((i) => i.state !== "done").length;
      const parts = [];
      if (tr.length) parts.push(`${tr.length} ${tr.length === 1 ? "trilha" : "trilhas"}`);
      if (pv.length) parts.push(`${pv.length} ${pv.length === 1 ? "prova" : "provas"}`);
      if (soon.length) parts.push(`${soon.length} em breve`);
      const doneAll = tr.length && tr.every((i) => i.state === "done");
      const peek = inCat.filter((i) => i.kind !== "soon").slice(0, 3).map((i) => i.title);
      return h("a", { class: "cat-card" + (doneAll ? " is-done" : ""), href: catHref(c), "aria-label": `${c === "@provas" ? "Provas avulsas" : c}: ${parts.join(", ")}` },
        h("div", { class: "row row-between" },
          h("span", { class: "cat-ico", "aria-hidden": "true" }, M.icon(c === "@provas" ? "flag" : "tag", 22)),
          pend ? h("span", { class: "chip chip-warn", text: `${pend} ${pend === 1 ? "prova para fazer" : "provas para fazer"}` }) : doneAll ? h("span", { class: "chip chip-good", text: "Tudo concluído" }) : null),
        h("h3", { text: c === "@provas" ? "Provas avulsas" : c }),
        h("p", { class: "cat-count", text: parts.join(" · ") }),
        peek.length ? h("ul", { class: "cat-peek" }, peek.map((t) => h("li", { text: t })), inCat.length > peek.length ? h("li", { class: "more", text: "e mais…" }) : null) : null,
        total ? h("div", { class: "trail-prog" },
          h("div", { class: "bar", role: "progressbar", "aria-valuenow": String(pct), "aria-valuemin": "0", "aria-valuemax": "100", "aria-label": `Progresso em ${c}` }, h("i", { style: `width:${pct}%` })),
          h("span", { class: "small muted", text: `${done}/${total} aulas · ${pct}%` })) : null,
        h("span", { class: "trail-cta" }, "Abrir categoria", M.icon("arrow", 18)));
    }

    function drawResult() {
      const list = visible();
      const filtering = !!(F.q.trim() || F.state);
      const kids = [];
      if (!openCat && !filtering) {
        /* início: só os cards das categorias */
        if (!cats.length) kids.push(h("div", { class: "empty" }, h("h3", { text: "Nenhuma trilha liberada para você ainda" }), h("p", { text: "Quando a administração liberar uma trilha, ela aparece aqui. Se você acha que já deveria ter acesso, fale com o seu gestor." })));
        else kids.push(h("div", { class: "cat-grid", role: "list" }, [...cats.map(catCard), nProvas ? catCard("@provas") : null].filter(Boolean).map((c) => h("div", { role: "listitem", style: "display:contents" }, c))));
      } else if (!list.length) {
        kids.push(h("div", { class: "empty" }, h("h3", { text: "Nada encontrado com esses filtros" }),
          h("p", { text: "Tire o filtro de situação ou limpe a busca para ver mais." }),
          h("button", { class: "btn btn-ghost", type: "button", onclick: () => { F.q = ""; F.state = ""; search.value = ""; stateSel.value = ""; drawResult(); } }, "Limpar filtros")));
      } else if (openCat) {
        kids.push(grid(list));
      } else {
        /* busca no início: resultados de todas as categorias, com o nome da categoria em cada seção */
        for (const c of cats) {
          const inCat = list.filter((i) => i.cat === c);
          if (inCat.length) kids.push(h("section", { class: "cat-sec" }, h("div", { class: "cat-head" }, h("h3", { text: c }), h("span", { class: "chip", text: `${inCat.length} ${inCat.length === 1 ? "item" : "itens"}` }), h("a", { class: "linkish small", href: catHref(c), text: "Abrir categoria" })), grid(inCat)));
        }
      }
      result.replaceChildren(...kids);
    }
    search.addEventListener("input", () => { F.q = search.value; drawResult(); });
    stateSel.addEventListener("change", () => { F.state = stateSel.value; drawResult(); });
    drawResult();

    const openLabel = openCat === "@provas" ? "Provas avulsas" : openCat;
    const openItems = openCat ? items.filter((i) => (openCat === "@provas" ? i.kind === "prova" : i.cat === openCat)) : [];
    return h("div", null,
      openCat
        ? h("div", { class: "page-head" },
          h("a", { class: "small", href: M.trailsHref }, "← Todas as categorias"),
          h("h2", { style: "margin-top:12px", text: openLabel }),
          h("p", { text: `${openItems.length} ${openItems.length === 1 ? "item" : "itens"} nesta categoria. Escolha uma trilha para começar ou continuar.` }))
        : h("div", { class: "page-head" },
          h("h2", { text: "Olá, " + M.firstName(M.session.user.name) }),
          h("p", { text: "Escolha uma categoria para ver as trilhas dela. Cada trilha tem aulas, quizzes, provas por módulo e uma prova final que libera o certificado." })),
      M.can("trilhas") && !openCat ? h("div", { class: "panel tr-admin", "aria-label": "Ferramentas do gestor" },
        h("div", null, h("b", { text: "Gestor" }), h("p", { class: "muted small", text: "Crie uma trilha ou uma prova avulsa, organize as categorias e ative ou inative qualquer trilha." })),
        h("div", { class: "row", style: "flex-wrap:wrap" },
          h("button", { class: "btn btn-gold", type: "button", onclick: M.createTrailDialog }, M.icon("plus", 18), " Criar nova trilha"),
          h("a", { class: "btn btn-ghost", href: "#/admin/provas" }, "Provas avulsas"),
          h("a", { class: "btn btn-ghost", href: "#/admin/trilhas" }, "Gerenciar trilhas e categorias"))) : null,
      M.can("trilhas") && !openCat ? h("div", { style: "height:18px" }) : null,
      openCat ? null : resume, !openCat && resume ? h("div", { style: "height:18px" }) : null,
      openCat ? null : h("div", { class: "grid grid-4" },
        stat(`${doneTrails}/${trails.length}`, trails.length === 1 ? "trilha concluída" : "trilhas concluídas"),
        stat(lessons, "aulas concluídas"),
        stat(mods, "módulos aprovados"),
        stat(M.totalXp(), "pontos de experiência")),
      h("div", { class: "cat-bar" }, h("div", { class: "cat-tools" }, h("div", { class: "cat-search" }, M.icon("search", 18), search), stateSel)),
      result);
  };

  /* ───── uma trilha ───── */
  M.views.trail = async function (id) {
    await M.refreshMe();
    const t = M.trailById(id);
    if (!t) return notFound();
    const p = M.session.progress, v = M.tp(t);
    const done = v.lessonsDone, total = v.lessonsTotal, approved = v.modulesApproved;
    const next = nextStep(t);
    const first = !done && !approved;

    const nextCard = next && h("section", { class: "panel next-card", "aria-label": "Próximo passo" },
      h("div", null,
        h("span", { class: "chip chip-gold", text: first ? "Comece por aqui" : next.kind === "cert" ? "Concluído" : "Seu próximo passo" }),
        h("h3", { style: "margin-top:12px", text: next.kind === "lesson" ? next.title : next.kind === "cert" ? "Você terminou a trilha" : next.retry ? next.title + ": refazer os erros" : next.title }),
        h("p", { class: "muted", style: "margin:6px 0 0", text: next.kind === "lesson" ? `Módulo ${next.mod.n}: ${next.mod.title}` : next.kind === "cert" ? "Baixe ou imprima o certificado." : next.retry ? "Você só refaz as questões que errou." : "Você já concluiu as aulas. Reserve de 20 a 30 minutos para a prova." })),
      h("a", { class: "btn btn-gold", href: next.href }, next.kind === "lesson" ? (first ? "Começar a trilha" : "Continuar aula") : next.kind === "cert" ? "Ver certificado" : "Fazer a prova", M.icon("arrow", 18)));

    const stats = h("div", { class: "grid grid-4" },
      stat(`${done}/${total}`, "aulas concluídas"),
      stat(`${approved}/${t.modules.length}`, "módulos aprovados"),
      stat(M.totalXp(), "pontos de experiência"),
      stat(v.finalStatus === "approved" ? "Aprovado" : v.finalUnlocked ? "Liberada" : "Bloqueada", "prova final", true));

    const modList = h("div", { class: "mod-list" }, t.modules.map((m, i) => {
      const st = v.modules[i];
      const locked = !st.unlocked && !M.isAdmin();
      return h(locked ? "div" : "a", { class: "mod-card" + (locked ? " locked" : ""), href: locked ? null : "#/m/" + m.id },
        h("div", { class: "mod-n", text: m.n }),
        h("div", null, h("h3", { text: m.title }), h("p", { text: m.tagline }),
          h("div", { class: "bar", role: "progressbar", "aria-valuenow": String(M.pct(st.done, st.total)), "aria-valuemin": "0", "aria-valuemax": "100", "aria-label": `Progresso do módulo ${m.n}` },
            h("i", { style: `width:${M.pct(st.done, st.total)}%` }))),
        h("div", { class: "chips row", style: "justify-content:flex-end" },
          h("span", { class: "chip", text: `${st.done}/${st.total} aulas` }), examChip(st.exam, locked)));
    }));

    const node = h("div", null,
      h("a", { class: "small", href: "#/trilhas/c/" + encodeURIComponent(M.catOfTrail(t)) }, "← " + M.catOfTrail(t)),
      h("div", { class: "page-head", style: "margin-top:12px" },
        h("span", { class: "chip chip-gold", style: "justify-self:start", text: M.catOfTrail(t) === "Geral" ? "Trilha" : M.catOfTrail(t) }),
        h("h2", { text: t.title }),
        h("p", { text: t.subtitle || t.tagline })),
      nextCard, h("div", { style: "height:18px" }), stats,
      h("section", { class: "panel", style: "margin-top:18px" }, h("h3", { text: "Mapa da trilha" }), M.playbook(v, { trail: t })),
      h("h2", { style: "margin:40px 0 16px", text: "Módulos" }), modList);
    node._crumbs = [{ text: "Trilhas", href: M.trailsHref }, { text: t.title }];
    return node;
  };
  function stat(v, l, txt) { return h("div", { class: "stat" }, h("b", { class: txt ? "txt" : "", text: v }), h("span", { text: l })); }
  function examChip(st, locked) {
    if (locked) return h("span", { class: "chip", text: "Bloqueado" });
    if (st === "approved") return h("span", { class: "chip chip-good", text: "Aprovado" });
    if (st === "retry") return h("span", { class: "chip chip-warn", text: "Refazer erros" });
    if (st === "reset") return h("span", { class: "chip chip-bad", text: "Refazer aulas" });
    return h("span", { class: "chip", text: "Prova pendente" });
  }

  /* ───── regras das provas (reaproveitado) ───── */
  M.rulesList = function () {
    const r = M.session.rules || { failMax: 70, passAbove: 90 };
    return h("ul", { class: "bands" },
      h("li", { class: "b-bad" }, h("b", { text: `até ${r.failMax}%` }), h("span", null, h("strong", { text: "Reprovado. " }), "Você refaz tudo: as aulas do módulo (na prova final, a trilha inteira) e a prova com novas questões.")),
      h("li", { class: "b-warn" }, h("b", { text: `${r.failMax}% a ${r.passAbove}%` }), h("span", null, h("strong", { text: "Refaz só o que errou. " }), "Você responde de novo apenas as questões erradas, quantas vezes precisar, até acertar todas.")),
      h("li", { class: "b-good" }, h("b", { text: `acima de ${r.passAbove}%` }), h("span", null, h("strong", { text: "Aprovado. " }), "Você vê o que errou e a resposta certa, mas não precisa refazer.")));
  };

  /* ───── módulo ───── */
  /* o aluno assiste na ordem: a aula abre depois de concluir a anterior (gestor navega livre) */
  M.lessonOpen = (mod, k) => M.isAdmin() || k === 0 || !!M.session.progress.lessons[mod.lessons[k].id] || !!M.session.progress.lessons[mod.lessons[k - 1].id];
  M.views.module = async function (id) {
    await M.refreshMe();
    const m = M.modulo(id);
    if (!m) return notFound();
    const t = M.trailOfModule(id);
    const p = M.session.progress, i = m.n - 1, st = M.tp(t).modules[i];
    const locked = !st.unlocked && !M.isAdmin();
    if (locked) {
      return h("div", { class: "empty" }, h("h3", { text: "Módulo bloqueado" }),
        h("p", { text: `Seja aprovado na prova do módulo ${m.n - 1} para liberar este.` }),
        h("a", { class: "btn btn-gold", href: M.trailHref(t) }, "Voltar à trilha"));
    }
    const ex = p.exams[m.id];
    const allDone = st.done === st.total;
    let examCard;
    if (ex?.status === "approved") {
      examCard = ["ok", h("span", { class: "chip chip-good", text: "Aprovado" }), `Você foi aprovado neste módulo${ex.bestPct ? " com " + ex.bestPct + "%" : ""}.`, null];
    } else if (ex?.status === "retry") {
      examCard = ["warn", h("span", { class: "chip chip-warn", text: "Refazer erros" }), `Você ficou entre ${M.session.rules.failMax}% e ${M.session.rules.passAbove}%. Faltam ${ex.retry?.qids?.length || 0} questões.`,
        h("a", { class: "btn btn-gold", href: "#/exam/" + m.id }, "Refazer as questões erradas")];
    } else if (ex?.status === "reset" && !allDone) {
      examCard = ["bad", h("span", { class: "chip chip-bad", text: "Reprovado" }), `Sua última nota foi ${ex.lastPct ?? "—"}%. As aulas deste módulo foram zeradas. Estude de novo e refaça a prova.`, null];
    } else if (allDone) {
      examCard = ["ready", h("span", { class: "chip chip-gold", text: "Liberada" }), `${M.examSize(m.id)} questões sobre o módulo. Reserve de 20 a 30 minutos.`,
        h("a", { class: "btn btn-gold", href: "#/exam/" + m.id }, "Fazer a prova do módulo")];
    } else {
      examCard = ["", h("span", { class: "chip", text: "Bloqueada" }), `Conclua as ${st.total - st.done} aulas restantes para liberar a prova.`,
        M.isAdmin() ? h("a", { class: "btn btn-ghost", href: "#/exam/" + m.id }, "Abrir a prova (acesso de gestor)") : null];
    }
    const modNode = h("div", null,
      h("div", { class: "page-head" },
        h("span", { class: "chip chip-gold", style: "justify-self:start", text: `Módulo ${m.n}` }),
        h("h2", { text: m.title }),
        h("p", { text: m.tagline }),
        h("p", null, h("strong", { text: "Ao final você consegue: " }), m.outcome)),
      h("a", { class: "btn btn-gold reel-cta", href: "#/l/" + m.lessons[Math.max(0, m.lessons.findIndex((l) => !p.lessons[l.id]))].id },
        M.icon("arrow", 18), st.done === 0 ? "Assistir o módulo" : allDone ? "Rever o módulo" : "Continuar de onde parou"),
      h("ul", { class: "lesson-reel" }, m.lessons.map((l, k) => {
        const done = !!p.lessons[l.id];
        const cur = !done && k === m.lessons.findIndex((x) => !p.lessons[x.id]);
        const open = M.lessonOpen(m, k);
        const inner = [
          h("span", { class: "ring", "aria-hidden": "true" }, h("b", { text: done ? "✓" : open ? String(k + 1) : "" }, done || open ? null : M.icon("lock", 20))),
          h("strong", { text: l.title }),
          h("span", { class: "meta", text: open ? `${l.minutes} min` : "assista a anterior" })];
        return h("li", null, open
          ? h("a", { class: "reel-item" + (done ? " done" : "") + (cur ? " cur" : ""), href: "#/l/" + l.id }, inner)
          : h("div", { class: "reel-item locked", role: "img", "aria-label": `${l.title}: bloqueada. Assista a aula anterior para liberar.` }, inner));
      })),
      h("section", { class: "panel exam-card " + examCard[0], style: "margin-top:28px" },
        h("div", { class: "row row-between" }, h("h3", { style: "margin:0", text: M.examName(m.id) }), examCard[1]),
        h("p", { class: "muted", style: "margin:10px 0 14px", text: examCard[2] }),
        examCard[3],
        h("details", { style: "margin-top:16px" }, h("summary", { style: "cursor:pointer;font-weight:700", text: "Como a nota funciona" }), M.rulesList())));
    modNode._crumbs = [{ text: "Trilhas", href: M.trailsHref }, { text: t.title, href: M.trailHref(t) }, { text: "Módulo " + m.n }];
    return modNode;
  };
  function notFound() {
    return h("div", { class: "empty" }, h("h3", { text: "Página não encontrada" }), h("a", { class: "btn btn-gold", href: "#/" }, "Voltar ao Feed"));
  }
  M.notFound = notFound;

  /* a aula (stories) fica em stories.js */

  /* ───── conta ───── */
  M.views.account = async function () {
    await M.refreshMe();
    const u = M.session.user;
    const err = h("div");
    const form = h("form", { novalidate: true });
    const f = (id, label, ac) => h("div", { class: "field" }, h("label", { for: id, text: label }), h("input", { class: "input", id, name: id, type: "password", autocomplete: ac, required: true }));
    const btn = h("button", { class: "btn btn-gold", type: "submit", text: "Salvar nova senha" });
    form.append(f("current", "Senha atual", "current-password"), f("next", "Nova senha", "new-password"), f("next2", "Repita a nova senha", "new-password"), btn);
    form.onsubmit = async (e) => {
      e.preventDefault(); err.replaceChildren();
      const v = Object.fromEntries(new FormData(form).entries());
      btn.disabled = true;
      try { await M.post("auth/password", v); form.reset(); M.toast("Senha alterada.", "ok"); }
      catch (ex) { err.replaceChildren(h("div", { class: "form-error", role: "alert", text: ex.message })); }
      btn.disabled = false;
    };
    return h("div", { style: "max-width:560px" },
      h("div", { class: "page-head" }, h("h2", { text: "Minha conta" })),
      h("section", { class: "panel" }, h("h3", { text: "Seus dados" }),
        h("p", { style: "margin:0" }, h("strong", { text: u.name }), h("br"), h("span", { class: "muted", text: u.email })),
        h("p", { style: "margin:12px 0 0" }, h("span", { class: "chip " + (u.role !== "aluno" ? "chip-gold" : ""), text: M.roleLabel(u) }))),
      h("section", { class: "panel" }, h("h3", { text: "Foto de perfil" }),
        h("p", { class: "muted small", style: "margin:0 0 12px", text: "Sua foto aparece nos posts, comentários, ranking e busca." }),
        M.avatarForm()),
      h("section", { class: "panel" }, h("h3", { text: "Seu @ no feed" }),
        h("p", { class: "muted small", style: "margin:0 0 12px", text: "O @ é o seu nome de usuário: o time te encontra na busca e te marca nos posts. Dá para trocar uma vez a cada 7 dias." }),
        M.nickForm()),
      M.pushCard ? M.pushCard() : null,
      h("section", { class: "panel" }, h("h3", { text: "Tour guiado" }),
        h("p", { class: "muted small", style: "margin:0 0 12px", text: "Um passeio rápido mostrando onde fica cada coisa no BRYANT SHOOT." }),
        h("button", { class: "btn btn-ghost", type: "button", onclick: () => { if (M.tour) M.tour.start({ force: true }); } }, M.icon("rocket", 18), " Rever o tour")),
      h("section", { class: "panel" }, h("h3", { text: "Tipo de tela" }),
        h("p", { class: "muted small", style: "margin:0 0 12px", text: "Se o sistema ficou ruim no seu aparelho, escolha aqui como quer ver. A escolha fica salva neste aparelho." }),
        M.modeSwitch({ label: false })),
      h("section", { class: "panel" }, h("h3", { text: "Trocar senha" }), err, form),
      versionPanel());
  };

  // Mostra qual versão está no ar (site e servidor). Se forem diferentes, o envio no GitHub ficou pela metade.
  function versionPanel() {
    const line = h("p", { class: "muted small", style: "margin:0", text: "Site: " + M.BUILD + " · Servidor: conferindo…" });
    const note = h("p", { class: "small", style: "margin:8px 0 0" });
    fetch("/api/health", { cache: "no-store" }).then((r) => r.json()).then((d) => {
      line.textContent = "Site: " + M.BUILD + " · Servidor: " + (d.build || "?");
      if (d.build !== M.BUILD) note.textContent = "As versões estão diferentes. Envie a pasta completa de novo ao GitHub e aguarde o Netlify publicar.";
    }).catch(() => { line.textContent = "Site: " + M.BUILD + " · Servidor: sem resposta"; });
    return h("section", { class: "panel" }, h("h3", { text: "Versão do sistema" }),
      h("p", { class: "muted small", style: "margin:0 0 8px", text: "Se algo que já foi corrigido continua dando erro, confira aqui se a versão nova está no ar." }), line, note);
  }

  /* ───── certificados ───── */
  M.views.cert = async function (trailId) {
    await M.refreshMe();
    if (!trailId) {
      const items = M.trails().map((t) => {
        const v = M.tp(t), ok = v.finalStatus === "approved";
        return h(ok ? "a" : "div", { class: "mod-card" + (ok ? "" : " locked"), href: ok ? "#/cert/" + t.id : null },
          h("div", { class: "mod-n", text: ok ? "★" : "·" }),
          h("div", null, h("h3", { text: t.title }), h("p", { text: ok ? "Aprovado na prova final. Clique para ver, imprimir ou salvar em PDF." : "Disponível depois da aprovação na prova final desta trilha." })),
          h("div", { class: "chips row", style: "justify-content:flex-end" }, ok ? h("span", { class: "chip chip-good", text: "Liberado" }) : h("a", { class: "chip", href: M.trailHref(t), text: "Ir para a trilha" })));
      });
      return h("div", null,
        h("div", { class: "page-head" }, h("h2", { text: "Certificados" }), h("p", { text: "Você ganha um certificado ao ser aprovado na prova final de cada trilha." })),
        h("div", { class: "mod-list" }, items));
    }
    const t = M.trailById(trailId);
    if (!t) return notFound();
    let d;
    try { d = await M.get("certificate?trail=" + encodeURIComponent(t.id)); }
    catch (ex) {
      const v = M.tp(t);
      const missing = t.modules.length - v.modulesApproved;
      return h("div", { class: "empty" }, h("h3", { text: "Certificado ainda não liberado" }),
        h("p", { text: missing ? `Em ${t.title}, faltam ${missing} ${missing === 1 ? "módulo aprovado" : "módulos aprovados"} e a prova final.` : `Em ${t.title}, falta ser aprovado na prova final.` }),
        h("a", { class: "btn btn-gold", href: M.trailHref(t) }, "Voltar à trilha"));
    }
    const node = h("div", null,
      h("div", { class: "cert" },
        M.brand("#/cert"),
        h("p", { class: "muted", style: "margin-top:28px", text: "Certificamos que" }),
        h("div", { class: "who", text: d.name }),
        h("p", { text: "concluiu com aprovação a formação" }),
        h("h1", { text: d.course }),
        h("p", { class: "muted", text: `Aprovado na prova final${d.pct ? " com " + d.pct + "%" : ""} em ${M.fmtDate(d.finishedAt)}.` }),
        h("p", { class: "code", text: "Código de verificação: " + d.code })),
      h("div", { class: "row no-print", style: "justify-content:center;margin-top:24px" },
        h("button", { class: "btn btn-gold", type: "button", onclick: () => window.print() }, "Imprimir ou salvar em PDF"),
        h("a", { class: "btn btn-ghost", href: "#/cert" }, "Todos os certificados")));
    node._crumbs = [{ text: "Certificados", href: "#/cert" }, { text: t.title }];
    return node;
  };
})();

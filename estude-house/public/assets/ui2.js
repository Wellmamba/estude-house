/* Visual v2: tela "Você" (celular) e gesto de arrastar para trocar de aba. */
(function () {
  const { h } = M;

  /* ───── Você: no celular, o que antes abria o menu lateral do PC ───── */
  M.views.voce = async function () {
    await M.refreshMe();
    const u = M.session.user;
    const isStaff = M.isAdmin();
    const row = (href, icon, text, sub, badge, onclick) => {
      const el = h(onclick ? "button" : "a", { class: "vrow", ...(onclick ? { type: "button" } : { href }) },
        h("span", { class: "v-ico" }, M.icon(icon, 20)),
        h("span", { class: "v-txt" }, h("strong", { text }), sub ? h("small", { text: sub }) : null),
        badge ? h("b", { class: "v-n", text: String(badge) }) : null, M.icon("chevr", 18));
      if (onclick) el.addEventListener("click", onclick);
      return el;
    };
    const section = (title, ...rows) => h("section", { class: "vsec" }, title ? h("h3", { class: "vsec-h", text: title }) : null, h("div", { class: "vlist" }, rows.filter(Boolean)));

    const head = h("section", { class: "panel vhead" },
      h("a", { href: "#/conta", "aria-label": "Minha conta" }, M.avatar(u, 64)),
      h("div", { class: "vhead-info" },
        h("strong", { text: u.name }),
        h("span", { class: "muted small", text: u.email }),
        h("div", { class: "row", style: "gap:6px;margin-top:6px;flex-wrap:wrap" },
          isStaff ? h("span", { class: "chip chip-gold chip-xs", text: u.role === "subadmin" ? "Sub-adm" : "Gestor" }) : h("span", { class: "chip chip-xs", text: "Aluno" }),
          u.role === "aluno" ? h("span", { class: "chip chip-gold chip-xs" }, M.icon("bolt", 12), `${M.totalXp()} pts`) : null)));

    const mine = section("Meu espaço",
      row("#/conta", "user", "Minha conta", "Foto e senha"),
      row("#/cert", "cert", "Certificados", "Trilhas concluídas"),
      u.role === "aluno" ? row("#/forum/envios", "chat", "Dúvidas e sugestões", "Fale com os gestores") : null);

    const push = M.pushRow ? M.pushRow() : null;

    const adm = isStaff ? [
      M.can("usuarios") ? section("Gestão", row("#/admin", "shield", "Painel", "Visão geral do time")) : null,
      ...M.adminGroups().map((g) => section(g.label, ...g.items.map((i) => row(i.href, i.icon, i.text, "", i.badge ? M.adminBadge(i.key) : 0)))),
    ] : [];

    const device = section("Este aparelho",
      push,
      h("div", { class: "vmode" }, h("span", { class: "v-ico" }, M.icon("phone", 20)), h("span", { class: "v-txt" }, h("strong", { text: "Tipo de tela" }), h("small", { text: "Celular ou computador" })), M.modeSwitch({ label: false })),
      M.tour ? row("", "help", "Rever o tour guiado", "Um passeio de 1 minuto", 0, () => M.tour.start({ force: true })) : null,
      row("", "out", "Sair da conta", "", 0, () => M.logout()));

    return h("div", { class: "voce" }, head, mine, ...adm, device);
  };

  /* ───── arrastar para o lado troca de aba (celular) ───── */
  const TABS = ["home", "trails", "search", "voce"];
  const HREF = { home: "#/", trails: "#/trilhas", search: "#/busca", voce: "#/voce" };
  const mobileLayout = () => document.documentElement.getAttribute("data-mode") === "mobile" || matchMedia("(max-width: 860px)").matches;
  const blocked = (el) => {
    /* não rouba o gesto de listas que rolam para o lado, campos de texto, janelas e telas cheias */
    for (let n = el; n && n !== document.body; n = n.parentElement) {
      if (n.matches?.("input, textarea, select, .stories, .modal, .dlg, .tour-layer, .notif-panel, .emoji-pop, .no-swipe")) return true;
      const cs = n.nodeType === 1 ? getComputedStyle(n) : null;
      if (cs && /(auto|scroll)/.test(cs.overflowX) && n.scrollWidth > n.clientWidth + 4) return true;
    }
    return false;
  };
  function currentTab() {
    const a = document.querySelector('.tabbar .tab[aria-current="page"]');
    const k = a?.dataset.key;
    return TABS.indexOf(k);
  }
  let g = null;
  const pageEl = () => document.querySelector(".page");
  document.addEventListener("touchstart", (ev) => {
    g = null;
    if (ev.touches.length !== 1 || !mobileLayout() || !document.querySelector(".tabbar")) return;
    const t = ev.touches[0];
    if (t.clientX < 22 || t.clientX > innerWidth - 22) return; /* bordas ficam para o "voltar" do sistema */
    if (blocked(ev.target) || currentTab() < 0) return;
    g = { x: t.clientX, y: t.clientY, at: Date.now(), lock: null, dx: 0 };
  }, { passive: true });
  document.addEventListener("touchmove", (ev) => {
    if (!g) return;
    const t = ev.touches[0];
    const dx = t.clientX - g.x, dy = t.clientY - g.y;
    if (g.lock === null && (Math.abs(dx) > 12 || Math.abs(dy) > 12)) g.lock = Math.abs(dx) > Math.abs(dy) * 1.4 ? "x" : "y";
    if (g.lock === "y") { g = null; return; }
    if (g.lock === "x") {
      g.dx = dx;
      const i = currentTab();
      /* nas pontas não há para onde ir: o conteúdo só dá uma "esticada" curta */
      const dead = (dx > 0 && i === 0) || (dx < 0 && i === TABS.length - 1);
      const p = pageEl();
      if (p) { p.style.transition = "none"; p.style.transform = `translateX(${Math.round(dx * (dead ? 0.12 : 0.3))}px)`; p.style.opacity = String(1 - Math.min(Math.abs(dx), 240) / 900); }
    }
  }, { passive: true });
  const reset = () => { const p = pageEl(); if (p) { p.style.transition = "transform .2s ease, opacity .2s ease"; p.style.transform = ""; p.style.opacity = ""; setTimeout(() => { if (p.style.transition) p.style.transition = ""; }, 240); } };
  document.addEventListener("touchend", () => {
    if (!g) return;
    const { dx, lock, at } = g; g = null;
    if (lock !== "x") return;
    const i = currentTab();
    const fast = Date.now() - at < 450;
    if (Math.abs(dx) >= (fast ? 50 : 90) && i >= 0) {
      const next = dx < 0 ? i + 1 : i - 1;
      if (next >= 0 && next < TABS.length) {
        const p = pageEl();
        if (p) { p.style.transition = ""; p.style.transform = ""; p.style.opacity = ""; }
        document.documentElement.dataset.swipe = dx < 0 ? "next" : "prev";
        setTimeout(() => { delete document.documentElement.dataset.swipe; }, 320);
        if (navigator.vibrate) { try { navigator.vibrate(8); } catch {} }
        location.hash = HREF[TABS[next]];
        return;
      }
    }
    reset();
  }, { passive: true });
  document.addEventListener("touchcancel", () => { g = null; reset(); }, { passive: true });
})();

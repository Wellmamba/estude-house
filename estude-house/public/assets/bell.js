/* Sino de notificações: avisos da equipe, prova liberada e resposta do fórum. */
(function () {
  const { h } = M;
  const NTEXT = {
    all: () => "avisou toda a equipe",
    forum_ok: () => "aprovou a sua dúvida/sugestão: virou publicação do fórum",
    forum_no: () => "reprovou a sua dúvida/sugestão. Veja o motivo",
    prova_nova: () => "liberou uma prova para você",
  };
  M.bell = function () {
    const badge = h("span", { class: "bell-n", hidden: true });
    const btn = h("button", { class: "icon-btn bell-btn", type: "button", "aria-label": "Notificações", "aria-expanded": "false", "aria-haspopup": "true" }, M.icon("bell", 20), badge);
    const wrap = h("div", { class: "bell-wrap" }, btn);
    let panel = null, timer = null;
    const setN = (n) => {
      const more = n > (M.session.unread || 0);
      M.session.unread = n; badge.hidden = !n; badge.textContent = n > 9 ? "9+" : String(n || ""); btn.setAttribute("aria-label", n ? `Notificações: ${n} novas` : "Notificações");
      /* com notificação nova o sininho fica pulando; ao abrir a lista ele sossega */
      btn.classList.toggle("has-new", n > 0);
      if (more) { btn.classList.remove("rang"); void btn.offsetWidth; btn.classList.add("rang"); }
    };
    setN(M.session.unread || 0);
    M.updateBell = () => setN(M.session.unread || 0);
    function close() { if (!panel) return; panel.remove(); panel = null; btn.setAttribute("aria-expanded", "false"); document.removeEventListener("pointerdown", onDoc); document.removeEventListener("keydown", onKey); }
    const onDoc = (e) => { if (!wrap.contains(e.target)) close(); };
    const onKey = (e) => { if (e.key === "Escape") { close(); btn.focus(); } };
    async function open() {
      panel = h("div", { class: "notif-panel", role: "dialog", "aria-label": "Notificações" }, h("div", { class: "notif-head" }, h("strong", { text: "Notificações" })), M.loading("Carregando…"));
      const pushBtn = () => h("button", { class: "linkish notif-push", type: "button", onclick: () => { close(); M.openPush && M.openPush(); } }, M.icon("bell", 14), "Avisos no aparelho");
      wrap.append(panel); btn.setAttribute("aria-expanded", "true");
      setTimeout(() => { document.addEventListener("pointerdown", onDoc); document.addEventListener("keydown", onKey); }, 0);
      try {
        const d = await M.get("notifs");
        if (!panel) return;
        const body = d.items.length
          ? h("ul", { class: "notif-list" }, d.items.map((n) => h("li", null, h("a", { class: "notif-item" + (n.unread ? " unread" : ""), href: n.link || "#/", onclick: () => close() },
            n.by ? M.avatar(n.by, 34) : h("span", { class: "notif-ico" }, M.icon("bell", 16)),
            h("span", { class: "notif-txt" },
              h("span", null, h("strong", { text: n.by?.name || "Equipe" }), " " + (NTEXT[n.type] ? NTEXT[n.type](n) : "enviou uma notificação")),
              n.text ? h("span", { class: "muted small notif-snip", text: n.text }) : null,
              h("span", { class: "muted small", text: M.timeAgo(n.at) }))))))
          : h("p", { class: "muted", style: "padding:18px;margin:0;text-align:center", text: "Nada por aqui ainda. Avisos da equipe, provas liberadas e respostas do fórum aparecem aqui." });
        panel.replaceChildren(h("div", { class: "notif-head" }, h("strong", { text: "Notificações" }), pushBtn()), body);
        if (d.unread) { setN(0); M.post("notifs/read").catch(() => {}); }
      } catch (e) { panel?.replaceChildren(h("p", { class: "form-error", style: "margin:12px", text: e.message })); }
    }
    btn.addEventListener("click", () => (panel ? close() : open()));
    // confere se chegou coisa nova de tempos em tempos, só com a aba aberta
    clearInterval(M._bellTimer);
    M._bellTimer = timer = setInterval(async () => {
      if (document.hidden || !M.session.token || !document.body.contains(wrap)) return;
      try { const d = await M.get("notifs"); if (!panel) setN(d.unread); } catch {}
    }, 90000);
    return wrap;
  };
})();

/* Menu lateral de XP (check-in e metas) e tela de ranking por engajamento. */
(function () {
  const { h } = M;

  /* ───── menu do XP, à direita ───── */
  let openEl = null;
  M.closeXp = function () {
    if (!openEl) return;
    const { overlay, panel, onKey, back } = openEl;
    document.removeEventListener("keydown", onKey);
    panel.classList.remove("in"); overlay.classList.remove("in");
    setTimeout(() => { panel.remove(); overlay.remove(); }, 220);
    openEl = null;
    if (back) back.focus();
  };

  M.openXp = async function () {
    if (openEl) { M.closeXp(); return; }
    const back = document.activeElement;
    const overlay = h("div", { class: "xp-overlay", onclick: () => M.closeXp() });
    const body = h("div", { class: "xp-body" }, M.loading());
    const closeBtn = h("button", { class: "icon-btn", type: "button", "aria-label": "Fechar", onclick: () => M.closeXp() }, M.icon("x", 20));
    const panel = h("aside", { class: "xp-drawer", role: "dialog", "aria-modal": "true", "aria-label": "Meu XP" },
      h("header", { class: "xp-head" }, h("strong", { text: "Meu XP" }), closeBtn), body);
    const onKey = (e) => { if (e.key === "Escape") M.closeXp(); };
    document.addEventListener("keydown", onKey);
    document.body.append(overlay, panel);
    requestAnimationFrame(() => { overlay.classList.add("in"); panel.classList.add("in"); closeBtn.focus(); });
    openEl = { overlay, panel, onKey, back };
    try { await draw(body); } catch (e) { body.replaceChildren(h("div", { class: "form-error", text: e.message })); }
  };

  async function draw(body) {
    const v = await M.get("engage/me");
    M.session.engage = { ...M.session.engage, xp: v.xp, streak: v.streak, checkedToday: v.checkedToday };
    if (M.updateXpChip) M.updateXpChip();
    const trailXp = M.session.progress?.xp || 0;
    const total = trailXp + v.xp;

    const hero = h("section", { class: "xp-hero" },
      h("div", { class: "xp-big" }, h("b", { text: String(total) }), h("span", { text: "XP no total" })),
      h("div", { class: "xp-split" },
        h("span", null, h("b", { text: String(trailXp) }), " nas trilhas"),
        h("span", null, h("b", { text: String(v.xp) }), " em engajamento")));

    if (!v.earns) {
      body.replaceChildren(hero,
        h("p", { class: "muted", text: "Gestores acompanham o time, mas não ganham XP de engajamento nem aparecem no ranking." }),
        h("div", { class: "xp-links" }, h("a", { class: "btn btn-ghost", href: "#/ranking", onclick: () => M.closeXp() }, "Ver ranking"), M.isAdmin() ? h("a", { class: "btn btn-ghost", href: "#/admin/engajamento", onclick: () => M.closeXp() }, "Configurar XP e metas") : null));
      return;
    }

    const ck = h("section", { class: "xp-card" });
    function drawCk() {
      if (v.checkedToday) {
        ck.replaceChildren(h("div", { class: "row row-between" }, h("div", null, h("strong", { text: "Check-in de hoje feito" }), h("div", { class: "muted small", text: v.streak > 1 ? `${v.streak} dias seguidos` : "Volte amanhã" })), h("span", { class: "ck-ico" }, M.icon("check", 20))));
      } else {
        const b = h("button", { class: "btn btn-gold", type: "button", style: "width:100%" }, M.icon("bolt", 18), `Fazer check-in (+${v.rules.xp.checkin} XP)`);
        b.addEventListener("click", async () => {
          b.disabled = true;
          try {
            const r = await M.post("engage/checkin");
            M.bumpXp(r);
            await draw(body);
          } catch (e) { M.toast(e.message, "err"); b.disabled = false; }
        });
        ck.replaceChildren(h("strong", { text: "Check-in diário" }), h("div", { class: "muted small", style: "margin:2px 0 10px", text: v.streak > 0 ? `Sequência atual: ${v.streak} ${v.streak === 1 ? "dia" : "dias"}. Cada dia seguido soma bônus.` : "Entre todo dia. Dias seguidos rendem bônus." }), b);
      }
    }
    drawCk();

    const goal = (g) => {
      const pct = M.pct(g.progress, g.target);
      return h("li", { class: "goal" + (g.done ? " done" : "") },
        h("div", { class: "row row-between", style: "gap:8px;align-items:flex-start" },
          h("span", { class: "g-title", text: g.title }),
          h("span", { class: "chip " + (g.done ? "chip-good" : "chip-gold") + " chip-xs", text: g.done ? "Feita" : `+${g.xp} XP` })),
        h("div", { class: "bar", role: "progressbar", "aria-valuenow": String(pct), "aria-valuemin": "0", "aria-valuemax": "100", "aria-label": g.title }, h("i", { style: `width:${pct}%` })),
        h("span", { class: "small muted", text: `${g.progress}/${g.target}` }));
    };
    const day = v.goals.filter((g) => g.period === "day"), week = v.goals.filter((g) => g.period === "week");
    const r = v.rules;
    body.replaceChildren(hero, ck,
      day.length ? h("section", null, h("h4", { class: "xp-h", text: "Metas de hoje" }), h("ul", { class: "goals" }, day.map(goal))) : null,
      week.length ? h("section", null, h("h4", { class: "xp-h", text: "Metas da semana" }), h("ul", { class: "goals" }, week.map(goal))) : null,
      h("section", null, h("h4", { class: "xp-h", text: "Como ganhar XP" }),
        h("ul", { class: "earn" },
          h("li", null, h("b", { text: `+${r.xp.checkin}` }), ` check-in diário (+${r.xp.streakBonus} por dia seguido, até +${r.xp.streakBonusMax})`),
          h("li", null, h("b", { text: `+${r.xp.post}` }), ` post aprovado (até ${r.caps.post} por dia)`),
          h("li", null, h("b", { text: `+${r.xp.comment}` }), ` comentário de verdade (até ${r.caps.comment} por dia)`),
          h("li", null, h("b", { text: `+${r.xp.hype}` }), ` hype em post de outra pessoa (até ${r.caps.hype} por dia)`),
          h("li", null, h("b", { text: "+" }), " bônus por cada meta batida"))),
      v.log.length ? h("section", null, h("h4", { class: "xp-h", text: "Últimos ganhos" }), h("ul", { class: "xp-log" }, v.log.map((l) => h("li", null, h("span", { text: l.text }), h("b", { text: "+" + l.xp }))))) : null,
      h("div", { class: "xp-links" }, h("a", { class: "btn btn-ghost", href: "#/ranking", onclick: () => M.closeXp() }, M.icon("trophy", 18), "Ver ranking"), h("a", { class: "btn btn-ghost", href: "#/", onclick: () => M.closeXp() }, "Ir ao feed")));
  }

  /* ───── ranking ───── */
  M.views.ranking = async function () {
    await M.refreshMe();
    let period = "week";
    const holder = h("div");
    const tabs = h("div", { class: "tabs-lite", role: "tablist" }, [["week", "Semana"], ["month", "Mês"], ["all", "Geral"]].map(([k, t]) =>
      h("button", { type: "button", role: "tab", "aria-selected": String(period === k), text: t, onclick: (ev) => { period = k; tabs.querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", String(b === ev.currentTarget))); load(); } })));

    const meId = M.session.user.id;
    async function load() {
      holder.replaceChildren(M.loading());
      try {
        const d = await M.get("engage/ranking?period=" + period);
        if (!d.rows.length) {
          holder.replaceChildren(h("div", { class: "empty" }, h("h3", { text: "Ninguém pontuou ainda neste período" }), h("p", { text: "Faça o check-in, comente, dê hype e publique para abrir a corrida." }), h("a", { class: "btn btn-gold", href: "#/" }, "Ir ao feed")));
          return;
        }
        const row = (r) => h("li", { class: "rank-row" + (r.id === meId ? " me" : "") + (r.pos <= 3 ? " top" : "") },
          h("span", { class: "rank-pos", text: r.pos }),
          h("a", { href: M.profileHref(r), "aria-label": "Perfil de " + r.name }, M.avatar(r, 40)),
          h("div", { class: "rank-who" }, h("a", { href: M.profileHref(r), text: r.name }), h("span", { class: "muted small", text: (r.nickname ? "@" + r.nickname : "") + (r.streak > 1 ? ` · ${r.streak} dias seguidos` : "") })),
          h("b", { class: "rank-xp", text: r.xp + " XP" }));
        const pod = d.rows.slice(0, 3);
        const order = [pod[1], pod[0], pod[2]].filter(Boolean);
        holder.replaceChildren(
          d.me ? h("section", { class: "panel rank-me" }, h("span", { class: "chip chip-gold", text: `Você está em ${d.me.pos}º` }), h("span", { class: "muted", text: `${d.me.xp} XP ${period === "week" ? "esta semana" : period === "month" ? "neste mês" : "no total"}` })) : (M.session.user.role === "aluno" ? h("section", { class: "panel rank-me" }, h("span", { class: "muted", text: "Você ainda não pontuou neste período. Um check-in já coloca você na lista." })) : null),
          h("div", { class: "podium" }, order.map((r) => h("a", { class: "pod p" + r.pos, href: M.profileHref(r) }, h("span", { class: "pod-medal", text: r.pos }), M.avatar(r, r.pos === 1 ? 68 : 54), h("strong", { text: M.firstName(r.name) }), h("span", { class: "small muted", text: r.xp + " XP" })))),
          h("ol", { class: "rank-list" }, d.rows.map(row)));
      } catch (e) { holder.replaceChildren(h("div", { class: "form-error", text: e.message })); }
    }
    load();
    return h("div", { class: "feed" },
      h("div", { class: "page-head" }, h("h2", { text: "Ranking de engajamento" }), h("p", { text: "XP ganho com check-in, posts aprovados, comentários, hypes e metas. Só alunos aparecem." })),
      tabs, holder);
  };
})();

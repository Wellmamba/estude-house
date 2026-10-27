/* Feed das trilhas: a tela inicial. Mostra as TRILHAS agrupadas por CATEGORIA (as aulas só aparecem ao abrir a trilha),
   com um atalho para continuar de onde parou, as provas avulsas e as novidades do fórum.
   Tudo é montado a partir do andamento já carregado em M.session.progress (nada de posts nem de rede social). */
(function () {
  const { h } = M;
  const DAY = 864e5;

  /* ───── foto de perfil ───── */
  M.avatarForm = function ({ compact = false, onSaved } = {}) {
    const box = h("div", { class: "avatar-form" + (compact ? " compact" : "") });
    const input = h("input", { type: "file", accept: "image/*", hidden: true, "aria-label": "Escolher foto de perfil" });
    let uploads = null, busy = false;
    function paint() {
      const me = M.session.user;
      const off = uploads === false;
      const pick = h("button", { class: "btn btn-gold btn-sm", type: "button", disabled: busy || uploads === null || off, title: off ? "O envio de fotos ainda não foi ativado pela administração." : "" },
        M.icon("camera", 18), busy ? "Enviando…" : me.avatar ? "Trocar foto" : "Escolher foto");
      pick.addEventListener("click", () => input.click());
      const rm = me.avatar ? h("button", { class: "btn btn-ghost btn-sm", type: "button", disabled: busy, onclick: () => save("") }, "Remover foto") : null;
      box.replaceChildren(
        h("div", { class: "avatar-preview" }, M.avatar(me, compact ? 56 : 84)),
        h("div", { class: "avatar-actions" }, h("div", { class: "row", style: "gap:8px" }, pick, rm),
          compact ? null : h("span", { class: "hint", text: off ? "O envio de fotos ainda não foi ativado pela administração." : "JPG ou PNG. O sistema recorta um quadrado no centro da foto." }), input));
    }
    async function save(url) {
      busy = true; paint();
      try {
        const r = await M.post("auth/profile", { avatar: url });
        M.session.user = { ...M.session.user, ...r.user };
        document.querySelectorAll(".me-av").forEach((a) => a.replaceChildren(M.avatar(M.session.user, 40)));
        M.toast(url ? "Foto de perfil salva." : "Foto removida.", "ok");
        if (onSaved) onSaved(r.user);
      } catch (e) { M.toast(e.message, "err"); }
      busy = false; paint();
    }
    input.addEventListener("change", async () => {
      const file = input.files[0]; input.value = "";
      if (!file) return;
      if (!file.type.startsWith("image/") || file.type === "image/svg+xml") { M.toast("Escolha uma foto em JPG ou PNG.", "err"); return; }
      busy = true; paint();
      try {
        const blob = await M.shrinkImage(file, { square: 512, limit: 2 * 1048576 });
        const j = await M.cloudUpload(new File([blob], "perfil.jpg", { type: "image/jpeg" }), { kind: "image" });
        busy = false;
        await save(j.secure_url);
      } catch (e) { busy = false; M.toast(e.message, "err"); paint(); }
    });
    paint();
    M.get("feed/status").then((d) => { uploads = !!d.uploads; paint(); }).catch(() => { uploads = false; paint(); });
    return box;
  };

  const FILTERS = [["all", "Tudo"], ["going", "Em andamento"], ["new", "Não iniciadas"], ["done", "Concluídas"], ["prova", "Provas"], ["forum", "Fórum"]];
  const STATE_CHIP = { done: ["chip chip-good", "Concluída"], going: ["chip chip-gold", "Em andamento"], new: ["chip", "Não iniciada"] };
  const ago = (ts) => (ts ? M.timeAgo(ts) : "");
  const catHref = (c) => "#/trilhas/c/" + encodeURIComponent(c);

  /* cartão de trilha: o mesmo da tela Trilhas; leva para a página da trilha, onde ficam módulos e aulas */
  function trailCard(t) {
    const T = M.trailHelpers, v = M.tp(t), st = T.stateOfTrail(t), chip = STATE_CHIP[st], pct = M.pct(v.lessonsDone, v.lessonsTotal);
    return h("a", { class: "trail-card" + (st === "done" ? " is-done" : ""), href: M.trailHref(t) },
      h("div", { class: "row row-between" }, h("span", { class: "chip chip-tag", text: "Trilha" }),
        h("span", { class: "row" }, M.isInactive(t.id) ? h("span", { class: "chip chip-bad", text: "Inativa" }) : M.isRestricted(t.id) ? h("span", { class: "chip chip-gold", text: "Só escolhidos" }) : null, h("span", { class: chip[0], text: chip[1] }))),
      h("h3", { text: t.title }),
      h("p", { class: "trail-tag", text: t.tagline || t.subtitle || "" }),
      h("div", { class: "trail-meta" },
        h("span", { text: `${t.modules.length} ${t.modules.length === 1 ? "módulo" : "módulos"}` }), h("span", { text: `${v.lessonsTotal} ${v.lessonsTotal === 1 ? "aula" : "aulas"}` }), h("span", { text: T.hoursText(T.minutesOf(t)) })),
      h("div", { class: "trail-prog" },
        h("div", { class: "bar", role: "progressbar", "aria-valuenow": String(pct), "aria-valuemin": "0", "aria-valuemax": "100", "aria-label": `Progresso em ${t.title}` }, h("i", { style: `width:${pct}%` })),
        h("span", { class: "small muted", text: `${v.lessonsDone}/${v.lessonsTotal} aulas · ${v.modulesApproved}/${t.modules.length} módulos aprovados` })),
      h("span", { class: "trail-cta" }, st === "done" ? "Rever a trilha" : st === "going" ? "Continuar" : "Começar trilha", M.icon("arrow", 18)));
  }
  function provaCard(pv) {
    const st = pv.status === "approved" ? "done" : pv.attempts ? "going" : "new";
    const chip = st === "done" ? ["chip chip-good", "Aprovado"] : st === "going" ? ["chip chip-gold", `${pv.attempts} ${pv.attempts === 1 ? "tentativa" : "tentativas"}`] : ["chip chip-warn", "Para fazer"];
    return h("a", { class: "trail-card is-prova" + (st === "done" ? " is-done" : ""), href: "#/prova/" + pv.id },
      h("div", { class: "row row-between" }, h("span", { class: "chip chip-tag", text: "Prova" }), h("span", { class: chip[0], text: chip[1] })),
      h("h3", { text: pv.title }),
      h("p", { class: "trail-tag", text: pv.description || "Prova avulsa liberada pela administração." }),
      h("div", { class: "trail-meta" }, h("span", { text: `${pv.total} ${pv.total === 1 ? "questão" : "questões"}` }), h("span", { text: `nota mínima ${pv.passPct}%` })),
      h("span", { class: "trail-cta" }, st === "done" ? "Ver resultado" : st === "going" ? "Tentar de novo" : "Fazer a prova", M.icon("arrow", 18)));
  }
  const soonCard = (x) => h("div", { class: "trail-card is-soon", "aria-label": x.title + " (em breve)" },
    h("div", { class: "row row-between" }, h("span", { class: "chip chip-tag", text: "Trilha" }), h("span", { class: "chip", text: "Em breve" })),
    h("h3", { text: x.title }), h("p", { class: "trail-tag", text: x.tagline || "" }), h("span", { class: "trail-cta muted", text: "Disponível em breve" }));

  M.views.home = async function () {
    const [, provas, forum] = await Promise.all([M.refreshMe(), M.loadProvas(), M.get("forum/recentes").catch(() => ({ items: [] }))]);
    const T = M.trailHelpers, p = M.session.progress, trails = M.trails();
    const forumItems = forum.items || [];

    /* atalho: a trilha em andamento mais recente (abre a trilha, não a aula) */
    const going = trails.filter((t) => T.stateOfTrail(t) === "going" && T.nextStep(t)).sort((a, b) => T.lastActivity(b, p) - T.lastActivity(a, p))[0];
    let resume = null;
    if (going) {
      const ns = T.nextStep(going), v = M.tp(going), last = T.lastActivity(going, p);
      resume = h("section", { class: "panel next-card", "aria-label": "Continuar estudando" },
        h("div", null,
          h("span", { class: "chip chip-gold", text: ns.kind === "exam" ? "Prova liberada nesta trilha" : "Continue de onde parou" }),
          h("h3", { style: "margin-top:12px", text: going.title }),
          h("p", { class: "muted", style: "margin:6px 0 0", text: `${M.pct(v.lessonsDone, v.lessonsTotal)}% concluída${last ? " · última atividade " + ago(last) : ""}` })),
        h("a", { class: "btn btn-gold", href: M.trailHref(going) }, "Abrir trilha", M.icon("arrow", 18)));
    }

    /* itens do catálogo: trilhas, provas avulsas e trilhas "em breve", todas com categoria */
    const catOf = (tag) => { const c = String(tag || "").trim(); return !c || c.toLowerCase() === "trilha" ? "Geral" : c; };
    const items = [];
    for (const t of trails) items.push({ kind: "trail", cat: M.catOfTrail(t), state: T.stateOfTrail(t), t, last: T.lastActivity(t, p) });
    for (const pv of provas) items.push({ kind: "prova", cat: catOf(pv.tag === "Provas" ? "" : pv.tag), state: pv.status === "approved" ? "done" : pv.attempts ? "going" : "new", pv });
    for (const x of window.PROXIMAS || []) items.push({ kind: "soon", cat: x.id && M.session.cats?.map?.[x.id] ? M.session.cats.map[x.id] : catOf(x.tag), state: "new", x });
    const order = M.session.cats?.list || [];
    const rank = (c) => (c === "Geral" ? 1e6 : order.indexOf(c) >= 0 ? order.indexOf(c) : 1e5);
    const STATE_ORDER = { going: 0, new: 1, done: 2 };
    const KIND_ORDER = { trail: 0, prova: 1, soon: 2 };
    const cats = [...new Set(items.map((i) => i.cat))].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b, "pt-BR"));

    const list = h("div", { class: "fd-list" });
    const bar = h("div", { class: "fd-filters", role: "tablist", "aria-label": "Filtrar" });
    const countOf = (k) => k === "all" ? items.length + forumItems.length : k === "forum" ? forumItems.length : k === "prova" ? items.filter((i) => i.kind === "prova").length : items.filter((i) => i.kind !== "soon" && i.state === k).length;
    function section(title, nodes, href) {
      return h("section", { class: "fd-sec" },
        h("div", { class: "fd-sec-head" }, h("h3", { text: title }), h("span", { class: "muted small", text: `${nodes.length}` }), href ? h("a", { class: "small fd-sec-link", href }, "Ver categoria ", M.icon("arrow", 14)) : null),
        h("div", { class: "trail-grid dense" }, nodes));
    }
    function draw() {
      const cur = M.feedFilter && FILTERS.some(([k]) => k === M.feedFilter && (k === "all" || countOf(k))) ? M.feedFilter : "all";
      bar.replaceChildren(...FILTERS.map(([k, label]) => {
        const n = countOf(k);
        if (k !== "all" && !n) return null;
        return h("button", { class: "fd-chip", type: "button", role: "tab", "aria-selected": String(cur === k), onclick: () => { M.feedFilter = k; draw(); } }, label, h("b", { text: String(n) }));
      }).filter(Boolean));
      const out = [];
      if (cur !== "forum") {
        const show = items.filter((i) => i.kind !== "soon" && (cur === "all" || (cur === "prova" ? i.kind === "prova" : i.state === cur)));
        const pool = cur === "all" || cur === "new" ? [...show, ...items.filter((i) => i.kind === "soon")] : show;
        for (const c of cats) {
          const mine = pool.filter((i) => i.cat === c)
            .sort((a, b) => (STATE_ORDER[a.state] - STATE_ORDER[b.state]) || (KIND_ORDER[a.kind] - KIND_ORDER[b.kind]) || ((b.last || 0) - (a.last || 0)));
          if (!mine.length) continue;
          out.push(section(c === "Geral" ? "Trilhas" : c, mine.map((i) => i.kind === "trail" ? trailCard(i.t) : i.kind === "prova" ? provaCard(i.pv) : soonCard(i.x)), c !== "Geral" ? catHref(c) : null));
        }
      }
      if ((cur === "all" || cur === "forum") && forumItems.length) {
        out.push(h("section", { class: "fd-sec" },
          h("div", { class: "fd-sec-head" }, h("h3", { text: "Novidades do fórum" }), h("span", { class: "muted small", text: String(forumItems.length) })),
          h("div", { class: "fd-forum" }, forumItems.map((f) => h("a", { class: "fd-forum-item", href: "#/forum/" + f.id },
            h("span", { class: "fd-ico", "aria-hidden": "true" }, M.icon("chat", 18)),
            h("div", null, h("strong", { text: f.title }), h("span", { class: "muted small", text: [f.category, ago(f.createdAt)].filter(Boolean).join(" · ") }), f.snippet ? h("p", { class: "fd-text small", text: f.snippet }) : null))))));
      }
      list.replaceChildren(...(out.length ? out : [h("div", { class: "empty" }, h("h3", { text: "Nada por aqui" }), h("p", { text: "Quando houver novidades neste filtro, elas aparecem aqui." }))]));
    }
    draw();

    /* atalhos do gestor */
    const pend = (M.session.pendingSignups || 0) + (M.session.pendingForum || 0);
    const admin = M.isAdmin() ? h("section", { class: "panel fd-admin", "aria-label": "Atalhos do gestor" },
      h("div", null, h("b", { text: "Gestão" }), h("p", { class: "muted small", text: pend ? `${pend} ${pend === 1 ? "pendência aguarda" : "pendências aguardam"} a sua análise (cadastros e fórum).` : "Nada esperando análise agora." })),
      h("div", { class: "row", style: "flex-wrap:wrap" },
        M.can("trilhas") ? h("a", { class: "btn btn-ghost btn-sm", href: "#/admin/trilhas" }, "Trilhas") : null,
        M.can("aprovar") ? h("a", { class: "btn btn-ghost btn-sm", href: "#/admin/aprovacoes" }, "Aprovações") : null,
        M.can("forum") ? h("a", { class: "btn btn-ghost btn-sm", href: "#/admin/forum" }, "Fórum") : null,
        M.can("usuarios") ? h("a", { class: "btn btn-ghost btn-sm", href: "#/admin" }, "Painel") : null)) : null;

    const hasAny = trails.length || provas.length;
    const lessons = Object.keys(p.lessons || {}).length;
    const stats = trails.length ? h("div", { class: "fd-stats", "aria-label": "Seu andamento" },
      h("div", null, h("b", { text: String(trails.filter((t) => T.stateOfTrail(t) === "done").length) }), h("span", { text: "trilhas concluídas" })),
      h("div", null, h("b", { text: String(lessons) }), h("span", { text: "aulas feitas" })),
      h("div", null, h("b", { text: String(trails.reduce((a, t) => a + M.tp(t).modulesApproved, 0)) }), h("span", { text: "módulos aprovados" })),
      h("div", null, h("b", { text: String(M.totalXp()) }), h("span", { text: "pontos de trilha" }))) : null;

    return h("div", { class: "fd" },
      h("div", { class: "page-head" },
        h("h2", { text: "Olá, " + M.firstName(M.session.user.name) }),
        h("p", { text: "Suas trilhas por categoria. Abra uma trilha para ver os módulos e as aulas." })),
      admin, resume, stats,
      hasAny ? bar : null,
      hasAny ? list : h("div", { class: "empty" }, h("h3", { text: "Nenhuma trilha liberada para você ainda" }), h("p", { text: "Quando a administração liberar uma trilha, ela aparece aqui." })));
  };
})();

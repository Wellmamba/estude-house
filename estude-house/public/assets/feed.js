/* Feed das trilhas: a tela inicial. Reúne, num só fluxo, o que a pessoa precisa fazer e o que já conquistou nas trilhas:
   continuar de onde parou, provas liberadas, trilhas para começar, aprovações, certificados e as últimas do fórum.
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

  const FILTERS = [["all", "Tudo"], ["go", "Continuar"], ["exam", "Provas"], ["new", "Para começar"], ["win", "Conquistas"], ["forum", "Fórum"]];

  /* cartão do feed: cabeçalho (ícone + tipo + quando), título, texto, barra opcional e um botão */
  function card({ kind, icon, label, when, title, text, meta, pct, cta, href, tone, hero }) {
    return h("article", { class: "fd-card" + (tone ? " fd-" + tone : "") + (hero ? " fd-hero" : ""), "data-kind": kind },
      h("header", { class: "fd-head" },
        h("span", { class: "fd-ico", "aria-hidden": "true" }, M.icon(icon, 20)),
        h("div", { class: "fd-who" }, h("strong", { text: label }), when ? h("span", { class: "muted small", text: when }) : null)),
      h("h3", { class: "fd-title" }, href && !cta ? h("a", { href }, title) : title),
      text ? h("p", { class: "fd-text", text }) : null,
      meta && meta.length ? h("div", { class: "trail-meta" }, meta.map((m) => h("span", { text: m }))) : null,
      pct != null ? h("div", { class: "fd-prog" }, h("div", { class: "bar", role: "progressbar", "aria-valuenow": String(pct), "aria-valuemin": "0", "aria-valuemax": "100" }, h("i", { style: `width:${pct}%` })), h("span", { class: "small muted", text: pct + "%" })) : null,
      cta && href ? h("a", { class: "btn " + (hero ? "btn-gold" : "btn-ghost") + " fd-cta", href }, cta, M.icon("arrow", 18)) : null);
  }
  const ago = (ts) => (ts ? M.timeAgo(ts) : "");

  M.views.home = async function () {
    const [, provas, forum] = await Promise.all([M.refreshMe(), M.loadProvas(), M.get("forum/recentes").catch(() => ({ items: [] }))]);
    const T = M.trailHelpers, p = M.session.progress, trails = M.trails();
    const items = []; /* { f: filtro, g: grupo (0 ação, 1 linha do tempo, 2 convite), at, node } */

    /* 1) o que fazer agora: trilhas em andamento (próxima aula ou prova) */
    const going = trails.filter((t) => T.stateOfTrail(t) === "going" && T.nextStep(t)).sort((a, b) => T.lastActivity(b, p) - T.lastActivity(a, p));
    going.forEach((t, i) => {
      const ns = T.nextStep(t), v = M.tp(t), last = T.lastActivity(t, p);
      const isExam = ns.kind === "exam";
      items.push({ f: isExam ? "exam" : "go", g: 0, at: last, hero: i === 0, node: card({
        kind: isExam ? "exam" : "resume", icon: isExam ? "flag" : "play", tone: isExam ? "exam" : "",
        label: i === 0 ? "Continue de onde parou" : isExam ? "Prova liberada" : "Em andamento",
        when: last ? "última atividade " + ago(last) : "", hero: i === 0,
        title: ns.kind === "lesson" ? ns.title : ns.retry ? ns.title + ": refazer os erros" : ns.title,
        text: `${t.title}${ns.mod ? " · Módulo " + ns.mod.n : ""}`,
        pct: M.pct(v.lessonsDone, v.lessonsTotal),
        cta: ns.kind === "lesson" ? "Continuar aula" : ns.retry ? "Refazer os erros" : "Fazer a prova", href: ns.href,
      }) });
    });
    /* trilha concluída: certificado */
    trails.filter((t) => T.stateOfTrail(t) === "done").forEach((t) => {
      const fin = (p.history || []).find((x) => x.scope === M.finalScope(t) && x.outcome === "aprovado");
      const at = fin?.at || T.lastActivity(t, p);
      items.push({ f: "win", g: 1, at, node: card({ kind: "cert", icon: "cert", tone: "win", label: "Certificado liberado", when: ago(at),
        title: t.title, text: fin?.pct ? `Aprovado na prova final com ${M.fmtPct ? M.fmtPct(fin.pct) : Math.round(fin.pct) + "%"}. Veja, imprima ou salve em PDF.` : "Aprovado na prova final. Veja, imprima ou salve em PDF.",
        cta: "Ver certificado", href: "#/cert/" + t.id }) });
    });

    /* 2) provas avulsas que ainda não foram aprovadas */
    provas.filter((pv) => pv.status !== "approved").forEach((pv) => {
      items.push({ f: "exam", g: 0, at: 0, node: card({ kind: "prova", icon: "flag", tone: "exam", label: "Prova para fazer", when: pv.attempts ? `${pv.attempts} ${pv.attempts === 1 ? "tentativa" : "tentativas"}` : "",
        title: pv.title, text: pv.description || "Prova avulsa liberada pela administração.",
        meta: [`${pv.total} ${pv.total === 1 ? "questão" : "questões"}`, `nota mínima ${pv.passPct}%`], cta: pv.attempts ? "Tentar de novo" : "Fazer a prova", href: "#/prova/" + pv.id }) });
    });

    /* 3) linha do tempo: provas aprovadas e aulas concluídas recentemente */
    (p.history || []).filter((x) => x.outcome === "aprovado").forEach((x) => {
      if (M.trailOfFinal(x.scope)) return; /* a prova final já aparece como certificado */
      const final = false;
      const t = M.trailOfModule(x.scope);
      if (!t) return;
      items.push({ f: "win", g: 1, at: x.at, node: card({ kind: "pass", icon: "check", tone: "win", label: final ? "Prova final aprovada" : "Módulo aprovado", when: ago(x.at),
        title: final ? t.title : `Módulo ${M.modulo(x.scope)?.n ?? ""}: ${M.modulo(x.scope)?.title ?? ""}`.trim(), text: `${t.title}${x.pct != null ? " · nota " + Math.round(x.pct) + "%" : ""}`,
        cta: final ? "Ver certificado" : "Ver o módulo", href: final ? "#/cert/" + t.id : "#/m/" + x.scope }) });
    });
    const lessonOf = new Map();
    for (const t of trails) for (const m of t.modules) for (const l of m.lessons) lessonOf.set(l.id, { t, m, l });
    const groups = new Map();
    for (const [id, ts] of Object.entries(p.lessons || {})) {
      const ref = lessonOf.get(id), at = Number(ts) || 0;
      if (!ref || !at || Date.now() - at > 14 * DAY) continue;
      const day = new Date(at).toDateString() + "|" + ref.t.id;
      const g = groups.get(day) || { t: ref.t, at: 0, n: 0, last: null };
      g.n++; if (at > g.at) { g.at = at; g.last = ref; }
      groups.set(day, g);
    }
    for (const g of groups.values()) {
      items.push({ f: "win", g: 1, at: g.at, node: card({ kind: "lessons", icon: "book", label: g.n === 1 ? "Aula concluída" : `${g.n} aulas concluídas`, when: ago(g.at),
        title: g.n === 1 ? g.last.l.title : g.t.title, text: g.n === 1 ? `${g.t.title} · Módulo ${g.last.m.n}` : `Última: ${g.last.l.title}`, href: "#/l/" + g.last.l.id }) });
    }

    /* 4) novidades do fórum */
    (forum.items || []).forEach((f) => {
      items.push({ f: "forum", g: 1, at: f.createdAt, node: card({ kind: "forum", icon: "chat", label: "Novo no fórum" + (f.category ? " · " + f.category : ""), when: ago(f.createdAt),
        title: f.title, text: f.snippet, cta: "Ler no fórum", href: "#/forum/" + f.id }) });
    });

    /* 5) trilhas para começar (e as anunciadas como "em breve") */
    trails.filter((t) => T.stateOfTrail(t) === "new").forEach((t) => {
      const v = M.tp(t);
      items.push({ f: "new", g: 2, at: 0, node: card({ kind: "new", icon: "rocket", label: "Trilha para começar", when: M.catOfTrail(t) === "Geral" ? "" : M.catOfTrail(t),
        title: t.title, text: t.tagline || t.subtitle || "",
        meta: [`${t.modules.length} ${t.modules.length === 1 ? "módulo" : "módulos"}`, `${v.lessonsTotal} ${v.lessonsTotal === 1 ? "aula" : "aulas"}`, T.hoursText(T.minutesOf(t))],
        cta: "Começar trilha", href: M.trailHref(t) }) });
    });
    (window.PROXIMAS || []).forEach((x) => {
      items.push({ f: "new", g: 2, at: 0, node: card({ kind: "soon", icon: "book", label: "Em breve", title: x.title, text: x.tagline || "" }) });
    });

    items.sort((a, b) => a.g - b.g || b.at - a.at);

    /* barra de filtros e lista */
    const list = h("div", { class: "fd-list" });
    const bar = h("div", { class: "fd-filters", role: "tablist", "aria-label": "Filtrar o feed" });
    function draw() {
      const cur = M.feedFilter || "all";
      bar.replaceChildren(...FILTERS.map(([k, label]) => {
        const n = k === "all" ? items.length : items.filter((i) => i.f === k).length;
        if (k !== "all" && !n) return null;
        return h("button", { class: "fd-chip", type: "button", role: "tab", "aria-selected": String(cur === k), onclick: () => { M.feedFilter = k; draw(); } }, label, h("b", { text: String(n) }));
      }).filter(Boolean));
      const show = items.filter((i) => cur === "all" || i.f === cur);
      list.replaceChildren(...(show.length ? show.map((i) => i.node) : [h("div", { class: "empty" }, h("h3", { text: "Nada por aqui" }), h("p", { text: "Quando houver novidades nesta categoria, elas aparecem neste espaço." }))]));
    }
    draw();

    /* atalhos do gestor */
    const pend = (M.session.pendingSignups || 0) + (M.session.pendingForum || 0);
    const admin = M.isAdmin() ? h("section", { class: "panel fd-admin", "aria-label": "Atalhos do gestor" },
      h("div", null, h("b", { text: "Gestão" }), h("p", { class: "muted small", text: pend ? `${pend} ${pend === 1 ? "pendência aguarda" : "pendências aguardam"} a sua análise (cadastros e fórum).` : "Nada aguardando análise agora." })),
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
        h("p", { text: "Este é o seu feed das trilhas: o que continuar, as provas liberadas, o que você já conquistou e as novidades do fórum." })),
      admin, stats,
      hasAny ? bar : null,
      hasAny ? list : h("div", { class: "empty" }, h("h3", { text: "Nenhuma trilha liberada para você ainda" }), h("p", { text: "Quando a administração liberar uma trilha, ela aparece aqui." })));
  };
})();

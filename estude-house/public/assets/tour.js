/* Tour guiado do primeiro acesso: destaca partes da tela, uma por vez, com um cartão explicando.
   Abre sozinho na primeira vez que a pessoa chega ao Feed e pode ser revisto em "Minha conta".
   Funciona no celular e no computador: cada passo tenta vários seletores e usa o primeiro que está visível. */
(function () {
  const { h } = M;
  const SIDE = (k) => `.side .nav a[data-key="${k}"]`;
  const TAB = (k) => `.tabbar a[data-key="${k}"]`;
  const ME_TAB = ".tabbar .tab-me";

  function steps() {
    const u = M.session.user || {};
    const staff = M.isAdmin();
    const list = [
      { emoji: "🏀", title: `Bem-vindo, ${M.firstName(u.name || "")}!`, text: "Este é o BRYANT SHOOT, o ambiente de estudos da Mamba. Em 1 minuto eu te mostro onde fica cada coisa. Dá para sair quando quiser.", route: "#/" },
      { title: "Feed: o mural do time", text: "Posts, avisos, fotos e vídeos da equipe. Marque colegas com @, comente e reaja. Seu @ e sua foto você escolhe em Minha conta. Use os botões Curiosidade, Case, Dica e Conquista para postar mais rápido. No celular, arraste a tela para o lado para trocar de aba.", sel: [SIDE("home"), TAB("home")], route: "#/" },
      { title: "Reels", text: "Vídeos do time dos últimos 30 dias, um por vez, como no Instagram. Eles tocam sozinhos por até 30 segundos; arraste para cima para o próximo, dê hype e toque em “Ir para o post” para ver mais.", sel: [SIDE("reels"), TAB("reels")] },
      { title: "Destaques", text: "As bolinhas no topo do Feed são os Stories da equipe: novidades, metas e dicas. Bolinha com anel colorido é novidade. Assistir até o último card ganha XP.", sel: [".dst-bar .dst-item:not(.is-add)", ".dst-bar"], route: "#/", optional: true },
      { title: "Trilhas: onde você estuda", text: "Cada trilha tem aulas em formato Stories, quizzes, prova por módulo e uma prova final que libera o certificado.", sel: [SIDE("trails"), TAB("trails")] },
      { title: "Categorias e busca", text: "Com muitas trilhas, escolha uma categoria e veja quais trilhas ela tem. Também dá para buscar pelo nome e filtrar o que está em andamento. Provas liberadas para você aparecem aqui.", sel: [".cat-bar"], route: "#/trilhas", optional: true },
      { title: "Ranking", text: "Veja como o time está indo. Aulas, provas, check-in diário e participação no Feed dão XP.", sel: [SIDE("rank"), TAB("rank")] },
      { title: "Seu XP e check-in", text: "Toque aqui para ver seu XP, fazer o check-in do dia e acompanhar suas metas.", sel: [".xp-btn"] },
      { title: "Busca", text: "Procure pessoas, posts, aulas e dúvidas de qualquer lugar do sistema.", sel: [".top-search", TAB("search")] },
      { title: "Notificações", text: "O sino pula quando há novidade: alguém marcou você, comentou no seu post, aprovou algo seu ou liberou uma prova. Em Você > Avisos neste aparelho dá para receber isso também no celular e no computador, mesmo com o site fechado.", sel: [".bell-btn"] },
    ];
    if (u.role === "aluno") list.push({ title: "Dúvidas e sugestões", text: "Mandou uma dúvida ou ideia? Os gestores analisam, e o que for útil vira publicação para todo mundo. No celular, fica no menu Você.", sel: [SIDE("forum-envios"), ME_TAB] });
    list.push(
      { title: "Certificados", text: "Ao passar na prova final de uma trilha, o certificado fica disponível aqui. No celular, fica no menu Você.", sel: [SIDE("cert"), ME_TAB] },
      { title: "Minha conta", text: "Escolha seu @, sua foto e a senha. Aqui você também troca entre tela de celular e de computador e pode rever este tour.", sel: [SIDE("conta"), ME_TAB] });
    if (staff) {
      if (M.can("publicar")) list.push({ title: "Gestor: novo destaque", text: "O botão + cria um destaque. Você escolhe quanto tempo ele fica no ar (24 horas, 1 semana ou para sempre), pode pôr enquete em qualquer card e até acrescentar cards numa bolinha que já existe.", sel: [".dst-item.is-add"], route: "#/", optional: true });
      if (M.can("trilhas")) list.push({ title: "Gestor: trilhas e provas", text: "Em Gestão de trilhas você cria e edita trilhas, cria provas avulsas, escolhe quais alunos veem cada uma e acompanha os resultados.", sel: [SIDE("admin-trails"), '.nav-grp[data-grp="cont"] .nav-grp-h', ME_TAB] });
      if (M.can("publicar")) list.push({ title: "Gestor: avisos para o time", text: "Em Comunidade > Avisos você manda uma notificação para o sininho e para o celular e o computador de quem ativou os avisos. Há ideias prontas de mensagem.", sel: [SIDE("admin-avisos"), '.nav-grp[data-grp="com"] .nav-grp-h', ME_TAB] });
      if (M.can("aprovar")) list.push({ title: "Gestor: aprovações", text: "Novos cadastros e posts esperando liberação aparecem aqui, com o número de pendências.", sel: [SIDE("admin-approve"), '.nav-grp[data-grp="com"] .nav-grp-h', ME_TAB] });
    }
    list.push({ emoji: "🏆", title: "Tudo pronto!", text: "Comece pelas trilhas: é lá que o XP começa a render. Para rever este tour depois, vá em Minha conta.", final: true });
    return list;
  }

  const norm = (hash) => hash || "#/";
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const usable = (el) => {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return false;
    return r.right > 0 && r.left < innerWidth; // fora da tela para o lado = menu fechado no celular
  };
  const find = (sels) => { for (const s of sels || []) { for (const el of document.querySelectorAll(s)) if (usable(el)) return el; } return null; };

  let active = null;

  M.tour = {
    get active() { return !!active; },
    /* chamado depois de cada tela: abre sozinho na primeira vez, só no Feed */
    maybeStart(routeKey) {
      const u = M.session.user;
      if (active || !u || u.tourSeen !== false || M.session.tourAsked) return;
      if (routeKey !== "home" || norm(location.hash) !== "#/") return;
      M.session.tourAsked = true;
      setTimeout(() => { if (norm(location.hash) === "#/" && !active) M.tour.start(); }, 900);
    },
    async start({ force = false } = {}) {
      if (active) return;
      const all = steps();
      let i = 0;
      const layer = h("div", { class: "tour-layer", role: "dialog", "aria-modal": "true", "aria-label": "Tour guiado" });
      const shade = h("div", { class: "tour-shade" });
      const ring = h("div", { class: "tour-ring", hidden: true });
      const card = h("div", { class: "tour-card", "aria-live": "polite" });
      layer.append(shade, ring, card);
      document.body.append(layer);
      active = { layer };
      const prevFocus = document.activeElement;
      let token = 0, target = null;

      async function ensureRoute(step) {
        if (!step.route) return;
        if (norm(location.hash) !== step.route) {
          location.hash = step.route;
          await sleep(250);
        }
        // espera a tela montar (o alvo aparecer) por até ~2,5 s
        for (let k = 0; k < 25 && step.sel && !find(step.sel); k++) await sleep(100);
      }

      function place() {
        const step = all[i];
        if (!target || !document.body.contains(target)) target = find(step.sel);
        if (!target) { ring.hidden = true; shade.hidden = false; card.classList.add("is-center"); card.style.left = card.style.top = ""; return; }
        const r = target.getBoundingClientRect();
        const pad = 6;
        ring.hidden = false; shade.hidden = true;
        Object.assign(ring.style, { left: r.left - pad + "px", top: r.top - pad + "px", width: r.width + pad * 2 + "px", height: r.height + pad * 2 + "px" });
        card.classList.remove("is-center");
        const cw = card.offsetWidth, ch = card.offsetHeight, gap = 14, m = 12;
        let top = r.bottom + pad + gap;
        if (top + ch > innerHeight - m) top = r.top - pad - gap - ch;           // não cabe embaixo: vai em cima
        if (top < m) top = Math.min(Math.max(m, r.top + r.height / 2 - ch / 2), innerHeight - ch - m); // não cabe nem em cima: ao lado
        let left = r.left + r.width / 2 - cw / 2;
        if (top > r.top - pad - ch - 1 && top < r.bottom + pad && r.width < innerWidth * 0.6) left = r.right + pad + gap > innerWidth - cw - m ? r.left - pad - gap - cw : r.right + pad + gap;
        left = Math.min(Math.max(m, left), innerWidth - cw - m);
        card.style.left = left + "px"; card.style.top = top + "px";
      }

      async function show(n, dir = 1) {
        const my = ++token;
        i = n;
        const step = all[i];
        card.style.opacity = "0";
        await ensureRoute(step);
        if (my !== token) return;
        target = find(step.sel);
        if (!target && step.optional && !step.final) { // alvo inexistente (ex.: sem destaques ainda): pula
          if ((dir > 0 && i < all.length - 1) || (dir < 0 && i > 0)) return show(i + dir, dir);
        }
        if (target) {
          const r = target.getBoundingClientRect();
          if (r.top < 0 || r.bottom > innerHeight) { target.scrollIntoView({ block: "center", behavior: "instant" }); await sleep(60); }
        }
        const last = i === all.length - 1;
        const isCenter = !target;
        card.replaceChildren(
          step.emoji ? h("div", { class: "tour-emoji", "aria-hidden": "true", text: step.emoji }) : null,
          h("h3", { text: step.title }),
          h("p", { text: step.text }),
          h("div", { class: "tour-dots", "aria-hidden": "true" }, all.map((_, k) => h("i", { class: k === i ? "on" : "" }))),
          h("div", { class: "tour-actions" },
            last ? h("span") : h("button", { class: "tour-skip", type: "button", onclick: () => end(true), text: "Pular tour" }),
            h("span", { class: "row", style: "gap:8px" },
              h("span", { class: "tour-count", text: `${i + 1}/${all.length}` }),
              i > 0 ? h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => show(i - 1, -1), text: "Voltar" }) : null,
              h("button", { class: "btn btn-gold btn-sm", type: "button", "data-go": "", onclick: () => (last ? end(true, "#/trilhas") : show(i + 1, 1)), text: last ? "Ir para as trilhas" : i === 0 ? "Começar" : "Próximo" }))));
        card.classList.toggle("is-center", isCenter);
        place();
        card.style.opacity = "1";
        card.querySelector("[data-go]")?.focus({ preventScroll: true });
      }

      async function end(done, goTo) {
        token++;
        window.removeEventListener("resize", onMove);
        window.removeEventListener("scroll", onMove, true);
        document.removeEventListener("keydown", onKey, true);
        layer.remove();
        active = null;
        try { prevFocus?.focus?.({ preventScroll: true }); } catch {}
        if (done && M.session.user) {
          M.session.user.tourSeen = true;
          try { await M.post("auth/tour", {}); } catch { /* sem internet: tenta de novo no próximo acesso */ }
        }
        if (goTo) location.hash = goTo;
      }
      const onMove = () => { if (active) requestAnimationFrame(place); };
      const onKey = (e) => {
        if (e.key === "Escape") { e.preventDefault(); end(true); }
        else if (e.key === "ArrowRight") { e.preventDefault(); if (i < all.length - 1) show(i + 1, 1); }
        else if (e.key === "ArrowLeft") { e.preventDefault(); if (i > 0) show(i - 1, -1); }
        else if (e.key === "Tab") { // mantém o foco dentro do cartão
          const f = [...card.querySelectorAll("button")];
          if (!f.length) return;
          const first = f[0], lastB = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastB.focus(); }
          else if (!e.shiftKey && document.activeElement === lastB) { e.preventDefault(); first.focus(); }
          else if (!card.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
        }
      };
      window.addEventListener("resize", onMove);
      window.addEventListener("scroll", onMove, true);
      document.addEventListener("keydown", onKey, true);
      if (force) { /* revendo de propósito: começa do Feed */ }
      show(0, 1);
    },
  };
})();

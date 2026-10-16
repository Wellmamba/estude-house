/* Aulas em formato de stories: cada bloco do content.js vira um card; o aluno avança tocando, deslizando ou pelas setas.
   Aqui também ficam os blocos feitos para stories: hook (abertura), big (frase de impacto), jargon (termo traduzido na hora),
   conta (exemplo com números), recap (resumo). Os blocos antigos (p, list, steps, compare, callout, say, term, quiz, sim,
   shot, find, video, ruler) continuam funcionando: cada um ocupa um card. */
(function () {
  const { h } = M;
  const R = M.blockTypes;

  /* ───── blocos próprios de stories ───── */
  const sticker = (e) => (e ? h("span", { class: "sticker", text: e, "aria-hidden": "true" }) : null);

  R.hook = (b) => h("div", { class: "hook" }, sticker(b.emoji), h("h2", { class: "hook-title", text: b.title }), b.text ? h("p", { class: "hook-text", html: b.text }) : null);
  R.big = (b) => h("div", { class: "big" }, sticker(b.emoji), h("p", { class: "big-text", html: b.html }), b.sub ? h("p", { class: "big-sub", html: b.sub }) : null);
  R.jargon = (b) => h("div", { class: "jargon" },
    h("span", { class: "tag", text: b.tag || "Traduzindo na hora" }),
    h("div", { class: "jargon-term", text: b.term }),
    h("p", { class: "jargon-means", html: b.means }),
    b.ex ? h("p", { class: "jargon-ex", html: b.ex }) : null);
  R.conta = (b) => h("div", { class: "conta" },
    h("span", { class: "tag", text: b.title || "Conta real" }),
    h("ul", { class: "conta-rows" }, (b.rows || []).map((r) => h("li", { class: r[2] || "" }, h("span", { html: r[0] }), h("b", { text: r[1] })))),
    b.total ? h("div", { class: "conta-total" }, h("span", { html: b.total[0] }), h("b", { text: b.total[1] })) : null,
    b.note ? h("p", { class: "conta-note", html: b.note }) : null);
  R.recap = (b) => h("div", { class: "recap" },
    h("h3", { text: b.title || "Guarda isso" }),
    h("ul", null, (b.items || []).map((t) => h("li", null, h("span", { html: t })))));

  /* p e list aceitam `title` (vira o título do card; substitui o antigo bloco h) */
  const titled = (b, node) => (b.title ? h("div", { class: "txt" }, h("h3", { text: b.title }), node) : node);
  const basicP = R.p, basicList = R.list;
  R.p = (b) => titled(b, basicP(b));
  R.list = (b) => titled(b, basicList(b));

  const GATED = new Set(["quiz", "sim", "find"]); // só avança depois de fazer
  const NONAV = new Set(["quiz", "sim", "find", "shot", "video", "ruler"]); // toque no vazio não troca de card
  const MOOD = { hook: "gold", big: "violet", jargon: "pink", conta: "mint", say: "dark", recap: "violet", end: "gold" };
  const TONE_MOOD = { dica: "violet", atencao: "amber", exemplo: "mint", regra: "violet" };

  function moodOf(b, i) {
    if (b.t === "callout") return TONE_MOOD[b.tone] || "violet";
    if (MOOD[b.t]) return MOOD[b.t];
    if (NONAV.has(b.t)) return "dark";
    return i % 2 ? "plum" : "night";
  }

  /* prepara a lista de cards: junta títulos soltos (h) no card seguinte e garante capa e final */
  function buildCards(lesson) {
    const cards = [];
    let title = null;
    for (const b of lesson.blocks) {
      if (b.t === "h") { title = b.text; continue; }
      cards.push(title && (b.t === "p" || b.t === "list") && !b.title ? { ...b, title } : b);
      title = null;
    }
    if (!cards.length || cards[0].t !== "hook") cards.unshift({ t: "hook", emoji: "▶", title: lesson.title, text: lesson.goal });
    cards.push({ t: "end" });
    return cards;
  }

  M.views.lesson = async function (id) {
    await M.refreshMe();
    const found = M.aula(id);
    if (!found) return M.notFound();
    const { trail, mod, lesson, index } = found;
    const p = M.session.progress, st = M.tp(trail).modules[mod.n - 1];
    if (!st.unlocked && !M.isAdmin()) {
      return h("div", { class: "empty" }, h("h3", { text: "Aula bloqueada" }),
        h("p", { text: "Termine o módulo anterior para chegar aqui." }), h("a", { class: "btn btn-gold", href: M.trailHref(trail) }, "Voltar à trilha"));
    }
    if (!M.lessonOpen(mod, index)) {
      const prev = mod.lessons[index - 1];
      return h("div", { class: "empty" }, h("h3", { text: "Essa aula ainda está bloqueada" }),
        h("p", { text: "Assista a aula anterior até o fim para liberar essa." }), h("a", { class: "btn btn-gold", href: "#/l/" + prev.id }, "Ir para a aula anterior"));
    }
    const already = !!p.lessons[lesson.id];
    const cards = buildCards(lesson);
    const last = cards.length - 1;
    const nextL = index < mod.lessons.length - 1 ? mod.lessons[index + 1] : null;
    const answered = new Set();
    const ctx = {
      lessonId: lesson.id, quizN: 0,
      quizRegister: () => {},
      quizAnswered: (b) => { answered.add(b); paint(); },
    };
    const els = new Array(cards.length);
    let i = 0, dir = 1, shaking = 0;

    const bars = h("div", { class: "st-bars", role: "progressbar", "aria-valuemin": "1", "aria-valuemax": String(cards.length), "aria-label": "Progresso da aula" },
      cards.map(() => h("span", { class: "st-seg" }, h("i"))));
    const close = h("button", { class: "st-x", type: "button", "aria-label": "Sair da aula", onclick: () => M.go("#/m/" + mod.id) }, M.icon("x", 22));
    const head = h("div", { class: "st-head" },
      h("span", { class: "st-ring", "aria-hidden": "true" }, h("b", { text: String(mod.n) })),
      h("div", { class: "st-who" }, h("b", { text: lesson.title }), h("span", { text: `${trail.title.split(" ").slice(0, 3).join(" ")} · aula ${index + 1} de ${mod.lessons.length}` })),
      close);
    const card = h("div", { class: "st-card", tabindex: "-1", "aria-live": "polite" });
    const prevBtn = h("button", { class: "st-nav st-prev", type: "button", "aria-label": "Card anterior", onclick: () => go(-1) }, M.icon("back", 20));
    const nextBtn = h("button", { class: "st-next", type: "button", onclick: () => go(1) });
    const count = h("span", { class: "st-count" });
    const foot = h("div", { class: "st-foot" }, prevBtn, count, nextBtn);
    const frame = h("div", { class: "st-frame", "data-mood": "night" }, h("div", { class: "st-top" }, bars, head), card, foot);
    const arrowL = h("button", { class: "st-arrow st-arrow-l", type: "button", "aria-label": "Card anterior", onclick: () => go(-1) }, M.icon("back", 22));
    const arrowR = h("button", { class: "st-arrow st-arrow-r", type: "button", "aria-label": "Próximo card", onclick: () => go(1) }, M.icon("arrow", 22));
    const node = h("article", { class: "stories", "aria-label": "Aula: " + lesson.title }, arrowL, frame, arrowR);

    const gatedNow = () => !already && GATED.has(cards[i].t) && !answered.has(cards[i]);

    function endCard() {
      const go2 = nextL ? { href: "#/l/" + nextL.id, text: "Próxima aula" } : { href: "#/m/" + mod.id, text: "Ir pra prova do módulo" };
      const btn = h("button", { class: "btn btn-gold st-cta", type: "button" }, already ? go2.text : "Concluir e seguir", M.icon("arrow", 18));
      btn.addEventListener("click", async () => {
        if (already) { M.go(go2.href); return; }
        btn.disabled = true;
        try {
          const d = await M.post("progress/lesson", { lessonId: lesson.id });
          M.session.progress = d.progress;
          M.toast("Aula concluída. +20 XP", "ok");
          M.go(go2.href);
        } catch (ex) { M.toast(ex.message, "err"); btn.disabled = false; }
      });
      return h("div", { class: "endcard" },
        sticker("🏀"),
        h("h2", { text: already ? "Você já fechou essa" : "Aula feita!" }),
        h("p", { text: already ? "Revisa quando quiser." : "+20 XP caindo na conta." }),
        h("div", { class: "end-actions" }, btn,
          h("button", { class: "btn btn-ghost", type: "button", onclick: () => { dir = -1; i = 0; show(); } }, "Rever do começo")),
        nextL && !already ? h("p", { class: "end-next", text: "A seguir: " + nextL.title }) : null);
    }

    function render(k) {
      if (els[k]) return els[k];
      const b = cards[k];
      const body = b.t === "end" ? endCard() : M.renderBlock(b, ctx);
      els[k] = h("div", { class: `slide k-${b.t}${b.tone ? " tone-" + b.tone : ""}`, "data-k": String(k) }, body);
      return els[k];
    }

    function paint() {
      const b = cards[i];
      [...bars.children].forEach((s, k) => { s.classList.toggle("on", k < i); s.classList.toggle("cur", k === i); });
      bars.setAttribute("aria-valuenow", String(i + 1));
      frame.dataset.mood = moodOf(b, i);
      frame.classList.toggle("is-end", b.t === "end");
      prevBtn.hidden = i === 0;
      arrowL.hidden = i === 0;
      const gate = gatedNow();
      nextBtn.hidden = i === last;
      arrowR.hidden = i === last;
      nextBtn.disabled = gate;
      arrowR.disabled = gate;
      nextBtn.textContent = gate ? "Responde pra seguir" : i === 0 ? "Bora" : "Continuar";
      count.textContent = i === last ? "" : `${i + 1}/${last}`;
    }

    function show() {
      card.replaceChildren(render(i));
      card.className = "st-card " + (dir > 0 ? "in-next" : "in-prev");
      card.scrollTop = 0;
      paint();
    }

    function go(d) {
      const to = i + d;
      if (to < 0 || to > last) return;
      if (d > 0 && gatedNow()) {
        const k = ++shaking;
        card.classList.remove("nope"); void card.offsetWidth; card.classList.add("nope");
        M.toast("Responde essa pra seguir 👀", "err");
        setTimeout(() => { if (k === shaking) card.classList.remove("nope"); }, 500);
        return;
      }
      dir = d; i = to; show();
    }

    /* toque no card: lado esquerdo volta, o resto avança */
    const INTERACTIVE = "a,button,input,label,select,textarea,summary,dialog,.stage,.mark-box,.video,[data-nonav]";
    card.addEventListener("click", (e) => {
      if (e.target.closest(INTERACTIVE) || NONAV.has(cards[i].t) || cards[i].t === "end") return;
      if (String(window.getSelection && window.getSelection()).length > 0) return;
      const r = card.getBoundingClientRect();
      go(e.clientX - r.left < r.width * 0.3 ? -1 : 1);
    });
    /* deslizar para os lados */
    let sx = 0, sy = 0, sOk = false;
    card.addEventListener("touchstart", (e) => { const t = e.touches[0]; sx = t.clientX; sy = t.clientY; sOk = !e.target.closest(".stage,.zoom,.ruler,input,textarea"); }, { passive: true });
    card.addEventListener("touchend", (e) => {
      if (!sOk) return;
      const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
      if (Math.abs(dx) > 60 && Math.abs(dy) < 50) go(dx < 0 ? 1 : -1);
    }, { passive: true });
    /* teclado */
    const onKey = (e) => {
      if (!node.isConnected) { document.removeEventListener("keydown", onKey); return; }
      if (document.querySelector("dialog[open]")) return;
      const tag = (e.target.tagName || "").toLowerCase();
      if (e.key === "Escape") { M.go("#/m/" + mod.id); return; }
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if ((e.key === " " || e.key === "Enter") && tag !== "button" && tag !== "a" && !NONAV.has(cards[i].t)) { e.preventDefault(); go(1); }
    };
    document.addEventListener("keydown", onKey);

    show();
    node._crumbs = [{ text: "Trilhas", href: M.trailsHref }, { text: trail.title, href: M.trailHref(trail) }, { text: `Módulo ${mod.n}`, href: "#/m/" + mod.id }, { text: lesson.title }];
    node._stories = true;
    return node;
  };
})();

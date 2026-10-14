/* Blocos interativos de aula: telas anotadas (shot) e exercício "clique onde fica" (find). */
(function () {
  const { h } = M;
  const T = () => window.TELAS || {};

  function shuffle(a) {
    const r = [...a];
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
  }
  M.shuffle = M.shuffle || shuffle;
  const pctBox = (t, s, pad = 0) =>
    `left:${((s.x - pad) / t.w) * 100}%;top:${((s.y - pad) / t.h) * 100}%;width:${((s.w + pad * 2) / t.w) * 100}%;height:${((s.h + pad * 2) / t.h) * 100}%`;

  /* imagem da tela, com as áreas por cima (se houver) */
  function stage(tela, spots, { natural = false, onPick } = {}) {
    const img = h("img", { src: tela.src, alt: tela.alt, width: tela.w, height: tela.h, draggable: "false" });
    if (!natural) img.setAttribute("loading", "lazy");
    const wrap = h("div", { class: "stage" + (natural ? " natural" : "") }, img);
    if (natural) wrap.style.width = tela.w + "px";
    const marks = (spots || []).map((s, i) => {
      const m = h("button", { type: "button", class: "mark-box", style: pctBox(tela, s), "aria-label": `${i + 1}. ${s.label}` },
        h("span", { class: "mark-n", text: String(i + 1), "aria-hidden": "true" }));
      m.addEventListener("click", () => onPick && onPick(s, i));
      wrap.append(m);
      return m;
    });
    return { wrap, img, marks };
  }

  /* janela com a tela em tamanho real */
  function zoom(tela, spots, startAt) {
    const dlg = h("dialog", { class: "zoom" });
    const note = h("div", { class: "zoom-note", role: "status" });
    let active = -1;
    const paint = (i) => {
      active = i;
      st.marks.forEach((m, k) => m.classList.toggle("on", k === i));
      note.replaceChildren(i < 0 ? h("span", { class: "muted", text: "Clique em uma marcação para ler o que ela é." }) :
        [h("b", { text: `${i + 1}. ${spots[i].label}` }), h("span", { text: " " + spots[i].what })]);
    };
    const st = stage(tela, spots, { natural: true, onPick: (s, i) => paint(i === active ? -1 : i) });
    const close = h("button", { class: "btn btn-ghost btn-sm", type: "button", text: "Fechar" });
    close.addEventListener("click", () => { dlg.close(); dlg.remove(); });
    dlg.addEventListener("cancel", () => dlg.remove());
    dlg.append(h("div", { class: "zoom-in" }, h("div", { class: "zoom-bar" }, note, close), h("div", { class: "zoom-scroll" }, st.wrap)));
    document.body.append(dlg);
    paint(startAt ?? -1);
    dlg.showModal();
  }

  /* ───── shot: tela com marcações numeradas e legenda ───── */
  function shot(b) {
    const tela = T()[b.tela];
    if (!tela) return h("div", { class: "callout atencao" }, "Tela desconhecida: " + M.esc(b.tela));
    const spots = (b.spots || tela.spots.map((s) => s.id)).map((id) => tela.spots.find((s) => s.id === id)).filter(Boolean);
    let active = -1;
    const items = [];
    const paint = (i) => {
      active = i;
      st.marks.forEach((m, k) => m.classList.toggle("on", k === i));
      items.forEach((li, k) => li.classList.toggle("on", k === i));
    };
    const pick = (s, i) => paint(i === active ? -1 : i);
    const st = stage(tela, spots, { onPick: pick });
    const list = h("ol", { class: "shot-legend" }, spots.map((s, i) => {
      const li = h("li", null, h("button", { type: "button", class: "leg", onclick: () => pick(s, i) },
        h("span", { class: "n", text: String(i + 1), "aria-hidden": "true" }),
        h("span", { class: "t" }, h("b", { text: s.label }), h("span", { text: s.what }))));
      items.push(li);
      return li;
    }));
    const hide = h("button", { class: "btn btn-ghost btn-sm", type: "button", "aria-pressed": "false", text: "Esconder marcações" });
    hide.addEventListener("click", () => {
      const off = st.wrap.classList.toggle("bare");
      hide.setAttribute("aria-pressed", String(off));
      hide.textContent = off ? "Mostrar marcações" : "Esconder marcações";
    });
    const big = h("button", { class: "btn btn-ghost btn-sm", type: "button", text: "Ampliar a tela", onclick: () => zoom(tela, spots, active) });
    return h("figure", { class: "shot" },
      b.title ? h("div", { class: "shot-title", text: b.title }) : null,
      st.wrap,
      h("div", { class: "shot-tools" }, h("span", { class: "muted small", text: "Clique em um número para ler o que ele é." }), h("span", { class: "row" }, hide, big)),
      b.caption ? h("figcaption", { html: b.caption }) : null,
      list);
  }

  /* ───── find: "clique onde fica" ───── */
  function find(b, ctx) {
    const telas = (b.telas || [b.tela]).map((id) => T()[id]).filter(Boolean);
    const pool = [];
    for (const t of telas) for (const s of t.spots) if (s.ask && (!b.spots || b.spots.includes(s.id))) pool.push({ tela: t, spot: s });
    if (!pool.length) return h("div", { class: "callout atencao" }, "Exercício sem perguntas.");
    const rounds = Math.min(b.rounds || 5, pool.length);
    const root = h("div", { class: "quiz sim find" });
    let run = null, finishedOnce = false;

    function start() {
      run = { items: shuffle(pool).slice(0, rounds), i: 0, ok: 0, answered: false };
      round();
    }

    function round() {
      const it = run.items[run.i];
      run.answered = false;
      const { tela, spot } = it;
      const st = stage(tela, []);
      const fb = h("div", { class: "quiz-foot", "aria-live": "polite" });
      const next = h("button", { class: "btn btn-gold btn-sm", type: "button", hidden: true, text: run.i + 1 < rounds ? "Próximo desafio" : "Ver resultado" });
      next.addEventListener("click", () => { run.i++; run.i < rounds ? round() : summary(); });

      function judge(ok, point) {
        if (run.answered) return;
        run.answered = true;
        if (ok) run.ok++;
        st.wrap.classList.add("judged");
        st.wrap.append(h("div", { class: "hit " + (ok ? "ok" : "show"), style: pctBox(tela, spot, 3) }));
        if (point && !ok) st.wrap.append(h("div", { class: "miss", style: `left:${(point.x / tela.w) * 100}%;top:${(point.y / tela.h) * 100}%` }));
        fb.replaceChildren(
          h("div", { class: "why " + (ok ? "ok" : "no") }, h("strong", { text: ok ? "Isso mesmo. " : "Não foi ali. " }), h("b", { text: spot.label + ". " }), h("span", { text: spot.what })),
          next);
        next.hidden = false;
        alt.open = false;
        alt.hidden = true;
        next.focus({ preventScroll: true });
      }

      st.wrap.classList.add("clickable");
      st.wrap.addEventListener("click", (e) => {
        if (run.answered) return;
        const r = st.img.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * tela.w, y = ((e.clientY - r.top) / r.height) * tela.h;
        const pad = 3;
        judge(x >= spot.x - pad && x <= spot.x + spot.w + pad && y >= spot.y - pad && y <= spot.y + spot.h + pad, { x, y });
      });

      /* alternativa para quem não usa o mouse */
      const options = tela.spots.filter((s) => s.ask).sort((a, c) => a.label.localeCompare(c.label, "pt-BR"));
      const sel = h("select", { class: "input", "aria-label": "Escolha a área" }, h("option", { value: "", text: "Escolha a área…" }), options.map((s) => h("option", { value: s.id, text: s.label })));
      const go = h("button", { class: "btn btn-ghost btn-sm", type: "button", text: "Responder", onclick: () => { if (sel.value) judge(sel.value === spot.id, null); } });
      const alt = h("details", { class: "alt" }, h("summary", { text: "Prefere responder por lista?" }), h("div", { class: "row" }, sel, go));

      root.replaceChildren(
        h("span", { class: "q-tag", text: "Simulação · Ache na tela" }),
        h("div", { class: "find-prog" },
          h("span", { text: `Desafio ${run.i + 1} de ${rounds}` }),
          h("span", { class: "dots", "aria-hidden": "true" }, run.items.map((_, k) => h("i", { class: k < run.i ? "d" : k === run.i ? "c" : "" })))),
        h("div", { class: "q-text", text: spot.ask }),
        st.wrap, alt, fb);
    }

    function summary() {
      const pct = Math.round((run.ok / rounds) * 100);
      const msg = pct >= 80 ? "Você já se move bem por essas telas." : pct >= 60 ? "Quase lá. Releia as áreas que errou e treine de novo." : "Releia a aula com calma e treine de novo. Os desafios mudam a cada rodada.";
      root.replaceChildren(
        h("span", { class: "q-tag", text: "Simulação · Resultado" }),
        h("div", { class: "find-score" }, h("b", { text: `${run.ok} de ${rounds}` }), h("span", { text: ` acertos (${pct}%)` })),
        h("p", { text: msg }),
        h("div", { class: "row" }, h("button", { class: "btn btn-gold btn-sm", type: "button", text: "Treinar de novo", onclick: start })));
      if (!finishedOnce) { finishedOnce = true; ctx.quizAnswered(b); }
    }

    ctx.quizRegister(b);
    root.append(
      h("span", { class: "q-tag", text: "Simulação · Ache na tela" }),
      h("div", { class: "q-text", text: b.title || "Teste o que você viu" }),
      h("p", { class: "muted", text: (b.intro || "Você vai ver uma tela do portal e uma pergunta. Clique no lugar certo da imagem.") + ` São ${rounds} desafios; a cada rodada eles mudam.` }),
      h("button", { class: "btn btn-gold", type: "button", text: "Começar o exercício", onclick: start }));
    return root;
  }

  Object.assign(M.blockTypes, { shot, find });
})();

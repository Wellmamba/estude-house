/* Renderizadores de blocos de aula. Cada bloco do content.js tem a chave `t`. */
(function () {
  const { h, svg } = M;
  const letters = "ABCDEFGH";

  /* ───── quiz inline ─────
     Cada quiz pode ter várias versões em window.PRATICA["<aula>"][n] (arquivos em assets/practice).
     A cada "Tentar de novo" sorteia outra versão (outra pergunta e outras alternativas) e embaralha a ordem. */
  function quiz(b, ctx) {
    const key = ctx.lessonId ? ctx.lessonId + "#" + ctx.quizN++ : null;
    const extra = (key && window.PRATICA && window.PRATICA[ctx.lessonId] && window.PRATICA[ctx.lessonId][+key.split("#")[1]]) || [];
    const versions = extra.length ? extra.map((v) => (v === "base" ? b : v)) : [b];
    let last = -1;
    const root = h("div", { class: "quiz" });

    function pickVersion() {
      if (versions.length === 1) return 0;
      let k;
      do { k = Math.floor(Math.random() * versions.length); } while (k === last);
      return k;
    }

    function draw() {
      last = pickVersion();
      const v = versions[last];
      const order = M.shuffle(v.options.map((_, i) => i));
      const answer = (v.answer || []).map((a) => order.indexOf(a));
      const multi = !!v.multi || answer.length > 1;
      const name = "q" + Math.random().toString(36).slice(2, 8);
      const labels = [], inputs = [];
      const feedback = h("div", { class: "quiz-foot", "aria-live": "polite" });
      let checked = false;
      const btn = h("button", { class: "btn btn-gold btn-sm", type: "button", disabled: true, text: "Conferir resposta" });

      const list = h("ul", { class: "opts" }, order.map((orig, i) => {
        const input = h("input", { type: multi ? "checkbox" : "radio", name, value: String(i), id: name + i });
        const label = h("label", { class: "opt", for: name + i },
          input, h("span", { class: "mark " + (multi ? "c" : "r") }), h("span", { html: M.esc(v.options[orig]) }));
        input.addEventListener("change", () => {
          if (checked) return;
          for (let k = 0; k < inputs.length; k++) labels[k].classList.toggle("sel", inputs[k].checked);
          btn.disabled = !inputs.some((x) => x.checked);
        });
        inputs.push(input); labels.push(label);
        return h("li", null, label);
      }));

      btn.addEventListener("click", () => {
        const picked = inputs.map((x, i) => (x.checked ? i : -1)).filter((i) => i >= 0);
        const right = [...answer].sort().join() === picked.sort().join();
        checked = true;
        root.classList.add("done");
        inputs.forEach((x, i) => {
          x.disabled = true;
          const isAns = answer.includes(i), isPick = picked.includes(i);
          labels[i].className = "opt" + (isAns ? " right" : isPick ? " wrong" : "");
        });
        btn.hidden = true;
        feedback.replaceChildren(
          h("div", { class: "why " + (right ? "ok" : "no") },
            h("strong", { text: right ? "Correto. " : "Ainda não. " }),
            h("span", { html: v.why })),
          right ? null : h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => { root.classList.remove("done"); draw(); }, text: "Tentar de novo com outra pergunta" }));
        ctx.quizAnswered(b);
      });

      root.replaceChildren(
        h("span", { class: "q-tag", text: multi ? "Quiz · marque todas as corretas" : "Quiz" }),
        h("div", { class: "q-text", html: v.q }), list, h("div", { class: "quiz-foot" }, btn), feedback);
    }

    draw();
    ctx.quizRegister(b);
    return root;
  }

  /* ───── vídeo (carrega o player só ao clicar) ───── */
  function video(b) {
    const frame = h("div", { class: "video-frame" });
    const play = h("button", {
      class: "play", type: "button", "aria-label": "Reproduzir: " + b.title,
      style: `background-image:url(https://i.ytimg.com/vi/${b.id}/hqdefault.jpg)`,
    });
    play.addEventListener("click", () => {
      frame.replaceChildren(h("iframe", {
        src: `https://www.youtube-nocookie.com/embed/${b.id}?autoplay=1&rel=0&modestbranding=1`,
        title: b.title, allow: "autoplay; encrypted-media; picture-in-picture; fullscreen", allowfullscreen: true,
      }));
    });
    frame.append(play);
    return h("figure", { class: "video" }, frame,
      h("figcaption", { class: "video-cap" },
        h("b", { text: b.title }),
        h("span", null, `Canal oficial da PriceBot${b.dur ? " · " + b.dur : ""}`),
        b.note ? h("span", { html: "<strong>Para assistir:</strong> " + M.esc(b.note) }) : null,
        h("a", { class: "small", target: "_blank", rel: "noopener", href: "https://www.youtube.com/watch?v=" + b.id, text: "Abrir no YouTube" })));
  }

  /* ───── régua de margem ───── */
  function ruler(b) {
    const W = 640, padL = 24, padR = 24, top = 54, H = 118;
    const hi = Math.max(b.max || 0, b.obj || 0, ...(b.marks || []).map((m) => m.v)) + 5;
    const x = (v) => padL + (v / hi) * (W - padL - padR);
    const marks = (b.marks || []).map((m) => {
      const c = m.ok ? "#52e0a3" : "#ff7a97";
      return `<g><line x1="${x(m.v)}" x2="${x(m.v)}" y1="${top - 10}" y2="${top + 30}" stroke="${c}" stroke-width="3"/>
        <circle cx="${x(m.v)}" cy="${top + 10}" r="7" fill="${c}"/>
        <text class="rl-text rl-strong" x="${x(m.v)}" y="${top + 52}" text-anchor="middle">${M.esc(m.label)}</text></g>`;
    }).join("");
    const zoneEnd = b.max ? x(b.max) : x(hi);
    const el = svg(`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Régua de margem: mínima ${b.min}%, objetiva ${b.obj}%">
      <rect class="rl-track" x="${padL}" y="${top}" width="${W - padL - padR}" height="20" rx="10"/>
      <rect class="rl-out" x="${padL}" y="${top}" width="${x(b.min) - padL}" height="20" rx="10"/>
      <rect class="rl-zone" x="${x(b.min)}" y="${top}" width="${zoneEnd - x(b.min)}" height="20"/>
      <text class="rl-text" x="${x(b.min)}" y="${top - 18}" text-anchor="middle">mínima ${b.min}%</text>
      <line x1="${x(b.min)}" x2="${x(b.min)}" y1="${top - 12}" y2="${top + 24}" stroke="#fdb927" stroke-width="2"/>
      <text class="rl-text rl-gold" x="${x(b.obj)}" y="${top - 18}" text-anchor="middle">objetiva ${b.obj}%</text>
      <line x1="${x(b.obj)}" x2="${x(b.obj)}" y1="${top - 12}" y2="${top + 24}" stroke="#fdb927" stroke-width="2" stroke-dasharray="3 3"/>
      ${b.max ? `<text class="rl-text" x="${x(b.max)}" y="${top - 18}" text-anchor="middle">máxima ${b.max}%</text>` : ""}
      ${marks}</svg>`);
    return h("figure", { class: "ruler" }, el, b.caption ? h("figcaption", { html: M.esc(b.caption) }) : null);
  }

  /* ───── os demais ───── */
  const R = {
    p: (b) => h("p", { html: b.html }),
    h: (b) => h("h3", { text: b.text }),
    list: (b) => h("ul", null, b.items.map((t) => h("li", { html: t }))),
    callout: (b) => h("div", { class: "callout " + (b.tone || "dica"), role: "note" },
      h("span", { class: "c-title", text: b.title || { dica: "Dica", atencao: "Atenção", regra: "Regra", exemplo: "Exemplo" }[b.tone] }),
      h("div", { html: b.html })),
    steps: (b) => h("ol", { class: "steps" }, b.items.map((s) => h("li", null, h("div", null, h("b", { text: s.title }), h("span", { html: s.html }))))),
    compare: (b) => h("div", { class: "compare" },
      [["left", b.left], ["right", b.right]].map(([, side]) =>
        h("div", { class: side.tone === "bad" ? "bad" : "good" }, h("h4", { text: side.title }), h("ul", null, side.items.map((t) => h("li", { html: t })))))),
    say: (b) => h("div", { class: "say" }, h("span", { class: "c-title", text: b.title || "Como explicar" }), h("p", { html: b.html })),
    term: (b) => h("div", null, h("div", { class: "terms-title", text: "Termos desta etapa" }),
      h("div", { class: "terms" }, b.items.map((t) =>
        h("div", { class: "term" }, h("b", { text: t.term }), t.label ? h("i", { text: t.label }) : null, h("p", { html: t.def }))))),
    video, ruler, quiz,
  };
  M.blockTypes = R; /* sim.js acrescenta shot, find e as simulações */

  M.renderBlock = function (b, ctx) {
    const fn = R[b.t];
    if (!fn) return h("div", { class: "callout atencao" }, "Bloco desconhecido: " + M.esc(b.t));
    return fn(b, ctx);
  };
})();

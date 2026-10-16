/* Cards feitos no construtor de trilhas: imagem, vídeo e card livre (textos, fotos, vídeos e formas posicionados à mão),
   mais o estilo que qualquer card pode ter (fundo, fonte, tamanho, cor, alinhamento).
   Tudo aqui também serve ao player de aulas (stories.js) e ao editor (builder.js). */
(function () {
  const { h } = M;
  const R = M.blockTypes;

  /* ───── fontes e fundos ───── */
  M.CARD_FONTS = {
    sans: { label: "Padrão", css: 'var(--body)' },
    display: { label: "Impacto", css: 'var(--display)' },
    serif: { label: "Clássica", css: '"Playfair Display", Georgia, "Times New Roman", serif' },
    mono: { label: "Máquina", css: '"JetBrains Mono", ui-monospace, Menlo, Consolas, monospace' },
    hand: { label: "Manuscrita", css: '"Caveat", "Segoe Print", "Bradley Hand", cursive' },
  };
  M.CARD_MOODS = {
    night: "linear-gradient(170deg, #241448, #150b2b)", plum: "linear-gradient(170deg, #3a1a72, #1c0f3a)",
    violet: "linear-gradient(160deg, #6a2fd0 0%, #35146e 58%, #1c0f3a)", pink: "linear-gradient(160deg, #b02fd0 0%, #4b1673 62%, #1c0f3a)",
    mint: "linear-gradient(170deg, #0f3d38, #0b1f2e)", amber: "linear-gradient(170deg, #55300a, #1f0f1f)",
    dark: "linear-gradient(180deg, #1f1140, #120826)", gold: "linear-gradient(160deg, #fdb927 0%, #ff9a2e 100%)",
  };

  const lum = (hex) => {
    let c = String(hex || "").replace("#", "");
    if (c.length === 3) c = c.split("").map((x) => x + x).join("");
    const n = parseInt(c.slice(0, 6), 16);
    if (!Number.isFinite(n)) return 0;
    const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };
  /* fundo do card: devolve { css, light } ou null (quando o card usa o fundo padrão do tipo dele) */
  M.cardBg = function (st) {
    if (!st) return null;
    if (st.img) {
      const d = (st.dim ?? 35) / 100;
      return { css: `linear-gradient(rgba(10,4,24,${d}), rgba(10,4,24,${d})), url("${st.img}") center / cover no-repeat`, light: false };
    }
    if (!st.bg) return null;
    if (M.CARD_MOODS[st.bg]) return { css: M.CARD_MOODS[st.bg], light: st.bg === "gold" };
    const g = String(st.bg).match(/^g:(#[0-9a-fA-F]{3,8}),(#[0-9a-fA-F]{3,8})$/);
    if (g) return { css: `linear-gradient(160deg, ${g[1]}, ${g[2]})`, light: (lum(g[1]) + lum(g[2])) / 2 > 0.62 };
    return { css: st.bg, light: lum(st.bg) > 0.62 };
  };
  /* aplica o fundo do card ao quadro (st-frame) */
  M.cardFrame = function (frame, b, mood) {
    const bg = M.cardBg(b?.style);
    frame.dataset.mood = mood;
    if (bg) {
      frame.style.setProperty("--st-bg", bg.css);
      frame.dataset.custom = "1";
      if (bg.light) frame.dataset.light = "1"; else delete frame.dataset.light;
    } else {
      frame.style.removeProperty("--st-bg");
      delete frame.dataset.custom; delete frame.dataset.light;
    }
  };
  /* fonte, tamanho, cor, alinhamento e posição vertical do conteúdo do card */
  M.cardStyle = function (slide, b) {
    const st = b?.style;
    if (!st) return;
    if (st.font && M.CARD_FONTS[st.font]) {
      slide.style.setProperty("--u-font", M.CARD_FONTS[st.font].css);
      slide.classList.add("u-font");
    }
    if (st.size && st.size !== 1) { slide.style.zoom = String(st.size); }
    if (st.color) { slide.style.color = st.color; slide.style.setProperty("--ink", st.color); slide.style.setProperty("--ink-2", st.color); slide.classList.add("u-color"); }
    if (st.align) { slide.style.textAlign = st.align; slide.classList.add("u-align"); slide.dataset.align = st.align; }
    if (st.v === "top") slide.style.marginBlock = "0 auto";
    else if (st.v === "bottom") slide.style.marginBlock = "auto 0";
  };

  /* ───── vídeo com início automático ───── */
  /* opts: { url, kind, autoplay, loop, muted, fit, controls }. Devolve um nó com `_onshow` (o player chama quando o card aparece). */
  M.videoNode = function (o) {
    const url = o.url || "";
    const e = M.embedOf ? M.embedOf(url) : null;
    const root = h("div", { class: "vid-node", "data-nonav": "" });
    if (e?.kind === "iframe") {
      const mk = () => {
        let src = e.src;
        const q = [];
        if (o.autoplay !== false) q.push("autoplay=1");
        if (o.muted) q.push("mute=1");
        if (e.provider === "YouTube") q.push("rel=0", "playsinline=1");
        if (q.length) src += (src.includes("?") ? "&" : "?") + q.join("&");
        root.replaceChildren(h("iframe", {
          src, title: e.provider, allow: "autoplay; fullscreen; picture-in-picture; encrypted-media", allowfullscreen: "true",
          referrerpolicy: "strict-origin-when-cross-origin", style: "width:100%;height:100%;border:0",
        }));
      };
      root.style.aspectRatio = e.ratio || "16 / 9";
      const face = h("button", { class: "vid-face", type: "button", "aria-label": "Reproduzir vídeo", style: e.thumb ? `background-image:url('${e.thumb}')` : "", onclick: mk }, h("span", { class: "m-play" }, M.icon("video", 26)));
      root.append(face);
      root._onshow = () => { if (o.autoplay !== false) mk(); };
      root._onhide = () => { root.replaceChildren(face); };
      return root;
    }
    if (e?.kind === "video" || /res\.cloudinary\.com/.test(url) || /\.(mp4|webm|mov)(\?|$)/i.test(url)) {
      const src = M.vidUrl ? M.vidUrl(e?.src || url) : url;
      const v = h("video", {
        class: "vid-el", src, poster: M.posterUrl ? M.posterUrl(url) : undefined, playsinline: true, preload: "auto",
        controls: o.controls !== false, loop: !!o.loop, style: `object-fit:${o.fit === "cover" ? "cover" : "contain"}`,
      });
      v.muted = !!o.muted;
      const hint = h("button", { class: "vid-unmute", type: "button", hidden: true, onclick: () => { v.muted = false; hint.hidden = true; v.play().catch(() => {}); } }, "Tocar com som");
      root.append(v, hint);
      root._onshow = () => {
        if (o.autoplay === false) return;
        try { v.currentTime = 0; } catch {}
        v.muted = !!o.muted;
        const p = v.play();
        if (p && p.catch) p.catch(() => {
          // o navegador barrou o som: começa mudo e oferece ligar o som
          v.muted = true;
          v.play().then(() => { hint.hidden = false; }).catch(() => {});
        });
      };
      root._onhide = () => { try { v.pause(); } catch {} };
      return root;
    }
    if (url) root.append(M.renderMedia([{ type: "link", url }]));
    return root;
  };
  /* chamado pelo player quando um card entra / sai da tela */
  M.cardShown = (slide) => { slide.querySelectorAll(".vid-node").forEach((n) => n._onshow && n._onshow()); };
  M.cardHidden = (slide) => { slide.querySelectorAll(".vid-node").forEach((n) => n._onhide && n._onhide()); };

  /* ───── imagem e vídeo (card inteiro) ───── */
  R.img = (b) => h("figure", { class: "cd-img" + (b.fit === "contain" ? " is-contain" : ""), "data-nonav": "" },
    b.url ? h("img", { src: M.imgUrl ? M.imgUrl(b.url, 1200) : b.url, alt: b.alt || b.caption || "Imagem da aula", decoding: "async" }) : h("div", { class: "cd-empty", text: "Escolha uma imagem" }),
    b.caption ? h("figcaption", { html: b.caption }) : null);

  R.mvideo = (b) => h("figure", { class: "cd-vid" },
    M.videoNode({ url: b.url, kind: b.kind, autoplay: b.autoplay, loop: b.loop, muted: b.muted, fit: b.fit }),
    b.caption ? h("figcaption", { html: b.caption }) : null);

  /* ───── card livre ───── */
  const RATIO = { "9/16": 9 / 16, "3/4": 3 / 4, "1/1": 1, "16/10": 16 / 10 };
  M.FREE_RATIOS = { "9/16": "Vertical (celular)", "3/4": "Retrato", "1/1": "Quadrado", "16/10": "Largo (tablet)" };

  /* um elemento do card livre; `editing` desliga o autoplay de vídeo */
  M.freeLayer = function (l, { editing } = {}) {
    const el = h("div", { class: "fl fl-" + l.k, "data-lid": l.id });
    el.style.left = l.x + "%"; el.style.top = l.y + "%"; el.style.width = l.w + "%";
    if (l.k !== "text" && l.k !== "emoji") el.style.height = l.h + "%";
    if (l.rot) el.style.transform = `rotate(${l.rot}deg)`;
    if (l.k === "text") {
      el.style.fontFamily = (M.CARD_FONTS[l.font] || M.CARD_FONTS.sans).css;
      el.style.fontSize = l.size + "cqw"; el.style.color = l.color || "#fff"; el.style.textAlign = l.align || "left";
      el.style.fontWeight = l.bold ? "800" : "500"; el.style.lineHeight = String(l.lh || 1.2);
      if (l.bg) { el.style.background = l.bg; el.classList.add("has-bg"); }
      el.innerHTML = l.html || "";
    } else if (l.k === "emoji") {
      el.style.fontSize = l.size + "cqw"; el.style.lineHeight = "1"; el.textContent = l.emoji || "⭐";
    } else if (l.k === "img") {
      el.style.borderRadius = (l.r || 0) + "%";
      if (l.url) el.append(h("img", { src: M.imgUrl ? M.imgUrl(l.url, 1000) : l.url, alt: "", style: `object-fit:${l.fit === "contain" ? "contain" : "cover"}`, draggable: "false" }));
      else el.classList.add("is-empty");
    } else if (l.k === "video") {
      el.style.borderRadius = (l.r || 0) + "%";
      if (!l.url) el.classList.add("is-empty");
      else if (editing) { el.classList.add("is-video"); el.append(h("span", { class: "fl-vid-ico" }, M.icon("video", 28))); }
      else el.append(M.videoNode({ url: l.url, kind: l.kind, autoplay: l.autoplay, loop: l.loop, muted: l.muted, fit: "cover", controls: true }));
    } else if (l.k === "shape") {
      el.style.background = l.fill || "#ffffff33"; el.style.borderRadius = (l.r || 0) + "%";
    }
    return el;
  };

  M.freeBox = function (b, { editing } = {}) {
    const box = h("div", { class: "cd-free" });
    const r = RATIO[b.ratio] || RATIO["9/16"];
    box.style.setProperty("--r", String(r));
    for (const l of b.layers || []) box.append(M.freeLayer(l, { editing }));
    return box;
  };

  R.free = (b) => h("div", { class: "cd-free-wrap" }, M.freeBox(b));

  /* se um card der erro ao desenhar, o aluno vê um aviso em vez de uma tela em branco */
  const render = M.renderBlock;
  M.renderBlock = function (b, ctx) {
    try { return render(b, ctx); } catch (e) {
      console.error("card com erro", b?.t, e);
      return h("div", { class: "callout atencao" }, "Este card não pôde ser exibido. Avise a administração.");
    }
  };
})();

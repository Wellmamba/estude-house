/* Destaques: stories fixos (não somem em 24 horas). Só gestores publicam; o time assiste e ganha XP ao ver até o fim.
   Aqui ficam a barra de bolinhas do Feed, o player em tela cheia e o formulário de novo destaque. */
(function () {
  const { h } = M;
  const MOODS = [["violet", "Roxo"], ["gold", "Dourado"], ["pink", "Rosa"], ["mint", "Verde"], ["dark", "Escuro"]];
  const MB = 1048576;

  const imgUrl = (url, w) => (String(url).includes("/image/upload/") ? String(url).replace("/image/upload/", `/image/upload/f_auto,q_auto,w_${w}/`) : url);
  const vidUrl = (url) => (String(url).includes("/video/upload/") ? String(url).replace("/video/upload/", "/video/upload/f_auto,q_auto/") : url);

  /* ───── selo de "novo" no menu (Feed) ───── */
  M.paintBadges = function () {
    const n = M.session.destaques || 0;
    document.querySelectorAll("[data-dst-badge]").forEach((el) => { el.hidden = !n; el.textContent = n > 9 ? "9+" : String(n || ""); });
  };

  /* ───── player em tela cheia ───── */
  M.openDestaque = function (items, startId, hooks = {}) {
    const order = items.slice();
    let at = Math.max(0, order.findIndex((x) => x.id === startId));
    let data = null, i = 0, token = 0, dir = 1;
    const isAdm = M.isAdmin();

    const bars = h("div", { class: "st-bars", "aria-hidden": "true" });
    const ring = h("span", { class: "st-ring", "aria-hidden": "true" });
    const who = h("div", { class: "st-who" });
    const close = h("button", { class: "st-x", type: "button", "aria-label": "Fechar destaque", onclick: () => finish() }, M.icon("x", 22));
    const del = isAdm ? h("button", { class: "st-x", type: "button", "aria-label": "Apagar este destaque", onclick: () => remove() }, M.icon("trash", 20)) : null;
    const head = h("div", { class: "st-head" + (del ? " has-del" : "") }, ring, who, del, close);
    const card = h("div", { class: "st-card", tabindex: "-1", "aria-live": "polite" });
    const prevBtn = h("button", { class: "st-nav st-prev", type: "button", "aria-label": "Card anterior", onclick: () => step(-1) }, M.icon("back", 20));
    const nextBtn = h("button", { class: "st-next", type: "button", onclick: () => step(1) });
    const count = h("span", { class: "st-count" });
    const frame = h("div", { class: "st-frame dst-frame", "data-mood": "violet" }, h("div", { class: "st-top" }, bars, head), card, h("div", { class: "st-foot" }, prevBtn, count, nextBtn));
    const arrowL = h("button", { class: "st-arrow st-arrow-l", type: "button", "aria-label": "Card anterior", onclick: () => step(-1) }, M.icon("back", 22));
    const arrowR = h("button", { class: "st-arrow st-arrow-r", type: "button", "aria-label": "Próximo card", onclick: () => step(1) }, M.icon("arrow", 22));
    const node = h("article", { class: "stories dst-overlay", role: "dialog", "aria-modal": "true", "aria-label": "Destaque" }, arrowL, frame, arrowR);

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.append(node);

    const slides = () => data?.slides || [];
    const last = () => slides().length - 1;

    async function load(idx) {
      at = idx; i = 0; dir = 1;
      const my = ++token;
      const it = order[at];
      card.replaceChildren(h("div", { class: "dst-wait", text: "Carregando…" }));
      bars.replaceChildren(); who.replaceChildren(h("b", { text: it.title }));
      try {
        const d = await M.get("destaques/" + it.id);
        if (my !== token) return;
        data = d.destaque;
        ring.replaceChildren(M.avatar(data.author || { name: "Gestor", role: "admin" }, 36));
        who.replaceChildren(h("b", { text: data.title }), h("span", { text: `${data.author?.name || "Gestor"} · ${M.timeAgo(data.createdAt)}` }));
        bars.replaceChildren(...data.slides.map(() => h("span", { class: "st-seg" }, h("i"))));
        show();
      } catch (e) {
        if (my !== token) return;
        M.toast(e.message, "err");
        order.splice(at, 1);
        if (!order.length) { finish(); return; }
        load(Math.min(at, order.length - 1));
      }
    }

    function slideNode(s) {
      const kids = [];
      if (s.media?.type === "image") kids.push(h("img", { class: "dst-img", src: imgUrl(s.media.url, 900), alt: s.text ? "" : "Imagem do destaque", decoding: "async" }));
      if (s.media?.type === "video") kids.push(h("video", { class: "dst-video", src: vidUrl(s.media.url), controls: true, playsinline: true, preload: "metadata" }));
      if (s.text) kids.push(h("p", { class: "dst-text" + (s.media ? " has-media" : "") }, M.rich(s.text)));
      return h("div", { class: "slide k-dst" + (s.media ? " has-media" : "") }, kids);
    }

    function show() {
      const s = slides()[i];
      card.replaceChildren(slideNode(s));
      card.className = "st-card " + (dir > 0 ? "in-next" : "in-prev");
      card.scrollTop = 0;
      frame.dataset.mood = s.mood || "violet";
      [...bars.children].forEach((b, k) => { b.classList.toggle("on", k < i); b.classList.toggle("cur", k === i); });
      prevBtn.hidden = i === 0; arrowL.hidden = i === 0;
      const more = at < order.length - 1;
      nextBtn.textContent = i < last() ? "Continuar" : more ? "Próximo destaque" : "Fechar";
      count.textContent = slides().length > 1 ? `${i + 1}/${slides().length}` : "";
      if (i === last()) markSeen(order[at]);
    }

    async function markSeen(it) {
      if (it.seen) return;
      it.seen = true;
      if (hooks.onSeen) hooks.onSeen(it);
      try { const r = await M.post(`destaques/${it.id}/seen`); M.bumpXp(r); } catch { /* sem internet: o próximo acesso tenta de novo */ it.seen = false; }
    }

    function step(d) {
      if (!data) return;
      if (d < 0) { if (i > 0) { dir = -1; i--; show(); } return; }
      if (i < last()) { dir = 1; i++; show(); return; }
      if (at < order.length - 1) load(at + 1); else finish();
    }

    async function remove() {
      const ok = await M.confirm({ title: "Apagar este destaque?", text: "Ele some da barra de todo mundo. Não tem volta.", ok: "Apagar", danger: true });
      if (!ok) return;
      try {
        await M.api("DELETE", "destaques/" + order[at].id);
        M.toast("Destaque apagado.", "ok");
        if (hooks.onDeleted) hooks.onDeleted(order[at]);
        order.splice(at, 1);
        if (!order.length) finish(); else load(Math.min(at, order.length - 1));
      } catch (e) { M.toast(e.message, "err"); }
    }

    function finish() {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
      node.remove();
      if (hooks.onClose) hooks.onClose();
    }

    const onKey = (e) => {
      if (document.querySelector("dialog[open]")) return;
      if (e.key === "Escape") finish();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if ((e.key === " " || e.key === "Enter") && !/^(button|a|video|input)$/i.test(e.target.tagName)) { e.preventDefault(); step(1); }
    };
    document.addEventListener("keydown", onKey);

    card.addEventListener("click", (e) => {
      if (e.target.closest("a,button,video,input,label")) return;
      if (String(window.getSelection && window.getSelection()).length > 0) return;
      const r = card.getBoundingClientRect();
      step(e.clientX - r.left < r.width * 0.3 ? -1 : 1);
    });
    let sx = 0, sy = 0, ok = false;
    card.addEventListener("touchstart", (e) => { const t = e.touches[0]; sx = t.clientX; sy = t.clientY; ok = !e.target.closest("video"); }, { passive: true });
    card.addEventListener("touchend", (e) => {
      if (!ok) return;
      const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
      if (Math.abs(dx) > 60 && Math.abs(dy) < 50) step(dx < 0 ? 1 : -1);
      else if (dy > 110 && Math.abs(dx) < 60) finish();
    }, { passive: true });
    node.addEventListener("click", (e) => { if (e.target === node) finish(); });

    load(at);
    close.focus({ preventScroll: true });
  };

  /* ───── barra de bolinhas ───── */
  M.destaquesBar = function () {
    const root = h("section", { class: "dst-bar", "aria-label": "Destaques", hidden: true });
    const row = h("ul", { class: "dst-row" });
    root.append(row);
    let items = [], meta = {};

    function paint() {
      root.hidden = !items.length && !meta.canPost;
      const add = meta.canPost ? h("li", null, h("button", { class: "dst-item is-add", type: "button", onclick: () => M.openDestaqueComposer(meta, () => root.refresh()) },
        h("span", { class: "dst-ring" }, h("span", { class: "dst-disc" }, M.icon("plus", 28))), h("span", { class: "dst-name", text: "Novo" }))) : null;
      row.replaceChildren(add, ...items.map((it) => h("li", null,
        h("button", { class: "dst-item" + (it.seen ? " is-seen" : " is-new"), type: "button", "aria-label": `Destaque: ${it.title}${it.seen ? "" : " (novo)"}`,
          onclick: () => M.openDestaque(items, it.id, { onSeen: () => { paint(); M.session.destaques = Math.max(0, items.filter((x) => !x.seen).length); M.paintBadges(); }, onClose: () => root.refresh(), onDeleted: () => root.refresh() }) },
        h("span", { class: "dst-ring" }, h("span", { class: "dst-disc", "data-mood": it.mood, style: it.cover ? `background-image:url("${imgUrl(it.cover, 200)}")` : null }, it.cover ? null : M.icon(it.hasVideo ? "video" : "star", 26))),
        it.seen ? null : h("em", { class: "dst-new", text: "Novo" }),
        h("span", { class: "dst-name", text: it.title })))));
    }
    root.refresh = async function () {
      if (!root.isConnected && root._ready) return;
      try {
        const d = await M.get("destaques");
        items = d.items; meta = d; root._ready = true;
        M.session.destaques = d.unseen; M.paintBadges();
        paint();
      } catch { /* a barra some sozinha se o servidor falhar */ }
    };
    root.refresh();
    return root;
  };

  /* ───── novo destaque (gestor) ───── */
  M.openDestaqueComposer = async function (meta, onDone) {
    let uploads = false;
    try { uploads = !!(await M.get("feed/status")).uploads; } catch {}
    const maxSlides = meta.maxSlides || 8, maxText = meta.maxText || 280, maxTitle = meta.maxTitle || 24;
    let seq = 0;
    const slides = [{ id: ++seq, text: "", mood: "violet", media: null }];
    const title = h("input", { class: "input", type: "text", maxlength: String(maxTitle), placeholder: "Ex.: Novidade, Meta da semana, Dica", "aria-label": "Nome do destaque" });
    const list = h("div", { class: "dst-slides" });
    const addBtn = h("button", { class: "btn btn-ghost btn-sm", type: "button" }, M.icon("plus", 16), "Adicionar card");
    const pub = h("button", { class: "btn btn-gold", type: "button", text: "Publicar destaque" });
    const err = h("div", { "aria-live": "polite" });

    function upload(s, file) {
      const isVideo = file.type.startsWith("video/");
      if (!isVideo && (!file.type.startsWith("image/") || file.type === "image/svg+xml")) { M.toast("Escolha uma foto (JPG ou PNG) ou um vídeo.", "err"); return; }
      const limit = (isVideo ? 100 : 10) * MB;
      const shrink = !isVideo && file.size > 8 * MB;
      if (!shrink && file.size > limit) { M.toast(`Arquivo grande demais. Limite: ${isVideo ? 100 : 10} MB.`, "err"); return; }
      const m = { type: isVideo ? "video" : "image", name: file.name, status: "uploading", pct: 0, preview: isVideo ? null : URL.createObjectURL(file) };
      s.media = m; draw();
      (async () => {
        let f = file;
        if (shrink) f = await M.shrinkImage(file);
        return M.cloudUpload(f, { kind: isVideo ? "video" : "image", onProgress: (p) => { m.pct = p; const bar = list.querySelector(`[data-s="${s.id}"] .bar i`); if (bar) bar.style.width = p + "%"; } });
      })().then((j) => { m.url = j.secure_url; m.status = "done"; draw(); })
        .catch((e) => { m.status = "error"; m.error = e.message; draw(); });
    }

    function slideCard(s, k) {
      const ta = h("textarea", { class: "textarea", rows: "3", maxlength: String(maxText), placeholder: s.media ? "Legenda (opcional)" : "Escreva o texto do card", "aria-label": `Texto do card ${k + 1}` });
      ta.value = s.text;
      ta.addEventListener("input", () => { s.text = ta.value; });
      const file = h("input", { type: "file", hidden: true, accept: "image/*,video/*" });
      file.addEventListener("change", () => { const f = file.files[0]; file.value = ""; if (f) upload(s, f); });
      const pick = h("button", { class: "tool-btn", type: "button", disabled: !uploads || s.media?.status === "uploading", title: uploads ? "" : "Envio de arquivos desligado: veja o guia de configuração do Cloudinary.", onclick: () => file.click() }, M.icon("image", 18), h("span", { text: s.media ? "Trocar foto ou vídeo" : "Foto ou vídeo" }));
      const m = s.media;
      const mediaRow = m ? h("div", { class: "att" + (m.status === "error" ? " bad" : "") },
        m.preview ? h("img", { src: m.preview, alt: "" }) : h("span", { class: "att-ico" }, M.icon("video", 20)),
        h("div", { class: "att-info" }, h("strong", { text: m.name }),
          m.status === "uploading" ? h("div", { class: "bar" }, h("i", { style: `width:${m.pct}%` })) : h("span", { class: "small " + (m.status === "error" ? "bad" : "muted"), text: m.status === "error" ? m.error : m.type === "video" ? "Vídeo pronto" : "Foto pronta" })),
        h("button", { class: "icon-btn", type: "button", "aria-label": "Remover foto ou vídeo", onclick: () => { if (m.preview) URL.revokeObjectURL(m.preview); s.media = null; draw(); } }, M.icon("x", 16))) : null;
      return h("section", { class: "dst-slide", "data-s": String(s.id), "data-mood": s.mood },
        h("div", { class: "row row-between" }, h("strong", { text: `Card ${k + 1}` }),
          slides.length > 1 ? h("button", { class: "icon-btn", type: "button", "aria-label": `Remover o card ${k + 1}`, onclick: () => { slides.splice(k, 1); draw(); } }, M.icon("trash", 16)) : null),
        h("div", { class: "dst-moods", role: "group", "aria-label": "Cor do card" }, MOODS.map(([id, label]) => h("button", { class: "dst-mood", type: "button", "data-m": id, "aria-pressed": String(s.mood === id), title: label, "aria-label": label, onclick: () => { s.mood = id; draw(); } }))),
        ta, mediaRow, h("div", { class: "row" }, pick, file));
    }

    function draw() {
      list.replaceChildren(...slides.map(slideCard));
      addBtn.disabled = slides.length >= maxSlides;
      addBtn.lastChild.textContent = `Adicionar card (${slides.length}/${maxSlides})`;
      pub.disabled = slides.some((s) => s.media?.status === "uploading");
    }
    addBtn.addEventListener("click", () => { if (slides.length < maxSlides) { slides.push({ id: ++seq, text: "", mood: slides[slides.length - 1].mood, media: null }); draw(); list.lastElementChild?.querySelector("textarea")?.focus(); } });

    return M.modal((done) => {
      pub.addEventListener("click", async () => {
        err.replaceChildren();
        const t = title.value.trim();
        if (t.length < 2) { err.replaceChildren(h("div", { class: "form-error", text: "Dê um nome curto ao destaque. Ele aparece embaixo da bolinha." })); title.focus(); return; }
        const body = [];
        for (const [k, s] of slides.entries()) {
          const text = s.text.trim(), ok = s.media?.status === "done";
          if (s.media && !ok) { err.replaceChildren(h("div", { class: "form-error", text: `Espere o envio do card ${k + 1} terminar (ou remova o arquivo).` })); return; }
          if (!text && !ok) { err.replaceChildren(h("div", { class: "form-error", text: `O card ${k + 1} está vazio: escreva um texto ou coloque uma foto ou vídeo.` })); return; }
          body.push({ text: text || undefined, mood: s.mood, media: ok ? { type: s.media.type, url: s.media.url } : undefined });
        }
        pub.disabled = true;
        try {
          await M.post("destaques", { title: t, slides: body });
          M.toast("Destaque publicado. O time já vê a bolinha no Feed.", "ok");
          done(true);
          if (onDone) onDone();
        } catch (e) { err.replaceChildren(h("div", { class: "form-error", text: e.message })); pub.disabled = false; }
      });
      draw();
      return h("div", { class: "dst-compose" },
        h("h3", { text: "Novo destaque" }),
        h("p", { class: "muted small", style: "margin:0", text: "Vira uma bolinha no Feed de todo o time e não some em 24 horas. Quem assiste até o último card ganha XP." }),
        h("div", { class: "field" }, h("label", { text: "Nome da bolinha" }), title, h("span", { class: "hint", text: `Até ${maxTitle} letras.` })),
        list, err,
        h("div", { class: "dlg-actions", style: "justify-content:space-between" }, addBtn,
          h("div", { class: "row" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => done(false), text: "Cancelar" }), pub)));
    });
  };
})();

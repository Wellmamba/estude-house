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

  /* ───── player em tela cheia (formato Instagram) ─────
     Foto ou vídeo ocupa a tela toda, o texto vai por cima, as barrinhas enchem sozinhas e passam para o próximo card.
     Toque na esquerda volta, na direita avança; segurar pausa; deslizar para os lados troca de destaque; para baixo fecha.
     O vídeo começa sozinho e o card só passa quando ele termina. */
  const SLIDE_MS = 6000;
  M.openDestaque = function (items, startId, hooks = {}) {
    const order = items.slice();
    let at = Math.max(0, order.findIndex((x) => x.id === startId));
    let data = null, i = 0, token = 0, dir = 1;
    let muted = false, manual = false, held = false, menuOpen = false;
    let raf = 0, lastTs = 0, elapsed = 0, dur = SLIDE_MS, ready = false, vid = null;
    const isAdm = M.can("publicar");

    const bars = h("div", { class: "st-bars dst-bars", "aria-hidden": "true" });
    const ring = h("span", { class: "st-ring", "aria-hidden": "true" });
    const who = h("div", { class: "st-who" });
    const btn = (icon, label, fn, cls = "") => h("button", { class: "st-x dst-btn " + cls, type: "button", "aria-label": label, title: label, onclick: (e) => { e.stopPropagation(); fn(); } }, M.icon(icon, 20));
    const pauseBtn = btn("pause", "Pausar", () => { manual = !manual; paint(); });
    const muteBtn = btn("vol", "Silenciar", () => { muted = !muted; if (vid) vid.muted = muted; paint(); });
    muteBtn.hidden = true;
    const menu = h("div", { class: "dst-menu", role: "menu", hidden: true });
    const moreBtn = isAdm ? btn("more", "Opções do destaque", () => toggleMenu(!menuOpen)) : null;
    const closeBtn = btn("x", "Fechar destaque", () => finish());
    const head = h("div", { class: "st-head dst-head" }, ring, who, h("span", { class: "dst-tools" }, pauseBtn, muteBtn, moreBtn, closeBtn));
    const stage = h("div", { class: "dst-stage" });
    const hit = h("div", { class: "dst-hit" });
    const frame = h("div", { class: "st-frame dst-frame", "data-mood": "violet" }, stage, h("div", { class: "dst-scrim" }), hit, h("div", { class: "st-top" }, bars, head), menu);
    const arrowL = h("button", { class: "st-arrow st-arrow-l", type: "button", "aria-label": "Card anterior", onclick: () => step(-1) }, M.icon("back", 22));
    const arrowR = h("button", { class: "st-arrow st-arrow-r", type: "button", "aria-label": "Próximo card", onclick: () => step(1) }, M.icon("arrow", 22));
    const node = h("article", { class: "stories dst-overlay", role: "dialog", "aria-modal": "true", "aria-label": "Destaque" }, arrowL, frame, arrowR);

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.append(node);

    const slides = () => data?.slides || [];
    const last = () => slides().length - 1;
    const isPaused = () => manual || held || menuOpen || document.hidden || !!document.querySelector("dialog[open]");

    function paint() {
      pauseBtn.replaceChildren(M.icon(manual ? "play" : "pause", 20));
      pauseBtn.setAttribute("aria-label", manual ? "Continuar" : "Pausar");
      muteBtn.replaceChildren(M.icon(muted ? "mute" : "vol", 20));
      muteBtn.setAttribute("aria-label", muted ? "Ligar o som" : "Silenciar");
      frame.classList.toggle("is-held", held);
    }
    function setProg(p) {
      const k = Math.min(1, Math.max(0, p));
      const seg = bars.children[i]?.firstChild;
      if (seg) seg.style.transform = `scaleX(${k})`;
    }
    function paintBars() {
      [...bars.children].forEach((b, k) => { b.firstChild.style.transform = k < i ? "scaleX(1)" : "scaleX(0)"; });
    }

    function frameTick(ts) {
      raf = requestAnimationFrame(frameTick);
      const dt = Math.min(64, ts - (lastTs || ts));
      lastTs = ts;
      if (isPaused()) { if (vid && !vid.paused) vid.pause(); return; }
      if (vid) {
        if (ready && vid.paused && !vid.ended) vid.play().catch(() => {});
        if (vid.duration > 0) setProg(vid.currentTime / vid.duration);
        return;
      }
      if (!ready) return;
      elapsed += dt;
      setProg(elapsed / dur);
      if (elapsed >= dur) step(1);
    }
    function startClock() { cancelAnimationFrame(raf); lastTs = 0; raf = requestAnimationFrame(frameTick); }
    function stopClock() { cancelAnimationFrame(raf); raf = 0; }

    async function load(idx, opt = {}) {
      at = idx; i = 0; dir = opt.back ? -1 : 1;
      const my = ++token;
      const it = order[at];
      stopClock(); if (vid) { try { vid.pause(); } catch {} vid = null; }
      stage.replaceChildren(h("div", { class: "dst-wait", text: "Carregando…" }));
      bars.replaceChildren(); who.replaceChildren(h("b", { text: it.title }));
      try {
        const d = await M.get("destaques/" + it.id);
        if (my !== token) return;
        data = d.destaque;
        fillHead();
        i = opt.back ? last() : 0;
        show();
      } catch (e) {
        if (my !== token) return;
        M.toast(e.message, "err");
        order.splice(at, 1);
        if (!order.length) { finish(); return; }
        load(Math.min(at, order.length - 1));
      }
    }
    function fillHead() {
      ring.replaceChildren(M.avatar(data.author || { name: "Gestor", role: "admin" }, 34));
      who.replaceChildren(h("b", { text: data.title }), h("span", { text: `${data.author?.nickname || data.author?.name || "Gestor"} · ${M.timeAgo(data.createdAt)}` }));
      bars.replaceChildren(...data.slides.map(() => h("span", { class: "st-seg" }, h("i"))));
    }

    function show() {
      const s = slides()[i];
      if (!s) return;
      stopClock();
      elapsed = 0; ready = false; vid = null;
      const kids = [];
      let loading = null;
      if (s.media?.type === "image") {
        const img = h("img", { class: "dst-bgimg", src: imgUrl(s.media.url, 1080), alt: s.text ? "" : "Imagem do destaque", decoding: "async" });
        loading = new Promise((ok) => { img.addEventListener("load", ok, { once: true }); img.addEventListener("error", ok, { once: true }); });
        kids.push(img);
      } else if (s.media?.type === "video") {
        const v = h("video", { class: "dst-bgvid", src: vidUrl(s.media.url), playsinline: true, autoplay: true, preload: "auto" });
        v.muted = muted;
        v.addEventListener("ended", () => { if (vid === v) step(1); });
        v.addEventListener("playing", () => { ready = true; });
        v.addEventListener("error", () => { if (vid === v) { ready = false; dur = 3000; vid = null; ready = true; } });
        vid = v;
        kids.push(v);
        const p = v.play();
        if (p && p.catch) p.catch(() => {
          // o navegador barrou o som: começa mudo e o botão do alto liga de novo
          muted = true; v.muted = true; paint();
          v.play().catch(() => {});
        });
        ready = true;
      }
      if (s.text) {
        kids.push(s.media
          ? h("div", { class: "dst-cap" }, h("p", {}, M.rich(s.text)))
          : h("div", { class: "dst-textslide" }, h("p", { class: "dst-text" }, M.rich(s.text))));
      }
      dur = s.media?.type === "video" ? 0 : Math.max(s.media ? SLIDE_MS : 5000, Math.min(14000, 3200 + (s.text || "").length * 48));
      stage.className = "dst-stage " + (dir > 0 ? "in-next" : "in-prev");
      stage.replaceChildren(...kids);
      frame.dataset.mood = s.media ? "dark" : (s.mood || "violet");
      paintBars();
      muteBtn.hidden = s.media?.type !== "video";
      arrowL.hidden = at === 0 && i === 0;
      paint();
      if (i === last()) markSeen(order[at]);
      if (loading) loading.then(() => { if (stage.isConnected) ready = true; });
      startClock();
    }

    async function markSeen(it) {
      if (it.seen) return;
      it.seen = true;
      if (hooks.onSeen) hooks.onSeen(it);
      try { const r = await M.post(`destaques/${it.id}/seen`); M.bumpXp(r); } catch { /* sem internet: o próximo acesso tenta de novo */ it.seen = false; }
    }

    function step(d) {
      if (!data) return;
      if (d < 0) {
        if (i > 0) { dir = -1; i--; show(); }
        else if (at > 0) load(at - 1, { back: true });
        else show();
        return;
      }
      if (i < last()) { dir = 1; i++; show(); return; }
      if (at < order.length - 1) load(at + 1); else finish();
    }
    function toDestaque(d) {
      const to = at + d;
      if (to < 0 || to >= order.length) return;
      load(to, { back: d < 0 });
    }

    /* ── ações do gestor ── */
    function toggleMenu(on) {
      menuOpen = !!on;
      menu.hidden = !menuOpen;
      if (menuOpen) {
        const item = (icon, label, fn, cls = "") => h("button", { class: "dst-mi " + cls, type: "button", role: "menuitem", onclick: () => { toggleMenu(false); fn(); } }, M.icon(icon, 18), h("span", { text: label }));
        menu.replaceChildren(
          item("plus", "Adicionar card neste destaque", () => edit(true)),
          item("edit", "Editar nome, ordem e cards", () => edit(false)),
          item("send", "Virar post (só este card)", () => toFeed(i)),
          slides().length > 1 ? item("send", "Virar post (destaque inteiro)", () => toFeed("all")) : null,
          item("trash", "Apagar destaque", () => remove(), "bad"));
        menu.firstChild?.focus();
      }
    }
    async function reload(keep) {
      const my = ++token;
      try {
        const d = await M.get("destaques/" + order[at].id);
        if (my !== token) return;
        data = d.destaque; order[at].title = data.title;
        fillHead();
        i = keep === "end" ? last() : Math.min(i, last());
        show();
      } catch (e) { M.toast(e.message, "err"); finish(); }
    }
    function edit(addCard) {
      if (!data) return;
      manual = false;
      M.openDestaqueComposer(hooks.meta || {}, () => { hooks.changed = true; reload(addCard ? "end" : null); }, { id: data.id, title: data.title, slides: data.slides }, { addCard });
    }
    async function toFeed(which) {
      const whole = which === "all";
      const ok = await M.confirm({
        title: whole ? "Transformar o destaque inteiro em post?" : "Transformar este card em post?",
        text: whole ? "Todos os cards viram um post publicado no Feed e o destaque sai da barra." : "O card vira um post publicado no Feed e sai dos destaques. Se for o único, o destaque some da barra.",
        ok: "Transformar em post",
      });
      if (!ok) return;
      try {
        const r = await M.post(`destaques/${order[at].id}/to-feed`, { slide: which });
        M.toast("Virou post no Feed.", "ok");
        hooks.changed = true;
        if (r.removed) {
          if (hooks.onDeleted) hooks.onDeleted(order[at]);
          order.splice(at, 1);
          if (!order.length) finish(); else load(Math.min(at, order.length - 1));
        } else reload(null);
      } catch (e) { M.toast(e.message, "err"); }
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
      token++;
      stopClock();
      if (vid) { try { vid.pause(); } catch {} }
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
      node.remove();
      if (hooks.onClose) hooks.onClose();
    }

    const onKey = (e) => {
      if (document.querySelector("dialog[open]")) return;
      if (e.key === "Escape") { if (menuOpen) toggleMenu(false); else finish(); }
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === " " && !/^(button|a|input|textarea)$/i.test(e.target.tagName)) { e.preventDefault(); manual = !manual; paint(); }
      else if ((e.key === "m" || e.key === "M") && !muteBtn.hidden) { muted = !muted; if (vid) vid.muted = muted; paint(); }
    };
    document.addEventListener("keydown", onKey);

    /* toque, segurar para pausar e deslizar */
    let down = null, holdTimer = 0;
    hit.addEventListener("pointerdown", (e) => {
      if (e.button > 0) return;
      if (menuOpen) { toggleMenu(false); down = null; return; }
      down = { x: e.clientX, y: e.clientY, t: Date.now(), moved: false };
      clearTimeout(holdTimer);
      holdTimer = setTimeout(() => { if (down && !down.moved) { held = true; paint(); } }, 220);
      try { hit.setPointerCapture(e.pointerId); } catch {}
    });
    hit.addEventListener("pointermove", (e) => {
      if (!down) return;
      if (Math.abs(e.clientX - down.x) > 12 || Math.abs(e.clientY - down.y) > 12) { down.moved = true; clearTimeout(holdTimer); if (held) { held = false; paint(); } }
    });
    const release = (e, cancel) => {
      clearTimeout(holdTimer);
      const d = down; down = null;
      const wasHeld = held;
      if (held) { held = false; paint(); }
      if (!d || cancel) return;
      const dx = e.clientX - d.x, dy = e.clientY - d.y;
      if (d.moved) {
        if (Math.abs(dx) > 70 && Math.abs(dy) < 80) toDestaque(dx < 0 ? 1 : -1);
        else if (dy > 110 && Math.abs(dx) < 80) finish();
        return;
      }
      if (wasHeld) return;
      const r = hit.getBoundingClientRect();
      step(e.clientX - r.left < r.width * 0.3 ? -1 : 1);
    };
    hit.addEventListener("pointerup", (e) => release(e, false));
    hit.addEventListener("pointercancel", (e) => release(e, true));
    hit.addEventListener("contextmenu", (e) => e.preventDefault());
    node.addEventListener("click", (e) => { if (e.target === node) finish(); });
    document.addEventListener("visibilitychange", paint);

    load(at);
    closeBtn.focus({ preventScroll: true });
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
        h("button", { class: "dst-item" + (it.seen ? " is-seen" : " is-new"), type: "button", "aria-label": `Destaque de ${it.author?.name || "gestor"}: ${it.title}${it.seen ? "" : " (novo)"}`,
          onclick: () => M.openDestaque(items, it.id, { meta, onSeen: () => { paint(); M.session.destaques = Math.max(0, items.filter((x) => !x.seen).length); M.paintBadges(); }, onClose: () => root.refresh(), onDeleted: () => root.refresh() }) },
        h("span", { class: "dst-ring" }, h("span", { class: "dst-disc has-photo" }, M.avatar(it.author || { name: "Gestor", role: "admin" }, 64))),
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
  M.openDestaqueComposer = async function (meta, onDone, existing, opt = {}) {
    let uploads = false;
    try { uploads = !!(await M.get("feed/status")).uploads; } catch {}
    const maxSlides = meta.maxSlides || 20, maxText = meta.maxText || 280, maxTitle = meta.maxTitle || 24;
    let seq = 0;
    const slides = existing
      ? existing.slides.map((x) => ({ id: ++seq, text: x.text || "", mood: x.mood || "violet", media: x.media ? { type: x.media.type, url: x.media.url, name: x.media.type === "video" ? "Vídeo atual" : "Foto atual", status: "done", preview: x.media.type === "image" ? imgUrl(x.media.url, 240) : null, keep: true } : null }))
      : [{ id: ++seq, text: "", mood: "violet", media: null }];
    if (existing && opt.addCard && slides.length < maxSlides) slides.push({ id: ++seq, text: "", mood: slides[slides.length - 1]?.mood || "violet", media: null });
    const title = h("input", { class: "input", type: "text", maxlength: String(maxTitle), placeholder: "Ex.: Novidade, Meta da semana, Dica", "aria-label": "Nome do destaque" });
    if (existing) title.value = existing.title;
    const list = h("div", { class: "dst-slides" });
    const addBtn = h("button", { class: "btn btn-ghost btn-sm", type: "button" }, M.icon("plus", 16), "Adicionar card");
    const pub = h("button", { class: "btn btn-gold", type: "button", text: existing ? "Salvar alterações" : "Publicar destaque" });
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
        h("button", { class: "icon-btn", type: "button", "aria-label": "Remover foto ou vídeo", onclick: () => { if (m.preview && !m.keep) URL.revokeObjectURL(m.preview); s.media = null; draw(); } }, M.icon("x", 16))) : null;
      return h("section", { class: "dst-slide", "data-s": String(s.id), "data-mood": s.mood },
        h("div", { class: "row row-between" }, h("strong", { text: `Card ${k + 1}` }),
          h("div", { class: "row", style: "gap:2px" },
            k > 0 ? h("button", { class: "icon-btn", type: "button", "aria-label": `Subir o card ${k + 1}`, onclick: () => { [slides[k - 1], slides[k]] = [slides[k], slides[k - 1]]; draw(); } }, M.icon("up", 16)) : null,
            k < slides.length - 1 ? h("button", { class: "icon-btn", type: "button", "aria-label": `Descer o card ${k + 1}`, onclick: () => { [slides[k + 1], slides[k]] = [slides[k], slides[k + 1]]; draw(); } }, M.icon("down", 16)) : null,
            slides.length > 1 ? h("button", { class: "icon-btn", type: "button", "aria-label": `Remover o card ${k + 1}`, onclick: () => { slides.splice(k, 1); draw(); } }, M.icon("trash", 16)) : null)),
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
          if (existing) { await M.api("PUT", "destaques/" + existing.id, { title: t, slides: body }); M.toast("Destaque atualizado.", "ok"); }
          else { await M.post("destaques", { title: t, slides: body }); M.toast("Destaque publicado. O time já vê a bolinha no Feed.", "ok"); }
          done(true);
          if (onDone) onDone();
        } catch (e) { err.replaceChildren(h("div", { class: "form-error", text: e.message })); pub.disabled = false; }
      });
      draw();
      return h("div", { class: "dst-compose" },
        h("h3", { text: existing ? "Editar destaque" : "Novo destaque" }),
        h("p", { class: "muted small", style: "margin:0", text: existing ? "Acrescente, reordene ou tire cards. Quem já assistiu volta a ver o destaque como novo quando entra card novo." : "Vira uma bolinha no Feed de todo o time, com a sua foto de perfil, e não some em 24 horas. Quem assiste até o último card ganha XP." }),
        h("div", { class: "field" }, h("label", { text: "Nome da bolinha" }), title, h("span", { class: "hint", text: `Até ${maxTitle} letras.` })),
        list, err,
        h("div", { class: "dlg-actions", style: "justify-content:space-between" }, addBtn,
          h("div", { class: "row" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => done(false), text: "Cancelar" }), pub)));
    });
  };
})();

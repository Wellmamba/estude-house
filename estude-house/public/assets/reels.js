/* Reels: vídeos dos posts e destaques dos últimos 30 dias, um por vez, na vertical, com play automático. */
(function () {
  const { h } = M;
  const MAX_S = 30; // cada vídeo roda até 30 segundos; depois aparece "Ir para o post"
  const SEEN_KEY = "eh-reels-seen";

  const store = {
    seen() { try { const o = JSON.parse(localStorage.getItem(SEEN_KEY) || "{}"); const cut = Date.now() - 31 * 864e5; for (const k of Object.keys(o)) if (o[k] < cut) delete o[k]; return o; } catch { return {}; } },
    mark(id) { try { const o = store.seen(); o[id] = Date.now(); localStorage.setItem(SEEN_KEY, JSON.stringify(o)); } catch {} },
    sound() { try { return sessionStorage.getItem("eh-reels-sound") === "1"; } catch { return false; } },
    setSound(v) { try { sessionStorage.setItem("eh-reels-sound", v ? "1" : "0"); } catch {} },
  };
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  /* ordem: vídeos novos que você ainda não viu vêm primeiro (do mais novo ao mais antigo); o resto vem embaralhado, com os já vistos por último */
  M.reelsOrder = function (items, seen = {}) {
    const fresh = items.filter((x) => x.fresh && !seen[x.id]).sort((a, b) => b.at - a.at);
    const ids = new Set(fresh.map((x) => x.id));
    const rest = items.filter((x) => !ids.has(x.id));
    return [...fresh, ...shuffle(rest.filter((x) => !seen[x.id])), ...shuffle(rest.filter((x) => seen[x.id]))];
  };

  /* endereço do player de cada serviço, já com autoplay e sem barra de controles */
  function embedSrc(v, sound) {
    const mute = 1; /* o celular só toca sozinho sem som; se a pessoa já ligou o som, ligamos depois que começar */
    if (v.provider === "youtube") return `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&mute=${mute}&controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&loop=1&playlist=${v.id}&enablejsapi=1`;
    if (v.provider === "vimeo") return `https://player.vimeo.com/video/${v.id}?autoplay=1&muted=${mute}&loop=1&playsinline=1&controls=0&title=0&byline=0&portrait=0`;
    if (v.provider === "loom") return `https://www.loom.com/embed/${v.id}?autoplay=1&muted=${mute}&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`;
    if (v.provider === "drive") return `https://drive.google.com/file/d/${v.id}/preview`;
    return "";
  }
  const IOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const AUTOPLAYS = new Set(IOS ? ["youtube", "vimeo"] : ["youtube", "vimeo", "loom"]); /* o Drive não deixa tocar sozinho: pede um toque */

  M.views.reels = async function () {
    await M.refreshMe();
    const wrap = h("div", { class: "reels-wrap" });
    let data;
    try { data = await M.get("reels"); } catch (e) { return h("div", { class: "empty" }, h("h3", { text: "Não foi possível abrir os Reels" }), h("p", { text: e.message })); }
    if (!data.items.length) {
      return h("div", { class: "empty reels-empty" }, M.icon("reels", 40), h("h3", { text: "Ainda não há vídeos nos últimos 30 dias" }),
        h("p", { text: "Assim que alguém publicar um vídeo no Feed ou num destaque, ele aparece aqui, um por vez, como no Instagram." }),
        h("a", { class: "btn btn-gold", href: "#/" }, "Voltar ao Feed"));
    }

    const scroller = h("div", { class: "reels-scroller", tabindex: "0", "aria-label": "Vídeos do time. Role para ver o próximo." });
    const stage = h("div", { class: "reels-stage" }, scroller);
    const sheetHost = h("div", { class: "reels-sheet-host" });
    stage.append(sheetHost);
    const nav = h("div", { class: "reels-nav" },
      h("button", { class: "icon-btn", type: "button", "aria-label": "Vídeo anterior", onclick: () => go(-1) }, M.icon("up", 22)),
      h("button", { class: "icon-btn", type: "button", "aria-label": "Próximo vídeo", onclick: () => go(1) }, M.icon("down", 22)));
    wrap.append(stage, nav);

    let items = M.reelsOrder(data.items, store.seen());
    let sound = store.sound();
    let cur = -1, ctl = null, seenTimer = 0;
    const els = new Map(); // id -> { item, el, ...partes }
    const posts = new Map(); // id do vídeo -> post (o hype é o mesmo em todas as cópias)
    const base = data.items.slice(); // todos os vídeos; a lista roda sem fim, embaralhando de novo
    let round = 0;

    /* altura útil: a tela menos o topo e a barra de baixo (celular) */
    function fit() {
      const top = document.querySelector(".top")?.offsetHeight || 0;
      const tab = getComputedStyle(document.querySelector(".tabbar") || document.body).display !== "none" ? (document.querySelector(".tabbar")?.offsetHeight || 0) : 0;
      const hgt = tab ? innerHeight - top - tab : Math.min(innerHeight - top - 40, 860);
      wrap.style.setProperty("--reels-h", Math.max(320, hgt) + "px");
      /* no celular o CSS prende o quadro entre o topo e a barra de baixo; aqui só informamos as alturas reais */
      document.documentElement.style.setProperty("--top-h", top + "px");
      document.documentElement.style.setProperty("--tab-h", tab + "px");
    }
    fit(); addEventListener("resize", fit); addEventListener("orientationchange", () => setTimeout(fit, 250));

    function build(item) {
      const post = posts.get(item.baseId || item.id) || { id: item.postId, hyped: item.hyped, hypes: item.hypes };
      posts.set(item.baseId || item.id, post);
      const mediaBox = h("div", { class: "reel-media" });
      const prog = h("i", { class: "reel-prog-bar" });
      const end = h("div", { class: "reel-end", hidden: true },
        item.source === "post"
          ? h("a", { class: "btn btn-gold reel-go", href: "#/post/" + item.postId }, "Ir para o post", M.icon("arrow", 18))
          : h("button", { class: "btn btn-gold reel-go", type: "button", onclick: () => openDestaque(item) }, "Ver destaque", M.icon("arrow", 18)),
        h("button", { class: "reel-replay", type: "button", onclick: () => ctl?.replay() }, "Rever do começo"));
      const pauseIco = h("span", { class: "reel-pause-ico", "aria-hidden": "true" }, M.icon("play", 34));
      const tap = h("button", { class: "reel-tap", type: "button", "aria-label": "Pausar ou continuar o vídeo" });
      const who = item.author;
      const info = h("div", { class: "reel-info" },
        h("div", { class: "reel-who" },
          h("a", { href: M.profileHref(who), "aria-label": "Perfil de " + who.name }, M.avatar(who, 36)),
          h("div", { class: "reel-who-t" }, h("a", { class: "reel-name", href: M.profileHref(who), text: who.name }), h("span", { class: "small", text: (who.nickname ? "@" + who.nickname + " · " : "") + M.timeAgo(item.at) })),
          item.kind ? M.kindChip(item.kind) : null),
        item.text ? h("p", { class: "reel-text", text: item.text }) : null,
        item.source === "post" ? h("a", { class: "reel-see", href: "#/post/" + item.postId }, "Ver post completo", M.icon("chevr", 14)) : h("button", { class: "reel-see", type: "button", onclick: () => openDestaque(item) }, "Abrir destaque", M.icon("chevr", 14)));
      const cCount = h("span", { class: "reel-n", text: String(item.comments) });
      const cBtn = h("button", { class: "reel-btn", type: "button", "aria-label": "Comentários" }, M.icon("chat", 26), cCount);
      cBtn.addEventListener("click", () => openComments(item, post, cCount));
      const shareBtn = h("button", { class: "reel-btn", type: "button", "aria-label": "Compartilhar" }, M.icon("link", 24), h("span", { class: "reel-n", text: "Link" }));
      shareBtn.addEventListener("click", async () => {
        const url = item.source === "post" ? `${location.origin}/#/post/${item.postId}` : `${location.origin}/#/reels`;
        try { if (navigator.share) await navigator.share({ url, text: item.text || "Vídeo do time" }); else { await navigator.clipboard.writeText(url); M.toast("Link copiado.", "ok"); } } catch {}
      });
      const soundBtn = h("button", { class: "reel-btn reel-sound", type: "button", "aria-label": "Ligar ou desligar o som" }, M.icon(sound ? "vol" : "mute", 24));
      soundBtn.addEventListener("click", () => setSound(!sound));
      const rail = h("div", { class: "reel-rail" }, item.source === "post" ? M.hypeButton(post) : null, item.source === "post" ? cBtn : null, shareBtn, soundBtn);
      const el = h("section", { class: "reel", "data-id": item.id, "aria-label": "Vídeo de " + who.name }, h("div", { class: "reel-bg" }), mediaBox, h("div", { class: "reel-scrim" }), tap, h("div", { class: "reel-prog" }, prog), info, rail, end, pauseIco);
      const part = { item, el, mediaBox, prog, end, tap, soundBtn, pauseIco, post };
      tap.addEventListener("click", () => ctl?.toggle());
      els.set(item.id, part);
      return el;
    }

    function setSound(v) {
      sound = v; store.setSound(v);
      els.forEach((p) => p.soundBtn.replaceChildren(M.icon(sound ? "vol" : "mute", 24)));
      ctl?.applySound();
    }

    async function openDestaque(item) {
      try { const d = await M.get("destaques"); M.openDestaque(d.items, item.destaqueId, { meta: d, onClose: () => {} }); } catch (e) { M.toast(e.message, "err"); }
    }
    function openComments(item, post, countEl) {
      ctl?.pause();
      const box = M.commentsBox(post, (n) => { item.comments = n; countEl.textContent = String(n); });
      const close = () => { sheet.remove(); ctl?.resume(); };
      const sheet = h("div", { class: "reels-sheet", role: "dialog", "aria-label": "Comentários" }, h("div", { class: "rs-back", onclick: close }),
        h("div", { class: "rs-card no-swipe" }, h("div", { class: "rs-head" }, h("strong", { text: "Comentários" }), h("button", { class: "icon-btn", type: "button", "aria-label": "Fechar", onclick: close }, M.icon("x", 18))), box));
      sheetHost.append(sheet);
    }

    /* ───── tocador de um vídeo: cria, conta até 30 s, mostra o botão no fim ───── */
    function play(part) {
      const { item, mediaBox, prog, end, pauseIco } = part;
      const v = item.video;
      mediaBox.replaceChildren(); end.hidden = true; prog.style.width = "0%"; part.el.classList.remove("is-paused", "is-done", "is-landscape");
      let raf = 0, t0 = 0, paused = false, pausedAt = 0, finished = false, node = null, isIframe = false;
      const finish = () => {
        if (finished) return; finished = true; cancelAnimationFrame(raf);
        prog.style.width = "100%";
        if (isIframe) { node.remove(); node = null; }
        else if (node) node.pause();
        part.el.classList.add("is-done"); end.hidden = false;
      };
      const tick = () => {
        if (paused || finished) return;
        const sec = isIframe ? (performance.now() - t0) / 1000 : node.currentTime;
        prog.style.width = Math.min(100, (sec / MAX_S) * 100) + "%";
        if (sec >= MAX_S) { finish(); return; }
        raf = requestAnimationFrame(tick);
      };
      const api = {
        applySound() {
          if (!node) return;
          if (!isIframe) { node.muted = !sound; return; }
          const w = node.contentWindow; if (!w) return;
          try {
            if (v.provider === "youtube") w.postMessage(JSON.stringify({ event: "command", func: sound ? "unMute" : "mute", args: [] }), "*");
            if (v.provider === "vimeo") w.postMessage(JSON.stringify({ method: "setVolume", value: sound ? 1 : 0 }), "*");
          } catch {}
        },
        pause() { if (finished || paused) return; paused = true; pausedAt = performance.now(); part.el.classList.add("is-paused"); if (!isIframe && node) node.pause(); else if (node?.contentWindow) { try { if (v.provider === "youtube") node.contentWindow.postMessage(JSON.stringify({ event: "command", func: "pauseVideo", args: [] }), "*"); if (v.provider === "vimeo") node.contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*"); } catch {} } },
        resume() { if (finished || !paused) return; paused = false; t0 += performance.now() - pausedAt; part.el.classList.remove("is-paused"); if (!isIframe && node) node.play().catch(() => {}); else if (node?.contentWindow) { try { if (v.provider === "youtube") node.contentWindow.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: [] }), "*"); if (v.provider === "vimeo") node.contentWindow.postMessage(JSON.stringify({ method: "play" }), "*"); } catch {} } raf = requestAnimationFrame(tick); },
        toggle() { if (finished) return; if (paused) api.resume(); else api.pause(); },
        replay() { part.el.classList.remove("is-done"); end.hidden = true; api.stop(); ctl = play(part); },
        stop() { cancelAnimationFrame(raf); finished = true; part.cleanup?.(); if (node && !isIframe) { node.pause(); node.removeAttribute("src"); node.load(); } if (node && isIframe) node.remove(); node = null; mediaBox.replaceChildren(); },
      };
      if (v.type === "video" || v.provider === "file") {
        const src = v.type === "video" ? M.vidUrl(v.url) : v.url;
        node = h("video", { class: "reel-video", src, poster: v.type === "video" ? M.posterUrl(v.url) : undefined, playsinline: "", muted: "", autoplay: "", preload: "auto", "webkit-playsinline": "" });
        node.defaultMuted = true; node.muted = true; node.playsInline = true; /* começa sem som: é o único jeito de tocar sozinho no iPhone */
        if (v.type === "video" && M.posterUrl(v.url)) part.el.querySelector(".reel-bg").style.backgroundImage = `url('${M.posterUrl(v.url)}')`;
        node.addEventListener("loadedmetadata", () => { if (node && node.videoWidth && node.videoHeight / node.videoWidth < 1.15) part.el.classList.add("is-landscape"); });
        node.addEventListener("ended", () => { if (node && node.duration > MAX_S + 0.5) finish(); else if (node) { node.currentTime = 0; node.play().catch(() => {}); } });
        node.addEventListener("error", () => { part.el.classList.add("is-broken"); });
        mediaBox.append(node);
        let started = false, btn = null, autoPaused = false;
        const unmute = () => {
          if (!sound || !node) return;
          node.muted = false;
          setTimeout(() => { if (node && !finished && !paused && node.paused) { node.muted = true; node.play().catch(() => {}); setSound(false); } }, 350); /* o navegador pausou ao ligar o som: volta sem som */
        };
        const onPlaying = () => { started = true; btn?.remove(); btn = null; if (autoPaused) { paused = false; autoPaused = false; } part.el.classList.remove("is-paused"); if (!raf && !paused) raf = requestAnimationFrame(tick); unmute(); };
        node.addEventListener("playing", onPlaying, { once: true });
        const needTap = () => {
          if (started || finished || btn || !node) return;
          paused = true; autoPaused = true; pausedAt = performance.now();
          btn = h("button", { class: "reel-start", type: "button" }, M.icon("play", 26), "Toque para assistir");
          btn.addEventListener("click", (e) => {
            e.stopPropagation(); btn.remove(); btn = null; paused = false; autoPaused = false;
            node.muted = !sound; node.play().catch(() => { node.muted = true; node.play().catch(() => {}); });
          });
          mediaBox.append(btn);
        };
        node.play().catch(needTap);
        setTimeout(() => { if (!started && node && node.paused && !paused) needTap(); }, 1600); /* modo de economia de bateria: o navegador nem avisa que bloqueou */
      } else {
        isIframe = true;
        const thumb = v.provider === "youtube" ? `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg` : "";
        if (thumb) part.el.querySelector(".reel-bg").style.backgroundImage = `url('${thumb}')`;
        let playing = false, btn = null, onMsg = null, guard = 0;
        const manual = () => { /* deixa a pessoa tocar no play do próprio player */
          btn?.remove(); btn = null;
          if (node) node.style.pointerEvents = "auto";
          part.el.classList.add("is-manual");
        };
        const askTap = (label) => {
          if (btn) return;
          btn = h("button", { class: "reel-start", type: "button" }, M.icon("play", 26), label || "Toque para assistir");
          btn.addEventListener("click", (e) => { e.stopPropagation(); manual(); });
          mediaBox.append(btn);
        };
        const start = () => {
          node = h("iframe", { class: "reel-iframe", src: embedSrc(v, sound), title: "Vídeo", allow: "autoplay; encrypted-media; picture-in-picture", referrerpolicy: "strict-origin-when-cross-origin", sandbox: "allow-scripts allow-same-origin allow-presentation allow-popups", loading: "eager" });
          mediaBox.append(node); t0 = performance.now(); raf = requestAnimationFrame(tick);
          if (!AUTOPLAYS.has(v.provider)) { part.el.classList.add("is-manual"); return; }
          /* escuta o player para saber se começou mesmo; se não começar em 3 s (celular, economia de bateria), pede um toque */
          onMsg = (ev) => {
            if (!node || ev.source !== node.contentWindow) return;
            let d = ev.data; if (typeof d === "string") { try { d = JSON.parse(d); } catch { return; } }
            if (!d) return;
            const yt = (d.event === "infoDelivery" && d.info && d.info.playerState === 1) || (d.event === "onStateChange" && d.info === 1);
            const vm = d.event === "play" || d.event === "playProgress" || d.event === "timeupdate";
            if (yt || vm) { playing = true; clearTimeout(guard); btn?.remove(); btn = null; if (sound) api.applySound(); }
          };
          addEventListener("message", onMsg);
          node.addEventListener("load", () => {
            try {
              if (v.provider === "youtube") node.contentWindow.postMessage(JSON.stringify({ event: "listening", id: 1, channel: "widget" }), "*");
              if (v.provider === "vimeo") ["play", "playProgress"].forEach((n) => node.contentWindow.postMessage(JSON.stringify({ method: "addEventListener", value: n }), "*"));
            } catch {}
          });
          guard = setTimeout(() => { if (!playing && node && !finished) askTap(); }, 3200);
        };
        part.cleanup = () => { clearTimeout(guard); if (onMsg) removeEventListener("message", onMsg); };
        if (AUTOPLAYS.has(v.provider)) start();
        else {
          const b = h("button", { class: "reel-start", type: "button" }, M.icon("play", 26), "Toque para assistir");
          b.addEventListener("click", (e) => { e.stopPropagation(); b.remove(); start(); node.style.pointerEvents = "auto"; });
          mediaBox.append(b);
          paused = false;
        }
      }
      return api;
    }

    /* lista sem fim: quando chega perto do último, vem outra rodada embaralhada (sem repetir o mesmo vídeo em seguida) */
    function more() {
      if (base.length < 2) return;
      round++;
      let batch = shuffle(base.slice());
      const lastBase = items[items.length - 1].baseId || items[items.length - 1].id;
      if (batch[0].id === lastBase) batch.push(batch.shift());
      const copies = batch.map((x) => ({ ...x, baseId: x.id, id: x.id + "~" + round }));
      items.push(...copies);
      for (const it of copies) { const el = build(it); scroller.append(el); io.observe(el); }
    }

    function activate(i) {
      if (i === cur || i < 0 || i >= items.length) return;
      const prev = cur;
      if (ctl) { ctl.stop(); ctl = null; }
      clearTimeout(seenTimer);
      cur = i;
      const part = els.get(items[i].id);
      ctl = play(part);
      const baseId = items[i].baseId || items[i].id;
      seenTimer = setTimeout(() => store.mark(baseId), 2000);
      if (i >= items.length - 2) more();
      /* guarda só o que importa: o vídeo anterior volta a ser só a capa */
      if (prev >= 0 && items[prev]) els.get(items[prev].id)?.el.classList.remove("is-paused", "is-done");
    }

    const io = new IntersectionObserver((entries) => {
      for (const en of entries) if (en.isIntersecting && en.intersectionRatio >= 0.65) activate(items.findIndex((x) => x.id === en.target.dataset.id));
    }, { root: scroller, threshold: [0.65] });
    items.forEach((it) => { const el = build(it); scroller.append(el); io.observe(el); });

    function go(d) {
      const t = Math.max(0, Math.min(items.length - 1, (cur < 0 ? 0 : cur) + d));
      els.get(items[t].id)?.el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const onKey = (e) => {
      if (!wrap.isConnected) { document.removeEventListener("keydown", onKey); return; }
      if (e.target.closest("input, textarea")) return;
      if (e.key === "ArrowDown" || e.key === "j") { e.preventDefault(); go(1); }
      else if (e.key === "ArrowUp" || e.key === "k") { e.preventDefault(); go(-1); }
      else if (e.key === " ") { e.preventDefault(); ctl?.toggle(); }
      else if (e.key === "m") setSound(!sound);
    };
    document.addEventListener("keydown", onKey);

    /* vídeo novo que chegou enquanto a pessoa assiste: entra logo depois do atual */
    const poll = setInterval(async () => {
      if (!wrap.isConnected) { clearInterval(poll); return; }
      if (document.hidden) return;
      try {
        const d = await M.get("reels");
        const have = new Set(base.map((x) => x.id));
        const fresh = d.items.filter((x) => !have.has(x.id));
        if (!fresh.length) return;
        fresh.sort((a, b) => b.at - a.at);
        base.push(...fresh);
        const at = Math.max(cur, 0) + 1;
        items.splice(at, 0, ...fresh);
        let ref = els.get(items[at - 1].id).el;
        for (const it of fresh) { const el = build(it); ref.after(el); io.observe(el); ref = el; }
        M.toast(fresh.length === 1 ? "Chegou um vídeo novo: é o próximo." : `Chegaram ${fresh.length} vídeos novos: são os próximos.`, "ok");
      } catch {}
    }, 60000);

    /* ao sair da tela, tudo para (som inclusive) */
    const leave = () => { if (location.hash === "#/reels") return; ctl?.stop(); ctl = null; clearInterval(poll); clearTimeout(seenTimer); io.disconnect(); removeEventListener("resize", fit); document.removeEventListener("keydown", onKey); removeEventListener("hashchange", leave); };
    addEventListener("hashchange", leave);
    return wrap;
  };
})();

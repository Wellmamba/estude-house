/* Texto do post (links, @pessoas, #tags) e anexos: imagem, vídeo, arquivo e link com visualização. */
(function () {
  const { h } = M;

  /* ───── texto ───── */
  const TOKEN = /(https?:\/\/[^\s<]+[^\s<.,;:!?)\]'"])|(@[a-z][a-z0-9_.]{2,19})|(#[\p{L}\p{N}_]{2,30})/gu;
  M.rich = function (text, query) {
    const frag = document.createDocumentFragment();
    let last = 0, m;
    const plain = (t) => { if (t) frag.append(...M.highlight(t, query)); };
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(text))) {
      plain(text.slice(last, m.index));
      let tok = m[0], tail = "";
      if (m[2]) { const t = tok.match(/[._]+$/); if (t) { tail = t[0]; tok = tok.slice(0, -tail.length); } }
      if (m[1]) {
        let label = tok.replace(/^https?:\/\/(www\.)?/, "");
        if (label.length > 44) label = label.slice(0, 42) + "…";
        frag.append(h("a", { href: tok, target: "_blank", rel: "noopener noreferrer nofollow", class: "rich-link", text: label }));
      } else if (m[2]) {
        frag.append(h("a", { href: "#/u/" + tok.slice(1), class: "rich-mention", text: tok }), tail);
      } else {
        frag.append(h("a", { href: "#/busca?q=" + encodeURIComponent(tok), class: "rich-tag", text: tok }));
      }
      last = m.index + m[0].length;
    }
    plain(text.slice(last));
    return frag;
  };
  /* destaca as palavras que combinam com a busca (lista de nós) */
  M.highlight = function (text, query) {
    if (!query || !window.TextSearch) return [document.createTextNode(text)];
    const qt = TextSearch.tokens(query);
    const out = [];
    const re = /[\p{L}\p{N}]+/gu;
    let last = 0, m;
    while ((m = re.exec(text))) {
      if (TextSearch.wordMatches(m[0], qt)) {
        if (m.index > last) out.push(document.createTextNode(text.slice(last, m.index)));
        out.push(h("mark", { text: m[0] }));
        last = m.index + m[0].length;
      }
    }
    if (last < text.length) out.push(document.createTextNode(text.slice(last)));
    return out;
  };

  /* ───── links com visualização ───── */
  M.embedOf = function (raw) {
    let u;
    try { u = new URL(raw); } catch { return null; }
    const host = u.hostname.replace(/^www\./, "");
    const path = u.pathname;
    let m;
    if (host === "youtu.be" && (m = path.match(/^\/([\w-]{6,15})/))) return yt(m[1]);
    if (/^(m\.)?youtube\.com$/.test(host) || host === "music.youtube.com") {
      const id = u.searchParams.get("v") || (m = path.match(/^\/(?:shorts|embed|live)\/([\w-]{6,15})/)) && m[1];
      if (id) return yt(id);
    }
    if (host === "vimeo.com" && (m = path.match(/^\/(\d+)/))) return { kind: "iframe", provider: "Vimeo", src: `https://player.vimeo.com/video/${m[1]}`, ratio: "16 / 9" };
    if (host === "loom.com" && (m = path.match(/^\/share\/([\w]+)/))) return { kind: "iframe", provider: "Loom", src: `https://www.loom.com/embed/${m[1]}`, ratio: "16 / 9" };
    if (host === "drive.google.com" && (m = path.match(/^\/file\/d\/([\w-]+)/))) return { kind: "iframe", provider: "Google Drive", src: `https://drive.google.com/file/d/${m[1]}/preview`, ratio: "16 / 10" };
    if (host === "docs.google.com" && (m = path.match(/^\/(document|spreadsheets|presentation)\/d\/([\w-]+)/))) {
      const nm = { document: "Google Docs", spreadsheets: "Google Sheets", presentation: "Google Slides" }[m[1]];
      return { kind: "iframe", provider: nm, src: `https://docs.google.com/${m[1]}/d/${m[2]}/${m[1] === "presentation" ? "embed" : "preview"}`, ratio: "4 / 3" };
    }
    if (host === "canva.com" && /\/design\/[\w-]+\/[\w-]+\/(view|watch)/.test(path)) return { kind: "iframe", provider: "Canva", src: `https://www.canva.com${path}?embed`, ratio: "16 / 10" };
    if (host === "figma.com" && /^\/(file|design|proto|board)\//.test(path)) return { kind: "iframe", provider: "Figma", src: `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(raw)}`, ratio: "16 / 10" };
    if (/\.(jpe?g|png|gif|webp|avif)$/i.test(path)) return { kind: "image", src: raw };
    if (/\.(mp4|webm|mov)$/i.test(path)) return { kind: "video", src: raw };
    return null;
  };
  function yt(id) {
    return { kind: "iframe", provider: "YouTube", src: `https://www.youtube-nocookie.com/embed/${id}`, ratio: "16 / 9", thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, autoplay: true };
  }
  const hostOf = (raw) => { try { return new URL(raw).hostname.replace(/^www\./, ""); } catch { return raw; } };

  /* ───── Cloudinary: versões leves ───── */
  const insertT = (url, kind, t) => url.replace(`/${kind}/upload/`, `/${kind}/upload/${t}/`);
  const imgUrl = (url, w) => (url.includes("/image/upload/") ? insertT(url, "image", `f_auto,q_auto,w_${w}`) : url);
  const vidUrl = (url) => (url.includes("/video/upload/") ? insertT(url, "video", "f_mp4,q_auto").replace(/\.\w+$/, ".mp4") : url);
  const posterUrl = (url) => (url.includes("/video/upload/") ? insertT(url, "video", "so_0,f_jpg,w_900").replace(/\.\w+$/, ".jpg") : undefined);
  const prettySize = (b) => (!b ? "" : b > 1048576 ? (b / 1048576).toFixed(1).replace(".", ",") + " MB" : Math.max(1, Math.round(b / 1024)) + " KB");
  M.prettySize = prettySize;
  M.imgUrl = imgUrl; M.vidUrl = vidUrl; M.posterUrl = posterUrl;

  /* ───── tela cheia ───── */
  M.viewer = function (node, title) {
    M.modal((close) => h("div", { class: "viewer" },
      h("div", { class: "row row-between" }, h("strong", { text: title || "Visualização" }),
        h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => close(), "aria-label": "Fechar" }, M.icon("x", 18))),
      node));
  };

  function iframeEl(e, autoplay) {
    const src = autoplay && e.autoplay ? e.src + "?autoplay=1" : e.src;
    return h("iframe", { src, title: e.provider, loading: "lazy", allow: "autoplay; fullscreen; picture-in-picture", allowfullscreen: "true", referrerpolicy: "strict-origin-when-cross-origin", sandbox: "allow-scripts allow-same-origin allow-presentation allow-popups allow-forms" });
  }

  function linkMedia(m) {
    const e = M.embedOf(m.url);
    if (e?.kind === "image") return imageMedia({ url: e.src, name: m.name });
    if (e?.kind === "video") return h("video", { class: "m-video", src: e.src, controls: true, preload: "metadata", playsinline: true });
    if (e?.kind === "iframe") {
      const box = h("div", { class: "m-embed", style: `aspect-ratio:${e.ratio}` });
      const open = () => { box.replaceChildren(iframeEl(e, true)); box.classList.add("is-open"); };
      const face = h("button", { class: "m-face", type: "button", onclick: open, "aria-label": `Abrir visualização (${e.provider})`, style: e.thumb ? `background-image:url('${e.thumb}')` : "" },
        h("span", { class: "m-play" }, M.icon("video", 26)),
        h("span", { class: "m-prov", text: e.provider }));
      box.append(face);
      return h("div", { class: "m-embed-wrap" }, box,
        h("div", { class: "m-embed-bar" }, h("span", { class: "small muted", text: hostOf(m.url) }),
          h("span", { class: "row" },
            h("button", { class: "linkish", type: "button", onclick: () => M.viewer(h("div", { class: "m-embed", style: `aspect-ratio:${e.ratio}` }, iframeEl(e, true)), e.provider), text: "Tela cheia" }),
            h("a", { href: m.url, target: "_blank", rel: "noopener noreferrer nofollow", text: "Abrir link" }))));
    }
    return h("a", { class: "m-link", href: m.url, target: "_blank", rel: "noopener noreferrer nofollow" },
      h("span", { class: "m-link-ico" }, M.icon("link", 20)),
      h("span", { class: "m-link-txt" }, h("strong", { text: hostOf(m.url) }), h("span", { class: "small muted", text: m.url.replace(/^https?:\/\/(www\.)?[^/]+/, "").slice(0, 80) || "Abrir link" })),
      M.icon("arrow", 18));
  }

  function imageMedia(m) {
    const img = h("img", { src: imgUrl(m.url, 900), alt: m.name || "Imagem do post", loading: "lazy", decoding: "async" });
    return h("button", { class: "m-img", type: "button", "aria-label": "Ampliar imagem", onclick: () => M.viewer(h("img", { class: "m-big", src: imgUrl(m.url, 1800), alt: m.name || "Imagem do post" }), m.name || "Imagem") }, img);
  }

  function fileMedia(m) {
    const isPdf = /\.pdf($|\?)/i.test(m.url) || /\.pdf$/i.test(m.name || "");
    return h("div", { class: "m-file" },
      h("span", { class: "m-link-ico" }, M.icon("file", 22)),
      h("span", { class: "m-link-txt" }, h("strong", { text: m.name || "Arquivo" }), h("span", { class: "small muted", text: [isPdf ? "PDF" : "Arquivo", prettySize(m.bytes)].filter(Boolean).join(" · ") })),
      h("span", { class: "row" },
        isPdf ? h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => M.viewer(h("iframe", { class: "m-pdf", src: m.url, title: m.name || "PDF" }), m.name || "PDF") }, "Visualizar") : null,
        h("a", { class: "btn btn-ghost btn-sm", href: m.url, target: "_blank", rel: "noopener noreferrer", download: "" }, "Baixar")));
  }

  /* ───── envio ao Cloudinary ───── */
  // kind: "auto" (padrão), "image" ou "video". GIF pesado vai como "video": vira mp4 leve em loop.
  M.cloudUpload = function (file, { kind = "auto", onProgress } = {}) {
    return M.post("feed/upload-sign").then((sign) => new Promise((res, rej) => {
      const fd = new FormData();
      fd.append("file", file); fd.append("api_key", sign.apiKey); fd.append("timestamp", sign.timestamp); fd.append("signature", sign.signature); fd.append("folder", sign.folder);
      const x = new XMLHttpRequest();
      x.open("POST", sign.url.replace("/auto/upload", `/${kind}/upload`));
      x.upload.onprogress = (e) => { if (onProgress && e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100)); };
      x.onload = () => { try { const j = JSON.parse(x.responseText); if (x.status < 300 && j.secure_url) res(j); else rej(new Error(j.error?.message || "O envio falhou.")); } catch { rej(new Error("O envio falhou.")); } };
      x.onerror = () => rej(new Error("Sem conexão durante o envio."));
      x.send(fd);
    }));
  };
  // Reduz a foto no próprio navegador (JPG). Com "square", corta um quadrado do centro (foto de perfil).
  M.shrinkImage = function (file, { max = 2560, quality = 0.86, limit = 9.5 * 1048576, square = 0 } = {}) {
    return new Promise((res, rej) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        let sw = img.naturalWidth, sh = img.naturalHeight, sx = 0, sy = 0, w, hh;
        if (!sw || !sh) { rej(new Error("Não consegui abrir essa imagem. Use JPG ou PNG.")); return; }
        if (square) { const s = Math.min(sw, sh); sx = (sw - s) / 2; sy = (sh - s) / 2; sw = sh = s; w = hh = Math.min(square, s); }
        else { const k = Math.min(1, max / Math.max(sw, sh)); w = Math.round(sw * k); hh = Math.round(sh * k); }
        const c = document.createElement("canvas"); c.width = w; c.height = hh;
        const g = c.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, w, hh); g.drawImage(img, sx, sy, sw, sh, 0, 0, w, hh);
        let q = quality;
        const once = () => c.toBlob((b) => {
          if (!b) { rej(new Error("Não consegui processar essa imagem.")); return; }
          if (b.size > limit && q > 0.5) { q -= 0.12; once(); return; }
          res(b);
        }, "image/jpeg", q);
        once();
      };
      img.onerror = () => { URL.revokeObjectURL(url); rej(new Error("Não consegui abrir essa imagem. Use JPG ou PNG.")); };
      img.src = url;
    });
  };

  M.renderMedia = function (list) {
    if (!list?.length) return null;
    const imgs = list.filter((m) => m.type === "image");
    const rest = list.filter((m) => m.type !== "image");
    const out = h("div", { class: "media" });
    if (imgs.length) out.append(h("div", { class: "m-grid n" + Math.min(imgs.length, 4) }, imgs.map(imageMedia)));
    for (const m of rest) {
      if (m.type === "video" && /\.gif$/i.test(m.name || "")) {
        const v = h("video", { class: "m-video m-gif", src: vidUrl(m.url), poster: posterUrl(m.url), autoplay: true, loop: true, muted: true, playsinline: true, preload: "auto", title: "Clique para pausar ou continuar" });
        v.muted = true;
        v.addEventListener("click", () => { if (v.paused) v.play(); else v.pause(); });
        out.append(v);
      } else if (m.type === "video") out.append(h("video", { class: "m-video", src: vidUrl(m.url), poster: posterUrl(m.url), controls: true, preload: "metadata", playsinline: true }));
      else if (m.type === "file") out.append(fileMedia(m));
      else out.append(linkMedia(m));
    }
    return out;
  };
})();

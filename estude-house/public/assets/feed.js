/* Feed: publicar, hype, comentar, perfil e @. */
(function () {
  const { h } = M;
  const LIMITS = { image: 10, file: 10, video: 100 }; // MB: limites do plano gratuito do Cloudinary
  const IMG_OK = /^image\/(png|jpe?g|gif|webp|avif|heic|heif)$/;

  /* ───── XP: avisos ───── */
  M.bumpXp = function (res) {
    if (!res) return;
    const goalXp = (res.goals || []).reduce((a, g) => a + g.xp, 0);
    if (res.gained > 0) M.session.engage.xp = (M.session.engage.xp || 0) + res.gained;
    if (res.gained - goalXp > 0) M.toast(`+${res.gained - goalXp} XP`, "ok");
    (res.goals || []).forEach((g) => M.toast(`Meta batida: ${g.title} (+${g.xp} XP)`, "ok"));
    if (M.updateXpChip) M.updateXpChip();
  };

  /* ───── hype (foguete) ───── */
  function launch(wrap) {
    const r = h("span", { class: "rocket-fly", "aria-hidden": "true" }, h("i", { class: "trail" }), M.icon("rocket", 22));
    wrap.append(r);
    r.addEventListener("animationend", () => r.remove());
    setTimeout(() => r.remove(), 1400);
  }
  function hypeButton(post) {
    const count = h("span", { class: "hype-n" });
    const line = h("span", { class: "hype-line", "aria-hidden": "true" });
    const btn = h("button", { class: "hype-btn", type: "button" }, M.icon("rocket", 20), h("span", { class: "hype-label", text: "Hype" }), count);
    const wrap = h("span", { class: "hype-wrap" }, btn, line);
    function draw() {
      btn.classList.toggle("on", !!post.hyped);
      btn.setAttribute("aria-pressed", String(!!post.hyped));
      btn.setAttribute("aria-label", post.hyped ? `Você deu hype. ${post.hypes} no total` : `Dar hype. ${post.hypes} no total`);
      count.textContent = String(post.hypes || 0);
      line.replaceChildren(...Array.from({ length: Math.min(post.hypes || 0, 5) }, (_, i) => h("span", { class: "mini-rocket", style: `--i:${i}` }, M.icon("rocket", 12))));
    }
    btn.addEventListener("click", async () => {
      launch(wrap);
      if (post.hyped) return;
      post.hyped = true; post.hypes = (post.hypes || 0) + 1; draw();
      try {
        const r = await M.post("feed/hype/" + post.id);
        post.hypes = r.hypes; draw(); M.bumpXp(r);
      } catch (e) { post.hyped = false; post.hypes -= 1; draw(); M.toast(e.message, "err"); }
    });
    draw();
    return wrap;
  }

  /* ───── comentários ───── */
  function commentsBox(post, onCount) {
    const box = h("section", { class: "comments", "aria-label": "Comentários" });
    let list = [];
    const ul = h("ul", { class: "c-list" });
    const input = h("input", { class: "input", type: "text", maxlength: "500", placeholder: "Escreva um comentário…", "aria-label": "Comentário" });
    const send = h("button", { class: "btn btn-gold btn-sm", type: "submit" }, M.icon("send", 16), "Enviar");
    const form = h("form", { class: "c-form" }, input, send);
    function item(c) {
      const li = h("li", { class: "c-item" },
        h("a", { href: M.profileHref(c.author) }, M.avatar(c.author, 30)),
        h("div", { class: "c-body" },
          h("div", { class: "c-head" }, h("a", { class: "c-name", href: M.profileHref(c.author), text: c.author.name }), c.author.nickname ? h("span", { class: "muted small", text: "@" + c.author.nickname }) : null, h("span", { class: "muted small", text: "· " + M.timeAgo(c.at) })),
          h("p", { class: "c-text" }, M.rich(c.text))),
        c.canDelete ? h("button", { class: "icon-btn", type: "button", "aria-label": "Apagar comentário", onclick: async () => {
          try { await M.api("DELETE", `feed/comment/${post.id}/${c.id}`); list = list.filter((x) => x.id !== c.id); draw(); onCount(list.length); } catch (e) { M.toast(e.message, "err"); }
        } }, M.icon("trash", 16)) : null);
      return li;
    }
    function draw() { ul.replaceChildren(...list.map(item)); }
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      send.disabled = true;
      try {
        const r = await M.post("feed/comment/" + post.id, { text });
        list.push(r.comment); draw(); input.value = ""; onCount(list.length); M.bumpXp(r);
      } catch (ex) { M.toast(ex.message, "err"); }
      send.disabled = false; input.focus();
    });
    box.append(M.loading("Carregando comentários…"));
    M.get("feed/comments/" + post.id).then((d) => { list = d.comments; box.replaceChildren(ul, form); draw(); input.focus(); })
      .catch((e) => box.replaceChildren(h("p", { class: "form-error", text: e.message })));
    return box;
  }

  /* ───── cartão do post ───── */
  M.postCard = function (post, { onDelete, openComments = false, query, mine = false } = {}) {
    const a = post.author;
    const root = h("article", { class: "post" + (post.status !== "published" ? " is-" + post.status : ""), id: "post-" + post.id });
    const when = post.publishedAt || post.createdAt;
    const head = h("header", { class: "post-head" },
      h("a", { href: M.profileHref(a), "aria-label": "Perfil de " + a.name }, M.avatar(a, 44)),
      h("div", { class: "post-who" },
        h("div", { class: "row", style: "gap:8px" },
          h("a", { class: "post-name", href: M.profileHref(a), text: a.name }),
          a.role === "admin" ? h("span", { class: "chip chip-gold chip-xs", text: "Gestor" }) : null,
          post.status === "pending" ? h("span", { class: "chip chip-warn chip-xs", text: "Aguardando aprovação" }) : null,
          post.status === "rejected" ? h("span", { class: "chip chip-bad chip-xs", text: "Recusado" }) : null),
        h("div", { class: "muted small" }, a.nickname ? "@" + a.nickname + " · " : "", h("a", { class: "muted", href: "#/post/" + post.id, text: M.timeAgo(when) }))),
      post.canDelete ? h("button", { class: "icon-btn", type: "button", "aria-label": "Apagar post", onclick: async () => {
        const ok = await M.confirm({ title: "Apagar este post?", text: post.status === "published" ? "O post e os comentários dele somem do feed. Não tem volta." : "O post será descartado.", ok: "Apagar", danger: true });
        if (!ok) return;
        try { await M.api("DELETE", "feed/post/" + post.id); root.remove(); M.toast("Post apagado.", "ok"); if (onDelete) onDelete(post); } catch (e) { M.toast(e.message, "err"); }
      } }, M.icon("trash", 18)) : null);
    root.append(head);
    if (post.text) {
      const long = post.text.length > 420;
      const p = h("p", { class: "post-text" + (long ? " clamp" : "") }, M.rich(post.text, query));
      root.append(p);
      if (long) {
        const t = h("button", { class: "linkish", type: "button", text: "Ver mais" });
        t.addEventListener("click", () => { const c = p.classList.toggle("clamp"); t.textContent = c ? "Ver mais" : "Ver menos"; });
        root.append(t);
      }
    }
    const media = M.renderMedia(post.media);
    if (media) root.append(media);
    if (post.status === "rejected" && post.reason) root.append(h("p", { class: "post-reason" }, h("strong", { text: "Motivo: " }), post.reason));
    if (post.status === "pending") root.append(h("p", { class: "muted small", style: "margin:10px 0 0", text: "Seu post aparece no feed assim que o gestor aprovar. Depois de aprovado, você ganha XP." }));
    if (post.status === "published") {
      let commentsEl = null;
      const cBtn = h("button", { class: "act-btn", type: "button", "aria-expanded": "false" }, M.icon("chat", 19), h("span", { text: "Comentar" }), h("span", { class: "act-n", text: post.comments ? String(post.comments) : "" }));
      const setCount = (n) => { post.comments = n; cBtn.querySelector(".act-n").textContent = n ? String(n) : ""; };
      const toggle = () => {
        if (commentsEl) { commentsEl.remove(); commentsEl = null; cBtn.setAttribute("aria-expanded", "false"); return; }
        commentsEl = commentsBox(post, setCount); root.append(commentsEl); cBtn.setAttribute("aria-expanded", "true");
      };
      cBtn.addEventListener("click", toggle);
      const share = h("button", { class: "act-btn", type: "button", "aria-label": "Copiar link do post", onclick: async () => {
        const url = location.origin + location.pathname + "#/post/" + post.id;
        try { await navigator.clipboard.writeText(url); M.toast("Link do post copiado.", "ok"); } catch { M.toast(url); }
      } }, M.icon("link", 19));
      root.append(h("footer", { class: "post-actions" }, hypeButton(post), cBtn, h("span", { class: "spacer", style: "flex:1" }), share));
      if (openComments) toggle();
    }
    return root;
  };

  /* ───── @ (apelido) ───── */
  M.nickForm = function ({ compact = false, onSaved } = {}) {
    const me = M.session.user;
    const input = h("input", { class: "input", id: "nick", type: "text", value: me.nickname || "", maxlength: "20", autocomplete: "off", autocapitalize: "none", spellcheck: "false", placeholder: "seunome", "aria-describedby": "nick-hint", style: "padding-left:34px" });
    const hint = h("span", { class: "hint", id: "nick-hint", text: "De 3 a 20 caracteres: letras minúsculas, números, ponto ou sublinhado." });
    const btn = h("button", { class: "btn btn-gold", type: "submit", text: me.nickname ? "Trocar @" : "Salvar meu @" });
    let timer;
    input.addEventListener("input", () => {
      input.value = input.value.toLowerCase().replace(/^@/, "");
      clearTimeout(timer);
      hint.className = "hint";
      if (!input.value || input.value === me.nickname) { hint.textContent = "De 3 a 20 caracteres: letras minúsculas, números, ponto ou sublinhado."; return; }
      timer = setTimeout(async () => {
        try {
          const r = await M.get("people/check?nick=" + encodeURIComponent(input.value));
          hint.textContent = r.ok ? "Esse @ está livre." : r.reason;
          hint.className = "hint " + (r.ok ? "ok" : "bad");
        } catch {}
      }, 350);
    });
    const form = h("form", { class: "nick-form" + (compact ? " compact" : ""), novalidate: true },
      h("div", { class: "field" },
        compact ? null : h("label", { for: "nick", text: "Seu @" }),
        h("div", { class: "at-wrap" }, h("span", { class: "at", "aria-hidden": "true", text: "@" }), input), hint),
      btn);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      btn.disabled = true;
      try {
        const r = await M.post("auth/profile", { nickname: input.value });
        M.session.user = { ...M.session.user, ...r.user };
        M.toast("Seu @ agora é @" + r.user.nickname + ".", "ok");
        if (onSaved) onSaved(r.user);
      } catch (ex) { hint.textContent = ex.message; hint.className = "hint bad"; }
      btn.disabled = false;
    });
    return form;
  };

  /* ───── publicar ───── */
  function composer({ uploads, onPosted }) {
    const isAdm = M.isAdmin();
    const me = M.session.user;
    let items = [];
    let seq = 0;
    const ta = h("textarea", { class: "textarea composer-text", rows: "3", maxlength: "2000", placeholder: isAdm ? "Compartilhe um aviso, um aprendizado ou um vídeo com o time…" : "Compartilhe um aprendizado, uma conquista ou uma dúvida com o time…", "aria-label": "Texto do post" });
    const fileInput = h("input", { type: "file", multiple: true, hidden: true, accept: "image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.zip" });
    const list = h("ul", { class: "att-list" });
    const linkRow = h("form", { class: "link-row", hidden: true },
      h("input", { class: "input", type: "url", placeholder: "Cole o link (YouTube, Drive, Docs, Canva, Loom, site…)", "aria-label": "Link" }),
      h("button", { class: "btn btn-ghost btn-sm", type: "submit", text: "Adicionar" }));
    const count = h("span", { class: "muted small" });
    const btn = h("button", { class: "btn btn-gold", type: "button" }, M.icon("send", 18), isAdm ? "Publicar" : "Enviar para aprovação");
    const mk = (type, label, icon, fn, disabled, title) => h("button", { class: "tool-btn", type: "button", onclick: fn, disabled, title }, M.icon(icon, 18), h("span", { text: label }));
    const offTip = isAdm ? "Envio de arquivos desligado: veja o guia de configuração do Cloudinary." : "O envio de arquivos ainda não foi liberado pela administração.";
    const tools = h("div", { class: "tools" },
      mk("media", "Foto ou vídeo", "image", () => { fileInput.accept = "image/*,video/*"; fileInput.click(); }, !uploads, !uploads ? offTip : ""),
      mk("file", "Arquivo", "clip", () => { fileInput.accept = ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.zip"; fileInput.click(); }, !uploads, !uploads ? offTip : ""),
      mk("link", "Link", "link", () => { linkRow.hidden = !linkRow.hidden; if (!linkRow.hidden) linkRow.querySelector("input").focus(); }));

    function draw() {
      list.replaceChildren(...items.map((it) => h("li", { class: "att" + (it.status === "error" ? " bad" : "") },
        it.preview ? h("img", { src: it.preview, alt: "" }) : h("span", { class: "att-ico" }, M.icon(it.type === "video" ? "video" : it.type === "link" ? "link" : "file", 20)),
        h("div", { class: "att-info" },
          h("strong", { text: it.name }),
          it.status === "uploading" ? h("div", { class: "bar" }, h("i", { style: `width:${it.pct}%` })) : h("span", { class: "small " + (it.status === "error" ? "bad" : "muted"), text: it.status === "error" ? it.error : [it.type === "link" ? "Link" : it.type === "video" ? "Vídeo" : it.type === "image" ? "Imagem" : "Arquivo", M.prettySize(it.bytes)].filter(Boolean).join(" · ") })),
        h("button", { class: "icon-btn", type: "button", "aria-label": "Remover anexo", onclick: () => { items = items.filter((x) => x !== it); if (it.preview) URL.revokeObjectURL(it.preview); draw(); } }, M.icon("x", 16)))));
      const busy = items.some((i) => i.status === "uploading");
      const empty = !ta.value.trim() && !items.some((i) => i.status === "done");
      btn.disabled = busy || empty;
      count.textContent = ta.value.length > 1500 ? `${ta.value.length}/2000` : "";
    }
    ta.addEventListener("input", () => { ta.style.height = "auto"; ta.style.height = Math.min(ta.scrollHeight, 360) + "px"; draw(); });

    function upload(file, it) {
      return M.post("feed/upload-sign").then((sign) => new Promise((res, rej) => {
        const fd = new FormData();
        fd.append("file", file); fd.append("api_key", sign.apiKey); fd.append("timestamp", sign.timestamp); fd.append("signature", sign.signature); fd.append("folder", sign.folder);
        const x = new XMLHttpRequest();
        x.open("POST", sign.url);
        x.upload.onprogress = (e) => { if (e.lengthComputable) { it.pct = Math.round((e.loaded / e.total) * 100); draw(); } };
        x.onload = () => { try { const j = JSON.parse(x.responseText); if (x.status < 300 && j.secure_url) res(j); else rej(new Error(j.error?.message || "O envio falhou.")); } catch { rej(new Error("O envio falhou.")); } };
        x.onerror = () => rej(new Error("Sem conexão durante o envio."));
        x.send(fd);
      }));
    }
    function addFiles(files) {
      for (const file of files) {
        if (items.length >= 4) { M.toast("No máximo 4 anexos por post.", "err"); break; }
        const type = IMG_OK.test(file.type) ? "image" : file.type.startsWith("video/") ? "video" : file.type === "image/svg+xml" ? "bad" : "file";
        const it = { id: ++seq, type: type === "bad" ? "file" : type, name: file.name, bytes: file.size, status: "uploading", pct: 0, preview: type === "image" ? URL.createObjectURL(file) : null };
        items.push(it);
        const max = LIMITS[it.type] * 1048576;
        if (type === "bad") { it.status = "error"; it.error = "SVG não é aceito. Use PNG ou JPG."; continue; }
        if (file.size > max) { it.status = "error"; it.error = `Arquivo grande demais. Limite: ${LIMITS[it.type]} MB.`; continue; }
        upload(file, it).then((j) => { it.url = j.secure_url; it.status = "done"; it.bytes = j.bytes || it.bytes; draw(); })
          .catch((e) => { it.status = "error"; it.error = e.message; draw(); });
      }
      draw();
    }
    fileInput.addEventListener("change", () => { addFiles([...fileInput.files]); fileInput.value = ""; });
    linkRow.addEventListener("submit", (e) => {
      e.preventDefault();
      const inp = linkRow.querySelector("input");
      let v = inp.value.trim();
      if (!v) return;
      if (!/^https?:\/\//i.test(v)) v = "https://" + v;
      try { new URL(v); } catch { M.toast("Esse link não parece válido.", "err"); return; }
      if (items.length >= 4) { M.toast("No máximo 4 anexos por post.", "err"); return; }
      const emb = M.embedOf(v);
      items.push({ id: ++seq, type: "link", name: emb?.provider ? `${emb.provider}: ${v.replace(/^https?:\/\/(www\.)?/, "").slice(0, 50)}` : v.replace(/^https?:\/\/(www\.)?/, "").slice(0, 60), url: v, status: "done" });
      inp.value = ""; linkRow.hidden = true; draw();
    });
    const box = h("section", { class: "composer panel", "aria-label": "Novo post" },
      h("div", { class: "composer-top" }, M.avatar(me, 44), ta), list, linkRow, fileInput,
      h("div", { class: "composer-bar" }, tools, h("span", { class: "spacer", style: "flex:1" }), count, btn),
      isAdm ? null : h("p", { class: "muted small", style: "margin:10px 0 0", text: "Seu post passa pela aprovação do gestor antes de aparecer no feed. Post aprovado vale XP." }));
    box.addEventListener("dragover", (e) => { if (uploads && e.dataTransfer?.types?.includes("Files")) { e.preventDefault(); box.classList.add("drop"); } });
    box.addEventListener("dragleave", () => box.classList.remove("drop"));
    box.addEventListener("drop", (e) => { box.classList.remove("drop"); if (uploads && e.dataTransfer?.files?.length) { e.preventDefault(); addFiles([...e.dataTransfer.files]); } });
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      const media = items.filter((i) => i.status === "done").map((i) => ({ type: i.type, url: i.url, name: i.type === "link" ? undefined : i.name, bytes: i.bytes }));
      try {
        const r = await M.post("feed/post", { text: ta.value, media });
        ta.value = ""; ta.style.height = ""; items.forEach((i) => i.preview && URL.revokeObjectURL(i.preview)); items = []; draw();
        M.toast(r.status === "pending" ? "Enviado! O gestor vai analisar o seu post." : "Post publicado.", "ok");
        onPosted(r);
      } catch (e) { M.toast(e.message, "err"); draw(); }
    });
    draw();
    return box;
  }

  /* ───── início: o feed ───── */
  M.views.home = async function () {
    await M.refreshMe();
    const isAdm = M.isAdmin();
    const status = await M.get("feed/status").catch(() => ({ uploads: false }));
    const top = h("div", { class: "feed-top" });
    const list = h("div", { class: "feed-list" });
    const more = h("div", { class: "row", style: "justify-content:center;margin:20px 0" });
    let next = null, tab = "feed";

    /* topo: @ , check-in, fila */
    function drawTop() {
      const me = M.session.user;
      const parts = [];
      if (!me.nickname) {
        parts.push(h("section", { class: "panel nick-banner" },
          h("div", null, h("strong", { text: "Escolha o seu @" }), h("p", { class: "muted small", style: "margin:2px 0 0", text: "É como o time vai te encontrar na busca e te marcar nos posts." })),
          M.nickForm({ compact: true, onSaved: () => { drawTop(); } })));
      }
      if (isAdm && M.session.pending > 0) {
        parts.push(h("a", { class: "panel pending-banner", href: "#/admin/aprovacoes" }, M.icon("flag", 20),
          h("span", null, h("strong", { text: `${M.session.pending} ${M.session.pending === 1 ? "post aguarda" : "posts aguardam"} aprovação` }), h("span", { class: "muted", text: " · Analisar agora" })), M.icon("arrow", 18)));
      }
      if (me.role === "aluno") parts.push(checkinCard());
      top.replaceChildren(...parts);
    }
    function checkinCard() {
      const e = M.session.engage;
      const card = h("section", { class: "panel checkin" + (e.checkedToday ? " is-done" : "") });
      if (e.checkedToday) {
        card.append(h("span", { class: "ck-ico" }, M.icon("check", 20)),
          h("div", null, h("strong", { text: "Check-in de hoje feito" }), h("span", { class: "muted small", style: "display:block", text: e.streak > 1 ? `Sequência de ${e.streak} dias. Volte amanhã para manter.` : "Volte amanhã para começar uma sequência." })),
          h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => M.openXp(), text: "Ver metas" }));
      } else {
        const b = h("button", { class: "btn btn-gold", type: "button" }, M.icon("bolt", 18), "Fazer check-in");
        b.addEventListener("click", async () => {
          b.disabled = true;
          try {
            const r = await M.post("engage/checkin");
            M.session.engage = { ...M.session.engage, checkedToday: true, streak: r.streak };
            M.bumpXp(r); drawTop();
          } catch (ex) { M.toast(ex.message, "err"); b.disabled = false; }
        });
        card.append(h("span", { class: "ck-ico" }, M.icon("bolt", 20)),
          h("div", null, h("strong", { text: "Check-in diário" }), h("span", { class: "muted small", style: "display:block", text: e.streak > 0 ? `Sequência atual: ${e.streak} ${e.streak === 1 ? "dia" : "dias"}. Não deixe cair.` : "Entre todo dia e ganhe XP. Dias seguidos rendem bônus." })), b);
      }
      return card;
    }

    async function load(reset) {
      if (reset) { list.replaceChildren(M.loading()); next = null; more.replaceChildren(); }
      try {
        if (tab === "mine") {
          const d = await M.get("feed/mine");
          list.replaceChildren(
            h("p", { class: "muted small", style: "margin:0 0 4px", text: `Posts aguardando aprovação ou recusados. Você pode ter até ${d.maxPending} na fila. Os já publicados ficam no seu perfil.` }),
            ...(d.posts.length ? d.posts.map((p) => M.postCard(p)) : [h("div", { class: "empty", text: "Nada na fila. Quando você enviar um post, ele aparece aqui até o gestor analisar." })]),
            h("a", { class: "btn btn-ghost", style: "justify-self:start", href: M.profileHref(M.session.user) }, "Ver meus posts publicados"));
          return;
        }
        const d = await M.get("feed" + (next ? "?after=" + encodeURIComponent(next) : ""));
        if (reset) list.replaceChildren();
        if (!d.posts.length && reset) list.append(h("div", { class: "empty" }, h("h3", { text: "O feed ainda está vazio" }), h("p", { text: isAdm ? "Publique o primeiro post para começar." : "Quando o gestor ou o time publicar, aparece aqui." })));
        d.posts.forEach((p) => list.append(M.postCard(p)));
        next = d.next;
        more.replaceChildren(next ? h("button", { class: "btn btn-ghost", type: "button", onclick: () => load(false), text: "Carregar mais" }) : (list.children.length ? h("span", { class: "muted small", text: "Você chegou ao fim do feed." }) : null));
      } catch (e) { list.replaceChildren(h("div", { class: "form-error", text: e.message })); }
    }

    const tabs = h("div", { class: "tabs-lite", role: "tablist" },
      ["feed", "mine"].map((k) => h("button", { type: "button", role: "tab", "aria-selected": String(tab === k), text: k === "feed" ? "Feed" : "Meus posts", onclick: (ev) => { tab = k; tabs.querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", String(b === ev.currentTarget))); load(true); } })));

    drawTop();
    const node = h("div", { class: "feed" },
      top,
      composer({ uploads: status.uploads, onPosted: (r) => {
        if (r.status === "published") { if (tab === "feed") { list.querySelector(".empty")?.remove(); list.prepend(M.postCard(r.post)); } }
        else { tab = "mine"; tabs.querySelectorAll("button").forEach((b, i) => b.setAttribute("aria-selected", String(i === 1))); load(true); }
      } }),
      isAdm ? null : tabs, list, more);
    load(true);
    return node;
  };

  /* ───── um post ───── */
  M.views.post = async function (id) {
    await M.refreshMe();
    let d;
    try { d = await M.get("feed/post/" + id); } catch (e) { return h("div", { class: "empty" }, h("h3", { text: "Post não encontrado" }), h("p", { text: "Ele pode ter sido apagado." }), h("a", { class: "btn btn-gold", href: "#/" }, "Voltar ao feed")); }
    return h("div", { class: "feed" }, M.postCard(d.post, { openComments: true, onDelete: () => { location.hash = "#/"; } }));
  };

  /* ───── perfil ───── */
  M.views.profile = async function (key) {
    await M.refreshMe();
    let d;
    try { d = await M.get("people/" + encodeURIComponent(key)); } catch (e) { return h("div", { class: "empty" }, h("h3", { text: "Pessoa não encontrada" }), h("a", { class: "btn btn-gold", href: "#/" }, "Voltar ao feed")); }
    const p = d.person, mine = p.id === M.session.user.id;
    const list = h("div", { class: "feed-list" }), more = h("div", { class: "row", style: "justify-content:center;margin:20px 0" });
    let next = null;
    async function load() {
      const q = new URLSearchParams({ author: p.id }); if (next) q.set("after", next);
      const r = await M.get("feed?" + q);
      if (!next && !r.posts.length) list.append(h("div", { class: "empty", text: mine ? "Você ainda não tem posts publicados." : "Ainda não há posts publicados por essa pessoa." }));
      r.posts.forEach((x) => list.append(M.postCard(x)));
      next = r.next;
      more.replaceChildren(next ? h("button", { class: "btn btn-ghost", type: "button", onclick: load, text: "Carregar mais" }) : null);
    }
    load();
    const e = p.engage;
    const node = h("div", { class: "feed" },
      h("section", { class: "panel profile-head" },
        M.avatar(p, 84),
        h("div", { class: "profile-info" },
          h("h2", { text: p.name }),
          h("div", { class: "muted" }, p.nickname ? "@" + p.nickname : "Sem @ ainda", p.joinedAt ? " · No time desde " + new Date(p.joinedAt).toLocaleDateString("pt-BR", { month: "short", year: "numeric" }) : ""),
          h("div", { class: "row", style: "margin-top:10px" },
            p.role === "admin" ? h("span", { class: "chip chip-gold", text: "Gestor" }) : h("span", { class: "chip", text: "Aluno" }),
            e ? h("span", { class: "chip chip-gold" }, M.icon("bolt", 14), `${e.xp} XP de engajamento`) : null,
            e && e.streak > 0 ? h("span", { class: "chip" }, `${e.streak} ${e.streak === 1 ? "dia" : "dias"} de sequência`) : null)),
        mine ? h("a", { class: "btn btn-ghost btn-sm", href: "#/conta" }, "Editar perfil") : null),
      h("h3", { style: "margin:24px 0 12px", text: "Posts" }), list, more);
    return node;
  };
})();

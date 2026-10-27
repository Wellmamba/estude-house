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

  M.hypeButton = hypeButton;
  M.commentsBox = (post, onCount) => commentsBox(post, onCount);

  /* tipos de post: dão contexto e incentivam o aluno a compartilhar */
  M.KINDS = {
    curiosidade: { label: "Curiosidade", icon: "bulb", ph: "Qual curiosidade do marketplace você descobriu? Conte em poucas linhas…" },
    case: { label: "Case", icon: "trophy", ph: "Conte um case: o que você fez, o que mudou e o resultado (números ajudam)…" },
    dica: { label: "Dica", icon: "bolt", ph: "Qual dica rápida ajudaria o time? Pode ser um passo a passo de 2 ou 3 linhas…" },
    conquista: { label: "Conquista", icon: "star", ph: "Bateu uma meta, fechou uma conta ou concluiu uma trilha? Comemore com o time!" },
  };
  M.kindChip = (k) => (M.KINDS[k] ? h("span", { class: "chip chip-xs kind-chip kind-" + k }, M.icon(M.KINDS[k].icon, 12), M.KINDS[k].label) : null);

  /* ───── comentários ───── */
  function commentsBox(post, onCount) {
    const box = h("section", { class: "comments", "aria-label": "Comentários" });
    let list = [];
    const ul = h("ul", { class: "c-list" });
    const input = h("input", { class: "input", type: "text", maxlength: "500", placeholder: "Escreva um comentário…", "aria-label": "Comentário" });
    const send = h("button", { class: "btn btn-gold btn-sm", type: "submit" }, M.icon("send", 16), "Enviar");
    const form = h("form", { class: "c-form" }, M.mentionField(input), M.emojiButton(input, { up: true, label: false }), send);
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
  // menu de ações do gestor: fixar, mudar tag, encerrar enquete e apagar
  function manageMenu(post, root, opts, doDelete) {
    const btn = h("button", { class: "icon-btn", type: "button", "aria-label": "Mais ações do post", "aria-haspopup": "menu", "aria-expanded": "false" }, M.icon("more", 18));
    const wrap = h("div", { class: "pop-wrap" }, btn);
    let menu = null;
    const close = () => { if (!menu) return; menu.remove(); menu = null; btn.setAttribute("aria-expanded", "false"); document.removeEventListener("pointerdown", onDoc); document.removeEventListener("keydown", onKey); };
    const onDoc = (e) => { if (!wrap.contains(e.target)) close(); };
    const onKey = (e) => { if (e.key === "Escape") { close(); btn.focus(); } };
    async function patch(body, ok) {
      try {
        const r = await M.api("PATCH", "feed/post/" + post.id, body);
        if (ok) M.toast(ok, "ok");
        if (opts.onChange) opts.onChange(r.post); else root.replaceWith(M.postCard(r.post, opts));
      } catch (e) { M.toast(e.message, "err"); }
    }
    async function chooseTag() {
      const tags = await M.loadTags(true);
      const sel = h("select", { class: "select", "aria-label": "Tag" }, h("option", { value: "", text: "Sem tag" }), tags.map((t) => h("option", { value: t.id, text: t.name })));
      sel.value = post.tag?.id || "";
      const res = await M.modal((done) => [
        h("h3", { text: "Tag do post" }),
        tags.length ? sel : h("p", { class: "muted", html: 'Ainda não há tags. Crie em <a href="#/admin/tags">Tags e moderação</a>.' }),
        h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => done(null), text: "Cancelar" }), h("button", { class: "btn btn-gold", type: "button", onclick: () => done(sel.value), text: "Salvar" })),
      ]);
      if (res === null || res === undefined) return;
      patch({ tag: res || null }, "Tag atualizada.");
    }
    const entries = [];
    if (post.status === "published") {
      entries.push([post.pinned ? "Desafixar do topo" : "Fixar no topo", "pin", () => patch({ pinned: !post.pinned }, post.pinned ? "Post desafixado." : "Post fixado no topo.")]);
      entries.push(["Mudar tag…", "tag", chooseTag]);
      if (post.poll) entries.push([post.poll.closed ? "Reabrir enquete" : "Encerrar enquete", "chart", () => patch({ pollClosed: !post.poll.closed }, post.poll.closed ? "Enquete reaberta." : "Enquete encerrada.")]);
    }
    entries.push(["Apagar post", "trash", doDelete, true]);
    btn.addEventListener("click", () => {
      if (menu) { close(); return; }
      menu = h("ul", { class: "pop-menu", role: "menu" }, entries.map(([label, icon, fn, danger]) => h("li", { role: "none" },
        h("button", { type: "button", role: "menuitem", class: danger ? "danger" : "", onclick: () => { close(); fn(); } }, M.icon(icon, 16), label))));
      wrap.append(menu); btn.setAttribute("aria-expanded", "true");
      setTimeout(() => { document.addEventListener("pointerdown", onDoc); document.addEventListener("keydown", onKey); }, 0);
      menu.querySelector("button")?.focus();
    });
    return wrap;
  }

  M.postCard = function (post, opts = {}) {
    const { onDelete, openComments = false, query } = opts;
    const a = post.author;
    const root = h("article", { class: "post" + (post.status !== "published" ? " is-" + post.status : "") + (post.pinned ? " is-pinned" : ""), id: "post-" + post.id });
    const when = post.publishedAt || post.createdAt;
    const head = h("header", { class: "post-head" },
      h("a", { href: M.profileHref(a), "aria-label": "Perfil de " + a.name }, M.avatar(a, 44)),
      h("div", { class: "post-who" },
        h("div", { class: "row", style: "gap:8px" },
          h("a", { class: "post-name", href: M.profileHref(a), text: a.name }),
          a.role === "admin" || a.role === "subadmin" ? h("span", { class: "chip chip-gold chip-xs", text: "Gestor" }) : null,
          a.team && a.team.id !== post.community?.id ? M.teamChip(a.team) : null,
          post.pinned ? h("span", { class: "chip chip-gold chip-xs pin-chip" }, M.icon("pin", 12), "Fixado") : null,
          M.kindChip(post.kind),
          M.tagChip(post.tag),
          M.teamChip(post.community),
          post.status === "pending" ? h("span", { class: "chip chip-warn chip-xs", text: "Aguardando aprovação" }) : null,
          post.status === "rejected" ? h("span", { class: "chip chip-bad chip-xs", text: "Recusado" }) : null),
        h("div", { class: "muted small" }, a.nickname ? "@" + a.nickname + " · " : "", h("a", { class: "muted", href: "#/post/" + post.id, text: M.timeAgo(when) }))),
      M.can("moderar") || M.can("publicar") ? manageMenu(post, root, opts, doDelete) : post.canDelete ? h("button", { class: "icon-btn", type: "button", "aria-label": "Apagar post", onclick: doDelete }, M.icon("trash", 18)) : null);
    async function doDelete() {
      const ok = await M.confirm({ title: "Apagar este post?", text: post.status === "published" ? "O post e os comentários dele somem do feed. Não tem volta." : "O post será descartado.", ok: "Apagar", danger: true });
      if (!ok) return;
      try { await M.api("DELETE", "feed/post/" + post.id); root.remove(); M.toast("Post apagado.", "ok"); if (onDelete) onDelete(post); } catch (e) { M.toast(e.message, "err"); }
    }
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
    if (post.poll) root.append(M.pollView(post));
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

  /* ───── foto de perfil ───── */
  M.avatarForm = function ({ compact = false, onSaved } = {}) {
    const box = h("div", { class: "avatar-form" + (compact ? " compact" : "") });
    const input = h("input", { type: "file", accept: "image/*", hidden: true, "aria-label": "Escolher foto de perfil" });
    let uploads = null, busy = false;
    function paint() {
      const me = M.session.user;
      const off = uploads === false;
      const pick = h("button", { class: "btn btn-gold btn-sm", type: "button", disabled: busy || uploads === null || off, title: off ? "O envio de fotos ainda não foi ativado pela administração." : "" },
        M.icon("camera", 18), busy ? "Enviando…" : me.avatar ? "Trocar foto" : "Escolher foto");
      pick.addEventListener("click", () => input.click());
      const rm = me.avatar ? h("button", { class: "btn btn-ghost btn-sm", type: "button", disabled: busy, onclick: () => save("") }, "Remover foto") : null;
      box.replaceChildren(
        h("div", { class: "avatar-preview" }, M.avatar(me, compact ? 56 : 84)),
        h("div", { class: "avatar-actions" }, h("div", { class: "row", style: "gap:8px" }, pick, rm),
          compact ? null : h("span", { class: "hint", text: off ? "O envio de fotos ainda não foi ativado pela administração." : "JPG ou PNG. O sistema recorta um quadrado no centro da foto." }), input));
    }
    async function save(url) {
      busy = true; paint();
      try {
        const r = await M.post("auth/profile", { avatar: url });
        M.session.user = { ...M.session.user, ...r.user };
        document.querySelectorAll(".me-av").forEach((a) => a.replaceChildren(M.avatar(M.session.user, 40)));
        M.toast(url ? "Foto de perfil salva." : "Foto removida.", "ok");
        if (onSaved) onSaved(r.user);
      } catch (e) { M.toast(e.message, "err"); }
      busy = false; paint();
    }
    input.addEventListener("change", async () => {
      const file = input.files[0]; input.value = "";
      if (!file) return;
      if (!file.type.startsWith("image/") || file.type === "image/svg+xml") { M.toast("Escolha uma foto em JPG ou PNG.", "err"); return; }
      busy = true; paint();
      try {
        const blob = await M.shrinkImage(file, { square: 512, limit: 2 * 1048576 });
        const j = await M.cloudUpload(new File([blob], "perfil.jpg", { type: "image/jpeg" }), { kind: "image" });
        busy = false;
        await save(j.secure_url);
      } catch (e) { busy = false; M.toast(e.message, "err"); paint(); }
    });
    paint();
    M.get("feed/status").then((d) => { uploads = !!d.uploads; paint(); }).catch(() => { uploads = false; paint(); });
    return box;
  };

  /* ───── publicar ───── */
  function composer({ uploads, onPosted, defaultTag = "", defaultCommunity = "", limits = {} }) {
    const isAdm = M.can("publicar");
    const me = M.session.user;
    let items = [];
    let seq = 0;
    const first = String(me.nickname || me.name || "").split(" ")[0];
    const basePh = isAdm ? "Compartilhe um aviso, um aprendizado ou um vídeo com o time…" : `No que você está pensando${first ? ", " + first : ""}?`;
    let kind = "";
    const ta = h("textarea", { class: "textarea composer-text", rows: "3", maxlength: "2000", placeholder: basePh, "aria-label": "Texto do post" });
    const taHost = M.mentionField(ta);
    const pollB = isAdm ? M.pollBuilder({ maxQuestions: limits.maxQuestions, maxOptions: limits.maxOptions }) : null;
    const tagSel = isAdm ? h("select", { class: "select", "aria-label": "Tag do post" }, h("option", { value: "", text: "Sem tag" })) : null;
    const pinChk = isAdm ? h("input", { type: "checkbox", id: "pin-new" }) : null;
    // "Quem vê": todos ou só uma comunidade (time). Post de comunidade não fixa no topo do feed geral.
    const teamSel = isAdm ? h("select", { class: "select", id: "team-new", "aria-label": "Quem vê o post" }, h("option", { value: "", text: "Todos" })) : null;
    const teamRow = isAdm ? h("span", { class: "composer-team", hidden: true }, h("label", { class: "small muted", for: "team-new" }, M.icon("users", 14), "Quem vê"), teamSel) : null;
    const syncPin = () => { if (!pinChk) return; pinChk.disabled = !!teamSel.value; if (teamSel.value) pinChk.checked = false; };
    if (isAdm) {
      teamSel.addEventListener("change", syncPin);
      M.loadTeams(true).then((list) => {
        if (!list.length) return;
        teamSel.append(...list.map((t) => h("option", { value: t.id, text: (t.emoji ? t.emoji + " " : "") + t.name })));
        teamSel.value = list.some((t) => t.id === defaultCommunity) ? defaultCommunity : "";
        teamRow.hidden = false; syncPin();
      });
    }
    if (isAdm) M.loadTags(true).then((list) => { tagSel.append(...list.map((t) => h("option", { value: t.id, text: t.name }))); tagSel.value = list.some((t) => t.id === defaultTag) ? defaultTag : ""; });
    const fileInput = h("input", { type: "file", multiple: true, hidden: true, accept: "image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.zip" });
    const list = h("ul", { class: "att-list" });
    const linkRow = h("form", { class: "link-row", hidden: true },
      h("input", { class: "input", type: "url", placeholder: "Cole o link (YouTube, Drive, Docs, Canva, Loom, site…)", "aria-label": "Link" }),
      h("button", { class: "btn btn-ghost btn-sm", type: "submit", text: "Adicionar" }));
    const count = h("span", { class: "muted small" });
    const btn = h("button", { class: "btn btn-gold", type: "button" }, M.icon("send", 18), isAdm ? "Publicar" : "Enviar para aprovação");
    const mk = (type, label, icon, fn, disabled, title) => h("button", { class: "tool-btn", type: "button", onclick: fn, disabled, title }, M.icon(icon, 18), h("span", { text: label }));
    const offTip = isAdm ? "Envio de arquivos desligado: veja o guia de configuração do Cloudinary." : "O envio de arquivos ainda não foi liberado pela administração.";
    let pollTool = null;
    const tools = h("div", { class: "tools" },
      mk("media", "Foto ou vídeo", "image", () => { fileInput.accept = "image/*,video/*"; fileInput.click(); }, !uploads, !uploads ? offTip : ""),
      mk("file", "Arquivo", "clip", () => { fileInput.accept = ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.zip"; fileInput.click(); }, !uploads, !uploads ? offTip : ""),
      mk("link", "Link", "link", () => { linkRow.hidden = !linkRow.hidden; if (!linkRow.hidden) linkRow.querySelector("input").focus(); }),
      M.emojiButton(ta),
      isAdm ? (pollTool = mk("poll", "Enquete", "chart", () => { pollB.toggle(); pollTool.classList.toggle("on", pollB.isOpen()); draw(); })) : null);

    function draw() {
      list.replaceChildren(...items.map((it) => h("li", { class: "att" + (it.status === "error" ? " bad" : "") },
        it.preview ? h("img", { src: it.preview, alt: "" }) : h("span", { class: "att-ico" }, M.icon(it.type === "video" ? "video" : it.type === "link" ? "link" : "file", 20)),
        h("div", { class: "att-info" },
          h("strong", { text: it.name }),
          it.status === "uploading" ? h("div", { class: "bar" }, h("i", { style: `width:${it.pct}%` })) : h("span", { class: "small " + (it.status === "error" ? "bad" : "muted"), text: it.status === "error" ? it.error : [it.type === "link" ? "Link" : it.gif ? "GIF" : it.type === "video" ? "Vídeo" : it.type === "image" ? "Imagem" : "Arquivo", M.prettySize(it.bytes)].filter(Boolean).join(" · ") })),
        h("button", { class: "icon-btn", type: "button", "aria-label": "Remover anexo", onclick: () => { items = items.filter((x) => x !== it); if (it.preview) URL.revokeObjectURL(it.preview); draw(); } }, M.icon("x", 16)))));
      const busy = items.some((i) => i.status === "uploading");
      const empty = !ta.value.trim() && !items.some((i) => i.status === "done") && !(pollB && pollB.filled());
      btn.disabled = busy || empty;
      count.textContent = ta.value.length > 1500 ? `${ta.value.length}/2000` : "";
    }
    ta.addEventListener("input", () => { ta.style.height = "auto"; ta.style.height = Math.min(ta.scrollHeight, 360) + "px"; draw(); });
    if (pollB) pollB.node.addEventListener("input", draw);

    function addFiles(files) {
      for (const file of files) {
        if (items.length >= 4) { M.toast("No máximo 4 anexos por post.", "err"); break; }
        const isGif = file.type === "image/gif";
        const type = isGif ? "video" : IMG_OK.test(file.type) ? "image" : file.type.startsWith("video/") ? "video" : file.type === "image/svg+xml" ? "bad" : "file";
        const it = { id: ++seq, type: type === "bad" ? "file" : type, gif: isGif, name: file.name, bytes: file.size, status: "uploading", pct: 0, preview: type === "image" || isGif ? URL.createObjectURL(file) : null };
        items.push(it);
        const max = LIMITS[it.type] * 1048576;
        if (type === "bad") { it.status = "error"; it.error = "SVG não é aceito. Use PNG ou JPG."; continue; }
        // foto grande demais: reduz sozinha no navegador. Os outros tipos respeitam o limite.
        const shrink = type === "image" && file.size > 8 * 1048576;
        if (!shrink && file.size > max) { it.status = "error"; it.error = `Arquivo grande demais. Limite: ${LIMITS[it.type]} MB.`; continue; }
        (async () => {
          let f = file;
          if (shrink) { it.pct = 0; f = await M.shrinkImage(file); it.bytes = f.size; }
          return M.cloudUpload(f, { kind: isGif ? "video" : "auto", onProgress: (p) => { it.pct = p; draw(); } });
        })().then((j) => { it.url = j.secure_url; it.status = "done"; it.bytes = j.bytes || it.bytes; draw(); })
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
    const kindBtns = Object.entries(M.KINDS).map(([k, m]) => {
      const b = h("button", { class: "kind-btn kind-" + k, type: "button", "aria-pressed": "false", "data-kind": k }, M.icon(m.icon, 16), h("span", { text: m.label }));
      b.addEventListener("click", (ev) => { ev.stopPropagation(); setKind(kind === k ? "" : k); openBox(); ta.focus(); });
      return b;
    });
    function setKind(k) {
      kind = k;
      kindBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.kind === k)));
      ta.placeholder = k ? M.KINDS[k].ph : basePh;
      box.classList.toggle("has-kind", !!k);
    }
    const kindRow = h("div", { class: "kind-row", role: "group", "aria-label": "Tipo do post" }, h("span", { class: "kind-lead", text: isAdm ? "Tipo:" : "Compartilhe:" }), kindBtns);
    const box = h("section", { class: "composer panel", "aria-label": "Novo post" },
      h("div", { class: "composer-top" }, M.avatar(me, 40), taHost), kindRow, list, linkRow, fileInput, pollB ? pollB.node : null,
      isAdm ? h("div", { class: "composer-meta" }, h("label", { class: "small muted", for: "tag-new" }, M.icon("tag", 14), "Tag"), (tagSel.id = "tag-new", tagSel), teamRow, h("label", { class: "check-inline small", for: "pin-new" }, pinChk, M.icon("pin", 14), "Fixar no topo")) : null,
      h("div", { class: "composer-bar" }, tools, h("span", { class: "spacer", style: "flex:1" }), count, btn),
      isAdm ? null : h("p", { class: "composer-note small", text: `O gestor dá uma olhada rápida antes de publicar.${limits.postXp ? ` Quando entra no Feed, você ganha +${limits.postXp} XP e o time vê o seu nome.` : ""}` }));
    // fechado por padrão: só a caixa de texto, para o feed aparecer logo abaixo
    box.classList.add("is-compact");
    box.pick = (k) => { setKind(k); openBox(); ta.focus(); };
    const isEmpty = () => !ta.value.trim() && !items.length && !(pollB && pollB.isOpen()) && linkRow.hidden;
    const openBox = () => box.classList.remove("is-compact");
    box.addEventListener("focusin", openBox);
    box.addEventListener("click", openBox);
    const away = (e) => {
      if (!box.isConnected) { document.removeEventListener("pointerdown", away); return; }
      if (!box.contains(e.target) && !e.target.closest(".emoji-pop, .mention-list, .modal, .pop-menu, .dlg") && isEmpty()) { box.classList.add("is-compact"); setKind(""); }
    };
    document.addEventListener("pointerdown", away);
    box.addEventListener("dragover", (e) => { if (uploads && e.dataTransfer?.types?.includes("Files")) { e.preventDefault(); box.classList.add("drop"); } });
    box.addEventListener("dragleave", () => box.classList.remove("drop"));
    box.addEventListener("drop", (e) => { box.classList.remove("drop"); if (uploads && e.dataTransfer?.files?.length) { e.preventDefault(); addFiles([...e.dataTransfer.files]); } });
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      const media = items.filter((i) => i.status === "done").map((i) => ({ type: i.type, url: i.url, name: i.type === "link" ? undefined : i.name, bytes: i.bytes }));
      try {
        const extra = isAdm ? { tag: tagSel.value || undefined, community: teamSel.value || undefined, pinned: pinChk.checked || undefined, poll: pollB.get() || undefined } : {};
        const r = await M.post("feed/post", { text: ta.value, media, kind: kind || undefined, ...extra });
        setKind("");
        ta.value = ""; ta.style.height = ""; items.forEach((i) => i.preview && URL.revokeObjectURL(i.preview)); items = [];
        if (isAdm) { pollB.reset(); pollTool.classList.remove("on"); pinChk.checked = false; if (!defaultCommunity) teamSel.value = ""; syncPin(); }
        draw();
        M.toast(r.status === "pending" ? `Enviado! Assim que o gestor aprovar, seu post aparece no Feed${limits.postXp ? ` e você ganha +${limits.postXp} XP` : ""}.` : "Post publicado.", "ok");
        box.classList.add("is-compact"); document.activeElement?.blur?.();
        onPosted(r);
      } catch (e) { M.toast(e.message, "err"); draw(); }
    });
    draw();
    return box;
  }

  /* ───── início: o feed ───── */
  M.views.home = async function (opts = {}) {
    const tagId = opts.tag || "";
    const commId = opts.community || "";
    const [, status, tags, teams] = await Promise.all([M.refreshMe(), M.get("feed/status").catch(() => ({ uploads: false })), M.loadTags(true), M.loadTeams(true)]);
    const isAdm = M.can("publicar");
    const curTag = tagId ? tags.find((t) => t.id === tagId) : null;
    // a gestão vê todas as comunidades; o aluno vê só a do time dele
    const myTeams = M.isAdmin() ? teams : teams.filter((t) => t.id === M.session.user.team);
    const curTeam = commId ? teams.find((t) => t.id === commId) : null;
    const top = h("div", { class: "feed-top" });
    const dst = M.destaquesBar();
    const list = h("div", { class: "feed-list" });
    const more = h("div", { class: "row", style: "justify-content:center;margin:20px 0" });
    let next = null, tab = "feed";

    /* topo enxuto: uma linha de status (apelido, fila, check-in) e, no PC, o resto vai para a coluna da direita */
    const doCheckin = async (b) => {
      b.disabled = true;
      try {
        const r = await M.post("engage/checkin");
        M.session.engage = { ...M.session.engage, checkedToday: true, streak: r.streak };
        M.bumpXp(r);
        top.classList.add("is-leaving");
        setTimeout(() => { top.classList.remove("is-leaving"); drawTop(); }, 320);
      } catch (ex) { M.toast(ex.message, "err"); b.disabled = false; }
    };
    function nickPrompt() {
      const wrap = h("section", { class: "panel fnick" });
      let open = false;
      const btn = h("button", { class: "btn btn-gold btn-sm", type: "button", text: "Escolher" });
      const paint = () => {
        btn.textContent = open ? "Fechar" : "Escolher";
        wrap.replaceChildren(
          h("div", { class: "fstrip-row" }, h("span", { class: "fs-ico" }, M.icon("user", 16)), h("span", { class: "fs-text" }, h("strong", { text: "Escolha o seu @" }), h("span", { class: "muted", text: " para o time te marcar nos posts" })), btn),
          open ? M.nickForm({ compact: true, onSaved: () => drawTop() }) : null);
      };
      btn.addEventListener("click", () => { open = !open; paint(); });
      paint();
      return wrap;
    }
    let askShown = false;
    function pushAsk() {
      const on = h("button", { class: "btn btn-gold btn-sm", type: "button", text: "Ativar" });
      const no = h("button", { class: "icon-btn", type: "button", "aria-label": "Agora não", onclick: () => { M.push.dismissAsk(); card.remove(); } }, M.icon("x", 16));
      const card = h("section", { class: "panel fnick fpush" }, h("div", { class: "fstrip-row" }, h("span", { class: "fs-ico" }, M.icon("bell", 16)), h("span", { class: "fs-text" }, h("strong", { text: "Receba os avisos no aparelho" }), h("span", { class: "muted", text: " : comentários, aprovações e novidades" })), on, no));
      on.addEventListener("click", async () => { await M.openPush(); card.remove(); M.push.dismissAsk(); });
      return card;
    }
    function drawTop() {
      const me = M.session.user;
      const parts = [];
      if (!me.nickname) parts.push(nickPrompt());
      const nPosts = M.session.pending || 0, nSign = M.session.pendingSignups || 0;
      const row = [];
      if (M.can("aprovar") && (nPosts || nSign)) {
        const what = [nSign ? `${nSign} ${nSign === 1 ? "cadastro" : "cadastros"}` : "", nPosts ? `${nPosts} ${nPosts === 1 ? "post" : "posts"}` : ""].filter(Boolean).join(" e ");
        row.push(h("a", { class: "fs-chip warn", href: "#/admin/aprovacoes" }, M.icon("flag", 15), h("span", { text: `${what} ${nPosts + nSign === 1 ? "aguarda" : "aguardam"} aprovação` }), M.icon("chevr", 14)));
      }
      if (me.role === "aluno" && !M.session.engage.checkedToday) {
        const e = M.session.engage;
        const b = h("button", { class: "btn btn-gold btn-sm", type: "button" }, M.icon("bolt", 16), "Check-in");
        b.addEventListener("click", () => doCheckin(b));
        row.push(h("div", { class: "fs-checkin" },
          e.streak > 0 ? h("span", { class: "fs-chip fire" }, M.icon("fire", 15), `${e.streak} ${e.streak === 1 ? "dia" : "dias"} seguidos`) : h("span", { class: "fs-text muted", text: "Entre todo dia e ganhe XP" }), b));
      }
      if (row.length) parts.push(h("div", { class: "fstrip" }, row));
      top.replaceChildren(...parts);
      if (M.push && !askShown) { askShown = true; M.push.shouldAsk().then((yes) => { if (!yes || !top.isConnected) return; top.append(pushAsk()); }); }
      drawRail();
    }
    const onEngage = () => { if (!node.isConnected) { document.removeEventListener("estude:engage", onEngage); return; } drawTop(); };
    document.addEventListener("estude:engage", onEngage);

    /* coluna da direita (só no PC largo): resumo do dia, atalhos e ideias para postar */
    let railGoals = null;
    function drawRail() {
      const me = M.session.user, parts = [];
      if (me.role === "aluno") {
        const e = M.session.engage;
        const card = h("section", { class: "panel rail-card" }, h("h3", { class: "rail-h", text: "Seu dia" }));
        card.append(h("div", { class: "rail-stats" },
          h("div", null, h("b", { text: String(e.streak || 0) }), h("span", { text: (e.streak || 0) === 1 ? "dia seguido" : "dias seguidos" })),
          h("div", null, h("b", { text: String(e.xp || 0) }), h("span", { text: "XP de engajamento" }))));
        if (!e.checkedToday) {
          const b = h("button", { class: "btn btn-gold", type: "button", style: "width:100%" }, M.icon("bolt", 18), "Fazer check-in");
          b.addEventListener("click", () => doCheckin(b));
          card.append(b);
        } else card.append(h("p", { class: "rail-ok small" }, M.icon("check", 15), "Check-in de hoje feito"));
        if (railGoals) card.append(h("ul", { class: "rail-goals" }, railGoals.slice(0, 3).map((g) => {
          const pct = M.pct(g.progress, g.target);
          return h("li", { class: g.done ? "done" : "" }, h("div", { class: "row-between" }, h("span", { text: g.title }), h("span", { class: "muted", text: g.done ? "Feita" : `${g.progress}/${g.target}` })), h("div", { class: "bar" }, h("i", { style: `width:${pct}%` })));
        })));
        card.append(h("a", { class: "rail-link", href: "#/ranking" }, M.icon("trophy", 15), "Ver ranking", M.icon("chevr", 14)));
        parts.push(card);
        parts.push(h("section", { class: "panel rail-card rail-ideas" }, h("h3", { class: "rail-h", text: "O que postar?" }),
          h("p", { class: "small muted", style: "margin:0 0 8px", text: "O time quer saber do que você viveu. Escolha um formato:" }),
          h("div", { class: "rail-kinds" }, Object.entries(M.KINDS).map(([k, m]) => { const b = h("button", { class: "kind-btn kind-" + k, type: "button" }, M.icon(m.icon, 16), m.label); b.addEventListener("click", () => { composerBox.pick(k); composerBox.scrollIntoView({ block: "center", behavior: "smooth" }); }); return b; }))));
      } else {
        const nPosts = M.session.pending || 0, nSign = M.session.pendingSignups || 0, nForum = M.session.pendingForum || 0;
        const items = [];
        if (M.can("aprovar")) { items.push(["Posts para aprovar", nPosts, "#/admin/aprovacoes"], ["Cadastros para liberar", nSign, "#/admin/aprovacoes"]); }
        if (M.can("forum")) items.push(["Dúvidas do fórum", nForum, "#/admin/forum"]);
        if (items.length) parts.push(h("section", { class: "panel rail-card" }, h("h3", { class: "rail-h", text: "Fila do gestor" }),
          h("ul", { class: "rail-queue" }, items.map(([t, n, href]) => h("li", null, h("a", { href }, h("span", { text: t }), h("b", { class: n ? "has" : "", text: String(n) })))))));
      }
      /* comunidades e tags ficam na lateral no PC; no celular entram o botão "Minha comunidade" e as tags na barra */
      const side = [];
      if (myTeams.length) side.push(h("section", { class: "panel rail-card" }, h("h3", { class: "rail-h", text: M.isAdmin() ? "Comunidades" : "Minha comunidade" }),
        M.isAdmin() ? null : h("p", { class: "small muted", style: "margin:0 0 8px", text: "Posts que só o seu time vê." }),
        h("ul", { class: "rail-teams" }, myTeams.map((t) => h("li", null, h("a", { class: "rail-team tag-" + t.color + (t.id === commId ? " on" : ""), href: "#/comunidade/" + t.id, "aria-current": t.id === commId ? "true" : null }, M.teamBadge(t, 32), h("span", { class: "rt-name", text: t.name }), M.icon("chevr", 14)))))));
      if (tags.length) side.push(h("section", { class: "panel rail-card" }, h("h3", { class: "rail-h", text: "Tags" }),
        h("div", { class: "rail-tags" }, tags.map((t) => h("a", { class: "tag-chip tag-" + t.color + (t.id === tagId ? " on" : ""), href: "#/tag/" + t.id, "aria-current": t.id === tagId ? "true" : null }, M.icon("tag", 13), t.name))),
        tagId ? h("a", { class: "rail-link", href: "#/" }, "Ver todos os posts", M.icon("chevr", 14)) : null));
      parts.splice(1, 0, ...side);
      parts.push(h("a", { class: "panel rail-card rail-reels", href: "#/reels" }, h("span", { class: "rr-ico" }, M.icon("reels", 22)), h("div", null, h("strong", { text: "Reels do time" }), h("span", { class: "small muted", style: "display:block", text: "Vídeos recentes, um por vez" })), M.icon("chevr", 18)));
      rail.replaceChildren(...parts);
    }

    /* ───── atualização automática: avisa de post novo sem mexer na tela ───── */
    const live = h("button", { class: "live-bar", type: "button", hidden: true, onclick: () => { live.hidden = true; load(true); const t = tagBarTop(); if (t) t.scrollIntoView({ block: "start" }); } });
    const liveWrap = h("div", { class: "live-wrap", role: "status", "aria-live": "polite" }, live);
    const tagBarTop = () => node.querySelector(".fbar, .composer");
    let base = null, pinsSig = "", timer = null;
    const pulseUrl = (since) => { const q = new URLSearchParams(); if (tagId) q.set("tag", tagId); if (commId) q.set("community", commId); if (since) q.set("since", since); return "feed/pulse" + (q.toString() ? "?" + q : ""); };
    async function rebase() {
      try { const d = await M.get(pulseUrl()); base = d.top || "~"; pinsSig = d.pins || ""; } catch {}
    }
    async function pulse() {
      if (tab !== "feed" || document.hidden) return;
      if (!node.isConnected) { stopLive(); return; }
      dst.refresh();
      if (base === null) { await rebase(); return; }
      try {
        const d = await M.get(pulseUrl(base));
        const pinsChanged = !tagId && (d.pins || "") !== pinsSig;
        if (d.fresh) live.textContent = `Mostrar ${d.fresh}${d.more ? "+" : ""} ${d.fresh === 1 && !d.more ? "post novo" : "posts novos"}`;
        else if (pinsChanged) live.textContent = "Mostrar mudanças no Feed";
        else return;
        live.hidden = false;
      } catch {}
    }
    const onVisible = () => { if (!document.hidden) setTimeout(pulse, Math.random() * 1500); };
    function stopLive() { clearTimeout(timer); document.removeEventListener("visibilitychange", onVisible); window.removeEventListener("focus", onVisible); }

    async function load(reset) {
      if (reset) { list.replaceChildren(M.loading()); next = null; more.replaceChildren(); live.hidden = true; if (tab === "feed") rebase(); }
      try {
        if (tab === "mine") {
          const d = await M.get("feed/mine");
          list.replaceChildren(
            h("p", { class: "muted small", style: "margin:0 0 4px", text: `Posts aguardando aprovação ou recusados. Você pode ter até ${d.maxPending} na fila. Os já publicados ficam no seu perfil.` }),
            ...(d.posts.length ? d.posts.map((p) => M.postCard(p)) : [h("div", { class: "empty", text: "Nada na fila. Quando você enviar um post, ele aparece aqui até o gestor analisar." })]),
            h("a", { class: "btn btn-ghost", style: "justify-self:start", href: M.profileHref(M.session.user) }, "Ver meus posts publicados"));
          return;
        }
        const q = new URLSearchParams();
        if (next) q.set("after", next);
        if (tagId) q.set("tag", tagId);
        if (commId) q.set("community", commId);
        const d = await M.get("feed" + (q.toString() ? "?" + q : ""));
        if (reset) list.replaceChildren();
        if (!d.posts.length && reset) list.append(curTeam
          ? h("div", { class: "empty" }, h("h3", { text: `Nenhum post na comunidade ${curTeam.name}` }), h("p", { text: isAdm ? "Publique escolhendo esta comunidade em “Quem vê”." : "Quando a gestão publicar para o seu time, aparece aqui." }))
          : curTag
          ? h("div", { class: "empty" }, h("h3", { text: `Nenhum post com a tag ${curTag.name}` }), h("p", { text: "Quando alguém publicar com essa tag, aparece aqui." }))
          : h("div", { class: "empty" }, h("h3", { text: "O Feed ainda está vazio" }), h("p", { text: isAdm ? "Publique o primeiro post para começar." : "Quando o gestor ou o time publicar, aparece aqui." })));
        d.posts.forEach((p) => list.append(M.postCard(p, { onChange: () => load(true) })));
        next = d.next;
        more.replaceChildren(next ? h("button", { class: "btn btn-ghost", type: "button", onclick: () => load(false), text: "Carregar mais" }) : (list.children.length ? h("span", { class: "muted small", text: "Você chegou ao fim do Feed." }) : null));
      } catch (e) { list.replaceChildren(h("div", { class: "form-error", text: e.message })); }
    }

    const rail = h("aside", { class: "feed-rail", "aria-label": "Resumo e atalhos" });
    let composerBox = null;
    const mineBtn = isAdm ? null : h("button", { class: "fpill mine", type: "button", "aria-pressed": "false" }, M.icon("inbox", 14), "Meus posts");
    if (mineBtn) mineBtn.addEventListener("click", () => { tab = tab === "mine" ? "feed" : "mine"; mineBtn.setAttribute("aria-pressed", String(tab === "mine")); bar.classList.toggle("is-mine", tab === "mine"); load(true); });
    const bar = tags.length || tagId || commId || mineBtn ? h("nav", { class: "fbar", "aria-label": "Filtrar o Feed" },
      h("div", { class: "fbar-scroll" },
        commId ? null : h("a", { class: "fpill" + (!tagId ? " on" : ""), href: "#/", "aria-current": !tagId ? "true" : null, text: "Todos" }),
        commId ? null : tags.map((t) => h("a", { class: "fpill only-narrow tag-" + t.color + (t.id === tagId ? " on" : ""), href: "#/tag/" + t.id, "aria-current": t.id === tagId ? "true" : null }, t.name)),
        tagId && !curTag ? h("span", { class: "muted small", text: "Essa tag não existe mais." }) : null),
      h("div", { class: "fbar-end" }, mineBtn,
        h("a", { class: "fpill ghost", href: "#/busca" + (tagId ? "?tag=" + tagId : ""), "aria-label": curTag ? "Buscar nesta tag" : "Buscar" }, M.icon("search", 14), h("span", { class: "fp-t", text: "Buscar" })))) : null;
    composerBox = composer({ uploads: status.uploads, defaultTag: tagId, defaultCommunity: commId, limits: status, onPosted: (r) => { rebase();
        if (r.status === "published") { if (tab === "feed") { if (r.post.pinned || (tagId && r.post.tag?.id !== tagId) || (commId && r.post.community?.id !== commId)) load(true); else { list.querySelector(".empty")?.remove(); { const card = M.postCard(r.post, { onChange: () => load(true) }); const pins = list.querySelectorAll(":scope > .post.is-pinned"); if (pins.length) pins[pins.length - 1].after(card); else list.prepend(card); } } } }
        else { tab = "mine"; if (mineBtn) { mineBtn.setAttribute("aria-pressed", "true"); bar.classList.add("is-mine"); } load(true); }
      } });
    const commHead = curTeam ? h("section", { class: "panel comm-head tag-" + curTeam.color }, M.teamBadge(curTeam, 52),
      h("div", { class: "comm-head-t" }, h("span", { class: "muted small", text: "Comunidade" }), h("h2", { text: curTeam.name })),
      h("a", { class: "btn btn-ghost btn-sm", href: "#/" }, "Feed geral")) : null;
    /* só no celular (e na janela estreita): um botão que abre o feed do time, ou a lista de comunidades para a gestão */
    const commStrip = commId || !myTeams.length ? null : M.isAdmin()
      ? h("details", { class: "comm-pick only-narrow" }, h("summary", null, h("span", { class: "cc-badges" }, myTeams.slice(0, 3).map((t) => M.teamBadge(t, 26))), h("span", { class: "cc-t" }, h("strong", { text: "Comunidades" }), h("span", { class: "small muted", text: `${myTeams.length} ${myTeams.length === 1 ? "time" : "times"}` })), M.icon("chev", 18)),
        h("ul", { class: "comm-list" }, myTeams.map((t) => h("li", null, h("a", { class: "rail-team tag-" + t.color, href: "#/comunidade/" + t.id }, M.teamBadge(t, 30), h("span", { class: "rt-name", text: t.name }), M.icon("chevr", 14))))))
      : h("a", { class: "comm-cta only-narrow tag-" + myTeams[0].color, href: "#/comunidade/" + myTeams[0].id }, M.teamBadge(myTeams[0], 40),
        h("span", { class: "cc-t" }, h("strong", { text: "Minha comunidade" }), h("span", { class: "small muted", text: myTeams[0].name })), M.icon("chevr", 18));
    const node = h("div", { class: "feed" }, dst, top, commHead, commStrip, commId && !isAdm ? null : composerBox, bar, liveWrap, list, more);
    const layout = h("div", { class: "feed-layout" }, node, rail);
    drawTop();
    if (!isAdm && M.session.user.role === "aluno" && matchMedia("(min-width: 1180px)").matches) M.get("engage/me").then((v) => { railGoals = (v.goals || []).filter((g) => !g.done).concat((v.goals || []).filter((g) => g.done)); if (layout.isConnected) drawRail(); }).catch(() => {});
    load(true);
    /* confere a cada ~30 s, com variação aleatória, para 300 pessoas não baterem no servidor no mesmo segundo */
    const liveMs = () => (window.__LIVE_MS || 30000) * (0.8 + Math.random() * 0.4);
    const loop = () => { timer = setTimeout(async () => { try { await pulse(); } catch {} if (node.isConnected) loop(); }, liveMs()); };
    loop();
    document.addEventListener("visibilitychange", onVisible); window.addEventListener("focus", onVisible);
    return layout;
  };

  /* ───── um post ───── */
  M.views.post = async function (id) {
    await M.refreshMe();
    let d;
    try { d = await M.get("feed/post/" + id); } catch (e) { return h("div", { class: "empty" }, h("h3", { text: "Post não encontrado" }), h("p", { text: "Ele pode ter sido apagado." }), h("a", { class: "btn btn-gold", href: "#/" }, "Voltar ao Feed")); }
    return h("div", { class: "feed" }, M.postCard(d.post, { openComments: true, onDelete: () => { location.hash = "#/"; } }));
  };

  /* ───── perfil ───── */
  M.views.profile = async function (key) {
    await M.refreshMe();
    let d;
    try { d = await M.get("people/" + encodeURIComponent(key)); } catch (e) { return h("div", { class: "empty" }, h("h3", { text: "Pessoa não encontrada" }), h("a", { class: "btn btn-gold", href: "#/" }, "Voltar ao Feed")); }
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
            p.role === "admin" || p.role === "subadmin" ? h("span", { class: "chip chip-gold", text: "Gestor" }) : h("span", { class: "chip", text: "Aluno" }),
            e ? h("span", { class: "chip chip-gold" }, M.icon("bolt", 14), `${e.xp} XP de engajamento`) : null,
            e && e.streak > 0 ? h("span", { class: "chip" }, `${e.streak} ${e.streak === 1 ? "dia" : "dias"} de sequência`) : null)),
        mine ? h("a", { class: "btn btn-ghost btn-sm", href: "#/conta" }, "Editar perfil") : null),
      h("h3", { style: "margin:24px 0 12px", text: "Posts" }), list, more);
    return node;
  };
})();

/* Comunidade: emojis, @ com lista de pessoas, tags, enquetes, sino de notificações e a página de tags e moderação. */
(function () {
  const { h } = M;

  /* ───── emojis ───── */
  const EMOJI = {
    "Carinhas": "😀 😃 😄 😁 😆 😅 😂 🤣 😊 🙂 😉 😍 🥰 😘 😎 🤩 🥳 😇 🤗 🤔 😐 🙄 😴 😮 😢 😭 😡 🤯 😱 🥹",
    "Gestos": "👍 👎 👏 🙌 🙏 💪 🤝 ✌️ 🤞 👌 🤙 👋 ✋ 👀 🫡 🫶 ❤️ 🧡 💛 💚 💙 💜 🖤 💯 🔥 ⭐ ✨ 💥 🎉 🎊",
    "Trabalho": "🚀 📈 📉 📊 💰 💵 🛒 🛍️ 📦 🚚 🏷️ 🎯 ✅ ❌ ⚠️ 💡 📌 📣 📢 🔔 📝 📅 ⏰ 🔍 🧠 🏆 🥇 🥈 🥉 🤑",
    "Esporte": "🏀 ⚽ 🏈 🏐 🎾 🏅 🏆 🥇 🔥 💪 👑 🐍 💜 💛 ⏱️ 🎯 🚀 📣 🙌 👏",
    "Festa": "🎉 🎊 🥳 🎁 🎂 🍰 🍕 🍔 🍟 ☕ 🍺 🥂 🍾 🎶 🎵 🕺 💃 🌟 ✨ 🎈",
    "Natureza": "☀️ 🌤️ ⛅ 🌧️ ⚡ ❄️ 🌈 🌸 🌻 🌳 🍀 🌎 🐶 🐱 🦁 🐯 🐻 🐼 🦄 🐍",
  };
  const RECENT_KEY = "eh-emoji-recent";
  const recent = () => { try { return JSON.parse(M.store.get(RECENT_KEY) || "[]").slice(0, 16); } catch { return []; } };
  const remember = (e) => M.store.set(RECENT_KEY, JSON.stringify([e, ...recent().filter((x) => x !== e)].slice(0, 16)));

  function insertAt(field, text) {
    field.focus();
    const a = field.selectionStart ?? field.value.length, b = field.selectionEnd ?? a;
    if (field.maxLength > 0 && field.value.length - (b - a) + text.length > field.maxLength) return;
    field.setRangeText(text, a, b, "end");
    field.dispatchEvent(new Event("input", { bubbles: true }));
  }
  M.insertAt = insertAt;

  // Botão com a lista de emojis. `field` é o campo de texto que recebe o emoji.
  M.emojiButton = function (field, { up = false, label = true } = {}) {
    const btn = h("button", { class: "tool-btn emoji-btn", type: "button", "aria-label": "Inserir emoji", "aria-expanded": "false", title: "Emoji" }, M.icon("smile", 18), label ? h("span", { text: "Emoji" }) : null);
    const wrap = h("span", { class: "emoji-wrap" }, btn);
    let pop = null, off = null;
    function close() { if (!pop) return; pop.remove(); pop = null; btn.setAttribute("aria-expanded", "false"); off?.(); off = null; }
    function open() {
      const cats = { ...(recent().length ? { "Recentes": recent().join(" ") } : {}), ...EMOJI };
      let cat = Object.keys(cats)[0];
      const grid = h("div", { class: "emoji-grid", role: "listbox" });
      const tabs = h("div", { class: "emoji-tabs", role: "tablist" });
      const draw = () => {
        tabs.replaceChildren(...Object.keys(cats).map((k) => h("button", { type: "button", role: "tab", "aria-selected": String(k === cat), text: k, onclick: () => { cat = k; draw(); } })));
        grid.replaceChildren(...cats[cat].split(" ").map((e) => h("button", { type: "button", class: "emoji-opt", "aria-label": e, text: e, onclick: () => { insertAt(field, e); remember(e); } })));
      };
      draw();
      pop = h("div", { class: "emoji-pop" + (up ? " up" : ""), role: "dialog", "aria-label": "Escolher emoji" }, tabs, grid);
      wrap.append(pop);
      btn.setAttribute("aria-expanded", "true");
      const onDoc = (e) => { if (!wrap.contains(e.target)) close(); };
      const onKey = (e) => { if (e.key === "Escape") { close(); btn.focus(); } };
      setTimeout(() => document.addEventListener("pointerdown", onDoc), 0);
      document.addEventListener("keydown", onKey);
      off = () => { document.removeEventListener("pointerdown", onDoc); document.removeEventListener("keydown", onKey); };
    }
    btn.addEventListener("click", () => (pop ? close() : open()));
    return wrap;
  };

  /* ───── @ com lista de pessoas ───── */
  let DIR = null, DIR_AT = 0;
  async function directory() {
    if (DIR && Date.now() - DIR_AT < 60000) return DIR;
    try { DIR = await M.get("people/mentions"); DIR_AT = Date.now(); } catch { DIR = DIR || { people: [], todos: false }; }
    return DIR;
  }
  const fold = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  const HIDERS = new Set();
  document.addEventListener("pointerdown", (e) => {
    for (const x of HIDERS) { if (!x.host.isConnected) HIDERS.delete(x); else if (!x.host.contains(e.target)) x.hide(); }
  });
  // Envolve um campo (input ou textarea): ao digitar "@" mostra quem dá para marcar. Devolve o elemento que vai na tela.
  M.mentionField = function (field) {
    const host = h("div", { class: "mention-host" });
    const list = h("ul", { class: "mention-list", role: "listbox", hidden: true, "aria-label": "Pessoas para marcar" });
    host.append(field, list);
    let items = [], active = 0, span = null, seq = 0;
    const hide = () => { list.hidden = true; span = null; items = []; };
    function paint() {
      list.replaceChildren(...items.map((it, i) => h("li", { role: "option", "aria-selected": String(i === active), class: i === active ? "on" : "" },
        h("button", { type: "button", tabindex: "-1", onmousedown: (e) => e.preventDefault(), onclick: () => pick(i) },
          it.all ? h("span", { class: "mention-all" }, M.icon("bell", 16)) : M.avatar(it, 28),
          h("span", { class: "mention-who" }, h("strong", { text: it.all ? "todos" : it.name }), h("small", { text: it.all ? "Avisa toda a equipe" : "@" + it.nickname }))))));
      list.hidden = !items.length;
    }
    function pick(i) {
      const it = items[i]; if (!it || !span) return;
      const ins = "@" + (it.all ? "todos" : it.nickname) + " ";
      field.focus();
      field.setSelectionRange(span.from, span.to);
      field.setRangeText(ins, span.from, span.to, "end");
      field.dispatchEvent(new Event("input", { bubbles: true }));
      hide();
    }
    async function update() {
      const pos = field.selectionStart ?? field.value.length;
      const m = field.value.slice(0, pos).match(/(?:^|[\s(])@([a-z0-9_.]{0,20})$/i);
      if (!m) { hide(); return; }
      const q = fold(m[1]), my = ++seq;
      const d = await directory();
      if (my !== seq) return;
      const me = M.session.user?.id;
      const rows = d.people.filter((p) => p.id !== me && (!q || fold(p.nickname).startsWith(q) || fold(p.name).split(/\s+/).some((w) => w.startsWith(q)) || fold(p.nickname).includes(q)))
        .sort((a, b) => (fold(b.nickname).startsWith(q) - fold(a.nickname).startsWith(q)) || a.name.localeCompare(b.name, "pt-BR")).slice(0, 6);
      items = [...(d.todos && (!q || "todos".startsWith(q)) ? [{ all: true }] : []), ...rows];
      // @nome já escrito por inteiro: não precisa mais da lista
      if (q && items.length === 1 && (items[0].all ? q === "todos" : fold(items[0].nickname) === q)) items = [];
      active = 0; span = { from: pos - m[1].length - 1, to: pos };
      paint();
    }
    field.addEventListener("input", update);
    field.addEventListener("click", update);
    field.addEventListener("keyup", (e) => { if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) update(); });
    field.addEventListener("keydown", (e) => {
      if (list.hidden || !items.length) return;
      if (e.key === "ArrowDown") { e.preventDefault(); active = (active + 1) % items.length; paint(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); active = (active - 1 + items.length) % items.length; paint(); }
      else if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); pick(active); }
      else if (e.key === "Escape") { e.preventDefault(); hide(); }
    });
    field.addEventListener("blur", () => setTimeout(hide, 150));
    HIDERS.add({ host, hide });
    return host;
  };

  /* ───── tags ───── */
  M.tagChip = function (tag, { link = true } = {}) {
    if (!tag) return null;
    const el = h(link ? "a" : "span", { class: "tag-chip tag-" + tag.color, ...(link ? { href: "#/tag/" + tag.id, title: "Ver posts com esta tag" } : {}) }, M.icon("tag", 13), tag.name);
    return el;
  };
  let TAGS = null;
  M.loadTags = async function (force) {
    if (TAGS && !force) return TAGS;
    try { TAGS = (await M.get("feed/tags")).tags; } catch { TAGS = TAGS || []; }
    return TAGS;
  };
  M.setTags = (list) => { TAGS = list; };

  /* ───── times (comunidades): brasão, bandeira ou emoji viram uma tag colorida ───── */
  M.teamBadge = function (t, size = 22) {
    const el = h("span", { class: "team-badge", style: `width:${size}px;height:${size}px;font-size:${Math.round(size * 0.62)}px`, "aria-hidden": "true" });
    if (t.crest) {
      const img = h("img", { src: M.avatarUrl(t.crest, size * 2), alt: "", loading: "lazy", decoding: "async" });
      img.addEventListener("error", () => { img.remove(); el.textContent = t.emoji || (t.name || "?")[0].toUpperCase(); });
      el.append(img);
    } else el.textContent = t.emoji || (t.name || "?")[0].toUpperCase();
    return el;
  };
  M.teamChip = function (team, { link = true } = {}) {
    if (!team) return null;
    return h(link ? "a" : "span", { class: "team-chip tag-" + team.color, ...(link ? { href: "#/comunidade/" + team.id, title: "Ver a comunidade " + team.name } : {}) }, M.teamBadge(team, 18), team.name);
  };
  let TEAMS = null;
  M.loadTeams = async function (force) {
    if (TEAMS && !force) return TEAMS;
    try { TEAMS = (await M.get("feed/teams")).teams; } catch { TEAMS = TEAMS || []; }
    return TEAMS;
  };
  M.setTeams = (list) => { TEAMS = list; };
  M.teamsNow = () => TEAMS || [];

  /* ───── enquete: montar (gestor) ───── */
  M.pollBuilder = function ({ maxQuestions = 6, maxOptions = 8 } = {}) {
    let mode = "open";
    let qs = [newQ()];
    function newQ() { return { text: "", options: ["", ""] }; }
    const node = h("section", { class: "poll-builder", hidden: true, "aria-label": "Montar enquete" });
    function draw() {
      node.replaceChildren(
        h("div", { class: "pb-modes", role: "radiogroup", "aria-label": "Tipo de enquete" },
          [["open", "Aberta", "Quem vota vê o percentual de cada opção."], ["secret", "Vote aqui (secreta)", "Quem vota não vê o resultado. Só os gestores veem."]].map(([k, t, d]) =>
            h("button", { type: "button", role: "radio", "aria-checked": String(mode === k), class: "pb-mode" + (mode === k ? " on" : ""), onclick: () => { mode = k; draw(); } }, h("strong", { text: t }), h("span", { class: "small", text: d })))),
        ...qs.map((q, qi) => h("fieldset", { class: "pb-q" },
          h("div", { class: "pb-q-head" },
            h("label", { class: "small muted", for: "pq" + qi, text: `Pergunta ${qi + 1}` }),
            qs.length > 1 ? h("button", { class: "linkish", type: "button", onclick: () => { qs.splice(qi, 1); draw(); }, text: "Remover pergunta" }) : null),
          h("input", { class: "input", id: "pq" + qi, type: "text", maxlength: "140", placeholder: "Ex.: Qual horário é melhor para a reunião?", value: q.text, oninput: (e) => { q.text = e.target.value; } }),
          h("div", { class: "pb-opts" }, q.options.map((o, oi) => h("div", { class: "pb-opt" },
            h("input", { class: "input", type: "text", maxlength: "80", "aria-label": `Pergunta ${qi + 1}, opção ${oi + 1}`, placeholder: `Opção ${oi + 1}`, value: o, oninput: (e) => { q.options[oi] = e.target.value; } }),
            q.options.length > 2 ? h("button", { class: "icon-btn", type: "button", "aria-label": "Remover opção", onclick: () => { q.options.splice(oi, 1); draw(); } }, M.icon("x", 16)) : null))),
          q.options.length < maxOptions ? h("button", { class: "linkish", type: "button", onclick: () => { q.options.push(""); draw(); const last = node.querySelectorAll(".pb-q")[qi].querySelectorAll(".pb-opt input"); last[last.length - 1]?.focus(); }, text: "+ Adicionar opção" }) : null)),
        qs.length < maxQuestions ? h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => { qs.push(newQ()); draw(); } }, M.icon("plus", 16), "Outra pergunta") : null);
    }
    draw();
    return {
      node,
      isOpen: () => !node.hidden,
      toggle(on) { node.hidden = on === undefined ? !node.hidden : !on; if (!node.hidden) draw(); },
      get() { return node.hidden ? null : { mode, questions: qs.map((q) => ({ text: q.text, options: q.options.filter((o) => o.trim()) })) }; },
      filled() { return !node.hidden && qs.some((q) => q.text.trim()); },
      reset() { mode = "open"; qs = [newQ()]; node.hidden = true; draw(); },
    };
  };

  /* ───── enquete: votar e ver (todos) ───── */
  M.pollView = function (post) {
    const box = h("section", { class: "poll", "aria-label": "Enquete" });
    const poll = () => post.poll;
    let busy = false;
    async function vote(qi, oi) {
      if (busy) return; busy = true; draw();
      try { const r = await M.post("feed/vote/" + post.id, { q: qi, o: oi }); post.poll = r.poll; M.toast("Voto registrado.", "ok"); }
      catch (e) { M.toast(e.message, "err"); }
      busy = false; draw();
    }
    function draw() {
      const p = poll();
      const votable = p.live && !p.closed;
      box.replaceChildren(
        h("div", { class: "poll-top row", style: "gap:8px" },
          h("span", { class: "chip chip-xs " + (p.mode === "secret" ? "" : "chip-gold") }, M.icon("chart", 13), p.mode === "secret" ? "Votação secreta" : "Enquete aberta"),
          p.closed ? h("span", { class: "chip chip-xs chip-bad", text: "Encerrada" }) : null,
          p.voters !== undefined ? h("span", { class: "muted small", text: `${p.voters} ${p.voters === 1 ? "pessoa votou" : "pessoas votaram"}` }) : null),
        ...p.questions.map((q, qi) => {
          const canClick = votable && q.mine === null && !busy;
          return h("fieldset", { class: "poll-q" },
            h("legend", { text: q.text }),
            h("div", { class: "poll-opts" }, q.options.map((o, oi) => {
              const mine = q.mine === oi;
              const row = h("button", { type: "button", class: "poll-opt" + (mine ? " mine" : "") + (o.n !== undefined ? " has-res" : ""), disabled: !canClick, "aria-pressed": String(mine), onclick: () => vote(qi, oi) },
                o.n !== undefined ? h("i", { class: "poll-fill", style: `width:${o.pct}%` }) : null,
                h("span", { class: "poll-t" }, mine ? M.icon("check", 16) : null, o.t),
                o.n !== undefined ? h("span", { class: "poll-n", text: `${o.pct}%` + (M.isAdmin() ? ` · ${o.n}` : "") }) : null);
              return row;
            })),
            q.mine !== null && q.total === undefined ? h("p", { class: "muted small poll-note", text: p.mode === "secret" ? "Voto registrado. O resultado desta votação não é divulgado." : "Voto registrado." }) : null,
            q.mine === null && votable && q.total === undefined && p.mode === "open" ? h("p", { class: "muted small poll-note", text: "O percentual aparece depois do seu voto." }) : null,
            q.mine === null && votable && p.mode === "secret" ? h("p", { class: "muted small poll-note", text: "Escolha uma opção. O resultado não aparece para a equipe." }) : null,
            q.total !== undefined ? h("p", { class: "muted small poll-note", text: `${q.total} ${q.total === 1 ? "voto" : "votos"}` }) : null);
        }),
        !p.live ? h("p", { class: "muted small poll-note", text: "A votação abre quando o post for aprovado." }) : null);
    }
    draw();
    return box;
  };

  /* ───── sino de notificações ───── */
  const NTEXT = {
    mention: (n) => (n.where === "comment" ? "marcou você em um comentário" : "marcou você em um post"),
    all: () => "avisou toda a equipe",
    comment: () => "comentou no seu post",
    approved: () => "aprovou o seu post",
    rejected: () => "recusou o seu post",
    forum_ok: () => "aprovou a sua dúvida/sugestão: virou publicação do fórum",
    forum_no: () => "reprovou a sua dúvida/sugestão. Veja o motivo",
    prova_nova: () => "liberou uma prova para você",
    reel: () => "publicou um vídeo novo nos Reels",
    community: (n) => "publicou na comunidade " + (n.where || "do seu time"),
  };
  M.bell = function () {
    const badge = h("span", { class: "bell-n", hidden: true });
    const btn = h("button", { class: "icon-btn bell-btn", type: "button", "aria-label": "Notificações", "aria-expanded": "false", "aria-haspopup": "true" }, M.icon("bell", 20), badge);
    const wrap = h("div", { class: "bell-wrap" }, btn);
    let panel = null, timer = null;
    const setN = (n) => {
      const more = n > (M.session.unread || 0);
      M.session.unread = n; badge.hidden = !n; badge.textContent = n > 9 ? "9+" : String(n || ""); btn.setAttribute("aria-label", n ? `Notificações: ${n} novas` : "Notificações");
      /* com notificação nova o sininho fica pulando; ao abrir a lista ele sossega */
      btn.classList.toggle("has-new", n > 0);
      if (more) { btn.classList.remove("rang"); void btn.offsetWidth; btn.classList.add("rang"); }
    };
    setN(M.session.unread || 0);
    M.updateBell = () => setN(M.session.unread || 0);
    function close() { if (!panel) return; panel.remove(); panel = null; btn.setAttribute("aria-expanded", "false"); document.removeEventListener("pointerdown", onDoc); document.removeEventListener("keydown", onKey); }
    const onDoc = (e) => { if (!wrap.contains(e.target)) close(); };
    const onKey = (e) => { if (e.key === "Escape") { close(); btn.focus(); } };
    async function open() {
      panel = h("div", { class: "notif-panel", role: "dialog", "aria-label": "Notificações" }, h("div", { class: "notif-head" }, h("strong", { text: "Notificações" })), M.loading("Carregando…"));
      const pushBtn = () => h("button", { class: "linkish notif-push", type: "button", onclick: () => { close(); M.openPush && M.openPush(); } }, M.icon("bell", 14), "Avisos no aparelho");
      wrap.append(panel); btn.setAttribute("aria-expanded", "true");
      setTimeout(() => { document.addEventListener("pointerdown", onDoc); document.addEventListener("keydown", onKey); }, 0);
      try {
        const d = await M.get("notifs");
        if (!panel) return;
        const body = d.items.length
          ? h("ul", { class: "notif-list" }, d.items.map((n) => h("li", null, h("a", { class: "notif-item" + (n.unread ? " unread" : ""), href: n.link || (n.postId ? "#/post/" + n.postId : "#/"), onclick: () => close() },
            n.by ? M.avatar(n.by, 34) : h("span", { class: "notif-ico" }, M.icon("bell", 16)),
            h("span", { class: "notif-txt" },
              h("span", null, h("strong", { text: n.by?.name || "Equipe" }), " " + (NTEXT[n.type] ? NTEXT[n.type](n) : "enviou uma notificação")),
              n.text ? h("span", { class: "muted small notif-snip", text: n.text }) : null,
              h("span", { class: "muted small", text: M.timeAgo(n.at) }))))))
          : h("p", { class: "muted", style: "padding:18px;margin:0;text-align:center", text: "Nada por aqui ainda. Quando alguém marcar você com @, aparece aqui." });
        panel.replaceChildren(h("div", { class: "notif-head" }, h("strong", { text: "Notificações" }), pushBtn()), body);
        if (d.unread) { setN(0); M.post("notifs/read").catch(() => {}); }
      } catch (e) { panel?.replaceChildren(h("p", { class: "form-error", style: "margin:12px", text: e.message })); }
    }
    btn.addEventListener("click", () => (panel ? close() : open()));
    // confere se chegou coisa nova de tempos em tempos, só com a aba aberta
    clearInterval(M._bellTimer);
    M._bellTimer = timer = setInterval(async () => {
      if (document.hidden || !M.session.token || !document.body.contains(wrap)) return;
      try { const d = await M.get("notifs"); if (!panel) setN(d.unread); } catch {}
    }, 90000);
    return wrap;
  };

  /* ───── página: tags e moderação ───── */
  const COLOR_NAMES = { gold: "Dourado", purple: "Roxo", green: "Verde", red: "Vermelho", blue: "Azul", orange: "Laranja", pink: "Rosa", gray: "Cinza" };
  M.views.adminTags = async function () {
    if (!M.can("moderar")) return h("div", { class: "empty" }, h("h3", { text: "Área restrita" }), h("p", { text: "Somente administradores veem esta página." }));
    const [tg, md] = await Promise.all([M.get("feed/tags"), M.get("admin/moderation")]);
    let tags = tg.tags; const colors = tg.colors;
    let mod = md.moderation;

    /* tags */
    const tagBox = h("section", { class: "panel" });
    let newColor = "gold", newName = "";
    function drawTags() {
      const nameIn = h("input", { class: "input", type: "text", maxlength: "24", value: newName, oninput: (e) => { newName = e.target.value; }, placeholder: "Nome da tag (ex.: Avisos, Campanhas, Treinos)", "aria-label": "Nome da nova tag" });
      const sw = (cur, on) => h("div", { class: "swatches", role: "radiogroup", "aria-label": "Cor" }, colors.map((c) => h("button", { type: "button", role: "radio", "aria-checked": String(c === cur), class: "swatch tag-" + c + (c === cur ? " on" : ""), title: COLOR_NAMES[c] || c, "aria-label": COLOR_NAMES[c] || c, onclick: () => on(c) })));
      const add = async (e) => {
        e.preventDefault();
        try { const r = await M.post("admin/tags", { name: nameIn.value, color: newColor }); tags = r.tags; M.setTags(tags); newName = ""; M.toast("Tag criada.", "ok"); drawTags(); }
        catch (ex) { M.toast(ex.message, "err"); }
      };
      tagBox.replaceChildren(
        h("h3", { style: "margin-top:0", text: "Tags dos posts" }),
        h("p", { class: "muted small", style: "margin:0 0 14px", text: "As tags organizam o feed. Ao publicar, você escolhe a tag do post. A equipe filtra o feed por tag e também busca dentro de uma tag." }),
        h("form", { class: "tag-new", onsubmit: add }, nameIn, sw(newColor, (c) => { newColor = c; drawTags(); }), h("button", { class: "btn btn-gold", type: "submit" }, M.icon("plus", 16), "Criar tag")),
        tags.length ? h("ul", { class: "tag-rows" }, tags.map((t) => {
          let name = t.name;
          const inp = h("input", { class: "input", type: "text", maxlength: "24", value: t.name, "aria-label": "Nome da tag " + t.name, oninput: (e) => { name = e.target.value; } });
          const patch = async (body, ok) => { try { const r = await M.api("PATCH", "admin/tags/" + t.id, body); tags = r.tags; M.setTags(tags); if (ok) M.toast(ok, "ok"); drawTags(); } catch (ex) { M.toast(ex.message, "err"); } };
          return h("li", { class: "tag-row" },
            M.tagChip(t, { link: false }),
            inp,
            h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => patch({ name }, "Nome salvo."), text: "Salvar nome" }),
            sw(t.color, (c) => patch({ color: c }, "Cor trocada.")),
            h("button", { class: "icon-btn", type: "button", "aria-label": "Apagar tag " + t.name, onclick: async () => {
              const ok = await M.confirm({ title: `Apagar a tag “${t.name}”?`, text: "Os posts continuam no feed, só perdem essa tag.", ok: "Apagar", danger: true });
              if (!ok) return;
              try { const r = await M.api("DELETE", "admin/tags/" + t.id); tags = r.tags; M.setTags(tags); M.toast("Tag apagada.", "ok"); drawTags(); } catch (ex) { M.toast(ex.message, "err"); }
            } }, M.icon("trash", 16)));
        })) : h("p", { class: "muted", style: "margin:16px 0 0", text: "Nenhuma tag ainda. Crie a primeira acima." }));
    }
    drawTags();

    /* moderação */
    const modBox = h("section", { class: "panel" });
    function drawMod() {
      const on = h("input", { type: "checkbox", id: "mod-on", checked: mod.on, onchange: (e) => { mod.on = e.target.checked; } });
      const words = h("textarea", { class: "textarea", id: "mod-words", rows: "4", maxlength: "4000", "aria-label": "Palavras bloqueadas", placeholder: "Uma palavra ou expressão por linha", style: "font-family:var(--body)" });
      words.value = mod.words.join("\n");
      const test = h("input", { class: "input", type: "text", placeholder: "Digite uma frase para testar o filtro", "aria-label": "Testar o filtro" });
      const out = h("p", { class: "small muted", style: "margin:6px 0 0", role: "status" });
      let t;
      test.addEventListener("input", () => { clearTimeout(t); t = setTimeout(async () => {
        if (!test.value.trim()) { out.textContent = ""; return; }
        try { const r = await M.post("admin/moderation/test", { text: test.value }); out.textContent = r.hit ? "Seria barrado." : "Passaria."; out.className = "small " + (r.hit ? "bad" : "good"); } catch {}
      }, 350); });
      modBox.replaceChildren(
        h("h3", { style: "margin-top:0", text: "Moderação de comentários" }),
        h("p", { class: "muted small", style: "margin:0 0 14px", text: "O filtro barra xingamentos e ofensas nos comentários e nos posts dos alunos. Ele entende troca de letra por número, letras repetidas e plural. Posts e comentários de gestores não passam pelo filtro." }),
        h("label", { class: "check-row", for: "mod-on" }, on, h("span", null, h("strong", { text: "Filtro ligado" }), h("span", { class: "muted small", style: "display:block", text: "Desligue só se precisar liberar tudo por um tempo." }))),
        h("div", { class: "field", style: "margin-top:16px" }, h("label", { for: "mod-words", text: "Palavras extras bloqueadas" }), words, h("span", { class: "hint", text: "Some aqui palavras do seu dia a dia que o filtro padrão não conhece. Mínimo de 3 letras." })),
        h("button", { class: "btn btn-gold", type: "button", onclick: async () => {
          try { const r = await M.api("PUT", "admin/moderation", { on: mod.on, words: words.value.split("\n") }); mod = r.moderation; M.toast("Moderação salva.", "ok"); drawMod(); } catch (ex) { M.toast(ex.message, "err"); }
        } }, "Salvar moderação"),
        h("div", { class: "field", style: "margin:18px 0 0" }, h("label", { text: "Testar o filtro" }), test, out));
    }
    drawMod();

    return h("div", null,
      h("div", { class: "page-head" }, h("h2", { text: "Tags e moderação" }), h("p", { text: "Organize os posts por tag e controle a linguagem dos comentários." })),
      tagBox, modBox);
  };

  /* ───── página: times e comunidades ───── */
  M.views.adminTeams = async function () {
    if (!M.can("usuarios")) return h("div", { class: "empty" }, h("h3", { text: "Área restrita" }), h("p", { text: "Somente administradores veem esta página." }));
    let d = await M.get("admin/teams");
    const box = h("section", { class: "panel" });
    let draft = { name: "", emoji: "", color: "purple", crest: "" };
    const COLORS = d.colors;
    const sw = (cur, on) => h("div", { class: "swatches", role: "radiogroup", "aria-label": "Cor" }, COLORS.map((c) => h("button", { type: "button", role: "radio", "aria-checked": String(c === cur), class: "swatch tag-" + c + (c === cur ? " on" : ""), "aria-label": COLOR_NAMES[c] || c, title: COLOR_NAMES[c] || c, onclick: () => on(c) })));
    /* envio do brasão: reduz a foto no navegador e manda para o Cloudinary da empresa, como a foto de perfil */
    const crestPicker = (cur, onPick) => {
      const input = h("input", { type: "file", accept: "image/png,image/jpeg,image/webp", hidden: true });
      const btn = h("button", { class: "btn btn-ghost btn-sm", type: "button", disabled: !d.uploads, title: d.uploads ? "" : "O envio de fotos ainda não foi configurado (Cloudinary).", onclick: () => input.click() }, M.icon("camera", 16), cur ? "Trocar brasão" : "Enviar brasão");
      input.addEventListener("change", async () => {
        const file = input.files[0]; input.value = "";
        if (!file) return;
        if (!file.type.startsWith("image/") || file.type === "image/svg+xml") { M.toast("Escolha uma imagem em PNG ou JPG.", "err"); return; }
        btn.disabled = true; btn.textContent = "Enviando…";
        try {
          const blob = await M.shrinkImage(file, { square: 256, limit: 1048576 });
          const j = await M.cloudUpload(new File([blob], "brasao.jpg", { type: "image/jpeg" }), { kind: "image" });
          onPick(j.secure_url);
        } catch (e) { M.toast(e.message, "err"); draw(); }
      });
      return h("span", { class: "row", style: "gap:6px" }, btn, input, cur ? h("button", { class: "linkish", type: "button", onclick: () => onPick(""), text: "Tirar brasão" }) : null);
    };
    async function create(e) {
      e.preventDefault();
      try { await M.post("admin/teams", draft); draft = { name: "", emoji: "", color: draft.color, crest: "" }; M.toast("Time criado.", "ok"); await refresh(); }
      catch (ex) { M.toast(ex.message, "err"); }
    }
    async function refresh() { d = await M.get("admin/teams"); M.setTeams(d.teams.map(({ members, ...t }) => t)); draw(); }
    function draw() {
      const nameIn = h("input", { class: "input", type: "text", maxlength: "30", value: draft.name, placeholder: "Nome do time (ex.: Time Roxo)", "aria-label": "Nome do novo time", oninput: (e) => { draft.name = e.target.value; } });
      const emoIn = h("input", { class: "input team-emoji", type: "text", maxlength: "8", value: draft.emoji, placeholder: "🏀", "aria-label": "Emoji ou bandeira", oninput: (e) => { draft.emoji = e.target.value; } });
      box.replaceChildren(
        h("h3", { style: "margin-top:0", text: "Times e comunidades" }),
        h("p", { class: "muted small", style: "margin:0 0 14px", text: "Cada time tem um nome e um brasão, uma bandeira em emoji ou uma foto. Ele vira uma tag nos posts. Você define o time de cada aluno na tela dele (ou ao aprovar o cadastro). Ao publicar, escolhe quem vê o post: todos ou só uma comunidade." }),
        h("form", { class: "team-new", onsubmit: create },
          h("div", { class: "team-new-row" }, M.teamBadge(draft, 40), nameIn, emoIn),
          h("div", { class: "team-new-row" }, sw(draft.color, (c) => { draft.color = c; draw(); }), crestPicker(draft.crest, (u) => { draft.crest = u; draw(); }),
            h("button", { class: "btn btn-gold", type: "submit", disabled: d.teams.length >= d.max }, M.icon("plus", 16), "Criar time"))),
        d.teams.length ? h("ul", { class: "tag-rows team-rows" }, d.teams.map((t) => {
          let name = t.name, emoji = t.emoji;
          const inp = h("input", { class: "input", type: "text", maxlength: "30", value: t.name, "aria-label": "Nome do time " + t.name, oninput: (e) => { name = e.target.value; } });
          const emo = h("input", { class: "input team-emoji", type: "text", maxlength: "8", value: t.emoji, "aria-label": "Emoji do time " + t.name, oninput: (e) => { emoji = e.target.value; } });
          const patch = async (body, ok) => { try { await M.api("PATCH", "admin/teams/" + t.id, body); if (ok) M.toast(ok, "ok"); await refresh(); } catch (ex) { M.toast(ex.message, "err"); } };
          return h("li", { class: "tag-row team-row" },
            M.teamChip(t, { link: false }),
            inp, emo,
            h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => patch({ name, emoji }, "Time salvo."), text: "Salvar" }),
            sw(t.color, (c) => patch({ color: c }, "Cor trocada.")),
            crestPicker(t.crest, (u) => patch({ crest: u }, u ? "Brasão salvo." : "Brasão removido.")),
            h("span", { class: "chip", text: `${t.members} ${t.members === 1 ? "pessoa" : "pessoas"}` }),
            h("button", { class: "icon-btn", type: "button", "aria-label": "Apagar time " + t.name, onclick: async () => {
              const ok = await M.confirm({ title: `Apagar o time “${t.name}”?`, text: "Só dá para apagar time sem pessoas e sem posts na comunidade.", ok: "Apagar", danger: true });
              if (!ok) return;
              try { await M.api("DELETE", "admin/teams/" + t.id); M.toast("Time apagado.", "ok"); await refresh(); } catch (ex) { M.toast(ex.message, "err"); }
            } }, M.icon("trash", 16)));
        })) : h("p", { class: "muted", style: "margin:16px 0 0", text: "Nenhum time ainda. Crie o primeiro acima." }));
    }
    draw();
    return h("div", null,
      h("div", { class: "page-head" }, h("h2", { text: "Times e comunidades" }), h("p", { text: "Defina os times, o brasão de cada um e quem vê os posts de cada comunidade." })),
      box);
  };
})();

/* Busca em todo o sistema: pessoas (nome e @), posts do feed e o conteúdo das trilhas (aulas, módulos e telas). */
(function () {
  const { h } = M;
  const SKIP = new Set(["t", "id", "tone", "tela", "kind", "src", "url", "spots", "answer", "options", "why", "dur", "telas"]);
  const SKIP_BLOCKS = new Set(["quiz", "sim", "find"]); // perguntas e simulações têm gabarito: ficam fora da busca

  const strip = (s) => String(s).replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&[a-z]+;/g, " ").replace(/\s+/g, " ").trim();
  function collect(v, out) {
    if (typeof v === "string") out.push(strip(v));
    else if (Array.isArray(v)) v.forEach((x) => collect(x, out));
    else if (v && typeof v === "object") for (const k of Object.keys(v)) if (!SKIP.has(k)) collect(v[k], out);
  }
  function blockText(b) {
    if (SKIP_BLOCKS.has(b.t)) return "";
    const out = [];
    if (b.t === "shot") {
      const t = (window.TELAS || {})[b.tela];
      if (t) { out.push(strip(t.alt || "")); (t.spots || []).forEach((s) => out.push(strip(s.label || ""), strip(s.what || ""))); }
      collect(b, out);
    } else collect(b, out);
    return out.join(". ");
  }

  let INDEX = null;
  function contentIndex() {
    if (INDEX) return INDEX;
    INDEX = [];
    for (const t of M.trails()) {
      INDEX.push({ kind: "trail", title: t.title, sub: "Trilha", href: M.trailHref(t), fields: [{ text: t.title, weight: 3 }, { text: `${t.tagline || ""} ${t.subtitle || ""}`, weight: 1.5 }], body: `${t.tagline || ""} ${t.subtitle || ""}`, trail: t });
      t.modules.forEach((m, mi) => {
        INDEX.push({ kind: "module", title: `Módulo ${m.n}: ${m.title}`, sub: t.title, href: "#/m/" + m.id, fields: [{ text: m.title, weight: 3 }, { text: `${m.tagline || ""} ${m.outcome || ""}`, weight: 1.5 }], body: `${m.tagline || ""} ${m.outcome || ""}`, trail: t, mi });
        for (const l of m.lessons) {
          const body = (l.blocks || []).map(blockText).filter(Boolean).join(" ");
          INDEX.push({ kind: "lesson", title: l.title, sub: `${t.title} · Módulo ${m.n}`, href: "#/l/" + l.id, fields: [{ text: l.title, weight: 3 }, { text: l.goal || "", weight: 2 }, { text: body, weight: 1 }], body: `${l.goal || ""}. ${body}`, trail: t, mi });
        }
      });
    }
    return INDEX;
  }

  function searchContent(q) {
    const rows = [];
    for (const e of contentIndex()) {
      const m = TextSearch.match(q, e.fields);
      if (m) rows.push({ e, s: m.score + (e.kind === "lesson" ? 0 : 0.3) });
    }
    rows.sort((a, b) => b.s - a.s);
    return rows.slice(0, 14).map((r) => r.e);
  }

  const KIND = { trail: "Trilha", module: "Módulo", lesson: "Aula" };

  const slug = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
  M.views.search = async function (q, tagIn = "") {
    const [, tags] = await Promise.all([M.refreshMe(), M.loadTags(true)]);
    let tagId = tagIn;
    const hm = q.match(/^#([\p{L}\p{N}_]+)$/u); // "#campanha" busca dentro da tag Campanha
    if (hm) { const t = tags.find((x) => slug(x.name) === slug(hm[1])); if (t) { tagId = t.id; q = ""; } }
    const top = document.querySelector(".top-search input");
    if (top) top.value = q;
    const input = h("input", { class: "input", type: "search", value: q, placeholder: "Nome, @, assunto ou palavra-chave", "aria-label": "Buscar", autofocus: true });
    const out = h("div", { class: "search-out" });
    let timer, seq = 0;
    const sel = tags.length ? h("select", { class: "select tag-select", "aria-label": "Buscar dentro de uma tag" }, h("option", { value: "", text: "Em todas as tags" }), tags.map((t) => h("option", { value: t.id, text: "Só na tag: " + t.name }))) : null;
    if (sel) { sel.value = tags.some((t) => t.id === tagId) ? tagId : ""; tagId = sel.value; sel.addEventListener("change", () => { tagId = sel.value; clearTimeout(timer); go(input.value.trim()); }); }
    const form = h("form", { class: "search-form", role: "search" }, input, sel, h("button", { class: "btn btn-gold", type: "submit" }, M.icon("search", 18), "Buscar"));
    form.addEventListener("submit", (e) => { e.preventDefault(); clearTimeout(timer); go(input.value.trim()); });
    input.addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(() => go(input.value.trim()), 450); });

    async function go(term) {
      const qs = new URLSearchParams(); if (term) qs.set("q", term); if (tagId) qs.set("tag", tagId);
      history.replaceState(null, "", "#/busca" + (qs.toString() ? "?" + qs : ""));
      if (top) top.value = term;
      const my = ++seq;
      if (!tagId && TextSearch.tokens(term).length === 0 && term.replace(/[^\p{L}\p{N}]/gu, "").length < 2) {
        out.replaceChildren(h("div", { class: "empty" }, h("h3", { text: "O que você procura?" }), h("p", { text: "Pesquise o nome de alguém, um @, um assunto de aula, uma palavra de um post ou qualquer tema que o time já documentou. A busca ignora acento e maiúscula, aceita plural e pequenos erros de digitação. Escolha uma tag para buscar só nos posts dela." })));
        return;
      }
      out.replaceChildren(M.loading("Buscando…"));
      let srv = { people: [], posts: [], forum: [] };
      let warn = null;
      try { srv = await M.get("search?" + new URLSearchParams({ q: term, ...(tagId ? { tag: tagId } : {}) })); } catch (e) { warn = e.message; }
      if (my !== seq) return;
      const content = tagId ? [] : searchContent(term);
      const tagNow = tags.find((t) => t.id === tagId);
      const sections = [];

      if (srv.people.length) sections.push(h("section", null, h("h3", { class: "s-h", text: "Pessoas" }),
        h("ul", { class: "s-people" }, srv.people.map((p) => h("li", null, h("a", { class: "s-person", href: M.profileHref(p) }, M.avatar(p, 42),
          h("span", null, h("strong", null, ...M.highlight(p.name, term)), h("span", { class: "muted small", style: "display:block" }, p.nickname ? "@" + p.nickname : "", p.role === "admin" ? " · Gestor" : "")))))) ));

      if ((srv.forum || []).length) sections.push(h("section", null, h("h3", { class: "s-h", text: "Fórum" }),
        h("ul", { class: "s-list" }, srv.forum.map((f) => h("li", null, h("a", { class: "s-item", href: "#/forum/" + f.id },
          h("div", { class: "row", style: "gap:8px" }, h("span", { class: "chip chip-xs chip-gold", text: "Fórum" }), h("strong", null, ...M.highlight(f.title, term)), f.category ? h("span", { class: "chip chip-xs", text: f.category }) : null),
          h("p", { class: "s-snip" }, ...M.highlight(f.snippet, term)))))) ));

      if (srv.posts.length) sections.push(h("section", null, h("h3", { class: "s-h", text: tagNow ? `Posts com a tag ${tagNow.name}` : "Posts do Feed" }),
        h("ul", { class: "s-list" }, srv.posts.map((p) => h("li", null, h("a", { class: "s-item", href: "#/post/" + p.id },
          h("div", { class: "row", style: "gap:8px" }, M.avatar(p.author, 26), h("strong", { class: "small", text: p.author.name }), h("span", { class: "muted small", text: "· " + M.timeAgo(p.publishedAt) }),
            p.media.length ? h("span", { class: "chip chip-xs", text: p.media.includes("video") ? "Vídeo" : p.media.includes("image") ? "Imagem" : "Anexo" }) : null,
            !tagNow ? M.tagChip(p.tag, { link: false }) : null),
          h("p", { class: "s-snip" }, ...M.highlight(p.snippet, term)))))) ));

      if (content.length) sections.push(h("section", null, h("h3", { class: "s-h", text: "Trilhas e aulas" }),
        h("ul", { class: "s-list" }, content.map((e) => {
          const locked = e.kind !== "trail" && !M.isAdmin() && e.mi != null && M.tp(e.trail)?.modules[e.mi] && !M.tp(e.trail).modules[e.mi].unlocked;
          return h("li", null, h("a", { class: "s-item", href: e.href },
            h("div", { class: "row", style: "gap:8px" }, h("span", { class: "chip chip-xs " + (e.kind === "lesson" ? "" : "chip-gold"), text: KIND[e.kind] }), h("strong", null, ...M.highlight(e.title, term)), locked ? h("span", { class: "chip chip-xs", text: "Bloqueada por enquanto" }) : null),
            h("span", { class: "muted small", text: e.sub }),
            e.kind === "lesson" || e.kind === "module" ? h("p", { class: "s-snip" }, ...M.highlight(TextSearch.snippet(e.body, term), term)) : null));
        }))));

      out.replaceChildren(
        warn ? h("div", { class: "form-error", text: "Não foi possível buscar pessoas e posts agora (" + warn + "). Mostrando só trilhas e aulas." }) : null,
        sections.length ? sections : h("div", { class: "empty" }, h("h3", { text: tagNow ? (term ? `Nada encontrado para “${term}” na tag ${tagNow.name}` : `Nenhum post com a tag ${tagNow.name}`) : `Nada encontrado para “${term}”` }), h("p", { text: "Tente outra palavra, o início de um nome ou um termo parecido." })));
    }
    go(q);
    return h("div", { class: "feed" }, h("div", { class: "page-head" }, h("h2", { text: "Busca" }), h("p", { text: "Pessoas, posts do Feed, conteúdo das trilhas e materiais do time, tudo de uma vez. Traz palavras parecidas, não só iguais. Escolha uma tag para buscar só nos posts dela." })), form, out);
  };
})();

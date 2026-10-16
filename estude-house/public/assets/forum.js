/* Fórum dos gestores: publicações simples (título, categoria e texto).
   O aluno não vê o fórum no menu: encontra as publicações pela busca e abre para ler. */
(function () {
  const { h } = M;
  const fmt = (ts) => new Date(ts).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  /* ───── ler uma publicação (qualquer pessoa logada, vindo da busca) ───── */
  M.views.forumPost = async function (id) {
    await M.refreshMe();
    let d;
    try { d = await M.get("forum/" + id); } catch (e) {
      return h("div", { class: "empty" }, h("h3", { text: "Publicação não encontrada" }), h("p", { text: "Ela pode ter sido apagada pela administração." }), h("a", { class: "btn btn-gold", href: "#/busca" }, "Voltar à busca"));
    }
    const p = d.post;
    const body = h("div", { class: "forum-body" }, p.text.split(/\n{2,}/).map((para) => h("p", null, M.rich(para))));
    const node = h("article", { class: "feed forum-read" },
      h("a", { class: "small", href: "#/busca", onclick: (e) => { if (history.length > 1) { e.preventDefault(); history.back(); } } }, "← Voltar à busca"),
      h("header", { class: "page-head", style: "margin-top:8px" },
        p.category ? h("span", { class: "chip chip-gold", style: "justify-self:start", text: p.category }) : null,
        h("h2", { text: p.title }),
        h("div", { class: "row small muted", style: "gap:10px" }, p.author ? M.avatar(p.author, 28) : null,
          h("span", { text: `${p.author?.name || "Gestor"} · ${fmt(p.createdAt)}${p.updatedAt ? " · atualizado em " + fmt(p.updatedAt) : ""}` }))),
      h("section", { class: "panel" }, body),
      d.canEdit ? h("div", { class: "row" }, h("a", { class: "btn btn-ghost btn-sm", href: "#/admin/forum?e=" + p.id }, "Editar publicação")) : null);
    node._crumbs = [{ text: "Busca", href: "#/busca" }, { text: "Fórum" }, { text: p.title.length > 28 ? p.title.slice(0, 26) + "…" : p.title }];
    return node;
  };

  /* ───── gestão do fórum (só gestor) ───── */
  M.views.forumAdmin = async function (editId) {
    await M.refreshMe();
    let cats = [], editing = null, next = null;
    const list = h("div", { class: "forum-list" });
    const more = h("div", { class: "row", style: "justify-content:center;margin:16px 0" });
    const title = h("input", { class: "input", type: "text", maxlength: "120", placeholder: "Título da publicação", "aria-label": "Título" });
    const cat = h("input", { class: "input", type: "text", maxlength: "30", placeholder: "Categoria (opcional). Ex.: Shopee", "aria-label": "Categoria", list: "forum-cats" });
    const dl = h("datalist", { id: "forum-cats" });
    const text = h("textarea", { class: "textarea", rows: "10", maxlength: "8000", placeholder: "Escreva ou cole o conteúdo. Linha em branco separa parágrafos. Links e @pessoas ficam clicáveis.", "aria-label": "Texto da publicação" });
    const count = h("span", { class: "muted small" });
    const send = h("button", { class: "btn btn-gold", type: "button", text: "Publicar no fórum" });
    const cancel = h("button", { class: "btn btn-ghost", type: "button", hidden: true, text: "Cancelar edição" });
    const err = h("div", { "aria-live": "polite" });
    const formHead = h("h3", { text: "Nova publicação" });

    function reset() {
      editing = null; title.value = ""; cat.value = ""; text.value = "";
      formHead.textContent = "Nova publicação"; send.textContent = "Publicar no fórum"; cancel.hidden = true; count.textContent = ""; err.replaceChildren();
    }
    function edit(p) {
      editing = p; title.value = p.title; cat.value = p.category || ""; text.value = p.text;
      formHead.textContent = "Editando publicação"; send.textContent = "Salvar alterações"; cancel.hidden = false; count.textContent = `${text.value.length}/8000`;
      window.scrollTo({ top: 0, behavior: "smooth" }); title.focus();
    }
    cancel.addEventListener("click", reset);
    text.addEventListener("input", () => { count.textContent = text.value.length > 6000 ? `${text.value.length}/8000` : ""; });

    send.addEventListener("click", async () => {
      err.replaceChildren(); send.disabled = true;
      try {
        const body = { title: title.value, category: cat.value, text: text.value };
        if (editing) await M.api("PATCH", "forum/" + editing.id, body); else await M.post("forum", body);
        M.toast(editing ? "Publicação atualizada." : "Publicado no fórum. O time encontra pela busca.", "ok");
        reset(); await load(true);
      } catch (e) { err.replaceChildren(h("div", { class: "form-error", text: e.message })); }
      send.disabled = false;
    });

    function item(p) {
      const snip = p.text.replace(/\s+/g, " ").slice(0, 180);
      return h("article", { class: "panel forum-item" },
        h("div", { class: "row row-between", style: "align-items:flex-start;gap:12px" },
          h("div", { style: "min-width:0" },
            h("div", { class: "row", style: "gap:8px" }, p.category ? h("span", { class: "chip chip-gold chip-xs", text: p.category }) : null, h("span", { class: "muted small", text: fmt(p.createdAt) + (p.updatedAt ? " · editado" : "") })),
            h("a", { class: "forum-title", href: "#/forum/" + p.id, text: p.title })),
          h("div", { class: "row", style: "gap:4px;flex:none" },
            h("button", { class: "icon-btn", type: "button", "aria-label": "Editar " + p.title, onclick: () => edit(p) }, M.icon("file", 18)),
            h("button", { class: "icon-btn", type: "button", "aria-label": "Apagar " + p.title, onclick: async () => {
              const ok = await M.confirm({ title: "Apagar esta publicação?", text: "Ela some do fórum e da busca de todo mundo. Não tem volta.", ok: "Apagar", danger: true });
              if (!ok) return;
              try { await M.api("DELETE", "forum/" + p.id); M.toast("Publicação apagada.", "ok"); if (editing?.id === p.id) reset(); load(true); } catch (e) { M.toast(e.message, "err"); }
            } }, M.icon("trash", 18)))),
        h("p", { class: "muted small forum-snip", text: snip + (p.text.length > 180 ? "…" : "") }));
    }

    async function load(first) {
      if (first) { next = null; list.replaceChildren(M.loading()); }
      try {
        const d = await M.get("forum" + (next ? "?after=" + encodeURIComponent(next) : ""));
        cats = d.categories; dl.replaceChildren(...cats.map((c) => h("option", { value: c })));
        if (first) list.replaceChildren();
        if (first && !d.items.length) list.append(h("div", { class: "empty" }, h("h3", { text: "O fórum ainda está vazio" }), h("p", { text: "Publique a primeira lista útil acima. Ela aparece para o time quando buscarem o assunto." })));
        d.items.forEach((p) => list.append(item(p)));
        next = d.next;
        more.replaceChildren(next ? h("button", { class: "btn btn-ghost", type: "button", onclick: () => load(false), text: "Carregar mais" }) : null);
        if (first && editId) { try { const r = await M.get("forum/" + editId); edit(r.post); } catch {} editId = null; }
      } catch (e) { list.replaceChildren(h("div", { class: "form-error", text: e.message })); }
    }
    load(true);

    return h("div", { class: "feed" },
      h("div", { class: "page-head" }, h("h2", { text: "Fórum dos gestores" }),
        h("p", { text: "Publique listas úteis, processos e respostas prontas como uma publicação simples. O time não vê o fórum no menu: ao buscar um assunto na Busca, as publicações aparecem e dá para abrir e ler." })),
      h("section", { class: "panel forum-form" }, formHead,
        h("div", { class: "field" }, title), h("div", { class: "field" }, cat, dl), h("div", { class: "field" }, text),
        err, h("div", { class: "row" }, send, cancel, h("span", { class: "spacer" }), count)),
      h("h3", { style: "margin:26px 0 12px", text: "Publicações" }), list, more);
  };
})();

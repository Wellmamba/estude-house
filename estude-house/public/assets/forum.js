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
  async function forumPubs(editId) {
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
    const importBtn = h("button", { class: "btn btn-ghost", type: "button", text: "Importar manuais para o fórum" });
    importBtn.addEventListener("click", async () => {
      importBtn.disabled = true;
      try {
        const r = await M.post("forum/importar-manuais", {});
        M.toast(r.created ? `${r.created} publicações criadas.` : "Tudo já estava importado.", "ok");
        await load(true);
      } catch (e) { M.toast(e.message, "err"); }
      importBtn.disabled = false;
    });
    load(true);

    return h("div", { class: "feed" },
      h("div", { class: "page-head" }, h("h2", { text: "Fórum dos gestores" }),
        h("p", { text: "Publique listas úteis, processos e respostas prontas como uma publicação simples. O time não vê o fórum no menu: ao buscar um assunto na Busca, as publicações aparecem e dá para abrir e ler." })),
      h("section", { class: "panel forum-form" }, formHead,
        h("div", { class: "field" }, title), h("div", { class: "field" }, cat, dl), h("div", { class: "field" }, text),
        err, h("div", { class: "row" }, send, cancel, h("span", { class: "spacer" }), count)),
      h("section", { class: "panel forum-import" },
        h("h3", { text: "Manual de operação do suporte" }),
        h("p", { class: "muted small", text: "Cria de uma vez uma publicação por categoria do manual (Amazon, Mercado Livre, Shopee, TikTok Shop, Bling e Upseller): 90 publicações com os passos básicos e as fontes oficiais. Dá para repetir sem duplicar, e depois editar ou apagar cada uma." }),
        h("div", { class: "row" }, importBtn)),
      h("h3", { style: "margin:26px 0 12px", text: "Publicações" }), list, more);
  }

  const TYPES = { duvida: "Dúvida", sugestao: "Sugestão" };
  const STATUS = { pending: ["Aguardando análise", "chip-warn"], approved: ["Aprovada", "chip-good"], rejected: ["Reprovada", "chip-bad"] };
  const paras = (t) => t.split(/\n{2,}/).map((x) => h("p", { style: "margin:0 0 8px" }, M.rich(x)));
  const syncBadge = (n) => { M.session.pendingForum = n; const b = document.querySelector('[data-key="admin-forum"] .nav-badge'); if (b) { b.hidden = !n; b.textContent = String(n || ""); } };

  /* ───── aluno: envia dúvidas e sugestões e acompanha a resposta ───── */
  M.views.forumEnvios = async function () {
    await M.refreshMe();
    let editing = null, type = "duvida";
    const typeBox = h("div", { class: "seg", role: "radiogroup", "aria-label": "Tipo do envio" });
    const title = h("input", { class: "input", type: "text", maxlength: "120", placeholder: "Resuma em uma frase. Ex.: Como emitir NF de devolução no Bling?", "aria-label": "Título" });
    const text = h("textarea", { class: "textarea", rows: "6", maxlength: "2000", placeholder: "Conte com detalhes: o que aconteceu, o que você já tentou e o que precisa. Links e @pessoas ficam clicáveis.", "aria-label": "Texto" });
    const count = h("span", { class: "muted small" });
    const send = h("button", { class: "btn btn-gold", type: "button" }, M.icon("send", 18), " Enviar para análise");
    const cancel = h("button", { class: "btn btn-ghost", type: "button", hidden: true, text: "Cancelar edição" });
    const err = h("div", { "aria-live": "polite" });
    const head = h("h3", { text: "Nova dúvida ou sugestão" });
    const list = h("div", { class: "forum-list" });
    const limit = h("p", { class: "muted small", style: "margin:0" });

    function drawType() {
      typeBox.replaceChildren(...Object.entries(TYPES).map(([k, v]) => h("button", { class: "seg-btn", type: "button", role: "radio", "aria-checked": String(type === k), onclick: () => { type = k; drawType(); } }, v)));
    }
    drawType();
    text.addEventListener("input", () => { count.textContent = text.value.length > 1500 ? `${text.value.length}/2000` : ""; });
    function reset() {
      editing = null; title.value = ""; text.value = ""; type = "duvida"; drawType();
      head.textContent = "Nova dúvida ou sugestão"; send.lastChild.textContent = " Enviar para análise"; cancel.hidden = true; count.textContent = ""; err.replaceChildren();
    }
    function edit(it) {
      editing = it; title.value = it.title; text.value = it.text; type = it.type; drawType();
      head.textContent = it.status === "rejected" ? "Ajustar e reenviar" : "Editando o envio"; send.lastChild.textContent = it.status === "rejected" ? " Reenviar para análise" : " Salvar alterações"; cancel.hidden = false;
      window.scrollTo({ top: 0, behavior: "smooth" }); title.focus();
    }
    cancel.addEventListener("click", reset);
    send.addEventListener("click", async () => {
      err.replaceChildren(); send.disabled = true;
      try {
        const body = { type, title: title.value, text: text.value };
        if (editing) await M.api("PATCH", "forum/envios/" + editing.id, body); else await M.post("forum/envios", body);
        M.toast(editing ? "Envio atualizado e na fila de análise." : "Enviado! O gestor vai analisar. Você recebe o aviso no sino.", "ok");
        reset(); await load();
      } catch (e) { err.replaceChildren(h("div", { class: "form-error", text: e.message })); }
      send.disabled = false;
    });

    function card(it) {
      const [stText, stCls] = STATUS[it.status];
      return h("article", { class: "panel forum-item sub-item sub-" + it.status },
        h("div", { class: "row", style: "gap:8px;flex-wrap:wrap" }, h("span", { class: "chip chip-xs", text: TYPES[it.type] }), h("span", { class: "chip chip-xs " + stCls, text: stText }), h("span", { class: "muted small", text: M.timeAgo(it.createdAt) })),
        h("strong", { class: "forum-title", style: "display:block;margin:6px 0 4px", text: it.title }),
        h("div", { class: "muted small forum-snip" }, paras(it.text)),
        it.status === "rejected" ? h("div", { class: "sub-reason" }, h("strong", { text: "Motivo: " }), it.reason || "O gestor não detalhou o motivo. Reescreva com mais contexto e reenvie.") : null,
        h("div", { class: "row", style: "margin-top:10px;gap:8px" },
          it.status === "approved" && it.postId ? h("a", { class: "btn btn-gold btn-sm", href: "#/forum/" + it.postId }, "Ver no fórum oficial") : null,
          it.status !== "approved" ? h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => edit(it), text: it.status === "rejected" ? "Ajustar e reenviar" : "Editar" }) : null,
          it.status !== "approved" ? h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: async () => {
            if (!(await M.confirm({ title: "Apagar este envio?", text: "Ele sai da sua lista e da fila do gestor.", ok: "Apagar", danger: true }))) return;
            try { await M.api("DELETE", "forum/envios/" + it.id); if (editing?.id === it.id) reset(); await load(); } catch (e) { M.toast(e.message, "err"); }
          }, text: "Apagar" }) : null));
    }
    async function load() {
      try {
        const d = await M.get("forum/envios");
        limit.textContent = `${d.pending} de ${d.max} envios aguardando análise.`;
        list.replaceChildren(...(d.items.length ? d.items.map(card) : [h("div", { class: "empty" }, h("h3", { text: "Você ainda não enviou nada" }), h("p", { text: "Não achou a resposta na busca? Mande a sua dúvida aqui. Se for aprovada, ela entra no fórum oficial e ajuda o time todo." }))]));
      } catch (e) { list.replaceChildren(h("div", { class: "form-error", text: e.message })); }
    }
    load();
    return h("div", { class: "feed" },
      h("div", { class: "page-head" }, h("h2", { text: "Dúvidas e sugestões" }),
        h("p", { text: "Mande uma dúvida ou uma sugestão. Um gestor analisa: se for aprovada, vira uma publicação do fórum oficial (que aparece na busca de todo mundo). Se não for, ela volta aqui como reprovada, com o motivo, e você pode ajustar e reenviar." })),
      h("section", { class: "panel forum-form" }, head,
        h("div", { class: "field" }, typeBox), h("div", { class: "field" }, title), h("div", { class: "field" }, text),
        err, h("div", { class: "row" }, send, cancel, h("span", { class: "spacer" }), count)),
      h("div", { class: "row row-between", style: "margin:22px 0 12px" }, h("h3", { style: "margin:0", text: "Meus envios" }), limit), list);
  };

  /* ───── gestor: fila de análise ───── */
  function reviewPanel(onChange) {
    let view = "pending";
    const seg = h("div", { class: "seg", role: "tablist", "aria-label": "Filtro" });
    const list = h("div", { class: "forum-list" });
    function drawSeg(n) {
      seg.replaceChildren(
        h("button", { class: "seg-btn", type: "button", role: "tab", "aria-selected": String(view === "pending"), onclick: () => { view = "pending"; load(); } }, "Para analisar" + (n ? ` (${n})` : "")),
        h("button", { class: "seg-btn", type: "button", role: "tab", "aria-selected": String(view === "done"), onclick: () => { view = "done"; load(); } }, "Já respondidos"));
    }
    drawSeg(M.session.pendingForum || 0);

    function approve(it) {
      M.modal((close) => {
        const t = h("input", { class: "input", type: "text", maxlength: "120", value: it.title, "aria-label": "Título" });
        const c = h("input", { class: "input", type: "text", maxlength: "30", value: TYPES[it.type], "aria-label": "Categoria" });
        const x = h("textarea", { class: "textarea", rows: "8", maxlength: "8000", "aria-label": "Texto" }); x.value = it.text;
        const e = h("div"); const ok = h("button", { class: "btn btn-gold", type: "button", text: "Aprovar e publicar no fórum" });
        ok.addEventListener("click", async () => {
          ok.disabled = true; e.replaceChildren();
          try { await M.post("forum/envios/" + it.id + "/aprovar", { title: t.value, text: x.value, category: c.value }); close(); M.toast("Aprovado. Já está no fórum oficial e na busca.", "ok"); onChange(); load(); }
          catch (ex) { e.replaceChildren(h("div", { class: "form-error", text: ex.message })); ok.disabled = false; }
        });
        return [h("h3", { text: "Aprovar e publicar" }),
          h("p", { class: "muted small", text: "Dá para ajustar o título, a categoria e o texto antes de publicar. Para responder uma dúvida, escreva a resposta no texto." }),
          h("div", { class: "field" }, h("label", { text: "Título" }), t), h("div", { class: "field" }, h("label", { text: "Categoria" }), c), h("div", { class: "field" }, h("label", { text: "Texto" }), x), e,
          h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(), text: "Cancelar" }), ok)];
      });
    }
    function reject(it) {
      M.modal((close) => {
        const r = h("textarea", { class: "textarea", rows: "3", maxlength: "300", placeholder: "Ex.: Já existe uma publicação sobre isso no fórum. Busque por “certificado digital”.", "aria-label": "Motivo" });
        const e = h("div"); const ok = h("button", { class: "btn btn-danger", type: "button", text: "Reprovar" });
        ok.addEventListener("click", async () => {
          ok.disabled = true; e.replaceChildren();
          try { await M.post("forum/envios/" + it.id + "/reprovar", { reason: r.value }); close(); M.toast("Reprovado. O aluno recebe o aviso com o motivo.", "ok"); onChange(); load(); }
          catch (ex) { e.replaceChildren(h("div", { class: "form-error", text: ex.message })); ok.disabled = false; }
        });
        return [h("h3", { text: "Reprovar envio" }), h("p", { class: "muted small", text: "O envio volta para o aluno como reprovado. Explique o motivo para ele poder ajustar e reenviar." }),
          h("div", { class: "field" }, h("label", { text: "Motivo" }), r), e,
          h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(), text: "Cancelar" }), ok)];
      });
    }
    function card(it) {
      const [stText, stCls] = STATUS[it.status];
      return h("article", { class: "panel forum-item sub-item sub-" + it.status },
        h("div", { class: "row", style: "gap:8px;flex-wrap:wrap" }, M.avatar(it.author, 26), h("strong", { text: it.author.name }), h("span", { class: "muted small", text: it.author.nickname ? "@" + it.author.nickname : "" }),
          h("span", { class: "chip chip-xs", text: TYPES[it.type] }), it.status !== "pending" ? h("span", { class: "chip chip-xs " + stCls, text: stText }) : null, h("span", { class: "muted small", text: M.timeAgo(it.createdAt) })),
        h("strong", { class: "forum-title", style: "display:block;margin:8px 0 4px", text: it.title }),
        h("div", { class: "muted small" }, paras(it.text)),
        it.status === "rejected" && it.reason ? h("div", { class: "sub-reason" }, h("strong", { text: "Motivo: " }), it.reason) : null,
        it.status === "pending" ? h("div", { class: "row", style: "margin-top:10px;gap:8px" },
          h("button", { class: "btn btn-gold btn-sm", type: "button", onclick: () => approve(it), text: "Aprovar" }),
          h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => reject(it), text: "Reprovar" })) : null,
        it.status === "approved" && it.postId ? h("div", { class: "row", style: "margin-top:10px" }, h("a", { class: "btn btn-ghost btn-sm", href: "#/forum/" + it.postId }, "Ver publicação")) : null);
    }
    async function load() {
      list.replaceChildren(M.loading());
      try {
        const d = await M.get("forum/envios?status=" + view);
        syncBadge(d.pending); drawSeg(d.pending);
        list.replaceChildren(...(d.items.length ? d.items.map(card) : [h("div", { class: "empty" }, h("h3", { text: view === "pending" ? "Nada para analisar" : "Nenhum envio respondido ainda" }), h("p", { text: view === "pending" ? "Quando um aluno mandar uma dúvida ou sugestão, ela aparece aqui." : "Os envios aprovados e reprovados aparecem aqui." }))]));
      } catch (e) { list.replaceChildren(h("div", { class: "form-error", text: e.message })); }
    }
    load();
    return h("div", null, seg, h("div", { style: "height:14px" }), list);
  }

  /* ───── gestão do fórum: publicações + fila de dúvidas e sugestões ───── */
  M.views.forumAdmin = async function (editId, tab) {
    await M.refreshMe();
    const n = M.session.pendingForum || 0;
    const pubs = await forumPubs(editId);
    const rev = reviewPanel(() => {});
    let cur = tab === "envios" && !editId ? "envios" : "pubs";
    const tabs = h("div", { class: "seg", role: "tablist", "aria-label": "Seções do fórum", style: "margin-bottom:16px" });
    function draw() {
      tabs.replaceChildren(
        h("button", { class: "seg-btn", type: "button", role: "tab", "aria-selected": String(cur === "pubs"), onclick: () => { cur = "pubs"; draw(); } }, "Publicações"),
        h("button", { class: "seg-btn", type: "button", role: "tab", "aria-selected": String(cur === "envios"), onclick: () => { cur = "envios"; draw(); } }, "Dúvidas e sugestões dos alunos", n ? h("span", { class: "nav-badge", style: "margin-left:6px;position:static;display:inline-block" }, String(n)) : null));
      pubs.hidden = cur !== "pubs"; rev.hidden = cur !== "envios";
    }
    draw();
    return h("div", null, tabs, pubs, rev);
  };
})();

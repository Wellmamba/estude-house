/* Provas avulsas: o gestor cria uma prova sem trilha e escolhe quem faz; o aluno faz pelo "Provas" na tela de Trilhas.
   Aqui ficam: lista e editor do gestor, resultados por aluno e a tela da prova do aluno. A correção acontece no servidor. */
(function () {
  const { h } = M;
  const letters = "ABCDEF";
  const STATUS = { rascunho: ["chip", "Rascunho"], publicada: ["chip chip-good", "Publicada"], encerrada: ["chip chip-warn", "Encerrada"] };

  /* ───── dados para a tela de Trilhas ───── */
  M.loadProvas = async function () {
    try { return (await M.get("provas")).items || []; } catch { return []; }
  };

  /* abas do topo da gestão: Trilhas | Provas avulsas */
  M.gestaoTabs = (on) => h("div", { class: "seg-tabs", role: "tablist", "aria-label": "Gestão" },
    h("a", { class: "seg-tab", role: "tab", "aria-selected": String(on === "trilhas"), href: "#/admin/trilhas", text: "Trilhas" }),
    h("a", { class: "seg-tab", role: "tab", "aria-selected": String(on === "provas"), href: "#/admin/provas", text: "Provas avulsas" }));

  /* ───────────────────────── gestor: lista ───────────────────────── */
  M.views.adminProvas = async function () {
    const d = await M.get("admin/provas");
    const list = h("div", { class: "tm-grid" });
    const draw = (rows) => {
      list.replaceChildren(...(rows.length ? rows.map((t) => {
        const st = STATUS[t.status];
        const aud = t.audience === "assigned" ? `Só alunos escolhidos (${t.assigned} de ${t.students})` : `Todos os alunos (${t.students})`;
        const card = h("article", { class: "tm-card" + (t.status === "encerrada" ? " is-off" : "") },
          h("div", { class: "row row-between" },
            h("div", { class: "row" }, h("span", { class: "chip chip-tag", text: t.tag || "Prova" }), h("span", { class: st[0], text: st[1] }))),
          h("h3", { text: t.title }),
          h("div", { class: "row tm-aud" }, M.icon("users", 16), h("span", { class: "small", text: aud }),
            h("button", { class: "linkish small", type: "button", onclick: () => M.audienceDialog({ id: t.id, title: t.title, noun: "prova", audienceUrl: `admin/provas/${t.id}/audience` }, (r) => { t.audience = r.mode; t.assigned = r.assigned; draw(rows); }), text: "Quem vê" })),
          h("p", { class: "muted small", text: `${t.questions} ${t.questions === 1 ? "questão" : "questões"} · nota mínima ${t.passPct}% · ${t.started} ${t.started === 1 ? "aluno começou" : "alunos começaram"} · ${t.approved} ${t.approved === 1 ? "aprovado" : "aprovados"}` }),
          h("div", { class: "tm-actions" },
            h("a", { class: "btn btn-gold btn-sm", href: "#/admin/provas/" + t.id }, "Editar"),
            h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => results(t), text: "Resultados" }),
            t.status === "publicada"
              ? h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => setStatus(t, "encerrada"), text: "Encerrar" })
              : h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => setStatus(t, "publicada"), text: t.status === "encerrada" ? "Reabrir" : "Publicar" }),
            t.status === "publicada" ? h("a", { class: "btn btn-ghost btn-sm", href: "#/prova/" + t.id }, "Ver como aluno") : null,
            h("button", { class: "btn btn-ghost btn-sm tm-del", type: "button", onclick: async () => {
              const ok = await M.confirm({ title: "Excluir a prova?", text: `<b>${M.esc(t.title)}</b> será apagada para sempre, com as questões e os resultados dos alunos.`, ok: "Excluir", danger: true });
              if (!ok) return;
              try { await M.api("DELETE", "admin/provas/" + t.id); M.toast("Prova excluída.", "ok"); rows.splice(rows.indexOf(t), 1); draw(rows); } catch (e) { M.toast(e.message, "err"); }
            }, text: "Excluir" })));
        return card;
      }) : [h("div", { class: "empty", style: "grid-column:1/-1" }, h("h3", { text: "Nenhuma prova avulsa ainda" }), h("p", { text: "Crie uma prova com as suas questões e escolha quais alunos fazem. Ela aparece para eles na tela de Trilhas." }))]));
    };
    async function setStatus(t, status) {
      try {
        await M.post(`admin/provas/${t.id}/status`, { status });
        t.status = status;
        M.toast(status === "publicada" ? "Prova publicada. Os alunos escolhidos já veem e recebem um aviso." : "Prova encerrada. Some para os alunos; os resultados ficam guardados.", "ok");
        draw(d.provas);
      } catch (e) { M.toast(e.message, "err"); }
    }
    draw(d.provas);
    return h("div", null,
      h("div", { class: "page-head" },
        h("h2", { text: "Gestão de trilhas" }),
        h("p", { text: "Uma prova avulsa não faz parte de trilha nenhuma: você escreve as questões, escolhe quais alunos fazem e acompanha o resultado de cada um." })),
      M.gestaoTabs("provas"),
      h("div", { class: "row", style: "margin:18px 0;gap:10px;flex-wrap:wrap" },
        h("button", { class: "btn btn-gold", type: "button", onclick: createDialog }, M.icon("plus", 18), " Criar nova prova")),
      list);
  };

  async function createDialog() {
    const name = await M.modal((close) => {
      const inp = h("input", { class: "input", type: "text", maxlength: "80", placeholder: "Ex.: Prova de reputação no Mercado Livre", "aria-label": "Nome da prova" });
      const go = () => { const v = inp.value.trim(); if (v.length < 3) { M.toast("Dê um nome com pelo menos 3 letras.", "err"); return; } close(v); };
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); go(); } });
      setTimeout(() => inp.focus(), 50);
      return [h("h3", { text: "Criar nova prova" }),
        h("p", { class: "muted", text: "Você escreve as questões, escolhe quem faz e publica. Nada aparece para os alunos até você publicar." }),
        h("div", { class: "field" }, h("label", { text: "Nome da prova" }), inp),
        h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(null), text: "Cancelar" }), h("button", { class: "btn btn-gold", type: "button", onclick: go, text: "Criar e montar" }))];
    });
    if (!name) return;
    try { const r = await M.post("admin/provas", { title: name }); location.hash = "#/admin/provas/" + r.prova.id; } catch (e) { M.toast(e.message, "err"); }
  }

  async function results(t) {
    let d;
    try { d = await M.get(`admin/provas/${t.id}/results`); } catch (e) { M.toast(e.message, "err"); return; }
    const CH = { approved: ["chip chip-good", "Aprovado"], pending: ["chip chip-warn", "Fazendo / reprovado"], new: ["chip", "Não começou"] };
    M.modal((close) => [
      h("h3", { text: "Resultados: " + d.prova.title }),
      h("p", { class: "muted small", style: "margin:0 0 12px", text: `Nota mínima ${d.prova.passPct}%. Só aparecem os alunos que podem fazer esta prova.` }),
      d.rows.length ? h("div", { class: "tbl-wrap", style: "max-height:56vh;overflow:auto" },
        h("table", { class: "tbl" },
          h("thead", null, h("tr", null, ["Aluno", "Situação", "Tentativas", "Melhor nota", "Última nota", "Quando"].map((x) => h("th", { text: x })))),
          h("tbody", null, d.rows.map((r) => h("tr", null,
            h("td", null, h("strong", { text: r.name }), h("div", { class: "muted small", text: (r.nickname ? "@" + r.nickname + " · " : "") + r.email })),
            h("td", null, h("span", { class: CH[r.status][0], text: CH[r.status][1] })),
            h("td", { text: String(r.attempts) }),
            h("td", { text: r.bestPct != null && r.attempts ? M.fmtPct(r.bestPct) + "%" : "—" }),
            h("td", { text: r.lastPct != null ? M.fmtPct(r.lastPct) + "%" : "—" }),
            h("td", { text: r.lastAt ? M.fmtDateTime(r.lastAt) : "—" })))))) : h("p", { class: "muted", text: "Ninguém tem acesso a esta prova ainda. Use \"Quem vê\" para escolher os alunos." }),
      h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-gold", type: "button", onclick: () => close(), text: "Fechar" }))]);
  }

  /* ───────────────────────── gestor: editor ───────────────────────── */

  /* colar várias questões de uma vez:
       1. Pergunta?
       a) alternativa
       b) alternativa certa *
       Explicação: texto           (ou "Gabarito: B")
     Uma linha em branco separa as questões. */
  M.parseQuestions = function (text) {
    const out = [];
    let cur = null;
    const flush = () => { if (cur && cur.q && cur.options.length >= 2) out.push(cur); cur = null; };
    for (const raw of String(text || "").replace(/\r/g, "").split("\n")) {
      const ln = raw.trim();
      if (!ln) { if (cur && cur.options.length) flush(); continue; }
      const why = ln.match(/^(?:explica[cç][aã]o|por que|coment[aá]rio)\s*:\s*(.+)$/i);
      const key = ln.match(/^gabarito\s*:\s*([a-f](?:\s*[,;e]\s*[a-f])*)\s*\.?$/i);
      const opt = ln.match(/^(?:\(?([a-fA-F])[\)\.\-:]|[-•])\s*(.+)$/);
      if (why && cur) { cur.why = why[1].trim(); continue; }
      if (key && cur) { cur.answer = [...new Set(key[1].toUpperCase().match(/[A-F]/g).map((c) => letters.indexOf(c)))].filter((i) => i < cur.options.length); continue; }
      if (opt && cur) {
        let t = opt[2].trim(), right = false;
        if (/\*\s*$/.test(t)) { right = true; t = t.replace(/\s*\*+\s*$/, ""); }
        else if (/^\*/.test(t)) { right = true; t = t.replace(/^\*+\s*/, ""); }
        if (cur.options.length < 6) { cur.options.push(t); if (right) cur.answer.push(cur.options.length - 1); }
        continue;
      }
      if (cur && cur.options.length) flush();
      const q = ln.replace(/^\s*(?:questão|pergunta)?\s*\d+\s*[\)\.\-:]\s*/i, "");
      if (!cur) cur = { q, options: [], answer: [], why: "", topic: "" };
      else cur.q += " " + q;
    }
    flush();
    return out;
  };

  M.views.provaEditor = async function (id) {
    const { prova: doc } = await M.get("admin/provas/" + id);
    const S = { rev: doc.rev, d: JSON.parse(JSON.stringify(doc)), saving: false, again: false, dirty: false, err: "", savedAt: doc.updatedAt, timer: 0 };
    const root = h("div", { class: "pv-edit" });
    const statusLine = h("span", { class: "muted small", role: "status" });
    const questionsBox = h("div", { class: "pv-qs" });
    const toolbar = h("div", { class: "pv-bar" });
    const errBox = h("div", { "aria-live": "polite" });

    const paintStatus = () => {
      statusLine.textContent = S.err ? S.err : S.saving ? "Salvando…" : S.dirty ? "Alterações não salvas" : "Tudo salvo";
      statusLine.className = "small " + (S.err ? "bad" : "muted");
    };
    function touch() {
      S.dirty = true; paintStatus();
      clearTimeout(S.timer);
      S.timer = setTimeout(save, 1400);
    }
    async function save() {
      clearTimeout(S.timer);
      if (S.saving) { S.again = true; return; }
      S.saving = true; S.err = ""; S.dirty = false; paintStatus();
      try {
        const r = await M.api("PUT", "admin/provas/" + id, { ...S.d, rev: S.rev });
        S.rev = r.prova.rev; S.d.status = r.prova.status; S.d.seq = r.prova.seq;
        // os ids novos das questões voltam do servidor: guarda para não virarem questões "novas" no próximo salvamento
        r.prova.questions.forEach((q, i) => { if (S.d.questions[i]) S.d.questions[i].id = q.id; });
      } catch (e) { S.err = e.message; S.dirty = true; }
      S.saving = false; paintStatus();
      if (S.again) { S.again = false; save(); }
    }
    const field = (label, node, hint) => h("div", { class: "field" }, h("label", { text: label }), node, hint ? h("span", { class: "hint", text: hint }) : null);
    const bind = (el, key, { num } = {}) => { el.value = S.d[key] ?? ""; el.addEventListener("input", () => { S.d[key] = num ? Number(el.value) : el.value; touch(); }); return el; };

    function drawQuestions() {
      const qs = S.d.questions;
      questionsBox.replaceChildren(...qs.map((q, qi) => {
        const ta = h("textarea", { class: "textarea", rows: "2", maxlength: "400", placeholder: "Escreva a pergunta", "aria-label": `Pergunta ${qi + 1}` });
        ta.value = q.q; ta.addEventListener("input", () => { q.q = ta.value; touch(); });
        const why = h("textarea", { class: "textarea", rows: "2", maxlength: "500", placeholder: "Explicação da resposta certa (aparece no gabarito)", "aria-label": `Explicação da questão ${qi + 1}` });
        why.value = q.why; why.addEventListener("input", () => { q.why = why.value; touch(); });
        const topic = h("input", { class: "input", type: "text", maxlength: "60", placeholder: "Tema (opcional, ajuda o aluno a revisar)", "aria-label": `Tema da questão ${qi + 1}` });
        topic.value = q.topic; topic.addEventListener("input", () => { q.topic = topic.value; touch(); });
        const multi = q.answer.length > 1;
        const opts = h("div", { class: "pv-opts" }, q.options.map((o, oi) => {
          const cb = h("input", { type: "checkbox", checked: q.answer.includes(oi), "aria-label": `Alternativa ${letters[oi]} é certa` });
          cb.addEventListener("change", () => { q.answer = cb.checked ? [...new Set([...q.answer, oi])].sort() : q.answer.filter((x) => x !== oi); drawQuestions(); touch(); });
          const inp = h("input", { class: "input", type: "text", maxlength: "200", placeholder: `Alternativa ${letters[oi]}`, "aria-label": `Questão ${qi + 1}, alternativa ${letters[oi]}` });
          inp.value = o; inp.addEventListener("input", () => { q.options[oi] = inp.value; touch(); });
          return h("div", { class: "pv-opt" + (q.answer.includes(oi) ? " is-right" : "") }, h("label", { class: "pv-right", title: "Marque se esta é a alternativa certa" }, cb, h("span", { text: letters[oi] })), inp,
            q.options.length > 2 ? h("button", { class: "icon-btn", type: "button", "aria-label": "Remover alternativa", onclick: () => { q.options.splice(oi, 1); q.answer = q.answer.filter((x) => x !== oi).map((x) => (x > oi ? x - 1 : x)); drawQuestions(); touch(); } }, M.icon("x", 16)) : null);
        }));
        const move = (d) => { const j = qi + d; if (j < 0 || j >= qs.length) return; [qs[qi], qs[j]] = [qs[j], qs[qi]]; drawQuestions(); touch(); };
        return h("section", { class: "panel pv-q" },
          h("div", { class: "row row-between" }, h("strong", { text: `Questão ${qi + 1}` }),
            h("div", { class: "row", style: "gap:2px" },
              qi > 0 ? h("button", { class: "icon-btn", type: "button", "aria-label": `Subir a questão ${qi + 1}`, onclick: () => move(-1) }, M.icon("up", 16)) : null,
              qi < qs.length - 1 ? h("button", { class: "icon-btn", type: "button", "aria-label": `Descer a questão ${qi + 1}`, onclick: () => move(1) }, M.icon("down", 16)) : null,
              h("button", { class: "icon-btn", type: "button", "aria-label": `Remover a questão ${qi + 1}`, onclick: () => { qs.splice(qi, 1); drawQuestions(); touch(); } }, M.icon("trash", 16)))),
          ta, opts,
          h("div", { class: "row", style: "gap:10px;flex-wrap:wrap" },
            q.options.length < 6 ? h("button", { class: "linkish", type: "button", onclick: () => { q.options.push(""); drawQuestions(); const ins = questionsBox.querySelectorAll(".pv-q")[qi].querySelectorAll(".pv-opt input.input"); ins[ins.length - 1]?.focus(); }, text: "+ Adicionar alternativa" }) : null,
            h("span", { class: "muted small", text: multi ? "Mais de uma certa: o aluno só pontua marcando exatamente as certas." : "Marque a caixinha da alternativa certa. Marcando mais de uma, vira múltipla escolha." })),
          why, topic);
      }));
      toolbar.replaceChildren(
        h("button", { class: "btn btn-ghost", type: "button", onclick: () => { if (S.d.questions.length >= 100) { M.toast("No máximo 100 questões.", "err"); return; } S.d.questions.push({ id: "", q: "", options: ["", ""], answer: [], why: "", topic: "" }); drawQuestions(); touch(); questionsBox.lastElementChild?.querySelector("textarea")?.focus(); } }, M.icon("plus", 16), " Adicionar questão"),
        h("button", { class: "btn btn-ghost", type: "button", onclick: pasteDialog }, M.icon("clip", 16), " Colar várias questões"),
        h("span", { class: "spacer", style: "flex:1" }),
        statusLine);
      paintStatus();
    }

    async function pasteDialog() {
      const got = await M.modal((close) => {
        const ta = h("textarea", { class: "textarea", rows: "14", placeholder: "1. Qual é a nota mínima da reputação verde?\na) Qualquer nota\nb) Termômetro verde *\nc) Termômetro amarelo\nExplicação: o verde indica boa reputação.\n\n2. Segunda pergunta?\na) ...\nb) ... *" });
        const go = () => { const r = M.parseQuestions(ta.value); if (!r.length) { M.toast("Não achei nenhuma questão completa. Cada uma precisa de pergunta e de 2 alternativas, com * na certa.", "err"); return; } close(r); };
        setTimeout(() => ta.focus(), 50);
        return [h("h3", { text: "Colar várias questões" }),
          h("p", { class: "muted small", style: "margin:0 0 10px" }, "Uma pergunta, as alternativas em linhas (a), b), c)…) e um ", h("b", { text: "*" }), " no fim da certa. Se quiser, uma linha \"Explicação: …\". Linha em branco separa as questões. Também vale \"Gabarito: B\"."),
          ta,
          h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(null), text: "Cancelar" }), h("button", { class: "btn btn-gold", type: "button", onclick: go, text: "Adicionar à prova" }))];
      });
      if (!got) return;
      const room = 100 - S.d.questions.length;
      const take = got.slice(0, room);
      const noKey = take.filter((q) => !q.answer.length).length;
      S.d.questions.push(...take.map((q) => ({ id: "", ...q })));
      drawQuestions(); touch();
      M.toast(`${take.length} ${take.length === 1 ? "questão adicionada" : "questões adicionadas"}.${noKey ? ` Em ${noKey} falta marcar a alternativa certa.` : ""}${got.length > take.length ? " O limite é 100 questões." : ""}`, noKey ? "err" : "ok");
    }

    /* publicar / voltar a rascunho */
    const pubBtn = h("button", { class: "btn btn-gold", type: "button" });
    const paintPub = () => { pubBtn.textContent = S.d.status === "publicada" ? "Encerrar prova" : S.d.status === "encerrada" ? "Reabrir prova" : "Publicar prova"; };
    pubBtn.addEventListener("click", async () => {
      errBox.replaceChildren();
      await save();
      if (S.err) return;
      pubBtn.disabled = true;
      try {
        const to = S.d.status === "publicada" ? "encerrada" : "publicada";
        const r = await M.post(`admin/provas/${id}/status`, { status: to });
        S.d.status = r.prova.status; S.rev = r.prova.rev;
        M.toast(to === "publicada" ? "Prova publicada. Os alunos que você escolheu já veem e recebem um aviso." : "Prova encerrada.", "ok");
      } catch (e) {
        errBox.replaceChildren(h("div", { class: "form-error" }, h("b", { text: e.message }), ...(e.data?.problems?.length > 1 ? [h("ul", { style: "margin:6px 0 0;padding-left:1.2em" }, e.data.problems.slice(0, 8).map((p) => h("li", { text: p })))] : [])));
      }
      pubBtn.disabled = false; paintPub(); paintHead();
    });
    const headChip = h("span");
    const audLine = h("div", { class: "row tm-aud" });
    async function paintHead() {
      const st = STATUS[S.d.status];
      headChip.className = st[0]; headChip.textContent = st[1];
      const a = S.d.audience;
      audLine.replaceChildren(M.icon("users", 16), h("span", { class: "small", text: a.mode === "assigned" ? `Só alunos escolhidos (${(a.users || []).length})` : "Todos os alunos" }),
        h("button", { class: "linkish small", type: "button", onclick: async () => { await save(); M.audienceDialog({ id, title: S.d.title, noun: "prova", audienceUrl: `admin/provas/${id}/audience` }, (r) => { S.d.audience = { mode: r.mode, users: r.mode === "assigned" ? new Array(r.assigned).fill(0) : [] }; if (r.rev) S.rev = r.rev; paintHead(); }); }, text: "Escolher quem vê" }));
    }

    const title = bind(h("input", { class: "input", type: "text", maxlength: "80", "aria-label": "Nome da prova" }), "title");
    const tag = bind(h("input", { class: "input", type: "text", maxlength: "24", list: "pv-cats", placeholder: "Ex.: Mercado Livre", "aria-label": "Categoria" }), "tag");
    const cats = h("datalist", { id: "pv-cats" }, [...new Set([...M.allTrails().map((t) => t.tag), "Provas"].filter(Boolean))].map((c) => h("option", { value: c })));
    const desc = bind(h("textarea", { class: "textarea", rows: "2", maxlength: "400", placeholder: "O que o aluno precisa saber antes de começar (opcional)" }), "description");
    const pass = h("select", { class: "input", "aria-label": "Nota mínima" }, [50, 60, 70, 80, 90, 100].map((n) => h("option", { value: String(n), text: n + "%" })));
    pass.value = String(S.d.passPct); pass.addEventListener("change", () => { S.d.passPct = Number(pass.value); touch(); });
    const size = bind(h("input", { class: "input", type: "number", min: "0", max: "100", inputmode: "numeric", "aria-label": "Questões por tentativa" }), "size", { num: true });
    const reveal = h("select", { class: "input", "aria-label": "Gabarito" }, h("option", { value: "pass", text: "Só quando o aluno for aprovado" }), h("option", { value: "always", text: "Sempre, ao terminar" }));
    reveal.value = S.d.reveal; reveal.addEventListener("change", () => { S.d.reveal = reveal.value; touch(); });

    root.append(
      h("div", { class: "page-head" }, h("a", { class: "muted small", href: "#/admin/provas", text: "← Provas avulsas" }), h("div", { class: "row", style: "gap:10px" }, h("h2", { text: "Editar prova" }), headChip), audLine),
      h("section", { class: "panel pv-meta" },
        field("Nome da prova", title), field("Categoria (aparece no filtro da tela de Trilhas)", tag), cats,
        field("Descrição", desc),
        h("div", { class: "pv-grid" },
          field("Nota mínima para passar", pass),
          field("Questões por tentativa", size, "0 = todas. Se for menor que o total, cada aluno recebe um sorteio."),
          field("Mostrar o gabarito", reveal))),
      h("h3", { style: "margin:26px 0 10px", text: "Questões" }),
      toolbar, questionsBox, errBox,
      h("div", { class: "row", style: "margin-top:20px;gap:10px;flex-wrap:wrap" }, pubBtn, h("a", { class: "btn btn-ghost", href: "#/admin/provas" }, "Voltar à lista")));
    drawQuestions(); paintPub(); paintHead();
    const leave = () => { if (!document.body.contains(root)) { clearTimeout(S.timer); if (S.dirty) save(); window.removeEventListener("hashchange", leave); } };
    window.addEventListener("hashchange", leave);
    return root;
  };

  /* ───────────────────────── aluno: fazer a prova ───────────────────────── */
  M.views.prova = async function (id) {
    let p;
    try { p = (await M.get("provas/" + id)).prova; } catch (e) {
      return h("div", { class: "empty" }, h("h3", { text: "Prova indisponível" }), h("p", { text: e.message }), h("a", { class: "btn btn-gold", href: "#/trilhas" }, "Voltar às trilhas"));
    }
    const box = h("div", { class: "exam" });
    const back = "#/trilhas";

    function intro() {
      const done = p.status === "approved";
      const start = h("button", { class: "btn btn-gold", type: "button", text: p.attempts ? "Tentar de novo" : "Começar a prova" });
      start.addEventListener("click", async () => {
        start.disabled = true;
        try { run(await M.post(`provas/${id}/start`)); } catch (e) { M.toast(e.message, "err"); start.disabled = false; }
      });
      box.replaceChildren(
        h("div", { class: "page-head" },
          h("span", { class: "chip chip-gold", style: "justify-self:start", text: p.tag }),
          h("h2", { text: p.title }),
          p.description ? h("p", { text: p.description }) : null),
        h("section", { class: "panel" }, h("h3", { text: "Antes de começar" }),
          h("ul", { style: "margin:0;padding-left:1.2em;display:grid;gap:8px" },
            h("li", { text: `${p.total} ${p.total === 1 ? "questão" : "questões"}. Para passar, acerte pelo menos ${p.passPct}%.` }),
            h("li", null, "Quando a questão pede ", h("strong", { text: "todas" }), " as corretas, você só pontua se marcar exatamente as certas."),
            h("li", { text: "A ordem das alternativas muda a cada tentativa." }),
            h("li", { text: "Se fechar a página, a prova continua de onde parou." })),
          p.attempts ? h("p", { class: "muted small", style: "margin:12px 0 0", text: `Você já fez ${p.attempts} ${p.attempts === 1 ? "tentativa" : "tentativas"}. Melhor nota: ${M.fmtPct(p.bestPct || 0)}%.` }) : null),
        done
          ? h("div", { class: "panel", style: "margin-top:16px" }, h("span", { class: "chip chip-good", text: "Aprovado" }), h("p", { style: "margin:8px 0 0", text: `Você já passou nesta prova com ${M.fmtPct(p.bestPct || 0)}%.` }))
          : h("div", { class: "row", style: "margin-top:20px" }, start, h("a", { class: "btn btn-ghost", href: back }, "Voltar")),
        done ? h("div", { class: "row", style: "margin-top:16px" }, h("a", { class: "btn btn-gold", href: back }, "Voltar às trilhas")) : null);
    }

    function run(att) {
      const key = "ma.ans." + att.attemptId;
      let answers = {};
      try { answers = JSON.parse(M.store.get(key) || "{}"); } catch {}
      let i = 0;
      const persist = () => M.store.set(key, JSON.stringify(answers));
      const qs = att.questions;
      const area = h("div");
      function draw() {
        const q = qs[i], sel = answers[q.id] || [], multi = q.type === "multi", name = "pv" + i, inputs = [];
        const opts = h("ul", { class: "opts" }, q.options.map((txt, k) => {
          const input = h("input", { type: multi ? "checkbox" : "radio", name, id: name + "-" + k, value: String(k) });
          input.checked = sel.includes(k);
          const lab = h("label", { class: "opt" + (input.checked ? " sel" : ""), for: name + "-" + k }, input, h("span", { class: "mark " + (multi ? "c" : "r") }), h("span", null, h("strong", { text: letters[k] + ". " }), txt));
          input.addEventListener("change", () => {
            answers[q.id] = inputs.map((x, idx) => (x.checked ? idx : -1)).filter((idx) => idx >= 0); persist();
            inputs.forEach((x) => x.closest(".opt").classList.toggle("sel", x.checked));
            drawBar();
          });
          inputs.push(input);
          return h("li", null, lab);
        }));
        const bar = h("div", { class: "exam-bar" });
        function drawBar() {
          const cnt = qs.filter((x) => (answers[x.id] || []).length).length;
          bar.replaceChildren(
            h("div", { class: "row row-between" }, h("strong", { text: p.title }), h("span", { class: "muted small", text: `Questão ${i + 1} de ${qs.length}. Respondidas: ${cnt}` })),
            h("div", { class: "bar", style: "margin-top:8px" }, h("i", { style: `width:${M.pct(cnt, qs.length)}%` })),
            h("div", { class: "dots", role: "group", "aria-label": "Ir para a questão" }, qs.map((x, idx) => h("button", {
              type: "button", "aria-label": `Questão ${idx + 1}${(answers[x.id] || []).length ? ", respondida" : ""}`,
              class: (answers[x.id] || []).length ? "answered" : "", "aria-current": idx === i ? "true" : null, onclick: () => { i = idx; draw(); }, text: idx + 1 }))));
        }
        drawBar();
        area.replaceChildren(bar,
          h("section", { class: "panel exam-q" },
            q.topic ? h("span", { class: "chip q-topic", text: q.topic }) : null,
            h("h3", { text: q.q }),
            multi ? h("p", { class: "chip chip-warn", style: "margin-bottom:12px", text: "Marque todas as alternativas corretas" }) : null,
            opts),
          h("div", { class: "exam-nav" },
            h("button", { class: "btn btn-ghost", type: "button", disabled: i === 0, onclick: () => { i--; draw(); }, text: "Anterior" }),
            i < qs.length - 1 ? h("button", { class: "btn btn-gold", type: "button", onclick: () => { i++; draw(); }, text: "Próxima" }) : h("button", { class: "btn btn-gold", type: "button", onclick: submit, text: "Enviar prova" })));
        window.scrollTo({ top: 0 });
      }
      async function submit() {
        const blank = qs.filter((x) => !(answers[x.id] || []).length).length;
        const go = await M.confirm(blank
          ? { title: "Há questões sem resposta", text: `Você deixou ${blank} sem resposta. Elas contam como erradas. Enviar mesmo assim?`, ok: "Enviar prova" }
          : { title: "Enviar a prova?", text: "Depois de enviar, você não pode mudar as respostas.", ok: "Enviar" });
        if (!go) return;
        area.querySelectorAll("button").forEach((b) => (b.disabled = true));
        try {
          const d = await M.post(`provas/${id}/submit`, { attemptId: att.attemptId, answers });
          M.store.del(key); p = d.prova; result(d.result);
        } catch (e) { M.toast(e.message, "err"); area.querySelectorAll("button").forEach((b) => (b.disabled = false)); }
      }
      box.replaceChildren(area);
      draw();
    }

    function result(r) {
      window.scrollTo({ top: 0 });
      const pctTxt = M.fmtPct(r.pct) + "%";
      const tone = r.passed ? "ok" : "bad";
      box.replaceChildren(
        h("section", { class: "result-hero " + tone, role: "status" },
          h("div", { class: "score-big", text: pctTxt }),
          h("h2", { text: r.passed ? `Aprovado com ${pctTxt}` : `${pctTxt}: ainda não passou` }),
          h("p", { style: "margin:0;max-width:56ch", text: r.passed
            ? (r.review?.length ? "Você passou. Abaixo estão os erros e a resposta certa de cada um." : "Gabarito perfeito. Nenhuma questão errada.")
            : `Você acertou ${r.correct} de ${r.total}. A nota mínima é ${r.passPct}%. Revise os temas e tente de novo: as questões e a ordem das alternativas mudam.${r.hidden ? " O gabarito não é mostrado enquanto você não passar." : ""}` }),
          r.topics?.length ? h("div", null, h("div", { class: "small muted", style: "margin-bottom:6px", text: "Temas para revisar" }), h("div", { class: "topics" }, r.topics.map((t) => h("span", { class: "chip", text: t })))) : null,
          h("div", { class: "row" },
            r.passed ? h("a", { class: "btn btn-gold", href: back }, "Voltar às trilhas") : h("button", { class: "btn btn-gold", type: "button", onclick: intro, text: "Tentar de novo" }),
            r.passed ? null : h("a", { class: "btn btn-ghost", href: back }, "Voltar"))),
        r.review?.length ? h("section", null,
          h("h2", { style: "margin:36px 0 4px", text: "O que você errou" }),
          h("p", { class: "muted", text: "Leia a explicação de cada uma. Isso é parte do aprendizado." }),
          h("div", { class: "review" }, r.review.map(reviewItem))) : null);
    }
    function reviewItem(it) {
      return h("article", { class: "review-item" },
        it.topic ? h("span", { class: "chip", style: "margin-bottom:10px", text: it.topic }) : null,
        h("h4", { text: it.q }),
        h("ul", { class: "opts" }, it.options.map((txt, k) => {
          const right = it.right.includes(k), picked = it.picked.includes(k);
          return h("li", null, h("div", { class: "opt" + (right ? " right" : picked ? " wrong" : "") },
            h("span", { class: "mark " + (it.right.length > 1 ? "c" : "r") }),
            h("span", null, h("strong", { text: letters[k] + ". " }), txt,
              picked ? h("span", { class: "tag-mini " + (right ? "correct" : "yours"), text: right ? "sua resposta" : "sua resposta (errada)" }) : null,
              right && !picked ? h("span", { class: "tag-mini correct", text: "resposta certa" }) : null)));
        })),
        it.why ? h("div", { class: "quiz", style: "margin-top:12px;padding:12px 14px" }, h("div", { class: "why ok", html: M.esc(it.why) })) : null);
    }
    intro();
    return box;
  };
})();

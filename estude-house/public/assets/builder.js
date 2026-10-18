/* Construtor de trilhas, parte 2: gestão das trilhas (ativar/inativar, criar, duplicar, excluir) e o editor
   (estrutura, prévia em formato celular, formulário do card, card livre, provas, publicar). */
(function () {
  const { h } = M;
  const B = M.builder;
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const round = (v) => Math.round(v * 10) / 10;
  const STATUS = { rascunho: ["chip", "Rascunho"], publicada: ["chip chip-good", "Publicada"], "publicada-com-mudancas": ["chip chip-warn", "Publicada · com mudanças"] };

  /* ───────────────────────── gestão das trilhas ───────────────────────── */

  M.createTrailDialog = async function () {
    const name = await M.modal((close) => {
      const inp = h("input", { class: "input", type: "text", maxlength: "80", placeholder: "Ex.: Atendimento nota 10", "aria-label": "Nome da trilha" });
      const go = () => { const v = inp.value.trim(); if (v.length < 3) { M.toast("Dê um nome com pelo menos 3 letras.", "err"); return; } close(v); };
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); go(); } });
      setTimeout(() => inp.focus(), 50);
      return [h("h3", { text: "Criar nova trilha" }),
        h("p", { class: "muted", text: "Você monta tudo por aqui: módulos, aulas em stories, quizzes e as provas. Nada aparece para os alunos até você publicar." }),
        h("div", { class: "field" }, h("label", { text: "Nome da trilha" }), inp),
        h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(null), text: "Cancelar" }), h("button", { class: "btn btn-gold", type: "button", onclick: go, text: "Criar e montar" }))];
    });
    if (!name) return;
    try {
      const r = await M.post("admin/trails", { title: name });
      location.hash = "#/admin/trilhas/" + r.trail.id;
    } catch (e) { M.toast(e.message, "err"); }
  };

  /* ───── importar uma trilha pronta (.json) ───── */
  M.importTrailDialog = function () {
    const inp = h("input", { type: "file", accept: ".json,application/json", hidden: true });
    inp.addEventListener("change", async () => {
      const f = inp.files[0]; if (!f) return;
      try {
        if (f.size > 2_000_000) throw new Error("Arquivo grande demais para ser uma trilha.");
        let j; try { j = JSON.parse(await f.text()); } catch { throw new Error("Esse arquivo não é um .json válido."); }
        const r = await M.post("admin/trails/import", j);
        M.toast(r.problems?.length ? `Trilha importada como rascunho. Faltam ${r.problems.length} ajustes pra publicar.` : "Trilha importada como rascunho. Confira e publique.", "ok");
        location.hash = "#/admin/trilhas/" + r.trail.id;
      } catch (e) { M.toast(e.message, "err"); }
      inp.value = "";
    });
    inp.click();
  };

  /* ───── quem vê a trilha: todos os alunos ou só os escolhidos ───── */
  M.audienceDialog = async function (t, onSaved) {
    let d;
    try { d = await M.get(`admin/trails/${t.id}/audience`); } catch (e) { M.toast(e.message, "err"); return; }
    M.modal((close) => {
      let mode = d.mode;
      const sel = new Set(d.students.filter((s) => s.has).map((s) => s.id));
      const modeBox = h("div", { class: "aud-modes", role: "radiogroup", "aria-label": "Quem vê esta trilha" });
      const search = h("input", { class: "input", type: "search", placeholder: "Buscar aluno por nome, @ ou e-mail", "aria-label": "Buscar aluno" });
      const list = h("div", { class: "aud-list" });
      const count = h("span", { class: "muted small" });
      const err = h("div");
      const save = h("button", { class: "btn btn-gold", type: "button", text: "Salvar" });
      const pickBox = h("div", { class: "aud-pick" });
      const shown = () => { const q = search.value.trim().toLowerCase(); return d.students.filter((s) => !q || `${s.name} ${s.nickname || ""} ${s.email}`.toLowerCase().includes(q)); };
      function drawModes() {
        const opt = (k, title, sub) => h("button", { class: "aud-mode", type: "button", role: "radio", "aria-checked": String(mode === k), onclick: () => { mode = k; drawModes(); } },
          h("strong", { text: title }), h("span", { class: "muted small", text: sub }));
        modeBox.replaceChildren(opt("all", "Todos os alunos", "Quem entrar na plataforma, inclusive os novos, vê esta trilha."),
          opt("assigned", "Só quem eu escolher", "Só os alunos marcados abaixo veem. Para os outros ela não existe."));
        pickBox.hidden = mode !== "assigned";
        draw();
      }
      function draw() {
        const rows = shown();
        count.textContent = `${sel.size} de ${d.students.length} alunos com acesso`;
        list.replaceChildren(...(rows.length ? rows.map((s) => {
          const cb = h("input", { type: "checkbox", checked: sel.has(s.id), id: "aud-" + s.id });
          cb.addEventListener("change", () => { if (cb.checked) sel.add(s.id); else sel.delete(s.id); count.textContent = `${sel.size} de ${d.students.length} alunos com acesso`; });
          return h("label", { class: "aud-row", for: "aud-" + s.id }, cb, M.avatar(s, 30), h("span", { class: "aud-who" }, h("strong", { text: s.name }), h("span", { class: "muted small", text: (s.nickname ? "@" + s.nickname + " · " : "") + s.email })));
        }) : [h("p", { class: "muted", style: "padding:14px;margin:0", text: d.students.length ? "Ninguém encontrado com essa busca." : "Ainda não há alunos cadastrados." })]));
      }
      search.addEventListener("input", draw);
      const setShown = (v) => { shown().forEach((s) => { if (v) sel.add(s.id); else sel.delete(s.id); }); draw(); };
      pickBox.append(search,
        h("div", { class: "row", style: "gap:8px;margin:8px 0" }, count, h("span", { class: "spacer", style: "flex:1" }),
          h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => setShown(true), text: "Marcar os da lista" }),
          h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => setShown(false), text: "Desmarcar" })),
        list);
      save.addEventListener("click", async () => {
        save.disabled = true; err.replaceChildren();
        try {
          const r = await M.api("PUT", `admin/trails/${t.id}/audience`, { mode, users: [...sel] });
          close(); M.toast(mode === "all" ? "Agora todos os alunos veem esta trilha." : `Pronto: ${r.assigned} ${r.assigned === 1 ? "aluno vê" : "alunos veem"} esta trilha.`, "ok");
          M.session.restricted = (M.session.restricted || []).filter((x) => x !== t.id).concat(mode === "assigned" ? [t.id] : []);
          onSaved && onSaved(r);
        } catch (e) { err.replaceChildren(h("div", { class: "form-error", text: e.message })); save.disabled = false; }
      });
      drawModes();
      return [h("h3", { text: "Quem vê: " + t.title }),
        h("p", { class: "muted small", style: "margin:0 0 12px", text: "O gestor sempre vê todas as trilhas. Quem perde o acesso não perde o que já estudou: o progresso fica guardado." }),
        modeBox, pickBox, err,
        h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(), text: "Cancelar" }), save)];
    });
  };

  M.views.adminTrails = async function () {
    const d = await M.get("admin/trails");
    const list = h("div", { class: "tm-grid" });
    const draw = (rowsData) => {
      list.replaceChildren(rowsData.map((t) => {
        const created = t.kind === "criada";
        const st = created ? STATUS[t.status] : null;
        const sw = h("input", { type: "checkbox", checked: t.active, role: "switch", "aria-label": (t.active ? "Inativar " : "Ativar ") + t.title });
        const state = h("span", { class: "tm-state" + (t.active ? " on" : ""), text: t.active ? "Ativa" : "Inativa" });
        sw.addEventListener("change", async () => {
          sw.disabled = true;
          try {
            const r = await M.post(`admin/trails/${t.id}/active`, { active: sw.checked });
            t.active = r.active; M.session.inactive = r.inactive;
            state.textContent = t.active ? "Ativa" : "Inativa"; state.classList.toggle("on", t.active);
            card.classList.toggle("is-off", !t.active);
            M.toast(t.active ? "Trilha ativada. Os alunos já veem." : "Trilha inativada. Some para os alunos, o progresso fica guardado.", "ok");
          } catch (e) { sw.checked = !sw.checked; M.toast(e.message, "err"); }
          sw.disabled = false;
        });
        const card = h("article", { class: "tm-card" + (t.active ? "" : " is-off") },
          h("div", { class: "row row-between" },
            h("div", { class: "row" }, h("span", { class: "chip chip-tag", text: created ? "Criada por você" : "Nativa" }), st ? h("span", { class: st[0], text: st[1] }) : null),
            h("label", { class: "bd-switch" }, sw, h("span", { class: "bd-switch-ui" }), state)),
          h("h3", { text: t.title }),
          h("div", { class: "row tm-aud" }, M.icon("users", 16),
            h("span", { class: "small", text: t.audience === "assigned" ? `Só alunos escolhidos (${t.assigned} de ${t.students})` : `Todos os alunos (${t.students})` }),
            h("button", { class: "linkish small", type: "button", onclick: () => M.audienceDialog(t, (r) => { t.audience = r.mode; t.assigned = r.assigned; draw(rowsData); }), text: "Quem vê" })),
          h("p", { class: "muted small", text: `${t.modules} ${t.modules === 1 ? "módulo" : "módulos"} · ${t.lessons} ${t.lessons === 1 ? "aula" : "aulas"}${t.cards != null ? " · " + t.cards + " cards" : ""}${t.updatedAt ? " · editada " + M.fmtDateTime(t.updatedAt) : ""}` }),
          h("div", { class: "tm-actions" },
            created ? h("a", { class: "btn btn-gold btn-sm", href: "#/admin/trilhas/" + t.id }, "Editar") : null,
            t.live || !created ? h("a", { class: "btn btn-ghost btn-sm", href: "#/t/" + t.id }, "Ver como aluno") : null,
            created ? h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: async () => {
              try { const r = await M.post(`admin/trails/${t.id}/duplicate`); M.toast("Cópia criada.", "ok"); location.hash = "#/admin/trilhas/" + r.trail.id; } catch (e) { M.toast(e.message, "err"); }
            }, text: "Duplicar" }) : null,
            created ? h("button", { class: "btn btn-ghost btn-sm tm-del", type: "button", onclick: async () => {
              const ok = await M.confirm({ title: "Excluir a trilha?", text: `<b>${M.esc(t.title)}</b> será apagada para sempre, com as aulas e as provas. O progresso dos alunos nela deixa de aparecer. Para só esconder, use o botão Ativa/Inativa.`, ok: "Excluir", danger: true });
              if (!ok) return;
              try { await M.api("DELETE", "admin/trails/" + t.id); M.toast("Trilha excluída.", "ok"); draw(rowsData.filter((x) => x.id !== t.id)); } catch (e) { M.toast(e.message, "err"); }
            }, text: "Excluir" }) : null));
        return card;
      }));
    };
    draw(d.trails);
    return h("div", null,
      h("div", { class: "page-head" },
        h("h2", { text: "Gestão de trilhas" }),
        h("p", { text: "Ative ou inative qualquer trilha e crie as suas, do zero. Trilha inativa some para os alunos; o progresso e os certificados ficam guardados e voltam quando você ativar de novo." })),
      h("div", { class: "row", style: "margin-bottom:18px;gap:10px;flex-wrap:wrap" },
        h("button", { class: "btn btn-gold", type: "button", onclick: M.createTrailDialog }, M.icon("plus", 18), " Criar nova trilha"),
        h("button", { class: "btn btn-ghost", type: "button", onclick: M.importTrailDialog }, M.icon("clip", 18), " Importar trilha pronta (.json)")),
      list);
  };

  /* ───────────────────────── o editor ───────────────────────── */

  M.views.trailBuilder = async function (id) {
    const { trail: doc } = await M.get("admin/trails/" + id);
    const S = {
      id, rev: doc.rev, draft: doc.draft, live: !!doc.live, publishedAt: doc.publishedAt, dirty: false, saving: false, again: false, err: "",
      sel: { kind: "card", m: 0, l: 0, k: 0, layer: null }, open: new Set(), undo: [], pane: "edit", savedAt: doc.updatedAt, conflict: false,
    };
    S.draft.seq ||= { m: 0, l: 0, q: 0 };
    S.draft.modules.forEach((m) => { m.questions ||= []; m.lessons.forEach((l) => { l.blocks ||= []; }); });
    S.draft.finalQuestions ||= [];
    if (!S.draft.modules[0]?.lessons[0]?.blocks.length) S.sel = { kind: S.draft.modules.length ? "lesson" : "trail", m: 0, l: 0, k: 0, layer: null };
    S.open.add(S.draft.modules[0]?.id); S.open.add(S.draft.modules[0]?.lessons[0]?.id);

    const nid = (kind) => { S.draft.seq[kind] = (S.draft.seq[kind] || 0) + 1; return `${S.id}-${kind}${S.draft.seq[kind]}`; };
    const D = () => S.draft;
    const curM = () => D().modules[S.sel.m];
    const curL = () => curM()?.lessons[S.sel.l];
    const curB = () => curL()?.blocks[S.sel.k];

    /* ── salvar ── */
    let saveTimer = null, prevTimer = null, outTimer = null;
    const statusEl = h("span", { class: "bd-status", role: "status" });
    const setStatus = () => {
      statusEl.className = "bd-status" + (S.err ? " is-err" : S.saving ? " is-busy" : S.dirty ? " is-dirty" : "");
      statusEl.textContent = S.conflict ? "Conflito: recarregue" : S.err ? "Não salvou: " + S.err : S.saving ? "Salvando…" : S.dirty ? "Alterações não salvas" : "Salvo" + (S.savedAt ? " às " + new Date(S.savedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : "");
    };
    async function save() {
      clearTimeout(saveTimer);
      if (S.conflict) return false;
      if (S.saving) { S.again = true; return false; }
      S.saving = true; S.err = ""; S.again = false; setStatus();
      const snap = JSON.stringify(S.draft);
      try {
        const r = await M.api("PUT", "admin/trails/" + id, { rev: S.rev, draft: JSON.parse(snap) });
        S.rev = r.rev; S.savedAt = r.updatedAt;
        if (JSON.stringify(S.draft) === snap) S.dirty = false;
      } catch (e) {
        if (e.status === 409) { S.conflict = true; conflictDialog(); } else S.err = e.message;
      }
      S.saving = false; setStatus();
      if (S.again && !S.conflict) save();
      return !S.err && !S.conflict;
    }
    const conflictDialog = () => M.modal((close) => [h("h3", { text: "Outra pessoa editou esta trilha" }),
      h("p", { class: "muted", text: "Alguém salvou alterações depois que você abriu. Para não apagar o trabalho dela, recarregue a página. O que você digitou desde então não foi salvo." }),
      h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-gold", type: "button", onclick: () => { close(); location.reload(); }, text: "Recarregar" }))]);
    const change = () => {
      S.dirty = true; S.err = ""; S.sinceLive = S.live; setStatus(); setPub();
      clearTimeout(saveTimer); saveTimer = setTimeout(save, 1400);
      clearTimeout(prevTimer); prevTimer = setTimeout(drawStage, 140);
      clearTimeout(outTimer); outTimer = setTimeout(drawOutline, 350);
    };
    const c = { change, rerender: () => drawInspector() };

    /* ── desfazer ── */
    const checkpoint = () => { S.undo.push(JSON.stringify(S.draft)); if (S.undo.length > 25) S.undo.shift(); undoBtn.disabled = false; };
    const undo = () => {
      const last = S.undo.pop(); if (!last) return;
      const back = JSON.parse(last);
      for (const k of ["m", "l", "q"]) back.seq[k] = Math.max(back.seq[k] || 0, S.draft.seq[k] || 0); // ids nunca voltam atrás
      S.draft = back; fixSel(); undoBtn.disabled = !S.undo.length; drawAll(); change();
    };
    const structural = (fn) => { checkpoint(); fn(); fixSel(); drawAll(); change(); };
    function fixSel() {
      const s = S.sel, ms = D().modules;
      if (s.kind === "trail" || s.kind === "final") return;
      if (!ms.length) { S.sel = { kind: "trail", m: 0, l: 0, k: 0, layer: null }; return; }
      s.m = clamp(s.m, 0, ms.length - 1);
      const ls = ms[s.m].lessons;
      if (s.kind === "module" || s.kind === "exam") return;
      if (!ls.length) { S.sel = { kind: "module", m: s.m, l: 0, k: 0, layer: null }; return; }
      s.l = clamp(s.l, 0, ls.length - 1);
      const bs = ls[s.l].blocks;
      if (s.kind === "card" && !bs.length) s.kind = "lesson";
      s.k = clamp(s.k, 0, Math.max(0, bs.length - 1));
    }
    const move = (arr, i, d) => { const j = i + d; if (j < 0 || j >= arr.length) return false; [arr[i], arr[j]] = [arr[j], arr[i]]; return true; };
    const select = (patch) => {
      S.sel = { kind: "card", m: S.sel.m, l: S.sel.l, k: 0, layer: null, ...patch };
      const m = curM(); if (m) { S.open.add(m.id); const l = curL(); if (l && ["lesson", "card"].includes(S.sel.kind)) S.open.add(l.id); }
      if (innerWidth < 1100) S.pane = "edit";
      drawAll();
    };

    /* ── estrutura ── */
    const newLesson = (n) => ({ id: nid("l"), title: `Aula ${n}`, minutes: 3, goal: "", blocks: [B.CARDS.hook.make()] });
    const newModule = (n) => ({ id: nid("m"), title: `Módulo ${n}`, tagline: "", outcome: "", lessons: [newLesson(1)], questions: [] });
    const pickCard = async () => {
      const t = await M.modal((close) => [h("h3", { text: "Qual card você quer adicionar?" }),
        B.GROUPS.map((g) => h("div", { class: "bd-pick-group" }, h("h4", { text: g }),
          h("div", { class: "bd-pick" }, Object.entries(B.CARDS).filter(([, v]) => v.group === g).map(([k, v]) =>
            h("button", { type: "button", class: "bd-pick-i", onclick: () => close(k) }, h("span", { class: "bd-pick-ico", text: v.ico }), h("b", { text: v.label }), h("small", { text: v.desc })))))),
        h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(null), text: "Cancelar" }))]);
      return t;
    };
    const addCard = async (afterIdx) => {
      const l = curL(); if (!l) return;
      const t = await pickCard(); if (!t) return;
      structural(() => {
        const at = afterIdx == null ? l.blocks.length : afterIdx + 1;
        l.blocks.splice(at, 0, B.CARDS[t].make());
        S.sel = { kind: "card", m: S.sel.m, l: S.sel.l, k: at, layer: null };
      });
    };

    /* ── barra de cima ── */
    const undoBtn = h("button", { class: "btn btn-ghost btn-sm", type: "button", disabled: true, title: "Desfazer a última mudança de estrutura (Ctrl+Z)", onclick: undo }, "↶ Desfazer");
    const previewBtn = h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => previewLesson() }, M.icon("video", 16), " Ver aula como aluno");
    const pubBtn = h("button", { class: "btn btn-gold btn-sm", type: "button", onclick: () => publish() }, "Publicar");
    const saveBtn = h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => save() }, "Salvar agora");
    const pubInfo = h("span", { class: "chip" });
    const setPub = () => {
      pubInfo.className = "chip " + (S.live ? (S.dirty || S.sinceLive ? "chip-warn" : "chip-good") : "");
      pubInfo.textContent = S.live ? (S.sinceLive ? "Publicada · tem mudanças" : "Publicada") : "Rascunho";
      pubBtn.textContent = S.live ? "Publicar mudanças" : "Publicar";
    };
    S.sinceLive = !!doc.live && !!doc.dirty;

    async function publish() {
      if (!(await save())) { if (S.err) M.toast("Não consegui salvar: " + S.err, "err"); return; }
      pubBtn.disabled = true;
      try {
        await M.post(`admin/trails/${id}/publish`);
        S.live = true; S.sinceLive = false; S.rev += 1; setPub();
        M.toast("Trilha publicada. Os alunos já veem.", "ok");
      } catch (e) {
        if (e.data?.problems) {
          await M.modal((close) => [h("h3", { text: "Falta pouco para publicar" }),
            h("p", { class: "muted", text: "Resolva estes pontos e publique de novo:" }),
            h("ul", { class: "bd-problems" }, e.data.problems.map((p) => h("li", { text: p }))),
            h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-gold", type: "button", onclick: () => close(), text: "Entendi" }))]);
        } else M.toast(e.message, "err");
      }
      pubBtn.disabled = false;
    }

    function previewLesson() {
      const l = curL(); if (!l) { M.toast("Escolha uma aula primeiro.", "err"); return; }
      const m = curM();
      const mods = D().modules.map((mm, i) => ({ id: mm.id, n: i + 1, title: mm.title, lessons: mm.lessons }));
      const trail = { id: S.id, title: D().title || "Trilha" };
      const mod = mods[S.sel.m];
      const node = M.playLesson({ trail, mod, lesson: l, index: S.sel.l }, { onClose: () => { node.remove(); document.documentElement.classList.remove("bd-noscroll"); } });
      document.documentElement.classList.add("bd-noscroll");
      document.body.append(node);
      void m;
    }

    /* ── cabeçalho dos painéis ── */
    const panes = { out: h("aside", { class: "bd-pane bd-out", "aria-label": "Estrutura da trilha" }), stage: h("section", { class: "bd-pane bd-stage", "aria-label": "Prévia" }), insp: h("aside", { class: "bd-pane bd-insp", "aria-label": "Edição" }) };
    const tabs = h("div", { class: "bd-tabs", role: "tablist" });
    const drawTabs = () => tabs.replaceChildren([["out", "Estrutura"], ["stage", "Prévia"], ["edit", "Editar"]].map(([k, l]) =>
      h("button", { type: "button", role: "tab", "aria-selected": String(S.pane === k), class: S.pane === k ? "on" : "", onclick: () => { S.pane = k; paneVis(); drawTabs(); }, text: l })));
    const paneVis = () => { root.dataset.pane = S.pane; };

    /* ── lista da esquerda ── */
    function drawOutline() {
      const D_ = D();
      const rowBtns = (arr, i, onChange, delMsg) => h("span", { class: "bd-rb" },
        h("button", { type: "button", title: "Subir", disabled: i === 0, onclick: (e) => { e.stopPropagation(); structural(() => { move(arr, i, -1); onChange?.(-1); }); } }, "↑"),
        h("button", { type: "button", title: "Descer", disabled: i === arr.length - 1, onclick: (e) => { e.stopPropagation(); structural(() => { move(arr, i, 1); onChange?.(1); }); } }, "↓"),
        h("button", { type: "button", title: "Excluir", onclick: async (e) => {
          e.stopPropagation();
          if (delMsg) { const ok = await M.confirm({ title: "Excluir?", text: delMsg, ok: "Excluir", danger: true }); if (!ok) return; }
          structural(() => { arr.splice(i, 1); onChange?.("del"); });
        } }, "✕"));
      const out = [];
      out.push(h("button", { type: "button", class: "bd-o bd-o-trail" + (S.sel.kind === "trail" ? " on" : ""), onclick: () => select({ kind: "trail" }) }, h("span", { text: "⚙️" }), h("b", { text: D_.title || "Dados da trilha" })));
      D_.modules.forEach((m, mi) => {
        const isOpen = S.open.has(m.id);
        out.push(h("div", { class: "bd-mod" },
          h("div", { class: "bd-o bd-o-mod" + (S.sel.kind === "module" && S.sel.m === mi ? " on" : "") },
            h("button", { type: "button", class: "bd-caret", "aria-expanded": String(isOpen), "aria-label": isOpen ? "Recolher" : "Expandir", onclick: () => { if (isOpen) S.open.delete(m.id); else S.open.add(m.id); drawOutline(); }, text: isOpen ? "▾" : "▸" }),
            h("button", { type: "button", class: "bd-o-t", onclick: () => select({ kind: "module", m: mi }) }, h("small", { text: "Módulo " + (mi + 1) }), h("b", { text: m.title || "Sem título" })),
            rowBtns(D_.modules, mi, (d) => { if (d !== "del") S.sel.m = clamp(mi + d, 0, D_.modules.length - 1); }, `O módulo <b>${M.esc(m.title)}</b> será apagado, com ${m.lessons.length} aula(s) e ${m.questions.length} questão(ões) da prova.`)),
          isOpen ? h("div", { class: "bd-mod-body" },
            m.lessons.map((l, li) => {
              const lOpen = S.open.has(l.id);
              const lSel = S.sel.m === mi && S.sel.l === li;
              return h("div", { class: "bd-les" },
                h("div", { class: "bd-o bd-o-les" + (S.sel.kind === "lesson" && lSel ? " on" : "") },
                  h("button", { type: "button", class: "bd-caret", "aria-expanded": String(lOpen), onclick: () => { if (lOpen) S.open.delete(l.id); else S.open.add(l.id); drawOutline(); }, text: lOpen ? "▾" : "▸" }),
                  h("button", { type: "button", class: "bd-o-t", onclick: () => select({ kind: "lesson", m: mi, l: li }) }, h("small", { text: "Aula " + (li + 1) + " · " + l.blocks.length + " cards" }), h("b", { text: l.title || "Sem título" })),
                  rowBtns(m.lessons, li, (d) => { if (d !== "del" && lSel) S.sel.l = clamp(li + d, 0, m.lessons.length - 1); }, `A aula <b>${M.esc(l.title)}</b> e seus ${l.blocks.length} cards serão apagados.`)),
                lOpen ? h("div", { class: "bd-cards" },
                  l.blocks.map((b, k) => h("div", { class: "bd-o bd-o-card" + (S.sel.kind === "card" && lSel && S.sel.k === k ? " on" : "") },
                    h("button", { type: "button", class: "bd-o-t", onclick: () => select({ kind: "card", m: mi, l: li, k }) },
                      h("span", { class: "bd-ci", text: B.CARDS[b.t]?.ico || "▫️" }), h("span", { class: "bd-cs" }, h("small", { text: B.CARDS[b.t]?.label || b.t }), h("b", { text: B.summary(b) || "vazio" }))),
                    h("span", { class: "bd-rb" },
                      h("button", { type: "button", title: "Subir", disabled: k === 0, onclick: () => structural(() => { move(l.blocks, k, -1); if (lSel && S.sel.kind === "card" && S.sel.k === k) S.sel.k = k - 1; }), text: "↑" }),
                      h("button", { type: "button", title: "Descer", disabled: k === l.blocks.length - 1, onclick: () => structural(() => { move(l.blocks, k, 1); if (lSel && S.sel.kind === "card" && S.sel.k === k) S.sel.k = k + 1; }), text: "↓" }),
                      h("button", { type: "button", title: "Duplicar", onclick: () => structural(() => { const cp = JSON.parse(JSON.stringify(b)); (cp.layers || []).forEach((x) => { x.id = B.uid("L"); }); l.blocks.splice(k + 1, 0, cp); S.sel = { kind: "card", m: mi, l: li, k: k + 1, layer: null }; }), text: "⧉" }),
                      h("button", { type: "button", title: "Excluir", onclick: () => structural(() => { l.blocks.splice(k, 1); if (lSel && S.sel.kind === "card" && S.sel.k >= k) S.sel.k = Math.max(0, S.sel.k - 1); }), text: "✕" })))),
                  h("button", { class: "bd-add", type: "button", onclick: () => { select({ kind: "lesson", m: mi, l: li }); addCard(); } }, "+ Adicionar card")) : null);
            }),
            h("button", { class: "bd-add", type: "button", onclick: () => structural(() => { m.lessons.push(newLesson(m.lessons.length + 1)); S.sel = { kind: "lesson", m: mi, l: m.lessons.length - 1, k: 0, layer: null }; S.open.add(m.lessons[m.lessons.length - 1].id); }) }, "+ Aula"),
            h("button", { type: "button", class: "bd-o bd-o-exam" + (S.sel.kind === "exam" && S.sel.m === mi ? " on" : ""), onclick: () => select({ kind: "exam", m: mi }) },
              h("span", { text: "📝" }), h("b", { text: "Prova do módulo" }), h("small", { class: m.questions.length < 3 ? "warn" : "", text: m.questions.length + (m.questions.length === 1 ? " questão" : " questões") }))) : null));
      });
      out.push(h("button", { class: "bd-add bd-add-mod", type: "button", onclick: () => structural(() => { D_.modules.push(newModule(D_.modules.length + 1)); const m = D_.modules[D_.modules.length - 1]; S.open.add(m.id); S.open.add(m.lessons[0].id); S.sel = { kind: "card", m: D_.modules.length - 1, l: 0, k: 0, layer: null }; }) }, "+ Módulo"));
      out.push(h("button", { type: "button", class: "bd-o bd-o-final" + (S.sel.kind === "final" ? " on" : ""), onclick: () => select({ kind: "final" }) },
        h("span", { text: "🏆" }), h("b", { text: "Prova final" }), h("small", { class: D_.finalQuestions.length < 5 ? "warn" : "", text: D_.finalQuestions.length + " questões" })));
      panes.out.replaceChildren(out);
    }

    /* ── prévia no meio ── */
    const ctxPrev = { lessonId: "preview", quizN: 0, quizRegister() {}, quizAnswered() {} };
    function drawStage() {
      const s = S.sel;
      const l = curL();
      let content;
      if (["trail", "final", "exam"].includes(s.kind) || !l) {
        content = h("div", { class: "bd-empty" }, h("div", { class: "bd-empty-ico", text: s.kind === "final" || s.kind === "exam" ? "📝" : "🏀" }),
          h("p", { text: s.kind === "trail" ? "Escolha uma aula ou um card na lista à esquerda para ver como ele fica no celular." : s.kind === "final" || s.kind === "exam" ? "Monte as questões ao lado. O aluno recebe uma seleção sorteada delas, com as alternativas embaralhadas." : "Esta trilha ainda não tem aulas." }));
      } else {
        const blocks = l.blocks, k = s.kind === "card" ? s.k : 0;
        const b = blocks[k];
        if (!b) {
          content = h("div", { class: "bd-empty" }, h("p", { text: "Esta aula ainda não tem cards." }), h("button", { class: "btn btn-gold", type: "button", onclick: () => addCard(), text: "+ Adicionar card" }));
        } else {
          const frame = h("div", { class: "st-frame bd-pf" });
          const bars = h("div", { class: "st-bars" }, [...blocks, 0].map((_, i) => h("span", { class: "st-seg" + (i < k ? " on" : i === k ? " cur" : "") }, h("i"))));
          const head = h("div", { class: "st-head" }, h("span", { class: "st-ring" }, h("b", { text: String(s.m + 1) })), h("div", { class: "st-who" }, h("b", { text: l.title || "Aula" }), h("span", { text: `${D().title || "Trilha"} · aula ${s.l + 1}` })), h("span"));
          const card = h("div", { class: "st-card" });
          const slide = h("div", { class: `slide k-${b.t}${b.tone ? " tone-" + b.tone : ""}` });
          if (b.t === "free") slide.append(h("div", { class: "cd-free-wrap" }, M.freeBox(b, { editing: true })));
          else slide.append(M.renderBlock(b, ctxPrev));
          M.cardStyle(slide, b);
          card.append(slide);
          const foot = h("div", { class: "st-foot" }, h("span"), h("span", { class: "st-count", text: `${k + 1}/${blocks.length}` }), h("span", { class: "st-next bd-fake", text: "Continuar" }));
          frame.append(h("div", { class: "st-top" }, bars, head), card, foot);
          M.cardFrame(frame, b, M.cardMood(b, k));
          if (b.t === "free") attachFree(frame.querySelector(".cd-free"), b);
          const nav = h("div", { class: "bd-stage-nav" },
            h("button", { class: "btn btn-ghost btn-sm", type: "button", disabled: k === 0, onclick: () => select({ kind: "card", m: s.m, l: s.l, k: k - 1 }), text: "◀ Anterior" }),
            h("span", { class: "muted small", text: `Card ${k + 1} de ${blocks.length}` }),
            h("button", { class: "btn btn-ghost btn-sm", type: "button", disabled: k >= blocks.length - 1, onclick: () => select({ kind: "card", m: s.m, l: s.l, k: k + 1 }), text: "Próximo ▶" }));
          content = h("div", { class: "bd-phone-wrap" }, h("div", { class: "stories bd-stories" }, frame), nav,
            h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => addCard(k), text: "+ Card depois deste" }));
        }
      }
      panes.stage.replaceChildren(content);
    }

    /* ── card livre: arrastar na prévia ── */
    function attachFree(box, b) {
      if (!box) return;
      box.tabIndex = 0;
      const byId = (lid) => b.layers.find((x) => x.id === lid);
      const mark = () => box.querySelectorAll(".fl").forEach((el) => {
        const on = el.dataset.lid === S.sel.layer;
        el.classList.toggle("is-sel", on);
        const hd = el.querySelector(":scope > .fl-handle");
        if (on && !hd) el.append(h("span", { class: "fl-handle", "aria-hidden": "true" }));
        if (!on && hd) hd.remove();
      });
      mark();
      const guide = h("i", { class: "fl-guide", hidden: true }); box.append(guide);
      box.addEventListener("pointerdown", (e) => {
        const el = e.target.closest(".fl");
        if (!el) { if (S.sel.layer) { S.sel.layer = null; mark(); drawInspector(); } return; }
        const l = byId(el.dataset.lid); if (!l) return;
        const resize = !!e.target.closest(".fl-handle");
        if (S.sel.layer !== l.id) { S.sel.layer = l.id; mark(); drawInspector(); }
        e.preventDefault();
        const r = box.getBoundingClientRect();
        const st = { x: e.clientX, y: e.clientY, lx: l.x, ly: l.y, lw: l.w, lh: l.h, ls: l.size };
        let moved = false;
        el.setPointerCapture(e.pointerId);
        const mv = (ev) => {
          const dx = ((ev.clientX - st.x) / r.width) * 100, dy = ((ev.clientY - st.y) / r.height) * 100;
          if (Math.abs(dx) + Math.abs(dy) > 0.3) moved = true;
          if (!resize) {
            l.x = round(clamp(st.lx + dx, -30, 110)); l.y = round(clamp(st.ly + dy, -30, 110));
            const cx = l.x + (el.offsetWidth / r.width) * 50;
            if (Math.abs(cx - 50) < 1.6) { l.x = round(l.x + (50 - cx)); guide.hidden = false; } else guide.hidden = true;
            el.style.left = l.x + "%"; el.style.top = l.y + "%";
          } else if (l.k === "emoji") {
            l.size = round(clamp(st.ls + dx * 0.5, 3, 60)); el.style.fontSize = l.size + "cqw";
          } else {
            l.w = round(clamp(st.lw + dx, 4, 150)); el.style.width = l.w + "%";
            if (l.k !== "text") { l.h = round(clamp(st.lh + dy, 3, 150)); el.style.height = l.h + "%"; }
          }
        };
        const up = () => {
          el.removeEventListener("pointermove", mv); el.removeEventListener("pointerup", up); el.removeEventListener("pointercancel", up);
          guide.hidden = true;
          if (moved) { c.change(); drawInspector(); }
        };
        el.addEventListener("pointermove", mv); el.addEventListener("pointerup", up); el.addEventListener("pointercancel", up);
      });
      box.addEventListener("keydown", (e) => {
        const l = S.sel.layer && byId(S.sel.layer); if (!l) return;
        const st = e.shiftKey ? 5 : 1;
        const d = { ArrowLeft: [-st, 0], ArrowRight: [st, 0], ArrowUp: [0, -st], ArrowDown: [0, st] }[e.key];
        if (d) { e.preventDefault(); l.x = round(l.x + d[0]); l.y = round(l.y + d[1]); c.change(); drawInspector(); }
        else if (e.key === "Delete" || e.key === "Backspace") { e.preventDefault(); removeLayer(b, l.id); }
      });
    }
    function removeLayer(b, lid) { checkpoint(); b.layers = b.layers.filter((x) => x.id !== lid); S.sel.layer = null; drawInspector(); c.change(); }

    /* ── formulário da direita ── */
    const numField = (obj, k, label, { min = -30, max = 150, step = 1 } = {}) => {
      const el = h("input", { class: "input", type: "number", min: String(min), max: String(max), step: String(step), value: String(obj[k] ?? 0) });
      el.addEventListener("input", () => { const v = Number(el.value); if (Number.isFinite(v)) { obj[k] = clamp(v, min, max); c.change(); } });
      return h("label", { class: "bd-num" }, h("span", { text: label }), el);
    };
    const LK = { text: ["T", "Texto"], img: ["🖼️", "Imagem"], video: ["🎥", "Vídeo"], shape: ["▭", "Forma"], emoji: ["🙂", "Emoji"] };
    function freeForm(b) {
      const kids = [];
      const add = (k) => {
        checkpoint();
        const id = B.uid("L");
        const base = { id, k, x: 12, y: 12 + (b.layers.length % 6) * 8, w: 60, h: 25, rot: 0 };
        const extra = {
          text: { html: "Novo texto", font: "sans", size: 6, color: "#ffffff", align: "left", bold: false, bg: "", lh: 1.2 },
          img: { url: "", fit: "cover", r: 4, w: 50, h: 30 }, video: { url: "", kind: "link", autoplay: true, loop: false, muted: false, r: 4, w: 70, h: 35 },
          shape: { fill: "#fdb92799", r: 8, w: 50, h: 20 }, emoji: { emoji: "⭐", size: 16, w: 20 },
        }[k];
        b.layers.push({ ...base, ...extra }); S.sel.layer = id; drawInspector(); c.change();
      };
      kids.push(h("div", { class: "bd-field" }, h("label", { text: "Adicionar ao card" }),
        h("div", { class: "bd-addrow" }, Object.entries(LK).map(([k, [ico, lab]]) => h("button", { type: "button", class: "btn btn-ghost btn-sm", onclick: () => add(k) }, ico + " " + lab)))));
      kids.push(h("div", { class: "bd-field" }, h("label", { text: "Elementos (o de baixo da lista fica por cima)" }),
        h("div", { class: "bd-layers" }, b.layers.map((l, i) => h("div", { class: "bd-layer" + (S.sel.layer === l.id ? " on" : "") },
          h("button", { type: "button", class: "bd-layer-t", onclick: () => { S.sel.layer = l.id; drawInspector(); drawStage(); } }, h("span", { text: LK[l.k][0] }), h("b", { text: l.k === "text" ? B.plain(l.html) || "texto vazio" : l.k === "emoji" ? l.emoji : LK[l.k][1] })),
          h("span", { class: "bd-rb" },
            h("button", { type: "button", title: "Para trás", disabled: i === 0, onclick: () => { move(b.layers, i, -1); drawInspector(); c.change(); }, text: "↑" }),
            h("button", { type: "button", title: "Para frente", disabled: i === b.layers.length - 1, onclick: () => { move(b.layers, i, 1); drawInspector(); c.change(); }, text: "↓" }),
            h("button", { type: "button", title: "Duplicar", onclick: () => { checkpoint(); const cp = JSON.parse(JSON.stringify(l)); cp.id = B.uid("L"); cp.x += 4; cp.y += 4; b.layers.splice(i + 1, 0, cp); S.sel.layer = cp.id; drawInspector(); c.change(); }, text: "⧉" }),
            h("button", { type: "button", title: "Excluir", onclick: () => removeLayer(b, l.id), text: "✕" })))),
          b.layers.length ? null : h("p", { class: "muted small", text: "Nenhum elemento ainda." }))));
      const l = b.layers.find((x) => x.id === S.sel.layer);
      if (l) {
        const f = [h("h4", { class: "bd-h4", text: `${LK[l.k][0]} ${LK[l.k][1]} selecionado` })];
        if (l.k === "text") {
          f.push(B.field("Texto", B.area(l, "html", c, { rows: 4, max: 700 })));
          f.push(B.field("Fonte", B.select(l, "font", Object.entries(M.CARD_FONTS).map(([k, v]) => [k, v.label]), c)));
          f.push(B.field("Tamanho", B.range(l, "size", c, { min: 2, max: 30, step: 0.5, fmt: (v) => v })));
          f.push(h("div", { class: "bd-field bd-inline" }, h("label", { text: "Cor" }), B.color(l, "color", c), h("label", { text: "Fundo do texto" }), B.color(l, "bg", c, { allowEmpty: true })));
          f.push(B.field("Alinhamento", B.segmented(l, "align", [["left", "Esquerda"], ["center", "Centro"], ["right", "Direita"]], c)));
          f.push(B.toggle(l, "bold", "Negrito forte", c));
          f.push(B.field("Espaço entre linhas", B.range(l, "lh", c, { min: 0.9, max: 2, step: 0.05, fmt: (v) => v })));
        } else if (l.k === "emoji") {
          f.push(B.field("Emoji", B.emoji(l, "emoji", c)));
          f.push(B.field("Tamanho", B.range(l, "size", c, { min: 3, max: 60, step: 1, fmt: (v) => v })));
        } else if (l.k === "img") {
          f.push(B.field("Imagem", B.mediaField({ url: l.url, kind: "image", onPick: (u) => { l.url = u; c.change(); drawInspector(); }, onClear: () => { l.url = ""; c.change(); drawInspector(); } })));
          f.push(B.field("Encaixe", B.segmented(l, "fit", [["cover", "Preencher"], ["contain", "Inteira"]], c)));
          f.push(B.field("Cantos arredondados", B.range(l, "r", c, { min: 0, max: 50, step: 1, fmt: (v) => v + "%" })));
        } else if (l.k === "video") {
          f.push(B.field("Vídeo", B.mediaField({ url: l.url, kind: "video", record: true, onPick: (u, k) => { l.url = u; l.kind = k; c.change(); drawInspector(); }, onClear: () => { l.url = ""; c.change(); drawInspector(); } })));
          f.push(B.toggle(l, "autoplay", "Tocar sozinho", c, true), B.toggle(l, "loop", "Repetir", c), B.toggle(l, "muted", "Começar sem som", c));
          f.push(B.field("Cantos arredondados", B.range(l, "r", c, { min: 0, max: 50, step: 1, fmt: (v) => v + "%" })));
        } else if (l.k === "shape") {
          const op = { v: l.fill && l.fill.length === 9 ? Math.round((parseInt(l.fill.slice(7), 16) / 255) * 100) : 100 };
          const base = { v: (l.fill || "#ffffff").slice(0, 7) };
          const apply = () => { l.fill = base.v + Math.round((op.v / 100) * 255).toString(16).padStart(2, "0"); c.change(); };
          const ci = h("input", { type: "color", value: base.v }); ci.addEventListener("input", () => { base.v = ci.value; apply(); });
          f.push(h("div", { class: "bd-field bd-inline" }, h("label", { text: "Cor" }), ci));
          const ro = h("output", { text: op.v + "%" }), ri = h("input", { type: "range", min: "5", max: "100", value: String(op.v) });
          ri.addEventListener("input", () => { op.v = Number(ri.value); ro.textContent = op.v + "%"; apply(); });
          f.push(B.field("Transparência", h("div", { class: "bd-range" }, ri, ro)));
          f.push(B.field("Cantos arredondados", B.range(l, "r", c, { min: 0, max: 50, step: 1, fmt: (v) => v + "%" })));
        }
        f.push(h("h4", { class: "bd-h4", text: "Posição e tamanho" }));
        f.push(h("div", { class: "bd-nums" }, numField(l, "x", "Esquerda %"), numField(l, "y", "Topo %"), numField(l, "w", "Largura %", { min: 2 }), l.k !== "text" && l.k !== "emoji" ? numField(l, "h", "Altura %", { min: 1 }) : null));
        f.push(B.field("Girar", B.range(l, "rot", c, { min: -45, max: 45, step: 1, fmt: (v) => v + "°" })));
        f.push(h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => { l.x = round((100 - l.w) / 2); c.change(); drawInspector(); }, text: "Centralizar na horizontal" }));
        kids.push(h("div", { class: "bd-layer-form" }, f));
      } else {
        kids.push(h("p", { class: "muted small", text: "Clique em um elemento na prévia para editar. Arraste para mover e puxe o quadradinho do canto para mudar o tamanho." }));
        kids.push(B.field("Formato do card", B.select(b, "ratio", Object.entries(M.FREE_RATIOS), c)));
        kids.push(B.styleEditor(b, c, { free: true }));
      }
      return kids;
    }

    /* ── provas ── */
    function examPane(list, { title, intro, sizeObj, sizeKey, sizeLabel, sizeMin, sizeMax, min }) {
      const box = h("div", { class: "bd-exam" });
      const draw = () => {
        const head = h("div", { class: "bd-exam-head" }, h("h3", { text: title }), h("p", { class: "muted", text: intro }));
        const size = sizeObj ? B.field(sizeLabel, h("input", { class: "input", type: "number", min: String(sizeMin), max: String(sizeMax), value: String(sizeObj[sizeKey] || ""), placeholder: String(sizeMin === 3 ? 12 : 20),
          oninput: (e) => { const v = Number(e.target.value); if (v) sizeObj[sizeKey] = clamp(v, sizeMin, sizeMax); else delete sizeObj[sizeKey]; c.change(); } }), "Se houver menos questões do que isso, a prova usa todas.") : null;
        const count = h("p", { class: "bd-count" + (list.length < min ? " warn" : ""), text: `${list.length} ${list.length === 1 ? "questão" : "questões"}${list.length < min ? ` · precisa de pelo menos ${min} para publicar` : ""}` });
        const items = list.map((q, i) => {
          const bad = !q.q.trim() || q.options.filter((o) => o.trim()).length < 2 || !q.answer.length;
          const det = h("details", { class: "bd-qd" + (bad ? " is-bad" : ""), open: i === list.length - 1 && !q.q },
            h("summary", null, h("b", { text: `${i + 1}. ` }), h("span", { text: q.q ? q.q.slice(0, 70) : "Questão nova" }), bad ? h("em", { text: " · incompleta" }) : null),
            B.questionEditor(q, c, { html: false, n: i + 1, onRemove: () => { checkpoint(); list.splice(i, 1); draw(); c.change(); drawOutline(); } }));
          return det;
        });
        box.replaceChildren(head, size, count, items,
          h("div", { class: "bd-exam-add" },
            h("button", { class: "btn btn-gold btn-sm", type: "button", onclick: () => { checkpoint(); const q = B.newQuestion(); q.id = nid("q"); list.push(q); draw(); c.change(); drawOutline(); }, text: "+ Questão" }),
            h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: async () => {
              const txt = await M.modal((close) => {
                const ta = h("textarea", { class: "input bd-mono", rows: "12", placeholder: "Qual o prazo ideal?\na) 5 minutos\nb) 1 dia\nc) 1 semana\nResposta: a\nExplicação: Responder rápido vende mais.\n\n(deixe uma linha em branco entre as questões)" });
                return [h("h3", { text: "Colar várias questões" }), h("p", { class: "muted", text: "Cole as questões neste formato. Pergunta, alternativas a), b), c)…, a linha Resposta: e, se quiser, Explicação:." }), ta,
                  h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(null), text: "Cancelar" }), h("button", { class: "btn btn-gold", type: "button", onclick: () => close(ta.value), text: "Importar" }))];
              });
              if (!txt) return;
              const qs = B.parseQuestions(txt);
              if (!qs.length) { M.toast("Não encontrei nenhuma questão nesse formato. Confira se cada uma tem pergunta, alternativas e a linha Resposta.", "err"); return; }
              checkpoint(); qs.forEach((q) => { q.id = nid("q"); list.push(q); }); draw(); c.change(); drawOutline();
              M.toast(`${qs.length} ${qs.length === 1 ? "questão importada" : "questões importadas"}.`, "ok");
            }, text: "Colar várias de uma vez" })));
      };
      draw();
      return box;
    }

    function drawInspector() {
      const s = S.sel, kids = [];
      const D_ = D();
      if (s.kind === "trail") {
        kids.push(h("h3", { text: "Dados da trilha" }));
        kids.push(B.field("Nome", B.input(D_, "title", c, { max: 80 })));
        kids.push(B.field("Etiqueta (aparece no cartão)", B.input(D_, "tag", c, { max: 24, ph: "Ex.: Atendimento" })));
        kids.push(B.field("Frase de apresentação", B.area(D_, "tagline", c, { rows: 2, max: 200, rich: false })));
        kids.push(B.field("Subtítulo da página da trilha (opcional)", B.input(D_, "subtitle", c, { max: 160 })));
        kids.push(h("div", { class: "bd-box" }, h("b", { text: "Situação" }), h("p", { class: "muted small", text: S.live ? "Os alunos veem a última versão publicada. O que você edita aqui só chega a eles quando clicar em Publicar mudanças." : "Rascunho: só você vê. Clique em Publicar quando terminar." })));
        kids.push(h("div", { class: "bd-box" }, h("b", { text: "Antes de publicar" }), checklist()));
      } else if (s.kind === "module") {
        const m = curM();
        kids.push(h("h3", { text: `Módulo ${s.m + 1}` }));
        kids.push(B.field("Nome do módulo", B.input(m, "title", c, { max: 80 })));
        kids.push(B.field("Frase de apresentação", B.input(m, "tagline", c, { max: 160 })));
        kids.push(B.field("Ao final, o aluno sabe…", B.area(m, "outcome", c, { rows: 2, max: 200, rich: false })));
        kids.push(h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => select({ kind: "exam", m: s.m }), text: `Prova do módulo (${m.questions.length} questões)` }));
      } else if (s.kind === "lesson") {
        const l = curL();
        kids.push(h("h3", { text: `Aula ${s.l + 1}` }));
        kids.push(B.field("Nome da aula", B.input(l, "title", c, { max: 80 })));
        kids.push(B.field("Duração estimada (minutos)", B.input(l, "minutes", c, { type: "number", max: 3, conv: (v) => clamp(Number(v) || 3, 1, 60) })));
        kids.push(B.field("O que o aluno aprende", B.area(l, "goal", c, { rows: 2, max: 200, rich: false })));
        kids.push(h("div", { class: "bd-addrow" }, h("button", { class: "btn btn-gold btn-sm", type: "button", onclick: () => addCard(), text: "+ Adicionar card" }), h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: previewLesson, text: "Ver aula como aluno" })));
      } else if (s.kind === "card") {
        const b = curB();
        if (!b) kids.push(h("p", { class: "muted", text: "Escolha um card na lista." }));
        else {
          const def = B.CARDS[b.t];
          kids.push(h("div", { class: "bd-card-head" }, h("span", { class: "bd-ci", text: def?.ico }), h("h3", { text: def?.label || b.t })));
          if (b.t === "free") kids.push(freeForm(b));
          else { kids.push(def.form(b, c)); kids.push(B.styleEditor(b, c)); }
        }
      } else if (s.kind === "exam") {
        const m = curM();
        kids.push(examPane(m.questions, { title: `Prova do módulo ${s.m + 1}`, intro: "O aluno faz esta prova depois das aulas do módulo. Acertando mais de 90%, passa; entre 70% e 90%, refaz só o que errou; até 70%, refaz as aulas.", sizeObj: m, sizeKey: "examSize", sizeLabel: "Quantas questões cada prova sorteia", sizeMin: 3, sizeMax: 40, min: 3 }));
      } else if (s.kind === "final") {
        kids.push(examPane(D_.finalQuestions, { title: "Prova final", intro: "Libera o certificado. Ela sorteia questões das provas de cada módulo e mais algumas exclusivas da final (as que você cria aqui). Reprovar na final zera a trilha, como nas outras.", sizeObj: D_, sizeKey: "finalSize", sizeLabel: "Quantas questões a prova final sorteia", sizeMin: 5, sizeMax: 60, min: 5 }));
      }
      panes.insp.replaceChildren(kids);
      panes.insp.scrollTop = 0;
    }
    function checklist() {
      const D_ = D(), items = [];
      const ok = (t, good) => h("li", { class: good ? "ok" : "no" }, h("span", { text: good ? "✓" : "•" }), " " + t);
      items.push(ok("Nome da trilha", D_.title.trim().length >= 3));
      items.push(ok(`${D_.modules.length} módulo(s) com aulas e cards`, D_.modules.length > 0 && D_.modules.every((m) => m.lessons.length && m.lessons.every((l) => l.blocks.length))));
      items.push(ok("Provas de módulo com 3 questões ou mais", D_.modules.length > 0 && D_.modules.every((m) => m.questions.length >= 3)));
      items.push(ok("Prova final com 5 questões ou mais", D_.finalQuestions.length >= 5));
      return h("ul", { class: "bd-check-list" }, items);
    }

    function drawAll() { drawOutline(); drawStage(); drawInspector(); drawTabs(); paneVis(); }

    /* ── montagem ── */
    const root = h("div", { class: "bd" });
    const bar = h("div", { class: "bd-bar" },
      h("a", { class: "btn btn-ghost btn-sm", href: "#/admin/trilhas" }, "← Trilhas"),
      h("strong", { class: "bd-title", text: D().title || "Nova trilha" }), pubInfo, statusEl, h("span", { class: "spacer" }),
      undoBtn, previewBtn, saveBtn, pubBtn);
    root.append(bar, tabs, h("div", { class: "bd-body" }, panes.out, panes.stage, panes.insp));
    setPub(); setStatus(); drawAll();

    // título da barra acompanha o nome
    const iv = setInterval(() => {
      if (!root.isConnected) { clearInterval(iv); return; }
      const t = bar.querySelector(".bd-title");
      if (t && t.textContent !== (D().title || "Nova trilha")) t.textContent = D().title || "Nova trilha";
    }, 700);

    const onKey = (e) => {
      if (!root.isConnected) { document.removeEventListener("keydown", onKey); return; }
      const tag = (e.target.tagName || "").toLowerCase();
      if ((e.ctrlKey || e.metaKey) && e.key === "s") { e.preventDefault(); save(); }
      else if ((e.ctrlKey || e.metaKey) && e.key === "z" && !["input", "textarea"].includes(tag) && !e.shiftKey) { e.preventDefault(); undo(); }
    };
    document.addEventListener("keydown", onKey);
    const onLeave = (e) => { if (S.dirty && root.isConnected) { e.preventDefault(); e.returnValue = ""; } };
    window.addEventListener("beforeunload", onLeave);
    const onHash = () => { if (S.dirty) save(); window.removeEventListener("beforeunload", onLeave); window.removeEventListener("hashchange", onHash); };
    window.addEventListener("hashchange", onHash);

    root._crumbs = [{ text: "Administração" }, { text: "Trilhas", href: "#/admin/trilhas" }, { text: D().title || "Editor" }];
    return root;
  };
})();

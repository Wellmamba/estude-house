/* Console de administração: painel, acessos, logs e banco de questões. */
(function () {
  const { h } = M;

  const LOG_LABELS = {
    cadastro: "Cadastro", login: "Login", login_falhou: "Login falhou", aula_concluida: "Aula concluída",
    prova_iniciada: "Prova iniciada", prova_enviada: "Prova enviada", senha_alterada: "Senha alterada",
    admin_criou_acesso: "Admin criou acesso", admin_subiu_acessos: "Admin subiu lista", admin_alterou_usuario: "Admin alterou usuário",
    admin_zerou_progresso: "Admin zerou progresso", admin_removeu_usuario: "Admin removeu usuário",
    cadastro_pendente: "Cadastro aguardando aprovação", cadastro_aprovado: "Cadastro aprovado", cadastro_novo_codigo: "Novo código gerado", cadastro_ativado: "Acesso ativado", cadastro_recusado: "Cadastro recusado", cadastro_removido: "Cadastro removido", post_criado: "Post criado", post_aprovado: "Post aprovado", post_recusado: "Post recusado", post_removido: "Post removido", post_editado: "Post editado (tag, fixar ou enquete)", post_bloqueado: "Post barrado pelo filtro", comentario_bloqueado: "Comentário barrado pelo filtro", tag_criada: "Tag criada", tag_editada: "Tag editada", tag_removida: "Tag removida", admin_moderacao: "Admin mudou a moderação",
    admin_config_engajamento: "Admin mudou XP e metas",
  };
  const logTone = (t) => (t === "login_falhou" || t === "admin_removeu_usuario" ? "chip-bad" : t.startsWith("admin_") ? "chip-gold" : t === "prova_enviada" ? "chip-warn" : "");
  const metaText = (m) => Object.entries(m || {}).map(([k, v]) => `${k}: ${v}`).join(" · ");
  const finalChip = (s) => s === "approved" ? h("span", { class: "chip chip-good", text: "Aprovado" }) : s === "retry" ? h("span", { class: "chip chip-warn", text: "Refazendo" }) : s === "reset" ? h("span", { class: "chip chip-bad", text: "Reprovado" }) : h("span", { class: "chip", text: "—" });
  const guard = (perm) => (M.can(perm) ? null : h("div", { class: "empty" }, h("h3", { text: "Área restrita" }), h("p", { text: "Você não tem permissão para ver esta página." })));

  /* escolha das permissões de um sub-administrador (caixas de marcar). get() devolve a lista marcada. */
  function permsEditor(selected = []) {
    const on = new Set(selected);
    const boxes = M.PERMS.map((p) => {
      const input = h("input", { type: "checkbox", id: "perm-" + p.k, checked: on.has(p.k) });
      input.addEventListener("change", () => { if (input.checked) on.add(p.k); else on.delete(p.k); });
      return { p, input, row: h("label", { class: "perm-item", for: "perm-" + p.k }, input, h("span", null, h("strong", { text: p.label }), h("span", { class: "muted small", text: p.desc }))) };
    });
    const setAll = (v) => boxes.forEach(({ p, input }) => { input.checked = v; if (v) on.add(p.k); else on.delete(p.k); });
    const node = h("div", { class: "perm-box" },
      h("div", { class: "row perm-head" }, h("strong", { text: "O que esta pessoa pode fazer" }), h("span", { class: "spacer", style: "flex:1" }),
        h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => setAll(true), text: "Marcar tudo" }),
        h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => setAll(false), text: "Limpar" })),
      h("div", { class: "perm-list" }, boxes.map((b) => b.row)),
      h("p", { class: "muted small", style: "margin:8px 0 0", text: "Sub-administradores não mudam perfis, não removem acessos e não mexem em outros gestores. Isso é só do administrador." }));
    return { node, get: () => M.PERMS.map((p) => p.k).filter((k) => on.has(k)) };
  }
  const roleChip = (u) => h("span", { class: "chip " + (u.role === "aluno" ? "" : "chip-gold"), text: u.master ? "Master" : u.role === "admin" ? "Adm" : u.role === "subadmin" ? "Sub-adm" : "Aluno" });
  const copy = async (text, ok) => { try { await navigator.clipboard.writeText(text); M.toast(ok || "Copiado.", "ok"); } catch { M.toast("Não foi possível copiar. Selecione e copie manualmente.", "err"); } };

  /* trilha escolhida nos painéis (lembrada enquanto a página está aberta) */
  let adminTrail = null;
  const curTrail = () => M.trailById(adminTrail) || M.trails()[0];
  function trailPicker(onChange) {
    if (M.trails().length < 2) return null;
    const sel = h("select", { class: "select", "aria-label": "Trilha", style: "width:auto" }, M.trails().map((t) => h("option", { value: t.id, text: t.title })));
    sel.value = curTrail().id;
    sel.addEventListener("change", () => { adminTrail = sel.value; onChange(); });
    return sel;
  }

  M.views.adminHome = async function () {
    const g = guard("usuarios"); if (g) return g;
    const d = await M.get("admin/overview");
    const holder = h("div");
    function draw() {
      const t = curTrail(), tr = d.trails[t.id] || { started: 0, approved: 0, avgProgress: 0, funnel: [] };
      const maxV = Math.max(1, d.alunos);
      const fs = d.rules.examSize;
      holder.replaceChildren(
        h("div", { class: "grid grid-4" },
          stat(d.users, `acessos (${d.alunos} alunos, ${d.admins} adm)`), stat(tr.started, "alunos que começaram esta trilha"),
          stat(tr.approved, "aprovados na prova final"), stat(tr.avgProgress + "%", "média de aulas concluídas")),
        h("section", { class: "panel", style: "margin-top:18px" }, h("h3", { text: "Funil por módulo" }),
          h("div", { class: "row small muted", style: "margin-bottom:10px" },
            h("span", null, "Barra dourada: começaram"), h("span", null, "Barra lilás: aprovados")),
          h("div", { class: "funnel" }, tr.funnel.map((f) => {
            const m = t.modules.find((x) => x.id === f.id);
            return h("div", { class: "funnel-row" }, h("span", { text: `${m.n}. ${m.title}` }),
              h("div", { class: "funnel-bars" },
                h("div", { class: "bar" }, h("i", { style: `width:${M.pct(f.started, maxV)}%` })),
                h("div", { class: "bar b2" }, h("i", { style: `width:${M.pct(f.approved, maxV)}%` }))),
              h("span", { class: "small muted", text: `${f.started} / ${f.approved}` }));
          }))),
        h("section", { class: "panel" }, h("div", { class: "row row-between" }, h("h3", { style: "margin:0", text: "Atividade recente" }), h("a", { class: "btn btn-ghost btn-sm", href: "#/admin/logs" }, "Ver todos os logs")),
          d.recent.length ? h("div", { class: "table-wrap", style: "margin-top:12px" }, logTable(d.recent)) : h("p", { class: "muted", text: "Nenhuma atividade ainda." })),
        h("section", { class: "panel" }, h("h3", { text: "Regras de aprovação em vigor" }),
          h("p", { class: "muted small", style: "margin:0", text: `Provas de módulo: ${fs.module} questões (a de ambientação, ${fs.m0}). Prova final: ${t.finalSize || fs.final}. Reprovação na final ${d.rules.finalFailResetsAll ? "zera a trilha inteira" : "zera só a prova final"}.` }),
          M.rulesList.call(null)));
    }
    draw();
    const pick = trailPicker(draw);
    return h("div", null,
      h("div", { class: "page-head" }, h("h2", { text: "Painel" }), h("p", { text: "Visão master de todos os acessos e do andamento das trilhas." })),
      pick ? h("div", { class: "toolbar" }, h("label", { class: "small muted", text: "Trilha:" }), pick) : null,
      holder);
    function stat(v, l) { return h("div", { class: "stat" }, h("b", { text: v }), h("span", { text: l })); }
  };

  function logTable(rows) {
    return h("table", { class: "tbl" },
      h("thead", null, h("tr", null, ["Quando", "Evento", "Pessoa", "Detalhes", "IP"].map((t) => h("th", { text: t })))),
      h("tbody", null, rows.map((l) => h("tr", null,
        h("td", { text: M.fmtDateTime(l.ts), style: "white-space:nowrap" }),
        h("td", null, h("span", { class: "chip " + logTone(l.type), text: LOG_LABELS[l.type] || l.type })),
        h("td", { class: "who" }, h("b", { text: l.name || "—" }), h("span", { text: l.email || "" })),
        h("td", null, h("div", { class: "log-meta", text: metaText(l.meta) })),
        h("td", { class: "small muted", text: l.ip || "—" })))));
  }

  /* ───── acessos ───── */
  M.views.adminUsers = async function () {
    const g = guard("usuarios"); if (g) return g;
    let users = (await M.get("admin/users")).users;
    let q = "", role = "";
    const holder = h("div");
    const search = h("input", { class: "input", type: "search", placeholder: "Buscar por nome ou e-mail", "aria-label": "Buscar acesso" });
    const sel = h("select", { class: "select", "aria-label": "Filtrar por perfil" },
      h("option", { value: "", text: "Todos os perfis" }), h("option", { value: "aluno", text: "Alunos" }), h("option", { value: "subadmin", text: "Sub-administradores" }), h("option", { value: "admin", text: "Administradores" }));
    search.addEventListener("input", () => { q = search.value.toLowerCase(); draw(); });
    sel.addEventListener("change", () => { role = sel.value; draw(); });
    const pick = trailPicker(() => draw());

    async function reload() { users = (await M.get("admin/users")).users; draw(); }
    function draw() {
      const t = curTrail();
      const rows = users.filter((u) => (!role || u.role === role) && (!q || (u.name + " " + u.email).toLowerCase().includes(q)));
      holder.replaceChildren(rows.length ? h("div", { class: "table-wrap" }, h("table", { class: "tbl" },
        h("thead", null, h("tr", null, ["Pessoa", "Perfil", "Aulas", "Módulos", "Final", "XP", "Último acesso", ""].map((t) => h("th", { text: t })))),
        h("tbody", null, rows.map((u) => h("tr", null,
          h("td", { class: "who" }, h("b", { text: u.name }), h("span", { text: (u.nickname ? "@" + u.nickname + " · " : "") + u.email })),
          h("td", null, roleChip(u), u.role === "subadmin" ? h("span", { class: "muted small", style: "margin-left:6px", text: `${(u.perms || []).length} permissões` }) : null, u.active ? null : h("span", { class: "chip chip-bad", style: "margin-left:6px", text: "Desativado" })),
          h("td", { text: `${u.trails[t.id]?.lessonsDone ?? 0}/${M.totalLessons(t)}` }), h("td", { text: `${u.trails[t.id]?.modulesApproved ?? 0}/${t.modules.length}` }),
          h("td", null, finalChip(u.trails[t.id]?.finalStatus)), h("td", { text: u.xp }), h("td", { class: "small", text: M.fmtDateTime(u.lastLoginAt) }),
          h("td", null, h("a", { class: "btn btn-ghost btn-sm", href: "#/admin/usuarios/" + u.id }, "Abrir"))))))) : h("div", { class: "empty", text: "Nenhum acesso encontrado com esse filtro." }));
    }

    function newAccess() {
      M.modal((close) => {
        const err = h("div");
        const f = (id, label, type, extra) => h("div", { class: "field" }, h("label", { for: "n-" + id, text: label }), h("input", { class: "input", id: "n-" + id, name: id, type, autocomplete: "off", ...extra }));
        const roleSel = h("select", { class: "select", id: "n-role", name: "role" }, h("option", { value: "aluno", text: "Aluno" }),
          M.isFull() ? h("option", { value: "subadmin", text: "Sub-administrador (você escolhe as permissões)" }) : null,
          M.isFull() ? h("option", { value: "admin", text: "Administrador (igual ao master)" }) : null);
        const pe = permsEditor([]);
        pe.node.hidden = true;
        roleSel.addEventListener("change", () => { pe.node.hidden = roleSel.value !== "subadmin"; });
        const form = h("form", { novalidate: true }, f("name", "Nome completo", "text", { required: true }), f("email", "E-mail", "email", { required: true }),
          h("div", { class: "field" }, h("label", { for: "n-role", text: "Perfil" }), roleSel),
          pe.node,
          h("div", { class: "field" }, h("label", { for: "n-password", text: "Senha inicial (opcional)" }), h("input", { class: "input", id: "n-password", name: "password", type: "text", autocomplete: "off" }), h("span", { class: "hint", text: "Deixe em branco para gerar uma senha automática." })),
          err,
          h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(), text: "Cancelar" }), h("button", { class: "btn btn-gold", type: "submit", text: "Criar acesso" })));
        form.onsubmit = async (e) => {
          e.preventDefault(); err.replaceChildren();
          try {
            const d = await M.post("admin/users", { ...Object.fromEntries(new FormData(form).entries()), perms: pe.get() });
            close();
            await reload();
            if (d.password) showPasswords([{ email: d.user.email, ok: true, password: d.password, role: d.user.role }], "Acesso criado");
            else M.toast("Acesso criado.", "ok");
          } catch (ex) { err.replaceChildren(h("div", { class: "form-error", role: "alert", text: ex.message })); }
        };
        return [h("h3", { text: "Novo acesso" }), form];
      });
    }

    function bulk() {
      M.modal((close) => {
        const ta = h("textarea", { class: "textarea", id: "bulk", placeholder: "Maria Souza, maria@empresa.com\nJoão Lima; joao@empresa.com; Senha123; adm", "aria-describedby": "bulk-h" });
        const err = h("div");
        const go = h("button", { class: "btn btn-gold", type: "button", text: "Criar acessos" });
        go.addEventListener("click", async () => {
          err.replaceChildren(); go.disabled = true;
          try {
            const d = await M.post("admin/users/bulk", { text: ta.value });
            close(); await reload(); showPasswords(d.results, "Resultado da lista");
          } catch (ex) { err.replaceChildren(h("div", { class: "form-error", role: "alert", text: ex.message })); go.disabled = false; }
        });
        return [h("h3", { text: "Subir lista de acessos" }),
          h("p", { class: "muted small", id: "bulk-h", html: "Uma pessoa por linha: <strong>nome, e-mail, senha, perfil</strong>. Senha e perfil são opcionais (perfil: <em>aluno</em>" + (M.isFull() ? ", <em>adm</em> ou <em>sub</em> (sub-administrador sem permissões, que você ajusta depois)" : "") + "). Aceita vírgula, ponto e vírgula ou tabulação, então dá para colar direto de uma planilha. Até 300 linhas." }),
          h("div", { class: "field" }, h("label", { for: "bulk", text: "Lista" }), ta), err,
          h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(), text: "Cancelar" }), go)];
      });
    }

    const top = h("div", { class: "toolbar" }, search, sel, pick, h("span", { class: "spacer", style: "flex:1" }),
      h("button", { class: "btn btn-ghost", type: "button", onclick: bulk, text: "Subir lista" }),
      h("button", { class: "btn btn-gold", type: "button", onclick: newAccess, text: "Novo acesso" }));
    draw();
    return h("div", null, h("div", { class: "page-head" }, h("h2", { text: "Acessos" }), h("p", { text: "Crie acessos, defina quem é aluno ou administrador e acompanhe cada pessoa." })), top, holder);
  };

  function showPasswords(results, title) {
    const gen = results.filter((r) => r.ok && r.password);
    const csv = gen.map((r) => `${r.email};${r.password}`).join("\n");
    M.modal((close) => [
      h("h3", { text: title }),
      h("p", { class: "muted small", text: `${results.filter((r) => r.ok).length} criados, ${results.filter((r) => !r.ok).length} com problema. Senhas geradas aparecem só agora. Copie e envie por um canal seguro.` }),
      h("div", { class: "table-wrap" }, h("table", { class: "tbl", style: "min-width:0" },
        h("thead", null, h("tr", null, ["E-mail", "Resultado", "Senha"].map((t) => h("th", { text: t })))),
        h("tbody", null, results.map((r) => h("tr", null, h("td", { text: r.email, style: "overflow-wrap:anywhere" }),
          h("td", null, r.ok ? h("span", { class: "chip chip-good", text: r.role === "admin" ? "Adm criado" : r.role === "subadmin" ? "Sub-adm criado" : "Criado" }) : h("span", { class: "chip chip-bad", text: r.error })),
          h("td", null, r.password ? h("span", { class: "pw-box", text: r.password }) : "—")))))),
      h("div", { class: "dlg-actions" }, gen.length ? h("button", { class: "btn btn-ghost", type: "button", onclick: () => copy(csv, "Lista de e-mail e senha copiada."), text: "Copiar e-mails e senhas" }) : null,
        h("button", { class: "btn btn-gold", type: "button", onclick: () => close(), text: "Fechar" }))]);
  }

  /* ───── detalhe do usuário ───── */
  M.views.adminUser = async function (id) {
    const g = guard("usuarios"); if (g) return g;
    try { await M.refreshMe(); } catch {}
    const box = h("div");
    /* o que está aberto some do estado a cada recarga (liberar trilha recarrega a tela): guardo aqui */
    const opened = new Set();
    const det = (key, cls, head, ...kids) => {
      const el = h("details", { class: cls, open: opened.has(key) }, h("summary", null, head, cls === "acc-in" ? h("span", { class: "acc-c", "aria-hidden": "true" }) : null), ...kids);
      el.addEventListener("toggle", () => { if (el.open) opened.add(key); else opened.delete(key); });
      return el;
    };
    const acc = (key, title, sum, ...kids) => det(key, "acc", [h("span", { class: "acc-t", text: title }), sum ? h("span", { class: "acc-s", text: sum }) : null, h("span", { class: "acc-c", "aria-hidden": "true" })], h("div", { class: "acc-b" }, ...kids));
    async function load() {
      let d;
      try { d = await M.get("admin/users/" + id); } catch (ex) { box.replaceChildren(h("div", { class: "empty" }, h("h3", { text: ex.message }), h("a", { class: "btn btn-gold", href: "#/admin/usuarios" }, "Voltar"))); return; }
      const u = d.user, p = d.progress, self = u.id === M.session.user.id, locked = u.master || self;
      /* só o administrador muda perfil, define permissões e remove acesso; sub-adm com "Acessos" cuida só de alunos */
      const noTouch = !M.isFull() && u.role !== "aluno";
      const roleSel = h("select", { class: "select", id: "u-role", disabled: locked || !M.isFull(), style: "width:auto" },
        h("option", { value: "aluno", text: "Aluno" }), h("option", { value: "subadmin", text: "Sub-administrador" }), h("option", { value: "admin", text: "Administrador" }));
      roleSel.value = u.role;
      roleSel.addEventListener("change", () => act(() => M.api("PATCH", "admin/users/" + id, { role: roleSel.value }), roleSel.value === "subadmin" ? "Agora é sub-administrador. Marque as permissões abaixo." : "Perfil atualizado."));
      const pe = u.role === "subadmin" && M.isFull() ? permsEditor(u.perms || []) : null;
      async function act(fn, okMsg) {
        try { await fn(); M.toast(okMsg, "ok"); await load(); } catch (ex) { M.toast(ex.message, "err"); await load(); }
      }
      box.replaceChildren(
        h("a", { class: "small", href: "#/admin/usuarios" }, "← Todos os acessos"),
        h("header", { class: "uhero" },
          h("div", { class: "uhero-av" }, M.avatar(u, 96)),
          h("div", { class: "uhero-main" },
            h("h2", { text: u.name }),
            h("p", { class: "uhero-mail", text: u.email }),
            h("div", { class: "row" }, h("span", { class: "chip " + (u.role !== "aluno" ? "chip-gold" : ""), text: M.roleLabel(u) }),
              u.active ? h("span", { class: "chip chip-good", text: "Ativo" }) : h("span", { class: "chip chip-bad", text: "Desativado" }),
              u.nickname ? h("a", { class: "chip", href: M.profileHref(u), text: "@" + u.nickname }) : null),
            h("p", { class: "muted small", style: "margin:8px 0 0", text: "Criado em " + M.fmtDate(u.createdAt) })),
          h("div", { class: "uhero-stats" }, [
            ["XP", u.xp], ["Aulas feitas", u.lessonsDone || 0],
            ["Provas aprovadas", Object.values(p.exams || {}).filter((e) => e && e.status === "approved").length],
            ["Último acesso", u.lastLoginAt ? M.fmtDateTime(u.lastLoginAt) : "—"]].map(([k, v]) =>
            h("div", { class: "ustat" }, h("strong", { text: String(v) }), h("span", { text: k }))))),
        h("div", { class: "acc-bar" }, h("button", { class: "btn btn-ghost btn-sm", type: "button", text: "Abrir tudo", onclick: () => box.querySelectorAll("details.acc").forEach((x) => { x.open = true; }) }),
          h("button", { class: "btn btn-ghost btn-sm", type: "button", text: "Recolher tudo", onclick: () => box.querySelectorAll("details.acc, details.acc-in").forEach((x) => { x.open = false; }) })),
        pe ? acc("perms", "Permissões do sub-administrador", `${(u.perms || []).length} marcadas`,
          h("p", { class: "muted small", style: "margin:0 0 10px", text: "Marque só o que esta pessoa precisa. A mudança vale na próxima vez que ela abrir uma página." }),
          pe.node,
          h("div", { class: "row", style: "margin-top:12px" }, h("button", { class: "btn btn-gold btn-sm", type: "button", text: "Salvar permissões", onclick: () => act(() => M.api("PATCH", "admin/users/" + id, { perms: pe.get() }), "Permissões salvas.") }))) : null,
        u.role === "subadmin" && !pe ? acc("perms", "Permissões", `${(u.perms || []).length} marcadas`,
          h("p", { class: "muted small", style: "margin:0", text: (u.perms || []).length ? (u.perms || []).map((k) => M.PERMS.find((x) => x.k === k)?.label || k).join(" · ") : "Nenhuma permissão marcada." })) : null,
        u.role === "aluno" ? (() => {
          const all = M.allTrails();
          const restr = all.filter((t) => M.isRestricted(t.id)), free = all.filter((t) => !M.isRestricted(t.id));
          const given = restr.filter((t) => (u.trailAccess || []).includes(t.id)).length;
          const item = (t) => {
            const has = (u.trailAccess || []).includes(t.id);
            const cb = h("input", { type: "checkbox", id: "ta-" + t.id, checked: has });
            cb.addEventListener("change", () => {
              const cur = new Set(u.trailAccess || []);
              if (cb.checked) cur.add(t.id); else cur.delete(t.id);
              act(() => M.api("PATCH", "admin/users/" + id, { trails: [...cur] }), cb.checked ? "Trilha liberada para " + u.name + "." : "Trilha retirada. O progresso dele fica guardado.");
            });
            return h("label", { class: "perm-item", for: "ta-" + t.id }, cb, h("span", null, h("strong", { text: t.title }), h("span", { class: "muted small", text: has ? "Liberada" : "Não liberada" })));
          };
          return acc("trails", "Trilhas liberadas", restr.length ? `${given} de ${restr.length} escolhidas` : "todas abertas para todos",
            restr.length
              ? [h("p", { class: "muted small", style: "margin:0 0 10px", text: "Estas trilhas são só para alunos escolhidos. Marque as que esta pessoa pode ver." }), h("div", { class: "perm-list perm-cols" }, restr.map(item))]
              : h("p", { class: "muted small", style: "margin:0", text: "Nenhuma trilha está em \"só alunos escolhidos\": todas aparecem para todos os alunos." }),
            free.length ? det("trails-free", "acc-in", [h("span", { class: "acc-t", text: `${free.length} trilhas abertas para todos os alunos` })], h("div", { class: "chips" }, free.map((t) => h("span", { class: "chip", text: t.title })))) : null);
        })() : null,
        (() => {
          const rows = M.trails().map((t) => {
            const v = p.trails[t.id] || {}, ex = [...t.modules.map((m) => p.exams[m.id]), p.exams[M.finalScope(t)]].filter(Boolean);
            return { t, v, on: (v.lessonsDone || 0) > 0 || ex.length > 0 };
          });
          const on = rows.filter((r) => r.on), off = rows.filter((r) => !r.on);
          const sum = on.length ? `${on.length} ${on.length === 1 ? "trilha com atividade" : "trilhas com atividade"}` : "sem atividade ainda";
          return acc("prog", "Andamento", sum,
            on.length ? h("div", { class: "prog-list" }, on.map(({ t, v }) => {
              const pct = v.lessonsTotal ? Math.round((v.lessonsDone / v.lessonsTotal) * 100) : 0;
              return det("prog-" + t.id, "acc-in", [h("span", { class: "acc-t", text: t.title }),
                h("span", { class: "pbar", "aria-hidden": "true" }, h("i", { style: `width:${pct}%` })),
                h("span", { class: "acc-s", text: `${v.lessonsDone}/${v.lessonsTotal} aulas` }), v.finalStatus ? finalChip(v.finalStatus) : null],
                h("div", { class: "table-wrap" }, h("table", { class: "tbl", style: "min-width:520px" },
                  h("thead", null, h("tr", null, ["Módulo", "Aulas", "Prova", "Melhor nota", "Tentativas"].map((x) => h("th", { text: x })))),
                  h("tbody", null, [...t.modules.map((m, i) => ({ id: m.id, name: `${m.n}. ${m.title}`, st: p.trails[t.id].modules[i] })), { id: M.finalScope(t), name: "Prova final", st: null }].map((r) => {
                    const e = p.exams[r.id];
                    return h("tr", null, h("td", { text: r.name }), h("td", { text: r.st ? `${r.st.done}/${r.st.total}` : "—" }),
                      h("td", null, e?.status ? finalChip(e.status) : "—"), h("td", { text: e?.bestPct ? e.bestPct + "%" : "—" }), h("td", { text: e?.attempts || 0 }));
                  })))));
            })) : h("p", { class: "muted small", style: "margin:0", text: "Esta pessoa ainda não fez nenhuma aula nem prova." }),
            off.length ? det("prog-idle", "acc-in", [h("span", { class: "acc-t", text: `${off.length} ${off.length === 1 ? "trilha sem atividade" : "trilhas sem atividade"}` })], h("div", { class: "chips" }, off.map((r) => h("span", { class: "chip", text: r.t.title })))) : null);
        })(),
        acc("manage", "Gestão do acesso", "perfil, senha, zerar, remover",
          noTouch ? h("p", { class: "muted small", text: "Só administradores mexem em gestores." }) : null,
          locked ? h("p", { class: "muted small", text: u.master ? "O acesso master não pode ter perfil alterado, ser desativado ou removido." : "Você não pode alterar o próprio perfil nem desativar o próprio acesso aqui." }) : null,
          h("div", { class: "grid grid-2" },
            h("div", { class: "field" }, h("label", { for: "u-role", text: "Perfil" }), roleSel),
            h("div", { class: "field" }, h("span", { style: "font-weight:600;font-size:.95rem", text: "Situação" }),
              h("button", { class: "btn btn-ghost btn-sm", style: "justify-self:start", type: "button", disabled: locked || noTouch,
                onclick: () => act(() => M.api("PATCH", "admin/users/" + id, { active: !u.active }), u.active ? "Acesso desativado." : "Acesso reativado."), text: u.active ? "Desativar acesso" : "Reativar acesso" }))),
          h("div", { class: "row" },
            h("button", { class: "btn btn-ghost btn-sm", type: "button", text: "Redefinir senha", disabled: noTouch, onclick: async () => {
              const pw = await M.modal((close) => {
                const input = h("input", { class: "input", id: "np", type: "text", autocomplete: "off" });
                const err = h("div");
                const ok = h("button", { class: "btn btn-gold", type: "button", text: "Salvar senha" });
                ok.addEventListener("click", () => { if (input.value.length < 8) { err.replaceChildren(h("div", { class: "form-error", text: "Use ao menos 8 caracteres, com letras e números." })); return; } close(input.value); });
                return [h("h3", { text: "Redefinir senha" }), h("div", { class: "field" }, h("label", { for: "np", text: "Nova senha de " + u.name }), input), err,
                  h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(), text: "Cancelar" }), ok)];
              });
              if (pw) act(() => M.api("PATCH", "admin/users/" + id, { password: pw }), "Senha redefinida.");
            } }),
            h("button", { class: "btn btn-ghost btn-sm", type: "button", text: "Zerar todo o progresso", disabled: noTouch, onclick: async () => {
              if (await M.confirm({ title: "Zerar progresso?", text: `Todas as aulas e provas de <strong>${M.esc(u.name)}</strong> serão apagadas. Isso não tem volta.`, ok: "Zerar tudo", danger: true }))
                act(() => M.post("admin/users/" + id + "/reset", { scope: "all" }), "Progresso zerado.");
            } }),
            h("button", { class: "btn btn-danger btn-sm", type: "button", disabled: locked || !M.isFull(), text: "Remover acesso", onclick: async () => {
              if (await M.confirm({ title: "Remover acesso?", text: `<strong>${M.esc(u.name)}</strong> perde o login e todo o progresso. Não tem volta.`, ok: "Remover", danger: true })) {
                try { await M.api("DELETE", "admin/users/" + id); M.toast("Acesso removido.", "ok"); location.hash = "#/admin/usuarios"; } catch (ex) { M.toast(ex.message, "err"); }
              }
            } })),
          h("div", { class: "grid grid-2", style: "margin-top:16px" },
            M.trails().length > 1 ? h("div", { class: "field" }, h("label", { for: "u-reset-trail", text: "Zerar uma trilha inteira" }),
              (() => {
                const s2 = h("select", { class: "select", id: "u-reset-trail", style: "width:auto" }, h("option", { value: "", text: "Escolha a trilha" }), M.trails().map((t) => h("option", { value: t.id, text: t.title })));
                s2.addEventListener("change", async () => {
                  if (!s2.value) return;
                  const t = M.trailById(s2.value);
                  if (await M.confirm({ title: "Zerar a trilha?", text: `Todas as aulas e provas de <strong>${M.esc(t.title)}</strong> voltam ao zero para <strong>${M.esc(u.name)}</strong>. As outras trilhas não mudam.`, ok: "Zerar trilha", danger: true }))
                    act(() => M.post("admin/users/" + id + "/reset", { scope: "trail:" + t.id }), "Trilha zerada.");
                  s2.value = "";
                });
                return s2;
              })()) : null,
            h("div", { class: "field" }, h("label", { for: "u-reset", text: "Zerar só um módulo" }),
              (() => {
                const s = h("select", { class: "select", id: "u-reset", style: "width:auto" }, h("option", { value: "", text: "Escolha o módulo" }),
                  M.trails().map((t) => h("optgroup", { label: t.title }, t.modules.map((m) => h("option", { value: m.id, text: `${m.n}. ${m.title}` })))));
                s.addEventListener("change", async () => {
                  if (!s.value) return;
                  const m = M.modulo(s.value);
                  if (await M.confirm({ title: "Zerar módulo " + m.n + "?", text: "As aulas e a prova desse módulo voltam ao zero, e a prova final da trilha também.", ok: "Zerar módulo", danger: true }))
                    act(() => M.post("admin/users/" + id + "/reset", { scope: s.value }), "Módulo zerado.");
                  s.value = "";
                });
                return s;
              })()))),
        acc("hist", "Histórico de provas", d.history.length ? `${d.history.length} ${d.history.length === 1 ? "tentativa" : "tentativas"}` : "nenhuma ainda",
          d.history.length ? h("div", { class: "table-wrap" }, h("table", { class: "tbl", style: "min-width:520px" },
            h("thead", null, h("tr", null, ["Quando", "Prova", "Tipo", "Resultado", "Nota"].map((t) => h("th", { text: t })))),
            h("tbody", null, d.history.map((x) => h("tr", null, h("td", { text: M.fmtDateTime(x.at) }), h("td", { text: M.examName(x.scope, true) }),
              h("td", { text: x.mode === "retry" ? "Só erros" : "Completa" }),
              h("td", null, h("span", { class: "chip " + (x.outcome === "aprovado" ? "chip-good" : x.outcome === "refazer-erros" ? "chip-warn" : "chip-bad"), text: x.outcome === "aprovado" ? "Aprovado" : x.outcome === "refazer-erros" ? "Refazer erros" : "Reprovado" })),
              h("td", { text: x.pct != null ? M.fmtPct(x.pct) + "% (" + x.correct + "/" + x.total + ")" : `${x.correct}/${x.total}` })))))) : h("p", { class: "muted", text: "Nenhuma prova feita ainda." })));
    }
    box.append(M.loading());
    await load();
    return box;
  };

  /* ───── logs ───── */
  M.views.adminLogs = async function () {
    const g = guard("usuarios"); if (g) return g;
    let type = "", q = "", next = null, rows = [];
    const holder = h("div"), more = h("div", { class: "row", style: "margin-top:14px" });
    const sel = h("select", { class: "select", "aria-label": "Tipo de evento" }, h("option", { value: "", text: "Todos os eventos" }), Object.entries(LOG_LABELS).map(([k, v]) => h("option", { value: k, text: v })));
    const search = h("input", { class: "input", type: "search", placeholder: "E-mail, nome, IP ou detalhe", "aria-label": "Buscar nos logs" });
    let timer;
    sel.addEventListener("change", () => { type = sel.value; fetchLogs(true); });
    search.addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(() => { q = search.value.trim(); fetchLogs(true); }, 350); });
    async function fetchLogs(reset) {
      if (reset) { rows = []; next = null; holder.replaceChildren(M.loading()); }
      const qs = new URLSearchParams({ limit: "60" });
      if (type) qs.set("type", type); if (q) qs.set("q", q); if (!reset && next) qs.set("after", next);
      try {
        const d = await M.get("admin/logs?" + qs);
        rows = rows.concat(d.logs); next = d.next;
        holder.replaceChildren(rows.length ? h("div", { class: "table-wrap" }, logTable(rows)) : h("div", { class: "empty", text: "Nenhum evento com esse filtro." }));
        more.replaceChildren(next ? h("button", { class: "btn btn-ghost", type: "button", onclick: () => fetchLogs(false), text: "Carregar mais" }) : h("span", { class: "muted small", text: `${rows.length} eventos` }));
      } catch (ex) { holder.replaceChildren(h("div", { class: "form-error", text: ex.message })); }
    }
    await fetchLogs(true);
    return h("div", null, h("div", { class: "page-head" }, h("h2", { text: "Logs" }), h("p", { text: "Tudo o que acontece na plataforma: cadastros, logins, aulas, provas e ações de administradores." })),
      h("div", { class: "toolbar" }, sel, search), holder, more);
  };

  /* ───── banco de questões ───── */
  M.views.adminQuestions = async function () {
    const g = guard("trilhas"); if (g) return g;
    const d = await M.get("admin/questions");
    let mod = "";
    const holder = h("div", { class: "review" });
    const sel = h("select", { class: "select", "aria-label": "Filtrar por módulo" }, h("option", { value: "", text: `Todas (${d.questions.length})` }),
      M.trails().map((t) => h("optgroup", { label: t.title }, [
        ...t.modules.map((m) => h("option", { value: m.id, text: `Módulo ${m.n}: ${m.title}` })),
        h("option", { value: M.finalScope(t), text: "Somente prova final" })])));
    sel.addEventListener("change", () => { mod = sel.value; draw(); });
    function draw() {
      const list = d.questions.filter((x) => !mod || x.module === mod);
      holder.replaceChildren(...list.map((x) => h("article", { class: "q-admin" },
        h("div", { class: "row", style: "margin-bottom:8px" }, h("span", { class: "chip", text: x.id }), h("span", { class: "chip", text: x.topic }), h("span", { class: "chip " + (x.type === "multi" ? "chip-warn" : ""), text: x.type === "multi" ? "Múltipla" : "Única" })),
        h("h4", { text: x.q }),
        h("ul", null, x.options.map((o, k) => h("li", { class: x.answer.includes(k) ? "right" : "", text: `${"ABCDEFGH"[k]}. ${o}` }))),
        h("p", { class: "muted small", style: "margin:10px 0 0", html: "<strong>Explicação:</strong> " + M.esc(x.why) }))));
    }
    draw();
    return h("div", null, h("div", { class: "page-head" }, h("h2", { text: "Banco de questões" }),
      h("p", { text: `${d.questions.length} questões com gabarito. Cada prova sorteia ${d.rules.examSize.module} (módulo) ou ${d.rules.examSize.final} (final, padrão) e embaralha as alternativas. Só administradores veem esta página.` })),
      h("div", { class: "toolbar" }, sel), holder);
  };

  /* ───── aprovação de cadastros e de posts ───── */
  function refreshBadge() {
    const n = (M.session.pending || 0) + (M.session.pendingSignups || 0);
    const badge = document.querySelector('[data-key="admin-approve"] .nav-badge');
    if (badge) { badge.hidden = !n; badge.textContent = String(n); }
  }
  const copyBtn = (text, label) => h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: async (e) => {
    try { await navigator.clipboard.writeText(text); e.currentTarget.textContent = "Copiado"; } catch { M.toast("Não consegui copiar. Selecione e copie à mão.", "err"); }
  }, text: label || "Copiar" });
  const when = (ts) => { const t = M.timeAgo(ts); return t === "agora" ? "agora" : /^\d+ (min|h|d)$/.test(t) ? "há " + t : "em " + t; };

  // Mostra o código de ativação para o gestor entregar à pessoa (ele não fica salvo em lugar nenhum).
  function handoff(person, r) {
    return M.modal((close) => h("div", { class: "handoff" },
      h("h3", { text: "Código de ativação" }),
      h("p", { class: "muted", text: `Passe este código para ${person.name} (${person.email}). Ela abre a tela de entrada, toca em “Tenho um código de ativação”, digita o e-mail do cadastro e o código. Vale por ${r.hours || 48} horas e só funciona uma vez.` }),
      h("div", { class: "copy-row" }, h("span", { class: "big-code", text: r.code }), copyBtn(r.code, "Copiar código")),
      h("p", { class: "muted small", style: "margin:0", text: "Por segurança o código não fica guardado. Se a pessoa perder, use Gerar novo código." }),
      h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-gold", type: "button", onclick: () => close(), text: "Pronto" }))));
  }

  async function signupsSection() {
    const box = h("section", { class: "panel" });
    async function load() {
      const d = await M.get("admin/signups");
      M.session.pendingSignups = d.signups.filter((x) => x.access === "pending").length;
      refreshBadge();
      const row = (x) => {
        const actions = [];
        if (x.access === "pending" || x.access === "rejected") {
          const ok = h("button", { class: "btn btn-gold btn-sm", type: "button" }, M.icon("check", 16), x.access === "rejected" ? "Aprovar mesmo assim" : "Aprovar");
          ok.addEventListener("click", async () => {
            ok.disabled = true;
            try {
              const r = await M.post(`admin/signups/${x.id}/approve`);
              M.toast(`Aprovado. Entregue o código para ${x.name}.`, "ok");
              await handoff(x, r);
              await load();
            } catch (e) { M.toast(e.message, "err"); ok.disabled = false; }
          });
          actions.push(ok);
        }
        if (x.access === "pending") {
          actions.push(h("button", { class: "btn btn-danger btn-sm", type: "button", text: "Recusar", onclick: async () => {
            const reason = await M.modal((close) => {
              const ta = h("textarea", { class: "textarea", id: "srej", rows: "2", maxlength: "200", placeholder: "Ex.: não conheço essa pessoa" });
              return [h("h3", { text: "Recusar cadastro" }), h("p", { class: "muted small", text: `${x.name} (${x.email}) não conseguirá entrar.` }),
                h("div", { class: "field" }, h("label", { for: "srej", text: "Motivo (só você vê)" }), ta),
                h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(), text: "Cancelar" }), h("button", { class: "btn btn-danger", type: "button", onclick: () => close(ta.value || ""), text: "Recusar" }))];
            });
            if (reason === undefined) return;
            try { await M.post(`admin/signups/${x.id}/reject`, { reason }); M.toast("Cadastro recusado.", "ok"); await load(); } catch (e) { M.toast(e.message, "err"); }
          } }));
        }
        if (x.access === "invited") {
          const re = h("button", { class: "btn btn-ghost btn-sm", type: "button", text: "Gerar novo código" });
          re.addEventListener("click", async () => {
            re.disabled = true;
            try {
              const r = await M.post(`admin/signups/${x.id}/resend`);
              M.toast("Novo código gerado. O anterior deixou de valer.", "ok");
              await handoff(x, r);
              await load();
            } catch (e) { M.toast(e.message, "err"); re.disabled = false; }
          });
          actions.push(re);
        }
        if (x.access !== "pending") {
          actions.push(h("button", { class: "icon-btn", type: "button", "aria-label": "Remover cadastro", onclick: async () => {
            const okk = await M.confirm({ title: "Remover este cadastro?", text: `${x.email} poderá se cadastrar de novo.`, ok: "Remover", danger: true });
            if (!okk) return;
            try { await M.api("DELETE", `admin/signups/${x.id}`); await load(); } catch (e) { M.toast(e.message, "err"); }
          } }, M.icon("trash", 16)));
        }
        const chip = x.access === "pending" ? h("span", { class: "chip chip-warn chip-xs", text: "Aguardando aprovação" })
          : x.access === "invited" ? h("span", { class: "chip chip-xs " + (x.expired ? "chip-bad" : "chip-gold"), text: x.expired ? "Código expirado" : "Aprovado · falta o código" })
          : h("span", { class: "chip chip-bad chip-xs", text: "Recusado" });
        return h("div", { class: "signup-row" },
          h("div", { class: "who" }, h("strong", { text: x.name }), h("span", { class: "muted small", text: `${x.email} · cadastro ${when(x.createdAt)}` }), x.reason ? h("span", { class: "muted small", text: "Motivo: " + x.reason }) : null),
          chip, h("div", { class: "row", style: "gap:8px" }, actions));
      };
      const order = { pending: 0, invited: 1, rejected: 2 };
      const rows = [...d.signups].sort((a, b) => order[a.access] - order[b.access] || b.createdAt - a.createdAt);
      box.replaceChildren(
        h("h3", { text: "Cadastros novos" }),
        h("p", { class: "muted small", style: "margin:0 0 12px", text: "Ao aprovar, o sistema gera um código de 6 dígitos. Você entrega o código à pessoa (pessoalmente, WhatsApp ou Slack) e ela digita na tela de entrada para liberar o acesso." }),
        rows.length ? h("div", { class: "signup-list" }, rows.map(row)) : h("p", { class: "muted", style: "margin:0", text: "Nenhum cadastro novo por enquanto." }));
    }
    await load();
    return box;
  }

  M.views.adminApprovals = async function () {
    const g = guard("aprovar"); if (g) return g;
    const holder = h("div", { class: "feed-list" });
    const signups = await signupsSection();
    async function load() {
      holder.replaceChildren(M.loading());
      const d = await M.get("admin/feed/pending");
      M.session.pending = d.posts.length;
      refreshBadge();
      if (!d.posts.length) { holder.replaceChildren(h("div", { class: "empty" }, h("h3", { text: "Nada aguardando aprovação" }), h("p", { text: "Quando um aluno enviar um post, ele aparece aqui." }))); return; }
      holder.replaceChildren(...d.posts.map((p) => {
        const card = M.postCard({ ...p, canDelete: false });
        const approve = h("button", { class: "btn btn-gold", type: "button" }, M.icon("check", 18), "Aprovar e publicar");
        const reject = h("button", { class: "btn btn-danger", type: "button", text: "Recusar" });
        const bar = h("div", { class: "row mod-bar" }, approve, reject, h("span", { class: "muted small", text: `Enviado ${(() => { const t = M.timeAgo(p.createdAt); return t === "agora" ? "agora" : /^\d+ (min|h|d)$/.test(t) ? "há " + t : "em " + t; })()}. Ao aprovar, ${p.author.name.split(" ")[0]} ganha XP.` }));
        approve.addEventListener("click", async () => {
          approve.disabled = reject.disabled = true;
          try { const r = await M.post(`admin/feed/${p.id}/approve`); M.toast(`Post publicado. +${r.xp} XP para ${p.author.name.split(" ")[0]}.`, "ok"); await load(); }
          catch (e) { M.toast(e.message, "err"); approve.disabled = reject.disabled = false; }
        });
        reject.addEventListener("click", async () => {
          const reason = await M.modal((close) => {
            const ta = h("textarea", { class: "textarea", id: "rej", rows: "3", maxlength: "200", placeholder: "Ex.: o conteúdo não tem relação com o time" });
            return [h("h3", { text: "Recusar este post" }), h("p", { class: "muted small", text: "O aluno vê o motivo e pode enviar outro." }),
              h("div", { class: "field" }, h("label", { for: "rej", text: "Motivo (opcional)" }), ta),
              h("div", { class: "dlg-actions" }, h("button", { class: "btn btn-ghost", type: "button", onclick: () => close(), text: "Cancelar" }), h("button", { class: "btn btn-danger", type: "button", onclick: () => close(ta.value || ""), text: "Recusar post" }))];
          });
          if (reason === undefined) return;
          try { await M.post(`admin/feed/${p.id}/reject`, { reason }); M.toast("Post recusado.", "ok"); await load(); } catch (e) { M.toast(e.message, "err"); }
        });
        card.append(bar);
        return card;
      }));
    }
    await load();
    return h("div", { class: "feed" }, h("div", { class: "page-head" }, h("h2", { text: "Aprovações" }), h("p", { text: "Cadastros novos e posts enviados por alunos. Nada entra sem a sua aprovação." })), signups, h("h3", { style: "margin-top:8px", text: "Posts dos alunos" }), holder);
  };

  /* ───── XP e metas ───── */
  M.views.adminEngage = async function () {
    const g = guard("engajamento"); if (g) return g;
    const d = await M.get("admin/engage/config");
    const cfg = structuredClone(d.config);
    const M_ = d.metrics;
    const num = (obj, key, label, min, max, hint) => h("div", { class: "field" }, h("label", { for: "c-" + label, text: label }),
      h("input", { class: "input", id: "c-" + label, type: "number", min: String(min), max: String(max), value: String(obj[key]), oninput: (e) => { obj[key] = e.target.value === "" ? "" : Number(e.target.value); } }),
      hint ? h("span", { class: "hint", text: hint }) : null);
    const goalsBox = h("div", { class: "goal-edit" });
    function drawGoals() {
      goalsBox.replaceChildren(...cfg.goals.map((gl, i) => h("div", { class: "goal-row" + (gl.active === false ? " off" : "") },
        h("input", { class: "input", type: "text", value: gl.title, maxlength: "80", "aria-label": "Nome da meta", oninput: (e) => { gl.title = e.target.value; } }),
        h("select", { class: "select", "aria-label": "O que conta", onchange: (e) => { gl.metric = e.target.value; } }, Object.entries(M_).map(([k, v]) => h("option", { value: k, text: v, selected: gl.metric === k }))),
        h("input", { class: "input num", type: "number", min: "1", max: "100", value: String(gl.target), "aria-label": "Alvo", oninput: (e) => { gl.target = Number(e.target.value); } }),
        h("select", { class: "select", "aria-label": "Período", onchange: (e) => { gl.period = e.target.value; } }, h("option", { value: "day", text: "por dia", selected: gl.period === "day" }), h("option", { value: "week", text: "por semana", selected: gl.period === "week" })),
        h("input", { class: "input num", type: "number", min: "0", max: "1000", value: String(gl.xp), "aria-label": "XP da meta", oninput: (e) => { gl.xp = Number(e.target.value); } }),
        h("label", { class: "chk" }, h("input", { type: "checkbox", checked: gl.active !== false, onchange: (e) => { gl.active = e.target.checked; drawGoals(); } }), "Ativa"),
        h("button", { class: "icon-btn", type: "button", "aria-label": "Remover meta", onclick: () => { cfg.goals.splice(i, 1); drawGoals(); } }, M.icon("trash", 16)))));
    }
    drawGoals();
    const save = h("button", { class: "btn btn-gold", type: "button", text: "Salvar XP e metas" });
    save.addEventListener("click", async () => {
      save.disabled = true;
      try { const r = await M.api("PUT", "admin/engage/config", cfg); Object.assign(cfg, structuredClone(r.config)); drawGoals(); M.toast("Salvo. Já vale para o time.", "ok"); }
      catch (e) { M.toast(e.message, "err"); }
      save.disabled = false;
    });
    return h("div", null,
      h("div", { class: "page-head" }, h("h2", { text: "Engajamento: XP e metas" }), h("p", { text: "Defina quanto cada ação rende e quais metas aparecem no menu de XP dos alunos. Gestores não ganham XP." })),
      h("section", { class: "panel" }, h("h3", { text: "XP por ação" }),
        h("div", { class: "grid grid-3" },
          num(cfg.xp, "checkin", "Check-in diário", 0, 1000), num(cfg.xp, "streakBonus", "Bônus por dia seguido", 0, 100, "Soma a cada dia seguido de check-in."), num(cfg.xp, "streakBonusMax", "Bônus máximo do check-in", 0, 1000),
          num(cfg.xp, "post", "Post aprovado", 0, 1000), num(cfg.xp, "comment", "Comentário", 0, 1000, "Vale a partir de 8 letras."), num(cfg.xp, "hype", "Hype em post de outra pessoa", 0, 1000), num(cfg.xp, "destaque", "Assistir um destaque (1x por destaque)", 0, 1000))),
      h("section", { class: "panel" }, h("h3", { text: "Limite de ações com XP por dia" }),
        h("p", { class: "muted small", style: "margin:0 0 12px", text: "Passou do limite, a ação continua valendo para as metas, mas não rende XP. Evita farmar com cliques." }),
        h("div", { class: "grid grid-3" }, num(cfg.caps, "post", "Posts aprovados", 1, 100), num(cfg.caps, "comment", "Comentários", 1, 100), num(cfg.caps, "hype", "Hypes", 1, 100), num(cfg.caps, "destaque", "Destaques assistidos", 1, 100))),
      h("section", { class: "panel" }, h("h3", { text: "Metas de engajamento" }),
        h("p", { class: "muted small", style: "margin:0 0 12px", text: "Cada meta paga o XP uma vez por dia ou por semana (semana de segunda a domingo)." }),
        goalsBox,
        h("div", { class: "row", style: "margin-top:14px" },
          h("button", { class: "btn btn-ghost", type: "button", onclick: () => { if (cfg.goals.length >= 12) { M.toast("No máximo 12 metas.", "err"); return; } cfg.goals.push({ title: "Nova meta", metric: "comment", target: 3, period: "week", xp: 20, active: true }); drawGoals(); } }, M.icon("plus", 16), "Adicionar meta"),
          h("button", { class: "btn btn-ghost", type: "button", onclick: () => { cfg.goals = structuredClone(d.defaults.goals); drawGoals(); }, text: "Voltar às metas padrão" }))),
      h("div", { class: "row" }, save));
  };
})();

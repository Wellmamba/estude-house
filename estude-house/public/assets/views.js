/* Telas do aluno: entrada, casca, trilha, módulo, aula, conta, certificado. */
(function () {
  const { h, svg } = M;
  M.views = M.views || {};

  M.go = (hash) => { if (location.hash === hash) M.render(); else location.hash = hash; };
  M.refreshMe = async function () {
    const d = await M.get("me");
    M.session.user = d.user; M.session.progress = d.progress; M.session.rules = d.rules;
    return d;
  };

  /* ───── playbook: a trilha desenhada como jogada ───── */
  function wrapLabel(s, max = 15) {
    const words = s.split(" "); const lines = [""];
    for (const w of words) {
      const cur = lines[lines.length - 1];
      if ((cur + " " + w).trim().length <= max || !cur) lines[lines.length - 1] = (cur + " " + w).trim();
      else lines.push(w);
    }
    return lines.slice(0, 2);
  }

  M.playbook = function (progress, { interactive = true } = {}) {
    const mods = M.curso().modules;
    const n = mods.length + 1;
    const W = 1000, stepX = (W - 120) / (n - 1);
    const pts = Array.from({ length: n }, (_, i) => ({ x: 60 + i * stepX, y: i % 2 ? 78 : 168 }));
    const p = progress;
    const stateOf = (i) => {
      if (!p) return i === 0 ? "avail" : "locked";
      if (i < mods.length) {
        const st = p.modules[i];
        if (st.exam === "approved") return "done";
        return st.unlocked || M.isAdmin() ? "avail" : "locked";
      }
      if (p.exams.final?.status === "approved") return "done";
      return p.finalUnlocked || M.isAdmin() ? "avail" : "locked";
    };
    const states = pts.map((_, i) => stateOf(i));
    const current = states.findIndex((s) => s === "avail");

    let paths = "";
    for (let i = 0; i < n - 1; i++) {
      const a = pts[i], b = pts[i + 1], mx = (a.x + b.x) / 2;
      paths += `<path class="pb-path ${states[i] === "done" ? "done" : ""}" d="M${a.x} ${a.y} C${mx} ${a.y} ${mx} ${b.y} ${b.x} ${b.y}"/>`;
    }
    let nodes = "";
    pts.forEach((pt, i) => {
      const isFinal = i === n - 1;
      const m = mods[i];
      const st = states[i];
      const title = isFinal ? "Prova final" : m.title;
      const href = isFinal ? "#/exam/final" : "#/m/" + m.id;
      const frac = !p || isFinal ? (st === "done" ? 100 : 0) : Math.round((p.modules[i].done / p.modules[i].total) * 100);
      const sub = isFinal ? (st === "done" ? "aprovado" : st === "locked" ? "bloqueada" : "liberada")
        : !p ? `${m.lessons.length} aulas` : st === "done" ? "aprovado" : `${p.modules[i].done}/${p.modules[i].total} aulas`;
      const r = isFinal ? 38 : 32;
      const lines = wrapLabel(title);
      const body = `
        ${i === current ? `<circle class="pb-pulse" cx="${pt.x}" cy="${pt.y}" r="${r}"/>` : ""}
        <circle class="base" cx="${pt.x}" cy="${pt.y}" r="${r}"/>
        ${st === "avail" && frac > 0 ? `<circle class="pb-ring" cx="${pt.x}" cy="${pt.y}" r="${r + 6}" pathLength="100" stroke-dasharray="${frac} 100"/>` : ""}
        ${st === "locked"
          ? `<g transform="translate(${pt.x - 10} ${pt.y - 11})" fill="none" stroke="#bcb0dc" stroke-width="2" stroke-linecap="round"><rect x="2" y="9" width="16" height="12" rx="2"/><path d="M5 9V6a5 5 0 0 1 10 0v3"/></g>`
          : st === "done" && isFinal ? `<path d="M${pt.x - 12} ${pt.y} l8 9 l16 -18" fill="none" stroke="#1a0f2e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`
          : `<text class="num" x="${pt.x}" y="${pt.y}">${isFinal ? "★" : m.n}</text>`}
        ${lines.map((l, k) => `<text class="lab" x="${pt.x}" y="${pt.y + r + 22 + k * 17}" style="paint-order:stroke;stroke:#150b2b;stroke-width:5px">${M.esc(l)}</text>`).join("")}
        <text class="sub" x="${pt.x}" y="${pt.y + r + 22 + lines.length * 17}" style="paint-order:stroke;stroke:#150b2b;stroke-width:4px">${M.esc(sub)}</text>`;
      nodes += interactive && st !== "locked"
        ? `<g class="pb-node ${st}"><a href="${href}" aria-label="${M.esc(title)}: ${M.esc(sub)}">${body}</a></g>`
        : `<g class="pb-node ${st}" ${interactive ? `role="img" aria-label="${M.esc(title)}: bloqueado"` : ""}>${body}</g>`;
    });
    const el = svg(`<svg viewBox="0 28 ${W} 262" role="group" aria-label="Mapa da trilha PriceBot">${paths}${nodes}</svg>`);
    return h("div", { class: "playbook pb-scroll" }, el);
  };

  /* capa: o caminho de qualquer formação, sem citar um curso específico */
  M.heroPlay = function () {
    const steps = [["1", "Aulas e vídeos", "no seu ritmo"], ["2", "Quizzes", "feedback na hora"], ["3", "Provas", "nota para avançar"], ["★", "Certificado", "ao concluir"]];
    const W = 1000, stepX = (W - 160) / 3;
    const pts = steps.map((_, i) => ({ x: 80 + i * stepX, y: i % 2 ? 78 : 150 }));
    let paths = "", nodes = "";
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], mx = (a.x + b.x) / 2;
      paths += `<path class="pb-path" d="M${a.x} ${a.y} C${mx} ${a.y} ${mx} ${b.y} ${b.x} ${b.y}"/>`;
    }
    pts.forEach((pt, i) => {
      const last = i === pts.length - 1;
      nodes += `<g class="pb-node ${last ? "done" : "avail"}">
        ${i === 0 ? `<circle class="pb-pulse" cx="${pt.x}" cy="${pt.y}" r="34"/>` : ""}
        <circle class="base" cx="${pt.x}" cy="${pt.y}" r="34"/>
        <text class="num" x="${pt.x}" y="${pt.y}">${steps[i][0]}</text>
        <text class="lab" x="${pt.x}" y="${pt.y + 66}" style="font-size:23px;paint-order:stroke;stroke:#150b2b;stroke-width:5px">${steps[i][1]}</text>
        <text class="sub" x="${pt.x}" y="${pt.y + 90}" style="font-size:19px;paint-order:stroke;stroke:#150b2b;stroke-width:4px">${steps[i][2]}</text></g>`;
    });
    return h("div", { class: "playbook pb-scroll" }, svg(`<svg viewBox="0 28 ${W} 250" role="img" aria-label="Como funciona: aulas e vídeos, quizzes, provas e certificado">${paths}${nodes}</svg>`));
  };

  /* ───── casca ───── */
  let shell = null;
  M.resetShell = () => { shell = null; };
  function buildShell() {
    const u = M.session.user;
    const link = (key, href, icon, text) => h("a", { href, "data-key": key }, M.icon(icon), h("span", { text }));
    const nav = h("nav", { class: "nav", "aria-label": "Principal" },
      h("div", { class: "nav-sep", text: "Formação PriceBot" }),
      link("home", "#/", "home", "Minha trilha"),
      link("cert", "#/cert", "cert", "Certificado"),
      h("div", { class: "nav-sep", text: "Sua conta" }),
      link("conta", "#/conta", "user", "Minha conta"),
      M.isAdmin() ? [
        h("div", { class: "nav-sep", text: "Administração" }),
        link("admin", "#/admin", "shield", "Painel"),
        link("admin-users", "#/admin/usuarios", "users", "Acessos"),
        link("admin-logs", "#/admin/logs", "list", "Logs"),
        link("admin-q", "#/admin/perguntas", "help", "Banco de questões"),
      ] : null);
    const side = h("aside", { class: "side", id: "side" },
      M.brand("#/"), nav,
      h("div", { class: "side-foot" },
        h("div", { class: "me-card" }, h("strong", { text: u.name }), h("span", { text: u.email }),
          u.role === "admin" ? h("div", { style: "margin-top:8px" }, h("span", { class: "chip chip-gold", text: "Administrador" })) : null),
        h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: M.logout }, M.icon("out", 18), "Sair")));
    const menuBtn = h("button", { class: "btn btn-ghost btn-sm menu-btn", type: "button", "aria-label": "Abrir menu", "aria-controls": "side", "aria-expanded": "false" }, M.icon("menu", 18));
    menuBtn.addEventListener("click", () => {
      const open = side.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    side.addEventListener("click", (e) => { if (e.target.closest("a")) { side.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });
    const crumbs = h("div", { class: "crumbs" });
    const xp = h("span", { class: "chip chip-gold" });
    const top = h("header", { class: "top" }, menuBtn, crumbs, h("span", { class: "spacer" }), xp);
    const page = h("div", { class: "page", id: "main", tabindex: "-1" });
    const main = h("main", { class: "main" }, top, page);
    const root = h("div", { class: "shell" }, side, main);
    M.mount(root);
    return { root, side, nav, crumbs, xp, page };
  }

  M.setPage = function (key, crumbParts, node, { wide = false } = {}) {
    if (!shell || !document.body.contains(shell.root)) shell = buildShell();
    shell.nav.querySelectorAll("a").forEach((a) => {
      if (a.dataset.key === key) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    shell.crumbs.replaceChildren(...(crumbParts || []).flatMap((c, i) => {
      const el = c.href ? h("a", { href: c.href, text: c.text }) : h("span", { text: c.text });
      return i ? [" / ", el] : [el];
    }));
    const pr = M.session.progress;
    shell.xp.textContent = pr ? `${pr.xp} XP` : "";
    shell.page.className = "page" + (wide ? " page-wide" : "");
    shell.page.replaceChildren(node);
    window.scrollTo(0, 0);
    shell.page.focus({ preventScroll: true });
  };
  M.loading = (text) => h("div", { class: "loading", role: "status", text: text || "Carregando…" });

  M.logout = function () {
    M.setToken(""); M.session.user = null; M.session.progress = null; shell = null;
    location.hash = "#/entrar"; M.render();
  };

  /* ───── entrada ───── */
  M.views.auth = function (mode) {
    let tab = mode === "cadastro" ? "cadastro" : "entrar";
    const err = h("div");
    const form = h("form", { novalidate: true });
    const tabs = h("div", { class: "tabs", role: "tablist" });
    const card = h("div", { class: "auth-card" }, tabs, err, form);

    function field(id, label, type, ac, hint) {
      return h("div", { class: "field" },
        h("label", { for: id, text: label }),
        h("input", { class: "input", id, name: id, type, autocomplete: ac, required: true }),
        hint ? h("span", { class: "hint", text: hint }) : null);
    }
    function draw() {
      tabs.replaceChildren(
        ...[["entrar", "Entrar"], ["cadastro", "Criar conta"]].map(([k, t]) =>
          h("button", { type: "button", role: "tab", "aria-selected": String(tab === k), text: t, onclick: () => { tab = k; err.replaceChildren(); draw(); } })));
      const isReg = tab === "cadastro";
      const btn = h("button", { class: "btn btn-gold", type: "submit", style: "width:100%", text: isReg ? "Criar minha conta" : "Entrar" });
      form.replaceChildren(
        isReg ? field("name", "Nome completo", "text", "name") : null,
        field("email", "E-mail", "email", "email"),
        field("password", "Senha", "password", isReg ? "new-password" : "current-password", isReg ? "Mínimo de 8 caracteres, com letras e números." : null),
        isReg ? field("password2", "Repita a senha", "password", "new-password") : null,
        btn,
        h("p", { class: "muted small", style: "margin:14px 0 0", text: isReg ? "Já tem conta? Use a aba Entrar." : "Ainda não tem conta? Crie na aba ao lado. Se um administrador criou seu acesso, entre com o e-mail e a senha que ele enviou." }));
      form.onsubmit = async (e) => {
        e.preventDefault();
        err.replaceChildren();
        const v = Object.fromEntries(new FormData(form).entries());
        if (isReg && v.password !== v.password2) {
          err.replaceChildren(h("div", { class: "form-error", role: "alert", text: "As duas senhas precisam ser iguais." }));
          return;
        }
        btn.disabled = true; btn.textContent = "Aguarde…";
        try {
          const d = await M.post(isReg ? "auth/register" : "auth/login", v);
          M.setToken(d.token);
          await M.refreshMe();
          M.resetShell();
          M.toast(isReg ? "Conta criada. Bem-vindo, " + M.firstName(d.user.name) + "." : "Bem-vindo de volta, " + M.firstName(d.user.name) + ".", "ok");
          M.go("#/");
        } catch (ex) {
          err.replaceChildren(h("div", { class: "form-error", role: "alert", text: ex.message }));
          btn.disabled = false; btn.textContent = isReg ? "Criar minha conta" : "Entrar";
        }
      };
    }
    draw();
    return h("div", { class: "auth" },
      h("section", { class: "auth-hero" },
        M.brand("#/entrar"),
        h("h1", { text: "Seu ambiente de estudos." }),
        h("p", { class: "lead", text: "Trilhas com aulas em vídeo, textos, quizzes e provas. Você estuda no seu ritmo, prova o que aprendeu e sai com certificado." }),
        M.heroPlay(),
        h("p", { class: "muted small", text: "Novas formações e testes da Mamba Digital entram aqui o tempo todo, com o mesmo login." })),
      h("div", { class: "auth-card-wrap" }, card));
  };

  /* ───── trilha (início) ───── */
  function nextStep() {
    const p = M.session.progress, mods = M.curso().modules;
    for (let i = 0; i < mods.length; i++) {
      const st = p.modules[i];
      if (st.exam === "approved") continue;
      if (!st.unlocked && !M.isAdmin()) break;
      const l = mods[i].lessons.find((x) => !p.lessons[x.id]);
      if (l) return { kind: "lesson", href: "#/l/" + l.id, title: l.title, mod: mods[i], retry: false };
      return { kind: "exam", href: "#/exam/" + mods[i].id, title: M.examName(mods[i].id), mod: mods[i], retry: st.exam === "retry" };
    }
    if (p.finalUnlocked) {
      if (p.exams.final?.status === "approved") return { kind: "cert", href: "#/cert", title: "Seu certificado" };
      return { kind: "exam", href: "#/exam/final", title: "Prova final", retry: p.exams.final?.status === "retry" };
    }
    return null;
  }

  M.views.home = async function () {
    await M.refreshMe();
    const p = M.session.progress, c = M.curso();
    const done = Object.keys(p.lessons).length, total = M.totalLessons();
    const approved = p.modules.filter((m) => m.exam === "approved").length;
    const next = nextStep();
    const first = !done && !approved;

    const nextCard = next && h("section", { class: "panel next-card", "aria-label": "Próximo passo" },
      h("div", null,
        h("span", { class: "chip chip-gold", text: first ? "Comece por aqui" : next.kind === "cert" ? "Concluído" : "Seu próximo passo" }),
        h("h3", { style: "margin-top:12px", text: next.kind === "lesson" ? next.title : next.kind === "cert" ? "Você terminou a formação" : next.retry ? next.title + ": refazer os erros" : next.title }),
        h("p", { class: "muted", style: "margin:6px 0 0", text: next.kind === "lesson" ? `Módulo ${next.mod.n}: ${next.mod.title}` : next.kind === "cert" ? "Baixe ou imprima o certificado." : next.retry ? "Você só refaz as questões que errou." : "Você já viu todo o conteúdo. Agora é a prova." })),
      h("a", { class: "btn btn-gold", href: next.href }, next.kind === "lesson" ? (first ? "Começar a trilha" : "Continuar aula") : next.kind === "cert" ? "Ver certificado" : "Fazer a prova", M.icon("arrow", 18)));

    const stats = h("div", { class: "grid grid-4" },
      stat(`${done}/${total}`, "aulas concluídas"),
      stat(`${approved}/${c.modules.length}`, "módulos aprovados"),
      stat(p.xp, "pontos de experiência"),
      stat(p.exams.final?.status === "approved" ? "Aprovado" : p.finalUnlocked ? "Liberada" : "Bloqueada", "prova final", true));

    const modList = h("div", { class: "mod-list" }, c.modules.map((m, i) => {
      const st = p.modules[i];
      const locked = !st.unlocked && !M.isAdmin();
      const el = h(locked ? "div" : "a", { class: "mod-card" + (locked ? " locked" : ""), href: locked ? null : "#/m/" + m.id },
        h("div", { class: "mod-n", text: m.n }),
        h("div", null, h("h3", { text: m.title }), h("p", { text: m.tagline }),
          h("div", { class: "bar", role: "progressbar", "aria-valuenow": String(M.pct(st.done, st.total)), "aria-valuemin": "0", "aria-valuemax": "100", "aria-label": `Progresso do módulo ${m.n}` },
            h("i", { style: `width:${M.pct(st.done, st.total)}%` }))),
        h("div", { class: "chips row", style: "justify-content:flex-end" },
          h("span", { class: "chip", text: `${st.done}/${st.total} aulas` }), examChip(st.exam, locked)));
      return el;
    }));

    return h("div", null,
      h("div", { class: "page-head" },
        h("h2", { text: "Olá, " + M.firstName(M.session.user.name) }),
        h("p", { text: c.subtitle })),
      nextCard, h("div", { style: "height:18px" }), stats,
      h("section", { class: "panel", style: "margin-top:18px" }, h("h3", { text: "Mapa da trilha" }), M.playbook(p)),
      h("h2", { style: "margin:40px 0 16px", text: "Módulos" }), modList,
      h("section", { class: "empty", style: "margin-top:28px" },
        h("strong", { text: "Novas formações a caminho" }),
        h("p", { style: "margin:6px 0 0", text: "Outros treinamentos e testes da Mamba Digital serão publicados aqui. Você receberá o acesso por este mesmo login." })));
  };
  function stat(v, l, txt) { return h("div", { class: "stat" }, h("b", { class: txt ? "txt" : "", text: v }), h("span", { text: l })); }
  function examChip(st, locked) {
    if (locked) return h("span", { class: "chip", text: "Bloqueado" });
    if (st === "approved") return h("span", { class: "chip chip-good", text: "Aprovado" });
    if (st === "retry") return h("span", { class: "chip chip-warn", text: "Refazer erros" });
    if (st === "reset") return h("span", { class: "chip chip-bad", text: "Refazer aulas" });
    return h("span", { class: "chip", text: "Prova pendente" });
  }

  /* ───── regras das provas (reaproveitado) ───── */
  M.rulesList = function () {
    const r = M.session.rules || { failMax: 70, passAbove: 90 };
    return h("ul", { class: "bands" },
      h("li", { class: "b-bad" }, h("b", { text: `até ${r.failMax}%` }), h("span", null, h("strong", { text: "Reprovado. " }), "Você refaz tudo: as aulas do módulo (na prova final, a trilha inteira) e a prova com novas questões.")),
      h("li", { class: "b-warn" }, h("b", { text: `${r.failMax}% a ${r.passAbove}%` }), h("span", null, h("strong", { text: "Refaz só o que errou. " }), "Você responde de novo apenas as questões erradas, quantas vezes precisar, até acertar todas.")),
      h("li", { class: "b-good" }, h("b", { text: `acima de ${r.passAbove}%` }), h("span", null, h("strong", { text: "Aprovado. " }), "Você vê o que errou e a resposta certa, mas não precisa refazer.")));
  };

  /* ───── módulo ───── */
  M.views.module = async function (id) {
    await M.refreshMe();
    const m = M.modulo(id);
    if (!m) return notFound();
    const p = M.session.progress, i = m.n - 1, st = p.modules[i];
    const locked = !st.unlocked && !M.isAdmin();
    if (locked) {
      return h("div", { class: "empty" }, h("h3", { text: "Módulo bloqueado" }),
        h("p", { text: `Seja aprovado na prova do módulo ${m.n - 1} para liberar este.` }),
        h("a", { class: "btn btn-gold", href: "#/" }, "Voltar à trilha"));
    }
    const ex = p.exams[m.id];
    const allDone = st.done === st.total;
    let examCard;
    if (ex?.status === "approved") {
      examCard = ["ok", h("span", { class: "chip chip-good", text: "Aprovado" }), `Você foi aprovado neste módulo${ex.bestPct ? " com " + ex.bestPct + "%" : ""}.`, null];
    } else if (ex?.status === "retry") {
      examCard = ["warn", h("span", { class: "chip chip-warn", text: "Refazer erros" }), `Você ficou entre ${M.session.rules.failMax}% e ${M.session.rules.passAbove}%. Faltam ${ex.retry?.qids?.length || 0} questões.`,
        h("a", { class: "btn btn-gold", href: "#/exam/" + m.id }, "Refazer as questões erradas")];
    } else if (ex?.status === "reset" && !allDone) {
      examCard = ["bad", h("span", { class: "chip chip-bad", text: "Reprovado" }), `Sua última nota foi ${ex.lastPct ?? "—"}%. As aulas deste módulo foram zeradas. Estude de novo e refaça a prova.`, null];
    } else if (allDone) {
      examCard = ["ready", h("span", { class: "chip chip-gold", text: "Liberada" }), `${M.session.rules.examSize.module} questões sobre o módulo. Reserve de 20 a 30 minutos.`,
        h("a", { class: "btn btn-gold", href: "#/exam/" + m.id }, "Fazer a prova do módulo")];
    } else {
      examCard = ["", h("span", { class: "chip", text: "Bloqueada" }), `Conclua as ${st.total - st.done} aulas restantes para liberar a prova.`, null];
    }
    return h("div", null,
      h("div", { class: "page-head" },
        h("span", { class: "chip chip-gold", style: "justify-self:start", text: `Módulo ${m.n}` }),
        h("h2", { text: m.title }),
        h("p", { text: m.tagline }),
        h("p", null, h("strong", { text: "Ao final você consegue: " }), m.outcome)),
      h("ul", { class: "lesson-list" }, m.lessons.map((l, k) => {
        const done = !!p.lessons[l.id];
        return h("li", null, h("a", { class: "lesson-row" + (done ? " done" : ""), href: "#/l/" + l.id },
          h("span", { class: "dot", text: done ? "✓" : k + 1, "aria-hidden": "true" }),
          h("span", null, h("strong", { text: l.title }), h("div", { class: "meta", text: l.goal })),
          h("span", { class: "chip", text: `${l.minutes} min` })));
      })),
      h("section", { class: "panel exam-card " + examCard[0], style: "margin-top:28px" },
        h("div", { class: "row row-between" }, h("h3", { style: "margin:0", text: M.examName(m.id) }), examCard[1]),
        h("p", { class: "muted", style: "margin:10px 0 14px", text: examCard[2] }),
        examCard[3],
        h("details", { style: "margin-top:16px" }, h("summary", { style: "cursor:pointer;font-weight:700", text: "Como a nota funciona" }), M.rulesList())));
  };
  function notFound() {
    return h("div", { class: "empty" }, h("h3", { text: "Página não encontrada" }), h("a", { class: "btn btn-gold", href: "#/" }, "Voltar ao início"));
  }
  M.notFound = notFound;

  /* ───── aula ───── */
  M.views.lesson = async function (id) {
    await M.refreshMe();
    const found = M.aula(id);
    if (!found) return notFound();
    const { mod, lesson, index } = found;
    const p = M.session.progress, st = p.modules[mod.n - 1];
    if (!st.unlocked && !M.isAdmin()) {
      return h("div", { class: "empty" }, h("h3", { text: "Aula bloqueada" }),
        h("p", { text: "Termine o módulo anterior para chegar aqui." }), h("a", { class: "btn btn-gold", href: "#/" }, "Voltar à trilha"));
    }
    const already = !!p.lessons[lesson.id];
    const quizzes = new Set(), answered = new Set();
    const foot = h("div", { class: "lesson-foot" });
    const ctx = {
      quizRegister: (b) => quizzes.add(b),
      quizAnswered: (b) => { answered.add(b); drawFoot(); },
    };
    const body = h("div", { class: "lesson-body" }, lesson.blocks.map((b) => M.renderBlock(b, ctx)));

    const prev = index > 0 ? mod.lessons[index - 1] : null;
    const nextL = index < mod.lessons.length - 1 ? mod.lessons[index + 1] : null;

    function drawFoot() {
      const missing = quizzes.size - answered.size;
      const btn = h("button", { class: "btn btn-gold", type: "button" }, already ? "Aula concluída" : "Concluir aula", M.icon("check", 18));
      if (already) btn.disabled = true;
      else if (missing > 0) btn.setAttribute("aria-disabled", "true");
      btn.addEventListener("click", async () => {
        if (already) return;
        if (missing > 0) { M.toast(`Responda ${missing === 1 ? "o quiz que falta" : "os " + missing + " quizzes que faltam"} antes de concluir.`, "err"); return; }
        btn.disabled = true;
        try {
          const d = await M.post("progress/lesson", { lessonId: lesson.id });
          M.session.progress = d.progress;
          M.toast("Aula concluída. +20 XP", "ok");
          if (nextL) M.go("#/l/" + nextL.id);
          else M.go("#/m/" + mod.id);
        } catch (ex) { M.toast(ex.message, "err"); btn.disabled = false; }
      });
      foot.replaceChildren(
        !already && missing > 0 ? h("div", { class: "need", role: "status", text: `Falta${missing > 1 ? "m" : ""} ${missing} quiz${missing > 1 ? "zes" : ""} nesta aula para poder concluir.` }) : null,
        h("div", { class: "row row-between" },
          h("div", { class: "row" },
            prev ? h("a", { class: "btn btn-ghost", href: "#/l/" + prev.id }, M.icon("back", 18), "Anterior") : h("a", { class: "btn btn-ghost", href: "#/m/" + mod.id }, M.icon("back", 18), "Módulo"),
            already && nextL ? h("a", { class: "btn btn-ghost", href: "#/l/" + nextL.id }, "Próxima aula", M.icon("arrow", 18)) : null,
            already && !nextL ? h("a", { class: "btn btn-ghost", href: "#/m/" + mod.id }, "Ir para a prova", M.icon("arrow", 18)) : null),
          btn));
    }
    drawFoot();

    const node = h("article", { class: "lesson" },
      h("header", { class: "lesson-head" },
        h("div", { class: "row" },
          h("span", { class: "chip chip-gold", text: `Módulo ${mod.n}: aula ${index + 1} de ${mod.lessons.length}` }),
          h("span", { class: "chip", text: `${lesson.minutes} min` }),
          already ? h("span", { class: "chip chip-good", text: "Concluída" }) : null),
        h("h2", { text: lesson.title }),
        h("div", { class: "goal" }, h("b", { text: "Ao final desta aula" }), lesson.goal)),
      body, foot);
    node._crumbs = [{ text: "Trilha", href: "#/" }, { text: `Módulo ${mod.n}`, href: "#/m/" + mod.id }, { text: lesson.title }];
    return node;
  };

  /* ───── conta ───── */
  M.views.account = async function () {
    await M.refreshMe();
    const u = M.session.user;
    const err = h("div");
    const form = h("form", { novalidate: true });
    const f = (id, label, ac) => h("div", { class: "field" }, h("label", { for: id, text: label }), h("input", { class: "input", id, name: id, type: "password", autocomplete: ac, required: true }));
    const btn = h("button", { class: "btn btn-gold", type: "submit", text: "Salvar nova senha" });
    form.append(f("current", "Senha atual", "current-password"), f("next", "Nova senha", "new-password"), f("next2", "Repita a nova senha", "new-password"), btn);
    form.onsubmit = async (e) => {
      e.preventDefault(); err.replaceChildren();
      const v = Object.fromEntries(new FormData(form).entries());
      btn.disabled = true;
      try { await M.post("auth/password", v); form.reset(); M.toast("Senha alterada.", "ok"); }
      catch (ex) { err.replaceChildren(h("div", { class: "form-error", role: "alert", text: ex.message })); }
      btn.disabled = false;
    };
    return h("div", { style: "max-width:560px" },
      h("div", { class: "page-head" }, h("h2", { text: "Minha conta" })),
      h("section", { class: "panel" }, h("h3", { text: "Seus dados" }),
        h("p", { style: "margin:0" }, h("strong", { text: u.name }), h("br"), h("span", { class: "muted", text: u.email })),
        h("p", { style: "margin:12px 0 0" }, h("span", { class: "chip " + (u.role === "admin" ? "chip-gold" : ""), text: u.role === "admin" ? "Administrador" : "Aluno" }))),
      h("section", { class: "panel" }, h("h3", { text: "Trocar senha" }), err, form));
  };

  /* ───── certificado ───── */
  M.views.cert = async function () {
    await M.refreshMe();
    let d;
    try { d = await M.get("certificate"); }
    catch (ex) {
      const p = M.session.progress;
      const missing = p.modules.filter((m) => m.exam !== "approved").length;
      return h("div", { class: "empty" }, h("h3", { text: "Certificado ainda não liberado" }),
        h("p", { text: missing ? `Faltam ${missing} módulos aprovados e a prova final.` : "Falta ser aprovado na prova final." }),
        h("a", { class: "btn btn-gold", href: "#/" }, "Voltar à trilha"));
    }
    return h("div", null,
      h("div", { class: "cert" },
        M.brand("#/cert"),
        h("p", { class: "muted", style: "margin-top:28px", text: "Certificamos que" }),
        h("div", { class: "who", text: d.name }),
        h("p", { text: "concluiu com aprovação a formação" }),
        h("h1", { text: d.course }),
        h("p", { class: "muted", text: `Aprovado na prova final${d.pct ? " com " + d.pct + "%" : ""} em ${M.fmtDate(d.finishedAt)}.` }),
        h("p", { class: "code", text: "Código de verificação: " + d.code })),
      h("div", { class: "row no-print", style: "justify-content:center;margin-top:24px" },
        h("button", { class: "btn btn-gold", type: "button", onclick: () => window.print() }, "Imprimir ou salvar em PDF"),
        h("a", { class: "btn btn-ghost", href: "#/" }, "Voltar à trilha")));
  };
})();

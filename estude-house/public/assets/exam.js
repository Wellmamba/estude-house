/* Provas dos módulos e prova final. A correção acontece no servidor. */
(function () {
  const { h } = M;
  const letters = "ABCDEFGH";

  M.views.exam = async function (scope) {
    if (scope !== "final" && !M.modulo(scope)) return M.notFound();
    await M.refreshMe();
    const p = M.session.progress;
    const mod = scope === "final" ? null : M.modulo(scope);
    const back = mod ? "#/m/" + mod.id : "#/";
    const ex = p.exams[scope];
    const box = h("div", { class: "exam" });

    /* bloqueios visíveis (o servidor também confere) */
    if (!M.isAdmin()) {
      if (scope === "final" && !p.finalUnlocked) return gate("A prova final libera depois da aprovação em todos os módulos.", "#/");
      if (mod) {
        const st = p.modules[mod.n - 1];
        if (!st.unlocked) return gate("Este módulo ainda está bloqueado.", "#/");
        if (st.done < st.total) return gate("Conclua todas as aulas do módulo antes da prova.", back);
      }
    }
    if (ex?.status === "approved") return gate("Você já foi aprovado nesta prova.", back, true);

    function gate(msg, href, ok) {
      return h("div", { class: "empty" }, h("h3", { text: ok ? "Prova concluída" : "Prova indisponível" }), h("p", { text: msg }),
        h("a", { class: "btn btn-gold", href }, "Voltar"));
    }

    /* ───── abertura ───── */
    function intro() {
      const retry = ex?.status === "retry";
      const total = retry ? ex.retry?.qids?.length || 0 : scope === "final" ? M.session.rules.examSize.final : M.session.rules.examSize.module;
      const start = h("button", { class: "btn btn-gold", type: "button", text: retry ? "Começar a refazer os erros" : "Começar a prova" });
      start.addEventListener("click", async () => {
        start.disabled = true;
        try { run(await M.post("exam/start", { scope })); }
        catch (ex2) { M.toast(ex2.message, "err"); start.disabled = false; }
      });
      box.replaceChildren(
        h("div", { class: "page-head" },
          h("span", { class: "chip chip-gold", style: "justify-self:start", text: retry ? "Segunda chance: só os erros" : scope === "final" ? "Avaliação final" : `Módulo ${mod.n}` }),
          h("h2", { text: M.examName(scope) }),
          h("p", { text: retry
            ? `Você acertou entre ${M.session.rules.failMax}% e ${M.session.rules.passAbove}% na última tentativa. Responda de novo as ${total} questões que errou. Pode repetir até acertar todas.`
            : scope === "final"
              ? `${total} questões de toda a trilha. É a prova mais difícil: tem cenário, cálculo e perguntas de múltipla escolha.`
              : `${total} questões sobre o módulo "${mod.title}". Tem cenário, cálculo e perguntas em que mais de uma alternativa está certa.` })),
        h("section", { class: "panel" }, h("h3", { text: "Antes de começar" }),
          h("ul", { style: "margin:0;padding-left:1.2em;display:grid;gap:8px" },
            h("li", null, "Quando a questão pede ", h("strong", { text: "todas" }), " as corretas, você só pontua se marcar exatamente as certas."),
            h("li", { text: "A ordem das alternativas muda a cada tentativa." }),
            h("li", { text: "O gabarito só aparece se você for aprovado com mais de 90%. Estude antes de começar." }),
            h("li", { text: "Se fechar a página, a prova continua de onde parou." })),
          M.rulesList()),
        h("div", { class: "row", style: "margin-top:20px" }, start, h("a", { class: "btn btn-ghost", href: back }, "Voltar")));
    }

    /* ───── prova em andamento ───── */
    function run(att) {
      const key = "ma.ans." + att.attemptId;
      let answers = {};
      try { answers = JSON.parse(M.store.get(key) || "{}"); } catch {}
      let i = 0;
      const persist = () => M.store.set(key, JSON.stringify(answers));
      const qs = att.questions;
      const area = h("div");

      function draw() {
        const q = qs[i];
        const sel = answers[q.id] || [];
        const multi = q.type === "multi";
        const answeredCount = qs.filter((x) => (answers[x.id] || []).length).length;
        const name = "e" + i;
        const inputs = [];
        const opts = h("ul", { class: "opts" }, q.options.map((txt, k) => {
          const input = h("input", { type: multi ? "checkbox" : "radio", name, id: name + "-" + k, value: String(k) });
          input.checked = sel.includes(k);
          const lab = h("label", { class: "opt" + (input.checked ? " sel" : ""), for: name + "-" + k },
            input, h("span", { class: "mark " + (multi ? "c" : "r") }), h("span", null, h("strong", { text: letters[k] + ". " }), txt));
          input.addEventListener("change", () => {
            const cur = inputs.map((x, idx) => (x.checked ? idx : -1)).filter((idx) => idx >= 0);
            answers[q.id] = cur; persist();
            inputs.forEach((x, idx) => x.closest(".opt").classList.toggle("sel", x.checked));
            drawBar();
          });
          inputs.push(input);
          return h("li", null, lab);
        }));

        const nav = h("div", { class: "exam-nav" },
          h("button", { class: "btn btn-ghost", type: "button", disabled: i === 0, onclick: () => { i--; draw(); }, text: "Anterior" }),
          i < qs.length - 1
            ? h("button", { class: "btn btn-gold", type: "button", onclick: () => { i++; draw(); }, text: "Próxima" })
            : h("button", { class: "btn btn-gold", type: "button", onclick: submit, text: "Enviar prova" }));

        const bar = h("div", { class: "exam-bar" });
        function drawBar() {
          const cnt = qs.filter((x) => (answers[x.id] || []).length).length;
          bar.replaceChildren(
            h("div", { class: "row row-between" },
              h("strong", { text: `${M.examName(scope)}${att.mode === "retry" ? " (só os erros)" : ""}` }),
              h("span", { class: "muted small", text: `Questão ${i + 1} de ${qs.length}. Respondidas: ${cnt}` })),
            h("div", { class: "bar", style: "margin-top:8px" }, h("i", { style: `width:${M.pct(cnt, qs.length)}%` })),
            h("div", { class: "dots", role: "group", "aria-label": "Ir para a questão" },
              qs.map((x, idx) => h("button", {
                type: "button", "aria-label": `Questão ${idx + 1}${(answers[x.id] || []).length ? ", respondida" : ""}`,
                class: (answers[x.id] || []).length ? "answered" : "", "aria-current": idx === i ? "true" : null,
                onclick: () => { i = idx; draw(); }, text: idx + 1,
              }))));
        }
        drawBar();

        area.replaceChildren(bar,
          h("section", { class: "panel exam-q" },
            h("span", { class: "chip q-topic", text: q.topic }),
            h("h3", { text: q.q }),
            multi ? h("p", { class: "chip chip-warn", style: "margin-bottom:12px", text: "Marque todas as alternativas corretas" }) : null,
            opts),
          nav);
        window.scrollTo({ top: 0 });
      }

      async function submit() {
        const blank = qs.filter((x) => !(answers[x.id] || []).length).length;
        if (blank) {
          const go = await M.confirm({ title: "Há questões sem resposta", text: `Você deixou ${blank} sem resposta. Elas contam como erradas. Enviar mesmo assim?`, ok: "Enviar prova" });
          if (!go) return;
        } else {
          const go = await M.confirm({ title: "Enviar a prova?", text: "Depois de enviar, você não pode mudar as respostas.", ok: "Enviar" });
          if (!go) return;
        }
        area.querySelectorAll("button").forEach((b) => (b.disabled = true));
        try {
          const d = await M.post("exam/submit", { attemptId: att.attemptId, answers });
          M.session.progress = d.progress;
          M.store.del(key);
          result(d.result);
        } catch (e2) {
          M.toast(e2.message, "err");
          area.querySelectorAll("button").forEach((b) => (b.disabled = false));
        }
      }
      box.replaceChildren(area);
      draw();
    }

    /* ───── resultado ───── */
    function result(r) {
      window.scrollTo({ top: 0 });
      const rules = M.session.rules;
      let tone, title, text, actions = [];
      const pctTxt = r.pct != null ? M.fmtPct(r.pct) + "%" : "";
      if (r.outcome === "aprovado") {
        tone = "ok";
        title = r.passedViaRetry ? "Aprovado" : `Aprovado com ${pctTxt}`;
        text = r.passedViaRetry
          ? "Você corrigiu todas as questões que errou. Módulo concluído."
          : r.review?.length ? "Passou de " + rules.passAbove + "%. Abaixo estão os erros e a resposta certa de cada um. Você não precisa refazer nada." : "Gabarito perfeito. Nenhuma questão errada.";
        actions = scope === "final"
          ? [h("a", { class: "btn btn-gold", href: "#/cert" }, "Ver meu certificado")]
          : [h("a", { class: "btn btn-gold", href: M.session.progress.modules[mod.n]?.unlocked ? "#/m/" + M.curso().modules[mod.n].id : "#/" }, mod.n < M.curso().modules.length ? "Ir para o próximo módulo" : "Voltar à trilha"),
            h("a", { class: "btn btn-ghost", href: "#/" }, "Ver trilha")];
        if (scope !== "final" && mod.n === M.curso().modules.length && M.session.progress.finalUnlocked) actions.unshift(h("a", { class: "btn btn-gold", href: "#/exam/final" }, "Fazer a prova final"));
      } else if (r.outcome === "refazer-erros") {
        tone = "warn";
        title = r.mode === "retry" ? `Ainda ${r.remaining === 1 ? "falta 1 questão" : "faltam " + r.remaining + " questões"}` : `${pctTxt}: refaça só o que errou`;
        text = r.mode === "retry"
          ? `Você acertou ${r.correct} de ${r.total}. Revise os temas abaixo e tente de novo.`
          : `Você acertou ${r.correct} de ${r.total}. Entre ${rules.failMax}% e ${rules.passAbove}% você refaz apenas as ${r.remaining} questões erradas.`;
        actions = [h("button", { class: "btn btn-gold", type: "button", onclick: () => M.go("#/exam/" + scope) }, `Refazer as ${r.remaining} questões`),
          h("a", { class: "btn btn-ghost", href: back }, "Revisar o módulo antes")];
      } else {
        tone = "bad";
        title = `${pctTxt}: reprovado`;
        text = r.resetAll
          ? `Na prova final, nota até ${rules.failMax}% volta a trilha inteira ao início. Suas aulas e provas dos módulos foram zeradas. Estude de novo, com calma.`
          : `Nota até ${rules.failMax}% significa refazer tudo deste módulo. As aulas do módulo foram zeradas e a prova terá novas questões.`;
        actions = [h("a", { class: "btn btn-gold", href: r.resetAll ? "#/" : back }, r.resetAll ? "Recomeçar a trilha" : "Rever as aulas do módulo")];
      }
      box.replaceChildren(
        h("section", { class: "result-hero " + tone, role: "status" },
          r.pct != null ? h("div", { class: "score-big", text: pctTxt }) : h("div", { class: "score-big", text: "✓" }),
          h("h2", { text: title }), h("p", { style: "margin:0;max-width:56ch", text }),
          r.topics?.length ? h("div", null, h("div", { class: "small muted", style: "margin-bottom:6px", text: "Temas para revisar" }), h("div", { class: "topics" }, r.topics.map((t) => h("span", { class: "chip", text: t })))) : null,
          h("div", { class: "row" }, actions)),
        r.review?.length ? h("section", null,
          h("h2", { style: "margin:36px 0 4px", text: "O que você errou" }),
          h("p", { class: "muted", text: "Leia a explicação de cada uma. Isso é parte do aprendizado." }),
          h("div", { class: "review" }, r.review.map((it) => reviewItem(it)))) : null);
    }

    function reviewItem(it) {
      return h("article", { class: "review-item" },
        h("span", { class: "chip", style: "margin-bottom:10px", text: it.topic }),
        h("h4", { text: it.q }),
        h("ul", { class: "opts" }, it.options.map((txt, k) => {
          const right = it.right.includes(k), picked = it.picked.includes(k);
          return h("li", null, h("div", { class: "opt" + (right ? " right" : picked ? " wrong" : "") },
            h("span", { class: "mark " + (it.right.length > 1 ? "c" : "r") }),
            h("span", null, h("strong", { text: letters[k] + ". " }), txt,
              picked ? h("span", { class: "tag-mini " + (right ? "correct" : "yours"), text: right ? "sua resposta" : "sua resposta (errada)" }) : null,
              right && !picked ? h("span", { class: "tag-mini correct", text: "resposta certa" }) : null)));
        })),
        h("div", { class: "quiz" , style: "margin-top:12px;padding:12px 14px" }, h("div", { class: "why ok", html: M.esc(it.why) })));
    }

    intro();
    return box;
  };
})();

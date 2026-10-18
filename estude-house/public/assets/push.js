/* Avisos no PC e no celular (Web Push) + instalação do app + tela "Avisos" do gestor. */
(function () {
  const { h } = M;
  const ua = navigator.userAgent || "";
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const standalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const supported = () => "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
  const b64 = (s) => { const p = "=".repeat((4 - (s.length % 4)) % 4); const r = atob((s + p).replace(/-/g, "+").replace(/_/g, "/")); return Uint8Array.from(r, (c) => c.charCodeAt(0)); };
  const deviceLabel = () => {
    const os = /Android/.test(ua) ? "Android" : isIOS ? "iPhone/iPad" : /Windows/.test(ua) ? "Windows" : /Mac/.test(ua) ? "Mac" : /Linux/.test(ua) ? "Linux" : "aparelho";
    const br = /Edg\//.test(ua) ? "Edge" : /OPR\//.test(ua) ? "Opera" : /Firefox\//.test(ua) ? "Firefox" : /Chrome\//.test(ua) ? "Chrome" : /Safari\//.test(ua) ? "Safari" : "Navegador";
    return `${br} no ${os}`;
  };

  /* o service worker já fica registrado desde o início (também serve para instalar o app) */
  let reg = null;
  async function register() {
    if (!("serviceWorker" in navigator)) return null;
    if (reg) return reg;
    try { reg = await navigator.serviceWorker.register("/sw.js"); } catch { reg = null; }
    return reg;
  }
  /* tocar na notificação com o site aberto: vai para a tela do aviso sem recarregar */
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", (e) => {
      if (e.data?.type === "open" && e.data.url) { try { const u = new URL(e.data.url); if (u.origin === location.origin) location.hash = u.hash || "#/"; } catch {} }
    });
  }
  let installEv = null;
  addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installEv = e; });
  addEventListener("appinstalled", () => { installEv = null; });

  const push = M.push = {
    supported, isIOS, standalone,
    canInstall: () => !!installEv,
    async install() { if (!installEv) return false; installEv.prompt(); const r = await installEv.userChoice.catch(() => null); installEv = null; return r?.outcome === "accepted"; },
    /* unsupported | ios-install | denied | off | on */
    async state() {
      if (!supported()) return isIOS && !standalone() ? "ios-install" : "unsupported";
      if (Notification.permission === "denied") return "denied";
      const r = await register();
      const sub = r ? await r.pushManager.getSubscription().catch(() => null) : null;
      return sub && Notification.permission === "granted" ? "on" : "off";
    },
    async enable() {
      if (!supported()) throw new Error("Este navegador não recebe avisos.");
      const perm = await Notification.requestPermission();
      if (perm !== "granted") throw new Error("O navegador não permitiu os avisos. Libere em Notificações, no cadeado ao lado do endereço.");
      const r = await register(); await navigator.serviceWorker.ready;
      const k = await M.get("push/key");
      if (!k.key) throw new Error("Os avisos ainda não estão disponíveis no servidor.");
      let sub = await r.pushManager.getSubscription();
      if (!sub) sub = await r.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64(k.key) });
      await M.post("push/subscribe", { subscription: sub.toJSON(), label: deviceLabel() });
      try { localStorage.removeItem("eh-push-ask"); } catch {}
      return true;
    },
    async disable() {
      const r = await register();
      const sub = r ? await r.pushManager.getSubscription() : null;
      if (sub) { try { await M.post("push/unsubscribe", { endpoint: sub.endpoint }); } catch {} await sub.unsubscribe().catch(() => {}); }
    },
    /* ao entrar: se este aparelho já tem permissão, liga o aviso à conta de quem entrou (e ao sair, desliga da conta) */
    async sync() {
      if (!supported() || Notification.permission !== "granted") return;
      const r = await register(); const sub = r ? await r.pushManager.getSubscription().catch(() => null) : null;
      if (sub) { try { await M.post("push/subscribe", { subscription: sub.toJSON(), label: deviceLabel() }); } catch {} }
    },
    async detach() {
      if (!supported()) return;
      const r = reg || (await navigator.serviceWorker.getRegistration().catch(() => null));
      const sub = r ? await r.pushManager.getSubscription().catch(() => null) : null;
      if (sub) { try { await M.post("push/unsubscribe", { endpoint: sub.endpoint }); } catch {} }
    },
    /* mostra o convite no Feed: só se ainda não decidiu, e no máximo uma vez a cada 7 dias depois de dispensar */
    async shouldAsk() {
      if (!supported() || Notification.permission !== "default") return false;
      try { const at = Number(localStorage.getItem("eh-push-ask") || 0); if (at && Date.now() - at < 7 * 864e5) return false; } catch {}
      return (await push.state()) === "off";
    },
    dismissAsk() { try { localStorage.setItem("eh-push-ask", String(Date.now())); } catch {} },
  };
  register();
  /* troca de conta no mesmo navegador: o aviso não pode continuar indo para quem saiu */
  const wrapLogout = () => { const orig = M.logout; if (orig && !orig.__push) { const w = async function () { try { await push.detach(); } catch {} M.session.pushSynced = false; return orig.apply(this, arguments); }; w.__push = true; M.logout = w; } };
  wrapLogout();
  const syncOnce = () => { if (M.session?.token && M.session.user && !M.session.pushSynced) { M.session.pushSynced = true; push.sync(); } };
  document.addEventListener("estude:ready", syncOnce);
  setInterval(syncOnce, 4000);

  /* ───── janela: ativar, escolher o que receber, testar ───── */
  M.openPush = async function () {
    M.modal((close) => {
      const body = h("div", { class: "push-body" }, M.loading());
      draw(body);
      return h("div", { class: "push-dlg" },
        h("div", { class: "row row-between" }, h("strong", { class: "push-title", text: "Avisos neste aparelho" }), h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => close(), "aria-label": "Fechar" }, M.icon("x", 18))), body);
    });
  };
  async function draw(body) {
    const st = await push.state();
    const info = st === "on" || st === "off" ? await M.get("push/status").catch(() => null) : null;
    const parts = [];
    const redraw = () => draw(body);
    const note = (t) => h("p", { class: "muted small", style: "margin:0", text: t });
    if (st === "unsupported") parts.push(note("Este navegador não recebe avisos. No celular, use o Chrome (Android) ou o Safari com o app instalado (iPhone). No computador, Chrome, Edge ou Firefox."));
    if (st === "ios-install") parts.push(
      h("p", { style: "margin:0" }, "No iPhone e no iPad, os avisos só funcionam com o app instalado na tela inicial:"),
      h("ol", { class: "push-steps" }, h("li", { text: "No Safari, toque em Compartilhar (o quadrado com a seta)." }), h("li", { text: "Escolha “Adicionar à Tela de Início”." }), h("li", { text: "Abra o BRYANT SHOOT pelo novo ícone e volte aqui para ativar os avisos." })),
      note("Precisa do iOS 16.4 ou mais novo."));
    if (st === "denied") parts.push(h("p", { style: "margin:0" }, "O navegador bloqueou os avisos deste site."), note("Para liberar, toque no cadeado ao lado do endereço, abra “Notificações” e escolha “Permitir”. Depois volte aqui."));
    if (st === "off" || st === "on") {
      const on = st === "on";
      const btn = h("button", { class: "btn " + (on ? "btn-ghost" : "btn-gold"), type: "button" }, M.icon("bell", 18), on ? "Desativar neste aparelho" : "Ativar avisos");
      btn.addEventListener("click", async () => {
        btn.disabled = true;
        try { if (on) { await push.disable(); M.toast("Avisos desativados neste aparelho.", "ok"); } else { await push.enable(); M.toast("Avisos ativados! Vou mandar um teste.", "ok"); try { await M.post("push/test"); } catch {} } }
        catch (e) { M.toast(e.message, "err"); }
        redraw();
      });
      parts.push(h("div", { class: "push-state " + (on ? "is-on" : "") }, h("span", { class: "dot" }), h("strong", { text: on ? "Ativados neste aparelho" : "Desativados neste aparelho" })), btn);
      if (on) {
        const t = h("button", { class: "btn btn-ghost btn-sm", type: "button", text: "Enviar um teste" });
        t.addEventListener("click", async () => { t.disabled = true; try { await M.post("push/test"); M.toast("Teste enviado. Deve chegar em instantes.", "ok"); } catch (e) { M.toast(e.message, "err"); } t.disabled = false; });
        parts.push(t);
      }
      if (info) {
        parts.push(h("h4", { class: "push-h", text: "O que você quer receber" }),
          h("ul", { class: "push-prefs" }, Object.entries(info.cats).map(([k, c]) => {
            const cb = h("input", { type: "checkbox", id: "pp-" + k, checked: info.prefs[k] !== false });
            cb.addEventListener("change", async () => { try { await M.api("PUT", "push/prefs", { [k]: cb.checked }); } catch (e) { M.toast(e.message, "err"); cb.checked = !cb.checked; } });
            return h("li", null, h("label", { for: "pp-" + k }, cb, h("span", null, h("strong", { text: c.label }), h("small", { text: c.hint }))));
          })));
        if (info.devices.length) parts.push(h("p", { class: "muted small", style: "margin:8px 0 0", text: "Aparelhos com aviso nesta conta: " + info.devices.map((d) => d.label).join(", ") + "." }));
      }
    }
    if (push.canInstall() && !standalone()) {
      const b = h("button", { class: "btn btn-ghost btn-sm", type: "button" }, M.icon("phone", 16), "Instalar o app neste aparelho");
      b.addEventListener("click", async () => { await push.install(); redraw(); });
      parts.push(b);
    }
    body.replaceChildren(...parts);
  }

  /* linha da tela Você */
  M.pushRow = function () {
    const sub = h("small", { text: "Conferindo…" });
    const row = h("button", { class: "vrow", type: "button" }, h("span", { class: "v-ico" }, M.icon("bell", 20)), h("span", { class: "v-txt" }, h("strong", { text: "Avisos neste aparelho" }), sub), M.icon("chevr", 18));
    const paint = async () => { const s = await push.state(); sub.textContent = ({ on: "Ativados", off: "Toque para ativar", denied: "Bloqueados no navegador", "ios-install": "Instale o app para receber", unsupported: "Não disponível neste navegador" })[s]; };
    paint();
    row.addEventListener("click", async () => { await M.openPush(); });
    document.addEventListener("click", (e) => { if (e.target.closest(".push-dlg")) setTimeout(paint, 600); });
    return row;
  };
  /* cartão da tela Minha conta */
  M.pushCard = function () {
    const stateLine = h("p", { class: "muted small", style: "margin:0 0 12px", text: "Receba no PC e no celular, mesmo com o site fechado: marcações, comentários, aprovações, avisos da equipe e vídeos novos." });
    const b = h("button", { class: "btn btn-gold", type: "button" }, M.icon("bell", 18), "Configurar avisos");
    b.addEventListener("click", () => M.openPush());
    return h("section", { class: "panel" }, h("h3", { text: "Avisos no aparelho" }), stateLine, b);
  };

  /* ───── gestor: enviar aviso para o time ───── */
  const IDEAS = [
    { t: "🎬 Vídeo novo nos Reels", b: "Acabou de entrar um vídeo novo. Dá 30 segundos e dá o seu hype!", u: "#/reels" },
    { t: "🏆 Desafio da semana", b: "Quem bater a meta da semana ganha destaque no ranking. Bora?", u: "#/ranking" },
    { t: "📚 Trilha nova liberada", b: "Uma trilha nova está disponível. Comece hoje e ganhe XP.", u: "#/trilhas" },
    { t: "💡 Compartilhe um case", b: "Tem um resultado para contar? Poste no Feed e ganhe XP quando for aprovado.", u: "#/" },
    { t: "📣 Reunião do time", b: "Hoje às 16h. Traga seus números e dúvidas.", u: "#/" },
  ];
  M.views.adminAvisos = async function () {
    if (!M.can("publicar")) return h("div", { class: "empty" }, h("h3", { text: "Área restrita" }), h("p", { text: "Somente gestores enviam avisos." }));
    let stats = await M.get("admin/push");
    const title = h("input", { class: "input", id: "av-t", maxlength: "60", placeholder: "Título curto (aparece em negrito)", required: true });
    const text = h("textarea", { class: "textarea", id: "av-b", rows: "3", maxlength: "160", placeholder: "Mensagem (até 160 letras)", style: "font-family:var(--body)" });
    const dest = h("select", { class: "select", id: "av-u" }, [["#/", "Feed"], ["#/reels", "Reels"], ["#/trilhas", "Trilhas"], ["#/ranking", "Ranking"], ["#/forum/envios", "Dúvidas e sugestões"]].map(([v, t]) => h("option", { value: v, text: t })));
    const aud = h("select", { class: "select", id: "av-a" }, [["todos", "Todo o time"], ["alunos", "Só alunos"], ["gestores", "Só gestores"]].map(([v, t]) => h("option", { value: v, text: t })));
    const count = h("span", { class: "muted small" });
    const upd = () => { count.textContent = `${text.value.length}/160`; };
    text.addEventListener("input", upd); upd();
    const send = h("button", { class: "btn btn-gold", type: "submit" }, M.icon("send", 18), "Enviar aviso agora");
    const hist = h("div");
    const reach = h("p", { class: "muted", style: "margin:0 0 14px" });
    function paint() {
      reach.textContent = stats.devices ? `${stats.people} ${stats.people === 1 ? "pessoa tem" : "pessoas têm"} avisos ativos (${stats.devices} ${stats.devices === 1 ? "aparelho" : "aparelhos"}). Todo mundo vê o aviso também no sininho.` : "Ninguém ativou os avisos no aparelho ainda. O aviso aparece no sininho de todos; peça ao time para ativar em Você > Avisos neste aparelho.";
      hist.replaceChildren(stats.history.length ? h("ul", { class: "av-hist" }, stats.history.map((x) => h("li", null, h("strong", { text: x.title }), h("span", { class: "muted small", text: ` · ${M.timeAgo(x.at)} · ${x.people} ${x.people === 1 ? "pessoa" : "pessoas"} no aparelho · ${x.audience}` }), x.body ? h("div", { class: "muted small", text: x.body }) : null))) : h("p", { class: "muted small", style: "margin:0", text: "Nenhum aviso enviado ainda." }));
    }
    paint();
    const form = h("form", { class: "av-form", novalidate: true },
      h("div", { class: "field" }, h("label", { for: "av-t", text: "Título" }), title),
      h("div", { class: "field" }, h("label", { for: "av-b", text: "Mensagem" }), text, count),
      h("div", { class: "grid", style: "grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px" },
        h("div", { class: "field" }, h("label", { for: "av-u", text: "Ao tocar, abre" }), dest), h("div", { class: "field" }, h("label", { for: "av-a", text: "Quem recebe" }), aud)),
      send);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (title.value.trim().length < 3) { M.toast("Escreva o título do aviso.", "err"); return; }
      const ok = await M.confirm({ title: "Enviar este aviso agora?", text: `“${title.value.trim()}” vai para ${aud.options[aud.selectedIndex].text.toLowerCase()}. Não dá para desfazer.`, ok: "Enviar" });
      if (!ok) return;
      send.disabled = true;
      try {
        const r = await M.post("admin/push/broadcast", { title: title.value, body: text.value, url: dest.value, audience: aud.value });
        M.toast(`Aviso enviado para ${r.people} ${r.people === 1 ? "pessoa" : "pessoas"} no aparelho e no sininho.`, "ok");
        title.value = ""; text.value = ""; upd();
        stats = await M.get("admin/push"); paint();
      } catch (ex) { M.toast(ex.message, "err"); }
      send.disabled = false;
    });
    const ideas = h("div", { class: "av-ideas" }, IDEAS.map((i) => h("button", { class: "kind-btn kind-case", type: "button", onclick: () => { title.value = i.t; text.value = i.b; dest.value = i.u; upd(); title.focus(); } }, i.t)));
    return h("div", { class: "av" },
      h("div", { class: "page-head" }, h("h2", { text: "Avisos para o time" }), h("p", { text: "Mande uma notificação que aparece no sininho e no celular ou computador de quem ativou os avisos." })),
      h("section", { class: "panel" }, reach, h("h4", { class: "push-h", text: "Ideias de aviso" }), ideas, form),
      h("section", { class: "panel" }, h("h3", { text: "Últimos avisos" }), hist));
  };
})();

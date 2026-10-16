/* Construtor de trilhas, parte 1: peças de formulário, escolha de mídia (enviar, colar link, gravar),
   editor de questões e o catálogo de cards (formulário de cada tipo). A tela do editor fica em builder.js. */
(function () {
  const { h } = M;
  const B = (M.builder = M.builder || {});

  /* ───── texto com marcação simples: **negrito**, *itálico*, ==marca-texto== ───── */
  const escH = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  B.mdToHtml = (md) => {
    let s = escH(String(md ?? "").replace(/\r/g, ""));
    s = s.replace(/\*\*([^*\n]+?)\*\*/g, "<b>$1</b>")
      .replace(/==([^=\n]+?)==/g, "<mark>$1</mark>")
      .replace(/(^|[^*\w])\*([^*\s][^*\n]*?)\*(?!\w)/g, "$1<i>$2</i>")
      .replace(/\n/g, "<br>");
    return s;
  };
  B.htmlToMd = (html) => String(html ?? "")
    .replace(/<br\s*\/?>/gi, "\n").replace(/<\/?b>/gi, "**").replace(/<\/?mark>/gi, "==").replace(/<\/?i>/gi, "*").replace(/<\/?u>/gi, "")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
  B.plain = (html) => B.htmlToMd(html).replace(/\*\*|==|\*/g, "").replace(/\s+/g, " ").trim();
  const uid = (p) => p + Math.random().toString(36).slice(2, 8);
  B.uid = uid;

  /* ───── peças de formulário ───── */
  const field = (label, node, hint) => h("div", { class: "bd-field" }, label ? h("label", { text: label }) : null, node, hint ? h("small", { class: "muted", text: hint }) : null);
  B.field = field;

  function input(obj, k, c, { ph, max = 200, type = "text", conv } = {}) {
    const el = h("input", { class: "input", type, placeholder: ph || "", maxlength: String(max), value: obj[k] ?? "" });
    el.addEventListener("input", () => { obj[k] = conv ? conv(el.value) : el.value; c.change(); });
    return el;
  }
  function area(obj, k, c, { ph, rows = 3, max = 1200, rich = true } = {}) {
    const el = h("textarea", { class: "input", rows: String(rows), placeholder: ph || "", maxlength: String(max) });
    el.value = rich ? B.htmlToMd(obj[k]) : obj[k] ?? "";
    el.addEventListener("input", () => { obj[k] = rich ? B.mdToHtml(el.value) : el.value; c.change(); });
    if (!rich) return el;
    const wrapSel = (open, close = open) => {
      const a = el.selectionStart, b = el.selectionEnd, v = el.value;
      el.value = v.slice(0, a) + open + (v.slice(a, b) || "texto") + close + v.slice(b);
      el.focus(); el.setSelectionRange(a + open.length, a + open.length + (b - a || 5));
      el.dispatchEvent(new Event("input"));
    };
    const bar = h("div", { class: "bd-fmt" },
      h("button", { type: "button", title: "Negrito", onclick: () => wrapSel("**") }, h("b", { text: "B" })),
      h("button", { type: "button", title: "Itálico", onclick: () => wrapSel("*") }, h("i", { text: "I" })),
      h("button", { type: "button", title: "Marca-texto", onclick: () => wrapSel("==") }, h("mark", { text: "M" })));
    return h("div", { class: "bd-rich" }, bar, el);
  }
  const textBox = (obj, k, label, c, o) => field(label, area(obj, k, c, o), o?.hint);
  const textLine = (obj, k, label, c, o) => field(label, input(obj, k, c, o), o?.hint);
  B.input = input; B.area = area;

  function select(obj, k, options, c, { onPick } = {}) {
    const el = h("select", { class: "select" }, options.map(([v, l]) => h("option", { value: v, selected: String(obj[k]) === String(v), text: l })));
    el.addEventListener("change", () => { obj[k] = el.value; c.change(); if (onPick) onPick(el.value); });
    return el;
  }
  B.select = select;

  function toggle(obj, k, label, c, def = false) {
    const el = h("input", { type: "checkbox", checked: obj[k] === undefined ? def : !!obj[k] });
    el.addEventListener("change", () => { obj[k] = el.checked; c.change(); });
    return h("label", { class: "bd-check" }, el, h("span", { text: label }));
  }
  B.toggle = toggle;

  function range(obj, k, c, { min, max, step = 1, fmt = (v) => v } = {}) {
    const out = h("output", { text: fmt(obj[k] ?? min) });
    const el = h("input", { type: "range", min: String(min), max: String(max), step: String(step), value: String(obj[k] ?? min) });
    el.addEventListener("input", () => { obj[k] = Number(el.value); out.textContent = fmt(obj[k]); c.change(); });
    return h("div", { class: "bd-range" }, el, out);
  }
  B.range = range;

  function color(obj, k, c, { allowEmpty = false } = {}) {
    const val = obj[k] && /^#[0-9a-f]{6}$/i.test(obj[k]) ? obj[k] : "#ffffff";
    const el = h("input", { type: "color", value: val });
    el.addEventListener("input", () => { obj[k] = el.value; c.change(); });
    return h("div", { class: "bd-color" }, el, allowEmpty && obj[k] ? h("button", { class: "linkish", type: "button", onclick: () => { delete obj[k]; c.rerender(); c.change(); }, text: "tirar" }) : null);
  }
  B.color = color;

  const EMOJIS = ["🏀", "🔥", "💡", "🎯", "🚀", "✅", "⚠️", "💰", "📈", "📉", "🧾", "🛒", "📦", "🧠", "👀", "💬", "⭐", "🏆", "⏱️", "🔒", "❤️", "😅", "🤝", "📣"];
  function emoji(obj, k, c) {
    const el = h("input", { class: "input bd-emoji", type: "text", maxlength: "8", value: obj[k] || "" });
    el.addEventListener("input", () => { obj[k] = el.value.trim(); c.change(); });
    const row = h("div", { class: "bd-emojis" }, EMOJIS.map((e) => h("button", { type: "button", onclick: () => { el.value = e; obj[k] = e; c.change(); }, text: e })));
    return h("div", null, el, row);
  }
  B.emoji = emoji;

  /* lista de linhas: cada linha tem campos `cols` e botões de subir, descer e remover */
  function rows(c, list, cols, make, { max = 10, min = 0, add = "Adicionar" } = {}) {
    const box = h("div", { class: "bd-rows" });
    const draw = () => {
      box.replaceChildren(
        list.map((row, i) => h("div", { class: "bd-row" },
          h("div", { class: "bd-row-f" }, cols.map((col) => {
            let node;
            if (col.kind === "select") node = select(row, col.k, col.options, c);
            else if (col.kind === "rich") node = area(row, col.k, c, { ph: col.ph, rows: col.rows || 2, max: col.max || 300 });
            else if (col.kind === "emoji") node = input(row, col.k, c, { ph: col.ph || "🙂", max: 8 });
            else if (col.kind === "numlist") {
              node = h("input", { class: "input", type: "text", placeholder: col.ph || "", value: (row[col.k] || []).join(", ") });
              node.addEventListener("input", () => { row[col.k] = node.value.split(",").map((v) => Number(v.trim().replace(",", "."))).filter((v) => Number.isFinite(v)).slice(0, 12); c.change(); });
            }
            else if (col.kind === "num") node = input(row, col.k, c, { ph: col.ph, type: "number", conv: (v) => (v === "" ? "" : Number(v)) });
            else node = input(row, col.k, c, { ph: col.ph, max: col.max || 120 });
            node.classList?.add("bd-col-" + (col.w || "1"));
            return node;
          })),
          h("div", { class: "bd-row-b" },
            h("button", { type: "button", title: "Subir", disabled: i === 0, onclick: () => { [list[i - 1], list[i]] = [list[i], list[i - 1]]; draw(); c.change(); } }, "↑"),
            h("button", { type: "button", title: "Descer", disabled: i === list.length - 1, onclick: () => { [list[i + 1], list[i]] = [list[i], list[i + 1]]; draw(); c.change(); } }, "↓"),
            h("button", { type: "button", title: "Remover", disabled: list.length <= min, onclick: () => { list.splice(i, 1); draw(); c.change(); } }, "✕")))),
        list.length < max ? h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => { list.push(make()); draw(); c.change(); } }, "+ " + add) : null);
    };
    draw();
    return box;
  }
  B.rows = rows;

  /* uma linha de texto por item (listas) */
  function lines(obj, k, c, { rows: n = 5, ph, rich = true, max = 12 } = {}) {
    const el = h("textarea", { class: "input", rows: String(n), placeholder: ph || "Um item por linha" });
    el.value = (obj[k] || []).map((x) => (rich ? B.htmlToMd(x) : x)).join("\n");
    el.addEventListener("input", () => {
      obj[k] = el.value.split("\n").map((x) => x.trim()).filter(Boolean).slice(0, max).map((x) => (rich ? B.mdToHtml(x) : x));
      c.change();
    });
    return el;
  }
  B.lines = lines;

  /* ───── mídia: enviar arquivo, colar link, gravar ───── */
  let uploadsOn = null;
  const canUpload = () => (uploadsOn ||= M.get("feed/status").then((s) => !!s.uploads).catch(() => false));

  const validLink = (v) => { try { return new URL(v).protocol === "https:"; } catch { return false; } };

  B.recordModal = async function (onDone) {
    let stream = null, rec = null, blob = null, chunks = [], tick = null, t0 = 0;
    const stop = () => { clearInterval(tick); try { rec && rec.state !== "inactive" && rec.stop(); } catch {} stream && stream.getTracks().forEach((t) => t.stop()); stream = null; };
    await M.modal((close) => {
      const vid = h("video", { class: "bd-rec-video", autoplay: true, muted: true, playsinline: true });
      vid.muted = true;
      const info = h("p", { class: "muted", text: "Escolha o que gravar. O navegador vai pedir permissão." });
      const actions = h("div", { class: "dlg-actions" });
      const MAX = 300; // 5 minutos
      const mime = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm", "video/mp4"].find((t) => window.MediaRecorder && MediaRecorder.isTypeSupported(t)) || "";
      const cancel = () => { stop(); close(); };

      const chooseView = () => {
        info.textContent = window.MediaRecorder ? "Escolha o que gravar. O navegador vai pedir permissão." : "Este navegador não grava vídeo. Use Enviar arquivo ou Colar link.";
        vid.removeAttribute("src"); vid.srcObject = null; vid.controls = false;
        actions.replaceChildren(
          h("button", { class: "btn btn-ghost", type: "button", onclick: cancel, text: "Cancelar" }),
          h("button", { class: "btn btn-gold", type: "button", disabled: !window.MediaRecorder, onclick: () => open("cam"), text: "Câmera e microfone" }),
          h("button", { class: "btn btn-gold", type: "button", disabled: !window.MediaRecorder || !navigator.mediaDevices?.getDisplayMedia, onclick: () => open("screen"), text: "Gravar a tela" }));
      };
      const open = async (src) => {
        try {
          stream = src === "screen"
            ? await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
            : await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } }, audio: true });
        } catch (e) { info.textContent = "Não consegui acessar: " + (e.name === "NotAllowedError" ? "a permissão foi negada." : e.message); return; }
        vid.srcObject = stream; vid.controls = false; vid.muted = true;
        info.textContent = "Pronto. Clique em Gravar quando quiser (até 5 minutos).";
        actions.replaceChildren(
          h("button", { class: "btn btn-ghost", type: "button", onclick: cancel, text: "Cancelar" }),
          h("button", { class: "btn btn-danger", type: "button", onclick: start, text: "● Gravar" }));
      };
      const start = () => {
        chunks = [];
        try { rec = new MediaRecorder(stream, { ...(mime ? { mimeType: mime } : {}), videoBitsPerSecond: 1_800_000 }); }
        catch { rec = new MediaRecorder(stream); }
        rec.ondataavailable = (e) => { if (e.data?.size) chunks.push(e.data); };
        rec.onstop = review;
        rec.start(1000);
        t0 = Date.now();
        const stopBtn = h("button", { class: "btn btn-danger", type: "button", onclick: () => rec.stop(), text: "■ Parar" });
        actions.replaceChildren(stopBtn);
        tick = setInterval(() => {
          const s = Math.floor((Date.now() - t0) / 1000);
          info.textContent = `Gravando… ${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
          if (s >= MAX) rec.stop();
        }, 300);
        stream.getVideoTracks()[0]?.addEventListener("ended", () => { if (rec.state !== "inactive") rec.stop(); });
      };
      const review = () => {
        clearInterval(tick);
        stream && stream.getTracks().forEach((t) => t.stop());
        blob = new Blob(chunks, { type: rec.mimeType || mime || "video/webm" });
        vid.srcObject = null; vid.muted = false; vid.controls = true; vid.src = URL.createObjectURL(blob);
        info.textContent = `Gravação pronta (${M.prettySize(blob.size)}). Assista e use se estiver bom.`;
        const use = h("button", { class: "btn btn-gold", type: "button", text: "Usar este vídeo" });
        use.addEventListener("click", async () => {
          use.disabled = true;
          try {
            const ext = /mp4/.test(blob.type) ? "mp4" : "webm";
            const file = new File([blob], `gravacao.${ext}`, { type: blob.type });
            const j = await M.cloudUpload(file, { kind: "video", onProgress: (p) => { info.textContent = `Enviando… ${p}%`; } });
            stop(); close(); onDone(j.secure_url);
          } catch (e) { info.textContent = e.message; use.disabled = false; }
        });
        actions.replaceChildren(
          h("button", { class: "btn btn-ghost", type: "button", onclick: cancel, text: "Cancelar" }),
          h("button", { class: "btn btn-ghost", type: "button", onclick: () => { URL.revokeObjectURL(vid.src); chooseView(); }, text: "Gravar de novo" }), use);
      };
      chooseView();
      return [h("h3", { text: "Gravar vídeo" }), vid, info, actions];
    });
    stop();
  };

  /* escolha de imagem ou vídeo. onPick(url, origem) com origem "upload" ou "link". */
  B.mediaField = function ({ url, kind = "image", onPick, onClear, record = false }) {
    const root = h("div", { class: "bd-media" });
    let linkOpen = false, busy = "";
    const draw = () => {
      const prev = url
        ? (kind === "image"
          ? h("img", { class: "bd-media-prev", src: M.imgUrl ? M.imgUrl(url, 300) : url, alt: "" })
          : h("div", { class: "bd-media-prev bd-media-vid" }, M.icon("video", 22), h("span", { text: (M.embedOf && M.embedOf(url)?.provider) || "Vídeo enviado" })))
        : null;
      const file = h("input", { type: "file", hidden: true, accept: kind === "image" ? "image/*" : "video/*" });
      file.addEventListener("change", async () => {
        const f = file.files[0]; if (!f) return;
        if (!(await canUpload())) { M.toast("O envio de arquivos ainda não está configurado. Cole um link.", "err"); return; }
        try {
          busy = "Enviando… 0%"; draw();
          let up = f;
          if (kind === "image" && !/gif$/i.test(f.type)) up = await M.shrinkImage(f, { max: 2000 });
          const j = await M.cloudUpload(up, { kind: kind === "image" ? (/gif$/i.test(f.type) ? "video" : "image") : "video", onProgress: (p) => { busy = `Enviando… ${p}%`; const s = root.querySelector(".bd-busy"); if (s) s.textContent = busy; } });
          busy = ""; url = j.secure_url; onPick(url, "upload"); draw();
        } catch (e) { busy = ""; draw(); M.toast(e.message, "err"); }
      });
      const link = h("input", { class: "input", type: "url", placeholder: kind === "image" ? "https://…/imagem.jpg" : "Link do YouTube, Vimeo, Loom, Drive ou .mp4", value: url && !/res\.cloudinary\.com/.test(url) ? url : "" });
      const okLink = () => {
        const v = link.value.trim();
        if (!validLink(v)) { M.toast("Cole um link que comece com https://", "err"); return; }
        url = v; linkOpen = false; onPick(url, "link"); draw();
      };
      link.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); okLink(); } });
      root.replaceChildren(
        prev,
        busy ? h("div", { class: "bd-busy small", text: busy }) : null,
        h("div", { class: "bd-media-btns" },
          h("button", { class: "btn btn-ghost btn-sm", type: "button", disabled: !!busy, onclick: () => file.click() }, M.icon("clip", 16), kind === "image" ? " Enviar foto" : " Enviar vídeo"),
          h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => { linkOpen = !linkOpen; draw(); } }, M.icon("link", 16), " Colar link"),
          record ? h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => B.recordModal((u) => { url = u; onPick(u, "upload"); draw(); }) }, M.icon("camera", 16), " Gravar") : null,
          url && onClear ? h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => { url = ""; onClear(); draw(); } }, "Remover") : null),
        linkOpen ? h("div", { class: "bd-link-row" }, link, h("button", { class: "btn btn-gold btn-sm", type: "button", onclick: okLink, text: "Usar" })) : null,
        file);
      if (linkOpen) setTimeout(() => link.focus(), 0);
    };
    draw();
    return root;
  };

  /* ───── questão (prova e quiz do card) ───── */
  const LETTERS = "ABCDEF";
  B.newQuestion = () => ({ id: "", q: "", options: ["", "", "", ""], answer: [0], why: "", topic: "" });

  /* q: { q, options[], answer[], why }. html:true → q e why guardam HTML (quiz do card); false → texto puro (prova). */
  B.questionEditor = function (q, c, { html = false, onRemove, n } = {}) {
    const box = h("div", { class: "bd-q" });
    const isMulti = () => q.answer.length > 1 || q.multi;
    const draw = () => {
      box.replaceChildren(
        h("div", { class: "bd-q-head" }, n ? h("b", { text: "Questão " + n }) : h("b", { text: "Pergunta" }), onRemove ? h("button", { class: "linkish", type: "button", onclick: onRemove, text: "remover" }) : null),
        field("Pergunta", area(q, "q", c, { rows: 2, max: 400, rich: html })),
        h("div", { class: "bd-opts" }, q.options.map((o, i) => {
          const right = q.answer.includes(i);
          const pick = h("input", { type: isMulti() ? "checkbox" : "radio", name: "ans-" + (q._k ||= uid("q")), checked: right, "aria-label": "Alternativa " + LETTERS[i] + " é a certa" });
          pick.addEventListener("change", () => {
            if (isMulti()) q.answer = pick.checked ? [...new Set([...q.answer, i])].sort() : q.answer.filter((x) => x !== i);
            else q.answer = [i];
            c.change(); draw();
          });
          const txt = h("input", { class: "input", type: "text", maxlength: "200", placeholder: "Alternativa " + LETTERS[i], value: o });
          txt.addEventListener("input", () => { q.options[i] = txt.value; c.change(); });
          return h("div", { class: "bd-opt" + (right ? " is-right" : "") }, pick, h("span", { class: "bd-letter", text: LETTERS[i] }), txt,
            h("button", { type: "button", title: "Remover alternativa", disabled: q.options.length <= 2, onclick: () => {
              q.options.splice(i, 1);
              q.answer = q.answer.filter((x) => x !== i).map((x) => (x > i ? x - 1 : x));
              if (!q.answer.length) q.answer = [0];
              c.change(); draw();
            }, text: "✕" }));
        })),
        h("div", { class: "bd-q-tools" },
          q.options.length < 6 ? h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: () => { q.options.push(""); c.change(); draw(); }, text: "+ alternativa" }) : null,
          h("label", { class: "bd-check" }, h("input", { type: "checkbox", checked: isMulti(), onchange: (e) => {
            q.multi = e.target.checked;
            if (!q.multi && q.answer.length > 1) q.answer = [q.answer[0]];
            c.change(); draw();
          } }), h("span", { text: "Mais de uma alternativa certa" }))),
        field("Por que essa é a certa? (aparece depois de responder)", area(q, "why", c, { rows: 2, max: 500, rich: html })),
        !html ? field("Assunto (aparece quando o aluno precisa revisar)", input(q, "topic", c, { max: 60, ph: "Ex.: Prazo de resposta" })) : null);
    };
    draw();
    return box;
  };

  /* cole várias questões de uma vez:
       Pergunta?
       a) opção   b) opção ...
       Resposta: b   (ou "b, c")
       Explicação: texto */
  B.parseQuestions = function (text) {
    const out = [];
    for (const blk of String(text).replace(/\r/g, "").split(/\n\s*\n/)) {
      const ls = blk.split("\n").map((l) => l.trim()).filter(Boolean);
      if (ls.length < 3) continue;
      const q = { id: "", q: "", options: [], answer: [], why: "", topic: "" };
      for (const l of ls) {
        let m;
        if ((m = l.match(/^(?:resposta|gabarito|certa)\s*[:\-]\s*(.+)$/i))) {
          q.answer = [...new Set(m[1].toUpperCase().match(/[A-F]/g) || [])].map((x) => LETTERS.indexOf(x));
        } else if ((m = l.match(/^(?:explica[cç][aã]o|por ?qu[eê]|motivo)\s*[:\-]\s*(.+)$/i))) q.why = m[1];
        else if ((m = l.match(/^\(?([a-fA-F])[\)\.\-:]\s*(.+)$/)) && q.q) q.options[LETTERS.indexOf(m[1].toUpperCase())] = m[2];
        else if (!q.q) q.q = l.replace(/^\d+[\)\.\-]\s*/, "");
      }
      q.options = q.options.filter((x) => x !== undefined && x !== "");
      if (q.q && q.options.length >= 2 && q.answer.length && q.answer.every((i) => i < q.options.length)) out.push(q);
    }
    return out;
  };

  /* ───── aparência (vale para qualquer card) ───── */
  const SWATCH = { night: "#241448", plum: "#3a1a72", violet: "#6a2fd0", pink: "#b02fd0", mint: "#0f3d38", amber: "#55300a", dark: "#1f1140", gold: "#fdb927" };
  B.styleEditor = function (b, c, { free = false } = {}) {
    const st = (b.style ||= {});
    const clean = () => { for (const k of Object.keys(st)) if (st[k] === undefined || st[k] === "") delete st[k]; if (!Object.keys(st).length) delete b.style; };
    const ch = { change: () => { clean(); c.change(); }, rerender: c.rerender };
    const bgNow = st.bg || "";
    const gm = bgNow.match(/^g:(#[0-9a-f]{3,8}),(#[0-9a-f]{3,8})$/i);
    const custom = { c1: gm ? gm[1] : /^#/.test(bgNow) ? bgNow : "#552583", c2: gm ? gm[2] : "#150b2b" };
    const setBg = (v) => { if (v) st.bg = v; else delete st.bg; ch.change(); c.rerender(); };
    const swatches = h("div", { class: "bd-swatches" },
      h("button", { type: "button", class: "bd-sw" + (!bgNow && !st.img ? " on" : ""), title: "Padrão do tipo de card", onclick: () => { delete st.img; setBg(""); }, text: "Auto" }),
      Object.entries(SWATCH).map(([k, col]) => h("button", { type: "button", class: "bd-sw" + (bgNow === k && !st.img ? " on" : ""), style: `background:${col}`, title: k, "aria-label": "Fundo " + k, onclick: () => { delete st.img; setBg(k); } })));
    const c1 = h("input", { type: "color", value: custom.c1 }), c2 = h("input", { type: "color", value: custom.c2 });
    const grad = () => { delete st.img; st.bg = `g:${c1.value},${c2.value}`; ch.change(); };
    c1.addEventListener("input", () => { delete st.img; st.bg = c1.value; ch.change(); });
    const g1 = h("button", { class: "btn btn-ghost btn-sm", type: "button", onclick: grad, text: "Aplicar degradê" });
    const det = h("details", { class: "bd-style", open: B._styleOpen ?? !!Object.keys(st).length },
      h("summary", { text: "Aparência do card" }),
      field("Fundo", swatches),
      h("div", { class: "bd-field bd-inline" }, h("label", { text: "Cor ou degradê" }), c1, c2, g1),
      field("Foto de fundo", B.mediaField({
        url: st.img || "", kind: "image",
        onPick: (u) => { st.img = u; if (st.dim == null) st.dim = 35; ch.change(); c.rerender(); },
        onClear: () => { delete st.img; delete st.dim; ch.change(); c.rerender(); },
      })),
      st.img ? field("Escurecer a foto", range(st, "dim", ch, { min: 0, max: 85, step: 5, fmt: (v) => v + "%" })) : null,
      free ? null : [
        field("Fonte do texto", select(st, "font", [["", "Padrão"], ...Object.entries(M.CARD_FONTS).filter(([k]) => k !== "sans").map(([k, v]) => [k, v.label])], ch)),
        field("Tamanho do texto", range(st, "size", ch, { min: 0.8, max: 1.6, step: 0.05, fmt: (v) => Math.round((v || 1) * 100) + "%" })),
        h("div", { class: "bd-field bd-inline" }, h("label", { text: "Cor do texto" }), color(st, "color", ch, { allowEmpty: true })),
        field("Alinhamento", segmented(st, "align", [["", "Padrão"], ["left", "Esquerda"], ["center", "Centro"], ["right", "Direita"]], ch)),
        field("Posição na tela", segmented(st, "v", [["", "Centro"], ["top", "Topo"], ["bottom", "Base"]], ch)),
      ],
      h("button", { class: "linkish", type: "button", onclick: () => { delete b.style; c.rerender(); c.change(); }, text: "Voltar ao padrão do card" }));
    det.addEventListener("toggle", () => { B._styleOpen = det.open; });
    return det;
  };
  function segmented(obj, k, options, c) {
    const draw = () => box.replaceChildren(options.map(([v, l]) => h("button", { type: "button", class: "bd-seg" + ((obj[k] || "") === v ? " on" : ""), onclick: () => { if (v) obj[k] = v; else delete obj[k]; c.change(); draw(); }, text: l })));
    const box = h("div", { class: "bd-segs" });
    draw();
    return box;
  }
  B.segmented = segmented;

  /* ───── catálogo de cards ───── */
  const TONES = [["", "Automática"], ["gold", "Dourado"], ["violet", "Violeta"], ["mint", "Verde"], ["pink", "Rosa"], ["amber", "Âmbar"], ["sky", "Azul"]];

  B.CARDS = {
    hook: {
      label: "Capa da aula", ico: "🎬", group: "Texto", desc: "Abre a aula com título e uma frase.",
      make: () => ({ t: "hook", emoji: "🏀", title: "Título da aula", text: "Em 3 minutos você entende…" }),
      form: (b, c) => [field("Emoji", emoji(b, "emoji", c)), textLine(b, "title", "Título", c, { max: 120 }), textBox(b, "text", "Frase de apoio", c, { rows: 2, max: 400 })],
    },
    big: {
      label: "Frase de impacto", ico: "💥", group: "Texto", desc: "Uma ideia grande, sozinha na tela.",
      make: () => ({ t: "big", emoji: "💡", html: "Escreva a ideia <b>principal</b> aqui.", sub: "" }),
      form: (b, c) => [field("Emoji", emoji(b, "emoji", c)), textBox(b, "html", "Frase", c, { rows: 3, max: 300 }), textBox(b, "sub", "Complemento (opcional)", c, { rows: 2, max: 300 })],
    },
    p: {
      label: "Texto", ico: "📝", group: "Texto", desc: "Título e um parágrafo.",
      make: () => ({ t: "p", title: "Título", html: "Escreva o texto aqui." }),
      form: (b, c) => [textLine(b, "title", "Título (opcional)", c, { max: 100 }), textBox(b, "html", "Texto", c, { rows: 6, max: 1400 })],
    },
    list: {
      label: "Lista", ico: "📋", group: "Texto", desc: "Itens em tópicos.",
      make: () => ({ t: "list", title: "Os pontos", items: ["Primeiro ponto", "Segundo ponto", "Terceiro ponto"] }),
      form: (b, c) => [textLine(b, "title", "Título", c, { max: 100 }), field("Itens", lines(b, "items", c, { rows: 6 }), "Um item por linha. Use **negrito** para destacar.")],
    },
    steps: {
      label: "Passo a passo", ico: "🪜", group: "Texto", desc: "Etapas numeradas, com explicação.",
      make: () => ({ t: "steps", title: "Como fazer", items: [{ title: "Passo 1", html: "O que fazer." }, { title: "Passo 2", html: "O que fazer depois." }] }),
      form: (b, c) => [textLine(b, "title", "Título", c, { max: 100 }), field("Passos", rows(c, b.items, [{ k: "title", ph: "Nome do passo", max: 80 }, { k: "html", kind: "rich", ph: "Explicação" }], () => ({ title: "", html: "" }), { max: 8, add: "passo" }))],
    },
    jargon: {
      label: "Termo traduzido", ico: "🔤", group: "Texto", desc: "Explica um jargão em uma frase.",
      make: () => ({ t: "jargon", tag: "Traduzindo na hora", term: "Termo", means: "O que ele significa, em palavras simples.", ex: "Exemplo: …" }),
      form: (b, c) => [textLine(b, "tag", "Etiqueta", c, { max: 40 }), textLine(b, "term", "Termo", c, { max: 60 }), textBox(b, "means", "O que significa", c, { rows: 3, max: 320 }), textBox(b, "ex", "Exemplo", c, { rows: 2, max: 320 })],
    },
    say: {
      label: "Como explicar", ico: "🗣️", group: "Texto", desc: "Uma frase pronta para o aluno usar com o cliente.",
      make: () => ({ t: "say", title: "Como explicar pro cliente", html: "“Escreva aqui a frase pronta.”" }),
      form: (b, c) => [textLine(b, "title", "Título", c, { max: 60 }), textBox(b, "html", "Frase", c, { rows: 4, max: 600 })],
    },
    callout: {
      label: "Destaque", ico: "📌", group: "Texto", desc: "Dica, atenção, regra ou exemplo.",
      make: () => ({ t: "callout", tone: "dica", title: "", html: "Escreva a dica." }),
      form: (b, c) => [field("Tipo", select(b, "tone", [["dica", "Dica"], ["atencao", "Atenção"], ["regra", "Regra"], ["exemplo", "Exemplo"]], c)), textLine(b, "title", "Título (opcional)", c, { max: 60 }), textBox(b, "html", "Texto", c, { rows: 5, max: 700 })],
    },
    recap: {
      label: "Resumo", ico: "✅", group: "Texto", desc: "O que o aluno precisa guardar.",
      make: () => ({ t: "recap", title: "Guarda isso", items: ["Ponto 1", "Ponto 2", "Ponto 3"] }),
      form: (b, c) => [textLine(b, "title", "Título", c, { max: 60 }), field("Itens", lines(b, "items", c, { rows: 6 }))],
    },
    conta: {
      label: "Conta com números", ico: "🧮", group: "Números e dados", desc: "Uma conta linha a linha, com total.",
      make: () => ({ t: "conta", title: "Conta real", rows: [["Venda", "R$ 100,00", ""], ["Custo", "R$ 60,00", "neg"]], total: ["Sobra", "R$ 40,00"], note: "" }),
      form: (b, c) => {
        b.total ||= ["", ""];
        return [textLine(b, "title", "Título", c, { max: 60 }),
          field("Linhas", rows(c, b.rows, [{ k: 0, ph: "Descrição", max: 90, w: "2" }, { k: 1, ph: "Valor", max: 30 }, { k: 2, kind: "select", options: [["", "normal"], ["pos", "verde"], ["neg", "vermelho"]] }], () => ["", "", ""], { max: 10, add: "linha" })),
          h("div", { class: "bd-field bd-inline" }, h("label", { text: "Total" }), input(b.total, 0, c, { ph: "Rótulo", max: 90 }), input(b.total, 1, c, { ph: "Valor", max: 30 })),
          textBox(b, "note", "Observação (opcional)", c, { rows: 2, max: 300 })];
      },
    },
    chart: {
      label: "Gráfico", ico: "📊", group: "Números e dados", desc: "Barras, linhas, rosca, funil ou composição.",
      make: () => ({ t: "chart", kind: "bar", title: "Título do gráfico", unit: "", caption: "", data: [{ label: "A", value: 40, tone: "" }, { label: "B", value: 25, tone: "" }, { label: "C", value: 15, tone: "" }] }),
      form: (b, c) => {
        const body = h("div");
        const draw = () => {
          if (b.kind === "line") {
            b.x ||= ["Jan", "Fev", "Mar", "Abr"]; b.series ||= [{ name: "Série 1", tone: "", values: [10, 20, 15, 30] }];
            const xs = h("input", { class: "input", value: b.x.join(", "), placeholder: "Jan, Fev, Mar" });
            xs.addEventListener("input", () => { b.x = xs.value.split(",").map((v) => v.trim()).filter(Boolean).slice(0, 12); c.change(); });
            body.replaceChildren(
              field("Eixo de baixo", xs, "Separe por vírgula."),
              field("Séries (até 3)", rows(c, b.series, [{ k: "name", ph: "Nome", max: 30 }, { k: "values", kind: "numlist", ph: "Valores (10, 20, 15)", w: "2" }, { k: "tone", kind: "select", options: TONES }], () => ({ name: "", tone: "", values: [] }), { max: 3, add: "série" })));
          } else {
            b.data ||= [{ label: "A", value: 40, tone: "" }, { label: "B", value: 25, tone: "" }];
            body.replaceChildren(field("Dados", rows(c, b.data, [{ k: "label", ph: "Nome", max: 30, w: "2" }, { k: "value", kind: "num", ph: "Valor" }, { k: "tone", kind: "select", options: TONES }], () => ({ label: "", value: 10, tone: "" }), { max: 12, add: "item" })));
          }
        };
        draw();
        return [
          field("Tipo de gráfico", select(b, "kind", [["bar", "Barras"], ["hbar", "Barras deitadas"], ["line", "Linhas"], ["donut", "Rosca"], ["stack", "Composição 100%"], ["funnel", "Funil"]], c, { onPick: () => { draw(); c.change(); } })),
          textLine(b, "title", "Título", c, { max: 80 }), textLine(b, "unit", "Unidade (R$, %, x…)", c, { max: 8 }),
          body, textBox(b, "caption", "Legenda (opcional)", c, { rows: 2, max: 300 })];
      },
    },
    table: {
      label: "Tabela", ico: "▦", group: "Números e dados", desc: "Linhas e colunas.",
      make: () => ({ t: "table", title: "Comparativo", head: ["Item", "Antes", "Depois"], rows: [["Prazo", "5 dias", "2 dias"], ["Custo", "R$ 10", "R$ 8"]], caption: "" }),
      form: (b, c) => {
        const el = h("textarea", { class: "input bd-mono", rows: "8", placeholder: "Item | Antes | Depois" });
        el.value = [b.head, ...b.rows].map((r) => r.map(B.htmlToMd).join(" | ")).join("\n");
        el.addEventListener("input", () => {
          const ls = el.value.split("\n").map((l) => l.trim()).filter(Boolean);
          const cells = ls.map((l) => l.split("|").map((x) => B.mdToHtml(x.trim())));
          b.head = cells[0] || []; b.rows = cells.slice(1, 21); c.change();
        });
        return [textLine(b, "title", "Título", c, { max: 80 }), field("Tabela", el, "A primeira linha é o cabeçalho. Separe as colunas com |"), textBox(b, "caption", "Legenda (opcional)", c, { rows: 2, max: 300 })];
      },
    },
    compare: {
      label: "Comparativo", ico: "⚖️", group: "Números e dados", desc: "Dois lados, lado a lado.",
      make: () => ({ t: "compare", left: { title: "Certo", tone: "good", items: ["Ponto 1"] }, right: { title: "Errado", tone: "bad", items: ["Ponto 1"] } }),
      form: (b, c) => ["left", "right"].map((s) => h("div", { class: "bd-side" },
        h("b", { text: s === "left" ? "Lado esquerdo" : "Lado direito" }),
        textLine(b[s], "title", "Título", c, { max: 60 }),
        field("Cor", select(b[s], "tone", [["good", "Verde (certo)"], ["bad", "Vermelho (errado)"]], c)),
        field("Itens", lines(b[s], "items", c, { rows: 4, max: 8 })))),
    },
    flow: {
      label: "Fluxo", ico: "🔀", group: "Fluxos", desc: "Etapas ligadas por setas.",
      make: () => ({ t: "flow", title: "O caminho", loop: false, items: [{ icon: "1️⃣", title: "Primeiro", text: "O que acontece" }, { icon: "2️⃣", title: "Depois", text: "O que acontece" }] }),
      form: (b, c) => [textLine(b, "title", "Título", c, { max: 80 }), field("Etapas", rows(c, b.items, [{ k: "icon", kind: "emoji", w: "s" }, { k: "title", ph: "Título", max: 60 }, { k: "text", kind: "rich", ph: "Explicação", max: 200 }], () => ({ icon: "•", title: "", text: "" }), { max: 8, min: 2, add: "etapa" })), toggle(b, "loop", "Mostrar que volta ao começo", c)],
    },
    timeline: {
      label: "Linha do tempo", ico: "🕒", group: "Fluxos", desc: "Datas ou prazos em sequência.",
      make: () => ({ t: "timeline", title: "Calendário", items: [{ when: "2026", label: "Marco 1", text: "O que acontece", tone: "" }, { when: "2027", label: "Marco 2", text: "O que acontece", tone: "" }] }),
      form: (b, c) => [textLine(b, "title", "Título", c, { max: 80 }), field("Marcos", rows(c, b.items, [{ k: "when", ph: "Quando", max: 24 }, { k: "label", ph: "Título", max: 60 }, { k: "text", kind: "rich", ph: "Explicação", max: 200 }, { k: "tone", kind: "select", options: TONES }], () => ({ when: "", label: "", text: "", tone: "" }), { max: 8, min: 2, add: "marco" }))],
    },
    img: {
      label: "Imagem", ico: "🖼️", group: "Mídia", desc: "Foto ou print ocupando o card.",
      make: () => ({ t: "img", url: "", caption: "", fit: "cover", alt: "" }),
      form: (b, c) => [field("Imagem", B.mediaField({ url: b.url, kind: "image", onPick: (u) => { b.url = u; c.change(); c.rerender(); }, onClear: () => { b.url = ""; c.change(); c.rerender(); } })),
        field("Como encaixar", segmented(b, "fit", [["cover", "Preencher"], ["contain", "Mostrar inteira"]], c)), textBox(b, "caption", "Legenda (opcional)", c, { rows: 2, max: 240 }), textLine(b, "alt", "Descrição para leitor de tela", c, { max: 120 })],
    },
    mvideo: {
      label: "Vídeo", ico: "🎥", group: "Mídia", desc: "Gravado aqui, enviado ou por link. Toca sozinho.",
      make: () => ({ t: "mvideo", kind: "link", url: "", caption: "", autoplay: true, loop: false, muted: false, fit: "contain" }),
      form: (b, c) => [field("Vídeo", B.mediaField({ url: b.url, kind: "video", record: true, onPick: (u, k) => { b.url = u; b.kind = k; c.change(); c.rerender(); }, onClear: () => { b.url = ""; c.change(); c.rerender(); } }), "Envie um arquivo, grave pela câmera ou tela, ou cole um link do YouTube, Vimeo, Loom, Google Drive ou .mp4."),
        toggle(b, "autoplay", "Tocar sozinho quando o card abrir", c, true), toggle(b, "loop", "Repetir", c), toggle(b, "muted", "Começar sem som", c),
        field("Como encaixar", segmented(b, "fit", [["contain", "Inteiro"], ["cover", "Preencher"]], c)), textBox(b, "caption", "Legenda (opcional)", c, { rows: 2, max: 240 })],
    },
    quiz: {
      label: "Quiz", ico: "❓", group: "Prática", desc: "Pergunta rápida; o aluno só avança ao responder.",
      make: () => ({ t: "quiz", q: "Escreva a pergunta?", options: ["Certa", "Errada", "Errada"], answer: [0], multi: false, why: "Explique por que essa é a certa." }),
      form: (b, c) => [B.questionEditor(b, c, { html: true })],
    },
    free: {
      label: "Card livre", ico: "🎨", group: "Mídia", desc: "Monte do zero: textos, fotos, vídeos e formas onde você quiser.",
      make: () => ({ t: "free", ratio: "9/16", style: { bg: "plum" }, layers: [
        { id: uid("L"), k: "text", x: 8, y: 30, w: 84, h: 20, rot: 0, html: "Seu título aqui", font: "display", size: 12, color: "#fdb927", align: "left", bold: true, bg: "", lh: 1.05 },
        { id: uid("L"), k: "text", x: 8, y: 52, w: 84, h: 20, rot: 0, html: "Um texto de apoio embaixo.", font: "sans", size: 5.4, color: "#ffffff", align: "left", bold: false, bg: "", lh: 1.3 },
      ] }),
      form: null, // o editor do card livre é montado em builder.js (arrastar na prévia)
    },
  };
  B.GROUPS = ["Texto", "Números e dados", "Fluxos", "Mídia", "Prática"];

  /* resumo curto para a lista de cards */
  B.summary = function (b) {
    const first = b.title || b.term || b.q || b.html || b.text || b.caption || (b.items && (typeof b.items[0] === "string" ? b.items[0] : b.items[0]?.title)) || (b.left && b.left.title) || (b.layers && b.layers.find((l) => l.html)?.html) || "";
    return B.plain(first).slice(0, 44);
  };
})();

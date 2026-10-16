/* Gráficos, diagramas e simuladores com sliders dentro das aulas (cards de stories).
   Blocos: chart (bar, hbar, line, donut, stack, waterfall, funnel, pareto, matrix, meter), flow, table, tree, timeline,
   stairs, anno (telas didáticas anotadas) e lab (simulador com sliders).
   Tudo é desenhado a partir dos dados do content.js: nada de imagem externa. */
(function () {
  const { h, svg, esc } = M;
  const R = M.blockTypes;

  /* ───── utilidades ───── */
  const TONE = { gold: "#fdb927", violet: "#9b7bff", mint: "#52e0a3", pink: "#ff7a97", amber: "#ffc15e", sky: "#6fc7ff", plum: "#d28bff", grey: "#8f82b6" };
  const SEQ = ["gold", "violet", "mint", "pink", "sky", "amber", "plum", "grey"];
  const colorOf = (tone, i) => TONE[tone] || TONE[SEQ[i % SEQ.length]];
  const nf = (n, d = 0) => Number(n).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const isInt = (v) => Math.abs(v - Math.round(v)) < 1e-9;
  function fv(v, unit) {
    const u = unit || "", a = Math.abs(v), neg = v < 0 && Math.round(a * 100) > 0;
    let s;
    if (u === "R$") s = "R$ " + nf(a, isInt(a) ? 0 : 2);
    else if (u === "%") s = nf(a, isInt(a) ? 0 : 1) + "%";
    else if (u === "x") s = nf(a, isInt(a) ? 0 : 1) + "x";
    else s = nf(a, isInt(a) ? 0 : 1) + (u ? " " + u : "");
    return (neg ? "-" : "") + s;
  }
  /* número curto (sem R$) para barras estreitas */
  const fshort = (v, unit) => (unit === "R$" ? (v < 0 ? "-" : "") + nf(Math.abs(v), isInt(v) ? 0 : 1) : fv(v, unit));
  function wrap(text, n) {
    const words = String(text).split(" ");
    const lines = [""];
    for (const w of words) {
      const cur = lines[lines.length - 1];
      if (!cur) lines[lines.length - 1] = w;
      else if ((cur + " " + w).length <= n) lines[lines.length - 1] = cur + " " + w;
      else lines.push(w);
    }
    if (lines.length > 2) { lines.length = 2; lines[1] = lines[1].slice(0, Math.max(1, n - 1)) + "…"; }
    return lines.map((l) => (l.length > n + 3 ? l.slice(0, n) + "…" : l));
  }
  function niceMax(v) {
    if (v <= 0) return 1;
    const p = Math.pow(10, Math.floor(Math.log10(v)));
    const f = v / p;
    return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * p;
  }
  const fig = (b, body, cls) => h("figure", { class: "viz viz-" + cls },
    b.title ? h("figcaption", { class: "viz-title", text: b.title }) : null, body,
    b.caption ? h("p", { class: "viz-cap", html: b.caption }) : null);
  const legend = (items) => h("div", { class: "viz-legend" }, items.map((it) => h("span", { class: "lg" },
    h("i", { style: `background:${it.color}` }), h("span", { class: "lg-l", text: it.label }), it.value ? h("b", { text: it.value }) : null)));
  const txt = (cls, x, y, s, anchor) => `<text class="${cls}" x="${x.toFixed(1)}" y="${y.toFixed(1)}"${anchor ? ` text-anchor="${anchor}"` : ""}>${esc(s)}</text>`;

  /* ───── gráficos ───── */
  const CH = {};

  /* barras verticais (aceita valores negativos) */
  CH.bar = (b) => {
    const d = b.data, n = d.length, W = 340, pl = 8, pr = 8, pt = 30, pb = 46, H = 220;
    const hi = Math.max(0, ...d.map((x) => x.value)), lo = Math.min(0, ...d.map((x) => x.value));
    const span = (hi - lo) * 1.12 || 1;
    const ch = H - pt - pb, zero = pt + (hi * 1.06 / span) * ch;
    const k = ch / span;
    const gap = n > 5 ? 8 : 12, bw = (W - pl - pr - gap * (n - 1)) / n;
    let g = "";
    d.forEach((x, i) => {
      const c = colorOf(x.tone, i), x0 = pl + i * (bw + gap), cx = x0 + bw / 2;
      const hh = Math.max(2, Math.abs(x.value) * k), y = x.value >= 0 ? zero - hh : zero;
      const dim = b.hl != null && b.hl !== i;
      g += `<rect class="vz-bar${dim ? " dim" : ""}" x="${x0.toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${hh.toFixed(1)}" rx="6" fill="${c}"/>`;
      g += txt("vz-v", cx, x.value >= 0 ? y - 7 : y + hh + 15, fv(x.value, b.unit), "middle");
      wrap(x.label, Math.max(6, Math.floor(bw / 6.4))).forEach((ln, j) => { g += txt("vz-t", cx, H - pb + 18 + j * 13, ln, "middle"); });
    });
    g += `<line class="vz-axis" x1="${pl}" x2="${W - pr}" y1="${zero.toFixed(1)}" y2="${zero.toFixed(1)}"/>`;
    return svg(`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(b.title || "Gráfico de barras")}">${g}</svg>`);
  };

  /* barras horizontais: o rótulo fica em cima da barra (aceita rótulos longos) */
  CH.hbar = (b) => {
    const d = b.data, W = 340, rowH = 44, H = d.length * rowH + 6, maxV = Math.max(...d.map((x) => Math.abs(x.value)), 1), area = W - 78;
    let g = "";
    d.forEach((x, i) => {
      const y = 4 + i * rowH, c = colorOf(x.tone, i), w = Math.max(3, (Math.abs(x.value) / maxV) * area), dim = b.hl != null && b.hl !== i;
      g += txt("vz-t vz-l", 2, y + 13, x.label);
      g += `<rect class="vz-track" x="0" y="${y + 20}" width="${area}" height="16" rx="8"/>`;
      g += `<rect class="vz-bar${dim ? " dim" : ""}" x="0" y="${y + 20}" width="${w.toFixed(1)}" height="16" rx="8" fill="${c}"/>`;
      g += txt("vz-v", area + 8, y + 33, fv(x.value, b.unit));
    });
    return svg(`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(b.title || "Gráfico de barras")}">${g}</svg>`);
  };

  /* linhas (1 a 3 séries) */
  CH.line = (b) => {
    const W = 340, H = 232, pr = 14, pt = 18, pb = 36, n = b.x.length;
    const all = b.series.flatMap((s) => s.values);
    const lo = b.ymin != null ? b.ymin : Math.min(0, ...all), hi0 = Math.max(...all, 1);
    const step = niceMax((hi0 - lo) / 4) || 1;
    const hi = Math.max(step, Math.ceil(hi0 / step) * step);
    const tick = (t) => nf(t, isInt(t) ? 0 : 1) + (b.unit === "%" || b.unit === "x" ? b.unit : "");
    const pl = Math.max(34, 12 + 6.2 * tick(hi).length);
    const ch = H - pt - pb, cw = W - pl - pr;
    const X = (i) => pl + (n === 1 ? cw / 2 : (i / (n - 1)) * cw), Y = (v) => pt + ch - ((v - lo) / (hi - lo || 1)) * ch;
    let g = "";
    for (let t = lo; t <= hi + 1e-9; t += step) g += `<line class="vz-grid" x1="${pl}" x2="${W - pr}" y1="${Y(t).toFixed(1)}" y2="${Y(t).toFixed(1)}"/>` + txt("vz-t vz-sm", pl - 6, Y(t) + 4, tick(t), "end");
    const skip = n > 6 ? 2 : 1;
    b.x.forEach((lab, i) => { if (i % skip === 0 || i === n - 1) g += txt("vz-t", X(i), H - pb + 18, lab, "middle"); });
    b.series.forEach((s, k) => {
      const c = colorOf(s.tone, k), pts = s.values.map((v, i) => `${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join(" ");
      const dashed = s.dash === true || (b.series.length > 1 && /equil|meta|limite|objetivo|pedido/i.test(s.name));
      g += `<polyline class="vz-line${dashed ? " dashed" : ""}" points="${pts}" fill="none" stroke="${c}"/>`;
      s.values.forEach((v, i) => { g += `<circle cx="${X(i).toFixed(1)}" cy="${Y(v).toFixed(1)}" r="3.6" fill="${c}"/>`; });
      const last = s.values.length - 1;
      const lv = s.values[last], others = b.series.filter((o) => o !== s).map((o) => o.values[o.values.length - 1]);
      const below = others.length ? lv < Math.max(...others) || (lv === Math.max(...others) && k > 0) : last > 0 && s.values[last - 1] > lv;
      g += txt("vz-v vz-sm", X(last), Y(lv) + (below ? 18 : -9), fv(lv, b.unit), "end");
    });
    const body = svg(`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(b.title || "Gráfico de linhas")}">${g}</svg>`);
    return b.series.length > 1 ? h("div", null, legend(b.series.map((s, k) => ({ color: colorOf(s.tone, k), label: s.name }))), body) : body;
  };

  /* rosca com legenda (mostra o % de cada fatia) */
  CH.donut = (b) => {
    const d = b.data, total = d.reduce((a, x) => a + x.value, 0) || 1, r = 52, C = 2 * Math.PI * r;
    let off = 0, g = "";
    d.forEach((x, i) => {
      const len = (x.value / total) * C;
      g += `<circle class="vz-seg" cx="80" cy="80" r="${r}" fill="none" stroke="${colorOf(x.tone, i)}" stroke-width="28" stroke-dasharray="${Math.max(0, len - 2).toFixed(2)} ${(C - Math.max(0, len - 2)).toFixed(2)}" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 80 80)"/>`;
      off += len;
    });
    const center = String(b.center != null ? b.center : fv(total, b.unit)).split("\n");
    center.forEach((l, i) => { g += txt(i === 0 ? "vz-c" : "vz-t vz-sm", 80, 80 + (center.length > 1 ? (i === 0 ? 2 : 16) : 7), l, "middle"); });
    return h("div", { class: "viz-donut" },
      svg(`<svg viewBox="0 0 160 160" role="img" aria-label="${esc(b.title || "Gráfico de rosca")}">${g}</svg>`),
      legend(d.map((x, i) => ({ color: colorOf(x.tone, i), label: x.label, value: (() => { const a = fv(x.value, b.unit), p = nf((x.value / total) * 100, 0) + "%"; return a === p ? a : `${a} · ${p}`; })() }))));
  };

  /* uma barra 100%: composição */
  CH.stack = (b) => {
    const d = b.data, total = d.reduce((a, x) => a + x.value, 0) || 1, W = 340;
    let x0 = 0, g = `<clipPath id="stk"><rect x="0" y="0" width="${W}" height="48" rx="14"/></clipPath><g clip-path="url(#stk)">`;
    d.forEach((x, i) => {
      const w = (x.value / total) * W;
      g += `<rect x="${x0.toFixed(1)}" y="0" width="${w.toFixed(1)}" height="48" fill="${colorOf(x.tone, i)}" stroke="rgba(20,10,40,.55)" stroke-width="1.5"/>`;
      if (w > 34) g += txt("vz-bar-t", x0 + w / 2, 29, nf((x.value / total) * 100, 0) + "%", "middle");
      x0 += w;
    });
    g += "</g>";
    return h("div", { class: "viz-stack" }, svg(`<svg viewBox="0 0 ${W} 48" role="img" aria-label="${esc(b.title || "Composição")}">${g}</svg>`),
      legend(d.map((x, i) => ({ color: colorOf(x.tone, i), label: x.label, value: fv(x.value, b.unit) }))));
  };

  /* cascata: do ponto de partida até o total */
  CH.waterfall = (b) => {
    const d = b.data, n = d.length, W = 340, H = 236, pl = 6, pr = 6, pt = 30, pb = 48;
    const steps = [];
    let run = 0;
    d.forEach((x, i) => {
      const isStart = i === 0 || x.type === "start", isTotal = x.type === "total";
      if (isStart) { run = x.value; steps.push({ x, from: 0, to: run, kind: "start" }); }
      else if (isTotal) { if (typeof x.value === "number") run = x.value; steps.push({ x, from: 0, to: run, kind: "total" }); }
      else { const from = run; run += x.value; steps.push({ x, from, to: run, kind: x.value < 0 ? "neg" : "pos" }); }
    });
    const hi = Math.max(0, ...steps.flatMap((s) => [s.from, s.to])), lo = Math.min(0, ...steps.flatMap((s) => [s.from, s.to]));
    const span = (hi - lo) * 1.12 || 1, ch = H - pt - pb, k = ch / span, zero = pt + (hi * 1.04 / span) * ch;
    const Y = (v) => zero - v * k;
    const gap = n > 6 ? 6 : 9, bw = (W - pl - pr - gap * (n - 1)) / n;
    let g = "";
    steps.forEach((s, i) => {
      const x0 = pl + i * (bw + gap), cx = x0 + bw / 2, top = Math.min(Y(s.from), Y(s.to)), hh = Math.max(2, Math.abs(Y(s.from) - Y(s.to)));
      const c = s.kind === "start" ? TONE.gold : s.kind === "total" ? (s.to >= 0 ? TONE.mint : TONE.pink) : s.kind === "neg" ? TONE.pink : TONE.mint;
      g += `<rect class="vz-bar" x="${x0.toFixed(1)}" y="${top.toFixed(1)}" width="${bw.toFixed(1)}" height="${hh.toFixed(1)}" rx="5" fill="${c}"/>`;
      const val = s.kind === "neg" || s.kind === "pos" ? s.x.value : s.to;
      g += txt("vz-v vz-sm", cx, top - 6, (s.kind === "pos" ? "+" : "") + fshort(val, b.unit), "middle");
      wrap(s.x.label, Math.max(5, Math.floor(bw / 5.6))).forEach((ln, j) => { g += txt("vz-t vz-sm", cx, H - pb + 16 + j * 12, ln, "middle"); });
      if (i < n - 1) g += `<line class="vz-conn" x1="${(x0 + bw).toFixed(1)}" x2="${(x0 + bw + gap).toFixed(1)}" y1="${Y(s.to).toFixed(1)}" y2="${Y(s.to).toFixed(1)}"/>`;
    });
    g += `<line class="vz-axis" x1="${pl}" x2="${W - pr}" y1="${zero.toFixed(1)}" y2="${zero.toFixed(1)}"/>`;
    if (b.unit) g += txt("vz-t vz-sm vz-unit", W - 4, 12, b.unit === "R$" ? "valores em R$" : "valores em " + b.unit, "end");
    return svg(`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(b.title || "Cascata")}">${g}</svg>`);
  };

  /* funil: barras centralizadas + % que avança */
  CH.funnel = (b) => {
    const d = b.data, max = Math.max(...d.map((x) => x.value), 1);
    const rows = [];
    d.forEach((x, i) => {
      if (i > 0) rows.push(h("div", { class: "fn-conv" }, `↓ ${nf((x.value / (d[i - 1].value || 1)) * 100, x.value / (d[i - 1].value || 1) * 100 < 10 ? 1 : 0)}% avançam`));
      rows.push(h("div", { class: "fn-row" },
        h("div", { class: "fn-lab" }, h("span", { text: x.label }), h("b", { text: fv(x.value, b.unit) })),
        h("div", { class: "fn-bar", style: `width:${Math.max(14, (x.value / max) * 100)}%;background:${colorOf(x.tone, i)}` })));
    });
    return h("div", { class: "viz-funnel" }, rows);
  };

  /* pareto: barras + % acumulado, com marcas de 80% e 95% (curva A, B e C) */
  CH.pareto = (b) => {
    const d = b.data, n = d.length, W = 340, H = 240, pl = 34, pr = 34, pt = 20, pb = 46;
    const total = d.reduce((a, x) => a + x.value, 0) || 1, max = Math.max(...d.map((x) => x.value), 1) * 1.1;
    const ch = H - pt - pb, cw = W - pl - pr, gap = 8, bw = (cw - gap * (n - 1)) / n;
    const Y = (v) => pt + ch - (v / max) * ch, Yp = (p) => pt + ch - (p / 100) * ch;
    let cum = 0, g = "", path = [];
    [80, 95].forEach((p) => { g += `<line class="vz-grid dashed" x1="${pl}" x2="${W - pr}" y1="${Yp(p).toFixed(1)}" y2="${Yp(p).toFixed(1)}"/>` + txt("vz-t vz-sm", W - pr + 4, Yp(p) + 4, p + "%"); });
    d.forEach((x, i) => {
      const before = cum; cum += x.value;
      const c = before < 80 ? TONE.gold : before < 95 ? TONE.violet : TONE.grey;
      const x0 = pl + i * (bw + gap), cx = x0 + bw / 2;
      g += `<rect class="vz-bar" x="${x0.toFixed(1)}" y="${Y(x.value).toFixed(1)}" width="${bw.toFixed(1)}" height="${(ch - (Y(x.value) - pt)).toFixed(1)}" rx="5" fill="${c}"/>`;
      path.push([cx, Yp((cum / total) * 100), (cum / total) * 100]);
      wrap(x.label, Math.max(5, Math.floor(bw / 5.8))).forEach((ln, j) => { g += txt("vz-t vz-sm", cx, H - pb + 16 + j * 12, ln, "middle"); });
    });
    g += `<polyline class="vz-line" points="${path.map((p) => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ")}" fill="none" stroke="${TONE.mint}"/>`;
    path.forEach((p) => { g += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.4" fill="${TONE.mint}"/>` + txt("vz-v vz-sm", p[0], p[1] - 8, nf(p[2], 0) + "%", "middle"); });
    g += `<line class="vz-axis" x1="${pl}" x2="${W - pr}" y1="${pt + ch}" y2="${pt + ch}"/>`;
    return h("div", null, legend([{ color: TONE.gold, label: "Curva A (até 80%)" }, { color: TONE.violet, label: "Curva B (até 95%)" }, { color: TONE.grey, label: "Curva C (o resto)" }]),
      svg(`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(b.title || "Curva ABC")}">${g}</svg>`));
  };

  /* matriz 2x2 (ex.: impacto x esforço); x cresce para a direita, y para cima */
  CH.matrix = (b) => {
    const W = 340, H = 312, pl = 30, pr = 8, pt = 8, pb = 32, cw = W - pl - pr, ch = H - pt - pb;
    const X = (v) => pl + (v / 10) * cw, Y = (v) => pt + ch - (v / 10) * ch;
    const q = b.quad || ["", "", "", ""];
    let g = "";
    [[0, 0], [1, 0], [0, 1], [1, 1]].forEach(([cx, cy], i) => {
      g += `<rect class="vz-quad q${i}" x="${(pl + cx * cw / 2).toFixed(1)}" y="${(pt + cy * ch / 2).toFixed(1)}" width="${(cw / 2).toFixed(1)}" height="${(ch / 2).toFixed(1)}"/>`;
      g += txt("vz-q", pl + cx * cw / 2 + cw / 4, pt + cy * ch / 2 + 16, q[i] || "", "middle");
    });
    g += `<line class="vz-axis" x1="${pl}" x2="${pl}" y1="${pt}" y2="${pt + ch}"/><line class="vz-axis" x1="${pl}" x2="${W - pr}" y1="${pt + ch}" y2="${pt + ch}"/>`;
    g += txt("vz-t vz-sm", pl + cw / 2, H - 8, (b.x || "") + " →", "middle");
    g += `<text class="vz-t vz-sm" transform="translate(11 ${pt + ch / 2}) rotate(-90)" text-anchor="middle">${esc(b.y || "")} →</text>`;
    b.points.forEach((p, i) => {
      g += `<circle cx="${X(p.x).toFixed(1)}" cy="${Y(p.y).toFixed(1)}" r="12" fill="${colorOf(p.tone, i)}" stroke="rgba(20,10,40,.7)" stroke-width="2"/>` + txt("vz-pn", X(p.x), Y(p.y) + 4.5, String(i + 1), "middle");
    });
    return h("div", null, svg(`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(b.title || "Matriz")}">${g}</svg>`),
      h("ol", { class: "viz-keys" }, b.points.map((p, i) => h("li", null, h("i", { style: `background:${colorOf(p.tone, i)}`, text: String(i + 1) }), h("span", { text: p.label })))));
  };

  /* termômetro: faixas com marcador */
  CH.meter = (b) => {
    const W = 340, H = 112, pl = 8, pr = 8, zs = b.zones, lo = zs[0].from, hi = zs[zs.length - 1].to, cw = W - pl - pr;
    const X = (v) => pl + ((v - lo) / (hi - lo || 1)) * cw;
    let g = "";
    zs.forEach((z) => {
      const x0 = X(z.from), w = X(z.to) - x0;
      g += `<rect x="${(x0 + 1).toFixed(1)}" y="46" width="${Math.max(2, w - 2).toFixed(1)}" height="22" rx="6" fill="${colorOf(z.tone, 0)}"/>`;
      wrap(z.label, Math.max(5, Math.floor(w / 5.6))).forEach((ln, j) => { g += txt("vz-t vz-sm", x0 + w / 2, 86 + j * 12, ln, "middle"); });
    });
    const mx = Math.min(Math.max(X(b.value), pl + 8), W - pr - 8);
    g += `<polygon class="vz-mark" points="${(mx - 8).toFixed(1)},34 ${(mx + 8).toFixed(1)},34 ${mx.toFixed(1)},46"/>`;
    g += txt("vz-v", Math.min(Math.max(mx, 46), W - 46), 26, b.valueLabel || fv(b.value, b.unit), "middle");
    return svg(`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(b.title || "Termômetro")}">${g}</svg>`);
  };

  R.chart = (b) => {
    const fn = CH[b.kind];
    return fn ? fig(b, fn(b), "chart viz-" + b.kind) : h("div", { class: "callout atencao" }, "Gráfico desconhecido: " + esc(b.kind));
  };

  /* ───── diagramas em HTML ───── */
  R.flow = (b) => fig(b, h("div", { class: "viz-flow-wrap" },
    h("ol", { class: "viz-flow" }, b.items.map((it) => h("li", null,
      h("span", { class: "fl-ico", "aria-hidden": "true", text: it.icon || "•" }),
      h("div", null, h("b", { text: it.title }), it.text ? h("span", { html: it.text }) : null)))),
    b.loop ? h("div", { class: "fl-loop" }, "↺ " + (typeof b.loop === "string" ? b.loop : "e volta pro começo")) : null), "flow");

  R.table = (b) => fig(b, h("div", { class: "viz-table-wrap" }, h("table", { class: "viz-table" },
    h("thead", null, h("tr", null, b.head.map((c, i) => h("th", { class: b.hl === i ? "hl" : "", scope: "col", html: c })))),
    h("tbody", null, b.rows.map((r) => h("tr", null, r.map((c, i) => (i === 0 ? h("th", { scope: "row", html: c }) : h("td", { class: b.hl === i ? "hl" : "", html: c })))))))), "table");

  R.tree = (b) => fig(b, h("div", { class: "viz-tree" },
    h("div", { class: "tr-root", html: b.root }),
    h("div", { class: "tr-branches" }, b.branches.map((br) => h("div", { class: "tr-branch" },
      h("b", { text: br.label }), h("div", { class: "tr-items" }, br.items.map((t) => h("div", { class: "tr-item", html: t }))))))), "tree");

  R.timeline = (b) => fig(b, h("ol", { class: "viz-timeline" }, b.items.map((it) => h("li", { class: it.tone || "" },
    h("span", { class: "tl-when", text: it.when }),
    h("div", null, h("b", { text: it.label }), it.text ? h("span", { html: it.text }) : null)))), "timeline");

  R.stairs = (b) => fig(b, h("ol", { class: "viz-stairs" }, b.items.map((it, i) => h("li", { style: `--i:${i};--n:${b.items.length}` },
    h("span", { class: "st-tag", text: it.tag }),
    h("div", null, h("b", { text: it.title }), it.text ? h("span", { html: it.text }) : null)))), "stairs");

  /* ───── telas didáticas anotadas ───── */
  const ANNO = {
    anuncio: {
      names: ["Título", "Fotos", "Preço", "Frete e entrega", "Variações", "Ficha técnica"],
      draw: () => `
        <rect width="340" height="300" rx="14" fill="#f7f4fd"/>
        <rect x="14" y="14" width="132" height="132" rx="10" fill="#e5def6"/>
        <polygon points="46,118 80,60 112,118" fill="#9b7bff" opacity=".75"/><circle cx="108" cy="46" r="13" fill="#fdb927"/>
        <rect x="14" y="154" width="40" height="38" rx="7" fill="#d6cdee"/><rect x="60" y="154" width="40" height="38" rx="7" fill="#d6cdee"/><rect x="106" y="154" width="40" height="38" rx="7" fill="#d6cdee"/>
        <text x="160" y="30" class="an-d an-b">Fone Bluetooth sem fio,</text><text x="160" y="46" class="an-d an-b">cancelamento de ruído</text>
        <text x="160" y="66" class="an-d" fill="#f0a500">★★★★★</text><text x="208" y="66" class="an-d an-s">(128 avaliações)</text>
        <text x="160" y="96" class="an-d an-big">R$ 129,90</text>
        <rect x="160" y="108" width="132" height="22" rx="11" fill="#d9f6e8"/><text x="170" y="123" class="an-d an-s" fill="#157a52">Chegará amanhã</text>
        <text x="160" y="152" class="an-d an-s">Cor:</text>
        <circle cx="192" cy="148" r="9" fill="#1a0f2e"/><circle cx="216" cy="148" r="9" fill="#f5f1ff" stroke="#bbb"/><circle cx="240" cy="148" r="9" fill="#ff7a97"/>
        <rect x="160" y="166" width="132" height="28" rx="14" fill="#6a2fd0"/><text x="226" y="184" class="an-d" fill="#fff" text-anchor="middle">Comprar agora</text>
        <line x1="14" x2="326" y1="208" y2="208" stroke="#d8d0ee"/>
        <text x="14" y="226" class="an-d an-b">Ficha técnica</text>
        <rect x="14" y="234" width="312" height="22" fill="#ece7f8"/><text x="22" y="249" class="an-d an-s">Marca</text><text x="170" y="249" class="an-d">Exemplo</text>
        <text x="22" y="272" class="an-d an-s">Conexão</text><text x="170" y="272" class="an-d">Bluetooth 5.0</text>
        <rect x="14" y="278" width="312" height="14" fill="#ece7f8"/><text x="22" y="289" class="an-d an-s">Bateria</text><text x="170" y="289" class="an-d">24 horas</text>`,
      pins: [[330, 36], [22, 24], [330, 88], [330, 122], [330, 148], [330, 232]],
    },
    nfe: {
      names: ["Natureza e CFOP", "NCM", "Origem e CST/CSOSN", "Valores e impostos", "Destinatário e UF"],
      draw: () => `
        <rect width="340" height="300" rx="12" fill="#fbfaff"/>
        <rect x="10" y="10" width="320" height="38" rx="6" fill="#ece7f8"/><text x="20" y="26" class="an-d an-b">DANFE · NF-e (exemplo)</text><text x="20" y="41" class="an-d an-s">Documento auxiliar da nota fiscal</text>
        <rect x="10" y="56" width="214" height="40" rx="6" fill="#fff" stroke="#d8d0ee"/><text x="18" y="70" class="an-d an-s">Natureza da operação</text><text x="18" y="88" class="an-d an-b">Venda de mercadoria</text>
        <rect x="230" y="56" width="100" height="40" rx="6" fill="#fff" stroke="#d8d0ee"/><text x="238" y="70" class="an-d an-s">CFOP</text><text x="238" y="88" class="an-d an-b">5.102</text>
        <rect x="10" y="104" width="320" height="40" rx="6" fill="#fff" stroke="#d8d0ee"/><text x="18" y="118" class="an-d an-s">Destinatário</text><text x="18" y="136" class="an-d an-b">Cliente Exemplo · Campinas</text><text x="290" y="136" class="an-d an-b">SP</text>
        <rect x="10" y="154" width="320" height="86" rx="6" fill="#fff" stroke="#d8d0ee"/>
        <rect x="10" y="154" width="320" height="20" rx="6" fill="#ece7f8"/>
        <text x="18" y="168" class="an-d an-s">Descrição</text><text x="132" y="168" class="an-d an-s">NCM</text><text x="204" y="168" class="an-d an-s">CST</text><text x="272" y="168" class="an-d an-s">Valor</text>
        <text x="18" y="196" class="an-d">Fone BT</text><text x="132" y="196" class="an-d">8518.30.00</text><text x="206" y="196" class="an-d">0 / 102</text><text x="272" y="196" class="an-d">129,90</text>
        <line x1="18" x2="322" y1="210" y2="210" stroke="#ece7f8"/><text x="18" y="228" class="an-d an-s">1 item · valores de exemplo</text>
        <rect x="10" y="250" width="320" height="40" rx="6" fill="#fff" stroke="#d8d0ee"/><text x="18" y="264" class="an-d an-s">Base ICMS</text><text x="120" y="264" class="an-d an-s">Valor do ICMS</text><text x="236" y="264" class="an-d an-s">Total da nota</text>
        <text x="18" y="282" class="an-d an-b">0,00</text><text x="120" y="282" class="an-d an-b">0,00</text><text x="236" y="282" class="an-d an-b">R$ 129,90</text>`,
      pins: [[318, 62], [150, 214], [224, 214], [318, 256], [318, 110]],
    },
    ads: {
      names: ["Investimento", "Vendas com Ads", "ACOS", "ROAS", "ROAS objetivo"],
      draw: () => `
        <rect width="340" height="300" rx="12" fill="#f7f4fd"/>
        <text x="14" y="26" class="an-d an-big2">Campanhas</text>
        <rect x="10" y="40" width="320" height="26" rx="6" fill="#ece7f8"/>
        <text x="18" y="57" class="an-d an-s">Campanha</text><text x="120" y="57" class="an-d an-s">Invest.</text><text x="180" y="57" class="an-d an-s">Vendas</text><text x="244" y="57" class="an-d an-s">ACOS</text><text x="292" y="57" class="an-d an-s">ROAS</text>
        <text x="18" y="90" class="an-d">Fones</text><text x="120" y="90" class="an-d">R$ 120</text><text x="180" y="90" class="an-d">R$ 960</text><text x="244" y="90" class="an-d" fill="#157a52">12,5%</text><text x="292" y="90" class="an-d" fill="#157a52">8,0x</text>
        <line x1="14" x2="326" y1="100" y2="100" stroke="#e5def6"/>
        <text x="18" y="122" class="an-d">Cabos</text><text x="120" y="122" class="an-d">R$ 60</text><text x="180" y="122" class="an-d">R$ 300</text><text x="244" y="122" class="an-d" fill="#a67200">20%</text><text x="292" y="122" class="an-d" fill="#a67200">5,0x</text>
        <line x1="14" x2="326" y1="132" y2="132" stroke="#e5def6"/>
        <text x="18" y="154" class="an-d">Capas</text><text x="120" y="154" class="an-d">R$ 80</text><text x="180" y="154" class="an-d">R$ 240</text><text x="244" y="154" class="an-d" fill="#c0304f">33,3%</text><text x="292" y="154" class="an-d" fill="#c0304f">3,0x</text>
        <rect x="10" y="180" width="320" height="104" rx="10" fill="#fff" stroke="#d8d0ee"/>
        <text x="20" y="202" class="an-d an-b">Configuração da campanha</text>
        <text x="20" y="226" class="an-d an-s">ROAS objetivo</text>
        <rect x="20" y="236" width="200" height="8" rx="4" fill="#e5def6"/><rect x="20" y="236" width="104" height="8" rx="4" fill="#9b7bff"/><circle cx="124" cy="240" r="9" fill="#6a2fd0"/>
        <text x="236" y="245" class="an-d an-big2">5,0x</text>
        <text x="20" y="270" class="an-d an-s">O sistema ajusta o lance para chegar perto dessa meta.</text>`,
      pins: [[132, 30], [196, 30], [258, 30], [306, 30], [250, 222]],
    },
    planilha: {
      names: ["Custos", "Taxas e imposto", "Frete e embalagem", "Preço mínimo", "Margem"],
      draw: () => `
        <rect width="340" height="300" rx="10" fill="#fbfaff"/>
        <rect x="0" y="0" width="340" height="22" rx="10" fill="#e9e3f7"/><text x="12" y="15" class="an-d an-s">Precificação (exemplo) · preço de venda R$ 129,90</text>
        <g class="an-d"><text x="14" y="44">Custo do produto</text><text x="326" y="44" text-anchor="end">52,00</text>
        <line x1="10" x2="330" y1="52" y2="52" stroke="#e5def6"/>
        <text x="14" y="70">Comissão (14%)</text><text x="326" y="70" text-anchor="end">18,19</text>
        <line x1="10" x2="330" y1="78" y2="78" stroke="#e5def6"/>
        <text x="14" y="96">Imposto (6%)</text><text x="326" y="96" text-anchor="end">7,79</text>
        <line x1="10" x2="330" y1="104" y2="104" stroke="#e5def6"/>
        <text x="14" y="122">Ads (5%)</text><text x="326" y="122" text-anchor="end">6,50</text>
        <line x1="10" x2="330" y1="130" y2="130" stroke="#e5def6"/>
        <text x="14" y="148">Tarifa fixa</text><text x="326" y="148" text-anchor="end">6,00</text>
        <line x1="10" x2="330" y1="156" y2="156" stroke="#e5def6"/>
        <text x="14" y="174">Frete</text><text x="326" y="174" text-anchor="end">12,00</text>
        <line x1="10" x2="330" y1="182" y2="182" stroke="#e5def6"/>
        <text x="14" y="200">Embalagem</text><text x="326" y="200" text-anchor="end">2,00</text></g>
        <rect x="6" y="210" width="328" height="34" rx="8" fill="#ece7f8"/><text x="14" y="226" class="an-d an-b">Sobra por venda</text><text x="14" y="239" class="an-d an-s">Margem sobre o preço</text>
        <text x="326" y="226" class="an-d an-b" text-anchor="end" fill="#157a52">R$ 25,42</text><text x="326" y="239" class="an-d an-b" text-anchor="end" fill="#157a52">19,6%</text>
        <rect x="6" y="252" width="328" height="38" rx="8" fill="#fff4d6" stroke="#f0c14b"/><text x="14" y="268" class="an-d an-b">Preço mínimo para 10% de margem</text><text x="14" y="282" class="an-d an-s">(52 + 6 + 12 + 2) ÷ (1 − 0,14 − 0,06 − 0,05 − 0,10)</text><text x="326" y="276" class="an-d an-big2" text-anchor="end">R$ 110,77</text>`,
      pins: [[220, 40], [220, 66], [220, 170], [236, 258], [226, 222]],
    },
  };
  R.anno = (b) => {
    const A = ANNO[b.preset];
    if (!A) return h("div", { class: "callout atencao" }, "Tela desconhecida: " + esc(b.preset));
    const pins = A.pins.map((p, i) => `<g class="an-m" data-n="${i + 1}" transform="translate(${p[0]} ${p[1]})"><circle r="12"/><text y="4.5" text-anchor="middle">${i + 1}</text></g>`).join("");
    const root = h("div", { class: "viz-anno" });
    const art = svg(`<svg viewBox="0 0 340 300" role="img" aria-label="${esc(b.title || "Tela de exemplo")}">${A.draw()}${pins}</svg>`);
    const items = A.names.map((nm, i) => h("li", { "data-n": String(i + 1) },
      h("button", { type: "button", class: "an-key", onclick: () => pick(i + 1) },
        h("i", { text: String(i + 1) }), h("span", null, h("b", { text: nm }), (b.notes || [])[i] ? h("em", { html: b.notes[i] }) : null))));
    function pick(n) {
      const was = root.dataset.on === String(n);
      if (was) delete root.dataset.on; else root.dataset.on = String(n);
      items.forEach((li, i) => li.classList.toggle("on", !was && i + 1 === n));
      art.querySelectorAll(".an-m").forEach((m) => m.classList.toggle("on", !was && +m.dataset.n === n));
    }
    art.querySelectorAll(".an-m").forEach((m) => m.addEventListener("click", () => pick(+m.dataset.n)));
    root.append(art, h("ol", { class: "an-keys" }, items));
    return fig(b, root, "anno");
  };

  /* ───── simuladores com sliders ───── */
  const rsn = (v) => fv(v, "R$");
  const LAB = {
    preco: {
      inputs: [
        { id: "preco", label: "Preço de venda", unit: "R$", min: 20, max: 600, step: 1, val: 129, main: 1 },
        { id: "custo", label: "Custo do produto", unit: "R$", min: 0, max: 400, step: 1, val: 52, main: 1 },
        { id: "com", label: "Comissão do marketplace", unit: "%", min: 0, max: 30, step: 0.5, val: 14, main: 1 },
        { id: "alvo", label: "Margem alvo", unit: "%", min: 0, max: 40, step: 0.5, val: 10, main: 1 },
        { id: "tarifa", label: "Tarifa fixa por venda", unit: "R$", min: 0, max: 15, step: 0.5, val: 6 },
        { id: "frete", label: "Frete pago pelo vendedor", unit: "R$", min: 0, max: 80, step: 1, val: 12 },
        { id: "imp", label: "Imposto", unit: "%", min: 0, max: 30, step: 0.5, val: 6 },
        { id: "ads", label: "Ads (% do preço)", unit: "%", min: 0, max: 25, step: 0.5, val: 5 },
        { id: "emb", label: "Embalagem", unit: "R$", min: 0, max: 20, step: 0.5, val: 2 },
      ],
      run(v) {
        const com = v.preco * v.com / 100, imp = v.preco * v.imp / 100, ads = v.preco * v.ads / 100;
        const fixos = v.tarifa + v.frete + v.emb;
        const sobra = v.preco - v.custo - com - imp - ads - fixos, margem = (sobra / v.preco) * 100;
        const den = 1 - (v.com + v.imp + v.ads + v.alvo) / 100;
        const pmin = den > 0.02 ? (v.custo + fixos) / den : null;
        const verdict = margem < 0 ? ["bad", "Prejuízo: cada venda tira dinheiro do bolso."]
          : margem < v.alvo ? ["warn", `Abaixo da meta de ${nf(v.alvo, 1)}%. Veja o preço mínimo.`] : ["good", "Dentro da meta: o preço protege a margem."];
        return {
          tiles: [["Sobra por venda", rsn(sobra), sobra < 0 ? "bad" : "good"], ["Margem", fv(margem, "%"), margem < 0 ? "bad" : margem < v.alvo ? "warn" : "good"], ["Preço mínimo p/ meta", pmin == null ? "impossível" : rsn(pmin), ""]],
          chart: { kind: "waterfall", unit: "R$", data: [{ label: "Preço", value: v.preco, type: "start" }, { label: "Produto", value: -v.custo }, { label: "Comissão", value: -com }, { label: "Frete e taxas", value: -fixos }, { label: "Imposto", value: -imp }, { label: "Ads", value: -ads }, { label: "Sobra", type: "total" }] },
          verdict,
        };
      },
    },
    roas: {
      inputs: [
        { id: "margem", label: "Margem de contribuição (antes do Ads)", unit: "%", min: 3, max: 60, step: 0.5, val: 20, main: 1 },
        { id: "roas", label: "ROAS atual da campanha", unit: "x", min: 1, max: 20, step: 0.1, val: 4, main: 1 },
      ],
      run(v) {
        const eq = 100 / v.margem, acos = 100 / v.roas, res = v.roas * 1000 * v.margem / 100 - 1000;
        const verdict = v.roas > eq * 1.05 ? ["good", `ROAS acima do equilíbrio: sobra ${rsn(res)} a cada R$ 1.000 de Ads.`]
          : v.roas >= eq * 0.95 ? ["warn", "Empate: o Ads só paga a si mesmo."] : ["bad", `ROAS abaixo do equilíbrio: perde ${rsn(-res)} a cada R$ 1.000 de Ads.`];
        return {
          tiles: [["ROAS de equilíbrio", fv(eq, "x"), ""], ["ACOS da campanha", fv(acos, "%"), ""], ["Resultado por R$ 1.000", rsn(res), res < 0 ? "bad" : "good"]],
          chart: { kind: "bar", unit: "x", data: [{ label: "ROAS atual", value: +v.roas.toFixed(2), tone: v.roas >= eq ? "mint" : "pink" }, { label: "Equilíbrio", value: +eq.toFixed(2), tone: "gold" }] },
          verdict,
        };
      },
    },
    promo: {
      inputs: [
        { id: "preco", label: "Preço atual", unit: "R$", min: 20, max: 500, step: 1, val: 129, main: 1 },
        { id: "custo", label: "Custo do produto", unit: "R$", min: 0, max: 300, step: 1, val: 52, main: 1 },
        { id: "taxas", label: "Comissão, imposto e frete (% do preço)", unit: "%", min: 0, max: 60, step: 0.5, val: 30, main: 1 },
        { id: "desc", label: "Desconto da promoção", unit: "%", min: 0, max: 50, step: 1, val: 15, main: 1 },
        { id: "vol", label: "Aumento nas vendas esperado", unit: "%", min: 0, max: 300, step: 5, val: 20, main: 1 },
      ],
      run(v) {
        const V0 = 100, m0 = v.preco * (1 - v.taxas / 100) - v.custo, p1 = v.preco * (1 - v.desc / 100), m1 = p1 * (1 - v.taxas / 100) - v.custo;
        const L0 = m0 * V0, L1 = m1 * V0 * (1 + v.vol / 100), need = m1 > 0 && m0 > 0 ? (m0 / m1 - 1) * 100 : null;
        const verdict = m1 <= 0 ? ["bad", "Com esse desconto a margem por unidade zera: quanto mais vende, mais perde."]
          : L1 >= L0 ? ["good", "Vale: o lucro total depois da promoção não é menor que antes."] : ["bad", `Não vale: precisa vender ${nf(need, 0)}% a mais só para empatar.`];
        return {
          tiles: [["Margem por unidade", `${rsn(m0)} → ${rsn(m1)}`, m1 < m0 ? "warn" : ""], ["Lucro (100 un. antes)", `${rsn(L0)} → ${rsn(L1)}`, L1 >= L0 ? "good" : "bad"], ["Vendas p/ empatar", need == null ? "não empata" : "+" + nf(need, 0) + "%", ""]],
          chart: { kind: "bar", unit: "R$", data: [{ label: "Lucro antes", value: +L0.toFixed(0), tone: "violet" }, { label: "Lucro depois", value: +L1.toFixed(0), tone: L1 >= L0 ? "mint" : "pink" }] },
          verdict,
        };
      },
    },
    full: {
      inputs: [
        { id: "vendas", label: "Vendas do SKU por mês", unit: "un", min: 5, max: 300, step: 5, val: 40, main: 1 },
        { id: "margem", label: "Margem por unidade hoje", unit: "R$", min: 0, max: 100, step: 1, val: 25, main: 1 },
        { id: "armaz", label: "Armazenagem por unidade ao mês", unit: "R$", min: 0, max: 10, step: 0.1, val: 1.5, main: 1 },
        { id: "dias", label: "Dias médios de estoque parado", unit: "dias", min: 5, max: 120, step: 1, val: 45, main: 1 },
        { id: "frete", label: "Economia de frete por unidade", unit: "R$", min: 0, max: 30, step: 0.5, val: 6 },
        { id: "conv", label: "Ganho de vendas com o Full", unit: "%", min: 0, max: 60, step: 1, val: 15 },
      ],
      run(v) {
        const custo = v.armaz * v.dias / 30, ben = v.frete + v.margem * v.conv / 100, saldo = ben - custo;
        const verdict = saldo > 0.01 * Math.max(ben, 1) ? ["good", "Vale testar: o benefício por unidade passa o custo de armazenar."] : saldo > -0.01 * Math.max(ben, 1) ? ["warn", "Empate: o Full só troca um custo por outro."] : ["bad", "Não vale: guardar esse SKU custa mais do que ele devolve."];
        return {
          tiles: [["Custo de armazenar", rsn(custo) + "/un", ""], ["Benefício", rsn(ben) + "/un", ""], ["Saldo no mês", rsn(saldo * v.vendas), saldo < 0 ? "bad" : "good"]],
          chart: { kind: "bar", unit: "R$", data: [{ label: "Custo de armazenar", value: +custo.toFixed(2), tone: "pink" }, { label: "Benefício", value: +ben.toFixed(2), tone: "mint" }] },
          verdict,
        };
      },
    },
    regime: {
      inputs: [
        { id: "custo", label: "Custo do produto", unit: "R$", min: 5, max: 400, step: 1, val: 60, main: 1 },
        { id: "com", label: "Comissão", unit: "%", min: 0, max: 30, step: 0.5, val: 14, main: 1 },
        { id: "frete", label: "Frete e tarifas", unit: "R$", min: 0, max: 60, step: 1, val: 12, main: 1 },
        { id: "alvo", label: "Margem alvo", unit: "%", min: 0, max: 40, step: 0.5, val: 10, main: 1 },
        { id: "aliqA", label: "Imposto do regime A (exemplo)", unit: "%", min: 0, max: 30, step: 0.5, val: 6, main: 1 },
        { id: "aliqB", label: "Imposto do regime B (exemplo)", unit: "%", min: 0, max: 30, step: 0.5, val: 12, main: 1 },
      ],
      run(v) {
        const f = (a) => { const den = 1 - (v.com + a + v.alvo) / 100; return den > 0.02 ? (v.custo + v.frete) / den : null; };
        const A = f(v.aliqA), B = f(v.aliqB);
        const verdict = A == null || B == null ? ["bad", "Soma de percentuais alta demais: não existe preço que feche."]
          : Math.abs(A - B) < 0.5 ? ["warn", "Quase empate: a escolha não muda o preço."] : ["good", `Preço mínimo ${rsn(Math.abs(A - B))} menor no regime ${A < B ? "A" : "B"}. Quem decide o regime é o contador.`];
        return {
          tiles: [["Preço mínimo A", A == null ? "—" : rsn(A), ""], ["Preço mínimo B", B == null ? "—" : rsn(B), ""], ["Diferença", A == null || B == null ? "—" : rsn(Math.abs(A - B)), ""]],
          chart: A == null || B == null ? null : { kind: "bar", unit: "R$", data: [{ label: "Regime A", value: +A.toFixed(2), tone: A <= B ? "mint" : "violet" }, { label: "Regime B", value: +B.toFixed(2), tone: B < A ? "mint" : "violet" }] },
          verdict,
        };
      },
    },
    cobertura: {
      inputs: [
        { id: "venda", label: "Vendas por dia", unit: "un", min: 1, max: 60, step: 1, val: 8, main: 1 },
        { id: "lead", label: "Prazo do fornecedor (lead time)", unit: "dias", min: 5, max: 90, step: 1, val: 25, main: 1 },
        { id: "seg", label: "Estoque de segurança", unit: "dias", min: 0, max: 45, step: 1, val: 10, main: 1 },
        { id: "estoque", label: "Estoque atual", unit: "un", min: 0, max: 2000, step: 10, val: 300, main: 1 },
      ],
      run(v) {
        const pp = v.venda * (v.lead + v.seg), cob = v.estoque / v.venda, falta = (v.estoque - pp) / v.venda;
        const H = Math.max(30, Math.min(90, Math.ceil(Math.max(cob * 1.15, v.lead + v.seg + 10) / 6) * 6)), st = H / 6;
        const xs = [], est = [], ppv = [];
        for (let i = 0; i <= 6; i++) { const d = Math.round(st * i); xs.push(String(d)); est.push(Math.max(0, Math.round(v.estoque - v.venda * d))); ppv.push(Math.round(pp)); }
        const verdict = v.estoque <= pp ? ["bad", "Já passou do ponto de pedido: peça agora, o estoque acaba antes da chegada."]
          : falta < 7 ? ["warn", `Falta pouco: faça o pedido em ${nf(falta, 0)} dias.`] : ["good", `Confortável: o ponto de pedido chega em ${nf(falta, 0)} dias.`];
        return {
          tiles: [["Ponto de pedido", nf(pp, 0) + " un", ""], ["Cobertura", nf(cob, 0) + " dias", cob < v.lead ? "bad" : ""], ["Pedir em", v.estoque <= pp ? "agora" : nf(falta, 0) + " dias", v.estoque <= pp ? "bad" : ""]],
          chart: { kind: "line", unit: "un", x: xs, series: [{ name: "Estoque (un) por dia", values: est, tone: "gold" }, { name: "Ponto de pedido", values: ppv, tone: "pink" }] },
          verdict,
        };
      },
    },
    pe: {
      inputs: [
        { id: "fixos", label: "Custos fixos por mês", unit: "R$", min: 500, max: 40000, step: 100, val: 8000, main: 1 },
        { id: "preco", label: "Preço médio de venda", unit: "R$", min: 10, max: 500, step: 1, val: 90, main: 1 },
        { id: "var", label: "Custos variáveis (% do preço)", unit: "%", min: 10, max: 95, step: 1, val: 62, main: 1 },
      ],
      run(v) {
        const mc = v.preco * (1 - v.var / 100), eq = mc > 0 ? v.fixos / mc : null;
        if (eq == null) return { tiles: [["Margem de contribuição", rsn(mc), "bad"]], chart: null, verdict: ["bad", "Sem margem de contribuição não existe ponto de equilíbrio."] };
        const top = Math.ceil((eq * 2) / 6 / 10) * 10 || 10, xs = [], rec = [], cus = [];
        for (let i = 0; i <= 6; i++) { const u = top * i; xs.push(String(u)); rec.push(Math.round(u * v.preco)); cus.push(Math.round(v.fixos + u * v.preco * v.var / 100)); }
        return {
          tiles: [["Margem de contribuição", `${rsn(mc)} (${nf(100 - v.var, 0)}%)`, ""], ["Equilíbrio", nf(Math.ceil(eq), 0) + " un/mês", ""], ["Faturamento no equilíbrio", rsn(eq * v.preco), ""]],
          chart: { kind: "line", unit: "R$", x: xs, series: [{ name: "Receita (R$) por unidades vendidas", values: rec, tone: "mint" }, { name: "Custo total", values: cus, tone: "pink" }] },
          verdict: ["good", `Acima de ${nf(Math.ceil(eq), 0)} unidades por mês a receita passa o custo total.`],
        };
      },
    },
  };
  M.LAB_PRESETS = Object.keys(LAB);

  R.lab = (b) => {
    const P = LAB[b.preset];
    if (!P) return h("div", { class: "callout atencao" }, "Simulador desconhecido: " + esc(b.preset));
    const vals = {};
    P.inputs.forEach((i) => { vals[i.id] = b.defaults && b.defaults[i.id] != null ? +b.defaults[i.id] : i.val; });
    const tiles = h("div", { class: "lab-tiles" }), chartBox = h("div", { class: "lab-chart" }), verdict = h("div", { class: "lab-verdict", "aria-live": "polite" });
    const outs = {};
    const unitTxt = (i, v) => (i.unit === "R$" ? "R$ " + nf(v, i.step < 1 ? 1 : 0) : i.unit === "%" ? nf(v, i.step < 1 ? 1 : 0) + "%" : i.unit === "x" ? nf(v, 1) + "x" : nf(v, i.step < 1 ? 1 : 0) + " " + i.unit);
    function row(i) {
      const out = h("output", { class: "lab-val", text: unitTxt(i, vals[i.id]) });
      outs[i.id] = out;
      const input = h("input", { type: "range", min: String(i.min), max: String(i.max), step: String(i.step), value: String(vals[i.id]), "aria-label": i.label });
      input.addEventListener("input", () => { vals[i.id] = +input.value; out.textContent = unitTxt(i, vals[i.id]); paint(); });
      return h("label", { class: "lab-row" }, h("span", { class: "lab-l" }, h("span", { text: i.label }), out), input);
    }
    const main = P.inputs.filter((i) => i.main), more = P.inputs.filter((i) => !i.main);
    function paint() {
      const r = P.run(vals);
      tiles.replaceChildren(...r.tiles.map((t) => h("div", { class: "lab-tile " + (t[2] || "") }, h("span", { text: t[0] }), h("b", { text: t[1] }))));
      chartBox.replaceChildren(r.chart ? CH[r.chart.kind](r.chart) : h("p", { class: "muted", text: "Sem gráfico para esses valores." }));
      verdict.className = "lab-verdict " + r.verdict[0];
      verdict.textContent = r.verdict[1];
    }
    const node = h("div", { class: "viz viz-lab", "data-nonav": "" },
      h("span", { class: "tag", text: "Simulador" }),
      b.title ? h("div", { class: "viz-title", text: b.title }) : null,
      b.intro ? h("p", { class: "lab-intro", html: b.intro }) : null,
      tiles, chartBox, verdict,
      h("div", { class: "lab-ctrls" }, main.map(row), more.length ? h("details", { class: "lab-more" }, h("summary", { text: "Mais ajustes" }), more.map(row)) : null),
      b.note ? h("p", { class: "viz-cap", html: b.note }) : null);
    paint();
    return node;
  };
})();

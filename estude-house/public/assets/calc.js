/* Simulações numéricas e de decisão (bloco `sim`): cada rodada sorteia números novos.
   Uso no content.js: { t: "sim", kind: "ads", title: "...", intro: "...", rounds: 3 } */
(function () {
  const { h } = M;
  const ri = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const fmt = (n, d = 0) => Number(n).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const rs = (n) => "R$ " + fmt(n, 2);
  const pct = (n) => fmt(n, n % 1 ? 1 : 0) + "%";
  /* embaralha as alternativas de um cenário de escolha e devolve o novo índice da certa */
  const shuf = (opts, correct) => {
    const idx = opts.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
    return { options: idx.map((i) => opts[i]), answer: idx.indexOf(correct) };
  };
  const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

  /* Cada gerador devolve { q, type: "num" | "choice", ... }.
     num: answer, tol, unit ("%", "R$", ""), explain.  choice: options, answer (índice), explain. */
  const GEN = {
    /* Ads não entra na conta da PriceBot */
    ads() {
      const t = ri(0, 2);
      const A = ri(3, 8);
      if (t === 0) {
        const R = pick([8, 10, 12, 15]);
        return {
          q: `O seller quer ficar com <b>${R}%</b> de margem <b>real</b>, depois de pagar o Ads, e investe cerca de <b>${A}%</b> do preço em Ads. A PriceBot não enxerga o Ads. Qual <b>margem mínima</b> o assessor deve cadastrar?`,
          type: "num", answer: R + A, tol: 0.5, unit: "%",
          explain: `Margem real desejada (${R}%) + Ads (${A} pontos) = mínima de <b>${R + A}%</b>. É a regra de subir a mínima pelo tanto que o Ads consome.`,
        };
      }
      if (t === 1) {
        const m = pick([10, 12, 15, 20]);
        return {
          q: `A mínima cadastrada na PriceBot é <b>${m}%</b> e o seller investe <b>${A}%</b> do preço em Ads. No pior caso de uma promoção, qual é a <b>margem real</b> que sobra depois do Ads?`,
          type: "num", answer: m - A, tol: 0.5, unit: "%",
          explain: `A PriceBot garante ${m}% antes do Ads. Tirando os ${A} pontos de publicidade, sobram <b>${m - A}%</b>. Por isso a mínima precisa de folga.`,
        };
      }
      const P = pick([80, 120, 150, 200, 250, 320]);
      return {
        q: `Um anúncio vende a <b>${rs(P)}</b> e o seller investe <b>${A}%</b> do preço em Ads. Quantos reais por venda vão para o Ads?`,
        type: "num", answer: +(P * A / 100).toFixed(2), tol: 0.02, unit: "R$",
        explain: `${rs(P)} × ${A}% = <b>${rs(P * A / 100)}</b> por venda. É esse valor que a margem da PriceBot não mostra e que precisa de folga na mínima.`,
      };
    },

    /* desconto efetivo e rebate */
    rebate() {
      const t = ri(0, 2);
      if (t === 0) {
        const D = pick([10, 12, 15, 18, 20, 25]);
        const r = ri(2, Math.min(9, D - 2));
        return {
          q: `A campanha anuncia <b>${D}%</b> de desconto e o Mercado Livre devolve <b>${r}%</b> de rebate. Qual é o <b>desconto efetivo</b> que o seller arca?`,
          type: "num", answer: D - r, tol: 0.5, unit: "%",
          explain: `Desconto anunciado (${D}%) − rebate (${r}%) = <b>${D - r}%</b> de custo real para o seller.`,
        };
      }
      if (t === 1) {
        const P = pick([60, 90, 120, 180, 240, 300]);
        const r = ri(3, 9);
        return {
          q: `Uma venda de <b>${rs(P)}</b> acontece numa campanha com <b>${r}%</b> de rebate. Quantos reais o Mercado Livre devolve ao seller nessa venda?`,
          type: "num", answer: +(P * r / 100).toFixed(2), tol: 0.02, unit: "R$",
          explain: `${rs(P)} × ${r}% = <b>${rs(P * r / 100)}</b>, que aparece como redução da comissão por venda.`,
        };
      }
      const D1 = ri(14, 24), r1 = ri(4, 9);
      const eff1 = D1 - r1;
      const tie = Math.random() < 0.25;
      const D2 = tie ? eff1 : Math.max(8, eff1 + pick([-3, -2, 2, 3]));
      const diff = eff1 - D2;
      return {
        q: `Campanha <b>X</b>: ${D1}% de desconto com ${r1}% de rebate. Campanha <b>Y</b>: ${D2}% de desconto, sem rebate. Qual custa <b>menos</b> ao seller?`,
        type: "choice", options: ["A campanha X", "A campanha Y", "As duas custam o mesmo"],
        answer: diff === 0 ? 2 : diff < 0 ? 0 : 1,
        explain: `X custa ${D1}% − ${r1}% = <b>${eff1}%</b> de desconto efetivo; Y custa <b>${D2}%</b>. ${diff === 0 ? "Empatam no custo." : diff < 0 ? "X custa menos, e por ter rebate ainda é priorizada pela PriceBot." : "Y custa menos, apesar de não ter rebate."}`,
      };
    },

    /* a regra de decisão: faixa de margem, rebate e PMA */
    campanha() {
      const m = pick([8, 10, 12, 15]);
      const o = m + 10;
      const T = ri(1, 4);
      const price = pick([50, 60, 80, 100, 120, 150]);
      const camp = (x, r, p) => ({ x, r, p: p ?? price });
      const swap = Math.random() < 0.5;
      const nm = (orig) => (swap ? (orig === "A" ? "B" : "A") : orig); /* nome mostrado da campanha "original" A/B */
      let A, B, ans, pma = null, why;
      if (T === 1) {
        A = camp(ri(m + 1, o - 1), pick([0, 0, 3, 5]));
        B = camp(ri(Math.max(1, m - 5), m - 1), pick([0, 4]));
        ans = 0;
        why = `A campanha ${nm("A")} deixa ${A.x}%, dentro da faixa de ${m}% a ${o}%. A campanha ${nm("B")} deixaria ${B.x}%, abaixo da mínima de ${m}%, e fica de fora.`;
      } else if (T === 2) {
        A = camp(ri(m + 1, o - 1), 0);
        B = camp(ri(m + 1, o - 1), pick([3, 4, 5, 6]));
        ans = 1;
        why = `As duas cabem na faixa (${m}% a ${o}%). Entre campanhas elegíveis, a PriceBot prioriza a que tem rebate: a ${nm("B")}.`;
      } else if (T === 3) {
        A = camp(ri(Math.max(1, m - 6), m - 1), pick([0, 5]));
        B = camp(ri(Math.max(1, m - 6), m - 1), pick([0, 5]));
        ans = 2;
        why = `A campanha ${nm("A")} deixaria ${A.x}% e a ${nm("B")} deixaria ${B.x}%, as duas abaixo da mínima de ${m}%. Não há adesão.`;
      } else {
        pma = pick([60, 80, 100, 120, 150]);
        A = camp(ri(m + 1, o - 1), pick([4, 5, 6]), +(pma - 0.21).toFixed(2));
        B = camp(ri(m + 1, o - 1), 0, +(pma + pick([1.5, 3, 5])).toFixed(2));
        ans = 1;
        why = `As duas cabem na faixa, mas o preço da ${nm("A")} (${rs(A.p)}) fica abaixo do PMA de ${rs(pma)}. O PMA ativado prevalece sobre a margem e o rebate: sobra a ${nm("B")}.`;
      }
      if (swap) { [A, B] = [B, A]; if (ans < 2) ans = 1 - ans; }
      const line = (name, c) => `<li><b>Campanha ${name}:</b> margem resultante <b>${c.x}%</b>, ${c.r ? `rebate de <b>${c.r}%</b>` : "sem rebate"}${pma ? `, preço final ${rs(c.p)}` : ""}.</li>`;
      return {
        q: `Anúncio com margem mínima <b>${m}%</b> e objetiva <b>${o}%</b>${pma ? `, com o <b>PMA ativado em ${rs(pma)}</b>` : ""}. Duas campanhas estão elegíveis:<ul class="sim-list">${line("A", A)}${line("B", B)}</ul>O que a PriceBot faz?`,
        type: "choice", options: ["Adere à campanha A", "Adere à campanha B", "Não adere a nenhuma das duas"], answer: ans, explain: why,
      };
    },

    /* margem real de um anúncio (calculadora) */
    margem() {
      const P = pick([80, 100, 120, 150, 200, 250]);
      const c = ri(40, 62), tx = ri(18, 28), al = ri(4, 10);
      const custo = P * c / 100;
      const m = 100 - c - tx - al;
      return {
        q: `Anúncio vendido a <b>${rs(P)}</b>. Custo do produto: <b>${rs(custo)}</b>. Comissão e frete somam <b>${tx}%</b> do preço e a alíquota de imposto é <b>${al}%</b>. Qual é a <b>margem</b> do anúncio, em % do preço?`,
        type: "num", answer: m, tol: 0.6, unit: "%",
        explain: `Custo ${c}% + taxas ${tx}% + imposto ${al}% = ${c + tx + al}% do preço. Sobra <b>${m}%</b> (${rs(P * m / 100)} por venda).`,
      };
    },

    /* edição em massa por páginas de 100 itens */
    paginas() {
      const N = pick([1200, 1800, 2500, 3000, 4000, 5200, 6800]);
      return {
        q: `O seller pede margem mínima maior em toda a carteira de <b>${fmt(N)} anúncios</b>. A edição em massa do painel atua por página de <b>100 itens</b>. Quantas rodadas de edição, no mínimo?`,
        type: "num", answer: Math.ceil(N / 100), tol: 0, unit: "rodadas",
        explain: `${fmt(N)} ÷ 100 = <b>${Math.ceil(N / 100)}</b> páginas. Ainda é bem melhor que editar um por um, mas pesa ao prometer prazo.`,
      };
    },

    /* percepção de valor: rebate e faturamento na Visão Geral de Pedidos */
    valor() {
      const F = pick([40000, 60000, 80000, 120000, 150000]);
      const p = pick([1.5, 2, 2.5, 3, 4, 5]);
      const R = +(F * p / 100).toFixed(2);
      if (Math.random() < 0.5) {
        return {
          q: `Na Visão Geral de Pedidos, nos últimos 30 dias, a conta faturou <b>${rs(F)}</b> e recebeu <b>${rs(R)}</b> de rebate. Qual percentual de <b>Rebate/Faturamento</b> você coloca na mensagem da semana ao seller?`,
          type: "num", answer: p, tol: 0.06, unit: "%",
          explain: `${rs(R)} ÷ ${rs(F)} = <b>${fmt(p, 1)}%</b>. Mostre o que já aconteceu na conta e explique o mecanismo, mas nunca prometa um rebate para o futuro.`,
        };
      }
      return {
        q: `Na Visão Geral de Pedidos, nos últimos 30 dias, a conta faturou <b>${rs(F)}</b> e o indicador <b>Rebate/Faturamento</b> marca <b>${fmt(p, 1)}%</b>. Quantos reais de rebate a conta recebeu?`,
        type: "num", answer: R, tol: 0.02, unit: "R$",
        explain: `${rs(F)} × ${fmt(p, 1)}% = <b>${rs(R)}</b>. É um resultado já registrado, bom para mostrar valor, mas nunca uma promessa de rebate futuro.`,
      };
    },

    /* diagnóstico: por que não entrou? */
    diag() {
      const causes = [
        "A precificação automática está desligada nesse anúncio",
        "A campanha já terminou e não está mais disponível",
        "A margem resultante ficaria abaixo da mínima do anúncio",
        "O PMA ativado bloqueia, pois o preço ficaria abaixo dele",
        "Outro MLB do mesmo SKU já ganha o catálogo",
      ];
      const k = ri(0, 4);
      const m = pick([10, 12, 15]);
      const pma = pick([80, 100, 120]);
      const facts = [
        `Chave de precificação automática: <b>desligada</b>. Campanha vigente que daria ${m + 6}% de margem (mínima ${m}%). Sem PMA.`,
        `Precificação <b>ligada</b>. A campanha que o seller queria <b>terminou ontem</b>; a margem dela seria ${m + 5}% (mínima ${m}%). Sem PMA.`,
        `Precificação ligada, campanha vigente. Margem que a campanha deixaria: <b>${m - ri(2, 5)}%</b>. Mínima do anúncio: <b>${m}%</b>. Sem PMA.`,
        `Precificação ligada, campanha vigente, margem resultante de ${m + 7}% (mínima ${m}%). <b>PMA ativo em ${rs(pma)}</b>; o preço na campanha seria <b>${rs(pma - 0.4)}</b>.`,
        `O anúncio B perde o catálogo mesmo com margem para ganhar de ${m + 5}%. O <b>MLB A</b>, do mesmo SKU e no mesmo catálogo, está <b>ganhando</b>. Precificação ligada, sem PMA.`,
      ];
      const why = [
        "Com a chave desligada o bot não gerencia o anúncio: nem entra, nem sai de promoção.",
        "A data da campanha é um dos primeiros filtros: depois de encerrada ela some das elegíveis.",
        "A mínima é a trava de segurança: abaixo dela o bot não adere, por mais atraente que seja a campanha.",
        "O PMA ativado sempre prioriza o preço: mesmo com margem boa, preço abaixo do mínimo anunciado não entra.",
        "Disputar contra o próprio anúncio só reduz margem; o bot mantém o MLB B no preço atual.",
      ];
      return {
        q: `Um anúncio não entra em uma campanha. O que o painel mostra: ${facts[k]}<br>Qual é o motivo mais provável?`,
        type: "choice", options: causes, answer: k, explain: why[k],
      };
    },

    /* Reforma Tributária: base de cálculo de IBS e CBS */
    base() {
      const t = ri(0, 2);
      const P = pick([400, 500, 800, 1000, 1200]);
      const F = pick([40, 60, 80, 90]);
      if (t === 0) {
        const S = pick([20, 30, 50]), J = pick([20, 40, 60]);
        return {
          q: `Uma venda tem produto de <b>${rs(P)}</b>, frete cobrado do comprador de <b>${rs(F)}</b>, seguro de <b>${rs(S)}</b> e juros por atraso de <b>${rs(J)}</b>. Qual é a <b>base de cálculo</b> do IBS e da CBS?`,
          type: "num", answer: P + F + S + J, tol: 0.02, unit: "R$",
          explain: `Tudo que é cobrado do comprador na operação entra na base: ${rs(P)} + ${rs(F)} + ${rs(S)} + ${rs(J)} = <b>${rs(P + F + S + J)}</b>.`,
        };
      }
      if (t === 1) {
        const D = pick([20, 30, 50, 60]), C = pick([40, 50, 100]);
        return {
          q: `Produto de <b>${rs(P)}</b> e frete cobrado de <b>${rs(F)}</b>. Na nota há um <b>desconto incondicional</b> de <b>${rs(D)}</b>, e o boleto dá mais <b>${rs(C)}</b> de desconto se for pago até o vencimento. Qual é a base de cálculo?`,
          type: "num", answer: P + F - D, tol: 0.02, unit: "R$",
          explain: `O desconto incondicional reduz a base; o do boleto é condicional e não reduz. ${rs(P)} + ${rs(F)} − ${rs(D)} = <b>${rs(P + F - D)}</b>.`,
        };
      }
      const o = shuf([
        "Um desconto incondicional destacado na própria nota fiscal",
        "Um desconto que só vale se o comprador pagar o boleto até o vencimento",
        "O frete que o vendedor cobra do comprador como parte da venda",
        "Os juros cobrados do comprador por atraso no pagamento",
      ], 0);
      return {
        q: "Qual destes itens <b>reduz</b> a base de cálculo do IBS e da CBS?",
        type: "choice", options: o.options, answer: o.answer,
        explain: "Só o desconto incondicional (dado na nota, sem depender de nada depois) reduz a base. O desconto do boleto é condicional; frete e juros cobrados entram na base.",
      };
    },

    /* Reforma Tributária: débito, crédito e imposto por fora */
    iva() {
      const t = ri(0, 2);
      const a = pick([10, 20, 25, 27]);
      if (t === 0) {
        const V = pick([200, 300, 400, 500]), C = pick([80, 100, 120, 150]);
        return {
          q: `Com alíquota de exemplo de <b>${a}%</b>, um vendedor do regime regular vende com base de <b>${rs(V)}</b> e comprou, para essa venda, com base de <b>${rs(C)}</b>. Quanto de imposto ele paga (débito menos crédito)?`,
          type: "num", answer: +((V - C) * a / 100).toFixed(2), tol: 0.02, unit: "R$",
          explain: `Débito ${rs(V)} × ${a}% = ${rs(V * a / 100)}. Crédito ${rs(C)} × ${a}% = ${rs(C * a / 100)}. A pagar: <b>${rs((V - C) * a / 100)}</b>.`,
        };
      }
      if (t === 1) {
        const B = pick([100, 150, 200, 250, 400]);
        return {
          q: `O produto tem base de <b>${rs(B)}</b>. Com imposto de exemplo de <b>${a}%</b> calculado <b>por fora</b>, quanto o comprador paga no total?`,
          type: "num", answer: +(B * (1 + a / 100)).toFixed(2), tol: 0.02, unit: "R$",
          explain: `O imposto é somado por fora da base: ${rs(B)} × ${a}% = ${rs(B * a / 100)}. Total: ${rs(B)} + ${rs(B * a / 100)} = <b>${rs(B * (1 + a / 100))}</b>.`,
        };
      }
      const C = pick([60, 80, 120, 200]);
      return {
        q: `Uma compra para revenda tem base de <b>${rs(C)}</b> com imposto de exemplo de <b>${a}%</b> destacado na nota. Qual é o <b>crédito</b> do comprador no regime regular?`,
        type: "num", answer: +(C * a / 100).toFixed(2), tol: 0.02, unit: "R$",
        explain: `O crédito é o imposto da compra: ${rs(C)} × ${a}% = <b>${rs(C * a / 100)}</b>.`,
      };
    },

    /* Reforma Tributária: quando a plataforma responde (art. 22) */
    plataforma() {
      const A = "A plataforma responde solidariamente com o vendedor brasileiro";
      const B = "A plataforma responde com o comprador e no lugar do vendedor estrangeiro";
      const C = "Nenhuma hipótese de responsabilidade da plataforma se aplica";
      const D = "Só o vendedor responde, porque a plataforma nunca é responsável";
      const cases = [
        { s: "O vendedor é brasileiro, é contribuinte e <b>não emitiu nota fiscal eletrônica</b> da venda. A plataforma cobra e entrega.", c: A, why: "Fornecedor brasileiro contribuinte que não registra a operação em documento fiscal eletrônico: a plataforma responde de forma solidária." },
        { s: "O vendedor mora e está estabelecido no <b>exterior</b>. A plataforma controla o pagamento e a entrega da venda ao comprador no Brasil.", c: B, why: "Para fornecedor no exterior a plataforma responde solidariamente com o comprador e, ao mesmo tempo, em substituição ao fornecedor." },
        { s: "O site apenas <b>exibe anúncios</b>. Não cobra, não recebe pagamento, não define os termos da venda e não entrega.", c: C, why: "Sem controle de cobrança, pagamento, termos e condições ou entrega, o site não é tratado como plataforma responsável." },
        { s: "O vendedor brasileiro <b>emitiu a nota fiscal eletrônica</b> corretamente e a plataforma prestou todas as informações exigidas à Receita e ao Comitê Gestor.", c: C, why: "Com nota emitida e informações prestadas, não se configura nenhuma das hipóteses de responsabilidade da plataforma." },
        { s: "O vendedor é brasileiro e contribuinte, mas a plataforma <b>deixou de prestar as informações exigidas</b> sobre as vendas ao Comitê Gestor e à Receita.", c: A, why: "Deixar de prestar as informações exigidas é uma das hipóteses em que a plataforma responde de forma solidária com o vendedor brasileiro." },
      ];
      const k = pick(cases);
      const o = shuf([A, B, C, D], [A, B, C, D].indexOf(k.c));
      return { q: `Cenário: ${k.s}<br>O que a regra do art. 22 diz sobre a responsabilidade da plataforma?`, type: "choice", options: o.options, answer: o.answer, explain: k.why };
    },

    /* Reforma Tributária: mês do fato gerador (pagamento ou fornecimento, o que vier primeiro) */
    fato() {
      const m1 = ri(0, 8), m2 = m1 + ri(1, 2);
      const d1 = ri(3, 27), d2 = ri(3, 27);
      const payFirst = Math.random() < 0.5;
      const pay = payFirst ? [d1, m1] : [d2, m2];
      const ent = payFirst ? [d2, m2] : [d1, m1];
      const dt = (x) => `${String(x[0]).padStart(2, "0")}/${String(x[1] + 1).padStart(2, "0")}`;
      const first = payFirst ? m1 : m1; // o mês mais cedo é sempre m1
      const opts = [MESES[m1], MESES[m2], MESES[m2 + 1], "Só no mês em que a nota for emitida"];
      const o = shuf(opts, 0);
      return {
        q: `Um comprador paga a venda em <b>${dt(pay)}</b> e a mercadoria é entregue em <b>${dt(ent)}</b>. Em que mês nasce o fato gerador do IBS e da CBS?`,
        type: "choice", options: o.options, answer: o.answer,
        explain: `O fato gerador ocorre no fornecimento ou no pagamento, <b>o que vier primeiro</b>. Aqui ${payFirst ? "o pagamento" : "a entrega"} veio primeiro, em <b>${MESES[first]}</b>.`,
      };
    },

    /* Reforma Tributária: split payment */
    split() {
      const t = ri(0, 2);
      const a = pick([20, 25, 28]);
      const B = pick([100, 150, 200, 250, 400]);
      const P = +(B * (1 + a / 100)).toFixed(2);
      if (t === 0) {
        return {
          q: `O comprador pagou <b>${rs(P)}</b>, preço que já inclui o imposto de exemplo de <b>${a}%</b> calculado por fora. Quanto é separado para o governo no split payment?`,
          type: "num", answer: +(B * a / 100).toFixed(2), tol: 0.02, unit: "R$",
          explain: `A base é ${rs(B)} (${rs(P)} ÷ ${fmt(1 + a / 100, 2)}). Imposto: ${rs(B)} × ${a}% = <b>${rs(B * a / 100)}</b>.`,
        };
      }
      if (t === 1) {
        return {
          q: `O comprador pagou <b>${rs(P)}</b>, incluindo imposto de exemplo de <b>${a}%</b> por fora. Antes de comissão e frete, quanto sobra para o vendedor depois do split payment?`,
          type: "num", answer: B, tol: 0.02, unit: "R$",
          explain: `${rs(P)} ÷ ${fmt(1 + a / 100, 2)} = <b>${rs(B)}</b>. O restante, ${rs(P - B)}, é o imposto separado na liquidação.`,
        };
      }
      return {
        q: `Com imposto de exemplo de <b>${a}%</b> por fora da base, que <b>percentual do preço final</b> pago pelo comprador é separado no split payment?`,
        type: "num", answer: +(a / (100 + a) * 100).toFixed(1), tol: 0.3, unit: "%",
        explain: `O imposto é ${a} para cada 100 de base, e o preço final é ${100 + a}. Então ${a} ÷ ${100 + a} = <b>${fmt(a / (100 + a) * 100, 1)}%</b> do preço final.`,
      };
    },

    /* Reforma Tributária: crédito de comissão, frete e embalagem no regime regular */
    credito() {
      const t = ri(0, 2);
      const a = pick([20, 25, 27]);
      const V = pick([200, 300, 400]);
      const M = pick([60, 80, 100]), F = pick([10, 15, 20]), C = pick([20, 30, 40]), E = pick([5, 8, 10]);
      const cred = (M + F + C + E) * a / 100;
      if (t === 0) {
        return {
          q: `No regime regular, com imposto de exemplo de <b>${a}%</b>, um vendedor teve para uma venda estas compras com nota (base): mercadoria <b>${rs(M)}</b>, frete <b>${rs(F)}</b>, comissão do marketplace <b>${rs(C)}</b> e embalagem <b>${rs(E)}</b>. Qual é o <b>crédito total</b>?`,
          type: "num", answer: +cred.toFixed(2), tol: 0.02, unit: "R$",
          explain: `Base das compras: ${rs(M + F + C + E)}. Crédito: ${rs(M + F + C + E)} × ${a}% = <b>${rs(cred)}</b>.`,
        };
      }
      if (t === 1) {
        return {
          q: `A venda tem base de <b>${rs(V)}</b>, imposto de exemplo de <b>${a}%</b>. As compras ligadas a ela (mercadoria, frete, comissão e embalagem) somam <b>${rs(M + F + C + E)}</b> de base. Qual é o <b>imposto líquido</b> a pagar?`,
          type: "num", answer: +(V * a / 100 - cred).toFixed(2), tol: 0.02, unit: "R$",
          explain: `Débito: ${rs(V)} × ${a}% = ${rs(V * a / 100)}. Crédito: ${rs(cred)}. Líquido: <b>${rs(V * a / 100 - cred)}</b>.`,
        };
      }
      return {
        q: `Só a <b>comissão</b> do marketplace foi de <b>${rs(C)}</b> de base, com imposto de exemplo de <b>${a}%</b> destacado. Que crédito essa comissão gera para um vendedor do regime regular?`,
        type: "num", answer: +(C * a / 100).toFixed(2), tol: 0.02, unit: "R$",
        explain: `${rs(C)} × ${a}% = <b>${rs(C * a / 100)}</b>. Serviço contratado para a atividade, com nota e imposto recolhido, gera crédito.`,
      };
    },
  };

  function sim(b, ctx) {
    const gen = GEN[b.kind];
    const rounds = b.rounds || 3;
    const root = h("div", { class: "quiz sim" });
    let finishedOnce = false;
    let run;

    function start() { run = { i: 0, ok: 0, seen: new Set() }; round(); }

    function nextScenario() {
      let s, tries = 0;
      do { s = gen(); tries++; } while (run.seen.has(s.q) && tries < 12);
      run.seen.add(s.q);
      return s;
    }

    function dots() {
      return h("span", { class: "dots", "aria-hidden": "true" }, Array.from({ length: rounds }, (_, k) => h("i", { class: k < run.i ? "d" : k === run.i ? "c" : "" })));
    }

    function round() {
      const s = nextScenario();
      const fb = h("div", { class: "quiz-foot", "aria-live": "polite" });
      const next = h("button", { class: "btn btn-gold btn-sm", type: "button", hidden: true, text: run.i === rounds - 1 ? "Ver resultado" : "Próxima simulação" });
      next.addEventListener("click", () => { run.i++; run.i >= rounds ? summary() : round(); });
      let answered = false;

      function verdict(ok, extra) {
        answered = true;
        if (ok) run.ok++;
        fb.replaceChildren(
          h("div", { class: "why " + (ok ? "ok" : "no") }, h("strong", { text: ok ? "Correto. " : "Ainda não. " }), extra, h("span", { html: " " + s.explain })),
          next);
        next.hidden = false;
        next.focus({ preventScroll: true });
      }

      let body;
      if (s.type === "num") {
        const input = h("input", { class: "input sim-in", type: "text", inputmode: "decimal", autocomplete: "off", "aria-label": "Sua resposta", placeholder: "Sua resposta" });
        const go = h("button", { class: "btn btn-gold btn-sm", type: "button", text: "Conferir", disabled: true });
        input.addEventListener("input", () => { go.disabled = !input.value.trim() || answered; });
        const submit = () => {
          if (answered) return;
          const v = parseFloat(input.value.replace(/\./g, "").replace(",", ".").replace(/[^\d.\-]/g, ""));
          if (Number.isNaN(v)) { M.toast("Digite um número.", "err"); return; }
          input.disabled = true; go.disabled = true;
          const ok = Math.abs(v - s.answer) <= (s.tol || 0);
          const shown = s.unit === "R$" ? rs(s.answer) : s.unit === "%" ? pct(s.answer) : fmt(s.answer, s.answer % 1 ? 1 : 0) + (s.unit ? " " + s.unit : "");
          verdict(ok, ok ? "" : h("span", { html: `Resposta: <b>${shown}</b>. ` }));
        };
        go.addEventListener("click", submit);
        input.addEventListener("keydown", (e) => { if (e.key === "Enter") submit(); });
        body = h("div", { class: "sim-row" }, input, s.unit && s.unit !== "R$" ? h("span", { class: "sim-unit", text: s.unit }) : null, go);
        setTimeout(() => input.focus({ preventScroll: true }), 30);
      } else {
        const name = "s" + Math.random().toString(36).slice(2, 7);
        const labels = [];
        const list = h("ul", { class: "opts" }, s.options.map((t, i) => {
          const input = h("input", { type: "radio", name, id: name + i, value: String(i) });
          const label = h("label", { class: "opt", for: name + i }, input, h("span", { class: "mark r" }), h("span", { text: t }));
          labels.push(label);
          input.addEventListener("change", () => {
            if (answered) return;
            list.querySelectorAll("input").forEach((x) => { x.disabled = true; });
            labels.forEach((l, k) => { l.className = "opt" + (k === s.answer ? " right" : k === i && i !== s.answer ? " wrong" : ""); });
            verdict(i === s.answer, "");
          });
          return h("li", null, label);
        }));
        body = list;
      }

      root.replaceChildren(
        h("span", { class: "q-tag", text: "Simulação" }),
        h("div", { class: "find-prog" }, h("span", { text: `Rodada ${run.i + 1} de ${rounds}` }), dots()),
        h("div", { class: "q-text", html: s.q }), body, fb);
    }

    function summary() {
      const p = Math.round((run.ok / rounds) * 100);
      const msg = p >= 80 ? "Você domina esse cálculo." : p >= 60 ? "Quase lá. Releia a regra e simule de novo." : "Releia a aula com calma e simule de novo. Os números mudam a cada rodada.";
      root.replaceChildren(
        h("span", { class: "q-tag", text: "Simulação · Resultado" }),
        h("div", { class: "find-score" }, h("b", { text: `${run.ok} de ${rounds}` }), h("span", { text: ` acertos (${p}%)` })),
        h("p", { text: msg }),
        h("div", { class: "row" }, h("button", { class: "btn btn-gold btn-sm", type: "button", text: "Simular de novo com outros números", onclick: start })));
      if (!finishedOnce) { finishedOnce = true; ctx.quizAnswered(b); }
    }

    ctx.quizRegister(b);
    root.append(
      h("span", { class: "q-tag", text: "Simulação" }),
      h("div", { class: "q-text", text: b.title || "Teste-se com números" }),
      h("p", { class: "muted", text: (b.intro || "Resolva as rodadas abaixo.") + ` São ${rounds} rodadas, e os números mudam a cada vez.` }),
      h("button", { class: "btn btn-gold", type: "button", text: "Começar a simulação", onclick: start }));
    return root;
  }

  M.sim = { GEN };
  Object.assign(M.blockTypes, { sim });
})();

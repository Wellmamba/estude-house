/* Simulações da Grade de Formação (bloco `sim`): preço, margem, ROAS, promoção, estoque, Full, curva ABC, diagnóstico e prioridade.
   Cada rodada sorteia números novos. Todos os números são de exemplo.
   Mesmo formato do calc.js: cada gerador devolve { q, type: "num" | "choice", ... }. */
(function () {
  const { h } = M;
  const ri = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const fmt = (n, d = 0) => Number(n).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const rs = (n) => "R$ " + fmt(n, Number.isInteger(+n.toFixed(2)) ? 0 : 2);
  const r2 = (n) => Math.round(n * 100) / 100;
  const shuf = (opts, correct) => {
    const idx = opts.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
    return { options: idx.map((i) => opts[i]), answer: idx.indexOf(correct) };
  };
  const choice = (q, opts, correct, explain) => { const s = shuf(opts, correct); return { q, type: "choice", options: s.options, answer: s.answer, explain }; };
  const shuffled = (a) => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };

  const GEN = {
    /* preço mínimo: custo + frete e tarifa, dividido pelo que sobra do preço depois dos percentuais */
    precomin() {
      const c = pick([30, 40, 45, 52, 60, 75, 90, 110]), f = pick([8, 10, 12, 14, 16, 18]);
      const com = pick([12, 14, 16, 18]), imp = pick([4, 6, 8, 10]), alvo = pick([8, 10, 12, 15]);
      const pct = com + imp + alvo, den = 1 - pct / 100;
      if (ri(0, 2) < 2) {
        const p = r2((c + f) / den);
        return {
          q: `Custo do produto <b>${rs(c)}</b>, frete e tarifa fixa somam <b>${rs(f)}</b>. Comissão de <b>${com}%</b> e imposto de <b>${imp}%</b>, os dois sobre o preço de venda. Qual é o <b>preço mínimo</b> para ficar com <b>${alvo}%</b> de margem? (números de exemplo)`,
          type: "num", answer: p, tol: 0.6, unit: "R$",
          explain: `Percentuais sobre o preço: ${com}% + ${imp}% + ${alvo}% = ${pct}%. Sobra ${100 - pct}% do preço para cobrir o que é fixo. Preço = (${rs(c)} + ${rs(f)}) ÷ ${fmt(den, 2)} = <b>${rs(p)}</b>.`,
        };
      }
      const P = Math.round((c + f) / den) + ri(5, 25);
      const sobra = P - c - f - (P * (com + imp)) / 100, m = r2((sobra / P) * 100);
      return {
        q: `Um anúncio vende por <b>${rs(P)}</b>. Custo do produto <b>${rs(c)}</b>, frete e tarifa <b>${rs(f)}</b>, comissão <b>${com}%</b> e imposto <b>${imp}%</b> sobre o preço. Qual é a <b>margem</b> (% do preço) que sobra? (números de exemplo)`,
        type: "num", answer: m, tol: 0.6, unit: "%",
        explain: `Comissão + imposto: ${rs((P * (com + imp)) / 100)}. Sobra: ${rs(P)} − ${rs(c)} − ${rs(f)} − ${rs((P * (com + imp)) / 100)} = ${rs(r2(sobra))}. Margem: ${rs(r2(sobra))} ÷ ${rs(P)} = <b>${fmt(m, 1)}%</b>.`,
      };
    },

    /* margem de contribuição: o que sobra depois de pagar tudo que depende da venda */
    margemcontrib() {
      const P = pick([60, 80, 90, 100, 120, 150, 200]), c = Math.round(P * pick([0.35, 0.4, 0.45]));
      const com = pick([12, 14, 16]), imp = pick([4, 6, 8]), ads = pick([0, 4, 5, 6]), fr = pick([6, 8, 10, 12]);
      const mc = r2(P - c - (P * (com + imp + ads)) / 100 - fr);
      const parts = `produto <b>${rs(c)}</b>, comissão <b>${com}%</b>, imposto <b>${imp}%</b>${ads ? `, Ads <b>${ads}%</b>` : ""} e frete <b>${rs(fr)}</b>`;
      if (ri(0, 1)) {
        return {
          q: `Preço de venda <b>${rs(P)}</b>. Custos que dependem da venda: ${parts} (percentuais sobre o preço). Qual é a <b>margem de contribuição em R$</b> por unidade? (números de exemplo)`,
          type: "num", answer: mc, tol: 0.1, unit: "R$",
          explain: `Percentuais: ${com + imp + ads}% de ${rs(P)} = ${rs((P * (com + imp + ads)) / 100)}. Margem de contribuição = ${rs(P)} − ${rs(c)} − ${rs((P * (com + imp + ads)) / 100)} − ${rs(fr)} = <b>${rs(mc)}</b>.`,
        };
      }
      const pc = r2((mc / P) * 100);
      return {
        q: `Preço de venda <b>${rs(P)}</b>. Custos que dependem da venda: ${parts} (percentuais sobre o preço). Qual é a <b>margem de contribuição em %</b> do preço? (números de exemplo)`,
        type: "num", answer: pc, tol: 0.6, unit: "%",
        explain: `Margem de contribuição = ${rs(mc)} por unidade. ${rs(mc)} ÷ ${rs(P)} = <b>${fmt(pc, 1)}%</b>.`,
      };
    },

    /* ROAS de equilíbrio = 100 ÷ margem de contribuição (%) */
    roaseq() {
      const t = ri(0, 2);
      if (t === 0) {
        const m = pick([8, 10, 12.5, 16, 20, 25, 40]);
        return {
          q: `A margem de contribuição do produto, <b>antes do Ads</b>, é de <b>${fmt(m, m % 1 ? 1 : 0)}%</b> do preço. Qual é o <b>ROAS de equilíbrio</b>, o ROAS em que o Ads só empata? (número de exemplo)`,
          type: "num", answer: r2(100 / m), tol: 0.06, unit: "x",
          explain: `ROAS de equilíbrio = 100 ÷ margem. 100 ÷ ${fmt(m, m % 1 ? 1 : 0)} = <b>${fmt(r2(100 / m), 2)}x</b>. Abaixo disso a campanha perde dinheiro, acima dele sobra.`,
        };
      }
      if (t === 1) {
        const r = pick([4, 5, 8, 10]);
        return {
          q: `A campanha precisa empatar com ROAS <b>${r}x</b>. Qual é a <b>margem de contribuição mínima</b> (% do preço, antes do Ads) que o produto precisa ter? (número de exemplo)`,
          type: "num", answer: r2(100 / r), tol: 0.2, unit: "%",
          explain: `Margem = 100 ÷ ROAS de equilíbrio. 100 ÷ ${r} = <b>${fmt(100 / r, 1)}%</b>. Margem menor que isso deixa o ROAS de ${r}x no prejuízo.`,
        };
      }
      const m = pick([15, 20, 25, 30]), r = pick([3, 4, 5, 6, 8]);
      const res = r2(r * 1000 * (m / 100) - 1000);
      return {
        q: `Margem de contribuição <b>${m}%</b> antes do Ads e ROAS de <b>${r}x</b>. Investindo <b>R$ 1.000</b> em Ads, qual é o <b>resultado</b> em R$? (pode ser negativo; números de exemplo)`,
        type: "num", answer: res, tol: 1, unit: "R$",
        explain: `Vendas: R$ 1.000 × ${r} = R$ ${fmt(r * 1000)}. Margem de ${m}% = R$ ${fmt(r * 1000 * m / 100)}. Menos o Ads de R$ 1.000: <b>${res < 0 ? "-" : ""}R$ ${fmt(Math.abs(res))}</b>.`,
      };
    },

    /* ACOS, ROAS e TACOS */
    acostacos() {
      const A = pick([200, 300, 400, 500, 800]), r = pick([4, 5, 6, 8, 10]), V = A * r, T = V * pick([2, 2.5, 4, 5]);
      const t = ri(0, 2);
      if (t === 0) {
        return { q: `Uma campanha gastou <b>${rs(A)}</b> em Ads e trouxe <b>${rs(V)}</b> em vendas atribuídas. Qual é o <b>ACOS</b> (gasto ÷ vendas do Ads)?`, type: "num", answer: r2((A / V) * 100), tol: 0.2, unit: "%", explain: `${rs(A)} ÷ ${rs(V)} = <b>${fmt((A / V) * 100, 1)}%</b>. ACOS é quanto você gasta de Ads para cada R$ 1 vendido pelo Ads.` };
      }
      if (t === 1) {
        return { q: `Uma campanha gastou <b>${rs(A)}</b> e trouxe <b>${rs(V)}</b> em vendas atribuídas. Qual é o <b>ROAS</b> (vendas do Ads ÷ gasto)?`, type: "num", answer: r, tol: 0.06, unit: "x", explain: `${rs(V)} ÷ ${rs(A)} = <b>${fmt(r, 1)}x</b>. Cada R$ 1 de Ads voltou como R$ ${fmt(r, 1)} em vendas (vendas, não lucro).` };
      }
      return { q: `A loja gastou <b>${rs(A)}</b> em Ads no mês e vendeu <b>${rs(T)}</b> no total (com e sem Ads). Qual é o <b>TACOS</b> (gasto de Ads ÷ vendas totais)?`, type: "num", answer: r2((A / T) * 100), tol: 0.2, unit: "%", explain: `${rs(A)} ÷ ${rs(T)} = <b>${fmt((A / T) * 100, 1)}%</b>. O TACOS olha o Ads contra a venda total da loja, não só contra a venda atribuída.` };
    },

    /* promoção: quanto precisa vender a mais para manter o lucro total */
    promovale() {
      const P = pick([80, 100, 120, 150, 200]), mp = pick([0.2, 0.25, 0.3]), m0 = P * mp;
      const d = pick([5, 8, 10, 12, 15].filter((x) => x <= mp * 100 - 5));
      const m1 = m0 - (P * d) / 100, need = (m0 / m1 - 1) * 100;
      if (ri(0, 1)) {
        return {
          q: `Um produto de <b>${rs(P)}</b> deixa <b>${rs(m0)}</b> de margem por unidade. Numa promoção de <b>${d}%</b> de desconto, os custos em R$ continuam os mesmos. Quantos <b>% a mais de unidades</b> é preciso vender para manter o <b>lucro total</b>? (números de exemplo)`,
          type: "num", answer: r2(need), tol: 1, unit: "%",
          explain: `Desconto: ${rs((P * d) / 100)} por unidade. Nova margem: ${rs(m0)} − ${rs((P * d) / 100)} = ${rs(m1)}. Precisa de ${rs(m0)} ÷ ${rs(m1)} = ${fmt(m0 / m1, 2)}x as vendas: <b>+${fmt(need, 0)}%</b>.`,
        };
      }
      const V0 = pick([50, 80, 100, 200]), extra = Math.round(V0 * (m0 / m1 - 1));
      return {
        q: `Hoje o produto vende <b>${V0} un/mês</b> a <b>${rs(P)}</b>, com <b>${rs(m0)}</b> de margem por unidade. Na promoção com <b>${d}%</b> de desconto, quantas <b>unidades a mais</b> por mês são necessárias só para manter o lucro total? (números de exemplo)`,
        type: "num", answer: extra, tol: 1.5, unit: "un",
        explain: `Margem cai para ${rs(m1)}. Para manter o lucro total de ${rs(m0 * V0)}, precisa de ${fmt(Math.round((m0 * V0) / m1))} un. Isso é <b>${extra} a mais</b> que as ${V0} de hoje.`,
      };
    },

    /* ponto de equilíbrio */
    pontoeq() {
      const F = pick([3000, 5000, 8000, 12000, 20000]), P = pick([50, 80, 90, 120, 150, 200]), v = pick([50, 55, 60, 65, 70]);
      const mc = (P * (100 - v)) / 100;
      if (ri(0, 1)) {
        return {
          q: `Custos fixos de <b>${rs(F)}</b> por mês. Cada unidade vende por <b>${rs(P)}</b> e os custos variáveis (produto, comissão, imposto, frete) são <b>${v}%</b> do preço. Quantas <b>unidades por mês</b> o ponto de equilíbrio exige? (arredonde para cima; números de exemplo)`,
          type: "num", answer: Math.ceil(F / mc), tol: 1, unit: "un",
          explain: `Margem de contribuição: ${rs(P)} × ${100 - v}% = ${rs(mc)} por unidade. ${rs(F)} ÷ ${rs(mc)} = ${fmt(F / mc, 1)} → <b>${fmt(Math.ceil(F / mc))} unidades</b>.`,
        };
      }
      const fat = Math.round(F / ((100 - v) / 100));
      return {
        q: `Custos fixos de <b>${rs(F)}</b> por mês e custos variáveis de <b>${v}%</b> do faturamento. Qual <b>faturamento mensal</b> faz a loja empatar? (números de exemplo)`,
        type: "num", answer: fat, tol: 2, unit: "R$",
        explain: `Sobram ${100 - v}% de cada R$ 1 vendido para pagar os fixos. ${rs(F)} ÷ ${fmt((100 - v) / 100, 2)} = <b>${rs(fat)}</b>.`,
      };
    },

    /* atacado: desconto por volume come a margem */
    atacado() {
      const P = pick([60, 80, 100, 120, 150]), mp = pick([0.25, 0.3, 0.35]), m0 = P * mp;
      const d = pick([5, 8, 10, 12, 15].filter((x) => x <= mp * 100 - 8));
      const m1 = m0 - (P * d) / 100;
      if (ri(0, 1)) {
        return {
          q: `No varejo, um produto de <b>${rs(P)}</b> deixa <b>${rs(m0)}</b> de margem por unidade. No <b>atacado</b> (kit com desconto de <b>${d}%</b> sobre o preço), qual é a <b>margem por unidade</b>? (custos em R$ iguais; números de exemplo)`,
          type: "num", answer: r2(m1), tol: 0.1, unit: "R$",
          explain: `Desconto de ${d}% = ${rs((P * d) / 100)} por unidade. Margem: ${rs(m0)} − ${rs((P * d) / 100)} = <b>${rs(m1)}</b>.`,
        };
      }
      const need = Math.ceil((10 * m0) / m1);
      return {
        q: `Vender <b>10 unidades</b> no varejo rende <b>${rs(10 * m0)}</b> de margem (${rs(m0)} cada). No atacado o desconto de <b>${d}%</b> deixa <b>${rs(m1)}</b> por unidade. Quantas <b>unidades no atacado</b> rendem o mesmo? (arredonde para cima)`,
        type: "num", answer: need, tol: 0.5, unit: "un",
        explain: `${rs(10 * m0)} ÷ ${rs(m1)} = ${fmt((10 * m0) / m1, 1)} → <b>${need} unidades</b>. O atacado só vale se o volume extra compensar a margem menor.`,
      };
    },

    /* cobertura de estoque e ponto de pedido */
    cobertura() {
      const v = pick([5, 8, 10, 12, 15, 20]), t = ri(0, 2);
      if (t === 0) {
        const d = pick([20, 30, 45, 60]);
        return { q: `O SKU vende <b>${v} unidades por dia</b> e há <b>${v * d} unidades</b> em estoque. Quantos <b>dias de cobertura</b> restam?`, type: "num", answer: d, tol: 0.5, unit: "dias", explain: `${fmt(v * d)} ÷ ${v} por dia = <b>${d} dias</b>.` };
      }
      const lead = pick([15, 20, 25, 30]), seg = pick([5, 7, 10, 15]), pp = v * (lead + seg);
      if (t === 1) {
        return { q: `Vendas de <b>${v} un/dia</b>, prazo do fornecedor de <b>${lead} dias</b> e estoque de segurança de <b>${seg} dias</b>. Qual é o <b>ponto de pedido</b> (estoque em que se faz o pedido)?`, type: "num", answer: pp, tol: 0.5, unit: "un", explain: `Ponto de pedido = vendas por dia × (prazo + segurança) = ${v} × (${lead} + ${seg}) = <b>${fmt(pp)} unidades</b>.` };
      }
      const e = pp + v * pick([6, 10, 14, 20]);
      return { q: `Vendas de <b>${v} un/dia</b>, ponto de pedido de <b>${fmt(pp)} un</b> e estoque atual de <b>${fmt(e)} un</b>. Em quantos <b>dias</b> o estoque chega ao ponto de pedido?`, type: "num", answer: (e - pp) / v, tol: 0.5, unit: "dias", explain: `Falta chegar de ${fmt(e)} a ${fmt(pp)}: ${fmt(e - pp)} unidades ÷ ${v} por dia = <b>${fmt((e - pp) / v)} dias</b>.` };
    },

    /* DRE por SKU no mês */
    dre() {
      const U = pick([50, 100, 150, 200]), P = pick([60, 80, 90, 120]), R = U * P;
      const imp = pick([6, 8, 10]), com = pick([12, 14, 16]), ads = pick([4, 5, 6]), fr = pick([6, 8, 10]), cmv = Math.round(P * pick([0.4, 0.45, 0.5]));
      const res = Math.round(R * (1 - (imp + com + ads) / 100) - U * fr - U * cmv);
      return {
        q: `DRE do mês de um SKU (números de exemplo): <b>${U} vendas</b> a <b>${rs(P)}</b> (receita <b>${rs(R)}</b>). Imposto <b>${imp}%</b>, comissão <b>${com}%</b> e Ads <b>${ads}%</b> da receita. Frete <b>${rs(fr)}</b> e custo do produto <b>${rs(cmv)}</b> por unidade. Qual é o <b>resultado do mês</b> em R$ (pode ser negativo)?`,
        type: "num", answer: res, tol: 2, unit: "R$",
        explain: `Percentuais: ${imp + com + ads}% de ${rs(R)} = ${rs((R * (imp + com + ads)) / 100)}. Frete: ${rs(U * fr)}. Produto: ${rs(U * cmv)}. Resultado: ${rs(R)} − ${rs((R * (imp + com + ads)) / 100)} − ${rs(U * fr)} − ${rs(U * cmv)} = <b>${res < 0 ? "-" : ""}${rs(Math.abs(res))}</b>.`,
      };
    },

    /* vale mandar o SKU pro Full? */
    fullvale() {
      const arm = pick([1, 1.2, 1.5, 2, 2.5]), dias = pick([15, 25, 30, 45, 60, 90]);
      const custo = r2((arm * dias) / 30);
      let ben;
      do { ben = r2(pick([2, 3, 4, 5, 6, 8, 10]) + pick([0, 0.5, 1])); } while (Math.abs(ben - custo) < Math.max(0.6, ben * 0.25));
      const vale = ben > custo;
      const A = `Vale: o benefício de ${rs(ben)} por unidade cobre a armazenagem de ${rs(custo)}`;
      const B = `Não vale: a armazenagem de ${rs(custo)} por unidade passa o benefício de ${rs(ben)}`;
      const C = "Vale sempre, porque o Full aumenta a visibilidade do anúncio";
      const D = "Não vale nunca, porque o Full só serve para produto de ticket alto";
      return choice(
        `O SKU fica em média <b>${dias} dias</b> parado no estoque. A armazenagem custa <b>${rs(arm)}</b> por unidade ao mês. Mandar pro Full traz <b>${rs(ben)}</b> por unidade (frete economizado + margem de vendas extras). Qual é a decisão? (números de exemplo)`,
        [A, B, C, D], vale ? 0 : 1,
        `Custo de armazenar por unidade: ${rs(arm)} × ${dias} ÷ 30 = <b>${rs(custo)}</b>. Benefício: ${rs(ben)}. ${vale ? "O benefício é maior: vale testar." : "O custo é maior: esse SKU não paga o Full."} Giro e custo decidem, não a regra de que “Full sempre vale”.`);
    },

    /* qual modalidade do Mercado Envios */
    modalidade() {
      const OPT = ["Full", "Flex", "Coleta", "Places (agências)"];
      const S = [
        [0, () => `Produto leve e compacto que vende <b>${ri(60, 150)} un/mês</b> para o Brasil todo, com margem boa. O vendedor quer entrega rápida e menos trabalho de despacho.`, "Giro alto, produto compacto e venda nacional: o estoque no centro de distribuição encurta o prazo e tira o despacho do vendedor."],
        [0, () => `SKU de alto giro (<b>${ri(80, 200)} un/mês</b>), leve, com a margem calculada e sem ruptura. O objetivo é ganhar prazo e conversão no país inteiro.`, "Alto giro com margem calculada é o caso clássico do Full: o benefício de prazo e conversão paga a armazenagem."],
        [1, () => `A loja vende para <b>clientes da própria cidade e região</b>, tem moto e equipe própria e quer entregar no mesmo dia. Vende cerca de <b>${ri(30, 80)} pedidos por semana</b>.`, "Entrega própria na região, com equipe e janela de corte, é o Flex: o vendedor faz a última milha."],
        [1, () => `Empresa com <b>entregadores próprios</b>, estoque na cidade e clientes concentrados num raio curto. Quer prazo de horas, sem depender de centro de distribuição.`, "Equipe própria e cliente perto pedem Flex: a velocidade vem da operação do vendedor, com atenção à janela de corte."],
        [2, () => `O vendedor despacha <b>${ri(15, 40)} pedidos por dia</b> com rotina fixa de embalagem e quer que a transportadora busque na porta, sem se preocupar com entrega no mesmo dia.`, "Volume médio com rotina fixa e retirada na porta é a Coleta: o carro passa em horário combinado."],
        [2, () => `Produto <b>volumoso</b>, giro médio (<b>${ri(15, 35)} un/mês</b>), que ocuparia muito espaço de armazenagem. O vendedor embala todo dia no mesmo horário.`, "Volumoso e de giro médio fica caro de guardar: com rotina de embalagem diária, a Coleta resolve sem custo de armazenagem."],
        [3, () => `Loja pequena que vende <b>${ri(3, 10)} pedidos por semana</b>, sem rotina diária de despacho, e o dono passa perto de uma agência todo dia.`, "Poucas vendas e sem rotina de despacho: levar à agência (Places) é simples e não exige estrutura."],
        [3, () => `Vendedor com <b>poucas vendas</b>, que não consegue esperar coleta em horário fixo e mora ao lado de um ponto de postagem.`, "Poucas vendas e sem janela para esperar a coleta: postar na agência é a opção mais simples."],
      ];
      const [k, mk, why] = pick(S);
      return choice(`Qual modalidade do Mercado Envios combina melhor com este perfil? ${mk()}`, OPT, k, why + " (Regras e custos de cada modalidade mudam: confira a documentação oficial.)");
    },

    /* curva ABC pelo % acumulado */
    abc() {
      const T = pick([[45, 25, 15, 8, 4, 3], [50, 22, 12, 7, 5, 4], [40, 28, 17, 8, 4, 3], [55, 20, 12, 6, 4, 3]]);
      const scale = pick([100, 200, 300, 500]);
      const rev = T.map((x) => x * scale);
      const total = rev.reduce((a, b) => a + b, 0);
      const names = shuffled(["Fone", "Capa", "Cabo", "Carregador", "Suporte", "Película", "Mouse", "Teclado"]).slice(0, T.length);
      let cum = 0;
      const cls = T.map((x) => { cum += x; return cum <= 80 ? "A" : cum <= 95 ? "B" : "C"; });
      const cums = []; cum = 0; T.forEach((x) => { cum += x; cums.push(cum); });
      const idx = pick([1, 2, 3, 4].filter((i) => Math.abs(cums[i] - 80) > 3 && Math.abs(cums[i] - 95) > 2));
      const list = names.map((n, i) => `${n} ${rs(rev[i])}`).join(" · ");
      return choice(
        `Faturamento do mês por SKU, do maior para o menor (total <b>${rs(total)}</b>): ${list}. Na regra de bolso 80/15/5 (A até 80% do faturamento acumulado, B até 95%, C o resto), qual é a curva do SKU <b>${names[idx]}</b>?`,
        ["Curva A", "Curva B", "Curva C"], ["A", "B", "C"].indexOf(cls[idx]),
        `Acumulado até ${names[idx]}: ${rs(rev.slice(0, idx + 1).reduce((a, b) => a + b, 0))} de ${rs(total)} = <b>${cums[idx]}%</b>. Até 80% é A, até 95% é B e acima disso é C.`);
    },

    /* o que investigar primeiro numa queda de vendas */
    hipotese() {
      const OPT = ["Preço frente à concorrência", "Ads e verba de campanha", "Reputação e exposição", "Estoque e ruptura", "Efeito pós-data comemorativa"];
      const S = [
        [0, "As <b>visitas continuam iguais</b>, mas a <b>conversão caiu</b>. Um concorrente direto baixou o preço na semana passada.", "Visitas iguais com conversão em queda e concorrente mais barato apontam para o preço. O tráfego está chegando; ele só não está comprando."],
        [1, "As <b>visitas caíram forte</b> de um dia para o outro e a <b>campanha de Ads parou ontem</b> porque a verba acabou.", "A queda de tráfego coincide com o Ads parado: primeiro verba e campanha, antes de mexer em preço ou anúncio."],
        [2, "As <b>visitas caíram aos poucos</b>, a conversão está igual e a <b>reputação mudou de verde para amarelo</b> nesta semana.", "A exposição cai quando a reputação piora, mesmo com anúncio e preço iguais. Começa por reputação."],
        [3, "<b>Visitas e conversão normais</b>, mas as vendas despencaram porque o anúncio principal <b>ficou sem estoque</b> por dias.", "Sem estoque não há venda, e o anúncio pode perder posição. Estoque e ruptura vêm antes."],
        [4, "A queda aparece <b>nos últimos 3 dias</b>, logo depois de uma <b>data comemorativa</b> com pico forte. Visitas e conversão voltaram ao nível normal.", "Depois do pico, a demanda volta ao patamar normal: parte da queda é só o efeito pós-campanha."],
      ];
      const [k, sc, why] = pick(S);
      return choice(`Vendas caíram. O que você <b>investiga primeiro</b>? ${sc}`, OPT, k, why + " Em diagnóstico real, depois da primeira hipótese testada, você segue a árvore das outras.");
    },

    /* reputação: qual indicador atacar primeiro */
    repdiag() {
      const items = [
        ["reclamações", pick([2, 3, 4])], ["atrasos", pick([4, 6, 8])], ["cancelamentos", pick([1, 2, 3])],
      ].map(([n, lim]) => ({ n, lim, val: Math.max(1, Math.round(lim * pick([0.5, 0.7, 1.35, 1.6, 1.9]) * 10) / 10) }));
      const ratio = (x) => x.val / x.lim;
      const sorted = [...items].sort((a, b) => ratio(b) - ratio(a));
      if (ratio(sorted[0]) <= 1.05 || ratio(sorted[0]) - ratio(sorted[1]) < 0.15) return GEN.repdiag();
      const k = items.indexOf(sorted[0]);
      const list = items.map((x) => `${x.n}: <b>${fmt(x.val, 1)}%</b> (limite de exemplo <b>${fmt(x.lim, 0)}%</b>)`).join("; ");
      return choice(
        `Indicadores de uma conta (números de exemplo): ${list}. Qual indicador você <b>ataca primeiro</b>?`,
        [...items.map((x) => `Os ${x.n}`.replace("Os reclamações", "As reclamações")), "O preço dos anúncios, antes de qualquer indicador"], k,
        `Compare cada indicador com o limite. O que está mais acima dele é o que mais pesa: <b>${items[k].n}</b> (${fmt(items[k].val, 1)}% contra ${fmt(items[k].lim, 0)}%). Os limites reais variam: confira na plataforma.`);
    },

    /* matriz impacto x esforço */
    prioridade() {
      const pool = shuffled(["Corrigir o título dos 10 anúncios top", "Refazer todas as fotos da loja", "Trocar a cor do banner da página inicial", "Reescrever toda a ficha técnica do catálogo", "Ajustar a verba do Ads campeão", "Migrar o cadastro para outro ERP", "Responder as perguntas em aberto", "Mudar o nome da loja"]);
      const roles = [
        { name: pool[0], imp: ri(7, 9), esf: ri(1, 3), win: true },
        { name: pool[1], imp: ri(8, 10), esf: ri(7, 9) },
        { name: pool[2], imp: ri(1, 3), esf: ri(1, 2) },
        { name: pool[3], imp: ri(1, 3), esf: ri(7, 9) },
      ];
      const order = shuffled(roles);
      const list = order.map((x) => `${x.name} (impacto ${x.imp}, esforço ${x.esf})`).join("; ");
      return choice(
        `Notas de 1 a 10 (números de exemplo): ${list}. Pela matriz impacto x esforço, o que fazer <b>primeiro</b>?`,
        order.map((x) => x.name), order.findIndex((x) => x.win),
        `Impacto alto com esforço baixo é o que se faz já. Projeto de impacto alto e esforço alto entra no planejamento; impacto baixo fica por último.`);
    },

    /* onde entra o próximo R$ 1.000 de Ads */
    adsonde() {
      const names = shuffled(["Fone BT", "Capa de celular", "Cabo USB", "Suporte veicular", "Carregador turbo", "Película 3D"]);
      const eq = [4, 5, 6, 8];
      const a = { n: names[0], roas: ri(8, 11), eq: 4, est: ri(3, 6), t: "trap1" };
      const b = { n: names[1], roas: ri(6, 7), eq: 4, est: ri(35, 60), t: "win" };
      const c = { n: names[2], roas: 4.2, eq: 4, est: ri(30, 50), t: "meh" };
      const d = { n: names[3], roas: ri(7, 8), eq: 10, est: ri(30, 50), t: "trap2" };
      void eq;
      const order = shuffled([a, b, c, d]);
      const list = order.map((x) => `${x.n}: ROAS <b>${fmt(x.roas, x.roas % 1 ? 1 : 0)}x</b>, equilíbrio <b>${x.eq}x</b>, estoque para <b>${x.est} dias</b>`).join("; ");
      return choice(
        `Campanhas (números de exemplo): ${list}. Onde entra o <b>próximo R$ 1.000</b> de Ads?`,
        order.map((x) => x.n), order.indexOf(b),
        `${b.n} tem ROAS bem acima do equilíbrio e estoque de sobra. ${a.n} tem o ROAS mais alto, mas só ${a.est} dias de estoque: o Ads acelera a ruptura. ${d.n} está abaixo do próprio equilíbrio, e ${c.n} só empata.`);
    },

    /* CFOP: dentro ou fora do estado */
    cfop() {
      const UF = ["SP", "MG", "RJ", "PR", "SC", "BA", "RS", "GO"];
      const o = pick(UF);
      const same = ri(0, 1);
      const d = same ? o : pick(UF.filter((x) => x !== o));
      const OPT = ["CFOP 5.102 (venda dentro do estado)", "CFOP 6.102 (venda para outro estado)", "CFOP 7.102 (venda para o exterior)", "CFOP 1.102 (compra dentro do estado)"];
      return choice(
        `A loja fica em <b>${o}</b> e vende uma mercadoria <b>comprada de terceiros para revenda</b> para um cliente em <b>${d}</b>. Qual é o CFOP da <b>nota de venda</b>?`,
        OPT, same ? 0 : 1,
        same ? `Origem e destino são o mesmo estado (${o}): venda dentro do estado começa com 5. Mercadoria de terceiros: <b>5.102</b>.` : `Origem ${o} e destino ${d} são estados diferentes: venda para outro estado começa com 6. Mercadoria de terceiros: <b>6.102</b>. Em caso de dúvida, quem confirma é o contador.`);
    },
  };

  Object.assign(M.sim.GEN, GEN);
  void h;
})();

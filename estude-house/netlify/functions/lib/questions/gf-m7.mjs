// Banco de questões do módulo 7 (Preço e financeiro). Números de conta são fictícios (exemplo).
export default [
  { id: "gf-m7-01", module: "gf-m7", topic: "Faturamento x lucro",
    q: "O seller comemora: “fechei o mês com R$ 80 mil vendidos, tô lucrando muito”. Qual é a melhor resposta?",
    options: [
      "Parabéns, R$ 80 mil de vendas é o lucro, desde que o Ads tenha sido pago no mês",
      "Parabéns. O lucro é o faturamento menos só o custo do produto, o resto não conta",
      "Parabéns pelo volume. Agora vamos abrir produto, taxas, frete, imposto e Ads pra ver quanto sobrou",
      "Parabéns. Melhor esperar o próximo repasse, porque só ele diz se houve lucro de verdade"
    ],
    answer: [2],
    why: "Faturamento é o que entrou. O lucro vem depois de descontar produto, comissão, tarifa, frete, imposto e Ads." },
  { id: "gf-m7-02", module: "gf-m7", topic: "Anatomia do preço",
    q: "Quais itens saem do preço de venda na hora de calcular a sobra? Marque todas as corretas.",
    options: [
      "Comissão e tarifa fixa cobradas pelo marketplace",
      "Frete que o seller paga pela entrega do pedido",
      "Provisão para devolução, um % reservado pra venda que volta",
      "O faturamento do mês, que é somado ao preço de cada item",
      "A meta de vendas, que define o preço de cada item"
    ],
    answer: [0,1,2],
    why: "Comissão, tarifa fixa, frete e a provisão de devolução saem do preço. Faturamento e meta de vendas não são custos do produto." },
  { id: "gf-m7-03", module: "gf-m7", topic: "Margem do produto",
    q: "Um produto vende a R$ 150 (números de exemplo). Produto R$ 60, comissão de 15%, tarifa fixa de R$ 6, frete de R$ 18, imposto de 6%, Ads de 8% e embalagem de R$ 3. Qual é a margem?",
    options: [
      "13%: a sobra de R$ 19,50 dividida pelo preço de R$ 150",
      "60%: só o produto sai do preço, e sobram R$ 90 dos R$ 150",
      "71%: só comissão, imposto e Ads saem do preço de venda",
      "58%: os custos em reais somam R$ 87 sobre os R$ 150"
    ],
    answer: [0],
    why: "Comissão 22,50 + imposto 9 + Ads 12 = 43,50. Em reais: 60 + 6 + 18 + 3 = 87. Sobra = 150 − 130,50 = 19,50, ou 13% do preço." },
  { id: "gf-m7-04", module: "gf-m7", topic: "Margem de contribuição",
    q: "Preço de R$ 90 e custos variáveis (produto, comissão, frete, imposto, Ads) de R$ 72 (números de exemplo). Qual é a margem de contribuição?",
    options: [
      "R$ 72 por unidade, que são 80% do preço",
      "R$ 18 por unidade, que são 25% do preço",
      "R$ 162 por unidade, que são 180% do preço",
      "R$ 18 por unidade, que são 20% do preço"
    ],
    answer: [3],
    why: "90 − 72 = R$ 18. Em %, 18 ÷ 90 = 20%. Dividir pelo custo (72) daria 25%, mas a margem é sempre sobre o preço." },
  { id: "gf-m7-05", module: "gf-m7", topic: "Ponto de equilíbrio",
    q: "Custos fixos de R$ 3.000 por mês e margem de contribuição de R$ 15 por unidade (números de exemplo). Quantas unidades por mês empatam?",
    options: [
      "45.000 unidades, porque 3.000 × 15 = 45.000",
      "200 unidades, porque 3.000 ÷ 15 = 200",
      "2.985 unidades, porque 3.000 − 15 = 2.985",
      "Não dá pra saber sem o preço de venda do produto"
    ],
    answer: [1],
    why: "Ponto de equilíbrio = fixos ÷ margem de contribuição por unidade = 3.000 ÷ 15 = 200 unidades." },
  { id: "gf-m7-06", module: "gf-m7", topic: "Margem negativa",
    q: "O produto do seller tem margem de contribuição negativa de R$ 3 por unidade, e ele quer dobrar o Ads para vender mais. Qual é a melhor resposta?",
    options: [
      "Antes de vender mais, ajustar preço ou custos até a margem ficar positiva",
      "Dobrar o Ads, porque mais volume dilui a margem negativa de cada unidade vendida",
      "Dobrar o Ads só nos produtos de maior faturamento da conta toda",
      "Esperar o fim do mês, já que o DRE resolve a margem negativa sozinho"
    ],
    answer: [0],
    why: "Com margem negativa, cada venda aumenta a perda e o Ads piora a conta. Primeiro se corrige preço ou custo, depois se pensa em volume." },
  { id: "gf-m7-07", module: "gf-m7", topic: "Custos fixos",
    q: "Quais destes são custos fixos do seller? Marque todas as corretas.",
    options: [
      "Aluguel do escritório ou do galpão",
      "Salário do analista que cuida dos pedidos",
      "Assinatura mensal do sistema de gestão",
      "Comissão cobrada pelo marketplace em cada venda",
      "Frete pago em cada pedido despachado"
    ],
    answer: [0,1,2],
    why: "Fixos são os custos que se repetem todo mês, mesmo sem vender. Comissão e frete mudam a cada venda, então são variáveis." },
  { id: "gf-m7-08", module: "gf-m7", topic: "Preço mínimo",
    q: "Custos em reais de R$ 50 (produto, tarifa, frete, embalagem), custos em % de 25% e margem alvo de 15% (números de exemplo). Qual é o preço mínimo?",
    options: [
      "R$ 66,67, porque 50 ÷ (1 − 0,25) ignora a margem alvo",
      "R$ 58,82, porque 50 ÷ (1 − 0,15) ignora os custos em %",
      "R$ 83,33, porque 50 ÷ (1 − 0,25 − 0,15) = 83,33",
      "R$ 70,00, porque 50 × 1,40 usa um acréscimo fixo de 40%"
    ],
    answer: [2],
    why: "50 ÷ 0,60 = R$ 83,33. Prova: 25% de 83,33 = 20,83 e 83,33 − 20,83 − 50 = 12,50, que é 15% do preço." },
  { id: "gf-m7-09", module: "gf-m7", topic: "Piso e concorrente",
    q: "O concorrente vende o mesmo produto a R$ 95 e o seu piso é R$ 100 (números de exemplo). O seller pede pra igualar. Qual é a melhor resposta?",
    options: [
      "Igualar, porque o preço do concorrente vira o novo piso do seller",
      "Não igualar: abaixo do piso, a margem alvo fura de vez",
      "Igualar e cortar o Ads em 50% pra compensar a margem perdida",
      "Igualar por 30 dias e só então recalcular o piso com os dados do mês"
    ],
    answer: [1],
    why: "O piso vem dos seus custos, não do preço do outro. Vender abaixo dele entrega menos que a margem alvo, e o concorrente pode ter custo diferente." },
  { id: "gf-m7-10", module: "gf-m7", topic: "Piso, teto e alvo",
    q: "Quais afirmações sobre piso, teto e preço-alvo estão certas? Marque todas.",
    options: [
      "O piso é o menor preço que ainda entrega a margem alvo",
      "O teto vem do quanto o mercado aceita pagar",
      "A promoção fica entre o preço-alvo e o piso",
      "O preço-alvo deve ficar sempre abaixo do piso",
      "O piso depende do preço do concorrente, não dos custos"
    ],
    answer: [0,1,2],
    why: "O piso vem dos custos, o teto vem do mercado e a promoção mora entre o alvo e o piso. O alvo nunca fica abaixo do piso." },
  { id: "gf-m7-11", module: "gf-m7", topic: "Efeito do frete no piso",
    q: "No cálculo do preço mínimo o divisor é 0,60 (números de exemplo). O frete sobe R$ 3 por pedido. Quanto sobe o piso?",
    options: [
      "R$ 3,00, o mesmo valor que o frete subiu",
      "R$ 1,80, porque 3 × 0,60 = 1,80",
      "R$ 7,50, porque 3 ÷ 0,40 = 7,50",
      "R$ 5,00, porque 3 ÷ 0,60 = 5"
    ],
    answer: [3],
    why: "O piso é custos em reais ÷ 0,60. Um custo de R$ 3 a mais sobe o piso em 3 ÷ 0,60 = R$ 5, mais que o próprio aumento." },
  { id: "gf-m7-12", module: "gf-m7", topic: "Comparar canais",
    q: "Qual afirmação sobre preço por canal está ERRADA?",
    options: [
      "Comissão baixa garante margem alta, pois os demais custos não mudam de canal",
      "Cada canal pode ter um preço mínimo diferente para a mesma margem alvo",
      "Loja própria pode ter tráfego pago caro, que reduz a sobra da venda",
      "Compare canais pela sobra por venda, depois de taxas, frete e Ads"
    ],
    answer: [0],
    why: "Frete, tarifa e Ads mudam de canal para canal. Comissão baixa pode vir com tráfego ou frete caros, então se compara a sobra." },
  { id: "gf-m7-13", module: "gf-m7", topic: "Desconto de atacado",
    q: "Preço R$ 80, custos em reais de R$ 36 e custos em % de 25% (números de exemplo). Com 10% de desconto no atacado, que aumento de vendas empata o lucro?",
    options: [
      "10% a mais, porque o aumento de vendas é igual ao desconto dado",
      "25% a mais, porque a sobra caiu 25% com o desconto",
      "Cerca de 33% a mais, porque a sobra cai de R$ 24 para R$ 18",
      "75% a mais, porque 18 ÷ 24 dá 0,75 de aumento"
    ],
    answer: [2],
    why: "A R$ 80: 80 − 36 − 20 = 24. A R$ 72: 72 − 36 − 18 = 18. Para empatar, 24 ÷ 18 = 1,33, ou seja, vender 33% a mais." },
  { id: "gf-m7-14", module: "gf-m7", topic: "Quando o atacado vale",
    q: "Em quais situações o desconto de atacado tende a valer a pena? Marque todas as corretas.",
    options: [
      "Há estoque parado prendendo o caixa do seller",
      "O frete por unidade cai no pacote e a sobra segue positiva",
      "O cliente tende a voltar e comprar de novo",
      "A sobra por unidade já está perto de zero",
      "O concorrente dá desconto, mesmo sem ninguém fazer a conta"
    ],
    answer: [0,1,2],
    why: "Atacado funciona com sobra positiva e um motivo claro: girar estoque, diluir frete ou fidelizar. Sobra perto de zero ou copiar o concorrente sem conta não são motivos." },
  { id: "gf-m7-15", module: "gf-m7", topic: "Atacado com sobra zero",
    q: "Preço R$ 100, custos em reais de R$ 60 e custos em % de 25% (números de exemplo). O cliente pede 20% de desconto no atacado. O que você responde?",
    options: [
      "Aceitar, porque comprar em quantidade sempre compensa a sobra menor",
      "Recusar ou renegociar: a R$ 80 a sobra zera, e nenhum volume compensa",
      "Aceitar se o cliente comprar o triplo, porque o volume grande cobre a sobra",
      "Aceitar e reduzir o Ads em 20% para equilibrar o lucro perdido"
    ],
    answer: [1],
    why: "A R$ 80: 80 − 60 − 20 = 0. Com sobra zero por unidade, o lucro total é zero em qualquer volume." },
  { id: "gf-m7-16", module: "gf-m7", topic: "ROAS de equilíbrio",
    q: "A margem antes do Ads de um produto é 40% (números de exemplo). Qual é o ROAS de equilíbrio?",
    options: [
      "40x, porque o ROAS é o mesmo número da margem",
      "0,4x, porque o ROAS é a margem escrita em decimal",
      "1,5x, porque (100 − 40) ÷ 40 dá a razão entre custos e margem",
      "2,5x: 1 ÷ 0,40, e o ACOS de equilíbrio fica em 40%"
    ],
    answer: [3],
    why: "ROAS de equilíbrio = 1 ÷ 0,40 = 2,5. Com R$ 2.500 vendidos, a margem de R$ 1.000 paga R$ 1.000 de Ads." },
  { id: "gf-m7-17", module: "gf-m7", topic: "Resultado do Ads",
    q: "Gastou R$ 2.000 em Ads com ROAS 3. A margem antes do Ads é 25% (números de exemplo). Qual foi o resultado do Ads?",
    options: [
      "Prejuízo de R$ 500: R$ 1.500 de margem menos R$ 2.000 de Ads",
      "Lucro de R$ 4.000: R$ 6.000 de vendas menos R$ 2.000 de Ads",
      "Lucro de R$ 1.500, que é toda a margem das vendas feitas com o Ads",
      "Empate, porque o ROAS 3 fica perto do equilíbrio de 4"
    ],
    answer: [0],
    why: "Vendas = 3 × 2.000 = 6.000. Margem = 25% de 6.000 = 1.500. Resultado = 1.500 − 2.000 = −R$ 500. O equilíbrio seria 4x." },
  { id: "gf-m7-18", module: "gf-m7", topic: "ROAS e margem",
    q: "Dois produtos têm ROAS de 4x. Um tem 50% de margem antes do Ads e o outro 20% (números de exemplo). O que você conclui?",
    options: [
      "Os dois lucram, porque 4x é um ROAS alto em qualquer produto",
      "Os dois perdem, porque 4x fica abaixo do equilíbrio de 5x",
      "O de 50% lucra (equilíbrio 2x) e o de 20% perde (equilíbrio 5x)",
      "Só o de 20% lucra, porque exige o equilíbrio mais alto"
    ],
    answer: [2],
    why: "Equilíbrio = 1 ÷ margem: 2x para 50% e 5x para 20%. Com ROAS 4x, o primeiro está acima e lucra; o segundo está abaixo e perde." },
  { id: "gf-m7-19", module: "gf-m7", topic: "O que muda o equilíbrio",
    q: "O que muda o ROAS de equilíbrio de um produto? Marque todas as corretas.",
    options: [
      "Subir o custo do produto, que reduz a margem",
      "Baixar o preço sem baixar os custos",
      "Mudança na comissão ou no imposto da venda",
      "O ROAS atual das campanhas subir",
      "O número de cliques recebidos na semana"
    ],
    answer: [0,1,2],
    why: "O equilíbrio é 1 ÷ margem antes do Ads. Tudo que muda a margem muda o equilíbrio. O ROAS atual e os cliques só mostram o desempenho." },
  { id: "gf-m7-20", module: "gf-m7", topic: "DRE simplificado",
    q: "Vendas de R$ 20.000, devoluções de R$ 600, impostos de R$ 1.200, comissão e frete de R$ 5.400, produto de R$ 8.000 e Ads de R$ 1.000. Qual é a sobra? (exemplo)",
    options: [
      "R$ 4.800, porque o Ads ficou de fora do cálculo",
      "R$ 3.800, porque cada linha é descontada das vendas",
      "R$ 18.200, porque só devoluções e impostos foram descontados",
      "R$ 16.200, que é a soma dos custos, não a sobra"
    ],
    answer: [1],
    why: "20.000 − 600 − 1.200 − 5.400 − 8.000 − 1.000 = R$ 3.800. Os custos somam R$ 16.200." },
  { id: "gf-m7-21", module: "gf-m7", topic: "DRE por SKU",
    q: "O DRE da conta mostra lucro, mas o DRE por SKU mostra um SKU perdendo dinheiro todo mês. O que fazer primeiro?",
    options: [
      "Nada, porque o resultado da conta como um todo já está positivo",
      "Pausar a conta inteira até o SKU deixar de perder",
      "Aumentar o Ads do SKU, porque mais volume cobre o prejuízo",
      "Analisar preço, custo e Ads do SKU e decidir ajuste ou saída"
    ],
    answer: [3],
    why: "O lucro da conta pode esconder um SKU que perde. O primeiro passo é entender a causa dele (preço, custo, Ads) e decidir a ação." },
  { id: "gf-m7-22", module: "gf-m7", topic: "Antecipação do repasse",
    q: "Repasse de R$ 8.000 com lucro de R$ 1.600 no lote. Antecipar custa 2,5% (números de exemplo). Qual é o lucro depois da taxa?",
    options: [
      "R$ 1.400: a taxa de R$ 200 sai do lucro do lote",
      "R$ 1.560: 2,5% de R$ 1.600 são R$ 40 de taxa",
      "R$ 1.600: a taxa de antecipação não afeta o lucro",
      "R$ 7.800: o repasse menos a taxa vira o lucro"
    ],
    answer: [0],
    why: "A taxa incide sobre o repasse: 2,5% de 8.000 = R$ 200. Lucro depois = 1.600 − 200 = R$ 1.400." },
  { id: "gf-m7-23", module: "gf-m7", topic: "Promoção vale a pena",
    q: "Preço-alvo R$ 120 com sobra de R$ 30. Uma promoção de 10% leva o preço a R$ 108 e a sobra a R$ 21 (números de exemplo). Quanto a venda precisa crescer pra manter o lucro?",
    options: [
      "10% a mais, porque o aumento de vendas é igual ao desconto",
      "30% a mais, porque a sobra antiga era de R$ 30",
      "Cerca de 43% a mais, porque 30 ÷ 21 = 1,43",
      "70% a mais, porque 21 ÷ 30 dá 0,70 de aumento"
    ],
    answer: [2],
    why: "Lucro antes = 30 por unidade; depois = 21. Pra empatar, 30 ÷ 21 = 1,43: vender 43% a mais." },
  { id: "gf-m7-24", module: "gf-m7", topic: "DRE, caixa e giro",
    q: "Quais afirmações sobre DRE, caixa e capital de giro estão certas? Marque todas.",
    options: [
      "Venda aprovada ainda não é dinheiro na conta",
      "Estoque parado prende dinheiro e custa caixa",
      "Antecipar o repasse tem um custo que sai da margem",
      "Lucro no DRE garante dinheiro no caixa no mesmo dia",
      "Capital de giro é o lucro que sobra no fim do mês"
    ],
    answer: [0,1,2],
    why: "O dinheiro só entra no repasse, estoque parado prende caixa e antecipar custa. Capital de giro é o dinheiro que sustenta a operação até o repasse, não o lucro." }
];

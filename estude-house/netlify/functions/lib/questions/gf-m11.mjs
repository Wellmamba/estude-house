const M = "gf-m11";
export default [
  /* ---------- Aula 1: Fundamentos do Mercado Ads ---------- */
  {
    id: "gf-m11-01", module: M, topic: "Product Ads e CPC",
    q: "Como o Product Ads cobra o anunciante, segundo a aula?",
    options: [
      "Por impressão: você paga cada vez que o anúncio aparece, mesmo que ninguém clique nele",
      "Por venda: você só paga quando o cliente fecha a compra, e o valor sai direto da comissão",
      "Por clique: você paga o CPC cada vez que alguém clica no anúncio, e sem clique não há cobrança",
      "Por mês: você paga uma mensalidade fixa e o anúncio fica no topo da busca durante o período",
    ],
    answer: [2],
    why: "O Product Ads cobra por clique, e o valor de cada clique é o CPC (custo por clique). Se o anúncio aparece e ninguém clica, não há cobrança.",
  },
  {
    id: "gf-m11-02", module: M, topic: "Automática ou manual",
    q: "A assessora vai começar o ads de uma conta que ainda não conhece bem e quer testar rápido, com pouco trabalho. O que combina mais?",
    options: [
      "Campanha automática: a plataforma escolhe onde aparecer, dá menos trabalho e serve pra começar e testar",
      "Campanha manual em todos os produtos: dá mais controle, e controle é o que mais importa em conta nova",
      "Automática, mas só depois de ajustar cada palavra e cada lance à mão, senão ela não funciona direito",
      "Manual com lance máximo em tudo, porque lance alto garante a posição e dispensa o trabalho de testar",
    ],
    answer: [0],
    why: "Na campanha automática a plataforma escolhe onde o anúncio aparece. Você tem menos controle, mas também menos trabalho, e isso ajuda a começar e testar.",
  },
  {
    id: "gf-m11-03", module: M, topic: "Leilão e relevância",
    q: "Marque todas as afirmações corretas sobre o Product Ads.",
    options: [
      "O leilão considera o lance e também a relevância do anúncio",
      "O anunciante paga por clique, e esse valor se chama CPC",
      "A automática dá menos controle e menos trabalho que a manual",
      "Com um lance alto, qualquer anúncio ganha o topo da busca",
      "O ads conserta um anúncio fraco e faz ele vender mais",
    ],
    answer: [0, 1, 2],
    why: "O leilão pesa lance e relevância, o pagamento é por clique (CPC) e a automática troca controle por menos trabalho. Lance alto não salva anúncio fraco, e ads não conserta a base.",
  },
  {
    id: "gf-m11-04", module: M, topic: "Custo de ads por venda",
    q: "Um anúncio teve 250 cliques com CPC de R$ 0,40 e converteu 2% dos cliques em venda (números de exemplo). Quanto o ads custou por venda?",
    options: [
      "R$ 0,40: o CPC já é o custo de cada venda",
      "R$ 50,00: R$ 100 de investimento ÷ 2 vendas",
      "R$ 2,00: R$ 100 de investimento ÷ 50 vendas",
      "R$ 20,00: R$ 100 de investimento ÷ 5 vendas",
    ],
    answer: [3],
    why: "Investimento: 250 x R$ 0,40 = R$ 100. Vendas: 250 x 2% = 5. Custo de ads por venda: R$ 100 ÷ 5 = R$ 20,00.",
  },

  /* ---------- Aula 2: Métricas ---------- */
  {
    id: "gf-m11-05", module: M, topic: "ACOS e ROAS",
    q: "Ads de R$ 150 geraram R$ 750 em vendas com ads (números de exemplo). Quais são o ACOS e o ROAS?",
    options: [
      "ACOS de 5x e ROAS de 20%: o ACOS é a venda dividida pelo ads",
      "ACOS de 20% (150 ÷ 750) e ROAS de 5x (750 ÷ 150)",
      "ACOS de 500% e ROAS de 0,2x: os dois saem de 750 ÷ 150",
      "ACOS de 80% e ROAS de 1,25x: os dois saem de 600 ÷ 750",
    ],
    answer: [1],
    why: "ACOS é ads ÷ vendas com ads: 150 ÷ 750 = 20%. ROAS é o inverso: 750 ÷ 150 = 5x. Os dois contam a mesma história de jeitos diferentes.",
  },
  {
    id: "gf-m11-06", module: M, topic: "TACOS",
    q: "A conta vendeu R$ 8.000 no mês, sendo R$ 2.000 com ads, e investiu R$ 400 em ads (números de exemplo). Qual é o TACOS e o que ele mostra?",
    options: [
      "5%: R$ 400 ÷ R$ 8.000, o peso do ads sobre as vendas da conta inteira",
      "20%: R$ 400 ÷ R$ 2.000, o peso do ads sobre as vendas vindas dos anúncios",
      "25%: R$ 2.000 ÷ R$ 8.000, a parte das vendas totais que veio dos anúncios",
      "20x: R$ 8.000 ÷ R$ 400, quanto a conta toda vende para cada real de ads",
    ],
    answer: [0],
    why: "TACOS é o ads dividido pelas vendas totais: 400 ÷ 8.000 = 5%. Os 20% seriam o ACOS, e 25% é só a fatia das vendas com ads.",
  },
  {
    id: "gf-m11-07", module: M, topic: "ROAS bom que dá prejuízo",
    q: "O seller comemora: “meu ROAS é 3x, tá ótimo!”. A margem do produto, antes do ads, é 30% (números de exemplo). O que você responde?",
    options: [
      "3x é ótimo: acima de 2x o ads já se paga sozinho e o resultado fica positivo em qualquer margem",
      "O piso é 3x, igual ao ROAS atual, então a campanha está no empate exato e não há o que ajustar",
      "O piso é 3,3x (1 ÷ 0,30): com 3x, cada R$ 1.000 de ads gera R$ 900 de margem e perde R$ 100",
      "O ROAS não diz nada sobre lucro; só o TACOS mostra se a campanha deu prejuízo ou lucro",
    ],
    answer: [2],
    why: "O ROAS de equilíbrio é 1 ÷ 0,30, cerca de 3,3x. Com 3x, R$ 1.000 de ads geram R$ 3.000 de vendas, R$ 900 de margem e um resultado de - R$ 100.",
  },
  {
    id: "gf-m11-08", module: M, topic: "Leitura das métricas",
    q: "Marque todas as afirmações corretas sobre as métricas de ads.",
    options: [
      "ROAS é o que se vende com ads dividido pelo que se gastou",
      "O TACOS divide o ads pelas vendas totais, com ads e sem ads",
      "O ACOS de equilíbrio é igual à margem de contribuição",
      "O CTR é a taxa de conversão: vendas divididas por cliques",
      "Venda orgânica é a que a plataforma credita ao clique pago",
    ],
    answer: [0, 1, 2],
    why: "ROAS é vendas com ads ÷ ads, TACOS divide pelo total da conta e o ACOS de equilíbrio é a própria margem. CTR é cliques ÷ vezes que o anúncio apareceu, e orgânica é a venda sem clique pago.",
  },
  {
    id: "gf-m11-09", module: M, topic: "CTR, CVR e atribuição",
    q: "Qual afirmação sobre CTR, CVR e vendas atribuídas está ERRADA?",
    options: [
      "CTR é a taxa de cliques: cliques divididos por quantas vezes o anúncio apareceu",
      "CVR é a taxa de cliques: mede quantas pessoas que viram o anúncio decidiram clicar",
      "Venda atribuída é a que a plataforma credita ao anúncio depois que a pessoa clicou",
      "CVR é a taxa de conversão: vendas divididas pelo número de cliques no anúncio",
    ],
    answer: [1],
    why: "CVR é a taxa de conversão (vendas ÷ cliques), não a taxa de cliques. Quem mede quantos viram e clicaram é o CTR.",
  },

  /* ---------- Aula 3: Estrutura e otimização ---------- */
  {
    id: "gf-m11-10", module: M, topic: "Estrutura por curva ABC",
    q: "Numa conta, dois produtos somam 82% do faturamento e 14 produtos pequenos somam 5% (números de exemplo). Como organizar o ads?",
    options: [
      "Juntar tudo numa campanha só, porque a média do ROAS já mostra o resultado da conta inteira",
      "Dar a mesma verba para cada produto, pra os 16 terem a mesma chance de vender no mês",
      "Pôr a maior parte da verba nos 14 pequenos, que são os que têm mais espaço pra crescer",
      "Separar os dois (curva A) dos 14 (curva C) e pôr a maior parte da verba na curva A",
    ],
    answer: [3],
    why: "Os dois produtos são a curva A e os 14 pequenos são a curva C. Campanhas separadas deixam cada grupo ter a sua meta, com a verba principal onde está o faturamento.",
  },
  {
    id: "gf-m11-11", module: M, topic: "Clique sem venda",
    q: "Uma campanha gastou R$ 400 na semana, teve muitos cliques e nenhuma venda. Qual é o primeiro passo, segundo a aula?",
    options: [
      "Conferir preço, fotos e título antes de gastar mais, porque o clique chegou e a venda não fechou",
      "Subir o orçamento da campanha, porque mais cliques acabam gerando venda com o passar do tempo",
      "Trocar pra um ROAS objetivo mais baixo, porque a meta alta é a causa de os cliques não virarem venda",
      "Pausar todas as campanhas da conta, porque um produto sem venda mostra que o ads não funciona",
    ],
    answer: [0],
    why: "Clique sem venda aponta para a base do anúncio: preço, fotos, título, estoque. A regra da aula é arrumar isso antes de pôr mais dinheiro.",
  },
  {
    id: "gf-m11-12", module: M, topic: "Regras se X, então Y",
    q: "Marque todas as regras “se X, então Y” coerentes com a aula.",
    options: [
      "Se o ROAS ficou abaixo do piso com cliques suficientes, então pausar ou baixar o lance e revisar o anúncio",
      "Se o ROAS está acima da meta e o estoque aguenta, então subir o orçamento aos poucos",
      "Se o TACOS sobe e as vendas totais não, então investigar se o ads só troca venda grátis por paga",
      "Se o ROAS ficou abaixo do piso, então subir o orçamento pra o volume compensar a perda",
      "Se o produto está sem estoque, então manter o ads ligado pra não perder posição",
    ],
    answer: [0, 1, 2],
    why: "As três primeiras seguem a lógica da aula: cortar o que perde, escalar o que paga com estoque e checar canibalização. Gastar mais abaixo do piso ou anunciar sem estoque só queima verba.",
  },
  {
    id: "gf-m11-13", module: M, topic: "Resultado abaixo do piso",
    q: "A margem é 20%, então o piso é 5x. Uma campanha com ROAS de 4,2x e R$ 1.000 de ads dá qual resultado (números de exemplo)?",
    options: [
      "+ R$ 3.200,00: R$ 4.200 de vendas com ads, menos R$ 1.000 de ads",
      "- R$ 160,00: R$ 4.200 x 20% = R$ 840 de margem, menos R$ 1.000 de ads",
      "+ R$ 840,00: R$ 4.200 x 20% de margem, sem descontar o ads do resultado",
      "- R$ 840,00: a margem toda perdida, porque o ROAS ficou abaixo do piso",
    ],
    answer: [1],
    why: "Vendas: 1.000 x 4,2 = R$ 4.200. Margem de 20%: R$ 840. Descontando os R$ 1.000 de ads, o resultado é - R$ 160. Abaixo do piso, a conta fecha no vermelho.",
  },

  /* ---------- Aula 4: Brand Ads, Display e sazonalidade ---------- */
  {
    id: "gf-m11-14", module: M, topic: "Remarketing e Display",
    q: "Muita gente vê o anúncio de um produto, olha o preço e sai sem comprar. Qual recurso ajuda a trazer essa pessoa de volta?",
    options: [
      "Brand Ads: destacar a marca na busca pra quem digita o nome dela no campo de pesquisa",
      "Campanha manual: trocar os lances pra quem não comprou na primeira visita ao anúncio",
      "Remarketing: mostrar o anúncio de novo pra quem já viu ou visitou o produto e não comprou",
      "Automática: a plataforma traz a pessoa de volta sozinha, sem precisar de nenhum formato novo",
    ],
    answer: [2],
    why: "Remarketing é mostrar o anúncio de novo para quem já viu ou visitou o produto e não comprou. Brand Ads defende a marca na busca, e o tipo de campanha não resolve o retorno do visitante.",
  },
  {
    id: "gf-m11-15", module: M, topic: "Data comemorativa",
    q: "Na semana de uma data comemorativa o CPC subiu e o ROAS caiu abaixo do piso. O que a aula manda ter feito antes do pico?",
    options: [
      "Deixar o orçamento aberto, pra plataforma decidir quanto gastar a cada hora do pico",
      "Pausar todo o ads na semana da data, porque o leilão fica caro demais pra qualquer anúncio",
      "Subir o ROAS objetivo pro dobro em todas as campanhas, sem olhar margem nem estoque",
      "Definir teto de orçamento, ROAS mínimo e produtos que entram, com estoque e preço fechados",
    ],
    answer: [3],
    why: "A aula manda decidir antes do pico: teto, ROAS mínimo e quais produtos entram, com preço e estoque prontos. Sem regra escrita, a verba escorre no calor da data.",
  },
  {
    id: "gf-m11-16", module: M, topic: "Canibalização do orgânico",
    q: "Antes do ads a loja vendia 80 unidades por mês. Depois: 50 com ads e 45 orgânicas, e o ads custou R$ 450 (números de exemplo). Quanto custou cada venda extra?",
    options: [
      "R$ 30,00: R$ 450 ÷ 15 vendas extras (50 + 45 - 80)",
      "R$ 9,00: R$ 450 ÷ 50 vendas atribuídas ao ads",
      "R$ 4,74: R$ 450 ÷ 95 vendas totais do mês",
      "R$ 10,00: R$ 450 ÷ 45 vendas orgânicas",
    ],
    answer: [0],
    why: "Vendas totais depois: 50 + 45 = 95. Venda extra: 95 - 80 = 15. Custo por venda extra: R$ 450 ÷ 15 = R$ 30. O painel mostra 50, mas só 15 são novas.",
  },
  {
    id: "gf-m11-17", module: M, topic: "Brand Ads, Display e canibalização",
    q: "Qual afirmação sobre Brand Ads, Display e canibalização está ERRADA?",
    options: [
      "Display mostra banner a um público, mesmo que a pessoa não esteja buscando o produto",
      "Brand Ads destaca a marca na busca pelo nome e ajuda a defender o espaço dela",
      "Para ver canibalização basta olhar as vendas com ads, sem comparar com as vendas totais",
      "Canibalização é quando o ads paga por uma venda que viria de graça de qualquer jeito",
    ],
    answer: [2],
    why: "Para achar canibalização é preciso olhar as vendas totais e o TACOS. Só as vendas com ads escondem o que o orgânico deixou de vender.",
  },

  /* ---------- Aula 5: Shopee Ads ---------- */
  {
    id: "gf-m11-18", module: M, topic: "GMV não é lucro",
    q: "A loja da Shopee aumentou o GMV em 40% com uma campanha automatizada, mas a sobra do mês caiu (números de exemplo). Qual leitura está certa?",
    options: [
      "GMV maior sempre indica lucro maior, então a queda da sobra deve ser erro na leitura do relatório",
      "GMV é faturamento, não lucro: a campanha vendeu mais, mas o ads e a margem comeram a sobra",
      "A campanha falhou, porque quem automatiza nunca consegue aumentar o GMV da loja de verdade",
      "A queda mostra que a loja precisa de mais verba, porque a sobra só sobe depois que o GMV dobra",
    ],
    answer: [1],
    why: "GMV é o valor vendido, antes dos custos. A automatizada pode vender mais e sobrar menos quando o ROAS fica perto do piso. O próximo passo é rever a meta de ROAS.",
  },
  {
    id: "gf-m11-19", module: M, topic: "Formatos do Shopee Ads",
    q: "Marque todos os formatos de Shopee Ads vistos na aula.",
    options: [
      "Busca de produto, que aparece pra quem procura por palavra-chave",
      "Busca de loja, que destaca a loja quando buscam pelo nome ou pela marca",
      "Descoberta, em áreas de sugestão pra quem está navegando",
      "Brand Ads, o formato de marca do Mercado Livre, que vale igual na Shopee",
      "Leilão de frete, que paga o envio do pedido pro cliente",
    ],
    answer: [0, 1, 2],
    why: "Os três formatos da aula são busca de produto, busca de loja e descoberta. Brand Ads é do Mercado Ads, e leilão de frete não é um formato de anúncio.",
  },
  {
    id: "gf-m11-20", module: M, topic: "Automatizar ou manter manual",
    q: "Uma loja nova na Shopee quer começar o ads, tem muitos produtos, pouco histórico e margem folgada (números de exemplo). O que faz mais sentido?",
    options: [
      "Montar tudo manual, palavra por palavra, porque a automatizada só funciona em loja grande",
      "Esperar a loja ter histórico, porque campanha automatizada sem histórico sempre gera prejuízo",
      "Ligar a automatizada sem teto de orçamento, porque o sistema escolhe o melhor gasto sozinho",
      "Começar com a automatizada, com teto de orçamento e meta de ROAS acima do piso, e acompanhar",
    ],
    answer: [3],
    why: "Loja nova, muitos produtos e margem folgada são o cenário da automatizada. Mesmo assim, ela precisa de teto de orçamento, meta de ROAS acima do piso e acompanhamento.",
  },
  {
    id: "gf-m11-21", module: M, topic: "Sobra depois do ads",
    q: "Campanha manual: ads de R$ 1.500, ROAS de 3,5x e margem de 30% antes do ads (números de exemplo). Qual é a sobra depois do ads?",
    options: [
      "R$ 75,00: R$ 5.250 x 30% = R$ 1.575, menos R$ 1.500 de ads",
      "R$ 1.575,00: R$ 5.250 x 30% de margem, sem descontar o ads",
      "R$ 3.750,00: R$ 5.250 de vendas menos R$ 1.500 de ads",
      "R$ 0,00: o ROAS de 3,5x só empata com o investimento",
    ],
    answer: [0],
    why: "Vendas: 1.500 x 3,5 = R$ 5.250. Margem de 30%: R$ 1.575. Menos R$ 1.500 de ads, sobram R$ 75. O piso é 1 ÷ 0,30, cerca de 3,3x, então 3,5x passa raspando.",
  },

  /* ---------- Aula 6: Verba entre canais ---------- */
  {
    id: "gf-m11-22", module: M, topic: "Retorno marginal",
    q: "O que é o retorno marginal do ads, segundo a aula?",
    options: [
      "O ROAS médio de toda a campanha desde o dia em que ela foi criada",
      "O lucro total da conta depois de pagar todas as campanhas do mês",
      "O ROAS do dinheiro novo: quanto rende o próximo real colocado na campanha",
      "O ROAS da campanha que mais vendeu no mês, usado como meta pras outras",
    ],
    answer: [2],
    why: "Retorno marginal é o ROAS do dinheiro novo. A média pode ser boa enquanto o último real investido já rende menos que o piso.",
  },
  {
    id: "gf-m11-23", module: M, topic: "Onde entra o próximo R$ 1.000",
    q: "Margem de 25% antes do ads (números de exemplo). O último R$ 1.000 rendeu 5x na curva A, 3,5x na curva B e 2x na Shopee. Onde entra o próximo R$ 1.000?",
    options: [
      "Na curva B: 3,5x é o mais perto do piso e tem mais espaço pra subir com verba nova",
      "Na curva A: 5x passa do piso de 4x e é a única frente em que o dinheiro novo deixa sobra",
      "Na Shopee: 2x mostra que o canal está pouco explorado e que a verba nova vai render mais",
      "Dividido nas três frentes, pra nenhuma ficar sem verba e a conta não depender de uma só",
    ],
    answer: [1],
    why: "O piso é 1 ÷ 0,25 = 4x. Só a curva A (5x) está acima dele. Na B e na Shopee, o real novo perde dinheiro, e dividir igual espalha o prejuízo.",
  },
  {
    id: "gf-m11-24", module: M, topic: "Defender a realocação",
    q: "Você move R$ 1.000 de uma campanha com ROAS de 3x pra outra com ROAS de 6x. A margem é 20% (números de exemplo). Qual é o ganho de mover o mil?",
    options: [
      "R$ 200,00: só o resultado da campanha de 6x depois do ads",
      "R$ 400,00: só o prejuízo que deixa de existir na campanha de 3x",
      "R$ 3.000,00: a diferença de vendas entre as duas campanhas",
      "R$ 600,00: o resultado passa de - R$ 400 para + R$ 200",
    ],
    answer: [3],
    why: "Com 3x: 3.000 x 20% = 600, menos 1.000 = - R$ 400. Com 6x: 6.000 x 20% = 1.200, menos 1.000 = + R$ 200. O ganho de mover o mil é 200 - (-400) = R$ 600.",
  },
];

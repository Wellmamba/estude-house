const M = "gf-m5";
export default [
  // ---- Aula 1: Anatomia do anúncio ----
  {
    id: "gf-m5-01", module: M, topic: "Anatomia do anúncio",
    q: "Quais itens fazem parte da anatomia de um anúncio, segundo a aula? Marque todas.",
    options: [
      "Título, que diz o que é o produto com as palavras que o cliente busca",
      "Ficha técnica, com os atributos como marca, modelo, cor e medidas",
      "Garantia, que informa o prazo de troca ou conserto do produto",
      "Cronograma de reposição do fornecedor que abastece o seller",
      "Tabela de comissão do marketplace usada no cálculo do preço",
    ],
    answer: [0, 1, 2],
    why: "Título, ficha técnica (atributos) e garantia são peças do anúncio, junto com fotos, descrição, preço, frete e variações. Reposição do fornecedor e tabela de comissão são assuntos de operação e de preço, não peças do anúncio.",
  },
  {
    id: "gf-m5-02", module: M, topic: "Anatomia do anúncio",
    q: "Um anúncio teve 2.000 visitas e 50 vendas (números de exemplo). Qual é a conversão?",
    options: [
      "25%, porque 50 ÷ 200 = 0,25 quando se ajusta a vírgula",
      "40%, porque 2.000 ÷ 50 = 40 vendas para cada visita",
      "2,5%, porque 50 vendas ÷ 2.000 visitas = 0,025",
      "5%, porque 50 × 2 ÷ 2.000 = 0,05 de venda por visita",
    ],
    answer: [2],
    why: "Conversão é vendas divididas por visitas: 50 ÷ 2.000 = 0,025, ou 2,5%. Inverter a divisão ou errar a vírgula dá resultados que não fazem sentido.",
  },
  {
    id: "gf-m5-03", module: M, topic: "Anatomia do anúncio",
    q: "Um anúncio tem ACOS de 40% e conversão de 1%. O seller quer dobrar o orçamento de Ads. O que você investiga antes?",
    options: [
      "O orçamento atual, porque conversão baixa sempre indica que falta verba",
      "O concorrente mais barato, porque só o preço explica conversão baixa",
      "O horário de exibição do Ads, porque a conversão depende só do horário",
      "As peças do anúncio, como foto, título, ficha e preço, que seguram a conversão",
    ],
    answer: [3],
    why: "ACOS alto com conversão baixa mostra que a visita chega e não compra. Antes de pôr mais dinheiro, revise as peças que convencem: fotos, título, ficha técnica, preço e prazo.",
  },
  {
    id: "gf-m5-04", module: M, topic: "Anatomia do anúncio",
    q: "Qual afirmação sobre as peças do anúncio está ERRADA?",
    options: [
      "A descrição serve para o que a foto não mostra, como medidas, uso e conteúdo da caixa",
      "A garantia deve informar só o que realmente vale para o produto vendido",
      "A ficha técnica reúne os atributos do produto, como marca, modelo e material",
      "A descrição deve repetir o título várias vezes para o anúncio aparecer mais",
    ],
    answer: [3],
    why: "Repetir o título na descrição não ajuda o cliente nem a busca. A descrição existe para responder dúvidas que as fotos e o título não resolvem, em frases curtas e claras.",
  },

  // ---- Aula 2: Conteúdo visual que converte ----
  {
    id: "gf-m5-05", module: M, topic: "Conteúdo visual",
    q: "Várias avaliações dizem 'não sabia o que vinha na caixa'. Qual imagem você acrescenta ao anúncio?",
    options: [
      "Uma foto dos itens do kit lado a lado, mostrando tudo o que vem na caixa",
      "Uma segunda foto principal com o produto em tamanho ainda maior",
      "Uma imagem com a frase 'melhor preço da categoria' em destaque",
      "Uma foto do produto com fundo colorido para chamar mais atenção",
    ],
    answer: [0],
    why: "A dúvida é sobre o conteúdo da embalagem, então a resposta é visual: uma imagem com todos os itens lado a lado. Frase de preço e fundo colorido não resolvem a dúvida do cliente.",
  },
  {
    id: "gf-m5-06", module: M, topic: "Conteúdo visual",
    q: "Quais itens são boas práticas para a foto principal? Marque todas.",
    options: [
      "Produto inteiro, grande e centralizado na imagem",
      "Fundo branco ou limpo, sem objetos que distraiam",
      "Nenhum selo ou texto por cima, conferindo a regra vigente",
      "Moldura colorida com a promoção do dia em destaque",
      "Várias fotos do produto montadas num só quadro",
    ],
    answer: [0, 1, 2],
    why: "A foto principal chama o clique mostrando o produto de forma clara e limpa, e as regras de imagem mudam, por isso vale conferir a vigente. Moldura de promoção e colagem poluem a miniatura.",
  },
  {
    id: "gf-m5-07", module: M, topic: "Conteúdo visual",
    q: "Uma foto principal teve 5.000 aparições e 100 cliques. A foto nova teve 5.000 aparições e 150 cliques (números de exemplo). Quanto subiu a taxa de clique?",
    options: [
      "50 pontos percentuais, porque os cliques subiram de 100 para 150",
      "1 ponto percentual, porque a taxa foi de 2% para 3%",
      "3 pontos percentuais, porque 150 ÷ 5.000 = 3 de aumento",
      "1,5 ponto percentual, porque 150 ÷ 100 = 1,5 de aumento",
    ],
    answer: [1],
    why: "A taxa de clique é cliques ÷ aparições: 100 ÷ 5.000 = 2% e 150 ÷ 5.000 = 3%. A diferença é 1 ponto percentual.",
  },
  {
    id: "gf-m5-08", module: M, topic: "Conteúdo visual",
    q: "Qual afirmação sobre testar imagens e ler avaliações está ERRADA?",
    options: [
      "Reclamações repetidas nas avaliações mostram qual imagem está faltando no anúncio",
      "Para saber se a foto principal funcionou, o ideal é trocar foto e título juntos",
      "O infográfico com medidas e benefícios ajuda a tirar dúvidas antes da compra",
      "Prova social inclui nota, avaliações e fotos de clientes que já compraram",
    ],
    answer: [1],
    why: "Mudar foto e título ao mesmo tempo impede saber quem trouxe o resultado. O teste certo troca uma coisa por vez e compara a taxa de clique por alguns dias.",
  },

  // ---- Aula 3: SEO de marketplace ----
  {
    id: "gf-m5-09", module: M, topic: "SEO de marketplace",
    q: "Qual busca mostra, de forma mais clara, que a pessoa está pronta para comprar?",
    options: [
      "'Como funciona uma garrafa térmica e por que ela mantém a temperatura'",
      "'Garrafa térmica 1 litro inox tampa rosca' com medida e material",
      "'Qual garrafa térmica é melhor' para comparar vários modelos e marcas",
      "'História da garrafa térmica' para entender de onde o produto veio",
    ],
    answer: [1],
    why: "A busca com medida e material mostra alguém que já sabe o que quer. As outras são de quem quer entender ou comparar, com intenção de compra menos clara.",
  },
  {
    id: "gf-m5-10", module: M, topic: "SEO de marketplace",
    q: "Quais destes são problemas num título de anúncio? Marque todas.",
    options: [
      "Palavras de enfeite como 'oferta' e 'barato' no lugar de características",
      "Copiar o título do concorrente sem conferir se o produto é igual",
      "Esconder o produto atrás de adjetivos, sem dizer o que ele é",
      "Começar pelo nome do produto na palavra mais buscada",
      "Incluir a medida quando o cliente costuma buscar por ela",
    ],
    answer: [0, 1, 2],
    why: "Enfeite, cópia sem entender a busca e adjetivos no lugar do produto atrapalham quem procura. Começar pelo produto e incluir a medida buscada são boas práticas.",
  },
  {
    id: "gf-m5-11", module: M, topic: "SEO de marketplace",
    q: "Um anúncio teve 20.000 aparições, 400 cliques e 20 vendas (números de exemplo). Quais são as taxas de clique e de conversão?",
    options: [
      "Clique de 5% (20 ÷ 400) e conversão de 2% (400 ÷ 20.000)",
      "Clique de 0,1% (20 ÷ 20.000) e conversão de 5% (20 ÷ 400)",
      "Clique de 2% (400 ÷ 20.000) e conversão de 0,1% (20 ÷ 20.000)",
      "Clique de 2% (400 ÷ 20.000) e conversão de 5% (20 ÷ 400)",
    ],
    answer: [3],
    why: "Clique é cliques ÷ aparições: 400 ÷ 20.000 = 2%. Conversão é vendas ÷ cliques: 20 ÷ 400 = 5%. A primeira taxa depende de título e foto; a segunda, de preço, ficha e fotos.",
  },
  {
    id: "gf-m5-12", module: M, topic: "SEO de marketplace",
    q: "Um anúncio tem 65% da ficha técnica preenchida e some quando o cliente filtra por cor e material. O que você faz?",
    options: [
      "Aumenta o Ads, porque o filtro só afeta anúncios que não investem",
      "Preenche os campos que faltam com dados verdadeiros do produto",
      "Troca a foto principal, porque o filtro é feito a partir da imagem",
      "Acrescenta cor e material no fim do título, mesmo sem ter conferido",
    ],
    answer: [1],
    why: "O filtro do cliente usa os campos da ficha técnica. Completar cor, material e demais atributos com dados verdadeiros ajuda o produto a aparecer nessas buscas.",
  },

  // ---- Aula 4: Tipos de anúncio no Mercado Livre ----
  {
    id: "gf-m5-13", module: M, topic: "Tipos de anúncio ML",
    q: "Qual afirmação sobre catálogo e anúncio próprio está ERRADA?",
    options: [
      "No catálogo, vários vendedores ofertam o mesmo produto numa página única",
      "No anúncio próprio, você escreve título, fotos e texto da sua página",
      "No catálogo, a venda se decide muito por preço, envio e reputação",
      "No catálogo, cada vendedor escreve seu título e suas fotos na página compartilhada",
    ],
    answer: [3],
    why: "Na página de catálogo, o conteúdo vem da ficha do produto, e os vendedores competem com ofertas. Quem escreve título, fotos e texto é o dono do anúncio próprio.",
  },
  {
    id: "gf-m5-14", module: M, topic: "Tipos de anúncio ML",
    q: "Custo do produto R$ 55, frete R$ 12, embalagem R$ 2. Comissão 16%, imposto 6%, Ads 3%, margem alvo 10% (números de exemplo). Qual é o preço mínimo?",
    options: [
      "R$ 92,00, pois 69 ÷ (1 − 0,25) e a margem alvo fica de fora",
      "R$ 93,15, pois 69 + 35% de 69 somando as porcentagens ao custo",
      "R$ 106,15, pois 69 ÷ (1 − 0,25 − 0,10) com a margem alvo",
      "R$ 81,18, pois 69 ÷ (1 − 0,25 + 0,10) somando a margem alvo",
    ],
    answer: [2],
    why: "Os custos fixos somam R$ 69 e as taxas, 25% do preço. Para sobrar 10%: preço = 69 ÷ (1 − 0,25 − 0,10) = 69 ÷ 0,65 ≈ R$ 106,15.",
  },
  {
    id: "gf-m5-15", module: M, topic: "Tipos de anúncio ML",
    q: "Quais podem ser causas de perder o buy box? Marque todas.",
    options: [
      "O concorrente baixou o preço ou o frete ficou mais caro",
      "A reputação do vendedor caiu por atrasos de despacho",
      "O estoque acabou ou o prazo de entrega ficou maior",
      "A cor do botão de comprar mudou na página do produto",
      "O anúncio ganhou mais fotos do que os concorrentes",
    ],
    answer: [0, 1, 2],
    why: "Preço, frete, reputação, estoque e prazo são fatores da disputa pelo buy box, e o peso de cada um muda. A cor do botão e a quantidade de fotos não entram na disputa.",
  },
  {
    id: "gf-m5-16", module: M, topic: "Tipos de anúncio ML",
    q: "Um seller com margem apertada quer migrar todos os anúncios para o premium. Qual é o raciocínio mais seguro?",
    options: [
      "Migrar tudo, porque o premium sempre dá mais lucro que o clássico",
      "Ficar no clássico sempre, porque a tarifa menor garante a melhor margem",
      "Escolher pelo tamanho do estoque, porque o tipo só depende do volume",
      "Comparar a sobra nos dois tipos com a tarifa vigente antes de decidir",
    ],
    answer: [3],
    why: "O premium costuma custar mais e destacar mais, mas tarifas e benefícios mudam. A decisão vem da conta de sobra nos dois tipos, com os valores vigentes da documentação oficial.",
  },

  // ---- Aula 5: Variações, kits, combos e atacado ----
  {
    id: "gf-m5-17", module: M, topic: "Variações, kits e atacado",
    q: "Um kit leva 2 shampoos e 1 condicionador. O estoque tem 10 shampoos e 6 condicionadores (números de exemplo). Quantos kits dá para vender?",
    options: [
      "5 kits, porque 10 ÷ 2 = 5 e 6 ÷ 1 = 6, e vale o menor",
      "6 kits, porque o condicionador tem menos unidades em estoque",
      "16 kits, porque o kit soma o estoque dos dois produtos",
      "8 kits, porque a média dos dois estoques, (10 + 6) ÷ 2, é 8",
    ],
    answer: [0],
    why: "Cada kit consome 2 shampoos e 1 condicionador. Os shampoos dão 10 ÷ 2 = 5 kits e os condicionadores dão 6. O componente que acaba primeiro limita o kit: 5.",
  },
  {
    id: "gf-m5-18", module: M, topic: "Variações, kits e atacado",
    q: "Um seller tem um tênis preto do 40 ao 44 e uma bota com outra ficha técnica. O que faz mais sentido?",
    options: [
      "Colocar tênis e bota no mesmo anúncio, como variações do mesmo produto",
      "Criar um anúncio para cada tamanho do tênis, para a nota ficar separada",
      "Agrupar os tamanhos do tênis em variações e deixar a bota num anúncio separado",
      "Agrupar tudo e usar só o título da bota, que costuma ter mais busca",
    ],
    answer: [2],
    why: "Variação é o mesmo produto mudando tamanho ou cor, com ficha igual. A bota tem outro modelo e outra ficha, então precisa do próprio anúncio.",
  },
  {
    id: "gf-m5-19", module: M, topic: "Variações, kits e atacado",
    q: "Quais afirmações sobre multipack estão corretas? Marque todas.",
    options: [
      "É a mesma unidade vendida em quantidade, num só anúncio",
      "Exige refazer a conta de custo, comissão, frete e imposto do pack",
      "O frete do pack pode ser dividido por mais unidades e melhorar a sobra",
      "Basta multiplicar a sobra da unidade avulsa pelo número de unidades",
      "O pack nunca muda o peso nem o frete cobrado do pedido",
    ],
    answer: [0, 1, 2],
    why: "Multipack é a mesma unidade em quantidade, e a conta do pack é própria: o frete cresce pouco e a sobra por pedido muda. Multiplicar a sobra avulsa ignora isso.",
  },
  {
    id: "gf-m5-20", module: M, topic: "Variações, kits e atacado",
    q: "Preço R$ 80, custo R$ 40, taxas de 25% do preço (números de exemplo). No atacado, o desconto é de 10%. Quantas unidades por pedido igualam o lucro de 1 unidade no varejo?",
    options: [
      "1 unidade, porque o custo e as taxas não mudam quando há desconto",
      "2 unidades, porque 20 ÷ 14 = 1,43 e não existe 0,43 de unidade",
      "3 unidades, porque 20 ÷ 8 = 2,5 usando só a queda do preço",
      "4 unidades, porque 20 ÷ 6 = 3,33 usando só a queda da sobra",
    ],
    answer: [1],
    why: "No varejo sobram 80 − 40 − 20 = R$ 20. No atacado o preço é R$ 72, as taxas são R$ 18 e sobram 72 − 40 − 18 = R$ 14. Como 20 ÷ 14 = 1,43, o cliente precisa levar 2 unidades.",
  },

  // ---- Aula 6: Publicação em massa e auditoria ----
  {
    id: "gf-m5-21", module: M, topic: "Publicação e auditoria",
    q: "O ERP mostra estoque 0, mas o marketplace segue mostrando 5 unidades e entram pedidos. Qual é o melhor caminho?",
    options: [
      "Esperar a próxima venda para ver se o estoque se corrige sozinho",
      "Conferir a sincronização do estoque entre o ERP e o hub",
      "Apagar o anúncio e criar outro, porque o erro é do título antigo",
      "Aumentar o estoque no ERP para igualar o número do marketplace",
    ],
    answer: [1],
    why: "Estoque divergente indica falha num elo da cadeia: ERP, hub ou mapeamento do campo. Corrija a sincronização para não vender o que não existe e prejudicar a reputação.",
  },
  {
    id: "gf-m5-22", module: M, topic: "Publicação e auditoria",
    q: "Sete anúncios faturam 4.200, 2.600, 1.300, 800, 500, 350 e 250 (total 10.000, números de exemplo). Quantos anúncios são necessários para passar de 80% do faturamento?",
    options: [
      "2 anúncios, que somam 6.800 de 10.000 (68%)",
      "3 anúncios, que somam 8.100 de 10.000 (81%)",
      "4 anúncios, que somam 8.900 de 10.000 (89%)",
      "5 anúncios, que somam 9.400 de 10.000 (94%)",
    ],
    answer: [1],
    why: "Somando em ordem: 4.200 + 2.600 = 6.800 (68%), ainda abaixo de 80%. Com o terceiro, 6.800 + 1.300 = 8.100, ou 81%. Esses 3 anúncios formam o grupo A.",
  },
  {
    id: "gf-m5-23", module: M, topic: "Publicação e auditoria",
    q: "Quais cuidados protegem uma publicação em massa? Marque todas.",
    options: [
      "Testar com poucos anúncios antes de subir o lote inteiro",
      "Conferir se título, preço e estoque estão no campo certo",
      "Guardar a versão antiga para conseguir voltar atrás",
      "Subir tudo e corrigir só os anúncios que reclamarem",
      "Confiar que o hub corrige sozinho campos trocados",
    ],
    answer: [0, 1, 2],
    why: "Teste pequeno, mapeamento conferido e backup evitam que um erro se repita em centenas de anúncios. Corrigir depois ou confiar no hub deixa o erro ir ao ar em escala.",
  },
  {
    id: "gf-m5-24", module: M, topic: "Publicação e auditoria",
    q: "O seller pergunta por que você mudou o título de um anúncio. Qual é a melhor justificativa?",
    options: [
      "O concorrente mais vendido usa as mesmas palavras, então copiamos igual",
      "O título anterior estava curto, e mais palavras sempre vendem mais",
      "A busca mostrou o termo do cliente, e vamos medir clique e conversão por 30 dias",
      "Achei que o título novo ficava mais bonito e mais fácil de ler",
    ],
    answer: [2],
    why: "Boa justificativa vem do dado da busca e de um plano de medição. Copiar, achar bonito ou acreditar que mais palavras sempre vendem mais são achismos.",
  },
];

/* Conteúdo da trilha "Preço e financeiro" (Formação Mamba, para Assessores e Gestores de Performance), em formato Stories.
   Cada item de `blocks` é um card de tela cheia. Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, recap, quiz, sim
   e os visuais chart, flow, table, tree, timeline, stairs, anno e lab (veja GUIA-STORIES.md).
   Assessor Estratégico e Gestor de Performance são funções com rotinas diferentes e o mesmo nível de conhecimento: não há escada entre elas.
   Todos os números das contas e dos gráficos são de exemplo. Regras de plataforma, taxas e impostos mudam: a fonte final é a documentação oficial e o contador do cliente.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
 "id": "preco",
 "title": "Preço e financeiro",
 "finalScope": "final-preco",
 "finalSize": 12,
 "tag": "Formação",
 "tagline": "Onde mora o lucro de verdade: do preço até o caixa, com conta que fecha.",
 "subtitle": "Formação Mamba, em stories, para Assessores e Gestores de Performance.",
 "modules": [
  {
   "id": "gf-m7",
   "n": 1,
   "title": "Preço e financeiro",
   "tagline": "Onde mora o lucro de verdade: do preço até o caixa, com conta que fecha.",
   "outcome": "Calcular preço mínimo, margem, ROAS de equilíbrio e promoção, e ler DRE e caixa sem confundir faturamento com lucro.",
   "lessons": [
    {
     "id": "gf-l7-1",
     "title": "Anatomia do preço",
     "minutes": 6,
     "goal": "Entender para onde vai cada real do preço e por que faturamento não é lucro.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "💸",
       "title": "Para onde vai o seu preço?",
       "text": "Em 6 minutos você abre o preço de um produto e vê quanto sobra de verdade no bolso."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Pra onde vai cada real do preço?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Faturamento é o que entra, e lucro é o que sobra."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Preço − produto − imposto − comissão − tarifa − frete − Ads − provisão de devolução = sobra."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você fala em sobra por R$ 100, não em faturamento."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🕳️",
       "html": "Vendeu <b>R$ 100</b>? Calma: nem tudo isso é seu.",
       "sub": "O resto já tem dono antes de você ver a cor do dinheiro."
      },
      {
       "t": "jargon",
       "term": "Faturamento",
       "means": "Tudo que <b>entrou</b> de venda, antes de pagar qualquer conta.",
       "ex": "Vendeu 500 produtos a R$ 100: faturou R$ 50.000. Isso ainda não é lucro."
      },
      {
       "t": "jargon",
       "term": "Margem",
       "means": "A <b>fatia do preço</b> que sobra depois de pagar tudo, em %.",
       "ex": "Vendeu a R$ 100 e sobraram R$ 14: margem de 14%."
      },
      {
       "t": "list",
       "title": "Quem come o preço",
       "items": [
        "<b>Produto e embalagem</b>: o que você gasta pra ter e enviar o item",
        "<b>Imposto</b>: a parte do preço que vai pro governo",
        "<b>Comissão e tarifa fixa</b>: o que o marketplace cobra por venda",
        "<b>Frete e devolução</b>: a entrega que você paga e a venda que volta",
        "<b>Ads</b>: o dinheiro investido em anúncio pago"
       ]
      },
      {
       "t": "jargon",
       "term": "Tarifa fixa",
       "means": "Valor em reais cobrado por venda, além da comissão (a % do preço que o marketplace leva).",
       "ex": "Comissão de 14% mais tarifa de R$ 6 (exemplo): são dois cortes diferentes."
      },
      {
       "t": "chart",
       "kind": "waterfall",
       "title": "Do preço até a sobra",
       "unit": "R$",
       "caption": "Preço de R$ 100 (exemplo). O produto leva R$ 40, comissão, tarifa e frete levam R$ 30, e a sobra é só R$ 14.",
       "data": [
        {
         "label": "Preço",
         "value": 100,
         "type": "start"
        },
        {
         "label": "Produto",
         "value": -40
        },
        {
         "label": "Comissão",
         "value": -14
        },
        {
         "label": "Tarifa e frete",
         "value": -16
        },
        {
         "label": "Imposto",
         "value": -6
        },
        {
         "label": "Emb. e devolução",
         "value": -5
        },
        {
         "label": "Ads",
         "value": -5
        },
        {
         "label": "Sobra",
         "type": "total"
        }
       ]
      },
      {
       "t": "p",
       "title": "Lendo a cascata",
       "html": "A <b>comissão</b> é percentual: sobe junto com o preço. A <b>tarifa fixa</b> e o <b>frete</b> são em reais: pesam mais nos produtos baratos. Já a devolução entra como uma <b>provisão</b> (um % que você reserva pra venda que volta)."
      },
      {
       "t": "conta",
       "title": "Dois sellers, mesmo mês (exemplo)",
       "rows": [
        [
         "Seller A: faturamento",
         "R$ 50.000"
        ],
        [
         "Seller A: margem",
         "10%"
        ],
        [
         "Seller A: sobra",
         "R$ 5.000",
         "pos"
        ],
        [
         "Seller B: faturamento",
         "R$ 30.000"
        ],
        [
         "Seller B: margem",
         "25%"
        ],
        [
         "Seller B: sobra",
         "R$ 7.500",
         "pos"
        ]
       ],
       "total": [
        "B ficou com a mais",
        "R$ 2.500"
       ],
       "note": "Faturar mais não é lucrar mais. Números de exemplo."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Olhar o <b>faturamento</b> e achar que é <b>lucro</b>. O seller comemora R$ 50 mil vendidos e esquece que fornecedor, frete, governo e marketplace ficaram com a maior parte."
      },
      {
       "t": "lab",
       "preset": "preco",
       "title": "Monte o preço e veja a sobra",
       "intro": "Mexa nos sliders. Aqui, embalagem inclui a provisão de devolução. Veja a margem cair quando o frete ou a comissão sobem.",
       "defaults": {
        "preco": 100,
        "custo": 40,
        "com": 14,
        "tarifa": 6,
        "frete": 10,
        "imp": 6,
        "ads": 5,
        "emb": 5,
        "alvo": 15
       },
       "note": "Números de exemplo, não são as taxas reais."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "Comissão, tarifa fixa, regras de frete e imposto mudam. A fonte final é a documentação oficial (Mercado Livre, Mercado Ads, Shopee University, Receita) e o contador do cliente."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Vendeu bem, parabéns! Mas vamos abrir o preço: depois do produto, da comissão, do frete, do imposto e do Ads, sobram R$ 14 em cada R$ 100. É essa sobra que paga a empresa.”"
      },
      {
       "t": "quiz",
       "q": "Um produto vende a R$ 100 e, depois de todos os custos, sobram R$ 14 (números de exemplo). Qual afirmação está certa?",
       "options": [
        "O lucro é R$ 100, porque o faturamento da venda é o que o seller ganha",
        "A margem é 14%, porque a sobra de R$ 14 é a fatia do preço que fica",
        "A margem é 86%, porque os custos de R$ 86 mostram o que o seller ganhou",
        "A margem é 40%, porque só o custo do produto entra na conta da sobra"
       ],
       "answer": [
        1
       ],
       "why": "Margem é a sobra dividida pelo preço: 14 ÷ 100 = 14%. O faturamento (R$ 100) é o que entrou, não o que ficou."
      },
      {
       "t": "recap",
       "items": [
        "Faturamento é o que entra; lucro é o que sobra",
        "O preço paga produto, imposto, comissão, frete, Ads e margem",
        "Tarifa fixa e frete são em reais; comissão é em %",
        "Reserve uma provisão pra devolução"
       ]
      }
     ]
    },
    {
     "id": "gf-l7-2",
     "title": "Margem de contribuição e equilíbrio",
     "minutes": 7,
     "goal": "Conseguir calcular a margem de contribuição e quantas vendas você precisa só pra empatar.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🎯",
       "title": "Vender mais pode te fazer perder?",
       "text": "Você aprende a margem de contribuição e o ponto de equilíbrio: quantas vendas pagam as contas antes de sobrar lucro."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Quantas vendas pagam as contas?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Custo fixo se paga vendendo ou não, e a margem de contribuição é quem paga o fixo."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Margem de contribuição = preço − custos variáveis. Ponto de equilíbrio = fixos ÷ margem por unidade."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Com margem negativa, vender mais só piora: conserte o preço antes."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🧮",
       "html": "Margem de contribuição é o que <b>sobra</b> depois de pagar tudo que <b>depende da venda</b>.",
       "sub": "É o dinheiro que realmente ajuda a pagar as contas da empresa."
      },
      {
       "t": "table",
       "title": "Custo variável x custo fixo",
       "head": [
        "",
        "Custo variável",
        "Custo fixo"
       ],
       "hl": 1,
       "rows": [
        [
         "Muda com a venda?",
         "Sim, a cada venda",
         "Não, paga todo mês"
        ],
        [
         "Exemplos",
         "Produto, comissão, frete, Ads",
         "Aluguel, salário, sistema"
        ],
        [
         "Entra na margem de contribuição?",
         "Sim",
         "Não"
        ]
       ],
       "caption": "Variável sobe e desce com as vendas. Fixo você paga mesmo vendendo zero."
      },
      {
       "t": "conta",
       "title": "Margem de contribuição de 1 venda (exemplo)",
       "rows": [
        [
         "Preço de venda",
         "R$ 80,00"
        ],
        [
         "Produto",
         "R$ 32,00",
         "neg"
        ],
        [
         "Comissão",
         "R$ 12,00",
         "neg"
        ],
        [
         "Tarifa fixa e frete",
         "R$ 14,00",
         "neg"
        ],
        [
         "Imposto",
         "R$ 4,00",
         "neg"
        ],
        [
         "Embalagem e devolução",
         "R$ 4,00",
         "neg"
        ],
        [
         "Ads",
         "R$ 6,00",
         "neg"
        ]
       ],
       "total": [
        "Margem de contribuição",
        "R$ 8,00 (10%)"
       ],
       "note": "80 − 32 − 12 − 14 − 4 − 4 − 6 = 8. Em % do preço: 8 ÷ 80 = 10%."
      },
      {
       "t": "quiz",
       "q": "Um produto vende a R$ 50. Os custos que dependem da venda (produto, comissão, imposto, frete e Ads) somam R$ 41. Qual é a margem de contribuição? (números de exemplo)",
       "options": [
        "R$ 41 por unidade, que são 82% do preço de venda",
        "R$ 9 por unidade, que são 22% do preço de venda",
        "R$ 9 por unidade, que são 18% do preço de venda",
        "R$ 91 por unidade, somando o preço e os custos da venda"
       ],
       "answer": [
        2
       ],
       "why": "Margem de contribuição = preço − custos variáveis = 50 − 41 = R$ 9. Em %, divide pelo preço: 9 ÷ 50 = 18%."
      },
      {
       "t": "p",
       "title": "Mas ainda não é lucro",
       "html": "A margem de contribuição paga primeiro os <b>custos fixos</b> (aluguel, salário, sistema). O que passa disso é lucro. O que falta é prejuízo. Por isso a conta fecha no <b>volume</b>: cada venda ajuda a pagar o fixo."
      },
      {
       "t": "jargon",
       "term": "Ponto de equilíbrio",
       "means": "Quantas vendas você precisa só pra <b>empatar</b>: pagar todos os custos, sem lucro e sem prejuízo.",
       "ex": "Fixos de R$ 4.000 e margem de R$ 8 por venda: são 500 vendas pra empatar."
      },
      {
       "t": "conta",
       "title": "Ponto de equilíbrio (exemplo)",
       "rows": [
        [
         "Custos fixos do mês",
         "R$ 4.000,00",
         "neg"
        ],
        [
         "Margem de contribuição por unidade",
         "R$ 8,00",
         "pos"
        ],
        [
         "Unidades pra empatar (4.000 ÷ 8)",
         "500 un"
        ],
        [
         "Faturamento nesse ponto (500 × R$ 80)",
         "R$ 40.000,00"
        ]
       ],
       "total": [
        "Ponto de equilíbrio",
        "500 unidades"
       ],
       "note": "Fórmula: custos fixos ÷ margem de contribuição por unidade."
      },
      {
       "t": "lab",
       "preset": "pe",
       "title": "Ache o ponto de equilíbrio",
       "intro": "Mexa nos fixos, no preço e nos custos variáveis. Veja quantas unidades pagam a conta e onde a receita cruza o custo.",
       "defaults": {
        "fixos": 4000,
        "preco": 80,
        "var": 90
       },
       "note": "Números de exemplo. Aqui, custos variáveis de 90% do preço = R$ 72 de R$ 80."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Resultado por unidades vendidas",
       "unit": "R$",
       "x": [
        "0",
        "250",
        "500",
        "750",
        "1000"
       ],
       "series": [
        {
         "name": "Resultado",
         "values": [
          -4000,
          -2000,
          0,
          2000,
          4000
         ]
        }
       ],
       "caption": "Com 0 vendas, você perde os R$ 4.000 de fixo. A linha cruza o zero em 500 unidades: dali pra frente é lucro."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Cuidado: margem negativa",
       "html": "Preço de R$ 80 e custos variáveis de R$ 83 (exemplo): cada venda perde R$ 3. Com 1.000 vendas, o prejuízo é de <b>R$ 3.000</b>. Com margem de contribuição negativa, vender mais só piora."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Seu faturamento cresceu, mas cada venda deixa só R$ 8 pra pagar as contas. Vamos ver quantas vendas por mês você precisa só pra empatar? Aí a gente decide preço e Ads.”"
      },
      {
       "t": "sim",
       "kind": "margemcontrib",
       "title": "Bora treinar: margem de contribuição",
       "intro": "Calcule o que sobra de cada venda depois de pagar o que depende dela.",
       "rounds": 3
      },
      {
       "t": "quiz",
       "q": "Os custos fixos são R$ 6.000 por mês e a margem de contribuição é R$ 12 por unidade. Quantas unidades empatam? (números de exemplo)",
       "options": [
        "72.000 unidades: fixos × margem de contribuição por unidade",
        "5.988 unidades: fixos − margem de contribuição por unidade",
        "Não dá pra saber: a conta precisa do preço de venda do produto",
        "500 unidades: fixos ÷ margem de contribuição por unidade"
       ],
       "answer": [
        3
       ],
       "why": "Ponto de equilíbrio = custos fixos ÷ margem de contribuição por unidade = 6.000 ÷ 12 = 500 unidades."
      },
      {
       "t": "recap",
       "items": [
        "Margem de contribuição: preço menos custos que dependem da venda",
        "Fixo você paga vendendo ou não",
        "Ponto de equilíbrio: fixos ÷ margem por unidade",
        "Margem negativa: vender mais só piora"
       ]
      }
     ]
    },
    {
     "id": "gf-l7-3",
     "title": "Preço mínimo e preço-alvo",
     "minutes": 7,
     "goal": "Conseguir calcular o preço mínimo para uma margem alvo e saber onde ficam o piso, o teto e a promoção.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🧱",
       "title": "Qual o menor preço que você aceita?",
       "text": "Você aprende a calcular o piso do preço e a escolher onde vender entre o piso, o alvo e o teto."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Qual é o menor preço aceitável?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "O preço parte do seu piso, não do concorrente."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Piso = custos em reais ÷ (1 − custos em % − margem alvo). O teto vem do mercado."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Promoção mora entre o piso e o alvo. Abaixo do piso, recuse."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "📐",
       "html": "O preço mínimo é o <b>piso</b>: abaixo dele, a venda não paga a margem combinada.",
       "sub": "Preço bom parte da sua conta, não do concorrente."
      },
      {
       "t": "jargon",
       "term": "Piso",
       "tag": "Preço mínimo",
       "means": "O <b>menor preço</b> que ainda entrega a margem alvo (a sobra em % que você combinou de ter).",
       "ex": "Piso de R$ 100 com margem alvo de 15% (exemplo): abaixo disso a margem fura."
      },
      {
       "t": "jargon",
       "term": "Teto",
       "means": "O <b>maior preço</b> que o cliente ainda aceita pagar, olhando o mercado e os concorrentes.",
       "ex": "Se os concorrentes vendem até R$ 135, esse é o teto (exemplo)."
      },
      {
       "t": "jargon",
       "term": "Preço-alvo",
       "means": "O preço onde você <b>quer vender</b>: dentro do que o mercado aceita e com margem boa.",
       "ex": "Piso R$ 100, teto R$ 135: você mira em R$ 120 (exemplo)."
      },
      {
       "t": "chart",
       "kind": "meter",
       "title": "A régua do preço (exemplo)",
       "value": 125,
       "valueLabel": "Seu preço: R$ 125",
       "unit": "R$",
       "zones": [
        {
         "label": "Abaixo do piso",
         "tone": "pink",
         "from": 60,
         "to": 100
        },
        {
         "label": "Zona de promo",
         "tone": "amber",
         "from": 100,
         "to": 120
        },
        {
         "label": "Zona do alvo",
         "tone": "mint",
         "from": 120,
         "to": 135
        },
        {
         "label": "Acima do teto",
         "tone": "violet",
         "from": 135,
         "to": 150
        }
       ],
       "caption": "Piso em R$ 100, alvo em R$ 120, teto em R$ 135. O preço de R$ 125 está na zona do alvo. Promoção mora entre o piso e o alvo."
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "Some os custos em reais",
         "html": "Produto, tarifa fixa, frete e embalagem. No exemplo: 40 + 6 + 10 + 4 = R$ 60."
        },
        {
         "title": "Some os custos em %",
         "html": "Comissão, imposto e Ads, tudo sobre o preço. No exemplo: 14% + 6% + 5% = 25%."
        },
        {
         "title": "Escolha a margem alvo",
         "html": "É a sobra que você quer em cada venda. No exemplo: 15% do preço."
        },
        {
         "title": "Divida",
         "html": "Preço mínimo = custos em reais ÷ (1 − custos em % − margem alvo)."
        }
       ]
      },
      {
       "t": "conta",
       "title": "Preço mínimo (exemplo)",
       "rows": [
        [
         "Produto",
         "R$ 40,00",
         "neg"
        ],
        [
         "Tarifa fixa",
         "R$ 6,00",
         "neg"
        ],
        [
         "Frete",
         "R$ 10,00",
         "neg"
        ],
        [
         "Embalagem",
         "R$ 4,00",
         "neg"
        ],
        [
         "Comissão + imposto + Ads",
         "25%"
        ],
        [
         "Margem alvo",
         "15%"
        ],
        [
         "1 − 0,25 − 0,15",
         "0,60"
        ]
       ],
       "total": [
        "R$ 60 ÷ 0,60 = preço mínimo",
        "R$ 100,00"
       ],
       "note": "Custos em reais: 40 + 6 + 10 + 4 = 60."
      },
      {
       "t": "quiz",
       "q": "Os custos em reais somam R$ 30, os custos em % somam 25% e a margem alvo é 15% (números de exemplo). Qual é o preço mínimo?",
       "options": [
        "R$ 50,00, porque 30 ÷ (1 − 0,25 − 0,15) usa todas as partes",
        "R$ 40,00, porque 30 ÷ (1 − 0,25) ignora a margem alvo",
        "R$ 35,29, porque 30 ÷ (1 − 0,15) ignora os custos em %",
        "R$ 42,00, porque 30 × 1,40 usa um acréscimo fixo de 40%"
       ],
       "answer": [
        0
       ],
       "why": "Custos em reais ÷ (1 − custos em % − margem alvo) = 30 ÷ 0,60 = R$ 50,00. As outras contas esquecem uma parte do preço."
      },
      {
       "t": "conta",
       "title": "Prova real do piso de R$ 100",
       "rows": [
        [
         "Preço no piso",
         "R$ 100,00"
        ],
        [
         "Comissão (14%)",
         "R$ 14,00",
         "neg"
        ],
        [
         "Imposto (6%)",
         "R$ 6,00",
         "neg"
        ],
        [
         "Ads (5%)",
         "R$ 5,00",
         "neg"
        ],
        [
         "Produto, tarifa, frete e embalagem",
         "R$ 60,00",
         "neg"
        ]
       ],
       "total": [
        "Sobra (15% de R$ 100)",
        "R$ 15,00"
       ],
       "note": "100 − 14 − 6 − 5 − 60 = 15. A conta fecha na margem alvo."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Regra de bolso",
       "html": "Cada R$ 1 a mais em custo em reais (frete, tarifa, produto) sobe o piso em <b>R$ 1,67</b>. É que 1 ÷ 0,60 = 1,67. Frete subiu R$ 2? O piso sobe R$ 3,33 (exemplo)."
      },
      {
       "t": "lab",
       "preset": "preco",
       "title": "Teste o piso mexendo nos custos",
       "intro": "Comece no preço de R$ 100 e na margem alvo de 15%. Suba o frete e veja o preço mínimo subir mais do que o frete.",
       "defaults": {
        "preco": 100,
        "custo": 40,
        "com": 14,
        "tarifa": 6,
        "frete": 10,
        "imp": 6,
        "ads": 5,
        "emb": 4,
        "alvo": 15
       },
       "note": "Números de exemplo."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Quanto sobra em cada preço",
       "unit": "R$",
       "hl": 0,
       "data": [
        {
         "label": "Piso: R$ 100",
         "value": 15
        },
        {
         "label": "Promo: R$ 108",
         "value": 21
        },
        {
         "label": "Alvo: R$ 120",
         "value": 30
        }
       ],
       "caption": "A promoção de 10% sobre o alvo (R$ 108) ainda deixa R$ 21. No piso sobram R$ 15. Abaixo do piso, a margem alvo fura."
      },
      {
       "t": "compare",
       "left": {
        "title": "Copiar o concorrente",
        "tone": "bad",
        "items": [
         "Ele pode ter custo menor que o seu",
         "Ele pode estar vendendo com margem negativa",
         "Você descobre o prejuízo só no fechamento"
        ]
       },
       "right": {
        "title": "Partir do seu piso",
        "tone": "good",
        "items": [
         "O piso vem do seu custo",
         "O teto vem do mercado",
         "Você escolhe onde ficar no meio"
        ]
       }
      },
      {
       "t": "sim",
       "kind": "precomin",
       "title": "Bora treinar: preço mínimo",
       "intro": "Calcule o preço que protege a margem alvo, com custo, comissão, imposto, frete e Ads.",
       "rounds": 3
      },
      {
       "t": "quiz",
       "q": "No exemplo da aula, o piso é R$ 100 e o alvo é R$ 120. Uma promoção por R$ 108 está onde nessa régua?",
       "options": [
        "Abaixo do piso: toda promoção fura a margem alvo combinada",
        "Acima do alvo: promoção serve pra vender mais caro que o normal",
        "Entre o piso e o alvo: mais barato, mas ainda acima do piso",
        "No teto: promoção é o maior preço que o cliente aceita pagar"
       ],
       "answer": [
        2
       ],
       "why": "R$ 108 fica entre o piso (R$ 100) e o alvo (R$ 120). Promoção boa desce do alvo, mas para antes do piso."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Seu piso é R$ 100: abaixo disso a venda não paga a margem que a gente combinou. Entre R$ 100 e R$ 120 é zona de promoção. O concorrente a R$ 95 pode estar perdendo dinheiro. Vamos mirar no alvo.”"
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "O piso depende de comissão, tarifa, frete, imposto e Ads, e todos mudam. Recalcule quando mudar qualquer um. A fonte final é a documentação oficial e o contador do cliente."
      },
      {
       "t": "recap",
       "items": [
        "Piso: o menor preço que entrega a margem alvo",
        "Teto vem do mercado; alvo fica entre os dois",
        "Preço mínimo = reais ÷ (1 − % − margem alvo)",
        "Promoção mora entre o piso e o alvo"
       ]
      }
     ]
    },
    {
     "id": "gf-l7-4",
     "title": "Preço por canal e atacado",
     "minutes": 8,
     "goal": "Entender por que a mesma venda deixa margens diferentes em cada canal e quanto um desconto por volume custa.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🛒",
       "title": "Mesmo produto, margem diferente",
       "text": "Você compara a sobra em ML, Shopee e loja própria e descobre quanto o desconto de atacado come do seu lucro."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Por que a mesma venda rende diferente em cada canal?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Compare canais pela sobra, não pela comissão."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Calcule o preço mínimo de cada canal e veja quanto o desconto por volume tira da sobra."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você aceita atacado só se a conta empata."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "⚖️",
       "html": "Compare canais pelo que <b>sobra</b>, não pela taxa.",
       "sub": "Comissão baixa pode esconder frete e tráfego caros."
      },
      {
       "t": "table",
       "title": "Mesmo produto, 3 canais (exemplo)",
       "head": [
        "",
        "Mercado Livre",
        "Shopee",
        "Loja própria"
       ],
       "rows": [
        [
         "Comissão ou taxa de pagamento",
         "14%",
         "18%",
         "5%"
        ],
        [
         "Tarifa fixa + frete",
         "R$ 16",
         "R$ 8",
         "R$ 12"
        ],
        [
         "Ads ou tráfego pago",
         "5%",
         "4%",
         "20%"
        ],
        [
         "Sobra por R$ 100 vendidos",
         "R$ 15",
         "R$ 20",
         "R$ 13"
        ]
       ],
       "caption": "Números inventados só pra conta fechar. O produto custa R$ 40, a embalagem R$ 4 e o imposto é 6% nos três."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Sobra por canal a R$ 100",
       "unit": "R$",
       "hl": 1,
       "data": [
        {
         "label": "Mercado Livre",
         "value": 15
        },
        {
         "label": "Shopee",
         "value": 20
        },
        {
         "label": "Loja própria",
         "value": 13
        }
       ],
       "caption": "Olha onde a barra cai: a loja própria não paga comissão alta, mas o tráfego pago leva a sobra."
      },
      {
       "t": "p",
       "title": "Comissão baixa não é margem alta",
       "html": "Loja própria tem comissão baixa, mas paga <b>tráfego</b> (anúncio pra trazer o cliente), frete e meio de pagamento. Compare sempre o que <b>sobra</b>, não só a taxa."
      },
      {
       "t": "conta",
       "title": "Preço mínimo por canal (margem de 15%)",
       "rows": [
        [
         "Mercado Livre: R$ 60 ÷ 0,60",
         "R$ 100,00"
        ],
        [
         "Shopee: R$ 52 ÷ 0,57",
         "R$ 91,23"
        ],
        [
         "Loja própria: R$ 56 ÷ 0,54",
         "R$ 103,70"
        ]
       ],
       "total": [
        "Do menor ao maior piso",
        "R$ 12,47"
       ],
       "note": "Custos em reais = produto + embalagem + tarifa e frete. Divisor = 1 − comissão − imposto − Ads − 15%."
      },
      {
       "t": "quiz",
       "q": "O mesmo produto, a R$ 100, será vendido em três canais com taxas diferentes (números de exemplo). Qual comparação você deve fazer?",
       "options": [
        "Qual canal tem a menor comissão em % sobre o preço de venda",
        "Qual canal tem o frete mais barato por unidade vendida no mês",
        "Qual canal tem o maior número de visitas por dia nos anúncios",
        "Quanto sobra em cada canal depois de taxas, frete e Ads"
       ],
       "answer": [
        3
       ],
       "why": "O que importa é a sobra final. Comissão baixa pode vir junto de frete ou tráfego caros, e só a conta completa mostra isso."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "Comissões, tarifas, Ads e frete mudam por canal e com o tempo. As taxas desta aula são inventadas. Confira os valores vigentes na documentação oficial (Mercado Livre, Shopee University) e o imposto com o contador do cliente."
      },
      {
       "t": "jargon",
       "term": "Atacado",
       "means": "Venda em lote com <b>preço menor por unidade</b>. O cliente leva mais e paga menos por peça.",
       "ex": "10 unidades por R$ 900, em vez de R$ 100 cada (exemplo)."
      },
      {
       "t": "jargon",
       "term": "Giro",
       "means": "Quão rápido o estoque <b>vira venda</b> e volta pro caixa.",
       "ex": "Giro alto: o lote acaba em 20 dias. Giro baixo: o lote fica meses parado."
      },
      {
       "t": "conta",
       "title": "Atacado: desconto de 10% (exemplo)",
       "rows": [
        [
         "Preço no varejo",
         "R$ 100,00"
        ],
        [
         "Sobra no varejo",
         "R$ 15,00",
         "pos"
        ],
        [
         "Preço no atacado (−10%)",
         "R$ 90,00"
        ],
        [
         "Custos em reais (produto, tarifa, frete, emb.)",
         "R$ 60,00",
         "neg"
        ],
        [
         "Custos em % (25% de R$ 90)",
         "R$ 22,50",
         "neg"
        ]
       ],
       "total": [
        "Sobra no atacado",
        "R$ 7,50"
       ],
       "note": "A sobra caiu pela metade com só 10% de desconto. Se o frete por unidade cair no pacote, refaça a conta com o frete real."
      },
      {
       "t": "big",
       "emoji": "📉",
       "html": "10% de desconto, <b>50% a menos</b> de sobra.",
       "sub": "Pra manter o lucro, você precisa vender o dobro."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Vendas extras pra manter o lucro",
       "unit": "%",
       "hl": 2,
       "data": [
        {
         "label": "Desconto de 5%",
         "value": 33
        },
        {
         "label": "Desconto de 10%",
         "value": 100
        },
        {
         "label": "Desconto de 15%",
         "value": 300
        }
       ],
       "caption": "Olha onde a barra explode: com 15% de desconto, você precisa vender 4 vezes mais. Com 20%, a sobra zera."
      },
      {
       "t": "lab",
       "preset": "promo",
       "title": "Desconto x vendas extras",
       "intro": "O custo de R$ 60 já tem produto, tarifa, frete e embalagem. Os 25% são comissão, imposto e Ads. Mexa no desconto e veja o que empata.",
       "defaults": {
        "preco": 100,
        "custo": 60,
        "taxas": 25,
        "desc": 10,
        "vol": 0
       },
       "note": "Números de exemplo."
      },
      {
       "t": "compare",
       "left": {
        "title": "Atacado costuma valer quando",
        "tone": "good",
        "items": [
         "Tem estoque parado ocupando caixa",
         "O frete por unidade cai no pacote",
         "O cliente volta a comprar de novo"
        ]
       },
       "right": {
        "title": "Atacado não vale quando",
        "tone": "bad",
        "items": [
         "A sobra por unidade fica perto de zero",
         "Você nem calculou o custo do pacote",
         "O desconto vira regra pra todo cliente"
        ]
       }
      },
      {
       "t": "sim",
       "kind": "atacado",
       "title": "Bora treinar: atacado",
       "intro": "Calcule a sobra por unidade no atacado e quantas unidades compensam o desconto.",
       "rounds": 3
      },
      {
       "t": "quiz",
       "q": "O desconto de 10% no atacado cortou a sobra de R$ 15 para R$ 7,50 por unidade (números de exemplo). Quantas vendas a mais empatam o lucro?",
       "options": [
        "10% a mais, porque o aumento de vendas é igual ao desconto",
        "O dobro das vendas, porque R$ 7,50 cabem duas vezes em R$ 15",
        "50% a mais, porque a sobra caiu pela metade com o desconto",
        "15% a mais, porque o lucro antigo era de R$ 15 por unidade"
       ],
       "answer": [
        1
       ],
       "why": "Lucro antes = 15 por unidade. Lucro depois = 7,50. Pra empatar, 15 ÷ 7,50 = 2: o dobro das unidades (+100%)."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Esse desconto de 10% parece pequeno, mas corta a sobra de R$ 15 pra R$ 7,50. Pra manter o lucro, o cliente precisa comprar o dobro. Bora ver se compensa antes de aceitar?”"
      },
      {
       "t": "recap",
       "items": [
        "Compare canais pela sobra, não pela comissão",
        "Cada canal tem seu preço mínimo",
        "Desconto sai quase todo da sobra",
        "Atacado só vale se a conta empatar"
       ]
      }
     ]
    },
    {
     "id": "gf-l7-5",
     "title": "ROAS de equilíbrio",
     "minutes": 7,
     "goal": "Conseguir calcular até onde o ROAS pode cair antes de o Ads começar a dar prejuízo.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📣",
       "title": "Seu Ads dá lucro ou prejuízo?",
       "text": "Você aprende a achar o ROAS mínimo de cada produto: abaixo dele, cada R$ 1 de Ads vendido tira dinheiro do bolso."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Até onde o ROAS pode cair?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Cada produto tem o seu ROAS mínimo."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "ROAS de equilíbrio = 1 ÷ margem antes do Ads. ACOS de equilíbrio = a própria margem."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Se o ROAS está abaixo do mínimo, acerte preço ou custo antes de subir a verba."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "⚖️",
       "html": "Ads só vale se vender <b>acima do equilíbrio</b>.",
       "sub": "E o equilíbrio muda de produto pra produto."
      },
      {
       "t": "jargon",
       "term": "ROAS",
       "means": "Quanto você <b>vendeu</b> pra cada R$ 1 gasto em Ads (Mercado Ads, Shopee Ads).",
       "ex": "Gastou R$ 1.000 e vendeu R$ 5.000 com os anúncios: ROAS de 5x."
      },
      {
       "t": "jargon",
       "term": "ACOS",
       "means": "Quanto você <b>gastou</b> de Ads pra cada R$ 1 vendido. É o inverso do ROAS.",
       "ex": "ROAS de 5x = ACOS de 20%, porque R$ 1.000 ÷ R$ 5.000 = 0,20."
      },
      {
       "t": "anno",
       "preset": "ads",
       "title": "Tela de Ads (desenho didático)",
       "notes": [
        "Investimento: quanto você gastou em anúncio no período",
        "Vendas com Ads: o faturamento que a plataforma liga aos anúncios",
        "ACOS: quanto você gastou de Ads pra cada R$ 1 vendido",
        "ROAS: quanto vendeu pra cada R$ 1 gasto, o inverso do ACOS",
        "ROAS objetivo: a meta que você define, sempre acima do equilíbrio"
       ]
      },
      {
       "t": "conta",
       "title": "ROAS de equilíbrio (exemplo)",
       "rows": [
        [
         "Preço de venda",
         "R$ 100,00"
        ],
        [
         "Custos menos Ads",
         "R$ 75,00",
         "neg"
        ],
        [
         "Margem antes do Ads",
         "R$ 25,00 (25%)",
         "pos"
        ],
        [
         "Em decimal",
         "0,25"
        ],
        [
         "1 ÷ 0,25",
         "4"
        ]
       ],
       "total": [
        "ROAS de equilíbrio",
        "4x"
       ],
       "note": "Com ROAS 4, cada R$ 1.000 em Ads vendem R$ 4.000; a margem de 25% devolve R$ 1.000 e zera a conta. ACOS de equilíbrio: 25%."
      },
      {
       "t": "flow",
       "title": "Achando o equilíbrio",
       "loop": true,
       "items": [
        {
         "icon": "📊",
         "title": "Ache a margem antes do Ads",
         "text": "Preço menos todos os custos, menos o Ads"
        },
        {
         "icon": "➗",
         "title": "Divida 1 pela margem",
         "text": "Use a margem em decimal: 25% vira 0,25"
        },
        {
         "icon": "🎯",
         "title": "Esse é o ROAS de equilíbrio",
         "text": "1 ÷ 0,25 = 4"
        },
        {
         "icon": "🔎",
         "title": "Compare com o ROAS atual",
         "text": "Acima lucra. Abaixo perde."
        }
       ],
       "caption": "Refaça a conta sempre que preço, frete ou comissão mudarem."
      },
      {
       "t": "quiz",
       "q": "Um produto deixa R$ 20 de margem antes do Ads num preço de R$ 100 (números de exemplo). Qual é o ROAS de equilíbrio?",
       "options": [
        "5x, porque 1 ÷ 0,20 = 5 e o ACOS de equilíbrio é 20%",
        "20x, porque o ROAS é o mesmo número da margem",
        "0,2x, porque o ROAS é a margem escrita em decimal",
        "4x, porque 100 − 20 = 80 e 80 ÷ 20 = 4"
       ],
       "answer": [
        0
       ],
       "why": "ROAS de equilíbrio = 1 ÷ margem antes do Ads. Com 20% (0,20), dá 5x. Nesse ponto, R$ 5.000 vendidos deixam R$ 1.000 de margem e pagam o Ads."
      },
      {
       "t": "lab",
       "preset": "roas",
       "title": "Teste o ROAS contra o equilíbrio",
       "intro": "Defina a margem antes do Ads e o ROAS atual. Veja o equilíbrio, o ACOS equivalente e o resultado de cada R$ 1.000 em Ads.",
       "defaults": {
        "margem": 25,
        "roas": 5
       },
       "note": "Números de exemplo."
      },
      {
       "t": "conta",
       "title": "R$ 1.000 em Ads com ROAS 5 (exemplo)",
       "rows": [
        [
         "Investimento em Ads",
         "R$ 1.000",
         "neg"
        ],
        [
         "Vendas com ROAS 5",
         "R$ 5.000"
        ],
        [
         "Margem antes do Ads (25%)",
         "R$ 1.250",
         "pos"
        ]
       ],
       "total": [
        "Resultado do Ads",
        "R$ 250"
       ],
       "note": "Com ROAS 3: vendas de R$ 3.000, margem de R$ 750 e resultado de menos R$ 250."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "ROAS na semana (exemplo)",
       "unit": "x",
       "x": [
        "S1",
        "S2",
        "S3",
        "S4"
       ],
       "series": [
        {
         "name": "ROAS",
         "values": [
          5.1,
          4.2,
          3.6,
          3.1
         ]
        },
        {
         "name": "Equilíbrio",
         "values": [
          4,
          4,
          4,
          4
         ],
         "tone": "pink"
        }
       ],
       "caption": "Olha onde a linha cruza: na S3 o ROAS caiu abaixo de 4 e o Ads passou a dar prejuízo."
      },
      {
       "t": "compare",
       "left": {
        "title": "Produto com 50% de margem",
        "tone": "good",
        "items": [
         "Equilíbrio em 2x",
         "ROAS de 4x dá lucro",
         "Sobra espaço pra escalar"
        ]
       },
       "right": {
        "title": "Produto com 20% de margem",
        "tone": "bad",
        "items": [
         "Equilíbrio em 5x",
         "ROAS de 4x dá prejuízo",
         "Precisa subir preço ou cortar custo"
        ]
       }
      },
      {
       "t": "quiz",
       "q": "Dois produtos têm ROAS atual de 4x. O produto X tem equilíbrio em 2x e o produto Y em 5x (números de exemplo). O que acontece?",
       "options": [
        "Os dois dão lucro, porque 4x já é um ROAS alto",
        "Os dois perdem, porque 4x fica abaixo do ROAS de Y",
        "Só Y dá lucro, porque ele exige o ROAS mais alto",
        "X dá lucro com Ads e Y perde dinheiro com Ads"
       ],
       "answer": [
        3
       ],
       "why": "Lucra quem está acima do próprio equilíbrio. X: 4x > 2x, lucra. Y: 4x < 5x, perde. Não existe ROAS bom ou ruim sem olhar a margem."
      },
      {
       "t": "list",
       "title": "Check de saída: calcule",
       "items": [
        "Capinha: margem antes do Ads de 50%",
        "Garrafa: margem antes do Ads de 40%",
        "Fone: margem antes do Ads de 25%",
        "Mochila: margem antes do Ads de 20%",
        "Cabo: margem antes do Ads de 10%"
       ]
      },
      {
       "t": "sim",
       "kind": "roaseq",
       "title": "Bora treinar: ROAS de equilíbrio",
       "intro": "Ache o ROAS de equilíbrio e o resultado do Ads por R$ 1 investido, com margens diferentes.",
       "rounds": 3
      },
      {
       "t": "chart",
       "kind": "hbar",
       "title": "ROAS de equilíbrio dos 5 produtos",
       "unit": "x",
       "hl": 4,
       "data": [
        {
         "label": "Capinha (50%)",
         "value": 2
        },
        {
         "label": "Garrafa (40%)",
         "value": 2.5
        },
        {
         "label": "Fone (25%)",
         "value": 4
        },
        {
         "label": "Mochila (20%)",
         "value": 5
        },
        {
         "label": "Cabo (10%)",
         "value": 10
        }
       ],
       "caption": "Conferiu? Quanto menor a margem, mais alto o equilíbrio. O cabo precisa de 10x só pra empatar."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "O equilíbrio muda quando preço, custo, frete, comissão ou imposto mudam. Regras e métricas de Ads também. Confira na documentação oficial (Mercado Ads, Shopee University) e com o contador do cliente."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Seu Ads vende bem, mas o produto só deixa 20% de margem. Ele precisa de ROAS 5 só pra empatar, e hoje tá em 4. Antes de aumentar a verba, a gente acerta preço ou custo. Combinado?”"
      },
      {
       "t": "recap",
       "items": [
        "ROAS de equilíbrio = 1 ÷ margem antes do Ads",
        "ACOS de equilíbrio é a própria margem",
        "Cada produto tem o seu equilíbrio",
        "Refaça a conta quando preço ou custo mudar"
       ]
      }
     ]
    },
    {
     "id": "gf-l7-6",
     "title": "DRE, caixa e capital de giro",
     "minutes": 8,
     "goal": "Saber ler o resultado por SKU e por conta e entender por que lucro no papel não é dinheiro no caixa.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🏦",
       "title": "Lucro no papel não paga boleto",
       "text": "Você lê um DRE por SKU e por conta, entende o caminho do dinheiro até o repasse e monta sua planilha de preços."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Lucro no papel é dinheiro no caixa?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "O DRE mostra o resultado, e o caixa mostra quando o dinheiro chega."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Leia o DRE por SKU e projete o caixa até o repasse. Capital de giro cobre o intervalo."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Antes de comprar estoque, você olha o caixa dos próximos 45 dias."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "jargon",
       "term": "DRE",
       "tag": "Demonstrativo de Resultado",
       "means": "A conta que mostra <b>de onde veio e pra onde foi</b> o dinheiro do mês, até chegar no resultado.",
       "ex": "Vendas menos devoluções, imposto, taxas, frete, produto, Ads e fixos: o que sobra é o resultado."
      },
      {
       "t": "chart",
       "kind": "waterfall",
       "title": "DRE simplificada da conta",
       "unit": "R$",
       "caption": "Mês de exemplo: R$ 50.000 de vendas viram R$ 2.500 de resultado. Olha onde a barra cai: produto e taxas levam a maior parte.",
       "data": [
        {
         "label": "Vendas",
         "value": 50000,
         "type": "start"
        },
        {
         "label": "Devoluções",
         "value": -1500
        },
        {
         "label": "Impostos",
         "value": -3000
        },
        {
         "label": "Comissão e frete",
         "value": -13500
        },
        {
         "label": "Produto",
         "value": -20000
        },
        {
         "label": "Ads",
         "value": -3500
        },
        {
         "label": "Fixos",
         "value": -6000
        },
        {
         "label": "Resultado",
         "type": "total"
        }
       ]
      },
      {
       "t": "table",
       "title": "DRE por SKU (cada produto ou variação)",
       "head": [
        "SKU",
        "Vendas",
        "Sobra",
        "Margem"
       ],
       "rows": [
        [
         "SKU A",
         "R$ 25.000",
         "R$ 7.000",
         "28%"
        ],
        [
         "SKU B",
         "R$ 15.000",
         "R$ 3.000",
         "20%"
        ],
        [
         "SKU C",
         "R$ 10.000",
         "−R$ 1.500",
         "−15%"
        ]
       ],
       "caption": "Antes dos fixos, a conta sobra R$ 8.500 (17%). Mas o SKU C perde R$ 1.500, e só o DRE por SKU mostra isso."
      },
      {
       "t": "sim",
       "kind": "dre",
       "title": "Bora treinar: DRE por SKU",
       "intro": "Monte a sobra de um SKU, da venda até o resultado, descontando cada custo.",
       "rounds": 3
      },
      {
       "t": "quiz",
       "q": "A conta sobra R$ 8.500 antes dos fixos, mas um SKU perde R$ 1.500 (números de exemplo). O que o DRE por SKU mostra que o da conta esconde?",
       "options": [
        "Que o faturamento total da conta está errado e precisa ser refeito",
        "Que a conta toda deve parar de vender até o prejuízo acabar",
        "Que um SKU puxa o resultado pra baixo e precisa de uma ação",
        "Que a margem de contribuição é igual em todos os produtos"
       ],
       "answer": [
        2
       ],
       "why": "O resultado da conta mistura SKUs bons e ruins. O DRE por SKU aponta quem sustenta o lucro e quem perde, e onde agir."
      },
      {
       "t": "jargon",
       "term": "Fluxo de caixa",
       "means": "O vai e vem do <b>dinheiro de verdade</b> na conta: o que entrou, o que saiu e quando.",
       "ex": "Vender hoje não quer dizer que o dinheiro cai hoje."
      },
      {
       "t": "timeline",
       "title": "Do pagamento ao repasse (exemplo)",
       "items": [
        {
         "when": "Dia 0",
         "label": "Você paga o fornecedor",
         "text": "O dinheiro sai do caixa"
        },
        {
         "when": "Dia 15",
         "label": "O lote chega ao estoque",
         "text": "Ainda não entrou nada"
        },
        {
         "when": "Dia 30",
         "label": "O cliente compra",
         "text": "Venda aprovada, sem dinheiro na conta"
        },
        {
         "when": "Dia 45",
         "label": "O marketplace repassa",
         "text": "Só agora o dinheiro entra",
         "tone": "mint"
        }
       ]
      },
      {
       "t": "jargon",
       "term": "Capital de giro",
       "means": "O dinheiro que você precisa ter pra <b>tocar a operação</b> entre pagar o fornecedor e receber o repasse.",
       "ex": "Lote de R$ 20.000 pago no dia 0 e recebido no dia 45: são 45 dias de caixa preso."
      },
      {
       "t": "conta",
       "title": "Antecipar o repasse custa (exemplo)",
       "rows": [
        [
         "Repasse previsto",
         "R$ 10.000"
        ],
        [
         "Lucro do lote nesse repasse (15%)",
         "R$ 1.500",
         "pos"
        ],
        [
         "Taxa de antecipação (2%)",
         "R$ 200",
         "neg"
        ]
       ],
       "total": [
        "Lucro depois da taxa",
        "R$ 1.300"
       ],
       "note": "A taxa comeu 13% do lucro do lote. Taxa e prazo são de exemplo."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Estoque parado também custa",
       "html": "Estoque parado de R$ 12.000 e dinheiro que custa 2% ao mês (exemplo): são R$ 240 por mês presos, fora a armazenagem. Produto de giro baixo come caixa e margem sem aparecer na venda."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Prazo de repasse, taxa de antecipação e regras de pagamento mudam. A fonte final é a documentação oficial (Mercado Livre, Shopee University) e o contador ou o financeiro do cliente."
      },
      {
       "t": "quiz",
       "q": "Um seller paga o lote hoje e só recebe o repasse daqui a 45 dias (números de exemplo). O que o capital de giro cobre nesse intervalo?",
       "options": [
        "O lucro do lote, que só existe depois que o repasse cai na conta do seller",
        "O dinheiro pra tocar a operação nos 45 dias entre pagar e receber",
        "O estoque que ficou parado na prateleira esperando a venda",
        "A taxa de antecipação que o marketplace cobra pelo repasse"
       ],
       "answer": [
        1
       ],
       "why": "Capital de giro é o caixa que sustenta a operação entre a saída do dinheiro (fornecedor) e a entrada (repasse). Sem ele, o seller trava mesmo com lucro no DRE."
      },
      {
       "t": "anno",
       "preset": "planilha",
       "title": "A planilha de precificação (desenho didático)",
       "notes": [
        "Custos: produto e embalagem de cada SKU",
        "Taxas e imposto: comissão, tarifa fixa e imposto do canal",
        "Frete e embalagem: o que você paga pra entregar",
        "Preço mínimo: a fórmula que garante a margem alvo",
        "Margem: o que sobra no preço que você escolheu"
       ]
      },
      {
       "t": "list",
       "title": "Mão na massa",
       "items": [
        "Escolha 3 produtos de uma conta-teste ou de uma conta real anonimizada",
        "Monte a planilha: custos, taxas, imposto, frete, embalagem e Ads",
        "Calcule o preço mínimo e a margem de cada um",
        "Simule uma promoção de 10% e de 20%: quanto vender a mais pra empatar?",
        "Monte um DRE por SKU: quem sobra, quem empata e quem perde"
       ]
      },
      {
       "t": "conta",
       "title": "Promoção de 10% (exemplo)",
       "rows": [
        [
         "Preço-alvo",
         "R$ 120,00"
        ],
        [
         "Sobra por unidade no alvo",
         "R$ 30,00",
         "pos"
        ],
        [
         "Preço promocional (−10%)",
         "R$ 108,00"
        ],
        [
         "Sobra por unidade na promoção",
         "R$ 21,00",
         "pos"
        ],
        [
         "Lucro antes (100 un × R$ 30)",
         "R$ 3.000"
        ],
        [
         "Unidades pra empatar (3.000 ÷ 21)",
         "143 un"
        ]
       ],
       "total": [
        "Vendas a mais pra empatar",
        "+43%"
       ],
       "note": "Custos em reais de R$ 60 e 25% sobre o preço: 108 − 60 − 27 = 21."
      },
      {
       "t": "sim",
       "kind": "promovale",
       "title": "Bora treinar: a promoção vale?",
       "intro": "Veja quantas unidades extras a promoção exige pra manter o lucro, ou se ela vale a pena.",
       "rounds": 3
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“O lucro no papel é bonito, mas o dinheiro só entra no repasse. Antes de comprar mais estoque, vamos ver o caixa dos próximos 45 dias e quais SKUs estão perdendo?”"
      },
      {
       "t": "recap",
       "items": [
        "DRE mostra o resultado; o caixa mostra o dinheiro",
        "Olhe o DRE por SKU, não só da conta",
        "Capital de giro cobre o intervalo até o repasse",
        "Promoção e antecipação têm custo: calcule antes"
       ]
      }
     ]
    }
   ]
  }
 ]
});

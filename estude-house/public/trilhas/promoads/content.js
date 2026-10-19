/* Conteúdo da trilha "Promoções e Ads" (Formação Mamba, para Assessores e Gestores de Performance), em formato Stories.
   Cada item de `blocks` é um card de tela cheia. Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, recap, quiz, sim
   e os visuais chart, flow, table, tree, timeline, stairs, anno e lab (veja GUIA-STORIES.md).
   Assessor Estratégico e Gestor de Performance são funções com rotinas diferentes e o mesmo nível de conhecimento: não há escada entre elas.
   Todos os números das contas e dos gráficos são de exemplo. Regras de plataforma, taxas e impostos mudam: a fonte final é a documentação oficial e o contador do cliente.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
 "id": "promoads",
 "title": "Promoções e Ads",
 "finalScope": "final-promoads",
 "finalSize": 20,
 "tag": "Formação",
 "tagline": "Quando participar de campanha, como medir Ads e onde entra o próximo real de verba.",
 "subtitle": "Formação Mamba, em stories, para Assessores e Gestores de Performance.",
 "modules": [
  {
   "id": "gf-m10",
   "n": 1,
   "title": "Promoções e campanhas",
   "tagline": "Quando participar, quando recusar e como planejar o antes e o depois de cada campanha.",
   "outcome": "Decidir com número se uma promoção vale a pena, planejar preço e estoque do calendário e medir o que sobra depois do pico.",
   "lessons": [
    {
     "id": "gf-l10-1",
     "title": "Mecânicas de promoção",
     "minutes": 7,
     "goal": "Saber distinguir oferta, cupom, desconto progressivo, combo, frete grátis e campanha oficial, e onde cada uma pesa na margem.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🏷️",
       "title": "Promoção vende. Mas lucra?",
       "text": "Em poucos minutos você conhece as mecânicas de promoção e descobre onde cada uma morde a margem."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Qual mecânica de promoção usar?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Cada mecânica pesa na margem de um jeito."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Simule a sobra por unidade em cada uma: oferta, cupom, progressivo, combo, frete e campanha."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Convite não é decisão: simule antes de ativar."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🎯",
       "html": "Promoção mal feita vende muito e <b>lucra nada</b>.",
       "sub": "Antes de aceitar qualquer uma, entenda como ela funciona."
      },
      {
       "t": "list",
       "title": "As mecânicas que você vai ver",
       "items": [
        "<b>Oferta</b>: preço menor por um tempo",
        "<b>Cupom</b>: desconto que o cliente ativa",
        "<b>Desconto progressivo</b>: quanto mais leva, menos paga",
        "<b>Combo</b>: produtos juntos por um preço",
        "<b>Frete grátis</b> e <b>campanha oficial</b>"
       ]
      },
      {
       "t": "jargon",
       "term": "Oferta",
       "means": "Preço promocional por <b>tempo limitado</b>. O cliente vê o desconto direto no anúncio.",
       "ex": "Fone de R$ 100 por R$ 85 durante 3 dias (exemplo)."
      },
      {
       "t": "jargon",
       "term": "Cupom",
       "means": "Desconto que o cliente <b>ativa</b>. Confira <b>quem banca</b> o valor: você, a plataforma ou os dois.",
       "ex": "Cupom de 5%: se a regra manda você bancar, esses 5% saem da sua margem."
      },
      {
       "t": "jargon",
       "term": "Desconto progressivo",
       "means": "O desconto <b>cresce com a quantidade</b>. Serve pra o cliente levar mais unidades de uma vez.",
       "ex": "Leve 1 e pague cheio, leve 2 com 5% off, leve 3 com 10% off (exemplo)."
      },
      {
       "t": "table",
       "title": "Mecânica x onde pesa",
       "head": [
        "Mecânica",
        "Como funciona",
        "Onde pesa na margem"
       ],
       "rows": [
        [
         "Oferta",
         "Preço menor por tempo limitado",
         "Desconto direto no preço"
        ],
        [
         "Cupom",
         "Cliente ativa o desconto",
         "A parte que você banca"
        ],
        [
         "Progressivo",
         "Mais unidades, mais desconto",
         "Desconto maior em lotes grandes"
        ],
        [
         "Combo",
         "Produtos juntos por um preço",
         "Margem de cada item do combo"
        ],
        [
         "Frete grátis",
         "Cliente não paga o frete",
         "O frete que alguém banca"
        ]
       ],
       "hl": 2,
       "caption": "Cada mecânica mexe na margem de um jeito. Quem banca o desconto muda por campanha: confira nas condições."
      },
      {
       "t": "p",
       "title": "Combo: a margem é a soma",
       "html": "Combo (ou kit) junta produtos num preço só. A conta é simples: some a margem de cada item e tire o desconto. Se um item já tem margem baixa, ele puxa o combo inteiro pra baixo."
      },
      {
       "t": "quiz",
       "q": "Um seller quer que o cliente leve 3 unidades em vez de 1, com desconto maior quanto mais unidades levar. Qual mecânica é essa?",
       "options": [
        "Cupom, porque o cliente ativa um código e o desconto vale igual para qualquer quantidade",
        "Desconto progressivo, porque o desconto cresce conforme a quantidade que o cliente leva",
        "Oferta, porque o preço cai por tempo limitado e é o mesmo para qualquer quantidade",
        "Campanha oficial, porque a plataforma define sozinha o desconto de cada quantidade"
       ],
       "answer": [
        1
       ],
       "why": "No desconto progressivo, quanto mais unidades no pedido, maior o desconto. Oferta e cupom dão o mesmo desconto para qualquer quantidade."
      },
      {
       "t": "big",
       "emoji": "🚚",
       "html": "Frete grátis <b>nunca é de graça</b>.",
       "sub": "Alguém paga: você, a plataforma ou os dois."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Quem banca o frete?",
       "html": "Em cada campanha, leia a condição: o frete grátis pode sair da sua margem, ser dividido ou ser bancado pela plataforma. A regra muda por programa e por época. Confira antes de aceitar."
      },
      {
       "t": "jargon",
       "term": "Campanha oficial",
       "means": "Promoção <b>organizada pela plataforma</b>, com data marcada. Você recebe o convite e escolhe se entra.",
       "ex": "Datas duplas e Black Friday são exemplos de campanhas oficiais."
      },
      {
       "t": "flow",
       "title": "Do convite à decisão",
       "items": [
        {
         "icon": "📩",
         "title": "Chega o convite",
         "text": "Leia datas, regras e custos"
        },
        {
         "icon": "🧮",
         "title": "Simule a margem",
         "text": "Preço novo, taxas e custos extras"
        },
        {
         "icon": "⚖️",
         "title": "Decida",
         "text": "Participa, negocia ou recusa"
        },
        {
         "icon": "📊",
         "title": "Meça",
         "text": "Compare vendas e lucro depois"
        }
       ],
       "loop": true,
       "caption": "Toda campanha passa por esse caminho. Quem manda é o número, não o convite."
      },
      {
       "t": "conta",
       "title": "Mesmo anúncio com 10% off (exemplo)",
       "rows": [
        [
         "Preço com 10% de desconto",
         "R$ 90,00"
        ],
        [
         "Produto",
         "- R$ 45,00",
         "neg"
        ],
        [
         "Taxas (25% de R$ 90,00)",
         "- R$ 22,50",
         "neg"
        ]
       ],
       "total": [
        "Lucro por unidade",
        "R$ 22,50"
       ],
       "note": "Sem o desconto, o preço era R$ 100,00 e o lucro era R$ 30,00. Taxas de exemplo: comissão, imposto e frete somados."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Lucro por unidade",
       "unit": "R$",
       "hl": 1,
       "data": [
        {
         "label": "Sem desconto",
         "value": 30,
         "tone": "mint"
        },
        {
         "label": "Com 10% off",
         "value": 22.5,
         "tone": "pink"
        }
       ],
       "caption": "O desconto foi de 10%, mas o lucro por unidade caiu 25%. Olha a diferença entre as barras (exemplo)."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Nomes de campanhas, quem banca desconto e frete, custos extras e critérios de entrada mudam. A fonte final é a documentação oficial (Mercado Livre, Mercado Ads, Shopee University) e o contador do cliente."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Cupom, oferta e combo parecem iguais pro cliente, mas pesam diferente na sua margem. Antes de ativar qualquer um, eu simulo quanto sobra por unidade e te mostro o número.”"
      },
      {
       "t": "quiz",
       "q": "Um produto custa R$ 36 e é vendido a R$ 80, com taxas de 25% do preço (números de exemplo). Com 10% de desconto, qual é o novo lucro por unidade?",
       "options": [
        "R$ 21,60 por unidade, porque o lucro de R$ 24 cai 10%",
        "R$ 16,00 por unidade, porque a taxa continua em R$ 20",
        "R$ 36,00 por unidade, porque as taxas deixam de contar",
        "R$ 18,00 por unidade, porque a taxa cai para R$ 18"
       ],
       "answer": [
        3
       ],
       "why": "Preço novo: 80 x 0,90 = R$ 72. Taxas: 25% de 72 = R$ 18. Lucro: 72 - 36 - 18 = R$ 18, bem abaixo dos R$ 24 de antes."
      },
      {
       "t": "recap",
       "items": [
        "Oferta, cupom, progressivo, combo, frete e campanha são mecânicas diferentes",
        "Cada uma pesa na margem de um jeito",
        "Frete grátis e cupom: confira quem banca",
        "Convite não é decisão: simule antes",
        "Desconto de 10% pode tirar 25% do lucro"
       ]
      }
     ]
    },
    {
     "id": "gf-l10-2",
     "title": "Participar ou recusar",
     "minutes": 8,
     "goal": "Conseguir simular a margem com desconto e taxa extra e decidir, com número, se a campanha vale a pena.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🧮",
       "title": "Participar ou recusar? Conta primeiro",
       "text": "Você aprende a simular margem com desconto e taxa extra e a decidir com número se a campanha vale a pena."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Participo desta campanha?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Visibilidade sem margem não é resultado."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Vendas pra empatar = lucro antes ÷ lucro depois, já com o preço novo e a taxa extra."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Abaixo do piso, recuse ou renegocie."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "👀",
       "html": "<b>Visibilidade</b> não paga boleto.",
       "sub": "Venda grande com lucro pequeno (ou negativo) só aumenta o trabalho."
      },
      {
       "t": "jargon",
       "term": "Piso",
       "means": "O <b>menor preço</b> (ou a menor margem) que o seller aceita pra vender sem sair no prejuízo.",
       "ex": "Se a promoção joga o lucro abaixo do piso, a resposta padrão é recusar ou renegociar."
      },
      {
       "t": "conta",
       "title": "Antes: lucro por unidade (exemplo)",
       "rows": [
        [
         "Preço atual",
         "R$ 200,00"
        ],
        [
         "Produto",
         "- R$ 90,00",
         "neg"
        ],
        [
         "Taxas (24% do preço)",
         "- R$ 48,00",
         "neg"
        ]
       ],
       "total": [
        "Lucro por unidade",
        "R$ 62,00"
       ],
       "note": "Taxas de 24% juntam comissão, imposto e frete. Números de exemplo."
      },
      {
       "t": "conta",
       "title": "Depois: 15% de desconto (exemplo)",
       "rows": [
        [
         "Preço com 15% off",
         "R$ 170,00"
        ],
        [
         "Produto",
         "- R$ 90,00",
         "neg"
        ],
        [
         "Taxas (24% de R$ 170,00)",
         "- R$ 40,80",
         "neg"
        ]
       ],
       "total": [
        "Lucro por unidade",
        "R$ 39,20"
       ],
       "note": "O custo do produto não baixou: só o preço baixou."
      },
      {
       "t": "p",
       "title": "Desconto de 15%, lucro 37% menor",
       "html": "O preço caiu 15%, mas o custo do produto continuou em R$ 90. Por isso o lucro por unidade foi de R$ 62,00 para R$ 39,20: uns <b>37%</b> a menos. O desconto pesa mais no lucro do que no preço."
      },
      {
       "t": "big",
       "emoji": "📈",
       "html": "Pra empatar, você precisa <b>vender mais</b>.",
       "sub": "Quanto mais, depende do tamanho do desconto."
      },
      {
       "t": "p",
       "title": "A conta do empate",
       "html": "Vendas necessárias = lucro por unidade antes ÷ lucro por unidade depois. No exemplo: R$ 62,00 ÷ R$ 39,20 dá cerca de 1,58. Ou seja, <b>58% a mais</b> de vendas só pra ficar com o mesmo lucro total."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Vendas extras pra empatar o lucro",
       "unit": "%",
       "hl": 2,
       "data": [
        {
         "label": "5% off",
         "value": 14
        },
        {
         "label": "10% off",
         "value": 32
        },
        {
         "label": "15% off",
         "value": 58
        },
        {
         "label": "20% off",
         "value": 96
        },
        {
         "label": "30% off",
         "value": 278,
         "tone": "pink"
        }
       ],
       "caption": "Cada barra é o aumento de vendas pra manter o mesmo lucro total, no produto do exemplo. Olha como a barra dispara depois de 20%."
      },
      {
       "t": "lab",
       "preset": "promo",
       "title": "Teste o desconto",
       "intro": "Mexa no desconto e no aumento de vendas. Veja o lucro total antes e depois e quanto você precisa vender a mais pra empatar.",
       "defaults": {
        "preco": 200,
        "custo": 90,
        "taxas": 24,
        "desc": 15,
        "vol": 30
       },
       "note": "Números de exemplo."
      },
      {
       "t": "quiz",
       "q": "Um produto de R$ 120 custa R$ 54 e tem taxas de 25% do preço (números de exemplo). Com 10% de desconto, quanto as vendas precisam subir pra empatar o lucro total?",
       "options": [
        "Cerca de 10% a mais, o mesmo tamanho do desconto dado",
        "Cerca de 25% a mais, que é a queda do lucro unitário",
        "Cerca de 33% a mais, porque o lucro unitário vai de R$ 36 a R$ 27",
        "Cerca de 50% a mais, porque o lucro dos dois cenários é incerto"
       ],
       "answer": [
        2
       ],
       "why": "Antes: 120 x 0,75 - 54 = R$ 36. Depois: 108 x 0,75 - 54 = R$ 27. Vendas necessárias: 36 ÷ 27 = 1,33, ou seja, 33% a mais."
      },
      {
       "t": "conta",
       "title": "Com taxa extra da campanha (exemplo)",
       "rows": [
        [
         "Preço com 15% off",
         "R$ 170,00"
        ],
        [
         "Produto",
         "- R$ 90,00",
         "neg"
        ],
        [
         "Taxas (24% de R$ 170,00)",
         "- R$ 40,80",
         "neg"
        ],
        [
         "Taxa extra da campanha (2%)",
         "- R$ 3,40",
         "neg"
        ]
       ],
       "total": [
        "Lucro por unidade",
        "R$ 35,80"
       ],
       "note": "Se existe taxa extra e quem banca o desconto, isso está nas condições da campanha. Aqui é só exemplo."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Regra de bolso",
       "html": "Simule sempre com tudo junto: preço novo, taxas e custo extra da campanha. Se esquecer a taxa extra, você acha que sobra mais do que realmente sobra."
      },
      {
       "t": "tree",
       "title": "Antes de dizer sim",
       "root": "Participo da campanha?",
       "branches": [
        {
         "label": "Margem",
         "items": [
          "Sobra acima do piso?",
          "Incluí a taxa extra?"
         ]
        },
        {
         "label": "Vendas",
         "items": [
          "Quanto preciso vender a mais?",
          "Isso é realista?"
         ]
        },
        {
         "label": "Estoque e prazo",
         "items": [
          "Cobre o pico?",
          "Despacho no prazo?"
         ]
        },
        {
         "label": "Estratégia",
         "items": [
          "Liquida estoque parado?",
          "Ganho algo que dura?"
         ]
        }
       ],
       "caption": "Quatro perguntas, uma decisão. Se uma resposta pesa muito, negocie ou recuse."
      },
      {
       "t": "table",
       "title": "Participa, negocia ou recusa",
       "head": [
        "",
        "Participa",
        "Negocia",
        "Recusa"
       ],
       "rows": [
        [
         "Margem",
         "Sobra acima do piso",
         "Sobra no limite do piso",
         "Fica abaixo do piso"
        ],
        [
         "Vendas",
         "Meta de aumento realista",
         "Meta apertada",
         "Meta fora da realidade"
        ],
        [
         "Estoque",
         "Cobre o pico com folga",
         "Cobre só uma parte",
         "Vai faltar estoque"
        ],
        [
         "Logística",
         "Despacha no prazo",
         "Prazo no limite",
         "Risco de atraso"
        ]
       ],
       "hl": 1,
       "caption": "Use como régua rápida. O piso e a meta de cada conta vêm do cliente e do número dela."
      },
      {
       "t": "compare",
       "left": {
        "title": "Pode valer a pena",
        "tone": "good",
        "items": [
         "Sobra acima do piso mesmo com o desconto",
         "Estoque parado que custa mais que o desconto",
         "Meta de vendas realista e estoque garantido"
        ]
       },
       "right": {
        "title": "Melhor recusar",
        "tone": "bad",
        "items": [
         "O preço cai abaixo do piso",
         "O estoque é curto e vai faltar no pico",
         "Só dá visibilidade, sem número que feche"
        ]
       }
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Aceitar toda campanha oficial só porque \"dá visibilidade\". Visibilidade sem margem vira venda cara: mais trabalho, mais estoque e frete, e o mês termina sem lucro."
      },
      {
       "t": "steps",
       "title": "Como dizer não com elegância",
       "items": [
        {
         "title": "Reconheça o objetivo",
         "html": "“Entendo que você quer vender mais e ganhar posição.”"
        },
        {
         "title": "Mostre o número",
         "html": "Lucro por unidade antes e depois, e quanto precisa vender a mais pra empatar."
        },
        {
         "title": "Ofereça alternativa",
         "html": "Desconto menor, só nos produtos de margem folgada, ou entrada em outra data."
        },
        {
         "title": "Peça a decisão",
         "html": "Deixe o risco claro e combine quem decide e até quando."
        }
       ]
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Essa campanha traz visibilidade, mas com 15% de desconto o lucro por unidade cai de R$ 62 para R$ 39. Teríamos que vender 58% a mais pra empatar. Sugiro entrar só com os produtos de margem folgada. Topa?”"
      },
      {
       "t": "sim",
       "kind": "promovale",
       "title": "Bora treinar: vale participar?",
       "intro": "Calcule quantas unidades a mais você precisa vender pra manter o lucro e decida se a campanha vale.",
       "rounds": 3
      },
      {
       "t": "quiz",
       "multi": true,
       "q": "Uma campanha oficial convida seu seller com 20% de desconto. Marque todas as perguntas que você precisa responder antes de aceitar.",
       "options": [
        "O lucro por unidade com o desconto e a taxa extra continua acima do piso?",
        "Quanto preciso vender a mais pra empatar o lucro, e isso é realista?",
        "O estoque e o prazo de despacho aguentam o pico de vendas da campanha?",
        "O desconto traz visibilidade, mesmo que a margem fique negativa?",
        "Os concorrentes já aceitaram, então não preciso mais calcular nada?"
       ],
       "answer": [
        0,
        1,
        2
       ],
       "why": "Antes de aceitar, olhe margem com taxa extra, vendas necessárias e estoque com prazo. Visibilidade com margem negativa e imitar o concorrente não substituem a conta."
      },
      {
       "t": "recap",
       "items": [
        "Desconto de 15% pode derrubar o lucro unitário em uns 37%",
        "Empate = lucro antes ÷ lucro depois",
        "Simule com preço novo, taxas e taxa extra",
        "Abaixo do piso: recuse ou renegocie",
        "Visibilidade sem margem não é resultado"
       ]
      }
     ]
    },
    {
     "id": "gf-l10-3",
     "title": "Calendário e pós-campanha",
     "minutes": 8,
     "goal": "Entender como planejar preço e estoque antes das datas fortes e como medir o lucro de verdade depois do pico.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📅",
       "title": "Campanha boa começa meses antes",
       "text": "Você aprende a montar o calendário de preço e estoque e a medir o que acontece depois do pico."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "A campanha deu lucro de verdade?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Depois do pico vem a retração."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Cobertura = estoque ÷ vendas por dia. Meça o período inteiro: antes, pico e depois."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você registra o que aprendeu pro próximo calendário."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🧭",
       "html": "Quem planeja <b>escolhe</b>. Quem não planeja aceita o que sobrou.",
       "sub": "Preço e estoque se preparam antes da data, não na véspera."
      },
      {
       "t": "jargon",
       "term": "Calendário comercial",
       "means": "Mapa das <b>datas de venda forte</b> do ano, com o que decidir em cada uma: preço, estoque e verba.",
       "ex": "Dia das Mães, datas duplas, Black Friday, Natal e volta às aulas."
      },
      {
       "t": "list",
       "title": "O que entra no calendário",
       "items": [
        "Data da campanha e do pico de vendas",
        "Preço e desconto que a margem aguenta",
        "Estoque necessário e quando ele precisa chegar",
        "Verba de Ads (anúncios pagos) pra data",
        "Quem faz o quê, e até quando"
       ]
      },
      {
       "t": "timeline",
       "title": "Contagem regressiva (exemplo)",
       "items": [
        {
         "when": "Dia -90",
         "label": "Calendário e metas",
         "text": "Quais datas entram e quanto vender"
        },
        {
         "when": "Dia -60",
         "label": "Compra e produção",
         "text": "Pedido ao fornecedor com folga no prazo"
        },
        {
         "when": "Dia -45",
         "label": "Preço mínimo e simulação",
         "text": "O desconto que a margem aguenta"
        },
        {
         "when": "Dia -30",
         "label": "Estoque no lugar",
         "text": "Mercadoria pronta e enviada ao armazém"
        },
        {
         "when": "Dia -7",
         "label": "Anúncios e Ads prontos",
         "text": "Título, foto, preço e verba"
        },
        {
         "when": "Pico",
         "label": "Acompanhar todo dia",
         "tone": "gold"
        },
        {
         "when": "Dia +7",
         "label": "Medir e aprender",
         "text": "Vendas, lucro e queda depois do pico"
        }
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "Datas, nomes e regras das campanhas mudam todo ano. Use essa contagem como modelo. Confirme as datas oficiais no Mercado Livre, no Mercado Ads, na Shopee University e com o contador do cliente."
      },
      {
       "t": "jargon",
       "term": "Cobertura",
       "means": "Quantos <b>dias</b> o estoque aguenta no ritmo de vendas atual. Conta: estoque ÷ vendas por dia.",
       "ex": "300 unidades e 20 vendas por dia dão 15 dias de cobertura (exemplo)."
      },
      {
       "t": "jargon",
       "term": "Ponto de pedido",
       "means": "O nível de estoque em que você <b>precisa pedir mais</b>: vendas por dia × prazo de reposição + estoque de segurança (folga).",
       "ex": "20 por dia, 10 dias de prazo e 40 de folga: pedir ao chegar em 240 (exemplo)."
      },
      {
       "t": "conta",
       "title": "Estoque pro pico (exemplo)",
       "rows": [
        [
         "Vendas normais",
         "20 un/dia"
        ],
        [
         "Pico esperado (2,5x)",
         "50 un/dia"
        ],
        [
         "Duração do pico",
         "7 dias"
        ],
        [
         "Demanda do pico",
         "350 un"
        ],
        [
         "Folga de 20% (segurança)",
         "+ 70 un"
        ],
        [
         "Estoque que já tenho",
         "- 150 un",
         "neg"
        ]
       ],
       "total": [
        "Falta chegar",
        "270 un"
       ],
       "note": "350 + 70 = 420 unidades pro pico. Tirando as 150 que já existem, faltam 270."
      },
      {
       "t": "sim",
       "kind": "cobertura",
       "title": "Bora treinar: cobertura",
       "intro": "Calcule por quantos dias o estoque aguenta e quando é hora de pedir mais.",
       "rounds": 3
      },
      {
       "t": "quiz",
       "q": "Um produto vende 10 unidades por dia e a campanha deve triplicar isso por 5 dias. Com folga de 20% e 60 unidades em estoque, quantas faltam? (números de exemplo)",
       "options": [
        "90 unidades, porque a demanda de 150 menos o estoque de 60 não leva folga",
        "120 unidades, porque a demanda de 150 mais a folga de 30 menos o estoque de 60",
        "180 unidades, porque a demanda mais a folga é o que preciso comprar de novo",
        "30 unidades, porque só preciso repor a folga de segurança sobre a demanda"
       ],
       "answer": [
        1
       ],
       "why": "Pico: 10 x 3 = 30 por dia, por 5 dias = 150. Folga de 20% = 30. Total 180. Com 60 em estoque, faltam 180 - 60 = 120 unidades."
      },
      {
       "t": "p",
       "title": "O que é retração pós-pico",
       "html": "Retração é a queda de vendas depois do pico. Parte dos clientes comprou antes por causa do desconto e deixou de comprar nas semanas seguintes. No gráfico, S3 e S4 são a campanha e S5 a S7 mostram a ressaca."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Vendas por semana (exemplo)",
       "unit": "un",
       "x": [
        "S1",
        "S2",
        "S3",
        "S4",
        "S5",
        "S6",
        "S7"
       ],
       "series": [
        {
         "name": "Vendas",
         "values": [
          100,
          100,
          280,
          130,
          70,
          85,
          98
         ]
        },
        {
         "name": "Ritmo normal",
         "values": [
          100,
          100,
          100,
          100,
          100,
          100,
          100
         ],
         "tone": "pink"
        }
       ],
       "caption": "Olha o vale em S5: quem ia comprar depois comprou antes. A linha só volta ao normal em S7."
      },
      {
       "t": "conta",
       "title": "Balanço de 7 semanas (exemplo)",
       "rows": [
        [
         "Esperado sem campanha",
         "R$ 21.000,00"
        ],
        [
         "S1 e S2 (normal)",
         "R$ 6.000,00"
        ],
        [
         "S3 e S4 (campanha)",
         "R$ 6.150,00"
        ],
        [
         "S5 a S7 (pós-pico)",
         "R$ 7.590,00"
        ],
        [
         "Lucro real do período",
         "R$ 19.740,00"
        ]
       ],
       "total": [
        "Resultado vs. sem campanha",
        "- R$ 1.260,00"
       ],
       "note": "Lucro normal de R$ 30/un e R$ 15/un na campanha (preço R$ 100, desconto de 20%). A campanha rendeu +R$ 150 e a ressaca custou R$ 1.410."
      },
      {
       "t": "flow",
       "title": "Rotina pós-campanha",
       "items": [
        {
         "icon": "📥",
         "title": "Junte os dados",
         "text": "Vendas, lucro e custos do período"
        },
        {
         "icon": "📏",
         "title": "Compare com o normal",
         "text": "Antes, durante e depois do pico"
        },
        {
         "icon": "🔧",
         "title": "Ajuste",
         "text": "Desconto, estoque e data da próxima"
        },
        {
         "icon": "📝",
         "title": "Registre",
         "text": "Anote o aprendizado pro calendário"
        }
       ],
       "loop": true,
       "caption": "O pós-campanha alimenta o calendário da próxima. Sem registro, você repete o mesmo erro."
      },
      {
       "t": "steps",
       "title": "Mão na massa",
       "items": [
        {
         "title": "Monte o cenário",
         "html": "Use um produto real anonimizado: preço, custo e taxas."
        },
        {
         "title": "Simule descontos",
         "html": "No simulador abaixo, teste 10%, 20% e 30% e anote o lucro."
        },
        {
         "title": "Ache o empate",
         "html": "Veja quanto precisa vender a mais pra manter o lucro total."
        },
        {
         "title": "Decida e registre",
         "html": "Participa, negocia ou recusa, com o número ao lado."
        }
       ]
      },
      {
       "t": "lab",
       "preset": "promo",
       "title": "Simulador de promoção",
       "intro": "Compare o lucro antes e depois. Mude o desconto e o aumento de vendas até achar o ponto de empate.",
       "defaults": {
        "preco": 100,
        "custo": 45,
        "taxas": 25,
        "desc": 20,
        "vol": 100
       },
       "note": "Números de exemplo."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Medir só a semana do pico. Olhando apenas S3, a campanha parece sucesso. Somando as semanas de depois, o lucro pode ter ficado menor do que se você não tivesse feito nada."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“O pico vendeu bem, mas as três semanas seguintes caíram. Somando tudo, o lucro ficou R$ 1.260 abaixo do normal. Na próxima, vamos reduzir o desconto e antecipar o estoque.”"
      },
      {
       "t": "quiz",
       "q": "Na semana do pico as vendas subiram 150% e o seller quer chamar a campanha de sucesso. O que você olha antes de concordar?",
       "options": [
        "O lucro total do período inteiro, com as semanas seguintes, contra o ritmo normal",
        "Só o faturamento da semana do pico, porque ele mostra o tamanho da campanha",
        "O número de visitas do pico, porque visita alta prova que o desconto funcionou",
        "A semana seguinte ao pico, porque ela mostra quanto o desconto custou na margem"
       ],
       "answer": [
        0
       ],
       "why": "O pico sozinho engana. Some o lucro das semanas de campanha e da queda depois e compare com o que você venderia sem promoção."
      },
      {
       "t": "recap",
       "items": [
        "Planeje preço e estoque meses antes da data",
        "Cobertura = estoque ÷ vendas por dia",
        "Depois do pico vem retração: conte ela",
        "Meça o período inteiro, não só o pico",
        "Registre o que aprendeu pro próximo calendário"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "gf-m11",
   "n": 2,
   "title": "Ads no ML e na Shopee",
   "tagline": "Do leilão à verba entre canais: o que medir, o que cortar e onde entra o próximo real.",
   "outcome": "Montar e defender um plano de ads com ROAS objetivo, regras de decisão e verba bem distribuída entre canais.",
   "lessons": [
    {
     "id": "gf-l11-1",
     "title": "Fundamentos do Mercado Ads",
     "minutes": 6,
     "goal": "Entender como o Product Ads cobra, como o leilão decide quem aparece e quando usar campanha automática ou manual.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📣",
       "title": "Ads: o acelerador do marketplace",
       "text": "Em poucos minutos você entende como o Product Ads cobra, como o leilão escolhe quem aparece e quando usar automática ou manual."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como o Product Ads decide quem aparece?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "É um leilão: lance e relevância decidem."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Você paga por clique. A automática dá menos trabalho e a manual dá mais controle."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Arrume o anúncio antes de colocar verba."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🚀",
       "html": "Ads é o <b>acelerador</b>. Mas precisa de base boa embaixo.",
       "sub": "Anúncio fraco com ads só gasta dinheiro mais rápido."
      },
      {
       "t": "jargon",
       "term": "Product Ads",
       "means": "Anúncio <b>patrocinado</b>: seu produto ganha destaque na busca e em páginas de produto. Você paga por <b>clique</b>.",
       "ex": "Alguém busca “garrafa térmica” e vê o seu anúncio entre os primeiros resultados."
      },
      {
       "t": "jargon",
       "term": "CPC",
       "tag": "Custo por clique",
       "means": "Quanto você paga <b>cada vez que alguém clica</b> no seu anúncio. Sem clique, sem cobrança.",
       "ex": "CPC de R$ 0,50 e 100 cliques dão R$ 50,00 de investimento (exemplo)."
      },
      {
       "t": "flow",
       "title": "Como o leilão decide",
       "items": [
        {
         "icon": "🔎",
         "title": "Cliente busca",
         "text": "Cada busca abre um leilão novo"
        },
        {
         "icon": "⚖️",
         "title": "Leilão roda",
         "text": "Lance e relevância entram na disputa"
        },
        {
         "icon": "🏆",
         "title": "Anúncios aparecem",
         "text": "Os mais bem pontuados ganham posição"
        },
        {
         "icon": "👆",
         "title": "Clique cobra",
         "text": "Você paga só quando clicam"
        }
       ],
       "caption": "Lance alto sozinho não garante o topo. Anúncio relevante pode ganhar posição com lance menor."
      },
      {
       "t": "p",
       "title": "Lance é só metade da história",
       "html": "O leilão olha o seu lance e também a <b>relevância</b>: o quanto o anúncio combina com a busca e convence. Anúncio forte tende a render mais por real investido. Anúncio fraco queima verba."
      },
      {
       "t": "table",
       "title": "Automática x manual",
       "head": [
        "",
        "Automática",
        "Manual"
       ],
       "rows": [
        [
         "Quem escolhe onde aparecer",
         "A plataforma",
         "Você"
        ],
        [
         "Controle",
         "Menor",
         "Maior"
        ],
        [
         "Trabalho na rotina",
         "Menor",
         "Maior"
        ],
        [
         "Bom pra",
         "Começar e testar",
         "Produto que você domina"
        ]
       ],
       "caption": "Nenhuma ganha sempre. A escolha depende de quanto controle o produto pede."
      },
      {
       "t": "big",
       "emoji": "💸",
       "html": "Clique pago <b>não é</b> venda paga.",
       "sub": "Quem clica e não compra custa o mesmo dinheiro."
      },
      {
       "t": "conta",
       "title": "Quanto custa uma venda (exemplo)",
       "rows": [
        [
         "Cliques no anúncio",
         "200"
        ],
        [
         "CPC (custo por clique)",
         "R$ 0,50"
        ],
        [
         "Investimento (200 x R$ 0,50)",
         "R$ 100,00",
         "neg"
        ],
        [
         "Conversão (compraram)",
         "2,5% dos cliques"
        ],
        [
         "Vendas (200 x 2,5%)",
         "5"
        ]
       ],
       "total": [
        "Ads por venda (R$ 100 ÷ 5)",
        "R$ 20,00"
       ],
       "note": "Números de exemplo, só pra conta fechar."
      },
      {
       "t": "chart",
       "kind": "funnel",
       "title": "Do anúncio à compra (exemplo)",
       "data": [
        {
         "label": "Viram o anúncio",
         "value": 10000
        },
        {
         "label": "Clicaram",
         "value": 200
        },
        {
         "label": "Compraram",
         "value": 5
        }
       ],
       "caption": "Olha onde o funil aperta: de 10 mil pessoas que viram, só 5 compraram. Cada etapa tem a sua taxa."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "Formatos, critérios do leilão e nomes das campanhas mudam. A fonte final é a documentação oficial do <b>Mercado Ads</b> e do Mercado Livre. Na dúvida, confira antes de explicar pro cliente."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Ads é um leilão: você escolhe quanto pagar por clique, mas quem aparece também depende de quão bom é o anúncio. Por isso a gente arruma o anúncio antes de colocar verba.”"
      },
      {
       "t": "quiz",
       "q": "Um seller diz: “se eu der o maior lance no Product Ads, apareço em primeiro sempre”. Qual resposta está certa?",
       "options": [
        "Sim: o leilão ordena só pelo lance, e quem paga mais por clique fica sempre na frente de todos",
        "Sim, mas só na campanha manual; na automática a plataforma escolhe a posição pelo menor lance",
        "Nem sempre: o leilão pesa o lance e também a relevância, então anúncio fraco pode perder mesmo com lance alto",
        "Não: a posição depende só do preço do produto, e o lance serve apenas para ligar a campanha no painel"
       ],
       "answer": [
        2
       ],
       "why": "O leilão combina lance e relevância do anúncio. Por isso anúncio ruim com lance alto pode perder pra um anúncio forte com lance menor."
      },
      {
       "t": "recap",
       "items": [
        "Product Ads: anúncio patrocinado, pago por <b>clique</b>",
        "Leilão: lance <b>e relevância</b> decidem quem aparece",
        "Automática dá menos trabalho. Manual dá mais controle",
        "Ads não conserta anúncio fraco"
       ]
      }
     ]
    },
    {
     "id": "gf-l11-2",
     "title": "Métricas: ACOS, ROAS e TACOS",
     "minutes": 8,
     "goal": "Conseguir calcular ACOS, ROAS e TACOS e explicar por que um ROAS bom ainda pode dar prejuízo.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📊",
       "title": "Os números que mandam no ads",
       "text": "Em poucos minutos você calcula ACOS, ROAS e TACOS e entende por que um ROAS bom pode dar prejuízo."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Um ROAS bom pode dar prejuízo?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Depende da margem do produto."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "ACOS = ads ÷ vendas com ads. ROAS = vendas com ads ÷ ads. TACOS = ads ÷ vendas totais. Piso do ROAS = 1 ÷ margem."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Compare o ROAS com o piso do produto."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🧮",
       "html": "Três siglas, três <b>divisões</b> simples.",
       "sub": "Muda só o que você coloca em cima e embaixo."
      },
      {
       "t": "jargon",
       "term": "ACOS",
       "tag": "Custo de ads sobre vendas",
       "means": "Quanto você gasta de ads pra cada R$ 1 <b>vendido com ads</b>. Conta: ads ÷ vendas com ads.",
       "ex": "Ads de R$ 100 e vendas com ads de R$ 500: ACOS de 20%."
      },
      {
       "t": "jargon",
       "term": "ROAS",
       "tag": "Retorno sobre o ads",
       "means": "Quanto você <b>vende com ads</b> pra cada R$ 1 gasto. É o ACOS de ponta-cabeça: vendas com ads ÷ ads.",
       "ex": "R$ 500 de vendas com R$ 100 de ads: ROAS de 5x."
      },
      {
       "t": "jargon",
       "term": "TACOS",
       "tag": "Peso do ads na conta toda",
       "means": "Ads dividido pelas <b>vendas totais</b> da conta, com ads ou sem. Mostra o peso do ads no negócio inteiro.",
       "ex": "Ads de R$ 100 e vendas totais de R$ 1.000: TACOS de 10%."
      },
      {
       "t": "conta",
       "title": "O mesmo mês, três métricas (exemplo)",
       "rows": [
        [
         "Vendas totais da conta",
         "R$ 10.000,00"
        ],
        [
         "Vendas com ads (atribuídas)",
         "R$ 4.000,00"
        ],
        [
         "Vendas orgânicas (sem clique pago)",
         "R$ 6.000,00"
        ],
        [
         "Investimento em ads",
         "R$ 800,00",
         "neg"
        ],
        [
         "ACOS (800 ÷ 4.000)",
         "20%"
        ],
        [
         "ROAS (4.000 ÷ 800)",
         "5x"
        ]
       ],
       "total": [
        "TACOS (800 ÷ 10.000)",
        "8%"
       ],
       "note": "Números de exemplo."
      },
      {
       "t": "chart",
       "kind": "donut",
       "title": "De onde vieram as vendas (exemplo)",
       "center": "R$ 10.000",
       "data": [
        {
         "label": "Com ads",
         "value": 4000
        },
        {
         "label": "Orgânicas",
         "value": 6000
        }
       ],
       "caption": "Quatro de cada dez reais vieram com ads. Os outros seis vieram sem pagar clique."
      },
      {
       "t": "sim",
       "kind": "acostacos",
       "title": "Bora treinar: ACOS, ROAS e TACOS.",
       "intro": "Calcule as métricas em cada rodada. Os números mudam toda vez.",
       "rounds": 3
      },
      {
       "t": "jargon",
       "term": "CTR",
       "tag": "Taxa de cliques",
       "means": "De cada 100 pessoas que <b>viram</b> o anúncio, quantas clicaram. Conta: cliques ÷ vezes que o anúncio apareceu.",
       "ex": "10.000 viram e 200 clicaram: CTR de 2%."
      },
      {
       "t": "jargon",
       "term": "CVR",
       "tag": "Taxa de conversão",
       "means": "De cada 100 <b>cliques</b>, quantos viraram venda. Conta: vendas ÷ cliques.",
       "ex": "200 cliques e 5 vendas: CVR de 2,5%."
      },
      {
       "t": "p",
       "title": "Venda atribuída x orgânica",
       "html": "Venda <b>atribuída</b> é a que a plataforma credita ao anúncio: a pessoa clicou e comprou depois. <b>Orgânica</b> é a que veio sem clique pago. A janela de atribuição muda, então confira a vigente no Mercado Ads."
      },
      {
       "t": "quiz",
       "q": "Ads de R$ 600 geraram R$ 3.000 em vendas com ads, e as vendas totais do mês foram R$ 12.000 (números de exemplo). Qual é o TACOS?",
       "options": [
        "TACOS de 20%: R$ 600 ÷ R$ 3.000 de vendas com ads",
        "TACOS de 5%: R$ 600 ÷ R$ 12.000 de vendas totais",
        "TACOS de 25%: R$ 3.000 ÷ R$ 12.000 de vendas totais",
        "TACOS de 5x: R$ 3.000 ÷ R$ 600 de ads investidos"
       ],
       "answer": [
        1
       ],
       "why": "TACOS é ads dividido pelas vendas totais: 600 ÷ 12.000 = 5%. Os 20% são o ACOS e o 5x é o ROAS."
      },
      {
       "t": "big",
       "emoji": "⚠️",
       "html": "ROAS de 4x <b>parece bom</b>. Mas e a margem?",
       "sub": "Todo ROAS tem um piso. Abaixo dele, cada venda perde dinheiro."
      },
      {
       "t": "conta",
       "title": "ROAS 4x e margem 20% (exemplo)",
       "rows": [
        [
         "Vendas com ads (ROAS 4x)",
         "R$ 4.000,00"
        ],
        [
         "Margem antes do ads (20%)",
         "R$ 800,00",
         "pos"
        ],
        [
         "Ads investido",
         "- R$ 1.000,00",
         "neg"
        ]
       ],
       "total": [
        "Resultado",
        "- R$ 200,00"
       ],
       "note": "Margem de contribuição: o que sobra da venda depois de produto, imposto, comissão e frete, antes do ads."
      },
      {
       "t": "jargon",
       "term": "ROAS de equilíbrio",
       "tag": "O piso",
       "means": "O ROAS em que o ads <b>só se paga</b>, sem lucro e sem prejuízo. Conta: 1 ÷ margem de contribuição.",
       "ex": "Margem de 20%: 1 ÷ 0,20 = 5x. Abaixo de 5x, a venda perde dinheiro."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "ROAS de equilíbrio por margem",
       "unit": "x",
       "hl": 1,
       "data": [
        {
         "label": "Margem 10%",
         "value": 10
        },
        {
         "label": "Margem 20%",
         "value": 5
        },
        {
         "label": "Margem 25%",
         "value": 4
        },
        {
         "label": "Margem 40%",
         "value": 2.5
        }
       ],
       "caption": "Quanto menor a margem, mais alto o piso. Olha a barra de 10%: precisa de 10x só pra empatar."
      },
      {
       "t": "lab",
       "preset": "roas",
       "title": "Mexa na margem e no ROAS",
       "intro": "Arraste a margem e o ROAS atual. Veja o piso, o ACOS equivalente e o resultado de cada R$ 1.000 de ads.",
       "defaults": {
        "margem": 20,
        "roas": 4
       },
       "note": "Números de exemplo."
      },
      {
       "t": "callout",
       "tone": "regra",
       "title": "Regra de bolso",
       "html": "ROAS de equilíbrio = <b>1 ÷ margem</b>. O ACOS de equilíbrio é a própria margem. Margem de 25%? ROAS mínimo de 4x e ACOS máximo de 25%."
      },
      {
       "t": "quiz",
       "q": "Uma campanha tem ROAS de 4x e a margem do produto, antes do ads, é de 20% (números de exemplo). Por que isso pode dar prejuízo?",
       "options": [
        "O piso é 5x (1 ÷ 0,20): com 4x o ads custa mais que a margem, e cada venda perde dinheiro",
        "O piso é 4x, igual ao ROAS atual, então a campanha só empata e o prejuízo vem dos custos fixos da loja",
        "O ROAS só vale se passar de 10x; abaixo disso o ads nunca se paga, seja qual for a margem do produto",
        "Não dá prejuízo: ROAS acima de 3x sempre cobre o ads, porque as vendas atribuídas já pagam a campanha"
       ],
       "answer": [
        0
       ],
       "why": "Com margem de 20%, o ROAS de equilíbrio é 1 ÷ 0,20 = 5x. Em 4x, cada R$ 1.000 de ads gera R$ 4.000 de vendas, R$ 800 de margem e perde R$ 200."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Seu ROAS está em 4, mas o produto deixa só 20% de margem, então o piso do ROAS é 1 ÷ 0,20 = 5. Ou seja, o Ads está dando prejuízo. Primeiro acertamos preço ou custo, depois mexemos na verba.”"
      },
      {
       "t": "recap",
       "items": [
        "<b>ACOS</b> = ads ÷ vendas com ads",
        "<b>ROAS</b> = vendas com ads ÷ ads",
        "<b>TACOS</b> = ads ÷ vendas totais",
        "Piso do ROAS = <b>1 ÷ margem</b>. Abaixo dele, prejuízo"
       ]
      }
     ]
    },
    {
     "id": "gf-l11-3",
     "title": "Estrutura e otimização de campanha",
     "minutes": 8,
     "goal": "Conseguir separar campanhas por curva, margem e objetivo e montar uma rotina semanal com regras “se X, então Y”.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🧱",
       "title": "Campanha arrumada, verba que rende",
       "text": "Você aprende a separar campanhas por curva e margem, montar a rotina semanal e escrever regras de decisão."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como organizar e otimizar as campanhas?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Cada grupo de produtos tem o seu ROAS objetivo."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Separe por curva, margem e objetivo. Rotina semanal: ler, cortar, escalar e testar, com regras “se X, então Y”."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Ads não conserta preço ruim, estoque curto nem anúncio fraco."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🥣",
       "html": "Tudo no mesmo balaio vira <b>média que mente</b>.",
       "sub": "Produto de margem alta e de margem baixa pedem metas diferentes."
      },
      {
       "t": "chart",
       "kind": "pareto",
       "title": "Curva ABC dos produtos (exemplo)",
       "unit": "R$",
       "data": [
        {
         "label": "Garrafa térmica",
         "value": 4200
        },
        {
         "label": "Copo inox",
         "value": 2600
        },
        {
         "label": "Marmita",
         "value": 1500
        },
        {
         "label": "Squeeze",
         "value": 900
        },
        {
         "label": "Tampa",
         "value": 500
        },
        {
         "label": "Chaveiro",
         "value": 300
        }
       ],
       "caption": "Os três primeiros passam dos 80% do faturamento: curva A. Os do meio são B. A cauda é C."
      },
      {
       "t": "jargon",
       "term": "Curva ABC",
       "means": "Produtos em fila, do que mais fatura ao que menos fatura. <b>A</b>: cerca de 80% do faturamento. <b>B</b>: 15%. <b>C</b>: 5%.",
       "ex": "No gráfico, três produtos fazem a curva A. A cauda é a curva C."
      },
      {
       "t": "table",
       "title": "Estrutura por curva (sugestão)",
       "head": [
        "",
        "Curva A",
        "Curva B",
        "Curva C"
       ],
       "rows": [
        [
         "Objetivo",
         "Defender e escalar",
         "Crescer com cuidado",
         "Testar ou segurar"
        ],
        [
         "Verba",
         "A maior parte",
         "Moderada",
         "Pouca ou pausada"
        ],
        [
         "Risco",
         "Perder posição",
         "Gastar sem retorno",
         "Queimar verba"
        ],
        [
         "Olhar",
         "Mais de perto",
         "Rotina semanal",
         "Só nos testes"
        ]
       ],
       "caption": "Sugestão da aula, não regra da plataforma. O dado da conta ajusta tudo."
      },
      {
       "t": "p",
       "title": "Três eixos pra separar campanha",
       "html": "Separe por <b>curva</b> (quanto o produto fatura), por <b>margem</b> (quanto sobra antes do ads) e por <b>objetivo</b> (vender mais, liquidar estoque ou lançar produto). Cada grupo ganha a sua meta de ROAS."
      },
      {
       "t": "jargon",
       "term": "ROAS objetivo",
       "tag": "A meta da campanha",
       "means": "O ROAS que você pede pra campanha perseguir. Meta alta costuma trazer menos volume. Meta baixa traz mais volume e mais risco.",
       "ex": "Piso de 4x? Um objetivo de 5x deixa folga de segurança (exemplo)."
      },
      {
       "t": "anno",
       "preset": "ads",
       "title": "A tela do ads por dentro",
       "notes": [
        "Investimento: quanto saiu do seu bolso no período",
        "Vendas com Ads: só as que o anúncio levou o crédito",
        "ACOS: ads ÷ vendas com ads. Compare com a margem do produto",
        "ROAS: vendas com ads ÷ ads. Compare com o piso de equilíbrio",
        "ROAS objetivo: a meta que você define pra campanha"
       ]
      },
      {
       "t": "sim",
       "kind": "roaseq",
       "title": "Bora treinar: ROAS de equilíbrio.",
       "intro": "Dada a margem, ache o piso de ROAS e o resultado de cada R$ 1 de ads.",
       "rounds": 3
      },
      {
       "t": "flow",
       "title": "Rotina semanal de ads",
       "loop": true,
       "items": [
        {
         "icon": "📊",
         "title": "Ler os números",
         "text": "ACOS, ROAS e TACOS por campanha"
        },
        {
         "icon": "🔍",
         "title": "Achar os ralos",
         "text": "Quem gasta e não vende?"
        },
        {
         "icon": "✂️",
         "title": "Pausar ou cortar",
         "text": "Segure o que está abaixo do piso"
        },
        {
         "icon": "🚀",
         "title": "Escalar o que paga",
         "text": "Suba a verba aos poucos"
        },
        {
         "icon": "🧪",
         "title": "Testar uma coisa",
         "text": "Uma mudança por vez"
        }
       ],
       "caption": "Repete toda semana. Anotar o que mudou evita confusão depois."
      },
      {
       "t": "big",
       "emoji": "🧭",
       "html": "Regra boa tem a forma <b>se X, então Y</b>.",
       "sub": "Decisão escrita não depende de humor."
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "Se o ROAS está abaixo do piso",
         "html": "com cliques suficientes, então pause ou baixe o lance e revise o anúncio."
        },
        {
         "title": "Se o ROAS está acima da meta",
         "html": "e o estoque aguenta, então suba o orçamento aos poucos."
        },
        {
         "title": "Se tem clique e não tem venda",
         "html": "então confira preço, fotos e título antes de gastar mais."
        },
        {
         "title": "Se o TACOS sobe e as vendas totais não",
         "html": "então o ads pode estar pagando vendas que viriam de graça."
        }
       ]
      },
      {
       "t": "timeline",
       "title": "Plano de ads 30/60/90",
       "items": [
        {
         "when": "Dias 1 a 30",
         "label": "Arrumar a base e medir",
         "text": "Preço, estoque, anúncio e metas por curva"
        },
        {
         "when": "Dias 31 a 60",
         "label": "Cortar e testar",
         "text": "Pausar ralos e testar uma mudança por vez"
        },
        {
         "when": "Dias 61 a 90",
         "label": "Escalar o que paga",
         "text": "Subir verba onde passa do piso"
        }
       ]
      },
      {
       "t": "list",
       "title": "Mão na massa",
       "items": [
        "Escolha uma conta de teste ou uma conta real anonimizada",
        "Classifique os produtos em curva A, B e C",
        "Calcule o ROAS de equilíbrio de cada grupo",
        "Escreva o plano 30/60/90 com ROAS objetivo e quatro regras “se X, então Y”"
       ]
      },
      {
       "t": "chart",
       "kind": "waterfall",
       "title": "Ads em margem curta (exemplo)",
       "unit": "R$",
       "data": [
        {
         "label": "Preço",
         "value": 100,
         "type": "start"
        },
        {
         "label": "Produto",
         "value": -52
        },
        {
         "label": "Comissão e frete",
         "value": -28
        },
        {
         "label": "Imposto",
         "value": -8
        },
        {
         "label": "Ads",
         "value": -10
        },
        {
         "label": "Sobra",
         "type": "total"
        }
       ],
       "caption": "Antes do ads sobravam R$ 12. Depois de R$ 10 de ads, sobram R$ 2 por venda."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Ligar ads em produto com <b>preço ruim</b>, <b>estoque curto</b> ou <b>anúncio fraco</b>. O ads traz o clique, mas não conserta a base. Resultado: verba gasta e venda que não fecha."
      },
      {
       "t": "say",
       "title": "Fala assim: reportar sem esconder",
       "html": "“Essa semana o ROAS da campanha B ficou abaixo do piso. O motivo foi o preço, que subiu. Já pausei, vou ajustar o preço e te mostro o resultado na próxima semana.”"
      },
      {
       "t": "quiz",
       "q": "Um produto tem margem de 8% antes do ads e estoque pra cinco dias (números de exemplo). O seller quer ligar o ads agora. Qual é a melhor decisão?",
       "options": [
        "Ligar com ROAS objetivo baixo pra ganhar volume, porque o volume maior compensa a margem curta",
        "Segurar o ads: com margem curta o piso de ROAS é alto (12,5x), e sem estoque o clique vira venda perdida",
        "Ligar e subir o lance, pois o estoque curto se resolve vendendo rápido e girando o produto",
        "Ligar na campanha automática, porque a plataforma garante lucro mesmo com margem curta"
       ],
       "answer": [
        1
       ],
       "why": "Com margem de 8%, o piso é 1 ÷ 0,08 = 12,5x, difícil de bater. E com cinco dias de estoque o ads pode trazer cliques que viram ruptura. Arrume preço e estoque primeiro."
      },
      {
       "t": "recap",
       "items": [
        "Separe campanhas por <b>curva, margem e objetivo</b>",
        "Cada grupo tem o seu ROAS objetivo",
        "Rotina semanal: ler, cortar, escalar, testar",
        "Ads não conserta preço ruim, estoque curto ou anúncio fraco"
       ]
      }
     ]
    },
    {
     "id": "gf-l11-4",
     "title": "Brand Ads, Display e sazonalidade",
     "minutes": 7,
     "goal": "Saber quando usar Brand Ads e Display, como gerir verba em datas comemorativas e como detectar canibalização do orgânico.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🏷️",
       "title": "Além do Product Ads: marca e data",
       "text": "Veja pra que servem Brand Ads e Display, como gerir verba em datas comemorativas e como evitar pagar por venda grátis."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Brand Ads e Display valem a verba?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Ads pode pagar por venda que viria de graça: é a canibalização."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Compare as vendas totais antes e depois, não só as vendas com ads."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você define teto, ROAS mínimo e produtos antes do pico."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🎯",
       "html": "Product Ads <b>vende hoje</b>. Brand e Display <b>constroem</b> marca.",
       "sub": "Cada um tem um papel no funil."
      },
      {
       "t": "jargon",
       "term": "Brand Ads",
       "tag": "Anúncio de marca",
       "means": "Anúncio que <b>destaca a sua marca ou loja</b> na busca, com mais espaço visual que o anúncio comum.",
       "ex": "Alguém busca o nome da sua marca e vê a sua vitrine primeiro, antes do concorrente."
      },
      {
       "t": "jargon",
       "term": "Display",
       "tag": "Anúncio em banner",
       "means": "Anúncio em formato de <b>banner</b>, mostrado a um público mesmo que a pessoa não esteja buscando o produto.",
       "ex": "Quem viu seu produto ontem encontra o banner dele hoje."
      },
      {
       "t": "jargon",
       "term": "Remarketing",
       "tag": "Chamar de volta",
       "means": "Mostrar o anúncio de novo pra quem <b>já viu ou visitou</b> o seu produto e não comprou.",
       "ex": "A pessoa olhou a garrafa, saiu, e mais tarde vê o anúncio dela de novo."
      },
      {
       "t": "flow",
       "title": "Funil: onde cada anúncio entra",
       "items": [
        {
         "icon": "👀",
         "title": "Descobre (Display)",
         "text": "Topo do funil: ainda nem busca o produto"
        },
        {
         "icon": "🔎",
         "title": "Procura (Product Ads)",
         "text": "Está buscando; o anúncio patrocinado aparece"
        },
        {
         "icon": "🛒",
         "title": "Decide (Remarketing)",
         "text": "Viu e não comprou; o anúncio volta a lembrar"
        }
       ],
       "caption": "Brand Ads fica na busca pelo nome da marca: defende o seu espaço contra concorrentes."
      },
      {
       "t": "table",
       "title": "Qual anúncio pra qual objetivo",
       "head": [
        "",
        "Product Ads",
        "Brand Ads",
        "Display"
       ],
       "rows": [
        [
         "Papel",
         "Vender agora",
         "Defender a marca",
         "Lembrar e alcançar"
        ],
        [
         "Faz sentido quando",
         "Base pronta e margem ok",
         "Marca com buscas pelo nome",
         "Quer alcance ou recompra"
        ],
        [
         "Como medir",
         "ACOS e ROAS",
         "Vendas e buscas da marca",
         "Alcance e vendas depois"
        ]
       ],
       "caption": "Brand e Display costumam medir diferente: nem sempre a venda aparece no mesmo dia."
      },
      {
       "t": "quiz",
       "q": "O seller tem uma marca que já aparece nas buscas pelo nome e teme que concorrentes ocupem esse espaço. Qual formato combina mais?",
       "options": [
        "Display, porque o banner garante o topo da busca quando alguém digita o nome da marca",
        "Product Ads automática, porque cobre todos os termos de marca sem custo extra de verba",
        "Remarketing, porque só mostra anúncio a quem nunca ouviu falar da marca e não a defende",
        "Brand Ads, porque destaca a marca na busca pelo nome e defende o espaço"
       ],
       "answer": [
        3
       ],
       "why": "Brand Ads existe para destacar a marca na busca e defender esse espaço. Display e remarketing trabalham alcance e recompra, e não garantem o topo da busca."
      },
      {
       "t": "big",
       "emoji": "📅",
       "html": "Data comemorativa: <b>todo mundo</b> investe mais.",
       "sub": "Mais disputa no leilão, e o CPC tende a subir."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "ROAS em semana de data (exemplo)",
       "unit": "x",
       "x": [
        "S1",
        "S2",
        "S3",
        "S4",
        "S5",
        "S6"
       ],
       "series": [
        {
         "name": "ROAS",
         "values": [
          5.2,
          5,
          4.4,
          3.8,
          3.3,
          4.6
         ]
        },
        {
         "name": "Piso de equilíbrio",
         "values": [
          4,
          4,
          4,
          4,
          4,
          4
         ],
         "tone": "pink"
        }
       ],
       "caption": "Olha onde a linha cai abaixo do piso: S4 e S5, as semanas de pico, gastam mais do que devolvem."
      },
      {
       "t": "p",
       "title": "Defina antes do pico",
       "html": "No pico, decida <b>antes</b>: teto de orçamento, ROAS mínimo e quais produtos entram. Estoque e preço fechados. Sem regra escrita, a verba escorre no calor da data."
      },
      {
       "t": "lab",
       "preset": "roas",
       "title": "Teste o ROAS do pico",
       "intro": "Margem de 25%: o piso é 4x. Arraste o ROAS pra 3,5x e veja o que acontece com cada R$ 1.000 de ads.",
       "defaults": {
        "margem": 25,
        "roas": 3.5
       },
       "note": "Números de exemplo."
      },
      {
       "t": "timeline",
       "title": "Data comemorativa em 3 tempos",
       "items": [
        {
         "when": "Antes",
         "label": "Preparar a base",
         "text": "Estoque, preço e anúncios prontos antes da data"
        },
        {
         "when": "No pico",
         "label": "Verba com teto e meta",
         "text": "Acompanhe ROAS e orçamento com frequência"
        },
        {
         "when": "Depois",
         "label": "Medir e voltar ao normal",
         "text": "Compare vendas totais, antes e depois"
        }
       ]
      },
      {
       "t": "jargon",
       "term": "Canibalização",
       "tag": "Ads comendo o orgânico",
       "means": "Quando o ads <b>paga por uma venda</b> que viria de graça, sem clique pago, de qualquer jeito.",
       "ex": "Cliente que já ia comprar clica no anúncio patrocinado em vez do resultado normal."
      },
      {
       "t": "conta",
       "title": "Ads vendeu 60, mas ganhou só 10 (exemplo)",
       "rows": [
        [
         "Vendas por mês, antes do ads",
         "100 un"
        ],
        [
         "Vendas com ads, depois",
         "60 un"
        ],
        [
         "Vendas orgânicas, depois",
         "50 un"
        ],
        [
         "Vendas totais, depois (60 + 50)",
         "110 un"
        ],
        [
         "Ganho real (110 - 100)",
         "10 un",
         "pos"
        ],
        [
         "Investimento em ads",
         "R$ 300,00",
         "neg"
        ]
       ],
       "total": [
        "Ads por venda extra (R$ 300 ÷ 10)",
        "R$ 30,00"
       ],
       "note": "O painel mostra 60 vendas com ads, mas só 10 foram vendas extras."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Como pegar a canibalização",
       "html": "Olhe as <b>vendas totais</b> e o <b>TACOS</b>, não só as vendas com ads. Se o ads sobe e o total quase não mexe, o anúncio talvez esteja só trocando venda grátis por venda paga."
      },
      {
       "t": "quiz",
       "q": "Depois de ligar o ads, as vendas com ads foram de 60 unidades e as orgânicas caíram de 100 para 50 (números de exemplo). Qual leitura está certa?",
       "options": [
        "O ganho foi de 60 unidades, porque tudo que o painel atribui ao ads é venda nova",
        "O ganho foi de 50 unidades, as orgânicas que sobraram, porque o ads não afeta o orgânico",
        "O ganho real foi de 10 unidades (60 + 50 - 100): o ads canibalizou parte do orgânico",
        "Não houve ganho: as vendas totais ficaram iguais em 100 e só mudou quem levou o crédito"
       ],
       "answer": [
        2
       ],
       "why": "Antes eram 100 vendas. Depois, 60 com ads mais 50 orgânicas dão 110. O ganho real é de 10 unidades, bem menor que as 60 que o painel mostra."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Vamos comparar as vendas totais antes e depois do Brand Ads, e não só as vendas com Ads. Se o total não subiu, estamos pagando por uma venda que viria de graça.”"
      },
      {
       "t": "recap",
       "items": [
        "<b>Brand Ads</b> defende a marca. <b>Display</b> alcança e lembra",
        "No pico, defina teto, ROAS mínimo e produtos antes",
        "<b>Canibalização</b>: ads paga por venda que viria de graça",
        "Compare vendas totais, não só as vendas com ads"
       ]
      }
     ]
    },
    {
     "id": "gf-l11-5",
     "title": "Shopee Ads e campanhas automáticas",
     "minutes": 7,
     "goal": "Entender os formatos do Shopee Ads, quando automatizar a campanha e quando manter o controle manual.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🛍️",
       "title": "Shopee Ads sem cabeça de Mercado Livre",
       "text": "Veja os três formatos do Shopee Ads, como funciona a campanha automatizada e quando vale manter o controle na mão."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como funciona o Shopee Ads?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "São três formatos: busca de produto, busca de loja e descoberta."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Automatizada: menos trabalho, menos controle. GMV é faturamento, não lucro."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você usa teto de orçamento e meta de ROAS."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🔀",
       "html": "Shopee tem outro cliente, outra lógica e <b>outro ads</b>.",
       "sub": "Operar a Shopee com a cabeça do Mercado Livre é erro comum."
      },
      {
       "t": "jargon",
       "term": "Busca de produto",
       "means": "Anúncio de <b>produto</b> nos resultados de busca por palavra-chave, pra quem já procura algo.",
       "ex": "Cliente busca “capa de celular” e vê o seu produto patrocinado."
      },
      {
       "t": "jargon",
       "term": "Busca de loja",
       "means": "Anúncio que destaca a <b>sua loja</b> quando a pessoa busca pelo nome da loja ou da marca.",
       "ex": "Cliente digita o nome da sua marca e a sua loja aparece em destaque."
      },
      {
       "t": "jargon",
       "term": "Descoberta",
       "means": "Anúncio em áreas de <b>sugestão</b>, pra quem está navegando e ainda não buscou nada.",
       "ex": "Quem olha um produto parecido vê o seu entre as sugestões."
      },
      {
       "t": "table",
       "title": "Os 3 formatos lado a lado",
       "head": [
        "",
        "Busca de produto",
        "Busca de loja",
        "Descoberta"
       ],
       "rows": [
        [
         "Cliente está",
         "Procurando um produto",
         "Procurando uma loja ou marca",
         "Navegando, sem buscar"
        ],
        [
         "Foco",
         "Vender o produto",
         "Defender e mostrar a loja",
         "Alcance e novas visitas"
        ],
        [
         "Como medir",
         "ROAS e vendas",
         "Vendas da loja",
         "Cliques, visitas e vendas"
        ]
       ],
       "caption": "O nome lembra o Mercado Ads, mas o cliente e a vitrine são outros."
      },
      {
       "t": "jargon",
       "term": "GMV",
       "tag": "Valor total vendido",
       "means": "Quanto a loja <b>vendeu em R$</b> no período, antes de descontar custos. É faturamento, não lucro.",
       "ex": "R$ 9.000 vendidos: GMV de R$ 9.000, mesmo que sobrem só R$ 900."
      },
      {
       "t": "p",
       "title": "Campanha automatizada de GMV",
       "html": "Você define <b>orçamento</b> e <b>meta</b>. O sistema escolhe palavras, lances e posições pra buscar o máximo de GMV. Dá menos trabalho e escala rápido, mas você controla menos o que acontece."
      },
      {
       "t": "compare",
       "left": {
        "title": "Quando automatizar",
        "tone": "good",
        "items": [
         "Loja nova ou produto sem histórico",
         "Muitos produtos pra cuidar",
         "Data oficial pedindo escala rápida"
        ]
       },
       "right": {
        "title": "Quando manter manual",
        "tone": "good",
        "items": [
         "Margem apertada e piso de ROAS alto",
         "Produto estratégico da curva A",
         "Você quer controlar palavra e lance"
        ]
       }
      },
      {
       "t": "table",
       "title": "Manual x automatizada (exemplo)",
       "head": [
        "",
        "Manual",
        "Automatizada"
       ],
       "hl": 1,
       "rows": [
        [
         "Investimento",
         "R$ 1.000",
         "R$ 2.000"
        ],
        [
         "Vendas com ads",
         "R$ 6.000",
         "R$ 9.000"
        ],
        [
         "ROAS",
         "6x",
         "4,5x"
        ],
        [
         "Sobra após ads (margem 25%)",
         "R$ 500",
         "R$ 250"
        ]
       ],
       "caption": "A automatizada vendeu mais e sobrou menos. Quem decide é a margem e a meta de ROAS."
      },
      {
       "t": "big",
       "emoji": "🧠",
       "html": "Vendeu mais não é <b>lucrou mais</b>.",
       "sub": "O GMV sobe e a sobra pode cair. Olhe a margem."
      },
      {
       "t": "lab",
       "preset": "roas",
       "title": "Teste a campanha automatizada",
       "intro": "Margem de 25%: o piso é 4x. Veja o resultado com ROAS 4,5x, como na automatizada, e mexa nos controles.",
       "defaults": {
        "margem": 25,
        "roas": 4.5
       },
       "note": "Números de exemplo."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Nomes, escopo, metas e formatos das campanhas automatizadas da Shopee mudam com frequência. A fonte final é a documentação oficial (Shopee University e Central do Vendedor). Confira antes de configurar ou explicar pro cliente."
      },
      {
       "t": "jargon",
       "term": "Rebate",
       "tag": "Incentivo em verba",
       "means": "Bônus ou crédito que a plataforma dá <b>quando você cumpre condições</b> de uma campanha, como investir um valor em ads.",
       "ex": "Cada campanha tem a sua regra: leia o regulamento antes de contar com o bônus."
      },
      {
       "t": "timeline",
       "title": "Ads alinhado à data oficial",
       "items": [
        {
         "when": "Antes",
         "label": "Entrar na campanha oficial",
         "text": "Preço, estoque e anúncios prontos"
        },
        {
         "when": "Esquentando",
         "label": "Subir ads nos produtos da data",
         "text": "Só nos que têm margem e estoque"
        },
        {
         "when": "No dia",
         "label": "Acompanhar verba e ROAS",
         "text": "Olhe várias vezes, a verba corre rápido"
        },
        {
         "when": "Depois",
         "label": "Medir e recolher verba",
         "text": "Compare com o piso e aprenda"
        }
       ]
      },
      {
       "t": "list",
       "title": "Mão na massa",
       "items": [
        "Pegue uma loja de teste ou uma real anonimizada",
        "Monte uma campanha manual e uma automatizada com o mesmo orçamento",
        "Compare vendas, ROAS e sobra depois do ads",
        "Escreva quando você automatiza e quando mantém manual"
       ]
      },
      {
       "t": "say",
       "title": "Fala assim: Shopee não é Mercado Livre",
       "html": "“Na Shopee o cliente tende a comprar por oferta e navega mais. Por isso o ads tem formatos de descoberta, e a gente usa a automatizada com teto de orçamento e meta de ROAS.”"
      },
      {
       "t": "quiz",
       "q": "A automatizada vendeu R$ 9.000 com R$ 2.000 de ads e a manual vendeu R$ 6.000 com R$ 1.000. A margem é 25% antes do ads (números de exemplo). Qual leitura está certa?",
       "options": [
        "A automatizada deixou mais sobra, porque vendeu R$ 3.000 a mais e o volume maior sempre compensa o ads",
        "A manual deixou mais sobra (R$ 500 contra R$ 250); a automatizada vendeu mais, mas rendeu menos",
        "As duas deixaram a mesma sobra, porque as duas ficaram acima do piso de 4x e isso iguala o resultado",
        "A manual deixou prejuízo, porque o ROAS de 6x é alto demais e mostra que o ads ficou abaixo do piso"
       ],
       "answer": [
        1
       ],
       "why": "Manual: 6.000 x 25% = 1.500, menos 1.000 de ads = R$ 500. Automatizada: 9.000 x 25% = 2.250, menos 2.000 = R$ 250. Mais GMV não significa mais lucro."
      },
      {
       "t": "recap",
       "items": [
        "Três formatos: <b>busca de produto, busca de loja, descoberta</b>",
        "<b>Automatizada</b>: menos trabalho, menos controle",
        "GMV é faturamento, <b>não é lucro</b>",
        "Regras mudam: confira a documentação oficial"
       ]
      }
     ]
    },
    {
     "id": "gf-l11-6",
     "title": "Verba entre canais",
     "minutes": 7,
     "goal": "Conseguir decidir onde entra o próximo R$ 1.000 de ads e defender essa realocação com números.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "💰",
       "title": "Onde entra o próximo R$ 1.000?",
       "text": "Você aprende a comparar o retorno entre canais, mover verba com critério e defender a decisão com o seller."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Onde entra o próximo R$ 1.000 de Ads?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Compare o retorno do próximo real, não a média."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Mova verba só pra quem fica acima do piso, em passos pequenos, e meça na rotina."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você defende a realocação com conta, prazo e plano de volta."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🎯",
       "html": "Verba é <b>limitada</b>. Cada real tem que ir pra onde rende mais.",
       "sub": "Não importa a média. Importa o próximo real."
      },
      {
       "t": "jargon",
       "term": "Retorno marginal",
       "tag": "O que o próximo real rende",
       "means": "O ROAS do <b>dinheiro novo</b>, não o da média. O primeiro real rende bem. O último, quase sempre, rende menos.",
       "ex": "A campanha tem ROAS médio de 6x, mas o último R$ 1.000 rendeu só 2x."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Quanto rende cada R$ 1.000 novo (exemplo)",
       "unit": "x",
       "x": [
        "1º mil",
        "2º mil",
        "3º mil",
        "4º mil",
        "5º mil"
       ],
       "series": [
        {
         "name": "ROAS do mil",
         "values": [
          8,
          6,
          4.5,
          3.2,
          2.2
         ]
        },
        {
         "name": "Piso de equilíbrio",
         "values": [
          4,
          4,
          4,
          4,
          4
         ],
         "tone": "pink"
        }
       ],
       "caption": "Olha onde a linha cruza o piso: no 4º mil o dinheiro novo já perde."
      },
      {
       "t": "p",
       "title": "A mesma ideia vale entre canais",
       "html": "Mercado Livre, Shopee e outros canais (site próprio, redes sociais) rendem de formas diferentes. Mova verba pro canal onde o <b>próximo real</b> rende mais, mas só com dado da conta."
      },
      {
       "t": "table",
       "title": "Canais: o dado da conta manda",
       "head": [
        "",
        "Mercado Livre",
        "Shopee",
        "Outros canais"
       ],
       "rows": [
        [
         "Cliente tende a",
         "Buscar com intenção",
         "Comprar por oferta",
         "Depende do canal"
        ],
        [
         "Ads principal",
         "Product Ads, Brand, Display",
         "Busca, loja, descoberta",
         "Anúncios do próprio canal"
        ],
        [
         "Mede com",
         "ACOS, ROAS e TACOS",
         "ROAS, GMV e sobra",
         "Custo por venda e retorno"
        ]
       ],
       "caption": "Tendências, não regras. Quem manda é o retorno medido na sua conta."
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "Ache o piso",
         "html": "Calcule o ROAS de equilíbrio de cada campanha e canal."
        },
        {
         "title": "Veja quem tem espaço",
         "html": "Confira estoque, margem e se ainda há busca pra capturar."
        },
        {
         "title": "Compare o próximo real",
         "html": "Olhe o ROAS do último R$ 1.000, não a média."
        },
        {
         "title": "Mova aos poucos e meça",
         "html": "Mude em passos pequenos e revise na rotina semanal."
        }
       ]
      },
      {
       "t": "sim",
       "kind": "adsonde",
       "title": "Bora treinar: onde entra o próximo R$ 1.000.",
       "intro": "Em cada rodada, escolha a frente que mais rende acima do piso. Pense no retorno do dinheiro novo.",
       "rounds": 3
      },
      {
       "t": "chart",
       "kind": "donut",
       "title": "Verba de ads hoje (exemplo)",
       "center": "R$ 10.000",
       "data": [
        {
         "label": "ML curva A",
         "value": 5000
        },
        {
         "label": "ML curva B",
         "value": 2000
        },
        {
         "label": "Shopee",
         "value": 3000
        }
       ],
       "caption": "Metade da verba está na curva A do Mercado Livre. O resto se divide entre a curva B e a Shopee."
      },
      {
       "t": "conta",
       "title": "Mover R$ 1.000 da curva B pra A (exemplo)",
       "rows": [
        [
         "Margem antes do ads",
         "25%"
        ],
        [
         "ROAS de equilíbrio (1 ÷ 0,25)",
         "4x"
        ],
        [
         "R$ 1.000 na curva B (ROAS 2,5x)",
         "- R$ 375,00",
         "neg"
        ],
        [
         "R$ 1.000 na curva A (ROAS 5x)",
         "+ R$ 250,00",
         "pos"
        ]
       ],
       "total": [
        "Ganho de mover o mil da B pra A",
        "R$ 625,00"
       ],
       "note": "B: 2.500 x 25% - 1.000 = -375. A: 5.000 x 25% - 1.000 = +250. Supõe que a A mantém o ROAS no dinheiro novo."
      },
      {
       "t": "say",
       "title": "Fala assim pra defender a realocação",
       "html": "“Vou mover R$ 1.000 da campanha B, que rende 2,5x e perde dinheiro, pra campanha A, que rende 5x. Faço isso por duas semanas, acompanho o TACOS e volto atrás se o retorno cair.”"
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "A média engana",
       "html": "O ROAS médio esconde campanhas que perdem dinheiro. Olhe campanha por campanha e, dentro dela, o retorno do dinheiro novo. Benchmark de blog é referência; o dado da conta decide."
      },
      {
       "t": "lab",
       "preset": "roas",
       "title": "Compare duas frentes",
       "intro": "Margem de 25%. Teste o ROAS 2,5x da curva B, depois o 5x da curva A, e compare o resultado de R$ 1.000.",
       "defaults": {
        "margem": 25,
        "roas": 2.5
       },
       "note": "Números de exemplo."
      },
      {
       "t": "quiz",
       "q": "A margem é 25% antes do ads (números de exemplo). O último R$ 1.000 rendeu 3,2x na Shopee automatizada, 4,8x na curva A do ML e 1,5x na curva C do ML. Onde entra o próximo R$ 1.000?",
       "options": [
        "Na curva A do ML: 4,8x passa do piso de 4x, então o dinheiro novo ainda deixa sobra",
        "Na Shopee automatizada: 3,2x está perto do piso e a variedade de canal reduz o risco",
        "Dividido igual entre as três frentes, pra não depender de uma só e manter o equilíbrio",
        "Na curva C do ML: é a que tem mais espaço pra crescer e o ROAS baixo sobe com mais verba"
       ],
       "answer": [
        0
       ],
       "why": "O piso é 1 ÷ 0,25 = 4x. Só a curva A (4,8x) está acima dele. Shopee em 3,2x e curva C em 1,5x perdem dinheiro no real novo."
      },
      {
       "t": "recap",
       "items": [
        "Compare o <b>retorno do próximo real</b>, não a média",
        "Só vale mover verba pra quem fica <b>acima do piso</b>",
        "Mova em passos pequenos e meça na rotina",
        "Defenda a realocação com conta, prazo e plano de volta"
       ]
      }
     ]
    }
   ]
  }
 ]
});

/* Conteúdo da trilha "Mercado, produto e concorrência" (Formação Mamba, para Assessores e Gestores de Performance), em formato Stories.
   Cada item de `blocks` é um card de tela cheia. Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, recap, quiz, sim
   e os visuais chart, flow, table, tree, timeline, stairs, anno e lab (veja GUIA-STORIES.md).
   Assessor Estratégico e Gestor de Performance são funções com rotinas diferentes e o mesmo nível de conhecimento: não há escada entre elas.
   Todos os números das contas e dos gráficos são de exemplo. Regras de plataforma, taxas e impostos mudam: a fonte final é a documentação oficial e o contador do cliente.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
 "id": "mercado",
 "title": "Mercado, produto e concorrência",
 "finalScope": "final-mercado",
 "finalSize": 12,
 "tag": "Formação",
 "tagline": "Escolher o que vender, contra quem competir e quando comprar, com dado em vez de achismo.",
 "subtitle": "Formação Mamba, em stories, para Assessores e Gestores de Performance.",
 "modules": [
  {
   "id": "gf-m9",
   "n": 1,
   "title": "Mercado, produto e concorrência",
   "tagline": "Escolher o que vender, contra quem competir e quando comprar, com dado em vez de achismo.",
   "outcome": "Ao final, você lê um mercado, compara concorrentes, ajusta a estratégia ao perfil do seller e monta um plano de compra de 90 dias.",
   "lessons": [
    {
     "id": "gf-l9-1",
     "title": "Entender mercado e produto",
     "minutes": 7,
     "goal": "Entender como ler tamanho de categoria, tendência e ciclo de vida, e extrair insight das avaliações do concorrente.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🧭",
       "title": "Vender bem começa antes do anúncio",
       "text": "Escolher o que vender e contra quem competir vale mais que ajustar título. Bora aprender a ler mercado e produto."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Vale entrar neste mercado?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Tamanho de categoria mostra volume, não facilidade."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Leia tamanho, sazonalidade, ciclo de vida e as reclamações dos concorrentes."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você decide com o dado da conta e usa o mercado só como pista."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🎯",
       "html": "Vender bem é escolher bem: <b>o quê</b>, <b>como</b> e <b>contra quem</b>.",
       "sub": "Anúncio perfeito em mercado ruim continua vendendo pouco."
      },
      {
       "t": "list",
       "title": "4 perguntas para ler um mercado",
       "items": [
        "<b>Quanto vende?</b> Tamanho da categoria (o corredor da loja onde o produto fica)",
        "<b>Pra onde vai?</b> Tendência: a procura está subindo ou caindo",
        "<b>Quando vende?</b> Sazonalidade: os meses em que a procura muda",
        "<b>Em que fase está?</b> Ciclo de vida: do lançamento ao declínio"
       ]
      },
      {
       "t": "jargon",
       "term": "Categoria",
       "means": "O <b>corredor da loja</b> onde seu produto fica. Cada categoria tem tamanho, concorrentes e datas fortes próprios.",
       "ex": "Capa de celular e fone de ouvido são categorias diferentes, cada uma com seu movimento."
      },
      {
       "t": "p",
       "title": "Tamanho não é oportunidade",
       "html": "Categoria grande vende muito, mas também tem muita gente disputando. Categoria pequena pode ser um nicho (público específico) com pouca briga. Olhe os dois números: <b>quanto vende</b> e <b>quantos disputam</b>."
      },
      {
       "t": "chart",
       "kind": "hbar",
       "title": "Cozinha: vendas por subcategoria (exemplo)",
       "unit": "un",
       "hl": 0,
       "data": [
        {
         "label": "Potes",
         "value": 5200
        },
        {
         "label": "Facas",
         "value": 3100
        },
        {
         "label": "Garrafas",
         "value": 2600
        },
        {
         "label": "Organizadores",
         "value": 1800
        },
        {
         "label": "Tábuas",
         "value": 900
        }
       ],
       "caption": "Potes lideram, mas é onde mais gente disputa. Tamanho mostra volume, não facilidade de vender."
      },
      {
       "t": "jargon",
       "term": "Sazonalidade",
       "means": "Quando a procura <b>sobe e desce</b> ao longo do ano por causa de datas, estações ou hábitos.",
       "ex": "Ventilador vende muito no calor. Casaco vende mais no frio."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Presentes: vendas por mês (exemplo)",
       "unit": "un",
       "x": [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago"
       ],
       "series": [
        {
         "name": "Vendas",
         "values": [
          120,
          110,
          140,
          210,
          420,
          260,
          150,
          230
         ]
        }
       ],
       "caption": "Olha o pico em maio e o segundo morro em agosto. A demanda não é uma linha reta."
      },
      {
       "t": "stairs",
       "title": "Ciclo de vida de um produto",
       "items": [
        {
         "tag": "1",
         "title": "Lançamento",
         "text": "Poucas vendas e muito teste de preço e anúncio"
        },
        {
         "tag": "2",
         "title": "Crescimento",
         "text": "A procura sobe e entram novos concorrentes"
        },
        {
         "tag": "3",
         "title": "Maturidade",
         "text": "Vendas estáveis; a briga é por preço e entrega"
        },
        {
         "tag": "4",
         "title": "Declínio",
         "text": "A procura cai; hora de liquidar ou trocar o produto"
        }
       ]
      },
      {
       "t": "quiz",
       "q": "Seu produto está na fase de declínio do ciclo de vida (procura caindo). Qual decisão faz mais sentido?",
       "options": [
        "Evitar compra grande e planejar liquidar o estoque ou trocar por um produto em crescimento",
        "Comprar um lote grande para aproveitar o pico, já que o declínio é a fase de maior procura",
        "Investir em teste de preço e muito anúncio, como se o produto ainda estivesse no lançamento",
        "Manter a estratégia do crescimento, porque a procura volta sozinha depois de algumas semanas"
       ],
       "answer": [
        0
       ],
       "why": "No declínio a procura cai. Comprar muito prende caixa. O caminho é girar o que sobrou e buscar um produto em crescimento."
      },
      {
       "t": "jargon",
       "term": "Diferencial",
       "means": "O que seu produto tem a mais ou faz melhor que o concorrente, e que o <b>cliente percebe</b>.",
       "ex": "Capa que passa em teste de queda é diferencial. Só dizer \"capa bonita\" não é."
      },
      {
       "t": "list",
       "title": "Análise de produto em 4 perguntas",
       "items": [
        "<b>Quem compra?</b> O público que mais busca e avalia",
        "<b>Pra que usa?</b> O uso real, que vira argumento de venda",
        "<b>Qual o diferencial?</b> O que o seu produto tem a mais",
        "<b>Quais problemas aparecem?</b> O que o cliente reclama"
       ]
      },
      {
       "t": "big",
       "emoji": "🗺️",
       "html": "A avaliação ruim do concorrente é um <b>mapa de oportunidade</b>.",
       "sub": "O cliente diz de graça o que precisa melhorar."
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "Pegue 3 líderes",
         "html": "Abra os 3 anúncios que mais vendem na sua categoria."
        },
        {
         "title": "Leia as notas baixas",
         "html": "Foque nas avaliações de 1 a 3 estrelas e nas perguntas dos clientes."
        },
        {
         "title": "Agrupe por tema",
         "html": "Tamanho, material, entrega, cor. Conte quantas vezes cada um aparece."
        },
        {
         "title": "Vire ação",
         "html": "Cada tema vira ajuste no seu anúncio ou diferencial no produto."
        }
       ]
      },
      {
       "t": "chart",
       "kind": "donut",
       "title": "Reclamações dos líderes (exemplo)",
       "center": "100 avaliações",
       "data": [
        {
         "label": "Tamanho",
         "value": 38
        },
        {
         "label": "Material frágil",
         "value": 27
        },
        {
         "label": "Demora na entrega",
         "value": 20
        },
        {
         "label": "Cor diferente",
         "value": 15
        }
       ],
       "caption": "Perto de 2 em cada 5 reclamações são de tamanho. Medida real no anúncio já vira vantagem."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Referência, não verdade",
       "html": "Blog, ferramenta e print de concorrente ajudam a enxergar o cenário. A verdade é o <b>dado da conta</b> e o teste. Confirme antes de apostar estoque."
      },
      {
       "t": "quiz",
       "q": "Você lê as avaliações de 1 a 3 estrelas dos líderes e 40% citam \"tamanho diferente do anunciado\". O que fazer com esse insight?",
       "options": [
        "Ignorar, porque reclamação de concorrente só serve para o concorrente e não muda o seu anúncio",
        "Descrever as medidas reais no anúncio e na ficha, usando isso como diferencial de confiança",
        "Baixar o preço abaixo dos líderes, já que cliente insatisfeito troca de loja só por preço",
        "Copiar o título dos líderes sem mudar nada, porque eles já aparecem na frente na busca"
       ],
       "answer": [
        1
       ],
       "why": "A reclamação mostra uma dor que o líder não resolve. Medida real no anúncio transforma essa dor em confiança e em diferencial."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Essa categoria é grande, mas grande não é fácil. Olhei a sazonalidade, o ciclo do produto e as reclamações dos concorrentes, e agora confirmo tudo com o dado da sua conta.”"
      },
      {
       "t": "recap",
       "items": [
        "Tamanho de categoria mostra volume, não facilidade",
        "Sazonalidade e ciclo de vida mudam a estratégia",
        "Reclamação do concorrente é ideia de diferencial",
        "Dado da conta vale mais que blog"
       ]
      }
     ]
    },
    {
     "id": "gf-l9-2",
     "title": "Concorrência e ferramentas",
     "minutes": 8,
     "goal": "Conseguir montar uma matriz de concorrência e escolher a ferramenta certa para pesquisar sua categoria.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🔎",
       "title": "Quem está na prateleira ao lado",
       "text": "Concorrente é quem aparece antes de você, não só quem vende igual. Bora montar uma matriz pra comparar com dado."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Contra quem eu competo, e como?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Concorrente é quem aparece antes de você."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Matriz de 8 itens (não só o preço) e simulação de margem antes de igualar preço."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você ajusta o que ganha venda (prazo, avaliação) antes de mexer no preço."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🧮",
       "html": "Comparar é olhar <b>8 coisas</b>, não só o preço.",
       "sub": "Preço, posição, reputação, frete, tipo de anúncio, Ads (anúncios pagos), promoções e catálogo."
      },
      {
       "t": "table",
       "title": "Matriz de concorrência (exemplo)",
       "head": [
        "Item",
        "Meu anúncio",
        "Concorrente A",
        "Concorrente B"
       ],
       "hl": 1,
       "rows": [
        [
         "Preço",
         "R$ 89,90",
         "R$ 84,90",
         "R$ 92,00"
        ],
        [
         "Posição na busca",
         "12ª",
         "3ª",
         "7ª"
        ],
        [
         "Reputação",
         "Boa",
         "Ótima",
         "Regular"
        ],
        [
         "Frete e entrega",
         "Grátis, 3 dias",
         "Grátis, 2 dias",
         "Pago, 5 dias"
        ],
        [
         "Tipo de anúncio",
         "Clássico",
         "Premium",
         "Clássico"
        ],
        [
         "Ads e promoção",
         "Nenhum",
         "Ads e 10% off",
         "Só cupom"
        ]
       ],
       "caption": "Uma coluna por concorrente. Onde ele ganha de você? É lá que está a ação."
      },
      {
       "t": "jargon",
       "term": "Catálogo",
       "means": "Página única de um produto, onde <b>vários vendedores</b> disputam o destaque com a mesma ficha.",
       "ex": "Dois sellers vendem o mesmo fone na mesma página. O cliente compara preço e entrega."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Quem entra na matriz",
       "html": "Entram só concorrentes <b>diretos</b>: mesmo produto, mesmo público e faixa de preço parecida. De 3 a 5 já dão uma boa leitura."
      },
      {
       "t": "tree",
       "title": "Por que ele passou na minha frente?",
       "root": "Concorrente passou na minha frente",
       "caption": "Teste uma hipótese por vez.",
       "branches": [
        {
         "label": "Preço",
         "items": [
          "Baixou o preço?",
          "Entrou em promoção?"
         ]
        },
        {
         "label": "Entrega",
         "items": [
          "Tem frete grátis?",
          "Entrega mais rápido?"
         ]
        },
        {
         "label": "Confiança",
         "items": [
          "Reputação melhor?",
          "Tem mais avaliações?"
         ]
        },
        {
         "label": "Visibilidade",
         "items": [
          "Está com Ads?",
          "Mudou o tipo de anúncio?"
         ]
        }
       ]
      },
      {
       "t": "p",
       "title": "Antes de igualar o preço",
       "html": "Concorrente baixou o preço? Igualar sem conta pode vender mais e lucrar menos. Primeiro veja a margem que sobra. Depois decida se vale igualar, ficar onde está ou melhorar a entrega."
      },
      {
       "t": "lab",
       "preset": "preco",
       "title": "Dá pra igualar o preço?",
       "intro": "O concorrente está em R$ 84,90. Baixe o preço aqui e veja se a margem ainda fica acima do alvo.",
       "defaults": {
        "preco": 89.9,
        "custo": 40,
        "com": 14,
        "tarifa": 6,
        "frete": 12,
        "imp": 6,
        "ads": 5,
        "emb": 2,
        "alvo": 15
       },
       "note": "Números de exemplo. Comissão e tarifa reais: confira na documentação oficial."
      },
      {
       "t": "quiz",
       "q": "O concorrente baixou o preço em R$ 5 e você está logo abaixo dele na busca. Qual o melhor próximo passo?",
       "options": [
        "Igualar o preço na hora, porque o preço é o único fator que decide a compra",
        "Ler a matriz completa e simular a margem antes de decidir se mexe no preço",
        "Subir o preço acima dele, porque preço mais alto sempre passa imagem de qualidade",
        "Pausar o anúncio até ele subir o preço de novo, para não perder margem"
       ],
       "answer": [
        1
       ],
       "why": "Entrega, reputação, posição e Ads também pesam. A simulação mostra se a margem aguenta o novo preço, e só depois vem a decisão."
      },
      {
       "t": "big",
       "html": "Ferramenta é <b>atalho</b>, não verdade.",
       "sub": "Confira sempre com a busca na mão e com o dado da conta."
      },
      {
       "t": "table",
       "title": "Ferramentas de pesquisa",
       "head": [
        "Ferramenta",
        "Serve pra",
        "Cuidado"
       ],
       "rows": [
        [
         "Painéis do marketplace",
         "Ver seus números e a categoria",
         "Só mostra o que a plataforma libera"
        ],
        [
         "Planilha própria",
         "Montar matriz e histórico de preços",
         "Dá trabalho manual e envelhece rápido"
        ],
        [
         "Software de inteligência",
         "Estimar vendas e preços do concorrente",
         "É estimativa, não dado oficial"
        ],
        [
         "Busca manual",
         "Ver o que o cliente vê",
         "Muda conforme quem busca e quando"
        ]
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Painéis, relatórios e softwares mudam de nome, de dado e de preço. A fonte final é a documentação oficial (Mercado Livre, Shopee University) e o dado da conta do cliente."
      },
      {
       "t": "list",
       "title": "Mão na massa: relatório de concorrência",
       "items": [
        "<b>1.</b> Escolha uma categoria da conta-teste e 3 concorrentes diretos",
        "<b>2.</b> Preencha a matriz com os 8 itens, com print e data",
        "<b>3.</b> Leia as avaliações ruins e anote 3 insights de produto",
        "<b>4.</b> Conclua: onde ganhamos, onde perdemos e a primeira ação",
        "<b>5.</b> Entregue em 1 página, com a fonte de cada número"
       ]
      },
      {
       "t": "compare",
       "left": {
        "title": "Boa leitura de cenário",
        "tone": "good",
        "items": [
         "Dado com data e fonte",
         "Conclusão e próxima ação",
         "Cabe em 1 página"
        ]
       },
       "right": {
        "title": "Leitura fraca",
        "tone": "bad",
        "items": [
         "Print solto sem contexto",
         "Só lista, não conclui",
         "10 páginas que ninguém lê"
        ]
       }
      },
      {
       "t": "say",
       "title": "Fala assim: leitura de cenário",
       "html": "“Na categoria temos 3 concorrentes diretos. Eles ganham em entrega; nós ganhamos em avaliação. Minha sugestão é ajustar o prazo primeiro e só depois mexer no preço. O risco é perder margem se igualarmos.”"
      },
      {
       "t": "recap",
       "items": [
        "Compare 8 itens, não só o preço",
        "Simule a margem antes de igualar preço",
        "Ferramenta é estimativa; a conta é a verdade",
        "Leitura de cenário cabe em 1 página"
       ]
      }
     ]
    },
    {
     "id": "gf-l9-3",
     "title": "Os 8 perfis de seller",
     "minutes": 8,
     "goal": "Entender as dores, a estratégia e o risco de cada um dos 8 perfis de seller e como abordar cada um.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🧩",
       "title": "Cada seller joga um jogo diferente",
       "text": "Revendedor, fabricante, importador, MEI... cada perfil tem dor, estratégia e risco próprios. Bora aprender a abordar cada um."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Todo seller pede a mesma estratégia?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Cada perfil tem dor, estratégia e risco próprios."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Descubra o perfil (compra pronto ou fabrica, quanto caixa fica parado) e aplique a conta dele, como a faixa de preço no atacado."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você monta o plano do perfil, não um plano genérico."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🎭",
       "html": "Mesma categoria, <b>8 jogos</b> diferentes.",
       "sub": "Plano bom para um perfil pode ser ruim para outro."
      },
      {
       "t": "list",
       "title": "Perfis 1 a 4",
       "items": [
        "<b>Revendedor:</b> compra produto pronto de terceiros e revende com sua margem",
        "<b>Atacadista:</b> compra e vende em grande volume, com preço por quantidade",
        "<b>Fabricante:</b> produz o que vende e controla custo e qualidade",
        "<b>Importador:</b> traz produto de fora e lida com prazo longo e imposto de importação"
       ]
      },
      {
       "t": "jargon",
       "term": "Giro",
       "means": "Rapidez com que o produto <b>vende e o estoque se renova</b>. Giro alto: o dinheiro volta rápido.",
       "ex": "Vender o lote em 1 mês é giro maior que vender em 5 meses."
      },
      {
       "t": "table",
       "title": "Dor e estratégia (1 a 4)",
       "head": [
        "Perfil",
        "Dor principal",
        "Estratégia"
       ],
       "rows": [
        [
         "Revendedor",
         "Margem apertada; todo mundo vende igual",
         "Nicho, bom preço de compra e entrega"
        ],
        [
         "Atacadista",
         "Varejo paga mais; lote pede preço menor",
         "Faixas de preço por quantidade e kits"
        ],
        [
         "Fabricante",
         "Custo fixo e pouca visão do cliente",
         "Linha completa, diferencial e marca"
        ],
        [
         "Importador",
         "Prazo longo e dinheiro parado",
         "Planejar compra cedo e priorizar giro"
        ]
       ]
      },
      {
       "t": "table",
       "title": "Risco e como abordar (1 a 4)",
       "head": [
        "Perfil",
        "Risco",
        "Como abordar"
       ],
       "rows": [
        [
         "Revendedor",
         "Fornecedor vende direto e some a margem",
         "Falar de giro e diferenciação"
        ],
        [
         "Atacadista",
         "Lote encalhado ou vendido sem margem",
         "Mostrar a conta por faixa de preço"
        ],
        [
         "Fabricante",
         "Produzir muito o que não gira",
         "Usar dado de demanda e avaliação"
        ],
        [
         "Importador",
         "Chegar tarde ou errar a quantidade",
         "Montar calendário e plano de compra"
        ]
       ]
      },
      {
       "t": "conta",
       "title": "Atacado: sobra por unidade (exemplo)",
       "rows": [
        [
         "Preço no atacado",
         "R$ 44,00"
        ],
        [
         "Custo do produto",
         "- R$ 30,00",
         "neg"
        ],
        [
         "Taxas e frete (25% do preço)",
         "- R$ 11,00",
         "neg"
        ]
       ],
       "total": [
        "Sobra por unidade",
        "R$ 3,00"
       ],
       "note": "No varejo o mesmo produto, a R$ 50,00 com 25% de taxas, deixaria R$ 7,50 por unidade."
      },
      {
       "t": "sim",
       "kind": "atacado",
       "title": "Bora treinar: atacado",
       "intro": "Calcule a margem de cada unidade no atacado e quantas unidades compensam uma venda no varejo.",
       "rounds": 3
      },
      {
       "t": "list",
       "title": "Perfis 5 a 8",
       "items": [
        "<b>Marca Própria:</b> cria uma marca e manda produzir, para vender com identidade",
        "<b>Dropshipping:</b> vende sem estoque; o fornecedor envia direto ao cliente",
        "<b>MEI:</b> microempreendedor individual, com operação enxuta e limite de faturamento (confira o vigente)",
        "<b>Multicanal:</b> vende em vários canais, como Mercado Livre, Shopee e loja própria"
       ]
      },
      {
       "t": "table",
       "title": "Dor e estratégia (5 a 8)",
       "head": [
        "Perfil",
        "Dor principal",
        "Estratégia"
       ],
       "rows": [
        [
         "Marca Própria",
         "Construir confiança sendo pouco conhecida",
         "Registro de marca, identidade e avaliações"
        ],
        [
         "Dropshipping",
         "Prazo e estoque dependem do fornecedor",
         "Fornecedor confiável e poucos produtos testados"
        ],
        [
         "MEI",
         "Pouco caixa e faz tudo sozinho",
         "Poucos produtos bons e rotina simples"
        ],
        [
         "Multicanal",
         "Estoque e preço fora de sincronia",
         "Estoque central e preço por canal"
        ]
       ]
      },
      {
       "t": "table",
       "title": "Risco e como abordar (5 a 8)",
       "head": [
        "Perfil",
        "Risco",
        "Como abordar"
       ],
       "rows": [
        [
         "Marca Própria",
         "Investir em marca antes de validar",
         "Testar o produto e depois escalar"
        ],
        [
         "Dropshipping",
         "Atraso do fornecedor derruba reputação",
         "Medir prazo real e cortar quem atrasa"
        ],
        [
         "MEI",
         "Passar do limite sem perceber",
         "Acompanhar faturamento com o contador"
        ],
        [
         "Multicanal",
         "Vender o mesmo estoque duas vezes",
         "Definir regra de estoque por canal"
        ]
       ]
      },
      {
       "t": "quiz",
       "q": "Um seller de dropshipping perde vendas por atraso na entrega. Qual leitura combina com o perfil dele?",
       "options": [
        "O prazo depende do fornecedor, então a ação é revisar o fornecedor e o prazo prometido",
        "Aumentar o estoque próprio no Full (armazém do Mercado Livre), já que o perfil dele é de manter lote grande",
        "Tratar como fabricante e ajustar a capacidade da linha de produção para entregar rápido",
        "Pedir lote mínimo menor ao importador, pois o problema de prazo vem da compra em lote grande"
       ],
       "answer": [
        0
       ],
       "why": "No dropshipping o fornecedor envia o pedido. O gargalo é o prazo dele, então se mede o prazo real e se troca quem atrasa."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Recomendar a <b>mesma estratégia</b> para todo perfil. Atacadista pensa em lote e giro, dropshipping no prazo do fornecedor, MEI no caixa. Mesma receita, resultado ruim."
      },
      {
       "t": "compare",
       "left": {
        "title": "Abordagem certa",
        "tone": "good",
        "items": [
         "Pergunta o perfil antes de sugerir",
         "Fala da dor real do seller",
         "Mostra o risco junto da ação"
        ]
       },
       "right": {
        "title": "Abordagem errada",
        "tone": "bad",
        "items": [
         "Manda o mesmo plano pra todos",
         "Fala só de ranking e Ads",
         "Esconde o risco da ação"
        ]
       }
      },
      {
       "t": "say",
       "title": "Fala assim pra abordar o seller",
       "html": "“Antes de sugerir qualquer coisa, preciso entender seu jogo. Você compra pronto ou fabrica? Quanto de caixa fica parado em estoque? Assim eu monto um plano pro seu perfil, não um plano genérico.”"
      },
      {
       "t": "list",
       "title": "Check de saída: 3 sellers em 1 página",
       "items": [
        "<b>1.</b> Escolha uma categoria e 3 sellers de perfis diferentes",
        "<b>2.</b> Para cada um, escreva dor, estratégia e risco",
        "<b>3.</b> Dê 1 ação prática de 7 dias por perfil",
        "<b>4.</b> Feche em 1 página e mostre ao líder"
       ]
      },
      {
       "t": "quiz",
       "q": "Na mesma categoria há um atacadista, um MEI com pouco caixa e um multicanal. Qual conjunto de estratégias respeita cada perfil?",
       "options": [
        "Atacadista: estoque central e preço por canal; MEI: faixas por quantidade; multicanal: poucos produtos e rotina simples",
        "Os três: baixar o preço e ligar mais Ads em todos os produtos, porque a categoria é a mesma",
        "Atacadista: faixas por quantidade; MEI: poucos produtos e rotina simples; multicanal: estoque central e preço por canal",
        "Atacadista: poucos produtos e rotina simples; MEI: estoque central e preço por canal; multicanal: faixas por quantidade"
       ],
       "answer": [
        2
       ],
       "why": "Cada estratégia vem da dor do perfil: lote pede faixa de preço, caixa curto pede foco e rotina simples, e vários canais pedem estoque e preço organizados."
      },
      {
       "t": "recap",
       "items": [
        "São 8 perfis, cada um com dor e risco próprios",
        "Atacado exige conta por faixa de preço",
        "Dropshipping depende do prazo do fornecedor",
        "Mesma estratégia pra todos é o erro clássico"
       ]
      }
     ]
    },
    {
     "id": "gf-l9-4",
     "title": "Compras, fabricação e sourcing",
     "minutes": 8,
     "goal": "Entender lead time, MOQ, negociação, qualidade e estoque de segurança para comprar sem faltar nem encalhar.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📦",
       "title": "Comprar bem é metade do lucro",
       "text": "Faltar produto derruba venda; sobrar prende caixa. Você aprende sourcing (achar fornecedor), lead time, MOQ e estoque de segurança."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como comprar sem faltar e sem encalhar?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Faltar derruba a venda, e sobrar prende caixa."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Ponto de pedido = venda por dia × (lead time + segurança). Compare o MOQ com os meses de venda."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você negocia prazo, defeito e entrega, não só preço."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "⚖️",
       "html": "Comprar errado vira <b>ruptura</b> (acabou) ou <b>encalhe</b> (sobrou parado).",
       "sub": "Os dois custam dinheiro."
      },
      {
       "t": "flow",
       "title": "Do pedido ao estoque",
       "items": [
        {
         "icon": "📝",
         "title": "Pedido",
         "text": "Você fecha com o fornecedor"
        },
        {
         "icon": "🏭",
         "title": "Produção",
         "text": "Fabricação ou separação"
        },
        {
         "icon": "🚚",
         "title": "Transporte",
         "text": "Da origem até você"
        },
        {
         "icon": "🔍",
         "title": "Conferência",
         "text": "Qualidade e quantidade"
        },
        {
         "icon": "🏬",
         "title": "Pronto pra vender"
        }
       ],
       "caption": "O tempo de toda essa cadeia é o lead time."
      },
      {
       "t": "jargon",
       "term": "Lead time",
       "means": "Tempo entre <b>fazer o pedido</b> e <b>ter o produto pronto pra vender</b>.",
       "ex": "Pediu no dia 1 e conferiu no dia 21: lead time de 20 dias."
      },
      {
       "t": "chart",
       "kind": "hbar",
       "title": "Lead time por origem (exemplo)",
       "unit": "dias",
       "data": [
        {
         "label": "Fornecedor local",
         "value": 7
        },
        {
         "label": "Sob encomenda",
         "value": 25
        },
        {
         "label": "Importação",
         "value": 60
        }
       ],
       "caption": "Quanto mais longe a origem, mais cedo você precisa pedir. Os prazos variam por fornecedor."
      },
      {
       "t": "jargon",
       "term": "MOQ",
       "tag": "Minimum Order Quantity",
       "means": "Quantidade <b>mínima de compra</b> que o fornecedor aceita. Abaixo disso, ele não fecha o pedido.",
       "ex": "MOQ de 500 un: com 300 un o fornecedor recusa ou cobra mais caro."
      },
      {
       "t": "conta",
       "title": "O peso do MOQ (exemplo)",
       "rows": [
        [
         "MOQ do fornecedor",
         "500 un"
        ],
        [
         "Custo por unidade",
         "R$ 12,00"
        ],
        [
         "Dinheiro para fechar o pedido",
         "- R$ 6.000,00",
         "neg"
        ],
        [
         "Vendas por mês",
         "100 un"
        ]
       ],
       "total": [
        "Meses para vender o lote",
        "5 meses"
       ],
       "note": "MOQ alto prende caixa. Compare isso com o desconto que o lote maior traz."
      },
      {
       "t": "list",
       "title": "O que negociar além do preço",
       "items": [
        "Preço por faixa de quantidade",
        "Prazo de pagamento: comprar agora, pagar depois",
        "Prazo de entrega e regra para atraso",
        "Troca de produto com defeito",
        "Embalagem e etiqueta já prontas"
       ]
      },
      {
       "t": "say",
       "title": "Fala assim com o fornecedor",
       "html": "“Hoje compro 300 unidades por pedido. Se eu fechar 3 pedidos no trimestre, você consegue um preço de faixa maior e 30 dias para eu pagar? Assim eu planejo a produção com você.”"
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "Peça amostra",
         "html": "Antes do lote, valide material, medida e acabamento."
        },
        {
         "title": "Escreva o padrão",
         "html": "Medida, cor e material por escrito, para ninguém discutir depois."
        },
        {
         "title": "Confira na chegada",
         "html": "Abra uma parte do lote e compare com a amostra."
        },
        {
         "title": "Registre defeito",
         "html": "Foto e quantidade no mesmo dia, para cobrar o fornecedor."
        }
       ]
      },
      {
       "t": "jargon",
       "term": "Estoque de segurança",
       "means": "Reserva <b>extra</b> para cobrir atraso do fornecedor ou venda acima do previsto.",
       "ex": "Se você vende 8 por dia e quer 7 dias de folga, a reserva é de 56 unidades."
      },
      {
       "t": "conta",
       "title": "Ponto de pedido (exemplo)",
       "rows": [
        [
         "Venda média por dia",
         "8 un"
        ],
        [
         "Lead time",
         "20 dias"
        ],
        [
         "Segurança",
         "7 dias"
        ],
        [
         "Dias a cobrir (20 + 7)",
         "27 dias"
        ]
       ],
       "total": [
        "Ponto de pedido (8 × 27)",
        "216 un"
       ],
       "note": "Quando o estoque chegar a 216 un, é hora de pedir."
      },
      {
       "t": "lab",
       "preset": "cobertura",
       "title": "Teste o ponto de pedido",
       "intro": "Mexa na venda, no lead time e na segurança. Veja quando o estoque cruza o ponto de pedido.",
       "defaults": {
        "venda": 8,
        "lead": 20,
        "seg": 7,
        "estoque": 300
       },
       "note": "Números de exemplo."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Segurança sem exagero",
       "html": "Reserva grande demais é caixa parado e pode virar custo de armazenagem. Reserva pequena demais é ruptura. Calibre com o histórico de atraso do fornecedor e com as vendas da conta."
      },
      {
       "t": "quiz",
       "q": "(Números de exemplo) Você vende 5 unidades por dia, o lead time é de 18 dias e a segurança é de 6 dias. Qual o ponto de pedido?",
       "options": [
        "90 unidades, que são 5 por dia vezes os 18 dias de lead time",
        "120 unidades, que são 5 por dia vezes 24 dias (18 mais 6)",
        "24 unidades, que são a soma dos dias de lead time e segurança",
        "108 unidades, que são 18 dias de lead time vezes 6 dias de segurança"
       ],
       "answer": [
        1
       ],
       "why": "Ponto de pedido = venda por dia × (lead time + segurança). Aqui: 5 × (18 + 6) = 5 × 24 = 120 unidades."
      },
      {
       "t": "recap",
       "items": [
        "Lead time: do pedido ao produto pronto pra vender",
        "MOQ alto prende caixa; veja em quantos meses vende",
        "Negocie prazo, defeito e entrega, não só preço",
        "Ponto de pedido = venda por dia × (lead time + segurança)"
       ]
      }
     ]
    },
    {
     "id": "gf-l9-5",
     "title": "Sazonalidade e plano de compra",
     "minutes": 8,
     "goal": "Conseguir montar um plano de compra de 90 dias usando calendário comercial e previsão de demanda.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🗓️",
       "title": "O ano de vendas tem datas fortes",
       "text": "Dia das Mães, Black Friday, Natal... quem se prepara cedo vende mais e sem sufoco. Bora montar um plano de compra de 90 dias."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Quanto comprar pras datas fortes?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Previsão = histórico + tendência + calendário."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Compra = previsão − estoque − o que está a caminho + segurança. O lead time define a data limite do pedido."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você fecha o pedido antes da data limite."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "⏳",
       "html": "Data forte não se improvisa: <b>estoque e preço</b> se decidem antes.",
       "sub": "O fornecedor demora e o pico não espera."
      },
      {
       "t": "timeline",
       "title": "Calendário comercial (exemplo)",
       "items": [
        {
         "when": "Jan-Fev",
         "label": "Volta às aulas",
         "text": "Material, organização e rotina"
        },
        {
         "when": "Mai",
         "label": "Dia das Mães",
         "text": "Presentes, casa e beleza"
        },
        {
         "when": "Ago",
         "label": "Dia dos Pais",
         "text": "Presentes e ferramentas"
        },
        {
         "when": "Set-Nov",
         "label": "Datas duplas",
         "text": "Campanhas como 9.9, 10.10 e 11.11"
        },
        {
         "when": "Nov",
         "label": "Black Friday",
         "text": "Maior disputa por preço do ano"
        },
        {
         "when": "Dez",
         "label": "Natal",
         "text": "Presentes e entrega no prazo"
        }
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Datas, campanhas e regras mudam todo ano. As datas duplas e os formatos de campanha dependem de cada plataforma. Confira o calendário oficial (Mercado Livre, Shopee University) antes de fechar compra."
      },
      {
       "t": "p",
       "title": "Cada produto tem seu calendário",
       "html": "Ventilador pica no calor e edredom, no frio. O calendário é o mapa, mas o <b>histórico da sua conta</b> diz o tamanho do pico e quantas semanas antes ele começa."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Demanda por semana até a data (exemplo)",
       "unit": "un",
       "x": [
        "S1",
        "S2",
        "S3",
        "S4",
        "S5",
        "S6",
        "S7",
        "S8"
       ],
       "series": [
        {
         "name": "Ano passado",
         "values": [
          30,
          32,
          38,
          55,
          90,
          140,
          60,
          35
         ]
        },
        {
         "name": "Previsão (+20%)",
         "values": [
          36,
          38,
          46,
          66,
          108,
          168,
          72,
          42
         ],
         "tone": "gold"
        }
       ],
       "caption": "O pico está na semana 6 e começa a subir na 4. A previsão é o ano passado com 20% a mais."
      },
      {
       "t": "jargon",
       "term": "Previsão de demanda",
       "means": "Estimar <b>quantas unidades</b> você vai vender num período, usando histórico, tendência e calendário.",
       "ex": "Vendeu 480 un nessas 8 semanas no ano passado e espera crescer 20%: previsão de 576 un."
      },
      {
       "t": "conta",
       "title": "Previsão de demanda (exemplo)",
       "rows": [
        [
         "Vendas do mesmo período, ano passado",
         "480 un"
        ],
        [
         "Crescimento esperado",
         "+ 20%"
        ],
        [
         "Aumento em unidades (480 × 20%)",
         "+ 96 un",
         "pos"
        ]
       ],
       "total": [
        "Previsão de vendas",
        "576 un"
       ],
       "note": "O crescimento esperado vem da tendência da categoria e do histórico do produto."
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "Preveja a venda",
         "html": "Por SKU (cada produto ou variação do estoque), com histórico, tendência e datas fortes."
        },
        {
         "title": "Desconte o que existe",
         "html": "Subtraia o estoque atual e o que já está a caminho."
        },
        {
         "title": "Some a segurança",
         "html": "Inclua a reserva para atraso do fornecedor."
        },
        {
         "title": "Cheque caixa e prazo",
         "html": "Veja se dá para pagar e se o pedido chega antes da data."
        }
       ]
      },
      {
       "t": "conta",
       "title": "Quanto comprar em 90 dias (exemplo)",
       "rows": [
        [
         "Previsão de venda em 90 dias",
         "900 un"
        ],
        [
         "Estoque atual",
         "- 250 un",
         "neg"
        ],
        [
         "Pedido já a caminho",
         "- 100 un",
         "neg"
        ],
        [
         "Estoque de segurança",
         "+ 120 un",
         "pos"
        ]
       ],
       "total": [
        "Quantidade a comprar",
        "670 un"
       ],
       "note": "900 - 250 - 100 + 120 = 670. É um produto fictício."
      },
      {
       "t": "chart",
       "kind": "pareto",
       "title": "Quais produtos planejar primeiro (exemplo)",
       "unit": "R$ mil",
       "data": [
        {
         "label": "Pote 5 peças",
         "value": 420
        },
        {
         "label": "Garrafa 1 L",
         "value": 260
        },
        {
         "label": "Faca chef",
         "value": 140
        },
        {
         "label": "Tábua",
         "value": 90
        },
        {
         "label": "Escorredor",
         "value": 50
        },
        {
         "label": "Ralador",
         "value": 25
        },
        {
         "label": "Peneira",
         "value": 15
        }
       ],
       "caption": "Os 3 primeiros produtos passam de 80% do faturamento. O planejamento mais fino começa por eles."
      },
      {
       "t": "sim",
       "kind": "cobertura",
       "title": "Bora treinar: cobertura de estoque",
       "intro": "Calcule por quantos dias o estoque dura e quando é hora de pedir antes da data forte.",
       "rounds": 3
      },
      {
       "t": "p",
       "title": "Depois do pico vem a queda",
       "html": "Passada a data forte, as vendas costumam cair abaixo do normal por um tempo. Isso é a <b>retração pós-pico</b>. Não repita o pedido do pico no mês seguinte, ou o estoque encalha."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Cuidado com o retrovisor",
       "html": "Comprar só olhando o pico do ano passado é arriscado. Se o produto entrou em declínio ou apareceu muito concorrente, o pico deste ano pode ser menor. Cruze com a tendência."
      },
      {
       "t": "list",
       "title": "Mão na massa: plano de compra de 90 dias",
       "items": [
        "<b>1.</b> Escolha 5 SKUs (produtos do estoque) da conta-teste e puxe 12 meses de vendas",
        "<b>2.</b> Marque as datas fortes dos próximos 90 dias",
        "<b>3.</b> Calcule previsão, estoque a descontar, segurança e quanto pedir",
        "<b>4.</b> Defina a data limite de cada pedido pelo lead time",
        "<b>5.</b> Confira o caixa e entregue o plano em 1 página"
       ]
      },
      {
       "t": "quiz",
       "q": "Qual afirmação sobre o plano de compra de 90 dias está ERRADA?",
       "options": [
        "A previsão parte do histórico da conta, da tendência e do calendário de datas fortes",
        "Antes de pedir, desconta-se o estoque atual e o que já está a caminho do fornecedor",
        "Basta repetir o pedido do pico do ano passado, mesmo que o produto esteja em declínio",
        "O lead time define a data limite do pedido, para o estoque chegar antes da data forte"
       ],
       "answer": [
        2
       ],
       "why": "Repetir o pico sem olhar tendência é o erro do retrovisor. O plano combina histórico, tendência, estoque existente e lead time."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Pro Dia das Mães, o pedido ao fornecedor precisa sair até a data limite, que é a data da venda menos o lead time. Compra = previsão − estoque − o que já está a caminho + segurança.”"
      },
      {
       "t": "recap",
       "items": [
        "Datas fortes pedem decisão de estoque antes",
        "Previsão = histórico + tendência + calendário",
        "Compra = previsão - estoque - a caminho + segurança",
        "Lead time define a data limite do pedido"
       ]
      }
     ]
    }
   ]
  }
 ]
});

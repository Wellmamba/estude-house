/* Conteúdo da trilha "Dados, diagnóstico e plano de conta" (Formação Mamba, para Assessores e Gestores de Performance), em formato Stories.
   Cada item de `blocks` é um card de tela cheia. Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, recap, quiz, sim
   e os visuais chart, flow, table, tree, timeline, stairs, anno e lab (veja GUIA-STORIES.md).
   Assessor Estratégico e Gestor de Performance são funções com rotinas diferentes e o mesmo nível de conhecimento: não há escada entre elas.
   Todos os números das contas e dos gráficos são de exemplo. Regras de plataforma, taxas e impostos mudam: a fonte final é a documentação oficial e o contador do cliente.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
 "id": "dados",
 "title": "Dados, diagnóstico e plano de conta",
 "finalScope": "final-dados",
 "finalSize": 20,
 "tag": "Formação",
 "tagline": "Do painel à causa raiz, do raio-X ao plano de 90 dias, com dado para defender cada decisão.",
 "subtitle": "Formação Mamba, em stories, para Assessores e Gestores de Performance.",
 "modules": [
  {
   "id": "gf-m12",
   "n": 1,
   "title": "Dados, BI e diagnóstico",
   "tagline": "Planilha, painel, árvore de hipóteses e IA para entender por que a conta mudou.",
   "outcome": "Ler os números de uma conta, achar a causa raiz de uma queda e contar a história do dado com clareza.",
   "lessons": [
    {
     "id": "gf-l12-1",
     "title": "Planilhas e painéis",
     "minutes": 7,
     "goal": "Conseguir montar uma base na planilha, cruzar custos com PROCX e organizar um painel simples por conta.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📊",
       "title": "Planilha e painel: seu superpoder",
       "text": "Em poucos minutos você vê como transformar relatório bagunçado em número que explica a conta e ajuda a decidir."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como transformar relatório bagunçado em número que explica?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Planilha é a oficina, e painel é a vitrine."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "PROCX traz valor pela chave (o SKU) e a tabela dinâmica resume milhares de linhas."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Painel com poucos números, na mesma ordem, toda semana."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🧠",
       "html": "Quem lê dado bem <b>explica melhor</b> e decide mais rápido.",
       "sub": "Planilha e painel são as ferramentas pra isso."
      },
      {
       "t": "flow",
       "title": "Do relatório ao painel",
       "items": [
        {
         "icon": "📥",
         "title": "Exporta",
         "text": "Baixe o relatório do portal"
        },
        {
         "icon": "🧹",
         "title": "Limpa",
         "text": "Tire linhas e colunas inúteis"
        },
        {
         "icon": "🔗",
         "title": "Cruza",
         "text": "Junte vendas e custo pelo código (SKU)"
        },
        {
         "icon": "🧮",
         "title": "Resume",
         "text": "Tabela dinâmica em poucos cliques"
        },
        {
         "icon": "📺",
         "title": "Painel",
         "text": "Número vivo, sempre no mesmo lugar"
        }
       ],
       "caption": "Cada etapa tem dono: se um passo falha, o painel mente."
      },
      {
       "t": "jargon",
       "term": "PROCX",
       "tag": "Fórmula de busca",
       "means": "Procura um código numa tabela e <b>traz o valor ao lado</b>. No Google Sheets, o parente clássico é o PROCV.",
       "ex": "Você tem vendas por SKU (código do produto). O PROCX traz o custo de cada SKU da tabela de custos."
      },
      {
       "t": "table",
       "title": "As 4 fórmulas que mais salvam",
       "head": [
        "Fórmula",
        "Para que serve",
        "Exemplo na conta"
       ],
       "rows": [
        [
         "SOMASE",
         "Soma só o que bate com um critério",
         "Vendas só de um SKU"
        ],
        [
         "SE",
         "Escolhe entre dois resultados",
         "Marca “margem negativa” ou “ok”"
        ],
        [
         "PROCX",
         "Traz um valor pela chave",
         "Custo de cada SKU"
        ],
        [
         "SEERRO",
         "Troca erro feio por aviso",
         "#N/D vira “sem custo”"
        ]
       ],
       "caption": "Quatro fórmulas já resolvem boa parte da rotina."
      },
      {
       "t": "conta",
       "title": "Sobra por SKU (exemplo)",
       "rows": [
        [
         "Preço de venda",
         "R$ 100,00"
        ],
        [
         "Produto",
         "-R$ 45,00",
         "neg"
        ],
        [
         "Comissão",
         "-R$ 14,00",
         "neg"
        ],
        [
         "Frete",
         "-R$ 12,00",
         "neg"
        ],
        [
         "Imposto",
         "-R$ 6,00",
         "neg"
        ],
        [
         "Ads",
         "-R$ 5,00",
         "neg"
        ]
       ],
       "total": [
        "Sobra",
        "R$ 18,00"
       ],
       "note": "Esse quadro é o DRE por SKU: o que entra, o que sai e o que sobra de cada venda."
      },
      {
       "t": "jargon",
       "term": "Tabela dinâmica",
       "means": "Resume milhares de linhas em um <b>quadro pequeno</b>: você arrasta campos e a soma aparece.",
       "ex": "1.000 pedidos viram vendas por SKU, por semana ou por anúncio, sem escrever fórmula."
      },
      {
       "t": "anno",
       "preset": "planilha",
       "title": "Planilha de precificação por dentro",
       "notes": [
        "Custo do produto sempre por unidade e atualizado",
        "Comissão e imposto costumam ser percentual do preço",
        "Frete e embalagem em reais por pedido, fáceis de esquecer",
        "O menor preço que paga tudo e ainda deixa a margem alvo",
        "O que sobra em percentual do preço: o número que você acompanha"
       ]
      },
      {
       "t": "sim",
       "kind": "dre",
       "title": "Bora treinar: a sobra por SKU",
       "intro": "Calcule quanto sobra de cada venda depois de pagar produto, taxas, frete e Ads. Números de exemplo, novos a cada rodada.",
       "rounds": 3
      },
      {
       "t": "quiz",
       "q": "Você tem a lista de vendas por SKU e uma tabela de custos por SKU. Qual fórmula traz o custo para cada linha de venda?",
       "options": [
        "SE, que compara a venda com o custo e devolve apenas o maior dos dois",
        "SOMASE, que soma os custos de todos os SKUs que tiverem venda no período",
        "PROCX, que procura o SKU na tabela de custos e traz o valor ao lado",
        "SEERRO, que apaga da base as linhas de venda sem custo cadastrado"
       ],
       "answer": [
        2
       ],
       "why": "O PROCX busca a chave (o SKU) na tabela de custos e devolve o valor da coluna que você escolher. SOMASE soma, SE decide entre dois resultados e SEERRO só trata erro."
      },
      {
       "t": "big",
       "emoji": "🏪",
       "html": "Planilha é a oficina. <b>Painel</b> é a vitrine.",
       "sub": "O painel mostra o número vivo, sem refazer a conta toda semana."
      },
      {
       "t": "jargon",
       "term": "Dashboard",
       "tag": "Looker Studio · Power BI",
       "means": "Tela que <b>puxa os dados</b> da planilha e mostra os números-chave, atualizados sozinhos.",
       "ex": "Abrir um link e ver vendas, margem e Ads da conta na semana, sem montar nada."
      },
      {
       "t": "compare",
       "left": {
        "title": "Painel que ajuda",
        "tone": "good",
        "items": [
         "Poucos números que levam a uma decisão",
         "Mesma ordem toda semana",
         "Compara com a semana anterior"
        ]
       },
       "right": {
        "title": "Painel que atrapalha",
        "tone": "bad",
        "items": [
         "40 gráficos sem ordem",
         "Só vendas, sem margem",
         "Número solto, sem dizer o que fazer"
        ]
       }
      },
      {
       "t": "list",
       "title": "O que não pode faltar por conta",
       "items": [
        "<b>Vendas e pedidos</b>: o placar da semana",
        "<b>Conversão</b>: % das visitas que viram compra",
        "<b>Margem</b>: o que sobra depois de pagar tudo",
        "<b>ACOS</b>: quanto você gasta de Ads pra cada R$ 1 vendido",
        "<b>Reputação e estoque</b>: os dois que travam vendas"
       ]
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Vendas e Ads por semana (exemplo)",
       "unit": "R$ mil",
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
         "name": "Vendas",
         "values": [
          20,
          22,
          21,
          25,
          24,
          27
         ]
        },
        {
         "name": "Ads",
         "values": [
          2,
          2,
          2.5,
          3,
          3,
          3.5
         ],
         "tone": "pink"
        }
       ],
       "caption": "O painel mostra tendência: as vendas sobem, mas o Ads sobe junto. Vale checar se compensa."
      },
      {
       "t": "list",
       "title": "Mão na massa: seu primeiro painel",
       "items": [
        "Exporte 4 semanas de vendas de uma conta-teste ou anonimizada",
        "Traga o custo de cada SKU com PROCX e calcule a margem",
        "Faça uma tabela dinâmica com vendas e margem por SKU",
        "Monte um painel com 5 números e um gráfico de tendência",
        "Escreva 3 linhas dizendo o que o painel mostra"
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Relatórios e painéis dos portais mudam de nome, de coluna e de lugar. A fonte final é a documentação oficial (Mercado Livre, Shopee University) e o que foi definido para a conta."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Montei um painel com 6 números da sua conta, sempre na mesma ordem. Toda segunda você abre o link e vê o que subiu, o que caiu e o que eu vou fazer.”"
      },
      {
       "t": "quiz",
       "q": "Seu painel tem 40 gráficos e o seller nunca sabe o que olhar. O que melhora mais esse painel?",
       "options": [
        "Adicionar mais gráficos de vendas para cobrir todos os períodos possíveis",
        "Reduzir a poucos números ligados a decisões, na mesma ordem toda semana",
        "Trocar o painel por uma planilha enviada só quando o seller pedir",
        "Deixar só o faturamento total, que é o número que o seller mais entende"
       ],
       "answer": [
        1
       ],
       "why": "Painel bom tem poucos números, escolhidos para apoiar decisões, e sempre na mesma ordem. Mais gráficos ou menos informação não ajudam o seller a agir."
      },
      {
       "t": "recap",
       "items": [
        "PROCX traz valor pela chave, como o SKU",
        "Tabela dinâmica resume milhares de linhas",
        "Planilha é a oficina, painel é a vitrine",
        "Poucos números, na mesma ordem, toda semana"
       ]
      }
     ]
    },
    {
     "id": "gf-l12-2",
     "title": "Leitura de cenário",
     "minutes": 8,
     "goal": "Entender como ler a variação de vendas e separar tráfego, conversão, preço, Ads, estoque, reputação e mercado.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🔍",
       "title": "O que mudou e por quê?",
       "text": "Você aprende a ler uma queda de vendas olhando vários números juntos, e não um só."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "O que mudou nas vendas?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Nunca leia uma métrica sozinha."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Vendas = visitas × conversão × ticket médio. Compare períodos parecidos."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você aponta qual dos três caiu e investiga ali."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "📉",
       "html": "Venda não cai do nada. <b>Algo mudou</b>.",
       "sub": "Seu trabalho é descobrir o quê."
      },
      {
       "t": "jargon",
       "term": "Variação",
       "means": "A <b>diferença</b> entre dois períodos, em R$ ou em %. Compare sempre períodos parecidos.",
       "ex": "Semana passada R$ 10.000, esta semana R$ 7.000: variação de menos 30%."
      },
      {
       "t": "conta",
       "title": "A variação na conta (exemplo)",
       "rows": [
        [
         "Semana passada",
         "R$ 10.000,00"
        ],
        [
         "Esta semana",
         "R$ 7.000,00"
        ],
        [
         "Diferença",
         "-R$ 3.000,00",
         "neg"
        ]
       ],
       "total": [
        "Variação (3.000 ÷ 10.000)",
        "-30%"
       ],
       "note": "A queda de 30% é o sintoma. O motivo vem depois."
      },
      {
       "t": "list",
       "title": "Os suspeitos dentro da conta",
       "items": [
        "<b>Preço</b>: subiu, desceu ou perdeu a promoção?",
        "<b>Ads</b> (anúncio pago): parou ou ficou mais caro?",
        "<b>Estoque</b>: acabou? Isso se chama ruptura.",
        "<b>Reputação</b>: a nota do vendedor caiu?"
       ]
      },
      {
       "t": "list",
       "title": "Os suspeitos fora da conta",
       "items": [
        "<b>Concorrente</b>: baixou o preço ou entrou forte?",
        "<b>Sazonalidade</b> (época do ano): passou a data comemorativa?",
        "<b>Regra da plataforma</b>: mudou algo na categoria ou no frete?"
       ]
      },
      {
       "t": "jargon",
       "term": "Conversão",
       "means": "A % das visitas que <b>viram compra</b>. Se ela cai, algo na oferta ficou menos atraente.",
       "ex": "1.000 visitas e 30 compras: conversão de 3%."
      },
      {
       "t": "table",
       "title": "O sintoma aponta o suspeito",
       "head": [
        "O que os dados mostram",
        "Suspeito principal"
       ],
       "rows": [
        [
         "Visitas caíram, conversão igual",
         "Ads, posição do anúncio, sazonalidade"
        ],
        [
         "Visitas iguais, conversão caiu",
         "Preço, concorrente, fotos, reputação"
        ],
        [
         "Pedidos de um SKU zeraram",
         "Ruptura ou anúncio pausado"
        ],
        [
         "Pedidos iguais, faturamento caiu",
         "Desconto ou mudança no mix de produtos"
        ]
       ],
       "caption": "É pista, não sentença: confirme com dado antes de afirmar."
      },
      {
       "t": "p",
       "title": "O exemplo do gráfico",
       "html": "No próximo gráfico (exemplo), as visitas ficaram estáveis, mas a conversão despencou na semana 4. Repare que as vendas seguem a conversão, não o tráfego. Isso tira o tráfego da lista de suspeitos."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Visitas, conversão e vendas",
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
         "name": "Visitas",
         "values": [
          100,
          102,
          98,
          99,
          97,
          98
         ]
        },
        {
         "name": "Conversão",
         "values": [
          100,
          99,
          100,
          70,
          66,
          67
         ],
         "tone": "pink"
        },
        {
         "name": "Vendas",
         "values": [
          100,
          101,
          98,
          69,
          64,
          66
         ],
         "tone": "amber"
        }
       ],
       "caption": "Índice 100 = semana 1. Olha onde a linha cai: conversão e vendas caem juntas, e as visitas ficam firmes."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Olhar <b>uma métrica isolada</b>. Se você só olha as vendas, não sabe por que caíram. Se só olha o ROAS (vendas por R$ 1 de Ads), pode comemorar enquanto a venda some. Cruze pelo menos três números."
      },
      {
       "t": "jargon",
       "term": "ROAS",
       "means": "Quanto você <b>vende</b> pra cada R$ 1 gasto em Ads. ROAS de 5x quer dizer R$ 5 vendidos por R$ 1 de Ads.",
       "ex": "Gastou R$ 1.000 e vendeu R$ 5.000 com Ads: ROAS de 5x."
      },
      {
       "t": "conta",
       "title": "ROAS bom, vendas caindo (exemplo)",
       "rows": [
        [
         "Semana 1: gasto em Ads",
         "R$ 1.000,00"
        ],
        [
         "Semana 1: vendas com Ads",
         "R$ 5.000,00",
         "pos"
        ],
        [
         "Semana 2: gasto em Ads",
         "R$ 400,00"
        ],
        [
         "Semana 2: vendas com Ads",
         "R$ 2.400,00",
         "pos"
        ],
        [
         "ROAS semana 1 (5.000 ÷ 1.000)",
         "5,0x"
        ],
        [
         "ROAS semana 2 (2.400 ÷ 400)",
         "6,0x",
         "pos"
        ]
       ],
       "total": [
        "Vendas com Ads: semana 2 menos 1",
        "-R$ 2.600,00"
       ],
       "note": "O ROAS melhorou porque o gasto caiu mais que a venda. Só o ROAS esconderia a perda."
      },
      {
       "t": "quiz",
       "q": "Num exemplo, o ROAS subiu de 5x para 6x, mas as vendas com Ads caíram de R$ 5.000 para R$ 2.400. Qual é a leitura correta?",
       "options": [
        "O problema é só de conversão, porque o ROAS mede as visitas que o anúncio teve",
        "A conta está melhor, porque ROAS maior significa sempre mais lucro e mais vendas",
        "O ROAS não poderia ter subido, porque venda menor derruba esse indicador sempre",
        "O ROAS melhorou porque o gasto caiu mais que a venda, e a conta perdeu vendas"
       ],
       "answer": [
        3
       ],
       "why": "ROAS é vendas dividido por gasto. Se o gasto despenca mais que a venda, o indicador sobe mesmo com a conta vendendo menos. Por isso você cruza ROAS com vendas e com o gasto."
      },
      {
       "t": "jargon",
       "term": "ACOS e TACOS",
       "means": "<b>ACOS</b>: Ads gasto ÷ vendas com Ads. <b>TACOS</b>: Ads gasto ÷ vendas totais da conta, com e sem Ads.",
       "ex": "Ads R$ 500, vendas com Ads R$ 2.500, vendas totais R$ 10.000: ACOS de 20% e TACOS de 5%."
      },
      {
       "t": "sim",
       "kind": "acostacos",
       "title": "Bora treinar: ACOS, ROAS e TACOS",
       "intro": "Calcule os três indicadores a partir do gasto e das vendas. Números de exemplo, novos a cada rodada.",
       "rounds": 3
      },
      {
       "t": "p",
       "title": "A queda tem vários donos",
       "html": "Raramente uma queda tem um dono só. No gráfico a seguir (exemplo), os 30% se dividem em quatro fatias: ruptura, concorrente, sazonalidade e Ads reduzido. Descobrir o tamanho de cada fatia diz por onde agir."
      },
      {
       "t": "chart",
       "kind": "waterfall",
       "title": "De onde saiu a queda de 30%",
       "unit": "R$",
       "data": [
        {
         "label": "Semana passada",
         "value": 10000,
         "type": "start"
        },
        {
         "label": "Ruptura",
         "value": -1200
        },
        {
         "label": "Concorrente",
         "value": -1000
        },
        {
         "label": "Sazonalidade",
         "value": -500
        },
        {
         "label": "Ads reduzido",
         "value": -300
        },
        {
         "label": "Esta semana",
         "type": "total"
        }
       ],
       "caption": "Exemplo: 10.000 menos 3.000 de queda dá 7.000. A ruptura é a maior fatia: comece por ela."
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "1. Compare igual com igual",
         "html": "Semana contra semana, mesmos dias, mesma campanha."
        },
        {
         "title": "2. Quebre em tráfego, conversão e ticket",
         "html": "Ticket é quanto cada pedido vale, em média."
        },
        {
         "title": "3. Cruze com o que você mudou",
         "html": "Preço, Ads, título, foto, estoque."
        },
        {
         "title": "4. Cheque o que veio de fora",
         "html": "Concorrente, época do ano, regra da plataforma."
        }
       ]
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“As vendas caíram 30%, mas as visitas ficaram iguais. Então o problema não é tráfego, é conversão. Vou olhar preço e concorrente primeiro e te aviso o resultado até amanhã.”"
      },
      {
       "t": "quiz",
       "q": "Num exemplo, as visitas ficaram estáveis, a conversão caiu e o anúncio segue ativo. Qual é o primeiro lugar para investigar?",
       "options": [
        "Ruptura de estoque, que zera os pedidos do SKU e some com o anúncio da busca",
        "Posição do anúncio e sazonalidade, que mexem na quantidade de visitas recebidas",
        "Preço, concorrente, fotos e reputação, que mexem na decisão de quem já visitou",
        "Só o desconto médio, porque ele explica sozinho qualquer queda de faturamento"
       ],
       "answer": [
        2
       ],
       "why": "Se as visitas estão firmes, o problema está depois do clique: a oferta convence menos. Preço, concorrente, fotos e reputação entram primeiro. Tráfego e ruptura ficam para quando os dados apontarem pra eles."
      },
      {
       "t": "recap",
       "items": [
        "Variação compara períodos parecidos",
        "Separe tráfego, conversão e ticket",
        "Nunca leia uma métrica sozinha",
        "A queda costuma ter mais de um dono"
       ]
      }
     ]
    },
    {
     "id": "gf-l12-3",
     "title": "Causa raiz e hipóteses",
     "minutes": 7,
     "goal": "Conseguir montar uma árvore de hipóteses, escolher o que testar primeiro e validar a causa raiz de uma queda de vendas.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🌳",
       "title": "Vendas caíram 30%: por onde começar?",
       "text": "Você aprende a montar hipóteses, testar uma por uma e chegar na causa raiz sem chute."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Qual é a causa da queda?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Queda é sintoma, e a causa raiz está abaixo dela."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Hipótese = afirmação + teste + critério. Teste primeiro o barato e provável."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você confirma ou descarta cada hipótese, lembrando que correlação não prova causa."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🩺",
       "html": "Queda de vendas é <b>sintoma</b>. A causa mora um nível abaixo.",
       "sub": "Tratar só o sintoma é remédio que não cura."
      },
      {
       "t": "jargon",
       "term": "Causa raiz",
       "means": "O motivo de verdade por trás do sintoma. Se você corrige, o problema <b>não volta</b>.",
       "ex": "Sintoma: as vendas caíram. Causa raiz: o anúncio pausou porque o estoque acabou."
      },
      {
       "t": "jargon",
       "term": "Hipótese",
       "means": "Um palpite escrito como pergunta que dá pra <b>testar com dado</b>.",
       "ex": "“A conversão caiu porque o concorrente baixou o preço?”"
      },
      {
       "t": "flow",
       "title": "O ciclo do diagnóstico",
       "items": [
        {
         "icon": "📉",
         "title": "Sintoma",
         "text": "O que caiu e quanto"
        },
        {
         "icon": "🌳",
         "title": "Hipóteses",
         "text": "Árvore com as causas possíveis"
        },
        {
         "icon": "🧪",
         "title": "Teste",
         "text": "Dado que confirma ou descarta"
        },
        {
         "icon": "✅",
         "title": "Validação",
         "text": "A causa explica a queda toda?"
        },
        {
         "icon": "🛠️",
         "title": "Ação",
         "text": "Corrige e acompanha"
        }
       ],
       "loop": true,
       "caption": "Se o teste descarta, volta pra árvore e testa a próxima."
      },
      {
       "t": "tree",
       "title": "Árvore de hipóteses",
       "root": "Vendas caíram 30%",
       "branches": [
        {
         "label": "Tráfego",
         "items": [
          "As visitas caíram?",
          "O Ads parou ou ficou caro?",
          "A posição do anúncio piorou?"
         ]
        },
        {
         "label": "Conversão",
         "items": [
          "O preço subiu?",
          "O concorrente baixou o preço?",
          "Fotos ou reputação pioraram?"
         ]
        },
        {
         "label": "Oferta",
         "items": [
          "O estoque acabou?",
          "O anúncio foi pausado ou bloqueado?"
         ]
        },
        {
         "label": "Mercado",
         "items": [
          "A época do ano mudou?",
          "A regra da plataforma mudou?"
         ]
        }
       ],
       "caption": "Cada folha é uma pergunta que o dado responde com sim ou não."
      },
      {
       "t": "p",
       "title": "Como usar a árvore",
       "html": "Comece pelo que os dados já apontam. Se as visitas estão firmes, o galho de tráfego vira prioridade baixa. Teste primeiro o que é barato de checar e muda muita coisa."
      },
      {
       "t": "list",
       "title": "Hipótese boa tem 3 partes",
       "items": [
        "<b>Afirmação</b>: o que pode ter causado a queda",
        "<b>Teste</b>: qual dado ou ação confirma ou descarta",
        "<b>Critério</b>: o que eu veria nos números se fosse verdade"
       ]
      },
      {
       "t": "conta",
       "title": "Teste da hipótese de preço (exemplo)",
       "rows": [
        [
         "Seu preço",
         "R$ 100,00"
        ],
        [
         "Concorrente antes",
         "R$ 105,00"
        ],
        [
         "Concorrente agora",
         "R$ 80,00"
        ],
        [
         "Você contra ele antes",
         "-R$ 5,00",
         "pos"
        ],
        [
         "Você contra ele agora",
         "+R$ 20,00",
         "neg"
        ]
       ],
       "total": [
        "Você ficou mais caro em",
        "R$ 20,00"
       ],
       "note": "Hipótese: o concorrente baixou o preço. Teste: comparar preços e ver se a conversão caiu na mesma semana."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Seu preço x concorrente",
       "unit": "R$",
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
         "name": "Seu preço",
         "values": [
          100,
          100,
          100,
          100,
          100,
          100
         ]
        },
        {
         "name": "Concorrente",
         "values": [
          105,
          105,
          104,
          80,
          80,
          80
         ],
         "tone": "pink"
        }
       ],
       "caption": "Olha onde as linhas se cruzam: na S4 você virou o mais caro. Boa pista, mas ainda precisa de teste."
      },
      {
       "t": "quiz",
       "q": "Num exemplo, as vendas caíram 30% porque o anúncio principal pausou por falta de estoque. Qual item é o sintoma, e não a causa?",
       "options": [
        "O estoque que acabou antes de a reposição do fornecedor chegar",
        "A queda de 30% nas vendas em relação à semana anterior",
        "O anúncio principal pausado quando o estoque zerou",
        "A reposição que não foi pedida a tempo ao fornecedor"
       ],
       "answer": [
        1
       ],
       "why": "A queda de 30% é o que você enxerga primeiro: o sintoma. Estoque zerado, anúncio pausado e reposição atrasada são causas, cada uma um nível mais fundo."
      },
      {
       "t": "p",
       "title": "Teste barato primeiro",
       "html": "Hipóteses não têm o mesmo custo. Algumas são rápidas de checar e prováveis; outras dão trabalho e são improváveis. No gráfico a seguir (exemplo), comece pelo canto de cima, à esquerda."
      },
      {
       "t": "chart",
       "kind": "matrix",
       "title": "Qual hipótese testar primeiro",
       "x": "Esforço do teste",
       "y": "Chance de ser a causa",
       "quad": [
        "Testa primeiro",
        "Testa em seguida",
        "Confere de passagem",
        "Deixa pro fim"
       ],
       "points": [
        {
         "label": "Estoque zerou",
         "x": 1,
         "y": 8,
         "tone": "mint"
        },
        {
         "label": "Preço do concorrente",
         "x": 2,
         "y": 7,
         "tone": "mint"
        },
        {
         "label": "Anúncio pausado",
         "x": 1,
         "y": 6
        },
        {
         "label": "Posição na busca",
         "x": 6,
         "y": 6
        },
        {
         "label": "Reputação",
         "x": 3,
         "y": 3
        },
        {
         "label": "Fotos e título",
         "x": 7,
         "y": 3
        },
        {
         "label": "Regra da plataforma",
         "x": 8,
         "y": 4
        }
       ],
       "caption": "Estoque e preço do concorrente custam pouco e são prováveis: viram o teste número um."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Correlação não é causa",
       "html": "Duas coisas que se movem juntas não provam que uma causou a outra. O Ads subiu e as vendas subiram, mas também era semana de data comemorativa. Teste mudando uma coisa de cada vez."
      },
      {
       "t": "timeline",
       "title": "Um dia de diagnóstico",
       "items": [
        {
         "when": "9h",
         "label": "Puxar 6 semanas de dados",
         "text": "Vendas, visitas, conversão, Ads, estoque e preço"
        },
        {
         "when": "11h",
         "label": "Montar a árvore de hipóteses"
        },
        {
         "when": "14h",
         "label": "Testar as 3 principais hipóteses"
        },
        {
         "when": "16h",
         "label": "Validar e descartar"
        },
        {
         "when": "17h",
         "label": "Escrever a síntese em 5 linhas"
        }
       ]
      },
      {
       "t": "list",
       "title": "Mão na massa: conta que caiu 30%",
       "items": [
        "Pegue uma conta anonimizada que caiu 30% e puxe 6 semanas de dados",
        "Monte a árvore com pelo menos 8 perguntas",
        "Escolha 3 hipóteses e escreva o teste e o critério de cada",
        "Valide, descarte e conte a história em 5 linhas"
       ]
      },
      {
       "t": "sim",
       "kind": "hipotese",
       "title": "Bora treinar: qual causa investigar primeiro",
       "intro": "Veja os dados de uma conta que caiu e escolha a hipótese que merece o primeiro teste. Cenários novos a cada rodada.",
       "rounds": 3
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Confirmar a hipótese olhando <b>uma métrica só</b>. O concorrente baixou o preço, então foi ele? Cruze com visitas, conversão e estoque antes de bater o martelo, e anote o que foi descartado."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Suas vendas caíram 30%. Levantei 3 hipóteses: estoque zerado, preço do concorrente e queda de visitas. Confirmei a primeira, descartei a terceira e ainda testo a segunda. Amanhã te mando o resultado e o plano.”"
      },
      {
       "t": "quiz",
       "q": "Qual item descreve uma hipótese bem escrita para uma queda de vendas?",
       "options": [
        "Algo mudou no anúncio; mexo em título, fotos e preço ao mesmo tempo e vejo o que funciona",
        "As vendas caíram porque o mercado está ruim; espero algumas semanas para ver se a situação melhora sozinha",
        "O Ads é o culpado de tudo; pauso todas as campanhas e vejo se algo muda na semana seguinte",
        "A conversão caiu porque o concorrente baixou o preço; comparo preços e vejo se a queda começou junto"
       ],
       "answer": [
        3
       ],
       "why": "Hipótese boa afirma uma causa, diz qual teste a confirma e qual sinal esperar nos números. As outras são vagas ou mexem em várias coisas ao mesmo tempo, e aí você não aprende o que funcionou."
      },
      {
       "t": "recap",
       "items": [
        "Queda é sintoma; a causa raiz está abaixo",
        "Hipótese tem afirmação, teste e critério",
        "Teste primeiro o barato e provável",
        "Correlação não prova causa"
       ]
      }
     ]
    },
    {
     "id": "gf-l12-4",
     "title": "Análises avançadas, automação e IA",
     "minutes": 8,
     "goal": "Entender curva ABC com margem, coorte, elasticidade e efeito do Ads no orgânico, e usar automação e IA com critério.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🧪",
       "title": "Análises que vão além do painel",
       "text": "Curva ABC com margem, coorte, elasticidade e IA com critério: como ir além do número do dia."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "O que o número do dia não mostra?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Faturamento sozinho esconde o lucro."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Curva ABC com margem, coorte (um grupo acompanhado no tempo) e elasticidade (desconto × vendas)."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "A IA rascunha, e você revisa e decide."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🍰",
       "html": "Média esconde. <b>Fatia</b> mostra.",
       "sub": "As análises avançadas abrem a conta em partes."
      },
      {
       "t": "jargon",
       "term": "Curva ABC",
       "means": "Ranking dos produtos (SKUs) por faturamento. Regra de bolso: <b>A</b> até 80% do total, <b>B</b> até 95%, <b>C</b> o resto.",
       "ex": "Num catálogo de 7 SKUs (exemplo), os 3 primeiros trazem 79% do faturamento: são a curva A."
      },
      {
       "t": "chart",
       "kind": "pareto",
       "title": "Curva ABC do catálogo",
       "unit": "R$",
       "data": [
        {
         "label": "SKU 1",
         "value": 4200
        },
        {
         "label": "SKU 2",
         "value": 2700
        },
        {
         "label": "SKU 3",
         "value": 1000
        },
        {
         "label": "SKU 4",
         "value": 900
        },
        {
         "label": "SKU 5",
         "value": 600
        },
        {
         "label": "SKU 6",
         "value": 400
        },
        {
         "label": "SKU 7",
         "value": 200
        }
       ],
       "caption": "Olha onde a linha cruza 80%: três SKUs puxam quase tudo. Os dois últimos somam só 6%."
      },
      {
       "t": "table",
       "title": "ABC com margem: faturar não é lucrar",
       "head": [
        "SKU",
        "Faturamento",
        "Margem",
        "Leitura"
       ],
       "rows": [
        [
         "SKU 1",
         "R$ 4.200",
         "4%",
         "Vende muito, sobra pouco"
        ],
        [
         "SKU 2",
         "R$ 2.700",
         "18%",
         "Motor de lucro"
        ],
        [
         "SKU 3",
         "R$ 1.000",
         "21%",
         "Merece mais espaço"
        ],
        [
         "SKU 4",
         "R$ 900",
         "9%",
         "Mantém e observa"
        ]
       ],
       "caption": "O SKU 1 é o campeão de vendas, mas o SKU 2 gera mais lucro: R$ 486 contra R$ 168."
      },
      {
       "t": "sim",
       "kind": "abc",
       "title": "Bora treinar: A, B ou C?",
       "intro": "Classifique cada SKU pelo % acumulado, com a regra de bolso 80, 15 e 5. Números de exemplo, novos a cada rodada.",
       "rounds": 3
      },
      {
       "t": "quiz",
       "q": "Num exemplo, o SKU 1 e o SKU 2 são curva A, com margens de 4% e de 18%. O que a análise com margem sugere?",
       "options": [
        "Ignorar a margem, porque a curva ABC já mostra qual SKU pesa mais no lucro",
        "Priorizar o SKU 1 em tudo, porque a curva A sempre indica o maior lucro da conta",
        "Olhar o lucro em R$ de cada um: o SKU 2 pode render mais faturando menos",
        "Cortar o SKU 1 agora, porque margem abaixo de 5% nunca vale a pena vender"
       ],
       "answer": [
        2
       ],
       "why": "Faturamento 4.200 x 4% dá R$ 168 de lucro. Faturamento 2.700 x 18% dá R$ 486. A curva ABC por faturamento não mostra isso, por isso a margem entra ao lado."
      },
      {
       "t": "jargon",
       "term": "Coorte",
       "means": "Um grupo que <b>começou junto</b> (clientes, pedidos ou anúncios do mesmo mês), acompanhado ao longo do tempo.",
       "ex": "Anúncios lançados em janeiro e em fevereiro: como cada grupo vende nas semanas seguintes? O gráfico mostra (exemplo)."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Vendas semanais por coorte",
       "unit": "un",
       "x": [
        "Sem 1",
        "Sem 2",
        "Sem 3",
        "Sem 4",
        "Sem 5",
        "Sem 6"
       ],
       "series": [
        {
         "name": "Lançados em jan",
         "values": [
          40,
          48,
          52,
          55,
          56,
          57
         ]
        },
        {
         "name": "Lançados em fev",
         "values": [
          30,
          34,
          33,
          31,
          29,
          27
         ],
         "tone": "pink"
        }
       ],
       "caption": "Exemplo: a coorte de janeiro cresce e estabiliza; a de fevereiro sobe e depois cai. Vale investigar fevereiro."
      },
      {
       "t": "jargon",
       "term": "Elasticidade de preço",
       "means": "O quanto as vendas <b>mudam</b> quando o preço muda. Elasticidade alta: um pequeno desconto traz muita venda.",
       "ex": "Preço cai 10% e as vendas sobem 25%: o cliente reage muito. Se subissem só 3%, quase nada mudaria."
      },
      {
       "t": "conta",
       "title": "Desconto de 10% na ponta do lápis (exemplo)",
       "rows": [
        [
         "Lucro por unidade antes (100 - 50 - 30)",
         "R$ 20,00"
        ],
        [
         "Lucro por unidade com 10% off (90 - 50 - 27)",
         "R$ 13,00"
        ],
        [
         "Lucro total antes: 100 unidades",
         "R$ 2.000,00"
        ],
        [
         "Lucro total depois: 125 unidades (+25%)",
         "R$ 1.625,00",
         "neg"
        ]
       ],
       "total": [
        "Diferença no lucro",
        "-R$ 375,00"
       ],
       "note": "Taxas de 30% do preço, como exemplo. Mesmo vendendo 25% a mais, o desconto fez perder lucro."
      },
      {
       "t": "lab",
       "preset": "promo",
       "title": "Simulador: o desconto compensa?",
       "intro": "Mexa no desconto e no aumento de vendas. Veja o lucro antes e depois e quanto precisa vender a mais para empatar.",
       "defaults": {
        "preco": 100,
        "custo": 50,
        "taxas": 30,
        "desc": 10,
        "vol": 25
       },
       "note": "Números de exemplo."
      },
      {
       "t": "quiz",
       "q": "Num exemplo, um desconto reduziu o lucro por unidade de R$ 20 para R$ 13. Para manter o mesmo lucro total, as vendas precisam subir cerca de quanto?",
       "options": [
        "Cerca de 35%, que é a perda de R$ 7 dividida pelo lucro antigo de R$ 20",
        "Cerca de 54%, porque R$ 20 ÷ R$ 13 mostra quantas vezes é preciso vender",
        "Cerca de 10%, o mesmo percentual do desconto dado no preço do produto",
        "Cerca de 65%, que é o lucro novo de R$ 13 dividido pelo antigo de R$ 20"
       ],
       "answer": [
        1
       ],
       "why": "Para empatar, unidades x R$ 13 precisa igualar R$ 20 x unidades antigas. A conta é 20 ÷ 13, que dá 1,54: cerca de 54% mais unidades."
      },
      {
       "t": "p",
       "title": "Ads puxa o orgânico?",
       "html": "Ads (anúncio pago) pode trazer visibilidade que depois ajuda as vendas orgânicas, as que vêm sem anúncio. Mas isso é hipótese: quem confirma é o dado da conta. No gráfico a seguir (exemplo), compare as duas linhas."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Ads e vendas orgânicas",
       "unit": "un",
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
         "name": "Vendas com Ads",
         "values": [
          8,
          38,
          41,
          40,
          10,
          8
         ]
        },
        {
         "name": "Vendas orgânicas",
         "values": [
          60,
          62,
          66,
          68,
          64,
          61
         ],
         "tone": "pink"
        }
       ],
       "caption": "Com o Ads ligado (S2 a S4), o orgânico sobe um pouco; sem ele, volta ao patamar antigo. Repita o teste antes de concluir."
      },
      {
       "t": "flow",
       "title": "Relatório que se monta quase sozinho",
       "items": [
        {
         "icon": "📥",
         "title": "Exportação",
         "text": "Salva o relatório na mesma pasta"
        },
        {
         "icon": "🧮",
         "title": "Planilha",
         "text": "Fórmulas e tabela dinâmica prontas"
        },
        {
         "icon": "📺",
         "title": "Painel",
         "text": "Atualiza sem refazer"
        },
        {
         "icon": "🤖",
         "title": "Resumo com IA",
         "text": "Rascunho dos pontos principais"
        },
        {
         "icon": "👀",
         "title": "Revisão humana",
         "text": "Você confere e assina"
        }
       ],
       "loop": true,
       "caption": "A automação faz o trabalho repetido. O julgamento continua com você."
      },
      {
       "t": "compare",
       "left": {
        "title": "Pode pedir pra IA",
        "tone": "good",
        "items": [
         "Resumir um relatório longo",
         "Sugerir hipóteses pra testar",
         "Rascunhar a mensagem pro seller",
         "Achar erro em fórmula"
        ]
       },
       "right": {
        "title": "Não entregue pra IA",
        "tone": "bad",
        "items": [
         "Decidir preço ou verba sozinha",
         "Aceitar número sem conferir",
         "Colar dado sigiloso do cliente sem autorização",
         "Enviar texto sem ler"
        ]
       }
      },
      {
       "t": "list",
       "title": "Mão na massa: sua análise completa",
       "items": [
        "Monte a curva ABC com margem de uma conta anonimizada",
        "Marque 2 SKUs para escalar e 2 para corrigir",
        "Automatize um relatório semanal com planilha e painel",
        "Peça um resumo à IA e corrija tudo o que ela errou"
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Ferramentas de IA, regras de privacidade e relatórios das plataformas mudam. Siga a política interna da Mamba para dados de clientes e confirme regras na documentação oficial."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Cruzei faturamento com margem: o SKU 1 vende mais, mas o SKU 2 deixa mais lucro. Sugiro dar mais espaço e Ads ao SKU 2 e corrigir o preço do SKU 1. Conferi os números antes de te mandar.”"
      },
      {
       "t": "quiz",
       "q": "A IA gerou um resumo do relatório da semana dizendo que o ROAS melhorou. Você ainda não conferiu os números. O que fazer antes de enviar ao seller?",
       "options": [
        "Conferir o número na planilha ou no painel e corrigir o que estiver errado",
        "Enviar o resumo como está, porque a IA lê os dados rápido e erra pouco",
        "Perguntar à IA se ela tem certeza e enviar se ela responder que sim",
        "Apagar do resumo só os números e mandar apenas a parte escrita da análise"
       ],
       "answer": [
        0
       ],
       "why": "A IA ajuda a ganhar tempo, mas pode errar conta ou inventar leitura. Quem assina o relatório é você, então os números são conferidos na fonte antes de seguir."
      },
      {
       "t": "recap",
       "items": [
        "Curva ABC com margem mostra o lucro real",
        "Coorte acompanha um grupo ao longo do tempo",
        "Desconto só compensa se a venda sobe o bastante",
        "IA rascunha; a decisão e a revisão são suas"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "gf-m13",
   "n": 2,
   "title": "Estratégia e plano de conta",
   "tagline": "Do raio-X da conta ao plano de 90 dias, com dado para defender cada decisão diante do cliente.",
   "outcome": "Fazer o raio-X de uma conta, priorizar o que importa, montar o plano de 90 dias com metas realistas e defendê-lo diante do cliente.",
   "lessons": [
    {
     "id": "gf-l13-1",
     "title": "O raio-X da conta",
     "minutes": 8,
     "goal": "Conseguir auditar uma conta em 8 frentes, dar nota a cada uma e achar o gargalo antes de propor qualquer ação.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🩻",
       "title": "Raio-X da conta antes de agir",
       "text": "Em poucos minutos você aprende a olhar a conta inteira em 8 frentes e achar o gargalo antes de mexer em qualquer coisa."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Por onde começar numa conta?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Olhe a conta inteira antes de agir."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Raio-X em 8 frentes, com nota por critério escrito e as frentes lidas juntas."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Termina numa lista de ações."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🔭",
       "html": "Quem só opera executa tarefa. <b>Quem analisa</b> enxerga a conta inteira.",
       "sub": "É a visão esperada dos dois papéis. E tudo começa com um raio-X."
      },
      {
       "t": "jargon",
       "term": "Raio-X de conta",
       "tag": "Traduzindo na hora",
       "means": "Uma <b>auditoria</b>: olhar todas as frentes da conta, com dado, antes de decidir o que fazer.",
       "ex": "O gargalo é o ponto que mais trava o resultado. O raio-X serve para achar ele."
      },
      {
       "t": "table",
       "title": "As 8 frentes do raio-X (1 de 2)",
       "head": [
        "Frente",
        "Pergunta-chave",
        "Sinal de alerta"
       ],
       "rows": [
        [
         "Reputação",
         "A conta está no verde?",
         "Cor caindo, reclamações subindo"
        ],
        [
         "Anúncios",
         "Título e ficha vendem?",
         "Pouca visita, ficha incompleta"
        ],
        [
         "Preço",
         "Cada venda deixa margem?",
         "Margem negativa em produto que vende"
        ],
        [
         "Estoque",
         "Falta ou sobra produto?",
         "Falta nos campeões, sobra nos outros"
        ]
       ],
       "hl": 1,
       "caption": "Em cada frente a pergunta é simples: o dado da conta dá nota boa ou ruim?"
      },
      {
       "t": "table",
       "title": "As 8 frentes do raio-X (2 de 2)",
       "head": [
        "Frente",
        "Pergunta-chave",
        "Sinal de alerta"
       ],
       "rows": [
        [
         "Logística",
         "O envio cumpre o prazo?",
         "Atrasos e frete subindo"
        ],
        [
         "Fiscal",
         "Nota e cadastro estão certos?",
         "Erro de nota ou de imposto no preço"
        ],
        [
         "Ads",
         "O gasto traz retorno?",
         "Gasto alto e venda de Ads baixa"
        ],
        [
         "Concorrência",
         "Quem está ganhando de você?",
         "Rival com preço e prazo melhores"
        ]
       ],
       "hl": 1,
       "caption": "Ads são os anúncios pagos dentro do marketplace. No fiscal, quem decide regime e nota é o contador do cliente."
      },
      {
       "t": "chart",
       "kind": "hbar",
       "title": "Nota por frente (exemplo)",
       "unit": "pts",
       "hl": 2,
       "data": [
        {
         "label": "Reputação",
         "value": 8
        },
        {
         "label": "Anúncios",
         "value": 6
        },
        {
         "label": "Preço",
         "value": 3
        },
        {
         "label": "Estoque e envio",
         "value": 7
        },
        {
         "label": "Fiscal",
         "value": 9
        },
        {
         "label": "Ads",
         "value": 5
        },
        {
         "label": "Concorrência",
         "value": 6
        }
       ],
       "caption": "Olha onde a barra cai: o preço está em 3. Antes de gastar mais em Ads, a margem precisa ser corrigida."
      },
      {
       "t": "p",
       "title": "Nota com critério, não com achismo",
       "html": "Para cada frente, escreva o critério antes. Exemplo: preço nota 10 é todo produto com margem acima do mínimo. Assim a nota de 0 a 10 vira conta, não opinião, e duas pessoas chegam no mesmo número."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "Regras de reputação, taxas, logística, Ads e impostos mudam. A fonte final é a documentação oficial (Mercado Livre, Mercado Ads, Shopee University, Receita) e o contador do cliente. Revise o seu checklist de raio-X a cada trimestre."
      },
      {
       "t": "sim",
       "kind": "repdiag",
       "title": "Treino: qual indicador atacar",
       "intro": "Bora treinar: em cada rodada, escolha o indicador de reputação que merece atenção primeiro.",
       "rounds": 3
      },
      {
       "t": "big",
       "emoji": "💸",
       "html": "O preço é a frente que mais <b>engana</b>.",
       "sub": "Vende bem e lucra mal? Só a cascata mostra."
      },
      {
       "t": "chart",
       "kind": "waterfall",
       "title": "Do preço até a sobra (exemplo)",
       "unit": "R$",
       "data": [
        {
         "label": "Preço",
         "value": 120,
         "type": "start"
        },
        {
         "label": "Produto",
         "value": -66
        },
        {
         "label": "Comissão",
         "value": -18
        },
        {
         "label": "Frete",
         "value": -16
        },
        {
         "label": "Imposto",
         "value": -6
        },
        {
         "label": "Ads",
         "value": -12
        },
        {
         "label": "Sobra",
         "type": "total"
        }
       ],
       "caption": "Sobra de R$ 2 em cada R$ 120 vendidos: a conta vende bastante e lucra quase nada."
      },
      {
       "t": "conta",
       "title": "Preço mínimo para 10% de margem (exemplo)",
       "rows": [
        [
         "Custo do produto",
         "R$ 66,00",
         "neg"
        ],
        [
         "Frete",
         "R$ 16,00",
         "neg"
        ],
        [
         "Soma em reais",
         "R$ 82,00"
        ],
        [
         "Comissão 15% + imposto 5% + Ads 10%",
         "30%",
         "neg"
        ],
        [
         "Margem desejada",
         "10%",
         "pos"
        ],
        [
         "Parte do preço que cobre os reais (100% - 40%)",
         "60%"
        ]
       ],
       "total": [
        "Preço mínimo (82 ÷ 0,60)",
        "R$ 136,67"
       ],
       "note": "Números de exemplo. Taxas reais: confira no painel da plataforma e com o contador."
      },
      {
       "t": "lab",
       "preset": "preco",
       "title": "Mexa no preço e veja a sobra",
       "intro": "Suba o preço, baixe o custo ou o Ads e veja a sobra e o preço mínimo mudarem na hora.",
       "defaults": {
        "preco": 120,
        "custo": 66,
        "com": 15,
        "tarifa": 0,
        "frete": 16,
        "imp": 5,
        "ads": 10,
        "emb": 0,
        "alvo": 10
       },
       "note": "Números de exemplo, não são taxas reais."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Cuidado com métrica solta",
       "html": "Uma nota alta numa frente pode esconder o problema em outra. Vendas subindo com margem negativa não é sucesso. Leia as frentes juntas: o gargalo costuma estar na ligação entre elas."
      },
      {
       "t": "flow",
       "title": "Rotina do raio-X",
       "items": [
        {
         "icon": "📥",
         "title": "Coletar dados",
         "text": "Vendas, custos, Ads e reputação"
        },
        {
         "icon": "🔢",
         "title": "Dar nota",
         "text": "Uma nota por frente, com critério"
        },
        {
         "icon": "🎯",
         "title": "Achar o gargalo",
         "text": "A frente que mais trava"
        },
        {
         "icon": "🧠",
         "title": "Levantar hipóteses",
         "text": "Por que isso acontece?"
        },
        {
         "icon": "📋",
         "title": "Listar ações",
         "text": "Matéria-prima para priorizar"
        }
       ],
       "caption": "O raio-X termina numa lista de ações, não numa mudança feita no escuro."
      },
      {
       "t": "list",
       "title": "Peça isso ao cliente antes de começar",
       "items": [
        "Acesso de colaborador ao painel, nunca a senha do dono",
        "Relatório de vendas dos últimos meses",
        "Custo de cada produto, atualizado",
        "Relatórios de Ads e de reputação",
        "Regime fiscal e notas, com o contador do cliente"
       ]
      },
      {
       "t": "say",
       "emoji": "💬",
       "title": "Fala assim",
       "html": "“Antes de mexer em qualquer coisa, fiz um raio-X da sua conta em 8 frentes. Achei um ponto que pesa mais: o preço. Vou te mostrar o dado e propor poucas ações, em ordem.”"
      },
      {
       "t": "quiz",
       "q": "Você assumiu uma conta nova que vende bastante, mas o cliente reclama de caixa curto. Qual é o melhor primeiro passo?",
       "options": [
        "Subir o orçamento de Ads nos anúncios mais vendidos, para aumentar o faturamento logo",
        "Reescrever os títulos de todos os anúncios, porque é a ação mais rápida de executar",
        "Fazer o raio-X nas 8 frentes com dado da conta e achar o gargalo antes de agir",
        "Aplicar o plano de uma conta parecida do mesmo segmento, já que o mercado é igual"
       ],
       "answer": [
        2
       ],
       "why": "Vender bastante com caixa curto sugere problema de margem, não de volume. Só o raio-X com dado mostra onde está o gargalo; Ads, títulos ou plano copiado são chutes."
      },
      {
       "t": "recap",
       "items": [
        "Raio-X olha 8 frentes antes de agir",
        "Nota com critério escrito, não com achismo",
        "Frentes se leem juntas, nunca isoladas",
        "Preço mínimo protege a margem desejada",
        "O raio-X termina numa lista de ações"
       ]
      }
     ]
    },
    {
     "id": "gf-l13-2",
     "title": "Priorizar: impacto x esforço",
     "minutes": 7,
     "goal": "Conseguir escolher o que fazer primeiro numa conta, usando a matriz de impacto x esforço e estimando o ganho em reais.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🧭",
       "title": "Quarenta ações e nenhuma prioridade",
       "text": "Em poucos minutos você aprende a escolher o que fazer primeiro numa conta, usando a matriz de impacto x esforço."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "O que fazer primeiro?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Nem tudo tem o mesmo retorno."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Impacto (margem, vendas, risco) × esforço (tempo, dinheiro, dependência). Estime o ganho em reais."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Alto impacto com baixo esforço sai primeiro, e o plano tem poucas prioridades."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🎯",
       "html": "Se tudo é prioridade, <b>nada</b> é.",
       "sub": "Quem prioriza bem escolhe pouco e entrega muito."
      },
      {
       "t": "jargon",
       "term": "Impacto",
       "means": "Quanto uma ação mexe no resultado: <b>margem, vendas ou risco</b> da conta.",
       "ex": "Corrigir o preço de produtos com margem negativa tem impacto alto. Mudar a cor de um banner, baixo."
      },
      {
       "t": "jargon",
       "term": "Esforço",
       "means": "O que a ação custa: <b>tempo, dinheiro e dependência</b> de outras pessoas, como o cliente.",
       "ex": "Ajustar um preço leva minutos. Refazer fotos de 50 produtos depende de fotógrafo e de aprovação."
      },
      {
       "t": "list",
       "title": "Perguntas para dar a nota de impacto",
       "items": [
        "Isso mexe na margem ou só no volume?",
        "Atinge os produtos que mais faturam?",
        "Resolve um risco que pode derrubar a conta?",
        "Dá para medir o antes e o depois?"
       ]
      },
      {
       "t": "chart",
       "kind": "matrix",
       "title": "Ações da conta na matriz (exemplo)",
       "x": "Esforço",
       "y": "Impacto",
       "quad": [
        "Fazer já",
        "Planejar",
        "Se sobrar tempo",
        "Deixa pra depois"
       ],
       "points": [
        {
         "label": "Corrigir preço negativo",
         "x": 2,
         "y": 9
        },
        {
         "label": "Pausar Ads sem retorno",
         "x": 1,
         "y": 7
        },
        {
         "label": "Refazer fotos do top 5",
         "x": 6,
         "y": 7
        },
        {
         "label": "Reorganizar estoque",
         "x": 8,
         "y": 8
        },
        {
         "label": "Refazer 300 fichas",
         "x": 9,
         "y": 3
        },
        {
         "label": "Trocar cor do banner",
         "x": 2,
         "y": 2
        }
       ],
       "caption": "O canto de cima à esquerda é ouro: muito impacto, pouco esforço. Comece por ele."
      },
      {
       "t": "table",
       "title": "O que fazer em cada quadrante",
       "head": [
        "Quadrante",
        "Decisão",
        "Exemplo"
       ],
       "rows": [
        [
         "Impacto alto, esforço baixo",
         "Fazer já",
         "Corrigir preço negativo"
        ],
        [
         "Impacto alto, esforço alto",
         "Planejar com prazo",
         "Reorganizar estoque"
        ],
        [
         "Impacto baixo, esforço baixo",
         "Fazer se sobrar tempo",
         "Trocar cor do banner"
        ],
        [
         "Impacto baixo, esforço alto",
         "Deixar pra depois",
         "Refazer 300 fichas"
        ]
       ],
       "hl": 1
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Plano com 40 ações e nenhuma prioridade. O cliente lê, concorda com tudo e nada anda, porque ninguém sabe por onde começar. Plano bom tem poucas frentes, ordem clara e dono em cada uma."
      },
      {
       "t": "sim",
       "kind": "prioridade",
       "title": "Treino: o que fazer primeiro",
       "intro": "Bora treinar: em cada rodada, olhe impacto e esforço e escolha a ação que entra primeiro.",
       "rounds": 3
      },
      {
       "t": "p",
       "title": "E se duas ações empatarem?",
       "html": "Desempate com duas perguntas: qual <b>destrava outras</b> ações e qual tem <b>risco menor</b>? Corrigir o preço, por exemplo, destrava o Ads. Investir em anúncios antes disso é pagar para vender com margem ruim."
      },
      {
       "t": "big",
       "emoji": "🧮",
       "html": "Dá para <b>estimar o impacto em reais</b>, mesmo sem certeza.",
       "sub": "Um chute com conta vale mais que um chute no escuro."
      },
      {
       "t": "chart",
       "kind": "pareto",
       "title": "Ganho estimado por ação (exemplo)",
       "unit": "R$",
       "data": [
        {
         "label": "Corrigir preço",
         "value": 4800
        },
        {
         "label": "Pausar Ads fraco",
         "value": 2400
        },
        {
         "label": "Reabastecer campeões",
         "value": 1500
        },
        {
         "label": "Refazer fotos",
         "value": 800
        },
        {
         "label": "Ajustar títulos",
         "value": 300
        }
       ],
       "caption": "Três ações trazem quase 90% do ganho mensal estimado. As outras entram depois, quando sobrar fôlego."
      },
      {
       "t": "conta",
       "title": "Estimando o ganho de uma ação (exemplo)",
       "rows": [
        [
         "Vendas hoje por mês",
         "120 un"
        ],
        [
         "Lucro hoje (120 un x R$ 2,00)",
         "R$ 240,00"
        ],
        [
         "Vendas depois de subir o preço (-25%)",
         "90 un"
        ],
        [
         "Lucro depois (90 un x R$ 12,00)",
         "R$ 1.080,00",
         "pos"
        ]
       ],
       "total": [
        "Ganho mensal estimado",
        "R$ 840,00"
       ],
       "note": "Exemplo: a conta já prevê queda de 25% nas vendas. Impacto de verdade inclui o risco."
      },
      {
       "t": "steps",
       "title": "Monte a sua matriz",
       "items": [
        {
         "title": "Liste",
         "html": "Tudo que saiu do raio-X, sem filtro."
        },
        {
         "title": "Dê notas",
         "html": "De 0 a 10 para impacto e para esforço, com dado."
        },
        {
         "title": "Posicione",
         "html": "Cada ação vira um ponto na matriz."
        },
        {
         "title": "Escolha",
         "html": "Fique com poucas ações, cada uma com dono e prazo."
        }
       ]
      },
      {
       "t": "compare",
       "left": {
        "title": "Plano sem foco",
        "tone": "bad",
        "items": [
         "40 ações no mesmo nível",
         "Ninguém sabe a ordem",
         "Tudo é urgente",
         "Cliente se perde no relatório"
        ]
       },
       "right": {
        "title": "Plano com foco",
        "tone": "good",
        "items": [
         "3 a 5 prioridades por ciclo",
         "Ordem clara e justificada",
         "Dono e prazo em cada ação",
         "O resto fica na lista de espera"
        ]
       }
      },
      {
       "t": "say",
       "emoji": "🤝",
       "title": "Fala assim",
       "html": "“Dá para fazer as 12 coisas, mas não ao mesmo tempo. Se começarmos pelas 3 que mais mexem na margem, você vê resultado em poucas semanas. O resto entra depois, na ordem.”"
      },
      {
       "t": "quiz",
       "q": "O cliente quer que você faça 12 melhorias de uma vez. Qual resposta segue a matriz de impacto x esforço?",
       "options": [
        "Fazer já as de impacto alto e esforço baixo, planejar as grandes e deixar o resto para depois",
        "Começar pelas mais fáceis de fazer, porque entregar muita coisa rápido agrada o cliente",
        "Dividir o tempo por igual entre as 12 para nenhuma ficar sem atenção no primeiro mês",
        "Começar pelas de maior esforço, porque elas costumam trazer o resultado mais profundo"
       ],
       "answer": [
        0
       ],
       "why": "A matriz manda separar pelo par impacto e esforço: quem tem muito impacto e pouco esforço sai primeiro, as grandes viram projeto com prazo e o resto espera."
      },
      {
       "t": "recap",
       "items": [
        "Impacto é margem, vendas ou risco",
        "Esforço é tempo, dinheiro e dependência",
        "Alto impacto e baixo esforço sai primeiro",
        "Plano bom tem poucas prioridades",
        "Estime o ganho em reais, com o risco"
       ]
      }
     ]
    },
    {
     "id": "gf-l13-3",
     "title": "Plano, metas e OKRs de conta",
     "minutes": 8,
     "goal": "Conseguir montar o plano de 90 dias de uma conta, com metas baseadas em margem e capacidade e OKRs claros.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📋",
       "title": "Plano de conta que cabe numa folha",
       "text": "Em poucos minutos você aprende a montar o plano de 90 dias, com metas que a conta aguenta e OKRs que o cliente entende."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Que meta prometer?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "A meta nasce da margem e da capacidade da conta."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Plano: objetivo, ações, dono, prazo, meta e risco. OKR = objetivo + números que provam."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você revisa o plano de 90 dias com o dado."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "🗂️",
       "html": "Plano bom responde 3 perguntas: <b>o quê, quem e até quando</b>.",
       "sub": "O resto é detalhe de como fazer."
      },
      {
       "t": "flow",
       "title": "O esqueleto do plano",
       "items": [
        {
         "icon": "🎯",
         "title": "Objetivo",
         "text": "Onde queremos chegar"
        },
        {
         "icon": "🩻",
         "title": "Diagnóstico",
         "text": "Onde a conta está hoje"
        },
        {
         "icon": "🧭",
         "title": "Prioridades",
         "text": "Poucas frentes, em ordem"
        },
        {
         "icon": "✅",
         "title": "Ações",
         "text": "Cada uma com dono e prazo"
        },
        {
         "icon": "📏",
         "title": "Meta e métrica",
         "text": "Como saber que deu certo"
        },
        {
         "icon": "⚠️",
         "title": "Risco",
         "text": "O que pode atrapalhar"
        }
       ],
       "caption": "Seis blocos, uma folha. Se não cabe, tem ação demais."
      },
      {
       "t": "table",
       "title": "Uma ação bem escrita (exemplo)",
       "head": [
        "Campo",
        "Exemplo"
       ],
       "rows": [
        [
         "Ação",
         "Subir o preço dos 12 produtos com margem negativa"
        ],
        [
         "Responsável",
         "Gestor de Performance"
        ],
        [
         "Prazo",
         "Até o dia 15 do mês"
        ],
        [
         "Meta",
         "Margem média de 2% para 8%"
        ],
        [
         "Métrica",
         "Margem no relatório de rentabilidade"
        ],
        [
         "Risco",
         "Vendas caírem mais do que o previsto"
        ]
       ],
       "hl": 1
      },
      {
       "t": "jargon",
       "term": "OKR",
       "tag": "Objetivos e Resultados-Chave",
       "means": "Um <b>objetivo</b> claro mais 2 a 4 <b>resultados-chave</b>: números que provam se você chegou lá.",
       "ex": "Objetivo: conta saudável. Resultado-chave: margem média de 2% para 8% em 90 dias (exemplo)."
      },
      {
       "t": "compare",
       "left": {
        "title": "Meta fraca",
        "tone": "bad",
        "items": [
         "Melhorar a conta",
         "Vender mais",
         "Cuidar melhor do Ads"
        ]
       },
       "right": {
        "title": "Resultado-chave bom",
        "tone": "good",
        "items": [
         "Margem média de 2% para 8% em 90 dias (exemplo)",
         "Sem falta de produto nos 10 campeões de venda",
         "Gasto de Ads em até 8% do faturamento (exemplo)"
        ]
       }
      },
      {
       "t": "tree",
       "title": "Do objetivo aos resultados-chave",
       "root": "Objetivo: conta saudável e lucrativa",
       "branches": [
        {
         "label": "Margem",
         "items": [
          "De 2% para 8% em 90 dias",
          "Medida no relatório de rentabilidade"
         ]
        },
        {
         "label": "Ads",
         "items": [
          "Gasto em até 8% das vendas",
          "Ads só em produto com margem boa"
         ]
        },
        {
         "label": "Operação",
         "items": [
          "Sem falta de produto nos campeões",
          "Reputação mantida no verde"
         ]
        }
       ],
       "caption": "Exemplo: cada ramo vira um resultado-chave com número e prazo."
      },
      {
       "t": "quiz",
       "q": "Qual destes resultados-chave está bem escrito para o OKR de uma conta?",
       "options": [
        "Melhorar bastante a margem da conta ao longo do trimestre, com mais cuidado nos preços",
        "Fazer o possível para vender mais e deixar o cliente satisfeito com o trabalho da equipe",
        "Ter um bom desempenho de Ads, acompanhando o painel toda semana com muita atenção",
        "Subir a margem média de 2% para 8% até o dia 90, medida no relatório de rentabilidade"
       ],
       "answer": [
        3
       ],
       "why": "Resultado-chave bom tem número de partida, número de chegada, prazo e fonte da medida. As outras opções são desejos sem como medir."
      },
      {
       "t": "big",
       "emoji": "⚖️",
       "html": "Meta boa nasce de <b>margem e capacidade</b>, não de desejo.",
       "sub": "Prometer vendas sem olhar os dois é receita de frustração."
      },
      {
       "t": "p",
       "title": "Margem primeiro",
       "html": "Antes de prometer vendas, veja quanto cada venda deixa. Esse é o valor da <b>margem de contribuição</b>: o que sobra depois de produto, imposto, comissão, frete e Ads. A meta mínima vem do ponto de equilíbrio."
      },
      {
       "t": "jargon",
       "term": "Capacidade",
       "means": "O quanto a conta aguenta entregar: <b>estoque, caixa, prazo de envio</b> e tempo do cliente e da equipe.",
       "ex": "Meta de dobrar as vendas com estoque para 20 dias é meta de falta de produto."
      },
      {
       "t": "lab",
       "preset": "pe",
       "title": "Ponto de equilíbrio da conta",
       "intro": "Mexa nos custos fixos, no preço e nos custos variáveis e veja quantas unidades a conta precisa vender para empatar.",
       "defaults": {
        "fixos": 6000,
        "preco": 100,
        "var": 70
       },
       "note": "Números de exemplo."
      },
      {
       "t": "conta",
       "title": "Ponto de equilíbrio (exemplo)",
       "rows": [
        [
         "Custos fixos do mês",
         "R$ 6.000,00",
         "neg"
        ],
        [
         "Preço médio",
         "R$ 100,00"
        ],
        [
         "Custos variáveis (70% do preço)",
         "R$ 70,00",
         "neg"
        ],
        [
         "Margem de contribuição por unidade",
         "R$ 30,00",
         "pos"
        ]
       ],
       "total": [
        "Ponto de equilíbrio (6.000 ÷ 30)",
        "200 un"
       ],
       "note": "Exemplo. Abaixo dessas unidades a conta perde. Acima, ela lucra."
      },
      {
       "t": "p",
       "title": "Somando o lucro desejado",
       "html": "Quer R$ 3.000 de lucro no mês (exemplo)? Some ao fixo: R$ 9.000 divididos pela margem de R$ 30 por unidade dão 300 unidades. Mas o estoque e o envio só dão conta de 260. A meta realista é 260."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Quanto precisa x quanto cabe",
       "unit": "un",
       "hl": 2,
       "data": [
        {
         "label": "Equilíbrio",
         "value": 200
        },
        {
         "label": "Lucro desejado",
         "value": 300
        },
        {
         "label": "Capacidade",
         "value": 260,
         "tone": "pink"
        }
       ],
       "caption": "A meta é a menor entre o que o lucro pede e o que a conta aguenta: 260 unidades, não 300."
      },
      {
       "t": "sim",
       "kind": "pontoeq",
       "title": "Treino: ponto de equilíbrio",
       "intro": "Bora treinar: calcule quantas unidades a conta precisa vender para empatar.",
       "rounds": 3
      },
      {
       "t": "timeline",
       "title": "Plano de 90 dias (exemplo)",
       "items": [
        {
         "when": "Dias 1 a 15",
         "label": "Raio-X e alinhamento",
         "text": "Notas por frente e metas combinadas"
        },
        {
         "when": "Dias 16 a 30",
         "label": "Correções rápidas",
         "text": "Preço, Ads sem retorno e anúncios críticos"
        },
        {
         "when": "Dias 31 a 60",
         "label": "Projetos de maior impacto",
         "text": "Estoque, envio e melhoria dos campeões"
        },
        {
         "when": "Dias 61 a 90",
         "label": "Escala e revisão",
         "text": "Ampliar o que deu certo e rever metas"
        },
        {
         "when": "Toda semana",
         "label": "Acompanhamento",
         "text": "Olhar as métricas e ajustar o plano"
        }
       ]
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Plano vivo",
       "html": "Plano não é tatuagem. Se o dado mudar (reputação caiu, imposto mudou, concorrente baixou o preço), revise. Registre a mudança e o motivo, para o cliente ver que foi decisão e não improviso."
      },
      {
       "t": "steps",
       "title": "Mão na massa",
       "items": [
        {
         "title": "Escolha a conta",
         "html": "Conta-teste ou conta real sem nomes. Faça o raio-X nas 8 frentes."
        },
        {
         "title": "Priorize",
         "html": "Monte a matriz e fique com 3 a 5 prioridades."
        },
        {
         "title": "Escreva o plano de 90 dias",
         "html": "Objetivo, ações com dono e prazo, metas, riscos e métricas."
        },
        {
         "title": "Prepare a banca",
         "html": "Monte os OKRs e treine a apresentação de 10 minutos."
        }
       ]
      },
      {
       "t": "say",
       "emoji": "🎯",
       "title": "Fala assim",
       "html": "“Prometo o que o dado sustenta: margem de 2% para 8% em 90 dias. As vendas dependem do estoque e do caixa. Se algo mudar, eu te aviso e a gente ajusta o plano juntos.”"
      },
      {
       "t": "quiz",
       "q": "Para o lucro desejado, a conta precisa vender 300 unidades no mês, mas estoque e envio só sustentam 260. O equilíbrio é 200. Qual é a meta mais realista? (números de exemplo)",
       "options": [
        "300 unidades, e o time dá um jeito de cobrir a diferença com reposição urgente",
        "260 unidades, porque a meta não pode passar do que a conta consegue entregar",
        "280 unidades, a média entre o que o lucro pede e o que o estoque aguenta",
        "200 unidades, que é o equilíbrio e já garante que a conta não perde"
       ],
       "answer": [
        1
       ],
       "why": "A meta é a menor entre o que o lucro pede (300) e o que a capacidade entrega (260). Prometer 300 sem estoque gera falta de produto e reputação ruim."
      },
      {
       "t": "recap",
       "items": [
        "Plano: objetivo, ações, dono, prazo, meta, risco",
        "OKR é objetivo mais números que provam",
        "Meta nasce de margem e capacidade",
        "Equilíbrio é o piso de vendas da conta",
        "Plano de 90 dias se revisa com o dado"
       ]
      }
     ]
    },
    {
     "id": "gf-l13-4",
     "title": "Carteira e reunião de resultado",
     "minutes": 8,
     "goal": "Conseguir priorizar clientes pelo risco, conduzir a reunião de resultado e responder objeções com dado.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📊",
       "title": "Gerir a carteira e defender o plano",
       "text": "Em poucos minutos você aprende a priorizar clientes, enxergar o risco de saída e conduzir uma reunião de resultado com dado."
      },
      {
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Quem atender primeiro, e como conduzir a reunião?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "A carteira se prioriza por valor e risco de saída."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Reunião em 4 passos: conclusão, causa, ação e pedido."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você responde objeção com dado, não com defesa."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
      },
      {
       "t": "big",
       "emoji": "👥",
       "html": "Você não cuida de clientes soltos. Cuida de uma <b>carteira</b>.",
       "sub": "Tempo é limitado: a atenção precisa de critério."
      },
      {
       "t": "jargon",
       "term": "Churn",
       "means": "Quando o cliente <b>cancela</b> ou deixa de contratar. Risco de churn é a chance de isso acontecer.",
       "ex": "Cliente que não responde há semanas e pergunta se vale a pena continuar está com risco alto."
      },
      {
       "t": "chart",
       "kind": "matrix",
       "title": "A carteira por valor e risco (exemplo)",
       "x": "Risco de sair",
       "y": "Valor da conta",
       "quad": [
        "Manter e crescer",
        "Atenção máxima",
        "Rotina leve",
        "Decidir: investir ou soltar"
       ],
       "points": [
        {
         "label": "Cliente A",
         "x": 2,
         "y": 9
        },
        {
         "label": "Cliente B",
         "x": 8,
         "y": 8
        },
        {
         "label": "Cliente C",
         "x": 3,
         "y": 3
        },
        {
         "label": "Cliente D",
         "x": 8,
         "y": 2
        },
        {
         "label": "Cliente E",
         "x": 5,
         "y": 6
        }
       ],
       "caption": "O Cliente B vale muito e está perto de sair: ele ganha a sua atenção primeiro."
      },
      {
       "t": "quiz",
       "q": "Você tem pouco tempo na semana. O Cliente B vale muito e tem risco alto de sair. O Cliente C vale pouco e está tranquilo. Quem recebe atenção primeiro?",
       "options": [
        "O Cliente C, porque resolver uma conta pequena rápido libera tempo para as outras",
        "O Cliente B, porque valor alto com risco alto é onde uma perda custa mais",
        "Os dois com o mesmo tempo, porque todo cliente merece atenção igual sempre",
        "O cliente que mandou mensagem por último, porque a ordem de chegada é o que manda"
       ],
       "answer": [
        1
       ],
       "why": "Priorizar a carteira é cruzar valor da conta com risco de sair. Valor alto e risco alto é o quadrante de atenção máxima."
      },
      {
       "t": "list",
       "title": "Sinais de risco de churn",
       "items": [
        "Resultado abaixo do combinado por várias semanas",
        "Demora para responder ou some das reuniões",
        "Pergunta toda hora o que a equipe está fazendo",
        "Reclama de algo que já tinha sido alinhado",
        "Fala em outra assessoria ou em fazer sozinho"
       ]
      },
      {
       "t": "flow",
       "title": "Rotina semanal da carteira",
       "loop": true,
       "items": [
        {
         "icon": "📈",
         "title": "Olhar o painel",
         "text": "Resultado de cada conta contra a meta"
        },
        {
         "icon": "🚦",
         "title": "Classificar o risco",
         "text": "Verde, amarelo ou vermelho"
        },
        {
         "icon": "🛠️",
         "title": "Agir nos críticos",
         "text": "Primeiro as contas em vermelho"
        },
        {
         "icon": "📝",
         "title": "Registrar",
         "text": "O que foi combinado e por quê"
        },
        {
         "icon": "🔁",
         "title": "Revisar a semana",
         "text": "Ajustar a ordem para a próxima"
        }
       ],
       "caption": "Rotina curta e repetida vence maratona de última hora."
      },
      {
       "t": "timeline",
       "title": "A reunião de resultado, em 5 blocos",
       "items": [
        {
         "when": "Bloco 1",
         "label": "Resumo em uma frase",
         "text": "Onde estamos em relação à meta"
        },
        {
         "when": "Bloco 2",
         "label": "Resultado contra a meta",
         "text": "Dois ou três números, não vinte"
        },
        {
         "when": "Bloco 3",
         "label": "Por que aconteceu",
         "text": "Causas com dado, sem culpar ninguém"
        },
        {
         "when": "Bloco 4",
         "label": "O que fizemos e faremos",
         "text": "Ações com dono e prazo"
        },
        {
         "when": "Bloco 5",
         "label": "O que precisamos do cliente",
         "text": "Decisões, acessos e aprovações"
        }
       ]
      },
      {
       "t": "compare",
       "left": {
        "title": "Reunião fraca",
        "tone": "bad",
        "items": [
         "Abre com 30 slides de números",
         "Esconde o problema no meio",
         "Termina sem próximo passo",
         "O cliente sai sem saber o que decidir"
        ]
       },
       "right": {
        "title": "Reunião forte",
        "tone": "good",
        "items": [
         "Abre com a conclusão em uma frase",
         "Mostra o problema e a causa com dado",
         "Termina com ações, donos e prazos",
         "O cliente sai sabendo o que decidir"
        ]
       }
      },
      {
       "t": "p",
       "title": "Dado vira história em 4 passos",
       "html": "Resultado, causa, ação, próximo passo. Exemplo: as vendas ficaram abaixo da meta (resultado) porque os campeões ficaram sem estoque na semana 4 (causa). Repusemos (ação) e a próxima compra sai dia 10 (próximo passo)."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Vendas da semana contra a meta (exemplo)",
       "unit": "mil",
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
         "name": "Meta",
         "values": [
          20,
          22,
          24,
          26,
          28,
          30
         ],
         "tone": "sky"
        },
        {
         "name": "Real",
         "values": [
          19,
          22,
          25,
          21,
          22,
          27
         ],
         "tone": "pink"
        }
       ],
       "caption": "As linhas se afastam na semana 4: é ali que a reunião precisa achar a causa. Valores em R$ mil."
      },
      {
       "t": "sim",
       "kind": "hipotese",
       "title": "Treino: qual causa investigar primeiro",
       "intro": "Bora treinar: em cada queda de vendas, escolha a hipótese mais provável para testar primeiro.",
       "rounds": 3
      },
      {
       "t": "table",
       "title": "Objeções comuns e respostas com dado",
       "head": [
        "Objeção do cliente",
        "Resposta com dado"
       ],
       "rows": [
        [
         "As vendas não subiram",
         "Mostre margem x vendas e o que mudou"
        ],
        [
         "O Ads está caro",
         "Mostre o ROAS de equilíbrio e o ROAS atual"
        ],
        [
         "O concorrente vende mais barato",
         "Mostre o preço mínimo e a margem que sobra"
        ],
        [
         "Faça tudo ao mesmo tempo",
         "Mostre a matriz e a ordem de impacto"
        ],
        [
         "Ainda não vi resultado",
         "Mostre as métricas semana a semana"
        ]
       ],
       "hl": 1,
       "caption": "ROAS é quanto o anúncio vende para cada R$ 1 investido em Ads."
      },
      {
       "t": "say",
       "emoji": "🗣️",
       "title": "Fala assim",
       "html": "“Entendo a preocupação, e você tem razão em cobrar. Olha o dado: a venda caiu na semana 4 por falta de estoque, e já repusemos. Posso te mostrar o que muda daqui para frente?”"
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Ética e confidencialidade",
       "html": "Dado e acesso do cliente são dele. Não circule senha por mensagem, não mostre números de um cliente a outro e use só os acessos que ele liberou. Em dúvida, pergunte ao líder antes de compartilhar."
      },
      {
       "t": "steps",
       "title": "Treino de banca",
       "items": [
        {
         "title": "Abra",
         "html": "Uma frase com o resultado e a conclusão."
        },
        {
         "title": "Mostre",
         "html": "Dois gráficos que provam sua tese, com a leitura escrita."
        },
        {
         "title": "Peça",
         "html": "Uma decisão clara do cliente ou da banca."
        },
        {
         "title": "Ouça",
         "html": "Anote cada objeção e responda com dado, sem se defender."
        }
       ]
      },
      {
       "t": "quiz",
       "q": "O seller diz: o Ads está caro e não vejo resultado. Qual resposta defende melhor o plano? (números de exemplo)",
       "options": [
        "Prometer que o Ads vai melhorar no mês que vem, porque a equipe já está atenta ao caso",
        "Explicar que o Ads é assim mesmo, que o resultado demora e que ele precisa ter paciência",
        "Reduzir o orçamento à metade na hora para o cliente se sentir ouvido, sem olhar o dado",
        "Mostrar o ROAS de equilíbrio e o ROAS atual, o que será ajustado e quando vamos rever"
       ],
       "answer": [
        3
       ],
       "why": "Objeção se responde com dado: o ROAS de equilíbrio mostra o mínimo para não perder, o atual mostra onde estamos e o ajuste com data mostra o plano."
      },
      {
       "t": "recap",
       "items": [
        "Carteira se prioriza por valor e risco",
        "Churn avisa: resultado fraco e cliente sumido",
        "Reunião: conclusão, causa, ação, pedido",
        "Objeção se responde com dado, não com defesa",
        "Dado e acesso do cliente são confidenciais"
       ]
      }
     ]
    }
   ]
  }
 ]
});

/* Conteúdo da trilha PriceBot, em formato Stories: cada item de `blocks` é um card de tela cheia.
   Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, term, recap, quiz, shot, find, video, ruler, sim.
   Primeiro card = hook, último = recap. Veja COMO-ADICIONAR-TRILHA.md (seção Stories) e `npm run stories`.
   Os vídeos são do canal oficial: youtube.com/@pricebot
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
  "id": "pricebot",
  "finalScope": "final",
  "title": "Formação PriceBot",
  "tag": "Ferramenta",
  "tagline": "Aprenda a PriceBot do zero e vire a pessoa que ensina os outros a usar.",
  "subtitle": "Do portal ao diagnóstico, em stories de poucos minutos.",
  "channel": "https://www.youtube.com/@pricebot",
  "modules": [
    {
      "id": "m0",
      "n": 1,
      "title": "Conheça o sistema",
      "tagline": "Um tour rápido pelas telas do portal PriceBot, pra você nunca se perder.",
      "outcome": "Abrir qualquer tela do portal, saber pra que ela serve e achar o botão certo sem ajuda.",
      "lessons": [
        {
          "id": "l0-1",
          "title": "O mapa do portal em 5 min",
          "minutes": 5,
          "goal": "Saber onde fica cada área do menu e como as listas do portal funcionam.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🗺️",
              "title": "O mapa do portal PriceBot",
              "text": "Em 5 minutos você aprende onde cada coisa mora no portal e como usar qualquer lista dele."
            },
            {
              "t": "big",
              "emoji": "📍",
              "html": "Antes de mexer em preço, saiba <b>onde cada informação mora</b>.",
              "sub": "Este módulo é um passeio por telas reais do portal."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Como estudar as telas",
              "html": "Toque nos <b>números</b> da imagem pra ler o que cada área é. Use <b>Ampliar a tela</b> pra ver em tamanho real. Nos prints, alguns cartões aparecem zerados e algumas listas vazias: é só o momento da captura. Numa conta em operação, eles têm dados."
            },
            {
              "t": "p",
              "title": "Onde fica o portal",
              "html": "O portal da PriceBot fica em <b>portal.pricebot.com.br</b>. É lá que você acompanha vendas, anúncios, custos e os ajustes do bot."
            },
            {
              "t": "big",
              "html": "O menu é organizado por <b>tarefa</b>, não por nome.",
              "sub": "Lembrou da tarefa, achou o item."
            },
            {
              "t": "list",
              "title": "As quatro áreas do menu",
              "items": [
                "<b>Ver resultado:</b> Home e Pedidos.",
                "<b>Trabalhar os anúncios:</b> Catálogo, Tradicional e Anúncios (que abre Pendentes, Pausados, Erros e Verificação).",
                "<b>Cadastrar a base de custo:</b> Impostos, Fornecedores e Produtos.",
                "<b>Ajustar o bot:</b> Configurações. E Downloads guarda os arquivos que você mandou o portal gerar."
              ]
            },
            {
              "t": "shot",
              "tela": "catalogo",
              "title": "Menu: resultado e listas de trabalho",
              "spots": [
                "c-mn-home",
                "c-mn-catalogo",
                "c-mn-trad",
                "c-mn-pedidos"
              ],
              "caption": "O item escuro é a tela em que você está. A seta ao lado de Pedidos mostra que ele abre um submenu."
            },
            {
              "t": "shot",
              "tela": "catalogo",
              "title": "Menu: anúncios e base de custo",
              "spots": [
                "c-mn-anuncios",
                "c-mn-impostos",
                "c-mn-fornec",
                "c-mn-produtos"
              ],
              "caption": "Anúncios e Produtos também têm seta: cada um abre um submenu."
            },
            {
              "t": "shot",
              "tela": "catalogo",
              "title": "Menu: arquivos e ajustes",
              "spots": [
                "c-mn-down",
                "c-mn-config"
              ],
              "caption": "Downloads guarda os arquivos que você mandou gerar. Configurações é onde você ajusta o bot."
            },
            {
              "t": "big",
              "emoji": "🧩",
              "html": "Aprendeu <b>uma lista</b>, sabe usar todas.",
              "sub": "Filtros no alto, botões no canto, tabela no meio, paginação embaixo."
            },
            {
              "t": "shot",
              "tela": "tradicional",
              "title": "Anatomia de uma lista: filtros e ordem",
              "spots": [
                "t-filtros",
                "t-sort",
                "t-clear"
              ],
              "caption": "Os filtros ficam no alto. As setas ordenam as linhas. Limpar filtros volta tudo ao padrão."
            },
            {
              "t": "shot",
              "tela": "tradicional",
              "title": "Anatomia de uma lista: download e tabela",
              "spots": [
                "t-dl",
                "t-tabela"
              ],
              "caption": "A tabela é mais larga que a tela. Use a barra de rolagem horizontal, embaixo, pra ver as colunas da direita."
            },
            {
              "t": "list",
              "title": "O que cada parte faz",
              "items": [
                "<b>Filtros:</b> preencha um ou vários pra reduzir a lista.",
                "<b>Limpar filtros:</b> use antes de concluir que a lista está vazia.",
                "<b>Ordenação:</b> as setas com um número vermelho definem a ordem das linhas.",
                "<b>Download:</b> baixa a lista em planilha, pra trabalhar fora do portal ou mandar ao seller.",
                "<b>Paginação:</b> 20 itens por página, e dá pra trocar esse número."
              ]
            },
            {
              "t": "say",
              "title": "Como explicar a um colega",
              "html": "“O portal tem quatro áreas: resultado, anúncios, base de custo e configurações. Se você sabe qual das quatro responde à pergunta, já sabe em que item do menu clicar.”"
            },
            {
              "t": "recap",
              "items": [
                "O menu é por tarefa: resultado, anúncios, custo e ajustes",
                "Toda lista: filtros, botões, tabela e paginação",
                "Lista parece vazia? Limpe os filtros primeiro",
                "A tabela é larga: role pro lado"
              ]
            }
          ]
        },
        {
          "id": "l0-2",
          "title": "Home: seu painel de resultados",
          "minutes": 6,
          "goal": "Ler a Home e dizer, em uma frase, o que cada cartão e cada gráfico responde.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "📊",
              "title": "Home: o painel que conta como vai a conta",
              "text": "Em 6 minutos você aprende a ler a primeira tela do portal e a comparar o mês do jeito certo."
            },
            {
              "t": "big",
              "html": "A Home responde <b>3 perguntas</b> de cara.",
              "sub": "É a primeira tela depois do login."
            },
            {
              "t": "list",
              "title": "As três perguntas da Home",
              "items": [
                "<b>Quanto a conta vendeu?</b>",
                "<b>Quanto voltou em rebate?</b>",
                "<b>O que está parado?</b>"
              ]
            },
            {
              "t": "jargon",
              "term": "Rebate",
              "means": "A parte do desconto que o <b>Mercado Livre devolve</b> ao seller quando ele entra numa campanha.",
              "ex": "Campanha de 10% de desconto com 2% de rebate: o seller sente só 8%."
            },
            {
              "t": "jargon",
              "term": "Ticket médio",
              "means": "O <b>valor médio de cada pedido</b> no período.",
              "ex": "5 pedidos que somam R$ 500 dão ticket médio de R$ 100."
            },
            {
              "t": "shot",
              "tela": "home",
              "title": "Os cartões do mês",
              "spots": [
                "h-mes",
                "h-mes-comp",
                "h-mes-kpi"
              ],
              "caption": "O cartão do mês resume faturamento, ticket médio, rebate e margem, e compara três valores lado a lado."
            },
            {
              "t": "shot",
              "tela": "home",
              "title": "Últimos 7 dias e dias sem vender",
              "spots": [
                "h-7d",
                "h-dias",
                "h-dias-dl"
              ],
              "caption": "O cartão da semana mostra a tendência recente. O quadro ao lado lista SKUs parados e dá pra baixar em planilha."
            },
            {
              "t": "shot",
              "tela": "home",
              "title": "Os gráficos e o menu recolhido",
              "spots": [
                "h-tipo",
                "h-st-anuncios",
                "h-st-catalogo",
                "h-menu"
              ],
              "caption": "Os três gráficos mostram o tipo dos anúncios, a situação deles e o status do catálogo. O menu aparece só com ícones."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Home zerada",
              "html": "Nos prints, os cartões mostram R$ 0,00 e os gráficos dizem “Dados não disponíveis”. Numa conta com vendas, os números aparecem. Home zerada de verdade? Confira primeiro se <b>a conta aberta é a certa</b>: ao abrir uma conta, todos os dados passam a ser dela."
            },
            {
              "t": "big",
              "emoji": "🧐",
              "html": "Mês pela metade? Cuidado com <b>qual comparação</b> você lê.",
              "sub": "Uma delas faz qualquer conta parecer em queda."
            },
            {
              "t": "p",
              "title": "Os três valores do cartão",
              "html": "O cartão do mês mostra o <b>mês atual</b>, o <b>mês anterior inteiro</b> e o <b>mesmo período do mês anterior</b>. A variação em % aparece ao lado."
            },
            {
              "t": "conta",
              "title": "Dia 14 do mês: quem tá certo?",
              "rows": [
                [
                  "Mês atual (14 dias)",
                  "R$ 18.000"
                ],
                [
                  "Mês anterior inteiro",
                  "R$ 40.000"
                ],
                [
                  "Mesmo período do mês anterior (14 dias)",
                  "R$ 15.000"
                ],
                [
                  "Contra o mês inteiro: 18.000 ÷ 40.000",
                  "-55%",
                  "neg"
                ],
                [
                  "Contra o mesmo período: 18.000 ÷ 15.000",
                  "+20%",
                  "pos"
                ]
              ],
              "total": [
                "Comparação justa",
                "+20%"
              ],
              "note": "A segunda usa o mesmo número de dias. A primeira compara 14 dias com 30."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Regra de bolso",
              "html": "Com o mês pela metade, compare sempre com o <b>mesmo período do mês anterior</b>. Comparar com o mês inteiro faz qualquer conta parecer em queda."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Vendas caíram essa semana?",
              "html": "Seller disse que as vendas caíram esta semana? Olhe primeiro o cartão <b>Últimos 7 dias</b>. Ele compara com a semana anterior."
            },
            {
              "t": "say",
              "title": "Se o seller perguntar “como tá meu mês?”",
              "html": "“No dia 14 você vendeu R$ 18.000. Comparando com os mesmos 14 dias do mês passado, que foram R$ 15.000, você está 20% acima.”"
            },
            {
              "t": "recap",
              "items": [
                "Home: quanto vendeu, quanto voltou de rebate, o que está parado",
                "Mês pela metade: compare com o mesmo período",
                "Últimos 7 dias mostra a tendência recente",
                "Home zerada? Confira a conta aberta"
              ]
            }
          ]
        },
        {
          "id": "l0-3",
          "title": "Pedidos: da conta ao anúncio",
          "minutes": 7,
          "goal": "Escolher o período certo, ler os indicadores e achar o resultado de cada anúncio.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧾",
              "title": "Pedidos: ache o prejuízo em 2 telas",
              "text": "Em 7 minutos você aprende a escolher o período certo, ler os indicadores e achar quais anúncios deram problema."
            },
            {
              "t": "big",
              "html": "Pedidos tem duas telas: uma olha a <b>conta toda</b>, a outra olha <b>cada anúncio</b>.",
              "sub": "Saber qual abrir já resolve metade da dúvida."
            },
            {
              "t": "compare",
              "left": {
                "title": "Visão Geral",
                "tone": "good",
                "items": [
                  "Responde: como a conta foi no período?",
                  "Mostra indicadores e gráficos."
                ]
              },
              "right": {
                "title": "Pedidos (a lista)",
                "tone": "good",
                "items": [
                  "Responde: e cada anúncio, como foi?",
                  "Uma linha por anúncio."
                ]
              }
            },
            {
              "t": "jargon",
              "term": "MLB",
              "means": "O <b>código do anúncio</b> no Mercado Livre. Cada anúncio tem o seu.",
              "ex": "Na lista Pedidos, cada linha é um MLB, com pedidos, faturamento e margem dele."
            },
            {
              "t": "big",
              "emoji": "📅",
              "html": "Primeiro o <b>período</b>. Depois o número.",
              "sub": "A tela abre em Mês Atual."
            },
            {
              "t": "shot",
              "tela": "pedidos-visao",
              "title": "Visão Geral: mês atual e anterior",
              "spots": [
                "p-sub",
                "p-btn-mes",
                "p-btn-ant"
              ],
              "caption": "O botão laranja é o período selecionado agora. O padrão é o mês atual."
            },
            {
              "t": "shot",
              "tela": "pedidos-visao",
              "title": "Visão Geral: 30 dias e datas livres",
              "spots": [
                "p-btn-30",
                "p-datas"
              ],
              "caption": "Os 30 dias contam corrido, independente do mês. Os campos de data deixam você escolher qualquer período."
            },
            {
              "t": "conta",
              "title": "Rebate lido no período errado",
              "rows": [
                [
                  "Tela em Mês Atual (dia 9)",
                  "R$ 700"
                ],
                [
                  "Últimos 30 dias (o que o seller pediu)",
                  "R$ 2.400"
                ]
              ],
              "total": [
                "Diferença na resposta",
                "R$ 1.700"
              ],
              "note": "O período escolhido vale pra todos os indicadores e gráficos da tela."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Regra de bolso",
              "html": "Primeiro o período, depois o número. Seller perguntou dos últimos 30 dias e a tela tá em Mês Atual? Troque o período antes de responder."
            },
            {
              "t": "shot",
              "tela": "pedidos-visao",
              "title": "Indicadores: vendas e margem",
              "spots": [
                "p-k-fat",
                "p-k-marg",
                "p-k-contrib",
                "p-k-ped"
              ],
              "caption": "Faturamento, margem, margem de contribuição e quantidade de pedidos do período."
            },
            {
              "t": "jargon",
              "term": "Margem de contribuição",
              "means": "Quanto <b>sobra em reais</b> de cada venda depois dos custos variáveis, pra pagar o fixo e gerar lucro.",
              "ex": "É um valor em reais, não um percentual."
            },
            {
              "t": "shot",
              "tela": "pedidos-visao",
              "title": "Indicadores: prejuízo e rebate",
              "spots": [
                "p-k-neg",
                "p-k-rebfat",
                "p-k-reb"
              ],
              "caption": "Pedidos que deram prejuízo, rebate em % do faturamento e rebate em reais."
            },
            {
              "t": "jargon",
              "term": "Pedidos negativos",
              "means": "Pedidos que fecharam com <b>margem negativa</b>, ou seja, no prejuízo.",
              "ex": "Se o número não é zero, vale investigar de onde vêm."
            },
            {
              "t": "jargon",
              "term": "Rebate/Faturamento",
              "means": "Quanto o rebate (desconto que o Mercado Livre devolve) representa do <b>faturamento</b>, em %.",
              "ex": "R$ 2.400 de rebate em R$ 80.000 de faturamento dão 3%."
            },
            {
              "t": "shot",
              "tela": "pedidos-visao",
              "title": "Gráficos da Visão Geral",
              "spots": [
                "p-grafico",
                "p-g-toggle",
                "p-grupo"
              ],
              "caption": "O gráfico mostra o dia a dia e troca entre Faturamento e Margem. O quadro ao lado agrupa por fornecedor ou por SKU."
            },
            {
              "t": "shot",
              "tela": "pedidos-lista",
              "title": "Lista Pedidos: período e ações",
              "spots": [
                "l-periodo",
                "l-filtros",
                "l-dl"
              ],
              "caption": "Cada linha resume um anúncio (MLB) no período: quantos pedidos teve, quanto faturou e com que margem."
            },
            {
              "t": "shot",
              "tela": "pedidos-lista",
              "title": "Lista Pedidos: margem e prejuízo",
              "spots": [
                "l-c-margem",
                "l-c-neg",
                "l-pag"
              ],
              "caption": "Margem em reais e em %, pedidos negativos por anúncio e a paginação embaixo."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Visão Geral",
                  "html": "Olhe o indicador Pedidos negativos. Ele mostra que existe prejuízo."
                },
                {
                  "title": "Lista Pedidos",
                  "html": "Se o número não é zero, abra a lista. Ela mostra quais anúncios causaram."
                },
                {
                  "title": "Ordenação",
                  "html": "Ordene pela margem pra trazer as piores pro topo."
                }
              ]
            },
            {
              "t": "say",
              "title": "Se o seller perguntar “quais anúncios deram prejuízo?”",
              "html": "“Abri a lista Pedidos no período que você pediu e ordenei pela margem. Os anúncios com pior resultado ficam no topo, aí a gente vê um por um.”"
            },
            {
              "t": "recap",
              "items": [
                "Visão Geral olha a conta; a lista Pedidos olha cada anúncio",
                "Escolha o período antes de ler qualquer número",
                "Pedidos negativos diferente de zero: investigue",
                "Ordene pela margem pra achar os piores anúncios"
              ]
            }
          ]
        },
        {
          "id": "l0-4",
          "title": "Catálogo ou Tradicional?",
          "minutes": 6,
          "goal": "Diferenciar as duas listas de trabalho e usar os filtros pra achar onde há ação a tomar.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🔀",
              "title": "Catálogo ou Tradicional: qual abrir?",
              "text": "Em 6 minutos você aprende a diferença entre as duas listas do bot e usa os filtros pra achar o que precisa de ação."
            },
            {
              "t": "big",
              "html": "Duas listas, o mesmo desenho, mas <b>perguntas diferentes</b>.",
              "sub": "São as listas em que o bot trabalha todo dia."
            },
            {
              "t": "jargon",
              "term": "Catálogo",
              "means": "A página do Mercado Livre em que um anúncio aparece como <b>vencedor</b>. O bot ajusta o preço dentro da margem pra disputar.",
              "ex": "Anúncio ganhando, perdendo ou empatando o catálogo."
            },
            {
              "t": "jargon",
              "term": "Tradicional",
              "means": "O anúncio que <b>não disputa catálogo</b>. Aqui o bot cuida das promoções: entra e sai de campanhas.",
              "ex": "Campanha é uma promoção do Mercado Livre em que o anúncio entra com desconto."
            },
            {
              "t": "compare",
              "left": {
                "title": "Catálogo",
                "tone": "good",
                "items": [
                  "O bot disputa catálogo e ajusta o preço na margem.",
                  "Tem um filtro a mais: Status do Catálogo.",
                  "Use pra achar anúncios perdendo o catálogo."
                ]
              },
              "right": {
                "title": "Tradicional",
                "tone": "good",
                "items": [
                  "O bot gerencia promoções: entra e sai de campanhas.",
                  "Não tem o filtro Status do Catálogo.",
                  "Use pra olhar anúncios que não disputam catálogo."
                ]
              }
            },
            {
              "t": "video",
              "id": "KISFrHkUmdI",
              "title": "Utilizando os filtros de Oportunidades de Catálogo e Campanha no PriceBot",
              "dur": "5:21",
              "note": "Veja como os filtros levam você direto aos anúncios em que há ação a tomar."
            },
            {
              "t": "jargon",
              "term": "SKU",
              "means": "O <b>código interno do produto</b>. É ele que liga o anúncio ao custo cadastrado.",
              "ex": "Um produto com SKU 1518 pode ter anúncio no Mercado Livre ligado a esse código."
            },
            {
              "t": "shot",
              "tela": "catalogo",
              "title": "Catálogo: filtros de busca",
              "spots": [
                "c-f-mlb",
                "c-f-titulo",
                "c-f-forn",
                "c-f-sku"
              ],
              "caption": "Busque por código MLB, palavras do título, fornecedor ou SKU."
            },
            {
              "t": "shot",
              "tela": "catalogo",
              "title": "Catálogo: filtros de situação",
              "spots": [
                "c-f-envio",
                "c-f-proc",
                "c-f-prec",
                "c-f-acomp"
              ],
              "caption": "Filtre por envio, status de processamento, bot ligado ou desligado, e se o anúncio acompanha o catálogo."
            },
            {
              "t": "shot",
              "tela": "catalogo",
              "title": "O filtro só do Catálogo",
              "spots": [
                "c-f-stcat"
              ],
              "caption": "Status do Catálogo filtra por ganhando, perdendo ou empatando. A lista Tradicional não tem esse filtro."
            },
            {
              "t": "shot",
              "tela": "catalogo",
              "title": "Catálogo: botões e cabeçalho",
              "spots": [
                "c-dl",
                "c-clear",
                "c-sort",
                "c-head"
              ],
              "caption": "Baixar planilha, limpar filtros, ordenar e o cabeçalho da tabela. A tabela é larga, então role pro lado."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Abra Catálogo",
                  "html": "No menu lateral, toque em Catálogo."
                },
                {
                  "title": "Filtre o status",
                  "html": "Em Status do Catálogo, escolha perdendo."
                },
                {
                  "title": "Baixe a planilha",
                  "html": "Precisa mandar pro seller? Use Download Planilha."
                }
              ]
            },
            {
              "t": "shot",
              "tela": "tradicional",
              "title": "Tradicional: filtros e botões",
              "spots": [
                "t-filtros",
                "t-f-prec",
                "t-sort",
                "t-clear"
              ],
              "caption": "Os filtros são os mesmos do Catálogo, menos o Status do Catálogo."
            },
            {
              "t": "shot",
              "tela": "tradicional",
              "title": "Tradicional: download e tabela",
              "spots": [
                "t-dl",
                "t-tabela"
              ],
              "caption": "Mesma estrutura do Catálogo: baixe a planilha e role a tabela pro lado pra ver as colunas da direita."
            },
            {
              "t": "big",
              "emoji": "🫙",
              "html": "Lista vazia <b>não é erro</b>.",
              "sub": "Nos prints, as duas dizem “Nenhum dado para exibir”."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Limpe os filtros",
                  "html": "Clique em Limpar filtros."
                },
                {
                  "title": "Confira a conta",
                  "html": "Veja se a conta aberta é a do seller certo."
                },
                {
                  "title": "Só então",
                  "html": "Olhe a integração em Configurações."
                }
              ]
            },
            {
              "t": "recap",
              "items": [
                "Catálogo: o bot disputa o catálogo na margem",
                "Tradicional: o bot cuida das promoções",
                "Status do Catálogo só existe na lista Catálogo",
                "Lista vazia: limpe filtros e confira a conta"
              ]
            }
          ]
        },
        {
          "id": "l0-5",
          "title": "Anúncios e Pendentes",
          "minutes": 7,
          "goal": "Ler uma linha da lista de Anúncios e explicar por que um anúncio está em Pendentes.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🔎",
              "title": "Leia uma linha de Anúncios e destrave Pendentes",
              "text": "Em 7 minutos você aprende a ler uma linha da lista e a explicar por que um anúncio está parado em Pendentes."
            },
            {
              "t": "big",
              "html": "A lista Anúncios é o <b>cadastro geral</b> da PriceBot.",
              "sub": "Todo anúncio que o bot conhece mora ali, com o estado do bot e as margens."
            },
            {
              "t": "p",
              "title": "O submenu de Anúncios",
              "html": "Ao tocar em Anúncios no menu, abre o submenu: Anúncios, Pendentes, Pausados, Erros, Verificação e Importar e exportar. Hoje a gente começa por Anúncios e Pendentes."
            },
            {
              "t": "shot",
              "tela": "anuncios",
              "title": "Anúncios: ações e filtros",
              "spots": [
                "a-massa",
                "a-importar",
                "a-adicionar",
                "a-filtros"
              ],
              "caption": "Editar em massa fica cinza até você marcar anúncios. Os filtros são MLB, SKU, status, precificação e catálogo."
            },
            {
              "t": "shot",
              "tela": "anuncios",
              "title": "Anúncios: seleção e páginas",
              "spots": [
                "a-check",
                "a-dots",
                "a-pag",
                "a-pagsize"
              ],
              "caption": "Marque anúncios nas caixas. Nos três pontinhos dá pra mudar as margens de um anúncio. A paginação mostra o total."
            },
            {
              "t": "jargon",
              "term": "MLB",
              "means": "O <b>código do anúncio</b> no Mercado Livre. Cada anúncio tem o seu.",
              "ex": "É a primeira coluna da lista, ao lado do ponto colorido que resume a situação do anúncio."
            },
            {
              "t": "shot",
              "tela": "anuncios",
              "title": "Anúncios: ponto, MLB e SKU",
              "spots": [
                "a-semaforo",
                "a-c-mlb",
                "a-c-sku"
              ],
              "caption": "O ponto colorido resume a situação do anúncio. O motivo de cada cor aparece na tela Verificação."
            },
            {
              "t": "jargon",
              "term": "PMA",
              "means": "<b>Preço Mínimo Anunciado</b>: o chão do preço. Com o PMA ativado nas configurações, o bot não deixa o preço abaixo dele.",
              "ex": "PMA de R$ 78,68: o preço do anúncio não desce dessa linha."
            },
            {
              "t": "shot",
              "tela": "anuncios",
              "title": "Anúncios: PMA, bot e catálogo",
              "spots": [
                "a-c-pma",
                "a-c-prec",
                "a-c-acomp"
              ],
              "caption": "O PMA fica em branco nos anúncios sem PMA. Sim em Precificação Automática: o bot gerencia. Sim em Acompanhar Catálogo: ele acompanha."
            },
            {
              "t": "list",
              "title": "As três margens do anúncio",
              "items": [
                "<b>Mínima:</b> o piso. Abaixo dela o bot não entra em campanha.",
                "<b>Objetivo:</b> a margem que o bot procura ter.",
                "<b>Máxima:</b> o teto de margem do anúncio."
              ]
            },
            {
              "t": "shot",
              "tela": "anuncios",
              "title": "Anúncios: as três margens",
              "spots": [
                "a-c-min",
                "a-c-obj",
                "a-c-max"
              ],
              "caption": "As colunas de margem mínima, objetivo e máxima ficam do lado direito da tabela."
            },
            {
              "t": "callout",
              "tone": "exemplo",
              "title": "Lendo uma linha",
              "html": "MLB4999072929, SKU 1518, PMA R$ 78,68, Precificação Automática <b>Sim</b>, Acompanhar Catálogo <b>Sim</b>, margens <b>8% / 11% / 15%</b>."
            },
            {
              "t": "list",
              "title": "Em português, essa linha diz",
              "items": [
                "O bot gerencia o anúncio.",
                "Ele disputa catálogo.",
                "Só entra em campanha se a margem ficar em pelo menos 8%.",
                "Procura ficar perto de 11%.",
                "Com PMA ativado, nunca deixa o preço abaixo de R$ 78,68."
              ]
            },
            {
              "t": "big",
              "emoji": "🚧",
              "html": "Pendente é o anúncio que o bot <b>ainda não pode precificar</b>.",
              "sub": "Todos os pendentes aparecem com o bot desligado."
            },
            {
              "t": "shot",
              "tela": "pendentes",
              "title": "Anúncios > Pendentes: menu e ações",
              "spots": [
                "pe-menu",
                "pe-lote",
                "pe-importar"
              ],
              "caption": "O número ao lado de Pendentes é o total da fila. Ações em Lote mexe em vários anúncios de uma vez."
            },
            {
              "t": "shot",
              "tela": "pendentes",
              "title": "Anúncios > Pendentes: o motivo",
              "spots": [
                "pe-sku",
                "pe-prec",
                "pe-x"
              ],
              "caption": "Olhe a coluna SKU. O X vermelho tira o item da fila: só use depois de entender por que ele está ali."
            },
            {
              "t": "video",
              "id": "z_BKB5JFZIQ",
              "title": "O que são e como corrigir Anúncios Pendentes no PriceBot",
              "dur": "2:12",
              "note": "Veja de onde vêm os pendentes e como destravá-los."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Abra Anúncios > Pendentes",
                  "html": "Olhe a coluna SKU. O número ao lado do item do menu é o total de pendentes."
                },
                {
                  "title": "SKU NAO_LOCALIZADO",
                  "html": "A PriceBot não achou um SKU ligado ao anúncio. Siga o caminho do vídeo ou peça ajuda ao time da PriceBot."
                },
                {
                  "title": "SKU com número, tipo 0037",
                  "html": "Procure o mesmo SKU em Produtos > Pendentes e complete regra de imposto, fornecedor e custo."
                },
                {
                  "title": "Confira e só então ligue o bot",
                  "html": "A pendência sumiu e a margem está na faixa? Aí dá pra ligar a precificação automática."
                }
              ]
            },
            {
              "t": "say",
              "title": "Se o seller perguntar “por que o bot não mexe nesse anúncio?”",
              "html": "“Esse anúncio está em Pendentes: o bot ainda não achou o produto com custo ligado a ele. Assim que a gente completar SKU, imposto, fornecedor e custo, ele consegue calcular a margem.”"
            },
            {
              "t": "recap",
              "items": [
                "Anúncios é o cadastro geral, com bot, PMA e margens",
                "Cada linha: MLB, SKU, PMA, bot, catálogo e três margens",
                "Pendente é anúncio que o bot ainda não pode precificar",
                "SKU NAO_LOCALIZADO e SKU com número têm caminhos diferentes"
              ]
            }
          ]
        },
        {
          "id": "l0-6",
          "title": "Pausados, Erros e Verificação",
          "minutes": 6,
          "goal": "Saber o que cada fila de problemas mostra e quem resolve cada tipo de problema.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🚦",
              "title": "Fila de problemas: quem resolve o quê",
              "text": "Descubra o que cada fila mostra e quem resolve cada tipo de problema, pra você saber o que fazer em vez de ficar adivinhando."
            },
            {
              "t": "big",
              "emoji": "🧩",
              "html": "Pausados, Erros e Verificação são <b>a mesma tela</b>.",
              "sub": "Só muda o Tipo do Problema (o filtro lá em cima), que já vem preenchido."
            },
            {
              "t": "p",
              "title": "As bolinhas escuras do menu",
              "html": "Elas mostram quantos itens cada fila tem. Nos prints, são <b>14 pausados</b> e <b>29 em verificação</b>. Fila vazia nem mostra número."
            },
            {
              "t": "shot",
              "tela": "pausados",
              "title": "Pausados: onde você está",
              "spots": [
                "pa-menu",
                "pa-tipo",
                "pa-dots"
              ],
              "caption": "Aqui todos os pontos são vermelhos: o problema vem do status do anúncio no Mercado Livre."
            },
            {
              "t": "shot",
              "tela": "pausados",
              "title": "Pausados: status, motivo e download",
              "spots": [
                "pa-statusml",
                "pa-problema",
                "pa-dl"
              ],
              "caption": "Use o Download pra levar a lista de pausados em planilha."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Pausado só volta no Mercado Livre",
              "html": "O anúncio está pausado <em>lá</em> (status “paused”). Um anúncio pausado só volta a vender quando o seller reativa no Mercado Livre."
            },
            {
              "t": "shot",
              "tela": "erros",
              "title": "Erros: lista vazia é boa notícia",
              "spots": [
                "er-menu",
                "er-tipo",
                "er-colunas",
                "er-vazio"
              ],
              "caption": "Nenhum anúncio com erro? Ótimo: lista vazia aqui é boa notícia."
            },
            {
              "t": "shot",
              "tela": "verificacao",
              "title": "Verificação: a fila de decisão",
              "spots": [
                "v-menu",
                "v-tipo",
                "v-dots",
                "v-statusml"
              ],
              "caption": "Verificação é a fila dos itens que pedem decisão de uma pessoa. A cor do ponto acompanha o tipo de problema."
            },
            {
              "t": "jargon",
              "term": "Perdendo",
              "means": "Seu anúncio está <b>perdendo a disputa de catálogo</b>: não é o que aparece como vencedor na página do produto.",
              "ex": "Na tela, o Status Catálogo fica em vermelho, escrito Perdendo."
            },
            {
              "t": "shot",
              "tela": "verificacao",
              "title": "Verificação: os três problemas",
              "spots": [
                "v-statuscat",
                "v-prob1",
                "v-prob2",
                "v-prob3"
              ],
              "caption": "Cada problema tem um dono e um jeito de resolver. Os próximos cards mostram um por um."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Nenhuma promoção atinge a margem: nada quebrou",
              "html": "Existem campanhas, mas nenhuma deixaria o anúncio dentro da margem do seller. Então o bot não entra. Em catálogo, o status fica <b>Perdendo</b>."
            },
            {
              "t": "conta",
              "title": "Margem abaixo da mínima, na prática",
              "rows": [
                [
                  "Preço base (o preço do anúncio)",
                  "R$ 100,00"
                ],
                [
                  "Imposto",
                  "- R$ 8,00",
                  "neg"
                ],
                [
                  "Taxas do Mercado Livre",
                  "- R$ 14,00",
                  "neg"
                ],
                [
                  "Frete",
                  "- R$ 12,00",
                  "neg"
                ],
                [
                  "Custo do produto",
                  "- R$ 60,00",
                  "neg"
                ]
              ],
              "total": [
                "Sobra (margem de 6%)",
                "R$ 6,00"
              ],
              "note": "Exemplo inventado. Se a mínima combinada é 10%, o preço base já nasce abaixo dela."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Quem resolve é o seller",
              "html": "O bot <b>não muda o preço base</b> e gera um alerta. Por isso o anúncio cai na Verificação. O seller reprecifica. E você <b>não baixa a mínima</b> só pra encaixar a margem atual."
            },
            {
              "t": "jargon",
              "term": "under_review",
              "means": "O Mercado Livre colocou o anúncio <b>em revisão</b>. Só se resolve por lá.",
              "ex": "Na tela, o Status ML aparece como Em revisão e o ponto fica vermelho."
            },
            {
              "t": "list",
              "title": "Resumo: quem resolve cada problema",
              "items": [
                "<b>“paused”:</b> o seller reativa o anúncio no Mercado Livre.",
                "<b>“under_review”:</b> só o Mercado Livre resolve, na revisão dele.",
                "<b>Nenhuma promoção atinge a margem:</b> nada quebrou, as campanhas não cabem.",
                "<b>Margem abaixo da mínima:</b> o seller reprecifica. Você não baixa a mínima."
              ]
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Uma ordem de trabalho",
              "html": "Comece pelo que impede o bot de trabalhar: erros e pendentes. Depois, o que depende do Mercado Livre: pausados e em revisão. Por último, o que pede decisão de negócio: verificação."
            },
            {
              "t": "say",
              "title": "Fala assim com o seller",
              "html": "“O preço base desse anúncio já está baixo demais pra margem que a gente combinou. Preciso que você reprecifique. Eu não baixo a mínima só pra encaixar a margem de hoje.”"
            },
            {
              "t": "recap",
              "title": "Guarda isso",
              "items": [
                "Pausados, Erros e Verificação: mesma tela, Tipo do Problema diferente",
                "Pausado ou em revisão: se resolve no Mercado Livre",
                "Nenhuma promoção atinge a margem: nada quebrado",
                "Margem abaixo da mínima: o seller reprecifica",
                "Ordem: erros e pendentes, depois Mercado Livre, depois verificação"
              ]
            }
          ]
        },
        {
          "id": "l0-7",
          "title": "Importar e exportar planilhas",
          "minutes": 5,
          "goal": "Escolher o importador certo, baixar a planilha certa e enviar de volta sem erro de formato.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "📊",
              "title": "Planilha em vez de clicar um por um",
              "text": "Aprenda a escolher o importador certo, baixar a planilha certa e subir de volta sem erro de formato."
            },
            {
              "t": "big",
              "emoji": "⚡",
              "html": "Muita coisa pra corrigir? <b>Planilha</b> é mais rápida que tela.",
              "sub": "Anúncios e produtos têm, cada um, o seu importador."
            },
            {
              "t": "p",
              "title": "Onde ficam os importadores",
              "html": "Os dois moram no submenu <b>Importar e exportar</b>: um dentro de Anúncios e outro dentro de Produtos. Cada um tem os seus botões."
            },
            {
              "t": "shot",
              "tela": "anuncios-importar",
              "title": "Importador de anúncios: carregar e baixar",
              "spots": [
                "i-carregar",
                "i-download",
                "i-ativos",
                "i-pend"
              ],
              "caption": "Download abre as planilhas. Pendentes são os anúncios que o bot ainda não pode precificar."
            },
            {
              "t": "shot",
              "tela": "anuncios-importar",
              "title": "Importador de anúncios: detalhes e formato",
              "spots": [
                "i-det",
                "i-formato",
                "i-retornar"
              ],
              "caption": "Anúncios com detalhes traz mais colunas por anúncio. O aviso do formato fica ao lado dos botões."
            },
            {
              "t": "jargon",
              "term": "SKU",
              "means": "O código que você dá ao produto. <b>É a chave</b>: o mesmo SKU liga o anúncio ao produto e ao custo.",
              "ex": "SKU 0037 no anúncio e SKU 0037 em Produtos são o mesmo item pra PriceBot."
            },
            {
              "t": "shot",
              "tela": "produtos-importar",
              "title": "Importador de produtos: enviar e baixar",
              "spots": [
                "pi-prod",
                "pi-custos",
                "pi-down"
              ],
              "caption": "Duas planilhas pra enviar: uma de cadastro e outra de custos. O Download baixa a de produtos pra corrigir fora do portal."
            },
            {
              "t": "shot",
              "tela": "produtos-importar",
              "title": "Importador de produtos: formato e voltar",
              "spots": [
                "pi-formato",
                "pi-retornar"
              ],
              "caption": "Mesmo aviso de formato dos anúncios. O Retornar volta pra lista de produtos."
            },
            {
              "t": "list",
              "title": "Qual botão eu uso?",
              "items": [
                "<b>Carregar planilha de anúncios:</b> envia os anúncios corrigidos.",
                "<b>Planilha de Produtos:</b> envia o cadastro dos produtos.",
                "<b>Planilha de Custos:</b> envia os custos dos produtos.",
                "<b>Download:</b> baixa a planilha pra você corrigir fora do portal."
              ]
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Baixe a planilha",
                  "html": "Pelo botão Download do importador. O arquivo fica no item Downloads do menu."
                },
                {
                  "title": "Corrija no arquivo",
                  "html": "Mantenha o formato (.xls ou .xlsx) e não mude os nomes das colunas."
                },
                {
                  "title": "Envie de volta",
                  "html": "Pelo botão de carregar planilha: anúncios, produtos ou custos, conforme o que você corrigiu."
                },
                {
                  "title": "Confira na lista",
                  "html": "Item corrigido sai de Pendentes. Não saiu? Revise o SKU e o custo da linha."
                }
              ]
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Só entram .xls e .xlsx",
              "html": "O aviso ao lado dos botões é claro: formato aceito .xls e .xlsx. CSV ou PDF não passa."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Mexa nos dados, não nas colunas",
              "html": "Corrija SKU, custo e o que mais precisar. Mas os nomes das colunas ficam do jeito que vieram."
            },
            {
              "t": "say",
              "title": "Fala assim com o seller",
              "html": "“São muitos custos pra atualizar, então vou baixar a planilha, corrigir no arquivo e subir de volta. Fica bem mais rápido do que mexer em cada produto.”"
            },
            {
              "t": "recap",
              "title": "Guarda isso",
              "items": [
                "Muito volume: use planilha, não a tela",
                "Baixa, corrige no arquivo, envia de volta, confere",
                "Só entram arquivos .xls e .xlsx",
                "Não mude os nomes das colunas"
              ]
            }
          ]
        },
        {
          "id": "l0-8",
          "title": "Impostos, Fornecedores e Produtos",
          "minutes": 7,
          "goal": "Entender como imposto, fornecedor, produto e custo se ligam, e por que produto sem custo trava a precificação.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧮",
              "title": "De onde vem o custo da margem",
              "text": "Entenda como imposto, fornecedor, produto e custo se ligam, e por que produto sem custo trava a precificação."
            },
            {
              "t": "big",
              "emoji": "🧾",
              "html": "Margem é conta. <b>Sem custo</b>, a conta não fecha.",
              "sub": "Impostos, Fornecedores e Produtos guardam o que a PriceBot precisa."
            },
            {
              "t": "conta",
              "title": "A conta da margem",
              "rows": [
                [
                  "Preço de venda",
                  "R$ 100,00"
                ],
                [
                  "Imposto",
                  "- R$ 8,00",
                  "neg"
                ],
                [
                  "Taxas",
                  "- R$ 14,00",
                  "neg"
                ],
                [
                  "Frete",
                  "- R$ 12,00",
                  "neg"
                ],
                [
                  "Custo do produto",
                  "- R$ 50,00",
                  "neg"
                ]
              ],
              "total": [
                "Sobra (margem de 16%)",
                "R$ 16,00"
              ],
              "note": "Exemplo inventado. Imposto e custo vêm do que você cadastra no portal. Sem eles, a PriceBot não fecha essa conta."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Impostos",
                  "html": "As regras de imposto da conta, tipo SIMPLES 10/2026 e Geral."
                },
                {
                  "title": "Fornecedores",
                  "html": "As marcas ou fábricas dos produtos."
                },
                {
                  "title": "Produtos",
                  "html": "Cada SKU, com regra de imposto, fornecedor e custo."
                },
                {
                  "title": "Anúncios",
                  "html": "O SKU do anúncio aponta pro produto. Assim o bot acha o custo."
                }
              ]
            },
            {
              "t": "jargon",
              "term": "SKU",
              "means": "O código do produto. Ele liga o <b>anúncio</b> ao <b>produto</b>, e é por ele que o bot acha o custo.",
              "ex": "O SKU 0037 do anúncio é o mesmo SKU 0037 cadastrado em Produtos."
            },
            {
              "t": "shot",
              "tela": "impostos",
              "title": "Impostos: as regras",
              "spots": [
                "im-add",
                "im-base",
                "im-trib",
                "im-simples"
              ],
              "caption": "Cada produto aponta pra uma dessas regras. Nos prints, a conta tem duas e os tributos estão em 0%."
            },
            {
              "t": "list",
              "title": "Siglas da tabela de Impostos",
              "items": [
                "<b>ICMS:</b> imposto do estado sobre a venda.",
                "<b>DIFAL:</b> diferença de ICMS quando a venda cruza estados.",
                "<b>PIS e COFINS:</b> impostos federais.",
                "<b>IPI:</b> imposto federal sobre produto industrializado.",
                "<b>Simples Nacional:</b> alíquota única, no lugar de vários impostos."
              ]
            },
            {
              "t": "shot",
              "tela": "impostos",
              "title": "Impostos: créditos, estados e total",
              "spots": [
                "im-cred",
                "im-uf",
                "im-pag"
              ],
              "caption": "Crédito é imposto já pago que você pode descontar. Nos prints, os dois estão como Não. Role a tabela pro lado pra ver os estados."
            },
            {
              "t": "shot",
              "tela": "fornecedores",
              "title": "Fornecedores: cadastro e nomes",
              "spots": [
                "fo-add",
                "fo-filtros",
                "fo-nomes"
              ],
              "caption": "Nos prints, os fornecedores são marcas. O nome aqui é o que aparece na coluna Fornecedor de Produtos."
            },
            {
              "t": "shot",
              "tela": "fornecedores",
              "title": "Fornecedores: contato e total",
              "spots": [
                "fo-contato",
                "fo-pag"
              ],
              "caption": "CNPJ e contato podem ficar vazios. No dia a dia, o que importa é o nome do fornecedor."
            },
            {
              "t": "shot",
              "tela": "produtos",
              "title": "Produtos: botões, SKU e regra",
              "spots": [
                "pr-importar",
                "pr-add",
                "pr-sku",
                "pr-regra"
              ],
              "caption": "Cada SKU aponta pra uma regra da tela Impostos."
            },
            {
              "t": "shot",
              "tela": "produtos",
              "title": "Produtos: fornecedor e custos",
              "spots": [
                "pr-forn",
                "pr-custo",
                "pr-custoreal"
              ],
              "caption": "O fornecedor vem da tela Fornecedores. O Custo Real é o custo com os adicionais já somados."
            },
            {
              "t": "shot",
              "tela": "produtos",
              "title": "Produtos: adicionais e total",
              "spots": [
                "pr-cpa",
                "pr-cfa",
                "pr-pag"
              ],
              "caption": "Dois extras entram no custo: um percentual e um valor fixo por unidade. Nos prints, são 194 produtos."
            },
            {
              "t": "conta",
              "title": "Custo Real na prática",
              "rows": [
                [
                  "Custo do produto",
                  "R$ 50,00"
                ],
                [
                  "Custo percentual adicional (10%)",
                  "+ R$ 5,00"
                ],
                [
                  "Custo fixo adicional",
                  "+ R$ 2,00"
                ]
              ],
              "total": [
                "Custo Real",
                "R$ 57,00"
              ],
              "note": "Exemplo inventado. Nos prints os adicionais são zero, então Custo e Custo Real são iguais."
            },
            {
              "t": "shot",
              "tela": "produtos-pendentes",
              "title": "Produtos > Pendentes: o que falta",
              "spots": [
                "pp-menu",
                "pp-sku",
                "pp-desc"
              ],
              "caption": "Produto pendente é o que a PriceBot achou, mas ainda sem regra de imposto, fornecedor e custo."
            },
            {
              "t": "shot",
              "tela": "produtos-pendentes",
              "title": "Produtos > Pendentes: custo e o X",
              "spots": [
                "pp-custo",
                "pp-x"
              ],
              "caption": "O X vermelho tira o item da fila. Só use depois de entender por que ele estava ali."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Sem custo não existe margem",
              "html": "Produto com Custo R$ 0,00 e regra e fornecedor DESCONHECIDO fica em Pendentes. Sem custo não existe margem. E sem margem, a PriceBot não decide nada."
            },
            {
              "t": "callout",
              "tone": "exemplo",
              "title": "Mesmo SKU, duas filas",
              "html": "SKUs como 0037 e 0038 aparecem em Anúncios > Pendentes <em>e</em> em Produtos > Pendentes. O anúncio está parado porque o produto está incompleto. Cadastre regra, fornecedor e custo, e a pendência some."
            },
            {
              "t": "say",
              "title": "Fala assim com o seller",
              "html": "“Esse anúncio está parado porque o produto dele ainda não tem custo cadastrado. Sem custo, a PriceBot não calcula margem. Assim que o custo entrar, o bot consegue trabalhar.”"
            },
            {
              "t": "recap",
              "title": "Guarda isso",
              "items": [
                "Margem = preço menos imposto, taxas, frete e custo",
                "O SKU liga o anúncio ao produto",
                "Produto guarda regra de imposto, fornecedor e custo",
                "Custo zerado deixa o produto e o anúncio em Pendentes"
              ]
            }
          ]
        },
        {
          "id": "l0-9",
          "title": "Configurações: onde se ajusta o bot",
          "minutes": 8,
          "goal": "Saber pra que serve cada aba de Configurações e o que muda quando você salva.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🔧",
              "title": "Configurações: onde se ajusta o bot",
              "text": "Saiba pra que serve cada aba de Configurações e o que muda quando você salva."
            },
            {
              "t": "big",
              "emoji": "💾",
              "html": "Nada vale até você clicar em <b>Salvar</b>.",
              "sub": "Os ajustes daqui valem pra conta inteira. Cada tela tem Cancelar e Salvar."
            },
            {
              "t": "list",
              "title": "As abas que você vai ver",
              "items": [
                "<b>Integrações:</b> conectam a conta ao Mercado Livre.",
                "<b>Importação:</b> margens padrão dos anúncios que entram sozinhos.",
                "<b>PMA:</b> a chave que liga o preço mínimo anunciado.",
                "<b>Precificação:</b> os seis comportamentos do bot."
              ]
            },
            {
              "t": "shot",
              "tela": "cfg-integracoes",
              "title": "Integrações: a conta conectada",
              "spots": [
                "ci-menu",
                "ci-ml",
                "ci-atualizar",
                "ci-link"
              ],
              "caption": "O selo verde Integrado diz que a conta está conectada. Sem integração, a PriceBot não enxerga os anúncios."
            },
            {
              "t": "shot",
              "tela": "cfg-integracoes",
              "title": "Integrações: o que não está conectado",
              "spots": [
                "ci-any",
                "ci-integrar"
              ],
              "caption": "O selo vermelho Não integrado mostra uma ferramenta ainda desconectada, como o AnyMarket nos prints."
            },
            {
              "t": "list",
              "title": "As três margens, em português",
              "items": [
                "<b>Mínima:</b> o menor retorno aceitável. Abaixo dela, o bot não entra em campanha.",
                "<b>Objetivo:</b> o retorno que o seller quer ter.",
                "<b>Máxima:</b> existe, mas raramente é usada."
              ]
            },
            {
              "t": "shot",
              "tela": "cfg-importacao",
              "title": "Importação: margens padrão",
              "spots": [
                "cim-head",
                "cim-min",
                "cim-obj",
                "cim-max"
              ],
              "caption": "Esses valores valem pros anúncios que entram sozinhos do Mercado Livre. Nos prints: 5, 11 e 40."
            },
            {
              "t": "shot",
              "tela": "cfg-importacao",
              "title": "Importação: as chaves e o Salvar",
              "spots": [
                "cim-imp",
                "cim-prec",
                "cim-botoes"
              ],
              "caption": "Importação Automática ligada: os anúncios entram sozinhos. Precificação Automática desligada: o bot só liga depois que alguém confere."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Por que o bot chega desligado?",
              "html": "Nos prints, o anúncio importado chega com o bot desligado. Alguém liga depois de conferir custo e margem. Se estivesse ligado, o bot começaria a trabalhar assim que o anúncio entrasse."
            },
            {
              "t": "jargon",
              "term": "PMA",
              "means": "Preço Mínimo Anunciado: o <b>piso</b> do preço do anúncio. O sistema nunca deixa o preço ficar abaixo dele.",
              "ex": "PMA de R$ 78,68: com a chave ligada, o preço do anúncio não cai desse valor."
            },
            {
              "t": "shot",
              "tela": "cfg-pma",
              "title": "PMA: a chave que faz valer",
              "spots": [
                "cp-desc",
                "cp-toggle",
                "cp-botoes"
              ],
              "caption": "Mexeu na chave? Clique em Salvar. Sem a chave Ativar PMA ligada, o preço mínimo é só um dado guardado."
            },
            {
              "t": "video",
              "id": "HTEHn32tTnU",
              "title": "PMA (Preço Mínimo Anunciado): como funciona a lógica do preço mínimo no PriceBot",
              "dur": "1:52",
              "note": "Pra fixar: preencher a coluna não basta. A chave precisa estar ligada."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Preencher não basta",
              "html": "Coluna de PMA preenchida só vale com <b>Ativar PMA ligado e salvo</b>. Se o preço está baixo demais num anúncio, essa é uma das primeiras coisas a conferir."
            },
            {
              "t": "jargon",
              "term": "Catálogo",
              "means": "Disputar o anúncio que aparece como <b>vencedor</b> da página de catálogo, ajustando o preço dentro da margem.",
              "ex": "Anúncio tradicional não disputa catálogo: o bot só cuida das campanhas dele."
            },
            {
              "t": "shot",
              "tela": "cfg-precificacao",
              "title": "Precificação: comportamentos 1 a 4",
              "spots": [
                "cpr-c1",
                "cpr-c2",
                "cpr-c3",
                "cpr-c4"
              ],
              "caption": "O texto “(padrão)” marca a opção que já vem selecionada em cada comportamento."
            },
            {
              "t": "jargon",
              "term": "Rebate",
              "means": "Parte do desconto que o Mercado Livre <b>devolve ao seller</b> quando ele entra numa campanha.",
              "ex": "Campanha de 10% com 2% de rebate: o seller sente só 8%."
            },
            {
              "t": "shot",
              "tela": "cfg-precificacao",
              "title": "Precificação: 5, 6, etiquetas e Salvar",
              "spots": [
                "cpr-c5",
                "cpr-c6",
                "cpr-tags",
                "cpr-salvar"
              ],
              "caption": "Sem clicar em Salvar configurações, a mudança se perde."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Margem abaixo do mínimo na Mamba",
              "html": "A Mamba não altera o preço base do seller (o preço que ele definiu), por contrato. Por isso o padrão é <b>não mudar o preço base e gerar um alerta</b>. É esse alerta que leva o anúncio pra Verificação."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Ainda não vistas",
              "html": "O menu também tem <b>CEP ME1</b>, <b>Margem Negativa</b> e <b>Trava de Preço</b>. Elas não estão nos prints deste módulo. Não altere nenhuma sem combinar com o time da PriceBot. Os seis comportamentos da Precificação são explicados um a um no módulo de comportamentos e diagnóstico."
            },
            {
              "t": "recap",
              "title": "Guarda isso",
              "items": [
                "Configurações valem pra conta inteira: só vale depois de Salvar",
                "Integrações conectam, Importação define o padrão dos anúncios novos",
                "PMA só vale com a chave Ativar PMA ligada e salva",
                "Precificação tem seis comportamentos: não mexa sem alinhar"
              ]
            }
          ]
        },
        {
          "id": "l0-10",
          "title": "Revisão: qual tela responde o quê",
          "minutes": 5,
          "goal": "Saber em que tela do portal ir primeiro para cada pergunta do seller e chegar preparado pra prova do módulo.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🗺",
              "title": "Pergunta do seller: qual tela abrir?",
              "text": "Esta é a sua folha de consulta: pra cada pergunta do seller, você vai saber em que tela do portal ir primeiro."
            },
            {
              "t": "big",
              "emoji": "🎯",
              "html": "Sem exercício aqui. <b>Leia, volte</b> em qualquer aula se precisar e depois faça a prova.",
              "sub": "Antes, três siglas rápidas pra relembrar."
            },
            {
              "t": "jargon",
              "term": "MLB",
              "means": "O código de <b>cada anúncio</b> no Mercado Livre.",
              "ex": "MLB4999072929 é um anúncio. Na lista de Anúncios, cada linha é um MLB.",
              "tag": "Relembrando"
            },
            {
              "t": "jargon",
              "term": "PMA",
              "means": "Preço Mínimo Anunciado: o <b>piso</b> do preço do anúncio. Só vale com a chave Ativar PMA ligada.",
              "ex": "Preencher a coluna do PMA e esquecer a chave é o erro mais comum.",
              "tag": "Relembrando"
            },
            {
              "t": "jargon",
              "term": "Rebate",
              "means": "Parte do desconto que o Mercado Livre <b>devolve ao seller</b> quando ele entra numa campanha.",
              "ex": "Aparece na Home e em Pedidos > Visão Geral.",
              "tag": "Relembrando"
            },
            {
              "t": "list",
              "title": "Olhar o resultado",
              "items": [
                "“Como está meu mês?” → <b>Home</b>. Compare com o mesmo período do mês passado.",
                "“Quais produtos estão parados?” → <b>Home > Dias Sem Vender</b>. Dá pra baixar.",
                "“Rebate dos últimos 30 dias?” → <b>Pedidos > Visão Geral</b>. Escolha o período antes.",
                "“Quais anúncios deram prejuízo?” → <b>Pedidos > Pedidos</b>. Ordene pela margem."
              ]
            },
            {
              "t": "list",
              "title": "Olhar os anúncios",
              "items": [
                "“Estou perdendo o catálogo?” → lista <b>Catálogo</b>, filtro Status do Catálogo.",
                "“Qual a margem e o PMA deste MLB?” → <b>Anúncios</b>. Está tudo na linha.",
                "“Por que o bot não mexe nele?” → <b>Pendentes, Pausados, Erros ou Verificação</b>."
              ]
            },
            {
              "t": "list",
              "title": "Mexer na base e no bot",
              "items": [
                "“Preciso atualizar muitos custos.” → <b>Importar e exportar</b>, em .xls ou .xlsx.",
                "“De onde vem o custo da margem?” → <b>Produtos</b>, com Impostos e Fornecedores.",
                "“Onde ajusto o bot?” → <b>Configurações</b>. Lembre de salvar cada tela."
              ]
            },
            {
              "t": "big",
              "emoji": "🔍",
              "html": "Caso 1: anúncio em campanha com o <b>preço baixo demais</b>.",
              "sub": "Siga essa ordem de telas."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Anúncios",
                  "html": "Abra o MLB e leia as margens e o PMA da linha."
                },
                {
                  "title": "Configurações > PMA",
                  "html": "Veja se a chave Ativar PMA está ligada e salva. Preencher a coluna não basta."
                },
                {
                  "title": "Configurações > Precificação",
                  "html": "Confira o comportamento de margem abaixo da mínima e as outras regras."
                }
              ]
            },
            {
              "t": "big",
              "emoji": "🕳",
              "html": "Caso 2: a Home do seller está <b>zerada</b>.",
              "sub": "Calma: quase nunca é bug. Siga essa ordem."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Conta aberta",
                  "html": "Confirme que a conta aberta no portal é a do seller certo."
                },
                {
                  "title": "Período e filtros",
                  "html": "Veja o período da tela e limpe os filtros."
                },
                {
                  "title": "Integração",
                  "html": "Só depois olhe Configurações > Integrações."
                }
              ]
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "A prova é um quiz só",
              "html": "O módulo tem <b>um único quiz, completo</b>. Ele passa por todas as áreas do portal: menu, Home, Pedidos, listas, Anúncios, filas, importador, cadastros e Configurações. Concluiu as dez aulas? A prova libera."
            },
            {
              "t": "recap",
              "title": "Guarda isso",
              "items": [
                "Resultado: Home e Pedidos. Anúncios: listas e filas",
                "Custo: Produtos, com Impostos e Fornecedores",
                "Ajuste do bot: Configurações, e salve",
                "Home zerada? Confira a conta aberta antes de tudo"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "m1",
      "n": 2,
      "title": "Entenda a PriceBot",
      "tagline": "O que ela é, que problema resolve e por que a Mamba usa.",
      "outcome": "Explicar a PriceBot em 30 segundos e responder por que ela existe.",
      "lessons": [
        {
          "id": "l1-1",
          "title": "O que é a PriceBot",
          "minutes": 7,
          "goal": "Dizer, sem consultar nada, o que a PriceBot faz e que problema ela resolve.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🤖",
              "title": "A PriceBot em 30 segundos",
              "text": "Você vai entender o que a PriceBot faz, que problema ela resolve e como explicar isso pra um seller em meio minuto."
            },
            {
              "t": "big",
              "emoji": "📦",
              "html": "Imagina um seller com <b>1.200 anúncios</b> no Mercado Livre.",
              "sub": "Todo dia muda campanha, preço do concorrente e frete."
            },
            {
              "t": "p",
              "title": "Na mão, não dá",
              "html": "Cada produto tem uma margem (o que sobra de lucro em cada venda) diferente. Ninguém acompanha tudo isso manualmente. O que escapa vira <b>prejuízo</b> ou <b>venda perdida</b>."
            },
            {
              "t": "big",
              "emoji": "⚙️",
              "html": "A PriceBot trabalha por você, <b>o dia inteiro</b>.",
              "sub": "Sempre dentro das regras de lucro que você definiu."
            },
            {
              "t": "p",
              "title": "Então, o que é?",
              "html": "A <b>PriceBot</b> é uma plataforma que automatiza a precificação (a definição de preço) dos anúncios no Mercado Livre. Você define as regras de lucro: custo, imposto e margem de cada produto. Ela trabalha dentro delas."
            },
            {
              "t": "jargon",
              "term": "Precificação automática",
              "means": "O bot decide, anúncio por anúncio, se vale entrar numa campanha, <b>sempre dentro da margem combinada</b>.",
              "ex": "Apareceu uma campanha que deixa a margem abaixo do combinado? O bot não entra."
            },
            {
              "t": "jargon",
              "term": "Competição de catálogo",
              "means": "Disputar o anúncio que aparece como vencedor na página de catálogo (onde vários sellers vendem o mesmo produto), ajustando o preço dentro da margem.",
              "ex": "Vários sellers vendem o mesmo produto. O bot disputa o posto de vencedor sem sair da margem."
            },
            {
              "t": "jargon",
              "term": "Central de promoções",
              "means": "O lugar do Mercado Livre onde as campanhas aparecem. A PriceBot adere a elas <b>de forma automática</b>.",
              "ex": "Campanha relâmpago ou de fim de semana: aparece lá e o bot decide se entra."
            },
            {
              "t": "video",
              "id": "KF0u0gpplgE",
              "title": "PriceBot: precificação automática para o Mercado Livre",
              "dur": "1:43",
              "note": "Veja a visão geral da ferramenta. Anote três coisas que ela faz."
            },
            {
              "t": "video",
              "id": "Tg5niAMLa7Q",
              "title": "Precificação e competição automática de catálogos",
              "dur": "0:51",
              "note": "Versão curta, ótima pra mostrar a um seller."
            },
            {
              "t": "jargon",
              "term": "Rebate",
              "means": "Quando a campanha tem rebate, o <b>Mercado Livre ajuda a pagar parte do desconto</b>. Sobra mais margem pra você.",
              "ex": "A PriceBot dá prioridade às campanhas com rebate, desde que a margem feche."
            },
            {
              "t": "compare",
              "left": {
                "title": "Sem a PriceBot",
                "tone": "bad",
                "items": [
                  "Entrar em campanha na mão, só quando lembra.",
                  "Campanha relâmpago e de fim de semana passa batido.",
                  "Margem calculada uma vez, antes de vender, sem acompanhar frete e taxas.",
                  "Catálogo analisado por amostragem, anúncio a anúncio."
                ]
              },
              "right": {
                "title": "Com a PriceBot",
                "tone": "good",
                "items": [
                  "Adesão contínua, priorizando campanhas relevantes e as com rebate.",
                  "O bot não dorme: pega relâmpago e fim de semana.",
                  "Cada decisão respeita a faixa de margem do produto.",
                  "Catálogo monitorado em todos os anúncios cadastrados."
                ]
              }
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Argumento na manga",
              "html": "A PriceBot é um app certificado no <b>Centro de Partners do Mercado Livre</b> (a lista de ferramentas parceiras deles). Seller desconfiado de \"ferramenta de fora\"? Esse é um dado concreto pra mostrar."
            },
            {
              "t": "quiz",
              "q": "Qual destas frases descreve melhor a PriceBot?",
              "options": [
                "Uma ferramenta de anúncios pagos (Ads) que ajusta o lance sozinha.",
                "Uma plataforma que automatiza preço, campanhas e catálogo dentro da margem.",
                "Um sistema de gestão (ERP) que emite a nota fiscal do pedido.",
                "Um robô que copia o preço do concorrente em tempo real."
              ],
              "answer": [
                1
              ],
              "why": "O bot decide dentro de regras de lucro. Ele não é de Ads e não copia concorrente: o limite é sempre a margem do seller."
            },
            {
              "t": "say",
              "title": "Como explicar em 30 segundos",
              "html": "“A PriceBot é um robô de precificação do Mercado Livre. Você diz quanto quer ganhar em cada produto. Ela entra em campanhas e disputa o catálogo o dia todo, só quando a conta fecha na sua margem.”"
            },
            {
              "t": "recap",
              "title": "Guarda isso",
              "items": [
                "PriceBot automatiza preço, campanhas e catálogo no Mercado Livre",
                "Ela trabalha dentro das regras de lucro do seller",
                "Não dorme: pega até campanha relâmpago e de fim de semana",
                "É app certificado no Centro de Partners do Mercado Livre"
              ]
            }
          ]
        },
        {
          "id": "l1-2",
          "title": "Como ela trabalha: 3 passos",
          "minutes": 5,
          "goal": "Descrever o fluxo da PriceBot e a regra que decide se um anúncio entra numa campanha.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧭",
              "title": "Como a PriceBot decide tudo",
              "text": "Você vai ver os 3 passos do fluxo e a regra que decide se um anúncio entra ou não numa campanha."
            },
            {
              "t": "big",
              "emoji": "🪜",
              "html": "A PriceBot funciona em <b>3 passos</b>, nessa ordem.",
              "sub": "Pular um passo é operar no escuro."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Definir as regras",
                  "html": "Impostos, custos e margem (o lucro que sobra) de cada produto. Sem isso o bot não sabe onde pode atuar."
                },
                {
                  "title": "Ativar a precificação automática",
                  "html": "Com os dados integrados, liga a automação nos anúncios que estão dentro da margem."
                },
                {
                  "title": "Acompanhar o resultado",
                  "html": "O painel mostra margem, campanhas, catálogo e rebate (a ajuda do Mercado Livre no desconto). É aqui que o assessor mostra valor."
                }
              ]
            },
            {
              "t": "big",
              "emoji": "🎚️",
              "html": "Duas margens decidem se o anúncio <b>entra</b>.",
              "sub": "A mínima e a objetiva."
            },
            {
              "t": "jargon",
              "term": "Margem mínima",
              "means": "O <b>menor retorno</b> que o seller aceita ter num produto. Abaixo disso, não vale a pena.",
              "ex": "Mínima de 10%: nenhuma campanha que deixe o anúncio com 8% passa."
            },
            {
              "t": "jargon",
              "term": "Margem objetiva",
              "means": "O retorno que o seller <b>quer ter</b> no produto. É a meta de lucro.",
              "ex": "Objetiva de 20%: esse é o lucro que o seller quer em cada venda."
            },
            {
              "t": "p",
              "title": "A regra que decide tudo",
              "html": "Surgiu uma campanha elegível (que o anúncio pode participar)? O bot calcula a margem que o anúncio teria <em>dentro dela</em>. Caiu entre a mínima e a objetiva? <b>Entra</b>. Caiu fora? <b>Não entra</b>."
            },
            {
              "t": "ruler",
              "min": 10,
              "obj": 20,
              "max": 30,
              "marks": [
                {
                  "v": 8,
                  "label": "Campanha A: 8%",
                  "ok": false
                },
                {
                  "v": 15,
                  "label": "Campanha B: 15%",
                  "ok": true
                }
              ],
              "caption": "Mínima 10% e objetiva 20%: a campanha B entra, a A fica de fora."
            },
            {
              "t": "conta",
              "title": "Campanha B na prática",
              "rows": [
                [
                  "Preço na campanha",
                  "R$ 100,00"
                ],
                [
                  "Custo do produto",
                  "- R$ 50,00",
                  "neg"
                ],
                [
                  "Imposto",
                  "- R$ 10,00",
                  "neg"
                ],
                [
                  "Taxas e frete",
                  "- R$ 25,00",
                  "neg"
                ],
                [
                  "Sobra de lucro",
                  "R$ 15,00",
                  "pos"
                ]
              ],
              "total": [
                "Margem na campanha",
                "15%"
              ],
              "note": "Exemplo simplificado. Entre 10% e 20%, o bot entra."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Regra de bolso",
              "html": "Dentro da faixa, <b>entra</b>. Fora da faixa, <b>não entra</b>. Com mínima 10% e objetiva 20%, 15% entra e 8% fica de fora."
            },
            {
              "t": "quiz",
              "q": "Mínima 10%, objetiva 20%. Uma campanha deixaria o anúncio com 15%. O que o bot faz?",
              "options": [
                "Não entra, porque só aceita campanha que deixe os 20% inteiros.",
                "Entra, porque 15% fica dentro da faixa entre mínima e objetiva.",
                "Entra e depois sobe o preço base por conta própria.",
                "Para tudo e pede aprovação do seller antes de decidir."
              ],
              "answer": [
                1
              ],
              "why": "Entre a mínima e a objetiva, ele adere. E na configuração da Mamba ele nunca mexe no preço base."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Dois detalhes que mudam tudo",
              "html": "Na configuração da Mamba, a PriceBot <b>não altera o preço base</b> (o preço normal do anúncio). E ela <b>não considera Ads nem cupom</b> (anúncio pago e desconto) na margem. Você vê como compensar isso na aula 2.1."
            },
            {
              "t": "quiz",
              "q": "Qual é a ordem correta dos 3 passos?",
              "options": [
                "Ativar a automação → definir as regras → acompanhar.",
                "Acompanhar o painel → ativar → definir as regras.",
                "Definir regras → ativar a precificação → acompanhar.",
                "Definir regras → acompanhar → só depois ativar."
              ],
              "answer": [
                2
              ],
              "why": "Regras primeiro: sem custo, imposto e margem, ligar o bot seria operar no escuro."
            },
            {
              "t": "recap",
              "title": "Guarda isso",
              "items": [
                "Três passos: definir regras, ativar, acompanhar",
                "Entra na campanha se a margem ficar entre mínima e objetiva",
                "Fora da faixa, o bot não entra",
                "Na Mamba, ele não mexe no preço base"
              ]
            }
          ]
        },
        {
          "id": "l1-3",
          "title": "Por que a Mamba usa a PriceBot",
          "minutes": 6,
          "goal": "Listar os benefícios para o seller e para a assessoria, e saber o que ela não faz.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🎯",
              "title": "Por que a Mamba usa a PriceBot",
              "text": "Você vai listar os 4 ganhos pro seller e pra assessoria e saber, de cabeça, o que a ferramenta não faz."
            },
            {
              "t": "video",
              "id": "M2-NfyAkJtA",
              "title": "Godfer conta como é usar a PriceBot no dia a dia",
              "dur": "1:23",
              "note": "Um depoimento de uso real. Repare no que ele destaca."
            },
            {
              "t": "big",
              "emoji": "🏆",
              "html": "A PriceBot traz <b>4 ganhos</b> pra assessoria e pro seller.",
              "sub": "Bora ver um por um."
            },
            {
              "t": "jargon",
              "term": "Rebate",
              "means": "Parte do desconto da campanha que o <b>Mercado Livre ajuda a pagar</b>. Sobra mais margem pro seller.",
              "ex": "Campanha com rebate costuma ser mais vantajosa pro seller do que uma sem."
            },
            {
              "t": "p",
              "title": "Ganho 1: campanhas que valem a pena",
              "html": "Com a conta integrada, o seller recebe campanhas importantes, algumas exclusivas, que costumam ter rebate. E a adesão a campanhas é uma das métricas que o Mercado Livre cobra de parceiros."
            },
            {
              "t": "p",
              "title": "Ganho 2: tempo pro que importa",
              "html": "O assessor deixa de entrar e sair de promoção na mão. Sobra tempo pra Ads (anúncios pagos), cupom, estratégia e análise de mercado."
            },
            {
              "t": "p",
              "title": "Ganho 3: prova de valor",
              "html": "O rebate vira <b>número na tela</b> e na conversa com o seller. Fica fácil mostrar o que a assessoria entrega."
            },
            {
              "t": "jargon",
              "term": "Retenção e reversão",
              "means": "<b>Retenção</b> é manter o seller na Mamba. <b>Reversão</b> é convencer a ficar quem pensava em sair.",
              "ex": "Seller pensando em cancelar? Perder a PriceBot junto pesa na decisão."
            },
            {
              "t": "p",
              "title": "Ganho 4: seller que fica",
              "html": "Fora da Mamba, o seller perde uma ferramenta cara e difícil de contratar por conta própria. Isso ajuda na <b>retenção</b> e na <b>reversão</b>."
            },
            {
              "t": "big",
              "emoji": "🚧",
              "html": "Agora, o que a PriceBot <b>não faz</b>.",
              "sub": "Três limites pra saber de cabeça."
            },
            {
              "t": "list",
              "title": "O que ela NÃO faz na Mamba",
              "items": [
                "Não altera o <b>preço base</b> (o preço normal do anúncio). Isso é contrato.",
                "Não considera <b>Ads e cupom</b> (anúncio pago e desconto) no cálculo da margem.",
                "O <b>seller não tem login</b>: a Mamba cuida do acesso e das configurações."
              ]
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Quem mexe na ferramenta",
              "html": "Tudo é alinhado com o seller e executado pelo <b>assessor</b> da Mamba. O seller combina, o assessor opera."
            },
            {
              "t": "quiz",
              "q": "Quais destes são benefícios reais da PriceBot? Marque todos.",
              "multi": true,
              "options": [
                "Aumenta a adesão a campanhas relevantes.",
                "Libera tempo do assessor para Ads e estratégia.",
                "Ajuda a manter o seller e a reverter cancelamentos.",
                "Altera o preço base sozinha, sem ninguém pedir."
              ],
              "answer": [
                0,
                1,
                2
              ],
              "why": "Alterar o preço base não existe na configuração da Mamba. Os outros três são benefícios apresentados no treinamento."
            },
            {
              "t": "say",
              "title": "Se o seller perguntar: “vai mexer no meu preço?”",
              "html": "“Não. O preço base fica como você definiu. A ferramenta só decide em quais campanhas o seu anúncio entra e disputa o catálogo, e só faz isso quando a margem combinada comigo se mantém.”"
            },
            {
              "t": "recap",
              "title": "Guarda isso",
              "items": [
                "Ganhos: mais campanhas, mais tempo, prova de valor, retenção",
                "O rebate vira número na tela e na conversa",
                "Ela não altera o preço base",
                "Ela não considera Ads nem cupom",
                "O seller não tem login: o assessor opera"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "m2",
      "n": 3,
      "title": "Preço, margem e rebate",
      "tagline": "A matemática por trás de cada decisão do bot.",
      "outcome": "Calcular desconto efetivo, definir faixas de margem e explicar PMA e catálogo.",
      "lessons": [
        {
          "id": "l2-1",
          "title": "Margem mínima, objetiva e máxima",
          "minutes": 7,
          "goal": "Saber definir as faixas de margem de um seller e ajustá-las quando ele também faz Ads.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🎯",
              "title": "As faixas de margem do bot",
              "text": "Você vai aprender a combinar a margem mínima e a objetiva com o seller, e a corrigir a conta quando ele investe em Ads."
            },
            {
              "t": "video",
              "id": "PPXul3Ff3qQ",
              "title": "Como funcionam as margens mínima, objetivo e máxima do PriceBot?",
              "dur": "2:46",
              "note": "Assista primeiro (2:46). Depois a gente destrincha com conta."
            },
            {
              "t": "big",
              "emoji": "🧭",
              "html": "O bot decide tudo olhando a <b>margem</b>.",
              "sub": "Você só combina até onde ele pode ir."
            },
            {
              "t": "jargon",
              "term": "Margem mínima",
              "means": "O menor retorno aceitável. <b>Abaixo dela, o bot não entra em campanha.</b>",
              "ex": "Mínima de 10%: uma promoção que deixaria 8% de margem fica de fora."
            },
            {
              "t": "jargon",
              "term": "Margem objetiva",
              "means": "O retorno que o seller <b>quer ter</b>. O bot busca ficar nela quando entra em campanhas do Mercado Livre.",
              "ex": "Objetiva de 20%: numa campanha do Mercado Livre, o bot mira nesse número."
            },
            {
              "t": "jargon",
              "term": "Margem ativa",
              "means": "A margem que o anúncio tem <b>agora</b>, com o preço e a promoção em vigor.",
              "ex": "O anúncio rende 12% hoje. Se a promoção mudar o preço, a margem ativa muda junto."
            },
            {
              "t": "p",
              "title": "E a margem máxima?",
              "html": "Ela existe, mas raramente é usada. Na prática, o bot trabalha <em>entre a mínima e a objetiva</em>. É nessa faixa que você vai combinar com o seller."
            },
            {
              "t": "big",
              "emoji": "📏",
              "html": "Mínima de <b>10% a 15%</b>. Objetiva de <b>20% a 25%</b>.",
              "sub": "Essa folga deixa o bot trabalhar promoções com rebate sem machucar o lucro."
            },
            {
              "t": "conta",
              "title": "A faixa em reais (anúncio de R$ 100,00)",
              "rows": [
                [
                  "Preço do anúncio",
                  "R$ 100,00"
                ],
                [
                  "Margem mínima de 10%",
                  "R$ 10,00",
                  "neg"
                ],
                [
                  "Margem objetiva de 20%",
                  "R$ 20,00",
                  "pos"
                ]
              ],
              "total": [
                "O bot trabalha entre",
                "R$ 10,00 e R$ 20,00"
              ],
              "note": "Promoção que deixa menos de R$ 10,00 de margem fica de fora."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Mínima alta demais trava o bot",
              "html": "Com mínima de 20%, quase nenhuma promoção cabe. Só entraria se o seller subisse o preço base, e isso se faz aos poucos, em passos de cerca de 2%. Mínima alta é decisão de reprecificação (mudar preço), não de configuração."
            },
            {
              "t": "jargon",
              "term": "Ads",
              "means": "Os anúncios pagos dentro do marketplace: o seller paga pra o produto aparecer mais. Esse gasto sai do preço da venda.",
              "ex": "Seller que gasta R$ 5,00 de Ads numa venda de R$ 100,00 investe 5% do preço."
            },
            {
              "t": "big",
              "emoji": "🙈",
              "html": "O bot <b>não enxerga</b> Ads nem cupom.",
              "sub": "Então a margem que ele calcula fica maior que a real."
            },
            {
              "t": "conta",
              "title": "Ads comendo a margem (anúncio de R$ 100,00)",
              "rows": [
                [
                  "Margem que o bot enxerga (10%)",
                  "R$ 10,00",
                  "pos"
                ],
                [
                  "Gasto com Ads (5% do preço)",
                  "R$ 5,00",
                  "neg"
                ]
              ],
              "total": [
                "Margem real",
                "R$ 5,00 (5%)"
              ],
              "note": "O bot achava que sobravam 10%. No bolso do seller sobraram 5%."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Regra de bolso",
              "html": "Seller com Ads? Suba a mínima em cerca de <b>5 pontos</b>.<br>Mínima de 10% vira <b>15%</b>.<br>Mínima de 15% vira <b>20%</b>."
            },
            {
              "t": "sim",
              "kind": "ads",
              "title": "Quanto o Ads come da sua margem?",
              "intro": "O Ads não entra no cálculo da PriceBot. Calcule a mínima certa e a margem real de cada caso."
            },
            {
              "t": "quiz",
              "q": "Seller com mínima de 12% que investe cerca de 5% em Ads. Qual mínima configurar na PriceBot?",
              "options": [
                "12%, porque Ads é outra conta e não pesa na margem.",
                "17%, somando os 5 pontos de Ads que o bot não vê.",
                "7%, tirando os 5 pontos de Ads da mínima de 12%.",
                "0%, pra o bot poder entrar em qualquer promoção."
              ],
              "answer": [
                1
              ],
              "why": "O bot ignora Ads. Sem o ajuste, uma promoção que deixa 12% na tela pode deixar só 7% no bolso."
            },
            {
              "t": "sim",
              "kind": "campanha",
              "title": "Aderir ou não aderir?",
              "intro": "Mínima, objetiva e rebate (desconto que o Mercado Livre devolve) decidem. Escolha o que a PriceBot faz em cada cenário."
            },
            {
              "t": "quiz",
              "q": "Quais afirmações são verdadeiras? Marque todas.",
              "multi": true,
              "options": [
                "O bot trabalha entre a mínima e a objetiva.",
                "A margem máxima é a mais usada no dia a dia.",
                "A margem ativa é a que o anúncio tem agora.",
                "Mínima muito alta pode barrar o bot nas promoções."
              ],
              "answer": [
                0,
                2,
                3
              ],
              "why": "A máxima existe, mas raramente importa. As outras três descrevem direitinho como a ferramenta se comporta."
            },
            {
              "t": "recap",
              "items": [
                "Bot trabalha entre a <b>mínima</b> e a <b>objetiva</b>",
                "Prática: mínima 10% a 15%, objetiva 20% a 25%",
                "Mínima alta demais trava as promoções",
                "Seller com Ads: sobe a mínima em uns 5 pontos"
              ]
            }
          ]
        },
        {
          "id": "l2-2",
          "title": "Rebate: o desconto que volta",
          "minutes": 6,
          "goal": "Saber calcular o desconto efetivo de qualquer campanha e explicar por que rebate muda a escolha do bot.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "💸",
              "title": "Rebate: o desconto que volta",
              "text": "Você vai calcular o custo real de uma campanha pro seller e entender por que o bot gosta de rebate."
            },
            {
              "t": "big",
              "emoji": "🤔",
              "html": "Desconto grande nem sempre é <b>desconto caro</b>.",
              "sub": "Tudo depende do que volta pro seller."
            },
            {
              "t": "jargon",
              "term": "Rebate",
              "means": "Parte do desconto que o Mercado Livre <b>devolve</b> ao seller quando ele entra numa campanha.",
              "ex": "Campanha de 10% com 2% de rebate: o Mercado Livre devolve 2 pontos pro seller."
            },
            {
              "t": "jargon",
              "term": "Comissão reduzida",
              "means": "A forma como o rebate costuma chegar: a comissão (percentual que o Mercado Livre cobra por venda) fica <b>menor</b>.",
              "ex": "O seller não recebe um dinheiro avulso: paga menos comissão naquela venda."
            },
            {
              "t": "jargon",
              "term": "Desconto efetivo",
              "means": "O desconto anunciado <b>menos</b> o rebate. É o que realmente sai do bolso do seller.",
              "ex": "Cliente vê 10% de desconto, rebate de 2%: o seller sente 8%."
            },
            {
              "t": "big",
              "html": "Desconto efetivo = desconto anunciado <b>−</b> rebate.",
              "sub": "O cliente vê um número. O seller sente outro."
            },
            {
              "t": "conta",
              "title": "Campanha de 10% com 2% de rebate (anúncio de R$ 100,00)",
              "rows": [
                [
                  "Preço do anúncio",
                  "R$ 100,00"
                ],
                [
                  "Desconto anunciado (10%)",
                  "− R$ 10,00",
                  "neg"
                ],
                [
                  "Rebate devolvido (2%)",
                  "+ R$ 2,00",
                  "pos"
                ]
              ],
              "total": [
                "Desconto efetivo",
                "R$ 8,00 (8%)"
              ],
              "note": "O cliente enxerga 10% de desconto. O seller paga, na prática, 8%."
            },
            {
              "t": "conta",
              "title": "Outras campanhas, mesma conta",
              "rows": [
                [
                  "Campanha A: 15% de desconto − 5% de rebate",
                  "10%"
                ],
                [
                  "Campanha B: 18% de desconto − 8% de rebate",
                  "10%"
                ]
              ],
              "total": [
                "Desconto efetivo das duas",
                "10%"
              ],
              "note": "Anunciam descontos bem diferentes, mas custam o mesmo pro seller."
            },
            {
              "t": "big",
              "emoji": "⭐",
              "html": "Por isso o bot <b>prioriza campanhas com rebate</b>.",
              "sub": "Desconto maior no anúncio pode render mais que um menor sem rebate."
            },
            {
              "t": "conta",
              "title": "Qual custa menos? (anúncio de R$ 150,00)",
              "rows": [
                [
                  "Campanha A: 14% de desconto, sem rebate",
                  "− R$ 21,00",
                  "neg"
                ],
                [
                  "Campanha B: 20% de desconto",
                  "− R$ 30,00",
                  "neg"
                ],
                [
                  "Campanha B: rebate de 11%",
                  "+ R$ 16,50",
                  "pos"
                ]
              ],
              "total": [
                "Custo efetivo da B (9%)",
                "R$ 13,50"
              ],
              "note": "A B anuncia mais desconto, mas custa R$ 13,50 contra R$ 21,00 da A."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Alinhe por margem, não por desconto",
              "html": "Com a PriceBot, o papo com o seller é sobre a <b>margem</b> que ele quer ter, não sobre percentual de desconto. O que importa é o que sobra no fim."
            },
            {
              "t": "list",
              "title": "Onde você enxerga o rebate",
              "items": [
                "<b>Nexus:</b> aparece como queda nas taxas por venda",
                "<b>PriceBot:</b> painel inicial e visão geral de pedidos",
                "Filtros de 7, 30, 60 e 90 dias",
                "Valores em reais e em percentual"
              ]
            },
            {
              "t": "sim",
              "kind": "rebate",
              "title": "Quanto o rebate devolve?",
              "intro": "Calcule o desconto efetivo, o valor devolvido e compare campanhas."
            },
            {
              "t": "quiz",
              "q": "Dois anúncios iguais entram em campanhas de 15%. No primeiro não há rebate. No segundo, o Mercado Livre devolve 5%. Qual rende mais?",
              "options": [
                "Os dois rendem igual, porque o desconto é o mesmo.",
                "O primeiro, porque não depende de devolução nenhuma.",
                "O segundo: custo efetivo de 10%, contra 15% do primeiro.",
                "Depende do dia da semana em que a campanha roda."
              ],
              "answer": [
                2
              ],
              "why": "15% − 5% = 10% de custo efetivo. Mesmo desconto anunciado, rentabilidade diferente."
            },
            {
              "t": "quiz",
              "q": "A campanha X anuncia 12% sem rebate. A campanha Y anuncia 17% com 7% de rebate. Qual tem o menor custo efetivo?",
              "options": [
                "X: custo efetivo de 12%.",
                "Y: custo efetivo de 10%.",
                "Os dois custam 12%.",
                "Y: custo efetivo de 17%."
              ],
              "answer": [
                1
              ],
              "why": "17% − 7% = 10%, abaixo dos 12% da X. É assim que um desconto que parece maior sai mais barato."
            },
            {
              "t": "say",
              "title": "Se o seller pedir “desconto fixo de 10% em tudo”",
              "html": "“Combino com você a margem que quer em cada produto. Se uma campanha der 14% de desconto e o Mercado Livre devolver 6%, você paga 8%: melhor que 10% fixo. O bot escolhe a que mais sobra pra você.”"
            },
            {
              "t": "recap",
              "items": [
                "Desconto efetivo = desconto anunciado − rebate",
                "O cliente vê um número, o seller sente outro",
                "O bot prioriza campanhas com rebate",
                "Alinhe com o seller por margem, não por desconto"
              ]
            }
          ]
        },
        {
          "id": "l2-3",
          "title": "PMA: a trava de preço mínimo",
          "minutes": 5,
          "goal": "Saber explicar o que o PMA faz, quando usar e como ativá-lo.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🔒",
              "title": "PMA: o preço que não pode furar",
              "text": "Você vai entender a trava que impede o bot de levar um anúncio abaixo do preço mínimo que o seller aceita."
            },
            {
              "t": "video",
              "id": "HTEHn32tTnU",
              "title": "PMA (Preço Mínimo Anunciado): como funciona a lógica do preço mínimo no PriceBot",
              "dur": "1:52",
              "note": "O vídeo mostra a lógica da trava no painel. Dá o play antes de seguir."
            },
            {
              "t": "big",
              "emoji": "⚠️",
              "html": "Margem ótima e preço <b>lá embaixo</b> podem vir juntos.",
              "sub": "Rebate grande melhora a margem, mas pode derrubar o preço."
            },
            {
              "t": "jargon",
              "term": "Preço tabelado",
              "means": "O preço de tabela que o fabricante define. Ele <b>não aceita</b> anúncio abaixo de um certo valor.",
              "ex": "Quem revende grandes marcas não pode anunciar por menos que a tabela."
            },
            {
              "t": "jargon",
              "term": "PMA",
              "means": "<b>Preço Mínimo Anunciado.</b> O preço abaixo do qual o anúncio nunca vai, mesmo que a margem esteja boa.",
              "ex": "PMA de R$ 60,00: nenhuma campanha leva o anúncio pra menos que isso."
            },
            {
              "t": "conta",
              "title": "O caso do treinamento",
              "rows": [
                [
                  "Margem pra ganhar o catálogo",
                  "9,65%"
                ],
                [
                  "Margem mínima do seller",
                  "10%"
                ],
                [
                  "Preço na promoção (margem ativa de 12%, por causa do rebate)",
                  "R$ 59,79"
                ],
                [
                  "Preço mínimo que o seller queria (PMA)",
                  "R$ 60,00"
                ],
                [
                  "Diferença pro PMA",
                  "− R$ 0,21",
                  "neg"
                ]
              ],
              "total": [
                "Com o PMA ativado",
                "Não entra"
              ],
              "note": "Sem o PMA, o bot entrava na promoção. Com ele, o preço manda mais que a margem."
            },
            {
              "t": "big",
              "html": "PMA ativado: o <b>preço manda</b> mais que a margem.",
              "sub": "Ele é uma trava de segurança. Sempre prioriza o preço."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Combine com o seller",
                  "html": "Só vale pra quem tem preço tabelado ou um piso que não aceita furar."
                },
                {
                  "title": "Preencha o preço mínimo",
                  "html": "A planilha de setup (configuração da conta) tem a coluna do PMA."
                },
                {
                  "title": "Peça pro time da PriceBot subir",
                  "html": "O envio é o mesmo da planilha de setup."
                },
                {
                  "title": "Ative nas configurações da plataforma",
                  "html": "Só então o sistema considera o preço mínimo. Aí aparece a interrogação do preço mínimo nos anúncios."
                }
              ]
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "O erro mais comum",
              "html": "Preencher a coluna e <b>esquecer de ativar</b> nas configurações. A trava só vale depois da ativação. O time da PriceBot costuma não ativar por você."
            },
            {
              "t": "sim",
              "kind": "campanha",
              "title": "Com o PMA ativado, o que acontece?",
              "intro": "Alguns cenários trazem o PMA (preço mínimo anunciado). Quando ele aparece, o preço pesa mais que a margem."
            },
            {
              "t": "quiz",
              "q": "O PMA de um anúncio é R$ 60,00. Uma campanha levaria o preço a R$ 59,79, com margem de 12% (dentro da faixa). Com o PMA ativado, o que acontece?",
              "options": [
                "Entra, porque a margem está dentro da faixa.",
                "Entra, e o bot corrige o preço depois.",
                "Não entra: o preço mínimo vale mais que a margem.",
                "Depende de qual seller está com o anúncio."
              ],
              "answer": [
                2
              ],
              "why": "O PMA é uma trava de segurança. Ele sempre prioriza o preço."
            },
            {
              "t": "quiz",
              "q": "A coluna de PMA foi preenchida e enviada. O que falta pra trava valer?",
              "options": [
                "Nada: a coluna preenchida já vale sozinha.",
                "Ativar o PMA nas configurações da plataforma.",
                "Pedir ao seller para ativar no Mercado Livre.",
                "Reenviar a planilha de setup toda semana."
              ],
              "answer": [
                1
              ],
              "why": "Sem a ativação, a coluna é só um dado guardado."
            },
            {
              "t": "recap",
              "items": [
                "PMA é o preço mínimo que o anúncio nunca fura",
                "Com PMA ativado, o preço manda mais que a margem",
                "Use pra quem tem preço tabelado ou piso fixo",
                "Preencher a coluna não basta: <b>ative</b> nas configurações"
              ]
            }
          ]
        },
        {
          "id": "l2-4",
          "title": "Catálogo e promoções",
          "minutes": 5,
          "goal": "Entender como o bot disputa o catálogo e por que às vezes escolhe não disputar.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🏆",
              "title": "Catálogo: quando o bot não disputa",
              "text": "Você vai ver como o bot escolhe entre campanhas e por que, às vezes, decide de propósito não brigar pelo catálogo."
            },
            {
              "t": "jargon",
              "term": "Catálogo",
              "means": "A página única de um produto no Mercado Livre, onde vários vendedores <b>disputam</b> qual anúncio aparece como vencedor.",
              "ex": "Vários sellers vendem o mesmo tênis na mesma página. Só um anúncio fica em destaque."
            },
            {
              "t": "jargon",
              "term": "Campanha elegível",
              "means": "Uma campanha em que o anúncio <b>pode</b>, em tese, entrar. Cada uma tem data e margem resultante.",
              "ex": "Um anúncio pode ter duas campanhas elegíveis: uma que deixa 14% de margem e outra que deixa 11%."
            },
            {
              "t": "jargon",
              "term": "Margem para ganhar",
              "means": "A margem que o anúncio teria se o preço fosse o <b>necessário para vencer</b> o catálogo.",
              "ex": "Pra vencer, o preço teria que cair tanto que a margem iria a 9,65%."
            },
            {
              "t": "big",
              "emoji": "⚖️",
              "html": "Pra cada anúncio, o bot compara as campanhas e escolhe a <b>melhor</b>.",
              "sub": "Cada campanha tem data e margem resultante."
            },
            {
              "t": "list",
              "title": "Como o bot escolhe",
              "items": [
                "Compara as campanhas elegíveis (data e margem)",
                "<b>Prioriza</b> as que têm rebate",
                "Se nenhuma servir, procura campanha do Mercado Livre com mais visibilidade",
                "Nesse caso, mira na <b>margem objetiva</b>",
                "Não fica oscilando entre mínima e objetiva"
              ]
            },
            {
              "t": "jargon",
              "term": "MLB",
              "means": "O código de um anúncio no Mercado Livre. <b>SKU</b> é o código do produto: um SKU pode ter vários MLBs.",
              "ex": "Seller com o mesmo produto anunciado duas vezes tem 1 SKU e 2 MLBs."
            },
            {
              "t": "big",
              "emoji": "🙅",
              "html": "Mesmo SKU em dois anúncios? O bot <b>não disputa contra você</b>.",
              "sub": "Se um MLB já ganha o catálogo, o outro fica quieto."
            },
            {
              "t": "conta",
              "title": "Dois MLBs, mesmo SKU, custo total de R$ 81,00",
              "rows": [
                [
                  "MLB A: preço (já ganha o catálogo)",
                  "R$ 90,00"
                ],
                [
                  "MLB B: preço atual",
                  "R$ 100,00"
                ],
                [
                  "Margem do B no preço atual",
                  "R$ 19,00 (19%)",
                  "pos"
                ],
                [
                  "Margem do B se baixasse pra R$ 90,00",
                  "R$ 9,00 (10%)",
                  "neg"
                ]
              ],
              "total": [
                "O bot mantém o B em",
                "R$ 100,00"
              ],
              "note": "Baixar o B só pra ganhar do A é disputar contra si mesmo, e isso só come margem."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Perdeu o catálogo mas tem margem?",
              "html": "No painel, o anúncio aparece como se \"perdesse\" o catálogo mesmo tendo margem para ganhar. A explicação é essa: ele fica no preço atual, com mais margem."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Outro uso valioso",
              "html": "O seller dono da marca pode baixar a lista de anúncios que estão <b>perdendo</b> o catálogo, com os links. Assim identifica quem vende abaixo do preço tabelado. Há sellers que usaram isso para acionar distribuidores fora do combinado."
            },
            {
              "t": "sim",
              "kind": "campanha",
              "title": "Qual campanha o bot escolhe?",
              "intro": "Duas campanhas elegíveis: aplique a regra da faixa, do rebate e do PMA (preço mínimo anunciado)."
            },
            {
              "t": "quiz",
              "q": "Um seller tem dois MLBs do mesmo SKU. O MLB A ganha o catálogo. O que o bot faz com o MLB B?",
              "options": [
                "Baixa o preço de B até ganhar do anúncio A.",
                "Deixa B no preço atual, com mais margem.",
                "Pausa o B até o A sair do catálogo.",
                "Troca os preços de A e de B entre si."
              ],
              "answer": [
                1
              ],
              "why": "Disputar contra si mesmo só come margem. O bot mantém o B."
            },
            {
              "t": "quiz",
              "q": "Quais critérios o bot usa para escolher entre campanhas elegíveis? Marque todos.",
              "multi": true,
              "options": [
                "Margem resultante dentro da faixa.",
                "Prioridade para campanhas com rebate.",
                "Respeito ao PMA, quando ativado.",
                "Qual campanha tem o nome mais curto."
              ],
              "answer": [
                0,
                1,
                2
              ],
              "why": "Margem, rebate e PMA decidem. Nome da campanha não entra na conta."
            },
            {
              "t": "recap",
              "items": [
                "O bot compara campanhas: margem, rebate e PMA",
                "Sem campanha boa, mira na margem objetiva",
                "Mesmo SKU em dois MLBs: ele não disputa contra você",
                "Lista de anúncios que perdem catálogo ajuda a achar quem vende abaixo"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "m3",
      "n": 4,
      "title": "Setup: do custo à integração",
      "tagline": "Como colocar a conta de um seller dentro da PriceBot, passo a passo.",
      "outcome": "Conduzir um seller do primeiro pedido de custo até a conta integrada.",
      "lessons": [
        {
          "id": "l3-1",
          "title": "Custos, SKU e alíquota sem drama",
          "minutes": 6,
          "goal": "Montar a base de custos de um seller a partir do Nexus, por SKU ou por MLB.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "💰",
              "title": "Sem custo, sem margem",
              "text": "Você vai aprender a puxar os custos do seller no Nexus e a escolher entre SKU e MLB, sem travar a implantação."
            },
            {
              "t": "big",
              "emoji": "🚧",
              "html": "O <b>custo</b> é o maior gargalo da implantação.",
              "sub": "Sem custo não existe margem. Sem margem, a PriceBot não decide nada."
            },
            {
              "t": "jargon",
              "term": "Nexus",
              "means": "O sistema da Mamba onde ficam os dados do seller. O ideal é ele já ter os <b>custos</b> na tela de <b>rentabilidade</b>.",
              "ex": "O seller já cadastrou o custo dos produtos no Nexus? Então metade do trabalho está pronta.",
              "tag": "Primeiro, o lugar"
            },
            {
              "t": "conta",
              "title": "Como a margem do anúncio nasce",
              "rows": [
                [
                  "Preço de venda",
                  "R$ 100,00"
                ],
                [
                  "Custo do produto",
                  "- R$ 45,00",
                  "neg"
                ],
                [
                  "Comissão e frete (25%)",
                  "- R$ 25,00",
                  "neg"
                ],
                [
                  "Imposto (10%)",
                  "- R$ 10,00",
                  "neg"
                ]
              ],
              "total": [
                "Sobra (margem)",
                "R$ 20,00 = 20%"
              ],
              "note": "Tire o custo da conta e ela não fecha. É por isso que ele manda em tudo."
            },
            {
              "t": "sim",
              "kind": "margem",
              "title": "Sua vez: calcule a margem",
              "intro": "Custo, taxas e imposto formam a conta. Sem o custo, a PriceBot não chega nesse número."
            },
            {
              "t": "jargon",
              "term": "Cust ID",
              "means": "O número que identifica o seller no Nexus. É com ele que o time da PriceBot <b>vincula a conta</b> do seller.",
              "ex": "Pense no Cust ID como o CPF do seller dentro do sistema.",
              "tag": "Traduzindo na hora"
            },
            {
              "t": "jargon",
              "term": "SKU",
              "means": "O <b>código do produto</b> que o próprio seller criou, o padrão do e-commerce.",
              "ex": "Camiseta preta M pode ser o SKU CAM-PT-M. Ele escolhe o código.",
              "tag": "Traduzindo na hora"
            },
            {
              "t": "jargon",
              "term": "MLB",
              "means": "O <b>código do anúncio</b> no Mercado Livre. Cada anúncio publicado tem o seu.",
              "ex": "Aquela camiseta anunciada no Mercado Livre ganha um MLB tipo MLB1234567890.",
              "tag": "Traduzindo na hora"
            },
            {
              "t": "p",
              "title": "SKU ou MLB?",
              "html": "<b>SKU é o mais indicado</b>, porque é o padrão. Mas muito seller quase não usa SKU. Tudo bem: preencha pelo <b>MLB</b> e deixe o SKU em branco. O time da PriceBot cria um SKU interno com o número do MLB."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Mesmo SKU, vários MLBs",
              "html": "Às vezes o mesmo SKU tem mais de um anúncio (MLB). Sem estresse: a plataforma liga o custo e as margens <b>a cada MLB</b>."
            },
            {
              "t": "quiz",
              "q": "O seller tem custos por MLB e quase nenhum SKU cadastrado. O que fazer?",
              "options": [
                "Pedir pro seller cadastrar SKU antes de começar.",
                "Preencher pelo MLB e deixar o SKU em branco.",
                "Inventar um SKU diferente pra cada anúncio.",
                "Desistir de usar a PriceBot nesse seller."
              ],
              "answer": [
                1
              ],
              "why": "A PriceBot cria o SKU interno a partir do número do MLB. SKU é o mais indicado, mas não trava nada."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Abra a rentabilidade",
                  "html": "Vá na tela de rentabilidade do seller, no Nexus."
                },
                {
                  "title": "Exporte por SKU",
                  "html": "O arquivo chega pelo sininho de downloads."
                },
                {
                  "title": "Filtre as linhas sem custo",
                  "html": "Apague essas linhas da planilha."
                },
                {
                  "title": "Cole na planilha de setup",
                  "html": "Cada custo com o SKU dele."
                }
              ]
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Linha sem custo: o que é?",
              "html": "Normalmente é um produto que o seller <b>não vai trabalhar</b>, então pode sair da lista. Se for produto que ele vende, peça o custo. Nunca chute um valor."
            },
            {
              "t": "conta",
              "title": "Por que nunca chutar o custo",
              "rows": [
                [
                  "Preço de venda",
                  "R$ 100,00"
                ],
                [
                  "Custo (vazio vira zero)",
                  "- R$ 0,00",
                  "neg"
                ],
                [
                  "Comissão e frete (25%)",
                  "- R$ 25,00",
                  "neg"
                ],
                [
                  "Imposto (10%)",
                  "- R$ 10,00",
                  "neg"
                ]
              ],
              "total": [
                "Margem que parece real",
                "R$ 65,00 = 65%"
              ],
              "note": "Com o custo real de R$ 45,00 a margem é 20%. Custo vazio mostra lucro que não existe."
            },
            {
              "t": "quiz",
              "q": "Na exportação, algumas linhas vieram sem custo. O que isso quer dizer e o que fazer?",
              "options": [
                "Custo zero: essas linhas entram com margem de 100%.",
                "Produto que o seller não vai trabalhar: tire da lista.",
                "Erro do Nexus: é só exportar a planilha de novo.",
                "Preencher tudo com o custo médio da carteira inteira."
              ],
              "answer": [
                1
              ],
              "why": "Falta de custo costuma indicar produto fora da operação. Se o seller vende o item, você pede o custo e nunca estima."
            },
            {
              "t": "jargon",
              "term": "Alíquota",
              "means": "O <b>percentual de imposto</b> que o seller paga sobre a venda. Ela entra na conta da margem.",
              "ex": "Alíquota de 10% num anúncio de R$ 100,00 significa R$ 10,00 de imposto.",
              "tag": "Traduzindo na hora"
            },
            {
              "t": "p",
              "title": "Qual alíquota usar?",
              "html": "A maioria dos sellers está no <b>Simples</b> (regime de imposto de empresa menor) e trabalha com algo em torno de <b>8% a 12%</b>. Quem fatura mais pode ter alíquota diferente em cada produto."
            },
            {
              "t": "conta",
              "title": "A média esconde a margem real",
              "rows": [
                [
                  "Sobra com alíquota média (10%)",
                  "R$ 15,00"
                ],
                [
                  "Sobra real do produto A (8%)",
                  "R$ 17,00",
                  "pos"
                ],
                [
                  "Sobra real do produto B (12%)",
                  "R$ 13,00",
                  "neg"
                ]
              ],
              "total": [
                "Diferença entre A e B",
                "R$ 4,00"
              ],
              "note": "Nos dois: preço R$ 100,00, custo R$ 50,00, comissão e frete de 25%."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Regra de bolso",
              "html": "Se o imposto muda de produto pra produto, peça a alíquota <b>por SKU</b>. Média esconde produto com margem real diferente da esperada."
            },
            {
              "t": "recap",
              "title": "Guarda isso",
              "items": [
                "Sem custo não tem margem, e o bot não decide.",
                "SKU é o ideal; sem SKU, preencha pelo MLB.",
                "Linha sem custo: produto fora da operação. Tire.",
                "Nunca chute custo.",
                "Alíquota variou? Peça por SKU."
              ]
            }
          ]
        },
        {
          "id": "l3-2",
          "title": "A planilha de setup",
          "minutes": 5,
          "goal": "Preencher e enviar a planilha de setup sem retrabalho.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "📋",
              "title": "A planilha de setup sem retrabalho",
              "text": "Você vai saber o que vai em cada coluna, pra quem enviar e como convencer o seller a mandar os custos."
            },
            {
              "t": "big",
              "emoji": "🧱",
              "html": "O time da PriceBot monta a base do seller <b>a partir de uma planilha</b>.",
              "sub": "O modelo é único e está disponível pra todos os assessores."
            },
            {
              "t": "list",
              "title": "O que vai na planilha",
              "items": [
                "<b>Cust ID</b> do seller (vem do Nexus).",
                "<b>SKU</b> (ou MLB) de cada produto.",
                "<b>Custo</b> unitário.",
                "<b>Alíquota</b> de imposto, por produto quando variar."
              ]
            },
            {
              "t": "jargon",
              "term": "Margem mínima",
              "means": "O <b>menor retorno</b> que o seller aceita ter num produto. O bot não passa disso.",
              "ex": "Mínima de 8%: o bot não entra numa campanha que deixe o anúncio com menos que isso.",
              "tag": "Traduzindo na hora"
            },
            {
              "t": "jargon",
              "term": "Margem objetiva",
              "means": "O retorno que o seller <b>quer ter</b>. É a meta de margem do produto.",
              "ex": "Objetiva de 11%: o bot procura ficar perto desse número.",
              "tag": "Traduzindo na hora"
            },
            {
              "t": "jargon",
              "term": "PMA",
              "means": "Preço Mínimo Anunciado: o <b>piso de preço</b> do anúncio. Só entra na planilha se o seller tem preço tabelado (fixo).",
              "ex": "PMA de R$ 78,68: o preço do anúncio não desce abaixo disso.",
              "tag": "Traduzindo na hora"
            },
            {
              "t": "p",
              "title": "As margens podem variar",
              "html": "Margem mínima e objetiva podem mudar por produto, quando o seller quiser diferenciar. Preencha as colunas de margem e, só se o seller tiver preço tabelado, a coluna do <b>PMA</b>."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Nunca peça senha",
              "html": "Nenhuma etapa usa a senha do Mercado Livre. A conexão sai pelo <b>link de grant</b>, onde o próprio seller autoriza. Se alguém pedir senha, tem algo errado."
            },
            {
              "t": "quiz",
              "q": "Quais itens entram na planilha de setup? Marque todos.",
              "multi": true,
              "options": [
                "Cust ID e SKU (ou MLB) de cada produto.",
                "Custo unitário e alíquota de imposto.",
                "Margem mínima e margem objetiva.",
                "Senha da conta do Mercado Livre."
              ],
              "answer": [
                0,
                1,
                2
              ],
              "why": "A senha nunca entra. A conta é conectada pelo grant, que o próprio seller autoriza."
            },
            {
              "t": "big",
              "emoji": "📨",
              "html": "Mande ao time da PriceBot o <b>nome do seller</b> e o <b>Cust ID</b>.",
              "sub": "O lead pode ir junto, mas nome e Cust ID já bastam pra vincular."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Cuidado com o destinatário",
              "html": "Já rolou de o autocompletar do e-mail trazer uma pessoa da Mamba com o mesmo nome da pessoa da PriceBot. Confira o <b>domínio</b> antes de enviar."
            },
            {
              "t": "big",
              "emoji": "🔍",
              "html": "Faltou custo? Aí começa a <b>conversa com o seller</b>.",
              "sub": "O assessor que mais avançou na implantação seguiu um roteiro simples."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Venda o porquê",
                  "html": "Sem custo não dá pra achar o gargalo de margem. O seller quer faturar, mas também quer ganhar dinheiro."
                },
                {
                  "title": "Mostre o que ele ganha",
                  "html": "Margem real por produto, precificação em massa no Nexus, controle de Ads e a automação da PriceBot."
                },
                {
                  "title": "Facilite",
                  "html": "Mande o modelo e, se der, já preencha o que existe no Nexus."
                },
                {
                  "title": "Cobre com constância",
                  "html": "Anote e volte a cobrar a cada um ou dois dias, até chegar."
                }
              ]
            },
            {
              "t": "say",
              "title": "Fala assim com o seller",
              "html": "“Sem o custo eu não consigo ver onde sua margem some. Com ele você enxerga o lucro real de cada produto e a gente automatiza o preço. Já te mando o modelo, e o que tem no Nexus eu preencho.” 💬"
            },
            {
              "t": "quiz",
              "q": "O seller resiste a enviar os custos. Qual abordagem funciona melhor?",
              "options": [
                "Pedir uma vez, de forma educada, e esperar o seller mandar.",
                "Explicar o ganho, facilitar o envio e cobrar com constância.",
                "Estimar o custo de cada produto em 50% do preço de venda.",
                "Ameaçar encerrar a assessoria se o custo não chegar logo."
              ],
              "answer": [
                1
              ],
              "why": "Custo é o gargalo. Quem implantou a carteira toda uniu um porquê claro com acompanhamento de perto."
            },
            {
              "t": "recap",
              "title": "Guarda isso",
              "items": [
                "Planilha: Cust ID, SKU ou MLB, custo, alíquota e margens.",
                "PMA só pra quem tem preço tabelado.",
                "Senha do Mercado Livre nunca entra.",
                "Envie nome e Cust ID, e confira o domínio.",
                "Custo faltando: explique, facilite e cobre."
              ]
            }
          ]
        },
        {
          "id": "l3-3",
          "title": "Grant: conectando a conta do seller",
          "minutes": 5,
          "goal": "Gerar o link de grant, orientar o seller e confirmar a integração.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🔗",
              "title": "Conecte a conta do seller em 5 passos",
              "text": "Você vai gerar o link de grant, orientar o seller a clicar na conta certa e confirmar que a integração deu certo."
            },
            {
              "t": "jargon",
              "term": "Grant",
              "means": "A <b>autorização</b> que o seller dá, clicando num link, pra PriceBot ler os dados da conta dele.",
              "ex": "É tipo o “Permitir” que aparece quando um app pede acesso. O seller clica e pronto.",
              "tag": "Traduzindo na hora"
            },
            {
              "t": "jargon",
              "term": "API",
              "means": "Um jeito de um sistema <b>conversar com outro</b> e puxar dados sem ninguém digitar nada.",
              "ex": "A PriceBot usa a API pra buscar seus anúncios no Mercado Livre.",
              "tag": "Traduzindo na hora"
            },
            {
              "t": "big",
              "emoji": "🔑",
              "html": "Pra puxar os dados, o seller precisa <b>autorizar</b> primeiro.",
              "sub": "Essa etapa vem antes da planilha de setup."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Peça a conta",
                  "html": "Peça ao time da PriceBot a criação da conta atribuída ao seu e-mail."
                },
                {
                  "title": "Gere o link",
                  "html": "Configurações → Integrações → Gerar link para terceiro."
                },
                {
                  "title": "Envie ao seller",
                  "html": "Com o aviso sobre a conta certa, que a gente vê já já."
                },
                {
                  "title": "O seller clica e conecta",
                  "html": "O status dele muda de não integrado para <b>integrado</b>."
                }
              ]
            },
            {
              "t": "big",
              "emoji": "🚀",
              "html": "Último passo: peça ao time da PriceBot pra <b>subir os anúncios</b>.",
              "sub": "A plataforma passa a puxar os SKUs por MLB e a ligar custos e margens a cada um."
            },
            {
              "t": "quiz",
              "q": "Qual é a ordem correta do processo?",
              "options": [
                "Conta atribuída, gerar link, enviar ao seller, seller conecta, status integrado, subir anúncios.",
                "Subir anúncios, gerar link, pedir a conta atribuída, seller conecta, status integrado.",
                "Seller conecta, pedir a conta atribuída, gerar link, subir anúncios, status integrado.",
                "Gerar link, subir anúncios, pedir a conta atribuída, enviar ao seller, seller conecta."
              ],
              "answer": [
                0
              ],
              "why": "O grant vem primeiro: só com a conta integrada a plataforma encontra os MLBs."
            },
            {
              "t": "big",
              "emoji": "⚠️",
              "html": "O grant integra a conta que estiver <b>logada</b>.",
              "sub": "Muito seller tem conta da loja e conta pessoal."
            },
            {
              "t": "compare",
              "left": {
                "title": "Conta da loja logada",
                "tone": "good",
                "items": [
                  "O seller abre o link já na conta da loja.",
                  "Os anúncios certos são puxados."
                ]
              },
              "right": {
                "title": "Conta pessoal logada",
                "tone": "bad",
                "items": [
                  "Abriu o link no celular com a conta pessoal.",
                  "A vinculação sai errada.",
                  "Precisa refazer o grant com a conta certa."
                ]
              }
            },
            {
              "t": "say",
              "title": "Fala assim ao enviar o link",
              "html": "“Antes de clicar, confere se você está logado na conta da loja, tá? Se estiver na pessoal, o link conecta a conta errada.” 👀"
            },
            {
              "t": "quiz",
              "q": "Os produtos que a PriceBot puxou não batem com a loja. Qual é a causa mais provável?",
              "options": [
                "A PriceBot está com defeito e puxou produto errado.",
                "O seller conectou a conta pessoal em vez da conta da loja.",
                "O seller mudou de plano no Mercado Livre há pouco.",
                "Isso é normal, não precisa fazer nada nem revisar."
              ],
              "answer": [
                1
              ],
              "why": "A integração acontece na conta logada na hora do clique. A correção é refazer o grant com a conta certa."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Toda a carteira precisa de grant",
              "html": "Conta com grant recebe campanhas mais relevantes. Algumas são exclusivas (como as da consultoria Platinum) e costumam ter <b>rebate</b> (parte da taxa que volta pro seller). Aderir a campanhas é métrica que o Mercado Livre cobra da gente."
            },
            {
              "t": "recap",
              "title": "Guarda isso",
              "items": [
                "Grant é a autorização do seller, dada por link.",
                "Ordem: conta, link, envio, clique, status integrado, anúncios.",
                "Peça pra ele conferir se está na conta da loja.",
                "Produto errado? Refaça o grant com a conta certa.",
                "Carteira inteira precisa estar com grant."
              ]
            }
          ]
        },
        {
          "id": "l3-4",
          "title": "Ativação: ligar o bot sem susto",
          "minutes": 6,
          "goal": "Fechar a implantação: modo de precificação, PMA, anúncios abaixo da mínima e anúncios novos.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🎯",
              "title": "Ligue o bot do jeito certo",
              "text": "Você vai saber qual modo de precificação usar, o que fazer com anúncio abaixo da mínima e como incluir anúncio novo."
            },
            {
              "t": "video",
              "id": "7GByUXZOqNI",
              "title": "Entenda o modo configurável do Modelo de Precificação do PriceBot",
              "dur": "5:16",
              "note": "O vídeo mostra o modelo de precificação por dentro. Aqui, o foco é só o que a Mamba usa."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Não mexa no modo de precificação",
              "html": "A PriceBot, de fábrica, também altera o <b>preço base</b>. A Mamba não faz isso por contrato, então existe um modo próprio que atua só em promoções e catálogo. Ele já vem no setup. Se trocar, o bot mexe no preço base e o seller reclama."
            },
            {
              "t": "jargon",
              "term": "Preço base",
              "means": "O preço normal do anúncio, antes de qualquer promoção. A Mamba <b>não mexe</b> nele, por contrato.",
              "ex": "Anúncio a R$ 100,00 com promoção de 10%: o preço base continua R$ 100,00.",
              "tag": "Traduzindo na hora"
            },
            {
              "t": "big",
              "emoji": "🧭",
              "html": "Depois do upload, cada anúncio tem um <b>destino</b>.",
              "sub": "Depende da margem ativa dele (a margem que ele tem hoje)."
            },
            {
              "t": "compare",
              "left": {
                "title": "Dentro da faixa",
                "tone": "good",
                "items": [
                  "Ligue a precificação automática.",
                  "O bot começa a gerir promoções e catálogo."
                ]
              },
              "right": {
                "title": "Abaixo da mínima",
                "tone": "bad",
                "items": [
                  "Não ligue a precificação automática.",
                  "O time da PriceBot manda a lista pra você.",
                  "Você envia ao seller pra reprecificar.",
                  "Ligue quando a margem voltar pra faixa."
                ]
              }
            },
            {
              "t": "conta",
              "title": "Os 1.200 anúncios depois do upload",
              "rows": [
                [
                  "Anúncios no total",
                  "1.200"
                ],
                [
                  "Abaixo da mínima (ficam desligados)",
                  "- 300",
                  "neg"
                ]
              ],
              "total": [
                "Pode ligar o bot em",
                "900 anúncios"
              ],
              "note": "Os 300 só ligam quando o seller reprecificar e a margem voltar pra faixa."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Não baixe a mínima",
              "html": "Antes, a gente ajustava a mínima pra igualar a margem atual do anúncio. <b>Hoje não</b>. Quem corrige é o preço, e o seller que reprecifica."
            },
            {
              "t": "quiz",
              "q": "Depois do upload, 300 dos 1.200 anúncios estão abaixo da mínima. O que fazer?",
              "options": [
                "Ligar os 1.200 de uma vez e deixar o bot resolver.",
                "Ligar os 900 dentro da faixa e segurar os 300 até reprecificar.",
                "Baixar a mínima dos 300 até igualar a margem atual deles.",
                "Apagar os 300 anúncios que estão abaixo da mínima."
              ],
              "answer": [
                1
              ],
              "why": "Item abaixo da mínima fica desligado. Os outros operam normalmente."
            },
            {
              "t": "p",
              "title": "Rotina 1: ativar o PMA",
              "html": "Se o seller tem preço tabelado e a coluna do <b>PMA</b> (o piso de preço) foi preenchida, ative o PMA nas configurações. Só preencher a coluna não basta."
            },
            {
              "t": "big",
              "emoji": "🆕",
              "html": "Rotina 2: o seller criou um <b>anúncio novo</b>.",
              "sub": "Não refaça a base. Mande só aquele anúncio."
            },
            {
              "t": "list",
              "title": "Como mandar o anúncio novo",
              "items": [
                "Envie ao time da PriceBot só esse anúncio.",
                "Inclua o custo e as margens dele.",
                "Informe o lead (o número do cliente na Mamba)."
              ]
            },
            {
              "t": "quiz",
              "q": "O seller criou um anúncio novo. Qual é o caminho?",
              "options": [
                "Refazer toda a planilha de setup, do começo ao fim.",
                "Mandar só o anúncio novo ao time da PriceBot, com o lead.",
                "Esperar a PriceBot descobrir o anúncio novo sozinha.",
                "Pedir pro Mercado Livre colocar o anúncio no bot."
              ],
              "answer": [
                1
              ],
              "why": "Dá pra incluir sem refazer a base. Basta enviar o item novo."
            },
            {
              "t": "recap",
              "title": "Guarda isso",
              "items": [
                "Não mexa no modo de precificação: ele já vem certo.",
                "Dentro da faixa: ligue. Abaixo da mínima: segure.",
                "Nunca baixe a mínima pra encaixar a margem atual.",
                "Preencheu a coluna do PMA? Ative nas configurações.",
                "Anúncio novo: envie só ele, com o lead."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "m4",
      "n": 5,
      "title": "Operando o painel",
      "tagline": "O dia a dia dentro da plataforma, tela por tela.",
      "outcome": "Navegar pelo painel, ligar e desligar o bot com segurança e editar margens e custos em massa.",
      "lessons": [
        {
          "id": "l4-1",
          "title": "A tela inicial em 5 minutos",
          "minutes": 5,
          "goal": "Saber ler a tela inicial, separar Tradicional de Catálogo e usar os filtros de oportunidade.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧭",
              "title": "Abriu a PriceBot? Saiba onde olhar",
              "text": "Em poucos minutos você lê a tela inicial, separa Tradicional de Catálogo e usa os filtros pra achar onde tem ação."
            },
            {
              "t": "big",
              "emoji": "👀",
              "html": "Antes de editar qualquer coisa, confira <b>em qual conta</b> você está.",
              "sub": "Ao abrir uma conta, todos os dados passam a ser daquela conta."
            },
            {
              "t": "p",
              "title": "Login próprio, carteira conhecida",
              "html": "Cada assessor entra com o <b>seu login</b>. A carteira de contas é a mesma que você já tem no Nexus. Abriu a conta certa? Aí sim, bora mexer."
            },
            {
              "t": "list",
              "title": "A tela inicial mostra",
              "items": [
                "<b>Faturamento</b> do mês e dos últimos 7 dias, com o valor obtido em rebate",
                "<b>Dias sem vender</b>: dá pra baixar a planilha e mandar pro seller",
                "<b>Status do catálogo</b>: anúncios ganhando, perdendo e empatando",
                "<b>Status dos anúncios</b> ativos e <b>distribuição</b> entre catálogo e não catálogo"
              ]
            },
            {
              "t": "jargon",
              "term": "Rebate",
              "means": "Parte do desconto da campanha que o <b>Mercado Livre devolve</b> ao seller quando ele entra nela.",
              "ex": "Campanha de 10% com 2% de rebate: o seller sente só 8%."
            },
            {
              "t": "jargon",
              "term": "Catálogo",
              "means": "Página única de um produto no Mercado Livre, onde <b>vários vendedores disputam</b> a venda.",
              "ex": "Na tela inicial, cada anúncio de catálogo aparece como ganhando, perdendo ou empatando."
            },
            {
              "t": "conta",
              "title": "Lendo o status do catálogo",
              "rows": [
                [
                  "Anúncios ganhando",
                  "180",
                  "pos"
                ],
                [
                  "Anúncios empatando",
                  "70"
                ],
                [
                  "Anúncios perdendo",
                  "50",
                  "neg"
                ]
              ],
              "total": [
                "Anúncios em catálogo",
                "300"
              ],
              "note": "Exemplo fictício, só pra você treinar a leitura do painel."
            },
            {
              "t": "quiz",
              "q": "Quais dados aparecem na tela inicial? Marque todos.",
              "multi": true,
              "options": [
                "Faturamento do mês e dos últimos 7 dias, com rebate",
                "Dias sem vender, com planilha pra baixar",
                "Status do catálogo: ganhando, perdendo e empatando",
                "Lista de preços de cada concorrente do anúncio"
              ],
              "answer": [
                0,
                1,
                2
              ],
              "why": "A PriceBot não lista o preço de cada concorrente na tela inicial."
            },
            {
              "t": "jargon",
              "term": "MLB",
              "means": "O código de cada <b>anúncio</b> no Mercado Livre. Um MLB é um anúncio.",
              "ex": "Na lista, cada linha é um MLB, com preço ativo e link direto pro anúncio."
            },
            {
              "t": "big",
              "emoji": "🔀",
              "html": "São duas visões de trabalho: <b>Tradicional</b> e <b>Catálogo</b>.",
              "sub": "Tradicional é a gestão de promoções. Catálogo é a disputa de catálogo."
            },
            {
              "t": "list",
              "title": "Cada visão tem a sua lista, com",
              "items": [
                "<b>Modalidade</b> do anúncio: clássico ou premium",
                "<b>Modalidade de envio</b>",
                "<b>Estoque</b>",
                "<b>Preço ativo</b>",
                "<b>Link direto</b> pro anúncio"
              ]
            },
            {
              "t": "quiz",
              "q": "Quais são as duas visões principais de anúncios?",
              "options": [
                "Anúncios ativos e anúncios pausados",
                "Tradicional (promoções) e Catálogo (disputa)",
                "Full e Flex (os dois tipos de envio)",
                "Clássico e premium (tipo de anúncio)"
              ],
              "answer": [
                1
              ],
              "why": "Clássico e premium é só uma coluna de modalidade do anúncio. As visões são Tradicional e Catálogo."
            },
            {
              "t": "big",
              "emoji": "🎯",
              "html": "Conta com milhares de anúncios? <b>Ninguém olha tudo.</b>",
              "sub": "Os filtros de oportunidade mostram só onde tem ação possível."
            },
            {
              "t": "video",
              "id": "KISFrHkUmdI",
              "title": "Utilizando os filtros de Oportunidades de Catálogo e Campanha no PriceBot",
              "dur": "5:21",
              "note": "Veja como os filtros ajudam a achar ação possível em contas grandes."
            },
            {
              "t": "recap",
              "items": [
                "Confira a conta antes de editar",
                "Tela inicial: faturamento, rebate, dias sem vender, catálogo",
                "Duas visões: Tradicional e Catálogo",
                "Em conta grande, comece pelos filtros de oportunidade"
              ]
            }
          ]
        },
        {
          "id": "l4-2",
          "title": "Ligar e desligar o bot sem erro",
          "minutes": 4,
          "goal": "Conseguir ligar, desligar e tratar um pedido do seller sem deixar promoção órfã.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🔌",
              "title": "Desligou o bot? A promoção não sai sozinha",
              "text": "Você vai ver o que a chave de precificação automática faz e como atender o seller sem deixar promoção ativa sem ninguém cuidando."
            },
            {
              "t": "jargon",
              "term": "Precificação automática",
              "means": "A chave de cada anúncio que coloca o <b>bot pra trabalhar</b> naquele MLB (o código do anúncio no Mercado Livre).",
              "ex": "Um anúncio, uma chave: você liga ou desliga MLB por MLB, direto na lista."
            },
            {
              "t": "compare",
              "left": {
                "title": "Ligada",
                "tone": "good",
                "items": [
                  "O bot faz o cálculo do anúncio",
                  "Entra e sai de promoções",
                  "Acompanha o catálogo dentro da margem"
                ]
              },
              "right": {
                "title": "Desligada",
                "tone": "bad",
                "items": [
                  "O bot para de gerir o anúncio",
                  "A promoção ativa <b>continua ativa</b>",
                  "Quem desligou retira a promoção no Mercado Livre"
                ]
              }
            },
            {
              "t": "big",
              "emoji": "⚠️",
              "html": "Desligar o bot <b>não tira</b> a promoção que já está ativa.",
              "sub": "Ela fica lá, sem o bot cuidando. É a promoção órfã."
            },
            {
              "t": "big",
              "emoji": "💬",
              "html": "O seller reclamou de um anúncio. <b>E agora?</b>",
              "sub": "Quatro passos, nessa ordem."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Entender o motivo",
                  "html": "É margem? Preço abaixo do que ele aceita? Rebate (desconto que o Mercado Livre devolve) mal entendido?"
                },
                {
                  "title": "Desligar a precificação do anúncio",
                  "html": "Na lista, clicando na chave."
                },
                {
                  "title": "Retirar a promoção no Mercado Livre",
                  "html": "Desligar o bot não tira a promoção ativa. Selecione e retire."
                },
                {
                  "title": "Ajustar a configuração, se for o caso",
                  "html": "Margem, PMA (preço mínimo anunciado) ou custo do anúncio. Avise o seller do que foi feito."
                }
              ]
            },
            {
              "t": "say",
              "title": "Fala assim com o seller",
              "html": "“Desliguei a precificação desse anúncio e já retirei a promoção no Mercado Livre. Vou ajustar a margem e te aviso do que mudou.”"
            },
            {
              "t": "quiz",
              "q": "Você desligou a precificação automática de um MLB. O que acontece com a promoção ativa dele?",
              "options": [
                "Sai sozinha, porque o bot deixa de gerir o anúncio",
                "Continua ativa: você precisa retirá-la no Mercado Livre",
                "É trocada automaticamente pela próxima campanha disponível",
                "O anúncio é pausado até alguém religar a chave"
              ],
              "answer": [
                1
              ],
              "why": "Desligado, o bot para de gerir. O que estava ativo continua ativo."
            },
            {
              "t": "big",
              "emoji": "📉",
              "html": "Margem negativa existe, mas é <b>rara</b>.",
              "sub": "Exemplo: o seller quer queimar preço de propósito pra ranquear (subir na busca)."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Habilitar a margem negativa",
                  "html": "É o primeiro passo."
                },
                {
                  "title": "Ajustar a margem mínima do anúncio",
                  "html": "Coloque o valor negativo que o seller aceita."
                },
                {
                  "title": "Combinar o limite de prejuízo",
                  "html": "Alinhe com o seller antes de ligar."
                },
                {
                  "title": "Revisar depois",
                  "html": "Volte e confira como ficou."
                }
              ]
            },
            {
              "t": "conta",
              "title": "Por que a mínima precisa ficar negativa",
              "rows": [
                [
                  "Preço na campanha",
                  "R$ 90,00"
                ],
                [
                  "Comissão, impostos e frete",
                  "- R$ 38,00",
                  "neg"
                ],
                [
                  "Custo do produto",
                  "- R$ 55,00",
                  "neg"
                ]
              ],
              "total": [
                "Sobra (margem)",
                "- R$ 3,00 (-3,3%)"
              ],
              "note": "Exemplo fictício. Com mínima positiva, o bot não entra. Com mínima de -5%, ele pode entrar."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Mínima positiva, bot parado",
              "html": "Se a margem mínima continuar positiva, o bot não entra na campanha com prejuízo. Por ser raro, combine o limite com o seller antes e revise depois."
            },
            {
              "t": "recap",
              "items": [
                "Chave ligada: o bot gere o anúncio",
                "Desligar não tira a promoção ativa",
                "Retire a promoção no Mercado Livre",
                "Margem negativa: ajuste a mínima e combine o limite"
              ]
            }
          ]
        },
        {
          "id": "l4-3",
          "title": "Edição em massa sem sofrer",
          "minutes": 5,
          "goal": "Conseguir alterar margens e custos de muitos anúncios com rapidez e estimar o trabalho antes.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "⚡",
              "title": "Mudar 4.000 anúncios sem 4.000 cliques",
              "text": "Veja como editar margens e custos em massa e como fazer a conta das rodadas antes de prometer prazo ao seller."
            },
            {
              "t": "big",
              "html": "Depois da configuração inicial, dá pra mudar a margem por <b>SKU</b> ou por <b>MLB</b>.",
              "sub": "Um por um ou em massa."
            },
            {
              "t": "jargon",
              "term": "SKU",
              "means": "O código interno do <b>produto</b> no estoque do seller.",
              "ex": "Na lista de Anúncios, cada linha mostra o MLB e o SKU do produto."
            },
            {
              "t": "jargon",
              "term": "Mínima, objetiva e máxima",
              "means": "As três <b>margens</b> de cada anúncio: a mínima (piso pra entrar em campanha), a objetiva (alvo do bot) e a máxima (teto).",
              "ex": "Exemplo de uma linha: 8% / 11% / 15%."
            },
            {
              "t": "compare",
              "left": {
                "title": "Unitário",
                "tone": "bad",
                "items": [
                  "Nos três pontinhos do anúncio, em detalhes",
                  "Muda mínima, objetiva e máxima",
                  "Um anúncio por vez"
                ]
              },
              "right": {
                "title": "Em massa",
                "tone": "good",
                "items": [
                  "Selecione os anúncios, edite e salve",
                  "Vale por página de 100 itens",
                  "Várias margens de uma vez"
                ]
              }
            },
            {
              "t": "big",
              "emoji": "📄",
              "html": "A edição em massa vale por <b>página de 100 itens</b>.",
              "sub": "O tamanho da conta decide quantas rodadas você faz."
            },
            {
              "t": "conta",
              "title": "Quantas rodadas numa conta grande?",
              "rows": [
                [
                  "Anúncios na conta",
                  "4.000"
                ],
                [
                  "Itens por página",
                  "100"
                ],
                [
                  "4.000 ÷ 100",
                  "40"
                ]
              ],
              "total": [
                "Rodadas de edição",
                "40"
              ],
              "note": "No unitário, seriam 4.000 edições. Em massa, 40 rodadas."
            },
            {
              "t": "conta",
              "title": "E se sobrar anúncio?",
              "rows": [
                [
                  "Anúncios na conta",
                  "350"
                ],
                [
                  "Páginas cheias de 100",
                  "3"
                ],
                [
                  "Anúncios que sobram",
                  "50"
                ]
              ],
              "total": [
                "Rodadas de edição",
                "4"
              ],
              "note": "A última página fica incompleta, mas conta como uma rodada."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Faça a conta antes de prometer prazo",
              "html": "Divida os anúncios por 100 e veja as rodadas. É bem melhor que editar um por um, mas toma tempo. Volume grande? Vale combinar o ajuste com o time da PriceBot."
            },
            {
              "t": "sim",
              "kind": "paginas",
              "title": "Bora contar as rodadas",
              "intro": "A edição em massa trabalha por página de 100 itens. Teste com contas de vários tamanhos."
            },
            {
              "t": "quiz",
              "q": "A edição em massa vale por página de 100 anúncios. A conta tem 2.500 anúncios. Quantas rodadas, no mínimo?",
              "options": [
                "10 rodadas",
                "25 rodadas",
                "250 rodadas",
                "2.500 rodadas"
              ],
              "answer": [
                1
              ],
              "why": "2.500 ÷ 100 = 25 rodadas."
            },
            {
              "t": "big",
              "emoji": "💸",
              "html": "Custo errado em vários anúncios? Tem <b>fluxo pra isso</b>.",
              "sub": "Baixa a planilha, corrige no arquivo e importa de volta."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Abrir a aba de produtos",
                  "html": "Na plataforma."
                },
                {
                  "title": "Baixar a planilha de produtos ativos",
                  "html": "O arquivo vai para a lista de downloads."
                },
                {
                  "title": "Corrigir os custos no arquivo",
                  "html": "É a mesma estrutura da planilha de setup (a de configuração inicial)."
                },
                {
                  "title": "Importar a planilha de volta",
                  "html": "Os custos são atualizados produto a produto."
                }
              ]
            },
            {
              "t": "video",
              "id": "z_BKB5JFZIQ",
              "title": "O que são e como corrigir Anúncios Pendentes no PriceBot",
              "dur": "2:12",
              "note": "Antes de editar em massa, dê uma olhada se tem anúncio pendente na conta."
            },
            {
              "t": "quiz",
              "q": "O seller enviou 600 custos errados. Qual é o fluxo mais eficiente?",
              "options": [
                "Editar os custos um por um, em cada anúncio",
                "Baixar a planilha, corrigir os custos e importar",
                "Refazer a integração da conta do zero",
                "Pedir pro seller mudar o preço dos anúncios"
              ],
              "answer": [
                1
              ],
              "why": "A importação atualiza os custos de uma vez."
            },
            {
              "t": "recap",
              "items": [
                "Margem muda por SKU ou MLB, um a um ou em massa",
                "Em massa vale por página de 100 itens",
                "Rodadas = anúncios ÷ 100",
                "Custos errados: baixe a planilha, corrija e importe"
              ]
            }
          ]
        },
        {
          "id": "l4-4",
          "title": "Campanhas, rebate e calculadora",
          "minutes": 6,
          "goal": "Conseguir ler campanhas elegíveis, mostrar o rebate ao seller e simular preço na calculadora.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧮",
              "title": "Campanhas, rebate e a calculadora do MLB",
              "text": "Veja quais campanhas o bot considera, onde mostrar o rebate ao seller e como simular preço na calculadora."
            },
            {
              "t": "big",
              "emoji": "📋",
              "html": "No detalhe do anúncio, a PriceBot lista as <b>campanhas elegíveis</b>.",
              "sub": "Cada uma vem com data e com a margem resultante."
            },
            {
              "t": "jargon",
              "term": "Campanha elegível",
              "means": "Campanha em que o anúncio <b>pode entrar</b>, com a <b>data</b> e a <b>margem</b> que ele teria nela.",
              "ex": "O bot escolhe a melhor entre as viáveis."
            },
            {
              "t": "compare",
              "left": {
                "title": "Viáveis",
                "tone": "good",
                "items": [
                  "Campanha A: margem de 12%, acima da mínima de 8%",
                  "Campanha B: margem de 9%, também acima da mínima"
                ]
              },
              "right": {
                "title": "Não cabem",
                "tone": "bad",
                "items": [
                  "Campanha C: margem de 5%, abaixo da mínima de 8%",
                  "Campanha D: data já passada"
                ]
              }
            },
            {
              "t": "jargon",
              "term": "Rebate",
              "means": "Parte do desconto que o Mercado Livre <b>devolve ao seller</b> quando ele entra numa campanha.",
              "ex": "Campanha de 10% com 2% de rebate: o seller sente só 8%."
            },
            {
              "t": "list",
              "title": "Onde ver o rebate",
              "items": [
                "<b>Tela inicial</b>: rebate do mês e dos últimos 7 dias",
                "<b>Visão geral de pedidos</b>: filtros de 7, 30, 60 e 90 dias",
                "Na visão geral, dá pra ver em reais e em percentual"
              ]
            },
            {
              "t": "conta",
              "title": "Rebate dos últimos 30 dias",
              "rows": [
                [
                  "Faturamento em 30 dias",
                  "R$ 60.000,00"
                ],
                [
                  "Rebate obtido",
                  "R$ 1.800,00",
                  "pos"
                ]
              ],
              "total": [
                "Rebate sobre o faturamento",
                "3%"
              ],
              "note": "Exemplo fictício. É esse número, em reais e em percentual, que você mostra ao seller."
            },
            {
              "t": "quiz",
              "q": "Onde o assessor consulta o rebate do último mês, em reais?",
              "options": [
                "Só no extrato do banco do seller",
                "Na tela inicial e na visão geral de pedidos",
                "Só pedindo o número ao time da PriceBot",
                "Não dá pra medir o rebate em reais"
              ],
              "answer": [
                1
              ],
              "why": "Os dois lugares mostram o rebate. A visão geral de pedidos permite filtrar 7, 30, 60 e 90 dias."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Hábito semanal",
              "html": "Entre na conta <b>pelo menos uma vez por semana</b>. Tire um print do rebate e mande pro seller, no grupo. Não espere a reunião mensal nem uma reclamação pra mostrar valor."
            },
            {
              "t": "say",
              "title": "Fala assim no grupo do seller",
              "html": "“Passei na sua conta essa semana: o rebate dos últimos 30 dias foi de R$ 1.800, 3% do faturamento. Segue o print.”"
            },
            {
              "t": "big",
              "emoji": "🧪",
              "html": "Cada MLB tem uma <b>calculadora</b> ao lado.",
              "sub": "Digite um preço e veja a margem em reais e em percentual."
            },
            {
              "t": "p",
              "title": "Ela já faz a conta toda",
              "html": "A calculadora considera <b>comissões, impostos, frete e custo</b>. Dá pra voltar ao preço antigo a qualquer momento."
            },
            {
              "t": "conta",
              "title": "Calculadora: preço de R$ 89,90",
              "rows": [
                [
                  "Preço digitado",
                  "R$ 89,90"
                ],
                [
                  "Comissão",
                  "- R$ 12,59",
                  "neg"
                ],
                [
                  "Impostos",
                  "- R$ 5,39",
                  "neg"
                ],
                [
                  "Frete",
                  "- R$ 9,90",
                  "neg"
                ],
                [
                  "Custo do produto",
                  "- R$ 40,00",
                  "neg"
                ]
              ],
              "total": [
                "Margem",
                "R$ 22,02 (24,5%)"
              ],
              "note": "Exemplo fictício. A calculadora mostra a margem em reais e em percentual."
            },
            {
              "t": "conta",
              "title": "Agora testando R$ 79,90",
              "rows": [
                [
                  "Preço digitado",
                  "R$ 79,90"
                ],
                [
                  "Comissão",
                  "- R$ 11,19",
                  "neg"
                ],
                [
                  "Impostos",
                  "- R$ 4,79",
                  "neg"
                ],
                [
                  "Frete",
                  "- R$ 9,90",
                  "neg"
                ],
                [
                  "Custo do produto",
                  "- R$ 40,00",
                  "neg"
                ]
              ],
              "total": [
                "Margem",
                "R$ 14,02 (17,5%)"
              ],
              "note": "Preço R$ 10,00 menor: a margem caiu R$ 8,00. Comissão e impostos diminuem, mas não cobrem a queda."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "É só simulação",
              "html": "A calculadora <b>não altera o anúncio</b>. Ela só mostra a margem do preço que você digitou."
            },
            {
              "t": "sim",
              "kind": "margem",
              "title": "Bora simular a margem",
              "intro": "Teste preços e confira a margem, como na calculadora de cada MLB."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Quando usar",
              "html": "Seller exigente com margem? Simule 2 ou 3 preços com ele na reunião e mostre o resultado em reais. Fica mais fácil chegar num preço de comum acordo."
            },
            {
              "t": "quiz",
              "q": "A calculadora do MLB altera o preço do anúncio?",
              "options": [
                "Sim, o preço muda na hora no anúncio",
                "Não, só simula a margem do preço digitado",
                "Sim, mas só no fim do dia, em lote",
                "Só para anúncios premium, não para clássicos"
              ],
              "answer": [
                1
              ],
              "why": "É simulação. Serve para apoiar a decisão e a conversa com o seller."
            },
            {
              "t": "recap",
              "items": [
                "Campanha elegível mostra data e margem",
                "Rebate: tela inicial e visão geral de pedidos",
                "Print do rebate pro seller, toda semana",
                "Calculadora simula a margem e não altera o anúncio"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "m5",
      "n": 6,
      "title": "Por que o bot fez isso?",
      "tagline": "Entenda o que o bot fez (ou não fez) e o que dizer ao seller.",
      "outcome": "Diagnosticar por que um anúncio não entra em campanha ou não ganha catálogo.",
      "lessons": [
        {
          "id": "l5-1",
          "title": "Margem abaixo da mínima: e agora?",
          "minutes": 5,
          "goal": "Saber tratar anúncios abaixo da mínima sem mexer na regra do seller.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "📉",
              "title": "Margem baixa: o bot fica de fora",
              "text": "Você vai entender por que o bot não mexe em anúncio abaixo da mínima e o que fazer com o seller."
            },
            {
              "t": "video",
              "id": "5_9xVZGl6T4",
              "title": "Margem abaixo da mínima na prática",
              "dur": "1:46",
              "note": "Assista e anote o que o painel mostra nesse caso."
            },
            {
              "t": "big",
              "emoji": "🚫",
              "html": "Margem ativa abaixo da mínima? O anúncio <b>fica de fora</b> da precificação automática.",
              "sub": "Precificação automática é o bot cuidando do preço. Qualquer promoção baixaria o preço ainda mais."
            },
            {
              "t": "jargon",
              "term": "Margem mínima",
              "means": "O <b>menor retorno</b> que o seller aceita em cada venda. Abaixo disso, o bot não entra em promoção.",
              "ex": "Mínima de 10%: o bot recusa qualquer campanha que deixe a margem menor que 10%."
            },
            {
              "t": "jargon",
              "term": "Margem ativa",
              "means": "A margem que o anúncio tem <b>hoje</b>, com o preço que está no ar.",
              "ex": "Margem ativa de 4% com mínima de 10%: o anúncio já nasce abaixo da mínima."
            },
            {
              "t": "conta",
              "title": "A margem de hoje",
              "rows": [
                [
                  "Preço base do anúncio",
                  "R$ 100,00"
                ],
                [
                  "Custo do produto",
                  "− R$ 66,00",
                  "neg"
                ],
                [
                  "Taxas do marketplace",
                  "− R$ 18,00",
                  "neg"
                ],
                [
                  "Frete",
                  "− R$ 12,00",
                  "neg"
                ]
              ],
              "total": [
                "Sobra (margem ativa)",
                "R$ 4,00 = 4%"
              ],
              "note": "Mínima do seller: 10%. Esse anúncio já está abaixo."
            },
            {
              "t": "conta",
              "title": "E se entrar numa promoção de 10%?",
              "rows": [
                [
                  "Preço com 10% de desconto",
                  "R$ 90,00"
                ],
                [
                  "Custos totais, iguais aos de antes",
                  "− R$ 96,00",
                  "neg"
                ]
              ],
              "total": [
                "Resultado da venda",
                "− R$ 6,00"
              ],
              "note": "Conta simplificada, só pra mostrar a ideia: a promoção levaria a venda pro prejuízo."
            },
            {
              "t": "big",
              "emoji": "🧠",
              "html": "Regra de bolso: abaixo da mínima, o bot <b>não gerencia</b> o anúncio.",
              "sub": "Ele só volta quando o preço for reajustado."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Identificar",
                  "html": "O time da PriceBot reporta a lista dos itens abaixo da mínima, inclusive os de margem negativa."
                },
                {
                  "title": "Mostrar com números",
                  "html": "Custo, taxas, frete e margem atual do produto dele, puxados direto da API (conexão automática com a conta)."
                },
                {
                  "title": "Reprecificar",
                  "html": "O seller sobe o preço base aos poucos. O Nexus tem precificação em massa e exporta a planilha com o preço novo."
                },
                {
                  "title": "Ligar o bot",
                  "html": "Quando a margem voltar pra faixa, a precificação automática pode ser ligada."
                }
              ]
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Não baixe a mínima pra facilitar",
              "html": "Ajustar a mínima pra margem atual faz o bot entrar, mas entrega a margem do seller. Hoje esse não é o procedimento."
            },
            {
              "t": "say",
              "title": "Fala assim com o seller",
              "html": "“Esse anúncio está com 4% de margem e a mínima combinada é 10%. Se o bot entrasse em promoção, você perderia dinheiro. Bora subir o preço aos poucos?”"
            },
            {
              "t": "sim",
              "kind": "campanha",
              "title": "Entra ou não entra?",
              "intro": "Olhe a margem de cada cenário e aplique a regra: abaixo da mínima, o bot não adere."
            },
            {
              "t": "quiz",
              "q": "Um anúncio está com margem ativa de 4% e a mínima é 10%. O que fazer?",
              "options": [
                "Baixar a mínima pra 4%, assim o bot consegue entrar na promoção.",
                "Manter desligado e levar o item pra reprecificação com o seller.",
                "Ligar o bot e esperar aparecer uma promoção com rebate depois.",
                "Pausar o anúncio no marketplace até a margem melhorar sozinha."
              ],
              "answer": [
                1
              ],
              "why": "O anúncio fica desligado até o preço ser reajustado. Aí ele volta a ter espaço pra promoção."
            },
            {
              "t": "recap",
              "items": [
                "Abaixo da mínima, o bot não gerencia o anúncio",
                "Promoção ia derrubar o preço ainda mais",
                "Mostre custo, taxas e frete pro seller",
                "Suba o preço aos poucos e só depois ligue o bot",
                "Nunca baixe a mínima só pra facilitar"
              ]
            }
          ]
        },
        {
          "id": "l5-2",
          "title": "Qual campanha o bot escolhe",
          "minutes": 6,
          "goal": "Entender a ordem de prioridade do bot entre campanhas e explicá-la ao seller.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧭",
              "title": "Como o bot escolhe a campanha",
              "text": "Você vai ver a ordem de prioridade do bot entre as campanhas e como explicar isso pro seller sem enrolação."
            },
            {
              "t": "video",
              "id": "11qQPaLwsVY",
              "title": "Como o bot prioriza as promoções",
              "dur": "2:19",
              "note": "Compare o que o vídeo mostra com a ordem de prioridade dos próximos cards."
            },
            {
              "t": "big",
              "emoji": "🥇",
              "html": "Nem toda campanha vale igual: o bot segue uma <b>ordem de prioridade</b>.",
              "sub": "Primeiro, vamos entender duas palavras-chave: rebate e custo efetivo."
            },
            {
              "t": "jargon",
              "term": "Rebate",
              "means": "Dinheiro que o Mercado Livre <b>devolve ao seller</b> quando o anúncio entra em certas campanhas.",
              "ex": "Campanha com 14% de desconto e 6% de rebate: o marketplace devolve 6% ao seller."
            },
            {
              "t": "jargon",
              "term": "Custo efetivo",
              "means": "O desconto que o seller <b>realmente paga</b>: o desconto da campanha menos o rebate.",
              "ex": "14% de desconto − 6% de rebate = 8% de custo efetivo."
            },
            {
              "t": "conta",
              "title": "Campanha X: com rebate",
              "rows": [
                [
                  "Desconto da campanha",
                  "14%",
                  "neg"
                ],
                [
                  "Rebate devolvido",
                  "6%",
                  "pos"
                ]
              ],
              "total": [
                "Custo efetivo",
                "8%"
              ],
              "note": "14% − 6% = 8%."
            },
            {
              "t": "conta",
              "title": "Campanha Y: sem rebate",
              "rows": [
                [
                  "Desconto da campanha",
                  "8%",
                  "neg"
                ],
                [
                  "Rebate devolvido",
                  "0%"
                ]
              ],
              "total": [
                "Custo efetivo",
                "8%"
              ],
              "note": "Mesmo custo da X. Mas a X é uma campanha com rebate e costuma dar mais visibilidade."
            },
            {
              "t": "jargon",
              "term": "Margem objetiva",
              "means": "A margem que o seller <b>quer ter</b>. A mínima é o piso; a objetiva é o alvo.",
              "ex": "Mínima de 10% e objetiva de 20%: a faixa de margem do anúncio vai de 10% a 20%."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Campanhas com rebate",
                  "html": "Vêm primeiro, desde que a margem resultante fique na faixa."
                },
                {
                  "title": "Campanha mais visível",
                  "html": "Sem rebate que caiba, o bot busca a mais visível e mira a margem objetiva, sem oscilar entre mínima e objetiva."
                },
                {
                  "title": "Nenhuma",
                  "html": "Se nada cabe na faixa, o anúncio fica fora. O bot nunca fura a mínima."
                }
              ]
            },
            {
              "t": "big",
              "emoji": "🔒",
              "html": "O bot <b>nunca fura</b> a mínima.",
              "sub": "Mínima é a menor margem que o seller aceita ter."
            },
            {
              "t": "quiz",
              "q": "Entre uma campanha com rebate e uma sem rebate, as duas dentro da margem, qual o bot prioriza?",
              "options": [
                "A sem rebate, porque o desconto é mais simples.",
                "A com rebate, porque devolve dinheiro pro seller.",
                "A mais antiga, porque entrou primeiro na lista.",
                "Nenhuma das duas: o bot sorteia entre elas."
              ],
              "answer": [
                1
              ],
              "why": "O rebate devolve dinheiro pro seller. Por isso é a primeira prioridade."
            },
            {
              "t": "sim",
              "kind": "rebate",
              "title": "Rebate e desconto efetivo",
              "intro": "Mexa nos números e veja por que as campanhas com rebate saem na frente."
            },
            {
              "t": "say",
              "title": "Se o seller perguntar: “vai aumentar muito o desconto?”",
              "html": "“A PriceBot só entra em promoção que cabe na margem que combinamos. Se o desconto derrubaria o preço abaixo do seu mínimo, ela não entra. E as campanhas mais relevantes costumam melhorar a visibilidade.”"
            },
            {
              "t": "quiz",
              "q": "14% de desconto com 6% de rebate, contra 8% sem rebate. O que é verdade?",
              "options": [
                "O segundo custa menos, porque tem desconto menor.",
                "Os dois custam 8% de verdade, mas o primeiro tem rebate.",
                "O primeiro custa 20%, a soma do desconto com o rebate.",
                "Não dá pra comparar, porque os descontos são diferentes."
              ],
              "answer": [
                1
              ],
              "why": "14% − 6% = 8%. O desconto menos o rebate dá o custo efetivo, igual nos dois casos."
            },
            {
              "t": "recap",
              "items": [
                "Ordem: rebate, depois campanha mais visível, depois nenhuma",
                "Custo efetivo = desconto menos rebate",
                "Campanha com rebate costuma dar mais visibilidade",
                "Se nada cabe na faixa, o anúncio fica fora",
                "O bot nunca fura a mínima"
              ]
            }
          ]
        },
        {
          "id": "l5-3",
          "title": "Por que perdeu o catálogo?",
          "minutes": 7,
          "goal": "Explicar ao seller por que um anúncio perde o catálogo e o que dá pra fazer.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🏆",
              "title": "Perdeu o catálogo? Descubra o motivo",
              "text": "Você vai ver os dois motivos mais comuns pra um anúncio perder o catálogo e o que propor ao seller."
            },
            {
              "t": "big",
              "emoji": "🔍",
              "html": "Perdeu o catálogo? Quase sempre é por <b>um de dois motivos</b>.",
              "sub": "Antes, três palavrinhas pra ninguém se perder."
            },
            {
              "t": "jargon",
              "term": "Catálogo",
              "means": "A página única de um produto, em que os anúncios <b>disputam</b> quem ganha.",
              "ex": "Vários sellers vendem o mesmo tênis: todos competem no mesmo catálogo."
            },
            {
              "t": "jargon",
              "term": "MLB",
              "means": "O código de <b>um anúncio</b> no Mercado Livre.",
              "ex": "O seller pode ter dois MLB diferentes pro mesmo produto: são dois anúncios."
            },
            {
              "t": "jargon",
              "term": "SKU",
              "means": "O código do <b>produto</b> no cadastro do seller. Mesmo SKU quer dizer mesmo produto.",
              "ex": "Dois MLB com o mesmo SKU: dois anúncios do mesmo produto."
            },
            {
              "t": "video",
              "id": "0z4xRKgOMEQ",
              "title": "Prioridade no catálogo",
              "dur": "3:36",
              "note": "Foque em como o bot decide qual anúncio disputar."
            },
            {
              "t": "p",
              "title": "Motivo 1: prioridade no catálogo",
              "html": "O seller tem <b>outro anúncio do mesmo catálogo</b> (mesmo SKU, outro MLB) que já ganha. Disputar contra si mesmo só come margem. Então o bot mantém o anúncio no preço atual."
            },
            {
              "t": "conta",
              "title": "Brigar contra si mesmo",
              "rows": [
                [
                  "Preço do anúncio A, que já ganha",
                  "R$ 100,00"
                ],
                [
                  "Custos da venda (produto, taxas, frete)",
                  "− R$ 90,00",
                  "neg"
                ],
                [
                  "Margem com A ganhando",
                  "R$ 10,00",
                  "pos"
                ],
                [
                  "Preço do B, se baixasse pra disputar",
                  "R$ 95,00"
                ],
                [
                  "Margem com B ganhando",
                  "R$ 5,00"
                ]
              ],
              "total": [
                "Margem perdida por unidade",
                "R$ 5,00"
              ],
              "note": "Conta simplificada: o seller vende uma unidade do mesmo jeito e ainda perde margem."
            },
            {
              "t": "big",
              "emoji": "🙅",
              "html": "Disputar contra si mesmo só <b>come margem</b>.",
              "sub": "Por isso o bot mantém o anúncio no preço atual."
            },
            {
              "t": "video",
              "id": "KrAjBngfVTw",
              "title": "Não há margem pra ganhar catálogo",
              "dur": "2:50",
              "note": "Veja como o painel indica a falta de margem."
            },
            {
              "t": "jargon",
              "term": "Margem mínima",
              "means": "O <b>menor retorno</b> que o seller aceita em cada venda. O bot não passa dela, nem pra ganhar catálogo.",
              "ex": "Mínima de 10%: se pra ganhar a margem cairia pra 6%, o bot não segue."
            },
            {
              "t": "p",
              "title": "Motivo 2: não há margem pra ganhar",
              "html": "O preço necessário pra vencer deixaria a margem <b>abaixo da mínima</b>. O bot não passa da mínima pra ganhar. A decisão passa a ser do seller."
            },
            {
              "t": "conta",
              "title": "Sem margem pra ganhar",
              "rows": [
                [
                  "Preço necessário pra ganhar",
                  "R$ 100,00"
                ],
                [
                  "Custos da venda",
                  "− R$ 94,00",
                  "neg"
                ]
              ],
              "total": [
                "Margem pra ganhar",
                "6%"
              ],
              "note": "A mínima do seller é 10%. Como 6% é menos que 10%, o bot não segue."
            },
            {
              "t": "quiz",
              "q": "Um anúncio tem margem pra ganhar de 6% e mínima de 10%. Como interpretar?",
              "options": [
                "Defeito da PriceBot, e o time precisa corrigir esse anúncio.",
                "Não tem margem pra ganhar na regra do seller: o bot não fura a mínima.",
                "O anúncio está só aguardando a próxima quarta-feira pra atualizar.",
                "O seller precisa trocar esse anúncio de categoria no marketplace."
              ],
              "answer": [
                1
              ],
              "why": "A regra de margem manda. As saídas dependem de decisões do seller."
            },
            {
              "t": "jargon",
              "term": "Rebate",
              "means": "Dinheiro que o Mercado Livre <b>devolve ao seller</b> em certas campanhas. Ele sobe a margem do anúncio.",
              "ex": "Numa campanha com rebate, parte do desconto volta pro bolso do seller."
            },
            {
              "t": "list",
              "title": "O que o assessor pode propor",
              "items": [
                "Procurar <b>campanha com rebate</b>: ela eleva a margem e aproxima o preço de ganhar.",
                "Conversar sobre <b>rever custo ou preço base</b> do produto.",
                "Se o seller topar perder margem pra ranquear: mínima menor, com limite combinado."
              ]
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Mínima menor tem condição",
              "html": "Ajustar a mínima do anúncio (até pra negativa) só com a opção habilitada e um limite combinado com o seller. É escolha dele, nunca atalho do assessor."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "O que não fazer",
              "html": "Alterar o custo pra “fechar a conta” ou desligar o PMA (a trava de preço mínimo) sem avisar o seller. A confiança é o ativo da assessoria."
            },
            {
              "t": "quiz",
              "q": "Marque as ações legítimas quando um anúncio importante não tem margem pra ganhar.",
              "multi": true,
              "options": [
                "Procurar uma campanha com rebate pra subir a margem.",
                "Conversar com o seller sobre custo ou preço base.",
                "Combinar uma mínima menor pra um objetivo, com limite.",
                "Alterar o custo no painel pra fechar a conta do anúncio."
              ],
              "answer": [
                0,
                1,
                2
              ],
              "why": "Mexer no custo sem alinhar distorce a margem e quebra a confiança."
            },
            {
              "t": "recap",
              "items": [
                "Motivo 1: outro anúncio do mesmo SKU já ganha",
                "Motivo 2: ganhar deixaria a margem abaixo da mínima",
                "Opções: rebate, rever custo ou preço, mínima menor com limite",
                "Nunca altere custo nem desligue o PMA sem avisar"
              ]
            }
          ]
        },
        {
          "id": "l5-4",
          "title": "Não entrou na campanha? Checklist",
          "minutes": 7,
          "goal": "Conseguir seguir um checklist de diagnóstico quando um anúncio não entra numa campanha.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🔎",
              "title": "Não entrou na campanha? Siga o checklist",
              "text": "Você leva um checklist de 5 perguntas pra descobrir, em ordem, por que um anúncio ficou fora da campanha."
            },
            {
              "t": "video",
              "id": "eiW1iLxDjzA",
              "title": "Promoção não permitida",
              "dur": "3:01",
              "note": "Assista e compare com o checklist dos próximos cards."
            },
            {
              "t": "big",
              "emoji": "🤔",
              "html": "O seller pergunta: <b>“por que meu anúncio não entrou?”</b>",
              "sub": "Quase sempre a resposta está em um de 5 pontos. Siga a ordem."
            },
            {
              "t": "jargon",
              "term": "Precificação automática",
              "means": "A chave que liga o bot pra <b>cuidar do preço</b> do anúncio e entrar em campanhas sozinho.",
              "ex": "Chave desligada: o bot nem olha pro anúncio."
            },
            {
              "t": "jargon",
              "term": "Elegível",
              "means": "Que cumpre as regras pra <b>poder entrar</b> na campanha. Cada campanha também tem data.",
              "ex": "Anúncio elegível, mas com a campanha já encerrada: não dá pra entrar."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Precificação automática ligada?",
                  "html": "Desligada, o bot não gerencia o anúncio."
                },
                {
                  "title": "Campanha elegível e dentro da data?",
                  "html": "No detalhe do anúncio, cada campanha mostra data e margem."
                }
              ]
            },
            {
              "t": "jargon",
              "term": "Faixa de margem",
              "means": "O espaço entre a margem <b>mínima</b> (menor que o seller aceita) e a <b>objetiva</b> (a que ele quer ter).",
              "ex": "Mínima de 10% e objetiva de 20%: campanha que deixa 17% cabe na faixa."
            },
            {
              "t": "conta",
              "title": "A margem cabe na faixa?",
              "rows": [
                [
                  "Margem mínima",
                  "10%"
                ],
                [
                  "Margem objetiva",
                  "20%"
                ],
                [
                  "Margem que a campanha deixaria",
                  "17%",
                  "pos"
                ]
              ],
              "total": [
                "Dentro da faixa?",
                "Sim"
              ],
              "note": "17% está entre 10% e 20%. Esse filtro passou. Se passou, olhe os próximos."
            },
            {
              "t": "jargon",
              "term": "PMA",
              "means": "Preço Mínimo Anunciado: o preço que o anúncio <b>nunca ultrapassa pra baixo</b>, mesmo com a margem boa.",
              "ex": "PMA de R$ 60,00: campanha que levaria o preço a R$ 59,79 não entra."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "A margem cabe na faixa?",
                  "html": "Compare a margem que a campanha deixaria com a faixa configurada."
                },
                {
                  "title": "O PMA bloqueia?",
                  "html": "Se o preço da campanha ficar abaixo do PMA, o bot não entra."
                },
                {
                  "title": "Outro anúncio ganhando o catálogo?",
                  "html": "Se outro MLB (anúncio) do mesmo SKU (produto) já ganha, o bot não disputa contra o seller."
                }
              ]
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Rede de segurança temporária",
              "html": "Durante uma reprecificação, vários anúncios podem ficar fora de campanha por causa da mínima. Um assessor manteve, no Mercado Livre, uma campanha mínima de 5% pra eles não ficarem sem promoção. Não é o ideal, mas serve de transição."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Pedido de desconto fixo",
              "html": "Seller quer um MLB com desconto fixo de 5%? Alinhe por margem. Se for caso pontual, desligue a automação daquele anúncio, configure a promoção e lembre: o bot não vai gerenciá-lo."
            },
            {
              "t": "say",
              "title": "Fala assim com o seller",
              "html": "“Vou rodar o checklist: bot ligado, campanha elegível, margem na faixa, PMA e catálogo. Já te digo exatamente onde o anúncio travou.”"
            },
            {
              "t": "sim",
              "kind": "diag",
              "title": "Faça o diagnóstico",
              "intro": "Leia o que o painel mostra e aponte o motivo mais provável."
            },
            {
              "t": "quiz",
              "q": "Margem de 20%, precificação ligada e uma campanha que daria 17% (mínima 10%). Mesmo assim o bot não entrou. O que investigar?",
              "options": [
                "A mínima está alta demais, então o bot recusou a campanha.",
                "Elegibilidade, data, PMA e outro MLB do mesmo SKU ganhando o catálogo.",
                "A margem de 17% é proibida, porque ficou abaixo dos 20% de hoje.",
                "O bot só entra em campanha no fim do mês, nunca antes disso."
              ],
              "answer": [
                1
              ],
              "why": "17% está dentro da faixa. O motivo está em outro filtro."
            },
            {
              "t": "quiz",
              "q": "Qual é a primeira pergunta do checklist?",
              "options": [
                "O PMA está ativado nas configurações da plataforma?",
                "A precificação automática do anúncio está ligada?",
                "Existe rebate disponível nessa campanha pro anúncio?",
                "O seller aprovou a participação nessa campanha?"
              ],
              "answer": [
                1
              ],
              "why": "Se o anúncio estiver desligado, nada mais importa."
            },
            {
              "t": "recap",
              "items": [
                "Ordem: ligada, elegível, faixa, PMA, catálogo",
                "Desligado, nada mais importa",
                "Margem de 17% dentro da faixa não garante entrada",
                "Desconto fixo: alinhe por margem ou desligue o anúncio"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "m6",
      "n": 7,
      "title": "Vender, reter e ensinar",
      "tagline": "Como explicar a PriceBot, defender seu valor e ensinar outra pessoa.",
      "outcome": "Conduzir a conversa de valor com o seller e ensinar a ferramenta a um colega.",
      "lessons": [
        {
          "id": "l6-1",
          "title": "Vencendo a objeção da planilha",
          "minutes": 5,
          "goal": "Saber responder \"minha planilha já diz a minha margem\" e pedir o custo ao seller.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "💬",
              "title": "A planilha do seller não fecha",
              "text": "O seller diz que a planilha já mostra a margem. Você vai aprender a responder sem brigar e a pedir o custo."
            },
            {
              "t": "big",
              "emoji": "🗣️",
              "html": "“Minha planilha já diz a minha <b>margem</b>.”",
              "sub": "Calma. Dá pra responder sem discutir. Bora ver."
            },
            {
              "t": "p",
              "title": "Como a planilha calcula",
              "html": "O seller calcula a margem <em>antes</em> de vender. Ele pega o custo, abate as taxas previstas e chega num número. O problema vem depois, quando a venda acontece de verdade."
            },
            {
              "t": "callout",
              "tone": "exemplo",
              "title": "O furo da planilha",
              "html": "Ao longo do mês, as taxas e principalmente o <b>frete</b> mudam a cada venda, mesmo no mesmo SKU (o código de cada produto). A margem prevista não fecha, e o seller pode estar no prejuízo sem saber."
            },
            {
              "t": "conta",
              "title": "Na planilha (o que foi previsto)",
              "rows": [
                [
                  "Preço de venda",
                  "R$ 100,00"
                ],
                [
                  "Custo do produto",
                  "- R$ 60,00",
                  "neg"
                ],
                [
                  "Taxas previstas",
                  "- R$ 20,00",
                  "neg"
                ]
              ],
              "total": [
                "Sobra prevista",
                "R$ 20,00 (20%)"
              ],
              "note": "Valores fictícios, só pra ilustrar."
            },
            {
              "t": "conta",
              "title": "Na venda real (o que aconteceu)",
              "rows": [
                [
                  "Preço de venda",
                  "R$ 100,00"
                ],
                [
                  "Custo do produto",
                  "- R$ 60,00",
                  "neg"
                ],
                [
                  "Taxas previstas",
                  "- R$ 20,00",
                  "neg"
                ],
                [
                  "Frete acima do previsto",
                  "- R$ 12,00",
                  "neg"
                ]
              ],
              "total": [
                "Sobra real",
                "R$ 8,00 (8%)"
              ],
              "note": "Mesmo produto, mesma planilha. O frete mudou e a margem despencou."
            },
            {
              "t": "jargon",
              "term": "API",
              "means": "O canal que puxa os dados <b>direto da conta</b> do Mercado Livre, venda a venda, sem ninguém digitar.",
              "ex": "É como olhar o extrato do banco, e não o que você anotou no caderno."
            },
            {
              "t": "jargon",
              "term": "Nexus",
              "means": "O sistema onde fica a <b>rentabilidade</b> da conta do seller. Os dados vêm direto da API, venda a venda.",
              "ex": "A PriceBot usa esse mesmo dado cru. É isso que chama a atenção do seller."
            },
            {
              "t": "big",
              "emoji": "🔍",
              "html": "A planilha mostra o que ele <b>previu</b>. O Nexus mostra o que <b>aconteceu</b>."
            },
            {
              "t": "say",
              "title": "Resposta para “na minha planilha eu tenho 20%”",
              "html": "“A planilha mostra a margem que você previu. O Nexus mostra a que aconteceu, venda a venda: frete e taxas oscilam e o número nem sempre fecha. Com o custo aqui dentro, eu te mostro o furo, produto a produto.”"
            },
            {
              "t": "list",
              "title": "4 motivos pra pedir o custo",
              "items": [
                "Sem custo, ninguém descobre onde está o gargalo de margem.",
                "Com custo, dá pra precificar em massa (vários produtos de uma vez).",
                "O seller vê quanto gasta em taxas, frete e Ads em cada produto.",
                "A PriceBot só entra em promoção se souber a margem."
              ]
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Regra de bolso",
              "html": "Nunca diga que a planilha do seller está errada. Mostre que ela é a <b>previsão</b> e que o dado da API é o <b>resultado</b>. Argumento concreto não ataca ninguém."
            },
            {
              "t": "quiz",
              "q": "Qual é o melhor contra-argumento para \"minha planilha já mostra a margem\"?",
              "options": [
                "“Sua planilha está errada, então é melhor você parar de usá-la.”",
                "A margem real oscila, sobretudo com o frete, e a API mostra venda a venda.",
                "“Planilha não é confiável, o certo é confiar só no nosso sistema.”",
                "“Isso já está no contrato, então você precisa mandar o custo.”"
              ],
              "answer": [
                1
              ],
              "why": "O argumento é concreto e não ataca o seller. Você mostra o furo com dado, sem discutir."
            },
            {
              "t": "recap",
              "items": [
                "Planilha mostra a margem prevista",
                "Frete e taxas mudam venda a venda",
                "A API mostra a margem que aconteceu",
                "Sem o custo, ninguém acha o furo"
              ]
            }
          ]
        },
        {
          "id": "l6-2",
          "title": "Margem primeiro, desconto depois",
          "minutes": 6,
          "goal": "Alinhar com o seller a margem como compromisso e entender o TACoS.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🎯",
              "title": "Fale de margem, não de desconto",
              "text": "Você vai trocar “quanto de desconto?” por “qual margem você quer?” e entender o que é TACoS."
            },
            {
              "t": "compare",
              "left": {
                "title": "Antes da PriceBot",
                "tone": "bad",
                "items": [
                  "“Vou aplicar 10% de desconto nesse anúncio”",
                  "A conversa começa pelo percentual"
                ]
              },
              "right": {
                "title": "Agora",
                "tone": "good",
                "items": [
                  "“Qual margem você quer ter?”",
                  "O percentual vira consequência"
                ]
              }
            },
            {
              "t": "big",
              "emoji": "⚖️",
              "html": "Mesmo desconto, <b>resultados diferentes</b>."
            },
            {
              "t": "conta",
              "title": "Dois anúncios com 10% de desconto",
              "rows": [
                [
                  "Desconto que o cliente vê (nos dois)",
                  "10%"
                ],
                [
                  "Anúncio 1: Mercado Livre paga",
                  "0%"
                ],
                [
                  "Anúncio 1: o seller paga",
                  "10%",
                  "neg"
                ],
                [
                  "Anúncio 2: Mercado Livre paga",
                  "5%",
                  "pos"
                ],
                [
                  "Anúncio 2: o seller paga",
                  "5%",
                  "neg"
                ]
              ],
              "total": [
                "Anúncio 2 custa ao seller",
                "5 pontos a menos"
              ],
              "note": "O Mercado Livre pode subsidiar (pagar) parte do desconto. Números fictícios."
            },
            {
              "t": "p",
              "title": "Desconto maior pode render mais",
              "html": "Às vezes o desconto que o bot aplica é <b>maior</b> e, mesmo assim, a rentabilidade do seller fica <b>melhor</b>. Por isso olhar só pro percentual engana. O que importa é a margem que sobra."
            },
            {
              "t": "big",
              "emoji": "🍚",
              "html": "A história do <b>arroz</b>.",
              "sub": "Um supermercado queima a margem de um produto de propósito."
            },
            {
              "t": "p",
              "title": "O supermercado e o arroz",
              "html": "O mercado faz uma super promoção no arroz e perde margem ali. Mas você não leva só arroz. Leva outros produtos, com margem maior. No fim, o mercado ganhou mais."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Regra de bolso",
              "html": "No marketplace é igual. O que importa é o <b>lucro entregue no fim do mês</b>, e não a margem de um anúncio isolado."
            },
            {
              "t": "quiz",
              "q": "Qual é a ideia do exemplo do arroz?",
              "options": [
                "Toda promoção dá prejuízo e deve ser evitada ao máximo.",
                "Abrir mão de margem num item pode aumentar o lucro total do mês.",
                "Todos os produtos precisam ter exatamente o mesmo preço.",
                "O seller deve vender um produto só, o de maior margem."
              ],
              "answer": [
                1
              ],
              "why": "A lógica é olhar o resultado total da conta, dentro das margens alinhadas com o seller."
            },
            {
              "t": "jargon",
              "term": "TACoS",
              "means": "O <b>percentual do faturamento</b> que o seller separa pra publicidade (Ads). Esse valor é combinado entre vocês.",
              "ex": "Uma franquia de fast food manda uma parte fixa do faturamento pro fundo de publicidade. Mesma lógica."
            },
            {
              "t": "p",
              "title": "TACoS na prática",
              "html": "O percentual é combinado de comum acordo com o seller. A estratégia de como usar esse investimento fica com quem conduz o projeto: a assessoria."
            },
            {
              "t": "quiz",
              "q": "O que é TACoS na prática da assessoria?",
              "options": [
                "A comissão que o Mercado Livre cobra em cima dos Ads do seller.",
                "O % do faturamento que vai pra publicidade, combinado com o seller.",
                "O desconto máximo que uma promoção pode ter no anúncio.",
                "O preço mínimo que cada SKU pode ter no anúncio do seller."
              ],
              "answer": [
                1
              ],
              "why": "É o acordo que permite ao assessor distribuir o investimento em Ads com estratégia."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Seller exigente com cada anúncio",
              "html": "Tem seller que cobra rentabilidade alta em cada produto. Com ele, o caminho é a <b>margem mínima por SKU</b>. A conversa de lucro total também vale, desde que a expectativa esteja alinhada."
            },
            {
              "t": "say",
              "title": "Fala assim com o seller exigente",
              "html": "“Vamos combinar uma margem mínima pra cada produto. E, se fizer sentido pra você, a gente também olha o lucro total da conta no fim do mês. Combinado assim?”"
            },
            {
              "t": "recap",
              "items": [
                "Fale de margem, o desconto é consequência",
                "Desconto maior pode render mais ao seller",
                "O que vale é o lucro do mês",
                "TACoS é o % do faturamento pra Ads"
              ]
            }
          ]
        },
        {
          "id": "l6-3",
          "title": "Mostrar valor toda semana",
          "minutes": 6,
          "goal": "Criar o hábito de provar valor toda semana e usar a PriceBot em retenção e reversão.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "📈",
              "title": "Prove seu valor toda semana",
              "text": "Seller só fica quando enxerga resultado. Você vai criar o hábito semanal e usar a PriceBot pra segurar quem pensa em sair."
            },
            {
              "t": "big",
              "emoji": "🤝",
              "html": "Trazer o seller é com o comercial. <b>Vender a assessoria todo dia</b> é com você."
            },
            {
              "t": "p",
              "title": "Valor invisível não vale",
              "html": "Se o valor que você entrega não está visível e bem explicado, o serviço deixa de fazer sentido pro cliente. Por isso o resultado precisa chegar até o seller toda semana."
            },
            {
              "t": "jargon",
              "term": "Rebate",
              "means": "A parte do desconto que o <b>Mercado Livre devolve</b> ao seller quando ele entra numa campanha.",
              "ex": "É um resultado em reais que o seller pode conferir no portal."
            },
            {
              "t": "callout",
              "tone": "exemplo",
              "title": "Um rebate que o seller confere",
              "html": "Num exemplo do treinamento, uma conta tinha cerca de R$ 9 mil de rebate no período. Era um resultado concreto. <em>Use pra entender a lógica, e não como promessa.</em>"
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Entre na conta",
                  "html": "Uma vez por semana, no mínimo."
                },
                {
                  "title": "Olhe rebate e faturamento",
                  "html": "7 e 30 dias, em reais e em percentual."
                },
                {
                  "title": "Mande o resultado",
                  "html": "Print no grupo: “só esta semana a gente conseguiu R$ X de rebate”."
                },
                {
                  "title": "Reforce nas contas boas",
                  "html": "Não guarde número bom pra reunião mensal."
                }
              ]
            },
            {
              "t": "sim",
              "kind": "valor",
              "title": "Qual número vai na mensagem da semana?",
              "intro": "Treine a leitura do rebate e do faturamento no portal. É esse resultado que você manda pro seller."
            },
            {
              "t": "quiz",
              "q": "Qual hábito o treinamento recomenda?",
              "options": [
                "Mostrar o rebate só na reunião mensal, com calma.",
                "Entrar na conta toda semana e mandar o resultado.",
                "Esperar o seller perguntar pelo resultado da conta.",
                "Mostrar os números só quando o valor for alto."
              ],
              "answer": [
                1
              ],
              "why": "Valor se constrói toda semana, e não só quando há reunião ou reclamação."
            },
            {
              "t": "jargon",
              "term": "Retenção",
              "means": "<b>Segurar</b> o seller que está pensando em sair da assessoria.",
              "ex": "O seller vê o rebate em reais toda semana e repensa a saída."
            },
            {
              "t": "jargon",
              "term": "Reversão",
              "means": "<b>Trazer de volta</b> o seller que já saiu da assessoria.",
              "ex": "Quem saiu percebe o que perdeu: a ferramenta e o resultado que ela entregava."
            },
            {
              "t": "p",
              "title": "Por que a PriceBot ajuda aqui",
              "html": "A PriceBot é uma ferramenta cara e difícil de contratar por conta própria. Quem pensa em sair precisa saber que, fora do ecossistema Mamba, perde esse benefício."
            },
            {
              "t": "p",
              "title": "Quem sente mais",
              "html": "Sellers com muito catálogo (anúncios que disputam a mesma página de produto) percebem isso rápido. Em alguns casos, a PriceBot ajudou a segurar quem queria sair e a trazer de volta quem tinha saído."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Sem promessa de número",
              "html": "O rebate depende das campanhas disponíveis, da categoria e do interesse comercial do Mercado Livre. Mostre o que já aconteceu e explique o mecanismo. <b>Nunca prometa valor futuro.</b>"
            },
            {
              "t": "quiz",
              "q": "Qual postura evita criar expectativa errada?",
              "options": [
                "Prometer R$ 10 mil de rebate por mês para animar o seller.",
                "Explicar como funciona e mostrar números reais, sem prometer.",
                "Dizer que o faturamento vai dobrar com a PriceBot.",
                "Evitar falar de rebate para não criar expectativa."
              ],
              "answer": [
                1
              ],
              "why": "O rebate depende de fatores que a ferramenta não controla."
            },
            {
              "t": "recap",
              "items": [
                "Entre na conta toda semana",
                "Mande o resultado ao seller, em reais",
                "A PriceBot ajuda a reter e a reverter",
                "Mostre o que aconteceu, nunca prometa futuro"
              ]
            }
          ]
        },
        {
          "id": "l6-4",
          "title": "Como ensinar a PriceBot",
          "minutes": 6,
          "goal": "Ensinar a ferramenta a um colega ou seller e checar se a pessoa realmente aprendeu.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🎓",
              "title": "Ensine a PriceBot do jeito certo",
              "text": "Você vai aprender a ordem certa de explicar, a regra dos três termos e como checar se a pessoa aprendeu de verdade."
            },
            {
              "t": "big",
              "emoji": "🧠",
              "html": "Saber usar é uma coisa. <b>Saber explicar</b> é outra.",
              "sub": "A ordem em que você explica muda quanto a pessoa aprende."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "1. O problema",
                  "html": "Preço e promoção na mão não escalam e corroem a margem."
                },
                {
                  "title": "2. A regra",
                  "html": "Faixa de margem (mínima e objetiva) e trava de preço (PMA)."
                },
                {
                  "title": "3. Um exemplo com números",
                  "html": "Desconto de 10% com 2% de rebate vira 8% efetivo."
                }
              ]
            },
            {
              "t": "conta",
              "title": "O exemplo do passo 3",
              "rows": [
                [
                  "Desconto que o cliente vê",
                  "10%"
                ],
                [
                  "Rebate que volta pro seller",
                  "- 2%",
                  "pos"
                ]
              ],
              "total": [
                "Desconto efetivo (o seller sente)",
                "8%"
              ],
              "note": "Rebate é a parte do desconto que o Mercado Livre devolve."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "4. O que a pessoa faz",
                  "html": "Custos, setup (a planilha que o time da PriceBot usa) e grant (o link em que o seller autoriza)."
                },
                {
                  "title": "5. O painel",
                  "html": "Só no final. Quem entende o porquê aprende o painel bem mais rápido."
                }
              ]
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Regra de ouro",
              "html": "No máximo <b>três termos novos por conversa</b>. Dê o nome em português primeiro (“margem mínima”) e a etiqueta técnica depois."
            },
            {
              "t": "compare",
              "left": {
                "title": "Só traduziu",
                "tone": "bad",
                "items": [
                  "Começa pela sigla técnica",
                  "Só funciona pra quem já conhece o termo",
                  "Muitos termos novos de uma vez"
                ]
              },
              "right": {
                "title": "Ensinou",
                "tone": "good",
                "items": [
                  "Nome em português primeiro",
                  "Etiqueta técnica depois",
                  "No máximo três termos novos"
                ]
              }
            },
            {
              "t": "big",
              "emoji": "❓",
              "html": "Perguntar “entendeu?” <b>não mede nada</b>.",
              "sub": "Peça duas coisas pra ter certeza."
            },
            {
              "t": "list",
              "title": "Como saber se aprendeu",
              "items": [
                "<b>Explica de volta</b> com as próprias palavras o caminho do seller, do custo ao grant.",
                "Resolve um <b>caso novo</b> sem consultar, como um anúncio abaixo da margem mínima."
              ]
            },
            {
              "t": "jargon",
              "term": "Modelo mental",
              "means": "O jeito como a pessoa <b>imagina</b> que a ferramenta funciona, por trás dos menus.",
              "ex": "Achar que o bot altera o preço base é um modelo mental errado."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Erro de detalhe x erro de modelo",
              "html": "Errou um detalhe? Anote e siga. Errou o modelo mental? <b>Corrija antes de avançar</b>, senão o erro vai crescendo."
            },
            {
              "t": "quiz",
              "q": "Qual é a melhor forma de verificar se um colega aprendeu?",
              "options": [
                "Perguntar “entendeu?” no fim da explicação toda.",
                "Pedir que explique de volta e resolva um caso novo.",
                "Mandar a pessoa reler o material mais uma vez.",
                "Cobrar de cabeça o nome de todos os menus."
              ],
              "answer": [
                1
              ],
              "why": "Entender é conseguir explicar e aplicar numa situação nova."
            },
            {
              "t": "p",
              "title": "Delegar também é jogo",
              "html": "Em carteiras grandes (muitos sellers), é comum delegar ao time da PriceBot a inclusão de anúncios novos e a correção de custos. Assim você foca em estratégia e relacionamento. Isso é eficiência, e não falta de domínio."
            },
            {
              "t": "quiz",
              "q": "Qual é a melhor ordem para explicar a PriceBot a alguém de fora?",
              "options": [
                "Menus do painel, depois a regra e por fim o problema.",
                "Problema, regra, exemplo com números, o que fazer e painel.",
                "Preço da ferramenta primeiro e o painel logo depois.",
                "Grant, planilha de custos e só depois o painel."
              ],
              "answer": [
                1
              ],
              "why": "O porquê e a regra vêm primeiro. O painel entra quando a pessoa já tem um modelo mental."
            },
            {
              "t": "recap",
              "items": [
                "Ordem: problema, regra, exemplo, tarefa, painel",
                "No máximo três termos novos por conversa",
                "Peça pra explicar de volta e resolver caso novo",
                "Modelo mental errado se corrige na hora"
              ]
            }
          ]
        }
      ]
    }
  ]
});

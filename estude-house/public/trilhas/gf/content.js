/* Conteúdo da trilha Grade de Formação Mamba (assessor e gestor de performance em marketplaces), em formato Stories.
   Cada item de `blocks` é um card de tela cheia. Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, recap, quiz, sim
   e os visuais chart, flow, table, tree, timeline, stairs, anno e lab (veja GUIA-GRADE-DE-FORMACAO.md).
   Todos os números das contas e dos gráficos são de exemplo. Regras de plataforma, taxas e impostos mudam: a fonte final é a documentação oficial e o contador do cliente.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
 "id": "gf",
 "title": "Grade de Formação Mamba",
 "finalScope": "final-gf",
 "tag": "Formação",
 "tagline": "A formação completa de assessor e gestor de performance em marketplaces: do básico ao plano de conta.",
 "subtitle": "Mercado Livre e Shopee, do zero ao plano de 90 dias, em stories.",
 "modules": [
  {
   "id": "gf-m1",
   "n": 1,
   "title": "Comece por aqui",
   "tagline": "Os 4 níveis, o formato dos módulos e a imersão de 15 dias: o mapa da sua formação.",
   "outcome": "Saber onde você está na escada da Mamba, como cada módulo funciona e como a imersão e a nota são montadas.",
   "lessons": [
    {
     "id": "gf-l1-1",
     "title": "Os 4 níveis da Mamba",
     "minutes": 6,
     "goal": "Saber o que cada um dos 4 níveis (N0 a N3) entrega e como se prova que subiu de nível.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🐍",
       "title": "Os 4 níveis da Mamba",
       "text": "Em 6 minutos você vê onde começa, onde pode chegar e o que precisa provar pra subir de nível."
      },
      {
       "t": "big",
       "emoji": "🎯",
       "html": "Não é só saber mexer no <b>painel</b>.",
       "sub": "Quem passa por aqui precisa operar, analisar, explicar e decidir."
      },
      {
       "t": "flow",
       "title": "O que você vai saber fazer",
       "items": [
        {
         "icon": "🛠️",
         "title": "Operar",
         "text": "Mexer na conta e rodar a rotina"
        },
        {
         "icon": "🔍",
         "title": "Analisar",
         "text": "Entender o porquê de cada número"
        },
        {
         "icon": "💬",
         "title": "Explicar",
         "text": "Contar pro seller de um jeito simples"
        },
        {
         "icon": "⚖️",
         "title": "Decidir",
         "text": "Escolher com base no dado da conta"
        }
       ],
       "caption": "Seller é o vendedor que usa a Mamba. Só operar não basta: o seller precisa entender e confiar em você."
      },
      {
       "t": "jargon",
       "term": "Marketplace",
       "means": "Site onde <b>vários vendedores</b> vendem no mesmo lugar, e o site fica com uma parte de cada venda.",
       "ex": "Mercado Livre e Shopee são os dois marketplaces que você vai aprender a operar."
      },
      {
       "t": "stairs",
       "title": "A escada da Mamba",
       "items": [
        {
         "tag": "N0",
         "title": "Trainee",
         "text": "Zero conhecimento, bora do começo: fala a língua do mercado."
        },
        {
         "tag": "N1",
         "title": "Assessor",
         "text": "Mão na massa com supervisão: opera conta, ajusta anúncio, roda rotina."
        },
        {
         "tag": "N2",
         "title": "Gestor de Performance",
         "text": "Dono do resultado da carteira (suas contas): decide anúncio pago, preço, promoção e logística."
        },
        {
         "tag": "N3",
         "title": "Estrategista",
         "text": "Cabeça de jogo: monta plano estratégico, faz análise complexa e forma gente."
        }
       ]
      },
      {
       "t": "table",
       "title": "Entrega e prova final de cada nível",
       "head": [
        "Nível",
        "O que entrega",
        "Prova final"
       ],
       "rows": [
        [
         "N0 Trainee",
         "Entende o jogo e fala a língua do mercado",
         "Explicar uma venda do clique ao repasse"
        ],
        [
         "N1 Assessor",
         "Opera conta, ajusta anúncio, roda rotina e monta relatório",
         "Rodar a rotina semanal supervisionada e entregar relatório"
        ],
        [
         "N2 Gestor",
         "Cuida da carteira e decide anúncios pagos, preço, promoção, logística",
         "Assumir uma conta e apresentar plano de 90 dias"
        ],
        [
         "N3 Estrategista",
         "Monta plano estratégico, faz análise complexa e forma gente",
         "Plano estratégico complexo + formar e avaliar um N1"
        ]
       ],
       "hl": 2,
       "caption": "Repasse é o dinheiro da venda que o marketplace paga pro vendedor. Cada nível termina numa prova prática."
      },
      {
       "t": "timeline",
       "title": "Tempo aproximado de cada nível",
       "items": [
        {
         "when": "3 a 4 sem.",
         "label": "N0 Trainee",
         "text": "Aprende o básico do jogo",
         "tone": "sky"
        },
        {
         "when": "2 a 3 meses",
         "label": "N1 Assessor",
         "text": "Opera com supervisão",
         "tone": "mint"
        },
        {
         "when": "4 a 6 meses",
         "label": "N2 Gestor de Performance",
         "text": "Assume a conta e o plano de 90 dias",
         "tone": "violet"
        },
        {
         "when": "Contínuo",
         "label": "N3 Estrategista",
         "text": "Sem data pra acabar",
         "tone": "gold"
        }
       ]
      },
      {
       "t": "quiz",
       "q": "Um colega cuida da carteira de clientes, decide anúncio pago, preço, promoção e logística, e responde pelo resultado. Em qual nível ele está?",
       "options": [
        "N1, Assessor: opera a conta e roda a rotina com supervisão",
        "N2, Gestor de Performance: dono do resultado e decisor da carteira",
        "N3, Estrategista: monta o plano estratégico e forma outras pessoas",
        "N0, Trainee: entende como o marketplace funciona e fala a língua"
       ],
       "answer": [
        1
       ],
       "why": "N2 é o Gestor de Performance: cuida da carteira e decide anúncio pago, preço, promoção e logística. O N1 opera com supervisão e o N3 monta plano estratégico e forma gente."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Achar que sobe de nível por <b>tempo de casa</b>. Na Mamba, nível novo só vem com entrega prática aprovada."
      },
      {
       "t": "compare",
       "left": {
        "title": "Sobe de nível",
        "tone": "good",
        "items": [
         "Entrega prática aprovada",
         "Prova final do nível aprovada",
         "Case em conta-teste ou conta anonimizada"
        ]
       },
       "right": {
        "title": "Não sobe de nível",
        "tone": "bad",
        "items": [
         "Só tempo de casa",
         "Decorar onde ficam os botões",
         "Pular etapa porque já entendeu a teoria"
        ]
       }
      },
      {
       "t": "steps",
       "title": "Mão na massa",
       "items": [
        {
         "title": "Escreva seu ponto de partida",
         "html": "Num doc, complete: “Hoje eu me vejo no nível ___ porque já consigo ___”."
        },
        {
         "title": "Faça a lista 3 e 3",
         "html": "Anote 3 coisas que você já faz sozinho e 3 que ainda não faz."
        },
        {
         "title": "Olhe a prova do próximo nível",
         "html": "Leia a prova final do nível de cima e anote o que falta pra chegar lá."
        }
       ]
      },
      {
       "t": "say",
       "emoji": "🗣️",
       "title": "Fala assim: onde eu estou",
       "html": "“Eu tô no N0, Trainee. Já consigo explicar como uma venda funciona. Meu próximo passo é provar a rotina semanal de uma conta, com supervisão, pra chegar no N1.”"
      },
      {
       "t": "quiz",
       "q": "O que você precisa saber fazer ao final da formação? Marque todas as corretas.",
       "multi": true,
       "options": [
        "Analisar o porquê por trás de cada número da conta",
        "Decorar a posição de cada botão dentro do painel",
        "Explicar pro seller, de um jeito simples e confiável",
        "Decidir com base no dado real que a conta mostra",
        "Seguir o benchmark mesmo quando a conta diz o contrário"
       ],
       "answer": [
        0,
        2,
        3
       ],
       "why": "A formação quer gente que opera, analisa, explica e decide. Decorar botão não basta, e benchmark é só referência: a verdade é o dado da conta."
      },
      {
       "t": "recap",
       "items": [
        "4 níveis: N0, N1, N2 e N3",
        "Meta: operar, analisar, explicar e decidir",
        "Cada nível tem uma prova prática final",
        "Nível novo só com entrega aprovada"
       ]
      }
     ]
    },
    {
     "id": "gf-l1-2",
     "title": "Como cada módulo funciona",
     "minutes": 7,
     "goal": "Entender o formato fixo de todo módulo, as regras de ouro e onde achar a fonte final das regras.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📚",
       "title": "Todo módulo segue a mesma receita",
       "text": "Em 7 minutos você vê as 5 partes de cada módulo, as regras de ouro e onde está a fonte final de cada regra."
      },
      {
       "t": "big",
       "emoji": "🧭",
       "html": "Todo módulo tem as mesmas <b>5 partes</b>.",
       "sub": "Sempre na mesma ordem, pra você nunca ficar perdido."
      },
      {
       "t": "flow",
       "title": "As 5 partes de todo módulo",
       "items": [
        {
         "icon": "💡",
         "title": "Por que importa",
         "text": "3 linhas de contexto real"
        },
        {
         "icon": "📖",
         "title": "Conteúdo",
         "text": "O que estudar"
        },
        {
         "icon": "🛠️",
         "title": "Mão na massa",
         "text": "Exercício em conta-teste ou conta anonimizada"
        },
        {
         "icon": "⚠️",
         "title": "Erro clássico",
         "text": "O tropeço que todo mundo comete"
        },
        {
         "icon": "✅",
         "title": "Check de saída",
         "text": "Pergunta que prova que você aprendeu"
        }
       ],
       "caption": "O check de saída é a prova de que você aprendeu de verdade, não só leu."
      },
      {
       "t": "jargon",
       "term": "Conta anonimizada",
       "means": "Conta real de cliente com <b>nome e dados escondidos</b>, pra ninguém ser identificado.",
       "ex": "Você analisa o caso de verdade, mas o cliente aparece só como “Seller A”."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Ler o conteúdo, achar que entendeu e <b>pular a mão na massa</b>. Entender no papel é uma coisa; fazer na conta é outra."
      },
      {
       "t": "big",
       "emoji": "🥇",
       "html": "Regra de ouro 1: nada de passar de nível <b>sem entrega prática</b>.",
       "sub": "Estudo sem entrega aprovada não conta pra subir."
      },
      {
       "t": "jargon",
       "term": "Benchmark",
       "means": "Número de <b>referência do mercado</b>, tipo a média da categoria ou o que um blog diz ser normal.",
       "ex": "“Margem boa é 20%” num blog é benchmark. Não é o dado da sua conta."
      },
      {
       "t": "big",
       "emoji": "📊",
       "html": "Regra de ouro 2: benchmark é <b>referência</b>. A verdade é o <b>dado da conta</b>.",
       "sub": "O que aquela loja vende, paga e lucra de fato."
      },
      {
       "t": "p",
       "title": "Uma venda de exemplo",
       "html": "Vamos olhar uma venda de R$ 100 (exemplo). <b>Comissão</b> é a parte do preço que o marketplace fica. <b>Tarifa fixa</b> é um valor em R$ por venda. <b>Ads</b> é anúncio pago. O gráfico mostra o preço virando sobra."
      },
      {
       "t": "chart",
       "kind": "waterfall",
       "title": "Do preço até a sobra (exemplo)",
       "unit": "R$",
       "data": [
        {
         "label": "Preço",
         "value": 100,
         "type": "start"
        },
        {
         "label": "Produto",
         "value": -45
        },
        {
         "label": "Comissão",
         "value": -14
        },
        {
         "label": "Tarifa fixa",
         "value": -6
        },
        {
         "label": "Frete",
         "value": -12
        },
        {
         "label": "Imposto",
         "value": -6
        },
        {
         "label": "Ads",
         "value": -5
        },
        {
         "label": "Sobra",
         "type": "total"
        }
       ],
       "caption": "Sobram R$ 12 de R$ 100, ou 12% de margem. O blog dizia 20%. Olha onde o preço some."
      },
      {
       "t": "lab",
       "preset": "preco",
       "title": "Mão na massa: mexa no frete",
       "intro": "Mesmo produto, frete diferente. Arraste o frete e veja a margem mudar. Quem manda é o dado da conta, não o blog.",
       "defaults": {
        "preco": 100,
        "custo": 45,
        "com": 14,
        "tarifa": 6,
        "frete": 12,
        "imp": 6,
        "ads": 5,
        "emb": 0,
        "alvo": 20
       },
       "note": "Números de exemplo, inventados só pro treino."
      },
      {
       "t": "quiz",
       "q": "Um seller manda um blog dizendo que a margem normal da categoria é 20%, mas a conta dele mostra 12% (números de exemplo). O que guia a decisão?",
       "options": [
        "O número do blog, porque a média do mercado vale mais que uma conta só",
        "A média entre os dois números, 16%, porque junta a referência e o dado",
        "O dado da conta, 12%, com o blog só como referência de comparação",
        "Um segundo blog da mesma categoria, pra desempatar entre os números"
       ],
       "answer": [
        2
       ],
       "why": "Benchmark é referência; a verdade é o dado da conta. Os 12% mostram o que sobra de fato, e o blog serve só pra comparar."
      },
      {
       "t": "say",
       "emoji": "🗣️",
       "title": "Fala assim com o seller",
       "html": "“Esse número do blog é uma boa referência. Mas vou olhar o dado da sua conta, porque é ele que mostra quanto sobra de verdade em cada venda.”"
      },
      {
       "t": "table",
       "title": "Quem manda em quê",
       "head": [
        "Fonte",
        "Serve pra",
        "Exemplo"
       ],
       "rows": [
        [
         "Benchmark de blog",
         "Referência pra comparar",
         "Média da categoria"
        ],
        [
         "Dado da conta",
         "A verdade pra decidir",
         "Margem real do produto"
        ],
        [
         "Documentação oficial",
         "Regra final da plataforma",
         "Mercado Livre, Mercado Ads, Shopee University"
        ],
        [
         "Receita e contador",
         "Regra final de imposto",
         "Regime e nota fiscal do cliente"
        ]
       ],
       "hl": 1,
       "caption": "Dúvida sobre regra: vale a fonte oficial. Dúvida sobre resultado: vale o dado da conta."
      },
      {
       "t": "list",
       "title": "As etiquetas de revisão",
       "items": [
        "<b>Revisar trimestral</b>: confira a regra a cada 3 meses",
        "<b>Revisar sempre que mudar</b>: confira assim que a regra mudar",
        "Aparecem nas aulas de assuntos que mudam rápido"
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "Regras mudam. A fonte final é a documentação oficial: Mercado Livre, Mercado Ads (anúncio pago do ML), Shopee University e Receita. Vale também o contador do cliente."
      },
      {
       "t": "quiz",
       "q": "Quais fontes têm a palavra final sobre regra de plataforma e imposto? Marque todas as corretas.",
       "multi": true,
       "options": [
        "Documentação oficial do Mercado Livre e da Shopee",
        "Post de blog que explica a regra em poucas linhas",
        "Contador do cliente, nas dúvidas de imposto e nota",
        "Receita, quando a dúvida é sobre imposto federal",
        "Print de grupo de vendedores que já testou a regra"
       ],
       "answer": [
        0,
        2,
        3
       ],
       "why": "A fonte final é a documentação oficial, a Receita e o contador do cliente. Blog e grupo de vendedores ajudam como referência, mas não decidem a regra."
      },
      {
       "t": "recap",
       "items": [
        "Todo módulo tem 5 partes, na mesma ordem",
        "Sem entrega prática, sem nível novo",
        "Benchmark é referência; a verdade é o dado da conta",
        "Regras mudam: confira a fonte oficial"
       ]
      }
     ]
    },
    {
     "id": "gf-l1-3",
     "title": "A imersão de 15 dias e a nota",
     "minutes": 8,
     "goal": "Entender a rotina da imersão, como a nota é calculada e o que vem depois dos 15 dias.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "⏱️",
       "title": "15 dias que mudam seu jogo",
       "text": "Veja como é a rotina da imersão, como a sua nota é feita e o que acontece depois dos 15 dias."
      },
      {
       "t": "big",
       "emoji": "🚀",
       "html": "15 dias úteis, cerca de <b>120 horas</b>, mais da metade em prática.",
       "sub": "Das 9h às 18h, todo dia."
      },
      {
       "t": "jargon",
       "term": "Eixo",
       "means": "Cada <b>área de conhecimento</b> da formação, como Mercado Livre, Shopee, fiscal, preço ou anúncios pagos.",
       "ex": "São 13 eixos, e você passa por todos nos 15 dias."
      },
      {
       "t": "timeline",
       "title": "A rotina de todo dia",
       "items": [
        {
         "when": "09:00",
         "label": "Aquecimento",
         "text": "Quiz do dia anterior e caso real",
         "tone": "sky"
        },
        {
         "when": "09:30",
         "label": "Sessão ao vivo",
         "text": "Teoria e demonstração na tela",
         "tone": "violet"
        },
        {
         "when": "12:30",
         "label": "Pausa",
         "text": "Almoço",
         "tone": "amber"
        },
        {
         "when": "13:30",
         "label": "Mão na massa",
         "text": "Exercício em conta-teste ou caso real",
         "tone": "mint"
        },
        {
         "when": "16:30",
         "label": "Soft skill do dia (comunicação)",
         "text": "Escrever, explicar cenário ou simular cliente",
         "tone": "pink"
        },
        {
         "when": "17:30",
         "label": "Check de saída",
         "text": "Prova curta e diário de aprendizado",
         "tone": "gold"
        }
       ]
      },
      {
       "t": "timeline",
       "title": "As 3 semanas",
       "items": [
        {
         "when": "Semana 1",
         "label": "Base, operação e fiscal",
         "text": "Dias 1 a 5",
         "tone": "sky"
        },
        {
         "when": "Semana 2",
         "label": "Fiscal, preço, logística e mercado",
         "text": "Dias 6 a 10",
         "tone": "violet"
        },
        {
         "when": "Semana 3",
         "label": "Compras, anúncios pagos, dados e estratégia",
         "text": "Dias 11 a 15",
         "tone": "gold"
        }
       ]
      },
      {
       "t": "p",
       "title": "Um gostinho do Dia 15",
       "html": "O Dia 15 tem a <b>matriz impacto x esforço</b>. De um lado, quanto a ação melhora o resultado; do outro, quanto custa fazer. Impacto alto com esforço baixo vem primeiro. O gráfico mostra um exemplo."
      },
      {
       "t": "chart",
       "kind": "matrix",
       "title": "Ações de uma conta (exemplo)",
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
         "label": "Corrigir título",
         "x": 2,
         "y": 8,
         "tone": "mint"
        },
        {
         "label": "Refazer todas as fotos",
         "x": 7,
         "y": 7,
         "tone": "violet"
        },
        {
         "label": "Trocar fonte do banner",
         "x": 2,
         "y": 2,
         "tone": "amber"
        },
        {
         "label": "Migrar o catálogo todo",
         "x": 9,
         "y": 3,
         "tone": "pink"
        }
       ],
       "caption": "Olha o canto de cima à esquerda: corrigir título é rápido e pesa muito. Refazer todas as fotos pede planejamento."
      },
      {
       "t": "sim",
       "kind": "prioridade",
       "title": "Bora treinar: o que vem primeiro?",
       "intro": "Em cada rodada você vê ações com impacto e esforço. Escolha a que deve vir primeiro.",
       "rounds": 3
      },
      {
       "t": "jargon",
       "term": "Banca",
       "means": "Apresentação final em que você <b>defende um plano</b> pra avaliadores, e eles fazem o papel de seller difícil.",
       "ex": "Na imersão, você apresenta o plano de 90 dias de uma conta real anonimizada."
      },
      {
       "t": "p",
       "title": "Como a nota é montada",
       "html": "A nota tem 4 partes. <b>Check de saída</b> diário: 15%. <b>Entregas práticas</b> de cada dia: 30%. <b>Provas semanais</b>: 20%. <b>Banca final</b> com case real: 35%. O gráfico mostra o peso de cada uma."
      },
      {
       "t": "chart",
       "kind": "donut",
       "title": "O peso de cada parte da nota",
       "unit": "%",
       "center": "Nota",
       "data": [
        {
         "label": "Check de saída",
         "value": 15,
         "tone": "sky"
        },
        {
         "label": "Entregas práticas",
         "value": 30,
         "tone": "mint"
        },
        {
         "label": "Provas semanais",
         "value": 20,
         "tone": "violet"
        },
        {
         "label": "Banca final",
         "value": 35,
         "tone": "gold"
        }
       ],
       "caption": "Entregas práticas e banca final juntas valem 65% da nota: a prática pesa mais que a teoria."
      },
      {
       "t": "conta",
       "title": "Exemplo de nota geral",
       "rows": [
        [
         "Check de saída: 80% x peso 15%",
         "12,00 pts"
        ],
        [
         "Entregas práticas: 75% x peso 30%",
         "22,50 pts"
        ],
        [
         "Provas semanais: 70% x peso 20%",
         "14,00 pts"
        ],
        [
         "Banca final: 65% x peso 35%",
         "22,75 pts"
        ]
       ],
       "total": [
        "Nota geral (exemplo)",
        "71,25"
       ],
       "note": "Notas inventadas só pra conta fechar: cada nota vezes o peso, somadas."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Pegadinha da nota",
       "html": "Aprovar exige <b>70% no geral</b> e <b>nenhum eixo abaixo de 50%</b>. Quem fica abaixo refaz o eixo com mentoria, mesmo com média boa."
      },
      {
       "t": "chart",
       "kind": "meter",
       "title": "Onde fica a aprovação",
       "value": 71,
       "valueLabel": "Exemplo: 71",
       "unit": "%",
       "zones": [
        {
         "label": "Abaixo de 50",
         "tone": "pink",
         "from": 0,
         "to": 50
        },
        {
         "label": "Falta chegar",
         "tone": "amber",
         "from": 50,
         "to": 70
        },
        {
         "label": "70 ou mais",
         "tone": "mint",
         "from": 70,
         "to": 100
        }
       ]
      },
      {
       "t": "quiz",
       "q": "Uma pessoa tirou 80% no check de saída, 60% nas entregas, 80% nas provas e 70% na banca (números de exemplo). Qual é a nota geral, com os pesos 15, 30, 20 e 35?",
       "options": [
        "72,5, que é a média simples das quatro notas e já passa dos 70%",
        "70,5, que é a soma de cada nota vezes o seu peso e passa dos 70%",
        "66,5, que fica abaixo dos 70% porque as entregas pesam 30%",
        "64,0, que fica abaixo dos 70% porque a banca vale só 20%"
       ],
       "answer": [
        1
       ],
       "why": "Cada nota vezes o peso: 80x0,15=12; 60x0,30=18; 80x0,20=16; 70x0,35=24,5. Somando: 12+18+16+24,5=70,5. A média simples ignora os pesos."
      },
      {
       "t": "stairs",
       "title": "Matriz de domínio: nota de 0 a 3",
       "items": [
        {
         "tag": "0",
         "title": "Nunca viu",
         "text": "Zero contato com o assunto"
        },
        {
         "tag": "1",
         "title": "Entende",
         "text": "Sabe explicar o que é"
        },
        {
         "tag": "2",
         "title": "Executa sozinho",
         "text": "Faz sem precisar de ajuda"
        },
        {
         "tag": "3",
         "title": "Ensina e decide",
         "text": "Ensina os outros e decide sob pressão"
        }
       ]
      },
      {
       "t": "steps",
       "title": "Mão na massa",
       "items": [
        {
         "title": "Liste os 13 eixos",
         "html": "Monte uma planilha com uma linha por eixo, de A a M."
        },
        {
         "title": "Dê a sua nota",
         "html": "Marque de 0 a 3 como você está hoje em cada eixo."
        },
        {
         "title": "Peça a nota do gestor",
         "html": "Compare a sua nota com a que o gestor dá pra você."
        },
        {
         "title": "Escolha o maior vão",
         "html": "Fique com o eixo em que as notas mais se distanciam e estude ele primeiro."
        }
       ]
      },
      {
       "t": "say",
       "emoji": "🗣️",
       "title": "Fala assim: mensagem em 4 partes",
       "html": "“Oi, Carla! Suas vendas caíram esta semana. O anúncio principal ficou sem estoque. Vamos repor o lote e pausar o anúncio pago. Preciso que você confirme a data de entrada.”"
      },
      {
       "t": "flow",
       "title": "E depois dos 15 dias",
       "items": [
        {
         "icon": "🏁",
         "title": "Dias 1 a 15",
         "text": "Imersão com base técnica profunda"
        },
        {
         "icon": "👀",
         "title": "Dias 16 a 45",
         "text": "Shadowing: acompanha um gestor sênior"
        },
        {
         "icon": "🧩",
         "title": "Dias 46 a 90",
         "text": "Assume contas pequenas com supervisão"
        },
        {
         "icon": "🏆",
         "title": "Mês 4 em diante",
         "text": "Trilha N3 e formação de colegas"
        }
       ],
       "caption": "Shadowing é acompanhar de perto um gestor bem experiente na rotina real, tipo uma sombra."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Achar que 15 dias formam um gestor. A imersão entrega base técnica e autonomia de N1 com noção de N2. O N3 vem depois, com 90 dias de conta real acompanhada."
      },
      {
       "t": "quiz",
       "q": "Você terminou os 15 dias da imersão. Qual é o passo logo depois, pelo combinado?",
       "options": [
        "Assumir sozinho uma carteira grande, porque a base técnica já está pronta",
        "Acompanhar contas reais com um gestor sênior e rodar a rotina semanal",
        "Entrar direto na trilha N3 e começar a formar os novos colegas",
        "Esperar a reavaliação de 6 meses antes de encostar em qualquer conta"
       ],
       "answer": [
        1
       ],
       "why": "Nos dias 16 a 45 você faz shadowing: acompanha contas reais com um gestor sênior e roda a rotina semanal. Contas pequenas vêm só depois, e o N3 a partir do mês 4."
      },
      {
       "t": "recap",
       "items": [
        "Imersão: 15 dias úteis, cerca de 120 horas",
        "Nota: 15% check, 30% entregas, 20% provas, 35% banca",
        "Aprova com 70% e nenhum eixo abaixo de 50%",
        "Depois: shadowing, contas pequenas e trilha N3"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "gf-m2",
   "n": 2,
   "title": "Base do e-commerce",
   "tagline": "O jogo do marketplace, o glossário essencial e o modelo de negócio da Mamba, tudo em doses curtas.",
   "outcome": "Explicar para um leigo, em 2 minutos, como o dinheiro entra e sai de uma venda e falar a língua do mercado.",
   "lessons": [
    {
     "id": "gf-l2-1",
     "title": "Como o e-commerce brasileiro funciona",
     "minutes": 6,
     "goal": "Entender como marketplace, loja própria e social commerce se diferem e o que leva o cliente da busca à compra.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🛒",
       "title": "Entenda o jogo antes de jogar",
       "text": "Em poucos minutos você vê como o e-commerce funciona e o que faz o cliente clicar e comprar."
      },
      {
       "t": "big",
       "emoji": "🧭",
       "html": "Quem não entende o jogo decide <b>no escuro</b>.",
       "sub": "Aqui você aprende as regras básicas, sem enrolação."
      },
      {
       "t": "list",
       "title": "Os 3 jeitos de vender online",
       "items": [
        "<b>Marketplace</b>: um shopping online, com vitrine de vários vendedores",
        "<b>Loja própria</b>: seu site, suas regras, seu tráfego",
        "<b>Social commerce</b>: vender dentro da rede social, com vídeo, live e perfil"
       ]
      },
      {
       "t": "table",
       "title": "Marketplace, loja própria e social",
       "head": [
        "",
        "Marketplace",
        "Loja própria",
        "Social commerce"
       ],
       "rows": [
        [
         "Quem traz o cliente",
         "A plataforma já tem público",
         "Você precisa atrair",
         "Conteúdo e perfil atraem"
        ],
        [
         "Controle da marca",
         "Menor: segue as regras da plataforma",
         "Total",
         "Médio: depende do app"
        ],
        [
         "Para começar",
         "Mais rápido: a vitrine já existe",
         "Mais trabalho: site e tráfego",
         "Exige criar conteúdo"
        ],
        [
         "Concorrência",
         "Lado a lado na busca",
         "Só você na página",
         "Disputa a atenção do feed"
        ]
       ],
       "hl": 1,
       "caption": "Não é um contra o outro: muita marca vende nos três. A Mamba trabalha com Mercado Livre e Shopee."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Por que marketplace?",
       "html": "O cliente já entra no marketplace com vontade de comprar. O seu trabalho é <b>ser achado e ser escolhido</b> entre vários vendedores."
      },
      {
       "t": "big",
       "emoji": "🔻",
       "html": "Venda online é um <b>funil</b>: muita gente entra, pouca gente compra.",
       "sub": "O jogo é perder menos gente em cada etapa."
      },
      {
       "t": "jargon",
       "term": "Funil de vendas",
       "means": "O caminho em etapas: a pessoa <b>vê</b> o anúncio, <b>clica</b>, <b>considera</b> e <b>compra</b>. Cada etapa perde gente.",
       "ex": "Exemplo: 10.000 pessoas veem, 300 clicam e 15 compram. Veja isso no gráfico."
      },
      {
       "t": "chart",
       "kind": "funnel",
       "title": "Funil de um anúncio (exemplo)",
       "data": [
        {
         "label": "Viram o anúncio",
         "value": 10000
        },
        {
         "label": "Clicaram",
         "value": 300
        },
        {
         "label": "Consideraram",
         "value": 60
        },
        {
         "label": "Compraram",
         "value": 15
        }
       ],
       "caption": "Olha onde mais gente sai: entre ver e clicar. Título e foto principal mexem nessa etapa."
      },
      {
       "t": "quiz",
       "q": "O que o funil de vendas mostra para quem cuida de uma conta?",
       "options": [
        "Quanto sobra de dinheiro em cada etapa, do preço de venda até o lucro final",
        "Em que etapa o cliente vai desistindo, da visualização do anúncio até a compra",
        "Quantos produtos do catálogo estão ativos em cada etapa do cadastro do anúncio",
        "Quanto a plataforma cobra do vendedor em cada etapa, da publicação até o envio"
       ],
       "answer": [
        1
       ],
       "why": "O funil é o caminho em etapas: vê, clica, considera e compra. Cada etapa perde gente, e o trabalho é achar onde a perda é maior."
      },
      {
       "t": "flow",
       "title": "A jornada de compra",
       "items": [
        {
         "icon": "🔎",
         "title": "Descobre",
         "text": "Busca ou vê o anúncio"
        },
        {
         "icon": "🤔",
         "title": "Compara",
         "text": "Preço, foto, avaliações e prazo"
        },
        {
         "icon": "🛒",
         "title": "Compra",
         "text": "Confia e paga"
        },
        {
         "icon": "📦",
         "title": "Recebe",
         "text": "Entrega no prazo combinado"
        },
        {
         "icon": "⭐",
         "title": "Avalia",
         "text": "Vira recompra ou reclamação"
        }
       ],
       "loop": true,
       "caption": "Cada etapa é uma chance de ganhar ou de perder o cliente."
      },
      {
       "t": "list",
       "title": "O que faz o cliente clicar e comprar",
       "items": [
        "<b>Clicar</b>: título claro e foto principal limpa",
        "<b>Confiar</b>: reputação boa e avaliações de quem já comprou",
        "<b>Decidir</b>: preço justo e prazo de entrega curto",
        "<b>Comprar sem medo</b>: ficha completa e dúvidas respondidas"
       ]
      },
      {
       "t": "anno",
       "preset": "anuncio",
       "title": "Um anúncio por dentro",
       "notes": [
        "Título com a palavra que o cliente busca",
        "Foto principal limpa chama o clique",
        "Preço competitivo e com margem para você",
        "Prazo e frete claros pesam na decisão",
        "Variações organizadas evitam dúvida",
        "Ficha completa ajuda a ser achado e a passar confiança"
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Achar que o cliente só olha o preço. Ele também pesa prazo, reputação e foto. Preço baixo com prazo ruim e foto escura perde a venda."
      },
      {
       "t": "say",
       "emoji": "🗣️",
       "title": "Fala assim com o seller",
       "html": "“Sua venda não depende só do preço. O cliente compara foto, prazo e reputação antes de clicar. Vamos olhar cada etapa do funil pra ver onde a gente perde gente.”"
      },
      {
       "t": "quiz",
       "q": "O seller baixou o preço e as vendas não subiram. O anúncio tem foto escura, prazo longo e nota baixa. O que você explica?",
       "options": [
        "O preço ainda está alto; o certo é baixar mais até as vendas reagirem de verdade",
        "Foto e prazo só importam em loja própria; no marketplace o cliente decide pelo preço",
        "A nota baixa não pesa na decisão; o cliente só olha o preço mais baixo que achar",
        "O cliente compara foto, prazo e reputação, não só preço; olhe cada etapa do funil"
       ],
       "answer": [
        3
       ],
       "why": "O cliente pesa várias coisas ao mesmo tempo. Preço baixo não compensa foto ruim, prazo longo e reputação baixa; o funil mostra em qual etapa a venda se perde."
      },
      {
       "t": "recap",
       "items": [
        "Marketplace, loja própria e social commerce são jeitos diferentes de vender",
        "Venda é um funil: cada etapa perde gente",
        "A jornada tem 5 etapas, de descobrir a avaliar",
        "Preço é só um dos motivos de clique e compra"
       ]
      }
     ]
    },
    {
     "id": "gf-l2-2",
     "title": "Glossário 1: vendas e dinheiro",
     "minutes": 8,
     "goal": "Conseguir explicar GMV, ticket médio, conversão, CAC, LTV e margem com exemplo de conta.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📖",
       "title": "Seis palavras que todo mundo usa",
       "text": "GMV, ticket médio, conversão, CAC, LTV e margem. Você sai daqui falando a língua do mercado e fazendo as contas."
      },
      {
       "t": "big",
       "emoji": "💬",
       "html": "Se você não fala a língua, o seller <b>não confia</b> em você.",
       "sub": "Bora traduzir cada termo, com conta."
      },
      {
       "t": "jargon",
       "term": "GMV",
       "tag": "Gross Merchandise Value",
       "means": "Valor <b>total vendido</b> no período, somando todos os pedidos, antes de descontar custos.",
       "ex": "10 pedidos de R$ 100 dão GMV de R$ 1.000. Isso não é lucro."
      },
      {
       "t": "jargon",
       "term": "Ticket médio",
       "means": "Quanto cada pedido vale em média: <b>faturamento ÷ número de pedidos</b>.",
       "ex": "R$ 6.000 em 40 pedidos dão ticket médio de R$ 150."
      },
      {
       "t": "jargon",
       "term": "Conversão",
       "means": "De cada 100 visitas, quantas viram <b>compra</b>: pedidos ÷ visitas.",
       "ex": "500 visitas e 15 pedidos dão conversão de 3%."
      },
      {
       "t": "p",
       "title": "Mesmo tráfego, resultados diferentes",
       "html": "Imagine 3 anúncios com as mesmas 500 visitas. Quem converte mais vende mais <b>sem gastar nada a mais</b> com tráfego."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Conversão de 3 anúncios (exemplo)",
       "unit": "%",
       "hl": 0,
       "data": [
        {
         "label": "Anúncio A",
         "value": 1.5,
         "tone": "pink"
        },
        {
         "label": "Anúncio B",
         "value": 3
        },
        {
         "label": "Anúncio C",
         "value": 4.5
        }
       ],
       "caption": "Olha o anúncio A: com as mesmas visitas, converte um terço do C. Ajuste ele antes de gastar com tráfego."
      },
      {
       "t": "quiz",
       "q": "Em um mês: R$ 8.000 de faturamento, 50 pedidos e 2.000 visitas (números de exemplo). Qual o ticket médio e a conversão?",
       "options": [
        "Ticket médio de R$ 160 e conversão de 2,5%",
        "Ticket médio de R$ 40 e conversão de 2,5%",
        "Ticket médio de R$ 160 e conversão de 25%",
        "Ticket médio de R$ 40 e conversão de 40%"
       ],
       "answer": [
        0
       ],
       "why": "Ticket médio = 8.000 ÷ 50 = R$ 160. Conversão = 50 pedidos ÷ 2.000 visitas = 2,5%."
      },
      {
       "t": "jargon",
       "term": "CAC",
       "tag": "Custo de Aquisição de Cliente",
       "means": "Quanto você gasta pra <b>conquistar um cliente novo</b>: investimento ÷ clientes novos.",
       "ex": "R$ 600 em anúncios e 20 clientes novos dão CAC de R$ 30."
      },
      {
       "t": "jargon",
       "term": "LTV",
       "tag": "Lifetime Value",
       "means": "Quanto um cliente deixa de dinheiro <b>ao longo do tempo</b>, somando todas as compras dele.",
       "ex": "Cliente que compra 3 vezes de R$ 80 tem LTV de R$ 240."
      },
      {
       "t": "callout",
       "tone": "regra",
       "title": "Regra de bolso",
       "html": "Compare <b>LTV com CAC</b>. Se conquistar o cliente custa mais do que ele devolve, a conta não fecha. Confira quais dados de recompra o painel da plataforma entrega."
      },
      {
       "t": "big",
       "emoji": "💰",
       "html": "Faturar não é <b>ganhar</b>.",
       "sub": "A margem mostra o que realmente sobra."
      },
      {
       "t": "jargon",
       "term": "Margem",
       "means": "Percentual do preço que <b>sobra</b> depois de pagar produto, taxas, imposto, frete e ads.",
       "ex": "Vendeu a R$ 100 e sobraram R$ 18: margem de 18%."
      },
      {
       "t": "conta",
       "title": "Do preço até a sobra (exemplo)",
       "rows": [
        [
         "Preço de venda",
         "R$ 100,00"
        ],
        [
         "Produto",
         "- R$ 45,00",
         "neg"
        ],
        [
         "Comissão da plataforma",
         "- R$ 14,00",
         "neg"
        ],
        [
         "Frete",
         "- R$ 12,00",
         "neg"
        ],
        [
         "Imposto",
         "- R$ 6,00",
         "neg"
        ],
        [
         "Ads",
         "- R$ 5,00",
         "neg"
        ]
       ],
       "total": [
        "Sobra (margem de 18%)",
        "R$ 18,00"
       ],
       "note": "Valores de exemplo. Os custos reais mudam por produto, categoria e plataforma."
      },
      {
       "t": "lab",
       "preset": "preco",
       "title": "Monte o preço e ache a margem",
       "intro": "Mexa nos sliders e veja onde a margem some. Suba o frete ou o ads e olhe a sobra encolher.",
       "defaults": {
        "preco": 100,
        "custo": 45,
        "com": 14,
        "tarifa": 0,
        "frete": 12,
        "imp": 6,
        "ads": 5,
        "emb": 0,
        "alvo": 18
       },
       "note": "Números de exemplo, só para treinar."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Comemorar o GMV. Vender R$ 50 mil com margem negativa é perder dinheiro em volume. Olhe faturamento e margem <b>juntos</b>."
      },
      {
       "t": "say",
       "emoji": "🗣️",
       "title": "Fala assim com o seller",
       "html": "“Vender R$ 10 mil é o GMV. O que importa é a margem: depois de pagar produto, taxa, frete e imposto, quanto sobrou de cada R$ 100?”"
      },
      {
       "t": "quiz",
       "q": "Qual afirmação está errada?",
       "options": [
        "Ticket médio é o faturamento dividido pelo número de pedidos em um período",
        "Conversão compara os pedidos com as visitas que o anúncio recebeu no período",
        "Se o GMV subiu, a margem subiu junto, porque vender mais sempre deixa mais sobra",
        "Margem é a parte do preço que sobra depois de pagar todos os custos dessa venda"
       ],
       "answer": [
        2
       ],
       "why": "GMV e margem são coisas diferentes. Dá para vender muito e ter pouca sobra, ou até prejuízo, se frete, taxas e ads comerem o preço."
      },
      {
       "t": "recap",
       "items": [
        "GMV é o total vendido, não é lucro",
        "Ticket médio = faturamento ÷ pedidos",
        "Conversão = pedidos ÷ visitas",
        "CAC é o custo de conquistar; LTV é o valor do cliente",
        "Margem é o que sobra do preço"
       ]
      }
     ]
    },
    {
     "id": "gf-l2-3",
     "title": "Glossário 2: ads e operação",
     "minutes": 8,
     "goal": "Conseguir usar ROAS, ACOS, TACOS, CPC, CTR, curva ABC, giro, ruptura, SKU, GTIN e NCM sem tropeçar.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📣",
       "title": "Ads e operação sem mistério",
       "text": "ROAS, ACOS, TACOS, CPC, CTR e mais cinco termos de operação. Você aprende a ler e a calcular cada um."
      },
      {
       "t": "jargon",
       "term": "CPC",
       "tag": "Custo por clique",
       "means": "Quanto você paga <b>cada vez que alguém clica</b> no seu anúncio pago.",
       "ex": "100 cliques a R$ 0,50 cada: você gastou R$ 50,00."
      },
      {
       "t": "jargon",
       "term": "CTR",
       "tag": "Taxa de cliques",
       "means": "De cada 100 vezes que o anúncio aparece, quantas viram <b>clique</b>.",
       "ex": "10.000 aparições e 200 cliques dão CTR de 2%."
      },
      {
       "t": "big",
       "emoji": "🎯",
       "html": "Ads só vale se a <b>venda paga</b> o clique.",
       "sub": "Três siglas medem isso: ROAS, ACOS e TACOS."
      },
      {
       "t": "jargon",
       "term": "ROAS",
       "tag": "Retorno sobre o gasto com ads",
       "means": "Quanto você vende com ads pra cada <b>R$ 1 investido</b>: vendas com ads ÷ investimento.",
       "ex": "Investiu R$ 500 e vendeu R$ 2.500 com ads: ROAS de 5x."
      },
      {
       "t": "jargon",
       "term": "ACOS",
       "means": "O inverso do ROAS: quanto você gasta de ads pra cada <b>R$ 1 vendido</b>.",
       "ex": "R$ 500 gastos e R$ 2.500 vendidos com ads: ACOS de 20%."
      },
      {
       "t": "jargon",
       "term": "TACOS",
       "means": "Gasto com ads sobre o <b>faturamento total</b> da loja, não só sobre as vendas com ads.",
       "ex": "R$ 500 de ads e R$ 10.000 de faturamento total: TACOS de 5%."
      },
      {
       "t": "anno",
       "preset": "ads",
       "title": "Uma tela de ads, número por número",
       "notes": [
        "Investimento: quanto você gastou em ads no período",
        "Vendas com ads: o faturamento que veio dos anúncios pagos",
        "ACOS: investimento dividido pelas vendas com ads",
        "ROAS: vendas com ads divididas pelo investimento",
        "ROAS objetivo: a meta de retorno que a campanha tenta atingir"
       ]
      },
      {
       "t": "sim",
       "kind": "acostacos",
       "title": "Bora treinar: ACOS, ROAS e TACOS",
       "intro": "Em cada rodada saem números novos. Calcule o indicador pedido e confira.",
       "rounds": 3
      },
      {
       "t": "quiz",
       "q": "Você investiu R$ 400 em ads e vendeu R$ 2.000 com ads. O faturamento total foi R$ 8.000 (números de exemplo). Quais são ROAS, ACOS e TACOS?",
       "options": [
        "ROAS 5x, ACOS 5% e TACOS 20%",
        "ROAS 20x, ACOS 5% e TACOS 20%",
        "ROAS 5x, ACOS 20% e TACOS 5%",
        "ROAS 5x, ACOS 20% e TACOS 20%"
       ],
       "answer": [
        2
       ],
       "why": "ROAS = 2.000 ÷ 400 = 5x. ACOS = 400 ÷ 2.000 = 20%. TACOS = 400 ÷ 8.000 = 5%, porque usa o faturamento total."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Confundir ROAS com ACOS. ROAS <b>maior</b> é melhor; ACOS <b>menor</b> é melhor. Um é o inverso do outro: ROAS de 5x equivale a ACOS de 20%."
      },
      {
       "t": "jargon",
       "term": "Curva ABC",
       "means": "Ordena os produtos por <b>quanto faturam</b>. A são poucos que pesam muito; C são muitos que pesam pouco.",
       "ex": "Regra de bolso: A soma cerca de 80% do faturamento, B cerca de 15% e C cerca de 5%."
      },
      {
       "t": "chart",
       "kind": "pareto",
       "title": "Curva ABC de uma loja (exemplo)",
       "unit": "R$",
       "data": [
        {
         "label": "Camiseta",
         "value": 4500
        },
        {
         "label": "Tênis",
         "value": 2000
        },
        {
         "label": "Mochila",
         "value": 1500
        },
        {
         "label": "Boné",
         "value": 800
        },
        {
         "label": "Meia",
         "value": 700
        },
        {
         "label": "Cinto",
         "value": 300
        },
        {
         "label": "Chaveiro",
         "value": 200
        }
       ],
       "caption": "Três produtos fazem 80% do faturamento (curva A). Os dois seguintes chegam a 95% (B). O resto é curva C."
      },
      {
       "t": "jargon",
       "term": "Giro",
       "means": "Quantas vezes o estoque <b>se renova</b> no período: vende e repõe.",
       "ex": "Vendeu 60 unidades com 20 em estoque: giro de 3 vezes. Estoque parado é dinheiro dormindo."
      },
      {
       "t": "jargon",
       "term": "Ruptura",
       "means": "O estoque <b>acabou</b>: não há unidade pra vender e o anúncio perde vendas.",
       "ex": "Anúncio campeão sem estoque por 5 dias: cinco dias de venda perdida."
      },
      {
       "t": "table",
       "title": "Os 3 códigos do produto",
       "head": [
        "Código",
        "O que é",
        "Pra que serve"
       ],
       "rows": [
        [
         "SKU",
         "Código interno de cada versão do produto",
         "Organizar estoque e planilhas"
        ],
        [
         "EAN/GTIN",
         "Código de barras único do produto",
         "A plataforma identificar o item"
        ],
        [
         "NCM",
         "Código fiscal de 8 dígitos",
         "Classificar o produto na nota e no imposto"
        ]
       ],
       "caption": "Cor e tamanho diferentes são SKUs diferentes. Confirme o NCM com o contador do cliente."
      },
      {
       "t": "say",
       "emoji": "🗣️",
       "title": "Fala assim com o seller",
       "html": "“Seu ROAS está em 5x, que é um ACOS de 20%. Mas o produto campeão está com pouco estoque: se der ruptura, a curva A para de vender e o ads vira gasto à toa.”"
      },
      {
       "t": "quiz",
       "q": "O produto campeão responde por 45% do faturamento e tem estoque para 3 dias de venda. Qual a leitura da curva ABC e da ruptura?",
       "options": [
        "É curva A e a ruptura sairia caro; planejar a reposição antes que o estoque acabe",
        "É curva C pelo estoque baixo; o melhor é reduzir a reposição e esperar o giro cair",
        "É curva A, mas ruptura só afeta o produto parado; a reposição pode esperar a venda cair",
        "É curva B porque ainda não chegou a 80% sozinho; a ruptura é um risco pequeno"
       ],
       "answer": [
        0
       ],
       "why": "Quem pesa 45% do faturamento está na curva A. Ficar sem estoque (ruptura) derruba a venda justo do produto que mais paga as contas."
      },
      {
       "t": "recap",
       "items": [
        "CPC é o custo do clique; CTR é a taxa de cliques",
        "ROAS maior é melhor; ACOS menor é melhor",
        "TACOS usa o faturamento total da loja",
        "Curva A: poucos produtos, cerca de 80% do faturamento",
        "SKU é interno, GTIN é código de barras, NCM é fiscal"
       ]
      }
     ]
    },
    {
     "id": "gf-l2-4",
     "title": "Como ML e Shopee ganham dinheiro",
     "minutes": 7,
     "goal": "Entender de onde vêm as receitas dos marketplaces e o que cada plataforma premia.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "💸",
       "title": "Como o marketplace ganha dinheiro",
       "text": "Se você sabe como a plataforma ganha, entende por que ela cobra, o que ela empurra e o que ela premia."
      },
      {
       "t": "big",
       "emoji": "🏪",
       "html": "O marketplace é um <b>shopping</b>. E o shopping cobra de várias formas.",
       "sub": "Entender isso explica as taxas e as regras."
      },
      {
       "t": "list",
       "title": "5 jeitos de a plataforma ganhar",
       "items": [
        "<b>Comissão</b>: um percentual do preço em cada venda",
        "<b>Ads</b>: o vendedor paga pra aparecer mais",
        "<b>Logística</b>: serviços de envio e armazenagem",
        "<b>Crédito</b>: serviços financeiros para o vendedor",
        "<b>Assinatura</b>: planos com benefícios pagos"
       ]
      },
      {
       "t": "jargon",
       "term": "Comissão",
       "means": "Percentual do preço que a plataforma <b>desconta de cada venda</b>. Pode mudar por categoria e tipo de anúncio.",
       "ex": "Exemplo: comissão de 14% numa venda de R$ 100 deixa R$ 14 pra plataforma."
      },
      {
       "t": "jargon",
       "term": "Take rate",
       "means": "Parte do valor vendido que fica com a plataforma, somando <b>comissão e outras cobranças</b>.",
       "ex": "Venda de R$ 100 com R$ 20 em taxas e serviços: take rate de 20% (exemplo)."
      },
      {
       "t": "p",
       "title": "Pra onde vai o preço",
       "html": "Num preço de R$ 100 (exemplo), uma parte paga o produto, outra vai pra plataforma e pra logística, outra vai pro imposto. O que sobra é seu. Veja cada fatia."
      },
      {
       "t": "chart",
       "kind": "stack",
       "title": "Fatias de um preço de R$ 100 (exemplo)",
       "unit": "R$",
       "data": [
        {
         "label": "Produto",
         "value": 45,
         "tone": "sky"
        },
        {
         "label": "Comissão",
         "value": 14,
         "tone": "violet"
        },
        {
         "label": "Frete",
         "value": 12,
         "tone": "amber"
        },
        {
         "label": "Imposto",
         "value": 6,
         "tone": "pink"
        },
        {
         "label": "Ads",
         "value": 5,
         "tone": "gold"
        },
        {
         "label": "Sobra",
         "value": 18,
         "tone": "mint"
        }
       ],
       "caption": "Comissão, frete e ads somam R$ 31: quase um terço do preço fica com a plataforma e a logística."
      },
      {
       "t": "conta",
       "title": "Plataforma e seller dividem a venda (exemplo)",
       "rows": [
        [
         "Cliente paga",
         "R$ 100,00"
        ],
        [
         "Comissão (exemplo)",
         "- R$ 14,00",
         "neg"
        ],
        [
         "Frete (exemplo)",
         "- R$ 12,00",
         "neg"
        ],
        [
         "Ads (exemplo)",
         "- R$ 5,00",
         "neg"
        ]
       ],
       "total": [
        "Sobra antes de produto e imposto",
        "R$ 69,00"
       ],
       "note": "Produto e imposto ainda saem desses R$ 69. Valores de exemplo, as taxas reais variam."
      },
      {
       "t": "lab",
       "preset": "preco",
       "title": "Suba a comissão e veja a sobra",
       "intro": "Aumente a comissão e o frete aos poucos. Veja a margem encolher e o preço mínimo subir.",
       "defaults": {
        "preco": 100,
        "custo": 45,
        "com": 20,
        "tarifa": 0,
        "frete": 12,
        "imp": 6,
        "ads": 5,
        "emb": 0,
        "alvo": 15
       },
       "note": "Números de exemplo. Confira os valores vigentes na documentação oficial."
      },
      {
       "t": "quiz",
       "q": "Quais destas são formas de o marketplace ganhar dinheiro? Marque todas.",
       "options": [
        "Lucro do vendedor, que a plataforma retira ao final do mês",
        "Comissão cobrada sobre cada venda feita na plataforma",
        "Valor do produto, que a plataforma recebe e não repassa",
        "Anúncios pagos que dão mais destaque ao vendedor",
        "Imposto do vendedor, que vira receita da própria plataforma"
       ],
       "answer": [
        1,
        3
       ],
       "why": "A plataforma ganha com comissão, ads, logística, crédito e assinatura. O lucro, o valor do produto e o imposto do vendedor não são receita dela.",
       "multi": true
      },
      {
       "t": "table",
       "title": "Mapa ML x Shopee",
       "head": [
        "",
        "Mercado Livre",
        "Shopee"
       ],
       "rows": [
        [
         "Cliente costuma",
         "Comprar com intenção: busca o que precisa",
         "Comprar por oferta: navega e descobre"
        ],
        [
         "Plataforma premia",
         "Reputação, entrega rápida e anúncio completo",
         "Preço atrativo, cupons e campanhas"
        ],
        [
         "Ads",
         "Mercado Ads (Product Ads)",
         "Shopee Ads"
        ],
        [
         "Logística",
         "Mercado Envios: Full, Flex, Coleta",
         "Coleta e pontos de entrega da Shopee"
        ]
       ],
       "caption": "São tendências gerais, não regras fixas. Confira sempre a documentação vigente de cada plataforma."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "Taxas, programas e regras mudam. A fonte final é a documentação oficial (Mercado Livre, Mercado Ads, Shopee University) e, em tema fiscal, o contador do cliente."
      },
      {
       "t": "big",
       "emoji": "🧲",
       "html": "Quem entende o que a plataforma <b>premia</b> ganha visibilidade.",
       "sub": "Vitrine boa vem de cliente satisfeito, não de sorte."
      },
      {
       "t": "compare",
       "left": {
        "title": "Costuma ajudar",
        "tone": "good",
        "items": [
         "Entregar no prazo e ter poucas reclamações",
         "Anúncio completo, com foto e ficha técnica",
         "Responder o cliente com rapidez"
        ]
       },
       "right": {
        "title": "Costuma atrapalhar",
        "tone": "bad",
        "items": [
         "Atrasar e cancelar pedidos",
         "Anúncio incompleto e sem resposta",
         "Entrar em campanha sem fazer a conta"
        ]
       }
      },
      {
       "t": "say",
       "emoji": "🗣️",
       "title": "Fala assim com o seller",
       "html": "“No Mercado Livre o cliente costuma buscar com intenção, então reputação e prazo pesam. Na Shopee ele compra mais por oferta, então cupom e campanha ganham força. Vamos adaptar o plano pra cada uma.”"
      },
      {
       "t": "quiz",
       "q": "Um seller que só conhece o Mercado Livre pergunta como é a Shopee. Qual resposta resume melhor a tendência geral?",
       "options": [
        "É igual ao Mercado Livre em tudo, então a mesma estratégia de anúncio e preço serve nas duas",
        "O cliente costuma comprar mais por oferta, então cupom e campanha pesam; confira as regras",
        "O cliente só compra por reputação, então preço e campanha não têm efeito na Shopee",
        "A Shopee só vende pelo anúncio pago, então sem ads o vendedor não aparece na vitrine"
       ],
       "answer": [
        1
       ],
       "why": "Cada plataforma tem público e prêmios diferentes. Na Shopee a oferta tende a pesar mais, mas sempre confirme a regra vigente na documentação oficial."
      },
      {
       "t": "recap",
       "items": [
        "A plataforma ganha com comissão, ads, logística, crédito e assinatura",
        "Take rate é a parte da venda que fica com a plataforma",
        "ML tende a premiar reputação e entrega; Shopee, oferta e campanha",
        "Taxas e regras mudam: revisar todo trimestre"
       ]
      }
     ]
    },
    {
     "id": "gf-l2-5",
     "title": "O modelo de negócio da Mamba",
     "minutes": 8,
     "goal": "Conseguir explicar o que a Mamba entrega e como o dinheiro entra e sai de uma venda.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🐍",
       "title": "O que a Mamba vende e como entrega valor",
       "text": "A Mamba faz o vendedor vender mais. Você vê como isso funciona e treina o check do dia 1: explicar uma venda em 2 minutos."
      },
      {
       "t": "big",
       "emoji": "🏆",
       "html": "A promessa da Mamba é simples: o vendedor <b>vende mais</b>.",
       "sub": "Com método, dado e rotina. Não com sorte."
      },
      {
       "t": "list",
       "title": "O que a Mamba entrega",
       "items": [
        "Gestão da conta no Mercado Livre e na Shopee",
        "Otimização de anúncios: título, ficha e imagens",
        "Banners e criativos que ajudam a converter",
        "Ads, preço, promoção e logística decididos com dado",
        "Relatórios e reuniões de alinhamento com o cliente"
       ]
      },
      {
       "t": "jargon",
       "term": "Assessoria",
       "means": "Serviço de acompanhamento: a Mamba <b>opera e orienta</b> a conta, mas a loja continua sendo do cliente.",
       "ex": "O cliente decide o negócio. A Mamba traz análise, execução e recomendação."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Como a Mamba cobra",
       "html": "Cada contrato tem as condições combinadas com o cliente. Antes de falar de valor, <b>leia a proposta do cliente</b> e alinhe com o seu gestor. Não prometa o que não está no contrato."
      },
      {
       "t": "compare",
       "left": {
        "title": "Fazer bem",
        "tone": "good",
        "items": [
         "Decide com o dado da conta",
         "Explica o porquê de cada ação",
         "Cuida da margem, não só da venda",
         "Avisa o cliente antes do problema"
        ]
       },
       "right": {
        "title": "Fazer por fazer",
        "tone": "bad",
        "items": [
         "Decide por achismo",
         "Entrega a ação sem explicar",
         "Persegue faturamento a qualquer custo",
         "Só fala com o cliente quando já deu ruim"
        ]
       }
      },
      {
       "t": "big",
       "emoji": "👀",
       "html": "O cliente percebe valor quando <b>entende</b> o que mudou.",
       "sub": "Resultado sem explicação parece sorte."
      },
      {
       "t": "flow",
       "title": "Como o cliente percebe valor",
       "items": [
        {
         "icon": "📊",
         "title": "Diagnóstico",
         "text": "Mostra onde a conta está"
        },
        {
         "icon": "🛠️",
         "title": "Ação",
         "text": "Executa o que foi combinado"
        },
        {
         "icon": "📈",
         "title": "Resultado",
         "text": "Compara antes e depois"
        },
        {
         "icon": "🗣️",
         "title": "Conversa",
         "text": "Explica e propõe o próximo passo"
        }
       ],
       "loop": true,
       "caption": "É um ciclo: cada conversa abre o próximo diagnóstico."
      },
      {
       "t": "table",
       "title": "Rotina por conta (exemplo)",
       "head": [
        "Frequência",
        "O que olhar"
       ],
       "rows": [
        [
         "Diária",
         "Vendas, perguntas, pedidos e reputação"
        ],
        [
         "Semanal",
         "Ads, preço, estoque e plano de ação"
        ],
        [
         "Mensal",
         "Resultado, relatório e reunião com o cliente"
        ]
       ],
       "caption": "Exemplo de cadência. Cada conta pode pedir uma rotina diferente."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Achar que marketplace é só <b>subir anúncio e esperar vender</b>. Sem preço com margem, estoque, reputação, ads e rotina, o anúncio fica parado."
      },
      {
       "t": "quiz",
       "q": "Um cliente novo diz: 'Subi 200 anúncios, agora é só esperar vender.' Qual resposta mostra que você entende o jogo?",
       "options": [
        "Com 200 anúncios no ar a venda acontece sozinha, é só esperar o algoritmo trabalhar",
        "Anúncio é o que decide tudo, então o foco é publicar mais e deixar o resto pra depois",
        "Preço e estoque são problema do cliente, e a Mamba cuida só de subir os anúncios",
        "Anúncio é o começo; preço com margem, estoque, reputação e ads também decidem a venda"
       ],
       "answer": [
        3
       ],
       "why": "Vender em marketplace é rotina: preço com margem, estoque, reputação, ads e acompanhamento. Subir o anúncio é só a primeira etapa."
      },
      {
       "t": "p",
       "title": "Seu check do dia 1",
       "html": "Explicar em 2 minutos, pra um leigo, <b>como o dinheiro entra e sai</b> de uma venda. O gráfico a seguir é o seu roteiro: do preço pago até a sobra."
      },
      {
       "t": "chart",
       "kind": "waterfall",
       "title": "Do preço pago até a sobra (exemplo)",
       "unit": "R$",
       "data": [
        {
         "label": "Cliente paga",
         "value": 100,
         "type": "start"
        },
        {
         "label": "Produto",
         "value": -45
        },
        {
         "label": "Comissão",
         "value": -14
        },
        {
         "label": "Frete",
         "value": -12
        },
        {
         "label": "Imposto",
         "value": -6
        },
        {
         "label": "Ads",
         "value": -5
        },
        {
         "label": "Sobra",
         "type": "total"
        }
       ],
       "caption": "O cliente paga R$ 100, mas só R$ 18 sobram. Cada barra que desce é um custo que alguém precisa explicar."
      },
      {
       "t": "steps",
       "title": "Mão na massa",
       "items": [
        {
         "title": "Mapa mental ML x Shopee",
         "html": "Desenhe taxas, público, logística e ads das duas plataformas. Use uma conta-teste ou um caso anonimizado."
        },
        {
         "title": "Glossário próprio",
         "html": "Escreva cada termo do módulo com suas palavras e um exemplo de conta."
        },
        {
         "title": "Conta de uma venda",
         "html": "Monte uma venda de exemplo: preço, produto, comissão, frete, imposto, ads e sobra."
        },
        {
         "title": "Explique em 2 minutos",
         "html": "Conte pra um colega leigo como o dinheiro entra e sai, sem olhar o material."
        }
       ]
      },
      {
       "t": "say",
       "emoji": "🗣️",
       "title": "Fala assim: mensagem em 4 partes",
       "html": "“Contexto: suas vendas caíram esta semana. O que aconteceu: o anúncio principal ficou sem estoque 3 dias. O que fazemos: ajustar a reposição e o ads. O que precisamos de você: a data do próximo lote.”"
      },
      {
       "t": "quiz",
       "q": "Qual é a ordem da mensagem de atualização que a Mamba usa com o cliente?",
       "options": [
        "O que precisamos do cliente, contexto, o que fazemos e o que aconteceu",
        "O que fazemos, contexto, o que precisamos do cliente e o que aconteceu",
        "Contexto, o que aconteceu, o que fazemos e o que precisamos do cliente",
        "Contexto, o que fazemos, o que precisamos do cliente e o que aconteceu"
       ],
       "answer": [
        2
       ],
       "why": "A mensagem começa pelo contexto, conta o que aconteceu, mostra o que o time vai fazer e fecha com o que depende do cliente. Assim ele entende e age."
      },
      {
       "t": "recap",
       "items": [
        "A Mamba faz o vendedor vender mais, com método e dado",
        "Fazer bem é decidir com dado e explicar o porquê",
        "Marketplace não é só subir anúncio",
        "Venda de R$ 100 no exemplo: sobram R$ 18",
        "Mensagem: contexto, o que houve, o que fazemos, o que precisamos"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "gf-m3",
   "n": 3,
   "title": "Operação no Mercado Livre",
   "tagline": "Conta, reputação, pós-venda, pedidos e programas: o dia a dia de quem opera o ML.",
   "outcome": "Operar uma conta do Mercado Livre com segurança e auditar sua saúde para achar por que ela perdeu visibilidade.",
   "lessons": [
    {
     "id": "gf-l3-1",
     "title": "Conta, painel e usuários",
     "minutes": 5,
     "goal": "Entender o que compõe a conta do Mercado Livre, quem pode acessá-la e como manter tudo organizado e seguro.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🏗️",
       "title": "A conta é a fundação da operação",
       "text": "Antes de anúncio, preço e propaganda paga, vem a conta. Em 5 minutos você vê o que checar nela e quem pode mexer."
      },
      {
       "t": "big",
       "emoji": "🧱",
       "html": "Conta bagunçada trava <b>venda</b>, <b>repasse</b> e <b>acesso</b>.",
       "sub": "Dado errado hoje vira dor de cabeça no dia de receber."
      },
      {
       "t": "jargon",
       "term": "Mercado Pago",
       "means": "A <b>carteira digital</b> do Mercado Livre. É por ela que o dinheiro das vendas chega pra você.",
       "ex": "Vendeu R$ 100? O ML desconta o que é dele e o saldo aparece no Mercado Pago, no prazo de liberação vigente."
      },
      {
       "t": "flow",
       "title": "Da abertura à conta pronta",
       "items": [
        {
         "icon": "🪪",
         "title": "Cadastro",
         "text": "CPF ou CNPJ do titular"
        },
        {
         "icon": "💳",
         "title": "Mercado Pago",
         "text": "Conta que recebe o dinheiro"
        },
        {
         "icon": "📋",
         "title": "Dados da conta",
         "text": "Endereço, contato e dados fiscais"
        },
        {
         "icon": "👥",
         "title": "Usuários",
         "text": "Quem acessa e com qual permissão"
        },
        {
         "icon": "🏅",
         "title": "Certificações",
         "text": "Documentos que certas categorias pedem"
        }
       ],
       "caption": "Se um passo está torto, o problema aparece lá na frente: repasse travado, nota errada ou bloqueio."
      },
      {
       "t": "p",
       "title": "Dados da conta têm que bater",
       "html": "Nome, CPF ou CNPJ, endereço e dados bancários precisam ser iguais aos documentos. Se não baterem, a verificação, o saque ou a nota fiscal podem travar. Confira isso antes de tudo."
      },
      {
       "t": "compare",
       "left": {
        "title": "Conta organizada",
        "tone": "good",
        "items": [
         "Dados iguais aos documentos",
         "Contato que alguém lê de verdade",
         "Cada pessoa com o próprio acesso"
        ]
       },
       "right": {
        "title": "Conta bagunçada",
        "tone": "bad",
        "items": [
         "CPF de uma pessoa e banco de outra",
         "E-mail de quem já saiu da empresa",
         "Todo mundo usando a mesma senha"
        ]
       }
      },
      {
       "t": "jargon",
       "term": "Permissão",
       "means": "O que cada <b>usuário</b> pode ver e fazer na conta: só responder, mexer em anúncio, ver o dinheiro.",
       "ex": "Exemplo: a atendente responde perguntas, mas não vê o saldo. Os níveis reais variam: confira no painel."
      },
      {
       "t": "table",
       "title": "Quem precisa de qual acesso (exemplo)",
       "head": [
        "Quem",
        "Faz o quê",
        "Acesso certo"
       ],
       "rows": [
        [
         "Assessor",
         "Anúncios, pedidos e propaganda paga",
         "Operação, sem ver o financeiro"
        ],
        [
         "Financeiro",
         "Confere saldo e repasses",
         "Só a parte financeira"
        ],
        [
         "Atendimento",
         "Responde perguntas e mensagens",
         "Só mensagens e pós-venda"
        ],
        [
         "Dono da conta",
         "Decide e aprova tudo",
         "Titular, com controle total"
        ]
       ],
       "hl": 2,
       "caption": "Cada pessoa com o mínimo que precisa. Menos acesso solto, menos risco pra conta."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Senha não se empresta",
       "html": "Nunca peça nem compartilhe a senha do cliente. Use o acesso de usuário da própria plataforma. Se alguém sair do time, remova o acesso no mesmo dia."
      },
      {
       "t": "jargon",
       "term": "Certificação",
       "means": "Documento ou selo que prova que o produto ou o vendedor cumpre uma regra. Algumas categorias exigem antes de vender.",
       "ex": "Exemplo: eletrônico que precisa de homologação. Confira a exigência da categoria na documentação oficial."
      },
      {
       "t": "say",
       "title": "Fala assim pro cliente",
       "html": "“Pra operar sua conta com segurança, preciso de um acesso de usuário no seu nome, e não da sua senha. Assim você controla o que eu vejo e pode tirar meu acesso quando quiser.”"
      },
      {
       "t": "list",
       "title": "Checklist de 5 minutos da conta",
       "items": [
        "Titular e documento batem com o cadastro",
        "Mercado Pago ativo, com dados bancários certos",
        "Contato e endereço atualizados",
        "Lista de usuários sem gente que já saiu",
        "Certificações exigidas pelas categorias em dia"
       ]
      },
      {
       "t": "quiz",
       "q": "O cliente manda a senha da conta pelo WhatsApp e pede que você use direto. Qual é a melhor atitude?",
       "options": [
        "Usar a senha só dessa vez e avisar o cliente depois, já que ele mesmo autorizou o uso direto da conta",
        "Guardar a senha numa planilha do time para qualquer assessor poder entrar quando precisar na conta",
        "Aceitar a senha e entrar com ela, mas ativar o aviso de novo login no próprio celular de quem opera",
        "Pedir um acesso de usuário com permissões e orientar o cliente a trocar a senha que foi enviada"
       ],
       "answer": [
        3
       ],
       "why": "Senha é pessoal e não deve circular. O acesso de usuário dá só as permissões necessárias, e o cliente pode retirá-lo quando quiser."
      },
      {
       "t": "recap",
       "items": [
        "Conta organizada evita repasse e nota travados",
        "Dados da conta batem com os documentos",
        "Cada pessoa tem o acesso mínimo da função",
        "Senha nunca circula: use usuário",
        "Quem sai do time perde o acesso no mesmo dia"
       ]
      }
     ]
    },
    {
     "id": "gf-l3-2",
     "title": "Reputação: o termômetro",
     "minutes": 7,
     "goal": "Entender o que pesa na reputação, como ler o termômetro e como recuperar a cor sem perder visibilidade.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🌡️",
       "title": "Reputação: o termômetro da conta",
       "text": "Ela decide se seu anúncio aparece ou some. Em 7 minutos você aprende o que pesa e como recuperar."
      },
      {
       "t": "big",
       "emoji": "🤝",
       "html": "Reputação é a <b>nota de confiança</b> da sua conta.",
       "sub": "O ML olha como você vende, não só quanto vende."
      },
      {
       "t": "jargon",
       "term": "Termômetro",
       "means": "A régua de cores da reputação, do <b>vermelho</b> (ruim) ao <b>verde</b> (ótimo). Mostra o quanto o ML confia em você.",
       "ex": "Conta no verde tende a ter mais visibilidade e benefícios do que conta no amarelo ou no vermelho."
      },
      {
       "t": "chart",
       "kind": "meter",
       "title": "Termômetro da conta (exemplo)",
       "value": 60,
       "valueLabel": "Sua conta",
       "zones": [
        {
         "label": "Vermelho",
         "tone": "pink",
         "from": 0,
         "to": 25
        },
        {
         "label": "Amarelo",
         "tone": "amber",
         "from": 25,
         "to": 55
        },
        {
         "label": "Verde",
         "tone": "mint",
         "from": 55,
         "to": 100
        }
       ],
       "caption": "Exemplo ilustrativo: a conta está no verde, mas pertinho do amarelo. A escala e os limites reais você confere no painel do ML."
      },
      {
       "t": "list",
       "title": "O que pesa na reputação",
       "items": [
        "<b>Reclamações</b>: compra com problema aberta pelo cliente",
        "<b>Atrasos</b> no despacho (entrega do pacote à coleta)",
        "<b>Cancelamentos</b> feitos por você, como venda sem estoque"
       ]
      },
      {
       "t": "conta",
       "title": "A taxa de problema (exemplo)",
       "rows": [
        [
         "Vendas no período",
         "200 pedidos"
        ],
        [
         "Com reclamação",
         "6",
         "neg"
        ],
        [
         "Despacho atrasado",
         "8",
         "neg"
        ],
        [
         "Cancelados por você",
         "4",
         "neg"
        ]
       ],
       "total": [
        "Vendas com problema",
        "18 de 200 = 9%"
       ],
       "note": "Números de exemplo, sem sobreposição. Os limites reais de cada cor mudam: confira no painel do ML."
      },
      {
       "t": "p",
       "title": "O mesmo erro pesa mais em conta pequena",
       "html": "Reputação é proporção: problemas divididos por vendas. Cinco problemas em 100 vendas pesam muito mais do que cinco em 1.000. Conta nova precisa de cuidado redobrado."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Cinco problemas, taxas diferentes",
       "unit": "%",
       "hl": 0,
       "data": [
        {
         "label": "100 vendas",
         "value": 5,
         "tone": "pink"
        },
        {
         "label": "1.000 vendas",
         "value": 0.5
        }
       ],
       "caption": "Mesmos 5 problemas: 5% numa conta de 100 vendas e 0,5% numa de 1.000. Olha como a barra despenca com volume."
      },
      {
       "t": "quiz",
       "q": "Duas contas tiveram 5 vendas com problema (números de exemplo): uma vendeu 100 pedidos e a outra 1.000. O que isso mostra?",
       "options": [
        "As duas estão iguais, porque a reputação conta o número de problemas e não a proporção sobre as vendas",
        "A de 1.000 pedidos está pior, porque com mais vendas há mais chance de o ML encontrar algum erro",
        "A de 100 pedidos tem 5% de vendas com problema, dez vezes a taxa da outra, que fica em 0,5%",
        "A de 100 pedidos tem 0,5% e a de 1.000 tem 5%, pois a taxa divide o total de vendas pelos problemas"
       ],
       "answer": [
        2
       ],
       "why": "A taxa é problemas divididos por vendas: 5 ÷ 100 = 5% e 5 ÷ 1.000 = 0,5%. Por isso conta pequena sente mais cada erro."
      },
      {
       "t": "p",
       "title": "O que a cor muda na prática",
       "html": "Reputação baixa pode reduzir a exposição dos seus anúncios e o acesso a benefícios, como condições de frete e programas. Reputação alta ajuda a aparecer e a converter. É visibilidade e dinheiro."
      },
      {
       "t": "flow",
       "title": "Rotina de recuperação",
       "loop": true,
       "items": [
        {
         "icon": "🔍",
         "title": "Ache o vilão",
         "text": "Qual indicador está pior?"
        },
        {
         "icon": "🛠️",
         "title": "Corrija a causa",
         "text": "Estoque, prazo ou resposta"
        },
        {
         "icon": "📦",
         "title": "Segure o processo",
         "text": "Despache no prazo, sempre"
        },
        {
         "icon": "📈",
         "title": "Acompanhe",
         "text": "Olhe o termômetro toda semana"
        }
       ],
       "caption": "Reputação se recupera com vendas boas acumuladas, não com mágica. Leva tempo, então comece cedo."
      },
      {
       "t": "tree",
       "title": "Por que a cor caiu?",
       "root": "Reputação caiu de cor",
       "branches": [
        {
         "label": "Reclamações",
         "items": [
          "Produto veio diferente do anúncio?",
          "Embalagem chegou danificada?"
         ]
        },
        {
         "label": "Atrasos",
         "items": [
          "Etiqueta saiu depois do prazo?",
          "Estoque não acompanha o ritmo das vendas?"
         ]
        },
        {
         "label": "Cancelamentos",
         "items": [
          "Vendeu sem ter estoque?",
          "Preço saiu errado no anúncio?"
         ]
        }
       ]
      },
      {
       "t": "sim",
       "kind": "repdiag",
       "title": "Bora treinar: qual indicador atacar?",
       "intro": "Leia o cenário e escolha o indicador de reputação que você ataca primeiro.",
       "rounds": 3
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Ignorar a reputação até ela cair e derrubar as vendas junto. Quando a cor muda, o estrago já começou. Olhe o termômetro toda semana, com a conta ainda no verde."
      },
      {
       "t": "say",
       "title": "Fala assim pro cliente",
       "html": "“Sua reputação é o que mantém o anúncio visível. Vamos acompanhar toda semana e agir no primeiro sinal de queda, antes de a cor mudar. O principal é despachar no prazo e não vender sem estoque.”"
      },
      {
       "t": "quiz",
       "q": "A conta está no verde, mas os atrasos de despacho sobem há três semanas. Qual é a melhor atitude?",
       "options": [
        "Ignorar por enquanto, porque a cor ainda é verde e a reputação só pede ação quando ela muda",
        "Investigar a causa dos atrasos agora e corrigir o fluxo, antes de a cor da conta mudar",
        "Pausar todos os anúncios por uma semana para zerar os indicadores e recomeçar a contagem do zero",
        "Cancelar os pedidos atrasados para que saiam do cálculo e a taxa de atraso volte a cair logo"
       ],
       "answer": [
        1
       ],
       "why": "Tendência ruim é aviso. Agir enquanto a conta ainda está no verde é bem mais barato do que recuperar uma cor perdida."
      },
      {
       "t": "recap",
       "items": [
        "Reputação é problema dividido por vendas",
        "Reclamação, atraso e cancelamento pesam",
        "Cor baixa tira visibilidade e benefício",
        "Conta pequena sente cada erro mais",
        "Olhe o termômetro toda semana"
       ]
      }
     ]
    },
    {
     "id": "gf-l3-3",
     "title": "Pós-venda sem perder reputação",
     "minutes": 7,
     "goal": "Conseguir responder perguntas, mensagens e reclamações com tom firme e humano, sabendo quando defender e quando ceder.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "💬",
       "title": "Pós-venda: onde a reputação se decide",
       "text": "Pergunta, mensagem e reclamação mal resolvidas viram nota ruim. Você vai aprender a responder firme e humano."
      },
      {
       "t": "flow",
       "title": "A jornada do pós-venda",
       "items": [
        {
         "icon": "❓",
         "title": "Pergunta",
         "text": "Antes da compra: tire a dúvida"
        },
        {
         "icon": "💬",
         "title": "Mensagem",
         "text": "Depois da compra: avise e acompanhe"
        },
        {
         "icon": "⚠️",
         "title": "Reclamação",
         "text": "Algo deu errado: resolva rápido"
        },
        {
         "icon": "⚖️",
         "title": "Mediação",
         "text": "Sem acordo, o ML pode entrar"
        },
        {
         "icon": "⭐",
         "title": "Avaliação",
         "text": "O cliente dá a nota final"
        }
       ],
       "caption": "Quanto mais cedo você resolve, menos o caso escala pra etapa seguinte."
      },
      {
       "t": "big",
       "emoji": "🎯",
       "html": "Pergunta respondida é <b>venda</b> que não escapou.",
       "sub": "Dúvida sem resposta manda o cliente pro concorrente."
      },
      {
       "t": "list",
       "title": "Uma boa resposta de pergunta",
       "items": [
        "Responda rápido e direto ao que foi perguntado",
        "Confirme medida, compatibilidade ou prazo com dado do anúncio",
        "Não passe contato nem combine venda fora da plataforma",
        "Feche chamando o cliente pra comprar"
       ]
      },
      {
       "t": "jargon",
       "term": "Reclamação",
       "means": "Quando o cliente abre um problema com a compra: produto errado, danificado ou que não chegou. <b>Conta na reputação.</b>",
       "ex": "O cliente recebeu a cor errada e abriu a reclamação pelo pedido."
      },
      {
       "t": "jargon",
       "term": "Mediação",
       "means": "Quando você e o cliente não chegam a um acordo e o <b>ML entra</b> pra analisar o caso e decidir.",
       "ex": "O comprador diz que veio quebrado e você discorda: o ML analisa as provas dos dois lados."
      },
      {
       "t": "compare",
       "left": {
        "title": "Defenda, com prova",
        "tone": "good",
        "items": [
         "Seu anúncio estava correto e o cliente só mudou de ideia",
         "Você tem foto, rastreio e conversa guardados",
         "O pedido foge do que o anúncio promete"
        ]
       },
       "right": {
        "title": "Ceda, e rápido",
        "tone": "good",
        "items": [
         "O erro foi seu: item trocado, defeito ou atraso",
         "Ceder custa menos do que perder reputação",
         "O cliente tem razão e a solução é simples",
         "Você não tem prova pra sustentar sua versão"
        ]
       }
      },
      {
       "t": "p",
       "title": "A conta de ceder",
       "html": "Exemplo: pedido de R$ 80,00 e frete de devolução de R$ 15,00. Cedendo e recebendo o produto de volta, você perde R$ 15,00. Brigando sem prova e perdendo, devolve R$ 80,00 e ainda paga R$ 15,00 de frete: R$ 95,00."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Quanto custa cada caminho (exemplo)",
       "unit": "R$",
       "hl": 1,
       "data": [
        {
         "label": "Ceder logo",
         "value": 15
        },
        {
         "label": "Brigar e perder",
         "value": 95,
         "tone": "pink"
        }
       ],
       "caption": "Exemplo: ceder custa R$ 15,00 de frete de volta. Brigar sem prova e perder custa R$ 95,00, fora a reputação."
      },
      {
       "t": "quiz",
       "q": "O comprador abriu reclamação dizendo que a cor veio errada, mas você tem foto do item conferido, da etiqueta e a conversa em que ele confirmou a cor. O que fazer?",
       "options": [
        "Ceder na hora e reembolsar tudo, porque reclamação aberta sempre se resolve melhor devolvendo o valor",
        "Ignorar a reclamação até o ML decidir, para não piorar a conversa com mais mensagens dos dois lados",
        "Responder que o cliente errou e que deveria ter lido o anúncio com atenção antes de decidir comprar",
        "Responder com educação, anexar as provas e explicar os fatos, mantendo a posição no caso"
       ],
       "answer": [
        3
       ],
       "why": "Com prova na mão e anúncio correto, vale defender com calma e fatos. Ceder sem motivo custa dinheiro e discutir com o cliente piora o caso."
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "Acolha.",
         "html": "Mostre que entendeu o problema, sem culpar o cliente."
        },
        {
         "title": "Fale os fatos.",
         "html": "Diga o que aconteceu, assumindo o que foi seu."
        },
        {
         "title": "Ofereça solução.",
         "html": "Diga o que vai fazer e até quando."
        },
        {
         "title": "Feche o ciclo.",
         "html": "Agradeça e confirme se resolveu."
        }
       ]
      },
      {
       "t": "table",
       "title": "Mensagem ruim x mensagem boa",
       "head": [
        "",
        "Ruim",
        "Boa"
       ],
       "rows": [
        [
         "Abertura",
         "“Leia o anúncio antes”",
         "“Entendi o seu caso”"
        ],
        [
         "Tom",
         "Acusa o cliente",
         "Calmo e respeitoso"
        ],
        [
         "Tamanho",
         "Textão de justificativa",
         "Curta, com fatos"
        ],
        [
         "Fechamento",
         "Sem prazo nem solução",
         "Prazo e próximo passo"
        ]
       ],
       "hl": 2,
       "caption": "Firme é ter prazo e solução. Humano é ter empatia. A mensagem boa tem os dois."
      },
      {
       "t": "say",
       "title": "Fala assim: reclamação",
       "html": "“Entendo a sua frustração e quero resolver. Já registrei o problema e te dou uma solução ainda hoje. Pra agilizar, pode me mandar uma foto do produto? Obrigado pela paciência.”"
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Discutir com o cliente pra provar que ele está errado. Você ganha o argumento e perde a venda, a avaliação e talvez a reputação. Resolva primeiro, explique depois."
      },
      {
       "t": "p",
       "title": "E as avaliações?",
       "html": "Depois da compra, o cliente avalia o produto e o atendimento. Avaliação ruim é pista: leia, descubra a causa (embalagem, descrição ou prazo?) e conserte na origem, pra não se repetir."
      },
      {
       "t": "quiz",
       "q": "Qual resposta a uma reclamação de atraso segue o tom firme e humano da aula?",
       "options": [
        "Atrasos acontecem com todo mundo, então peço que aguarde, pois não consigo prever quando vai sair",
        "Entendi o transtorno e peço desculpa. Seu pedido sai hoje e te envio o rastreio até as 18h",
        "O prazo estava no anúncio e você aceitou ao comprar, então não há o que fazer além de esperar",
        "Sinto muito por tudo isso e peço mil desculpas, farei o que for preciso e juro que não se repete"
       ],
       "answer": [
        1
       ],
       "why": "A resposta boa acolhe, assume o problema e dá prazo concreto. As outras jogam a culpa, não resolvem ou prometem demais."
      },
      {
       "t": "recap",
       "items": [
        "Pergunta respondida rápido vira venda",
        "Defenda com prova, ceda rápido quando errou",
        "Firme é prazo e solução; humano é empatia",
        "Discutir com o cliente custa caro",
        "Avaliação ruim é pista pra consertar a causa"
       ]
      }
     ]
    },
    {
     "id": "gf-l3-4",
     "title": "Pedidos, etiqueta e prazos",
     "minutes": 6,
     "goal": "Saber o caminho do pedido, da venda ao despacho, e como cumprir prazos, evitar cancelamentos e embalar certo.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📦",
       "title": "O caminho do pedido, sem atraso",
       "text": "Da venda ao despacho, cada etapa tem prazo. Em 6 minutos você sabe o que fazer em cada uma."
      },
      {
       "t": "flow",
       "title": "A vida de um pedido",
       "items": [
        {
         "icon": "🛒",
         "title": "Venda aprovada",
         "text": "Pagamento confirmado"
        },
        {
         "icon": "🧾",
         "title": "Nota fiscal",
         "text": "Emita conforme combinado com o contador"
        },
        {
         "icon": "📦",
         "title": "Embalagem",
         "text": "Proteja e confira o item"
        },
        {
         "icon": "🏷️",
         "title": "Etiqueta",
         "text": "Imprima e cole no pacote"
        },
        {
         "icon": "🚚",
         "title": "Despacho",
         "text": "Entregue dentro do prazo"
        }
       ],
       "caption": "Um atraso em qualquer passo cai no mesmo lugar: a reputação."
      },
      {
       "t": "jargon",
       "term": "Prazo de despacho",
       "means": "O tempo que você tem, depois da venda, pra entregar o pacote à coleta ou à agência de postagem.",
       "ex": "Vendeu hoje: o relógio já está correndo até a postagem. Confira o prazo vigente no seu anúncio."
      },
      {
       "t": "big",
       "emoji": "⏰",
       "html": "Pedido atrasado não é só <b>cliente bravo</b>.",
       "sub": "Atraso pesa na reputação e pode virar cancelamento."
      },
      {
       "t": "p",
       "title": "Onde o pedido costuma travar",
       "html": "Exemplo de um dia com 100 vendas. Quase sempre o pedido trava no meio do caminho, entre embalar e etiquetar, e não na venda nem na entrega."
      },
      {
       "t": "chart",
       "kind": "funnel",
       "title": "Funil do dia (exemplo)",
       "data": [
        {
         "label": "Vendas aprovadas",
         "value": 100
        },
        {
         "label": "Embaladas",
         "value": 96
        },
        {
         "label": "Etiquetadas",
         "value": 88
        },
        {
         "label": "Despachadas no prazo",
         "value": 85
        }
       ],
       "caption": "Exemplo: de 100 vendas, só 85 saem no prazo. A maior queda é entre embalar e etiquetar: olha onde a barra cai."
      },
      {
       "t": "list",
       "title": "Causas comuns de atraso",
       "items": [
        "Estoque do sistema diferente do estoque real",
        "Etiqueta impressa tarde ou com erro",
        "Embalagem que acabou na hora da venda",
        "Pico de vendas sem equipe pra separar"
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Cancelar também custa",
       "html": "Cancelar venda por falta de estoque ou erro de preço pesa na reputação. Melhor prevenir: estoque sincronizado, preço conferido antes de publicar e anúncio pausado quando o produto acaba."
      },
      {
       "t": "tree",
       "title": "Por que os pedidos são cancelados?",
       "root": "Pedidos sendo cancelados",
       "branches": [
        {
         "label": "Estoque",
         "items": [
          "O sistema mostra saldo que não existe?",
          "A integração demorou pra dar baixa?"
         ]
        },
        {
         "label": "Preço",
         "items": [
          "O preço saiu errado no anúncio?",
          "Uma promoção ficou ativa por engano?"
         ]
        },
        {
         "label": "Cliente",
         "items": [
          "Ele desistiu antes do envio?",
          "O pagamento não foi confirmado?"
         ]
        }
       ]
      },
      {
       "t": "quiz",
       "q": "Entraram 3 vendas de um item sem estoque físico, mas o sistema ainda mostrava saldo. Qual é a melhor sequência de ações?",
       "options": [
        "Avisar os clientes, resolver os pedidos com honestidade, pausar o anúncio e corrigir a sincronização do estoque",
        "Esperar o fornecedor entregar e despachar depois do prazo, sem avisar, torcendo para ninguém reclamar",
        "Despachar um produto parecido no lugar, porque o cliente prefere receber algo a ficar sem nada",
        "Cancelar os pedidos em silêncio e manter o anúncio ativo, já que o estoque entra de novo na semana"
       ],
       "answer": [
        0
       ],
       "why": "Comunicar, resolver e pausar o anúncio limita o dano. Corrigir a sincronização evita que o erro se repita na próxima venda."
      },
      {
       "t": "jargon",
       "term": "Etiqueta de envio",
       "means": "O papel com o código do pedido que a transportadora lê. <b>Sem ela, o pacote não é identificado nem rastreado.</b>",
       "ex": "Imprimiu, colou no pacote, conferiu se o código está legível: pronto pra postar."
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "Separe.",
         "html": "Pegue o item certo e confira modelo e cor."
        },
        {
         "title": "Embale.",
         "html": "Proteja contra impacto e umidade."
        },
        {
         "title": "Etiquete.",
         "html": "Cole lisa, sem dobrar nem cobrir o código."
        },
        {
         "title": "Despache.",
         "html": "Poste ou entregue à coleta dentro do prazo."
        }
       ]
      },
      {
       "t": "compare",
       "left": {
        "title": "Embalagem certa",
        "tone": "good",
        "items": [
         "Tamanho próximo ao do produto",
         "Proteção contra batida",
         "Etiqueta lisa e legível",
         "Peso e medidas cadastrados batem com o pacote"
        ]
       },
       "right": {
        "title": "Embalagem que dá dor de cabeça",
        "tone": "bad",
        "items": [
         "Caixa enorme pra item pequeno",
         "Item solto, sem proteção",
         "Etiqueta amassada ou coberta por fita",
         "Peso cadastrado diferente do real"
        ]
       }
      },
      {
       "t": "conta",
       "title": "O dano que sai caro (exemplo)",
       "rows": [
        [
         "Venda recebida",
         "R$ 60,00",
         "pos"
        ],
        [
         "Reembolso por dano",
         "-R$ 60,00",
         "neg"
        ],
        [
         "Custo do produto perdido",
         "-R$ 25,00",
         "neg"
        ],
        [
         "Frete de ida",
         "-R$ 12,00",
         "neg"
        ]
       ],
       "total": [
        "Resultado do pedido",
        "-R$ 37,00"
       ],
       "note": "Exemplo. Uma embalagem reforçada de R$ 3,00 teria evitado a perda."
      },
      {
       "t": "quiz",
       "multi": true,
       "q": "Marque todas: quais práticas ajudam a evitar atraso de despacho e cancelamento?",
       "options": [
        "Manter o estoque do sistema igual ao físico, com baixa automática a cada venda feita",
        "Imprimir as etiquetas todas de uma vez no fim da semana, para ganhar tempo de equipe",
        "Conferir o preço do anúncio antes de publicar ou de ativar uma promoção nova",
        "Deixar o anúncio ativo mesmo sem estoque, para manter a posição que ele tem na busca",
        "Esperar o último dia do prazo para despachar, juntando mais pedidos por viagem"
       ],
       "answer": [
        0,
        2
       ],
       "why": "Estoque sincronizado e preço conferido evitam venda impossível. Etiqueta acumulada, anúncio sem estoque e despacho no limite aumentam atraso e cancelamento."
      },
      {
       "t": "say",
       "title": "Fala assim: avisar um atraso",
       "html": "“Oi! Seu pedido teve um imprevisto e vai sair amanhã. Quis te avisar antes de você precisar perguntar. Se preferir, posso cancelar agora e devolver o valor. Me diz qual opção fica melhor pra você.”"
      },
      {
       "t": "recap",
       "items": [
        "Pedido: venda, nota, embalagem, etiqueta, despacho",
        "Atraso e cancelamento pesam na reputação",
        "Estoque sincronizado evita venda sem produto",
        "Etiqueta lisa e embalagem na medida",
        "Avise o cliente antes que ele pergunte"
       ]
      }
     ]
    },
    {
     "id": "gf-l3-5",
     "title": "Programas, benefícios e Loja Oficial",
     "minutes": 8,
     "goal": "Entender níveis, benefícios e Loja Oficial e conseguir auditar a saúde de uma conta para achar por que perdeu visibilidade.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🏅",
       "title": "Níveis, benefícios e Loja Oficial",
       "text": "Quanto mais confiança a conta ganha, mais vitrine e benefício vêm junto. No fim, você faz uma auditoria completa."
      },
      {
       "t": "big",
       "emoji": "🚪",
       "html": "Reputação boa abre <b>portas</b>: programa, benefício e vitrine.",
       "sub": "Mas as regras mudam. Confira sempre a fonte oficial."
      },
      {
       "t": "stairs",
       "title": "A escada do vendedor (ilustração)",
       "items": [
        {
         "tag": "1",
         "title": "Conta nova",
         "text": "Ainda construindo histórico de vendas"
        },
        {
         "tag": "2",
         "title": "Conta consolidada",
         "text": "Boa reputação e vendas constantes"
        },
        {
         "tag": "3",
         "title": "Conta destaque",
         "text": "Volume, reputação alta e atendimento redondo"
        }
       ]
      },
      {
       "t": "jargon",
       "term": "Programa de níveis",
       "means": "O programa em que o ML reconhece vendedores com bom histórico e dá <b>benefícios</b> em troca.",
       "ex": "Os critérios, os nomes e os benefícios mudam: confira na documentação oficial do ML."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "Níveis, programas e benefícios de frete mudam com frequência. Regras mudam; a fonte final é a documentação oficial (Mercado Livre, Mercado Ads, Shopee University, Receita) e o contador do cliente."
      },
      {
       "t": "table",
       "title": "Benefícios: o que ganha e o que cuidar",
       "head": [
        "Benefício",
        "Por que ajuda",
        "O que cuidar"
       ],
       "rows": [
        [
         "Condição de frete",
         "Deixa o anúncio mais atrativo",
         "Custo entra no preço"
        ],
        [
         "Mais destaque",
         "Aparece melhor na busca",
         "Manter a reputação"
        ],
        [
         "Programas e ações",
         "Acesso a campanhas",
         "Cumprir os critérios"
        ]
       ],
       "caption": "Exemplos genéricos: os benefícios reais mudam. Benefício bom ainda precisa caber na margem."
      },
      {
       "t": "jargon",
       "term": "Loja Oficial",
       "means": "Vitrine de uma <b>marca</b> dentro do ML, com página própria e selo que reforça a confiança do comprador.",
       "ex": "O comprador vê o nome da marca e uma página organizada. As exigências mudam: confira no ML."
      },
      {
       "t": "flow",
       "title": "O caminho da marca",
       "items": [
        {
         "icon": "✍️",
         "title": "Registro da marca",
         "text": "No INPI, órgão que registra marcas"
        },
        {
         "icon": "📄",
         "title": "Documentos",
         "text": "Provam que a marca é sua"
        },
        {
         "icon": "🏬",
         "title": "Loja Oficial",
         "text": "Solicitação e análise pelo ML"
        },
        {
         "icon": "🛡️",
         "title": "Proteção",
         "text": "Denúncia de cópia e uso indevido"
        }
       ],
       "caption": "Exigências e prazos mudam: confira os requisitos vigentes no ML e no INPI."
      },
      {
       "t": "compare",
       "left": {
        "title": "Sem registro de marca",
        "tone": "bad",
        "items": [
         "Qualquer um pode copiar seu nome",
         "Mais difícil denunciar cópias",
         "Sem vitrine de marca no ML"
        ]
       },
       "right": {
        "title": "Com registro de marca",
        "tone": "good",
        "items": [
         "Você prova que a marca é sua",
         "Tem base para denunciar cópias",
         "Abre caminho pra Loja Oficial"
        ]
       }
      },
      {
       "t": "quiz",
       "q": "Um cliente quer entrar na Loja Oficial, mas a marca dele ainda não tem registro. Qual orientação está de acordo com a aula?",
       "options": [
        "Pedir a Loja Oficial primeiro, pois o ML cuida do registro da marca no INPI em nome do vendedor",
        "Esquecer a Loja Oficial, porque marca sem registro nunca pode ter qualquer proteção dentro do ML",
        "Fazer o registro da marca no INPI e depois conferir os requisitos vigentes do ML para a Loja Oficial",
        "Abrir a Loja Oficial com o nome de outra marca já registrada, só para ganhar tempo de análise"
       ],
       "answer": [
        2
       ],
       "why": "O registro é a base: prova que a marca é do vendedor e abre caminho pra proteção e pra Loja Oficial. Os requisitos exatos mudam, então confira no ML."
      },
      {
       "t": "list",
       "title": "Mão na massa",
       "items": [
        "Use conta-teste ou real anonimizada. Anote a cor do termômetro",
        "Liste atrasos, cancelamentos e reclamações abertas",
        "Confira conta, Mercado Pago, usuários e certificações",
        "Cheque estoque, preço e frete dos anúncios que mais vendem",
        "Monte o plano: ação, responsável, prazo e métrica"
       ]
      },
      {
       "t": "tree",
       "title": "Perdeu visibilidade: por onde começar?",
       "root": "Visibilidade caiu",
       "branches": [
        {
         "label": "Reputação",
         "items": [
          "O termômetro mudou de cor?",
          "Atraso ou cancelamento subiu?"
         ]
        },
        {
         "label": "Anúncio",
         "items": [
          "Título ou foto mudou?",
          "Está pausado ou com erro?"
         ]
        },
        {
         "label": "Preço e estoque",
         "items": [
          "Concorrente baixou o preço?",
          "O estoque acabou ou ficou parado?"
         ]
        },
        {
         "label": "Ads e benefícios",
         "items": [
          "Ads (anúncios pagos) parou?",
          "Perdeu benefício de frete?"
         ]
        }
       ]
      },
      {
       "t": "sim",
       "kind": "hipotese",
       "title": "Bora treinar: por onde começar?",
       "intro": "Um cenário de queda de vendas. Escolha qual causa investigar primeiro.",
       "rounds": 3
      },
      {
       "t": "p",
       "title": "Priorize o plano de correção",
       "html": "A auditoria acha vários problemas. Nem todos têm o mesmo retorno. No gráfico, o que está no alto e à esquerda dá muito resultado com pouco esforço: comece por aí."
      },
      {
       "t": "chart",
       "kind": "matrix",
       "title": "Plano de correção da conta",
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
         "label": "Zerar atrasos",
         "x": 3,
         "y": 9
        },
        {
         "label": "Sincronizar estoque",
         "x": 4,
         "y": 8
        },
        {
         "label": "Refazer fotos",
         "x": 7,
         "y": 6
        },
        {
         "label": "Registrar a marca",
         "x": 9,
         "y": 7
        },
        {
         "label": "Revisar ordem das fotos",
         "x": 2,
         "y": 3
        }
       ],
       "caption": "Atrasos e estoque rendem mais com menos esforço. Registro de marca é importante, mas pede planejamento."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "O dado da conta manda",
       "html": "Benchmark de blog e o que “todo mundo faz” servem de pista. Quem decide é o dado da sua conta: reputação, pedidos, estoque e anúncios."
      },
      {
       "t": "say",
       "title": "Fala assim: apresentar a auditoria",
       "html": "“Auditei sua conta e achei três pontos: atrasos subindo, estoque desatualizado e uma certificação pendente. Fazendo nessa ordem, o ganho é maior com menos esforço. O plano já tem responsável e prazo.”"
      },
      {
       "t": "quiz",
       "q": "Uma conta perdeu visibilidade e você tem 15 minutos. Qual sequência de checagem faz mais sentido?",
       "options": [
        "Reputação e indicadores, depois pedidos e estoque, depois anúncio e preço, e só então Ads e benefícios",
        "Trocar todos os títulos e fotos dos anúncios primeiro, e só depois olhar reputação, pedidos e estoque",
        "Aumentar o orçamento de Ads de imediato, porque mais investimento sempre devolve a visibilidade perdida",
        "Reduzir o preço de todos os anúncios na mesma hora, pois preço menor resolve qualquer queda de visibilidade"
       ],
       "answer": [
        0
       ],
       "why": "Começa pelo que mais derruba a exposição e é mais rápido de ver: reputação e operação. Mexer em título, Ads ou preço sem diagnóstico é chute."
      },
      {
       "t": "recap",
       "items": [
        "Reputação boa abre programas e benefícios",
        "Regras mudam: confira a fonte oficial",
        "Registro de marca é a base da Loja Oficial",
        "Auditoria: reputação, pedidos, estoque, anúncio",
        "Priorize o que dá mais impacto com menos esforço"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "gf-m4",
   "n": 4,
   "title": "Operação na Shopee",
   "tagline": "Da Central do Vendedor às datas duplas: como a Shopee funciona e no que ela difere do ML.",
   "outcome": "Operar uma loja na Shopee do cadastro até a campanha de data dupla, sem perder pontos e sem copiar o jeito do Mercado Livre.",
   "lessons": [
    {
     "id": "gf-l4-1",
     "title": "Central do Vendedor e tipos de loja",
     "minutes": 5,
     "goal": "Entender como a Central do Vendedor funciona e a diferença entre loja comum e Shopee Mall.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🛍️",
       "title": "Shopee: outra lógica, outra loja",
       "text": "Em poucos minutos você entende a Central do Vendedor e sabe quando uma loja vira Shopee Mall."
      },
      {
       "t": "big",
       "emoji": "🧭",
       "html": "A Shopee tem <b>outra lógica</b>, outro público e outras ferramentas.",
       "sub": "Antes de mexer no painel, entenda o jogo."
      },
      {
       "t": "jargon",
       "term": "Central do Vendedor",
       "means": "O painel da Shopee onde você cuida de <b>produtos, pedidos, marketing e desempenho</b> da loja.",
       "ex": "Pense nela como o escritório da loja: tudo da operação passa por ali."
      },
      {
       "t": "flow",
       "title": "Do cadastro à primeira venda",
       "items": [
        {
         "icon": "🪪",
         "title": "Cadastro",
         "text": "Dados da pessoa ou da empresa e verificação"
        },
        {
         "icon": "🏪",
         "title": "Perfil da loja",
         "text": "Nome, logo, capa e descrição"
        },
        {
         "icon": "🚚",
         "title": "Envio",
         "text": "Endereço de coleta e canais de envio ativos"
        },
        {
         "icon": "📝",
         "title": "Produtos",
         "text": "Anúncios com foto, título e preço"
        },
        {
         "icon": "🎉",
         "title": "Primeira venda",
         "text": "Pedido pago, hora de despachar"
        }
       ],
       "caption": "A ordem pode mudar um pouco no painel, mas todo caminho passa por esses cinco pontos."
      },
      {
       "t": "list",
       "title": "Perfil que passa confiança",
       "items": [
        "Nome fácil de lembrar, igual ao da marca",
        "Logo e capa limpos, sem poluição",
        "Descrição curta dizendo o que a loja vende",
        "Categorias da loja bem organizadas",
        "Políticas e prazos claros pro cliente"
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Cuidado no cadastro",
       "html": "Dado errado no cadastro (nome, documento, conta bancária) pode travar a verificação da loja e atrasar o recebimento. Confira tudo com o cliente antes de enviar."
      },
      {
       "t": "jargon",
       "term": "Loja comum",
       "means": "O formato <b>padrão</b>: qualquer vendedor que cumpra as regras de cadastro abre a loja e começa a vender.",
       "ex": "Costuma ser o ponto de partida de quem está começando na Shopee."
      },
      {
       "t": "jargon",
       "term": "Shopee Mall",
       "tag": "Loja oficial",
       "means": "Área da Shopee para <b>marcas e revendedores autorizados</b>, com selo próprio e comprovação extra.",
       "ex": "O selo diz ao cliente: aqui é loja oficial, pode comprar sem medo."
      },
      {
       "t": "table",
       "title": "Loja comum x Shopee Mall",
       "head": [
        "",
        "Loja comum",
        "Shopee Mall"
       ],
       "rows": [
        [
         "Quem entra",
         "Quem cumpre o cadastro padrão",
         "Dono da marca ou revenda autorizada"
        ],
        [
         "Comprovação",
         "Documentos de cadastro",
         "Cadastro mais prova de marca ou autorização"
        ],
        [
         "Selo",
         "Sem selo de loja oficial",
         "Selo de loja oficial"
        ],
        [
         "Exigência",
         "Regras padrão da plataforma",
         "Padrão mais rígido (confira na documentação)"
        ],
        [
         "Faz sentido pra",
         "A maioria dos sellers",
         "Marca própria e distribuidor autorizado"
        ]
       ],
       "hl": 2,
       "caption": "O Mall troca mais exigência por mais confiança do cliente. Requisitos e benefícios mudam: confira na documentação oficial."
      },
      {
       "t": "compare",
       "left": {
        "title": "Mall faz sentido",
        "tone": "good",
        "items": [
         "Marca própria, com registro em dia",
         "Distribuidor com autorização da marca",
         "Produto em que a confiança pesa na compra"
        ]
       },
       "right": {
        "title": "Ainda não",
        "tone": "bad",
        "items": [
         "Revenda sem autorização da marca",
         "Loja nova, sem rotina de pós-venda",
         "Operação que não segura um padrão rígido"
        ]
       }
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Cadastro, requisitos do Mall e programas mudam com frequência. A fonte final é a documentação oficial (Shopee University e Central do Vendedor) e, no fiscal, o contador do cliente."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Pra começar, a loja comum resolve. O Mall é uma etapa a mais: pede prova de marca ou autorização, mas entrega o selo de loja oficial. Vamos ver se faz sentido pro seu caso.”"
      },
      {
       "t": "quiz",
       "q": "O seller tem marca própria e quer mais confiança do cliente na Shopee. O que você explica sobre loja comum e Shopee Mall?",
       "options": [
        "O Mall é um upgrade pago que qualquer loja comum liga no painel para aparecer mais nas buscas",
        "A loja comum precisa de prova de marca, e o Mall aceita qualquer vendedor que cumpra o cadastro",
        "O Mall dá selo de loja oficial, mas pede prova de marca ou autorização além do cadastro normal",
        "O Mall dispensa as regras de pedido e pontuação, porque o selo de loja oficial já vale como nota"
       ],
       "answer": [
        2
       ],
       "why": "O Mall é a área de lojas oficiais: traz selo e confiança, em troca de comprovação extra. Não é upgrade comprado e não tira a loja das regras de pedido e pontuação."
      },
      {
       "t": "recap",
       "items": [
        "A Central do Vendedor é o painel da loja",
        "Cadastro certo evita travar a verificação",
        "Loja comum: formato padrão, abre quem cumpre as regras",
        "Mall: selo de loja oficial, com mais comprovação"
       ]
      }
     ]
    },
    {
     "id": "gf-l4-2",
     "title": "Pontuação e penalidades",
     "minutes": 6,
     "goal": "Entender o que a Shopee mede na loja, como as penalidades surgem e como subir os indicadores.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🚦",
       "title": "Seu placar na Shopee",
       "text": "Veja o que a plataforma mede, como as penalidades aparecem e como recuperar uma loja que escorregou."
      },
      {
       "t": "big",
       "emoji": "👀",
       "html": "A Shopee <b>vigia</b> sua loja o tempo todo.",
       "sub": "Quem entrega bem ganha visibilidade. Quem erra repetido paga."
      },
      {
       "t": "jargon",
       "term": "Desempenho da loja",
       "means": "O <b>placar</b> do painel: mostra como a loja anda em pedidos, envio, atendimento e avaliações.",
       "ex": "É o boletim da loja. Nota ruim vira dor de cabeça e menos vitrine."
      },
      {
       "t": "list",
       "title": "O que ela costuma medir",
       "items": [
        "Pedidos não cumpridos (cancelados e devolvidos)",
        "Atraso no envio",
        "Resposta no chat",
        "Avaliações dos clientes",
        "Anúncios fora das regras"
       ]
      },
      {
       "t": "conta",
       "title": "Pedidos não cumpridos (exemplo)",
       "rows": [
        [
         "Pedidos no período",
         "200"
        ],
        [
         "Cancelados pela loja",
         "12",
         "neg"
        ],
        [
         "Devolvidos ou reembolsados",
         "8",
         "neg"
        ],
        [
         "Total não cumpridos",
         "20",
         "neg"
        ]
       ],
       "total": [
        "Taxa de não cumpridos (20 ÷ 200)",
        "10%"
       ],
       "note": "Exemplo pra entender a lógica. A fórmula e as metas oficiais estão no painel."
      },
      {
       "t": "jargon",
       "term": "Penalidade",
       "means": "<b>Ponto negativo</b> que a loja recebe quando quebra uma regra, como cancelar pedido, atrasar envio ou subir anúncio proibido.",
       "ex": "Quanto mais pontos, mais pesa a consequência na loja."
      },
      {
       "t": "flow",
       "title": "Como um erro vira dor",
       "items": [
        {
         "icon": "⚠️",
         "title": "Erro repetido",
         "text": "Atraso ou cancelamento"
        },
        {
         "icon": "📉",
         "title": "Ponto negativo",
         "text": "Entra no placar da loja"
        },
        {
         "icon": "👁️",
         "title": "Menos visibilidade",
         "text": "A loja perde espaço"
        },
        {
         "icon": "🚫",
         "title": "Restrição",
         "text": "Em casos graves, até suspensão"
        }
       ],
       "caption": "Quanto mais repete, mais pesa. As consequências exatas e os prazos estão na documentação oficial."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Indicadores, metas e penalidades da Shopee mudam. A fonte final é a Shopee University e o painel da Central do Vendedor. Confira o valor vigente antes de prometer algo ao cliente."
      },
      {
       "t": "p",
       "title": "Onde estão os pontos perdidos",
       "html": "Nem todo erro pesa igual. Olhe de onde vêm os pontos negativos e <b>ataque primeiro a maior fatia</b>. No gráfico, uma loja de exemplo perde quase metade dos pontos por atraso no envio."
      },
      {
       "t": "chart",
       "kind": "hbar",
       "title": "De onde vêm os pontos (exemplo)",
       "unit": "%",
       "hl": 0,
       "data": [
        {
         "label": "Atraso no envio",
         "value": 45
        },
        {
         "label": "Cancelamento pela loja",
         "value": 30
        },
        {
         "label": "Devolução",
         "value": 15
        },
        {
         "label": "Anúncio fora da regra",
         "value": 10
        }
       ],
       "caption": "Olha a barra mais alta: atraso no envio. Nessa loja de exemplo, é o primeiro foco."
      },
      {
       "t": "sim",
       "kind": "repdiag",
       "title": "Bora treinar: qual indicador atacar primeiro",
       "intro": "Veja os números de cada loja e escolha o indicador que mais vale atacar agora. A lógica é a mesma nas duas plataformas.",
       "rounds": 3
      },
      {
       "t": "tree",
       "title": "Placar caiu: por onde começar",
       "root": "A pontuação da loja caiu",
       "branches": [
        {
         "label": "Envio",
         "items": [
          "Pedidos despachados fora do prazo?",
          "Horário de corte irreal pra equipe?"
         ]
        },
        {
         "label": "Cancelamento",
         "items": [
          "Estoque desatualizado?",
          "Preço ou variação errada no anúncio?"
         ]
        },
        {
         "label": "Atendimento",
         "items": [
          "Chat sem resposta?",
          "Devolução mal tratada?"
         ]
        }
       ],
       "caption": "Comece pelo ramo com mais dado ruim no painel."
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "1. Ache o mais crítico",
         "html": "Veja no painel qual indicador está pior e quanto ele pesa."
        },
        {
         "title": "2. Descubra a causa",
         "html": "Estoque, prazo, embalagem ou atendimento? Olhe os pedidos ruins um a um."
        },
        {
         "title": "3. Conserte na raiz",
         "html": "Ajuste estoque, horário de corte ou rotina. Remendo não segura."
        },
        {
         "title": "4. Acompanhe toda semana",
         "html": "Anote o indicador toda segunda e veja se melhorou."
        }
       ]
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Não é castigo, é placar. A Shopee dá mais vitrine pra quem entrega no prazo. Vamos achar o que mais pesa na sua loja e consertar por ali, uma semana de cada vez.”"
      },
      {
       "t": "quiz",
       "q": "A loja acumula pontos negativos por cancelar pedidos sem estoque. Qual é a ação mais certa?",
       "options": [
        "Sincronizar o estoque com o sistema da loja e pausar o que acabou, para parar de vender o que não existe",
        "Cancelar os pedidos sem estoque logo que perceber, porque cancelar cedo não gera ponto negativo",
        "Pausar a loja por um mês e voltar com os mesmos anúncios, esperando a pontuação limpar sozinha",
        "Responder o chat mais rápido, porque um bom atendimento compensa os cancelamentos no placar"
       ],
       "answer": [
        0
       ],
       "why": "A causa é estoque desatualizado, então o conserto é sincronizar e pausar o que acabou. Cancelar não esconde o erro, e atendimento rápido não apaga o ponto de cancelamento."
      },
      {
       "t": "recap",
       "items": [
        "A Shopee mede pedido, envio, chat e anúncio",
        "Penalidade é ponto negativo por quebrar regra",
        "Ataque primeiro a maior fatia dos pontos",
        "Conserte a causa, não o sintoma",
        "Regra muda: confira o painel e a documentação"
       ]
      }
     ]
    },
    {
     "id": "gf-l4-3",
     "title": "Pedidos e pós-venda na Shopee",
     "minutes": 6,
     "goal": "Conseguir acompanhar o pedido do pagamento à entrega e tratar cancelamento, devolução e chat sem perder pontos.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📦",
       "title": "Do clique à entrega, sem tropeçar",
       "text": "Siga um pedido da Shopee do pagamento até a avaliação e saiba onde cada tropeço custa ponto."
      },
      {
       "t": "flow",
       "title": "A vida de um pedido",
       "items": [
        {
         "icon": "🛒",
         "title": "Cliente paga",
         "text": "O pedido confirmado entra na fila da loja"
        },
        {
         "icon": "🖨️",
         "title": "Organizar envio",
         "text": "Você gera a etiqueta pelo painel"
        },
        {
         "icon": "📦",
         "title": "Embalar e despachar",
         "text": "Tudo dentro do prazo de envio"
        },
        {
         "icon": "🚚",
         "title": "Transportadora entrega",
         "text": "O rastreio acompanha o pacote"
        },
        {
         "icon": "⭐",
         "title": "Cliente confirma e avalia",
         "text": "Fecha o ciclo do pedido"
        }
       ],
       "caption": "Os atrasos nascem nos passos 2 e 3. É ali que a loja controla o jogo."
      },
      {
       "t": "big",
       "emoji": "⏱️",
       "html": "O prazo de envio é <b>sagrado</b>.",
       "sub": "Atraso entra no placar da loja, mesmo sem reclamação."
      },
      {
       "t": "jargon",
       "term": "Prazo de envio",
       "means": "O tempo que a loja tem, depois do pedido pago, pra <b>entregar o pacote à transportadora</b>.",
       "ex": "O número vale o que o painel mostrar hoje: quem decide é a Shopee, e ele muda."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Prazos de envio, regras de cancelamento e de devolução mudam. Confira o valor vigente na Shopee University e na Central do Vendedor antes de passar um número pro cliente."
      },
      {
       "t": "list",
       "title": "Por que pedido é cancelado",
       "items": [
        "Estoque desatualizado: vendeu o que não tinha",
        "Preço ou variação errada no anúncio",
        "Pacote que não sai no prazo",
        "Cliente desiste antes do envio"
       ]
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "1. Sincronize o estoque",
         "html": "Use um sistema de gestão (ERP) ligado à loja ou atualize na mão todo dia."
        },
        {
         "title": "2. Confira preço e variação",
         "html": "Antes de subir anúncio ou campanha, revise valor, cor e tamanho."
        },
        {
         "title": "3. Combine um horário de corte",
         "html": "Defina com a equipe um horário limite que ela cumpre de verdade."
        },
        {
         "title": "4. Pause o que faltou",
         "html": "Produto sem estoque? Pause o anúncio na hora."
        }
       ]
      },
      {
       "t": "p",
       "title": "Onde os pedidos se perdem",
       "html": "A cada etapa, alguns pedidos caem. No gráfico de exemplo, de 100 pedidos pagos só 85 chegam ao fim sem devolução. Cada perda pode virar <b>ponto negativo ou venda devolvida</b>."
      },
      {
       "t": "chart",
       "kind": "funnel",
       "title": "Do pedido ao dinheiro (exemplo)",
       "unit": "un",
       "data": [
        {
         "label": "Pedidos pagos",
         "value": 100
        },
        {
         "label": "Despachados no prazo",
         "value": 94
        },
        {
         "label": "Entregues",
         "value": 90
        },
        {
         "label": "Sem devolução",
         "value": 85
        }
       ],
       "caption": "Cada degrau perde alguns pedidos. Olhe onde a queda é maior: é ali que a loja deve agir primeiro."
      },
      {
       "t": "jargon",
       "term": "Devolução e reembolso",
       "means": "Quando o cliente pede o <b>dinheiro de volta</b>. Dependendo do caso, o produto volta pra loja ou não.",
       "ex": "Chegou o item errado: o cliente abre a devolução e a loja analisa o pedido."
      },
      {
       "t": "flow",
       "title": "Devolução em 4 passos",
       "items": [
        {
         "icon": "🙋",
         "title": "Cliente abre o pedido",
         "text": "Conta o problema, com fotos"
        },
        {
         "icon": "🔍",
         "title": "Você analisa",
         "text": "Compara com seu vídeo de embalagem"
        },
        {
         "icon": "⚖️",
         "title": "Aceita ou contesta",
         "text": "Contestar pede prova"
        },
        {
         "icon": "💸",
         "title": "Caso fechado",
         "text": "Reembolso ou decisão da plataforma"
        }
       ],
       "caption": "Prazos e regras de cada etapa mudam: confira na documentação oficial."
      },
      {
       "t": "table",
       "title": "Aceitar ou contestar",
       "head": [
        "",
        "Aceitar",
        "Contestar"
       ],
       "rows": [
        [
         "Quando",
         "Erro seu ou defeito real",
         "Alegação que não bate com a prova"
        ],
        [
         "O que juntar",
         "Quase nada: resolva rápido",
         "Fotos, vídeo da embalagem e conversa"
        ],
        [
         "Risco",
         "Perder a venda",
         "Perder o caso se a prova for fraca"
        ]
       ],
       "caption": "Na dúvida, guarde prova de tudo: vídeo ao embalar e conversa no chat."
      },
      {
       "t": "p",
       "title": "Chat vende e pontua",
       "html": "O chat da Shopee é o balcão da loja: o cliente pergunta antes de comprar e reclama depois. <b>Resposta rápida</b> ajuda a vender e conta no placar. Respondeu, resolveu, registrou."
      },
      {
       "t": "say",
       "title": "Fala assim no chat",
       "html": "“Oi, Ana! Vi que seu pedido atrasou, e a falha foi nossa. Já despachei hoje e te mando o código de rastreio agora. Qualquer novidade eu te aviso por aqui.”"
      },
      {
       "t": "quiz",
       "q": "O pacote saiu um dia depois do prazo de envio e o cliente nem reclamou. O que isso significa para a loja?",
       "options": [
        "Nada, porque a Shopee só olha o prazo quando o cliente abre reclamação ou pede devolução",
        "O atraso entra no placar da loja mesmo sem reclamação, então o prazo vale pra todo pedido",
        "O pedido é cancelado sozinho e a loja perde a venda, mas o atraso não entra no placar",
        "Só conta se o atraso passar de uma semana, então um dia a mais sem despachar não pesa"
       ],
       "answer": [
        1
       ],
       "why": "O prazo é medido em todo pedido, com ou sem reclamação. Por isso a rotina precisa garantir o despacho no prazo, e não só atender quem reclama."
      },
      {
       "t": "recap",
       "items": [
        "Pedido: paga, organiza, embala, despacha, entrega",
        "Atraso no envio conta no placar",
        "Estoque certo evita cancelamento",
        "Devolução: junte prova antes de contestar",
        "Chat rápido vende e pontua"
       ]
      }
     ]
    },
    {
     "id": "gf-l4-4",
     "title": "Cupons, ofertas e datas duplas",
     "minutes": 8,
     "goal": "Conseguir escolher a ferramenta de venda certa e montar um plano de campanha de data dupla com mecânica e meta.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🎟️",
       "title": "Promoção que vende e dá lucro",
       "text": "Aprenda as ferramentas de venda da Shopee, faça a conta antes de dar desconto e monte um plano de data dupla."
      },
      {
       "t": "big",
       "emoji": "💸",
       "html": "Promoção boa <b>vende</b>. Promoção sem conta vende e <b>dá prejuízo</b>.",
       "sub": "Bora ver as ferramentas e a conta."
      },
      {
       "t": "table",
       "title": "As 4 ferramentas",
       "head": [
        "Ferramenta",
        "O que faz",
        "Bom pra"
       ],
       "rows": [
        [
         "Cupom",
         "Desconto no carrinho, com pedido mínimo",
         "Subir o valor do pedido"
        ],
        [
         "Oferta-relâmpago",
         "Preço baixo, por pouco tempo e estoque",
         "Atrair gente e girar estoque"
        ],
        [
         "Leve mais por menos",
         "Mais itens no pedido, mais desconto",
         "Vender mais itens por pedido"
        ],
        [
         "Combo",
         "Produtos juntos por um preço fechado",
         "Vender o que combina junto"
        ]
       ],
       "caption": "Todas dão desconto. A diferença é o que você quer ganhar com cada uma."
      },
      {
       "t": "conta",
       "title": "Leve 2 com 10% off (exemplo)",
       "rows": [
        [
         "2 itens a R$ 60,00",
         "R$ 120,00"
        ],
        [
         "Desconto de 10%",
         "- R$ 12,00",
         "neg"
        ],
        [
         "Cliente paga",
         "R$ 108,00"
        ],
        [
         "Produto (2 x R$ 30,00)",
         "- R$ 60,00",
         "neg"
        ],
        [
         "Taxas (20% de R$ 108,00)",
         "- R$ 21,60",
         "neg"
        ]
       ],
       "total": [
        "Sobra no pedido",
        "R$ 26,40"
       ],
       "note": "Sem promoção, 1 item rende R$ 18,00. Aqui o pedido rende mais, mas cada item rende menos (R$ 13,20). Valores de exemplo."
      },
      {
       "t": "jargon",
       "term": "Ticket médio",
       "means": "O <b>valor médio</b> de cada pedido da loja.",
       "ex": "Se 10 pedidos somam R$ 700,00, o ticket médio é R$ 70,00."
      },
      {
       "t": "lab",
       "preset": "promo",
       "title": "Teste: o desconto compensa?",
       "intro": "Mexa no desconto e na alta de vendas. Veja o lucro total antes e depois, e quanto precisa vender a mais pra empatar.",
       "defaults": {
        "preco": 100,
        "custo": 50,
        "taxas": 20,
        "desc": 10,
        "vol": 0
       },
       "note": "Números de exemplo. Na conta real, use os custos do cliente."
      },
      {
       "t": "sim",
       "kind": "promovale",
       "title": "Bora treinar: o desconto vale?",
       "intro": "Veja o desconto e a margem de cada rodada e decida se as vendas extras pagam a promoção.",
       "rounds": 3
      },
      {
       "t": "callout",
       "tone": "regra",
       "title": "Regra de bolso",
       "html": "Desconto come margem. Antes de aprovar, calcule <b>quantas vendas a mais</b> a loja precisa fazer pra ganhar o mesmo dinheiro de antes."
      },
      {
       "t": "jargon",
       "term": "Data dupla",
       "means": "Campanha em que o <b>dia e o mês são iguais</b>, como 9.9, 10.10 e 11.11, com mais gente comprando e mais ofertas.",
       "ex": "Quem prepara produto e estoque antes colhe mais no dia."
      },
      {
       "t": "p",
       "title": "A subida começa antes",
       "html": "O pico vem no Dia D, mas a subida começa dias antes: muita gente já pesquisa e guarda produto. No gráfico de exemplo, os pedidos crescem desde a semana anterior. <b>O preparo é antes, não no dia.</b>"
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Pedidos ao redor da data (exemplo)",
       "unit": "un",
       "x": [
        "D-14",
        "D-7",
        "D-1",
        "Dia D",
        "D+3",
        "D+7"
       ],
       "series": [
        {
         "name": "Pedidos",
         "values": [
          30,
          38,
          55,
          140,
          65,
          40
         ]
        }
       ],
       "caption": "Olha onde a linha sobe: já na semana antes. O pico é no Dia D, depois a queda."
      },
      {
       "t": "timeline",
       "title": "Plano de campanha (exemplo)",
       "items": [
        {
         "when": "D-30",
         "label": "Calendário e meta",
         "text": "Veja a data no calendário oficial e fixe a meta"
        },
        {
         "when": "D-21",
         "label": "Produtos e estoque",
         "text": "Escolha o que entra e confira o estoque"
        },
        {
         "when": "D-14",
         "label": "Preço e mecânica",
         "text": "Margem calculada, cupom e oferta prontos"
        },
        {
         "when": "D-7",
         "label": "Aquecimento",
         "text": "Avise os clientes e confira os anúncios"
        },
        {
         "when": "Dia D",
         "label": "Acompanhar de hora em hora",
         "text": "Estoque, pedidos e chat"
        },
        {
         "when": "D+3",
         "label": "Balanço",
         "text": "O que vendeu, o que sobrou e pedidos no prazo"
        }
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "O calendário oficial, as datas, as regras e a inscrição de cada campanha mudam. A fonte final é a Shopee University e a Central do Vendedor. Confira antes de montar o plano."
      },
      {
       "t": "conta",
       "title": "Meta do Dia D (exemplo)",
       "rows": [
        [
         "Pedidos num dia normal",
         "40"
        ],
        [
         "Meta: 3 vezes mais",
         "120"
        ],
        [
         "Ticket médio (valor médio do pedido)",
         "R$ 70,00"
        ]
       ],
       "total": [
        "Vendas previstas (120 x R$ 70,00)",
        "R$ 8.400,00"
       ],
       "note": "Meta de exemplo. A real sai do histórico da loja e do estoque que ela aguenta."
      },
      {
       "t": "list",
       "title": "Mão na massa: plano de data dupla",
       "items": [
        "<b>1.</b> Escolha uma loja (pode ser anonimizada) e uma data dupla do calendário oficial.",
        "<b>2.</b> Defina a mecânica: cupom, oferta-relâmpago, leve mais por menos ou combo.",
        "<b>3.</b> Faça a conta de margem de cada produto em oferta antes de aprovar.",
        "<b>4.</b> Fixe a meta (pedidos e ticket médio) e quem faz o quê.",
        "<b>5.</b> Apresente o plano em 2 minutos, como se fosse pro seller."
       ]
      },
      {
       "t": "p",
       "title": "Estoque antes de tudo",
       "html": "Campanha sem estoque vira cancelamento, e cancelamento vira ponto negativo. Só entra na oferta o produto que a loja consegue <b>entregar no prazo</b>. Olhe o estoque antes de olhar o desconto."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Nem tudo entra na oferta. Eu escolho os produtos em que a conta fecha e o estoque aguenta. Menos produtos, mais lucro e menos cancelamento no Dia D.”"
      },
      {
       "t": "quiz",
       "q": "O produto sai por R$ 100,00, custa R$ 50,00 pra loja e as taxas são 20% do preço. Com 10% de desconto, qual é a sobra por unidade? (números de exemplo)",
       "options": [
        "R$ 22,00 por unidade",
        "R$ 20,00 por unidade",
        "R$ 30,00 por unidade",
        "R$ 40,00 por unidade"
       ],
       "answer": [
        0
       ],
       "why": "Com 10% de desconto o preço cai para R$ 90,00. As taxas (20%) caem junto: R$ 18,00. A sobra é 90 - 50 - 18 = R$ 22,00, contra R$ 30,00 sem desconto."
      },
      {
       "t": "recap",
       "items": [
        "Cupom, oferta, leve mais por menos e combo têm usos diferentes",
        "Desconto come margem: faça a conta antes",
        "Data dupla pede preparo semanas antes",
        "Só entra na oferta quem tem margem e estoque"
       ]
      }
     ]
    },
    {
     "id": "gf-l4-5",
     "title": "Afiliados, vitrines e ML x Shopee",
     "minutes": 7,
     "goal": "Conseguir usar afiliados e vitrines como tráfego extra e apontar as diferenças práticas entre Mercado Livre e Shopee.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🤝",
       "title": "Tráfego de fora e duas plataformas",
       "text": "Veja como afiliados e vitrines trazem gente pra loja e feche o módulo comparando Mercado Livre e Shopee."
      },
      {
       "t": "big",
       "emoji": "📣",
       "html": "Tem gente que <b>divulga por você</b> e só ganha se vender.",
       "sub": "É o programa de afiliados da Shopee."
      },
      {
       "t": "jargon",
       "term": "Afiliado",
       "means": "Pessoa ou criador que <b>divulga seu produto com um link</b> e ganha comissão quando alguém compra por ele.",
       "ex": "Uma criadora indica sua chapinha em vídeo. Vendeu pelo link, a comissão é dela."
      },
      {
       "t": "flow",
       "title": "Como o afiliado entra",
       "items": [
        {
         "icon": "🔓",
         "title": "Você libera o produto",
         "text": "Escolhe o que entra e a comissão"
        },
        {
         "icon": "🎥",
         "title": "Criador divulga",
         "text": "Vídeo, vídeo ao vivo ou post com link"
        },
        {
         "icon": "🛍️",
         "title": "Cliente compra",
         "text": "Pelo link do criador"
        },
        {
         "icon": "💰",
         "title": "Comissão",
         "text": "Paga quando a venda se confirma"
        }
       ],
       "caption": "Em geral a comissão é por venda. Regras e prazos do programa estão na documentação oficial."
      },
      {
       "t": "jargon",
       "term": "Vitrine",
       "means": "Página com <b>produtos escolhidos a dedo</b>, pela loja ou pelo afiliado, cada um com link pra comprar.",
       "ex": "O criador monta a vitrine “quarto organizado” com 8 produtos de lojas diferentes."
      },
      {
       "t": "conta",
       "title": "Comissão de afiliado (exemplo)",
       "rows": [
        [
         "Preço de venda",
         "R$ 100,00"
        ],
        [
         "Produto",
         "- R$ 45,00",
         "neg"
        ],
        [
         "Taxas e imposto (20%, exemplo)",
         "- R$ 20,00",
         "neg"
        ],
        [
         "Comissão de afiliado (8%, exemplo)",
         "- R$ 8,00",
         "neg"
        ]
       ],
       "total": [
        "Sobra",
        "R$ 27,00"
       ],
       "note": "Percentuais inventados. A comissão real segue as regras do programa; confira lá."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Conta antes do link",
       "html": "A comissão sai da <b>sua margem</b>. Libere pro afiliado só o produto em que a sobra continua boa depois de pagar a comissão."
      },
      {
       "t": "big",
       "emoji": "🔁",
       "html": "Mercado Livre e Shopee <b>não jogam igual</b>.",
       "sub": "Mesma loja, dois jogos."
      },
      {
       "t": "table",
       "title": "5 diferenças práticas",
       "head": [
        "",
        "Mercado Livre",
        "Shopee"
       ],
       "rows": [
        [
         "Público",
         "Compra com mais intenção",
         "Compra mais por oferta"
        ],
        [
         "Ads (anúncio pago)",
         "Product Ads",
         "Shopee Ads"
        ],
        [
         "Placar da loja",
         "Reputação (termômetro)",
         "Pontuação e penalidades"
        ],
        [
         "Ferramentas de venda",
         "Promoções e campanhas",
         "Cupons, ofertas-relâmpago e datas duplas"
        ],
        [
         "Envio",
         "Mercado Envios, várias modalidades",
         "Canais de envio ligados na loja"
        ]
       ],
       "hl": 2,
       "caption": "Resumo didático e de tendência. O detalhe de cada regra está na documentação oficial das duas plataformas."
      },
      {
       "t": "list",
       "title": "E o que fazer em cada uma",
       "items": [
        "Público: título forte nas duas; na Shopee, some oferta e cupom",
        "Ads: monte campanha separada, com meta própria em cada plataforma",
        "Placar: confira reputação no ML e pontuação na Shopee toda semana",
        "Ferramentas: planeje cupom e datas duplas pelo calendário da Shopee",
        "Envio: configure e teste os canais de cada plataforma antes de vender"
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Operar a Shopee com a cabeça do Mercado Livre. É copiar o plano pronto e esperar só a busca trazer cliente. Cupom, oferta e data dupla ficam de fora."
      },
      {
       "t": "compare",
       "left": {
        "title": "Plano copiado do ML",
        "tone": "bad",
        "items": [
         "Só título bom e esperar a busca",
         "Ignorar cupom, oferta e data dupla",
         "Olhar a pontuação só quando dá problema",
         "Responder o chat quando sobra tempo"
        ]
       },
       "right": {
        "title": "Plano pra Shopee",
        "tone": "good",
        "items": [
         "Título bom, mais cupom, oferta e vitrine",
         "Plano de campanha pra cada data dupla",
         "Pontuação e penalidades vistas toda semana",
         "Chat respondido rápido, que vende e pontua"
        ]
       }
      },
      {
       "t": "flow",
       "title": "Check de saída",
       "items": [
        {
         "icon": "📝",
         "title": "Liste 5 diferenças",
         "text": "Entre Mercado Livre e Shopee, na prática"
        },
        {
         "icon": "🔧",
         "title": "Veja o que muda",
         "text": "Na rotina do assessor, em cada uma"
        },
        {
         "icon": "✅",
         "title": "Defina a ação",
         "text": "O que você faria em cada diferença"
        },
        {
         "icon": "🎤",
         "title": "Explique em 2 minutos",
         "text": "Como pra um seller que só conhece uma"
        }
       ],
       "caption": "Se você consegue fazer isso sem olhar o material, o módulo está no bolso."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“No ML o cliente costuma buscar o produto. Na Shopee ele também descobre e compra por oferta. Então, além do título, a gente prepara cupom, oferta e calendário. Mesma loja, outro jogo.”"
      },
      {
       "t": "quiz",
       "q": "Um seller que só conhece o ML abriu loja na Shopee e copiou o plano que usava lá. Qual é o ajuste mais importante?",
       "options": [
        "Manter o plano do ML igual, porque as duas plataformas premiam as mesmas ações do mesmo jeito",
        "Cortar o preço de todos os produtos, já que a Shopee só vende quando o preço é o menor",
        "Incluir cupom, oferta-relâmpago e plano de data dupla, além de título e fotos bons como no ML",
        "Focar só em afiliados, porque a busca da Shopee não traz cliente e o painel pouco importa"
       ],
       "answer": [
        2
       ],
       "why": "O básico (título, foto, preço) vale nas duas, mas a Shopee pede também cupom, oferta e calendário de campanhas. Copiar o plano do ML deixa essas ferramentas de fora."
      },
      {
       "t": "recap",
       "items": [
        "Afiliado divulga e ganha por venda",
        "A comissão sai da sua margem: faça a conta",
        "Vitrine mostra produtos escolhidos, com link",
        "ML e Shopee pedem planos diferentes",
        "Erro clássico: copiar o plano do ML"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "gf-m5",
   "n": 5,
   "title": "Anúncios que vendem",
   "tagline": "Do título à foto, do buy box ao atacado: como montar anúncio que aparece, convence e dá margem.",
   "outcome": "Montar, melhorar e auditar anúncios com decisões justificadas por dado, não por achismo.",
   "lessons": [
    {
     "id": "gf-l5-1",
     "title": "Anatomia do anúncio",
     "minutes": 6,
     "goal": "Saber nomear cada parte do anúncio e o que ela faz pela venda.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🧩",
       "title": "Anúncio por dentro, peça por peça",
       "text": "Em 6 minutos você aprende o que forma um anúncio e por que Ads não conserta anúncio ruim."
      },
      {
       "t": "big",
       "emoji": "🔥",
       "html": "Anúncio ruim <b>queima</b> o dinheiro do Ads.",
       "sub": "Ads traz gente até a vitrine. Quem convence é o anúncio."
      },
      {
       "t": "jargon",
       "term": "Conversão",
       "means": "De cada 100 pessoas que <b>entram</b> no anúncio, quantas <b>compram</b>. É a nota de convencimento do anúncio.",
       "ex": "100 visitas e 3 compras: conversão de 3%."
      },
      {
       "t": "p",
       "title": "O teste dos mesmos cliques",
       "html": "Imagine dois anúncios do mesmo produto, cada um com 1.000 cliques de Ads a R$ 0,50. Um tem foto, título e ficha caprichados. O outro tem foto escura e ficha vazia."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Mesmos cliques, vendas diferentes",
       "unit": "un",
       "hl": 0,
       "data": [
        {
         "label": "Anúncio completo",
         "value": 40
        },
        {
         "label": "Anúncio fraco",
         "value": 20,
         "tone": "pink"
        }
       ],
       "caption": "Exemplo: 1.000 cliques de Ads em cada um. O fraco vende metade e o dinheiro gasto é o mesmo."
      },
      {
       "t": "conta",
       "title": "Mesmo Ads, resultado diferente (exemplo)",
       "rows": [
        [
         "Cliques de Ads em cada anúncio",
         "1.000"
        ],
        [
         "Custo por clique (exemplo)",
         "R$ 0,50"
        ],
        [
         "Gasto com Ads em cada um",
         "R$ 500,00",
         "neg"
        ],
        [
         "Vendas do completo (4%)",
         "40 vendas",
         "pos"
        ],
        [
         "Vendas do fraco (2%)",
         "20 vendas"
        ],
        [
         "Preço de cada venda (exemplo)",
         "R$ 100,00"
        ]
       ],
       "total": [
        "ACOS do fraco (500 ÷ 2.000)",
        "25%"
       ],
       "note": "ACOS é quanto você gasta de Ads para cada R$ 1 vendido. O completo fica em 12,5% (500 ÷ 4.000). Números de exemplo."
      },
      {
       "t": "anno",
       "preset": "anuncio",
       "title": "As 6 peças do anúncio",
       "notes": [
        "Título: diz o que é o produto com as palavras que o cliente busca.",
        "Fotos: mostram o produto e tiram dúvida sem o cliente precisar perguntar.",
        "Preço: precisa caber na margem e na comparação com a concorrência.",
        "Frete e entrega: prazo e custo claros pesam na hora de comprar.",
        "Variações: cor, tamanho ou voltagem organizados no mesmo anúncio.",
        "Ficha técnica: marca, modelo e medidas ajudam a achar e a decidir."
       ]
      },
      {
       "t": "flow",
       "title": "O caminho do cliente",
       "items": [
        {
         "icon": "🔎",
         "title": "Acha o anúncio",
         "text": "Título e ficha ajudam a aparecer"
        },
        {
         "icon": "🖼️",
         "title": "Olha as fotos",
         "text": "Tira dúvidas sem perguntar"
        },
        {
         "icon": "🏷️",
         "title": "Confere preço e frete",
         "text": "Compara com outras ofertas"
        },
        {
         "icon": "✅",
         "title": "Compra ou sai",
         "text": "Falta de informação faz sair"
        }
       ],
       "caption": "Cada peça do anúncio segura o cliente em uma dessas etapas."
      },
      {
       "t": "p",
       "title": "Título: a placa da loja",
       "html": "O título diz <b>o que é</b> o produto e <b>para quem</b> serve. Quem lê precisa entender em um segundo. A busca também lê o título, então ele leva as palavras que o cliente usa."
      },
      {
       "t": "jargon",
       "term": "Ficha técnica",
       "means": "Os campos do produto: <b>marca, modelo, cor, medidas, material</b>. Cada campo também é chamado de <b>atributo</b>.",
       "ex": "Tênis: marca Alfa, cor preta, tamanho 42, solado de borracha."
      },
      {
       "t": "p",
       "title": "Descrição: o que a foto não conta",
       "html": "Use a descrição para o que a foto não mostra. Pense em <b>medidas, uso, o que vem na caixa</b> e nas dúvidas que os clientes sempre fazem. Frases curtas, sem palavra solta."
      },
      {
       "t": "jargon",
       "term": "Garantia",
       "means": "O <b>prazo</b> em que você se compromete a consertar ou trocar o produto com defeito. Informe só o que realmente vale.",
       "ex": "Exemplo: 90 dias de garantia do vendedor, e o cliente sabe a quem recorrer."
      },
      {
       "t": "compare",
       "left": {
        "title": "Anúncio completo",
        "tone": "good",
        "items": [
         "Título claro com o que é o produto",
         "Fotos que mostram tamanho e uso",
         "Ficha técnica toda preenchida",
         "Prazo e garantia informados"
        ]
       },
       "right": {
        "title": "Anúncio fraco",
        "tone": "bad",
        "items": [
         "Título com palavra solta",
         "Uma foto escura e só",
         "Ficha técnica vazia",
         "Cliente precisa perguntar tudo"
        ]
       }
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Regra de bolso",
       "html": "Antes de pôr R$ 1 em Ads, pergunte: este anúncio convence quem chega? Se a resposta for não, arrume as peças primeiro e invista depois."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Antes de aumentar o Ads, vamos arrumar as peças do anúncio. O Ads traz a visita, mas só um anúncio completo transforma visita em venda.”"
      },
      {
       "t": "quiz",
       "q": "O seller quer aumentar o Ads de um anúncio com foto escura e ficha vazia. Qual é o melhor primeiro passo?",
       "options": [
        "Aumentar o Ads logo, porque mais visitas sempre compensam um anúncio incompleto",
        "Arrumar fotos e ficha antes, porque Ads só traz visita e quem converte é o anúncio",
        "Baixar o preço até vender, porque preço baixo substitui foto e ficha técnica",
        "Trocar só o título, porque o título sozinho decide a compra em qualquer anúncio"
       ],
       "answer": [
        1
       ],
       "why": "Ads só leva a pessoa até o anúncio. Se foto e ficha não convencem, a conversão fica baixa e o gasto com Ads vira prejuízo. Arrume as peças primeiro."
      },
      {
       "t": "recap",
       "items": [
        "Ads traz visita, <b>o anúncio converte</b>",
        "6 peças: título, fotos, preço, frete, variações, ficha",
        "Ficha técnica completa e descrição clara",
        "Arrume o anúncio antes de pôr Ads"
       ]
      }
     ]
    },
    {
     "id": "gf-l5-2",
     "title": "Conteúdo visual que converte",
     "minutes": 6,
     "goal": "Conseguir montar o conjunto de imagens do anúncio, da foto principal ao infográfico e à prova social.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📸",
       "title": "A foto abre a venda",
       "text": "Em 6 minutos você monta o pacote de imagens do anúncio: foto principal, infográfico e prova social."
      },
      {
       "t": "big",
       "emoji": "👀",
       "html": "A foto é a <b>vitrine</b> do anúncio.",
       "sub": "O cliente decide se clica olhando uma miniatura pequena, no celular."
      },
      {
       "t": "compare",
       "left": {
        "title": "Foto principal boa",
        "tone": "good",
        "items": [
         "Produto inteiro, grande e centralizado",
         "Fundo branco ou limpo",
         "Imagem nítida e bem iluminada",
         "Sem texto ou selo por cima"
        ]
       },
       "right": {
        "title": "Foto principal fraca",
        "tone": "bad",
        "items": [
         "Produto pequeno no meio da cena",
         "Fundo bagunçado ou escuro",
         "Imagem borrada ou cortada",
         "Faixa de promoção por cima"
        ]
       }
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Regra de imagem muda",
       "html": "Tamanho, fundo e texto permitidos na foto principal mudam e variam por categoria. Antes de padronizar, confira a regra vigente na documentação oficial da plataforma."
      },
      {
       "t": "jargon",
       "term": "Infográfico",
       "means": "Imagem com <b>informação desenhada</b> em cima da foto: medidas, benefícios e modo de uso.",
       "ex": "Foto 4 do tênis com a tabela de tamanhos e o material do solado."
      },
      {
       "t": "table",
       "title": "Função de cada foto",
       "head": [
        "Foto",
        "Para que serve",
        "Exemplo"
       ],
       "rows": [
        [
         "1ª (principal)",
         "Chamar o clique",
         "Produto inteiro, fundo branco"
        ],
        [
         "2ª e 3ª",
         "Mostrar ângulos e detalhes",
         "Costas, encaixe, etiqueta"
        ],
        [
         "4ª",
         "Infográfico",
         "Medidas e benefícios"
        ],
        [
         "5ª",
         "Produto em uso",
         "Pessoa usando ou ambiente real"
        ],
        [
         "6ª",
         "O que vem na caixa",
         "Itens do kit lado a lado"
        ]
       ],
       "caption": "Uma sugestão de ordem. Adapte à categoria e ao que o cliente mais pergunta."
      },
      {
       "t": "p",
       "title": "Um teste simples de foto",
       "html": "Para testar a foto principal, troque <b>só ela</b> e compare a taxa de clique (de cada 100 pessoas que veem o anúncio, quantas clicam). Mudou foto e título juntos? Aí você não sabe quem trouxe o resultado."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Taxa de clique antes e depois",
       "unit": "%",
       "hl": 1,
       "data": [
        {
         "label": "Foto antiga",
         "value": 1.8,
         "tone": "pink"
        },
        {
         "label": "Foto nova",
         "value": 2.7
        }
       ],
       "caption": "Exemplo: só a foto principal mudou, por 7 dias. A foto nova levou 0,9 ponto a mais de clique."
      },
      {
       "t": "jargon",
       "term": "Prova social",
       "means": "Sinais de que <b>outras pessoas já compraram e gostaram</b>: nota, avaliações, fotos de clientes e volume de vendas.",
       "ex": "Nota 4,8 com 300 avaliações passa mais confiança que nota 3,9 com 8."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Avaliações por estrela",
       "unit": "un",
       "data": [
        {
         "label": "5 estrelas",
         "value": 120
        },
        {
         "label": "4 estrelas",
         "value": 40
        },
        {
         "label": "3 estrelas",
         "value": 15
        },
        {
         "label": "2 estrelas",
         "value": 12,
         "tone": "pink"
        },
        {
         "label": "1 estrela",
         "value": 13,
         "tone": "pink"
        }
       ],
       "caption": "Exemplo: 200 avaliações. As notas de 1 e 2 estrelas somam 25 e quase todas falam de tamanho."
      },
      {
       "t": "p",
       "title": "Avaliação é aula de graça",
       "html": "Leia as avaliações ruins. Se a reclamação repete 'veio menor que na foto', a solução é visual. <b>Coloque as medidas na imagem</b> e um objeto de referência ao lado do produto."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Foto linda que não mostra o tamanho nem o que vem na caixa. O cliente compra achando uma coisa, recebe outra, devolve, e a nota do anúncio cai."
      },
      {
       "t": "steps",
       "title": "Mão na massa",
       "items": [
        {
         "title": "Abra o anúncio no celular",
         "html": "Veja só a miniatura. Dá para entender o que é?"
        },
        {
         "title": "Passe todas as fotos",
         "html": "Falta medida, uso ou conteúdo da caixa?"
        },
        {
         "title": "Leia 10 avaliações",
         "html": "Anote o que se repete e vire uma imagem."
        }
       ]
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Vamos trocar a foto principal e medir o clique por uma semana. Se subir, padronizamos nos outros anúncios. Se não subir, voltamos e testamos outra ideia.”"
      },
      {
       "t": "quiz",
       "q": "Um anúncio tem muitas avaliações de 1 e 2 estrelas dizendo 'veio menor que na foto'. Qual ajuste visual ataca a causa?",
       "options": [
        "Trocar a foto principal por outra com mais filtro e cores mais vivas",
        "Colocar um selo de 'melhor preço' em cima da foto principal",
        "Colocar as medidas na imagem e um objeto de referência ao lado do produto",
        "Apagar as avaliações ruins para a nota média do anúncio subir"
       ],
       "answer": [
        2
       ],
       "why": "A reclamação é sobre tamanho. Uma imagem com medidas e um objeto de comparação tira a dúvida antes da compra. Filtro e selo não resolvem, e avaliação não se apaga."
      },
      {
       "t": "recap",
       "items": [
        "Foto principal limpa chama o clique",
        "Cada foto tem uma função, do infográfico ao uso",
        "Teste uma mudança por vez e meça o clique",
        "Avaliações ruins mostram qual imagem falta"
       ]
      }
     ]
    },
    {
     "id": "gf-l5-3",
     "title": "SEO de marketplace",
     "minutes": 6,
     "goal": "Conseguir pesquisar palavras-chave, entender a intenção da busca e montar um título que aparece e converte.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🔎",
       "title": "Título que o cliente encontra",
       "text": "Em 6 minutos você aprende a pesquisar palavra-chave, ler a intenção da busca e montar um título que aparece."
      },
      {
       "t": "big",
       "emoji": "🧠",
       "html": "Você não escolhe a palavra. O <b>cliente</b> escolhe.",
       "sub": "Seu trabalho é descobrir como ele chama o produto."
      },
      {
       "t": "jargon",
       "term": "Palavra-chave",
       "means": "O <b>termo que o cliente digita</b> na busca para achar um produto.",
       "ex": "'Tênis corrida masculino' é uma palavra-chave. 'Tênis' sozinho é só uma palavra."
      },
      {
       "t": "jargon",
       "term": "Intenção de busca",
       "means": "O que a pessoa <b>quer fazer</b> quando digita: comprar já, comparar opções ou só entender o produto.",
       "ex": "'Garrafa térmica 1 litro' mostra alguém pronto para comprar. 'Qual garrafa térmica é melhor' mostra alguém comparando."
      },
      {
       "t": "tree",
       "title": "Uma busca, vários grupos de palavras",
       "root": "Busca: fone bluetooth",
       "branches": [
        {
         "label": "Produto",
         "items": [
          "fone",
          "headphone",
          "fone de ouvido"
         ]
        },
        {
         "label": "Característica",
         "items": [
          "sem fio",
          "com microfone",
          "bateria longa"
         ]
        },
        {
         "label": "Uso",
         "items": [
          "para academia",
          "para corrida"
         ]
        }
       ],
       "caption": "A mesma busca vira vários grupos de palavras. O título usa só os que o seu produto atende de verdade."
      },
      {
       "t": "flow",
       "title": "De onde vêm as palavras",
       "items": [
        {
         "icon": "🔍",
         "title": "Sugestões da busca",
         "text": "O que a própria plataforma completa"
        },
        {
         "icon": "🏪",
         "title": "Concorrentes fortes",
         "text": "Como descrevem, sem copiar"
        },
        {
         "icon": "📊",
         "title": "Termos do Ads",
         "text": "O que já trouxe clique e venda"
        },
        {
         "icon": "💬",
         "title": "Perguntas dos clientes",
         "text": "Como o cliente fala de verdade"
        }
       ],
       "caption": "Cruze as quatro fontes e fique com as palavras que se repetem."
      },
      {
       "t": "steps",
       "title": "Montando o título",
       "items": [
        {
         "title": "Produto",
         "html": "o que é, na palavra mais buscada"
        },
        {
         "title": "Marca e modelo",
         "html": "quando o cliente busca por eles"
        },
        {
         "title": "Característica principal",
         "html": "cor, medida, voltagem ou material"
        },
        {
         "title": "Uso ou diferencial",
         "html": "só se for verdadeiro e couber"
        }
       ]
      },
      {
       "t": "compare",
       "left": {
        "title": "Título solto",
        "tone": "bad",
        "items": [
         "Garrafa Top Oferta Barata Melhor Promoção",
         "Palavras de enfeite no lugar de características",
         "O cliente não sabe o tamanho nem o material"
        ]
       },
       "right": {
        "title": "Título claro",
        "tone": "good",
        "items": [
         "Garrafa Térmica 1 Litro Inox Tampa Rosca",
         "Produto primeiro, depois a característica principal",
         "Quem busca por litro ou inox encontra"
        ]
       }
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Copiar o título do concorrente sem entender a busca. Você herda as palavras dele, os erros dele e um produto que talvez nem seja igual ao seu. Use o concorrente como pista, não como molde."
      },
      {
       "t": "p",
       "title": "Qualidade do anúncio",
       "html": "A plataforma valoriza anúncio <b>completo e claro</b>: título, fotos e ficha técnica preenchida. Ficha completa ajuda o produto a aparecer quando o cliente filtra por marca, cor ou tamanho. O limite de caracteres do título muda: confira o vigente."
      },
      {
       "t": "chart",
       "kind": "meter",
       "title": "Ficha técnica preenchida",
       "value": 65,
       "valueLabel": "Seu anúncio",
       "unit": "%",
       "zones": [
        {
         "label": "Fraca",
         "tone": "pink",
         "from": 0,
         "to": 50
        },
        {
         "label": "Média",
         "tone": "amber",
         "from": 50,
         "to": 80
        },
        {
         "label": "Completa",
         "tone": "mint",
         "from": 80,
         "to": 100
        }
       ],
       "caption": "Exemplo: 65% dos campos preenchidos. Faltam material e medidas. Complete com informação verdadeira."
      },
      {
       "t": "p",
       "title": "Duas quedas dizem onde travou",
       "html": "Olhe duas quedas. De aparição para clique, você vê se <b>título e foto</b> chamam atenção. De clique para venda, você vê se <b>preço, ficha e fotos</b> convencem."
      },
      {
       "t": "chart",
       "kind": "funnel",
       "title": "Onde o anúncio trava",
       "unit": "",
       "data": [
        {
         "label": "Aparições na busca",
         "value": 10000
        },
        {
         "label": "Cliques no anúncio",
         "value": 300
        },
        {
         "label": "Vendas",
         "value": 15
        }
       ],
       "caption": "Exemplo: 3% de clique (300 ÷ 10.000) e 5% de venda por clique (15 ÷ 300). Título mexe na primeira queda; foto, preço e ficha, na segunda."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Não copiei o título do concorrente. Pesquisei como o cliente busca, escolhi as palavras que combinam com o seu produto e deixei o título limpo, sem palavra solta.”"
      },
      {
       "t": "quiz",
       "q": "O seller quer copiar o título do concorrente que vende mais. O que você responde?",
       "options": [
        "Copie igual, porque quem vende mais já descobriu o título perfeito para a busca",
        "Use o concorrente como pista, mas monte o título com as palavras que o cliente busca",
        "Copie e acrescente mais palavras populares no fim, mesmo as que não descrevem o produto",
        "Ignore os concorrentes e use só o nome interno que o seller dá ao produto"
       ],
       "answer": [
        1
       ],
       "why": "O concorrente mostra pistas, mas o produto dele pode ser diferente do seu. O título certo usa as palavras que o cliente busca e que o seu produto realmente atende."
      },
      {
       "t": "quiz",
       "q": "Quais fontes ajudam a descobrir como o cliente busca? Marque todas.",
       "multi": true,
       "options": [
        "Sugestões que a própria busca da plataforma completa",
        "Termos de busca que já trouxeram cliques e vendas no Ads",
        "Perguntas e avaliações escritas pelos clientes",
        "O código interno do produto no ERP do seller",
        "Palavras populares que não descrevem o produto"
       ],
       "answer": [
        0,
        1,
        2
       ],
       "why": "Sugestões da busca, termos do Ads e a fala dos clientes mostram como as pessoas realmente procuram. Código interno e palavras que não descrevem o produto não são buscas reais."
      },
      {
       "t": "recap",
       "items": [
        "Palavra-chave é o que o cliente digita",
        "Intenção de busca: comprar, comparar ou entender",
        "Título: produto, marca, característica, sem enfeite",
        "Não copie o concorrente sem entender a busca"
       ]
      }
     ]
    },
    {
     "id": "gf-l5-4",
     "title": "Tipos de anúncio no Mercado Livre",
     "minutes": 6,
     "goal": "Entender as diferenças entre clássico e premium, catálogo e anúncio próprio, e como o buy box decide a venda.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🏷️",
       "title": "Clássico, premium, catálogo: qual usar?",
       "text": "Em 6 minutos você entende os tipos de anúncio do Mercado Livre e como entrar na disputa pelo botão de compra."
      },
      {
       "t": "big",
       "emoji": "⚖️",
       "html": "O tipo de anúncio muda <b>tarifa</b>, <b>exposição</b> e a briga com a concorrência."
      },
      {
       "t": "jargon",
       "term": "Clássico x Premium",
       "means": "Dois níveis de anúncio no Mercado Livre. Eles <b>mudam tarifa, exposição e condições de parcelamento</b>.",
       "ex": "Na dúvida, o premium costuma custar mais e destacar mais. Confira os valores vigentes."
      },
      {
       "t": "table",
       "title": "Clássico x Premium (resumo)",
       "head": [
        "",
        "Clássico",
        "Premium"
       ],
       "rows": [
        [
         "Tarifa",
         "Costuma ser menor",
         "Costuma ser maior"
        ],
        [
         "Exposição",
         "Menos destaque",
         "Mais destaque"
        ],
        [
         "Parcelamento",
         "Condições mais simples",
         "Mais benefício ao comprador"
        ],
        [
         "Quando pensar nele",
         "Margem apertada",
         "Margem com folga para destaque"
        ]
       ],
       "caption": "Resumo para raciocinar. Valores e benefícios exatos mudam: veja o aviso a seguir."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "Tarifas, benefícios e regras dos tipos de anúncio mudam. A fonte final é a documentação oficial (Mercado Livre, Mercado Ads) e o contador do cliente. Revise esta aula todo trimestre."
      },
      {
       "t": "jargon",
       "term": "Produto de catálogo",
       "means": "Página <b>única</b> de um produto identificado (por GTIN, o código de barras), onde <b>vários vendedores</b> ofertam o mesmo item.",
       "ex": "Um liquidificador de modelo X tem uma página só, com ofertas de vários vendedores."
      },
      {
       "t": "table",
       "title": "Catálogo x anúncio próprio",
       "head": [
        "",
        "Catálogo",
        "Anúncio próprio"
       ],
       "rows": [
        [
         "Quem escreve",
         "Plataforma, pela ficha do produto",
         "Você: título, fotos e texto"
        ],
        [
         "Concorrência",
         "Mesma página, vários vendedores",
         "Só você na sua página"
        ],
        [
         "O que decide",
         "Preço, envio e reputação",
         "Também conteúdo e SEO"
        ],
        [
         "Bom para",
         "Produto com GTIN conhecido",
         "Produto sem catálogo ou diferenciado"
        ]
       ]
      },
      {
       "t": "jargon",
       "term": "Buy box",
       "means": "O botão de <b>comprar</b> da página de catálogo. Um vendedor ocupa o botão principal e os demais aparecem como outras ofertas.",
       "ex": "Ganhar o buy box é ficar com a maior parte das vendas daquele produto."
      },
      {
       "t": "flow",
       "title": "Como a disputa funciona",
       "items": [
        {
         "icon": "🆔",
         "title": "Produto identificado",
         "text": "O GTIN liga seu item ao catálogo"
        },
        {
         "icon": "⚔️",
         "title": "Ofertas lado a lado",
         "text": "Vários vendedores, o mesmo produto"
        },
        {
         "icon": "📏",
         "title": "Plataforma compara",
         "text": "Preço, envio, reputação e estoque"
        },
        {
         "icon": "🏆",
         "title": "Um fica com o botão",
         "text": "O peso de cada fator muda"
        }
       ],
       "caption": "Os fatores exatos e os pesos mudam: confira a documentação vigente."
      },
      {
       "t": "tree",
       "title": "Perdi o buy box: por quê?",
       "root": "Perdi o buy box",
       "branches": [
        {
         "label": "Preço",
         "items": [
          "Concorrente baixou o preço?",
          "Meu frete ficou mais caro?"
         ]
        },
        {
         "label": "Reputação",
         "items": [
          "A reputação caiu?",
          "Atrasei despachos?"
         ]
        },
        {
         "label": "Estoque e prazo",
         "items": [
          "O estoque acabou?",
          "O prazo de entrega ficou maior?"
         ]
        }
       ],
       "caption": "Ache a causa antes de mexer no preço."
      },
      {
       "t": "p",
       "title": "Cuidado com a guerra de preço",
       "html": "Baixar o preço para ganhar o buy box funciona, mas <b>só se a sobra aguenta</b>. Veja a conta de um produto vendido a R$ 94, ou seja, 6% abaixo de R$ 100 (exemplo)."
      },
      {
       "t": "conta",
       "title": "Conta do preço R$ 94 (exemplo)",
       "rows": [
        [
         "Preço de venda",
         "R$ 94,00"
        ],
        [
         "Produto",
         "R$ 55,00",
         "neg"
        ],
        [
         "Comissão 16% (exemplo)",
         "R$ 15,04",
         "neg"
        ],
        [
         "Frete (exemplo)",
         "R$ 12,00",
         "neg"
        ],
        [
         "Imposto 6% (exemplo)",
         "R$ 5,64",
         "neg"
        ],
        [
         "Ads 3% (exemplo)",
         "R$ 2,82",
         "neg"
        ],
        [
         "Embalagem",
         "R$ 2,00",
         "neg"
        ]
       ],
       "total": [
        "Sobra por venda",
        "R$ 1,50"
       ],
       "note": "Com R$ 100, sobrariam R$ 6,00. Cortar 6% do preço tirou 75% da sobra. Números de exemplo."
      },
      {
       "t": "lab",
       "preset": "preco",
       "title": "Mexa no preço e veja a sobra",
       "intro": "Comece em R$ 100 e arraste o preço para 94. Veja a sobra cair e o preço mínimo para a margem alvo.",
       "defaults": {
        "preco": 100,
        "custo": 55,
        "com": 16,
        "tarifa": 0,
        "frete": 12,
        "imp": 6,
        "ads": 3,
        "emb": 2,
        "alvo": 10
       },
       "note": "Números de exemplo, não são valores reais da plataforma."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Regra de bolso",
       "html": "Antes de baixar preço pelo buy box, calcule o preço mínimo (o menor preço que ainda dá a margem alvo). No exemplo, com margem alvo de 10%, ele fica perto de R$ 106."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Perder o buy box por R$ 2 não é motivo para cortar preço. Primeiro eu vejo se foi preço, reputação ou estoque. Se baixar o preço tira toda a sobra, a gente não entra nessa briga.”"
      },
      {
       "t": "quiz",
       "q": "O seller perdeu o buy box porque o concorrente baixou o preço, e a sobra dele já é pequena. O que é mais sensato?",
       "options": [
        "Baixar até igualar o menor preço, porque o buy box vale mais que qualquer margem",
        "Pausar o anúncio até o concorrente subir, sem olhar reputação ou estoque",
        "Calcular o preço mínimo e só acompanhar o concorrente se a sobra continuar na margem alvo",
        "Criar um anúncio igual ao de catálogo para fugir da disputa e baixar menos o preço"
       ],
       "answer": [
        2
       ],
       "why": "Buy box sem margem é venda no prejuízo. Com o preço mínimo calculado, você só acompanha o preço do concorrente enquanto a sobra ainda fecha a margem alvo."
      },
      {
       "t": "recap",
       "items": [
        "Clássico e premium mudam tarifa e destaque",
        "Catálogo: página única, vários vendedores",
        "Buy box: o botão de compra principal",
        "Calcule o preço mínimo antes de entrar em guerra de preço"
       ]
      }
     ]
    },
    {
     "id": "gf-l5-5",
     "title": "Variações, kits, combos e atacado",
     "minutes": 7,
     "goal": "Conseguir decidir quando agrupar ou separar e calcular se kit, multipack e atacado compensam.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📦",
       "title": "Agrupar, separar ou vender em pack?",
       "text": "Em 7 minutos você decide quando usar variação, kit, multipack e atacado, e confere o efeito na margem e no estoque."
      },
      {
       "t": "big",
       "emoji": "🤔",
       "html": "Cada formato mexe em <b>preço, estoque e giro</b>.",
       "sub": "Decidir sem fazer a conta é chute."
      },
      {
       "t": "jargon",
       "term": "Variação",
       "means": "Versões do <b>mesmo produto</b> no mesmo anúncio, que mudam em cor, tamanho ou voltagem.",
       "ex": "Camiseta lisa em P, M e G e em 3 cores: um anúncio, 9 combinações."
      },
      {
       "t": "compare",
       "left": {
        "title": "Agrupe quando",
        "tone": "good",
        "items": [
         "É o mesmo produto, só muda cor ou tamanho",
         "A ficha técnica é igual nas versões",
         "As avaliações servem para todas as versões"
        ]
       },
       "right": {
        "title": "Separe quando",
        "tone": "good",
        "items": [
         "Muda o modelo, a ficha ou o GTIN",
         "O preço ou o público é bem diferente",
         "Uma versão atrapalha a nota das outras"
        ]
       }
      },
      {
       "t": "jargon",
       "term": "Kit",
       "means": "Dois ou mais produtos <b>diferentes</b> vendidos juntos, num só anúncio, por um preço só.",
       "ex": "Shampoo e condicionador do mesmo cheiro, vendidos como um kit."
      },
      {
       "t": "jargon",
       "term": "Multipack",
       "means": "A <b>mesma unidade</b> vendida em quantidade: pack com 3, 6 ou 12 itens no mesmo anúncio.",
       "ex": "Um pack com 3 sabonetes iguais por um preço fechado."
      },
      {
       "t": "p",
       "title": "Kit mexe no estoque",
       "html": "O estoque do kit sai do estoque dos <b>componentes</b>. Vender 1 kit com 1 shampoo e 1 condicionador baixa 1 de cada. Se um acabar, o kit para de vender, mesmo com o outro sobrando."
      },
      {
       "t": "conta",
       "title": "Venda avulsa (exemplo)",
       "rows": [
        [
         "Preço da unidade",
         "R$ 30,00"
        ],
        [
         "Produto",
         "R$ 12,00",
         "neg"
        ],
        [
         "Comissão 16% (exemplo)",
         "R$ 4,80",
         "neg"
        ],
        [
         "Frete (exemplo)",
         "R$ 10,00",
         "neg"
        ],
        [
         "Imposto 6% (exemplo)",
         "R$ 1,80",
         "neg"
        ]
       ],
       "total": [
        "Sobra por pedido",
        "R$ 1,40"
       ],
       "note": "Frete alto em produto barato come quase toda a venda. Números de exemplo."
      },
      {
       "t": "conta",
       "title": "Pack com 3 (exemplo)",
       "rows": [
        [
         "Preço do pack",
         "R$ 80,00"
        ],
        [
         "Produto (3 unidades)",
         "R$ 36,00",
         "neg"
        ],
        [
         "Comissão 16% (exemplo)",
         "R$ 12,80",
         "neg"
        ],
        [
         "Frete (exemplo)",
         "R$ 14,00",
         "neg"
        ],
        [
         "Imposto 6% (exemplo)",
         "R$ 4,80",
         "neg"
        ]
       ],
       "total": [
        "Sobra por pedido",
        "R$ 12,40"
       ],
       "note": "O frete cresce pouco com 3 unidades, então a sobra por pedido sobe. Números de exemplo."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Sobra por pedido",
       "unit": "R$",
       "hl": 1,
       "data": [
        {
         "label": "Unidade avulsa",
         "value": 1.4,
         "tone": "pink"
        },
        {
         "label": "Pack com 3",
         "value": 12.4
        }
       ],
       "caption": "Exemplo: no pack o frete é dividido por 3 unidades, e a sobra por pedido passa de R$ 1,40 para R$ 12,40."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Montar o kit sem refazer a conta e sem checar o estoque. O kit pode vender com margem negativa ou travar quando um componente acaba. Calcule a sobra e o estoque de cada componente antes de publicar."
      },
      {
       "t": "jargon",
       "term": "Preço de atacado",
       "means": "<b>Preço menor por unidade</b> para quem compra em quantidade. Quem leva mais paga menos em cada peça.",
       "ex": "Exemplo: 1 unidade a R$ 50,00; 5 ou mais a R$ 45,00 cada."
      },
      {
       "t": "p",
       "title": "Atacado sem prejuízo",
       "html": "O desconto reduz a sobra de <b>cada unidade</b>. Ele só vale se o cliente levar <b>mais unidades</b> do que levaria sem o desconto. Quais categorias aceitam e como configurar: confira no painel."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Sobra por unidade",
       "unit": "R$",
       "hl": 1,
       "data": [
        {
         "label": "Varejo, R$ 50",
         "value": 10
        },
        {
         "label": "Atacado, R$ 45",
         "value": 6.5,
         "tone": "amber"
        }
       ],
       "caption": "Exemplo: custo de R$ 25 e taxas de 30% do preço. O desconto de 10% derruba a sobra de R$ 10,00 para R$ 6,50 por unidade."
      },
      {
       "t": "lab",
       "preset": "promo",
       "title": "Quanto a venda precisa subir?",
       "intro": "O desconto do atacado funciona como uma promoção. Mexa no desconto e veja quanto as vendas precisam crescer para o lucro empatar.",
       "defaults": {
        "preco": 50,
        "custo": 25,
        "taxas": 30,
        "desc": 10,
        "vol": 30
       },
       "note": "Números de exemplo."
      },
      {
       "t": "sim",
       "kind": "atacado",
       "title": "Bora treinar: atacado",
       "intro": "Calcule a margem de cada unidade no atacado e quantas unidades o cliente precisa levar para compensar o desconto.",
       "rounds": 3
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Regra de bolso",
       "html": "Com 10% de desconto no exemplo, a sobra cai de R$ 10,00 para R$ 6,50. O cliente precisa levar pelo menos 2 unidades (2 × 6,50 = R$ 13,00) para o lucro do pedido não cair."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Antes de ligar o preço de atacado, eu simulei o desconto. Ele só compensa se o cliente levar mais unidades por pedido. Vamos testar com um produto e acompanhar o ticket médio.”"
      },
      {
       "t": "quiz",
       "q": "Um kit leva 1 shampoo e 1 condicionador. O estoque tem 10 shampoos e 3 condicionadores. Quantos kits dá para vender?",
       "options": [
        "10 kits, porque o shampoo é o produto principal do kit",
        "13 kits, porque o kit soma o estoque dos dois produtos",
        "6 kits, porque o kit usa a média do estoque dos dois",
        "3 kits, porque o componente com menos estoque limita o kit"
       ],
       "answer": [
        3
       ],
       "why": "Cada kit consome 1 shampoo e 1 condicionador. Quando os 3 condicionadores acabam, o kit para de vender, mesmo sobrando 7 shampoos."
      },
      {
       "t": "recap",
       "items": [
        "Variação é o mesmo produto com versões",
        "Kit mistura produtos; multipack repete o mesmo",
        "Kit consome o estoque dos componentes",
        "Atacado só vale se o cliente levar mais unidades"
       ]
      }
     ]
    },
    {
     "id": "gf-l5-6",
     "title": "Publicação em massa e auditoria",
     "minutes": 8,
     "goal": "Conseguir publicar anúncios em lote com segurança e priorizar a auditoria pelo que mais impacta a venda.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🚀",
       "title": "Subir 500 anúncios sem bagunça",
       "text": "Em 8 minutos você vê como publicar em lote, sincronizar estoque e escolher qual anúncio arrumar primeiro."
      },
      {
       "t": "big",
       "emoji": "🧯",
       "html": "Erro em massa é <b>erro em escala</b>.",
       "sub": "Um campo errado numa planilha vira 500 anúncios errados."
      },
      {
       "t": "jargon",
       "term": "Publicação em massa",
       "means": "Subir ou editar <b>muitos anúncios de uma vez</b>, por planilha ou por sistema, em vez de um por um.",
       "ex": "Enviar uma planilha com 300 linhas e criar 300 anúncios."
      },
      {
       "t": "jargon",
       "term": "ERP e hub",
       "means": "<b>ERP</b> é o sistema de gestão do seller (estoque, nota, financeiro). <b>Hub</b> conecta o ERP aos marketplaces.",
       "ex": "Bling e Tiny são exemplos de sistemas que fazem esse papel."
      },
      {
       "t": "flow",
       "title": "A cadeia de dados",
       "loop": true,
       "items": [
        {
         "icon": "🧾",
         "title": "ERP ou planilha",
         "text": "Cadastro, preço e estoque nascem aqui"
        },
        {
         "icon": "🔌",
         "title": "Hub ou integração",
         "text": "Traduz os campos para o marketplace"
        },
        {
         "icon": "🛒",
         "title": "Marketplace",
         "text": "O anúncio vai ao ar e o pedido entra"
        },
        {
         "icon": "🔄",
         "title": "Estoque volta",
         "text": "A venda baixa o saldo no ERP"
        }
       ],
       "caption": "Se um elo falha, o estoque ou o preço do anúncio fica errado."
      },
      {
       "t": "table",
       "title": "Planilha x ERP ou hub",
       "head": [
        "",
        "Planilha",
        "ERP ou hub"
       ],
       "rows": [
        [
         "Melhor para",
         "Lote pontual",
         "Operação contínua"
        ],
        [
         "Estoque e preço",
         "Você atualiza na mão",
         "Sincroniza sozinho"
        ],
        [
         "Risco principal",
         "Coluna errada em lote",
         "Campo mapeado errado"
        ],
        [
         "Cuidado",
         "Guardar a versão antiga",
         "Conferir o mapeamento"
        ]
       ]
      },
      {
       "t": "steps",
       "title": "Antes de subir em lote",
       "items": [
        {
         "title": "Teste pequeno",
         "html": "Suba 5 anúncios e confira como ficaram."
        },
        {
         "title": "Confira o mapeamento",
         "html": "Título, preço, estoque e ficha no campo certo."
        },
        {
         "title": "Cheque preço e estoque",
         "html": "Os números do ERP chegaram iguais ao marketplace?"
        },
        {
         "title": "Guarde a versão antiga",
         "html": "Backup para voltar se algo der errado."
        }
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Subir 500 anúncios de uma vez sem testar com 5. Se o preço ou o estoque estiver trocado, o erro vai ao ar em escala. Pode gerar venda abaixo do custo ou venda sem estoque."
      },
      {
       "t": "jargon",
       "term": "Auditoria de anúncios",
       "means": "Revisar os anúncios da conta com um checklist e <b>corrigir primeiro o que mais pesa</b> nas vendas.",
       "ex": "Em vez de arrumar 300 anúncios em ordem, comece pelos que dão mais dinheiro ou mais visita."
      },
      {
       "t": "p",
       "title": "Curva ABC em uma frase",
       "html": "A curva ABC separa os anúncios pelo faturamento acumulado. Regra de bolso: o grupo A faz cerca de 80% do faturamento, o B os 15% seguintes e o C os 5% finais."
      },
      {
       "t": "chart",
       "kind": "pareto",
       "title": "Faturamento por anúncio (exemplo)",
       "unit": "R$",
       "data": [
        {
         "label": "Anúncio 1",
         "value": 4200
        },
        {
         "label": "Anúncio 2",
         "value": 2600
        },
        {
         "label": "Anúncio 3",
         "value": 1300
        },
        {
         "label": "Anúncio 4",
         "value": 800
        },
        {
         "label": "Anúncio 5",
         "value": 500
        },
        {
         "label": "Anúncio 6",
         "value": 350
        },
        {
         "label": "Anúncio 7",
         "value": 250
        }
       ],
       "caption": "Exemplo: 3 anúncios de 7 fazem 81% do faturamento. Comece a auditoria por eles."
      },
      {
       "t": "p",
       "title": "Impacto, não ordem da planilha",
       "html": "Priorize por <b>quanto dinheiro cada ajuste pode trazer</b>. Um anúncio com muita visita e conversão baixa vale mais que um anúncio parado com título perfeito."
      },
      {
       "t": "conta",
       "title": "Quanto vale arrumar primeiro (exemplo)",
       "rows": [
        [
         "Visitas por mês",
         "5.000"
        ],
        [
         "Conversão hoje",
         "1,0%"
        ],
        [
         "Receita hoje (venda de R$ 80)",
         "R$ 4.000,00"
        ],
        [
         "Conversão depois do ajuste (meta)",
         "1,5%"
        ],
        [
         "Receita depois do ajuste",
         "R$ 6.000,00",
         "pos"
        ]
       ],
       "total": [
        "Ganho possível",
        "R$ 2.000,00"
       ],
       "note": "Um anúncio com 400 visitas e o mesmo ajuste ganharia só R$ 160. Números de exemplo."
      },
      {
       "t": "p",
       "title": "Depois do impacto, o esforço",
       "html": "Corrigir um preço errado leva minutos. Refazer todas as fotos leva semanas. Por isso olhe os dois lados: <b>impacto alto e esforço baixo</b> vai para o topo da fila."
      },
      {
       "t": "chart",
       "kind": "matrix",
       "title": "Impacto x esforço das ações",
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
         "label": "Corrigir preço errado",
         "x": 1,
         "y": 9
        },
        {
         "label": "Completar ficha",
         "x": 3,
         "y": 7
        },
        {
         "label": "Foto nova de medidas",
         "x": 6,
         "y": 8
        },
        {
         "label": "Ajustar descrição",
         "x": 3,
         "y": 3
        },
        {
         "label": "Trocar todas as fotos",
         "x": 9,
         "y": 4
        }
       ],
       "caption": "Exemplo: comece pelo canto superior esquerdo, onde o impacto é alto e o esforço é baixo."
      },
      {
       "t": "sim",
       "kind": "prioridade",
       "title": "Bora treinar: o que fazer primeiro",
       "intro": "Veja ações de auditoria e escolha qual vale mais fazer agora, pesando impacto e esforço.",
       "rounds": 3
      },
      {
       "t": "steps",
       "title": "Mão na massa",
       "items": [
        {
         "title": "Escolha 10 anúncios",
         "html": "Em conta-teste ou conta real anonimizada. Anote visitas, conversão e vendas de hoje."
        },
        {
         "title": "Reformule",
         "html": "Ajuste título, fotos, ficha e descrição. Guarde o antes."
        },
        {
         "title": "Publique e espere",
         "html": "Mude só esses itens e acompanhe por 30 dias."
        },
        {
         "title": "Compare",
         "html": "Monte o antes x depois de visitas, conversão e vendas."
        }
       ]
      },
      {
       "t": "timeline",
       "title": "Os 30 dias de acompanhamento",
       "items": [
        {
         "when": "Dia 0",
         "label": "Anote os números de hoje"
        },
        {
         "when": "Dia 1",
         "label": "Publique a versão nova"
        },
        {
         "when": "Dia 7",
         "label": "Primeira leitura",
         "text": "Clique, visita e conversão"
        },
        {
         "when": "Dia 15",
         "label": "Segunda leitura",
         "text": "Já dá para ver tendência"
        },
        {
         "when": "Dia 30",
         "label": "Compare antes e depois"
        }
       ]
      },
      {
       "t": "say",
       "title": "Check de saída: justifique com dado",
       "html": "“Mudei o título porque a busca mostrou esse termo, coloquei a foto de medidas porque as avaliações pediam, e vou medir cliques e conversão por 30 dias.”"
      },
      {
       "t": "quiz",
       "q": "Um seller quer subir 400 anúncios por planilha ainda hoje. Qual é o cuidado mais importante antes?",
       "options": [
        "Subir todos de uma vez, porque o marketplace corrige sozinho os campos trocados",
        "Apagar os anúncios antigos antes, para a planilha não encontrar nada duplicado",
        "Duplicar a planilha antiga e subir sem revisar, para ganhar tempo no lançamento",
        "Testar com poucos anúncios e conferir se título, preço e estoque caíram no campo certo"
       ],
       "answer": [
        3
       ],
       "why": "Um erro de coluna se repete em todas as linhas. O teste pequeno mostra o problema antes de ele chegar a 400 anúncios, e o backup permite voltar atrás."
      },
      {
       "t": "quiz",
       "q": "Você precisa auditar 300 anúncios em pouco tempo. Qual é a melhor ordem de trabalho?",
       "options": [
        "Seguir a ordem da planilha, do primeiro ao último, para não esquecer nenhum",
        "Começar pelos anúncios com mais faturamento ou muita visita e conversão baixa",
        "Começar pelos anúncios parados, porque eles não têm nada a perder",
        "Começar pelos mais fáceis de arrumar, mesmo que vendam muito pouco"
       ],
       "answer": [
        1
       ],
       "why": "Auditoria em escala prioriza o impacto: onde o ajuste pode render mais dinheiro. A ordem da planilha e a facilidade não dizem onde está a venda."
      },
      {
       "t": "recap",
       "items": [
        "Teste pequeno antes de subir em lote",
        "ERP e hub precisam de mapeamento conferido",
        "Audite pelo impacto: curva ABC e visita com conversão baixa",
        "Justifique cada mudança com dado e meça por 30 dias"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "gf-m6",
   "n": 6,
   "title": "Fiscal sem medo",
   "tagline": "Regime, nota, códigos e impostos explicados com exemplo de R$, sem virar contador.",
   "outcome": "Conversar com o contador do cliente, achar erros fiscais no cadastro e levar impostos certos para o preço.",
   "lessons": [
    {
     "id": "gf-l6-1",
     "title": "Regimes e tipos de empresa",
     "minutes": 6,
     "goal": "Entender como MEI, Simples, Presumido e Real mudam a conta do seller e quando a empresa troca de regime.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🧾",
       "title": "Regime: a regra do imposto",
       "text": "Em poucos minutos você entende os 4 regimes, o que é CNAE e por que o regime mexe no preço do seu cliente."
      },
      {
       "t": "big",
       "emoji": "🍽️",
       "html": "Quem erra imposto <b>devora a margem</b> do cliente.",
       "sub": "Você não vira contador. Mas precisa entender a base pra conversar com ele."
      },
      {
       "t": "jargon",
       "term": "Regime tributário",
       "means": "A <b>forma</b> como a empresa calcula e paga os impostos dela.",
       "ex": "Dois sellers vendem o mesmo produto por R$ 100, mas pagam imposto diferente porque estão em regimes diferentes."
      },
      {
       "t": "list",
       "title": "Os 4 regimes mais comuns",
       "items": [
        "<b>MEI</b>: o formato mais enxuto, com pagamento mensal fixo",
        "<b>Simples Nacional</b>: junta vários impostos numa guia única",
        "<b>Lucro Presumido</b>: o imposto parte de um lucro presumido sobre a receita",
        "<b>Lucro Real</b>: o imposto parte do lucro apurado de verdade"
       ]
      },
      {
       "t": "table",
       "title": "Simples, Presumido e Real",
       "head": [
        "",
        "Simples",
        "Presumido",
        "Real"
       ],
       "rows": [
        [
         "Como calcula",
         "Percentual sobre a receita",
         "Lucro presumido sobre a receita",
         "Lucro apurado na contabilidade"
        ],
        [
         "Papelada",
         "Mais enxuta",
         "Intermediária",
         "A mais completa"
        ],
        [
         "Risco comum",
         "Passar do limite do regime",
         "Pagar sobre lucro que não existiu",
         "Erro de apuração custa caro"
        ]
       ],
       "caption": "Não existe regime melhor. Existe o regime que cabe na conta de cada cliente."
      },
      {
       "t": "p",
       "title": "E o MEI?",
       "html": "MEI (Microempreendedor Individual) tem imposto fixo por mês e regras próprias. Tem limite de faturamento e lista de atividades permitidas: <b>confira o limite vigente</b> na documentação oficial da Receita."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "Limites, faixas e regras dos regimes mudam. Nunca decore valor. A fonte final é a documentação oficial (Receita) e o <b>contador do cliente</b>, que decide o regime."
      },
      {
       "t": "big",
       "emoji": "💸",
       "html": "O regime muda a <b>sobra</b> de cada venda.",
       "sub": "O imposto entra na conta antes da sua margem. Veja com números de exemplo."
      },
      {
       "t": "conta",
       "title": "Venda de R$ 100, regime A (exemplo)",
       "rows": [
        [
         "Preço de venda",
         "R$ 100,00"
        ],
        [
         "Produto",
         "R$ 50,00",
         "neg"
        ],
        [
         "Comissão, tarifa e frete",
         "R$ 22,00",
         "neg"
        ],
        [
         "Imposto (6%, exemplo)",
         "R$ 6,00",
         "neg"
        ]
       ],
       "total": [
        "Sobra",
        "R$ 22,00"
       ],
       "note": "Percentuais inventados só pra conta fechar. Quem informa a alíquota real é o contador."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Sobra por R$ 100 vendidos",
       "unit": "R$",
       "hl": 0,
       "data": [
        {
         "label": "Regime A (6%)",
         "value": 22
        },
        {
         "label": "Regime B (9%)",
         "value": 19
        },
        {
         "label": "Regime C (11%)",
         "value": 17,
         "tone": "pink"
        }
       ],
       "caption": "Exemplo: a venda é a mesma, mas olha como a barra cai quando o imposto sobe."
      },
      {
       "t": "jargon",
       "term": "CNAE",
       "means": "Código que diz <b>qual é a atividade</b> da empresa no CNPJ, tipo vender roupas, peças ou cosméticos.",
       "ex": "Se o CNAE não combina com o que o seller vende, a nota e o regime podem dar dor de cabeça."
      },
      {
       "t": "list",
       "title": "Tipos de empresa (o básico)",
       "items": [
        "<b>MEI</b>: empresário individual no formato enxuto",
        "<b>EI</b> (empresário individual): uma pessoa, sem sócio",
        "<b>Ltda.</b> (sociedade limitada): dois ou mais sócios",
        "<b>SLU</b> (sociedade limitada unipessoal): um sócio, formato de Ltda."
       ]
      },
      {
       "t": "tree",
       "title": "Hora de revisar o regime?",
       "root": "O regime ainda serve pro seller?",
       "branches": [
        {
         "label": "Faturamento",
         "items": [
          "Está perto do limite vigente?",
          "Cresceu rápido no ano?"
         ]
        },
        {
         "label": "Margem",
         "items": [
          "O imposto está pesando mais?",
          "O mix de produtos mudou?"
         ]
        },
        {
         "label": "Atividade",
         "items": [
          "O CNAE ainda combina com o que vende?",
          "Entrou numa categoria nova?"
         ]
        }
       ],
       "caption": "Você junta os sinais. Quem decide trocar de regime é o contador."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Seu faturamento está chegando perto do limite vigente do regime. Vou levar ao seu contador a margem por produto pra ele avaliar se o regime ainda é o melhor. A decisão é dele.”"
      },
      {
       "t": "quiz",
       "q": "O faturamento de um seller chegou perto do limite do regime dele. Qual é o papel do assessor?",
       "options": [
        "Trocar o regime dentro da conta do cliente antes que o faturamento passe do limite",
        "Segurar as vendas do cliente até o fim do ano para ficar abaixo do limite do regime",
        "Levar faturamento e margem por produto ao contador, que decide se troca o regime",
        "Esperar o limite estourar e só depois avisar o contador sobre a mudança do regime"
       ],
       "answer": [
        2
       ],
       "why": "O assessor traz os dados (faturamento, margem, mix). Quem avalia limite e decide a troca de regime é o contador do cliente."
      },
      {
       "t": "recap",
       "items": [
        "Regime é a regra de como a empresa paga imposto",
        "Simples, Presumido e Real calculam de jeitos diferentes",
        "Limite: sempre conferir o valor vigente",
        "CNAE é a atividade; regime é a regra do imposto",
        "Quem decide o regime é o contador"
       ]
      }
     ]
    },
    {
     "id": "gf-l6-2",
     "title": "Nota fiscal: NF-e e CFOP",
     "minutes": 7,
     "goal": "Entender o que é NF-e, os tipos entrada, saída e devolução, e conseguir escolher o CFOP pela rota da venda.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📄",
       "title": "Nota fiscal sem mistério",
       "text": "Você aprende os 3 tipos de nota, o que é CFOP e como falar com o contador sem fingir que é um."
      },
      {
       "t": "big",
       "emoji": "🚨",
       "html": "Nota emitida errada vira <b>dor de cabeça</b> pro seller.",
       "sub": "Muitas vezes o erro só aparece no fechamento do mês."
      },
      {
       "t": "jargon",
       "term": "NF-e",
       "tag": "Nota Fiscal Eletrônica",
       "means": "Documento digital que registra a venda de uma mercadoria e é <b>autorizado pela Sefaz</b>, a Secretaria da Fazenda do estado.",
       "ex": "Cada nota ganha uma chave de acesso de 44 dígitos, que funciona como o RG dela."
      },
      {
       "t": "flow",
       "title": "O caminho de uma NF-e",
       "items": [
        {
         "icon": "🛒",
         "title": "Pedido aprovado",
         "text": "O cliente comprou e pagou"
        },
        {
         "icon": "🧮",
         "title": "Sistema emite",
         "text": "ERP ou faturador monta a nota"
        },
        {
         "icon": "✅",
         "title": "Sefaz autoriza",
         "text": "Só vale depois de autorizada"
        },
        {
         "icon": "📦",
         "title": "Pedido segue",
         "text": "A nota fica ligada ao pedido"
        }
       ],
       "caption": "Se a nota não sai ou é rejeitada, o pedido fica parado esperando."
      },
      {
       "t": "table",
       "title": "Entrada, saída e devolução",
       "head": [
        "",
        "Entrada",
        "Saída",
        "Devolução"
       ],
       "rows": [
        [
         "O que é",
         "Mercadoria chegando",
         "Mercadoria saindo, a venda",
         "Produto voltando"
        ],
        [
         "Exemplo",
         "Compra do fornecedor",
         "Venda no marketplace",
         "Cliente devolve o produto"
        ],
        [
         "CFOP começa com",
         "1, 2 ou 3",
         "5, 6 ou 7",
         "Depende do sentido da nota"
        ]
       ],
       "caption": "Devolução não é um tipo à parte: é a nota no sentido contrário, com CFOP próprio."
      },
      {
       "t": "jargon",
       "term": "CFOP",
       "tag": "Código Fiscal de Operações",
       "means": "Número de <b>4 dígitos</b> que diz o motivo da nota: venda, devolução, transferência e por aí vai.",
       "ex": "O primeiro dígito mostra a direção e a rota. Os outros dizem o tipo de operação."
      },
      {
       "t": "list",
       "title": "Lendo o 1º dígito do CFOP",
       "items": [
        "<b>1</b>: entrada de dentro do estado",
        "<b>2</b>: entrada de outro estado",
        "<b>3</b>: entrada do exterior",
        "<b>5</b>: saída dentro do estado",
        "<b>6</b>: saída para outro estado"
       ]
      },
      {
       "t": "big",
       "emoji": "🗺️",
       "html": "Venda <b>5</b> fica no estado. Venda <b>6</b> cruza a divisa.",
       "sub": "O 7 é saída para o exterior. Quem escolhe o CFOP completo é o contador."
      },
      {
       "t": "sim",
       "kind": "cfop",
       "title": "Bora treinar: CFOP da venda",
       "intro": "Veja de onde pra onde a venda vai e escolha o CFOP certo: 5xxx dentro do estado, 6xxx para outro estado.",
       "rounds": 3
      },
      {
       "t": "anno",
       "preset": "nfe",
       "title": "Uma NF-e por dentro (desenho)",
       "notes": [
        "Diz o tipo de operação: venda, devolução, transferência",
        "Código do produto, vem do cadastro",
        "Nacional ou importado e a situação do imposto",
        "Total da nota e impostos calculados",
        "Quem recebe e o estado, que decide o 5 ou o 6"
       ]
      },
      {
       "t": "p",
       "title": "Quem emite a nota?",
       "html": "A nota sai de um ERP (sistema de gestão da empresa) ou de um faturador (sistema que emite a nota). Ele usa o certificado digital do CNPJ e as regras de imposto que o contador definiu."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Copiar o CFOP da última nota sem olhar o destino. A rota muda a nota, e o erro só aparece quando o contador fecha o mês."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Regras de nota, campos e CFOP mudam. A fonte final é a documentação oficial (Receita, Sefaz, Mercado Livre, Shopee University) e o <b>contador do cliente</b>."
      },
      {
       "t": "compare",
       "left": {
        "title": "Falando com o contador",
        "tone": "good",
        "items": [
         "Leve o pedido e o print da nota",
         "Pergunte “isso está certo?”",
         "Anote a resposta e o motivo",
         "Peça a orientação por escrito"
        ]
       },
       "right": {
        "title": "Fingindo ser contador",
        "tone": "bad",
        "items": [
         "Afirmar que o CFOP é o X",
         "Decidir regime ou nota sozinho",
         "Prometer ao seller o que não foi confirmado",
         "Esconder a dúvida"
        ]
       }
      },
      {
       "t": "say",
       "title": "Fala assim com o contador",
       "html": "“O cliente vendeu pra outro estado e a nota saiu com CFOP começando em 5. Isso está certo? Mando o número do pedido e o print da nota. Você me diz o que precisa corrigir.”"
      },
      {
       "t": "quiz",
       "q": "Uma loja de São Paulo vendeu para um consumidor do Ceará, e a nota saiu com CFOP começando em 5. O que isso indica?",
       "options": [
        "Está certo: o CFOP sempre começa em 5 quando a nota é de saída, seja qual for o destino",
        "Possível erro: venda para outro estado costuma ter CFOP começando em 6, então avise o contador",
        "Está certo: o 5 indica que a venda foi paga no marketplace, e a rota não muda o CFOP",
        "Possível erro: a nota deveria começar em 1, porque a venda cruzou a divisa entre dois estados"
       ],
       "answer": [
        1
       ],
       "why": "5 é saída dentro do estado e 6 é saída para outro estado. Se a rota cruza a divisa e o CFOP começa em 5, vale pedir ao contador para conferir."
      },
      {
       "t": "recap",
       "items": [
        "NF-e é autorizada pela Sefaz",
        "Entrada, saída e devolução têm CFOPs diferentes",
        "CFOP 5 é dentro do estado; 6 é outro estado",
        "A rota da venda decide o CFOP",
        "Dúvida de nota vai pro contador, com o pedido"
       ]
      }
     ]
    },
    {
     "id": "gf-l6-3",
     "title": "Códigos fiscais do produto",
     "minutes": 7,
     "goal": "Conseguir preencher NCM, CEST, origem e CST/CSOSN no cadastro do produto e achar o que está errado.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🏷️",
       "title": "O RG fiscal de cada produto",
       "text": "NCM, CEST, origem e CST/CSOSN: em poucos minutos você sabe pra que serve cada código e quanto custa errar."
      },
      {
       "t": "big",
       "emoji": "🧬",
       "html": "Produto com código errado vira <b>nota com risco</b>.",
       "sub": "E o erro se repete em toda venda daquele produto."
      },
      {
       "t": "jargon",
       "term": "NCM",
       "tag": "Nomenclatura Comum do Mercosul",
       "means": "Código de <b>8 dígitos</b> que classifica o produto. Define boa parte do imposto que a nota calcula.",
       "ex": "Um tênis e uma camiseta nunca terão o mesmo NCM."
      },
      {
       "t": "jargon",
       "term": "CEST",
       "tag": "Código Especificador da ST",
       "means": "Código de 7 dígitos pra produto com <b>ST</b> (imposto cobrado lá no começo da cadeia, antes da sua venda).",
       "ex": "O contador diz se o produto tem ST. Se tem, o CEST precisa estar no cadastro."
      },
      {
       "t": "flow",
       "title": "Pra onde o código viaja",
       "items": [
        {
         "icon": "🏷️",
         "title": "Cadastro do produto",
         "text": "NCM, origem e CEST"
        },
        {
         "icon": "🧮",
         "title": "ERP calcula",
         "text": "Aplica a regra do imposto"
        },
        {
         "icon": "🧾",
         "title": "Nota sai",
         "text": "O código vai escrito na nota"
        },
        {
         "icon": "🔍",
         "title": "Sefaz confere",
         "text": "Pode rejeitar se algo não bate"
        }
       ],
       "caption": "Erro lá no cadastro vira erro em toda nota daquele produto."
      },
      {
       "t": "jargon",
       "term": "Origem",
       "tag": "Origem da mercadoria",
       "means": "Código que diz se o produto é <b>nacional ou importado</b> (e de que forma).",
       "ex": "Importado marcado como nacional pode mudar o imposto calculado e dar problema numa fiscalização."
      },
      {
       "t": "jargon",
       "term": "CST / CSOSN",
       "tag": "Situação tributária",
       "means": "Códigos da situação do ICMS no produto. <b>CST</b> é do regime normal e <b>CSOSN</b> é do Simples Nacional.",
       "ex": "Seller do Simples usando CST do regime normal: a nota pode ser rejeitada ou sair errada."
      },
      {
       "t": "table",
       "title": "Os 4 campos e o erro favorito",
       "head": [
        "Campo",
        "O que diz",
        "Erro comum"
       ],
       "rows": [
        [
         "NCM",
         "Que produto é",
         "Copiar de produto parecido"
        ],
        [
         "CEST",
         "Se há ST e qual",
         "Faltar em produto com ST"
        ],
        [
         "Origem",
         "Nacional ou importado",
         "Marcar tudo como nacional"
        ],
        [
         "CST ou CSOSN",
         "Situação do ICMS",
         "Misturar CST com CSOSN"
        ]
       ],
       "caption": "Cada campo tem um erro favorito. Quando for auditar, procure ele primeiro."
      },
      {
       "t": "steps",
       "title": "Mão na massa: 10 produtos",
       "items": [
        {
         "title": "Escolha 10 produtos",
         "html": "Use conta-teste ou conta real anonimizada, com categorias variadas."
        },
        {
         "title": "Monte a planilha",
         "html": "Colunas: produto, NCM, CEST, origem, CST ou CSOSN e fonte do dado."
        },
        {
         "title": "Busque a fonte",
         "html": "Fornecedor, nota de compra ou contador. Concorrente é só pista, nunca prova."
        },
        {
         "title": "Marque as dúvidas",
         "html": "Produto sem certeza vai pra lista do contador, com foto e descrição."
        }
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Copiar o NCM de um produto “parecido” ou do concorrente. Cada produto tem a sua classificação, e o erro se repete em toda nota."
      },
      {
       "t": "table",
       "title": "Cadastro de exemplo: achou o erro?",
       "head": [
        "Campo",
        "No cadastro",
        "Sinal de alerta"
       ],
       "rows": [
        [
         "NCM",
         "Igual ao de outro produto",
         "Produtos diferentes, mesmo código"
        ],
        [
         "CEST",
         "Vazio",
         "Produto com ST sem CEST"
        ],
        [
         "Origem",
         "Nacional",
         "Nota de compra mostra importação"
        ],
        [
         "CSOSN",
         "Em empresa do regime normal",
         "Código do regime trocado"
        ]
       ],
       "caption": "Cada sinal de alerta é um risco. O próximo card mostra qual."
      },
      {
       "t": "list",
       "title": "O risco de cada erro",
       "items": [
        "<b>NCM errado</b>: imposto calculado errado em toda venda",
        "<b>CEST faltando</b>: nota rejeitada ou ST ignorada na conta",
        "<b>Origem errada</b>: imposto errado e problema em fiscalização",
        "<b>CST ou CSOSN trocado</b>: nota rejeitada ou imposto errado"
       ]
      },
      {
       "t": "say",
       "title": "Fala assim com o fornecedor",
       "html": "“Preciso do NCM e do CEST deste produto, do jeito que aparece na nota de compra. Vou colocar no cadastro e te mando a planilha pra você conferir.”"
      },
      {
       "t": "quiz",
       "q": "No cadastro de um tênis, o NCM está igual ao de uma camiseta. Qual é o risco, e o que fazer?",
       "options": [
        "Nenhum risco, porque produtos de moda sempre dividem o mesmo NCM dentro da mesma loja",
        "O risco é só visual no anúncio; basta ajustar o título para o marketplace não reclamar",
        "O imposto fica certo, mas o frete sai errado; peça ao marketplace para recalcular o envio",
        "O imposto da nota sai errado em toda venda do tênis; busque o NCM certo na nota de compra"
       ],
       "answer": [
        3
       ],
       "why": "NCM classifica o produto e alimenta o cálculo do imposto. Se for o de outro produto, o erro se repete em toda nota. A fonte certa é o fornecedor, a nota de compra ou o contador."
      },
      {
       "t": "recap",
       "items": [
        "NCM classifica o produto; CEST vem com ST",
        "Origem diz se é nacional ou importado",
        "CST é regime normal; CSOSN é Simples",
        "Cadastro errado vira erro em toda nota",
        "Fonte do dado: fornecedor, nota de compra, contador"
       ]
      }
     ]
    },
    {
     "id": "gf-l6-4",
     "title": "Impostos que entram no preço",
     "minutes": 8,
     "goal": "Entender como ICMS, ST, DIFAL, PIS/COFINS, IPI e ISS entram na conta e evitar precificar sem ST ou DIFAL.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "💸",
       "title": "Os impostos que mordem o preço",
       "text": "Você vê o que cada imposto cobra, o que é “por dentro” e “por fora” e como a rota da venda entra na conta."
      },
      {
       "t": "big",
       "emoji": "🍕",
       "html": "Imposto é uma <b>fatia do preço</b>, não um extra no fim.",
       "sub": "Se você não reserva a fatia, ela sai da margem do cliente."
      },
      {
       "t": "table",
       "title": "Quem cobra o quê",
       "head": [
        "Imposto",
        "Quem cobra",
        "Em cima de quê"
       ],
       "rows": [
        [
         "ICMS",
         "Estado",
         "Circulação de mercadorias"
        ],
        [
         "PIS e COFINS",
         "Governo federal",
         "Receita da empresa"
        ],
        [
         "IPI",
         "Governo federal",
         "Produto industrializado"
        ],
        [
         "ISS",
         "Município",
         "Serviços"
        ]
       ],
       "caption": "ST e DIFAL não são impostos novos: são jeitos de cobrar o ICMS. Já já."
      },
      {
       "t": "jargon",
       "term": "ST",
       "tag": "Substituição Tributária",
       "means": "O ICMS da cadeia é cobrado <b>antes</b>, de um elo do começo, como fabricante ou importador.",
       "ex": "Em produto com ST, o custo de compra pode já trazer esse ICMS. O contador diz como tratar na conta."
      },
      {
       "t": "jargon",
       "term": "DIFAL",
       "tag": "Diferencial de alíquotas",
       "means": "Na venda pra consumidor final de <b>outro estado</b>, o estado de destino também recebe uma parte do ICMS.",
       "ex": "Loja de SP vende pro Ceará: entra a conta da rota. O contador diz quem recolhe e como."
      },
      {
       "t": "big",
       "emoji": "🧮",
       "html": "Imposto <b>por dentro</b> já está no preço. Imposto <b>por fora</b> soma por cima.",
       "sub": "Na regra de bolso: ICMS é por dentro e IPI é por fora."
      },
      {
       "t": "conta",
       "title": "Por dentro: preço de R$ 100 (exemplo)",
       "rows": [
        [
         "Preço de venda",
         "R$ 100,00"
        ],
        [
         "ICMS (12%, exemplo)",
         "R$ 12,00",
         "neg"
        ],
        [
         "PIS e COFINS (4%, exemplo)",
         "R$ 4,00",
         "neg"
        ]
       ],
       "total": [
        "Sobra antes dos outros custos",
        "R$ 84,00"
       ],
       "note": "Percentuais inventados. O imposto por dentro sai do próprio preço, o total da venda não muda."
      },
      {
       "t": "conta",
       "title": "Por fora: IPI sobre R$ 100 (exemplo)",
       "rows": [
        [
         "Valor do produto",
         "R$ 100,00"
        ],
        [
         "IPI (5%, exemplo)",
         "R$ 5,00",
         "neg"
        ]
       ],
       "total": [
        "Total da nota",
        "R$ 105,00"
       ],
       "note": "Percentual inventado. Por fora: o imposto é somado ao valor do produto, e o total da nota sobe."
      },
      {
       "t": "p",
       "title": "Quem lida com IPI e ISS",
       "html": "O IPI é cobrado de indústria e importador. O ISS é do município e vale para serviços, como instalação ou montagem. Quem revende produto costuma lidar mais com ICMS e PIS/COFINS. O contador confirma cada caso."
      },
      {
       "t": "flow",
       "title": "A rota da venda interestadual",
       "items": [
        {
         "icon": "🏭",
         "title": "Origem",
         "text": "O estado de quem vende"
        },
        {
         "icon": "🚚",
         "title": "Rota",
         "text": "A venda cruza a divisa"
        },
        {
         "icon": "📍",
         "title": "Destino",
         "text": "O estado do cliente"
        },
        {
         "icon": "🧮",
         "title": "Conta fiscal",
         "text": "A rota muda alíquota e DIFAL"
        }
       ],
       "caption": "Rota diferente, conta diferente. Pergunte sempre: de onde pra onde?"
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Confira o valor vigente",
       "html": "Alíquotas de rota, ST e DIFAL mudam. Confira na documentação oficial e com o contador. O que muda com a reforma está na trilha “Reforma Tributária nos Marketplaces”, aqui no Estude House."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Precificar sem considerar ST ou DIFAL e só descobrir o prejuízo no fechamento do mês. No próximo gráfico, um DIFAL esquecido come a sobra (exemplo)."
      },
      {
       "t": "chart",
       "kind": "waterfall",
       "title": "Do preço até a sobra (exemplo)",
       "unit": "R$",
       "caption": "Exemplo: o DIFAL de R$ 3 que ficou fora da conta planejada tira a sobra de R$ 21 para R$ 18.",
       "data": [
        {
         "label": "Preço",
         "value": 100,
         "type": "start"
        },
        {
         "label": "Produto",
         "value": -45
        },
        {
         "label": "Comissão",
         "value": -14
        },
        {
         "label": "Frete",
         "value": -12
        },
        {
         "label": "Imposto",
         "value": -8
        },
        {
         "label": "DIFAL",
         "value": -3
        },
        {
         "label": "Sobra",
         "type": "total"
        }
       ]
      },
      {
       "t": "lab",
       "preset": "preco",
       "title": "Monte o preço com imposto",
       "intro": "Mexa no slider de imposto e veja a sobra e o preço mínimo mudarem. O imposto escondido sai da sua margem.",
       "defaults": {
        "preco": 129,
        "custo": 52,
        "com": 14,
        "tarifa": 6,
        "frete": 12,
        "imp": 8,
        "ads": 5,
        "emb": 3,
        "alvo": 15
       },
       "note": "Números de exemplo. As alíquotas reais vêm do contador."
      },
      {
       "t": "say",
       "title": "Fala assim pro seller",
       "html": "“Imposto não é custo extra: é uma fatia do preço. Quando a venda vai pra outro estado, a fatia pode mudar. Por isso calculo o preço mínimo já com ela, e seu contador confirma os percentuais.”"
      },
      {
       "t": "quiz",
       "q": "Um assessor precificou um produto sem considerar o DIFAL da venda para outro estado. O que costuma acontecer?",
       "options": [
        "Nada muda no resultado, porque o marketplace paga o DIFAL no lugar do vendedor sozinho",
        "O preço do anúncio sobe sozinho no marketplace e a margem do cliente fica protegida",
        "A sobra real fica menor que a planejada, e o prejuízo só aparece no fechamento do mês",
        "O imposto some do cálculo, já que o DIFAL só vale em venda dentro do mesmo estado"
       ],
       "answer": [
        2
       ],
       "why": "Imposto esquecido continua existindo: ele só sai da margem. Quem não reserva a fatia do DIFAL na conta tem sobra menor e só vê isso no fechamento."
      },
      {
       "t": "recap",
       "items": [
        "Imposto é fatia do preço",
        "ICMS é por dentro; IPI é por fora",
        "ST e DIFAL são jeitos de cobrar ICMS",
        "A rota da venda muda a conta",
        "Alíquota real: conferir o valor vigente"
       ]
      }
     ]
    },
    {
     "id": "gf-l6-5",
     "title": "Onde preencher cada dado fiscal",
     "minutes": 7,
     "goal": "Saber em qual lugar mora cada dado fiscal e conferir repasses e retenções do marketplace na conciliação.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🗺️",
       "title": "Dado fiscal: onde ele mora?",
       "text": "Você monta o mapa de onde cada dado fiscal vive e aprende a conferir o repasse do marketplace."
      },
      {
       "t": "big",
       "emoji": "🧩",
       "html": "Dado certo no <b>lugar errado</b> não resolve.",
       "sub": "Cada sistema guarda uma parte da informação fiscal."
      },
      {
       "t": "flow",
       "title": "A cadeia do dado fiscal",
       "items": [
        {
         "icon": "🏪",
         "title": "Conta do marketplace",
         "text": "Dados do CNPJ e do vendedor"
        },
        {
         "icon": "🏷️",
         "title": "Cadastro do produto",
         "text": "NCM, origem e CEST"
        },
        {
         "icon": "🧮",
         "title": "ERP ou emissor",
         "text": "Regras de imposto e CFOP"
        },
        {
         "icon": "🧾",
         "title": "Faturador",
         "text": "Emite e envia a nota"
        }
       ],
       "caption": "O dado nasce num ponto e segue pra frente. Erro cedo se repete até o fim."
      },
      {
       "t": "table",
       "title": "Mapa: dado e onde mora",
       "head": [
        "Dado",
        "Onde mora",
        "Quem confere"
       ],
       "rows": [
        [
         "CNPJ e regime",
         "Conta e ERP",
         "Contador e seller"
        ],
        [
         "NCM, CEST e origem",
         "Cadastro do produto",
         "Assessor e contador"
        ],
        [
         "CFOP padrão",
         "Regras do ERP ou emissor",
         "Contador"
        ],
        [
         "Certificado digital",
         "Emissor ou faturador",
         "Seller ou time fiscal"
        ]
       ],
       "caption": "Cada sistema muda de nome e de tela. Confirme na documentação do que o cliente usa."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Telas e campos mudam de ERP pra ERP e de marketplace pra marketplace. Use o mapa como guia e confirme na documentação oficial e com o contador do cliente."
      },
      {
       "t": "steps",
       "title": "Mão na massa: mapa da conta",
       "items": [
        {
         "title": "Liste os sistemas",
         "html": "Marketplace, ERP, emissor e faturador que o cliente usa."
        },
        {
         "title": "Liste os dados",
         "html": "CNPJ, regime, NCM, CEST, origem, CFOP e certificado."
        },
        {
         "title": "Ligue os pontos",
         "html": "Pra cada dado, anote onde ele é preenchido e quem confere."
        },
        {
         "title": "Ache os buracos",
         "html": "Dado que ninguém cuida vai pra lista de pendências do contador."
        }
       ]
      },
      {
       "t": "quiz",
       "q": "O NCM de um produto está errado e as notas saem com imposto torto. Onde o assessor corrige o dado na origem?",
       "options": [
        "No certificado digital, que guarda os códigos de todos os produtos",
        "No cadastro do produto, para as próximas notas já saírem certas",
        "Na nota já emitida, editando o campo do NCM depois da autorização",
        "No extrato do marketplace, onde cada venda mostra o NCM do produto"
       ],
       "answer": [
        1
       ],
       "why": "O NCM mora no cadastro do produto e segue para ERP e nota. Corrigir lá evita o erro nas próximas vendas. Nota já autorizada não se edita: o contador orienta como tratar."
      },
      {
       "t": "jargon",
       "term": "Repasse",
       "means": "O dinheiro que o marketplace <b>te paga</b> depois de descontar comissão, tarifas, frete e outras taxas da venda.",
       "ex": "Venda de R$ 100 não vira R$ 100 na conta. O repasse chega menor."
      },
      {
       "t": "jargon",
       "term": "Retenção",
       "means": "Valor que o marketplace <b>separa ou desconta</b> do repasse, por regra da plataforma ou da lei.",
       "ex": "Aparece como desconto no extrato. O contador diz se é imposto e como contabilizar."
      },
      {
       "t": "conta",
       "title": "Do pedido ao repasse (exemplo)",
       "rows": [
        [
         "Valor da venda",
         "R$ 100,00"
        ],
        [
         "Comissão",
         "R$ 14,00",
         "neg"
        ],
        [
         "Tarifa fixa",
         "R$ 6,00",
         "neg"
        ],
        [
         "Frete pago pelo seller",
         "R$ 12,00",
         "neg"
        ],
        [
         "Retenção",
         "R$ 2,00",
         "neg"
        ]
       ],
       "total": [
        "Repasse",
        "R$ 66,00"
       ],
       "note": "Valores de exemplo. A retenção depende da regra vigente."
      },
      {
       "t": "chart",
       "kind": "donut",
       "title": "Pra onde foi o R$ 100 (exemplo)",
       "center": "R$ 100",
       "data": [
        {
         "label": "Repasse",
         "value": 66
        },
        {
         "label": "Comissão",
         "value": 14
        },
        {
         "label": "Frete",
         "value": 12
        },
        {
         "label": "Tarifa fixa",
         "value": 6
        },
        {
         "label": "Retenção",
         "value": 2
        }
       ],
       "caption": "O repasse é a maior fatia. Cada desconto precisa ter nome no extrato."
      },
      {
       "t": "jargon",
       "term": "Conciliação",
       "means": "Conferir se o que o marketplace diz que pagou <b>bate</b> com o que entrou no banco e com as notas.",
       "ex": "Pedido feito, nota emitida e repasse recebido: os três precisam contar a mesma história."
      },
      {
       "t": "flow",
       "title": "Rotina de conciliação",
       "loop": true,
       "items": [
        {
         "icon": "📥",
         "title": "Baixe o extrato",
         "text": "Do marketplace, no período"
        },
        {
         "icon": "🧾",
         "title": "Cruze com as notas",
         "text": "Pedido por pedido"
        },
        {
         "icon": "🔍",
         "title": "Ache as diferenças",
         "text": "Valor ou pedido sem par"
        },
        {
         "icon": "✅",
         "title": "Registre",
         "text": "Dúvida vai pro contador"
        }
       ],
       "caption": "Rotina semanal evita surpresa no fechamento do mês."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Olhar só o relatório de vendas e esquecer o extrato. Retenção e devolução só aparecem de verdade no repasse, e a conta fecha torta."
      },
      {
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“O repasse veio menor que a venda porque o marketplace desconta comissão, frete e outras tarifas. Vou te mandar a conciliação do mês com cada desconto explicado. O que for imposto a gente confirma com seu contador.”"
      },
      {
       "t": "quiz",
       "q": "Na conciliação, um repasse veio R$ 2 menor do que o assessor esperava, sem nome claro no extrato. O que fazer?",
       "options": [
        "Ignorar a diferença, porque valores pequenos nunca importam na conciliação do mês",
        "Corrigir a nota do pedido para bater com o repasse que o marketplace pagou ao seller",
        "Pedir ao seller que aumente o preço de todos os anúncios para cobrir a diferença",
        "Cruzar o pedido com o extrato e as notas, anotar a diferença e levar ao contador"
       ],
       "answer": [
        3
       ],
       "why": "Diferença sem nome é pista: pode ser retenção, tarifa ou devolução. O caminho é cruzar pedido, extrato e nota, registrar e levar ao contador, sem mexer na nota."
      },
      {
       "t": "recap",
       "items": [
        "Cada dado fiscal mora num lugar certo",
        "Cadastro do produto guarda NCM, CEST e origem",
        "Repasse é menor que a venda",
        "Conciliação cruza pedido, nota e extrato",
        "Diferença sem nome vai pro contador"
       ]
      }
     ]
    },
    {
     "id": "gf-l6-6",
     "title": "Planejamento tributário e importação",
     "minutes": 8,
     "goal": "Conseguir comparar o preço mínimo em dois regimes e entender o que compõe o custo de importar.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "⚖️",
       "title": "Mesmo produto, dois regimes",
       "text": "Você simula o preço mínimo em dois regimes, vê quem vence e entende o custo de nacionalizar um importado."
      },
      {
       "t": "big",
       "emoji": "🧪",
       "html": "Planejar imposto é <b>simular cenários</b>, não adivinhar.",
       "sub": "Quem decide o regime é o contador. Você leva os números."
      },
      {
       "t": "jargon",
       "term": "Preço mínimo",
       "means": "O <b>menor preço</b> que ainda entrega a margem que você definiu, depois de pagar tudo da venda.",
       "ex": "Custo, frete, comissão, imposto e margem alvo entram na conta. O preço mínimo é o que fecha."
      },
      {
       "t": "steps",
       "title": "Mão na massa: simule 2 regimes",
       "items": [
        {
         "title": "Escolha um produto",
         "html": "Com custo, comissão e frete conhecidos."
        },
        {
         "title": "Peça as alíquotas",
         "html": "O contador passa o percentual de cada regime. Aqui usamos exemplos."
        },
        {
         "title": "Calcule os dois preços",
         "html": "Mesmo custo e mesma margem, só o imposto muda."
        },
        {
         "title": "Compare e leve",
         "html": "Mostre a diferença em R$ e em %. O contador decide."
        }
       ]
      },
      {
       "t": "conta",
       "title": "Preço mínimo, regime A (exemplo)",
       "rows": [
        [
         "Custo do produto",
         "R$ 42,00"
        ],
        [
         "Frete",
         "R$ 12,00"
        ],
        [
         "Comissão (14% de R$ 90)",
         "R$ 12,60"
        ],
        [
         "Imposto (6% de R$ 90)",
         "R$ 5,40"
        ],
        [
         "Margem alvo (20% de R$ 90)",
         "R$ 18,00"
        ]
       ],
       "total": [
        "Preço mínimo",
        "R$ 90,00"
       ],
       "note": "Fórmula: (custo + frete) ÷ (1 − comissão − imposto − margem) = 54 ÷ 0,60 = 90."
      },
      {
       "t": "conta",
       "title": "Preço mínimo, regime B (exemplo)",
       "rows": [
        [
         "Custo do produto",
         "R$ 42,00"
        ],
        [
         "Frete",
         "R$ 12,00"
        ],
        [
         "Comissão (14% de R$ 100)",
         "R$ 14,00"
        ],
        [
         "Imposto (12% de R$ 100)",
         "R$ 12,00"
        ],
        [
         "Margem alvo (20% de R$ 100)",
         "R$ 20,00"
        ]
       ],
       "total": [
        "Preço mínimo",
        "R$ 100,00"
       ],
       "note": "Mesma fórmula: 54 ÷ 0,54 = 100. Só o imposto mudou: de 6% para 12% (exemplos)."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Preço mínimo por regime (exemplo)",
       "unit": "R$",
       "hl": 0,
       "data": [
        {
         "label": "Regime A",
         "value": 90
        },
        {
         "label": "Regime B",
         "value": 100,
         "tone": "pink"
        }
       ],
       "caption": "Mesmo produto e mesma margem: o regime A pede R$ 10 a menos de preço mínimo."
      },
      {
       "t": "lab",
       "preset": "regime",
       "title": "Compare dois regimes",
       "intro": "Mexa nas alíquotas de exemplo e veja o preço mínimo de cada regime e quem vence.",
       "defaults": {
        "custo": 42,
        "com": 14,
        "frete": 12,
        "alvo": 20,
        "aliqA": 6,
        "aliqB": 12
       },
       "note": "Alíquotas de exemplo. As reais vêm do contador."
      },
      {
       "t": "sim",
       "kind": "precomin",
       "title": "Bora treinar: preço mínimo",
       "intro": "Calcule o preço mínimo com custo, comissão, imposto, frete e margem alvo. Cada rodada sorteia números novos.",
       "rounds": 3
      },
      {
       "t": "quiz",
       "q": "Números de exemplo: custo + frete = R$ 48, comissão 12% e margem alvo 20%. Imposto do regime A: 8%. Do regime B: 20%. Qual regime vence?",
       "options": [
        "Regime A vence: preço mínimo de R$ 80, contra R$ 100 do regime B",
        "Regime B vence: preço mínimo de R$ 80, contra R$ 100 do regime A",
        "Regime A vence: preço mínimo de R$ 60, contra R$ 75 do regime B",
        "Empatam: os dois chegam ao mesmo preço mínimo de R$ 80 de venda"
       ],
       "answer": [
        0
       ],
       "why": "Regime A: 48 ÷ (1 − 0,12 − 0,08 − 0,20) = 48 ÷ 0,60 = 80. Regime B: 48 ÷ (1 − 0,12 − 0,20 − 0,20) = 48 ÷ 0,48 = 100. Vence quem pede o menor preço mínimo."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Quem decide é o contador",
       "html": "O regime que vence na simulação pode não ser o melhor na vida real. Trocar de regime tem regras, prazos e outros custos. Alíquotas: confira o valor vigente com o contador."
      },
      {
       "t": "say",
       "title": "Fala assim com o contador",
       "html": "“Simulei o preço mínimo do produto em dois cenários, com as alíquotas que você me passou. Num deles o preço sobe R$ 10. Podemos olhar juntos se vale mexer no regime?”"
      },
      {
       "t": "big",
       "emoji": "🚢",
       "html": "Produto importado tem um <b>custo escondido</b> além do preço de fábrica.",
       "sub": "Esse custo tem nome: custo de nacionalização."
      },
      {
       "t": "jargon",
       "term": "Nacionalização",
       "means": "Tudo que se paga pra a mercadoria importada <b>chegar e poder ser vendida</b> no Brasil: impostos, frete, taxas e despachante.",
       "ex": "Comprou lá fora por R$ 100: o custo final no estoque fica bem acima disso."
      },
      {
       "t": "jargon",
       "term": "DI",
       "tag": "Declaração de Importação",
       "means": "Documento que <b>registra a entrada</b> da mercadoria no país e serve de base pros impostos de importação.",
       "ex": "Quem cuida da DI costuma ser o despachante aduaneiro, junto do time fiscal."
      },
      {
       "t": "flow",
       "title": "O caminho de um importado",
       "items": [
        {
         "icon": "🏭",
         "title": "Compra no exterior",
         "text": "Preço de fábrica"
        },
        {
         "icon": "🚢",
         "title": "Frete internacional",
         "text": "Mais seguro da carga"
        },
        {
         "icon": "🛃",
         "title": "Desembaraço e DI",
         "text": "A alfândega libera a carga"
        },
        {
         "icon": "🏬",
         "title": "Chega no estoque",
         "text": "Aqui o custo final fecha"
        }
       ],
       "caption": "O custo final só fica claro quando o produto chega no estoque."
      },
      {
       "t": "conta",
       "title": "Custo de nacionalização (exemplo)",
       "rows": [
        [
         "Produto no exterior, em reais",
         "R$ 100,00"
        ],
        [
         "Frete e seguro internacional",
         "R$ 20,00"
        ],
        [
         "Impostos de importação",
         "R$ 45,00"
        ],
        [
         "Despachante e taxas",
         "R$ 15,00"
        ],
        [
         "Armazenagem no porto",
         "R$ 10,00"
        ]
       ],
       "total": [
        "Custo final no estoque",
        "R$ 190,00"
       ],
       "note": "Valores inventados. As regras e taxas reais dependem do produto e da época."
      },
      {
       "t": "chart",
       "kind": "stack",
       "title": "De onde vem o custo final (exemplo)",
       "data": [
        {
         "label": "Produto",
         "value": 100,
         "tone": "violet"
        },
        {
         "label": "Frete",
         "value": 20,
         "tone": "sky"
        },
        {
         "label": "Impostos",
         "value": 45,
         "tone": "pink"
        },
        {
         "label": "Despachante",
         "value": 15,
         "tone": "amber"
        },
        {
         "label": "Porto",
         "value": 10,
         "tone": "gold"
        }
       ],
       "caption": "Olha onde a barra cresce: quase metade do custo final não é o produto."
      },
      {
       "t": "quiz",
       "q": "Um produto custa R$ 100 no exterior e chega ao estoque a R$ 190 depois de frete, impostos e taxas. Como o assessor deve precificar?",
       "options": [
        "Usando R$ 100 como custo do produto, pois frete e impostos não entram na margem",
        "Usando R$ 145 como custo, que é a média entre o preço da fábrica e o final",
        "Usando R$ 190 como custo do produto, porque ele é o custo final no estoque",
        "Usando R$ 100 mais a comissão do marketplace, deixando os impostos para depois"
       ],
       "answer": [
        2
       ],
       "why": "O custo que importa para o preço é o custo final no estoque, com tudo que foi pago para nacionalizar. Usar só o preço de fábrica faz a margem sumir."
      },
      {
       "t": "recap",
       "items": [
        "Planejar é simular cenários com dados reais",
        "Preço mínimo = custos ÷ (1 − percentuais)",
        "Regime vencedor na conta não é decisão final",
        "Importado tem custo de nacionalização",
        "Para precificar, use o custo final no estoque"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "gf-m7",
   "n": 7,
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
       "q": "O mesmo produto, a R$ 100, será vendido em três canais com taxas diferentes (números de exemplo). Qual comparação o assessor deve fazer?",
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
  },
  {
   "id": "gf-m8",
   "n": 8,
   "title": "Logística e Full",
   "tagline": "Modalidades do Mercado Livre e da Shopee, Full e devolução: escolher o caminho certo por SKU.",
   "outcome": "Escolher, com número e justificativa, a modalidade de envio de cada SKU e decidir se vale mandar para o Full.",
   "lessons": [
    {
     "id": "gf-l8-1",
     "title": "Mapa das modalidades do ML",
     "minutes": 6,
     "goal": "Saber o que são Coleta, Flex, Places, Correios e Full e quando cada uma faz sentido.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🚚",
       "title": "Cinco jeitos de enviar no Mercado Livre",
       "text": "Em 6 minutos você conhece as modalidades de envio do Mercado Livre e escolhe a certa pra cada SKU (versão do produto)."
      },
      {
       "t": "big",
       "emoji": "💸",
       "html": "Logística define <b>prazo, custo, reputação</b> e se o cliente compra.",
       "sub": "O comprador compara prazo e frete antes de decidir."
      },
      {
       "t": "jargon",
       "term": "Mercado Envios",
       "means": "O sistema de logística do Mercado Livre: reúne as formas de enviar, a etiqueta e o rastreio do pedido.",
       "ex": "Cada modalidade é um jeito diferente de o pacote sair da sua mão."
      },
      {
       "t": "flow",
       "title": "A vida de um pedido",
       "items": [
        {
         "icon": "🛒",
         "title": "Cliente compra",
         "text": "O pagamento é aprovado"
        },
        {
         "icon": "🏷️",
         "title": "Você embala e etiqueta"
        },
        {
         "icon": "🚚",
         "title": "Pacote sai",
         "text": "A modalidade muda aqui"
        },
        {
         "icon": "📬",
         "title": "Cliente recebe"
        }
       ],
       "caption": "A modalidade decide quem leva o pacote e quanto tempo ele demora."
      },
      {
       "t": "list",
       "title": "As 5 modalidades",
       "items": [
        "<b>Coleta</b>: a transportadora busca o pacote na sua porta",
        "<b>Flex</b>: você, ou seu motorista, entrega na região",
        "<b>Places</b>: você leva o pacote a uma agência (ponto de postagem)",
        "<b>Correios ou transportadora</b>: o pacote segue por esses parceiros",
        "<b>Full</b>: o Mercado Livre guarda o estoque, embala e envia"
       ]
      },
      {
       "t": "jargon",
       "term": "Full",
       "means": "Você manda o estoque pro centro de distribuição do Mercado Livre, e ele separa, embala e envia os pedidos.",
       "ex": "Você vende e a plataforma cuida do envio, mas armazenar estoque tem custo."
      },
      {
       "t": "jargon",
       "term": "Flex",
       "means": "Entrega feita por você ou por um motorista seu, só dentro da região que você atende.",
       "ex": "Quanto mais longe do seu estoque, maior o custo e o risco de atraso."
      },
      {
       "t": "table",
       "title": "Coleta, Flex e Places lado a lado",
       "head": [
        "",
        "Coleta",
        "Flex",
        "Places"
       ],
       "rows": [
        [
         "Quem leva",
         "A transportadora busca",
         "Você ou seu motorista",
         "Você leva à agência"
        ],
        [
         "Faz sentido quando",
         "Há despacho todo dia",
         "O cliente mora perto",
         "O volume é baixo"
        ],
        [
         "Atenção",
         "Horário fixo de coleta",
         "Atraso pesa na reputação",
         "Seu tempo de deslocamento"
        ]
       ],
       "caption": "Leia por linha: quem leva o pacote muda o custo, o prazo e o risco."
      },
      {
       "t": "table",
       "title": "Full e Correios ou transportadora",
       "head": [
        "",
        "Full",
        "Correios ou transportadora"
       ],
       "rows": [
        [
         "Quem guarda o estoque",
         "O Mercado Livre",
         "Você"
        ],
        [
         "Faz sentido quando",
         "O SKU gira rápido",
         "As outras modalidades não atendem o SKU"
        ],
        [
         "Atenção",
         "Custo de armazenagem e estoque parado",
         "Prazo e frete variam por parceiro"
        ]
       ],
       "hl": 1
      },
      {
       "t": "tree",
       "title": "Como pensar a escolha",
       "root": "Qual modalidade pro SKU?",
       "branches": [
        {
         "label": "Gira rápido?",
         "items": [
          "Sim: candidato a Full",
          "Antes, calcule a armazenagem"
         ]
        },
        {
         "label": "Cliente perto de você?",
         "items": [
          "Sim: Flex pode valer",
          "Confira a região e o horário de corte"
         ]
        },
        {
         "label": "Volume baixo?",
         "items": [
          "Places ou Coleta",
          "Veja sua rotina de despacho"
         ]
        }
       ],
       "caption": "SKU é cada versão do produto, tipo camiseta preta M."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "Modalidades, custos, prazos e exigências mudam. A fonte final é a documentação oficial do Mercado Livre e do Mercado Envios, e o que está ativo na conta do cliente."
      },
      {
       "t": "compare",
       "left": {
        "title": "Armadilha",
        "tone": "bad",
        "items": [
         "Full é sempre a melhor",
         "Uma modalidade pra conta toda",
         "Escolher só pelo frete"
        ]
       },
       "right": {
        "title": "Jeito Mamba",
        "tone": "good",
        "items": [
         "Escolha por SKU",
         "Misture modalidades",
         "Olhe giro (venda do estoque), margem e prazo"
        ]
       }
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Regra de bolso",
       "html": "Não existe modalidade melhor. Existe a melhor <b>pro giro, o peso, a região e a margem</b> de cada SKU."
      },
      {
       "t": "sim",
       "kind": "modalidade",
       "title": "Bora treinar: escolha a modalidade",
       "intro": "Cada perfil de SKU pede um caminho. Escolha a modalidade e justifique com giro, peso e região.",
       "rounds": 3
      },
      {
       "t": "quiz",
       "q": "Qual conjunto de critérios ajuda a escolher a modalidade de envio de um SKU?",
       "options": [
        "Só o valor do frete, porque ele é o único custo que muda entre elas",
        "O que os concorrentes usam, porque o comprador espera sempre o mesmo prazo",
        "Giro de vendas, peso e tamanho, região dos clientes e margem do produto",
        "A modalidade mais nova da plataforma, porque ela costuma ter mais destaque"
       ],
       "answer": [
        2
       ],
       "why": "A modalidade certa muda de SKU pra SKU: depende de quanto o produto gira, do peso e tamanho, de onde estão os clientes e da margem que sobra."
      },
      {
       "t": "recap",
       "items": [
        "Cinco modalidades: Coleta, Flex, Places, Correios e Full",
        "Quem leva o pacote muda custo e risco",
        "A escolha é por SKU, não pela conta toda",
        "Regras mudam: confira a documentação oficial"
       ]
      }
     ]
    },
    {
     "id": "gf-l8-2",
     "title": "Flex e Coleta",
     "minutes": 7,
     "goal": "Entender como Flex e Coleta funcionam, onde está o risco de atraso e como proteger a reputação.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🏍️",
       "title": "Flex e Coleta sem susto",
       "text": "Em 7 minutos você entende a rotina de cada uma, onde mora o risco de atraso e como avisar o cliente."
      },
      {
       "t": "big",
       "emoji": "⏱️",
       "html": "No Flex, o prazo está <b>nas suas mãos</b>. Na Coleta, a <b>rotina</b> manda.",
       "sub": "As duas pedem horário certo, embalagem pronta e etiqueta no lugar."
      },
      {
       "t": "steps",
       "title": "Como o Flex funciona",
       "items": [
        {
         "title": "Pedido entra",
         "html": "O cliente compra e o pagamento é aprovado."
        },
        {
         "title": "Janela de corte",
         "html": "Confira se o pedido entrou antes do horário limite do dia."
        },
        {
         "title": "Separar e embalar",
         "html": "Deixe pacote e etiqueta prontos antes de sair pra rota."
        },
        {
         "title": "Entregar na cobertura",
         "html": "Entregue na região que você atende, dentro do prazo prometido."
        }
       ]
      },
      {
       "t": "jargon",
       "term": "Janela de corte",
       "means": "Horário limite para o pedido entrar na entrega do dia. Passou do horário, em geral fica pro próximo dia.",
       "ex": "Corte às 14h: o pedido das 14h30 não entra na entrega de hoje (exemplo)."
      },
      {
       "t": "jargon",
       "term": "Cobertura",
       "means": "A região que você atende no Flex. Quanto mais longe do estoque, maior o custo e o risco de atraso.",
       "ex": "Raio curto e entrega pontual valem mais que raio grande e atrasado."
      },
      {
       "t": "big",
       "emoji": "📉",
       "html": "Atraso no Flex pesa na <b>reputação</b>.",
       "sub": "Reputação é a nota da sua conta. Ela mexe na visibilidade dos anúncios."
      },
      {
       "t": "conta",
       "title": "Conta do Flex (exemplo)",
       "rows": [
        [
         "Remuneração do Flex (exemplo)",
         "R$ 9,00",
         "pos"
        ],
        [
         "Motoboy por entrega",
         "R$ 6,50",
         "neg"
        ],
        [
         "Embalagem",
         "R$ 1,50",
         "neg"
        ]
       ],
       "total": [
        "Sobra do envio",
        "R$ 1,00"
       ],
       "note": "Números de exemplo. Bônus e remuneração reais mudam: confira as regras vigentes."
      },
      {
       "t": "p",
       "title": "Acompanhe toda semana",
       "html": "Olhe a porcentagem de entregas no prazo, semana a semana. Defina um limite interno, tipo 95%. Se a linha cair abaixo dele, encurte a cobertura ou antecipe o corte antes que a reputação sinta."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "Entregas no prazo por semana",
       "unit": "%",
       "x": [
        "S1",
        "S2",
        "S3",
        "S4",
        "S5"
       ],
       "series": [
        {
         "name": "No prazo",
         "values": [
          98,
          97,
          94,
          90,
          91
         ]
        },
        {
         "name": "Limite interno",
         "values": [
          95,
          95,
          95,
          95,
          95
         ],
         "tone": "pink"
        }
       ],
       "caption": "Dados de exemplo. A linha cruza o limite na S3: é a hora de agir, antes da reputação sentir."
      },
      {
       "t": "compare",
       "left": {
        "title": "Protege a reputação",
        "tone": "good",
        "items": [
         "Corte realista, com folga",
         "Cobertura que você alcança",
         "Plano B se o motorista faltar"
        ]
       },
       "right": {
        "title": "Arrisca a reputação",
        "tone": "bad",
        "items": [
         "Aceitar pedido fora da rota",
         "Corte apertado, sem folga",
         "Depender de uma pessoa só"
        ]
       }
      },
      {
       "t": "jargon",
       "term": "Coleta",
       "means": "A transportadora passa no seu endereço para buscar os pacotes, em dias e horários combinados.",
       "ex": "O pacote precisa estar embalado e etiquetado antes de o motorista chegar."
      },
      {
       "t": "flow",
       "title": "Rotina da Coleta",
       "loop": true,
       "items": [
        {
         "icon": "🖨️",
         "title": "Imprime as etiquetas"
        },
        {
         "icon": "📦",
         "title": "Embala e cola",
         "text": "Etiqueta legível, sem dobra"
        },
        {
         "icon": "🗂️",
         "title": "Separa por pedido"
        },
        {
         "icon": "🚚",
         "title": "Motorista busca",
         "text": "Dentro da janela combinada"
        }
       ],
       "caption": "Todo dia útil. Atraso aqui vira atraso no cliente."
      },
      {
       "t": "list",
       "title": "Se a coleta falhar",
       "items": [
        "Registre o horário em que o motorista deveria passar",
        "Tire foto do pacote pronto, com a etiqueta visível",
        "Abra chamado no suporte e guarde o protocolo",
        "Avise o cliente do novo prazo antes de ele perguntar"
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Prometer prazo sem olhar o horário de corte. O pedido entra depois do limite, sai no dia seguinte e o cliente esperava hoje."
      },
      {
       "t": "say",
       "title": "Fala assim: notícia ruim de prazo",
       "html": "“Oi, Marina! Seu pedido entrou depois do horário de corte e chega amanhã, não hoje. Sinto pelo atraso. Já deixei ele separado e te aviso assim que sair pra entrega.”"
      },
      {
       "t": "quiz",
       "q": "Por que atraso no Flex é um problema além do cliente irritado?",
       "options": [
        "Muda o preço do anúncio sozinho para cobrir o prazo que foi perdido",
        "Pesa na reputação da conta e mexe na visibilidade dos anúncios",
        "Cancela o Flex da conta na hora, sem nenhuma chance de ajuste depois",
        "Só importa se o cliente reclamar, porque a plataforma não mede atraso"
       ],
       "answer": [
        1
       ],
       "why": "A reputação é a nota da conta e mexe na visibilidade dos anúncios e em benefícios. Por isso o atraso precisa ser evitado e acompanhado, não só pedido de desculpa."
      },
      {
       "t": "recap",
       "items": [
        "Flex: prazo nas suas mãos, corte e cobertura realistas",
        "Coleta: rotina diária com pacote pronto e etiquetado",
        "Atraso pesa na reputação e na visibilidade",
        "Avise o cliente antes que ele pergunte"
       ]
      }
     ]
    },
    {
     "id": "gf-l8-3",
     "title": "Places, peso e cubagem",
     "minutes": 7,
     "goal": "Entender como o Places funciona e como peso, medida e cubagem mudam o frete e a margem.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📐",
       "title": "Peso e medida errados custam caro",
       "text": "Em 7 minutos você vê como o Places funciona e por que cadastrar peso e medida no chute derruba a margem."
      },
      {
       "t": "jargon",
       "term": "Places",
       "means": "Pontos de postagem (agências): você leva o pacote embalado e etiquetado, e o parceiro despacha.",
       "ex": "Combina com quem vende pouco e não tem rotina de coleta."
      },
      {
       "t": "compare",
       "left": {
        "title": "Faz sentido",
        "tone": "good",
        "items": [
         "Volume baixo de pedidos",
         "Sem rotina de coleta diária",
         "Você mora perto de uma agência"
        ]
       },
       "right": {
        "title": "Pesa",
        "tone": "bad",
        "items": [
         "Seu tempo gasto no deslocamento",
         "Volume alto vira fila",
         "O horário da agência manda no seu dia"
        ]
       }
      },
      {
       "t": "big",
       "emoji": "⚖️",
       "html": "Peso e medida cadastrados são <b>dinheiro</b>.",
       "sub": "O frete é calculado em cima do que você cadastra."
      },
      {
       "t": "flow",
       "title": "Da medida ao frete",
       "items": [
        {
         "icon": "📏",
         "title": "Mede a caixa fechada"
        },
        {
         "icon": "⚖️",
         "title": "Pesa com a embalagem"
        },
        {
         "icon": "🧮",
         "title": "Calcula a cubagem"
        },
        {
         "icon": "💵",
         "title": "Frete pelo maior peso"
        }
       ],
       "caption": "Se o cadastro mente, o frete real não bate com a sua conta."
      },
      {
       "t": "jargon",
       "term": "Cubagem",
       "means": "Peso calculado pelo tamanho da caixa. Em geral, o frete usa o maior valor entre ele e o peso real.",
       "ex": "Caixa grande e leve (travesseiro) paga pelo volume, não pelo peso."
      },
      {
       "t": "steps",
       "title": "Como calcular a cubagem",
       "items": [
        {
         "title": "Volume",
         "html": "Multiplique comprimento x largura x altura da caixa, em cm."
        },
        {
         "title": "Fator",
         "html": "Divida pelo fator de cubagem (exemplo: 6.000; confira o vigente)."
        },
        {
         "title": "Compare",
         "html": "Coloque lado a lado o peso cúbico e o peso real."
        },
        {
         "title": "Maior vale",
         "html": "O maior dos dois é o peso que entra no cálculo do frete."
        }
       ]
      },
      {
       "t": "conta",
       "title": "Cubagem de uma caixa (exemplo)",
       "rows": [
        [
         "Medidas em cm",
         "40 x 30 x 20"
        ],
        [
         "Volume",
         "24.000 cm³"
        ],
        [
         "Fator de cubagem (exemplo)",
         "6.000"
        ],
        [
         "Peso cúbico (24.000 ÷ 6.000)",
         "4,0 kg"
        ],
        [
         "Peso real",
         "1,2 kg"
        ]
       ],
       "total": [
        "Peso usado no frete",
        "4,0 kg"
       ],
       "note": "Números de exemplo. O fator real muda: confira na documentação oficial."
      },
      {
       "t": "p",
       "title": "Caixa menor, frete menor",
       "html": "Se o produto cabe numa caixa de 25 x 20 x 15 cm, o volume cai para 7.500 cm³. O peso cúbico vira 1,25 kg (exemplo), e o peso real de 1,2 kg quase empata."
      },
      {
       "t": "chart",
       "kind": "hbar",
       "title": "Peso que entra no frete",
       "unit": "kg",
       "hl": 2,
       "data": [
        {
         "label": "Peso real",
         "value": 1.2,
         "tone": "sky"
        },
        {
         "label": "Caixa grande (cúbico)",
         "value": 4,
         "tone": "pink"
        },
        {
         "label": "Caixa justa (cúbico)",
         "value": 1.25,
         "tone": "mint"
        }
       ],
       "caption": "Exemplo: trocar a caixa baixou o peso cobrado de 4,0 para 1,25 kg sem mexer no produto."
      },
      {
       "t": "lab",
       "preset": "preco",
       "title": "Veja o frete comer a margem",
       "intro": "Suba o frete no slider e acompanhe a sobra do pedido e a margem caírem. É isso que uma cubagem errada faz.",
       "defaults": {
        "preco": 90,
        "custo": 35,
        "com": 14,
        "tarifa": 6,
        "frete": 18,
        "imp": 6,
        "ads": 5,
        "emb": 2,
        "alvo": 12
       },
       "note": "Números de exemplo."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Cadastrar peso e medida no chute. Se o cadastro fica menor que a caixa real, o frete real não bate com a sua conta e a margem do pedido encolhe."
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Regra de bolso",
       "html": "Pese e meça a <b>caixa fechada</b>, com a embalagem. É ela que viaja, não o produto sozinho. Fator e tarifas mudam: confira o valor vigente na documentação oficial."
      },
      {
       "t": "quiz",
       "q": "Uma caixa mede 30 x 20 x 10 cm e pesa 0,4 kg. Com fator de cubagem 6.000 (números de exemplo), qual peso entra no cálculo do frete?",
       "options": [
        "0,4 kg, porque o peso real é o único que conta",
        "0,7 kg, porque o frete usa a média entre os dois pesos",
        "6,0 kg, porque o volume em cm³ é dividido por mil",
        "1,0 kg, porque o peso cúbico é maior que o peso real"
       ],
       "answer": [
        3
       ],
       "why": "O volume é 30 x 20 x 10 = 6.000 cm³. Dividindo por 6.000, o peso cúbico é 1,0 kg. Como 1,0 é maior que o peso real de 0,4, ele entra no frete."
      },
      {
       "t": "recap",
       "items": [
        "Places: você leva o pacote a uma agência",
        "Frete nasce do peso e da medida cadastrados",
        "Peso cúbico = volume ÷ fator; vale o maior",
        "Pese e meça a caixa fechada"
       ]
      }
     ]
    },
    {
     "id": "gf-l8-4",
     "title": "Full na prática",
     "minutes": 8,
     "goal": "Conseguir decidir com números se um SKU vale o Full, olhando giro, armazenagem, ruptura e reposição.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📦",
       "title": "Full: vale ou não vale?",
       "text": "Em 8 minutos você decide com planilha se um SKU (versão do produto) vale o Full, o estoque guardado pelo Mercado Livre."
      },
      {
       "t": "big",
       "emoji": "🧮",
       "html": "Full não é prêmio. É <b>decisão de conta</b>, SKU por SKU.",
       "sub": "Sem calcular giro e custo, ele vira estoque parado."
      },
      {
       "t": "flow",
       "title": "A jornada do estoque no Full",
       "items": [
        {
         "icon": "🏭",
         "title": "Você prepara o lote",
         "text": "Produto identificado e embalado"
        },
        {
         "icon": "🚛",
         "title": "Envia ao centro"
        },
        {
         "icon": "🧱",
         "title": "Estoque fica guardado",
         "text": "Aqui a armazenagem é cobrada"
        },
        {
         "icon": "📦",
         "title": "Pedido sai embalado"
        }
       ],
       "caption": "Cada etapa tem um custo ou uma regra. Confira as vigentes."
      },
      {
       "t": "list",
       "title": "O que olhar antes de enviar",
       "items": [
        "<b>Elegibilidade</b>: o SKU pode entrar? Confira a regra vigente",
        "<b>Custo de enviar</b> o lote até o centro",
        "<b>Custo de armazenar</b> por unidade e por tempo",
        "<b>Giro</b>: em quanto tempo o estoque vira venda",
        "<b>Margem</b> por unidade dentro e fora do Full"
       ]
      },
      {
       "t": "jargon",
       "term": "Giro",
       "means": "Quantas vezes o estoque vira venda num período. Giro alto: o estoque não fica parado.",
       "ex": "Vende 30 por mês e tem 60 no Full: o estoque cobre 2 meses."
      },
      {
       "t": "jargon",
       "term": "Ruptura",
       "means": "Quando o estoque de um produto que ainda vende acaba. Enquanto está zerado, você perde venda.",
       "ex": "Vendia 5 por dia, zerou por 6 dias: são 30 vendas que foram pro concorrente."
      },
      {
       "t": "big",
       "emoji": "⚖️",
       "html": "Estoque parado <b>custa</b>. Ruptura <b>também</b>.",
       "sub": "O Full é o equilíbrio entre os dois."
      },
      {
       "t": "conta",
       "title": "SKU A: gira rápido (exemplo)",
       "rows": [
        [
         "Margem por unidade fora do Full",
         "R$ 12,00"
        ],
        [
         "Economia de frete no Full",
         "R$ 3,00",
         "pos"
        ],
        [
         "Armazenagem: 15 dias a R$ 2,00/mês",
         "R$ 1,00",
         "neg"
        ]
       ],
       "total": [
        "Margem por unidade no Full",
        "R$ 14,00"
       ],
       "note": "Exemplo: 15 dias é meio mês, então 0,5 x R$ 2,00 = R$ 1,00. 12 + 3 - 1 = 14."
      },
      {
       "t": "conta",
       "title": "SKU B: gira devagar (exemplo)",
       "rows": [
        [
         "Margem por unidade fora do Full",
         "R$ 12,00"
        ],
        [
         "Economia de frete no Full",
         "R$ 3,00",
         "pos"
        ],
        [
         "Armazenagem: 120 dias a R$ 2,00/mês",
         "R$ 8,00",
         "neg"
        ]
       ],
       "total": [
        "Margem por unidade no Full",
        "R$ 7,00"
       ],
       "note": "Exemplo: 120 dias são 4 meses, então 4 x R$ 2,00 = R$ 8,00. 12 + 3 - 8 = 7: pior que os R$ 12,00 de fora."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Margem por unidade: A x B",
       "unit": "R$",
       "hl": 2,
       "data": [
        {
         "label": "Fora do Full",
         "value": 12,
         "tone": "violet"
        },
        {
         "label": "Full: gira rápido",
         "value": 14,
         "tone": "mint"
        },
        {
         "label": "Full: gira devagar",
         "value": 7,
         "tone": "pink"
        }
       ],
       "caption": "Exemplo: o mesmo Full dá resultado oposto. O que muda é quanto tempo o estoque fica parado."
      },
      {
       "t": "lab",
       "preset": "full",
       "title": "Teste o limite do Full",
       "intro": "Aumente os dias de estoque parado e veja a armazenagem engolir o benefício. Depois suba a economia de frete.",
       "defaults": {
        "vendas": 120,
        "margem": 12,
        "armaz": 2,
        "dias": 45,
        "frete": 3,
        "conv": 10
       },
       "note": "Números de exemplo."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Mandar tudo pro Full sem calcular giro e custo de armazenagem. O estoque encalha, a armazenagem come a margem e o caixa fica preso."
      },
      {
       "t": "quiz",
       "q": "Um SKU gira devagar e o estoque fica meses parado no Full. Qual é o risco principal?",
       "options": [
        "A armazenagem acumulada pode ser maior que o benefício de frete e conversão",
        "A plataforma passa a cobrar comissão em dobro por cada unidade guardada",
        "O anúncio perde a margem fora do Full, mesmo que não haja nenhum custo",
        "O estoque no centro de distribuição some se não vender dentro do mês"
       ],
       "answer": [
        0
       ],
       "why": "No Full, estoque parado paga armazenagem todo mês. Quando o tempo parado cresce, esse custo passa o ganho de frete e de vendas, e a margem por unidade cai."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar trimestral",
       "html": "Elegibilidade, custos de armazenagem e de envio, prazos e regras de lote do Full mudam. A fonte final é a documentação oficial do Mercado Livre e o que está ativo na conta."
      },
      {
       "t": "jargon",
       "term": "Ponto de pedido",
       "means": "O nível de estoque em que você deve mandar o próximo lote, para não faltar produto durante o envio.",
       "ex": "Se o estoque chegou em 54 unidades, é hora de enviar mais."
      },
      {
       "t": "conta",
       "title": "Quando repor o Full (exemplo)",
       "rows": [
        [
         "Venda média",
         "6 un/dia"
        ],
        [
         "Prazo pro lote chegar ao Full",
         "5 dias"
        ],
        [
         "Folga de segurança",
         "4 dias"
        ],
        [
         "Dias a cobrir (5 + 4)",
         "9 dias"
        ]
       ],
       "total": [
        "Ponto de pedido (6 x 9)",
        "54 un"
       ],
       "note": "Exemplo. Quando o estoque no Full chegar a 54 unidades, envie o próximo lote."
      },
      {
       "t": "quiz",
       "q": "Um SKU vende 8 un/dia, o lote leva 6 dias para chegar ao Full e a folga é de 3 dias (números de exemplo). Qual é o ponto de pedido?",
       "options": [
        "48 unidades, que é 8 x 6, sem a folga",
        "24 unidades, que é 8 x 3, só a folga",
        "72 unidades, que é 8 x (6 + 3)",
        "17 unidades, que é 8 + 6 + 3, somando tudo"
       ],
       "answer": [
        2
       ],
       "why": "O estoque precisa cobrir o prazo do lote mais a folga: 6 + 3 = 9 dias. Com 8 vendas por dia, 8 x 9 = 72 unidades. Chegou nesse nível, hora de enviar."
      },
      {
       "t": "say",
       "title": "Fala assim: recomendação com número",
       "html": "“Recomendo mandar o SKU A pro Full: a margem sobe de R$ 12 para R$ 14 por unidade. O risco é parar estoque se o giro cair. Plano B: manter metade no Flex e rever em 30 dias.”"
      },
      {
       "t": "sim",
       "kind": "fullvale",
       "title": "Bora treinar: vale o Full?",
       "intro": "Veja giro, margem e armazenagem de cada SKU e decida se ele entra no Full. Conta na mão, sem achismo.",
       "rounds": 3
      },
      {
       "t": "recap",
       "items": [
        "Full é decisão por SKU, com conta",
        "Giro alto e margem folgada: candidato a Full",
        "Estoque parado e ruptura custam dinheiro",
        "Ponto de pedido = venda diária x (prazo + folga)"
       ]
      }
     ]
    },
    {
     "id": "gf-l8-5",
     "title": "Logística na Shopee",
     "minutes": 7,
     "goal": "Entender como a Shopee coleta, entrega e armazena, e quando cada caminho faz sentido para o seller.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🛵",
       "title": "Logística na Shopee, do jeito dela",
       "text": "Em 7 minutos você vê como a Shopee coleta e entrega, o que são programas de frete e quando guardar estoque nela compensa."
      },
      {
       "t": "big",
       "emoji": "⏳",
       "html": "Na Shopee, o <b>prazo de postagem</b> manda no jogo.",
       "sub": "Postar fora do prazo pode virar penalidade pra loja."
      },
      {
       "t": "jargon",
       "term": "Prazo de postagem",
       "means": "O tempo máximo que você tem para despachar o pedido depois que o cliente paga.",
       "ex": "Confira na sua conta o prazo vigente; ele pode mudar com a situação."
      },
      {
       "t": "flow",
       "title": "Caminho do pedido na Shopee",
       "items": [
        {
         "icon": "🛒",
         "title": "Pedido pago"
        },
        {
         "icon": "🏷️",
         "title": "Embala e gera etiqueta"
        },
        {
         "icon": "🚚",
         "title": "Coleta ou ponto de entrega"
        },
        {
         "icon": "📬",
         "title": "Cliente recebe"
        }
       ],
       "caption": "O prazo de postagem corre entre o pagamento e a saída do pacote."
      },
      {
       "t": "jargon",
       "term": "Shopee Xpress",
       "means": "A rede de logística da própria Shopee: busca o pacote no seu endereço ou recebe em pontos de entrega.",
       "ex": "É parecida com Coleta e Places do Mercado Livre."
      },
      {
       "t": "table",
       "title": "Coleta ou ponto de entrega?",
       "head": [
        "",
        "Coleta Shopee",
        "Ponto de entrega"
       ],
       "rows": [
        [
         "Quem leva",
         "A Shopee busca em você",
         "Você leva ao ponto"
        ],
        [
         "Faz sentido quando",
         "Há pedidos todo dia",
         "Há poucos pedidos por dia"
        ],
        [
         "Atenção",
         "Horário da coleta",
         "Deslocamento e fila"
        ]
       ],
       "hl": 1
      },
      {
       "t": "table",
       "title": "Mapa de logística: ML x Shopee",
       "head": [
        "",
        "Mercado Livre",
        "Shopee"
       ],
       "rows": [
        [
         "Busca no seu endereço",
         "Coleta",
         "Coleta Shopee Xpress"
        ],
        [
         "Você leva a um ponto",
         "Places",
         "Ponto de entrega"
        ],
        [
         "Estoque guardado pela plataforma",
         "Full",
         "Fulfillment Shopee"
        ],
        [
         "Entrega local rápida",
         "Flex",
         "Confira as opções ativas"
        ]
       ],
       "hl": 2,
       "caption": "É um mapa de ideias parecidas. Regras e nomes mudam, então confira na plataforma."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Revisar sempre que mudar",
       "html": "Programas de frete, prazos de postagem, tarifas e fulfillment mudam com frequência. A fonte final é a Shopee University e a Central do Vendedor, mais o contador do cliente."
      },
      {
       "t": "jargon",
       "term": "Programa de frete",
       "means": "Campanha em que a Shopee reduz o frete pro comprador. Entrar pode ter custo ou regra extra pra você.",
       "ex": "Antes de entrar, refaça a conta de preço com a taxa do programa."
      },
      {
       "t": "conta",
       "title": "Entrar no programa de frete? (exemplo)",
       "rows": [
        [
         "Preço do produto",
         "R$ 80,00",
         "pos"
        ],
        [
         "Custo do produto",
         "R$ 36,00",
         "neg"
        ],
        [
         "Comissão (20%, exemplo)",
         "R$ 16,00",
         "neg"
        ],
        [
         "Taxa do programa (6%, exemplo)",
         "R$ 4,80",
         "neg"
        ],
        [
         "Imposto (6%, exemplo)",
         "R$ 4,80",
         "neg"
        ],
        [
         "Embalagem",
         "R$ 2,00",
         "neg"
        ]
       ],
       "total": [
        "Sobra por pedido",
        "R$ 16,40"
       ],
       "note": "Sem o programa a sobra seria R$ 21,20. Pra empatar o lucro total, ele precisa trazer cerca de 29% mais pedidos."
      },
      {
       "t": "jargon",
       "term": "Fulfillment",
       "means": "Terceirizar estoque e envio: a plataforma guarda, separa, embala e despacha o pedido por você.",
       "ex": "No Mercado Livre se chama Full. A Shopee tem o fulfillment dela."
      },
      {
       "t": "compare",
       "left": {
        "title": "Tende a valer",
        "tone": "good",
        "items": [
         "Produto que gira rápido",
         "Margem aguenta o custo",
         "Você não dá conta de despachar"
        ]
       },
       "right": {
        "title": "Pense duas vezes",
        "tone": "bad",
        "items": [
         "Giro lento",
         "Margem apertada",
         "Muitos modelos e pouca venda de cada"
        ]
       }
      },
      {
       "t": "lab",
       "preset": "full",
       "title": "A conta do fulfillment é irmã do Full",
       "intro": "Mexa nos sliders com números de exemplo e veja quando guardar estoque na plataforma compensa o custo.",
       "defaults": {
        "vendas": 80,
        "margem": 10,
        "armaz": 1.5,
        "dias": 30,
        "frete": 2.5,
        "conv": 8
       },
       "note": "Números de exemplo, não são tarifas da Shopee."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Prometer prazo ou entrar em programa sem conferir a regra ativa. Programa muda, e a promessa feita com base no mês passado fica velha."
      },
      {
       "t": "quiz",
       "q": "Antes de entrar num programa de frete da Shopee, qual é o passo mais seguro?",
       "options": [
        "Entrar, porque o programa sempre traz mais vendas do que custa em taxa",
        "Copiar a decisão de um concorrente, que já deve ter feito a conta dele",
        "Ler a regra de um blog antigo, porque as regras quase nunca mudam",
        "Refazer a conta de preço com a taxa e conferir a regra vigente"
       ],
       "answer": [
        3
       ],
       "why": "O programa pode ter taxa ou regra extra. Só a conta com a regra vigente mostra se a sobra por pedido e o volume extra compensam."
      },
      {
       "t": "recap",
       "items": [
        "Prazo de postagem manda na Shopee",
        "Coleta Xpress ou ponto de entrega, conforme o volume",
        "Programa de frete tem custo: refaça a conta",
        "Fulfillment é o Full da Shopee: mesma lógica de conta"
       ]
      }
     ]
    },
    {
     "id": "gf-l8-6",
     "title": "Embalagem, reversa e estratégia",
     "minutes": 8,
     "goal": "Conseguir proteger o produto, tratar devoluções e montar a estratégia logística combinada por SKU.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🧩",
       "title": "Fechando a logística: matriz por SKU",
       "text": "Em 8 minutos você junta embalagem, devolução e modalidade numa estratégia por SKU (cada versão do produto)."
      },
      {
       "t": "big",
       "emoji": "💥",
       "html": "Embalagem ruim vira <b>avaria</b>, devolução e nota baixa.",
       "sub": "Avaria é dano no caminho. Proteger custa centavos; avariar custa o pedido."
      },
      {
       "t": "conta",
       "title": "Quanto custa uma avaria (exemplo)",
       "rows": [
        [
         "Produto perdido",
         "R$ 35,00",
         "neg"
        ],
        [
         "Frete da ida",
         "R$ 15,00",
         "neg"
        ],
        [
         "Frete do reenvio",
         "R$ 15,00",
         "neg"
        ]
       ],
       "total": [
        "Custo de 1 avaria",
        "R$ 65,00"
       ],
       "note": "Exemplo. Reforçar a embalagem em R$ 1,20 por pedido: uma avaria evitada paga cerca de 54 embalagens."
      },
      {
       "t": "list",
       "title": "Checklist de embalagem",
       "items": [
        "Caixa do tamanho certo, sem folga nem aperto",
        "Proteção nos cantos e nos itens frágeis",
        "Fita que aguenta o manuseio da viagem",
        "Etiqueta legível, sem dobra nem borrão",
        "Foto do pacote fechado, como prova"
       ]
      },
      {
       "t": "jargon",
       "term": "Logística reversa",
       "means": "O caminho de volta: o cliente devolve ou troca, e o produto retorna pra você.",
       "ex": "A camiseta tamanho errado volta, você confere e ela pode voltar pro estoque."
      },
      {
       "t": "flow",
       "title": "A rota da devolução",
       "items": [
        {
         "icon": "📬",
         "title": "Cliente pede devolução"
        },
        {
         "icon": "🚚",
         "title": "Produto volta"
        },
        {
         "icon": "🔍",
         "title": "Você confere o estado"
        },
        {
         "icon": "♻️",
         "title": "Estoque, conserto ou descarte"
        }
       ],
       "caption": "O dinheiro está na última etapa: reaproveitar bem o que voltou."
      },
      {
       "t": "tree",
       "title": "Produto devolvido: e agora?",
       "root": "O produto voltou",
       "branches": [
        {
         "label": "Perfeito",
         "items": [
          "Confira lacre e itens",
          "Volta pro estoque"
         ]
        },
        {
         "label": "Defeito leve",
         "items": [
          "Avalie conserto ou outra saída"
         ]
        },
        {
         "label": "Danificado",
         "items": [
          "Registre fotos do estado",
          "Descarte e ache a causa"
         ]
        }
       ],
       "caption": "A causa da avaria alimenta a embalagem da próxima vez."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Escolher uma modalidade só pra conta inteira. Cada SKU tem giro, peso e margem diferentes, e um jeito único de enviar deixa dinheiro na mesa."
      },
      {
       "t": "big",
       "emoji": "🎯",
       "html": "Full pro que <b>gira</b>, Flex pro <b>local</b>, Coleta pro <b>resto</b>.",
       "sub": "Places entra pra quem tem pouco volume."
      },
      {
       "t": "list",
       "title": "Tradução rápida das modalidades",
       "items": [
        "<b>Full</b>: o Mercado Livre guarda o estoque e envia",
        "<b>Flex</b>: entrega sua, só na região que você atende",
        "<b>Coleta</b>: a transportadora busca na sua porta",
        "<b>Places</b>: você leva o pacote a uma agência"
       ]
      },
      {
       "t": "p",
       "title": "Quem entra no Full primeiro?",
       "html": "Use a curva ABC: ranking dos SKUs por faturamento, em que o A é o que mais fatura. Os poucos SKUs do topo pagam a conta, e é onde o Full costuma valer primeiro."
      },
      {
       "t": "chart",
       "kind": "pareto",
       "title": "Faturamento por SKU (exemplo)",
       "unit": "R$",
       "data": [
        {
         "label": "SKU A",
         "value": 5200
        },
        {
         "label": "SKU B",
         "value": 2400
        },
        {
         "label": "SKU C",
         "value": 1200
        },
        {
         "label": "SKU D",
         "value": 800
        },
        {
         "label": "SKU E",
         "value": 400
        }
       ],
       "caption": "Dados de exemplo. Os dois primeiros SKUs passam de 75% do faturamento: são os candidatos ao Full."
      },
      {
       "t": "sim",
       "kind": "abc",
       "title": "Bora treinar: curva ABC",
       "intro": "Pelo % acumulado, classifique cada SKU em A, B ou C. Regra de bolso: 80%, 15% e 5%.",
       "rounds": 3
      },
      {
       "t": "table",
       "title": "Matriz SKU x modalidade (exemplo)",
       "head": [
        "SKU",
        "Perfil",
        "Modalidade"
       ],
       "rows": [
        [
         "A: tênis",
         "Gira rápido, leve",
         "Full"
        ],
        [
         "B: kit pesado",
         "Pesado, clientes perto",
         "Flex"
        ],
        [
         "C: acessório",
         "Giro médio, leve",
         "Coleta"
        ],
        [
         "D: peça rara",
         "Poucas vendas",
         "Places"
        ]
       ],
       "caption": "Cada linha é uma decisão com número e justificativa."
      },
      {
       "t": "steps",
       "title": "Mão na massa: matriz SKU x modalidade",
       "items": [
        {
         "title": "Liste",
         "html": "Pegue os 10 SKUs que mais faturam, em conta-teste ou conta real anonimizada."
        },
        {
         "title": "Levante",
         "html": "Anote peso, medidas, giro e margem de cada um."
        },
        {
         "title": "Simule",
         "html": "Calcule custo e prazo em cada modalidade possível."
        },
        {
         "title": "Decida",
         "html": "Escolha, justifique com um número e descreva o plano B."
        }
       ]
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "O que entregar",
       "html": "Uma planilha com SKU, custo, prazo, modalidade recomendada e risco. Sem recomendação com número, a entrega não está pronta."
      },
      {
       "t": "quiz",
       "q": "Um SKU é pesado, volumoso e vende quase só para clientes da sua região. Qual encaixe a matriz sugere?",
       "options": [
        "Full, porque todo produto pesado precisa ficar no centro do ML",
        "Flex, porque a entrega própria na região reduz custo e prazo do pedido",
        "Places, porque agência é sempre o melhor lugar para itens grandes",
        "Coleta, porque a transportadora cobra menos quanto mais pesado é o item"
       ],
       "answer": [
        1
       ],
       "why": "Cliente concentrado perto do estoque é o perfil do Flex. A decisão sai do cruzamento de peso, giro, região e margem, nunca de uma regra única pra todo SKU pesado."
      },
      {
       "t": "recap",
       "items": [
        "Embalagem barata evita avaria cara",
        "Devolução bem tratada volta pro estoque",
        "Full pro que gira, Flex pro local, Coleta pro resto",
        "Entregue a matriz com número e plano B"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "gf-m9",
   "n": 9,
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
        "<b>4.</b> Feche em 1 página e mostre ao gestor"
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
  },
  {
   "id": "gf-m10",
   "n": 10,
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
   "n": 11,
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
  },
  {
   "id": "gf-m12",
   "n": 12,
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
       "html": "Relatórios e painéis dos portais mudam de nome, de coluna e de lugar. A fonte final é a documentação oficial (Mercado Livre, Shopee University) e o que o gestor da conta definiu."
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
       "title": "Análises que separam gestor de operador",
       "text": "Curva ABC com margem, coorte, elasticidade e IA com critério: como ir além do número do dia."
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
   "n": 13,
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
       "t": "big",
       "emoji": "🔭",
       "html": "Operador executa tarefa. <b>Gestor</b> enxerga a conta inteira.",
       "sub": "É isso que separa os dois. E tudo começa com um raio-X."
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
       "html": "Para cada frente, escreva o critério antes. Exemplo: preço nota 10 é todo produto com margem acima do mínimo. Assim a nota de 0 a 10 vira conta, não opinião, e dois assessores chegam no mesmo número."
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
       "t": "big",
       "emoji": "🎯",
       "html": "Se tudo é prioridade, <b>nada</b> é.",
       "sub": "Gestor bom escolhe pouco e entrega muito."
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
         "Assessor da conta"
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
       "html": "Dado e acesso do cliente são dele. Não circule senha por mensagem, não mostre números de um cliente a outro e use só os acessos que ele liberou. Em dúvida, pergunte ao gestor antes de compartilhar."
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
  },
  {
   "id": "gf-m14",
   "n": 14,
   "title": "Soft skills e comunicação",
   "tagline": "Escrever claro, contar a história do dado, conduzir o cliente e manter a rotina e a ética.",
   "outcome": "Explicar uma conta pro cliente leigo, por escrito e falando, de forma clara, honesta e segura.",
   "lessons": [
    {
     "id": "gf-l14-1",
     "title": "Comunicação clara e escrita",
     "minutes": 7,
     "goal": "Conseguir escrever mensagens, e-mails e atas curtos, na ordem contexto, o que houve, o que fazemos e o que precisamos.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "💬",
       "title": "Escreve curto, o cliente entende",
       "text": "Em 7 minutos você aprende a estrutura de 4 passos que deixa mensagem, e-mail e ata claros pro cliente."
      },
      {
       "t": "big",
       "emoji": "🎯",
       "html": "O melhor técnico perde cliente se não souber <b>explicar</b>.",
       "sub": "Sua análise pode estar certa e, mesmo assim, ninguém agir."
      },
      {
       "t": "compare",
       "left": {
        "title": "Antes (confuso)",
        "tone": "bad",
        "items": [
         "Oi! O ACOS subiu e o GMV caiu.",
         "Tem uns problemas na conta, tô vendo.",
         "Ajustei uns ads, vamos acompanhando.",
         "Qualquer coisa me chama."
        ]
       },
       "right": {
        "title": "Depois (claro)",
        "tone": "good",
        "items": [
         "Suas vendas caíram 18% nesta semana (exemplo).",
         "O motivo: 3 anúncios ficaram sem estoque.",
         "Pausamos o Ads desses itens pra não gastar à toa.",
         "Preciso que você confirme a reposição até quinta."
        ]
       }
      },
      {
       "t": "jargon",
       "term": "Jargão",
       "means": "Palavra técnica que só o time entende, como <b>ACOS</b> (gasto de Ads, os anúncios pagos, por R$ 1 vendido) e <b>GMV</b> (total vendido).",
       "ex": "O cliente lê “o ACOS subiu” e só entende que algo ficou ruim."
      },
      {
       "t": "flow",
       "title": "A estrutura de 4 passos",
       "items": [
        {
         "icon": "🧭",
         "title": "Contexto",
         "text": "Onde estamos, em uma frase"
        },
        {
         "icon": "🔎",
         "title": "O que aconteceu",
         "text": "O fato, com número"
        },
        {
         "icon": "🛠️",
         "title": "O que fazemos",
         "text": "A ação e o prazo"
        },
        {
         "icon": "🤝",
         "title": "O que precisamos",
         "text": "O que o cliente faz e até quando"
        }
       ],
       "caption": "Sempre nessa ordem: quem lê chega ao fim sabendo o que fazer."
      },
      {
       "t": "list",
       "title": "Regras do texto curto",
       "items": [
        "Uma ideia por frase, com até 20 palavras",
        "Número antes de adjetivo: “18% a menos”, não “caiu muito”",
        "Termo técnico? Traduza entre parênteses",
        "Feche com o próximo passo e a data"
       ]
      },
      {
       "t": "say",
       "title": "Fala assim: mensagem rápida",
       "html": "“Oi, Carlos! Contexto rápido: suas vendas caíram 18% nesta semana (exemplo). O motivo: 3 anúncios ficaram sem estoque. Já pausamos o Ads deles. Preciso que você confirme a reposição até quinta, combinado?”"
      },
      {
       "t": "table",
       "title": "Qual canal usar",
       "head": [
        "Canal",
        "Quando usar",
        "Cuidado"
       ],
       "rows": [
        [
         "Mensagem rápida",
         "Aviso curto e dúvida do dia",
         "Não substitui o registro"
        ],
        [
         "E-mail",
         "Combinado que precisa ficar registrado",
         "Assunto vago ninguém abre"
        ],
        [
         "Relatório",
         "Resultado do período, com história",
         "Planilha solta não é relatório"
        ],
        [
         "Ata",
         "Logo depois da reunião",
         "Sem dono e prazo não vale"
        ]
       ],
       "hl": 1,
       "caption": "Escolha o canal pelo que o cliente precisa fazer com a informação."
      },
      {
       "t": "p",
       "title": "E-mail: o assunto já conta tudo",
       "html": "O assunto é a primeira coisa lida, e às vezes a única. Coloque o tema e o que você precisa dele. Abra o corpo com os 4 passos e feche com a data."
      },
      {
       "t": "compare",
       "left": {
        "title": "Assunto fraco",
        "tone": "bad",
        "items": [
         "Atualização",
         "Sobre a sua conta",
         "Urgente!!!",
         "Relatório anexo"
        ]
       },
       "right": {
        "title": "Assunto forte",
        "tone": "good",
        "items": [
         "Vendas caíram 18%: confirme a reposição até quinta",
         "Reunião de terça: 3 decisões e prazos",
         "Relatório de setembro: o que subiu e o que faremos"
        ]
       }
      },
      {
       "t": "quiz",
       "q": "Qual mensagem segue a estrutura de 4 passos: contexto, o que aconteceu, o que fazemos e o que precisamos do cliente?",
       "options": [
        "Oi, tudo bem? A conta está com alguns problemas e eu estou analisando tudo com cuidado. Assim que souber mais, te chamo.",
        "Vendas de setembro caíram 18% (exemplo) porque 3 anúncios ficaram sem estoque. Pausamos o Ads deles. Preciso da reposição até quinta.",
        "Seu GMV caiu por causa do ACOS alto na curva A. Estamos ajustando tudo e qualquer novidade eu te aviso por aqui, tá bom?",
        "Segue a planilha completa da semana em anexo, com todas as abas. Dá uma olhada quando puder e me diz o que achou da conta."
       ],
       "answer": [
        1
       ],
       "why": "Só a segunda tem contexto, fato com número, ação e pedido com prazo. As outras são vagas, cheias de jargão ou jogam a planilha no colo do cliente."
      },
      {
       "t": "jargon",
       "term": "Ata",
       "means": "Registro escrito da reunião: o que ficou decidido, quem faz o quê e até quando.",
       "ex": "A reunião de alinhamento do mês vira uma página que o cliente consulta depois."
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "Decisões",
         "html": "o que foi combinado, em frases curtas."
        },
        {
         "title": "Responsáveis",
         "html": "cada tarefa com o nome de quem faz."
        },
        {
         "title": "Prazos",
         "html": "a data de entrega de cada tarefa."
        },
        {
         "title": "Próximo encontro",
         "html": "dia, hora e pauta da próxima conversa."
        }
       ]
      },
      {
       "t": "callout",
       "tone": "dica",
       "title": "Mande a ata no mesmo dia",
       "html": "Enviada no mesmo dia, a ata ainda está fresca na cabeça de todo mundo. Se alguém discorda de algo, isso aparece na hora e não semanas depois."
      },
      {
       "t": "list",
       "title": "Mão na massa",
       "items": [
        "Pegue um relatório ou mensagem antigo, sem o nome do cliente",
        "Circule todo jargão e traduza ou troque",
        "Reescreva nos 4 passos, em no máximo 8 linhas",
        "Leia em voz alta pra alguém de fora da área",
        "Corte tudo que a pessoa não usaria pra decidir"
       ]
      },
      {
       "t": "say",
       "title": "Fala assim: quando não sabe",
       "html": "“Ainda não tenho essa resposta com certeza. Vou conferir os números da conta e te retorno hoje, até as 16h, com o dado fechado.”"
      },
      {
       "t": "recap",
       "items": [
        "Ordem fixa: contexto, fato, ação, pedido",
        "Número antes de adjetivo",
        "Jargão sempre vem traduzido",
        "Assunto de e-mail diz o que você precisa",
        "Ata tem decisão, dono e prazo"
       ]
      }
     ]
    },
    {
     "id": "gf-l14-2",
     "title": "Contar a história do dado",
     "minutes": 8,
     "goal": "Conseguir transformar número, contexto e tendência numa explicação lógica, com alinhamento honesto de prazos, resultados e riscos.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📈",
       "title": "Número sozinho não convence",
       "text": "Você vai juntar número, contexto e tendência numa história que o cliente entende, acredita e consegue usar pra decidir."
      },
      {
       "t": "big",
       "emoji": "🧩",
       "html": "Dado é o <b>ingrediente</b>. A história é o prato.",
       "sub": "O cliente quer saber o que o número significa, não só o que ele mostra."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Mandar a planilha sem contar o que ela significa. O cliente abre, não entende e liga (ou some). A planilha é anexo; a história vai no texto."
      },
      {
       "t": "compare",
       "left": {
        "title": "Só o número",
        "tone": "bad",
        "items": [
         "Vendas: R$ 42 mil.",
         "ROAS: 3,1.",
         "Segue a planilha.",
         "Qualquer dúvida, me chama."
        ]
       },
       "right": {
        "title": "A história",
        "tone": "good",
        "items": [
         "Vendas de R$ 42 mil, 12% a menos que em agosto (exemplo).",
         "O Ads trouxe R$ 3,10 por R$ 1 gasto, abaixo do mínimo.",
         "Por isso cortamos a verba das campanhas que não pagam.",
         "Com ROAS 4, a conta volta a lucrar."
        ]
       }
      },
      {
       "t": "jargon",
       "term": "ROAS",
       "means": "Quanto de venda o Ads (anúncios pagos) trouxe pra cada <b>R$ 1</b> investido. É a venda com Ads dividida pelo gasto.",
       "ex": "ROAS 3,1: R$ 1 de Ads trouxe R$ 3,10 em vendas."
      },
      {
       "t": "jargon",
       "term": "ROAS de equilíbrio",
       "means": "O ROAS mínimo pro Ads não dar prejuízo: 1 dividido pela <b>margem de contribuição</b> (o que sobra da venda antes do Ads).",
       "ex": "Margem de 25%: 1 ÷ 0,25 = ROAS de equilíbrio 4 (exemplo)."
      },
      {
       "t": "conta",
       "title": "Margem antes do Ads (exemplo)",
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
         "Comissão e imposto",
         "- R$ 18,00",
         "neg"
        ],
        [
         "Frete e embalagem",
         "- R$ 12,00",
         "neg"
        ]
       ],
       "total": [
        "Sobra antes do Ads (25%)",
        "R$ 25,00"
       ],
       "note": "Números de exemplo. Com 25% de margem, o ROAS de equilíbrio é 1 ÷ 0,25 = 4."
      },
      {
       "t": "p",
       "title": "Olha a tendência",
       "html": "Em 5 semanas, o ROAS caiu de 4,8 pra 3,1 (exemplo). O equilíbrio é 4. Da semana 3 em diante, o Ads vende, mas perde dinheiro em cada R$ 1 gasto."
      },
      {
       "t": "chart",
       "kind": "line",
       "title": "ROAS contra o equilíbrio",
       "unit": "x",
       "x": [
        "S1",
        "S2",
        "S3",
        "S4",
        "S5"
       ],
       "series": [
        {
         "name": "ROAS",
         "values": [
          4.8,
          4.4,
          3.9,
          3.5,
          3.1
         ]
        },
        {
         "name": "Equilíbrio",
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
       "caption": "Olha onde a linha cruza: a partir da S3 o ROAS fica abaixo do equilíbrio e o Ads dá prejuízo."
      },
      {
       "t": "lab",
       "preset": "roas",
       "title": "Mexa no ROAS e veja o resultado",
       "intro": "Comece com margem de 25% e ROAS 3,1. Suba o ROAS e veja onde o resultado por R$ 1.000 de Ads vira positivo.",
       "defaults": {
        "margem": 25,
        "roas": 3.1
       },
       "note": "Números de exemplo."
      },
      {
       "t": "quiz",
       "q": "A margem antes do Ads é 20% e o ROAS atual é 4 (números de exemplo). O que você conta pro cliente?",
       "options": [
        "O equilíbrio é ROAS 5, então o Ads está abaixo dele e perde dinheiro mesmo vendendo bem",
        "O equilíbrio é ROAS 2, então o Ads está acima dele e pode ganhar mais verba sem risco",
        "O equilíbrio é ROAS 4, então o Ads está exatamente no empate e não precisa de nenhum ajuste",
        "O equilíbrio é ROAS 20, então o Ads está muito abaixo dele e deve ser pausado hoje mesmo"
       ],
       "answer": [
        0
       ],
       "why": "O equilíbrio é 1 ÷ margem: 1 ÷ 0,20 = 5. Com ROAS 4, cada R$ 1 de Ads traz R$ 4 em vendas, mas o empate exige R$ 5. O Ads perde."
      },
      {
       "t": "flow",
       "title": "Do número à história",
       "items": [
        {
         "icon": "📊",
         "title": "Número",
         "text": "O fato medido"
        },
        {
         "icon": "🌦️",
         "title": "Contexto",
         "text": "O que mudou em volta"
        },
        {
         "icon": "📉",
         "title": "Tendência",
         "text": "Pra onde vai se nada mudar"
        },
        {
         "icon": "✅",
         "title": "Recomendação",
         "text": "O que fazemos agora"
        }
       ],
       "caption": "Número é foto. Contexto explica. Tendência mostra o filme."
      },
      {
       "t": "tree",
       "title": "De onde veio a queda?",
       "root": "Vendas caíram 12% no mês",
       "branches": [
        {
         "label": "Tráfego",
         "items": [
          "As visitas caíram?",
          "O Ads perdeu verba?"
         ]
        },
        {
         "label": "Conversão",
         "items": [
          "O preço subiu?",
          "O concorrente baixou o preço?"
         ]
        },
        {
         "label": "Estoque",
         "items": [
          "Anúncio campeão ficou sem estoque?",
          "A reputação caiu?"
         ]
        }
       ],
       "caption": "Cada pergunta respondida vira uma frase da sua explicação."
      },
      {
       "t": "say",
       "title": "Fala assim: 2 parágrafos",
       "html": "“Setembro fechou 12% abaixo de agosto (exemplo). O motivo principal: 3 anúncios campeões ficaram 9 dias sem estoque. Pra frente: repomos até dia 10 e esperamos a venda voltar ao nível de agosto em duas semanas, se o estoque chegar.”"
      },
      {
       "t": "timeline",
       "title": "Exemplo: o que prometer e quando",
       "items": [
        {
         "when": "Dia 1",
         "label": "Diagnóstico e plano",
         "text": "A causa provável e as ações"
        },
        {
         "when": "Semana 2",
         "label": "Primeiros sinais",
         "text": "Visitas e cliques mexem primeiro"
        },
        {
         "when": "Semana 4",
         "label": "Vendas reagem",
         "text": "Se o estoque chegou e o Ads foi ajustado"
        },
        {
         "when": "Mês 2",
         "label": "Resultado fechado",
         "text": "Compare com o mês da queda"
        }
       ]
      },
      {
       "t": "compare",
       "left": {
        "title": "Promessa solta",
        "tone": "bad",
        "items": [
         "Vai voltar a vender em 3 dias.",
         "Garanto que o ROAS sobe.",
         "Nem cito o que pode dar errado."
        ]
       },
       "right": {
        "title": "Expectativa alinhada",
        "tone": "good",
        "items": [
         "Esperamos sinais em 2 semanas, se o estoque chegar.",
         "Meta: ROAS 4, mas depende do preço do concorrente.",
         "O risco: atraso do fornecedor na reposição."
        ]
       }
      },
      {
       "t": "say",
       "title": "Fala assim: gestão de expectativa",
       "html": "“Meu plano é levar o ROAS a 4 em um mês (exemplo). O que pode atrapalhar: atraso na reposição e o preço do concorrente. Te aviso toda sexta com o número da semana, combinado?”"
      },
      {
       "t": "list",
       "title": "Mão na massa",
       "items": [
        "Pegue os números de uma queda de vendas (conta anonimizada)",
        "Parágrafo 1: o que caiu, quanto e quando, com número",
        "Parágrafo 2: por que caiu, o que fazemos e o prazo",
        "Inclua 1 risco e 1 coisa que você precisa do cliente",
        "Teste: alguém de fora entende sem perguntar nada?"
       ]
      },
      {
       "t": "quiz",
       "q": "Você vai mandar o relatório do mês pro cliente. Qual forma de enviar melhor segue o que a aula ensina?",
       "options": [
        "Um texto curto com 3 números, o motivo de cada mudança e o próximo passo, com a planilha de anexo",
        "A planilha completa com todas as abas, pro cliente conferir cada número e tirar as próprias conclusões",
        "Um print do painel com os números principais e nenhum texto, pra ele ler rápido sem se perder em detalhes",
        "Só o resumo de vendas e ROAS, sem explicar o contexto, pra evitar discussão sobre o que causou a queda"
       ],
       "answer": [
        0
       ],
       "why": "O cliente precisa da história: número, motivo e ação. Planilha e print são apoio, e esconder o contexto só gera dúvida e ligação."
      },
      {
       "t": "recap",
       "items": [
        "Planilha é anexo; a história vai no texto",
        "Número, contexto e tendência juntos",
        "ROAS de equilíbrio é 1 ÷ margem",
        "Prometa prazo, resultado e risco juntos"
       ]
      }
     ]
    },
    {
     "id": "gf-l14-3",
     "title": "Negociação, conflito e feedback",
     "minutes": 7,
     "goal": "Conseguir conduzir o cliente com dados, ter conversas difíceis com calma e dar feedback que ajuda sem ofender.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🤝",
       "title": "Dizer “não” sem perder o cliente",
       "text": "Você vai conduzir o cliente com dado, segurar conversa difícil com calma e dar feedback que melhora o trabalho."
      },
      {
       "t": "big",
       "emoji": "🧭",
       "html": "Consultor <b>conduz</b>. Atendente só anota o pedido.",
       "sub": "Posicionamento fundamentado é opinião com dado, motivo e plano."
      },
      {
       "t": "compare",
       "left": {
        "title": "Obedecer sem pensar",
        "tone": "bad",
        "items": [
         "Claro, baixo o preço agora.",
         "Você que manda, a conta é sua.",
         "Confia em mim, vai dar errado."
        ]
       },
       "right": {
        "title": "Conduzir com dado",
        "tone": "good",
        "items": [
         "Vamos simular o novo preço antes de mexer.",
         "Mostro quanto sobra por venda em cada desconto.",
         "Proponho um teste pequeno, com prazo.",
         "Você decide, com os números na mesa."
        ]
       }
      },
      {
       "t": "flow",
       "title": "Conduzir o cliente",
       "items": [
        {
         "icon": "👂",
         "title": "Ouça",
         "text": "Entenda o que ele quer de verdade"
        },
        {
         "icon": "📊",
         "title": "Mostre o dado",
         "text": "Simule o que acontece"
        },
        {
         "icon": "💡",
         "title": "Proponha",
         "text": "Uma recomendação, com motivo"
        },
        {
         "icon": "✍️",
         "title": "Registre",
         "text": "A decisão, por escrito"
        }
       ],
       "caption": "Quem conduz bem não vence discussão: ajuda o cliente a decidir."
      },
      {
       "t": "jargon",
       "term": "Posicionamento fundamentado",
       "means": "Dar a sua recomendação com <b>dado e motivo</b>, e não só opinião ou palpite.",
       "ex": "“Com 15% de desconto a margem fica negativa (exemplo). Sugiro testar 5%.”"
      },
      {
       "t": "p",
       "title": "O dado é a sua defesa",
       "html": "O cliente pede 15% de desconto pra vender mais. Em vez de discutir, mostre a conta. Preço de R$ 100, custo de produto R$ 55, comissão e imposto de 20% do preço e frete de R$ 15 (exemplo)."
      },
      {
       "t": "chart",
       "kind": "bar",
       "title": "Sobra por venda em cada desconto",
       "unit": "R$",
       "hl": 2,
       "data": [
        {
         "label": "Hoje",
         "value": 10
        },
        {
         "label": "5% off",
         "value": 6
        },
        {
         "label": "10% off",
         "value": 2,
         "tone": "pink"
        }
       ],
       "caption": "Cada 5% de desconto tira R$ 4 da sobra. No 15% a conta vai pro negativo."
      },
      {
       "t": "conta",
       "title": "Com 15% de desconto (exemplo)",
       "rows": [
        [
         "Preço com desconto",
         "R$ 85,00"
        ],
        [
         "Custo do produto",
         "- R$ 55,00",
         "neg"
        ],
        [
         "Comissão e imposto (20%)",
         "- R$ 17,00",
         "neg"
        ],
        [
         "Frete",
         "- R$ 15,00",
         "neg"
        ]
       ],
       "total": [
        "Sobra por venda",
        "- R$ 2,00"
       ],
       "note": "Vender mais a R$ 85 só aumenta o prejuízo: cada venda perde R$ 2."
      },
      {
       "t": "say",
       "title": "Fala assim: conduzindo",
       "html": "“Entendo que você quer vender mais, e eu também. Com 15% de desconto, você passa a perder R$ 2 por venda (exemplo). Minha sugestão: testar 5% em 3 anúncios por 2 semanas e olhar o resultado juntos. Topa?”"
      },
      {
       "t": "callout",
       "tone": "regra",
       "title": "A decisão é dele, o alerta é seu",
       "html": "Se o cliente decidir diferente depois de ver os números, registre por escrito o risco que você apontou, execute e acompanhe. Não esconda a opinião, e não brigue."
      },
      {
       "t": "table",
       "title": "Conflito: reação ruim x boa",
       "head": [
        "Situação",
        "Reação ruim",
        "Reação boa"
       ],
       "rows": [
        [
         "Cliente bravo com a queda",
         "Se defender na hora",
         "Ouvir e resumir o que entendeu"
        ],
        [
         "Cobrança injusta",
         "Rebater com ironia",
         "Mostrar o dado com calma"
        ],
        [
         "Erro seu",
         "Esconder ou culpar outro",
         "Assumir, corrigir e avisar"
        ],
        [
         "Pedido fora do combinado",
         "Aceitar e se afogar",
         "Explicar e propor alternativa"
        ]
       ],
       "hl": 2
      },
      {
       "t": "flow",
       "title": "Conversa difícil em 5 passos",
       "items": [
        {
         "icon": "🧘",
         "title": "Respire",
         "text": "Não responda no calor"
        },
        {
         "icon": "👂",
         "title": "Escute",
         "text": "Deixe a pessoa terminar"
        },
        {
         "icon": "🪞",
         "title": "Resuma",
         "text": "Diga o que você entendeu"
        },
        {
         "icon": "🧩",
         "title": "Resolva",
         "text": "Proponha o próximo passo"
        },
        {
         "icon": "✍️",
         "title": "Registre",
         "text": "Confirme por escrito"
        }
       ]
      },
      {
       "t": "say",
       "title": "Fala assim: cliente bravo",
       "html": "“Entendi: você está preocupado porque as vendas caíram e ninguém te avisou antes. Você tem razão em cobrar. Hoje, até as 17h, te mando a causa e o plano, e daqui pra frente aviso na hora.”"
      },
      {
       "t": "quiz",
       "q": "O cliente manda mensagem irritado: as vendas caíram e ele só soube pelo painel. Qual é a melhor primeira resposta?",
       "options": [
        "Resumir o que ele disse, reconhecer que faltou aviso e prometer a causa e o plano num prazo claro",
        "Explicar que a queda é normal nessa época do ano e que não houve nenhuma falha no acompanhamento",
        "Pedir pra ele aguardar a reunião de alinhamento do mês pra tratar do assunto com mais calma",
        "Mandar o relatório completo da semana e deixar os números responderem sem comentar a reclamação"
       ],
       "answer": [
        0
       ],
       "why": "Conversa difícil começa por escutar e resumir, sem se defender. Depois vem o compromisso com causa, plano e prazo. As outras respostas ignoram a queixa dele."
      },
      {
       "t": "jargon",
       "term": "Feedback",
       "means": "Retorno honesto sobre o que a pessoa fez, pra ela saber o que manter e o que mudar.",
       "ex": "“Seu resumo ficou claro. Faltou colocar a data em cada ação.”"
      },
      {
       "t": "compare",
       "left": {
        "title": "Feedback que fere",
        "tone": "bad",
        "items": [
         "Você sempre erra nos relatórios.",
         "Dito em público, na frente de todos.",
         "Só crítica, sem dizer o que mudar."
        ]
       },
       "right": {
        "title": "Feedback que ajuda",
        "tone": "good",
        "items": [
         "O relatório de ontem saiu sem prazo nas ações.",
         "Dito em particular, com calma.",
         "Diz o que mudar e elogia o que foi bem."
        ]
       }
      },
      {
       "t": "steps",
       "items": [
        {
         "title": "Fato",
         "html": "descreva o que aconteceu, sem rótulo."
        },
        {
         "title": "Efeito",
         "html": "diga o impacto no cliente ou no time."
        },
        {
         "title": "Pedido",
         "html": "diga o que você quer que mude."
        },
        {
         "title": "Combinado",
         "html": "confirme o prazo e como vão acompanhar."
        }
       ]
      },
      {
       "t": "say",
       "title": "Fala assim: dando feedback",
       "html": "“No relatório de ontem faltou a data das ações. Isso deixou o cliente sem saber quando teria retorno. Da próxima vez, coloque o prazo em cada ação, ok? E o resumo dos números ficou ótimo.”"
      },
      {
       "t": "quiz",
       "q": "Um colega entregou o relatório sem prazo nas ações. Qual feedback segue fato, efeito, pedido e combinado?",
       "options": [
        "Seu relatório sempre sai incompleto, então revise melhor antes de enviar daqui pra frente, por favor",
        "O relatório saiu sem prazo, e o cliente não soube quando teria retorno. Pode incluir a data em cada ação?",
        "Vou falar no grupo da equipe que o relatório saiu sem prazo, assim todo mundo aprende com o erro",
        "O cliente reclamou do relatório e acho melhor você pensar no que errou e me contar o que descobriu"
       ],
       "answer": [
        1
       ],
       "why": "O bom feedback descreve o fato, mostra o efeito, faz um pedido claro e combina o próximo passo, em particular. Rótulo e exposição pública não ajudam a mudar."
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Dizer sim pra tudo só pra evitar atrito. Hoje a conversa fica leve, mas amanhã o cliente cobra o prejuízo. Discordar com dado e educação protege a conta."
      },
      {
       "t": "list",
       "title": "Mão na massa",
       "items": [
        "Em dupla, um faz o cliente bravo com a queda de vendas",
        "O outro responde seguindo os 5 passos da conversa difícil",
        "Troquem de papel e deem feedback com fato, efeito e pedido",
        "Releiam a resposta: faltou escutar ou faltou dado?"
       ]
      },
      {
       "t": "recap",
       "items": [
        "Conduza com dado, motivo e plano",
        "Conversa difícil: escute, resuma, resolva",
        "Erro seu: assuma, corrija e avise",
        "Feedback: fato, efeito, pedido, combinado",
        "Decisão do cliente fica registrada"
       ]
      }
     ]
    },
    {
     "id": "gf-l14-4",
     "title": "Rotina, liderança e ética",
     "minutes": 7,
     "goal": "Conseguir montar a rotina diária, semanal e mensal de uma conta, delegar e formar colegas e proteger dados de clientes.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🗓️",
       "title": "Rotina, gente e segurança",
       "text": "Você vai montar a cadência de uma conta, aprender a delegar e formar colegas, e proteger os dados do cliente."
      },
      {
       "t": "big",
       "emoji": "🔁",
       "html": "Conta boa é <b>rotina</b>, não correria.",
       "sub": "Quem se organiza vê o problema antes do cliente."
      },
      {
       "t": "timeline",
       "title": "Cadência da conta (exemplo)",
       "items": [
        {
         "when": "Todo dia",
         "label": "Olhar o essencial",
         "text": "Pedidos, perguntas, reputação e estoque"
        },
        {
         "when": "Toda semana",
         "label": "Ler os números",
         "text": "Vendas, Ads e anúncios em risco"
        },
        {
         "when": "Todo mês",
         "label": "Contar a história",
         "text": "Relatório e reunião de alinhamento"
        },
        {
         "when": "Todo trimestre",
         "label": "Revisar regras e plano",
         "text": "Conferir a documentação oficial"
        }
       ]
      },
      {
       "t": "flow",
       "title": "Rotina do dia",
       "loop": true,
       "items": [
        {
         "icon": "🌅",
         "title": "Abrir a conta",
         "text": "Pedidos, perguntas e mensagens"
        },
        {
         "icon": "🚨",
         "title": "Checar alertas",
         "text": "Reputação, estoque e Ads"
        },
        {
         "icon": "🛠️",
         "title": "Executar o plano",
         "text": "As tarefas do dia"
        },
        {
         "icon": "💬",
         "title": "Avisar o cliente",
         "text": "Só se algo mudou"
        }
       ],
       "caption": "O que é repetido todo dia vira hábito, e hábito evita susto."
      },
      {
       "t": "table",
       "title": "Diário, semanal e mensal",
       "head": [
        "",
        "O que olhar",
        "O que entregar"
       ],
       "rows": [
        [
         "Diário",
         "Pedidos, perguntas, reputação, estoque",
         "Aviso só se algo urgir"
        ],
        [
         "Semanal",
         "Vendas, Ads, preço, anúncios em risco",
         "Resumo curto ao cliente"
        ],
        [
         "Mensal",
         "Resultado do mês e tendência",
         "Relatório e reunião com ata"
        ]
       ],
       "hl": 2
      },
      {
       "t": "jargon",
       "term": "ACOS",
       "means": "Gasto de Ads (anúncios pagos) por R$ 1 vendido com Ads. O <b>ROAS</b> é o contrário: venda trazida por R$ 1 de Ads.",
       "ex": "Ads de R$ 500 e vendas com Ads de R$ 2.500: ACOS de 20% (exemplo)."
      },
      {
       "t": "jargon",
       "term": "TACOS",
       "means": "Gasto de Ads dividido pelo total vendido da <b>loja toda</b>, e não só pelas vendas das campanhas.",
       "ex": "Ads de R$ 500 e loja vendendo R$ 10.000: TACOS de 5% (exemplo)."
      },
      {
       "t": "conta",
       "title": "As 3 taxas da semana (exemplo)",
       "rows": [
        [
         "Gasto com Ads",
         "R$ 500,00"
        ],
        [
         "Vendas com Ads",
         "R$ 2.500,00"
        ],
        [
         "Vendas da loja toda",
         "R$ 10.000,00"
        ],
        [
         "ACOS (500 ÷ 2.500)",
         "20%"
        ],
        [
         "ROAS (2.500 ÷ 500)",
         "5"
        ]
       ],
       "total": [
        "TACOS (500 ÷ 10.000)",
        "5%"
       ],
       "note": "Números de exemplo, só pra mostrar a conta."
      },
      {
       "t": "sim",
       "kind": "acostacos",
       "title": "Bora treinar: ACOS, ROAS e TACOS",
       "intro": "Cada rodada traz números novos. Calcule as taxas como você faria na leitura semanal da conta.",
       "rounds": 3
      },
      {
       "t": "say",
       "title": "Fala assim: resumo da semana",
       "html": "“Resumo da semana: ACOS 20%, ROAS 5 e TACOS 5% (exemplo). O Ads está saudável. Na próxima semana mantemos a verba e testamos 2 anúncios novos. Preciso só que você aprove as fotos até terça.”"
      },
      {
       "t": "p",
       "title": "Delegar não é largar",
       "html": "Delegar é passar a tarefa com o resultado esperado, o prazo e um jeito de checar. A responsabilidade final continua sendo sua."
      },
      {
       "t": "compare",
       "left": {
        "title": "Delegar mal",
        "tone": "bad",
        "items": [
         "“Faz isso aí.”",
         "Sem prazo nem exemplo.",
         "Só aparece quando dá erro."
        ]
       },
       "right": {
        "title": "Delegar bem",
        "tone": "good",
        "items": [
         "Explica o objetivo e o prazo.",
         "Mostra um exemplo pronto.",
         "Combina uma checagem no meio do caminho."
        ]
       }
      },
      {
       "t": "stairs",
       "title": "Formar um colega em 4 degraus",
       "items": [
        {
         "tag": "1",
         "title": "Vê",
         "text": "Observa você fazendo e pergunta"
        },
        {
         "tag": "2",
         "title": "Faz junto",
         "text": "Executa com você ao lado"
        },
        {
         "tag": "3",
         "title": "Faz sozinho",
         "text": "Executa e você revisa"
        },
        {
         "tag": "4",
         "title": "Ensina",
         "text": "Explica pra outra pessoa"
        }
       ]
      },
      {
       "t": "list",
       "title": "Segurança no dia a dia",
       "items": [
        "Senha em local seguro definido pela empresa, nunca no chat",
        "Acesso com o seu usuário, sem emprestar login",
        "Dado de cliente só com quem precisa saber",
        "Anonimize antes de usar em estudo, print ou exemplo",
        "Saiu da mesa? Bloqueie a tela"
       ]
      },
      {
       "t": "compare",
       "left": {
        "title": "Não faça",
        "tone": "bad",
        "items": [
         "Mandar print com nome do cliente no grupo.",
         "Passar senha por WhatsApp.",
         "Usar dado de um cliente pra convencer outro."
        ]
       },
       "right": {
        "title": "Faça",
        "tone": "good",
        "items": [
         "Anonimizar: “Cliente A, categoria moda”.",
         "Pedir acesso pelos canais oficiais.",
         "Avisar o gestor assim que errar com um dado."
        ]
       }
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Errou ou vazou? Avise na hora",
       "html": "Esconder piora tudo. Avise o gestor logo, diga o que aconteceu e o que já foi feito. Corrigir rápido protege o cliente, a Mamba e você."
      },
      {
       "t": "quiz",
       "q": "Um colega pede, pelo WhatsApp, a senha da conta de um cliente pra “adiantar” uma tarefa. O que você faz?",
       "options": [
        "Não envio a senha, explico o motivo e peço o acesso pelo canal oficial, com o usuário dele",
        "Envio a senha e peço pra ele apagar a mensagem logo depois, pra não ficar nada registrado",
        "Envio só metade da senha em uma mensagem e a outra metade em outra, pra ficar mais seguro",
        "Envio a senha, mas só dessa vez, porque a tarefa é urgente e ele é de confiança da equipe"
       ],
       "answer": [
        0
       ],
       "why": "Senha não circula por chat. O caminho certo é acesso próprio, pelo canal oficial. Apagar ou dividir a senha não resolve, e urgência não é exceção."
      },
      {
       "t": "list",
       "title": "Mão na massa",
       "items": [
        "Escolha uma conta (real anonimizada)",
        "Liste o que olhar todo dia, toda semana e todo mês",
        "Escreva o resumo semanal em uma linha, com ACOS, ROAS e TACOS",
        "Anonimize tudo e peça pra um colega revisar"
       ]
      },
      {
       "t": "quiz",
       "q": "Antes de enviar o relatório, qual teste mostra se o cliente leigo vai entender sem ligar pra tirar dúvida?",
       "options": [
        "Ler como quem não conhece a conta: sobrou jargão sem tradução? Está claro o que fazemos e o que precisamos dele?",
        "Contar quantas abas e gráficos a planilha tem, porque quanto mais dados, mais o cliente confia no trabalho",
        "Conferir se todos os termos técnicos da plataforma estão no texto, pra mostrar domínio do assunto ao cliente",
        "Perguntar ao gestor se ele gostou do formato, porque se o gestor entendeu o cliente também vai entender"
       ],
       "answer": [
        0
       ],
       "why": "O teste é o olhar do leigo: sem jargão solto, com ação e pedido claros. Mais abas, mais termos técnicos ou a opinião do gestor não garantem que o cliente entenda."
      },
      {
       "t": "recap",
       "items": [
        "Cadência: diário, semanal, mensal e trimestral",
        "Resumo da semana em uma linha com números",
        "Delegar é passar objetivo, prazo e checagem",
        "Senha e dado de cliente não circulam no chat",
        "Teste final: o leigo entende sem ligar?"
       ]
      }
     ]
    }
   ]
  }
 ]
});

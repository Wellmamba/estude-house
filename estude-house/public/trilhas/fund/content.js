/* Conteúdo da trilha "Fundamentos Mamba e e-commerce" (Formação Mamba, para Assessores e Gestores de Performance), em formato Stories.
   Cada item de `blocks` é um card de tela cheia. Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, recap, quiz, sim
   e os visuais chart, flow, table, tree, timeline, stairs, anno e lab (veja GUIA-STORIES.md).
   Assessor Estratégico e Gestor de Performance são funções com rotinas diferentes e o mesmo nível de conhecimento: não há escada entre elas.
   Todos os números das contas e dos gráficos são de exemplo. Regras de plataforma, taxas e impostos mudam: a fonte final é a documentação oficial e o contador do cliente.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
 "id": "fund",
 "title": "Fundamentos Mamba e e-commerce",
 "finalScope": "final-fund",
 "finalSize": 16,
 "tag": "Formação",
 "tagline": "As funções do time e a base do e-commerce, em doses curtas, para Assessores e Gestores de Performance.",
 "subtitle": "Formação Mamba, em stories, para Assessores e Gestores de Performance.",
 "modules": [
  {
   "id": "gf-m1",
   "n": 1,
   "title": "Comece por aqui",
   "tagline": "As duas funções do time, como estudar aqui e o ciclo da conta.",
   "outcome": "Explicar o papel do Assessor e do Gestor de Performance e acompanhar o ciclo de uma conta, do diagnóstico ao resultado.",
   "lessons": [
    {
     "id": "gf-l1-1",
     "title": "Assessor e Gestor de Performance: duas funções",
     "minutes": 6,
     "goal": "Entender o que cada função faz na conta do cliente e por que as duas precisam do mesmo conhecimento.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🤝",
       "title": "Duas funções, um mesmo nível",
       "text": "Veja o que o Assessor Estratégico e o Gestor de Performance fazem e por que os dois precisam saber o mesmo."
      },
      {
       "t": "big",
       "emoji": "🧭",
       "html": "Na Mamba, <b>não existe escada</b> entre Assessor e Gestor de Performance.",
       "sub": "São funções diferentes, no mesmo nível de conhecimento."
      },
      {
       "t": "compare",
       "title": "Quem faz o quê",
       "left": {
        "title": "Assessor Estratégico",
        "tone": "good",
        "items": [
         "Desenvolve a estratégia da conta",
         "Diagnostica, prioriza e define o plano",
         "Liga dado, meta e decisão"
        ]
       },
       "right": {
        "title": "Gestor de Performance",
        "tone": "good",
        "items": [
         "Executa a estratégia na conta do cliente",
         "Aplica as ações no dia a dia da conta",
         "Acompanha os números e devolve o que viu"
        ]
       }
      },
      {
       "t": "p",
       "title": "Não são fases",
       "html": "Ninguém começa em uma função e vira a outra. Cada uma tem <b>rotina própria</b>. As duas têm o mesmo patamar de conhecimento: o time inteiro entende a conta de ponta a ponta."
      },
      {
       "t": "jargon",
       "term": "Estratégia",
       "means": "O plano de <b>o quê mexer na conta e em que ordem</b>, com meta e prioridade, para o cliente vender mais.",
       "ex": "Corrigir o preço dos produtos com margem negativa antes de aumentar a verba de Ads."
      },
      {
       "t": "jargon",
       "term": "Execução",
       "means": "Colocar o plano <b>em prática dentro da conta</b> do cliente e medir o efeito de cada ação.",
       "ex": "Subir o preço de 12 produtos e acompanhar a margem na semana seguinte."
      },
      {
       "t": "flow",
       "title": "Da estratégia ao resultado",
       "items": [
        {
         "icon": "🔎",
         "title": "Diagnóstico",
         "text": "Ler a conta e achar o gargalo."
        },
        {
         "icon": "🎯",
         "title": "Estratégia",
         "text": "Definir prioridade, plano e meta."
        },
        {
         "icon": "🛠️",
         "title": "Execução",
         "text": "Aplicar o plano na conta do cliente."
        },
        {
         "icon": "📊",
         "title": "Resultado",
         "text": "Ler os números com o mesmo dado."
        },
        {
         "icon": "🔁",
         "title": "Ajuste",
         "text": "O que o dado mostra volta pro plano."
        }
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Mesmo conhecimento",
       "html": "Quem desenvolve a estratégia precisa entender como se executa. Quem executa precisa entender <b>por que</b> a estratégia é essa. Por isso a base de estudo é a mesma."
      },
      {
       "t": "table",
       "title": "Mesma base, rotinas diferentes",
       "head": [
        "Tema",
        "Assessor",
        "Gestor de Performance"
       ],
       "rows": [
        [
         "Preço e margem",
         "Define a meta de margem",
         "Aplica o preço na conta"
        ],
        [
         "Ads",
         "Define onde entra a verba",
         "Ajusta as campanhas"
        ],
        [
         "Promoções",
         "Escolhe as que valem",
         "Cadastra e acompanha"
        ],
        [
         "Dados",
         "Lê cenário e causa",
         "Monitora e sinaliza desvios"
        ]
       ],
       "caption": "Exemplos para fixar a ideia. Cada função tem as próprias tarefas e a própria rotina."
      },
      {
       "t": "quiz",
       "q": "Qual frase descreve corretamente as duas funções na Mamba?",
       "options": [
        "O Assessor desenvolve a estratégia e o Gestor de Performance a executa na conta",
        "O Gestor de Performance é o próximo nível do Assessor, depois de provar a rotina",
        "O Assessor só observa e o Gestor de Performance decide tudo sozinho na conta",
        "As duas funções fazem as mesmas tarefas, nos mesmos horários, em toda conta"
       ],
       "answer": [
        0
       ],
       "why": "O Assessor desenvolve a estratégia e o Gestor de Performance a executa na conta do cliente. São funções diferentes, não fases."
      },
      {
       "t": "say",
       "emoji": "💬",
       "title": "Fala assim com o cliente",
       "html": "“Aqui na Mamba, a estratégia da sua conta é desenvolvida pelo Assessor Estratégico e executada pelo Gestor de Performance. Os dois conhecem a conta e dominam o mesmo conteúdo.”"
      },
      {
       "t": "quiz",
       "q": "Quais afirmações sobre as duas funções estão corretas? Marque todas as corretas.",
       "multi": true,
       "options": [
        "Cada função tem a própria rotina de trabalho",
        "As duas funções têm o mesmo nível de conhecimento",
        "O Gestor de Performance executa a estratégia na conta",
        "O Assessor passa a ser Gestor de Performance com o tempo",
        "Só o Assessor precisa entender de preço e de Ads"
       ],
       "answer": [
        0,
        1,
        2
       ],
       "why": "São funções com rotinas diferentes e o mesmo nível de conhecimento. Uma não é fase da outra, e as duas precisam dominar preço, Ads e o resto."
      },
      {
       "t": "recap",
       "title": "Guarda isso",
       "items": [
        "Assessor desenvolve a estratégia da conta",
        "Gestor de Performance executa na conta do cliente",
        "Não são fases: são funções com rotinas diferentes",
        "As duas têm o mesmo nível de conhecimento"
       ]
      }
     ]
    },
    {
     "id": "gf-l1-2",
     "title": "Como estudar e de onde vem a verdade",
     "minutes": 6,
     "goal": "Entender como cada trilha funciona, a regra de ouro sobre dados e onde achar a fonte final das regras.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "📚",
       "title": "Estude para usar na conta",
       "text": "Veja como cada trilha funciona, a regra de ouro sobre dados e onde está a fonte final de cada regra."
      },
      {
       "t": "flow",
       "title": "Como cada trilha funciona",
       "items": [
        {
         "icon": "📖",
         "title": "Aulas",
         "text": "Stories curtos, com exemplo e quiz."
        },
        {
         "icon": "✅",
         "title": "Quizzes",
         "text": "Cada aula termina com perguntas."
        },
        {
         "icon": "📝",
         "title": "Prova do módulo",
         "text": "Sorteia questões do módulo."
        },
        {
         "icon": "🏁",
         "title": "Prova final",
         "text": "Reúne os módulos da trilha."
        },
        {
         "icon": "🎓",
         "title": "Certificado",
         "text": "Sai ao passar na prova final."
        }
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Erro clássico",
       "html": "Ler a aula, achar que entendeu e <b>pular os exercícios e as simulações</b>. Entender no papel é uma coisa; fazer na conta é outra."
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
       "html": "Regra de ouro 1: benchmark é <b>referência</b>. A verdade é o <b>dado da conta</b>.",
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
       "title": "Guarda isso",
       "items": [
        "Aulas, quizzes, prova do módulo e prova final",
        "Benchmark é referência; a verdade é o dado da conta",
        "Regras mudam: confira a fonte oficial",
        "Dúvida de imposto: fale com o contador do cliente"
       ]
      }
     ]
    },
    {
     "id": "gf-l1-3",
     "title": "Da estratégia à execução: o ciclo da conta",
     "minutes": 6,
     "goal": "Entender como o plano do Assessor vira ação do Gestor de Performance e como o resultado volta para ajustar a estratégia.",
     "blocks": [
      {
       "t": "hook",
       "emoji": "🔁",
       "title": "O ciclo da conta",
       "text": "Siga uma ação do diagnóstico ao resultado e veja onde cada função entra, sem perder o fio da conta."
      },
      {
       "t": "big",
       "html": "Estratégia sem execução é <b>papel</b>. Execução sem estratégia é <b>correria</b>.",
       "sub": "A conta precisa das duas, conversando."
      },
      {
       "t": "flow",
       "title": "As 5 etapas do ciclo",
       "items": [
        {
         "icon": "🔎",
         "title": "Diagnóstico",
         "text": "O que está travando a conta."
        },
        {
         "icon": "🎯",
         "title": "Prioridade",
         "text": "O que mexer primeiro."
        },
        {
         "icon": "🗂️",
         "title": "Plano",
         "text": "Ação, prazo, meta e métrica."
        },
        {
         "icon": "🛠️",
         "title": "Execução",
         "text": "A ação feita na conta do cliente."
        },
        {
         "icon": "📊",
         "title": "Leitura",
         "text": "O que o número mostrou."
        }
       ]
      },
      {
       "t": "p",
       "title": "Caso: Casa Aurora",
       "html": "O diagnóstico achou 12 produtos com <b>margem negativa</b>. A estratégia: corrigir o preço primeiro e só depois ampliar o Ads. A execução: subir o preço dos 12 e medir a margem na semana seguinte."
      },
      {
       "t": "table",
       "title": "Quem puxa cada etapa (exemplo)",
       "head": [
        "Etapa",
        "Quem puxa"
       ],
       "rows": [
        [
         "Diagnóstico e prioridade",
         "Assessor Estratégico"
        ],
        [
         "Plano com meta e prazo",
         "Assessor Estratégico"
        ],
        [
         "Ação na conta do cliente",
         "Gestor de Performance"
        ],
        [
         "Leitura do resultado",
         "Os dois, com o mesmo dado"
        ]
       ],
       "caption": "A leitura é dos dois: por isso o conhecimento precisa ser o mesmo."
      },
      {
       "t": "jargon",
       "term": "Passagem de bastão",
       "means": "O momento em que a estratégia vira <b>tarefa clara</b> para quem vai executar: o quê, em qual conta, até quando e como medir.",
       "ex": "Subir o preço de 12 produtos até o dia 15 e medir a margem no relatório."
      },
      {
       "t": "list",
       "title": "Uma boa passagem traz",
       "items": [
        "O que fazer, em palavras simples",
        "Em qual conta e em quais anúncios",
        "Prazo e responsável",
        "Meta e métrica de resultado",
        "O risco que pode aparecer"
       ]
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "A execução devolve dado",
       "html": "Quem executa vê a conta se mexendo. Esse retorno <b>volta pra estratégia</b>: se o número não saiu como o plano previa, o plano muda."
      },
      {
       "t": "compare",
       "title": "Sem conversa × com conversa",
       "left": {
        "title": "Sem conversa",
        "tone": "bad",
        "items": [
         "Estratégia sai sem olhar a execução",
         "Execução sem saber o motivo",
         "Ajuste só no fim do mês"
        ]
       },
       "right": {
        "title": "Com conversa",
        "tone": "good",
        "items": [
         "Estratégia pensada para ser executada",
         "Execução com o porquê claro",
         "Ajuste a cada leitura de dado"
        ]
       }
      },
      {
       "t": "say",
       "emoji": "💬",
       "title": "Fala assim com o cliente",
       "html": "“Primeiro a gente lê a conta e define a prioridade. Depois o plano vira ação na sua conta, e os números voltam pra ajustar o caminho. Nada fica parado no papel.”"
      },
      {
       "t": "quiz",
       "q": "A estratégia definiu corrigir o preço de 12 produtos. O que quem executa precisa receber?",
       "options": [
        "O que fazer, em quais produtos, até quando e como medir o resultado",
        "Apenas a lista de produtos, para decidir sozinho o prazo e a meta",
        "A decisão de mudar a estratégia inteira da conta antes de começar",
        "Somente o resultado do mês, depois que as ações já terminaram"
       ],
       "answer": [
        0
       ],
       "why": "Uma boa passagem traz o quê, onde, prazo, meta e métrica. Sem isso a execução vira palpite e a leitura do resultado perde sentido."
      },
      {
       "t": "recap",
       "title": "Guarda isso",
       "items": [
        "O ciclo: diagnóstico, prioridade, plano, execução, leitura",
        "A passagem traz ação, conta, prazo, meta e métrica",
        "O resultado volta e ajusta a estratégia",
        "Os dois leem o dado com o mesmo conhecimento"
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Por que o cliente compra de um anúncio e ignora outro?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Venda online é um funil: cada etapa perde gente."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Funil = viram → clicaram → consideraram → compraram. Ache a etapa com a maior queda."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você ataca onde vaza: título e foto pro clique; prazo e reputação pra compra."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Quais números dizem se a loja vai bem?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Faturar não é ganhar: GMV mede volume e margem mede sobra."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Ticket médio = faturamento ÷ pedidos. Conversão = pedidos ÷ visitas. Margem = sobra ÷ preço."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você olha volume e margem juntos antes de comemorar."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "O anúncio pago e o estoque estão pagando a conta?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Ads só vale se a venda paga o clique."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "ROAS = vendas com ads ÷ gasto. ACOS = gasto ÷ vendas com ads (o inverso). TACOS = gasto ÷ faturamento total."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você lê o indicador certo e protege o produto curva A de ruptura."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Por que a plataforma cobra e premia o que premia?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "O marketplace ganha com comissão, Ads, logística, crédito e assinatura."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Take rate = tudo o que fica com a plataforma ÷ valor vendido."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você adapta o plano: o ML tende a premiar reputação e prazo; a Shopee, oferta e campanha."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "O que a Mamba entrega e como explicar uma venda?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "O cliente percebe valor quando entende o que mudou."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Ciclo: diagnóstico → ação → resultado → conversa. Numa venda de R$ 100 do exemplo, sobram R$ 18."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você explica em 2 minutos, com número, de onde o dinheiro entra e sai."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "html": "Cada contrato tem as condições combinadas com o cliente. Antes de falar de valor, <b>leia a proposta do cliente</b> e alinhe com o seu líder. Não prometa o que não está no contrato."
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
  }
 ]
});

/* Conteúdo da trilha "Operação na Shopee" (Formação Mamba, para Assessores e Gestores de Performance), em formato Stories.
   Cada item de `blocks` é um card de tela cheia. Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, recap, quiz, sim
   e os visuais chart, flow, table, tree, timeline, stairs, anno e lab (veja GUIA-STORIES.md).
   Assessor Estratégico e Gestor de Performance são funções com rotinas diferentes e o mesmo nível de conhecimento: não há escada entre elas.
   Todos os números das contas e dos gráficos são de exemplo. Regras de plataforma, taxas e impostos mudam: a fonte final é a documentação oficial e o contador do cliente.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
 "id": "spop",
 "title": "Operação na Shopee",
 "finalScope": "final-spop",
 "finalSize": 12,
 "tag": "Shopee",
 "tagline": "Da Central do Vendedor às datas duplas: como a Shopee funciona e no que difere do ML.",
 "subtitle": "Formação Mamba, em stories, para Assessores e Gestores de Performance.",
 "modules": [
  {
   "id": "gf-m4",
   "n": 1,
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como a Shopee organiza uma loja?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Outra lógica, outro público: a Central do Vendedor é o painel de tudo."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Cadastro → perfil → envio → produtos → primeira venda. Loja comum e Shopee Mall diferem na prova de marca."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você começa na loja comum e só vai pro Mall com marca ou autorização."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Por que a loja perde vitrine na Shopee?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Erro repetido vira ponto negativo e menos visibilidade."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Taxa de não cumpridos = (cancelados + devolvidos) ÷ pedidos. Ache a maior fatia dos pontos."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você conserta a causa da maior fatia e acompanha toda semana."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Onde o pedido da Shopee se perde?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "O prazo de envio conta no placar mesmo sem reclamação."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Funil: pagos → despachados no prazo → entregues → sem devolução. Devolução se decide com prova."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você mantém estoque certo, horário de corte real e prova guardada antes de contestar."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "A promoção vale a pena?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Desconto come margem, e a venda extra precisa compensar."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Sobra com desconto = preço novo − produto − taxas. Vendas extras pra empatar = lucro antes ÷ lucro depois."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Só entra na oferta quem tem margem e estoque, e o preparo da data dupla começa semanas antes."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Afiliado compensa, e ML e Shopee pedem o mesmo plano?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "A comissão sai da sua margem, e cada plataforma premia coisas diferentes."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Sobra = preço − produto − taxas − comissão do afiliado. Compare as 5 diferenças práticas entre ML e Shopee."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você libera afiliado só onde a sobra continua boa e monta um plano próprio pra Shopee."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
         "text": "Na sua rotina, em cada uma"
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
  }
 ]
});

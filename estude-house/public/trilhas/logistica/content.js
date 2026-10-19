/* Conteúdo da trilha "Logística e Full" (Formação Mamba, para Assessores e Gestores de Performance), em formato Stories.
   Cada item de `blocks` é um card de tela cheia. Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, recap, quiz, sim
   e os visuais chart, flow, table, tree, timeline, stairs, anno e lab (veja GUIA-STORIES.md).
   Assessor Estratégico e Gestor de Performance são funções com rotinas diferentes e o mesmo nível de conhecimento: não há escada entre elas.
   Todos os números das contas e dos gráficos são de exemplo. Regras de plataforma, taxas e impostos mudam: a fonte final é a documentação oficial e o contador do cliente.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
 "id": "logistica",
 "title": "Logística e Full",
 "finalScope": "final-logistica",
 "finalSize": 12,
 "tag": "Formação",
 "tagline": "Modalidades do Mercado Livre e da Shopee, Full e devolução: o caminho certo por SKU.",
 "subtitle": "Formação Mamba, em stories, para Assessores e Gestores de Performance.",
 "modules": [
  {
   "id": "gf-m8",
   "n": 1,
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Qual modalidade de envio usar?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Quem leva o pacote muda o custo e o risco."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Compare Coleta, Flex, Places, Correios e Full, SKU por SKU."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você escolhe por SKU, não pela conta toda."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Cada SKU tem a sua modalidade: o que gira vai pro Full, o que vende perto de você vai no Flex e o resto vai na Coleta. Eu escolho pela conta do SKU, não pela conta toda.”"
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Onde mora o risco de atraso?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Atraso pesa na reputação e na visibilidade."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Flex: horário de corte e cobertura realistas. Coleta: pacote pronto e etiquetado no horário."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você avisa o cliente antes que ele pergunte."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Por que o frete saiu maior do que o previsto?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "O frete nasce do peso e das medidas cadastrados."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Peso cúbico = volume ÷ fator. Vale o maior entre o peso real e o cúbico."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você pesa e mede a caixa fechada antes de cadastrar."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“O frete subiu porque o peso cadastrado estava abaixo do peso cúbico da caixa. Eu pesei e medi a caixa fechada, corrigi o cadastro e refiz o preço mínimo com o frete certo.”"
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Este SKU vale o Full?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Full é decisão por SKU, com conta."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Compare giro, armazenagem e ruptura. Ponto de pedido = venda diária × (prazo + folga)."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você manda o que gira com margem folgada e já define um plano B."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como a Shopee coleta, entrega e armazena?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "O prazo de postagem manda, e programa de frete tem custo."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Coleta Xpress ou ponto de entrega, conforme o volume. Refaça a conta da margem com o programa de frete."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "O fulfillment segue a lógica do Full: decida por SKU."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Na Shopee, o prazo de postagem manda. Vamos escolher coleta ou ponto de entrega pelo seu volume e refazer a margem com o programa de frete, que tem custo.”"
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como fechar a estratégia logística?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Embalagem barata evita avaria cara, e devolução bem tratada volta pro estoque."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Matriz por SKU: Full pro que gira, Flex pro que vende perto e Coleta pro resto."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você entrega a matriz com números e plano B."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "say",
       "title": "Fala assim com o seller",
       "html": "“Aqui está a matriz por SKU: o que gira vai pro Full, o que vende perto vai no Flex e o resto na Coleta. Cada linha tem número e um plano B, caso o giro mude.”"
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
  }
 ]
});

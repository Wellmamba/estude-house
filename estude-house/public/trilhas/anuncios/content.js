/* Conteúdo da trilha "Anúncios que vendem" (Formação Mamba, para Assessores e Gestores de Performance), em formato Stories.
   Cada item de `blocks` é um card de tela cheia. Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, recap, quiz, sim
   e os visuais chart, flow, table, tree, timeline, stairs, anno e lab (veja GUIA-STORIES.md).
   Assessor Estratégico e Gestor de Performance são funções com rotinas diferentes e o mesmo nível de conhecimento: não há escada entre elas.
   Todos os números das contas e dos gráficos são de exemplo. Regras de plataforma, taxas e impostos mudam: a fonte final é a documentação oficial e o contador do cliente.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
 "id": "anuncios",
 "title": "Anúncios que vendem",
 "finalScope": "final-anuncios",
 "finalSize": 12,
 "tag": "Formação",
 "tagline": "Do título à foto, do buy box ao atacado: anúncio que aparece, convence e dá margem.",
 "subtitle": "Formação Mamba, em stories, para Assessores e Gestores de Performance.",
 "modules": [
  {
   "id": "gf-m5",
   "n": 1,
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Por que Ads não conserta anúncio fraco?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Ads traz a visita, e o anúncio converte."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Seis peças, checadas uma a uma: título, fotos, preço, frete, variações e ficha técnica."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você arruma as peças antes de aumentar a verba."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Qual imagem faz o cliente clicar e confiar?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Cada foto tem uma função: chamar o clique, informar ou provar o uso."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Mude uma coisa por vez e meça o clique (CTR) antes e depois."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você padroniza o que subiu o clique e testa outra ideia no que não subiu."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como o cliente acha o meu anúncio?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Palavra-chave é o que o cliente digita, e a intenção diz se ele quer comprar, comparar ou entender."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Pesquise a busca real → escolha os termos → monte o título: produto, marca, característica."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você deixa o título limpo, sem enfeite e sem copiar o concorrente."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Vale brigar pelo buy box com preço?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "O buy box considera preço, reputação e estoque, não só preço."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Calcule o preço mínimo antes. Se baixar o preço passa do piso, a briga não vale."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você entra na disputa só se a sobra aguenta."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Variação, kit, combo ou atacado?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Variação é o mesmo produto em versões, e kit consome o estoque dos componentes."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Simule a sobra por pedido com o desconto e veja se o ticket médio sobe o bastante."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você liga o atacado só se o cliente levar mais unidades por pedido."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Qual anúncio arrumar primeiro?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Audite pelo impacto: curva ABC e visita com conversão baixa."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Teste pequeno antes do lote, mapeamento do ERP ou hub conferido e medição de 30 dias."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Cada mudança tem o dado que a justifica e a métrica que a prova."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
  }
 ]
});

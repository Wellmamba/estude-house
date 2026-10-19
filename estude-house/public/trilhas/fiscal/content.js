/* Conteúdo da trilha "Fiscal sem medo" (Formação Mamba, para Assessores e Gestores de Performance), em formato Stories.
   Cada item de `blocks` é um card de tela cheia. Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, recap, quiz, sim
   e os visuais chart, flow, table, tree, timeline, stairs, anno e lab (veja GUIA-STORIES.md).
   Assessor Estratégico e Gestor de Performance são funções com rotinas diferentes e o mesmo nível de conhecimento: não há escada entre elas.
   Todos os números das contas e dos gráficos são de exemplo. Regras de plataforma, taxas e impostos mudam: a fonte final é a documentação oficial e o contador do cliente.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
 "id": "fiscal",
 "title": "Fiscal sem medo",
 "finalScope": "final-fiscal",
 "finalSize": 12,
 "tag": "Formação",
 "tagline": "Regime, nota, códigos e impostos com exemplo em reais, sem virar contador.",
 "subtitle": "Formação Mamba, em stories, para Assessores e Gestores de Performance.",
 "modules": [
  {
   "id": "gf-m6",
   "n": 1,
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como o regime da empresa muda o preço?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Regime é a regra de como a empresa paga imposto."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "MEI, Simples, Presumido e Real calculam de jeitos diferentes. Compare o imposto efetivo dentro do preço."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você leva a margem por produto ao contador, e a decisão do regime é dele."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "q": "O faturamento de um seller chegou perto do limite do regime dele. Qual é o seu papel?",
       "options": [
        "Trocar o regime dentro da conta do cliente antes que o faturamento passe do limite",
        "Segurar as vendas do cliente até o fim do ano para ficar abaixo do limite do regime",
        "Levar faturamento e margem por produto ao contador, que decide se troca o regime",
        "Esperar o limite estourar e só depois avisar o contador sobre a mudança do regime"
       ],
       "answer": [
        2
       ],
       "why": "Você traz os dados (faturamento, margem, mix). Quem avalia limite e decide a troca de regime é o contador do cliente."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "A nota fiscal está certa?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "A rota da venda decide o CFOP."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "CFOP começado em 5 é dentro do estado, e em 6 é pra outro estado. Entrada, saída e devolução têm CFOPs diferentes."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Dúvida vai pro contador, com o número do pedido e o print da nota."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Por que a nota dá erro?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Cadastro de produto errado vira erro em toda nota."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "NCM classifica, CEST vem com ST, origem diz se é nacional ou importado, e CST (regime normal) ou CSOSN (Simples) define a tributação."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você pega o dado na nota de compra ou no fornecedor, e o contador confere."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Quanto de imposto cai dentro do preço?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Imposto é fatia do preço, não custo extra."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "ICMS é por dentro e IPI é por fora. ST e DIFAL são jeitos de cobrar ICMS, e a rota da venda muda a conta."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você calcula o preço mínimo já com a fatia certa, e o contador confirma as alíquotas."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "html": "Alíquotas de rota, ST e DIFAL mudam. Confira na documentação oficial e com o contador. O que muda com a reforma está na trilha “Reforma Tributária nos Marketplaces”, aqui no BRYANT SHOOT."
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
       "q": "Alguém do time precificou um produto sem considerar o DIFAL da venda para outro estado. O que costuma acontecer?",
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Onde mora cada dado fiscal, e por que o repasse veio menor?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Cada dado fiscal tem um lugar certo, e o repasse é a venda menos os descontos do marketplace."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Conciliação cruza pedido, nota e extrato, linha por linha."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Diferença sem nome vai pro contador."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
         "Mamba e contador"
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
       "q": "O NCM de um produto está errado e as notas saem com imposto torto. Onde você corrige o dado na origem?",
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
       "q": "Na conciliação, um repasse veio R$ 2 menor do que você esperava, sem nome claro no extrato. O que fazer?",
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Qual regime ou qual importação compensa?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Planejar é simular cenários com dados reais."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Preço mínimo = custos em reais ÷ (1 − % − margem alvo), em cada cenário. No importado, some o custo de nacionalização."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você leva o resultado ao contador: vencer na conta não é decisão final."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "q": "Um produto custa R$ 100 no exterior e chega ao estoque a R$ 190 depois de frete, impostos e taxas. Como você deve precificar?",
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
  }
 ]
});

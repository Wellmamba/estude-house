/* Conteúdo da trilha Reforma Tributária nos Marketplaces, em formato Stories (cada item de `blocks` é um card de tela cheia).
   Posição das regras: 15/10/2026. Conteúdo educativo, não é consultoria tributária: o cliente decide com o contador dele.
   Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, term, recap, quiz, sim.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
  "id": "rt",
  "finalScope": "final-rt",
  "title": "Reforma Tributária nos Marketplaces",
  "tag": "Fiscal",
  "tagline": "O que muda no imposto de quem vende no Mercado Livre e na Shopee, e como explicar isso pro cliente sem enrolar.",
  "subtitle": "Da reforma ao papo com o cliente, em stories.",
  "modules": [
    {
      "id": "rt-m1",
      "n": 1,
      "title": "O que é a Reforma Tributária",
      "tagline": "Os tributos novos, os princípios e o calendário, em linguagem de quem vende.",
      "outcome": "Explicar em poucas frases o que muda, quando muda e como o imposto passa a ser calculado.",
      "lessons": [
        {
          "id": "rt-l1-1",
          "title": "A reforma em 1 minuto",
          "minutes": 4,
          "goal": "Saber quais impostos saem, quais entram e por que isso mexe com quem vende online.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧾",
              "title": "Reforma tributária sem enrolação",
              "text": "Em 4 minutos você entende o que muda no imposto de quem vende online."
            },
            {
              "t": "big",
              "emoji": "🧹",
              "html": "Hoje o imposto da venda é uma <b>bagunça</b>.",
              "sub": "Cada estado e cada cidade faz do seu jeito."
            },
            {
              "t": "list",
              "title": "Os 5 impostos de hoje",
              "items": [
                "<b>PIS</b> e <b>Cofins</b>: federais",
                "<b>IPI</b>: federal, sobre indústria",
                "<b>ICMS</b>: do estado",
                "<b>ISS</b>: da cidade, em serviços"
              ]
            },
            {
              "t": "big",
              "emoji": "✂️",
              "html": "A reforma <b>troca os 5</b> por <b>2</b> impostos parecidos: IBS e CBS."
            },
            {
              "t": "jargon",
              "term": "IBS",
              "means": "Imposto de estado e cidade. Entra no lugar do <b>ICMS</b> e do <b>ISS</b>.",
              "ex": "Quem cuida dele é o Comitê Gestor do IBS."
            },
            {
              "t": "jargon",
              "term": "CBS",
              "means": "Imposto federal. Entra no lugar do <b>PIS</b> e da <b>Cofins</b>.",
              "ex": "Quem cuida dele é a Receita Federal."
            },
            {
              "t": "p",
              "title": "E o IPI?",
              "html": "Fica com alíquota <b>zero</b>. A exceção são produtos que competem com a Zona Franca de Manaus."
            },
            {
              "t": "compare",
              "left": {
                "title": "Antes",
                "tone": "bad",
                "items": [
                  "5 impostos",
                  "Uma lei por estado e por cidade",
                  "Cobrado mais na origem"
                ]
              },
              "right": {
                "title": "Depois",
                "tone": "good",
                "items": [
                  "2 impostos parecidos",
                  "Regra única no Brasil",
                  "Cobrado no destino, onde o cliente está"
                ]
              }
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Aviso rápido",
              "html": "Isso aqui é aula, não consultoria. Quem decide regime e nota é o <b>contador</b> do cliente. As datas valem para <b>15/10/2026</b>."
            },
            {
              "t": "say",
              "title": "Fala assim pro cliente",
              "html": "“A reforma troca 5 impostos por 2 parecidos, com a mesma regra no Brasil todo. Vai mudando aos poucos, de 2026 a 2033.”"
            },
            {
              "t": "quiz",
              "q": "Qual frase resume o que a reforma faz com os impostos sobre consumo?",
              "options": [
                "Troca PIS, Cofins, IPI, ICMS e ISS por IBS e CBS, com regras iguais em todo o país",
                "Cria o IBS e a CBS para cobrar além dos impostos atuais, que continuam todos valendo",
                "Mantém o ICMS e o ISS como estão e só troca os nomes de PIS e Cofins para CBS",
                "Acaba com o imposto sobre a venda e passa a cobrar só sobre o lucro da empresa"
              ],
              "answer": [
                0
              ],
              "why": "Os 5 tributos de hoje saem aos poucos e entram IBS e CBS. O IPI fica zerado na prática e a regra passa a ser a mesma no país inteiro."
            },
            {
              "t": "recap",
              "items": [
                "5 impostos viram 2: <b>IBS</b> e <b>CBS</b>",
                "Regra única no Brasil todo",
                "Imposto vai pro lugar do cliente",
                "Muda aos poucos, de 2026 a 2033"
              ]
            }
          ]
        },
        {
          "id": "rt-l1-2",
          "title": "Quem cobra cada imposto novo",
          "minutes": 6,
          "goal": "Dizer quem cobra cada tributo novo e o que cada um substitui.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧩",
              "title": "Quem cobra cada imposto novo",
              "text": "Em poucos minutos você sabe quem é o dono do IBS, da CBS e do IS, e o que cada um substitui."
            },
            {
              "t": "big",
              "emoji": "🪪",
              "html": "Nomes parecidos, <b>donos diferentes</b>.",
              "sub": "Você só precisa saber quem cobra e o que substitui. O resto o sistema de nota fiscal calcula."
            },
            {
              "t": "jargon",
              "term": "IBS",
              "tag": "Imposto sobre Bens e Serviços",
              "means": "Imposto dividido entre <b>estados, Distrito Federal e municípios</b>. Entra no lugar do <b>ICMS</b> (estadual) e do <b>ISS</b> (municipal).",
              "ex": "Quem administra é o Comitê Gestor do IBS (CGIBS)."
            },
            {
              "t": "jargon",
              "term": "CBS",
              "tag": "Contribuição sobre Bens e Serviços",
              "means": "Tributo <b>federal</b>. Entra no lugar do <b>PIS</b> e da <b>Cofins</b>, que também são federais.",
              "ex": "Quem administra é a Receita Federal."
            },
            {
              "t": "jargon",
              "term": "IS",
              "tag": "Imposto Seletivo",
              "means": "Imposto federal sobre o que faz mal à <b>saúde</b> e ao <b>meio ambiente</b>.",
              "ex": "Cigarro é o exemplo clássico. Quase nenhum produto de marketplace é afetado."
            },
            {
              "t": "p",
              "title": "E o IPI?",
              "html": "O IPI (imposto federal sobre produto industrializado) fica com alíquota <b>zero</b>. A exceção são produtos que competem com a Zona Franca de Manaus."
            },
            {
              "t": "big",
              "emoji": "➕",
              "html": "Na venda, o imposto é a <b>soma de 3 partes</b>.",
              "sub": "CBS + IBS do estado de destino + IBS do município de destino."
            },
            {
              "t": "conta",
              "title": "As 3 partes numa venda",
              "rows": [
                [
                  "Base da venda",
                  "R$ 100,00"
                ],
                [
                  "CBS (10%, exemplo)",
                  "R$ 10,00",
                  "neg"
                ],
                [
                  "IBS do estado de destino (10%, exemplo)",
                  "R$ 10,00",
                  "neg"
                ],
                [
                  "IBS do município de destino (5%, exemplo)",
                  "R$ 5,00",
                  "neg"
                ]
              ],
              "total": [
                "Imposto somado (25%, exemplo)",
                "R$ 25,00"
              ],
              "note": "Percentuais inventados só pra conta fechar. As alíquotas reais dependem de fixação posterior (posição de 15/10/2026)."
            },
            {
              "t": "jargon",
              "term": "Destino",
              "means": "O lugar de <b>quem recebe</b> a mercadoria. Não é o lugar de quem vende.",
              "ex": "Loja em São Paulo vende pra Fortaleza: o destino é Fortaleza (no desenho completo, que só vale em 2033)."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Adquirente não é destinatário",
              "html": "<b>Adquirente</b> é quem paga. <b>Destinatário</b> é quem recebe. Você compra um presente pra sua mãe em outro estado: você é o adquirente e ela é a destinatária. O imposto vai pro lugar dela."
            },
            {
              "t": "p",
              "title": "Sobre o que o imposto incide",
              "html": "Incidir é ser cobrado em cima de algo. IBS e CBS incidem sobre <b>bens</b> (materiais ou não, como um software ou um direito) e sobre <b>serviços</b>. Serviço é tudo que não for bem."
            },
            {
              "t": "list",
              "title": "Tem imposto até sem venda",
              "items": [
                "Tirar mercadoria do estoque pra uso pessoal",
                "Brindes",
                "Bonificações (mercadoria dada de bônus)"
              ]
            },
            {
              "t": "list",
              "title": "O que não tem imposto",
              "items": [
                "Transferência entre filiais (unidades da mesma empresa): só emite nota",
                "Venda de participação em empresa",
                "Rendimentos financeiros",
                "Dividendos"
              ]
            },
            {
              "t": "jargon",
              "term": "Imunidade",
              "means": "A Constituição <b>proíbe cobrar</b> o imposto.",
              "ex": "Exportação, livros e jornais, templos, entidades sem fins lucrativos de educação e assistência, e entes públicos entre si."
            },
            {
              "t": "say",
              "title": "Fala assim pro cliente",
              "html": "“Os impostos novos são dois: o IBS, de estado e município, e a CBS, federal. O IBS entra no lugar de ICMS e ISS. A CBS entra no lugar de PIS e Cofins.”"
            },
            {
              "t": "quiz",
              "q": "Quais tributos antigos o IBS e a CBS substituem? Marque todos.",
              "multi": true,
              "options": [
                "ICMS, o imposto que era do Estado",
                "ISS, o imposto que era da cidade",
                "PIS e Cofins, que eram federais",
                "Imposto de Renda da empresa",
                "IPTU, o imposto sobre imóveis"
              ],
              "answer": [
                0,
                1,
                2
              ],
              "why": "O IBS entra no lugar de ICMS e ISS. A CBS entra no lugar de PIS e Cofins. Imposto de Renda e IPTU não fazem parte dessa reforma sobre o consumo."
            },
            {
              "t": "recap",
              "items": [
                "<b>IBS</b>: estados e municípios, no lugar de ICMS e ISS",
                "<b>CBS</b>: federal, no lugar de PIS e Cofins",
                "<b>IS</b> pega o que faz mal à saúde",
                "Imposto vai pro lugar de quem recebe"
              ]
            }
          ]
        },
        {
          "id": "rt-l1-3",
          "title": "As 4 ideias que mudam a conta",
          "minutes": 6,
          "goal": "Explicar legislação única, cobrança no destino, não cumulatividade e alíquota padrão.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧠",
              "title": "4 ideias que explicam a reforma",
              "text": "Guardando essas quatro ideias, você consegue raciocinar sobre quase qualquer dúvida do cliente sobre o imposto novo."
            },
            {
              "t": "big",
              "emoji": "4️⃣",
              "html": "São <b>4 ideias</b>. Guardou, resolveu.",
              "sub": "Elas explicam quase tudo que muda na conta."
            },
            {
              "t": "p",
              "title": "Ideia 1: legislação única",
              "html": "As regras de IBS e CBS valem pro país inteiro. A Constituição (art. 156-A) pede uma só legislação. Acaba o emaranhado de leis de estado e de cidade."
            },
            {
              "t": "jargon",
              "term": "Neutralidade",
              "means": "O imposto <b>não pode empurrar</b> a empresa pra um lugar ou pra um produto só porque lá se paga menos.",
              "ex": "Benefício fiscal só nos casos que a Constituição e a lei complementar permitem."
            },
            {
              "t": "big",
              "emoji": "📍",
              "html": "Ideia 3: o imposto fica no <b>lugar do comprador</b>.",
              "sub": "Não no lugar onde a empresa está."
            },
            {
              "t": "callout",
              "tone": "exemplo",
              "title": "Por que o destino importa online",
              "html": "Hoje, loja de São Paulo vendendo pro Ceará pode cair numa regra de ICMS diferente da venda dentro de São Paulo. Com a cobrança no destino, a regra é a mesma e o imposto vai pro Estado e pro Município do comprador."
            },
            {
              "t": "p",
              "title": "Cidade com ISS baixo?",
              "html": "Como o imposto vai pro destino, ficar numa cidade com ISS baixo deixa de ajudar. Atenção: esse desenho só vale por inteiro quando a transição acabar, em 2033."
            },
            {
              "t": "big",
              "emoji": "🔁",
              "html": "Ideia 4: você <b>abate</b> o imposto das compras.",
              "sub": "Cada um paga só sobre o que acrescentou."
            },
            {
              "t": "jargon",
              "term": "Não cumulatividade",
              "means": "Quem compra pra vender (ou produzir) <b>abate</b> o imposto das compras do imposto das vendas. Cada um paga só sobre o que acrescentou.",
              "ex": "Atacadista compra de fábrica e revende: desconta o imposto que já veio na compra."
            },
            {
              "t": "conta",
              "title": "Atacadista: paga só o que acrescentou",
              "rows": [
                [
                  "Venda (base)",
                  "R$ 700,00"
                ],
                [
                  "Débito: 25% da venda",
                  "R$ 175,00",
                  "neg"
                ],
                [
                  "Compra (base)",
                  "R$ 400,00"
                ],
                [
                  "Crédito: 25% da compra",
                  "R$ 100,00",
                  "pos"
                ]
              ],
              "total": [
                "Imposto a pagar",
                "R$ 75,00"
              ],
              "note": "Alíquota de 25% só de exemplo. Confere: ele acrescentou R$ 300 (700 menos 400), e 25% de 300 dá 75."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Regra de bolso",
              "html": "Comprou pra revender ou produzir? O imposto das compras vira crédito. Você paga só sobre o valor que acrescentou."
            },
            {
              "t": "jargon",
              "term": "Alíquota",
              "means": "A <b>porcentagem</b> do imposto em cima do valor da operação.",
              "ex": "Alíquota de 10% sobre R$ 200 dá R$ 20 de imposto."
            },
            {
              "t": "p",
              "title": "Bônus: alíquota padrão",
              "html": "Em vez de uma alíquota pra cada produto, haverá uma <b>alíquota padrão</b>. As exceções são <em>reduções percentuais</em> em cima dela."
            },
            {
              "t": "list",
              "title": "As principais reduções",
              "items": [
                "<b>30%</b> de redução: profissionais liberais",
                "<b>60%</b> de redução: educação, saúde e alimentos da cesta",
                "<b>Alíquota zero</b>: alguns medicamentos e a cesta básica nacional"
              ]
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "E o produto comum?",
              "html": "O produto de marketplace comum paga a <b>alíquota padrão</b>. A lista completa de exceções está na lei. Em caso de dúvida sobre um item, quem confirma é o contador do cliente."
            },
            {
              "t": "say",
              "title": "Fala assim pro cliente",
              "html": "“O imposto vai ficar igual em todo o Brasil e no lugar de quem compra. Quem compra pra revender poderá abater o que já foi pago, e cada um paga só sobre o que acrescentou.”"
            },
            {
              "t": "quiz",
              "q": "Uma loja de São Paulo vende pra um cliente em Fortaleza. Pela cobrança no destino, o IBS dessa venda fica com quem?",
              "options": [
                "Com o Estado e o Município de Fortaleza, onde está quem recebe a mercadoria",
                "Com o Estado e o Município de São Paulo, onde a loja está estabelecida",
                "Com a União, que fica com todo o IBS em venda entre Estados diferentes",
                "Metade com São Paulo e metade com o Ceará, em qualquer venda interestadual"
              ],
              "answer": [
                0
              ],
              "why": "Na reforma o imposto vai pro destino. Com a transição concluída (2033), o IBS é do Estado e do Município de quem recebe, e a CBS vai pra União."
            },
            {
              "t": "recap",
              "items": [
                "Regra única no país inteiro",
                "IBS e CBS ficam com o <b>destino</b>",
                "Compra pra revender vira <b>crédito</b>",
                "Produto comum paga a alíquota padrão"
              ]
            }
          ]
        },
        {
          "id": "rt-l1-4",
          "title": "Como o imposto vira conta",
          "minutes": 7,
          "goal": "Montar a base de cálculo, entender o cálculo por fora e fazer a conta de débito menos crédito.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧮",
              "title": "Como o imposto vira conta",
              "text": "Você vai montar a base de cálculo, entender o cálculo por fora e fazer débito menos crédito, tudo com número na mão."
            },
            {
              "t": "big",
              "emoji": "✌️",
              "html": "A conta tem <b>duas partes</b>.",
              "sub": "Quanto vale a venda e quanto sobra pra pagar depois dos créditos."
            },
            {
              "t": "jargon",
              "term": "Base de cálculo",
              "means": "O valor <b>em cima do qual</b> o imposto é calculado.",
              "ex": "Base de R$ 100 e alíquota (a porcentagem do imposto) de 10%: imposto de R$ 10."
            },
            {
              "t": "p",
              "title": "O que entra na base",
              "html": "A base é o valor total cobrado do comprador, a qualquer título. Entram o preço do produto, juros e multas, o frete cobrado na operação, seguros e taxas."
            },
            {
              "t": "list",
              "title": "O que não entra na base",
              "items": [
                "O próprio IBS e a CBS",
                "Descontos incondicionais",
                "Reembolsos"
              ]
            },
            {
              "t": "conta",
              "title": "Montando a base",
              "rows": [
                [
                  "Produto",
                  "R$ 1.000,00"
                ],
                [
                  "Frete cobrado",
                  "R$ 80,00"
                ],
                [
                  "Seguro",
                  "R$ 30,00"
                ],
                [
                  "Juros por atraso",
                  "R$ 40,00"
                ]
              ],
              "total": [
                "Base de cálculo",
                "R$ 1.150,00"
              ],
              "note": "O desconto de R$ 100 no boleto, que depende de pagar até certo dia, não entra na conta: é condicional."
            },
            {
              "t": "jargon",
              "term": "Desconto incondicional",
              "means": "Desconto dado na hora da venda, <b>destacado na nota</b>, que não depende de nada que aconteça depois.",
              "ex": "Preço de R$ 100 com R$ 10 de desconto já destacado na nota."
            },
            {
              "t": "compare",
              "left": {
                "title": "Incondicional",
                "tone": "good",
                "items": [
                  "Dado na hora da venda e destacado na nota",
                  "Não depende de nada que aconteça depois",
                  "Reduz a base de cálculo"
                ]
              },
              "right": {
                "title": "Condicional",
                "tone": "bad",
                "items": [
                  "Depende de um fato futuro, tipo pagar até o dia X",
                  "Exemplo clássico: desconto do boleto",
                  "Não reduz a base de cálculo"
                ]
              }
            },
            {
              "t": "conta",
              "title": "Base com desconto incondicional",
              "rows": [
                [
                  "Produto",
                  "R$ 300,00"
                ],
                [
                  "Frete cobrado",
                  "R$ 40,00"
                ],
                [
                  "Desconto incondicional",
                  "- R$ 20,00",
                  "neg"
                ]
              ],
              "total": [
                "Base de cálculo",
                "R$ 320,00"
              ],
              "note": "Se o desconto fosse condicional, a base seria R$ 340,00."
            },
            {
              "t": "sim",
              "kind": "base",
              "title": "Monte a base de cálculo",
              "intro": "Some o que entra, tire o que não entra e confira o valor da base.",
              "rounds": 3
            },
            {
              "t": "big",
              "emoji": "🧾",
              "html": "O imposto é calculado <b>por fora</b>.",
              "sub": "Ele não incide sobre ele mesmo: é somado em cima da base."
            },
            {
              "t": "conta",
              "title": "Cálculo por fora",
              "rows": [
                [
                  "Base (preço do produto)",
                  "R$ 100,00"
                ],
                [
                  "Imposto: 25% da base",
                  "R$ 25,00",
                  "neg"
                ]
              ],
              "total": [
                "Comprador paga",
                "R$ 125,00"
              ],
              "note": "25% é alíquota de exemplo. A real ainda será fixada."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Número de exemplo",
              "html": "Os números desta trilha são <b>exemplos</b>. A alíquota real ainda será fixada, então nunca prometa um percentual ao cliente."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Débito",
                  "html": "Imposto destacado nas suas vendas no período."
                },
                {
                  "title": "Crédito",
                  "html": "Imposto pago nas suas compras, com nota fiscal e imposto de fato recolhido antes."
                },
                {
                  "title": "A pagar",
                  "html": "Débito menos crédito. IBS só abate IBS, CBS só abate CBS."
                }
              ]
            },
            {
              "t": "conta",
              "title": "Débito menos crédito",
              "rows": [
                [
                  "Vendas no período",
                  "R$ 1.000,00"
                ],
                [
                  "Débito: 25% das vendas",
                  "R$ 250,00",
                  "neg"
                ],
                [
                  "Compras no período",
                  "R$ 600,00"
                ],
                [
                  "Crédito: 25% das compras",
                  "R$ 150,00",
                  "pos"
                ]
              ],
              "total": [
                "Imposto a pagar",
                "R$ 100,00"
              ],
              "note": "25% é a soma de IBS e CBS, só de exemplo. Na prática, cada um abate o seu."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Crédito tem condição",
              "html": "Crédito vale pra quem está no <b>regime regular</b>, com nota fiscal e imposto de fato recolhido na etapa anterior. Qual é o regime do cliente? Quem diz é o contador dele."
            },
            {
              "t": "sim",
              "kind": "iva",
              "title": "Débito, crédito e imposto a pagar",
              "intro": "Use alíquota de exemplo. Calcule o imposto, o crédito ou o valor final em cada rodada.",
              "rounds": 3
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Regra de bolso",
              "html": "Primeiro a base. Depois o imposto, somado por fora. No fim do período, débito menos crédito."
            },
            {
              "t": "say",
              "title": "Fala assim pro cliente",
              "html": "“O imposto é calculado em cima do valor da venda e somado por fora. No fim do período, você paga a diferença entre o imposto das suas vendas e o das suas compras.”"
            },
            {
              "t": "quiz",
              "q": "Venda com produto de R$ 500, frete cobrado de R$ 50 e desconto incondicional de R$ 30 já na nota. Qual é a base de cálculo?",
              "options": [
                "R$ 520, porque o frete entra e o desconto na nota sai da base",
                "R$ 550, porque o desconto na nota nunca reduz a base de cálculo",
                "R$ 470, porque o frete cobrado do cliente nunca entra na base",
                "R$ 500, porque só o preço do produto conta pra base de cálculo"
              ],
              "answer": [
                0
              ],
              "why": "R$ 500 + R$ 50 - R$ 30 = R$ 520. O frete cobrado entra na base, e o desconto incondicional, que já está na nota, reduz a base."
            },
            {
              "t": "recap",
              "items": [
                "Base = valor total cobrado do comprador",
                "Desconto <b>incondicional</b> reduz a base",
                "Imposto é somado <b>por fora</b>",
                "A pagar = débito menos crédito"
              ]
            }
          ]
        },
        {
          "id": "rt-l1-5",
          "title": "O calendário, ano a ano",
          "minutes": 6,
          "goal": "Situar cada fase da transição e separar o que está confirmado do que é estimativa.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🗓️",
              "title": "O calendário da reforma, ano a ano",
              "text": "Você vai saber o que muda em cada fase, de 2026 a 2033, e o que ainda é só estimativa (posição de 15/10/2026)."
            },
            {
              "t": "big",
              "emoji": "🐢",
              "html": "A reforma <b>não vira de uma vez</b>.",
              "sub": "A mudança é gradual, de 2026 a 2033."
            },
            {
              "t": "p",
              "title": "Por que aos poucos?",
              "html": "Dá tempo de adaptar sistemas, preços e contratos. Esse calendário é a posição de <b>15/10/2026</b>. CBS é o novo imposto federal. IBS é o novo imposto de estado e município."
            },
            {
              "t": "big",
              "emoji": "🧪",
              "html": "2026 é ano de <b>teste</b>.",
              "sub": "Quem preenche os campos novos da nota não paga a mais por causa do teste."
            },
            {
              "t": "jargon",
              "term": "Obrigação acessória",
              "means": "Tarefa burocrática do imposto em que <b>você não paga nada</b>, tipo preencher os campos certos na nota fiscal.",
              "ex": "Em 2026, preencher CBS e IBS na nota é obrigação acessória."
            },
            {
              "t": "conta",
              "title": "Teste de 2026 numa venda de exemplo",
              "rows": [
                [
                  "Base da venda",
                  "R$ 1.000,00"
                ],
                [
                  "CBS destacada: 0,9%",
                  "R$ 9,00"
                ],
                [
                  "IBS destacado: 0,1%",
                  "R$ 1,00"
                ]
              ],
              "total": [
                "Destacado na nota",
                "R$ 10,00"
              ],
              "note": "No teste, esse valor é compensado (abatido) do PIS e da Cofins."
            },
            {
              "t": "big",
              "emoji": "🚀",
              "html": "2027: a <b>CBS começa de verdade</b>.",
              "sub": "PIS e Cofins acabam. A CBS vale com alíquota cheia, o percentual completo."
            },
            {
              "t": "list",
              "title": "Também em 2027",
              "items": [
                "IPI zerado (exceto Zona Franca de Manaus)",
                "Imposto Seletivo começa",
                "IBS fica em 0,1%"
              ]
            },
            {
              "t": "big",
              "emoji": "📈",
              "html": "De 2029 a 2032, o <b>IBS cresce</b>.",
              "sub": "ICMS e ISS caem na mesma proporção."
            },
            {
              "t": "p",
              "title": "Os degraus do IBS",
              "html": "O IBS sobe em degraus de <b>10%, 20%, 30% e 40%</b> do total. A cada degrau, o ICMS e o ISS encolhem na mesma medida."
            },
            {
              "t": "big",
              "emoji": "🏁",
              "html": "2033: só <b>IBS e CBS</b>.",
              "sub": "ICMS e ISS deixam de existir. Cobrança totalmente no destino."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "2026: teste",
                  "html": "CBS de 0,9% e IBS de 0,1% na nota."
                },
                {
                  "title": "2027: CBS cheia",
                  "html": "PIS e Cofins acabam. IPI zerado e Imposto Seletivo começa."
                },
                {
                  "title": "2029 a 2032: IBS sobe",
                  "html": "ICMS e ISS caem na mesma proporção."
                },
                {
                  "title": "2033: regime completo",
                  "html": "Só IBS e CBS, cobrados no destino."
                }
              ]
            },
            {
              "t": "quiz",
              "q": "Pelo calendário da aula, o que acontece com PIS e Cofins em 2027?",
              "options": [
                "São extintos, e a CBS passa a valer com alíquota cheia no lugar deles",
                "Continuam valendo até 2033, junto com a CBS, sem nenhuma mudança",
                "Passam a ser cobrados só de empresas do Simples Nacional e do MEI",
                "Viram um adicional do IBS e são pagos aos Estados a partir de 2027"
              ],
              "answer": [
                0
              ],
              "why": "Em 2027 PIS e Cofins acabam e a CBS entra com alíquota cheia. O IBS cresce de 2029 a 2032 e o regime completo chega em 2033."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "O que ainda é estimativa",
              "html": "A <b>alíquota total</b> (IBS e CBS somados) ainda não é definitiva. As estimativas oficiais têm ficado entre cerca de 26,5% e 28%. Nunca prometa percentual ao cliente: diga sempre “estimativa”."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Prazo que mexe com o cliente em 2026",
              "html": "O Simples Nacional (regime simplificado de pequenas empresas) tem janelas pra escolher como recolher IBS e CBS em 2027. Elas terminam no fim de outubro de 2026. Lendo depois? Confira no site do Comitê Gestor do Simples Nacional se há novas janelas."
            },
            {
              "t": "say",
              "title": "Fala assim pro cliente",
              "html": "“Vai mudando aos poucos, de 2026 a 2033. O percentual final ainda é estimativa, então não dá pra prometer número. Sobre regime e nota, a decisão é sua com o seu contador.”"
            },
            {
              "t": "recap",
              "items": [
                "2026 é teste; 2027 a CBS começa de verdade",
                "IBS cresce de 2029 a 2032",
                "2033: só IBS e CBS",
                "Alíquota total ainda é <b>estimativa</b>"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "rt-m2",
      "n": 2,
      "title": "O impacto nos marketplaces",
      "tagline": "Quando a plataforma responde, o que muda na nota, no caixa e em cada regime.",
      "outcome": "Explicar o papel do marketplace na reforma e o que nota fiscal, split payment e regime mudam para o vendedor.",
      "lessons": [
        {
          "id": "rt-l2-1",
          "title": "Quando o marketplace responde pelo imposto",
          "minutes": 6,
          "goal": "Dizer quando uma plataforma responde por IBS e CBS e o que isso muda para o vendedor.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🏪",
              "title": "O marketplace entrou na conta do imposto",
              "text": "Em 6 minutos você entende quando a plataforma responde pelo imposto da venda e o que isso muda pra quem vende."
            },
            {
              "t": "big",
              "emoji": "👀",
              "html": "Pela primeira vez, a lei fala em detalhe das <b>plataformas digitais</b>.",
              "sub": "Mercado Livre e Shopee entram na conversa."
            },
            {
              "t": "p",
              "title": "De onde vem a regra",
              "html": "Ela está no art. 22 da <b>LC 214</b> (Lei Complementar 214), com ajustes da <b>LC 227/2026</b>. A ideia: quem fica no meio da venda online e mexe no dinheiro ou na entrega passa a dividir a responsabilidade."
            },
            {
              "t": "big",
              "html": "A lei olha o que a plataforma <b>faz</b>, não o nome do site.",
              "sub": "É o chamado critério funcional."
            },
            {
              "t": "list",
              "title": "Ela intermedeia venda online e controla pelo menos 1 destes",
              "items": [
                "A <b>cobrança</b> da venda",
                "O <b>pagamento</b>",
                "Os <b>termos e condições</b> da venda (as regras do jogo)",
                "A <b>entrega</b>"
              ]
            },
            {
              "t": "p",
              "html": "Um site que só exibe anúncios não entra. Ele não cobra, não paga e não entrega. Sem controlar nenhum desses itens, não é a plataforma da regra."
            },
            {
              "t": "quiz",
              "q": "Um site de classificados só mostra anúncios. Não cobra, não recebe pagamento e não entrega. Como a lei trata esse site?",
              "options": [
                "Não é plataforma responsável: não controla cobrança, pagamento, termos nem entrega",
                "É plataforma responsável: qualquer site com anúncios de venda entra na regra",
                "É plataforma responsável, mas só pelas vendas feitas por vendedores de fora",
                "É plataforma responsável, mas só enquanto o vendedor estiver no Simples Nacional"
              ],
              "answer": [
                0
              ],
              "why": "A responsabilidade depende de a plataforma controlar ao menos um elemento essencial: cobrança, pagamento, termos e condições ou entrega. Só exibir anúncio não basta."
            },
            {
              "t": "jargon",
              "term": "Solidária",
              "means": "O fisco pode cobrar o imposto da plataforma <b>ou</b> do vendedor. Os dois respondem juntos pela mesma dívida.",
              "ex": "Se o imposto da venda não foi pago, a cobrança pode chegar na plataforma."
            },
            {
              "t": "compare",
              "left": {
                "title": "Vendedor no exterior",
                "tone": "bad",
                "items": [
                  "Plataforma responde junto com o comprador",
                  "E responde no lugar do vendedor de fora (substituta)"
                ]
              },
              "right": {
                "title": "Vendedor no Brasil",
                "tone": "good",
                "items": [
                  "Plataforma responde junto com o vendedor (solidária)",
                  "Quando o vendedor é contribuinte e não registra a venda em nota eletrônica",
                  "Ou quando a plataforma não manda as informações que a lei exige"
                ]
              }
            },
            {
              "t": "callout",
              "tone": "exemplo",
              "title": "Na prática, pro vendedor",
              "html": "A plataforma passa a ter <b>interesse direto</b> em ver nota fiscal emitida e cadastro regular em toda venda. Quem não emite nota vira risco pra ela."
            },
            {
              "t": "sim",
              "kind": "plataforma",
              "title": "Quem responde pelo imposto?",
              "intro": "Leia o cenário e aplique a regra do art. 22. Bora testar.",
              "rounds": 4
            },
            {
              "t": "p",
              "title": "E se a plataforma emitir a nota?",
              "html": "A LC 227/2026 abriu uma porta. A plataforma pode emitir os documentos fiscais e recolher IBS e CBS das vendas que intermedeia, <b>com o aval do fornecedor</b> (quem vende)."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Ainda não é certeza",
              "html": "Como isso será oferecido, e se será pra cada vendedor, depende de regulamentação e da política de cada plataforma. Na posição de 15/10/2026, espere comunicado oficial antes de prometer qualquer coisa."
            },
            {
              "t": "big",
              "emoji": "⚠️",
              "html": "Responsável <b>não é</b> isento.",
              "sub": "A plataforma responder junto não tira a obrigação do vendedor."
            },
            {
              "t": "compare",
              "left": {
                "title": "Plataforma",
                "tone": "good",
                "items": [
                  "Responde junto, nos casos da lei",
                  "Quer nota e cadastro regulares"
                ]
              },
              "right": {
                "title": "Vendedor continua",
                "tone": "bad",
                "items": [
                  "Sendo contribuinte",
                  "Precisando de cadastro e nota",
                  "Respondendo pelo imposto da venda dele"
                ]
              }
            },
            {
              "t": "say",
              "title": "Fala assim com o seller",
              "html": "“A plataforma passou a responder junto pelo imposto, então nota e cadastro em dia viraram prioridade. Mas a obrigação continua sua. Quem decide o regime e a nota é seu contador.”"
            },
            {
              "t": "recap",
              "items": [
                "Plataforma = quem controla cobrança, pagamento, termos ou entrega",
                "Só exibir anúncio não conta",
                "No Brasil, ela responde junto com o vendedor (solidária)",
                "Responsável não é isento: o vendedor segue obrigado"
              ]
            }
          ]
        },
        {
          "id": "rt-l2-2",
          "title": "Quando o imposto nasce e pra onde vai",
          "minutes": 6,
          "goal": "Identificar o momento em que nasce o imposto, para onde ele vai e o que muda na nota.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "📅",
              "title": "Em que mês o imposto da venda nasce?",
              "text": "Em 6 minutos você aprende a achar o mês do imposto, descobrir pra onde ele vai e saber o que muda na nota fiscal."
            },
            {
              "t": "big",
              "html": "Toda venda tem 3 perguntas de imposto.",
              "sub": "Quando ele nasce, pra quem vai e onde está escrito."
            },
            {
              "t": "jargon",
              "term": "Fato gerador",
              "means": "O momento em que o imposto <b>nasce</b>. A partir dele, existe a obrigação de pagar.",
              "ex": "É como o dia em que a conta é criada, mesmo que você pague depois."
            },
            {
              "t": "big",
              "html": "O imposto nasce no <b>fornecimento</b> ou no <b>pagamento</b>, o que vier primeiro.",
              "sub": "Fornecimento é a entrega do produto."
            },
            {
              "t": "p",
              "html": "No marketplace, o dinheiro costuma chegar antes de a mercadoria chegar no cliente. Por isso o imposto costuma nascer no <b>mês do pagamento</b>."
            },
            {
              "t": "conta",
              "title": "Caso 1: pagou antes de receber",
              "rows": [
                [
                  "Pagamento do comprador",
                  "20/03"
                ],
                [
                  "Entrega do produto",
                  "15/04"
                ],
                [
                  "O que veio primeiro",
                  "Pagamento"
                ]
              ],
              "total": [
                "Fato gerador em",
                "Março"
              ]
            },
            {
              "t": "conta",
              "title": "Caso 2: recebeu antes de pagar",
              "rows": [
                [
                  "Entrega do produto",
                  "10/04"
                ],
                [
                  "Pagamento do comprador",
                  "15/05"
                ],
                [
                  "O que veio primeiro",
                  "Entrega"
                ]
              ],
              "total": [
                "Fato gerador em",
                "Abril"
              ]
            },
            {
              "t": "sim",
              "kind": "fato",
              "title": "Em que mês nasce o imposto?",
              "intro": "Compare as datas de pagamento e de entrega. Quem vem primeiro manda.",
              "rounds": 3
            },
            {
              "t": "quiz",
              "q": "Um comprador paga no dia 28 de outubro e a mercadoria chega no dia 5 de novembro. Em que mês nasce o fato gerador?",
              "options": [
                "Em outubro: o pagamento veio antes da entrega",
                "Em novembro: só com a entrega a venda fica completa",
                "Dividido pela metade entre outubro e novembro",
                "No mês em que a nota fiscal for emitida, seja qual for"
              ],
              "answer": [
                0
              ],
              "why": "O fato gerador é o fornecimento ou o pagamento, o que ocorrer primeiro. Aqui o pagamento (28/10) veio antes da entrega (5/11)."
            },
            {
              "t": "jargon",
              "term": "Local da operação",
              "means": "O lugar pra onde o imposto <b>vai</b>. Cada tipo de venda tem uma regra pra achar esse lugar.",
              "ex": "Na cobrança no destino, é o endereço de quem recebe, não o de quem vende."
            },
            {
              "t": "list",
              "title": "Pra onde vai o imposto",
              "items": [
                "<b>Mercadoria móvel:</b> onde ela é entregue ou disponibilizada",
                "<b>Imóvel:</b> onde o imóvel está",
                "<b>Serviço feito pessoalmente:</b> onde o serviço é prestado",
                "<b>Eventos:</b> onde o evento acontece"
              ]
            },
            {
              "t": "big",
              "emoji": "📦",
              "html": "Pra quem vende em marketplace, vale a 1ª linha: o imposto segue o <b>endereço de entrega</b> do comprador."
            },
            {
              "t": "jargon",
              "term": "NF-e e NFC-e",
              "means": "A <b>nota fiscal eletrônica</b> (NF-e) e a nota ao consumidor (NFC-e). O leiaute delas ganhou campos novos de <b>IBS</b> e <b>CBS</b>.",
              "ex": "Em 2026, esses campos são preenchidos com alíquotas de teste.",
              "tag": "A nota fiscal"
            },
            {
              "t": "list",
              "title": "Campos de IBS e CBS na nota",
              "items": [
                "Fora do Simples (regime regular): exigido por lei desde <b>3 de agosto de 2026</b>",
                "Rejeição automática pela Sefaz (Fazenda do estado): adiada, sem data em 15/10/2026",
                "Simples e MEI: a partir de <b>2027</b>, pelas regras do Simples"
              ]
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Fica de olho nessa data",
              "html": "A Sefaz é quem vai <b>rejeitar</b> nota sem os campos novos. Essa data já foi adiada mais de uma vez. O contador e o ERP (sistema que emite a nota) dão a posição atualizada."
            },
            {
              "t": "say",
              "title": "Fala assim com o seller",
              "html": "“O imposto nasce quando o cliente paga ou quando você entrega, o que vier primeiro. E ele segue o endereço do comprador. Pra data da nota nova, vale falar com seu contador.”"
            },
            {
              "t": "recap",
              "items": [
                "Fato gerador: pagamento ou entrega, o que vier primeiro",
                "No marketplace, costuma ser o mês do pagamento",
                "O imposto segue o endereço de entrega do comprador",
                "Nota ganhou campos novos; datas, confirme com o contador"
              ]
            }
          ]
        },
        {
          "id": "rt-l2-3",
          "title": "Split payment: o imposto sai antes",
          "minutes": 6,
          "goal": "Explicar o split payment e o efeito dele no caixa de quem vende em marketplace.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "💸",
              "title": "O imposto sai antes de o dinheiro chegar",
              "text": "Em 6 minutos você entende o split payment, faz a conta com números de exemplo e vê o que muda no caixa do seller."
            },
            {
              "t": "big",
              "html": "E se o imposto fosse separado <b>no momento do pagamento</b>?",
              "sub": "É isso que o split payment faz."
            },
            {
              "t": "jargon",
              "term": "Split payment",
              "means": "“Pagamento dividido”. O comprador paga, o sistema financeiro separa <b>IBS e CBS</b>, manda pro governo e repassa o resto pro vendedor.",
              "ex": "O comprador paga R$ 250. Uma parte vai direto pro governo e você recebe o restante."
            },
            {
              "t": "compare",
              "left": {
                "title": "Hoje",
                "tone": "bad",
                "items": [
                  "Você recebe o valor cheio da venda",
                  "Apura o imposto no mês seguinte",
                  "Nesse intervalo, o dinheiro do imposto vira capital de giro"
                ]
              },
              "right": {
                "title": "Com split payment",
                "tone": "good",
                "items": [
                  "O imposto é separado na hora do pagamento",
                  "Você recebe o valor líquido",
                  "O intervalo entre receber e pagar o imposto some"
                ]
              }
            },
            {
              "t": "conta",
              "title": "Venda de exemplo (alíquota só de exemplo)",
              "rows": [
                [
                  "Preço base do produto",
                  "R$ 200,00"
                ],
                [
                  "Imposto por fora (25% de exemplo)",
                  "R$ 50,00"
                ],
                [
                  "Comprador paga",
                  "R$ 250,00"
                ],
                [
                  "Separado pro governo",
                  "- R$ 50,00",
                  "neg"
                ]
              ],
              "total": [
                "Chega pra você, antes de comissão e frete",
                "R$ 200,00"
              ],
              "note": "Conta: 25% de R$ 200,00 = R$ 50,00. R$ 250,00 - R$ 50,00 = R$ 200,00."
            },
            {
              "t": "big",
              "html": "Os R$ 50 são <b>20%</b> do que o cliente pagou, não 25%.",
              "sub": "R$ 50 ÷ R$ 250 = 20%. Imposto por fora é % da base."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Regra de bolso",
              "html": "Pra saber quanto o split separa, divida o imposto pelo <b>preço final</b> pago, não pelo preço base."
            },
            {
              "t": "sim",
              "kind": "split",
              "title": "Quanto vai pro governo no split?",
              "intro": "O comprador pagou o preço final, que já inclui o imposto por fora (alíquota de exemplo). Descubra quanto é separado.",
              "rounds": 3
            },
            {
              "t": "jargon",
              "term": "Capital de giro",
              "means": "O dinheiro que você usa pra <b>manter o negócio rodando</b>, como repor estoque e pagar fornecedor.",
              "ex": "Hoje, o imposto do mês fica no seu caixa até a hora de apurar e pagar."
            },
            {
              "t": "conta",
              "title": "O que some do caixa (conta de exemplo)",
              "rows": [
                [
                  "Vendas no mês",
                  "100"
                ],
                [
                  "Imposto de exemplo por venda",
                  "R$ 50,00"
                ]
              ],
              "total": [
                "Dinheiro que não passa mais pelo seu caixa",
                "R$ 5.000,00"
              ],
              "note": "Conta: 100 vendas x R$ 50,00. Antes, esse valor ficava com você até pagar o imposto."
            },
            {
              "t": "quiz",
              "q": "Qual é o principal efeito do split payment no caixa de quem hoje usa o imposto do mês como capital de giro?",
              "options": [
                "Recebe o valor líquido, sem a parte do imposto, e perde o prazo de giro",
                "Recebe o valor cheio e paga o imposto só um ano depois, o que melhora o caixa",
                "Continua recebendo tudo e o governo cobra o imposto do comprador depois",
                "Nada muda pra ele, porque o imposto é sempre recolhido pelo banco do comprador"
              ],
              "answer": [
                0
              ],
              "why": "No split, o imposto é separado quando o pagamento é liquidado. O vendedor recebe o líquido e perde o intervalo entre receber a venda e pagar o imposto."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "O que está definido",
              "html": "A lei prevê implantação <b>gradual</b> do split. Ela será definida em ato conjunto do Comitê Gestor do IBS e da Receita Federal. Em alguns casos, ele é <b>facultativo</b> (opcional)."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "O que ainda não está",
              "html": "Em 15/10/2026, a operação do split nas vendas B2C (pra consumidor final) em marketplaces não estava detalhada em regra única. Trate como <b>tendência</b>, não como data marcada."
            },
            {
              "t": "p",
              "title": "E a plataforma, faz o quê?",
              "html": "Quando ela inicia o pagamento, deve passar as informações pro imposto ser separado no split. Isso vale desde que o mecanismo esteja disponível."
            },
            {
              "t": "p",
              "html": "Se a plataforma <b>separa e recolhe certo</b> e cumpre os deveres de informação, ela fica protegida. Ela não responde pela diferença entre o que recolheu e o que o vendedor deveria ter declarado."
            },
            {
              "t": "list",
              "title": "Por que o caixa muda",
              "items": [
                "Quem gira estoque com o imposto do mês vai ter menos caixa",
                "A conta de capital de giro precisa tirar o dinheiro que antes ficava com você",
                "Crédito (imposto das compras que você abate) só vale se o fornecedor recolheu",
                "O split deixa esse crédito mais confiável"
              ]
            },
            {
              "t": "say",
              "title": "Fala assim com o seller",
              "html": "“O split ainda não tem data fechada, mas é a tendência. Quando vier, o imposto sai na hora e o dinheiro de giro fica menor. Vale revisar o caixa com seu contador.”"
            },
            {
              "t": "recap",
              "items": [
                "Split: imposto separado na hora do pagamento",
                "Você recebe o líquido, sem o intervalo de giro",
                "Imposto por fora é % do preço base, não do final",
                "Em 15/10/2026, ainda sem regra única pro B2C: é tendência"
              ]
            }
          ]
        },
        {
          "id": "rt-l2-4",
          "title": "Simples, MEI ou regime regular?",
          "minutes": 6,
          "goal": "Comparar Simples e MEI com o regime regular de IBS e CBS e dizer o que muda em cada um.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧭",
              "title": "Simples, MEI ou regime regular?",
              "text": "Em 6 minutos você vê o que muda em cada regime e quando a opção pelo regime regular pode (ou não) fazer sentido."
            },
            {
              "t": "big",
              "html": "A maioria de quem vende em marketplace é <b>MEI</b> ou do <b>Simples</b>.",
              "sub": "Por isso essa aula pesa tanto na sua rotina."
            },
            {
              "t": "jargon",
              "term": "Simples Nacional e DAS",
              "means": "O Simples junta vários impostos numa <b>guia única</b>, o DAS. Com a reforma, o DAS passa a embutir IBS e CBS.",
              "ex": "Você paga um boleto só, e dentro dele já vão os tributos do regime."
            },
            {
              "t": "jargon",
              "term": "MEI",
              "means": "<b>Microempreendedor Individual</b>, o menor porte de empresa. Também usa o DAS e <b>não muda de regime</b> por causa da reforma.",
              "ex": "O MEI segue como está, mas passa a destacar IBS e CBS na nota a partir de 2027."
            },
            {
              "t": "compare",
              "left": {
                "title": "Simples Nacional e MEI",
                "tone": "good",
                "items": [
                  "Seguem com a guia única (DAS), agora com IBS e CBS dentro",
                  "Não tomam crédito de IBS e CBS nas compras dentro do regime",
                  "Destacam IBS e CBS na nota a partir de 2027",
                  "O MEI não muda de regime"
                ]
              },
              "right": {
                "title": "Regime regular",
                "tone": "bad",
                "items": [
                  "Paga IBS e CBS por fora do Simples",
                  "Apura débito menos crédito",
                  "Tem crédito sobre compras e despesas com nota",
                  "Já preenche os campos de IBS e CBS na nota"
                ]
              }
            },
            {
              "t": "jargon",
              "term": "Regime regular",
              "means": "O jeito de apurar imposto <b>fora do Simples</b>: Lucro Presumido ou Lucro Real. Aqui, IBS e CBS são pagos por fora.",
              "ex": "Calcula o imposto das vendas e abate o imposto das compras."
            },
            {
              "t": "big",
              "html": "Dentro do Simples dá pra <b>optar</b> pelo regime regular só de IBS e CBS.",
              "sub": "Os outros tributos continuam no Simples."
            },
            {
              "t": "compare",
              "left": {
                "title": "Vende pra empresa (B2B)",
                "tone": "good",
                "items": [
                  "Comprador quer o crédito integral",
                  "Pode valer simular a opção com o contador"
                ]
              },
              "right": {
                "title": "Vende pra consumidor final",
                "tone": "bad",
                "items": [
                  "Comprador não toma crédito",
                  "Quase sempre a opção não faz sentido"
                ]
              }
            },
            {
              "t": "quiz",
              "q": "Um vendedor do Simples vende só pra consumidor final no Mercado Livre e na Shopee. Em regra, o que a orientação deve considerar sobre optar pelo regime regular de IBS e CBS?",
              "options": [
                "Em geral não compensa: o consumidor final não aproveita crédito e a carga costuma subir",
                "Compensa sempre: o regime regular reduz o imposto de qualquer vendedor do Simples",
                "É obrigatório pra quem vende em marketplace, seja qual for o faturamento",
                "Compensa: o consumidor final passa a abater o imposto no Imposto de Renda"
              ],
              "answer": [
                0
              ],
              "why": "O ganho do regime regular é o crédito pra quem compra de você. Consumidor final não toma crédito, então a mudança em geral só aumenta a carga. Quem simula cada caso é o contador."
            },
            {
              "t": "jargon",
              "term": "Crédito",
              "means": "O IBS e a CBS que o <b>comprador empresa</b> abate do imposto que ele mesmo vai pagar, por ter comprado de você.",
              "ex": "É um desconto no imposto dele, que só vale quando o imposto foi de fato recolhido."
            },
            {
              "t": "conta",
              "title": "Comprador é empresa do regime regular",
              "rows": [
                [
                  "Venda do seller do Simples, pra empresa",
                  "R$ 1.000,00"
                ],
                [
                  "IBS e CBS destacados na nota (exemplo)",
                  "R$ 60,00"
                ]
              ],
              "total": [
                "Crédito que a empresa compradora aproveita",
                "R$ 60,00"
              ],
              "note": "Só vale o que foi recolhido dentro do Simples e destacado na nota. Valores de exemplo."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Por que isso pesa no B2B",
              "html": "Em venda pra empresa, o <b>regime do vendedor</b> pode pesar na negociação. O comprador olha quanto crédito vai levar. Já no consumidor final, esse peso quase não existe."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Prazos de 2026: confira antes",
              "html": "A escolha vale pro <b>ano inteiro</b> e há janelas em 2026 pra decidir 2027. Na posição de 15/10/2026, a janela ia até <b>30/10/2026</b>, com nova janela prevista pra março de 2027. Confira no Portal do Simples e com o contador."
            },
            {
              "t": "say",
              "title": "Fala assim com o seller",
              "html": "“Quem vende pra consumidor final quase sempre fica melhor no Simples, porque o cliente não usa crédito. Mas é seu contador que simula e decide, e ele confere os prazos.”"
            },
            {
              "t": "recap",
              "items": [
                "Simples e MEI: guia única (DAS) com IBS e CBS dentro",
                "Regime regular: débito menos crédito, por fora do Simples",
                "Consumidor final não toma crédito: opção quase nunca compensa",
                "Prazos e decisão: sempre com o contador"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "rt-m3",
      "n": 3,
      "title": "O dia a dia de quem vende",
      "tagline": "Cadastro, preço, margem, nota fiscal e o que acompanhar em cada plataforma.",
      "outcome": "Listar o que o seller (vendedor) precisa ajustar na operação e no preço, e o que depende de comunicado da plataforma.",
      "lessons": [
        {
          "id": "rt-l3-1",
          "title": "Cadastro em dia, sem susto",
          "minutes": 5,
          "goal": "Saber o que o vendedor precisa ter em dia pra vender sem risco depois da reforma.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🗂️",
              "title": "Cadastro em dia: o que conferir",
              "text": "Em 5 minutos você vê o que o vendedor precisa ter em dia pra vender sem risco depois da reforma."
            },
            {
              "t": "big",
              "emoji": "⏳",
              "html": "Antes dava pra deixar o cadastro <b>pra depois</b>. Agora não.",
              "sub": "A plataforma passa a responder junto, então a regularidade do vendedor pesa mais."
            },
            {
              "t": "p",
              "title": "Cadastro único: CNPJ e CPF",
              "html": "O IBS e a CBS são os dois impostos novos sobre o consumo. O cadastro nacional deles é o <b>CNPJ</b> (registro da empresa) ou o <b>CPF</b> (registro da pessoa). A inscrição estadual e a municipal perdem importância."
            },
            {
              "t": "jargon",
              "term": "Contribuinte",
              "means": "Quem a lei considera responsável pelo imposto: quem vende de forma <b>habitual</b>, em volume de atividade econômica, ou de forma <b>profissional</b>.",
              "ex": "Vender dezenas de produtos todo dia na internet não é “vender uns itens usados”."
            },
            {
              "t": "big",
              "emoji": "👀",
              "html": "O que decide é o <b>jeito e o volume</b> da venda, não o CNPJ.",
              "sub": "Pessoa física que vende sempre pode ser contribuinte."
            },
            {
              "t": "list",
              "title": "Dados em ordem",
              "items": [
                "CNPJ ativo, sem pendência no cadastro",
                "Razão social (nome oficial da empresa) igual à da plataforma",
                "Endereço igual ao do cadastro na plataforma",
                "Nota fiscal em toda venda que a lei exige",
                "Sem nota, sobra risco pro vendedor e pra plataforma"
              ]
            },
            {
              "t": "jargon",
              "term": "Regime",
              "means": "O jeito como a empresa paga imposto: <b>MEI</b> (microempreendedor individual), <b>Simples</b> ou regime regular.",
              "ex": "MEI e Simples têm limite de faturamento. Passou do limite, o regime muda."
            },
            {
              "t": "compare",
              "left": {
                "title": "Dentro do limite",
                "tone": "good",
                "items": [
                  "Faturamento dentro do limite do MEI",
                  "Faturamento dentro do sublimite do Simples",
                  "Regime atual segue valendo"
                ]
              },
              "right": {
                "title": "Estourou o limite",
                "tone": "bad",
                "items": [
                  "MEI com faturamento acima do limite",
                  "Simples com sublimite estourado",
                  "Muda o regime e isso afeta nota e imposto"
                ]
              }
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "O que a assessoria não decide",
              "html": "Abrir CNPJ, sair do MEI pra microempresa ou trocar de regime é decisão <b>contábil</b>. A assessoria avisa o risco e encaminha pro contador, não escolhe pelo cliente. Vale pra posição de 15/10/2026."
            },
            {
              "t": "list",
              "title": "Sinais de alerta no cliente",
              "items": [
                "Vende com CPF todo mês e nunca emitiu nota",
                "O CNPJ está inativo ou com pendência no cadastro",
                "Não sabe qual é o regime tributário",
                "Não tem contador, ou o contador nunca falou de reforma"
              ]
            },
            {
              "t": "say",
              "emoji": "💬",
              "title": "Fala assim com o cliente",
              "html": "“Vi que você vende todo mês no CPF e nunca emitiu nota. Isso pode virar risco com a reforma. Vou te ajudar a levar a dúvida pro seu contador, que decide o caminho.”"
            },
            {
              "t": "quiz",
              "q": "Uma pessoa física vende dezenas de produtos por dia na Shopee, sem CNPJ e sem nota. Qual é o ponto de atenção mais importante?",
              "options": [
                "Nenhum: pessoa física nunca é contribuinte de IBS e CBS, não importa o volume que venda",
                "Só o risco de a Shopee tirar o anúncio do ar, coisa que não tem relação com imposto",
                "Venda habitual em volume de atividade econômica já a torna contribuinte, com cadastro e nota",
                "É só escolher entre CPF e CNPJ pra receber o dinheiro, sem consequência fiscal nenhuma"
              ],
              "answer": [
                2
              ],
              "why": "A lei define contribuinte pela habitualidade e pelo volume, não por ter CNPJ. Quem vende direto e em volume de atividade econômica deve se cadastrar e emitir nota."
            },
            {
              "t": "recap",
              "items": [
                "Cadastro nacional: CNPJ ou CPF",
                "Venda habitual em volume de empresa pode fazer contribuinte",
                "Dados iguais aos da plataforma e nota em toda venda exigida",
                "Abrir CNPJ ou trocar de regime: o contador decide",
                "Sinais de alerta: sem nota, CNPJ inativo, sem contador"
              ]
            }
          ]
        },
        {
          "id": "rt-l3-2",
          "title": "Como a reforma mexe na sua margem",
          "minutes": 7,
          "goal": "Entender como a reforma mexe na conta de preço e margem em cada regime.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧮",
              "title": "A reforma mexe no seu preço e na margem",
              "text": "Você vê quais partes da conta de margem mudam, com exemplos de números, e por que ninguém promete quanto o preço vai subir."
            },
            {
              "t": "big",
              "emoji": "➕",
              "html": "Margem é conta de <b>mais e de menos</b>.",
              "sub": "Preço menos imposto, comissão, frete e custo."
            },
            {
              "t": "conta",
              "title": "Margem de um anúncio (exemplo)",
              "rows": [
                [
                  "Preço de venda",
                  "R$ 80,00"
                ],
                [
                  "Imposto",
                  "- R$ 8,00",
                  "neg"
                ],
                [
                  "Comissão da plataforma",
                  "- R$ 12,00",
                  "neg"
                ],
                [
                  "Frete",
                  "- R$ 10,00",
                  "neg"
                ],
                [
                  "Custo do produto",
                  "- R$ 35,00",
                  "neg"
                ]
              ],
              "total": [
                "Sobra (margem)",
                "R$ 15,00"
              ],
              "note": "Números inventados, só pra mostrar a lógica. Cada anúncio tem os seus."
            },
            {
              "t": "big",
              "emoji": "🎯",
              "html": "A reforma mexe em <b>duas partes</b> dessa conta.",
              "sub": "O imposto e, no regime regular, os créditos."
            },
            {
              "t": "jargon",
              "term": "Crédito",
              "means": "O imposto pago nas compras da sua atividade, que você <b>abate</b> do imposto da venda.",
              "ex": "Compras de R$ 60 com imposto de exemplo de 25% geram R$ 15 de crédito."
            },
            {
              "t": "jargon",
              "term": "Alíquota efetiva",
              "means": "O percentual de imposto que a empresa <b>de fato paga</b> sobre a venda, com tudo somado.",
              "ex": "No Simples, é uma alíquota única, em vez de um imposto para cada coisa."
            },
            {
              "t": "p",
              "title": "No Simples e no MEI",
              "html": "A carga é a do Simples: uma alíquota efetiva única, que a reforma ajusta por dentro. O vendedor <b>não toma crédito</b> de comissão, frete ou embalagem."
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Regra de bolso: Simples e MEI",
              "html": "Sem crédito. A tarefa é conferir com o contador se a alíquota efetiva usada na conta de margem <b>continua certa</b>."
            },
            {
              "t": "p",
              "title": "No regime regular",
              "html": "Regime regular é o que fica fora do Simples e do MEI. Aqui o vendedor pode abater o imposto pago nas compras que usa pra vender. A margem passa a olhar o imposto <em>líquido</em> (o que sobra depois dos créditos)."
            },
            {
              "t": "list",
              "title": "O que pode virar crédito",
              "items": [
                "Mercadoria pra revenda",
                "Embalagens",
                "Frete contratado",
                "Comissão do marketplace (o % que a plataforma cobra)",
                "Só com nota que destaque o imposto e etapa anterior que recolheu"
              ]
            },
            {
              "t": "conta",
              "title": "Imposto líquido (exemplo)",
              "rows": [
                [
                  "Imposto na venda (base R$ 100 × 25%)",
                  "R$ 25,00",
                  "neg"
                ],
                [
                  "Crédito: mercadoria (base R$ 30)",
                  "- R$ 7,50",
                  "pos"
                ],
                [
                  "Crédito: frete (base R$ 10)",
                  "- R$ 2,50",
                  "pos"
                ],
                [
                  "Crédito: comissão (base R$ 15)",
                  "- R$ 3,75",
                  "pos"
                ],
                [
                  "Crédito: embalagem (base R$ 5)",
                  "- R$ 1,25",
                  "pos"
                ]
              ],
              "total": [
                "Imposto líquido",
                "R$ 10,00"
              ],
              "note": "Compras de R$ 60 de base dão R$ 15 de crédito. A alíquota de 25% é só exemplo, não a final."
            },
            {
              "t": "sim",
              "kind": "credito",
              "title": "Débito, créditos e imposto líquido",
              "intro": "Bora praticar: some o crédito de cada compra e calcule o imposto líquido da venda.",
              "rounds": 3
            },
            {
              "t": "quiz",
              "q": "Um vendedor do regime regular paga comissão ao marketplace, contrata frete e compra embalagens, tudo com nota e imposto destacado. O que isso muda na margem?",
              "options": [
                "Nenhuma dessas despesas gera crédito, porque são serviços e não mercadorias",
                "Pode haver crédito sobre essas compras, o que reduz o imposto líquido pago na venda",
                "O crédito só existe pra mercadoria de revenda, nunca pra frete, comissão ou embalagem",
                "O imposto dessas despesas é cobrado em dobro e sai da conta da margem"
              ],
              "answer": [
                1
              ],
              "why": "No regime regular, o imposto pago nas compras ligadas à atividade, com nota e recolhimento na etapa anterior, pode ser abatido. Vale pra serviços, como comissão e frete, e pra insumos, como embalagem."
            },
            {
              "t": "jargon",
              "term": "Imposto “por fora”",
              "means": "O imposto é somado <b>em cima</b> da base. O preço ao consumidor é a base mais o imposto.",
              "ex": "Base de R$ 100 mais imposto de R$ 25 (alíquota de exemplo) dá R$ 125 pro consumidor."
            },
            {
              "t": "big",
              "emoji": "🐢",
              "html": "A mudança é <b>gradual</b>. A conta não vira de um dia pro outro.",
              "sub": "Acompanhe 2027 e 2029."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Recalcule a margem",
              "html": "Mudou a alíquota efetiva ou o regime do cliente? A margem precisa ser <b>recalculada</b>. Na PriceBot (a ferramenta de preço e margem), a regra de imposto fica na tela Impostos e entra na conta da margem. Atualize ali."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Sem promessa de preço",
              "html": "Não existe resposta única do tipo “o preço vai subir X%”. O efeito depende do regime, do produto, do que o vendedor compra e da alíquota final, que em 15/10/2026 ainda não está fixada. Use simulação com os números do cliente, nunca média."
            },
            {
              "t": "say",
              "emoji": "💬",
              "title": "Fala assim com o cliente",
              "html": "“Não dá pra cravar quanto o preço muda. Vou simular com os seus números: regime, produtos e compras. A alíquota final ainda não foi fixada, então a conta é uma estimativa.”"
            },
            {
              "t": "recap",
              "items": [
                "Margem: preço menos imposto, comissão, frete e custo",
                "Simples e MEI: sem crédito, confira a alíquota efetiva",
                "Regime regular: crédito reduz o imposto líquido",
                "Recalcule a margem quando regime ou alíquota mudar",
                "Nada de promessa de preço: simule com os números do cliente"
              ]
            }
          ]
        },
        {
          "id": "rt-l3-3",
          "title": "Mercado Livre e Shopee: o que é certo",
          "minutes": 5,
          "goal": "Separar o que a lei já diz do que depende de comunicado de cada plataforma.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🔎",
              "title": "Lei ou plataforma: quem decide o quê?",
              "text": "Você aprende a separar o que a lei já diz do que só a plataforma pode informar, pra não passar nada errado pro cliente."
            },
            {
              "t": "big",
              "emoji": "💳",
              "html": "Mercado Livre e Shopee controlam o <b>pagamento</b>.",
              "sub": "Via Mercado Pago e ShopeePay. Em muitas vendas, também a entrega e os termos da venda."
            },
            {
              "t": "jargon",
              "term": "Plataforma",
              "means": "Pela lei, o marketplace que controla o <b>pagamento</b> ou a <b>entrega</b> (ou os termos da venda). Ele responde junto pelo imposto.",
              "ex": "Pelo critério da lei, Mercado Livre e Shopee tendem a se enquadrar aqui."
            },
            {
              "t": "compare",
              "left": {
                "title": "A lei já define",
                "tone": "good",
                "items": [
                  "Plataforma que controla pagamento ou entrega responde junto pelo imposto",
                  "Responsabilidade solidária (os dois respondem) com vendedor contribuinte sem nota eletrônica",
                  "Plataforma deve prestar informações sobre as operações",
                  "Split payment (imposto separado no pagamento): gradual, facultativo em alguns casos"
                ]
              },
              "right": {
                "title": "Depende da plataforma",
                "tone": "bad",
                "items": [
                  "Como o vendedor autoriza ou não a emissão de nota pela plataforma",
                  "Que dados cadastrais e fiscais serão pedidos, e em que prazo",
                  "O que acontece com a conta de quem estiver irregular",
                  "Como o imposto aparece no extrato e nos relatórios de venda"
                ]
              }
            },
            {
              "t": "jargon",
              "term": "Split payment",
              "means": "O imposto é separado <b>na hora do pagamento</b>, e o vendedor recebe só o valor líquido.",
              "ex": "Do valor pago pelo comprador, a parte do imposto já vai pro governo e o resto segue o repasse normal."
            },
            {
              "t": "big",
              "emoji": "📢",
              "html": "O que cada plataforma exige, e quando, sai em <b>comunicado</b>.",
              "sub": "Não invente política do Mercado Livre nem da Shopee."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Cuidado com notícia de blog",
              "html": "Tem muito conteúdo dizendo o que o Mercado Livre e a Shopee “vão fazer”: suspender contas, reter pagamentos, emitir notas. Parte é opinião do autor, não regra publicada. <b>Só ensine o que a lei diz ou o que a plataforma comunicou.</b>"
            },
            {
              "t": "list",
              "title": "Onde acompanhar",
              "items": [
                "Comunicados e central do vendedor (área de ajuda) de cada plataforma",
                "Portal do Comitê Gestor do IBS (quem administra o IBS) e da Receita Federal",
                "O contador do cliente e o emissor de notas (ERP) que ele usa",
                "Portal do Simples Nacional, pros prazos de opção"
              ]
            },
            {
              "t": "p",
              "title": "As duas se parecem no imposto",
              "html": "Pro imposto, as duas funcionam parecido. O vendedor cadastra o produto e o comprador paga na plataforma. Depois de comissão e taxas, o valor é repassado (cai na conta do vendedor)."
            },
            {
              "t": "big",
              "emoji": "🔁",
              "html": "A diferença que importa é a <b>política de cada uma</b>.",
              "sub": "Nota fiscal, cadastro e repasse. Muda com o tempo; esta aula vale pra 15/10/2026."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "1. Ler o comunicado",
                  "html": "Direto na central do vendedor ou no aviso oficial da plataforma."
                },
                {
                  "title": "2. Anotar a data",
                  "html": "Registre o dia em que saiu. A regra pode mudar com o tempo."
                },
                {
                  "title": "3. Levar ao contador",
                  "html": "Ele decide o que fazer com a informação, caso a caso."
                }
              ]
            },
            {
              "t": "say",
              "emoji": "💬",
              "title": "Fala assim com o cliente",
              "html": "“Vi essa notícia, mas não achei comunicado oficial do Mercado Livre sobre isso. Até sair, trato como não confirmada. Vou acompanhar a central do vendedor e te aviso.”"
            },
            {
              "t": "quiz",
              "q": "Um cliente leu num blog que “o Mercado Livre vai suspender todas as contas sem nota fiscal em janeiro”. Qual é a atitude certa da assessoria?",
              "options": [
                "Confirmar pro cliente que a suspensão vai rolar em janeiro, pra ele se preparar",
                "Dizer que só vale pra Shopee e que no Mercado Livre não acontece nada",
                "Ignorar o assunto, porque regra de plataforma nunca tem relação com a reforma",
                "Buscar o comunicado oficial e, sem ele, tratar a notícia como não confirmada"
              ],
              "answer": [
                3
              ],
              "why": "A assessoria só repassa o que a lei prevê ou o que a plataforma comunicou. Notícia sem fonte oficial fica como não confirmada."
            },
            {
              "t": "recap",
              "items": [
                "Quem controla pagamento ou entrega responde junto",
                "A lei define o básico, o resto vem de comunicado",
                "Não invente política do Mercado Livre nem da Shopee",
                "Notícia sem fonte oficial: não confirmada",
                "Na dúvida: ler, anotar a data, levar ao contador"
              ]
            }
          ]
        },
        {
          "id": "rt-l3-4",
          "title": "Roteiro de preparação em 6 passos",
          "minutes": 5,
          "goal": "Conseguir aplicar um roteiro de preparação em ordem, do cadastro ao acompanhamento.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "✅",
              "title": "Roteiro de preparação: do cadastro ao acompanhamento",
              "text": "Você sai com um passo a passo de 6 etapas que dá pra usar com qualquer cliente, numa reunião de 20 minutos."
            },
            {
              "t": "big",
              "emoji": "🗺️",
              "html": "Um roteiro só, pra <b>qualquer cliente</b>.",
              "sub": "Não depende de regime e cabe numa reunião de 20 minutos."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "1. Confirmar o regime",
                  "html": "MEI (microempreendedor individual), Simples ou regime regular? Peça o regime atual e o nome do contador."
                },
                {
                  "title": "2. Conferir cadastro e CNPJ",
                  "html": "CNPJ ativo e dados iguais aos da plataforma. Pessoa física que vende sempre vai pro contador."
                },
                {
                  "title": "3. Conferir a nota fiscal",
                  "html": "O emissor de notas está pronto pros campos de IBS e CBS? Toda venda que exige nota tem nota?"
                }
              ]
            },
            {
              "t": "jargon",
              "term": "Emissor de notas",
              "means": "O sistema (ERP) que o cliente usa pra emitir as notas fiscais das vendas.",
              "ex": "Ele precisa estar atualizado pros campos novos de IBS e CBS, os dois impostos novos."
            },
            {
              "t": "big",
              "emoji": "1️⃣",
              "html": "Primeiro o <b>regime</b>. Só depois a conta.",
              "sub": "Sem regime e contador, qualquer cálculo pode estar errado."
            },
            {
              "t": "quiz",
              "q": "Na primeira conversa de preparação com um cliente, qual passo vem antes de qualquer cálculo de margem ou de preço?",
              "options": [
                "Reajustar todos os preços dos anúncios pra absorver o imposto novo",
                "Pedir pro cliente mudar pro regime regular antes de 2027",
                "Parar de emitir nota até saber a alíquota final da reforma",
                "Confirmar o regime tributário atual e quem é o contador do cliente"
              ],
              "answer": [
                3
              ],
              "why": "Sem saber o regime e quem responde pela parte contábil, qualquer conta ou orientação pode estar errada. É o primeiro passo do roteiro."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "4. Revisar a margem",
                  "html": "Atualize o imposto no preço e na margem quando o contador informar nova alíquota efetiva ou troca de regime."
                },
                {
                  "title": "5. Planejar o caixa",
                  "html": "Se o split payment chegar, o vendedor recebe o líquido. Calcule quanto do capital de giro vinha do imposto retido."
                },
                {
                  "title": "6. Marcar o acompanhamento",
                  "html": "Anote prazos, como as janelas do Simples, e defina quem revisa a cada trimestre."
                }
              ]
            },
            {
              "t": "jargon",
              "term": "Split payment",
              "means": "O imposto é separado <b>na hora do pagamento</b>, e o vendedor recebe só o valor líquido.",
              "ex": "Se chegar, o dinheiro do imposto deixa de passar pelo caixa do vendedor."
            },
            {
              "t": "jargon",
              "term": "Capital de giro",
              "means": "O dinheiro que a empresa usa pra girar o dia a dia: pagar fornecedor, comprar estoque, cobrir despesas.",
              "ex": "Se o imposto fica retido um mês, é um mês de dinheiro à mão pro giro."
            },
            {
              "t": "conta",
              "title": "Imposto retido por 1 mês (exemplo)",
              "rows": [
                [
                  "Vendas do mês (base)",
                  "R$ 50.000,00"
                ],
                [
                  "Imposto líquido por R$ 100 de base",
                  "R$ 10,00",
                  "neg"
                ]
              ],
              "total": [
                "Imposto retido no mês",
                "R$ 5.000,00"
              ],
              "note": "Estimativa com números de exemplo. O valor real depende do regime, dos créditos e da alíquota final."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Ainda é estimativa",
              "html": "Em 15/10/2026, a alíquota final ainda não está fixada e o split payment é gradual. A conta acima é <b>estimativa</b>. Quem decide regime e nota é o contador."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "O resultado esperado",
              "html": "Ao fim, o cliente sai com 3 coisas. Primeira: o <b>regime confirmado</b>. Segunda: uma <b>lista curta de pendências</b>, com responsável e prazo. Terceira: o contador acionado."
            },
            {
              "t": "say",
              "emoji": "💬",
              "title": "Fala assim com o cliente",
              "html": "“Antes de falar de preço, me conta: qual é o seu regime hoje e quem é o seu contador? Com isso eu consigo te orientar sem chutar.”"
            },
            {
              "t": "recap",
              "items": [
                "Primeiro regime e contador, depois a conta",
                "Cadastro, CNPJ e nota fiscal em dia",
                "Margem recalculada quando o contador avisar mudança",
                "Caixa: split payment mexe no capital de giro",
                "Marcar prazos e quem revisa a cada trimestre"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "rt-m4",
      "n": 4,
      "title": "Como orientar o cliente",
      "tagline": "Roteiro de conversa, perguntas de diagnóstico e casos de cada perfil de cliente.",
      "outcome": "Conduzir uma conversa de orientação sem assustar, sem prometer e sem passar da linha do contador.",
      "lessons": [
        {
          "id": "rt-l4-1",
          "title": "O que dizer e o que não dizer",
          "minutes": 5,
          "goal": "Usar uma linguagem honesta, calma e dentro do papel da assessoria.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "💬",
              "title": "Como falar de reforma sem assustar",
              "text": "Em poucos minutos você aprende o que dizer, o que evitar e como responder às três perguntas que todo cliente faz."
            },
            {
              "t": "big",
              "emoji": "😬",
              "html": "O cliente chega com <b>medo</b> ou com <b>pressa</b>.",
              "sub": "“Vão cobrar mais imposto?” ou “já preciso mudar tudo?”"
            },
            {
              "t": "list",
              "title": "Três perguntas que você vai ouvir",
              "items": [
                "“O imposto vai subir?”",
                "“Preciso mudar de regime?”",
                "“A plataforma vai me bloquear?”"
              ]
            },
            {
              "t": "big",
              "html": "Seu papel: manter a <b>calma</b> e levar a decisão pro <b>contador</b>.",
              "sub": "Mostre o que já é certo e o que ainda não é."
            },
            {
              "t": "compare",
              "left": {
                "title": "Faça (informação)",
                "tone": "good",
                "items": [
                  "Diga a data: “em 15/10/2026 estava assim”",
                  "Separe o que é lei do que é estimativa"
                ]
              },
              "right": {
                "title": "Evite (informação)",
                "tone": "bad",
                "items": [
                  "Dizer o que a plataforma “vai fazer” sem comunicado",
                  "Assustar com multa ou suspensão sem fonte"
                ]
              }
            },
            {
              "t": "compare",
              "left": {
                "title": "Faça (decisão)",
                "tone": "good",
                "items": [
                  "Usar os números do cliente pra simular",
                  "Encaminhar regime e nota pro contador"
                ]
              },
              "right": {
                "title": "Evite (decisão)",
                "tone": "bad",
                "items": [
                  "Prometer percentual de aumento ou de redução",
                  "Recomendar que o cliente mude de regime"
                ]
              }
            },
            {
              "t": "jargon",
              "term": "Regime",
              "means": "O jeito como a empresa paga imposto: <b>MEI</b>, <b>Simples</b>, <b>Presumido</b> ou <b>Real</b>. Quem decide é o contador.",
              "ex": "Duas lojas com o mesmo faturamento podem ter contas bem diferentes só por estarem em regimes diferentes."
            },
            {
              "t": "jargon",
              "term": "Alíquota",
              "means": "O percentual de imposto aplicado sobre o valor da venda.",
              "ex": "Alíquota de 25% (só exemplo) sobre uma base de R$ 100 dá R$ 25 de imposto."
            },
            {
              "t": "callout",
              "tone": "atencao",
              "title": "Não prometa percentual",
              "html": "Em 15/10/2026 a alíquota final ainda não estava fixada. As estimativas oficiais ficavam entre cerca de 26,5% e 28% (IBS e CBS, os dois impostos novos, somados). O efeito pro cliente depende do regime, das compras e da alíquota final."
            },
            {
              "t": "conta",
              "title": "Mesma venda, imposto diferente (exemplo)",
              "rows": [
                [
                  "Base da venda",
                  "R$ 100,00"
                ],
                [
                  "Imposto da venda (25%, só exemplo)",
                  "R$ 25,00",
                  "neg"
                ],
                [
                  "Crédito das compras (25% de R$ 60,00)",
                  "R$ 15,00",
                  "pos"
                ]
              ],
              "total": [
                "Imposto líquido (regime regular)",
                "R$ 10,00"
              ],
              "note": "Sem compras com nota, o crédito seria zero e o imposto líquido seria R$ 25,00. Por isso não existe percentual único."
            },
            {
              "t": "say",
              "title": "Se perguntar: “o imposto vai subir?”",
              "html": "“Depende do seu regime e do que você compra, e a alíquota final ainda não foi fixada. No Simples, vendendo pra consumidor final, a mudança maior é na nota fiscal. Vamos simular com seus números e levar pro seu contador.”"
            },
            {
              "t": "say",
              "title": "Se perguntar: “preciso mudar de regime?”",
              "html": "“Essa decisão é do seu contador. O que eu posso fazer é mostrar como a sua margem fica com cada alíquota e levar a simulação pra ele.”"
            },
            {
              "t": "say",
              "title": "Se perguntar: “a plataforma vai me bloquear?”",
              "html": "“A lei põe a plataforma como responsável junto com o vendedor, por isso a regularidade ganha peso. Não conheço regra publicada de bloqueio. Vou olhar o comunicado oficial e te aviso.”"
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Regra de bolso",
              "html": "Informação sempre com data. Lei separada de estimativa. Número só com simulação. Regime e nota são decisão do contador."
            },
            {
              "t": "quiz",
              "q": "O cliente pergunta: “o imposto sobre as minhas vendas vai subir 10% no ano que vem?”. Qual resposta está mais correta?",
              "options": [
                "Depende do regime e do que ele compra, e a alíquota final ainda não foi fixada",
                "Garantir que não sobe nada, porque a reforma é neutra pra todo vendedor",
                "Confirmar que sobe 10%, que é a média citada nos blogs de e-commerce",
                "Dizer que só sobe no Mercado Livre, porque a Shopee não é atingida"
              ],
              "answer": [
                0
              ],
              "why": "Não existe percentual único: o efeito depende do regime, das compras e da alíquota final. Prometer número, pra mais ou pra menos, é arriscado."
            },
            {
              "t": "recap",
              "items": [
                "Dê a data de cada informação",
                "Separe lei de estimativa",
                "Nunca prometa percentual de imposto",
                "Regime e nota: decisão do contador",
                "Da plataforma, só o que ela comunicou"
              ]
            }
          ]
        },
        {
          "id": "rt-l4-2",
          "title": "Seis perguntas pra abrir a conversa",
          "minutes": 5,
          "goal": "Conduzir a conversa inicial com as perguntas que realmente mudam a orientação.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🔎",
              "title": "Seis perguntas que organizam a conversa",
              "text": "Você aprende o que perguntar ao cliente, por que cada pergunta importa e como registrar as respostas."
            },
            {
              "t": "big",
              "emoji": "📝",
              "html": "Não precisa de planilha. <b>Seis perguntas</b> já mudam a orientação.",
              "sub": "Cada resposta joga o cliente num grupo diferente."
            },
            {
              "t": "jargon",
              "term": "Regime",
              "means": "O jeito como a empresa paga imposto: <b>MEI</b>, <b>Simples</b>, <b>Presumido</b> ou <b>Real</b>.",
              "ex": "Ele define se haverá crédito, como a nota é destacada e quais prazos importam."
            },
            {
              "t": "say",
              "title": "Perguntas 1 e 2: regime e comprador",
              "html": "“Qual é o seu regime hoje: MEI, Simples, Presumido ou Real? E você vende mais pra consumidor final ou pra empresa?”"
            },
            {
              "t": "jargon",
              "term": "Crédito",
              "means": "O imposto pago nas suas compras, que você abate do imposto da venda. Vale pro regime regular, com nota e imposto recolhido.",
              "ex": "Se na compra veio R$ 15 de imposto na nota, esse valor abate o imposto da sua venda."
            },
            {
              "t": "p",
              "title": "Por que perguntar isso",
              "html": "Empresa do regime regular quer crédito na compra. Consumidor final não toma crédito. Por isso a resposta sobre o comprador muda a orientação."
            },
            {
              "t": "say",
              "title": "Perguntas 3 e 4: nota fiscal",
              "html": "“Você emite nota em toda venda? E como emite: pelo ERP, pelo emissor da plataforma ou pelo contador?”"
            },
            {
              "t": "jargon",
              "term": "ERP",
              "means": "Sistema de gestão que o cliente usa pra controlar vendas e estoque. Muitas vezes é por ele que a nota sai.",
              "ex": "Se a nota sai pelo ERP, ele precisa estar atualizado com os campos de IBS e CBS."
            },
            {
              "t": "p",
              "title": "Por que perguntar isso",
              "html": "Quem não emite nota está mais exposto e expõe a plataforma. Quem emite precisa de um emissor atualizado para os campos de IBS e CBS."
            },
            {
              "t": "say",
              "title": "Perguntas 5 e 6: caixa e contador",
              "html": "“Quanto do seu caixa do mês vem do imposto que você ainda não pagou? E o seu contador está acompanhando a reforma?”"
            },
            {
              "t": "jargon",
              "term": "Split payment",
              "means": "O imposto é separado na hora que o comprador paga. O governo recebe a parte dele e o vendedor recebe o restante.",
              "ex": "Compra de R$ 125 com R$ 25 de imposto (exemplo): R$ 25 vão pro governo e R$ 100 pro vendedor."
            },
            {
              "t": "conta",
              "title": "Efeito no caixa em um mês (exemplo)",
              "rows": [
                [
                  "Vendas no mês",
                  "400"
                ],
                [
                  "Cobrado do comprador por venda",
                  "R$ 125,00"
                ],
                [
                  "Total cobrado (400 × R$ 125,00)",
                  "R$ 50.000,00"
                ],
                [
                  "Imposto separado (400 × R$ 25,00)",
                  "R$ 10.000,00",
                  "neg"
                ]
              ],
              "total": [
                "Fica com o vendedor",
                "R$ 40.000,00"
              ],
              "note": "Alíquota de exemplo, sem créditos. Hoje esses R$ 10.000 ficam no caixa até apurar o imposto, no mês seguinte. O real depende do regime."
            },
            {
              "t": "p",
              "title": "Por que perguntar isso",
              "html": "A pergunta 5 mostra o tamanho do impacto de um eventual split. Em 15/10/2026 ele não estava detalhado pra vendas pro consumidor final em marketplace: é tendência, não data marcada. Sem contador, o primeiro passo é achar um."
            },
            {
              "t": "callout",
              "tone": "dica",
              "title": "Registre a conversa",
              "html": "Anote as respostas e a data. Se a regra mudar depois, você sabe o que foi dito e qual era a posição naquele momento."
            },
            {
              "t": "quiz",
              "q": "Um cliente do Simples vende só pra consumidor final, emite nota em toda venda pelo ERP e tem contador ativo. Qual é o melhor encaminhamento?",
              "options": [
                "Confirmar com ERP e contador os campos de IBS e CBS pra 2027 e revisar a margem",
                "Pedir que mude pro regime regular pra tomar crédito das compras e da comissão",
                "Dizer que está pronto e que não precisa mais acompanhar nem revisar a margem",
                "Pedir que pare de emitir nota até o fisco fixar a alíquota final"
              ],
              "answer": [
                0
              ],
              "why": "O perfil está bem encaminhado, mas ainda pede acompanhamento: ERP pronto pros novos campos e margem revisada conforme a alíquota efetiva do Simples."
            },
            {
              "t": "recap",
              "items": [
                "Seis perguntas separam os clientes em grupos",
                "Regime e tipo de comprador definem o crédito",
                "Nota e emissor precisam dos campos de IBS e CBS",
                "Sem contador? O primeiro passo é achar um",
                "Anote as respostas com a data"
              ]
            }
          ]
        },
        {
          "id": "rt-l4-3",
          "title": "Três perfis de cliente",
          "minutes": 7,
          "goal": "Aplicar o roteiro em três perfis comuns e saber o que priorizar em cada um.",
          "blocks": [
            {
              "t": "hook",
              "emoji": "🧩",
              "title": "Três perfis, três prioridades",
              "text": "Você aprende a reconhecer os perfis mais comuns de cliente e o que priorizar na conversa com cada um."
            },
            {
              "t": "big",
              "html": "Quase todo cliente cai em <b>um de três perfis</b>.",
              "sub": "Cada perfil pede um foco diferente."
            },
            {
              "t": "list",
              "title": "Os três perfis",
              "items": [
                "<b>A:</b> MEI ou Simples pequeno, só consumidor final",
                "<b>B:</b> Simples médio, que também vende pra empresas",
                "<b>C:</b> regime regular, que compra pra revender"
              ]
            },
            {
              "t": "jargon",
              "term": "B2B e B2C",
              "means": "<b>B2B</b> é venda de empresa pra empresa. <b>B2C</b> é venda de empresa pro consumidor final.",
              "ex": "Vender 20 caixas pra uma loja é B2B. Vender uma unidade pra quem vai usar é B2C."
            },
            {
              "t": "list",
              "title": "Perfil A: MEI ou Simples pequeno",
              "items": [
                "Maior risco: vender sem nota ou com CNPJ irregular",
                "Prioridade: cadastro em dia e emissor de nota atualizado",
                "Não há crédito a discutir, e a margem muda pouco",
                "Encaminhar ao contador os prazos do Simples"
              ]
            },
            {
              "t": "say",
              "title": "Fala assim pro perfil A",
              "html": "“O seu maior risco hoje é vender sem nota ou com cadastro irregular. Vamos conferir o CNPJ, atualizar o emissor de notas e levar ao seu contador os prazos do Simples.”"
            },
            {
              "t": "list",
              "title": "Perfil B: Simples médio, também vende pra empresas",
              "items": [
                "Comprador empresa pode querer crédito integral",
                "Vale simular a opção pelo regime regular de IBS e CBS",
                "Decisão e prazo ficam com o contador",
                "A assessoria prepara os números da simulação"
              ]
            },
            {
              "t": "say",
              "title": "Fala assim pro perfil B",
              "html": "“Seus compradores empresa podem querer crédito integral. Vamos simular o regime regular de IBS e CBS com os seus números. Quem decide e define o prazo é o seu contador.”"
            },
            {
              "t": "compare",
              "left": {
                "title": "Faça com o perfil B",
                "tone": "good",
                "items": [
                  "Simular com os números do cliente",
                  "Entregar a simulação pronta ao contador"
                ]
              },
              "right": {
                "title": "Evite com o perfil B",
                "tone": "bad",
                "items": [
                  "Mandar o cliente mudar de regime sozinho",
                  "Cravar prazo de opção sem checar com o contador"
                ]
              }
            },
            {
              "t": "list",
              "title": "Perfil C: regime regular (revenda)",
              "items": [
                "Mais afetado: PIS, Cofins e ICMS saem, entram IBS e CBS com crédito",
                "Prioridade: créditos de mercadoria, frete, comissão e embalagem",
                "Revisar a margem produto a produto, não pela média",
                "Planejar o caixa por causa do split payment"
              ]
            },
            {
              "t": "conta",
              "title": "Crédito do perfil C (exemplo)",
              "rows": [
                [
                  "Base da venda",
                  "R$ 100,00"
                ],
                [
                  "Imposto da venda (25%, só exemplo)",
                  "R$ 25,00",
                  "neg"
                ],
                [
                  "Compras com nota: mercadoria, frete, comissão, embalagem",
                  "R$ 60,00"
                ],
                [
                  "Crédito (25% de R$ 60,00)",
                  "R$ 15,00",
                  "pos"
                ]
              ],
              "total": [
                "Imposto líquido",
                "R$ 10,00"
              ],
              "note": "Crédito só vale com nota e imposto recolhido na etapa anterior. Alíquota de exemplo: a real ainda será fixada."
            },
            {
              "t": "say",
              "title": "Fala assim pro perfil C",
              "html": "“Pra você, o ponto é o crédito: mercadoria, frete, comissão e embalagem com nota. Vamos revisar a margem produto a produto e planejar o caixa, porque o split payment separa o imposto na hora do pagamento.”"
            },
            {
              "t": "compare",
              "left": {
                "title": "Vale pros três",
                "tone": "good",
                "items": [
                  "Confirmar regime e contador",
                  "Registrar a data de cada orientação",
                  "Seguir só comunicados oficiais da plataforma",
                  "Revisar a cada trimestre"
                ]
              },
              "right": {
                "title": "Não vale pra nenhum",
                "tone": "bad",
                "items": [
                  "Orientar sem saber o regime",
                  "Deixar sem data o que foi dito",
                  "Repetir notícia de blog como regra",
                  "Esquecer a revisão"
                ]
              }
            },
            {
              "t": "conta",
              "title": "Loja Norte (exemplo): Simples, no ML e na Shopee",
              "rows": [
                [
                  "Vendas no mês",
                  "R$ 100.000,00"
                ],
                [
                  "Consumidor final (85%)",
                  "R$ 85.000,00"
                ],
                [
                  "Empresas (15%)",
                  "R$ 15.000,00"
                ]
              ],
              "total": [
                "Fatia que pede simulação",
                "R$ 15.000,00"
              ],
              "note": "Os valores são fictícios. O foco da simulação do regime regular é a fatia B2B, não a loja inteira."
            },
            {
              "t": "steps",
              "items": [
                {
                  "title": "Manter o Simples",
                  "html": "Provável, pela fatia de 85% de consumidor final."
                },
                {
                  "title": "Simular o regime regular",
                  "html": "Só pros 15% de vendas pra empresas."
                },
                {
                  "title": "Atualizar o emissor de notas",
                  "html": "Pra os campos de IBS e CBS."
                }
              ]
            },
            {
              "t": "callout",
              "tone": "regra",
              "title": "Quem faz o quê",
              "html": "A decisão é do contador. A simulação sai da assessoria. Prazos de opção mudam: confira no Portal do Simples e com o contador antes de orientar."
            },
            {
              "t": "sim",
              "kind": "plataforma",
              "title": "Treino de casos",
              "intro": "Hora de praticar: mais quatro cenários sobre quem responde pelo imposto.",
              "rounds": 4
            },
            {
              "t": "quiz",
              "q": "A Loja Sul é do Simples e vende 95% pra consumidor final no marketplace e 5% pra empresas. Qual orientação faz mais sentido?",
              "options": [
                "Manter o Simples e, com o contador, simular o regime regular só pros 5% B2B",
                "Mudar já pro regime regular, porque as empresas compradoras vão exigir",
                "Largar as vendas pra empresas e vender só pra consumidor final",
                "Esperar 2033, ano em que o regime regular vira obrigatório pra todos"
              ],
              "answer": [
                0
              ],
              "why": "Com 95% das vendas pra consumidor final, o regime regular quase nunca compensa. A simulação só confere se os 5% B2B justificam alguma mudança, e a decisão é do contador."
            },
            {
              "t": "recap",
              "items": [
                "A: foco em nota e cadastro em dia",
                "B: simular o regime regular, contador decide",
                "C: créditos, margem por produto e caixa",
                "Registre a data de cada orientação",
                "Siga só comunicados oficiais"
              ]
            }
          ]
        }
      ]
    }
  ]
});

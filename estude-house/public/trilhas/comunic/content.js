/* Conteúdo da trilha "Comunicação e rotina de trabalho" (Formação Mamba, para Assessores e Gestores de Performance), em formato Stories.
   Cada item de `blocks` é um card de tela cheia. Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, recap, quiz, sim
   e os visuais chart, flow, table, tree, timeline, stairs, anno e lab (veja GUIA-STORIES.md).
   Assessor Estratégico e Gestor de Performance são funções com rotinas diferentes e o mesmo nível de conhecimento: não há escada entre elas.
   Todos os números das contas e dos gráficos são de exemplo. Regras de plataforma, taxas e impostos mudam: a fonte final é a documentação oficial e o contador do cliente.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
 "id": "comunic",
 "title": "Comunicação e rotina de trabalho",
 "finalScope": "final-comunic",
 "finalSize": 12,
 "tag": "Formação",
 "tagline": "Escrever claro, contar a história do dado, conduzir o cliente e manter rotina e ética.",
 "subtitle": "Formação Mamba, em stories, para Assessores e Gestores de Performance.",
 "modules": [
  {
   "id": "gf-m14",
   "n": 1,
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como escrever pro cliente leigo?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Uma ordem fixa evita confusão."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Contexto → o que houve → o que fazemos → o que precisamos. Número antes de adjetivo."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "A ata sai com decisão, dono e prazo."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como contar a história do dado?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Número sem contexto não convence."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Número + contexto + tendência. Prometa prazo, resultado e risco juntos."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "A planilha vai de anexo, e a história vai no texto."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como conduzir uma conversa difícil?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Conduza com dado, motivo e plano."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Escute, resuma, resolva. Feedback em 4 passos: fato, efeito, pedido, combinado."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "A decisão do cliente fica registrada."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Como sustentar a conta no dia a dia?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Cadência cria previsibilidade."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Rotina diária, semanal, mensal e trimestral. Delegar é passar objetivo, prazo e checagem."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Senha e dado de cliente nunca circulam no chat."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
         "Avisar o líder assim que errar com um dado."
        ]
       }
      },
      {
       "t": "callout",
       "tone": "atencao",
       "title": "Errou ou vazou? Avise na hora",
       "html": "Esconder piora tudo. Avise o líder logo, diga o que aconteceu e o que já foi feito. Corrigir rápido protege o cliente, a Mamba e você."
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
        "Perguntar ao líder se ele gostou do formato, porque se o líder entendeu o cliente também vai entender"
       ],
       "answer": [
        0
       ],
       "why": "O teste é o olhar do leigo: sem jargão solto, com ação e pedido claros. Mais abas, mais termos técnicos ou a opinião do líder não garantem que o cliente entenda."
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

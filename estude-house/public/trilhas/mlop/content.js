/* Conteúdo da trilha "Operação no Mercado Livre" (Formação Mamba, para Assessores e Gestores de Performance), em formato Stories.
   Cada item de `blocks` é um card de tela cheia. Tipos de card: hook, big, p, list, steps, compare, callout, say, jargon, conta, recap, quiz, sim
   e os visuais chart, flow, table, tree, timeline, stairs, anno e lab (veja GUIA-STORIES.md).
   Assessor Estratégico e Gestor de Performance são funções com rotinas diferentes e o mesmo nível de conhecimento: não há escada entre elas.
   Todos os números das contas e dos gráficos são de exemplo. Regras de plataforma, taxas e impostos mudam: a fonte final é a documentação oficial e o contador do cliente.
   A lista de módulos e aulas precisa bater com netlify/functions/lib/manifest.mjs (o teste `npm test` confere). */
(window.TRILHAS = window.TRILHAS || []).push({
 "id": "mlop",
 "title": "Operação no Mercado Livre",
 "finalScope": "final-mlop",
 "finalSize": 12,
 "tag": "Mercado Livre",
 "tagline": "Conta, reputação, pós-venda, pedidos e programas: o dia a dia de quem opera o ML.",
 "subtitle": "Formação Mamba, em stories, para Assessores e Gestores de Performance.",
 "modules": [
  {
   "id": "gf-m3",
   "n": 1,
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "A conta está pronta pra vender e receber sem travar?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Os dados da conta precisam bater com os documentos, e cada pessoa tem o acesso mínimo da função."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Checklist de 5 minutos: titular, Mercado Pago, contato, usuários e certificações."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você corrige o que trava e opera com usuário próprio, nunca com a senha do cliente."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
        "Guardar a senha numa planilha do time para qualquer pessoa do time poder entrar quando precisar na conta",
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Por que um anúncio bom perde visibilidade?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Reputação é proporção: problemas ÷ vendas."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Taxa de problema = (reclamações + atrasos + cancelamentos) ÷ vendas. Ache o indicador pior."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você corrige a causa e olha o termômetro toda semana, antes de a cor mudar."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Defendo ou cedo numa reclamação?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "O que decide é o custo total de cada caminho, reputação incluída."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Compare: ceder custa o frete de volta; brigar sem prova e perder custa o valor do pedido + o frete."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Com prova, defenda. Com erro seu, ceda rápido, em tom firme e humano."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Onde o pedido atrasa ou é cancelado?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Atraso e cancelamento caem direto na reputação."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Siga o funil do pedido: venda → embalagem → etiqueta → despacho no prazo e veja onde a barra cai."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você sincroniza o estoque, confere o preço e avisa o cliente antes que ele pergunte."
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
       "t": "flow",
       "title": "A linha de raciocínio da aula",
       "items": [
        {
         "icon": "❓",
         "title": "A pergunta",
         "text": "Por que esta conta perdeu visibilidade?"
        },
        {
         "icon": "🧠",
         "title": "O princípio",
         "text": "Reputação boa abre benefícios; auditar é checar as causas em ordem."
        },
        {
         "icon": "🧮",
         "title": "O método",
         "text": "Ordem: reputação → pedidos e estoque → anúncio e preço → Ads e benefícios. Priorize por impacto ÷ esforço."
        },
        {
         "icon": "✅",
         "title": "A decisão",
         "text": "Você monta o plano com ação, responsável, prazo e métrica."
        }
       ],
       "caption": "Se você consegue contar estes 4 passos com as suas palavras, entendeu a aula."
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
  }
 ]
});

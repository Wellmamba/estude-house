/* Versões dos quizzes da trilha "Dados, diagnóstico e plano de conta". A cada "tentar de novo" o aluno recebe outra versão. */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
 "gf-l12-1": [
  [
   "base",
   {
    "q": "Na planilha de vendas falta o custo de cada SKU, que está em outra aba. Qual recurso resolve sem copiar custo por custo?",
    "options": [
     "Usar SOMASE para somar todos os custos da outra aba em cada linha de venda",
     "Usar tabela dinâmica só nas vendas, que traz o custo de qualquer aba sozinha",
     "Usar PROCX com o SKU como chave para buscar o custo na outra aba",
     "Usar SEERRO nas linhas de venda, que preenche o custo ausente com o valor certo"
    ],
    "answer": [
     2
    ],
    "why": "O PROCX procura a chave (o SKU) na outra aba e traz o custo da linha encontrada. SOMASE soma, a tabela dinâmica resume e o SEERRO só troca o erro por um aviso."
   },
   {
    "q": "O PROCX devolveu #N/D em várias linhas de SKU. Qual é a causa mais provável para investigar primeiro?",
    "options": [
     "A tabela dinâmica da aba de vendas está resumindo linhas demais ao mesmo tempo",
     "O SKU da venda não aparece igual na tabela de custos, por espaço ou formato diferente",
     "O painel ainda não foi atualizado com as vendas mais recentes do portal",
     "A fórmula SOMASE foi usada no lugar do SE na coluna da margem do relatório"
    ],
    "answer": [
     1
    ],
    "why": "#N/D quer dizer que a chave não foi encontrada. O mais comum é o SKU estar escrito diferente nas duas tabelas, com espaço sobrando, letra trocada ou formato de número."
   },
   {
    "q": "Qual afirmação sobre o PROCX está errada?",
    "options": [
     "Ele procura uma chave, como o SKU, numa tabela de referência",
     "Ele traz o valor de outra coluna na mesma linha da chave encontrada",
     "Ele serve para buscar o custo de cada SKU numa tabela de custos",
     "Ele soma sozinho todas as linhas da tabela que tenham a mesma chave"
    ],
    "answer": [
     3
    ],
    "why": "Somar linhas que batem com um critério é função do SOMASE. O PROCX só busca uma chave e devolve o valor que está ao lado dela."
   }
  ],
  [
   "base",
   {
    "q": "Qual painel semanal de conta ajuda mais o seller a decidir?",
    "options": [
     "Seis números fixos, com comparação com a semana anterior e uma frase de leitura",
     "Trinta gráficos novos a cada semana, para o seller escolher o que olhar",
     "Apenas o faturamento do mês, atualizado só quando o seller pedir a análise",
     "Uma planilha bruta com todos os pedidos, para o seller montar as contas dele"
    ],
    "answer": [
     0
    ],
    "why": "Painel bom tem poucos números, na mesma ordem, comparados com o período anterior e com uma leitura. Gráficos demais ou dados brutos jogam o trabalho de interpretar no seller."
   },
   {
    "q": "O seller reclama que o painel muda de ordem toda semana e ele se perde. O que ajustar?",
    "options": [
     "Incluir mais gráficos para ele ter mais opções de leitura a cada semana",
     "Trocar a ferramenta do painel, porque o problema vem sempre do Looker Studio",
     "Fixar a ordem e o formato dos números, para ele comparar semana com semana",
     "Enviar só o resultado final do mês, para ele não ter o que comparar"
    ],
    "answer": [
     2
    ],
    "why": "A força do painel está na repetição: mesma ordem e mesmo formato todo período. Assim o seller aprende a ler e vê rápido o que mudou."
   },
   {
    "q": "Qual afirmação sobre painéis (dashboards) está errada?",
    "options": [
     "O painel puxa dados da planilha e atualiza os números sem refazer a conta toda vez",
     "O painel deve ter poucos números, ligados a decisões da conta",
     "Comparar com a semana anterior ajuda a ver o que subiu e o que caiu",
     "O painel pode ficar sem margem, porque a venda já mostra se a conta vai bem"
    ],
    "answer": [
     3
    ],
    "why": "Venda alta pode vir com margem baixa ou negativa. Por isso o painel de conta leva a margem junto com vendas, conversão, Ads, reputação e estoque."
   }
  ]
 ],
 "gf-l12-2": [
  [
   "base",
   {
    "q": "O seller diz: “O ROAS está ótimo, então a conta vai bem.” O que você responde?",
    "options": [
     "Concordo, porque ROAS alto é sempre sinal de que as vendas estão crescendo",
     "ROAS isolado engana; cruzo com vendas totais, gasto e margem antes de concluir",
     "Concordo, porque o ROAS é o único indicador que precisa ser olhado numa conta de marketplace",
     "Discordo, porque o ROAS não tem relação com o Ads e só mede o preço médio"
    ],
    "answer": [
     1
    ],
    "why": "O ROAS sobe quando o gasto cai mais que a venda, mesmo com a conta vendendo menos. Por isso ele é lido junto com vendas, gasto e margem."
   },
   {
    "q": "Num exemplo, a semana 1 teve Ads de R$ 800 e vendas com Ads de R$ 4.000. Na semana 2, Ads de R$ 200 e vendas com Ads de R$ 1.400. Qual afirmação é correta?",
    "options": [
     "O ROAS ficou em 5x nas duas semanas, e as vendas com Ads caíram R$ 2.600",
     "O ROAS subiu de 5x para 7x, mas as vendas com Ads caíram R$ 2.600",
     "O ROAS caiu de 5x para 1,4x, porque as vendas com Ads diminuíram",
     "O ROAS subiu de 5x para 7x, e as vendas com Ads também subiram R$ 600"
    ],
    "answer": [
     1
    ],
    "why": "Semana 1: 4.000 ÷ 800 = 5x. Semana 2: 1.400 ÷ 200 = 7x. O ROAS subiu, mas as vendas com Ads foram de R$ 4.000 para R$ 1.400: queda de R$ 2.600."
   },
   {
    "q": "Qual conjunto de números dá a melhor leitura de uma queda de vendas?",
    "options": [
     "Somente as vendas da semana, porque elas já mostram qual foi a causa",
     "Somente o ROAS, porque ele resume tráfego, preço e estoque em um número",
     "Vendas, visitas, conversão e gasto com Ads, comparados com a semana anterior",
     "Somente as visitas, porque conversão e Ads não explicam queda de vendas"
    ],
    "answer": [
     2
    ],
    "why": "Cruzar vendas, tráfego, conversão e gasto mostra onde a cadeia quebrou. Uma métrica sozinha só descreve o sintoma ou esconde o problema."
   }
  ],
  [
   "base",
   {
    "q": "Num exemplo, as visitas caíram 25%, a conversão ficou igual e o preço não mudou. Onde olhar primeiro?",
    "options": [
     "Fotos e preço do concorrente, que mudam a decisão de compra do visitante",
     "Ads, posição do anúncio e sazonalidade, que mudam a quantidade de visitas",
     "Reputação do vendedor, porque ela só afeta quem já está dentro do anúncio",
     "Ticket médio, porque ele mede quantas pessoas chegam até o anúncio"
    ],
    "answer": [
     1
    ],
    "why": "Se a conversão ficou igual, quem chegou comprou na mesma proporção. O que mudou foi a quantidade de visitas, então o tráfego (Ads, posição, época do ano) é o primeiro suspeito."
   },
   {
    "q": "Num exemplo, os pedidos de um SKU zeraram, mas os outros SKUs seguem normais. Qual é a primeira checagem?",
    "options": [
     "Se a sazonalidade do mês mudou o comportamento de toda a loja",
     "Se o ROAS geral da conta caiu em relação à semana anterior",
     "Se a conversão média da loja inteira ficou abaixo da meta do mês",
     "Se o estoque desse SKU acabou ou se o anúncio foi pausado"
    ],
    "answer": [
     3
    ],
    "why": "Problema que atinge um SKU só aponta para algo específico dele: ruptura de estoque ou anúncio pausado. Fatores gerais da loja afetariam vários SKUs."
   },
   {
    "q": "Num exemplo, os pedidos ficaram iguais, mas o faturamento caiu. O que isso sugere investigar?",
    "options": [
     "Desconto aplicado ou mudança no mix, com mais pedidos de produtos baratos",
     "Queda de tráfego, porque pedidos iguais sempre significam menos visitas no anúncio",
     "Ruptura de estoque, porque pedidos iguais indicam produtos sem saída",
     "Problema de reputação, porque ele reduz o número de pedidos recebidos"
    ],
    "answer": [
     0
    ],
    "why": "Se o número de pedidos não mudou, o valor de cada pedido (o ticket) caiu. Isso vem de desconto ou de um mix com mais itens de preço baixo."
   }
  ]
 ],
 "gf-l12-3": [
  [
   "base",
   {
    "q": "Qual frase descreve uma causa raiz, e não um sintoma?",
    "options": [
     "O faturamento da semana ficou 30% abaixo do faturamento da semana anterior",
     "As visitas do anúncio principal caíram em relação ao mês passado",
     "A reposição do SKU principal não foi pedida a tempo e o estoque zerou",
     "A conversão da loja ficou menor do que a meta definida para o mês"
    ],
    "answer": [
     2
    ],
    "why": "Faturamento, visitas e conversão menores são o que você observa nos números: sintomas. A reposição que não foi pedida é o motivo que, corrigido, evita que o problema volte."
   },
   {
    "q": "O seller pede: “só dá um jeito de as vendas subirem”. O que melhor guia o diagnóstico?",
    "options": [
     "Subir o investimento em Ads de imediato, porque Ads corrige qualquer queda",
     "Descobrir o que causou a queda, porque corrigir só o número não resolve",
     "Baixar todos os preços, porque preço menor sempre traz as vendas de volta",
     "Esperar duas semanas, porque quedas de vendas costumam voltar sozinhas"
    ],
    "answer": [
     1
    ],
    "why": "Sem achar a causa, você aplica um remédio qualquer e o problema pode voltar ou piorar. Ads, desconto geral ou espera podem até custar caro e não atacar o motivo."
   },
   {
    "q": "Qual afirmação sobre causa raiz está errada?",
    "options": [
     "Ela é o motivo de verdade por trás do sintoma observado",
     "Corrigida a causa raiz, o problema não deve voltar",
     "Para achá-la, vale perguntar “por quê?” várias vezes, nível por nível",
     "Corrigir o sintoma faz a causa raiz desaparecer sozinha"
    ],
    "answer": [
     3
    ],
    "why": "Se você só corrige o sintoma, a causa continua lá e o problema volta. A causa raiz precisa ser atacada diretamente."
   }
  ],
  [
   "base",
   {
    "q": "Qual hipótese tem teste e critério claros?",
    "options": [
     "A concorrência está mais forte; espero o mês acabar e vejo se a queda continua",
     "Algo no anúncio piorou; mudo título, fotos e preço juntos e acompanho o resultado",
     "Ruptura derrubou o SKU principal; vejo se os dias sem estoque batem com a queda",
     "O algoritmo mudou; deixo tudo igual e torço para ele voltar ao normal em breve"
    ],
    "answer": [
     2
    ],
    "why": "A boa hipótese afirma uma causa específica (ruptura), diz qual dado checar (dias sem estoque) e o que esperar (bater com a queda). As outras são vagas ou não testam nada."
   },
   {
    "q": "Você testou uma hipótese e os dados mostraram que ela não explica a queda. O que fazer?",
    "options": [
     "Descartar, anotar o que viu e testar a próxima hipótese da árvore",
     "Insistir nela, ajustando o critério até os números confirmarem a ideia",
     "Parar o diagnóstico, porque sem hipótese confirmada não há como seguir",
     "Escolher outra métrica só para provar a mesma hipótese de outro jeito"
    ],
    "answer": [
     0
    ],
    "why": "Descartar também é resultado: reduz a lista de suspeitos. Forçar o critério para confirmar a ideia é viés e leva a uma causa errada."
   },
   {
    "q": "Duas hipóteses: A é provável e leva 10 minutos para testar; B é improvável e leva 2 dias. Qual testar primeiro?",
    "options": [
     "B, porque o que dá mais trabalho costuma ser a causa mais importante",
     "As duas ao mesmo tempo, mudando o máximo de coisas para ganhar tempo",
     "Nenhuma, até ter certeza absoluta de qual das duas é a causa da queda",
     "A, porque é barata e provável; B só entra se A for descartada"
    ],
    "answer": [
     3
    ],
    "why": "Teste barato e provável vem primeiro: você aprende rápido e economiza tempo. Mudar muitas coisas de uma vez impede de saber o que realmente funcionou."
   }
  ]
 ],
 "gf-l12-4": [
  [
   "base",
   {
    "q": "Um SKU curva A tem margem de 2%. Qual leitura é mais útil?",
    "options": [
     "Ele pesa no faturamento, mas rende pouco; vale revisar preço e custos",
     "Ele deve sair do catálogo hoje, porque margem baixa nunca compensa",
     "Ele é o melhor SKU da conta, porque a curva A define o maior lucro",
     "Ele não importa, porque a curva ABC não considera o faturamento"
    ],
    "answer": [
     0
    ],
    "why": "Curva A diz que o SKU pesa no faturamento. Margem de 2% diz que rende pouco. A ação é revisar preço, custos e Ads, e não cortar nem exaltar o SKU."
   },
   {
    "q": "Num exemplo, o SKU X fatura R$ 3.000 com margem de 10% e o SKU Y fatura R$ 1.500 com margem de 30%. Qual gera mais lucro?",
    "options": [
     "O SKU X: fatura o dobro, então também gera o dobro do lucro",
     "Os dois empatam em R$ 300 de lucro, pois as margens se compensam",
     "O SKU X: R$ 300 de lucro contra R$ 150 do SKU Y",
     "O SKU Y: R$ 450 de lucro contra R$ 300 do SKU X"
    ],
    "answer": [
     3
    ],
    "why": "SKU X: 3.000 x 10% = R$ 300. SKU Y: 1.500 x 30% = R$ 450. Quem fatura menos pode gerar mais lucro quando a margem é maior."
   },
   {
    "q": "Na regra de bolso 80/15/5, o que define a curva C?",
    "options": [
     "Os SKUs finais, que juntos somam cerca de 5% do faturamento total",
     "Os SKUs com a maior margem, que juntos somam cerca de 5% do faturamento total",
     "Os SKUs que mais vendem, que juntos chegam a 80% do faturamento",
     "Os SKUs intermediários, que juntos somam cerca de 15% do faturamento"
    ],
    "answer": [
     0
    ],
    "why": "A vai até cerca de 80% do faturamento acumulado, B cobre os próximos 15% e C os últimos 5%. A curva é feita por faturamento, não por margem."
   }
  ],
  [
   "base",
   {
    "q": "Num exemplo, o lucro por unidade cai de R$ 30 para R$ 20 após um desconto. Para manter o lucro total, as vendas precisam subir quanto?",
    "options": [
     "50%, pois R$ 30 ÷ R$ 20 dá uma vez e meia o volume anterior",
     "67%, que é o lucro de R$ 20 dividido pelo antigo de R$ 30",
     "33%, que é a perda de R$ 10 dividida pelo lucro de R$ 30",
     "10%, que é a queda de R$ 10 no lucro por unidade vendida"
    ],
    "answer": [
     0
    ],
    "why": "Lucro total igual exige 30 x unidades antigas = 20 x unidades novas. A razão é 30 ÷ 20 = 1,5: 50% mais unidades."
   },
   {
    "q": "Elasticidade alta de preço significa que:",
    "options": [
     "O cliente só compra no menor preço do mercado, em qualquer situação de venda",
     "O cliente quase não reage: mudar o preço mexe pouco nas vendas",
     "O cliente aceita qualquer aumento, desde que a marca seja conhecida",
     "O cliente reage bastante: pouca mudança de preço mexe muito nas vendas"
    ],
    "answer": [
     3
    ],
    "why": "Elasticidade mede o quanto as vendas mudam quando o preço muda. Quando é alta, um pequeno desconto ou aumento já mexe bastante no volume vendido."
   },
   {
    "q": "Antes de aceitar um desconto de campanha, qual é a pergunta que mais importa?",
    "options": [
     "As vendas extras esperadas cobrem a perda de lucro por unidade?",
     "A campanha traz mais visibilidade do que a do concorrente?",
     "O desconto é igual ao que o concorrente oferece na mesma semana?",
     "O faturamento vai subir, mesmo que o lucro total diminua?"
    ],
    "answer": [
     0
    ],
    "why": "Desconto só vale se o lucro total fica igual ou maior. Faturamento e visibilidade subindo não bastam se cada venda deixa muito menos lucro."
   }
  ],
  [
   "base",
   {
    "q": "Qual uso de IA está alinhado com o critério humano?",
    "options": [
     "Colar a base completa de pedidos do cliente numa ferramenta qualquer sem pedir permissão",
     "Pedir um rascunho de resumo e conferir cada número na planilha antes de enviar",
     "Pedir o novo preço de cada SKU e subir direto no portal sem revisar",
     "Enviar ao seller a análise da IA sem leitura, para ganhar tempo no fechamento"
    ],
    "answer": [
     1
    ],
    "why": "IA serve para rascunho. Os números são conferidos, os dados de clientes seguem a política interna e as decisões, como preço, continuam com a pessoa."
   },
   {
    "q": "A IA sugeriu três hipóteses para uma queda de vendas. Qual é a melhor forma de usá-las?",
    "options": [
     "Aceitar a primeira, porque a IA ordena as hipóteses da mais provável",
     "Enviar as três ao seller como causas confirmadas da queda de vendas",
     "Tratar como ponto de partida e testar cada uma com dado da conta",
     "Descartar todas, porque IA nunca ajuda a levantar hipóteses de análise"
    ],
    "answer": [
     2
    ],
    "why": "A IA ajuda a ampliar a lista de ideias, mas só os dados da conta confirmam ou descartam cada uma. Hipótese não testada não é causa."
   },
   {
    "q": "Qual tarefa é a melhor candidata à automação de relatórios?",
    "options": [
     "Exportar, cruzar e atualizar toda semana os mesmos números no painel",
     "Decidir sozinho se a campanha de Ads deve ser pausada ou mantida",
     "Escolher o preço de lançamento de um produto novo na categoria",
     "Conversar com o seller sobre uma queda forte de vendas na conta"
    ],
    "answer": [
     0
    ],
    "why": "Automação serve para trabalho repetido e sem julgamento. Decisões de Ads e preço e a conversa com o seller exigem critério e continuam com a pessoa."
   }
  ]
 ],
 "gf-l13-1": [
  [
   "base",
   {
    "q": "Um cliente novo pede para você aumentar as vendas já. Antes de propor ações, o que a aula manda fazer?",
    "options": [
     "Escolher a frente favorita da equipe e concentrar todo o esforço dos primeiros dias nela",
     "Rodar o raio-X nas 8 frentes e dar nota a cada uma, com critério escrito e dado",
     "Subir o orçamento de Ads primeiro, porque venda é o que o cliente pediu na conversa",
     "Montar o plano de 90 dias na hora e deixar o diagnóstico para depois do primeiro mês"
    ],
    "answer": [
     1
    ],
    "why": "Pedir mais vendas não diz onde está o gargalo. O raio-X com dado nas 8 frentes mostra o que travou o resultado, e só então dá para propor ações."
   },
   {
    "q": "Qual destas opções descreve o resultado esperado do raio-X de uma conta?",
    "options": [
     "Uma série de mudanças já feitas nos preços e nos anúncios, para ganhar tempo",
     "Um relatório só com os números de vendas do mês, sem nota e sem hipóteses",
     "Um pedido de mais orçamento ao cliente, justificado pelas frentes mais fracas",
     "Uma nota por frente, o gargalo identificado e uma lista de ações para priorizar"
    ],
    "answer": [
     3
    ],
    "why": "O raio-X termina numa lista de ações, não numa mudança feita no escuro. Antes dela vêm a nota de cada frente e a identificação do gargalo."
   },
   {
    "q": "A reputação está no verde, o fiscal está certo e o preço tem margem negativa em produtos que vendem. Onde está o gargalo?",
    "options": [
     "No preço: a conta vende, mas cada venda não deixa margem para sustentar o resto",
     "Na reputação, porque estar no verde sempre indica um problema escondido",
     "No fiscal, porque nota correta é o que faz o preço perder margem na venda",
     "Em nenhuma frente, já que duas de três estão boas e a média fecha positiva"
    ],
    "answer": [
     0
    ],
    "why": "O gargalo é a frente que mais trava o resultado. Vender produtos com margem negativa faz a conta perder dinheiro mesmo com reputação e fiscal em dia."
   }
  ]
 ],
 "gf-l13-2": [
  [
   "base",
   {
    "q": "Uma ação tem impacto alto e esforço baixo. Outra tem impacto alto e esforço alto. Como a matriz manda tratar as duas?",
    "options": [
     "As duas entram na semana, com o mesmo tempo, porque o impacto é igual",
     "A de esforço alto entra primeiro, porque dá mais trabalho e deve vir cedo",
     "A de esforço baixo é feita já, e a de esforço alto vira projeto com prazo",
     "A de esforço baixo espera, porque ações simples nunca valem o tempo da equipe"
    ],
    "answer": [
     2
    ],
    "why": "Impacto alto e esforço baixo é o quadrante de fazer já. Impacto alto com esforço alto também vale, mas vira projeto planejado, com prazo."
   },
   {
    "q": "Qual das ações abaixo cai no quadrante de deixar para depois, com impacto baixo e esforço alto?",
    "options": [
     "Refazer 300 fichas técnicas de produtos que quase não vendem, com muito trabalho",
     "Corrigir o preço de produtos campeões que vendem com margem negativa na conta",
     "Pausar anúncios pagos que gastam bastante e não trazem nenhuma venda no mês",
     "Repor o estoque dos produtos que mais faturam, antes que eles fiquem em falta"
    ],
    "answer": [
     0
    ],
    "why": "Mexer em produtos que quase não vendem tem impacto baixo, e fazer isso em 300 fichas tem esforço alto. As outras três ações têm impacto alto e esforço menor."
   },
   {
    "q": "O plano de uma conta tem 40 ações, todas marcadas como importantes. Qual é o problema e o ajuste?",
    "options": [
     "Falta tempo na equipe; o ajuste é contratar mais gente para executar tudo junto",
     "Falta detalhe nas ações; o ajuste é descrever cada uma com mais páginas de texto",
     "Sobra otimismo do cliente; o ajuste é cortar a meta pela metade sem olhar o dado",
     "Falta prioridade; o ajuste é pontuar impacto e esforço e ficar com poucas ações"
    ],
    "answer": [
     3
    ],
    "why": "Plano com 40 ações e nenhuma prioridade é o erro clássico. A matriz de impacto x esforço separa o que importa e deixa o resto na lista de espera."
   }
  ]
 ],
 "gf-l13-3": [
  [
   "base",
   {
    "q": "Qual destes resultados-chave serve para o objetivo conta saudável?",
    "options": [
     "Reduzir o gasto de Ads de 14% para 8% do faturamento até o dia 90 (exemplo)",
     "Cuidar melhor dos anúncios pagos, com mais atenção em todas as semanas do mês",
     "Ter um resultado melhor no Ads, porque o cliente espera algo mais consistente",
     "Tentar reduzir o gasto de Ads sempre que possível, sem data para conferir"
    ],
    "answer": [
     0
    ],
    "why": "Resultado-chave tem número de partida (14%), número de chegada (8%) e prazo (dia 90). As outras frases são intenções que ninguém consegue conferir."
   },
   {
    "q": "O que falta no resultado-chave vender mais no próximo trimestre?",
    "options": [
     "Falta um tom mais animado, que motive o cliente a aprovar o plano rapidamente",
     "Falta citar o nome do responsável, porque o número de vendas já está claro",
     "Faltam o número de partida, o de chegada, o prazo e a fonte da medida",
     "Falta incluir mais três metas parecidas, para o conjunto parecer completo"
    ],
    "answer": [
     2
    ],
    "why": "Vender mais não diz de quanto para quanto, até quando nem onde medir. Sem esses quatro elementos, o resultado-chave vira desejo."
   },
   {
    "q": "Qual é a diferença entre objetivo e resultado-chave num OKR?",
    "options": [
     "O objetivo é um número com prazo; o resultado-chave é a frase que inspira a equipe",
     "O objetivo é a frase que diz aonde chegar; os resultados-chave são números que provam",
     "O objetivo é o que o cliente quer; o resultado-chave é o que a equipe prefere fazer",
     "O objetivo muda toda semana; o resultado-chave fica fixo até o fim do ano inteiro"
    ],
    "answer": [
     1
    ],
    "why": "O objetivo diz aonde chegar em palavras claras. Os resultados-chave, de 2 a 4, são os números com prazo que provam se você chegou lá."
   }
  ],
  [
   "base",
   {
    "q": "Lucro desejado pede 240 un, a capacidade (estoque e envio) é de 200 un e o equilíbrio é 150 un (números de exemplo). Qual é a meta realista?",
    "options": [
     "240 unidades, e o time resolve a falta de estoque no meio do mês",
     "150 unidades, porque o equilíbrio é a meta que nunca decepciona",
     "220 unidades, a média entre o que o lucro pede e o que cabe",
     "200 unidades, porque a meta não passa do que a conta entrega"
    ],
    "answer": [
     3
    ],
    "why": "A meta realista é a menor entre o que o lucro pede (240) e o que a capacidade entrega (200). Acima disso, falta produto e a reputação sofre."
   },
   {
    "q": "Por que a meta de vendas de uma conta deve olhar a capacidade, além da margem?",
    "options": [
     "Porque vender além do estoque e do envio gera falta de produto e prejudica a reputação",
     "Porque a capacidade define o preço de cada produto, e a margem define o estoque ideal",
     "Porque o cliente só aceita metas pequenas, e a margem serve apenas para o relatório",
     "Porque a margem muda toda semana, e a capacidade é o único número confiável da conta"
    ],
    "answer": [
     0
    ],
    "why": "Meta que passa da capacidade vira falta de produto, atraso e reputação ruim. A margem diz quanto cada venda deixa, e a capacidade diz quantas vendas cabem."
   },
   {
    "q": "Um cliente quer vender 500 un por mês. O equilíbrio é 200 e a capacidade é 320 (números de exemplo). O que dizer?",
    "options": [
     "Que 500 é possível, porque o equilíbrio é baixo e o estoque se resolve depois",
     "Que a meta deve ser 200, porque abaixo disso o cliente nem sonha em lucrar",
     "Que o teto é 320 hoje; para chegar a 500, primeiro é preciso ampliar estoque e envio",
     "Que a meta deve ser 350, a média entre o que o cliente quer e o que cabe"
    ],
    "answer": [
     2
    ],
    "why": "A capacidade de 320 é o teto. Para chegar a 500, o primeiro passo é ampliar estoque e envio. O equilíbrio (200) é o piso, não a meta."
   }
  ]
 ],
 "gf-l13-4": [
  [
   "base",
   {
    "q": "Qual cliente da carteira entra no quadrante de atenção máxima?",
    "options": [
     "O de valor baixo e risco baixo, que responde rápido e nunca pediu nada",
     "O de valor baixo e risco alto, que pede muito e traz pouco resultado",
     "O de valor alto e risco alto, que some das reuniões e cobra resultado",
     "O de valor alto e risco baixo, que está satisfeito e renova sem cobrar"
    ],
    "answer": [
     2
    ],
    "why": "Atenção máxima é para quem cruza valor alto com risco alto de sair. Uma perda ali custa mais que em qualquer outro quadrante."
   },
   {
    "q": "Você atende cinco clientes e só dá para fazer uma ligação hoje. Qual critério decide quem recebe?",
    "options": [
     "Cruzar o valor da conta com o risco de ela sair e ligar para o maior par",
     "Ligar para quem respondeu a última mensagem, porque a ordem de chegada manda",
     "Ligar para o cliente menor, porque é o mais rápido de resolver na agenda",
     "Sortear entre os cinco, para ninguém achar que existe cliente favorito"
    ],
    "answer": [
     0
    ],
    "why": "A carteira se prioriza por critério, e o critério da aula é valor da conta contra risco de churn. Ordem de chegada ou sorteio ignoram onde a perda custa mais."
   },
   {
    "q": "Qual destes é um sinal de risco de churn, a chance de o cliente cancelar?",
    "options": [
     "O cliente aprovou o plano e perguntou quando começa a execução do trabalho",
     "O cliente pediu uma reunião extra para ver o resultado da última campanha",
     "O cliente mandou dúvidas sobre o relatório e agradeceu pela explicação",
     "O cliente reclama de algo já alinhado e fala em fazer a gestão sozinho"
    ],
    "answer": [
     3
    ],
    "why": "Reclamar do que já foi alinhado e falar em fazer sozinho são sinais clássicos de risco de saída. Pedir reunião e tirar dúvida mostram engajamento."
   }
  ],
  [
   "base",
   {
    "q": "O seller diz que as vendas não subiram desde o início do plano. Qual resposta usa dado?",
    "options": [
     "Explicar que vendas demoram e pedir mais três meses sem apresentar nenhum número",
     "Mostrar margem e vendas antes e depois, e lembrar que a meta inicial era a margem",
     "Concordar com ele e propor trocar todo o plano na mesma reunião, sem olhar o dado",
     "Dizer que o mercado está ruim para todo mundo e que a equipe fez o que podia"
    ],
    "answer": [
     1
    ],
    "why": "Objeção se responde com dado: o antes e depois de margem e vendas mostra o que mudou e lembra qual era a meta combinada."
   },
   {
    "q": "O cliente cobra: faça tudo ao mesmo tempo, está tudo urgente. Qual é a melhor resposta?",
    "options": [
     "Aceitar e abrir as 12 frentes juntas, para mostrar que a equipe se dedica",
     "Recusar qualquer pedido novo até o fim do trimestre, sem dar explicações",
     "Pedir ao cliente para escolher três ações no escuro e não falar mais nisso",
     "Mostrar a matriz de impacto x esforço e propor a ordem com base nos ganhos"
    ],
    "answer": [
     3
    ],
    "why": "A matriz de impacto x esforço transforma o tudo urgente em ordem justificada com dado, sem recusar o cliente nem se espalhar em 12 frentes."
   },
   {
    "q": "Qual afirmação sobre responder objeções em reunião está certa?",
    "options": [
     "Responder rápido e com firmeza vale mais do que parar para abrir o dado",
     "Vale evitar as objeções e seguir o roteiro para não perder o ritmo da reunião",
     "Vale anotar cada objeção e responder com dado, sem entrar na defensiva",
     "Vale concordar com todas, para o cliente sair sentindo que foi atendido"
    ],
    "answer": [
     2
    ],
    "why": "No treino de banca, o combinado é ouvir, anotar cada objeção e responder com dado. Defesa emocional, fuga ou concordância automática não sustentam o plano."
   }
  ]
 ]
});

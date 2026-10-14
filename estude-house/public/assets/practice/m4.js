/* Versões dos quizzes do módulo 5 (m4). */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
  "l4-1": [
    [
      {
        q: "Quais dados aparecem na tela inicial (Home) de uma conta? Marque todos.",
        multi: true,
        options: [
          "Faturamento do mês e dos últimos 7 dias, com o valor obtido em rebate",
          "Dias sem vender, com a quantidade de anúncios parados na conta",
          "Status do catálogo, com os anúncios que ganham, perdem ou empatam",
          "Lista com os preços de cada concorrente em todos os anúncios do seller",
        ],
        answer: [0, 1, 2],
        why: "A PriceBot não lista os preços de cada concorrente na tela inicial.",
      },
      {
        q: "Quais afirmações sobre a Home são verdadeiras? Marque todas.",
        multi: true,
        options: [
          "Ao abrir outra conta da carteira, todos os dados passam a ser os dessa conta",
          "O cartão do mês compara com o mesmo período do mês anterior, não com o mês inteiro",
          "A Home é o primeiro lugar para ver quanto de rebate voltou e o que está parado",
          "A Home mostra o resultado de cada pedido, com o comprador e o endereço de entrega",
        ],
        answer: [0, 1, 2],
        why: "A Home resume a conta aberta. Dados de comprador e entrega não fazem parte dela.",
      },
      {
        q: "Quais informações ajudam o assessor a conversar com o seller usando a Home? Marque todas.",
        multi: true,
        options: [
          "O faturamento do período, comparado com o mesmo período do mês anterior",
          "O valor de rebate obtido, que mostra o que voltou para o seller nas campanhas",
          "A planilha de dias sem vender, que mostra os anúncios parados e há quanto tempo",
          "O extrato bancário do seller, que mostra todos os pagamentos recebidos do marketplace",
        ],
        answer: [0, 1, 2],
        why: "Faturamento, rebate e dias sem vender vêm da Home. O extrato bancário não faz parte do portal.",
      },
    ],
    [
      {
        q: "Quais são as duas visões principais de anúncios no painel?",
        options: [
          "Anúncios ativos e anúncios pausados, separados pelo status de cada publicação",
          "Visão tradicional, de promoções, e visão de catálogo, de disputa do catálogo",
          "Anúncios do Full e do Flex, separados pelo tipo de envio contratado pelo seller",
          "Anúncios Clássicos e Premium, separados pela modalidade de exposição escolhida",
        ],
        answer: [1],
        why: "Clássico e Premium é só uma coluna de modalidade do anúncio. As visões de trabalho são Tradicional e Catálogo.",
      },
      {
        q: "Em qual visão o assessor acompanha a disputa de catálogo dos anúncios?",
        options: [
          "Na visão Tradicional, que é a lista usada para a gestão das promoções de cada anúncio",
          "Na tela de Pedidos, que mostra a posição do anúncio no catálogo em cada venda",
          "Na aba de catálogo, que traz o status de cada anúncio: ganhando, perdendo ou empatando",
          "Na Home, que lista todos os anúncios do seller e o preço do concorrente de cada um",
        ],
        answer: [2],
        why: "A aba de catálogo é onde se vê quem ganha, perde ou empata a disputa de cada anúncio.",
      },
      {
        q: "Para que serve baixar a planilha de “dias sem vender” da Home?",
        options: [
          "Para excluir do Mercado Livre os anúncios que ficaram sem nenhuma venda por muito tempo",
          "Para calcular a comissão da assessoria, que depende dos anúncios sem venda de cada conta",
          "Para aumentar o ranking dos anúncios parados dentro das buscas do marketplace da conta",
          "Para apoiar o seller, mostrando quais anúncios estão parados e há quanto tempo",
        ],
        answer: [3],
        why: "É um insumo de gestão que o assessor pode usar na conversa com o seller.",
      },
    ],
  ],
  "l4-2": [[
    {
      q: "Você desligou a precificação automática de um MLB. O que acontece com a promoção que estava ativa nele?",
      options: [
        "Ela sai sozinha, porque o bot retira o anúncio de todas as campanhas ao ser desligado",
        "Continua ativa, e é preciso retirá-la no Mercado Livre se o seller não quiser mais",
        "É trocada automaticamente pela próxima campanha disponível para o anúncio do seller",
        "O anúncio é pausado no Mercado Livre até que o bot seja ligado novamente pelo assessor",
      ],
      answer: [1],
      why: "Desligado, o bot para de gerir. O que estava ativo continua ativo.",
    },
    {
      q: "O que o bot faz com um anúncio quando a chave de precificação automática dele está desligada?",
      options: [
        "Continua entrando e saindo de campanhas normalmente, apenas sem mostrar a margem no painel",
        "Para de gerir o anúncio: não entra nem sai de promoções e não disputa o catálogo dele",
        "Passa a alterar o preço base do anúncio todos os dias, para compensar a falta de campanhas",
        "Exclui o anúncio da conta da PriceBot, e o seller precisa pedir uma nova inclusão ao time",
      ],
      answer: [1],
      why: "Ligada, o bot opera o anúncio (promoções e catálogo, dentro das margens). Desligada, ele deixa de gerir.",
    },
    {
      q: "O seller reclama de um MLB específico e o assessor desliga a precificação automática dele. Qual é o passo seguinte?",
      options: [
        "Nenhum, porque desligar a chave já resolve a reclamação e encerra a promoção do anúncio",
        "Reenviar a planilha de setup ao time da PriceBot, para o status do anúncio ser atualizado",
        "Apagar o SKU do anúncio no painel da PriceBot, para ele deixar de ser gerenciado de vez",
        "Tirar o anúncio da promoção no Mercado Livre e entender o motivo do problema relatado",
      ],
      answer: [3],
      why: "Desligar mantém a promoção ativa. Quem desliga assume tirar o anúncio da campanha e investigar a causa.",
    },
  ]],
  "l4-3": [
    [
      {
        q: "A edição em massa vale por página de 100 anúncios. A conta tem 2.500 anúncios. Quantas rodadas, no mínimo?",
        options: [
          "10 rodadas, porque o painel agrupa a carteira em blocos de 250 anúncios por edição",
          "25 rodadas, porque são 2.500 anúncios divididos em páginas de 100 itens cada uma",
          "250 rodadas, porque cada página da edição em massa permite alterar só 10 anúncios",
          "2.500 rodadas, porque a edição em massa precisa ser feita anúncio por anúncio na tela",
        ],
        answer: [1],
        why: "2.500 ÷ 100 = 25 páginas de 100 anúncios, ou seja, 25 rodadas de edição em massa.",
      },
      {
        q: "O seller pede margem mínima maior em toda a carteira de 4.000 anúncios. Quantas rodadas de edição em massa, de 100 itens, no mínimo?",
        options: [
          "4 rodadas, porque a edição em massa agrupa a carteira em blocos de mil anúncios",
          "400 rodadas, porque cada página só permite editar dez anúncios em cada operação",
          "40 rodadas, porque são 4.000 anúncios divididos em páginas de 100 itens cada uma",
          "4.000 rodadas, porque cada anúncio precisa de uma edição própria na tela do painel",
        ],
        answer: [2],
        why: "4.000 ÷ 100 = 40 páginas. Ainda é muito melhor do que 4.000 edições unitárias, mas pesa ao prometer prazo.",
      },
      {
        q: "Uma carteira tem 1.800 anúncios para editar em massa, em páginas de 100 itens. Quantas rodadas serão necessárias?",
        options: [
          "18 rodadas, porque 1.800 anúncios divididos em páginas de 100 itens resultam nesse número",
          "180 rodadas, porque cada página só consegue editar dez anúncios em cada uma das rodadas",
          "9 rodadas, porque o painel agrupa a edição em páginas de 200 anúncios para contas grandes",
          "1.800 rodadas, porque a edição em massa só vale para um anúncio por vez dentro da carteira",
        ],
        answer: [0],
        why: "1.800 ÷ 100 = 18 páginas, ou seja, 18 rodadas.",
      },
    ],
    [
      {
        q: "O seller enviou 600 custos errados. Qual é o fluxo mais eficiente?",
        options: [
          "Editar os 600 custos um por um, pelos três pontinhos de cada anúncio, no painel",
          "Baixar a planilha de produtos ativos, corrigir os custos no arquivo e importar de volta",
          "Refazer toda a integração da conta, para que os custos sejam carregados do zero outra vez",
          "Pedir ao seller que mude o preço dos anúncios, para a margem voltar ao valor esperado",
        ],
        answer: [1],
        why: "A importação atualiza os custos de uma vez.",
      },
      {
        q: "Em quais níveis o assessor altera a margem mínima e a objetiva depois do setup?",
        options: [
          "Só reenviando a planilha ao time da PriceBot, que aplica a mudança por conta própria",
          "Somente na carteira inteira de uma vez, sem possibilidade de exceções por anúncio",
          "Por MLB, por SKU ou em massa, selecionando os anúncios que serão alterados no painel",
          "Apenas o seller consegue alterar, porque a margem é uma decisão que não é da assessoria",
        ],
        answer: [2],
        why: "Depois do setup a margem pode ser ajustada pontualmente (por MLB, por SKU ou em massa), por exemplo, para queimar um produto.",
      },
      {
        q: "Por que a planilha exportada de produtos ativos serve para corrigir custos em massa?",
        options: [
          "Porque tem a mesma estrutura do setup: corrigida, atualiza produto por produto na importação",
          "Porque o portal aplica o último custo informado a todos os produtos do mesmo fornecedor",
          "Porque o Mercado Livre devolve os custos corrigidos na própria planilha assim que ela é enviada",
          "Porque a planilha dispensa o SKU e o Cust ID, o que acelera o processamento da correção",
        ],
        answer: [0],
        why: "A exportação tem a mesma estrutura do setup, e a importação atualiza cada produto com o valor corrigido.",
      },
    ],
  ],
  "l4-4": [
    [
      {
        q: "Onde o assessor consulta o rebate de um período, em reais?",
        options: [
          "Somente no extrato do banco do seller, que é a única fonte oficial do valor devolvido",
          "Na Home e na Visão Geral de Pedidos, filtrando o período desejado dentro de cada tela",
          "Somente pedindo o relatório ao time da PriceBot, que envia por e-mail uma vez por mês",
          "Em lugar nenhum, porque o painel da PriceBot não traz uma forma de medir o rebate",
        ],
        answer: [1],
        why: "Os dois lugares mostram o rebate. A Visão Geral de Pedidos permite filtrar 7, 30, 60 e 90 dias, em reais e em percentual.",
      },
      {
        q: "O que é a “margem ativa” que aparece no painel?",
        options: [
          "A margem objetiva do SKU, que o seller definiu no alinhamento inicial do setup",
          "A margem que o anúncio tem agora, com o preço e a promoção em vigor, incluindo o rebate",
          "A margem média de toda a carteira do seller, calculada sobre os últimos trinta dias",
          "A margem que o seller gostaria de ter quando todas as promoções forem concluídas",
        ],
        answer: [1],
        why: "Margem ativa é o retrato do momento; é ela que se compara com mínima e objetiva.",
      },
      {
        q: "No detalhe de um anúncio, algumas campanhas elegíveis aparecem sem possibilidade de adesão. Por quê?",
        options: [
          "Porque o seller não pagou a mensalidade da assessoria e o painel bloqueia as adesões",
          "Porque a data já passou ou a margem não cabe na faixa; o bot escolhe a melhor viável",
          "Porque a PriceBot escolhe sempre a pior campanha disponível, para poupar a margem",
          "Porque o painel está desatualizado e só mostra a lista certa depois de um novo grant",
        ],
        answer: [1],
        why: "O bot compara datas e margens de cada campanha e escolhe a melhor entre as viáveis.",
      },
    ],
    [
      {
        q: "A calculadora de cada MLB altera o preço do anúncio?",
        options: [
          "Sim, imediatamente, porque ela aplica o preço digitado direto no Mercado Livre do seller",
          "Não: é uma simulação da margem para o preço digitado, e dá para voltar ao preço antigo",
          "Sim, mas só no fim do dia, quando o portal sincroniza os preços com o marketplace",
          "Somente para anúncios Premium, porque os Clássicos não aceitam alteração de preço",
        ],
        answer: [1],
        why: "É simulação. Serve para apoiar a decisão e a conversa com o seller.",
      },
      {
        q: "Para que serve a calculadora de cada MLB?",
        options: [
          "Para calcular a remuneração do assessor com base no faturamento da conta do seller",
          "Para gerar as etiquetas de envio dos anúncios que estão com estoque no Full do ML",
          "Para alterar de fato o preço base do anúncio no Mercado Livre, de forma definitiva",
          "Para simular um preço e ver a margem resultante, com comissões, impostos, frete e custo",
        ],
        answer: [3],
        why: "A calculadora mostra a margem em reais e em percentual para o preço simulado. Ajuda a convencer um seller sensível a margem.",
      },
      {
        q: "O seller duvida de que um preço mais alto compense. Como a calculadora do MLB ajuda?",
        options: [
          "Aplica o preço mais alto direto no anúncio, para o seller ver o resultado nas vendas",
          "Mostra a margem em reais e em percentual do preço digitado, com os números do produto dele",
          "Calcula a comissão da assessoria que será cobrada por cada venda do preço simulado",
          "Substitui a planilha de setup, porque guarda o custo e a alíquota de cada produto",
        ],
        answer: [1],
        why: "A simulação mostra a margem com comissões, impostos, frete e custo reais do produto. É um apoio concreto para a conversa.",
      },
    ],
  ],
});

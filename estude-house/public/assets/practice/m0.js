/* Versões extras dos quizzes do módulo 1 (m0). "base" = o quiz escrito na própria aula. */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
  "l0-1": [[
    "base",
    {
      q: "O assessor quer baixar uma planilha que o portal gerou há pouco, a pedido dele. Onde o arquivo fica guardado?",
      options: [
        "Em Anúncios > Importar e exportar, na lista de histórico que fica abaixo dos botões do importador",
        "Em Downloads, o item do menu que guarda os arquivos que você mandou o portal gerar",
        "Em Configurações > Importação, no cartão de arquivos recentes que fica ao lado do botão Salvar",
        "Em Produtos > Importar e exportar, junto da lista de SKUs que foram enviados na última importação",
      ],
      answer: [1],
      why: "O item Downloads guarda os arquivos gerados pelo portal. Os importadores só têm os botões de baixar e de enviar de volta.",
    },
    {
      q: "Em qual grupo do menu ficam Impostos, Fornecedores e Produtos, e para que serve esse grupo?",
      options: [
        "Em Ver resultado, que reúne os números de venda, margem e rebate de cada período da conta",
        "Em Trabalhar os anúncios, que abre as listas onde o bot atua todos os dias nos anúncios",
        "Em Cadastrar a base de custo, que dá ao bot os dados para calcular a margem",
        "Em Ajustar o bot, que concentra as chaves de PMA, de importação e de precificação da conta",
      ],
      answer: [2],
      why: "O menu é organizado por tarefa: Impostos, Fornecedores e Produtos formam a base de custo. Sem ela, o portal não calcula margem.",
    },
  ]],
  "l0-2": [[
    "base",
    {
      q: "No dia 10, a Home mostra: mês atual R$ 21.000, mês anterior inteiro R$ 45.000 e mesmo período do mês anterior R$ 24.000. Como está o mês?",
      options: [
        "Está 53% abaixo, porque R$ 21.000 é pouco perto dos R$ 45.000 do mês passado inteiro",
        "Está 14% acima, porque R$ 24.000 é maior do que R$ 21.000 e esse é o cálculo da variação",
        "Está 12,5% abaixo, porque R$ 21.000 contra R$ 24.000 compara os mesmos 10 dias",
        "Não dá para saber, porque a Home só compara meses fechados entre si quando o mês termina",
      ],
      answer: [2],
      why: "A comparação justa usa o mesmo período: 21.000 ÷ 24.000 = 0,875, ou seja, 12,5% abaixo. Contra o mês inteiro, qualquer conta parece estar em queda.",
    },
    {
      q: "O seller diz que as vendas caíram esta semana. Qual cartão da Home é o primeiro lugar para olhar?",
      options: [
        "O cartão do mês, que compara o mês atual com o mês anterior inteiro sem ajustar os dias",
        "O cartão Dias sem vender, que lista os anúncios que estão parados e há quanto tempo",
        "O cartão Últimos 7 dias, que compara a semana com a anterior",
        "O gráfico de catálogo, que mostra quantos anúncios ganham, perdem ou empatam hoje",
      ],
      answer: [2],
      why: "O cartão Últimos 7 dias faz a mesma comparação do mês, mas com a semana anterior. É o primeiro lugar para olhar quando o seller diz que as vendas caíram.",
    },
  ]],
  "l0-3": [[
    "base",
    {
      q: "A Visão Geral mostra que existem pedidos negativos. Qual tela mostra quais anúncios os causaram?",
      options: [
        "A lista Pedidos, ordenando para trazer as piores margens para o topo da tabela",
        "A própria Visão Geral, trocando o período para os últimos 90 dias nos indicadores",
        "A lista Tradicional, filtrando a Precificação Automática por Não nos anúncios",
        "A tela Downloads, abrindo o último relatório de pedidos gerado pelo portal",
      ],
      answer: [0],
      why: "A Visão Geral mostra que o problema existe; a lista Pedidos mostra quais anúncios o causaram. A ordenação traz as piores margens para o topo.",
    },
    {
      q: "Qual pergunta cada tela do item Pedidos responde?",
      options: [
        "A Visão Geral mostra cada anúncio e a lista Pedidos mostra os totais gerais da conta",
        "As duas mostram o mesmo conteúdo, e só o formato dos gráficos muda entre elas",
        "A Visão Geral mostra só o rebate, e a lista mostra só o faturamento de cada anúncio",
        "A Visão Geral diz como a conta foi no período, e a lista diz como foi cada anúncio",
      ],
      answer: [3],
      why: "A Visão Geral responde “como a conta foi no período” e a lista Pedidos responde “e cada anúncio, como foi”.",
    },
  ]],
  "l0-4": [[
    "base",
    {
      q: "Qual é a diferença entre as listas Catálogo e Tradicional?",
      options: [
        "A Tradicional tem o filtro Status do Catálogo, e o Catálogo não tem nenhum filtro disponível",
        "Têm o mesmo desenho e os mesmos filtros, menos o Status do Catálogo, que só existe no Catálogo",
        "O Catálogo lista só anúncios Premium, e a Tradicional lista só os anúncios do tipo Clássico",
        "As duas têm exatamente a mesma função, e a diferença é apenas o nome no menu do portal",
      ],
      answer: [1],
      why: "As duas listas têm o mesmo desenho, mas respondem a perguntas diferentes. O filtro Status do Catálogo só existe no Catálogo.",
    },
    {
      q: "A lista Catálogo aparece com “Nenhum dado para exibir”. Qual é a primeira coisa a fazer?",
      options: [
        "Refazer o grant da conta do seller na mesma hora, para recarregar os dados da lista",
        "Importar de novo a planilha de anúncios, porque a lista deve ter sido apagada por engano",
        "Avisar o seller de que o portal quebrou e pedir que ele aguarde a correção do time",
        "Limpar os filtros e conferir se a conta aberta é a do seller, antes de olhar a integração",
      ],
      answer: [3],
      why: "Lista vazia não é erro: 1) limpar filtros; 2) conferir a conta aberta; 3) só então olhar a integração em Configurações.",
    },
  ]],
  "l0-5": [[
    "base",
    {
      q: "Um anúncio aparece em Anúncios > Pendentes com o SKU “NAO_LOCALIZADO”. O que isso significa?",
      options: [
        "O produto foi cadastrado sem custo e só precisa de uma regra de imposto para sair da fila",
        "O anúncio foi pausado no Mercado Livre e precisa ser reativado pelo seller dentro da conta",
        "A PriceBot não achou um SKU ligado ao anúncio, e é preciso resolver o vínculo do SKU",
        "O anúncio está com margem abaixo da mínima, e o seller deve reprecificar o produto",
      ],
      answer: [2],
      why: "NAO_LOCALIZADO significa que a PriceBot não achou um SKU ligado ao anúncio. O caminho é o do vídeo da aula ou pedir ajuda ao time da PriceBot.",
    },
    {
      q: "Quando um anúncio que estava em Pendentes pode ter a precificação automática ligada?",
      options: [
        "Assim que o assessor ligar a chave, mesmo antes de completar custo e fornecedor do produto",
        "Quando a pendência some e a margem do anúncio está na faixa definida com o seller",
        "Depois que o seller aprovar cada campanha manualmente dentro da conta do Mercado Livre",
        "Só quando o PMA estiver preenchido e a margem máxima do anúncio estiver definida em 15%",
      ],
      answer: [1],
      why: "Primeiro some a pendência (produto completo) e a margem entra na faixa; só então a precificação automática pode ser ligada.",
    },
  ]],
  "l0-6": [[
    "base",
    {
      q: "Um anúncio aparece com o problema “Nenhuma promoção atinge a margem”. O que isso significa?",
      options: [
        "O portal falhou ao buscar as campanhas, e o assessor precisa refazer a integração da conta",
        "Nada quebrou: as campanhas existentes não cabem na margem do seller; em catálogo fica Perdendo",
        "O anúncio foi pausado no Mercado Livre e precisa ser reativado pelo seller para voltar",
        "O PMA está desligado, e por isso nenhuma campanha é considerada pelo bot nessa conta do seller",
      ],
      answer: [1],
      why: "Nenhuma promoção atinge a margem: as campanhas existentes não cabem na margem do seller. Em catálogo, o status fica Perdendo.",
    },
    {
      q: "Qual é a ordem de trabalho sugerida para as filas de problemas do portal?",
      options: [
        "Primeiro a verificação, depois os pausados e os pendentes, e por último todos os erros do portal",
        "Primeiro os pausados, depois a verificação, deixando os erros e pendentes para o fim do dia de trabalho",
        "Qualquer ordem serve, porque as filas não se influenciam e todas dependem só do seller",
        "Primeiro erros e pendentes, depois o que é do Mercado Livre, e por fim a verificação",
      ],
      answer: [3],
      why: "Comece pelo que impede o bot de trabalhar (erros e pendentes), siga para o que depende do Mercado Livre (pausados e em revisão) e deixe por último o que pede decisão de negócio (verificação).",
    },
  ]],
  "l0-7": [[
    "base",
    {
      q: "Depois de baixar uma planilha de custos para corrigir, o que o assessor não pode mudar no arquivo?",
      options: [
        "O formato do arquivo (.xls ou .xlsx) e os nomes das colunas da planilha baixada",
        "Os valores de custo dos produtos que estavam preenchidos de maneira errada pelo seller",
        "Os valores de preço dos produtos que o seller pediu para atualizar na próxima semana",
        "As linhas dos SKUs que ainda estão sem custo, que podem ser preenchidas com a correção",
      ],
      answer: [0],
      why: "Mantenha o formato e não mude os nomes das colunas; só os valores que precisam de correção são alterados.",
    },
    {
      q: "Onde fica o arquivo que o portal gerou quando o assessor clicou em Download no importador?",
      options: [
        "Na aba Importação, em Configurações, junto da última importação que foi feita na conta",
        "Na tela Pendentes, dentro da linha do último anúncio que foi corrigido pelo assessor",
        "Só no e-mail do assessor, que recebe o arquivo assim que ele termina de ser gerado",
        "Na lista do item Downloads, no menu lateral do portal, onde ficam os arquivos gerados",
      ],
      answer: [3],
      why: "O arquivo gerado fica na lista do item Downloads do menu.",
    },
  ]],
  "l0-8": [[
    "base",
    {
      q: "Qual é a ligação correta entre as telas que guardam a base de custo da conta?",
      options: [
        "O produto aponta para o anúncio, que traz o custo e o imposto cadastrados em cada SKU",
        "O SKU do anúncio aponta para o produto, que traz regra de imposto, fornecedor e custo",
        "O fornecedor aponta para o imposto, e o anúncio usa só o preço de venda para a margem",
        "O imposto aponta para a campanha, e é dela que a margem sai no portal da PriceBot",
      ],
      answer: [1],
      why: "O SKU do anúncio aponta para o produto, e é assim que o bot encontra o custo, o imposto e o fornecedor.",
    },
    {
      q: "Um produto aparece com regra e fornecedor “DESCONHECIDO” e custo R$ 0,00. Onde ele fica e o que acontece?",
      options: [
        "Em Anúncios > Erros, aguardando que o Mercado Livre libere o cadastro do produto no portal",
        "Em Anúncios > Pausados, porque o custo zero pausa o anúncio no marketplace automaticamente",
        "Em Verificação, com margem de 100%, porque o custo zero eleva a margem do anúncio ao máximo",
        "Em Produtos > Pendentes, sem margem calculável até completar regra, fornecedor e custo",
      ],
      answer: [3],
      why: "Produto sem custo fica em Produtos > Pendentes. Sem custo não existe margem, e sem margem a PriceBot não decide nada.",
    },
  ]],
  "l0-9": [[
    "base",
    {
      q: "O assessor alterou uma chave em Configurações, mas fechou a tela sem clicar em Salvar. O que vale?",
      options: [
        "A alteração vale na hora, e o Salvar só registra o histórico da mudança feita na tela",
        "Vale só para o próximo anúncio que for importado, mas não para a conta inteira do seller",
        "Nada: as alterações só passam a valer depois de clicar em Salvar, e Cancelar descarta",
        "Vale até o fim do dia, quando o portal descarta tudo o que não tiver sido salvo",
      ],
      answer: [2],
      why: "Cada tela de Configurações tem Cancelar e Salvar: nada vale até clicar em Salvar.",
    },
    {
      q: "Qual comportamento de margem abaixo do mínimo a Mamba usa na aba Precificação?",
      options: [
        "Baixar o preço base até a margem alcançar a mínima, ajustando o anúncio sozinho",
        "Não mudar o preço base e gerar um alerta, que leva o anúncio para a Verificação",
        "Pausar o anúncio no Mercado Livre até que o seller revise o custo do produto",
        "Subir a margem mínima do anúncio para igualar a margem que ele tem hoje no portal",
      ],
      answer: [1],
      why: "A Mamba não altera o preço base por contrato. O comportamento é não mudar o preço base e gerar um alerta, que leva o anúncio para a Verificação.",
    },
  ]],
  "l0-10": [
    [
      "base",
      {
        q: "O seller diz que um produto “sumiu” do cálculo de margem. Qual sequência de telas ajuda a investigar?",
        options: [
          "Produtos para ver custo e regra, Pendentes para ver o SKU e Verificação para ver alertas",
          "Home para ver o rebate do mês, Downloads para apagar a planilha e Catálogo para zerar o custo",
          "Pedidos para cancelar a venda do anúncio, Fornecedores para trocar o CNPJ e Impostos para apagar",
          "Configurações > Integrações para refazer o grant, Erros para limpar a fila e Home para zerar tudo",
        ],
        answer: [0],
        why: "Sumiu do cálculo costuma ser produto incompleto: custo e regra em Produtos, o vínculo de SKU em Pendentes e os alertas em Verificação.",
      },
      {
        q: "Qual é o caminho para corrigir os custos de muitos produtos de uma vez?",
        options: [
          "Editar um por um nos três pontinhos de cada anúncio, que é o único caminho disponível",
          "Produtos > Importar e exportar: baixar, corrigir, enviar de volta e conferir em Pendentes",
          "Apagar os produtos e esperar que o Mercado Livre devolva os custos pela integração da conta",
          "Configurações > Importação, ligando a chave de precificação para o portal estimar os custos",
        ],
        answer: [1],
        why: "A planilha exportada tem a mesma estrutura do setup; corrigida e enviada de volta, atualiza os custos de uma vez. Depois, confira em Pendentes.",
      },
    ],
    [
      "base",
      {
        q: "O seller diz que as vendas caíram esta semana, mas a Home mostra o mês em alta. Qual é o melhor caminho?",
        options: [
          "Olhar o cartão Últimos 7 dias, que compara com a semana anterior, e depois abrir os Pedidos",
          "Ignorar o relato do seller, porque o cartão do mês já mostra que a conta está crescendo bem",
          "Refazer o grant na hora, porque a Home deve estar lendo os dados da integração errada do seller",
          "Ligar a precificação automática de todos os anúncios para recuperar as vendas da semana toda",
        ],
        answer: [0],
        why: "O mês pode estar em alta e a semana em queda: o cartão de 7 dias compara com a semana anterior, e Pedidos mostra os anúncios por trás do número.",
      },
      {
        q: "Uma lista do portal aparece vazia para o seller. Qual é a ordem correta de verificação?",
        options: [
          "Refazer a integração, importar a planilha de novo e só depois olhar os filtros da lista",
          "Limpar os filtros, conferir a conta aberta e só então olhar a integração em Configurações",
          "Apagar o cadastro do seller e criar de novo, para que a lista volte a ser carregada",
          "Pedir ao seller que espere o mês fechar, pois as listas só funcionam depois do fechamento",
        ],
        answer: [1],
        why: "Lista vazia costuma ser filtro ou conta errada. Só depois de limpar filtros e conferir a conta faz sentido olhar a integração.",
      },
    ],
  ],
});

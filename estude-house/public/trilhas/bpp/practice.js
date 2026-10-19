/* Versões dos quizzes da trilha Brand Protection Program. A cada "tentar de novo" o aluno recebe outra versão.
   Casos, lojas e números são fictícios. */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
  "bpp-l1-1": [[
    "base",
    {
      q: "Qual seção do BPP funciona como a fila onde você revisa e confirma as denúncias que marcou?",
      options: [
        "Vendedores, que guarda o histórico de confiáveis e suspeitos",
        "Gestão de denúncias, que mostra o histórico e os relatórios",
        "Anúncios suspeitos, onde você confirma cada denúncia",
        "Contato, que reúne os vídeos, o FAQ e o canal de suporte",
      ],
      answer: [2],
      why: "Anúncios suspeitos é a fila de confirmação. Vendedores guarda marcações de vendedores, Gestão de denúncias guarda o histórico e Contato leva ao suporte.",
    },
    {
      q: "Você marcou cinco publicações como suspeitas e fechou a plataforma sem fazer mais nada. Qual é a situação delas?",
      options: [
        "As denúncias foram enviadas, porque marcar já conclui o processo",
        "Estão marcadas, mas só concluem se você confirmar em Anúncios suspeitos",
        "Foram canceladas, porque a plataforma exige que você fique logado",
        "Seguem para a análise do time, e a confirmação fica para depois",
      ],
      answer: [1],
      why: "Marcar como suspeita é só o começo. A denúncia só é concluída quando você a confirma na seção Anúncios suspeitos.",
    },
    {
      q: "Depois de marcar a publicação e escolher o motivo, o que o vídeo oficial manda fazer para concluir?",
      options: [
        "Cadastrar de novo o direito do cliente no menu principal",
        "Ir em Anúncios suspeitos para revisar e confirmar a denúncia",
        "Marcar o vendedor como confiável para fechar o processo",
        "Baixar o relatório em Gestão de denúncias e enviar ao suporte",
      ],
      answer: [1],
      why: "O vídeo manda acessar a seção Anúncios suspeitos para revisar e confirmar as denúncias feitas.",
    },
  ]],
  "bpp-l1-2": [[
    "base",
    {
      q: "Qual destes documentos o BPP aceita no cadastro de um direito?",
      options: [
        "Protocolo do pedido de registro, ainda sem decisão do órgão",
        "Certificado válido e concedido, em um dos formatos aceitos",
        "Certificado que venceu, desde que tenha sido concedido antes",
        "Declaração assinada pelo cliente afirmando ser o dono da marca",
      ],
      answer: [1],
      why: "Só valem certificados válidos e concedidos. Vencidos, em análise ou declarações do cliente não são aceitos.",
    },
    {
      q: "O certificado do cliente venceu no mês passado. O que isso muda no BPP?",
      options: [
        "Nada: as denúncias continuam normais até o fim do ano",
        "Só as denúncias de variações ficam bloqueadas, as demais seguem",
        "O direito aparece como vencido e as denúncias ficam travadas",
        "O Mercado Livre renova o certificado sozinho, sem aviso ao cliente",
      ],
      answer: [2],
      why: "Direito vencido trava as denúncias. É preciso renovar: três pontos na coluna Estado, Ver registros e anexar o certificado de renovação.",
    },
    {
      q: "O cliente tem só o comprovante de que pediu o registro da marca, sem decisão. O que acontece se ele enviar isso ao BPP?",
      options: [
        "Não é aceito: pedido em análise não é certificado concedido",
        "É aceito, mas só para denúncias de anúncios do tipo catálogo",
        "É aceito por 30 dias, até o órgão oficial decidir o pedido",
        "É aceito, e o direito fica ativo assim que o time responder",
      ],
      answer: [0],
      why: "Pedidos ainda em análise não são aceitos. O BPP só processa certificados válidos e concedidos.",
    },
  ]],
  "bpp-l2-1": [[
    "base",
    {
      q: "Para que serve marcar um revendedor autorizado como confiável no BPP?",
      options: [
        "Para abrir a denúncia dele com um motivo mais leve",
        "Para ele deixar de aparecer nas suas buscas futuras",
        "Para o Mercado Livre avisá-lo de que o cliente o monitora",
        "Para apagar do histórico as denúncias que já foram feitas",
      ],
      answer: [1],
      why: "Confiável tira o vendedor das suas buscas futuras. É útil para limpar a busca de revendedores legítimos, desde que você tenha certeza.",
    },
    {
      q: "Você marcou um vendedor como confiável e, semanas depois, ele passa a vender réplicas. Qual é o risco?",
      options: [
        "O Mercado Livre bloqueia a conta do cliente por marcar errado",
        "A denúncia dele é aberta automaticamente, sem você perceber",
        "Todas as suas denúncias antigas são canceladas na hora",
        "Você pode não ver, porque ele não volta a aparecer nas buscas",
      ],
      answer: [3],
      why: "Quem é marcado como confiável não volta a aparecer nas suas buscas, e uma infração nova pode passar despercebida.",
    },
    {
      q: "Você buscou por ID e a publicação apareceu na tela. Qual opção inicia o processo de denúncia?",
      options: [
        "Marcar como confiável, que já abre o menu de infrações",
        "Marcar como suspeita, que abre o menu de tipos de infração",
        "Baixar o relatório em Gestão de denúncias para anexar depois",
        "Confirmar direto em Anúncios suspeitos, sem marcar nada antes",
      ],
      answer: [1],
      why: "Marcar como suspeita inicia a denúncia e abre o menu com os tipos de infração. Confiável faz o contrário.",
    },
  ]],
  "bpp-l2-2": [[
    "base",
    {
      q: "Num catálogo, um vendedor oferece produto falsificado com a marca do cliente, que ele nunca fabricou. Qual caminho usar?",
      options: [
        "Marcar as fotos como suspeitas, com motivo de direitos conexos",
        "Marcar o vendedor como confiável e abrir a denúncia depois",
        "Reportar uma infração aos meus direitos, pelo produto em si",
        "Usar Denunciar no Mercado Pago, que também cobre catálogo",
      ],
      answer: [2],
      why: "Produto falsificado é denunciado pelo caminho do produto em si: reportar uma infração aos meus direitos e escolher o motivo.",
    },
    {
      q: "A descrição de um catálogo usa a marca do cliente de forma que pode gerar confusão com a marca registrada. Qual caminho usar?",
      options: [
        "Reportar infração aos meus direitos, pelo uso indevido",
        "Marcar as fotos como suspeitas, escolhendo imagem pessoal",
        "Denunciar o vendedor como site externo, pelo Mercado Pago",
        "Abrir uma denúncia de variação, selecionando a versão da marca",
      ],
      answer: [0],
      why: "O uso indevido da marca no título ou na descrição é denunciado no mesmo botão de reportar uma infração aos meus direitos.",
    },
    {
      q: "A foto de um catálogo usa, sem autorização, a imagem de uma modelo que posou para a campanha do cliente. Qual é o caminho?",
      options: [
        "Reportar o produto como falsificado, pelo botão de infração",
        "Marcar as fotos como suspeitas, por imagem pessoal sem autorização",
        "Marcar o vendedor como suspeito e escolher patente como motivo",
        "Denunciar pelo conteúdo do anúncio, por uso indevido da marca",
      ],
      answer: [1],
      why: "Problema na imagem é caminho de fotos: marcar fotos como suspeitas e escolher o motivo, que aqui é o uso de imagem pessoal sem autorização.",
    },
  ]],
  "bpp-l2-3": [[
    "base",
    {
      q: "Um anúncio tem versões em madeira e em plástico. Só a de plástico copia o desenho industrial do cliente. Como denunciar?",
      options: [
        "Marcar o anúncio inteiro, porque as duas versões dividem a página",
        "Esperar a versão de madeira copiar também, para denunciar junto",
        "Selecionar só a versão de plástico e marcar como suspeito",
        "Marcar o vendedor como confiável e denunciar só o plástico depois",
      ],
      answer: [2],
      why: "Na denúncia de variações você seleciona só a versão que infringe, escolhe o motivo e comenta os detalhes.",
    },
    {
      q: "Na denúncia de variações, o que vem depois de selecionar as versões que infringem?",
      options: [
        "Marcar como suspeito, escolher o motivo e comentar",
        "Baixar o relatório da denúncia e enviar por e-mail ao vendedor",
        "Cadastrar um novo direito para cada versão que foi selecionada",
        "Esperar o time do BPP escolher o motivo no lugar do cliente",
      ],
      answer: [0],
      why: "Depois de selecionar as versões, você marca como suspeito, escolhe o motivo da infração e adiciona um comentário. Ao final, confirma em Anúncios suspeitos.",
    },
    {
      q: "Como se localiza um anúncio agrupado (PDP Flex) para denunciar?",
      options: [
        "Abrindo Gestão de denúncias e filtrando pelos grupos de anúncios",
        "Esperando que ele apareça sozinho na lista de Anúncios suspeitos",
        "Pesquisando o nome do grupo na seção Vendedores do BPP",
        "Buscando pelo ID do produto e usando Marcar como suspeita",
      ],
      answer: [3],
      why: "O fluxo do agrupado começa buscando pelo ID do produto, usando o botão Marcar como suspeita e revisando os anúncios semelhantes.",
    },
  ]],
  "bpp-l2-4": [[
    "base",
    {
      q: "Em quanto tempo a equipe analisa uma denúncia de site externo, depois de gerar o ID do caso?",
      options: [
        "Em até 72 horas úteis",
        "Em até 48 horas corridas",
        "Em até 24 horas úteis",
        "Em até 10 dias úteis",
      ],
      answer: [0],
      why: "A análise de site externo leva até 72 horas úteis. As 48 horas são a média de resposta do suporte, que é outro canal.",
    },
    {
      q: "Um site de fora vende réplicas, mas cobra por outro meio de pagamento, não pelo Mercado Pago. O formulário Denunciar no Mercado Pago serve?",
      options: [
        "Serve, porque o formulário cobre qualquer site de venda online",
        "Serve, desde que o cliente anexe o certificado da marca",
        "Serve, mas a análise passa a levar o dobro do tempo normal",
        "Não serve: o time confere se o site usa o Mercado Pago como pagamento",
      ],
      answer: [3],
      why: "O formulário é para sites externos que usam o Mercado Pago como processador de pagamentos. O time verifica isso na análise.",
    },
    {
      q: "Um anúncio de réplica está publicado dentro do Mercado Livre. Dá para usar o formulário Denunciar no Mercado Pago?",
      options: [
        "Dá, porque o Mercado Pago também processa pagamentos do Mercado Livre",
        "Não: é só para sites externos, e anúncio segue o fluxo padrão",
        "Dá, desde que o anúncio tenha a tag azul de catálogo",
        "Não: anúncios do Mercado Livre não podem ser denunciados no BPP",
      ],
      answer: [1],
      why: "O formulário é exclusivo para sites externos. Anúncios do Mercado Livre usam o fluxo normal de denúncia.",
    },
  ]],
  "bpp-l2-5": [[
    "base",
    {
      q: "Antes de escrever ao suporte por causa de uma denúncia recusada, o que conferir?",
      options: [
        "Se o vendedor tem muitas vendas e boa reputação no anúncio",
        "Se a infração foi bem identificada e os direitos estão ativos",
        "Se o cliente já fez outras denúncias parecidas no mesmo mês",
        "Se a denúncia foi enviada em horário comercial e dia útil",
      ],
      answer: [1],
      why: "O vídeo manda verificar se a infração foi corretamente identificada e se os direitos estão marcados como ativos antes de contatar o suporte.",
    },
    {
      q: "Onde você vê o motivo pelo qual uma denúncia foi recusada?",
      options: [
        "Na seção Vendedores, dentro do perfil do vendedor denunciado",
        "No histórico de Gestão de denúncias, na coluna status",
        "Em Anúncios suspeitos, ao lado do botão de confirmar",
        "Em Minha conta, na lista de direitos cadastrados do cliente",
      ],
      answer: [1],
      why: "Em Gestão de denúncias, no histórico, a coluna status mostra o motivo da recusa.",
    },
    {
      q: "A ferramenta falha de forma estranha. Qual combinação o suporte recomenda tentar antes de pedir ajuda?",
      options: [
        "Reinstalar o navegador e criar uma nova conta de vendedor",
        "Limpar cookies e cache, usar janela anônima e desligar a VPN",
        "Reenviar a denúncia várias vezes seguidas, até ela passar",
        "Trocar o tipo de direito do cliente e cadastrar tudo outra vez",
      ],
      answer: [1],
      why: "As dicas são limpar cookies e cache, tentar uma janela anônima e não usar VPN. Se persistir, grave um vídeo do erro e anexe ao suporte.",
    },
  ]],
  "bpp-l3-1": [[
    "base",
    {
      q: "Um anúncio provavelmente infringe a marca do cliente, que tem direito ativo, mas você não tem prints nem comparação. Qual é a decisão?",
      options: [
        "Abrir agora, porque o time do BPP procura as provas sozinho",
        "Resolver por outro caminho, porque falta prova para denunciar",
        "Regularizar o direito primeiro, mesmo ele estando ativo",
        "Juntar a prova antes, para a denúncia entrar forte",
      ],
      answer: [3],
      why: "Direito ativo e infração provável, mas sem prova: a decisão é juntar prova antes de abrir.",
    },
    {
      q: "Um concorrente vende produto parecido, mais barato, com marca própria e sem copiar nada do cliente. Qual é a decisão do filtro?",
      options: [
        "Outro caminho: é concorrência, e não infração de PI",
        "Abrir agora, escolhendo o motivo de marca registrada",
        "Juntar prova do preço para anexar à denúncia de catálogo",
        "Regularizar o direito do cliente antes de qualquer movimento",
      ],
      answer: [0],
      why: "Produto parecido com marca própria e sem cópia de nada protegido é concorrência. O BPP é para violação de propriedade intelectual.",
    },
    {
      q: "O pedido de registro da marca ainda está em análise, e já aparece cópia do logo. Qual é a decisão?",
      options: [
        "Abrir agora, porque o logo copiado é uma infração evidente",
        "Resolver por outro caminho, porque logo não se denuncia no BPP",
        "Regularizar primeiro: esperar a concessão e reunir provas até lá",
        "Marcar o vendedor como confiável até o registro ser concedido",
      ],
      answer: [2],
      why: "Pedido em análise não é aceito. Reúna provas enquanto espera a concessão e cadastre o direito assim que ele estiver válido.",
    },
  ]],
  "bpp-l3-2": [
    [
      "base",
      {
        q: "Um vendedor copia o desenho industrial, cadastrado e ativo, de uma luminária do cliente. É caso de BPP?",
        options: [
          "Não: desenho industrial só pode ser tratado na Justiça",
          "Não: cópia de desenho é uma questão entre os dois vendedores",
          "Só se o vendedor tiver reputação baixa no Mercado Livre",
          "Sim: desenhos ou modelos industriais são um tipo de infração do BPP",
        ],
        answer: [3],
        why: "Desenhos ou modelos industriais estão entre os tipos de infração do menu. Com o direito cadastrado e ativo, cabe denúncia.",
      },
      {
        q: "Um anúncio de catálogo vende como produto uma amostra grátis que a marca do cliente distribui. É caso de BPP?",
        options: [
          "Sim: é item que não deveria estar à venda, e cabe denúncia",
          "Não: amostra grátis é assunto comercial entre vendedor e comprador",
          "Não: o catálogo só aceita denúncia de fotos copiadas",
          "Só se a amostra estiver com a embalagem original do cliente",
        ],
        answer: [0],
        why: "O vídeo de catálogo cita amostras grátis como itens que não deveriam estar à venda. O caminho é reportar uma infração aos meus direitos.",
      },
      {
        q: "Um anúncio usa a marca registrada do cliente no título para vender produto de outra marca, gerando confusão. É caso de BPP?",
        options: [
          "Não: título de anúncio é livre e não pode ser denunciado",
          "Sim: uso indevido da marca no conteúdo que pode gerar confusão",
          "Não: só o produto falsificado pode ser denunciado no BPP",
          "Só depois de o vendedor ser denunciado por três anúncios",
        ],
        answer: [1],
        why: "O uso indevido da marca no título ou na descrição, quando pode gerar confusão com uma marca registrada, é denunciável.",
      },
    ],
    [
      "base",
      {
        q: "Um concorrente lança produto parecido, com marca própria e preço menor, sem copiar nada do cliente. É caso de BPP?",
        options: [
          "Sim: o preço menor desvia vendas e configura infração de marca",
          "Não: é concorrência, e não violação de propriedade intelectual",
          "Sim, desde que as vendas dele passem as do cliente na categoria",
          "Só se o produto estiver na mesma página de catálogo do cliente",
        ],
        answer: [1],
        why: "Concorrência com marca própria e sem cópia de nada protegido não é infração de PI. O BPP não cuida de preço nem de competição.",
      },
      {
        q: "O cliente reclama do atendimento ruim de um vendedor que revende o produto original. É caso de BPP?",
        options: [
          "Sim: atendimento ruim prejudica a imagem da marca do cliente",
          "Sim, usando o motivo de direitos conexos para acelerar a análise",
          "Não: é uma questão comercial e de atendimento, e não de PI",
          "Só se houver mais de dez reclamações de compradores no anúncio",
        ],
        answer: [2],
        why: "Atendimento ruim de revendedor de produto original não envolve cópia de nada protegido. Trate com o revendedor ou pelos canais de atendimento.",
      },
      {
        q: "Um distribuidor autorizado anuncia o produto original, com fotos próprias, e escreve a marca do cliente corretamente. É caso de BPP?",
        options: [
          "Sim: usar a marca no título já é infração em qualquer caso",
          "Sim, como produto falsificado, para acelerar a análise do time",
          "Só se ele vender por um preço menor que o do cliente",
          "Não: produto original e fotos próprias não são infração de PI",
        ],
        answer: [3],
        why: "Produto original, fotos próprias e uso correto da marca por um distribuidor autorizado não violam propriedade intelectual. Se houver conflito, é comercial.",
      },
    ],
    [
      "base",
      {
        q: "O direito do cliente venceu ontem, e apareceu cópia do logo dele. Dá para denunciar agora?",
        options: [
          "Ainda não: renove o direito e só depois abra a denúncia",
          "Sim: a infração é evidente, e o prazo do direito é secundário",
          "Sim, mas apenas pelo caminho de variações do anúncio",
          "Ainda não: é preciso esperar 30 dias depois do vencimento",
        ],
        answer: [0],
        why: "Com o direito vencido o BPP não permite denunciar. Renove (Ver registros e certificado de renovação) e então abra.",
      },
      {
        q: "O cliente tem o certificado em PDF no computador, mas nunca cadastrou o direito no BPP. Dá para denunciar?",
        options: [
          "Sim: ter o certificado já basta para escolher o motivo",
          "Sim, desde que o PDF seja anexado à descrição da denúncia",
          "Não: o certificado precisa ser enviado e o direito estar ativo",
          "Não: o BPP só aceita direitos cadastrados pelo suporte",
        ],
        answer: [2],
        why: "O direito precisa ser cadastrado (Adicionar direitos, tipo e documentos) e aparecer como ativo. O motivo da denúncia vem dos direitos cadastrados.",
      },
      {
        q: "O cliente enviou o certificado ao BPP, mas o time ainda não confirmou o cadastro. O que fazer antes de denunciar?",
        options: [
          "Denunciar mesmo assim, pois o envio já vale como direito ativo",
          "Marcar os vendedores como suspeitos e aguardar a confirmação",
          "Trocar o tipo de direito, para o cadastro andar mais rápido",
          "Aguardar o contato do time e conferir o status ativo em Minha conta",
        ],
        answer: [3],
        why: "Depois do envio, o time entra em contato para pedir informação ou confirmar o cadastro. O status ativo, em Minha conta, é o sinal para denunciar.",
      },
    ],
    [
      "base",
      {
        q: "O cliente quer denunciar um site externo que vende réplicas, e pergunta se dá para usar a busca por vendedor. Qual é a resposta?",
        options: [
          "Dá: basta digitar a URL do site no campo de busca por vendedor",
          "Não: site externo com Mercado Pago tem formulário próprio",
          "Dá, mas só se o site estiver listado como vendedor no catálogo",
          "Não: o BPP não aceita denúncias de sites de fora do Mercado Livre",
        ],
        answer: [1],
        why: "A busca é para publicações do Mercado Livre. Site externo que usa Mercado Pago tem o formulário próprio.",
      },
      {
        q: "Um site fora do Mercado Livre faz transmissão ilegal de conteúdo e cobra pelo Mercado Pago. É caso de BPP?",
        options: [
          "Não: transmissão ilegal não está entre as categorias aceitas",
          "Só se o site vender também produtos físicos falsificados",
          "Não: o formulário só trata de marca falsificada",
          "Sim: transmissão ilegal é categoria do formulário de site externo",
        ],
        answer: [3],
        why: "O formulário cobre violações de marca, produtos falsificados, direitos conexos, transmissão ilegal e dispositivos ilegais, desde que o site use o Mercado Pago.",
      },
      {
        q: "Um anúncio de réplica está dentro do Mercado Livre. É caso do formulário Denunciar no Mercado Pago?",
        options: [
          "Sim: o Mercado Pago processa tudo o que o Mercado Livre vende",
          "Sim, desde que o anúncio tenha mais de dez vendas confirmadas",
          "Não: é só para site externo, e anúncio segue o fluxo padrão",
          "Não: anúncio do Mercado Livre não pode ser denunciado no BPP",
        ],
        answer: [2],
        why: "O formulário de Mercado Pago é exclusivo para sites externos. Para anúncios do Mercado Livre, use o fluxo padrão de denúncia.",
      },
    ],
  ],
  "bpp-l3-3": [
    [
      "base",
      {
        q: "A marca Brasa tem direito ativo. Um vendedor escreve “Brasa Original” no título, mas vende produto de outra marca, com 20 vendas. Há prints. Qual é a decisão?",
        options: [
          "Abrir agora, pelo uso indevido da marca no anúncio",
          "Juntar prova por mais um mês, antes de qualquer denúncia",
          "Resolver por outro caminho, porque é só um título de anúncio",
          "Regularizar o direito primeiro, mesmo ele estando ativo",
        ],
        answer: [0],
        why: "Direito ativo, marca no título gerando confusão e prova pronta: abrir agora, escolhendo o motivo conforme os direitos cadastrados e descrevendo com clareza.",
      },
      {
        q: "A loja Nuvem tem direito autoral ativo. Um catálogo usa a foto da campanha dela, e há prints guardados. Qual é a decisão?",
        options: [
          "Esperar o catálogo ter mais vendedores antes de abrir a denúncia",
          "Marcar o vendedor como confiável, para depois negociar com ele",
          "Abrir agora, marcando as fotos como suspeitas por direito autoral",
          "Regularizar o direito, porque o catálogo exige um certificado novo",
        ],
        answer: [2],
        why: "Direito ativo, imagem copiada e prova na mão: abrir agora pelo caminho de fotos do catálogo, com o motivo de direitos autorais.",
      },
      {
        q: "Uma réplica de relógio, com o logo do cliente copiado, é vendida com 50% de desconto. O direito está ativo, e as avaliações dizem “veio falsificado”. Qual é a decisão?",
        options: [
          "Outro caminho: o desconto grande é uma estratégia comercial",
          "Juntar informação sobre a rotina de entregas do vendedor",
          "Regularizar o direito do cliente antes de seguir adiante",
          "Abrir agora, com prints das avaliações e comparação com o original",
        ],
        answer: [3],
        why: "Produto com logo copiado, avaliações apontando falsificação e direito ativo formam um caso claro. Abrir agora, com as provas anexadas.",
      },
    ],
    [
      "base",
      {
        q: "Uma marca distribui fotos a distribuidores, e três anúncios usam essas fotos. Ninguém sabe quem tem autorização, mas o cliente quer denunciar os três. Qual é a decisão?",
        options: [
          "Abrir os três agora, porque as fotos pertencem ao cliente",
          "Juntar informação: confirmar quem está autorizado e denunciar o resto",
          "Marcar os três como confiáveis, para limpar a busca do cliente",
          "Resolver por outro caminho, sem abrir nenhuma denúncia no BPP",
        ],
        answer: [1],
        why: "Parte dos anúncios pode estar autorizada. Confirme a lista antes e denuncie só quem não tem autorização, para não atingir parceiro legítimo.",
      },
      {
        q: "Um vendedor escreve “compatível com Tork” no título de uma peça. O cliente quer denunciar. Qual é a postura mais prudente?",
        options: [
          "Abrir agora, porque citar a marca em qualquer frase é infração",
          "Ignorar, porque “compatível com” nunca gera nenhum problema",
          "Analisar se gera confusão, juntar prova e consultar o jurídico",
          "Regularizar o direito, que é o que impede esse tipo de denúncia",
        ],
        answer: [2],
        why: "É uma zona cinza. O critério é se o uso pode gerar confusão com a marca registrada. Junte prova e consulte o jurídico do cliente antes de decidir.",
      },
      {
        q: "O cliente jura que um anúncio tem um logo parecido com o dele, mas ninguém guardou print nem ID. Qual é a decisão?",
        options: [
          "Abrir agora, porque a lembrança do cliente já serve de prova",
          "Resolver por outro caminho, porque logo parecido é concorrência",
          "Regularizar o direito primeiro, mesmo sem saber o status dele",
          "Juntar prova antes: localizar o anúncio, guardar prints e o ID",
        ],
        answer: [3],
        why: "Sem prova, a denúncia fica fraca. Localize o anúncio, guarde prints e o ID, compare com o original e só então decida abrir.",
      },
    ],
    [
      "base",
      {
        q: "Um anúncio de cadernos tem sete capas. Só a capa “Galáxia” usa a ilustração autoral do cliente, com direito ativo. Qual é a decisão?",
        options: [
          "Abrir o anúncio inteiro, porque as sete capas dividem a página",
          "Abrir só na variação “Galáxia”, com o motivo de direitos autorais",
          "Resolver por outro caminho, porque ilustração é assunto comercial",
          "Juntar prova das outras seis capas antes de qualquer denúncia",
        ],
        answer: [1],
        why: "Só uma versão infringe. O fluxo de variações permite selecionar apenas a “Galáxia”, escolher o motivo e comentar, sem atingir as outras seis.",
      },
      {
        q: "Um anúncio tem três materiais. Só a versão em couro traz o logo falsificado do cliente; as outras duas são lisas. Qual é a decisão?",
        options: [
          "Denunciar as três versões, para o anúncio ser derrubado de uma vez",
          "Abrir só na variação em couro, com o motivo de marca registrada",
          "Marcar o vendedor como confiável e observar o anúncio por um mês",
          "Resolver por outro caminho, porque duas versões são legítimas",
        ],
        answer: [1],
        why: "Selecione apenas a versão em couro, escolha o motivo de marca registrada e comente os detalhes. As versões lisas ficam fora da denúncia.",
      },
      {
        q: "Um anúncio de camisetas tem 12 estampas, e duas copiam a arte do cliente, que tem direito ativo. Qual é a decisão?",
        options: [
          "Abrir o anúncio inteiro, porque as 12 estampas são do mesmo vendedor",
          "Esperar as outras dez estampas copiarem também, para denunciar junto",
          "Regularizar o direito, porque estampas exigem um certificado próprio",
          "Abrir só nas duas variações que copiam, com comentário dos detalhes",
        ],
        answer: [3],
        why: "Selecione apenas as duas estampas que infringem, escolha o motivo e comente. Denunciar as 12 atinge versões legítimas.",
      },
    ],
  ],
});

/* Telas do portal PriceBot usadas no módulo de ambientação.
   Cada tela tem a imagem (public/trilhas/pricebot/img/<id>.webp, tamanho w×h em pixels) e uma lista de áreas:
   [id, nome, x, y, largura, altura, o que é / para que serve, pergunta do exercício "ache na tela"]
   As áreas alimentam dois blocos de aula: `shot` (tela com marcações numeradas) e `find` (clique onde fica). */
(function () {
  const T = {};
  const tela = (id, w, h, alt, spots) => {
    T[id] = {
      id, w, h, alt, src: "/trilhas/pricebot/img/" + id + ".webp",
      spots: spots.map(([sid, label, x, y, sw, sh, what, ask]) => ({ id: sid, label, x, y, w: sw, h: sh, what, ask })),
    };
  };

  /* ───────── Home ───────── */
  tela("home", 1348, 544, "Tela inicial do portal PriceBot, com os cartões de faturamento, o quadro de dias sem vender e os três gráficos.", [
    ["h-menu", "Menu lateral recolhido", 6, 6, 60, 534,
      "Aqui o menu aparece só com ícones: casa (Home), troféu (Catálogo), lista (Tradicional), cédulas (Pedidos), lápis (Anúncios), cifrão (Impostos), prédio (Fornecedores), caixa (Produtos), seta para baixo (Downloads) e engrenagem (Configurações). Nas outras telas os mesmos itens aparecem com o nome."],
    ["h-mes", "Faturamento do mês atual", 92, 12, 868, 128,
      "Resume o mês corrente: faturamento, ticket médio (valor médio por pedido), rebate e margem.",
      "Clique no cartão que resume o faturamento do mês corrente."],
    ["h-mes-comp", "Mês atual × mês anterior", 108, 88, 340, 46,
      "Três valores lado a lado: o mês atual, o mês anterior inteiro e o mesmo período do mês anterior, este com a variação em % ao lado. Enquanto o mês não acaba, a comparação justa é com o terceiro, porque ele usa o mesmo número de dias.",
      "Clique no trio de valores que compara o mês atual com o mês anterior."],
    ["h-mes-kpi", "Ticket médio, rebate e margem", 556, 64, 392, 62,
      "Três indicadores do período: o valor médio por pedido, o rebate recebido (o desconto que volta para o seller nas campanhas incentivadas) e a margem.",
      "Clique nos indicadores de ticket médio, rebate e margem do mês."],
    ["h-7d", "Faturamento dos últimos 7 dias", 92, 182, 868, 128,
      "O mesmo resumo, só da última semana, comparado com a semana anterior. Mostra a tendência recente antes de o mês fechar.",
      "Clique no cartão dos últimos 7 dias."],
    ["h-dias", "Dias sem vender", 976, 12, 358, 338,
      "Lista os SKUs e há quantos dias cada um está sem vender. Serve para achar produto parado.",
      "Clique no quadro que lista os SKUs parados há mais tempo."],
    ["h-dias-dl", "Baixar a lista de dias sem vender", 1288, 22, 32, 32,
      "O ícone de download baixa a lista em planilha, pronta para enviar ao seller. O ícone ao lado ordena a lista.",
      "Clique no ícone que baixa a lista de dias sem vender."],
    ["h-tipo", "Distribuição por tipo", 90, 367, 404, 177,
      "Gráfico que separa os anúncios entre catálogo e tradicionais.",
      "Clique no gráfico que separa os anúncios entre catálogo e tradicional."],
    ["h-st-anuncios", "Status dos anúncios", 510, 367, 404, 177,
      "Gráfico com a situação dos anúncios da conta dentro da PriceBot.",
      "Clique no gráfico que mostra a situação dos anúncios."],
    ["h-st-catalogo", "Status do catálogo", 930, 367, 404, 177,
      "Gráfico de quantos anúncios estão ganhando, perdendo ou empatando o catálogo.",
      "Clique no gráfico que mostra se os anúncios estão ganhando ou perdendo catálogo."],
  ]);

  /* ───────── Catálogo ───────── */
  tela("catalogo", 1364, 547, "Lista Catálogo do portal PriceBot, com o menu lateral completo, os filtros e a tabela de anúncios.", [
    ["c-mn-home", "Home", 8, 13, 212, 36, "Abre o painel de resultados: faturamento, dias sem vender e os gráficos.",
      "Clique no item do menu que abre o painel de resultados (a tela inicial)."],
    ["c-mn-catalogo", "Catálogo", 8, 53, 212, 36, "Lista dos anúncios que disputam catálogo. É a tela aberta neste print: repare no item escuro no menu.",
      "Clique no item do menu onde ficam os anúncios que disputam catálogo."],
    ["c-mn-trad", "Tradicional", 8, 93, 212, 36, "Lista dos anúncios tradicionais, onde o bot gerencia as promoções.",
      "Clique no item do menu da lista de anúncios tradicionais."],
    ["c-mn-pedidos", "Pedidos", 8, 133, 212, 36, "Resultado das vendas. A seta à direita indica um submenu: Visão Geral e Pedidos.",
      "Clique no item do menu que leva às vendas e ao rebate (Pedidos)."],
    ["c-mn-anuncios", "Anúncios", 8, 173, 212, 36, "Central de anúncios. O submenu traz Anúncios, Pendentes, Pausados, Erros, Verificação e Importar e exportar.",
      "Clique no item do menu que abre a central de anúncios (Anúncios, Pendentes, Pausados...)."],
    ["c-mn-impostos", "Impostos", 8, 213, 212, 36, "Regras de imposto que entram na conta da margem.",
      "Clique no item do menu onde ficam as regras de imposto."],
    ["c-mn-fornec", "Fornecedores", 8, 253, 212, 36, "Cadastro dos fornecedores (as marcas ou fábricas dos produtos).",
      "Clique no item do menu onde ficam os fornecedores."],
    ["c-mn-produtos", "Produtos", 8, 293, 212, 36, "Cadastro de produtos, com SKU, regra de imposto, fornecedor e custo. O submenu traz Produtos, Pendentes e Importar e exportar.",
      "Clique no item do menu onde ficam os custos dos produtos."],
    ["c-mn-down", "Downloads", 8, 468, 212, 36, "Onde ficam os arquivos que você mandou gerar nas listas e nos importadores.",
      "Clique no item do menu onde ficam os arquivos baixados e gerados."],
    ["c-mn-config", "Configurações", 8, 508, 212, 36, "Integrações, margens padrão de importação, PMA e os comportamentos do bot.",
      "Clique no item do menu das configurações do bot."],
    ["c-f-mlb", "Filtro MLB", 254, 56, 160, 32, "Acha um anúncio pelo código MLB do Mercado Livre.",
      "Clique no filtro para buscar um anúncio pelo código MLB."],
    ["c-f-titulo", "Filtro Título", 419, 56, 160, 32, "Busca por palavras do título do anúncio.",
      "Clique no filtro para buscar pelo título do anúncio."],
    ["c-f-forn", "Filtro Fornecedor", 584, 56, 160, 32, "Mostra só os anúncios de um fornecedor.",
      "Clique no filtro que mostra só os anúncios de um fornecedor."],
    ["c-f-sku", "Filtro SKU", 749, 56, 160, 32, "Busca pelo SKU, o código interno do produto.",
      "Clique no filtro para buscar por SKU."],
    ["c-f-envio", "Filtro Envio", 914, 56, 160, 32, "Filtra pela modalidade de envio do anúncio.",
      "Clique no filtro da modalidade de envio."],
    ["c-f-proc", "Filtro Status de Processamento", 1079, 56, 160, 32, "Filtra pelo status de processamento do anúncio na PriceBot.",
      "Clique no filtro de status de processamento."],
    ["c-f-prec", "Filtro Precificação Automática", 254, 92, 160, 32, "Mostra só os anúncios com a precificação automática ligada ou só os desligados.",
      "Clique no filtro que separa anúncios com o bot ligado dos desligados."],
    ["c-f-acomp", "Filtro Acompanha Catálogo", 419, 92, 160, 32, "Mostra só os anúncios que acompanham (ou não) o catálogo.",
      "Clique no filtro que separa os anúncios que acompanham catálogo."],
    ["c-f-stcat", "Filtro Status do Catálogo", 584, 92, 160, 32, "Filtra por ganhando, perdendo ou empatando. Esse filtro só existe na lista de Catálogo; a lista Tradicional não o tem.",
      "Clique no filtro que mostra quem está ganhando ou perdendo catálogo."],
    ["c-dl", "Download Planilha", 1221, 8, 132, 32, "Baixa a lista em planilha, para trabalhar fora do portal ou enviar ao seller.",
      "Clique no botão que baixa a lista em planilha."],
    ["c-clear", "Limpar filtros", 1221, 93, 120, 32, "Zera todos os filtros de uma vez. Use antes de concluir que uma lista está vazia.",
      "Clique no botão que zera todos os filtros."],
    ["c-sort", "Ordenação", 1170, 93, 46, 32, "As setas abrem a ordenação da lista. O número vermelho avisa que já existe um critério de ordem aplicado.",
      "Clique no ícone de ordenação (as setas com um número vermelho)."],
    ["c-head", "Cabeçalho da tabela", 254, 138, 1086, 42, "Colunas: MLB, Fornecedor, SKU, Dias, Tipo, Link, Envio, Estoque e outras à direita. A tabela é larga, então use a barra de rolagem horizontal para ver o resto."],
    ["c-col-tipo", "Coluna Tipo", 958, 138, 95, 42, "Modalidade do anúncio: clássico ou premium.",
      "Clique no título da coluna que mostra se o anúncio é clássico ou premium."],
    ["c-col-link", "Coluna Link", 1058, 138, 66, 42, "Link direto para abrir o anúncio no Mercado Livre.",
      "Clique no título da coluna do link para o anúncio."],
    ["c-col-estoque", "Coluna Estoque", 1214, 138, 88, 42, "Quantidade em estoque do anúncio.",
      "Clique no título da coluna do estoque."],
    ["c-scroll", "Rolagem horizontal", 254, 518, 1086, 18, "Barra para rolar a tabela para o lado. Colunas importantes como Status ficam do lado direito, fora da tela.",
      "Clique na barra que rola a tabela para o lado."],
    ["c-empty", "Nenhum dado para exibir", 690, 326, 220, 24, "Mensagem de lista vazia. Antes de achar que algo quebrou, limpe os filtros e confira se a conta aberta é a do seller certo.",
      "Clique na mensagem que aparece quando a lista não tem nenhum resultado."],
  ]);

  /* ───────── Tradicional ───────── */
  tela("tradicional", 1362, 546, "Lista Tradicional do portal PriceBot, com os filtros e a tabela de anúncios.", [
    ["t-menu", "Tradicional (menu)", 7, 90, 215, 40, "O item escuro no menu mostra em qual tela você está.",
      "Clique no item do menu que está destacado (a tela aberta agora)."],
    ["t-filtros", "Filtros", 254, 54, 985, 70, "Os mesmos filtros do Catálogo (MLB, Título, Fornecedor, SKU, Envio, Status de Processamento, Precificação Automática e Acompanha Catálogo), menos o Status do Catálogo, que só existe na lista de Catálogo."],
    ["t-f-prec", "Filtro Precificação Automática", 254, 90, 160, 32, "Separa os anúncios com o bot ligado dos desligados.",
      "Clique no filtro da precificação automática."],
    ["t-f-sku", "Filtro SKU", 749, 54, 160, 32, "Busca pelo SKU do produto.",
      "Clique no filtro para buscar por SKU."],
    ["t-f-forn", "Filtro Fornecedor", 584, 54, 160, 32, "Mostra só os anúncios de um fornecedor.",
      "Clique no filtro de fornecedor."],
    ["t-sort", "Ordenação", 1170, 92, 46, 32, "As setas abrem a ordenação da lista. O número vermelho avisa que já existe um critério de ordem aplicado.",
      "Clique no ícone de ordenação (as setas com um número vermelho)."],
    ["t-dl", "Download Planilha", 1221, 6, 132, 32, "Baixa a lista em planilha.",
      "Clique no botão que baixa a lista em planilha."],
    ["t-clear", "Limpar filtros", 1221, 91, 120, 32, "Zera os filtros.",
      "Clique no botão que limpa os filtros."],
    ["t-tabela", "Tabela de anúncios", 254, 136, 1086, 380, "Mesma estrutura do Catálogo: MLB, Fornecedor, SKU, Dias, Tipo, Link, Envio, Estoque e preço, com rolagem para o lado."],
  ]);

  /* ───────── Pedidos: visão geral ───────── */
  tela("pedidos-visao", 1359, 553, "Visão Geral de Pedidos, com os botões de período, a faixa de indicadores e os gráficos.", [
    ["p-sub", "Submenu Pedidos", 18, 129, 140, 64, "Pedidos tem duas telas: Visão Geral (os indicadores e os gráficos) e Pedidos (a lista de anúncios com o resultado de cada um).",
      "Clique no item do submenu que abre os indicadores e gráficos de vendas (Visão Geral)."],
    ["p-btn-mes", "Mês Atual", 185, 266, 60, 33, "O botão laranja é o período selecionado. O padrão é o mês atual.",
      "Clique no botão do período selecionado agora (laranja)."],
    ["p-btn-ant", "Mês Anterior", 254, 266, 70, 33, "Mostra o mês anterior fechado.",
      "Clique no botão que mostra o mês anterior."],
    ["p-btn-30", "30 dias", 387, 266, 48, 33, "Os últimos 30 dias corridos, independente do mês.",
      "Clique no botão dos últimos 30 dias."],
    ["p-datas", "Datas livres", 559, 266, 236, 33, "Campos de data inicial e final, para escolher qualquer período.",
      "Clique nos campos de data para escolher um período livre."],
    ["p-k-fat", "Faturamento", 175, 314, 160, 45, "Total vendido no período escolhido.",
      "Clique no indicador do total vendido no período."],
    ["p-k-marg", "Margem", 342, 314, 163, 45, "Margem do período, em percentual.",
      "Clique no indicador da margem do período."],
    ["p-k-contrib", "Margem de contribuição", 509, 314, 160, 45, "Quanto sobra, em reais, de cada venda depois dos custos variáveis, para pagar o fixo e gerar lucro.",
      "Clique no indicador da margem de contribuição."],
    ["p-k-ped", "Pedidos", 676, 314, 160, 45, "Quantidade de pedidos no período.",
      "Clique no indicador da quantidade de pedidos."],
    ["p-k-neg", "Pedidos negativos", 843, 314, 160, 45, "Pedidos que fecharam com margem negativa, ou seja, no prejuízo. Se o número não é zero, vale investigar.",
      "Clique no indicador dos pedidos que deram prejuízo."],
    ["p-k-rebfat", "Rebate/Faturamento", 1010, 314, 160, 45, "Quanto o rebate representa do faturamento. É o rebate em percentual.",
      "Clique no indicador do rebate em percentual do faturamento."],
    ["p-k-reb", "Rebate", 1177, 314, 160, 45, "Valor do rebate recebido no período, em reais.",
      "Clique no indicador do rebate em reais."],
    ["p-grafico", "Faturamento por Dia", 175, 365, 815, 188, "Gráfico dia a dia. Os botões Faturamento e Margem, no canto, trocam o que o gráfico desenha.",
      "Clique no gráfico que mostra o faturamento dia a dia."],
    ["p-g-toggle", "Faturamento ou Margem", 875, 372, 108, 20, "Alterna o gráfico entre o faturamento e a margem.",
      "Clique nos botões que alternam o gráfico entre faturamento e margem."],
    ["p-grupo", "Faturamento por Grupo", 998, 365, 340, 188, "Ranking do faturamento e da margem agrupado por fornecedor ou por SKU, com os botões ao lado do título para trocar o agrupamento.",
      "Clique no quadro que agrupa o faturamento por fornecedor ou SKU."],
  ]);

  /* ───────── Pedidos: lista ───────── */
  tela("pedidos-lista", 1359, 558, "Lista de Pedidos do portal PriceBot, com a tabela de resultado por anúncio.", [
    ["l-periodo", "Botões de período", 185, 39, 610, 33, "Os mesmos botões da Visão Geral: Mês Atual, Mês Anterior, 7, 30, 60 e 90 dias e datas livres. O período vale para a tabela inteira.",
      "Clique nos botões que escolhem o período da lista."],
    ["l-filtros", "Botão Filtros", 1260, 38, 82, 32, "Abre os filtros da lista de pedidos.",
      "Clique no botão que abre os filtros da lista."],
    ["l-dl", "Download", 1272, 3, 70, 24, "Baixa a lista em planilha.",
      "Clique no botão que baixa a lista."],
    ["l-head", "Colunas da lista", 222, 112, 1118, 28, "MLB, Fornecedor, SKU, Pedidos, Faturamento, Margem R$, Margem % e Pedidos Negativos. Cada linha resume um anúncio no período: quantos pedidos, quanto faturou e com que margem."],
    ["l-c-margem", "Margem R$ e Margem %", 974, 112, 300, 28, "A margem de cada anúncio em reais e em percentual.",
      "Clique nas colunas que mostram a margem em reais e em percentual."],
    ["l-c-neg", "Pedidos Negativos", 1274, 112, 66, 28, "Quantos pedidos daquele anúncio deram prejuízo.",
      "Clique na coluna dos pedidos negativos."],
    ["l-pag", "Paginação", 625, 510, 300, 30, "Mostra quantos itens existem e deixa trocar de página e o tamanho da página (20 por padrão).",
      "Clique na área da paginação (itens mostrados, páginas e tamanho da página)."],
  ]);

  /* ───────── Anúncios ───────── */
  tela("anuncios", 1357, 559, "Lista de Anúncios do portal PriceBot, com as colunas de preço mínimo anunciado, precificação automática e margens.", [
    ["a-massa", "Editar em massa", 997, 3, 95, 24, "Edita as margens de vários anúncios de uma vez. Fica cinza até você marcar anúncios nas caixas da esquerda.",
      "Clique no botão que edita vários anúncios de uma vez."],
    ["a-importar", "Importar Planilha de Anúncios", 1097, 3, 148, 24, "Leva ao importador, onde você envia uma planilha de anúncios.",
      "Clique no botão que leva à importação de planilha de anúncios."],
    ["a-adicionar", "Adicionar Anúncio", 1250, 3, 100, 24, "Adiciona um anúncio à lista manualmente.",
      "Clique no botão que adiciona um anúncio manualmente."],
    ["a-filtros", "Filtros", 183, 39, 615, 24, "MLB, SKU, Status de Processamento, Precificação Automática e Acompanha Catálogo.",
      "Clique na linha de filtros da lista de anúncios."],
    ["a-semaforo", "Ponto colorido", 197, 100, 28, 386, "O ponto colorido à esquerda resume a situação do anúncio. O motivo de cada cor aparece na tela Verificação."],
    ["a-check", "Caixas de seleção", 244, 80, 22, 410, "Marcam os anúncios para ações em massa. A caixa do cabeçalho marca todos da página.",
      "Clique nas caixas de seleção dos anúncios."],
    ["a-dots", "Três pontinhos", 264, 100, 18, 386, "Menu do anúncio. Em detalhes dá para mudar a margem mínima, objetiva e máxima daquele anúncio.",
      "Clique nos três pontinhos que abrem o menu de um anúncio."],
    ["a-c-mlb", "Coluna MLB", 280, 74, 130, 26, "O código do anúncio no Mercado Livre."],
    ["a-c-sku", "Coluna SKU", 414, 74, 130, 26, "O código interno do produto. É o SKU que liga o anúncio ao custo cadastrado em Produtos.",
      "Clique no título da coluna do SKU."],
    ["a-c-pma", "Coluna PMA", 545, 74, 125, 26, "Preço mínimo anunciado, quando existe. Fica em branco nos anúncios sem PMA.",
      "Clique no título da coluna do preço mínimo anunciado (PMA)."],
    ["a-c-prec", "Coluna Precificação Automática", 676, 74, 140, 26, "Sim: o bot está gerenciando o anúncio. Não: está desligado.",
      "Clique no título da coluna que mostra se o bot está ligado no anúncio."],
    ["a-c-acomp", "Coluna Acompanhar Catálogo", 816, 74, 140, 26, "Sim: o anúncio acompanha o catálogo.",
      "Clique no título da coluna que mostra se o anúncio acompanha catálogo."],
    ["a-c-min", "Coluna Margem Mínima", 956, 74, 128, 26, "O piso: abaixo dessa margem o bot não entra em campanha.",
      "Clique no título da coluna da margem mínima."],
    ["a-c-obj", "Coluna Margem Objetivo", 1086, 74, 128, 26, "A margem que o bot procura ter.",
      "Clique no título da coluna da margem objetivo."],
    ["a-c-max", "Coluna Margem Máxima", 1216, 74, 108, 26, "O teto de margem do anúncio.",
      "Clique no título da coluna da margem máxima."],
    ["a-pag", "Paginação", 550, 512, 440, 28, "Mostrando 1 a 20 de 188 itens: a lista tem 188 anúncios e mostra 20 por página.",
      "Clique na área que mostra quantos itens a lista tem."],
    ["a-pagsize", "Itens por página", 918, 512, 62, 28, "Troca quantos anúncios aparecem por página. A edição em massa vale por página, então um número maior reduz as rodadas.",
      "Clique no seletor de itens por página."],
  ]);

  /* ───────── Anúncios pendentes ───────── */
  tela("pendentes", 1364, 555, "Anúncios Pendentes do portal PriceBot, com SKU NAO_LOCALIZADO e precificação automática desligada.", [
    ["pe-menu", "Submenu Anúncios", 24, 166, 140, 176, "Anúncios, Pendentes, Pausados, Erros, Verificação e Importar e exportar. As bolinhas escuras são a contagem de itens: 58 pendentes, 14 pausados e 29 em verificação.",
      "Clique no item do submenu que mostra os anúncios pausados."],
    ["pe-lote", "Ações em Lote", 950, 5, 148, 24, "Menu de ações para vários anúncios de uma vez. O número 58 é o total de pendentes.",
      "Clique no botão de ações em lote."],
    ["pe-importar", "Importar Planilha de Anúncios", 1105, 5, 148, 24, "Envia uma planilha de anúncios, a mesma do importador.",
      "Clique no botão que importa planilha de anúncios."],
    ["pe-sku", "SKU NAO_LOCALIZADO", 400, 104, 130, 392, "Muitos pendentes trazem SKU NAO_LOCALIZADO: o anúncio não tem um SKU que a PriceBot consiga ligar a um produto. Outros trazem um SKU (0037, 0038...) que também aparece em Produtos, na lista de Pendentes.",
      "Clique na coluna onde aparece o SKU NAO_LOCALIZADO."],
    ["pe-x", "X vermelho", 242, 104, 18, 392, "Remove o item da fila de pendentes. Só use depois de entender por que ele está ali."],
    ["pe-prec", "Precificação Automática: Não", 660, 104, 100, 392, "Todos os pendentes aparecem com o bot desligado. Eles só entram na precificação depois que a pendência é resolvida.",
      "Clique na coluna que mostra o bot desligado nos pendentes."],
  ]);

  /* ───────── Anúncios pausados ───────── */
  tela("pausados", 1365, 553, "Anúncios Pausados do portal PriceBot, com o tipo de problema Pausados e o status Pausado no Mercado Livre.", [
    ["pa-menu", "Pausados (14)", 24, 222, 140, 30, "O item escuro mostra a tela aberta. O número 14 é a quantidade de anúncios pausados.",
      "Clique no item destacado do submenu (a tela aberta agora)."],
    ["pa-tipo", "Tipo do Problema", 438, 34, 122, 38, "Pausados, Erros e Verificação usam a mesma tela. O que muda é o Tipo do Problema, já preenchido ao entrar por cada item do submenu.",
      "Clique no filtro Tipo do Problema."],
    ["pa-dots", "Pontos vermelhos", 208, 105, 20, 376, "Aqui todos os pontos são vermelhos: o problema vem do status do anúncio no Mercado Livre."],
    ["pa-statusml", "Status ML: Pausado", 958, 80, 84, 408, "O status do anúncio no Mercado Livre. Em laranja, Pausado.",
      "Clique na coluna do status do anúncio no Mercado Livre."],
    ["pa-problema", "Problema", 1163, 80, 200, 408, "O motivo, escrito por extenso: Item com status 'paused' no Mercado Livre. Um anúncio pausado só volta a vender quando é reativado no Mercado Livre.",
      "Clique na coluna que explica o motivo do problema."],
    ["pa-dl", "Download", 1278, 5, 80, 26, "Baixa a lista de pausados em planilha.",
      "Clique no botão que baixa a lista."],
  ]);

  /* ───────── Anúncios com erro ───────── */
  tela("erros", 1357, 553, "Anúncios com erro do portal PriceBot. A lista está vazia: Nenhum dado para exibir.", [
    ["er-menu", "Erros (submenu)", 21, 250, 140, 28, "A tela Erros não mostra contador porque a lista está vazia.",
      "Clique no item do submenu que está destacado."],
    ["er-tipo", "Tipo do Problema: Erros", 436, 34, 122, 38, "Filtro já preenchido com Erros.",
      "Clique no filtro que já vem preenchido com Erros."],
    ["er-colunas", "Colunas", 285, 76, 1060, 24, "MLB, SKU, PMA, Precificação Automática, Acompanhar Catálogo, Status ML, Status Catálogo e Problema: as mesmas das outras telas da central de anúncios."],
    ["er-vazio", "Nenhum dado para exibir", 696, 278, 160, 22, "Lista vazia. Nesta tela é boa notícia: nenhum anúncio com erro.",
      "Clique na mensagem que mostra que não há nenhum anúncio com erro."],
  ]);

  /* ───────── Verificação ───────── */
  tela("verificacao", 1365, 553, "Anúncios em Verificação do portal PriceBot, com os problemas 'Nenhuma promoção atinge a margem', 'Margem abaixo da mínima' e 'under_review'.", [
    ["v-menu", "Verificação (29)", 24, 282, 140, 30, "A fila de itens que pedem decisão de uma pessoa. O número 29 é a quantidade de itens.",
      "Clique no item do submenu que está destacado."],
    ["v-tipo", "Tipo do Problema: Verificação manual", 437, 34, 122, 38, "O filtro vem preenchido com Verificação manual.",
      "Clique no filtro Tipo do Problema."],
    ["v-dots", "Pontos coloridos", 208, 105, 20, 380, "A cor acompanha o tipo de problema: verde para 'nenhuma promoção atinge a margem', laranja para 'margem abaixo da mínima' e vermelho para anúncio em revisão no Mercado Livre."],
    ["v-statusml", "Status ML", 958, 80, 82, 408, "Ativo (verde) ou Em revisão: é o status do anúncio no Mercado Livre."],
    ["v-statuscat", "Status Catálogo: Perdendo", 1050, 80, 100, 408, "Em vermelho, Perdendo: o anúncio está perdendo o catálogo.",
      "Clique na coluna que mostra que o anúncio está perdendo o catálogo."],
    ["v-prob1", "Nenhuma promoção atinge a margem", 1166, 106, 170, 20, "Há campanhas disponíveis, mas nenhuma deixaria o anúncio dentro da margem. O bot não entra. Nestes casos o status do catálogo costuma estar Perdendo.",
      "Clique no problema que diz que nenhuma promoção atinge a margem."],
    ["v-prob2", "Margem abaixo da mínima — ajuste manual", 1166, 133, 170, 20, "O preço base já deixa a margem abaixo da mínima. No comportamento padrão o bot não muda o preço base e gera este alerta: alguém precisa decidir, em geral o seller reprecificando.",
      "Clique no problema que pede ajuste manual por margem abaixo da mínima."],
    ["v-prob3", "Item com status under_review", 1166, 241, 170, 20, "O Mercado Livre colocou o anúncio em revisão. Só se resolve no Mercado Livre.",
      "Clique no problema que informa que o anúncio está em revisão no Mercado Livre."],
  ]);

  /* ───────── Importador de anúncios ───────── */
  tela("anuncios-importar", 1361, 555, "Importador de Anúncios do portal PriceBot, com o menu de Download aberto.", [
    ["i-carregar", "Carregar planilha de anúncios", 191, 59, 193, 31, "Envia ao portal uma planilha de anúncios preenchida. O formato aceito é .xls ou .xlsx.",
      "Clique no botão que envia uma planilha de anúncios para o portal."],
    ["i-download", "Download", 393, 59, 114, 31, "Abre as opções de planilha para baixar.",
      "Clique no botão que abre as opções de download."],
    ["i-ativos", "Anúncios Ativos", 400, 102, 118, 24, "Baixa a planilha dos anúncios ativos.",
      "Clique na opção que baixa os anúncios ativos."],
    ["i-pend", "Anúncios Pendentes", 400, 138, 118, 24, "Baixa a planilha dos anúncios pendentes, para completar fora do portal e importar de volta.",
      "Clique na opção que baixa os anúncios pendentes."],
    ["i-det", "Anúncios com detalhes", 400, 174, 128, 24, "Baixa a planilha com mais colunas por anúncio.",
      "Clique na opção que baixa os anúncios com detalhes."],
    ["i-formato", "Formato aceito", 516, 66, 112, 16, "Só entram arquivos .xls e .xlsx. Um CSV ou um PDF não passa.",
      "Clique no aviso dos formatos de arquivo aceitos."],
    ["i-retornar", "Retornar", 1254, 11, 94, 30, "Volta para a lista de anúncios.",
      "Clique no botão que volta para a lista."],
  ]);

  /* ───────── Impostos ───────── */
  tela("impostos", 1358, 561, "Tela de Impostos do portal PriceBot, com as regras SIMPLES 10/2026 e Geral.", [
    ["im-add", "Adicionar Regra", 1266, 7, 82, 24, "Cria uma regra de imposto nova.",
      "Clique no botão que cria uma regra de imposto."],
    ["im-filtros", "Filtros", 189, 45, 245, 22, "Filtros pelo nome do imposto e por Simples Nacional."],
    ["im-base", "Base Imposto", 228, 80, 112, 82, "O nome da regra: SIMPLES 10/2026 e Geral. Cada produto aponta para uma dessas regras, na coluna Regra de Imposto da tela Produtos.",
      "Clique na coluna com o nome das regras de imposto."],
    ["im-trib", "ICMS, DIFAL, PIS, COFINS e IPI", 340, 80, 448, 82, "Os tributos da regra. Nos prints todos estão em 0%.",
      "Clique nas colunas de ICMS, DIFAL, PIS, COFINS e IPI."],
    ["im-simples", "Simples Nacional", 796, 80, 90, 82, "A alíquota do Simples. Nos prints as duas regras usam 8% e deixam os outros tributos em 0%, porque quem está no Simples paga uma alíquota única.",
      "Clique na coluna da alíquota do Simples Nacional."],
    ["im-cred", "Créditos", 888, 80, 236, 82, "Crédito PIS/COFINS sobre comissão e Crédito ICMS frete venda. Nos prints, os dois estão como Não.",
      "Clique nas colunas dos créditos de PIS/COFINS e de ICMS sobre frete."],
    ["im-uf", "Colunas por estado", 1126, 80, 224, 82, "Colunas AC, AL, AM, AP e seguintes: o imposto por estado. Role a tabela para o lado para ver todos.",
      "Clique nas colunas que mostram o imposto por estado."],
    ["im-pag", "Paginação", 620, 513, 300, 28, "Mostrando 1 a 2 de 2 itens: a conta tem duas regras.",
      "Clique na área que mostra quantas regras existem."],
  ]);

  /* ───────── Fornecedores ───────── */
  tela("fornecedores", 1363, 553, "Tela de Fornecedores do portal PriceBot, com a lista de 23 fornecedores.", [
    ["fo-add", "Adicionar Fornecedor", 1246, 5, 102, 26, "Cadastra um fornecedor novo.",
      "Clique no botão que cadastra um fornecedor."],
    ["fo-filtros", "Filtros", 191, 43, 245, 22, "Busca por Razão Social ou por Nome Fantasia."],
    ["fo-head", "Colunas", 230, 80, 1118, 24, "CNPJ, Razão Social, Nome Fantasia, CEP, Endereço, Email, Contato e Telefone."],
    ["fo-nomes", "Razão Social e Nome Fantasia", 384, 106, 310, 380, "Os nomes dos fornecedores, que nos prints são marcas. Esse nome é o que aparece na coluna Fornecedor de Produtos e nos filtros das listas.",
      "Clique nas colunas com o nome dos fornecedores."],
    ["fo-contato", "CNPJ e contato", 230, 106, 150, 380, "CNPJ e dados de contato podem ficar vazios, como nos prints. No dia a dia o que importa é o nome do fornecedor.",
      "Clique na coluna do CNPJ."],
    ["fo-pag", "Paginação", 600, 512, 350, 28, "Mostrando 1 a 20 de 23 itens: são 23 fornecedores, em duas páginas.",
      "Clique na área que mostra quantos fornecedores existem."],
  ]);

  /* ───────── Produtos ───────── */
  tela("produtos", 1361, 554, "Tela de Produtos do portal PriceBot, com SKU, regra de imposto, fornecedor e custos.", [
    ["pr-importar", "Importar Produtos", 1153, 6, 98, 24, "Leva ao importador de produtos e custos.",
      "Clique no botão que importa produtos."],
    ["pr-add", "Adicionar Produto", 1258, 6, 92, 24, "Cadastra um produto, um por vez.",
      "Clique no botão que cadastra um produto."],
    ["pr-sub", "Submenu Produtos", 22, 251, 140, 90, "Produtos, Pendentes (31) e Importar e exportar."],
    ["pr-sku", "SKU", 232, 80, 160, 26, "A chave do produto. O mesmo SKU aparece nos anúncios e é por ele que o bot encontra o custo.",
      "Clique no título da coluna do SKU."],
    ["pr-regra", "Regra de Imposto", 392, 80, 158, 26, "A regra da tela Impostos que vale para o produto. Nos prints, Geral.",
      "Clique no título da coluna da regra de imposto."],
    ["pr-forn", "Fornecedor", 550, 80, 158, 26, "O fornecedor do produto, da tela Fornecedores.",
      "Clique no título da coluna do fornecedor."],
    ["pr-custo", "Custo", 710, 80, 158, 26, "O custo do produto para o seller.",
      "Clique no título da coluna do custo."],
    ["pr-custoreal", "Custo Real", 868, 80, 158, 26, "O custo depois de somar os adicionais. Nos prints os adicionais são zero, por isso Custo e Custo Real coincidem.",
      "Clique no título da coluna do custo real."],
    ["pr-cpa", "Custo Percentual Adicional", 1028, 80, 160, 26, "Um percentual extra sobre o custo. Nos prints, 0%.",
      "Clique no título da coluna do custo percentual adicional."],
    ["pr-cfa", "Custo Fixo Adicional", 1188, 80, 155, 26, "Um valor fixo extra em reais por unidade. Nos prints, R$ 0,00.",
      "Clique no título da coluna do custo fixo adicional."],
    ["pr-pag", "Paginação", 560, 513, 420, 28, "Mostrando 1 a 20 de 194 itens: são 194 produtos cadastrados.",
      "Clique na área que mostra quantos produtos existem."],
  ]);

  /* ───────── Produtos pendentes ───────── */
  tela("produtos-pendentes", 1362, 558, "Produtos Pendentes do portal PriceBot, com regra de imposto e fornecedor DESCONHECIDO e custo R$ 0,00.", [
    ["pp-menu", "Pendentes (31)", 22, 279, 140, 30, "A fila de produtos incompletos. O número 31 é a quantidade de pendentes.",
      "Clique no item do submenu que está destacado."],
    ["pp-sku", "SKUs pendentes", 270, 104, 110, 384, "SKUs que a PriceBot encontrou, mas que ainda não têm regra de imposto, fornecedor e custo.",
      "Clique na coluna dos SKUs pendentes."],
    ["pp-desc", "DESCONHECIDO", 432, 104, 320, 384, "Regra de Imposto e Fornecedor aparecem como DESCONHECIDO: ninguém ainda disse à PriceBot a qual regra e a qual fornecedor o produto pertence.",
      "Clique nas colunas que mostram DESCONHECIDO."],
    ["pp-custo", "Custo R$ 0,00", 750, 104, 100, 384, "Custo zerado. Sem custo não existe margem, e sem margem a PriceBot não decide nada.",
      "Clique na coluna do custo zerado."],
    ["pp-x", "X vermelho", 238, 104, 20, 384, "Remove o item da fila de pendentes. Só use depois de entender por que ele está ali."],
  ]);

  /* ───────── Importador de produtos ───────── */
  tela("produtos-importar", 1356, 561, "Importador de Produtos do portal PriceBot, com os botões Planilha de Produtos, Planilha de Custos e Download.", [
    ["pi-prod", "Planilha de Produtos", 187, 64, 150, 30, "Envia a planilha com o cadastro dos produtos.",
      "Clique no botão que envia a planilha de produtos."],
    ["pi-custos", "Planilha de Custos", 346, 64, 140, 30, "Envia a planilha com os custos dos produtos.",
      "Clique no botão que envia a planilha de custos."],
    ["pi-down", "Download", 495, 64, 113, 30, "Baixa a planilha de produtos para corrigir fora do portal e importar de volta.",
      "Clique no botão que baixa a planilha de produtos."],
    ["pi-formato", "Formato aceito", 617, 70, 112, 16, "Só entram arquivos .xls e .xlsx.",
      "Clique no aviso dos formatos aceitos."],
    ["pi-retornar", "Retornar", 1250, 16, 94, 30, "Volta para a lista de produtos.",
      "Clique no botão que volta para a lista."],
    ["pi-menu", "Importar e exportar (menu)", 20, 314, 140, 30, "O item escuro mostra a tela aberta, dentro do submenu Produtos.",
      "Clique no item destacado do submenu."],
  ]);

  /* ───────── Configurações: integrações ───────── */
  tela("cfg-integracoes", 1358, 555, "Configurações, aba Integrações, com o Mercado Livre integrado e o AnyMarket não integrado.", [
    ["ci-menu", "Menu de Configurações", 177, 36, 150, 235, "Integrações, Importação, PMA, Precificação, CEP ME1, Margem Negativa e Trava de Preço. Cada item abre uma tela de ajustes."],
    ["ci-ml", "Mercado Livre: Integrado", 337, 36, 242, 158, "O selo verde Integrado diz que a conta está conectada. Sem integração, a PriceBot não enxerga os anúncios.",
      "Clique no cartão da integração que está ativa (Integrado)."],
    ["ci-atualizar", "Atualizar", 361, 152, 64, 26, "Atualiza a integração com o Mercado Livre.",
      "Clique no botão Atualizar da integração com o Mercado Livre."],
    ["ci-link", "Link para terceiro", 431, 152, 124, 26, "O link que você envia a outra pessoa, o seller, para ela autorizar a conta. É o grant do módulo de Setup.",
      "Clique no botão do link que o seller usa para autorizar a conta."],
    ["ci-any", "AnyMarket: Não integrado", 596, 36, 240, 158, "O selo vermelho Não integrado mostra uma ferramenta ainda desconectada.",
      "Clique no cartão da integração que está desconectada (Não integrado)."],
    ["ci-integrar", "Integrar", 686, 152, 60, 26, "Inicia a integração do AnyMarket.",
      "Clique no botão que inicia a integração com o AnyMarket."],
  ]);

  /* ───────── Configurações: importação ───────── */
  tela("cfg-importacao", 1365, 563, "Configurações, aba Importação, com as margens padrão e os botões de importação e precificação automáticas.", [
    ["cim-head", "Importação Automática", 355, 20, 500, 50, "Valores padrão para a importação automática de anúncios do Mercado Livre.",
      "Clique no título que explica para que serve esta tela."],
    ["cim-min", "Margem Mínima padrão", 355, 126, 320, 52, "A margem mínima que um anúncio importado recebe. Nos prints, 5.",
      "Clique no campo da margem mínima padrão."],
    ["cim-obj", "Margem Objetivo padrão", 688, 126, 320, 52, "A margem objetivo dos anúncios importados. Nos prints, 11.",
      "Clique no campo da margem objetivo padrão."],
    ["cim-max", "Margem Máxima padrão", 1021, 126, 320, 52, "A margem máxima dos anúncios importados. Nos prints, 40.",
      "Clique no campo da margem máxima padrão."],
    ["cim-imp", "Importação Automática (chave)", 355, 214, 170, 44, "Ligada: os anúncios do Mercado Livre entram sozinhos na PriceBot.",
      "Clique na chave que está ligada (laranja)."],
    ["cim-prec", "Precificação Automática (chave)", 688, 214, 170, 44, "Desligada nos prints: o anúncio importado chega com o bot desligado, e alguém liga depois de conferir custo e margem. Se estivesse ligada, o bot começaria a trabalhar assim que o anúncio entrasse.",
      "Clique na chave que está desligada."],
    ["cim-botoes", "Cancelar e Salvar", 1190, 276, 152, 28, "Nada vale até você clicar em Salvar.",
      "Clique no botão que grava as alterações."],
  ]);

  /* ───────── Configurações: PMA ───────── */
  tela("cfg-pma", 1364, 560, "Configurações, aba PMA, com a chave Ativar PMA ligada.", [
    ["cp-desc", "Preço Mínimo Anunciado (PMA)", 385, 18, 420, 40, "O texto da tela resume a regra: o sistema nunca permitirá que o preço do anúncio fique abaixo do valor definido no PMA.",
      "Clique no texto que explica a regra do PMA."],
    ["cp-toggle", "Ativar PMA", 355, 92, 80, 48, "A chave que faz o PMA valer. Preencher a coluna na planilha não basta: sem esta chave ligada, o preço mínimo é só um dado guardado.",
      "Clique na chave que ativa o PMA."],
    ["cp-botoes", "Cancelar e Salvar", 1190, 154, 152, 28, "Clique em Salvar depois de mexer na chave.",
      "Clique no botão que grava a alteração."],
  ]);

  /* ───────── Configurações: precificação ───────── */
  tela("cfg-precificacao", 1363, 561, "Configurações, aba Precificação, com os seis comportamentos do bot e a opção padrão de cada um.", [
    ["cpr-c1", "Margem abaixo do mínimo", 362, 78, 535, 118, "Escolhe o que o bot faz quando o preço base (DE) já deixa a margem abaixo da mínima. O padrão é não mudar o preço base e gerar um alerta, por isso esses anúncios aparecem na Verificação.",
      "Clique no comportamento que decide o que fazer quando o preço base já deixa a margem abaixo da mínima."],
    ["cpr-c2", "Promoção não permitida (tradicional)", 907, 78, 436, 118, "O que fazer quando o Mercado Livre não permite que um anúncio tradicional participe de uma promoção. O padrão é aguardar ser permitido.",
      "Clique no comportamento de promoção não permitida para anúncios tradicionais."],
    ["cpr-c3", "Estratégia de precificação com promoções", 362, 200, 535, 118, "Como o bot escolhe a promoção nos anúncios tradicionais. O padrão é Equilibrado: preço de sugestão mais próximo da margem objetiva.",
      "Clique no comportamento que define a estratégia de escolha de promoção dos anúncios tradicionais."],
    ["cpr-c4", "Promoção não permitida (catálogo)", 907, 200, 436, 120, "O mesmo caso, para catálogo: você poderia ganhar o catálogo com margem saudável, mas o Mercado Livre não deixa aplicar a promoção. O padrão é aguardar.",
      "Clique no comportamento de promoção não permitida para anúncios de catálogo."],
    ["cpr-c5", "Não há margem para ganhar catálogo", 362, 322, 535, 118, "Quando o anúncio não consegue ganhar o catálogo porque a margem ficaria abaixo da mínima, com qual referência manter o preço. Nos prints, usar o preço mínimo.",
      "Clique no comportamento para quando não há margem para ganhar o catálogo."],
    ["cpr-c6", "Prioridade no catálogo", 907, 330, 436, 176, "Escolhe entre ganhar catálogo com a melhor margem possível ou ganhar usando promoções incentivadas com rebate, mesmo com margem menor (sempre acima da mínima). O padrão é priorizar promoções com rebate.",
      "Clique no comportamento que escolhe entre margem maior e promoções com rebate no catálogo."],
    ["cpr-tags", "Etiquetas tradicional e catálogo", 524, 86, 104, 18, "As etiquetas dizem a quais anúncios o comportamento se aplica: tradicional, catálogo ou os dois.",
      "Clique nas etiquetas que dizem a quais anúncios a regra se aplica."],
    ["cpr-salvar", "Salvar configurações", 1184, 538, 136, 23, "Grava os seis comportamentos. Sem clicar aqui, a mudança se perde.",
      "Clique no botão que grava os comportamentos."],
    ["cpr-menu", "Menu de Configurações", 177, 36, 150, 235, "Integrações, Importação, PMA, Precificação, CEP ME1, Margem Negativa e Trava de Preço. O item escuro mostra a tela aberta."],
  ]);

  window.TELAS = Object.assign(window.TELAS || {}, T);
})();

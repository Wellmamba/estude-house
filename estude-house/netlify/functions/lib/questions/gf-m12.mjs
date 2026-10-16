export default [
  // ───── Aula 1: Planilhas e painéis ─────
  {
    id: "gf-m12-01", module: "gf-m12", topic: "PROCX e cruzamento de bases",
    q: "Qual é a função do PROCX numa planilha de rentabilidade do cliente?",
    options: [
      "Buscar uma chave, como o SKU, numa tabela e trazer o custo que está ao lado",
      "Somar todas as vendas de um SKU que apareçam repetidas na base exportada",
      "Escolher entre dois resultados, por exemplo marcar a margem como ok ou negativa",
      "Resumir milhares de pedidos em um quadro pequeno, arrastando campos na tela"
    ],
    answer: [0],
    why: "O PROCX é a fórmula de busca: acha a chave numa tabela e devolve o valor de outra coluna. Somar é papel do SOMASE, decidir é do SE e resumir pedidos é da tabela dinâmica."
  },
  {
    id: "gf-m12-02", module: "gf-m12", topic: "Sobra por SKU (DRE)",
    q: "Em um exemplo, um SKU vende por R$ 150, com produto R$ 60, comissão R$ 21, frete R$ 15, imposto R$ 9 e Ads R$ 7,50. Quanto sobra por venda?",
    options: [
      "Sobram R$ 45,00 por venda",
      "Sobram R$ 16,50 por venda",
      "Sobram R$ 54,00 por venda",
      "Sobram R$ 37,50 por venda"
    ],
    answer: [3],
    why: "150 - 60 - 21 - 15 - 9 - 7,50 = 37,50. Esquecer o Ads dá 45,00; esquecer imposto e Ads dá 54,00."
  },
  {
    id: "gf-m12-03", module: "gf-m12", topic: "Tabela dinâmica",
    q: "Você exportou 5 mil linhas de pedidos e o gestor quer ver as vendas por SKU em cada semana. Qual recurso resolve mais rápido?",
    options: [
      "Criar uma tabela dinâmica com SKU nas linhas, semana nas colunas e soma de vendas",
      "Filtrar a base SKU por SKU e somar as vendas de cada semana em uma célula à parte",
      "Criar uma fórmula SE para cada linha e contar manualmente os resultados marcados",
      "Usar o SEERRO na base inteira, para que os erros desapareçam e sobrem só as vendas"
    ],
    answer: [0],
    why: "A tabela dinâmica resume milhares de linhas em um quadro e permite trocar linhas e colunas em poucos cliques. As outras opções são lentas ou resolvem outro problema."
  },
  {
    id: "gf-m12-04", module: "gf-m12", topic: "Painel por conta",
    q: "Marque todas as características de um bom painel por conta.",
    options: [
      "Poucos números, ligados a decisões da conta",
      "Mesma ordem e mesmo formato toda semana",
      "Comparação com a semana anterior da conta",
      "Dezenas de gráficos sem uma ordem fixa",
      "Só o faturamento, que o seller entende melhor"
    ],
    answer: [0, 1, 2],
    why: "Painel bom é enxuto, repetível e comparável: poucos números, mesma ordem e comparação com o período anterior. Excesso de gráficos ou só faturamento esconde a margem e não leva a decisão."
  },
  {
    id: "gf-m12-05", module: "gf-m12", topic: "Do relatório ao painel",
    q: "Qual afirmação sobre o caminho do relatório ao painel está errada?",
    options: [
      "A base exportada deve ser limpa antes de cruzar com o custo",
      "O cruzamento por SKU precisa que o código seja igual nas duas tabelas",
      "Se uma etapa falha, o painel mostra números errados mesmo parecendo bonito",
      "Se uma etapa falha, o painel corrige sozinho o erro quando atualizar"
    ],
    answer: [3],
    why: "O painel só mostra o que a base entrega. Se uma etapa anterior falha, o erro passa adiante e aparece em um gráfico bonito. A conferência é sua."
  },
  {
    id: "gf-m12-06", module: "gf-m12", topic: "Sobra por SKU (DRE)",
    q: "Em um exemplo, um SKU vende por R$ 200 e sobram R$ 30 depois de todos os custos. Qual é a margem sobre o preço?",
    options: [
      "Margem de 20% sobre o preço",
      "Margem de 30% sobre o preço",
      "Margem de 15% sobre o preço",
      "Margem de 6,7% sobre o preço"
    ],
    answer: [2],
    why: "Margem = sobra ÷ preço = 30 ÷ 200 = 0,15, ou 15%. Dividir o preço pela sobra, ou usar o valor em reais como percentual, são erros comuns."
  },

  // ───── Aula 2: Leitura de cenário ─────
  {
    id: "gf-m12-07", module: "gf-m12", topic: "Variação de vendas",
    q: "Em um exemplo, as vendas foram R$ 8.000 na semana passada e R$ 5.600 nesta semana. Qual é a variação?",
    options: [
      "Queda de 40%, que é a diferença dividida pelas vendas desta semana",
      "Queda de 70%, que é a venda desta semana dividida pela anterior",
      "Queda de 30%, que é a diferença dividida pelas vendas da semana passada",
      "Queda de 43%, que é a diferença dividida pelo valor de 5.600"
    ],
    answer: [2],
    why: "Variação = (5.600 - 8.000) ÷ 8.000 = -2.400 ÷ 8.000 = -30%. A base da comparação é o período anterior, e não o atual."
  },
  {
    id: "gf-m12-08", module: "gf-m12", topic: "Leitura de cenário",
    q: "Num exemplo, as visitas do anúncio caíram 30%, a conversão ficou igual e o preço não mudou. Onde você olha primeiro?",
    options: [
      "Fotos, preço do concorrente e reputação, que mudam a decisão de quem visita",
      "Ads, posição do anúncio e sazonalidade, que mudam a quantidade de visitas",
      "Ruptura de estoque, que costuma derrubar de uma vez a conversão do anúncio",
      "Ticket médio, que mostra quantas pessoas chegaram ao anúncio na semana"
    ],
    answer: [1],
    why: "Conversão igual significa que quem chegou comprou na mesma proporção. O que mudou foi o tráfego, então Ads, posição e época do ano entram primeiro."
  },
  {
    id: "gf-m12-09", module: "gf-m12", topic: "ACOS, ROAS e TACOS",
    q: "Em um exemplo, a semana teve Ads de R$ 600, vendas com Ads de R$ 3.000 e vendas totais de R$ 12.000. Quais são ACOS e TACOS?",
    options: [
      "ACOS de 5% e TACOS de 20%",
      "ACOS de 20% e TACOS de 20%",
      "ACOS de 5% e TACOS de 5%",
      "ACOS de 20% e TACOS de 5%"
    ],
    answer: [3],
    why: "ACOS = Ads ÷ vendas com Ads = 600 ÷ 3.000 = 20%. TACOS = Ads ÷ vendas totais = 600 ÷ 12.000 = 5%. O ROAS seria 3.000 ÷ 600 = 5x."
  },
  {
    id: "gf-m12-10", module: "gf-m12", topic: "Suspeitos fora da conta",
    q: "Marque todos os suspeitos que ficam fora da conta quando as vendas caem.",
    options: [
      "O concorrente baixou o preço ou entrou forte",
      "A época do ano mudou, como depois de uma data comemorativa",
      "A plataforma mudou uma regra de categoria ou frete",
      "O estoque do seu SKU principal acabou no meio da semana",
      "A nota de reputação do vendedor caiu depois de atrasos"
    ],
    answer: [0, 1, 2],
    why: "Concorrente, sazonalidade e regras da plataforma vêm de fora e você não controla. Estoque e reputação ficam dentro da conta, e você corrige."
  },
  {
    id: "gf-m12-11", module: "gf-m12", topic: "ACOS, ROAS e TACOS",
    q: "Qual afirmação sobre o ROAS está errada?",
    options: [
      "Ele mostra quanto se vende para cada R$ 1 gasto em Ads",
      "Um ROAS de 5x significa R$ 5 vendidos por R$ 1 de Ads",
      "Ele pode subir se o gasto cair mais do que a venda",
      "ROAS maior quer dizer sempre que a conta vendeu mais"
    ],
    answer: [3],
    why: "O ROAS é uma razão entre venda e gasto. Se o gasto despenca mais que a venda, a razão sobe mesmo com a conta vendendo menos. Por isso ele nunca é lido sozinho."
  },
  {
    id: "gf-m12-12", module: "gf-m12", topic: "Erro da métrica isolada",
    q: "O relatório do cliente mostra só um ROAS bonito. Antes de comemorar, o que você cruza com ele?",
    options: [
      "O gasto com Ads, as vendas totais e a margem do período",
      "A cor do gráfico e o formato do relatório que o painel gerou",
      "Somente o número de fotos de cada anúncio ativo da conta",
      "O ROAS de um período muito mais antigo, sem outro dado"
    ],
    answer: [0],
    why: "O ROAS só faz sentido ao lado do gasto, das vendas totais e da margem. Uma métrica isolada pode esconder queda de vendas ou prejuízo."
  },

  // ───── Aula 3: Causa raiz e hipóteses ─────
  {
    id: "gf-m12-13", module: "gf-m12", topic: "Hipóteses testáveis",
    q: "Qual hipótese está bem escrita para uma queda de vendas?",
    options: [
      "Algo mudou na conta; vou mexer em tudo ao mesmo tempo e ver o que acontece",
      "O concorrente baixou o preço; comparo os preços e vejo se a conversão caiu",
      "O mercado está fraco; espero algumas semanas para ver se a situação muda",
      "O Ads é o culpado; pauso as campanhas e confio que a causa vai aparecer sozinha"
    ],
    answer: [1],
    why: "Uma boa hipótese afirma uma causa, diz qual teste a confirma (comparar preços) e qual sinal esperar nos dados (queda de conversão na mesma semana)."
  },
  {
    id: "gf-m12-14", module: "gf-m12", topic: "Sintoma e causa raiz",
    q: "O seller diz: “minhas vendas caíram 30%, faz alguma coisa”. Como você conduz o diagnóstico?",
    options: [
      "Aumentar o Ads na hora, já que mais investimento resolve quase toda queda de vendas",
      "Baixar todos os preços da conta, para recuperar a conversão o mais rápido possível",
      "Montar a árvore de hipóteses, testar as mais prováveis e só então propor a ação",
      "Esperar duas semanas, porque a queda costuma voltar ao normal sem nenhuma ação"
    ],
    answer: [2],
    why: "A queda é o sintoma. Sem testar as hipóteses você aplica um remédio no escuro, que pode custar caro e não atacar o motivo."
  },
  {
    id: "gf-m12-15", module: "gf-m12", topic: "Prioridade de testes",
    q: "Você tem duas hipóteses: A é provável e leva 10 minutos para testar; B é improvável e leva 2 dias. Qual é a ordem mais eficiente?",
    options: [
      "Não testar nenhuma até ter certeza absoluta de qual é a causa",
      "Testar B primeiro, porque o que dá mais trabalho é mais importante",
      "Testar as duas juntas, mudando o máximo possível de coisas",
      "Testar A primeiro e só ir para B se A for descartada"
    ],
    answer: [3],
    why: "Teste barato e provável vem primeiro: você aprende rápido e economiza tempo. Se A for descartada, B entra na fila."
  },
  {
    id: "gf-m12-16", module: "gf-m12", topic: "Hipóteses testáveis",
    q: "Marque todas as partes de uma hipótese bem formulada.",
    options: [
      "A afirmação: o que pode ter causado a queda",
      "O teste: qual dado ou ação confirma ou descarta",
      "O critério: o que eu veria nos números se fosse verdade",
      "O culpado: o nome de quem errou na conta",
      "O resultado já garantido antes de olhar os dados"
    ],
    answer: [0, 1, 2],
    why: "Hipótese boa tem afirmação, teste e critério. Apontar culpado ou garantir o resultado antes de olhar os dados vira viés, e não diagnóstico."
  },
  {
    id: "gf-m12-17", module: "gf-m12", topic: "Teste da hipótese de preço",
    q: "Em um exemplo, seu preço é R$ 90 e o concorrente passou de R$ 95 para R$ 70. Qual é a leitura e o próximo passo?",
    options: [
      "Você passou de R$ 5 mais barato para R$ 20 mais caro; verifico se a conversão caiu junto",
      "Você continua R$ 5 mais barato; a conversão não tem relação com o preço do concorrente",
      "Você ficou R$ 25 mais caro; o preço do concorrente explica sozinho qualquer queda",
      "Você passou de R$ 5 mais caro para R$ 20 mais barato; a conversão deve subir"
    ],
    answer: [0],
    why: "Antes: 90 - 95 = -5 (você mais barato). Agora: 90 - 70 = +20 (você mais caro). Isso é pista, mas só vira causa se a conversão caiu na mesma semana."
  },
  {
    id: "gf-m12-18", module: "gf-m12", topic: "Correlação e causa",
    q: "Na semana em que o Ads subiu, as vendas também subiram, e era a semana de uma data comemorativa. O que você conclui?",
    options: [
      "Que o Ads causou todo o aumento, pois as duas coisas subiram juntas na semana",
      "Que a data comemorativa causou tudo e o Ads não teve efeito nenhum",
      "Que os efeitos se misturam; só dá para separar testando uma mudança por vez",
      "Que os números estão errados, porque duas coisas não podem subir juntas"
    ],
    answer: [2],
    why: "Correlação não prova causa. Ads e data comemorativa mudaram juntos e os efeitos se misturam. Para separar, compare períodos parecidos e mude uma coisa por vez."
  },

  // ───── Aula 4: Análises avançadas, automação e IA ─────
  {
    id: "gf-m12-19", module: "gf-m12", topic: "Curva ABC com margem",
    q: "Em um exemplo, seis SKUs faturam R$ 4.800, 3.000, 1.000, 600, 400 e 200 (total R$ 10.000). Na regra 80/15/5, qual é a curva do 3º SKU, com 88% acumulado?",
    options: [
      "Curva A, porque está entre os três maiores faturamentos da conta",
      "Curva B, porque seu acumulado passou de 80% e ficou até 95%",
      "Curva C, porque seu faturamento é menor do que o dos dois primeiros",
      "Curva B, porque a margem dele é a segunda maior dentre os SKUs"
    ],
    answer: [1],
    why: "A vai até cerca de 80% acumulado (os dois primeiros, 78%). O terceiro leva o acumulado a 88%, dentro da faixa B (até 95%). A curva ABC usa faturamento acumulado, não margem."
  },
  {
    id: "gf-m12-20", module: "gf-m12", topic: "Curva ABC com margem",
    q: "Em um exemplo, o SKU A fatura R$ 6.000 com margem de 5% e o SKU B fatura R$ 2.000 com margem de 25%. Qual afirmação é correta?",
    options: [
      "Os dois geram o mesmo lucro, porque a soma de faturamento e margem é igual",
      "O SKU A gera R$ 300 de lucro e o SKU B gera R$ 50: A rende mais",
      "O SKU A gera R$ 300 de lucro e o SKU B gera R$ 500: B rende mais",
      "O SKU A gera R$ 1.200 de lucro e o SKU B gera R$ 500: A rende mais"
    ],
    answer: [2],
    why: "SKU A: 6.000 x 5% = 300. SKU B: 2.000 x 25% = 500. Faturar mais não garante lucrar mais: a margem decide quanto sobra."
  },
  {
    id: "gf-m12-21", module: "gf-m12", topic: "Desconto e elasticidade",
    q: "Em um exemplo, um desconto reduz o lucro por unidade de R$ 40 para R$ 30. Para manter o lucro total, as vendas precisam subir cerca de quanto?",
    options: [
      "Cerca de 25%, que é a perda de R$ 10 dividida por R$ 40",
      "Cerca de 33%, porque R$ 40 ÷ R$ 30 dá 1,33 vez o volume anterior",
      "Cerca de 75%, que é o lucro de R$ 30 dividido por R$ 40",
      "Cerca de 10%, que é a perda de R$ 10 por unidade vendida"
    ],
    answer: [1],
    why: "Lucro total igual exige 40 x unidades antigas = 30 x unidades novas. A razão é 40 ÷ 30 = 1,33: cerca de 33% mais unidades."
  },
  {
    id: "gf-m12-22", module: "gf-m12", topic: "Coorte",
    q: "Qual pergunta é típica de uma análise de coorte?",
    options: [
      "Qual SKU tem o maior faturamento acumulado do mês na conta?",
      "Qual foi o ROAS médio de toda a conta na semana passada?",
      "Como os anúncios lançados em março vendem nas semanas seguintes?",
      "Qual é o preço médio de todos os produtos da loja hoje?"
    ],
    answer: [2],
    why: "Coorte é um grupo que começou junto, como os anúncios lançados no mesmo mês, acompanhado ao longo do tempo. As outras perguntas olham a conta toda em um único momento."
  },
  {
    id: "gf-m12-23", module: "gf-m12", topic: "Automação e IA com critério",
    q: "Marque todas as boas práticas ao usar IA em análises de conta.",
    options: [
      "Conferir na planilha ou no painel os números que a IA citou",
      "Seguir a política interna da Mamba para dados de clientes",
      "Usar o texto da IA como rascunho e revisá-lo antes de enviar",
      "Colar dados sigilosos do cliente sem pedir autorização",
      "Enviar o resumo ao seller sem ler, para ganhar tempo"
    ],
    answer: [0, 1, 2],
    why: "IA acelera o rascunho, mas a conferência dos números, o cuidado com os dados do cliente e a revisão final são responsabilidade da pessoa."
  },
  {
    id: "gf-m12-24", module: "gf-m12", topic: "Ads e vendas orgânicas",
    q: "Num exemplo, o Ads de um SKU ficou pausado por três semanas e as vendas orgânicas dele não mudaram. O que você conclui?",
    options: [
      "O Ads sempre aumenta o orgânico; o dado da conta deve estar errado",
      "Nesta conta o efeito do Ads parece pequeno; vale repetir o teste em outro período",
      "O orgânico não depende de nada que a conta faça, então não adianta medir",
      "O Ads deve ser desligado em todos os SKUs da conta a partir de hoje mesmo"
    ],
    answer: [1],
    why: "Ads puxar o orgânico é hipótese, e quem confirma é o dado da conta. Aqui o efeito parece pequeno, mas um teste só não encerra a questão. Repita antes de generalizar."
  }
];

const M = "gf-m6";
export default [
  {
    id: "gf-m6-01", module: M, topic: "Regimes tributários",
    q: "Qual frase descreve melhor a diferença entre o Lucro Presumido e o Lucro Real?",
    options: [
      "No Presumido o imposto parte do lucro apurado; no Real, de um lucro presumido",
      "No Presumido não há imposto sobre a venda; no Real tudo vai em uma guia única",
      "No Presumido o imposto parte de um lucro presumido; no Real, do lucro apurado",
      "Os dois partem de um valor fixo por mês, e só mudam as datas de pagamento"
    ],
    answer: [2],
    why: "Presumido usa uma margem de lucro presumida sobre a receita. Real usa o lucro apurado na contabilidade. A guia única é característica do Simples.",
  },
  {
    id: "gf-m6-02", module: M, topic: "Escolha do regime",
    q: "O cliente diz: “meu amigo paga menos imposto no Simples, vou pedir o Simples também”. Qual é a melhor resposta?",
    options: [
      "Se o amigo paga menos, o Simples é o melhor regime para qualquer empresa do ramo",
      "Você pode pedir a troca agora, já que não existe prazo para mudar de regime",
      "Regime só importa para quem fatura muito e não muda a margem dos produtos",
      "Depende de margem, mix e faturamento de cada empresa, e o contador decide"
    ],
    answer: [3],
    why: "Regime ideal é caso a caso, e a decisão é do contador. Comparar com o amigo ignora margem, mix e faturamento do seu cliente.",
  },
  {
    id: "gf-m6-03", module: M, topic: "Regime, CNAE e empresa",
    q: "Marque todas as afirmações corretas sobre regime, CNAE e tipo de empresa.",
    options: [
      "CNAE é o código da atividade que consta no CNPJ da empresa",
      "Tipo de empresa, como Ltda., é o mesmo que regime tributário",
      "Regime é a forma como a empresa calcula e paga os impostos",
      "Limites de faturamento são fixos e podem ser decorados de uma vez",
      "Quem avalia a troca de regime do cliente é o contador dele"
    ],
    answer: [0, 2, 4],
    why: "CNAE é atividade, regime é a regra do imposto e tipo de empresa é o formato jurídico. Limites mudam, então se confere o valor vigente.",
  },
  {
    id: "gf-m6-04", module: M, topic: "Sobra por regime",
    q: "(números de exemplo) Venda de R$ 200: produto R$ 100, comissão e frete R$ 44, imposto de 6% sobre o preço. Qual é a sobra?",
    options: [
      "R$ 56,00 de sobra",
      "R$ 44,00 de sobra",
      "R$ 50,00 de sobra",
      "R$ 32,00 de sobra"
    ],
    answer: [1],
    why: "Imposto: 6% de 200 = 12. Sobra: 200 − 100 − 44 − 12 = 44. R$ 56 esquece o imposto; R$ 50 trata o 6 como reais; R$ 32 dobra o imposto.",
  },
  {
    id: "gf-m6-05", module: M, topic: "NF-e e CFOP",
    q: "O que torna uma NF-e válida para circular?",
    options: [
      "Ser autorizada pela Sefaz, que devolve uma chave de acesso para a nota",
      "Estar impressa em papel com o carimbo do marketplace onde o pedido foi feito",
      "Ser emitida pelo cliente final depois que o pedido chegar na casa dele",
      "Ter o mesmo valor do repasse que o marketplace pagou ao seller no mês"
    ],
    answer: [0],
    why: "A NF-e é digital e só vale depois de autorizada pela Sefaz, que gera a chave de acesso de 44 dígitos.",
  },
  {
    id: "gf-m6-06", module: M, topic: "CFOP e rota da venda",
    q: "Uma venda sai de São Paulo para o Rio de Janeiro. Qual primeiro dígito do CFOP é esperado?",
    options: [
      "5, porque o vendedor é de São Paulo e a nota é emitida por lá",
      "2, porque o produto entra no estado do Rio de Janeiro agora",
      "7, porque a venda passou por duas regiões diferentes do país",
      "6, porque é nota de saída e a mercadoria vai para outro estado"
    ],
    answer: [3],
    why: "O primeiro dígito segue a rota: 5 é saída dentro do estado e 6 é saída para outro estado. 7 é exterior e 2 é entrada.",
  },
  {
    id: "gf-m6-07", module: M, topic: "NF-e e CFOP",
    q: "Marque todas as afirmações corretas sobre NF-e e CFOP.",
    options: [
      "O CFOP classifica o produto em 8 dígitos para calcular o imposto",
      "Primeiro dígito 5 indica saída dentro do estado",
      "Você pode escolher o CFOP completo sem consultar o contador",
      "Primeiro dígito 6 indica saída para outro estado",
      "Devolução é a nota no sentido contrário, com CFOP próprio"
    ],
    answer: [1, 3, 4],
    why: "O CFOP mostra o motivo e a rota da operação. A classificação em 8 dígitos é o NCM, e o CFOP completo quem define é o contador.",
  },
  {
    id: "gf-m6-08", module: M, topic: "Conversa com o contador",
    q: "Qual atitude na conversa com o contador do cliente está ERRADA?",
    options: [
      "Levar o pedido e o print da nota junto com a dúvida",
      "Pedir a orientação por escrito para guardar o motivo da resposta",
      "Afirmar ao seller que o CFOP está certo antes de o contador confirmar",
      "Perguntar “isso está certo?” em vez de afirmar a resposta pronta"
    ],
    answer: [2],
    why: "Você não finge ser contador: pergunta, leva provas e registra a resposta. Prometer ao seller algo que o contador não confirmou é o erro.",
  },
  {
    id: "gf-m6-09", module: M, topic: "Origem da mercadoria",
    q: "Qual campo do cadastro diz se o produto é nacional ou importado?",
    options: [
      "NCM, que traz 8 dígitos e classifica a mercadoria pelo tipo de produto",
      "Origem da mercadoria, informada no cadastro do produto",
      "CEST, que indica o produto com ST e o enquadramento dele na cadeia",
      "CFOP, que mostra o motivo da operação e a rota da venda na nota"
    ],
    answer: [1],
    why: "A origem fica no cadastro e diz se o produto é nacional ou importado. NCM classifica, CEST liga à ST e CFOP é da operação.",
  },
  {
    id: "gf-m6-10", module: M, topic: "Auditoria de cadastro",
    q: "Ao auditar 10 produtos, você acha um com ST e CEST vazio. O que faz?",
    options: [
      "Preenche com o CEST de um produto parecido para não deixar o campo vazio",
      "Deixa vazio, porque o CEST só existe para produto importado de outro país",
      "Marca como dúvida, pede o CEST ao fornecedor ou ao contador e registra a fonte",
      "Apaga o NCM do produto para o ERP preencher sozinho o que estiver faltando"
    ],
    answer: [2],
    why: "O CEST vem de fonte confiável e fica registrado. Chutar um parecido ou apagar o NCM cria erro novo em toda nota daquele produto.",
  },
  {
    id: "gf-m6-11", module: M, topic: "Erros de cadastro",
    q: "Marque todos os erros de cadastro que geram risco fiscal.",
    options: [
      "NCM copiado de outro produto que só parece parecido",
      "Produto importado marcado como nacional no cadastro",
      "Título do anúncio com uma palavra-chave a mais",
      "Foto principal do anúncio com fundo branco",
      "CSOSN usado por empresa que está no regime normal"
    ],
    answer: [0, 1, 4],
    why: "NCM, origem e CST/CSOSN alimentam o imposto da nota. Título e foto afetam o anúncio, mas não o cálculo fiscal.",
  },
  {
    id: "gf-m6-12", module: M, topic: "Auditoria de cadastro",
    q: "Num cadastro, o NCM está certo, mas a origem está errada em 3 de 10 produtos. Qual é a leitura da auditoria?",
    options: [
      "Há 3 produtos com risco de imposto errado: corrigir esses e conferir a fonte",
      "A auditoria está aprovada, porque o NCM é o único campo que gera risco",
      "Os 10 produtos estão errados, pois a origem errada contamina o NCM dos demais",
      "Só será problema se o marketplace reclamar de algum desses três produtos"
    ],
    answer: [0],
    why: "Cada campo errado gera risco no produto onde está. Corrija os 3 com fonte confiável, sem esperar reclamação.",
  },
  {
    id: "gf-m6-13", module: M, topic: "Por dentro e por fora",
    q: "Qual par de imposto e forma de cobrança está certo?",
    options: [
      "ICMS é por fora, somado ao preço; IPI é por dentro, já incluído no produto",
      "Os dois são por dentro, mas o IPI só aparece em nota de devolução de cliente",
      "Os dois são por fora e por isso aparecem sempre em linhas separadas da nota",
      "ICMS é por dentro, já incluído no preço; IPI é por fora, somado ao produto"
    ],
    answer: [3],
    why: "Por dentro o imposto sai do próprio preço (regra de bolso do ICMS). Por fora ele soma por cima do valor do produto (regra de bolso do IPI).",
  },
  {
    id: "gf-m6-14", module: M, topic: "Sobra com imposto e DIFAL",
    q: "(números de exemplo) Preço R$ 120, produto R$ 50, comissão e frete R$ 30, ICMS e PIS/COFINS somando 16% do preço, DIFAL de R$ 4. Qual é a sobra?",
    options: [
      "R$ 20,80 de sobra",
      "R$ 12,80 de sobra",
      "R$ 16,80 de sobra",
      "R$ 36,00 de sobra"
    ],
    answer: [2],
    why: "Impostos: 16% de 120 = 19,20. Sobra: 120 − 50 − 30 − 19,20 − 4 = 16,80. R$ 20,80 esquece o DIFAL e R$ 36 esquece o imposto.",
  },
  {
    id: "gf-m6-15", module: M, topic: "ST na conta",
    q: "O produto tem ST e o custo de compra já traz o ICMS da cadeia. O que você faz?",
    options: [
      "Pergunta ao contador como tratar o ICMS da ST, para não contar duas vezes",
      "Soma o ICMS de novo no preço mínimo, para garantir uma margem mais segura",
      "Ignora a ST, porque ela só existe em produto vendido dentro do mesmo estado",
      "Troca o NCM do produto por um sem ST para o imposto sair da conta"
    ],
    answer: [0],
    why: "Com ST, o ICMS pode já estar no custo. Contar de novo distorce o preço e trocar o NCM é fraude de cadastro. O contador diz como tratar.",
  },
  {
    id: "gf-m6-16", module: M, topic: "Impostos e quem cobra",
    q: "Marque todas as afirmações corretas sobre os impostos da aula.",
    options: [
      "O IPI é cobrado de todo revendedor, em toda venda, sempre por dentro",
      "O ISS é do município e vale para serviços, como instalação",
      "O ICMS é do estado e incide na circulação de mercadorias",
      "O DIFAL leva ao estado de destino parte do ICMS da venda interestadual",
      "Alíquotas são fixas e podem ser decoradas sem consultar documentação"
    ],
    answer: [1, 2, 3],
    why: "ISS é municipal, ICMS é estadual e o DIFAL leva parte do ICMS ao estado de destino. IPI é de indústria e importador, e alíquotas mudam.",
  },
  {
    id: "gf-m6-17", module: M, topic: "Repasse e conciliação",
    q: "Qual é a diferença entre o valor da venda e o repasse?",
    options: [
      "O repasse é sempre igual ao valor da venda, e a diferença aparece só na nota",
      "O repasse é o que sobra da venda depois dos descontos do marketplace",
      "O repasse inclui o imposto da venda, que o marketplace paga ao seller depois",
      "O valor da venda é o repasse menos a comissão cobrada pela plataforma"
    ],
    answer: [1],
    why: "O marketplace desconta comissão, tarifas, frete e eventuais retenções. O que chega ao seller é o repasse, menor que a venda.",
  },
  {
    id: "gf-m6-18", module: M, topic: "Repasse e conciliação",
    q: "(números de exemplo) Venda de R$ 150, comissão R$ 21, tarifa R$ 6, frete R$ 18 e retenção R$ 3. Qual é o repasse?",
    options: [
      "R$ 105,00 de repasse",
      "R$ 108,00 de repasse",
      "R$ 120,00 de repasse",
      "R$ 102,00 de repasse"
    ],
    answer: [3],
    why: "150 − 21 − 6 − 18 − 3 = 102. R$ 105 esquece a retenção, R$ 108 esquece a tarifa e R$ 120 esquece o frete.",
  },
  {
    id: "gf-m6-19", module: M, topic: "Repasse e conciliação",
    q: "O seller diz que o repasse veio errado. Qual é a melhor resposta?",
    options: [
      "Cruzar o pedido com o extrato e as notas, explicando cada desconto item a item",
      "Dizer que o marketplace errou e pedir o estorno sem conferir nenhum dado",
      "Explicar que repasse é sempre menor e encerrar sem mostrar a conta",
      "Pedir ao contador para refazer as notas até o valor bater com o repasse"
    ],
    answer: [0],
    why: "Conciliar é mostrar a conta: pedido, extrato e nota. Sem conferir, você pode acusar o marketplace sem razão, e nota não se refaz para bater com repasse.",
  },
  {
    id: "gf-m6-20", module: M, topic: "Rotina de conciliação",
    q: "Marque todas as ações que fazem parte da rotina de conciliação.",
    options: [
      "Baixar o extrato do período no marketplace",
      "Cruzar o extrato com as notas, pedido por pedido",
      "Editar notas autorizadas para igualar o repasse",
      "Subir o preço dos anúncios até as diferenças sumirem",
      "Levar diferenças sem explicação ao contador"
    ],
    answer: [0, 1, 4],
    why: "A rotina baixa o extrato, cruza com as notas e leva dúvidas ao contador. Editar nota autorizada ou mexer no preço não resolve diferença de repasse.",
  },
  {
    id: "gf-m6-21", module: M, topic: "Preço mínimo",
    q: "(números de exemplo) Custo + frete = R$ 63, comissão 15%, imposto 12% e margem alvo 13%. Qual é o preço mínimo?",
    options: [
      "R$ 105,00 de preço mínimo",
      "R$ 88,20 de preço mínimo",
      "R$ 157,50 de preço mínimo",
      "R$ 126,00 de preço mínimo"
    ],
    answer: [0],
    why: "Soma dos percentuais: 15 + 12 + 13 = 40%. Preço mínimo = 63 ÷ (1 − 0,40) = 63 ÷ 0,60 = 105. R$ 88,20 soma 40% ao custo e R$ 157,50 divide por 0,40.",
  },
  {
    id: "gf-m6-22", module: M, topic: "Decisão de regime",
    q: "O cliente quer trocar de regime porque o regime B ganhou na simulação. O que você faz?",
    options: [
      "Pede a troca já, pois a simulação mostra o regime ideal para sempre",
      "Leva a simulação ao contador, que avalia regras, prazos e custos da troca",
      "Muda os preços para o regime B e só depois avisa o contador da troca",
      "Ignora a simulação, porque o regime não influencia o preço mínimo"
    ],
    answer: [1],
    why: "A simulação ajuda a conversa, mas a decisão e a execução são do contador. Regime muda o preço mínimo, e trocar tem regras e custos.",
  },
  {
    id: "gf-m6-23", module: M, topic: "Importação e DI",
    q: "Qual documento registra a entrada da mercadoria importada e serve de base para os impostos de importação?",
    options: [
      "A nota fiscal de saída do seller, emitida na primeira venda do produto",
      "O CEST do produto, que vem preenchido pelo fornecedor lá no exterior",
      "A Declaração de Importação, geralmente cuidada pelo despachante aduaneiro",
      "O extrato do marketplace, que lista os impostos de cada importação"
    ],
    answer: [2],
    why: "A DI registra a entrada da carga no país. Ela costuma ser feita pelo despachante, com apoio do time fiscal.",
  },
  {
    id: "gf-m6-24", module: M, topic: "Custo final do importado",
    q: "(números de exemplo) Custo final do importado R$ 110, venda a R$ 200, comissão e imposto somando 30% do preço. Qual é a sobra?",
    options: [
      "R$ 80,00 de sobra",
      "R$ 90,00 de sobra",
      "R$ 140,00 de sobra",
      "R$ 30,00 de sobra"
    ],
    answer: [3],
    why: "30% de 200 = 60. Sobra: 200 − 110 − 60 = 30. R$ 80 usa só os R$ 60 do produto, R$ 90 esquece comissão e imposto, R$ 140 usa só o produto.",
  }
];

/* Versões dos quizzes da trilha Reforma Tributária. A cada "tentar de novo" o aluno recebe outra versão. */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
  "rt-l1-1": [[
    "base",
    {
      q: "Qual destas afirmações sobre o que a reforma faz com os tributos sobre o consumo está ERRADA?",
      options: [
        "IBS e CBS se somam aos cinco tributos atuais, que seguem valendo para sempre",
        "O imposto passa a ser devido no destino, no lugar onde está o consumidor",
        "As regras de IBS e CBS passam a ser iguais em todo o país, sem leis locais",
        "PIS, Cofins, IPI, ICMS e ISS são substituídos aos poucos por IBS e CBS",
      ],
      answer: [0],
      why: "A reforma substitui os cinco tributos atuais, e não soma IBS e CBS a eles. A mudança é gradual, de 2026 a 2033, e o imposto passa a ser do destino.",
    },
    {
      q: "Um cliente diz: \"o ICMS e o ISS vão continuar sendo calculados por cada Estado e cada Município para sempre, não é?\". O que responder?",
      options: [
        "Sim, cada Estado e cada Município mantêm a lei própria, e só o PIS e a Cofins viram CBS",
        "Sim, mas só nas vendas dentro do mesmo Estado; nas vendas entre Estados vale a regra única",
        "Não, o ICMS e o ISS acabam em 2027, quando o IBS passa a valer com alíquota cheia",
        "Não, ao fim da transição, em 2033, eles deixam de existir e valem só IBS e CBS",
      ],
      answer: [3],
      why: "ICMS e ISS caem aos poucos e deixam de existir em 2033, quando valem só IBS e CBS, com regra única no país. Em 2027 quem muda é o PIS e a Cofins, que dão lugar à CBS.",
    },
    {
      q: "Qual par descreve melhor o sistema de hoje e o da transição completa?",
      options: [
        "Hoje são dois impostos federais sobre o consumo; depois, cinco tributos de Estados e Municípios",
        "Hoje são cinco tributos sobre o consumo; depois, IBS e CBS, mais o IS em casos raros",
        "Hoje o imposto é devido no destino; depois, ele passa a ser devido na origem, onde a loja está",
        "Hoje há uma lei única no país; depois, cada Estado e cada Município passam a ter a sua própria",
      ],
      answer: [1],
      why: "Hoje são cinco tributos (PIS, Cofins, IPI, ICMS e ISS) e, depois, IBS e CBS, mais o IS para bens prejudiciais. A regra passa de várias leis para uma só, e a cobrança vai da origem para o destino.",
    },
  ]],
  "rt-l1-2": [[
    "base",
    {
      q: "Sobre quem cobra cada tributo novo, quais afirmações estão corretas? Marque todas.",
      multi: true,
      options: [
        "O IBS é de competência compartilhada entre Estados, DF e Municípios",
        "A CBS é compartilhada entre Estados e Municípios, com o Comitê Gestor",
        "A CBS é federal e fica sob a administração da Receita Federal",
        "O IBS é só federal e fica sob a administração da Receita Federal",
        "O Imposto Seletivo é federal e incide sobre bens prejudiciais",
      ],
      answer: [0, 2, 4],
      why: "O IBS é compartilhado e administrado pelo Comitê Gestor (CGIBS); a CBS e o Imposto Seletivo são federais, com a CBS sob a Receita Federal.",
    },
    {
      q: "Quais operações têm incidência de IBS e CBS mesmo sem uma venda com pagamento? Marque todas.",
      multi: true,
      options: [
        "Transferência de mercadoria entre filiais do mesmo dono, só com nota",
        "Retirada de mercadoria do estoque para uso pessoal do dono",
        "Entrega de brindes a clientes ou parceiros sem cobrança",
        "Pagamento de dividendos aos sócios após o fechamento do ano",
        "Bonificações, como mercadoria extra dada na compra de um lote",
      ],
      answer: [1, 2, 4],
      why: "Retirada para uso pessoal, brindes e bonificações são operações sem pagamento que têm incidência. Transferência entre filiais e dividendos não incidem.",
    },
    {
      q: "Quais pares \"tributo novo e tributo antigo que ele substitui\" estão certos? Marque todos.",
      multi: true,
      options: [
        "IBS no lugar do ICMS, que era o tributo estadual sobre vendas",
        "CBS no lugar do ICMS, que era o tributo estadual sobre vendas",
        "IBS no lugar do ISS, que era o tributo municipal sobre serviços",
        "IBS no lugar do PIS e da Cofins, que eram tributos federais",
        "CBS no lugar do PIS e da Cofins, que eram tributos federais",
      ],
      answer: [0, 2, 4],
      why: "O IBS substitui ICMS e ISS, e a CBS substitui PIS e Cofins. Os cruzamentos (CBS no lugar do ICMS ou IBS no lugar de PIS e Cofins) estão trocados.",
    },
  ]],
  "rt-l1-3": [[
    "base",
    {
      q: "Uma loja de Belo Horizonte vende para um cliente em Salvador. Na transição completa, para onde vai o imposto dessa venda?",
      options: [
        "O IBS vai para Minas Gerais e Belo Horizonte, e a CBS vai para a Bahia",
        "O IBS e a CBS vão para a União, que repassa a parte devida à Bahia",
        "O IBS vai para o Estado e o Município de Salvador, e a CBS vai para a União",
        "O IBS é dividido pela metade entre Belo Horizonte e Salvador, e a CBS vai para a União",
      ],
      answer: [2],
      why: "Com a cobrança no destino, o IBS é do Estado e do Município de quem recebe, aqui Salvador. A CBS é federal e vai para a União.",
    },
    {
      q: "Uma distribuidora paga imposto nas compras de mercadoria para revender. Pela não cumulatividade ampla, o que acontece com esse imposto na venda?",
      options: [
        "Ele é abatido do imposto devido nas vendas, e a empresa paga só sobre o que acrescentou",
        "Ele é somado ao imposto das vendas, para que o comprador final pague tudo de uma vez",
        "Ele é perdido, pois só quem produz a mercadoria tem direito a abater o imposto das compras",
        "Ele é devolvido em dinheiro no mesmo dia, sem nenhum abatimento na conta das vendas",
      ],
      answer: [0],
      why: "Quem compra para vender, ou para produzir, abate o imposto pago nas compras do imposto devido nas vendas. Assim, cada um paga só sobre o valor que acrescentou.",
    },
    {
      q: "Qual princípio é este: \"as regras de IBS e CBS valem para o país inteiro, com base no art. 156-A da Constituição\"?",
      options: [
        "Neutralidade, que evita que o imposto distorça onde a empresa se instala",
        "Cobrança no destino, que leva o imposto ao lugar onde está o consumidor",
        "Não cumulatividade ampla, que abate das vendas o imposto pago nas compras",
        "Legislação única, que troca as leis estaduais e municipais por uma só",
      ],
      answer: [3],
      why: "Legislação única é a ideia de uma só regra para o país, no lugar das leis de cada Estado e de cada Município. Os outros três princípios tratam de benefícios, local de cobrança e créditos.",
    },
  ]],
  "rt-l1-4": [[
    "base",
    {
      q: "Com valores de exemplo: produto de R$ 300, frete cobrado de R$ 40, seguro de R$ 20 e desconto incondicional de R$ 10 na nota. Qual é a base de cálculo?",
      options: [
        "R$ 360, porque o desconto incondicional não entra na conta da base",
        "R$ 350, somando produto, frete e seguro e tirando o desconto",
        "R$ 330, porque o seguro cobrado do cliente fica fora da base",
        "R$ 300, porque só o preço do produto entra na base de cálculo",
      ],
      answer: [1],
      why: "R$ 300 + R$ 40 + R$ 20 − R$ 10 = R$ 350. Frete e seguro entram na base, e o desconto incondicional a reduz.",
    },
    {
      q: "Um vendedor dá R$ 20 de desconto só a quem pagar o boleto até sexta. Esse desconto reduz a base de cálculo?",
      options: [
        "Sim, porque todo desconto dado ao cliente reduz a base de cálculo da venda",
        "Sim, desde que o valor do desconto seja menor que o do frete cobrado",
        "Não, porque é condicional: depende de um fato futuro, o pagamento até o dia",
        "Não, porque o desconto só reduz a base quando a loja é do Simples Nacional",
      ],
      answer: [2],
      why: "Desconto condicional depende de um fato futuro (pagar até o dia X) e não reduz a base. Só o desconto incondicional, dado na venda e destacado na nota, reduz.",
    },
    {
      q: "Qual item NÃO entra na base de cálculo de IBS e CBS?",
      options: [
        "O próprio IBS e a própria CBS, que não incidem sobre si mesmos",
        "O frete cobrado do comprador como parte da operação de venda",
        "Os juros e multas cobrados do comprador por atraso no pagamento",
        "O seguro cobrado do comprador junto com o preço do produto",
      ],
      answer: [0],
      why: "A base é o valor integral cobrado do comprador, mas sem o próprio IBS e a CBS, sem descontos incondicionais e sem reembolsos. Frete, seguro e juros entram.",
    },
  ]],
  "rt-l1-5": [[
    "base",
    {
      q: "Qual destas fases do calendário da transição está correta, na posição de 15/10/2026?",
      options: [
        "2027: ICMS e ISS deixam de existir e o IBS passa a valer com alíquota cheia",
        "2026: PIS e Cofins deixam de existir e a CBS passa a valer com alíquota cheia",
        "2033: ICMS e ISS deixam de existir e valem só IBS e CBS, cobrados no destino",
        "2031: o IBS chega a 100% do total e a transição acaba, com ICMS e ISS extintos",
      ],
      answer: [2],
      why: "Em 2033 ICMS e ISS deixam de existir e valem só IBS e CBS, com cobrança totalmente no destino. Em 2026 é o ano de teste, e em 2027 acabam PIS e Cofins.",
    },
    {
      q: "Um cliente pergunta o que muda no IPI e no Imposto Seletivo em 2027, segundo o calendário da aula. O que responder?",
      options: [
        "O IPI é zerado, exceto Zona Franca, e o Imposto Seletivo começa a valer",
        "O IPI passa a valer com alíquota cheia e o Imposto Seletivo só começa em 2033",
        "O IPI e o Imposto Seletivo são extintos juntos, junto com o PIS e a Cofins",
        "O IPI continua sem mudança até 2033 e o Imposto Seletivo passa a substituí-lo",
      ],
      answer: [0],
      why: "Em 2027 a CBS passa a valer com alíquota cheia, o IPI é zerado (exceto para produtos que competem com a Zona Franca de Manaus) e o Imposto Seletivo começa.",
    },
    {
      q: "O que é destacado na nota fiscal em 2026, o ano de teste, segundo a aula?",
      options: [
        "IBS de 0,9% e CBS de 0,1%, sem nenhuma compensação com PIS e Cofins",
        "CBS de 0,9% e IBS de 0,1%, com compensação com PIS e Cofins",
        "CBS de 0,1% e IBS de 0,1%, apenas para empresas do Simples Nacional",
        "CBS de 9% e IBS de 1%, somados por fora aos tributos atuais",
      ],
      answer: [1],
      why: "No teste de 2026 a CBS de 0,9% e o IBS de 0,1% aparecem na nota com compensação com PIS e Cofins. Quem cumpre as obrigações acessórias não paga a mais por causa do teste.",
    },
  ]],
});

Object.assign(window.PRATICA, {
  "rt-l2-1": [[
    "base",
    { q: "Um marketplace não entrega nada, mas cobra o comprador e recebe o pagamento antes de repassar ao vendedor. Pelo critério funcional, como a lei o trata?",
      options: [
        "Como plataforma, mas só se o vendedor anunciante estiver no exterior e não tiver CNPJ ativo no Brasil",
        "Como site comum, porque só quem também faz a entrega das mercadorias entra na regra das plataformas",
        "Como plataforma, porque controla a cobrança e o pagamento, e basta um elemento essencial para isso",
        "Como site comum, porque a regra olha o tamanho da empresa e não o que ela faz dentro da operação",
      ],
      answer: [2],
      why: "O critério é funcional: basta controlar pelo menos um dos elementos essenciais (cobrança, pagamento, termos e condições ou entrega). Cobrança e pagamento já bastam." },
    { q: "Qual destes sites NÃO se enquadra como plataforma pelo critério funcional do art. 22 da LC 214?",
      options: [
        "Um que define os termos e condições da venda para os anunciantes e para os compradores",
        "Um que recebe o pagamento do comprador e o repassa depois ao vendedor com um desconto",
        "Um que só exibe anúncios de vários lojistas e manda o comprador finalizar em outro lugar",
        "Um que organiza a entrega das mercadorias vendidas por seus anunciantes até o comprador",
      ],
      answer: [2],
      why: "Só exibir anúncios, sem cobrar, receber pagamento, definir termos ou entregar, não é controlar a operação. Os outros três controlam ao menos um elemento essencial." },
    { q: "Um cliente pergunta o que a lei olha para decidir se um site é plataforma responsável pelo imposto. Qual é a resposta correta?",
      options: [
        "O nome que o site usa para se apresentar, como marketplace, vitrine ou loja virtual",
        "O que o site faz na operação: se controla cobrança, pagamento, termos ou entrega",
        "O número de vendedores cadastrados e de pedidos que o site processa por mês",
        "O regime tributário em que os vendedores do site estão enquadrados na Receita",
      ],
      answer: [1],
      why: "O critério é funcional: importa o que o site controla na venda não presencial, e não o nome, o tamanho ou o regime dos vendedores." },
  ]],
  "rt-l2-2": [[
    "base",
    { q: "Uma mercadoria é entregue em 02/09 e o comprador só paga em 20/09, em uma venda combinada. Em que mês nasce o fato gerador?",
      options: [
        "Em outubro, mês da apuração",
        "Em agosto, mês da compra",
        "Em setembro, nos dois casos",
        "Em setembro, mas só no dia 20",
      ],
      answer: [2],
      why: "Vale o que ocorrer primeiro entre fornecimento (02/09) e pagamento (20/09). O fornecimento veio primeiro, então o fato gerador é em setembro." },
    { q: "Um comprador paga em 30/01 e a mercadoria chega em 04/02. Qual é o mês do fato gerador e por quê?",
      options: [
        "Janeiro, porque o pagamento ocorreu antes do fornecimento da mercadoria",
        "Fevereiro, porque só com a chegada da mercadoria a venda fica completa",
        "Janeiro e fevereiro, porque a venda atravessa a virada do mês na entrega",
        "Fevereiro, porque o imposto sempre acompanha o mês de entrega ao comprador",
      ],
      answer: [0],
      why: "O fato gerador é o fornecimento ou o pagamento, o que vier primeiro. Aqui o pagamento (30/01) veio antes da entrega (04/02), então é janeiro." },
    { q: "Um vendedor acha que o imposto só nasce quando a mercadoria chega ao comprador. A venda foi paga em 25/07 e entregue em 06/08. O que explicar a ele?",
      options: [
        "Que ele tem razão: o imposto nasce em agosto, no mês em que a mercadoria chega",
        "Que o imposto nasce em julho, porque o pagamento veio antes do fornecimento",
        "Que o imposto nasce meio em julho e meio em agosto, dividido entre as datas",
        "Que o imposto nasce no mês em que ele emitir a nota, qualquer que seja a data",
      ],
      answer: [1],
      why: "O fato gerador é o fornecimento ou o pagamento, o que ocorrer primeiro. O pagamento (25/07) veio antes da entrega (06/08), então o imposto nasce em julho." },
  ]],
  "rt-l2-3": [[
    "base",
    { q: "Em um exemplo, um vendedor fatura R$ 80.000,00 em vendas e R$ 16.000,00 disso é IBS e CBS. Com o split payment, quanto ele recebe?",
      options: [
        "R$ 96.000,00, o faturamento mais o imposto",
        "R$ 64.000,00, o faturamento menos o imposto",
        "R$ 80.000,00, o faturamento cheio das vendas",
        "R$ 16.000,00, só a parcela do imposto separado",
      ],
      answer: [1],
      why: "O imposto é separado no pagamento e o vendedor recebe o líquido: R$ 80.000,00 - R$ 16.000,00 = R$ 64.000,00. Os valores são de exemplo." },
    { q: "Um vendedor usa o imposto do mês para comprar estoque e pergunta o que muda com o split payment. Qual é a orientação?",
      options: [
        "O intervalo entre receber a venda e pagar o imposto deixa de existir, então o capital de giro precisa ser refeito",
        "O imposto passa a ser pago um mês depois, e o caixa dele melhora porque o prazo da apuração aumenta",
        "O imposto continua sendo pago no mês seguinte, e o split só muda a forma como o recibo aparece na nota",
        "O imposto deixa de existir para quem recebe pelo split, então o dinheiro das vendas fica todo com ele",
      ],
      answer: [0],
      why: "No split o imposto sai no momento do pagamento. O dinheiro que ficava com o vendedor até a apuração some do capital de giro, e a conta precisa considerar isso." },
    { q: "Qual afirmação sobre o split payment está errada, segundo a aula?",
      options: [
        "O comprador paga e o sistema financeiro separa o IBS e a CBS no pagamento",
        "O vendedor recebe o valor líquido, sem a parcela de imposto já separada",
        "A lei prevê a implantação gradual, e em alguns casos ele é facultativo",
        "O vendedor recebe o valor cheio e paga o imposto no mês seguinte ao split",
      ],
      answer: [3],
      why: "Receber o valor cheio e pagar o imposto depois é o modelo de hoje. No split o imposto é separado no pagamento e o vendedor recebe só o líquido." },
  ]],
  "rt-l2-4": [[
    "base",
    { q: "Um vendedor do Simples vende quase tudo para empresas do regime regular, que precisam de crédito integral de IBS e CBS. O que a orientação deve considerar?",
      options: [
        "Que a opção nunca compensa, porque o crédito do comprador não depende do regime do vendedor",
        "Que a opção é automática, porque quem vende para empresas é obrigado a deixar o Simples Nacional",
        "Que a opção pelo regime regular pode valer a pena aqui, e o contador deve simular antes de qualquer decisão",
        "Que o assessor deve escolher o regime pelo cliente, já que o contador só cuida da guia mensal",
      ],
      answer: [2],
      why: "O regime regular gera crédito integral para quem compra do vendedor, o que pode pesar em vendas B2B. Ainda assim, a decisão é do cliente com o contador, depois de simular." },
    { q: "Um vendedor MEI pergunta se a reforma vai obrigá-lo a mudar de regime. Qual é a orientação correta?",
      options: [
        "Que sim, porque todo MEI passa a ser enquadrado no regime regular de IBS e CBS",
        "Que a reforma não muda o regime do MEI, e dúvidas sobre o caso vão para o contador",
        "Que sim, mas só se ele vender em marketplace, pois aí a reforma exige o regime regular",
        "Que a reforma acaba com o MEI, e ele deve abrir uma empresa maior o quanto antes",
      ],
      answer: [1],
      why: "A aula é clara: o MEI não muda de regime. Qualquer mudança por faturamento ou outro motivo é decisão contábil, e a assessoria encaminha ao contador." },
    { q: "Qual afirmação sobre a opção pelo regime regular de IBS e CBS dentro do Simples está errada, segundo a aula?",
      options: [
        "A empresa pode optar por apurar IBS e CBS no regime regular",
        "Os demais tributos da empresa continuam sendo pagos no Simples",
        "Para vender a consumidor final, quase sempre a opção não faz sentido",
        "Ao optar, a empresa sai do Simples e passa ao regime regular em tudo",
      ],
      answer: [3],
      why: "A opção vale só para IBS e CBS; os demais tributos continuam no Simples. Sair do Simples para tudo não faz parte dessa opção." },
  ]],
});

Object.assign(window.PRATICA, {
  "rt-l3-1": [[
    "base",
    {
      q: "Um cliente diz: “vendo todo mês no CPF, mas é pouco, não preciso me preocupar com nota nem cadastro”. O que a assessoria deve responder?",
      options: [
        "Que o CPF dispensa nota, desde que o valor de cada venda seja baixo para o consumidor",
        "Que pouco ou muito não importa, pois toda venda pela plataforma exige CNPJ ativo e aberto",
        "Que o que pesa é a habitualidade e o volume, então vale levar o caso ao contador dele",
        "Que o problema é só da plataforma, e o vendedor não tem nada a ver com o cadastro fiscal",
      ],
      answer: [2],
      why: "A lei define contribuinte por habitualidade e volume, não pelo valor de cada venda nem por ter CNPJ. Quem vende de forma contínua deve ser encaminhado ao contador para avaliar cadastro e nota.",
    },
    {
      q: "Na checagem de regularidade, qual conjunto de dados precisa estar igual entre o CNPJ e o cadastro da plataforma?",
      options: [
        "CNPJ ativo, razão social e endereço batendo com o cadastro do vendedor na plataforma",
        "Apenas o nome fantasia da loja, que é o dado que a Receita usa para identificar o CNPJ",
        "Somente a inscrição estadual e a municipal, que continuam sendo o cadastro principal",
        "O telefone e o e-mail do vendedor, que passam a substituir o CNPJ como identificação",
      ],
      answer: [0],
      why: "Dados em ordem significam CNPJ ativo e razão social e endereço iguais ao cadastro da plataforma. A inscrição estadual e a municipal perdem importância no cadastro único.",
    },
    {
      q: "Qual afirmação sobre cadastro e regime do vendedor está ERRADA?",
      options: [
        "MEI acima do limite de faturamento pode ter mudança de regime que afeta nota e imposto",
        "Sublimite do Simples estourado também pode gerar mudança de regime para o vendedor",
        "A assessoria deve decidir sozinha se o cliente abre CNPJ ou muda de regime tributário",
        "O CNPJ é o cadastro para pessoa jurídica e o CPF para pessoa física que é contribuinte",
      ],
      answer: [2],
      why: "Abrir CNPJ, passar de MEI a microempresa ou trocar de regime é decisão contábil. A assessoria avisa o risco e encaminha ao contador, sem escolher pelo cliente.",
    },
  ]],
  "rt-l3-2": [[
    "base",
    {
      q: "Regime regular, alíquota de exemplo de 25%. Venda com base de R$ 200 e compras ligadas de R$ 80 de base, com nota. Qual é o imposto líquido?",
      options: [
        "R$ 20, ou seja, R$ 50 de imposto da venda menos R$ 30 de crédito",
        "R$ 30, ou seja, R$ 50 de imposto da venda menos R$ 20 de crédito",
        "R$ 50, o imposto da venda sem nenhum desconto de crédito algum",
        "R$ 70, somando os R$ 50 da venda aos R$ 20 do imposto das compras",
      ],
      answer: [1],
      why: "Imposto na venda: 25% de R$ 200 = R$ 50. Crédito: 25% de R$ 80 = R$ 20. Imposto líquido: R$ 50 − R$ 20 = R$ 30.",
    },
    {
      q: "Um cliente do Simples pergunta se pode abater a comissão do marketplace e o frete do imposto, como o colega do regime regular faz. Qual é a resposta?",
      options: [
        "Pode, porque comissão e frete geram crédito em qualquer regime, desde que haja nota",
        "Não pode abater nada agora, mas passa a poder quando o regime regular for obrigatório",
        "Pode abater só o frete, pois a comissão do marketplace nunca gera crédito para ninguém",
        "Não toma esse crédito, e a tarefa é conferir com o contador se a alíquota efetiva está certa",
      ],
      answer: [3],
      why: "No Simples e no MEI o vendedor não toma crédito de comissão, frete ou embalagem. A tarefa é conferir com o contador se a alíquota efetiva usada na margem continua certa.",
    },
    {
      q: "O cliente quer saber o quanto vai subir o preço dele. Qual é o jeito certo de chegar a um número?",
      options: [
        "Aplicar a média de aumento que os principais blogs de e-commerce estão informando",
        "Usar o percentual de aumento do ramo de atividade, que é igual para todo vendedor",
        "Simular com os números do cliente, considerando regime, compras e a alíquota",
        "Esperar a alíquota final e, até lá, manter o preço sem nenhuma conta nem revisão",
      ],
      answer: [2],
      why: "O efeito depende de regime, produto, compras e alíquota final, ainda não fixada. Por isso a assessoria simula com os números do cliente e nunca usa média.",
    },
  ]],
  "rt-l3-3": [[
    "base",
    {
      q: "Qual item abaixo a lei já define, sem depender de comunicado de cada plataforma?",
      options: [
        "Como o vendedor autoriza a emissão de nota pela própria plataforma",
        "O que acontece com a conta de quem estiver irregular na plataforma",
        "Que dados cadastrais e fiscais serão pedidos ao vendedor e em que prazo",
        "Que a plataforma que controla pagamento ou entrega responde junto pelo imposto",
      ],
      answer: [3],
      why: "A lei define que a plataforma que controla pagamento ou entrega responde junto. Autorização de nota, dados pedidos e prazos e consequências para contas irregulares dependem da plataforma.",
    },
    {
      q: "Um cliente da Shopee pergunta qual é a regra de nota fiscal da plataforma. Você não tem o comunicado em mãos. O que fazer?",
      options: [
        "Responder pelo que vale no Mercado Livre, já que as duas funcionam de modo parecido",
        "Dizer que a regra é a mesma do blog mais lido, para o cliente não ficar sem resposta",
        "Dizer que a Shopee não tem política de nota, pois isso é só assunto do contador",
        "Ler o comunicado da Shopee, anotar a data e levar a dúvida ao contador do cliente",
      ],
      answer: [3],
      why: "A política de cada plataforma para nota, cadastro e repasse muda com o tempo. Na dúvida, o roteiro é ler o comunicado, anotar a data e levar ao contador.",
    },
    {
      q: "Qual destas é uma fonte adequada para a assessoria ensinar uma regra nova ao cliente?",
      options: [
        "Um post de blog que resume o que o Mercado Livre e a Shopee “vão fazer”",
        "O comunicado na central do vendedor ou o portal do Comitê Gestor do IBS",
        "Uma mensagem de outro vendedor num grupo, que contou o que ouviu de um amigo",
        "A lembrança de uma regra parecida que valia antes da reforma, sem conferir nada",
      ],
      answer: [1],
      why: "Só se ensina o que a lei diz ou o que a plataforma comunicou. Comunicados, a central do vendedor e os portais do Comitê Gestor e da Receita são as fontes.",
    },
  ]],
  "rt-l3-4": [[
    "base",
    {
      q: "Em qual passo do roteiro a assessoria confere se o emissor de notas está atualizado para os campos de IBS e CBS?",
      options: [
        "No passo de confirmar o regime, que é o primeiro e trata de MEI, Simples ou regular",
        "No passo de conferir a nota fiscal, que também confere se toda venda exigida tem nota",
        "No passo de planejar o caixa, ao calcular o capital de giro vindo do imposto retido",
        "No passo de marcar o acompanhamento, ao definir quem revisa os prazos a cada trimestre",
      ],
      answer: [1],
      why: "O terceiro passo do roteiro é conferir a nota fiscal: emissor atualizado para IBS e CBS e nota em toda venda que a exige.",
    },
    {
      q: "O contador informou uma nova alíquota efetiva para o cliente. Qual passo do roteiro isso aciona?",
      options: [
        "Revisar a margem, atualizando os impostos no cálculo de preço e de margem",
        "Planejar o caixa, calculando o impacto do split payment sobre o capital de giro",
        "Conferir o cadastro, pois a nova alíquota muda a razão social e o endereço do CNPJ",
        "Confirmar o regime outra vez, porque alíquota nova significa que o cliente trocou de regime",
      ],
      answer: [0],
      why: "O passo 4 manda atualizar os impostos no cálculo de preço e margem sempre que o contador informar nova alíquota efetiva ou mudança de regime.",
    },
    {
      q: "Qual destas ações encaixa no último passo do roteiro, o de marcar o acompanhamento?",
      options: [
        "Anotar os prazos, como as janelas do Simples, e definir quem revisa a cada trimestre",
        "Reajustar os preços dos anúncios para absorver o imposto novo assim que ele for publicado",
        "Pedir que o cliente troque de regime logo, para chegar com a casa em ordem à transição",
        "Parar de emitir nota até a alíquota final ser publicada e o assunto ficar definido",
      ],
      answer: [0],
      why: "O passo 6 é anotar prazos (como as janelas do Simples) e definir quem revisa a cada trimestre. Mudar de regime e parar de emitir nota não fazem parte do roteiro.",
    },
  ]],
});

Object.assign(window.PRATICA, {
  "rt-l4-1": [[
    "base",
    {
      q: "Um cliente pergunta: “a reforma vai baixar o meu imposto em 15%, não é?”. Qual resposta é a mais correta?",
      options: [
        "Sim, a reforma é neutra e vai baixar o imposto de todos os vendedores nessa proporção",
        "Não, a reforma só aumenta imposto e o melhor é se preparar para pagar bem mais",
        "Depende do regime e do que ele compra, e a alíquota final ainda não foi fixada",
        "Sim, mas só para quem vende no Mercado Livre, porque a Shopee tem uma regra à parte",
      ],
      answer: [2],
      why: "Não existe percentual único, nem para cima nem para baixo: o efeito depende do regime, das compras e da alíquota final, ainda não fixada. A assessoria não promete número.",
    },
    {
      q: "Qual destas respostas ao cliente que pergunta “o imposto vai subir?” deve ser evitada?",
      options: [
        "Depende do seu regime e do que você compra, e a alíquota final ainda não foi fixada",
        "No Simples, vendendo ao consumidor final, a mudança maior tende a ser na nota fiscal",
        "Vamos simular com os seus números e levar o resultado ao seu contador",
        "Vai subir cerca de 8%, que é a média que li sobre os vendedores de marketplace",
      ],
      answer: [3],
      why: "Prometer percentual, com base em média de notícia, é o que a aula manda evitar. As outras três respostas são honestas: dependem do regime, apontam a nota fiscal e usam os números do cliente.",
    },
    {
      q: "Qual destas frases informa uma regra datando a informação e separando o que é lei do que é estimativa?",
      options: [
        "Já está tudo definido e a alíquota final é a mesma para todos os vendedores do país",
        "Em 15/10/2026 a alíquota final não estava fixada, então usamos números de exemplo",
        "Pode ser que mude alguma coisa um dia, mas por enquanto vale o que se ouve por aí",
        "A plataforma já decidiu o que vai fazer com as contas, e o blog avisou a data certa",
      ],
      answer: [1],
      why: "A frase dá a data da posição (15/10/2026), diz o que ainda é estimativa (a alíquota) e deixa claro que os números são de exemplo. As demais afirmam sem fonte ou sem data.",
    },
  ]],
  "rt-l4-2": [[
    "base",
    {
      q: "Um cliente do Simples vende só para consumidor final e emite nota em todas as vendas, mas não tem contador que acompanhe a reforma. Qual é o primeiro encaminhamento?",
      options: [
        "Ajudar o cliente a achar um contador que acompanhe a reforma antes de avançar nas decisões",
        "Decidir o regime e a emissão de nota pelo cliente, já que não há contador a consultar",
        "Dizer que ele está pronto, porque emitir nota em toda venda resolve todas as pendências",
        "Esperar a plataforma comunicar todas as regras para só então pensar em contador",
      ],
      answer: [0],
      why: "Se não há contador que acompanhe a reforma, o primeiro encaminhamento é achar um. Regime e nota são decisões contábeis, e emitir nota em toda venda é bom, mas não encerra o assunto.",
    },
    {
      q: "Um cliente do Simples, com contador ativo, vende só para consumidor final e admite emitir nota apenas em parte das vendas. O que priorizar?",
      options: [
        "Simular a opção pelo regime regular, para ele tomar crédito das compras e da comissão",
        "Planejar o caixa para o split payment, que é o ponto mais urgente desse cliente",
        "Regularizar a emissão de nota em toda venda, junto com o contador dele",
        "Esperar o fisco definir a alíquota final para só então tratar de nota fiscal",
      ],
      answer: [2],
      why: "Quem não emite nota em toda venda está mais exposto e expõe a plataforma. A prioridade é regularizar a emissão com o contador, e não mudar de regime nem esperar a alíquota final.",
    },
    {
      q: "Um cliente conta que gira o estoque com o dinheiro do imposto que ainda vai pagar no mês seguinte. Qual pergunta do diagnóstico isso aciona?",
      options: [
        "Quanto do caixa vem do imposto do mês, para dimensionar um eventual split payment",
        "Qual é o regime dele, para saber se haverá crédito de IBS e CBS nas compras feitas",
        "Como ele emite nota, para conferir se o emissor tem os campos de IBS e CBS na nota",
        "Vende para quem, para saber se o comprador empresa vai querer o crédito integral",
      ],
      answer: [0],
      why: "Girar estoque com o imposto do mês mostra dependência desse dinheiro. A pergunta sobre o caixa dimensiona o impacto de um eventual split payment, que entregaria o valor líquido.",
    },
  ]],
  "rt-l4-3": [[
    "base",
    {
      q: "A Loja Leste é do Simples e vende 90% para consumidor final no marketplace e 10% para empresas. Qual é a orientação mais razoável?",
      options: [
        "Mudar já para o regime regular, porque as empresas compradoras vão exigir esse regime hoje",
        "Manter o Simples e, com o contador, simular o regime regular só para checar os 10% B2B",
        "Parar de vender para empresas e ficar apenas com o consumidor final do marketplace",
        "Esperar 2033, ano em que o regime regular passa a valer obrigatoriamente para todos",
      ],
      answer: [1],
      why: "Com 90% das vendas para consumidor final, o regime regular quase nunca compensa. A simulação serve para conferir se os 10% B2B justificam alguma mudança, e a decisão é do contador.",
    },
    {
      q: "Qual destes clientes se encaixa no Perfil B?",
      options: [
        "MEI que vende só para consumidor final e às vezes sem nota fiscal",
        "Empresa do regime regular que revende mercadoria e paga frete e comissão",
        "Simples de porte médio que vende também para empresas que podem querer crédito",
        "Pessoa física que vende todo dia, sem CNPJ e sem qualquer cadastro regular",
      ],
      answer: [2],
      why: "O Perfil B é o Simples médio que também vende para empresas, que podem querer crédito integral. O MEI é o Perfil A e o regime regular de revenda é o Perfil C.",
    },
    {
      q: "Qual conjunto de prioridades combina com o Perfil C, regime regular que revende mercadoria?",
      options: [
        "Créditos nas compras, margem por produto e caixa por causa do split payment",
        "Só o cadastro em dia, porque não há crédito a discutir e a margem muda pouco nele",
        "Simular o regime regular de IBS e CBS, porque ele ainda está no Simples",
        "Margem pela média da loja, porque os créditos pesam igual em todos os produtos",
      ],
      answer: [0],
      why: "O Perfil C é o mais afetado: precisa olhar os créditos, revisar a margem por produto (não pela média) e planejar o caixa por causa do split payment.",
    },
  ]],
});


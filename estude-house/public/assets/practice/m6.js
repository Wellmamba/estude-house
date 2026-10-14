/* Versões dos quizzes do módulo 7 (m6). */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
  "l6-1": [[
    {
      q: "Qual é o melhor contra-argumento para “minha planilha já mostra a margem”?",
      options: [
        "Dizer que a planilha dele está errada e que o número precisa ser todo refeito pela equipe",
        "A margem real oscila, principalmente com o frete; o dado da API mostra venda a venda",
        "Dizer que planilha não é uma fonte confiável e que só ferramentas pagas dão o número certo",
        "Dizer que o uso da PriceBot é obrigatório pelo contrato que o seller assinou na assessoria",
      ],
      answer: [1],
      why: "O argumento é concreto e não ataca o seller: a margem prevista não considera a variação real de taxas e frete.",
    },
    {
      q: "O seller diz: “na minha planilha minha margem é 20%, não preciso do Nexus”. Qual resposta usa o argumento do treinamento?",
      options: [
        "Que a margem calculada antes de vender muda ao longo do mês, e o dado da API mostra onde há furo",
        "Que o Nexus é obrigatório e que ele não pode mais usar planilha própria dentro da assessoria",
        "Que a planilha dele está desatualizada e que será preciso refazer todas as fórmulas do zero",
        "Que ele deveria vender menos, para a margem da planilha ficar mais próxima da margem real",
      ],
      answer: [0],
      why: "O dado cru da API mostra o que acontece de fato, venda a venda, e revela furos que a planilha não enxerga.",
    },
    {
      q: "O seller demora a enviar os custos. Qual abordagem tende a funcionar melhor?",
      options: [
        "Mandar uma única mensagem pedindo o custo e aguardar o retorno dele com bastante paciência",
        "Estimar o custo de cada produto como metade do preço de venda e subir o setup assim mesmo",
        "Ameaçar encerrar a assessoria caso os custos não cheguem até o fim da semana de trabalho",
        "Explicar para que serve o custo, mostrar a PriceBot e cobrar com constância até chegar",
      ],
      answer: [3],
      why: "Custo é o gargalo da implantação. Quem vende o motivo e acompanha de perto consegue os dados.",
    },
  ]],
  "l6-2": [
    [
      {
        q: "Qual é a ideia do exemplo do arroz em promoção no supermercado?",
        options: [
          "Que toda promoção dá prejuízo ao vendedor e que o seller deve evitar qualquer campanha de desconto",
          "Abrir mão de margem num item pode elevar o lucro total, e o que vale é o resultado do mês",
          "Que todo produto deve ser vendido pelo mesmo preço, para o cliente comparar com facilidade",
          "Que o seller deve vender um único produto, para concentrar toda a estratégia de preço nele",
        ],
        answer: [1],
        why: "A lógica é olhar o resultado total da conta dentro das margens alinhadas, e não só a rentabilidade de cada anúncio isolado.",
      },
      {
        q: "Um seller só quer saber de faturamento e pede para “não mexer na margem”. Qual argumento reposiciona a conversa?",
        options: [
          "Que o faturamento é irrelevante e que ele deveria olhar apenas o lucro de cada mês",
          "Que margem só importa para empresas grandes, então ela não precisa ser configurada",
          "Saber a margem de cada produto mostra o gargalo e permite faturar com lucro de verdade",
          "Que a PriceBot não afeta o faturamento, então a margem pode ficar fora da conversa",
        ],
        answer: [2],
        why: "O argumento é de resultado: sem margem visível não há como dizer onde se perde dinheiro (promoção barata demais, Ads sem retorno).",
      },
      {
        q: "Antes o alinhamento era “vou aplicar 10% de desconto”. Com a PriceBot, qual é o alinhamento correto com o seller?",
        options: [
          "Continua sendo por percentual fixo de desconto, definido para cada anúncio da conta",
          "É sobre o faturamento bruto da conta, já que o rebate não entra no cálculo da margem",
          "É sobre a margem de retorno, porque o percentual pode variar por causa do rebate",
          "É sobre o número de anúncios que participam das campanhas em cada semana do período",
        ],
        answer: [2],
        why: "Com rebate, um desconto maior pode render mais. O compromisso com o seller é a margem.",
      },
    ],
    [
      {
        q: "O que é TACoS na prática da assessoria?",
        options: [
          "A comissão que o Mercado Livre cobra do seller sobre cada venda que vem de Ads pagos",
          "O desconto máximo permitido em promoções, definido pela margem mínima de cada anúncio",
          "O percentual do faturamento destinado à publicidade, combinado com o seller",
          "O preço mínimo de cada SKU, que impede o anúncio de ficar abaixo do valor combinado",
        ],
        answer: [2],
        why: "É o acordo que permite ao assessor distribuir o investimento em publicidade com estratégia, mostrando o lucro total no fim do mês.",
      },
      {
        q: "Um seller exige rentabilidade alta em cada anúncio, inclusive nos que fazem Ads. Qual alinhamento ajuda?",
        options: [
          "Combinar um TACoS e mostrar o lucro total do mês, e não a rentabilidade de cada anúncio",
          "Eliminar o Ads da conta, porque ele sempre reduz a rentabilidade de todos os anúncios",
          "Aplicar o mesmo investimento de Ads em todos os anúncios, para manter a regra igual",
          "Usar a PriceBot para controlar o Ads, já que ela considera a publicidade nas margens",
        ],
        answer: [0],
        why: "A PriceBot não considera Ads. O alinhamento de TACoS e a visão de lucro total resolvem a conversa.",
      },
      {
        q: "Por que a PriceBot não resolve sozinha a conversa sobre publicidade com o seller?",
        options: [
          "Porque ela ajusta o investimento em Ads de cada anúncio, mas o seller não aceita o ajuste",
          "Porque ela não considera Ads nem cupom no cálculo de margem; é preciso alinhar o TACoS",
          "Porque o Ads só funciona em anúncios que não participam de nenhuma campanha promocional",
          "Porque a publicidade é paga pelo Mercado Livre, e o seller não participa dessa decisão",
        ],
        answer: [1],
        why: "Ads e cupom ficam fora do cálculo da PriceBot. O alinhamento do TACoS e a estratégia de distribuição ficam com quem conduz a conta.",
      },
    ],
  ],
  "l6-3": [
    [
      {
        q: "Qual hábito o treinamento recomenda para mostrar valor com o rebate?",
        options: [
          "Mostrar o rebate somente na reunião mensal, junto com os demais resultados da conta",
          "Entrar na conta toda semana e enviar o resultado ao seller, de preferência no grupo",
          "Esperar o seller perguntar ou reclamar para então apresentar os números do rebate",
          "Mostrar o rebate apenas quando o valor acumulado for alto em relação à mensalidade",
        ],
        answer: [1],
        why: "Valor se constrói toda semana, não só quando há reunião ou reclamação.",
      },
      {
        q: "No grupo, o seller pergunta: “quanto o PriceBot me devolveu esta semana?”. Qual é a resposta de maior valor?",
        options: [
          "“Ainda não deu para ver, mas assim que eu olhar o painel eu te aviso por aqui no grupo.”",
          "“Depende, vamos conversar sobre isso com calma na nossa reunião mensal de resultados.”",
          "Conferir o rebate dos últimos 7 dias, enviar o número com um print e um comentário curto",
          "“Não temos esse dado, porque o painel da PriceBot não mostra o valor de rebate.”",
        ],
        answer: [2],
        why: "O painel entrega o rebate por período. Responder rápido e com dado aumenta a percepção de valor.",
      },
      {
        q: "Qual cuidado vale ao mostrar o rebate que a conta recebeu?",
        options: [
          "Usar sempre os números reais já observados, sem prometer valores para o futuro",
          "Mostrar apenas os períodos com rebate alto, escondendo as semanas de resultado menor",
          "Arredondar os valores para cima, para o seller perceber mais valor na assessoria",
          "Comparar com a concorrência, citando números de outros sellers atendidos pela Mamba",
        ],
        answer: [0],
        why: "Mostre o que foi observado, sem garantir o futuro: o rebate depende de campanhas e do interesse do Mercado Livre.",
      },
    ],
    [
      {
        q: "Qual postura evita criar expectativa errada ao apresentar a PriceBot?",
        options: [
          "Prometer um valor de rebate por mês para o seller sentir segurança no investimento",
          "Explicar o mecanismo e mostrar números reais já observados, sem garantir o futuro",
          "Dizer que o faturamento vai dobrar com o tempo, para animar o seller a mandar custos",
          "Evitar falar de rebate nas primeiras conversas, para o seller não criar expectativa",
        ],
        answer: [1],
        why: "O rebate depende de fatores que a ferramenta não controla. Prometer números futuros gera frustração.",
      },
      {
        q: "O relatório mostra R$ 9 mil de rebate e a mensalidade, num exemplo ilustrativo, é R$ 4.500. O que essa conta mostra?",
        options: [
          "Nada de útil, porque rebate e mensalidade são valores de naturezas diferentes na conta",
          "Que o rebate já cobriu duas mensalidades, antes mesmo de contar as demais entregas",
          "Que a mensalidade deve subir, porque o rebate gerado foi alto para o período inteiro",
          "Que o seller deve parar de usar campanhas, porque o rebate não compensa o custo",
        ],
        answer: [1],
        why: "9.000 ÷ 4.500 = 2. A conta de padaria sustenta a percepção de valor, mas o número é só do exemplo: nunca prometa um rebate específico.",
      },
      {
        q: "O assessor promete “no mínimo R$ 10 mil de rebate por mês”. Qual é o problema?",
        options: [
          "Nenhum, porque uma meta clara de rebate ajuda o seller a confiar na assessoria desde o início",
          "O valor é alto demais para o plano contratado e precisaria de aprovação da Mamba antes",
          "Rebate depende de campanhas do Mercado Livre; prometer valor gera expectativa errada",
          "O rebate só existe nas campanhas de Ads, e a PriceBot não influencia o valor mensal",
        ],
        answer: [2],
        why: "Mostre o que já foi observado na conta e explique o mecanismo, sem garantir valores.",
      },
    ],
  ],
  "l6-4": [
    [
      {
        q: "Qual é a melhor forma de verificar se um colega aprendeu a PriceBot?",
        options: [
          "Perguntar “entendeu?” no fim da reunião e seguir em frente com o treinamento se ele disser que sim",
          "Pedir que ele explique de volta o caminho de um seller e resolva um caso novo",
          "Mandar que ele leia de novo todo o material do treinamento antes de atuar nas contas do time",
          "Cobrar que ele memorize o nome e a posição de cada menu e botão do painel da PriceBot",
        ],
        answer: [1],
        why: "Entender é conseguir explicar e aplicar a uma situação nova.",
      },
      {
        q: "Um colega diz que “entendeu tudo”. Qual teste mostra se ele realmente aprendeu?",
        options: [
          "Pedir que repita de cabeça a lista de menus do painel, na ordem em que aparecem",
          "Dar a ele um anúncio abaixo da mínima e pedir que explique o que fazer",
          "Perguntar se ele tem dúvidas e aceitar que ele diga que não tem nenhuma agora",
          "Marcar uma segunda reunião para repetir o conteúdo que ele já tinha visto antes",
        ],
        answer: [1],
        why: "Resolver um caso novo, com as próprias palavras, mede aprendizado. Decorar menus e dizer “entendi” não medem nada.",
      },
      {
        q: "Por que pedir que o colega explique de volta o caminho do seller, do custo ao grant?",
        options: [
          "Porque assim o assessor confere se ele decorou o texto do material usado no treinamento",
          "Porque quem sabe explicar com as próprias palavras de fato entendeu o processo todo",
          "Porque a explicação substitui a prova do módulo e dispensa o restante da trilha de estudos",
          "Porque o colega precisa repetir o conteúdo para o assessor registrar a presença na aula",
        ],
        answer: [1],
        why: "Explicar de volta, sem consulta, revela se há um modelo mental ou só memorização.",
      },
    ],
    [
      {
        q: "Qual é a melhor ordem para explicar a PriceBot a alguém de fora?",
        options: [
          "Menus do painel, depois a regra e, por último, o problema que a ferramenta resolve",
          "Problema, regra, exemplo com números, o que fazer e só então o painel",
          "Preço da ferramenta primeiro e, na sequência, a tela do painel da PriceBot",
          "Grant da conta, planilha de setup e só depois o painel e o motivo de tudo isso",
        ],
        answer: [1],
        why: "O porquê e a regra vêm primeiro; o painel entra depois que a pessoa tem um modelo mental.",
      },
      {
        q: "Por que começar a explicação pelo problema (promoção e preço manuais não escalam)?",
        options: [
          "Porque assim a pessoa entende o motivo da regra e aprende o painel muito mais rápido",
          "Porque o problema é a parte mais curta da explicação e deixa mais tempo para os menus",
          "Porque o painel só pode ser mostrado depois que o seller aprova o treinamento por escrito",
          "Porque a regra de margem é complexa demais e é melhor deixá-la para uma reunião futura",
        ],
        answer: [0],
        why: "Quem entende o porquê e a regra aprende o painel mais rápido. Menus sem contexto viram decoreba.",
      },
      {
        q: "Um assessor tem muitas contas e delega ao time da PriceBot a inclusão de anúncios novos e a correção de custos. Qual a justificativa?",
        options: [
          "Ele não sabe fazer essa parte operacional dentro da plataforma e precisa de ajuda",
          "A plataforma não permite que o assessor faça essas ações no painel de cada conta",
          "Há muito a fazer, e o time cuida do operacional enquanto ele foca em estratégia",
          "É uma obrigação contratual que exige que toda a operação passe pelo time da PriceBot",
        ],
        answer: [2],
        why: "A PriceBot permite fazer pela plataforma, mas quando há volume, delegar a parte operacional é uma escolha de eficiência.",
      },
    ],
  ],
});

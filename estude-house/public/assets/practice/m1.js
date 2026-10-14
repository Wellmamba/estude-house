/* Versões dos quizzes do módulo 2 (m1). A cada "tentar de novo" o aluno recebe outra versão. */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
  "l1-1": [[
    {
      q: "Qual destas frases descreve melhor a PriceBot?",
      options: [
        "Uma ferramenta de Ads que otimiza o lance de cada anúncio com base no ROAS da conta",
        "Uma plataforma que automatiza preço, promoções e catálogo dentro das regras de margem",
        "Um ERP de estoque que emite as notas fiscais e controla as entradas de cada produto",
        "Um robô que copia o preço do concorrente e iguala o anúncio do seller ao dele sempre",
      ],
      answer: [1],
      why: "O bot decide dentro de regras de lucro. Ele não é de Ads e nem copia concorrente: o limite é sempre a margem do seller.",
    },
    {
      q: "Um colega novo pergunta: “o que a PriceBot faz que o trabalho manual não faz?”. Qual resposta é a mais correta?",
      options: [
        "Cria os anúncios novos do seller e escolhe as fotos e os títulos de cada um deles",
        "Decide preço, promoções e catálogo o tempo todo, sempre dentro das margens do seller",
        "Substitui o assessor no contato com o seller e responde as mensagens do grupo por ele",
        "Controla o estoque físico do seller e avisa quando é hora de repor cada um dos produtos",
      ],
      answer: [1],
      why: "A força da PriceBot é operar continuamente a estratégia de preço dentro das regras de margem, algo que ninguém consegue fazer à mão o dia inteiro.",
    },
    {
      q: "Qual afirmação sobre o que a PriceBot não é está correta?",
      options: [
        "Ela não é uma ferramenta de Ads nem um ERP: o foco dela é preço, promoção e catálogo",
        "Ela não é uma ferramenta de preço, porque só calcula comissões e frete de cada venda",
        "Ela não é uma ferramenta do Mercado Livre, pois funciona sem a autorização do seller",
        "Ela não é uma ferramenta de margem, já que ignora custos, impostos e taxas no cálculo",
      ],
      answer: [0],
      why: "A PriceBot automatiza preço, promoções e catálogo a partir de margem. Ads e nota fiscal estão fora do escopo dela.",
    },
  ]],
  "l1-2": [
    [
      {
        q: "Mínima 10%, objetiva 20%. Uma campanha deixaria o anúncio com 15%. O que o bot faz?",
        options: [
          "Não entra, porque o bot só adere às campanhas que levam o anúncio exatamente a 20%",
          "Entra, porque 15% está dentro da faixa entre a margem mínima e a margem objetiva",
          "Entra e sobe o preço base depois, para o anúncio voltar a ficar com os 20% de margem",
          "Pede a aprovação do seller antes de aderir, porque a margem fica abaixo da objetiva",
        ],
        answer: [1],
        why: "Dentro da faixa entre mínima e objetiva, ele adere. E na configuração da Mamba nunca mexe no preço base.",
      },
      {
        q: "Mínima 12%, objetiva 22%. Uma campanha deixaria o anúncio com 9% de margem. O que o bot faz?",
        options: [
          "Entra, porque 9% é perto o bastante da mínima para o bot considerar a campanha válida",
          "Entra e depois reprecifica o anúncio para que a margem volte a ficar em 12% ou mais",
          "Não entra, porque 9% fica abaixo da mínima e a trava de margem não permite a adesão",
          "Entra somente se o seller já tiver vendido várias unidades do anúncio nesse mesmo mês",
        ],
        answer: [2],
        why: "Abaixo da mínima o bot não adere. A mínima é a trava de segurança do seller.",
      },
      {
        q: "Mínima 8%, objetiva 18%. Uma campanha deixaria o anúncio com 17% de margem. O que o bot faz?",
        options: [
          "Entra, porque 17% está dentro da faixa, entre os 8% da mínima e os 18% da objetiva",
          "Não entra, porque 17% não chegou aos 18% da objetiva e o bot só adere acima dela",
          "Não entra, porque uma margem tão alta indica que a campanha tem um desconto pequeno",
          "Entra, mas apenas depois de o assessor ajustar a margem máxima para o valor de 17%",
        ],
        answer: [0],
        why: "A regra é a faixa: entre a mínima e a objetiva o bot pode aderir. A objetiva é o alvo, não uma exigência.",
      },
    ],
    [
      {
        q: "Qual é a ordem correta dos três passos da PriceBot?",
        options: [
          "Ativar a precificação, acompanhar os resultados e só depois definir as regras do seller",
          "Acompanhar o resultado, ativar a precificação e depois definir as regras de negócio",
          "Definir as regras, ativar a precificação automática e acompanhar o resultado do bot",
          "Definir as regras, acompanhar o resultado e só depois ativar a precificação do bot",
        ],
        answer: [2],
        why: "Regras primeiro: sem custo, imposto e margem, ligar o bot seria operar no escuro.",
      },
      {
        q: "Qual destes é o primeiro passo antes de ligar a precificação automática de uma conta?",
        options: [
          "Definir as regras de negócio: custos, impostos e margens mínima e objetiva por SKU",
          "Pedir ao seller que ative o PMA em todos os anúncios da conta, dentro do Mercado Livre",
          "Acompanhar por uma semana os resultados que o bot teria se estivesse ativado na conta",
          "Aguardar a primeira campanha do Mercado Livre aparecer para então decidir as margens",
        ],
        answer: [0],
        why: "É a regra de negócio que diz ao bot onde ele pode atuar. Sem ela, a precificação não tem limite para respeitar.",
      },
      {
        q: "Por que “acompanhar o resultado” é o último passo e não o primeiro?",
        options: [
          "Porque o resultado só existe depois que as regras estão definidas e a precificação está ativa",
          "Porque o acompanhamento é feito apenas pelo seller, que só entra na conta no fim da implantação",
          "Porque o Mercado Livre só libera os relatórios de rebate depois de trinta dias de operação",
          "Porque o bot precisa de um mês sem nenhum acompanhamento para aprender o perfil do seller",
        ],
        answer: [0],
        why: "Sem regras e sem o bot ligado, não há resultado para acompanhar. O acompanhamento fecha o ciclo e realimenta as regras.",
      },
    ],
  ],
  "l1-3": [[
    {
      q: "Quais são benefícios reais da PriceBot para a assessoria? Marque todos.",
      multi: true,
      options: [
        "Aumenta a adesão a campanhas relevantes, uma métrica que o Mercado Livre cobra",
        "Libera tempo do assessor para trabalhar Ads, cupom, estratégia e análise de mercado",
        "Ajuda na retenção e na reversão de sellers que pensam em sair da assessoria",
        "Altera o preço base dos anúncios automaticamente, sem passar pelo alinhamento do seller",
      ],
      answer: [0, 1, 2],
      why: "A alteração do preço base não existe na configuração da Mamba. Os outros três são benefícios apresentados no treinamento.",
    },
    {
      q: "Quais afirmações sobre o uso da PriceBot na operação da Mamba são verdadeiras? Marque todas.",
      multi: true,
      options: [
        "O acesso e as configurações ficam com a Mamba, e o assessor executa o que alinhou com o seller",
        "Os dados da conta chegam por API, depois que o seller autoriza a conexão pelo link de grant",
        "O preço base dos anúncios não é alterado pelo bot: ele só gerencia promoções e catálogo",
        "Cada seller recebe um login próprio para operar a PriceBot e ajustar as margens por conta",
      ],
      answer: [0, 1, 2],
      why: "Por enquanto o seller não tem login: as configurações são alinhadas com ele e executadas pelo assessor.",
    },
    {
      q: "Quais motivos justificam automatizar a entrada em campanhas? Marque todos.",
      multi: true,
      options: [
        "Campanhas relâmpago e de fim de semana surgem a qualquer hora do dia ou da noite",
        "O bot prioriza as campanhas mais relevantes e as que trazem rebate para o seller",
        "Ninguém consegue acompanhar todas as campanhas à mão o tempo todo, em toda a carteira",
        "O Mercado Livre exige automação para a conta continuar ativa nas campanhas promocionais",
      ],
      answer: [0, 1, 2],
      why: "O ganho é disponibilidade e relevância. Não existe exigência do Mercado Livre de usar automação.",
    },
  ]],
});

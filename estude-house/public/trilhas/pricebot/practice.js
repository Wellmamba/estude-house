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
/* Versões dos quizzes do módulo 3 (m2). */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
  "l2-1": [
    [
      {
        q: "Seller com mínima de 12% que investe cerca de 5% em Ads. Qual mínima configurar na PriceBot?",
        options: [
          "12%, porque o investimento em Ads é outra conta e não deve entrar na mínima do bot",
          "17%, somando os 5 pontos de Ads que o bot não enxerga ao que o seller quer ter",
          "7%, subtraindo o Ads da mínima para o bot ter mais espaço de entrar em promoções",
          "0%, porque com o Ads ligado a margem mínima do bot deixa de ter qualquer função",
        ],
        answer: [1],
        why: "O bot ignora Ads. Sem o ajuste, uma promoção que deixa 12% na tela pode deixar só 7% no bolso.",
      },
      {
        q: "A mínima na PriceBot está em 10% e o seller investe 4% do preço em Ads. No pior caso de uma promoção, qual é a margem real?",
        options: [
          "10%, porque a PriceBot já desconta o Ads quando calcula a margem do anúncio",
          "14%, porque o investimento em Ads volta ao seller como receita adicional na venda",
          "6%, porque o bot garante 10% antes do Ads e a publicidade consome 4 pontos por fora",
          "4%, porque o Ads é o único custo que a PriceBot considera para proteger a margem",
        ],
        answer: [2],
        why: "A PriceBot garante 10% sem enxergar o Ads. Tirando 4 pontos de publicidade, sobram 6% de margem real.",
      },
      {
        q: "O seller quer ficar com 15% de margem real depois do Ads e investe 6% do preço em publicidade. Qual mínima cadastrar?",
        options: [
          "15%, porque a margem real que o seller quer é a que vai direto no cadastro do bot",
          "9%, porque o Ads de 6% reduz a margem que o bot precisa garantir para o seller",
          "6%, porque o bot só precisa cobrir o valor do Ads para a margem ficar protegida",
          "21%, somando os 6 pontos de Ads aos 15% que o seller quer ter depois da publicidade",
        ],
        answer: [3],
        why: "Margem real desejada (15%) + Ads (6 pontos) = mínima de 21% cadastrada na PriceBot.",
      },
    ],
    [
      {
        q: "Quais afirmações são verdadeiras sobre as margens da PriceBot? Marque todas.",
        multi: true,
        options: [
          "O bot trabalha entre a margem mínima e a margem objetiva, sem ultrapassar a mínima",
          "A margem máxima é a mais usada no dia a dia e deve ser sempre preenchida em primeiro",
          "A margem ativa é a margem que o anúncio tem agora, com o preço e a promoção em vigor",
          "Uma mínima muito alta pode impedir o bot de entrar em promoções por falta de espaço",
        ],
        answer: [0, 2, 3],
        why: "A máxima existe, mas raramente importa. As demais descrevem corretamente o comportamento da ferramenta.",
      },
      {
        q: "Quais cuidados valem para configurar a mínima de um seller que investe em Ads e cupom? Marque todos.",
        multi: true,
        options: [
          "Lembrar que a PriceBot não considera Ads nem cupom no cálculo da margem do anúncio",
          "Subir a mínima em cerca de tantos pontos quanto o seller investe de Ads sobre o preço",
          "Alinhar com o seller a margem real que ele quer ter depois da publicidade e dos cupons",
          "Deixar a mínima em 0% para que a PriceBot consiga entrar em todas as campanhas livres",
        ],
        answer: [0, 1, 2],
        why: "Ads e cupom ficam fora do cálculo. Por isso a mínima precisa de folga, e o assessor combina a margem real com o seller.",
      },
      {
        q: "Quais afirmações são verdadeiras sobre mínima e objetiva? Marque todas.",
        multi: true,
        options: [
          "A mínima é o piso: abaixo dela o bot não adere a nenhuma campanha do anúncio",
          "A objetiva é o alvo que o bot procura quando a campanha não traz rebate, sem obrigação",
          "Os valores são alinhados com o seller e podem ser ajustados por SKU ou por MLB depois",
          "A objetiva precisa ser sempre menor que a mínima, para o bot ter espaço de trabalhar",
        ],
        answer: [0, 1, 2],
        why: "A objetiva é sempre maior que a mínima: o bot trabalha na faixa entre as duas, e os valores vêm do alinhamento com o seller.",
      },
    ],
  ],
  "l2-2": [
    [
      {
        q: "Dois anúncios iguais entram em campanhas de 15%. No primeiro não há rebate. No segundo o Mercado Livre devolve 5%. Qual rende mais?",
        options: [
          "Os dois rendem igual, porque o desconto anunciado ao comprador é o mesmo nos dois casos",
          "O primeiro, porque não depende de nenhuma devolução por parte do Mercado Livre depois",
          "O segundo: o custo efetivo dele é de 10%, contra os 15% que o primeiro anúncio paga",
          "Depende do dia da semana, porque o rebate muda conforme o fluxo de vendas do marketplace",
        ],
        answer: [2],
        why: "15% − 5% = 10% de custo efetivo. Mesmo desconto anunciado, rentabilidade diferente.",
      },
      {
        q: "A campanha A anuncia 20% de desconto com 8% de rebate. A campanha B anuncia 14% sem rebate. Qual custa menos ao seller?",
        options: [
          "A campanha A, que tem 12% de custo efetivo, contra os 14% da campanha B do anúncio",
          "A campanha B, porque 14% é menor que 20% e o rebate não entra na conta do custo",
          "As duas custam o mesmo, porque 20% menos 8% resulta em um valor igual aos 14% da B",
          "A campanha B, porque campanhas com rebate costumam ter descontos que ficam sempre maiores",
        ],
        answer: [0],
        why: "20% − 8% = 12% de custo efetivo na A, abaixo dos 14% da B. Por ter rebate, a A ainda é priorizada.",
      },
      {
        q: "Um anúncio entra numa campanha de 18% com 6% de rebate. Qual é o desconto efetivo que o seller arca?",
        options: [
          "24%, porque o rebate de 6% é somado ao desconto anunciado pela campanha do Mercado Livre",
          "18%, porque o rebate chega depois e não altera o percentual que o seller paga na venda",
          "6%, porque só o rebate pesa no cálculo e o desconto anunciado é pago pelo comprador",
          "12%, porque os 6% devolvidos pelo Mercado Livre abatem os 18% do desconto anunciado",
        ],
        answer: [3],
        why: "Desconto anunciado (18%) − rebate (6%) = 12% de custo efetivo.",
      },
    ],
    [
      {
        q: "A campanha X anuncia 12% sem rebate. A campanha Y anuncia 17% com 7% de rebate. Qual tem menor custo efetivo?",
        options: [
          "A X, com 12%, porque o desconto anunciado dela é bem menor que os 17% da campanha Y",
          "A Y, com 10%, porque 17% menos 7% de rebate fica abaixo dos 12% da campanha X",
          "As duas, com 12%, porque o rebate de 7% só aparece no extrato e não muda o custo",
          "A Y, com 17%, porque o rebate é um valor que o seller recebe só em outro momento",
        ],
        answer: [1],
        why: "17% − 7% = 10%, abaixo dos 12% da X. É assim que um desconto aparentemente maior sai mais barato.",
      },
      {
        q: "Em que formato o rebate chega ao seller no Mercado Livre?",
        options: [
          "Como crédito no Mercado Pago, que cai sempre no dia seguinte à venda do anúncio",
          "Como um cupom de desconto que o seller usa nas próximas compras dentro do marketplace",
          "Como redução da comissão por venda, visível nas taxas por venda no Nexus",
          "Como desconto na mensalidade que o seller paga à assessoria pelo serviço contratado",
        ],
        answer: [2],
        why: "No Mercado Livre o rebate vem como diminuição da comissão por venda, e por isso dá para mapear o efeito nas taxas.",
      },
      {
        q: "Uma venda de R$ 100,00 acontece numa campanha com 5% de rebate. Quanto o Mercado Livre devolve ao seller nessa venda?",
        options: [
          "R$ 5,00, que é o resultado de 5% sobre o valor de R$ 100,00 da venda realizada",
          "R$ 0,50, porque o rebate é calculado sobre a comissão e não sobre o preço de venda",
          "R$ 50,00, porque o rebate é dado em pontos e cada ponto equivale a dez reais",
          "Nada, porque o rebate só é devolvido depois que o seller completa cem vendas no mês",
        ],
        answer: [0],
        why: "R$ 100,00 × 5% = R$ 5,00 por venda, que aparece como redução da comissão.",
      },
    ],
  ],
  "l2-3": [
    [
      {
        q: "O PMA de um anúncio é R$ 60,00. Uma campanha levaria o preço a R$ 59,79, com margem de 12% (dentro da faixa). Com o PMA ativado, o que acontece?",
        options: [
          "Entra na campanha, porque a margem de 12% está boa e dentro da faixa do anúncio",
          "Entra na campanha e corrige o preço para R$ 60,00 em seguida, de maneira automática",
          "Não entra: o preço mínimo prevalece sobre a margem, mesmo quando ela está boa",
          "Depende do seller, que precisa aprovar a exceção antes de a campanha ser aplicada",
        ],
        answer: [2],
        why: "O PMA é uma trava de segurança. Ele sempre prioriza o preço.",
      },
      {
        q: "PMA ativado em R$ 120,00. Uma campanha levaria o preço a R$ 118,90, com margem de 14% (mínima 10%). O que o bot faz?",
        options: [
          "Adere, porque 14% está na faixa e a diferença de R$ 1,10 é pequena demais para importar",
          "Adere e depois sobe o preço base do anúncio para R$ 120,00, respeitando o PMA do seller",
          "Não adere, porque o preço de R$ 118,90 fica abaixo do PMA, e o preço manda sobre a margem",
          "Não adere, porque 14% é uma margem maior que a mínima e o bot só aceita margens menores",
        ],
        answer: [2],
        why: "Com o PMA ativado, preço abaixo dele não entra, mesmo que a diferença seja pequena e a margem esteja boa.",
      },
      {
        q: "PMA ativado em R$ 45,00. Uma campanha levaria o preço a R$ 46,20, com margem de 11% (mínima 10%, objetiva 20%). O que o bot faz?",
        options: [
          "Não adere, porque a margem de 11% está muito perto da mínima de 10% do anúncio",
          "Adere, porque o preço fica acima do PMA e a margem resultante está dentro da faixa",
          "Não adere, porque o PMA só permite entrar em campanhas que levam o preço exatamente a R$ 45,00",
          "Adere somente se o seller liberar o desconto por mensagem antes da campanha começar",
        ],
        answer: [1],
        why: "As duas travas estão satisfeitas: o preço (R$ 46,20) está acima do PMA e a margem (11%) está dentro da faixa.",
      },
    ],
    [
      {
        q: "A coluna de PMA foi preenchida e enviada ao time da PriceBot. O que falta para a trava valer?",
        options: [
          "Nada, porque a coluna preenchida faz a trava valer sozinha em todos os anúncios da conta",
          "Ativar o PMA nas configurações da plataforma, para o sistema considerar o preço mínimo",
          "Pedir ao seller que ative uma chave equivalente dentro da conta dele no Mercado Livre",
          "Reenviar a planilha toda semana, para o sistema renovar a validade do preço mínimo",
        ],
        answer: [1],
        why: "Sem a ativação, a coluna é só um dado guardado.",
      },
      {
        q: "Para que serve o PMA?",
        options: [
          "Para aumentar a margem objetiva dos anúncios que estão participando de catálogo",
          "Para definir quanto o seller paga de mensalidade pelo uso da assessoria da Mamba",
          "Para impedir que o anúncio fique abaixo de um preço mínimo, mesmo com margem boa",
          "Para calcular o valor de rebate que o Mercado Livre vai devolver em cada campanha",
        ],
        answer: [2],
        why: "O PMA é o preço mínimo anunciado: uma trava de segurança que garante que o preço nunca passe do combinado.",
      },
      {
        q: "O seller revende grandes marcas com preço tabelado e não aceita vender abaixo dele. O que configurar?",
        options: [
          "Uma margem objetiva alta, porque ela impede que o preço caia abaixo do tabelado",
          "O PMA com o preço tabelado na planilha de setup, e ativá-lo nas configurações",
          "Nada, porque o Mercado Livre bloqueia automaticamente preços abaixo do tabelado",
          "Desligar a PriceBot nos anúncios dessas marcas, mantendo as campanhas manuais",
        ],
        answer: [1],
        why: "O PMA existe para esse perfil de seller: preço mínimo no setup e a chave ativada nas configurações.",
      },
    ],
  ],
  "l2-4": [
    [
      {
        q: "Um seller tem dois MLBs do mesmo SKU. O MLB A ganha o catálogo. O que o bot faz com o MLB B?",
        options: [
          "Baixa o preço do B até ganhar do A, para ocupar também a segunda posição no catálogo",
          "Mantém o B no preço atual, sem disputar contra o próprio anúncio, preservando a margem",
          "Pausa o anúncio B no Mercado Livre, para evitar que ele concorra com o anúncio A",
          "Troca os preços de A e B entre si para equilibrar as vendas dos dois anúncios",
        ],
        answer: [1],
        why: "Disputar contra si mesmo só come margem. O bot mantém o B.",
      },
      {
        q: "No painel, um anúncio de catálogo tem “margem para ganhar” de 9,65% (mínima 10%), mas entrou na promoção e está com margem ativa de 12%. Como isso é possível?",
        options: [
          "É um erro de leitura do painel, e o anúncio deveria ter ficado de fora da promoção",
          "A campanha tem rebate, que elevou a margem real para 12%, acima da mínima do anúncio",
          "O seller baixou a mínima por conta própria durante a campanha que estava ativa",
          "A PriceBot ignorou a regra de margem nesse caso, por se tratar de um anúncio de catálogo",
        ],
        answer: [1],
        why: "A margem de 9,65% era calculada sem rebate. Dentro da campanha com rebate, a margem real subiu para 12%.",
      },
      {
        q: "Um anúncio importante perde o catálogo porque ganhar exigiria margem de 6% e a mínima é 10%. Qual é a leitura correta?",
        options: [
          "É um defeito da PriceBot, e o time deve ser acionado para liberar a disputa do catálogo",
          "O bot está esperando a próxima janela de campanhas para tentar disputar o catálogo de novo",
          "Não há margem para ganhar dentro da regra do seller, e o bot não vai além da mínima",
          "O seller precisa trocar o anúncio de categoria para conseguir disputar com margem melhor",
        ],
        answer: [2],
        why: "A regra de margem prevalece. As saídas são decisões do seller: rever custo, reprecificar ou definir outra mínima para o produto.",
      },
    ],
    [
      {
        q: "Quais critérios o bot usa para escolher entre campanhas elegíveis? Marque todos.",
        multi: true,
        options: [
          "Margem resultante dentro da faixa entre a mínima e a objetiva do anúncio",
          "Prioridade para campanhas que trazem rebate, quando mais de uma cabe na margem",
          "Respeito ao PMA, quando ele está ativado nas configurações da plataforma",
          "Qual campanha tem o nome mais curto dentro da lista de campanhas do Mercado Livre",
        ],
        answer: [0, 1, 2],
        why: "Margem, rebate e PMA decidem. O nome da campanha não entra na conta.",
      },
      {
        q: "Em quais situações o bot não entra em uma campanha? Marque todas.",
        multi: true,
        options: [
          "Quando a margem resultante da campanha ficaria abaixo da mínima do anúncio",
          "Quando o PMA está ativo e o preço da campanha ficaria abaixo dele no anúncio",
          "Quando a data da campanha já passou e ela não está mais disponível ao anúncio",
          "Quando o seller tem mais de cem SKUs cadastrados dentro da conta da PriceBot",
        ],
        answer: [0, 1, 2],
        why: "Margem, PMA e data são filtros reais. A quantidade de SKUs do seller não impede nenhuma adesão.",
      },
      {
        q: "O que a PriceBot considera ao comparar duas campanhas que cabem na margem? Marque todas.",
        multi: true,
        options: [
          "A campanha com rebate é priorizada, porque devolve dinheiro ao seller na comissão",
          "O preço final precisa respeitar o PMA do anúncio, quando ele estiver ativado",
          "Em campanhas do Mercado Livre sem rebate, o foco é a margem objetiva do anúncio",
          "A campanha com o maior desconto anunciado é sempre escolhida em primeiro lugar",
        ],
        answer: [0, 1, 2],
        why: "O percentual anunciado engana: pesam rebate, PMA e margem objetiva, não o desconto maior.",
      },
    ],
  ],
});
/* Versões dos quizzes do módulo 4 (m3). */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
  "l3-1": [
    [
      {
        q: "O seller tem os custos por MLB e quase nenhum SKU cadastrado no Nexus. O que fazer?",
        options: [
          "Obrigar o seller a cadastrar um SKU em todos os anúncios antes de começar o setup",
          "Preencher a planilha por MLB e deixar o SKU vazio; o time cria um SKU interno",
          "Inventar um SKU para cada anúncio e pedir que o seller aprove todos eles depois",
          "Avisar que a PriceBot não funciona sem SKU e adiar o início da conta do seller",
        ],
        answer: [1],
        why: "A PriceBot cria o SKU interno a partir do número do MLB. SKU é mais indicado, mas não é impeditivo.",
      },
      {
        q: "Um mesmo SKU está ligado a dois MLBs. Como a PriceBot lida com isso depois do setup?",
        options: [
          "Trata como dois produtos sem nenhuma relação, cada um com seu próprio custo e margem",
          "Apaga um dos dois anúncios para evitar duplicidade e mantém só o mais recente deles",
          "Vincula o custo e as margens do SKU a cada MLB, interligando os dois anúncios",
          "Usa apenas o MLB mais antigo e ignora o outro durante a precificação automática",
        ],
        answer: [2],
        why: "A planilha sobe custo e margem por SKU e a PriceBot os associa a cada MLB correspondente.",
      },
      {
        q: "O seller trabalha com alíquotas diferentes por produto. O que o assessor deve fazer?",
        options: [
          "Usar a alíquota do Simples Nacional para todos os produtos, por ser a mais comum",
          "Calcular a média das alíquotas e usar o mesmo valor para todos os produtos da conta",
          "Deixar a alíquota em branco e corrigir depois, caso o seller reclame da margem",
          "Pedir a alíquota por SKU ao seller, porque ela varia e muda a margem de cada produto",
        ],
        answer: [3],
        why: "Quem não tem alíquota única precisa informar por SKU. A média esconde produtos com margem real diferente da esperada.",
      },
    ],
    [
      {
        q: "Na exportação de rentabilidade, algumas linhas vieram sem custo. Qual é a leitura e a ação?",
        options: [
          "Significa custo zero, então elas entram na planilha com margem de 100% de cada produto",
          "Provavelmente são produtos que o seller não trabalha: retirar da lista de setup",
          "É um erro do Nexus, e a exportação precisa ser refeita até que todos os custos venham",
          "Devem ser preenchidas com a média de custo da carteira para o bot conseguir calcular",
        ],
        answer: [1],
        why: "Falta de custo costuma indicar produto fora da operação. Se for um produto trabalhado, pede-se o custo, nunca se estima.",
      },
      {
        q: "Qual é o caminho mais rápido para montar a lista de custos de um seller que já tem custos no Nexus?",
        options: [
          "Digitar os custos um por um na planilha de setup, conferindo cada produto na tela",
          "Pedir ao seller que envie as notas fiscais de compra e transcrever os valores deles",
          "Exportar a rentabilidade por SKU no Nexus, limpar as linhas sem custo e colar no setup",
          "Copiar os preços de venda e aplicar um desconto padrão para estimar o custo de cada um",
        ],
        answer: [2],
        why: "A rentabilidade já traz os custos por SKU. As linhas sem custo saem, e o restante vai para a planilha de setup.",
      },
      {
        q: "Um produto que o seller trabalha está sem custo na exportação. O que o assessor faz?",
        options: [
          "Estima o custo como metade do preço de venda e segue com o setup para ganhar tempo",
          "Pede o custo ao seller e só inclui o produto no setup quando o valor real chegar",
          "Deixa o custo em branco, porque o bot calcula o custo a partir do preço de venda",
          "Usa o custo de outro produto parecido da carteira, para a margem ficar estimada",
        ],
        answer: [1],
        why: "Produto trabalhado precisa de custo real. Estimar distorce a margem e todas as decisões do bot.",
      },
    ],
  ],
  "l3-2": [
    [
      {
        q: "Quais itens fazem parte da planilha de setup? Marque todos.",
        multi: true,
        options: [
          "Cust ID do seller e o SKU ou MLB de cada produto que será gerenciado",
          "Custo de cada produto e a alíquota de imposto aplicada sobre ele",
          "Margem mínima e margem objetiva, e o preço mínimo quando houver",
          "A senha da conta do seller no Mercado Livre para o time entrar por ele",
        ],
        answer: [0, 1, 2],
        why: "A senha nunca entra. A integração é feita pelo grant.",
      },
      {
        q: "Quais afirmações sobre o envio do setup são verdadeiras? Marque todas.",
        multi: true,
        options: [
          "O nome do seller e o Cust ID acompanham a planilha enviada ao time da PriceBot",
          "O Cust ID do seller fica no Nexus, e é ele que vincula a conta ao cadastro",
          "O lead pode ir junto no envio, mas o nome e o Cust ID já permitem a vinculação",
          "O setup deve ser enviado com cópia ao seller, para ele aprovar cada uma das linhas",
        ],
        answer: [0, 1, 2],
        why: "Nome e Cust ID bastam para vincular. O lead é opcional, e o seller não precisa aprovar a planilha linha a linha.",
      },
      {
        q: "Quais colunas podem constar da planilha de setup, conforme o caso do seller? Marque todas.",
        multi: true,
        options: [
          "Alíquota por SKU, quando o seller trabalha com alíquotas diferentes entre os produtos",
          "Preço mínimo (PMA), quando o seller não aceita vender abaixo de um valor combinado",
          "SKU em branco e MLB preenchido, quando o seller quase não usa SKU nos anúncios",
          "Número do cartão do seller, para o time confirmar a identidade do titular da conta",
        ],
        answer: [0, 1, 2],
        why: "Alíquota por SKU, PMA e MLB sem SKU são variações previstas. Dado de cartão nunca faz parte do setup.",
      },
    ],
    [
      {
        q: "O seller resiste a enviar os custos. Qual abordagem funciona melhor?",
        options: [
          "Pedir uma vez e esperar, para não parecer insistente diante do seller da conta",
          "Explicar o ganho, mostrar a ferramenta, facilitar o preenchimento e cobrar com constância",
          "Estimar os custos com 50% do preço de venda e corrigir depois, se o seller reclamar",
          "Avisar que a assessoria será encerrada caso os custos não cheguem até o fim da semana",
        ],
        answer: [1],
        why: "Custo é o gargalo, e quem implantou toda a carteira combinou clareza do porquê com acompanhamento de perto.",
      },
      {
        q: "Um assessor conseguiu os custos de toda a carteira. Qual combinação ele usou?",
        options: [
          "Pediu os custos uma única vez, com um prazo curto e sem nenhuma explicação adicional",
          "Explicou o motivo e cobrou de perto, dia sim, dia não, até o seller enviar tudo",
          "Estimou os custos pelo preço e deixou o seller corrigir apenas os que tivessem erro",
          "Esperou o seller se interessar sozinho, para que o pedido não gerasse nenhum atrito",
        ],
        answer: [1],
        why: "O caso do treinamento combina o porquê (resultado e gargalo de margem) com cobrança constante até chegar.",
      },
      {
        q: "Qual destas condutas deve ser evitada ao pedir os custos ao seller?",
        options: [
          "Explicar para que o custo serve e o que ele ganha em margem e resultado na conta",
          "Mostrar a PriceBot em funcionamento antes de pedir a planilha de custos completa",
          "Enviar um modelo simples de planilha, para facilitar o preenchimento do seller",
          "Estimar o custo como uma porcentagem do preço e subir o setup assim mesmo",
        ],
        answer: [3],
        why: "Estimar distorce a margem de todos os anúncios. As outras condutas facilitam e valorizam o envio do custo real.",
      },
    ],
  ],
  "l3-3": [
    [
      {
        q: "Qual é a ordem correta do processo de grant e conexão?",
        options: [
          "Subir os anúncios, gerar o link e só depois pedir a conta atribuída ao assessor",
          "Conta atribuída, link para terceiro, seller conecta, status integrado e subir anúncios",
          "Seller conecta a conta, pedir a conta atribuída ao assessor e só então gerar o link",
          "Gerar o link, subir os anúncios do seller e depois pedir a conta atribuída ao assessor",
        ],
        answer: [1],
        why: "O grant precisa acontecer antes: só com a conta integrada a plataforma encontra os MLBs.",
      },
      {
        q: "Por que o grant vem antes da planilha de setup?",
        options: [
          "Porque o link de grant substitui a planilha de setup e dispensa o envio dos custos",
          "Porque o seller só aceita enviar os custos depois de ver a conta dele integrada ao bot",
          "Porque só com a conta integrada a plataforma encontra os MLBs para casar com os SKUs",
          "Porque o Mercado Livre exige que o grant seja feito antes de qualquer planilha de custos",
        ],
        answer: [2],
        why: "A conta integrada puxa os anúncios por MLB. Só então a planilha de setup consegue ser casada com eles.",
      },
      {
        q: "Em qual caminho o assessor gera o link para o seller conectar a conta?",
        options: [
          "Em Configurações > Integrações, gerando o link para terceiro, que é enviado ao seller",
          "Em Anúncios > Importar e exportar, usando o botão de link do importador do portal",
          "Em Downloads, abrindo o último arquivo e copiando o link que fica no início dele",
          "Em Produtos > Pendentes, escolhendo o SKU e clicando no botão que gera o convite",
        ],
        answer: [0],
        why: "O link vem de Configurações > Integrações (link para terceiro). O seller o abre, conecta a conta e o status vira integrado.",
      },
    ],
    [
      {
        q: "Os produtos puxados pela integração não batem com a loja do seller. Qual é a hipótese mais provável?",
        options: [
          "A PriceBot está com defeito de sincronização e o assessor deve aguardar a correção",
          "O seller conectou a conta pessoal, e não a conta da loja, ao clicar no link",
          "O seller mudou de plano no Mercado Livre e por isso os anúncios foram trocados",
          "É um comportamento normal da integração, e o setup pode seguir sem conferência",
        ],
        answer: [1],
        why: "A integração acontece na conta logada no momento do clique. A correção é refazer o grant com a conta certa.",
      },
      {
        q: "Por que se recomenda reforçar ao seller que conecte a conta correta?",
        options: [
          "Porque o link expira em 24 horas e não pode ser gerado de novo pelo assessor depois",
          "Porque o Mercado Livre cobra uma taxa por cada conta conectada a aplicativos externos",
          "Porque o link funciona apenas no computador e falha quando aberto pelo celular dele",
          "Porque ele integra a conta que estiver logada, e uma conta pessoal gera vínculo errado",
        ],
        answer: [3],
        why: "O seller pode ter conta de loja e conta pessoal. A integração acontece na conta logada, e o óbvio precisa ser dito.",
      },
      {
        q: "Por que toda a carteira precisa estar “granteada”?",
        options: [
          "Contas com grant recebem campanhas mais relevantes, algumas exclusivas e com rebate",
          "Porque sem o grant a assessoria deixa de receber a mensalidade dos sellers da carteira",
          "Porque o grant aumenta o limite de anúncios que cada seller pode publicar na conta",
          "Porque o grant libera um login individual do seller para acompanhar o painel sozinho",
        ],
        answer: [0],
        why: "O grant garante acesso a campanhas relevantes, e a adesão a campanhas é uma métrica cobrada pelo Mercado Livre.",
      },
    ],
  ],
  "l3-4": [
    [
      {
        q: "Depois do upload, 300 de 1.200 anúncios estão abaixo da mínima. O que fazer?",
        options: [
          "Ligar a precificação em todos os 1.200 e deixar o bot resolver a margem dos 300",
          "Ligar os 900 dentro da faixa e manter os 300 desligados até o seller reprecificar",
          "Baixar a mínima dos 300 até a margem atual de cada um, para o bot conseguir atuar",
          "Apagar os 300 anúncios do painel para que só os que estão na faixa sejam gerenciados",
        ],
        answer: [1],
        why: "Itens abaixo da mínima ficam desligados. Os demais operam normalmente.",
      },
      {
        q: "Depois do upload, 500 de 2.000 anúncios aparecem abaixo da mínima. Qual é o plano mais adequado?",
        options: [
          "Ligar nos 1.500 que estão dentro da faixa e enviar ao seller a lista dos 500 para reprecificar",
          "Ligar nos 2.000 anúncios e esperar que o bot corrija sozinho os 500 que estão abaixo",
          "Reduzir a mínima dos 500 anúncios para a margem atual de cada um deles no painel",
          "Pausar a conta inteira até o seller reprecificar todos os 2.000 anúncios do cadastro",
        ],
        answer: [0],
        why: "Ligue os que estão na faixa e mantenha os abaixo da mínima desligados; o seller recebe a lista com custo, taxas e margem para reprecificar.",
      },
      {
        q: "O seller pede que a mínima dos anúncios abaixo dela seja baixada até a margem atual, para o bot entrar logo. O que responder?",
        options: [
          "Aceitar, porque essa é a regra atual e a mínima pode ser ajustada para a margem de hoje",
          "Aceitar apenas se o PMA estiver desativado e o seller assumir o risco por escrito",
          "Não baixar: esses anúncios ficam desligados até o seller reprecificar e abrir espaço",
          "Baixar a mínima só dos anúncios de Curva C, que têm pouca venda dentro da carteira",
        ],
        answer: [2],
        why: "Baixar a mínima para a margem atual era a prática antiga. Hoje o item fica desligado e o seller reprecifica.",
      },
    ],
    [
      {
        q: "O seller criou um anúncio novo depois do setup. Qual é o caminho?",
        options: [
          "Refazer toda a planilha de setup e reenviar a carteira inteira ao time da PriceBot",
          "Enviar só aquele anúncio, com custo e margens, ao time da PriceBot, junto com o lead",
          "Esperar a PriceBot detectar o anúncio novo sozinha nas próximas sincronizações",
          "Pedir ao Mercado Livre que sincronize o anúncio com a plataforma da PriceBot",
        ],
        answer: [1],
        why: "Dá para incluir sem refazer a base. Basta enviar o item novo.",
      },
      {
        q: "O seller criou cinco anúncios novos hoje. O que o assessor envia ao time da PriceBot?",
        options: [
          "A carteira inteira de novo, porque o time só aceita planilhas completas de cada conta",
          "Só os cinco anúncios novos, com custo e margens de cada um, para entrarem na base",
          "Apenas o aviso de que há anúncios novos, porque o bot descobre os custos sozinho",
          "Nada, porque os anúncios novos entram automaticamente com a margem de outros anúncios",
        ],
        answer: [1],
        why: "Só os itens novos precisam ser enviados, com custo e margens. Não é preciso refazer a base.",
      },
      {
        q: "Por que não é preciso refazer toda a planilha quando surge um anúncio novo?",
        options: [
          "Porque a base já existe, e o item novo pode ser incluído sem mexer nos demais",
          "Porque o bot copia a margem do último anúncio criado pelo seller para o anúncio novo",
          "Porque o Mercado Livre envia os custos dos anúncios novos direto para a PriceBot",
          "Porque anúncios novos não precisam de custo para entrar na precificação automática",
        ],
        answer: [0],
        why: "A base é incremental: basta enviar o item novo (custo, margens e lead).",
      },
    ],
  ],
});
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
/* Versões dos quizzes do módulo 6 (m5). */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
  "l5-1": [[
    {
      q: "Um anúncio está com margem ativa de 4% e a mínima é 10%. O que fazer?",
      options: [
        "Baixar a mínima para 4%, para o bot começar a atuar no anúncio o quanto antes",
        "Manter desligado e levar o item à lista de reprecificação com o seller",
        "Ligar a precificação e esperar uma promoção com rebate que melhore a margem",
        "Pausar o anúncio no Mercado Livre até o seller corrigir o preço de venda dele",
      ],
      answer: [1],
      why: "O anúncio fica desligado até o preço ser reajustado, para devolver espaço de promoção.",
    },
    {
      q: "Depois do setup, 40 anúncios aparecem com margem ativa de 6% e mínima de 12%. Como apresentar isso ao seller?",
      options: [
        "Como uma cobrança, dizendo que ele errou nos preços e precisa corrigir tudo até amanhã",
        "Enviando só a planilha, sem explicações, para ele concluir sozinho o que precisa ser feito",
        "Com custo, taxas, frete e margem atual, mostrando o espaço que reprecificar abre",
        "Avisando que os anúncios serão pausados caso o seller não reprecifique logo todos eles",
      ],
      answer: [2],
      why: "A conversa funciona quando mostra, com números do produto dele, o que ele ganha ao reprecificar.",
    },
    {
      q: "Qual é o comportamento correto para um anúncio importado com margem abaixo da mínima?",
      options: [
        "Ligar o bot mesmo assim, que ele sobe o preço base até a margem alcançar a mínima",
        "Ajustar a mínima do anúncio para a margem atual, que era a prática antiga da operação",
        "Excluir o anúncio da PriceBot, porque ele não tem condições de entrar em campanhas",
        "Manter a precificação desligada e incluir o anúncio na lista enviada ao seller",
      ],
      answer: [3],
      why: "Ajustar a mínima para a margem atual era a prática antiga. Hoje o item fica desligado e o seller reprecifica.",
    },
  ]],
  "l5-2": [
    [
      {
        q: "Entre uma campanha com rebate e uma sem rebate, ambas dentro da margem, qual o bot prioriza?",
        options: [
          "A campanha sem rebate, porque o desconto anunciado ao comprador é menor que o outro",
          "A campanha com rebate, porque ela devolve dinheiro ao seller na comissão da venda",
          "A campanha mais antiga, porque o anúncio já está inscrito nela há mais tempo do que na outra",
          "Uma das duas, escolhida por sorteio, para distribuir a exposição entre os anúncios",
        ],
        answer: [1],
        why: "O rebate devolve dinheiro ao seller. É a primeira prioridade.",
      },
      {
        q: "Quando o bot entra numa campanha do Mercado Livre sem rebate, em qual margem ele foca?",
        options: [
          "Na mínima, para vender o máximo possível e ganhar volume dentro das campanhas",
          "Na máxima, porque é a margem que o treinamento orienta usar nas campanhas",
          "Na objetiva, sem ficar flutuando entre a margem mínima e a margem objetiva",
          "Oscilando entre a mínima e a objetiva a cada hora, conforme o ritmo das vendas",
        ],
        answer: [2],
        why: "Em campanhas do Mercado Livre com mais visibilidade, o bot mira explicitamente a margem objetiva.",
      },
      {
        q: "O seller pergunta se a PriceBot vai aumentar muito o percentual promocional e prejudicar a visibilidade. O que responder?",
        options: [
          "Que sim, o desconto pode crescer bastante, mas em compensação ele vai vender muito mais",
          "Que só entra promoção que cabe na margem e no PMA, e campanhas relevantes dão visibilidade",
          "Que não há como saber, porque o bot decide cada campanha de forma isolada e imprevisível",
          "Que o desconto aplicado será sempre fixo, de 5%, em todas as campanhas da carteira dele",
        ],
        answer: [1],
        why: "O risco é controlado por margem e PMA. A adesão a campanhas relevantes tende a melhorar a visibilidade.",
      },
    ],
    [
      {
        q: "14% de desconto com 6% de rebate versus 8% sem rebate. O que é verdade?",
        options: [
          "O segundo custa menos, porque o desconto anunciado dele é menor que o do primeiro",
          "Os dois têm o mesmo custo efetivo, de 8%, mas o primeiro é uma campanha com rebate",
          "O primeiro custa 20% ao seller, porque o rebate é somado ao desconto que foi anunciado",
          "Não dá para comparar, porque falta o preço do produto e o custo de cada um dos anúncios",
        ],
        answer: [1],
        why: "14% − 6% = 8%, igual ao custo do outro anúncio. A diferença é que o primeiro participa de uma campanha com rebate, em geral mais relevante.",
      },
      {
        q: "A campanha A anuncia 16% com 4% de rebate. A campanha B anuncia 10% sem rebate. Qual custa menos ao seller?",
        options: [
          "A campanha B, que tem 10% de custo contra os 12% de custo efetivo da campanha A",
          "A campanha A, porque 16% menos 4% de rebate fica abaixo dos 10% da campanha B",
          "As duas custam exatamente o mesmo, porque o rebate só aparece depois e não pesa",
          "A campanha A, porque o desconto anunciado dela é maior e atrai mais compradores",
        ],
        answer: [0],
        why: "16% − 4% = 12% de custo efetivo, maior que os 10% da B. Aqui a B custa menos, mesmo sem rebate.",
      },
      {
        q: "Um anúncio entra numa campanha com rebate e depois o assessor vê a taxa por venda do seller cair no Nexus. O que isso indica?",
        options: [
          "Um erro de cálculo do Nexus, que precisa ser reportado ao time responsável pela ferramenta",
          "Que o seller trocou de plano no Mercado Livre e agora paga uma comissão menor nas vendas",
          "Que a PriceBot reduziu o frete cobrado do seller em todos os envios feitos no período",
          "Que o rebate chegou como redução da comissão, refletindo as adesões com rebate",
        ],
        answer: [3],
        why: "No Mercado Livre o rebate chega como diminuição da comissão por venda.",
      },
    ],
  ],
  "l5-3": [
    [
      {
        q: "Um anúncio tem margem para ganhar o catálogo de 6% e mínima de 10%. Como interpretar?",
        options: [
          "É um defeito da PriceBot, e o time precisa ser acionado para corrigir a regra do anúncio",
          "O bot está aguardando uma janela de campanhas para tentar ganhar o catálogo novamente",
          "Não há margem para ganhar dentro da regra do seller: o bot não passa da mínima",
          "O seller deve trocar o anúncio de categoria para conseguir disputar com mais margem",
        ],
        answer: [2],
        why: "A regra de margem prevalece. As saídas são decisões do seller.",
      },
      {
        q: "O seller tem dois MLBs do mesmo SKU no mesmo catálogo. O MLB A já ganha. O que o bot faz com o B?",
        options: [
          "Mantém o B no preço atual, sem disputar contra o próprio anúncio, preservando margem",
          "Reduz o preço do B até ganhar do A, para ocupar também a segunda posição do catálogo",
          "Pausa o B no Mercado Livre para ele não concorrer com o anúncio A do mesmo seller",
          "Troca o preço dos dois anúncios entre si para equilibrar as vendas do catálogo",
        ],
        answer: [0],
        why: "Disputar contra o próprio anúncio só reduz margem. O bot mantém o B.",
      },
      {
        q: "O preço para ganhar o catálogo seria R$ 78, mas o PMA do anúncio é R$ 80, e a margem para ganhar é de 13% (mínima 10%). Qual é o diagnóstico?",
        options: [
          "Falta de margem: com 13% o anúncio ainda não alcança o mínimo exigido para disputar",
          "O catálogo foi excluído pelo Mercado Livre e o anúncio saiu da disputa sem nenhum aviso",
          "O PMA bloqueia: o preço necessário fica abaixo do mínimo anunciado, mesmo havendo margem",
          "O anúncio é do tipo Clássico, e por isso não consegue disputar o catálogo na conta",
        ],
        answer: [2],
        why: "Margem sobra, mas o preço mínimo é mais restritivo. O bot respeita sempre o PMA.",
      },
    ],
    [
      {
        q: "Marque as ações legítimas quando um anúncio importante não tem margem para ganhar o catálogo.",
        multi: true,
        options: [
          "Procurar uma campanha com rebate que eleve a margem e aproxime o preço de ganhar",
          "Conversar com o seller sobre revisar o custo ou o preço base do produto em questão",
          "Combinar uma margem mínima menor para um objetivo específico, com um limite definido",
          "Alterar o custo no painel da PriceBot para fechar a conta e a margem melhorar",
        ],
        answer: [0, 1, 2],
        why: "Mexer em custo sem alinhamento distorce a margem e quebra a confiança.",
      },
      {
        q: "Um seller de marca vê o catálogo próprio sendo perdido para distribuidores que vendem muito abaixo do tabelado. O que a aba de catálogo permite? Marque todas.",
        multi: true,
        options: [
          "Filtrar a lista pelo status Perdendo e baixar os anúncios com seus links",
          "Identificar quais anúncios estão fora do preço tabelado para acionar quem vende abaixo",
          "Usar a lista como apoio para o seller conversar com a marca ou com os revendedores",
          "Alterar o preço dos distribuidores pelo painel para igualar ao valor do tabelado",
        ],
        answer: [0, 1, 2],
        why: "O download filtrado entrega os links. O painel não altera o preço de outros vendedores.",
      },
      {
        q: "O seller quer queimar preço de propósito para ranquear um produto. Quais passos estão corretos? Marque todos.",
        multi: true,
        options: [
          "Alinhar com o seller um limite de prejuízo aceitável antes de qualquer ajuste de margem",
          "Habilitar a margem negativa na plataforma e ajustar a mínima do anúncio para o valor aceito",
          "Revisar a decisão depois que o objetivo for alcançado, para não virar prejuízo permanente",
          "Desligar o PMA e deixar o bot decidir sozinho até onde o preço pode cair no anúncio",
        ],
        answer: [0, 1, 2],
        why: "Sem alinhamento de limite, habilitação e revisão, a decisão vira prejuízo permanente. Desligar o PMA sem alinhar quebra a confiança.",
      },
    ],
  ],
  "l5-4": [
    [
      {
        q: "Margem de 20%, precificação ligada e uma campanha que daria 17% (mínima 10%). Mesmo assim o bot não entrou. O que investigar?",
        options: [
          "Se a mínima está alta demais, porque ela precisa ser reduzida para o bot conseguir aderir",
          "Elegibilidade, data, PMA e catálogo ganho por outro MLB do mesmo SKU",
          "Se a margem de 17% é proibida pelas regras do Mercado Livre nas campanhas com rebate hoje",
          "Se o bot só entra em campanhas no fim de cada mês, e não durante todo o período ativo",
        ],
        answer: [1],
        why: "17% está dentro da faixa. O motivo está em outro filtro.",
      },
      {
        q: "Um anúncio não entra em uma campanha que o seller queria. Qual é a ordem mais eficiente de diagnóstico?",
        options: [
          "Reenviar o setup inteiro, pedir ao time da PriceBot para refazer o vínculo da conta e tentar a campanha",
          "Trocar o anúncio de categoria no Mercado Livre e aguardar a campanha aparecer de novo",
          "Pedir ao seller que entre na campanha manualmente e depois ligar a precificação do anúncio",
          "Ver se a precificação está ligada, ver campanhas e datas, comparar a faixa e checar PMA",
        ],
        answer: [3],
        why: "Quase todo caso cai em um desses motivos. Seguir a ordem evita retrabalho e permite explicar ao seller o porquê.",
      },
      {
        q: "O seller quer manter um MLB com desconto fixo de 5%, mesmo com a PriceBot. Qual é a orientação?",
        options: [
          "Desligar a PriceBot da conta inteira para atender o pedido do seller sem gerar conflito algum",
          "Ignorar o pedido, porque a regra da assessoria é nunca trabalhar com nenhum desconto fixo",
          "Alinhar por margem; se for pontual, desligar o MLB e aplicar o desconto sabendo que o bot não gere",
          "Aplicar 5% de desconto fixo em toda a carteira de anúncios para manter o mesmo padrão entre eles",
        ],
        answer: [2],
        why: "O alinhamento ideal é por margem. Casos pontuais são exceção consciente, sabendo que desligado o bot não gerencia.",
      },
    ],
    [
      {
        q: "Qual é a primeira pergunta do checklist de diagnóstico?",
        options: [
          "O PMA está ativado nas configurações e o preço da campanha respeita o valor mínimo anunciado?",
          "A precificação automática está ligada no anúncio, a primeira chave a conferir?",
          "Existe rebate na campanha, porque sem rebate o bot nunca consegue entrar nela?",
          "O seller aprovou a campanha manualmente dentro da conta dele no Mercado Livre?",
        ],
        answer: [1],
        why: "Se o anúncio estiver desligado, nada mais importa: o bot não gerencia o que está desligado.",
      },
      {
        q: "Qual alternativa temporária foi relatada quando vários anúncios ficam de fora das campanhas durante uma reprecificação?",
        options: [
          "Pausar todos os anúncios afetados no Mercado Livre até a reprecificação terminar",
          "Reduzir todas as margens mínimas da conta a zero até a reprecificação terminar",
          "Manter no Mercado Livre uma campanha de 5% como rede de segurança, mesmo sem ser o ideal",
          "Desativar a PriceBot na conta inteira até o seller concluir a reprecificação dos preços",
        ],
        answer: [2],
        why: "É uma solução de transição. O cenário ideal é todos os anúncios na PriceBot e dentro das margens.",
      },
      {
        q: "Em qual ordem o checklist de diagnóstico percorre as causas de um anúncio que não entra em campanha?",
        options: [
          "PMA primeiro, depois a data da campanha, e só no fim a chave de precificação do anúncio",
          "Catálogo primeiro, depois o rebate da campanha, e só no fim a margem mínima do anúncio",
          "Chave ligada, campanhas e datas, margem na faixa, PMA e catálogo ganho por outro MLB",
          "Margem objetiva primeiro, depois o seller, e só no fim as campanhas elegíveis do período",
        ],
        answer: [2],
        why: "A ordem vai do mais básico (chave ligada) aos filtros específicos (campanha, margem, PMA, catálogo).",
      },
    ],
  ],
});
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
          "Mostrar o rebate apenas quando o valor acumulado for alto o bastante para impressionar",
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
        q: "Na Visão Geral de Pedidos, nos últimos 30 dias, a conta faturou R$ 50.000 e recebeu R$ 2.500 de rebate. O que você manda ao seller?",
        options: [
          "Que o rebate foi de R$ 2.500, ou 5% do faturamento, um resultado que já aconteceu na conta",
          "Que o rebate foi de R$ 2.500, ou 50% do faturamento, um resultado que já aconteceu na conta",
          "Que o rebate foi de R$ 2.500, ou 0,5% do faturamento, um resultado que já aconteceu na conta",
          "Que o rebate foi de R$ 2.500 e deve crescer no mês que vem, porque a conta já está no ritmo",
        ],
        answer: [0],
        why: "2.500 ÷ 50.000 = 0,05, ou 5%. Mostre o resultado real, em reais e em percentual, e nunca prometa um rebate futuro.",
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

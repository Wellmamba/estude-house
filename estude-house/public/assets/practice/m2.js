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

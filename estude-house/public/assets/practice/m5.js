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

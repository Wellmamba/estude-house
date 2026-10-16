export default [
  {
    "id": "gf-m10-01",
    "module": "gf-m10",
    "topic": "Mecânicas de promoção",
    "q": "O cliente ativa um botão na página do produto e ganha 5% de desconto no pedido. Qual mecânica é essa e o que você confere antes?",
    "options": [
      "Desconto progressivo; confira se o desconto cresce com a quantidade comprada",
      "Oferta; confira se o preço cai só por tempo limitado, sem nenhum botão",
      "Cupom; confira quem banca o valor: você, a plataforma ou os dois",
      "Campanha oficial; confira se a plataforma escolhe os anúncios sozinha"
    ],
    "answer": [
      2
    ],
    "why": "Cupom é o desconto que o cliente ativa. Como parte do valor pode sair da sua margem, confira nas condições quem banca."
  },
  {
    "id": "gf-m10-02",
    "module": "gf-m10",
    "topic": "Frete grátis",
    "q": "Sobre frete grátis em campanhas, qual afirmação está ERRADA?",
    "options": [
      "Frete grátis não tem custo pra ninguém, porque o cliente deixa de pagar o frete",
      "O custo do frete pode sair da sua margem, ser dividido ou ser bancado pela plataforma",
      "A regra de quem banca o frete pode mudar de uma campanha ou programa para outro",
      "Antes de aceitar, a condição de frete deve entrar na conta da margem do produto"
    ],
    "answer": [
      0
    ],
    "why": "Frete grátis para o cliente sempre tem um custo: alguém paga. Pode ser você, a plataforma ou os dois, e a regra muda por campanha."
  },
  {
    "id": "gf-m10-03",
    "module": "gf-m10",
    "topic": "Lucro com desconto",
    "q": "Um produto custa R$ 27 e é vendido a R$ 60, com taxas de 20% do preço (números de exemplo). Com 10% de desconto, qual é o lucro por unidade?",
    "options": [
      "R$ 18,90 por unidade, porque o lucro de R$ 21 cai 10%",
      "R$ 15,00 por unidade, porque a taxa continua em R$ 12",
      "R$ 27,00 por unidade, porque as taxas deixam de contar",
      "R$ 16,20 por unidade, porque a taxa cai para R$ 10,80"
    ],
    "answer": [
      3
    ],
    "why": "Preço novo: 60 x 0,90 = R$ 54. Taxas: 20% de 54 = R$ 10,80. Lucro: 54 - 27 - 10,80 = R$ 16,20, abaixo dos R$ 21 de antes."
  },
  {
    "id": "gf-m10-04",
    "module": "gf-m10",
    "topic": "Mecânicas de promoção",
    "q": "Sobre as mecânicas de promoção, marque todas as afirmações corretas.",
    "options": [
      "Combo junta produtos num preço só, e a margem é a soma das margens menos o desconto",
      "Cupom é sempre bancado pela plataforma, então nunca afeta a margem do seller",
      "Desconto progressivo dá desconto maior quanto mais unidades o cliente leva",
      "Campanha oficial é organizada pela plataforma, e o seller escolhe se entra",
      "Oferta é um preço promocional sem prazo, que vale para sempre no anúncio"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "why": "Combo, desconto progressivo e campanha oficial foram descritos como na aula. Cupom pode ter parte bancada pelo seller, e oferta tem tempo limitado."
  },
  {
    "id": "gf-m10-05",
    "module": "gf-m10",
    "topic": "Combo",
    "q": "Você monta um combo de dois produtos. A margem do produto A é R$ 14, a do B é R$ 4 e o desconto do combo é R$ 6 (números de exemplo). Qual é a margem do combo?",
    "options": [
      "R$ 18 de margem: soma das duas margens, porque o desconto só reduz o preço do combo",
      "R$ 12 de margem: 14 + 4 - 6, com o desconto pesando bastante no item de margem baixa",
      "R$ 8 de margem: só o produto A conta, porque o B tem margem baixa demais",
      "R$ 6 de margem: o desconto de R$ 6 é tirado uma vez de cada produto do combo"
    ],
    "answer": [
      1
    ],
    "why": "A margem do combo é a soma das margens menos o desconto: 14 + 4 - 6 = R$ 12. Ignorar o desconto leva a R$ 18, que não é o que sobra."
  },
  {
    "id": "gf-m10-06",
    "module": "gf-m10",
    "topic": "Campanha oficial",
    "q": "Chega o convite de uma campanha oficial com \"visibilidade garantida\". Qual é o primeiro passo coerente com a aula?",
    "options": [
      "Aceitar logo, porque campanha organizada pela plataforma sempre traz lucro ao seller",
      "Recusar logo, porque toda campanha oficial deixa a margem do anúncio negativa",
      "Esperar o fim da campanha para ver o resultado e só então calcular a margem",
      "Ler as condições e simular a margem com o preço novo, as taxas e os custos extras"
    ],
    "answer": [
      3
    ],
    "why": "Convite não é decisão. Primeiro leia as condições e simule a margem; só depois decida se participa, negocia ou recusa."
  },
  {
    "id": "gf-m10-07",
    "module": "gf-m10",
    "topic": "Desconto progressivo",
    "q": "Um produto custa R$ 22 e vende a R$ 50, com taxas de 20% do preço. O cliente leva 2 unidades com 10% de desconto no total (números de exemplo). Qual o lucro do pedido?",
    "options": [
      "R$ 28,00 no pedido, porque a taxa cai para R$ 18",
      "R$ 32,40 no pedido, porque o lucro de R$ 36 cai 10%",
      "R$ 26,00 no pedido, porque a taxa continua em R$ 20",
      "R$ 36,00 no pedido, porque o desconto não muda o lucro"
    ],
    "answer": [
      0
    ],
    "why": "Receita: 2 x 50 x 0,90 = R$ 90. Taxas: 20% de 90 = R$ 18. Custo: 2 x 22 = R$ 44. Lucro: 90 - 44 - 18 = R$ 28, e sem desconto seria R$ 36."
  },
  {
    "id": "gf-m10-08",
    "module": "gf-m10",
    "topic": "Regras que mudam",
    "q": "Um seller diz: \"cupom é sempre bancado pela plataforma, li isso numa campanha antiga\". Qual é a melhor resposta?",
    "options": [
      "Está certo, porque cupom é sempre custo da plataforma em qualquer campanha",
      "Está errado, porque cupom é sempre custo do seller em qualquer campanha",
      "Depende: a regra muda por campanha, então vale conferir as condições vigentes",
      "Depende só do tamanho do cupom, e quem decide é o cliente que o ativa"
    ],
    "answer": [
      2
    ],
    "why": "Quem banca desconto, frete e custos extras muda entre campanhas. A fonte final é a documentação oficial e as condições da campanha vigente."
  },
  {
    "id": "gf-m10-09",
    "module": "gf-m10",
    "topic": "Vendas para empatar",
    "q": "Um produto de R$ 150 custa R$ 60 e tem taxas de 30% do preço (números de exemplo). Com 20% de desconto, quanto as vendas precisam subir pra empatar o lucro total?",
    "options": [
      "Cerca de 20% a mais, o mesmo tamanho do desconto dado ao cliente",
      "Cerca de 88% a mais: o lucro unitário vai de R$ 45 a R$ 24",
      "Cerca de 47% a mais, que é a queda percentual do lucro unitário",
      "Cerca de 100% a mais, porque o desconto dobra o custo do produto"
    ],
    "answer": [
      1
    ],
    "why": "Antes: 150 x 0,70 - 60 = R$ 45. Depois: 120 x 0,70 - 60 = R$ 24. Vendas necessárias: 45 ÷ 24 = 1,88, ou seja, cerca de 88% a mais."
  },
  {
    "id": "gf-m10-10",
    "module": "gf-m10",
    "topic": "Taxa extra da campanha",
    "q": "Preço com desconto de R$ 80, produto de R$ 38, taxas normais de 22% do preço e taxa extra de campanha de 3% do preço (números de exemplo). Qual o lucro por unidade?",
    "options": [
      "R$ 24,40 por unidade, esquecendo a taxa extra da campanha",
      "R$ 21,40 por unidade, tratando a taxa extra como R$ 3 fixos",
      "R$ 42,00 por unidade, sem contar nenhuma taxa sobre o preço",
      "R$ 22,00 por unidade, somando taxas de 25% sobre os R$ 80"
    ],
    "answer": [
      3
    ],
    "why": "Taxas somadas: 22% + 3% = 25% de R$ 80 = R$ 20. Lucro: 80 - 38 - 20 = R$ 22. Sem a taxa extra, você acharia que sobram R$ 24,40."
  },
  {
    "id": "gf-m10-11",
    "module": "gf-m10",
    "topic": "Visibilidade x margem",
    "q": "Um seller insiste em aceitar a campanha porque \"dá visibilidade\", mas o lucro por unidade ficaria abaixo do piso. Qual resposta segue a aula?",
    "options": [
      "Mostrar o lucro antes e depois e propor entrar só com os produtos de margem folgada",
      "Aceitar, porque a visibilidade de hoje sempre se paga depois com mais lucro",
      "Recusar sem explicar, porque o piso decide e o seller não precisa ver a conta",
      "Aceitar metade dos produtos, escolhidos ao acaso, só para dividir o risco"
    ],
    "answer": [
      0
    ],
    "why": "Visibilidade não paga boleto. Mostre o número e ofereça uma alternativa, como entrar só com os produtos que aguentam o desconto."
  },
  {
    "id": "gf-m10-12",
    "module": "gf-m10",
    "topic": "Quando recusar",
    "q": "Marque todas as situações em que recusar ou renegociar a campanha é a decisão mais coerente.",
    "options": [
      "O preço com desconto e taxa extra deixa o lucro abaixo do piso",
      "O estoque cobre o pico com folga e o lucro fica acima do piso",
      "A meta de vendas necessária pra empatar está fora da realidade",
      "O seller tem estoque parado que custa mais caro que o desconto",
      "O estoque é curto e vai faltar mercadoria no meio do pico"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "why": "Lucro abaixo do piso, meta irreal e falta de estoque pedem recusa ou renegociação. Estoque parado caro e margem acima do piso podem justificar participar."
  },
  {
    "id": "gf-m10-13",
    "module": "gf-m10",
    "topic": "Piso",
    "q": "O que é o piso, na decisão sobre uma campanha?",
    "options": [
      "O desconto máximo que a plataforma aceita em campanhas oficiais para qualquer seller",
      "O preço médio praticado pelos concorrentes do mesmo produto na mesma categoria",
      "O menor preço ou margem que o seller aceita para vender sem entrar no prejuízo",
      "A quantidade mínima de unidades em estoque exigida para entrar em uma campanha"
    ],
    "answer": [
      2
    ],
    "why": "Piso é o limite do seller: abaixo dele a venda não compensa. É a régua para decidir se participa, negocia ou recusa."
  },
  {
    "id": "gf-m10-14",
    "module": "gf-m10",
    "topic": "Decidir com número",
    "q": "Produto de R$ 100, custo de R$ 55 e taxas de 25% do preço, com piso de R$ 10 de lucro por unidade (números de exemplo). A campanha pede 20% de desconto. O que fazer?",
    "options": [
      "Participar, porque o lucro de R$ 5 é positivo e a visibilidade compensa a diferença",
      "Recusar ou renegociar, porque o lucro cai para R$ 5, abaixo do piso de R$ 10",
      "Participar, porque o lucro continua em R$ 20, acima do piso de R$ 10",
      "Recusar, porque qualquer desconto acima de 10% deixa a margem negativa"
    ],
    "answer": [
      1
    ],
    "why": "Preço novo: R$ 80. Taxas: 25% de 80 = R$ 20. Lucro: 80 - 55 - 20 = R$ 5, abaixo do piso. Os R$ 20 eram o lucro antes do desconto."
  },
  {
    "id": "gf-m10-15",
    "module": "gf-m10",
    "topic": "Argumentar com o seller",
    "q": "Sobre como argumentar contra uma campanha que dá visibilidade e tira margem, qual afirmação está ERRADA?",
    "options": [
      "Reconhecer o objetivo do seller ajuda a manter a conversa de igual para igual",
      "Mostrar o lucro antes e depois deixa a discussão mais clara que uma opinião",
      "Oferecer uma alternativa, como desconto menor, evita um \"não\" seco",
      "O melhor é recusar sem mostrar números, para o seller não discutir a decisão"
    ],
    "answer": [
      3
    ],
    "why": "O argumento forte é o número. Esconder a conta tira a confiança do seller; mostre o antes e o depois e ofereça alternativa."
  },
  {
    "id": "gf-m10-16",
    "module": "gf-m10",
    "topic": "Estoque parado",
    "q": "O seller tem 300 unidades paradas, que custam armazenagem todo mês. A campanha deixa o lucro por unidade menor, mas ainda acima do piso. O que a aula sugere?",
    "options": [
      "Recusar, porque qualquer queda de lucro unitário torna a campanha ruim para o seller",
      "Aceitar sem calcular, porque estoque parado justifica qualquer desconto de campanha",
      "Considerar participar, comparando a perda de margem com o custo do estoque parado",
      "Esperar mais seis meses para ver se o estoque gira sozinho antes de decidir"
    ],
    "answer": [
      2
    ],
    "why": "Estoque parado que custa mais que o desconto é um caso em que participar pode fazer sentido, desde que o lucro fique acima do piso e a conta feche."
  },
  {
    "id": "gf-m10-17",
    "module": "gf-m10",
    "topic": "Cobertura de estoque",
    "q": "Um produto tem 600 unidades em estoque e vende 24 por dia (números de exemplo). Quantos dias de cobertura ele tem?",
    "options": [
      "25 dias de cobertura, porque 600 unidades ÷ 24 por dia",
      "175 dias, tratando as 24 vendas como se fossem por semana",
      "576 dias, porque 600 menos 24 dá o resultado da cobertura",
      "24 dias, o mesmo número de vendas que o produto faz por dia"
    ],
    "answer": [
      0
    ],
    "why": "Cobertura = estoque ÷ vendas por dia. Com 600 ÷ 24 = 25, o estoque aguenta 25 dias no ritmo atual."
  },
  {
    "id": "gf-m10-18",
    "module": "gf-m10",
    "topic": "Ponto de pedido",
    "q": "Um produto vende 30 por dia, o prazo de reposição é de 12 dias e a folga de segurança é de 60 unidades (números de exemplo). Qual é o ponto de pedido?",
    "options": [
      "360 unidades, porque a folga de segurança entra só depois do pedido",
      "360 unidades de prazo mais 60 de folga, ou seja, 420 unidades",
      "102 unidades, somando vendas por dia, prazo e folga",
      "2.160 unidades, multiplicando as vendas pelo prazo mais a folga"
    ],
    "answer": [
      1
    ],
    "why": "Ponto de pedido = vendas por dia x prazo + folga: 30 x 12 + 60 = 420. Ao chegar a 420 unidades, é hora de pedir mais."
  },
  {
    "id": "gf-m10-19",
    "module": "gf-m10",
    "topic": "Estoque pro pico",
    "q": "Um produto vende 15 por dia e a campanha deve quadruplicar isso por 6 dias. Com folga de 20% e 100 unidades em estoque, quantas faltam? (números de exemplo)",
    "options": [
      "260 unidades: 360 do pico menos 100 em estoque, sem a folga",
      "432 unidades: 360 do pico mais 72 de folga, sem descontar o estoque",
      "332 unidades: 360 do pico mais 72 de folga, menos as 100 que já existem",
      "8 unidades: 15 por dia durante 6 dias com a folga, menos o estoque"
    ],
    "answer": [
      2
    ],
    "why": "Pico: 15 x 4 = 60 por dia, por 6 dias = 360. Folga de 20% = 72. Total 432. Com 100 em estoque, faltam 432 - 100 = 332 unidades."
  },
  {
    "id": "gf-m10-20",
    "module": "gf-m10",
    "topic": "Calendário comercial",
    "q": "Qual sequência de planejamento de uma data forte é mais coerente com a aula?",
    "options": [
      "Montar os anúncios, depois calcular o preço mínimo e só então definir a meta e a data",
      "Definir data e meta, programar compra e estoque, simular o preço e fechar os anúncios",
      "Esperar a plataforma convidar, aceitar a campanha e só depois comprar o estoque do pico",
      "Comprar estoque o mais cedo possível e definir o preço só no dia do pico de vendas"
    ],
    "answer": [
      1
    ],
    "why": "O calendário parte da data e da meta, depois cuida de compra e estoque com prazo, simula preço e fecha anúncios. Estoque e preço não se resolvem na véspera."
  },
  {
    "id": "gf-m10-21",
    "module": "gf-m10",
    "topic": "Retração pós-pico",
    "q": "Duas semanas depois do pico, as vendas estão 30% abaixo do ritmo normal e o seller acha que o anúncio quebrou. O que você explica?",
    "options": [
      "Pode ser retração pós-pico: parte dos clientes comprou antes por causa do desconto",
      "É sinal de erro grave no anúncio, e o certo é baixar o preço de novo para recuperar as vendas",
      "É normal e não precisa ser medida, porque só importa o resultado da semana do pico",
      "É defeito da plataforma, que reduz a visibilidade de quem participou de campanhas"
    ],
    "answer": [
      0
    ],
    "why": "Retração é a queda de vendas depois do pico, porque parte da demanda foi antecipada pelo desconto. Ela entra na conta do resultado da campanha."
  },
  {
    "id": "gf-m10-22",
    "module": "gf-m10",
    "topic": "Pós-campanha",
    "q": "Marque todas as análises que fazem parte do pós-campanha.",
    "options": [
      "Comparar vendas e lucro antes, durante e depois do pico com o ritmo normal",
      "Somar o impacto da retração nas semanas seguintes ao pico",
      "Olhar só o faturamento da semana do pico, ignorando os outros dados",
      "Descartar os dados, porque a próxima campanha será sempre diferente",
      "Registrar o aprendizado para ajustar desconto, estoque e data da próxima"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "why": "O pós-campanha compara o período inteiro com o normal, conta a retração e registra o aprendizado. Olhar só o pico ou jogar os dados fora repete os erros."
  },
  {
    "id": "gf-m10-23",
    "module": "gf-m10",
    "topic": "Balanço da campanha",
    "q": "Lucro normal: R$ 1.000 por semana. Na semana da campanha: R$ 1.500. Nas três semanas seguintes: R$ 600, R$ 900 e R$ 1.000 (números de exemplo). Qual o resultado das 4 semanas contra o normal?",
    "options": [
      "Ganho de R$ 500, olhando só a semana da campanha contra o normal",
      "Perda de R$ 500, olhando só as três semanas depois do pico",
      "Ganho de R$ 1.500, que é o lucro total da semana da campanha",
      "Empate: R$ 4.000 nos dois cenários, porque a queda anulou o ganho do pico"
    ],
    "answer": [
      3
    ],
    "why": "Com campanha: 1.500 + 600 + 900 + 1.000 = R$ 4.000. Sem campanha: 4 x 1.000 = R$ 4.000. O ganho de R$ 500 do pico foi devolvido na retração."
  },
  {
    "id": "gf-m10-24",
    "module": "gf-m10",
    "topic": "Calendário e pós-campanha",
    "q": "Sobre calendário comercial e pós-campanha, qual afirmação está ERRADA?",
    "options": [
      "Preço e estoque da data forte se preparam antes, com prazo de compra e envio",
      "A retração pós-pico é só azar, então não deve entrar na conta da campanha",
      "Datas e regras das campanhas mudam, e a fonte final é a documentação oficial",
      "O registro do resultado de cada campanha ajuda a planejar o próximo calendário"
    ],
    "answer": [
      1
    ],
    "why": "A retração acontece porque o desconto antecipa compras. Ela precisa entrar na conta para você saber se a campanha deu lucro de verdade."
  }
];

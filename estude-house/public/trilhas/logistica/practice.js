/* Versões dos quizzes da trilha "Logística e Full". A cada "tentar de novo" o aluno recebe outra versão. */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
 "gf-l8-1": [
  [
   "base",
   {
    "q": "Uma conta quer usar uma única modalidade em todos os SKUs, só para simplificar a operação. Qual é o problema dessa ideia?",
    "options": [
     "Se a modalidade for a mais barata no frete, ela serve bem para qualquer SKU",
     "Cada SKU tem giro, peso, região e margem diferentes; um caminho só desperdiça",
     "Só funciona se for o Full, que é a modalidade indicada para qualquer SKU",
     "A operação fica mais simples, mas o prazo de entrega sobe para todos os pedidos"
    ],
    "answer": [
     1
    ],
    "why": "Cada SKU pede uma conta própria de giro, peso, região e margem. Um caminho único deixa dinheiro na mesa: o que é ótimo para um SKU pode ser caro para outro."
   },
   {
    "q": "Qual afirmação sobre a escolha da modalidade de envio está ERRADA?",
    "options": [
     "Coleta é a melhor para quem despacha poucos pedidos por mês, sem rotina",
     "Flex pode valer quando os clientes estão perto do estoque do vendedor",
     "Places combina com volume baixo e sem rotina diária de despacho",
     "Full costuma valer primeiro para SKUs que giram rápido, depois de fazer a conta"
    ],
    "answer": [
     0
    ],
    "why": "A Coleta combina com despacho frequente, com a transportadora buscando na porta. Para volume baixo e sem rotina, o perfil costuma ser Places. As demais estão corretas."
   },
   {
    "q": "O dono da conta pergunta: por que não mandamos tudo para o Full, que parece o mais moderno? Qual é a melhor resposta?",
    "options": [
     "O Full é proibido para contas pequenas, então nem vale a pena tentar",
     "O Full demora mais para entregar do que todas as outras modalidades",
     "O Full cobra armazenagem, então só vale para SKU que gira e tem margem",
     "O Full só aceita produto que o vendedor já embalou em caixa grande"
    ],
    "answer": [
     2
    ],
    "why": "O Full guarda e envia por você, mas a armazenagem tem custo. Por isso entra SKU por SKU, onde o giro e a margem pagam essa conta."
   }
  ]
 ],
 "gf-l8-2": [
  [
   "base",
   {
    "q": "Qual combinação aumenta mais o risco de atraso na operação Flex?",
    "options": [
     "Corte com folga e cobertura curta, que o motorista consegue cumprir",
     "Plano B pronto e acompanhamento semanal das entregas no prazo",
     "Pacote embalado e etiquetado antes de o motorista sair para a rota",
     "Corte apertado e cobertura grande demais para o motorista que você tem"
    ],
    "answer": [
     3
    ],
    "why": "Corte apertado deixa pouco tempo para separar e embalar, e cobertura grande demais alonga a rota. Juntos, eles empurram a entrega para depois do prazo prometido."
   },
   {
    "q": "As entregas no prazo foram 98%, 97% e 94% em três semanas, com limite interno de 95%. O que isso indica?",
    "options": [
     "Na terceira semana cruzou o limite: hora de ajustar o corte",
     "Está tudo bem, porque as três semanas ficaram acima de 90%",
     "O limite deveria cair para 90%, e assim o alerta deixa de existir",
     "Só vale agir se a queda continuar por mais de dois meses seguidos"
    ],
    "answer": [
     0
    ],
    "why": "O limite interno serve para agir antes que a reputação sinta. Em 94% a linha cruzou os 95%, então é hora de rever o corte ou encurtar a cobertura."
   },
   {
    "q": "Um pedido do Flex vai atrasar um dia. Qual mensagem ao cliente segue o tom firme e humano?",
    "options": [
     "Não avisa e espera o cliente perguntar, para evitar reclamação antecipada",
     "Avisa o motivo, dá o novo prazo e diz o que você já fez para resolver",
     "Promete entrega ainda hoje, sem ter certeza, para acalmar o cliente",
     "Culpa a transportadora e a plataforma, sem informar um novo prazo"
    ],
    "answer": [
     1
    ],
    "why": "Cliente avisado cedo, com motivo e novo prazo, sente respeito. Silêncio, promessa sem base e culpar terceiros pioram a experiência e a nota da conta."
   }
  ]
 ],
 "gf-l8-3": [
  [
   "base",
   {
    "q": "Uma caixa mede 60 x 20 x 10 cm e pesa 3 kg. Com fator de cubagem 6.000 (números de exemplo), qual peso entra no frete?",
    "options": [
     "2,0 kg, porque o peso cúbico sempre vale mais que o real",
     "2,5 kg, porque o frete usa a média entre os dois pesos",
     "3,0 kg, porque o peso real é maior que o cúbico de 2,0 kg",
     "12 kg, porque o volume em cm³ é dividido apenas por mil"
    ],
    "answer": [
     2
    ],
    "why": "O volume é 60 x 20 x 10 = 12.000 cm³, e 12.000 ÷ 6.000 = 2,0 kg de peso cúbico. Como o peso real de 3 kg é maior, ele é o que entra no frete."
   },
   {
    "q": "Uma caixa mede 40 x 25 x 12 cm e pesa 0,8 kg. Com fator de cubagem 6.000 (números de exemplo), qual peso entra no frete?",
    "options": [
     "0,8 kg, porque o peso real é o único que conta",
     "1,4 kg, porque o frete usa a média entre os dois pesos",
     "2,8 kg, porque o frete soma o peso cúbico e o real",
     "2,0 kg, porque o peso cúbico é maior que o real"
    ],
    "answer": [
     3
    ],
    "why": "O volume é 40 x 25 x 12 = 12.000 cm³, e 12.000 ÷ 6.000 = 2,0 kg. O peso cúbico é maior que os 0,8 kg reais, então é ele que entra no cálculo do frete."
   },
   {
    "q": "Uma caixa mede 50 x 30 x 20 cm e pesa 1,5 kg. Com fator de cubagem 6.000 (números de exemplo), qual peso entra no frete?",
    "options": [
     "1,5 kg, porque o peso real é o que a transportadora pesa",
     "5,0 kg, porque o peso cúbico é maior que o real",
     "3,25 kg, porque o frete usa a média entre os dois pesos",
     "6,5 kg, porque o frete soma o peso cúbico e o real"
    ],
    "answer": [
     1
    ],
    "why": "O volume é 50 x 30 x 20 = 30.000 cm³, e 30.000 ÷ 6.000 = 5,0 kg. Esse peso cúbico passa o real de 1,5 kg, então o frete usa o maior dos dois."
   }
  ]
 ],
 "gf-l8-4": [
  [
   "base",
   {
    "q": "Um SKU dá R$ 8,00 de margem fora do Full. No Full, a economia de frete é R$ 2,00 e a armazenagem sai R$ 1,50 por mês, com 90 dias de estoque parado (números de exemplo). Qual a margem no Full?",
    "options": [
     "R$ 5,50, pior que os R$ 8,00 de fora do Full",
     "R$ 8,50, porque a armazenagem é cobrada só uma vez",
     "R$ 10,00, porque a armazenagem não entra na conta",
     "R$ 3,50, porque a economia de frete não entra na conta"
    ],
    "answer": [
     0
    ],
    "why": "90 dias são 3 meses, então a armazenagem é 3 x 1,50 = 4,50. A margem no Full é 8,00 + 2,00 - 4,50 = 5,50, menor que a de fora. Nesse caso o Full não compensa."
   },
   {
    "q": "Um SKU vende 90 unidades por mês, tem margem folgada e vive em ruptura. O que você faz?",
    "options": [
     "Evita o Full, porque giro alto sempre gera custo alto de armazenagem",
     "Manda o estoque inteiro sem simular, já que a ruptura prova que vale",
     "Simula o Full, pois giro alto e margem folgada indicam candidato forte",
     "Espera o giro cair, porque só SKU parado pode entrar no Full"
    ],
    "answer": [
     2
    ],
    "why": "Giro alto e margem folgada são o perfil de candidato ao Full, e a ruptura mostra venda perdida. Mesmo assim, o certo é simular antes de enviar o lote."
   },
   {
    "q": "Por que os dias de estoque parado pesam tanto na conta do Full?",
    "options": [
     "A plataforma reduz a comissão de quem deixa o estoque parado por mais tempo",
     "O estoque parado perde a elegibilidade para vender novamente no Full",
     "O estoque parado aumenta o valor do frete cobrado do comprador",
     "A armazenagem é cobrada por tempo: mais dias parado, mais custo por unidade"
    ],
    "answer": [
     3
    ],
    "why": "A armazenagem é cobrada por tempo de estoque. Quanto mais dias a unidade fica parada, maior o custo por unidade, e esse custo pode passar o ganho de frete e de vendas."
   }
  ],
  [
   "base",
   {
    "q": "Um SKU vende 10 un/dia, o lote leva 3 dias para chegar ao Full e a folga é de 3 dias (números de exemplo). Qual é o ponto de pedido?",
    "options": [
     "33 unidades, que é 10 x 3 + 3",
     "60 unidades, que é 10 x (3 + 3)",
     "30 unidades, que é 10 x 3, sem folga",
     "16 unidades, que é 10 + 3 + 3"
    ],
    "answer": [
     1
    ],
    "why": "O estoque precisa cobrir o prazo do lote mais a folga: 3 + 3 = 6 dias. Com 10 vendas por dia, 10 x 6 = 60 unidades. Chegou nesse nível, é hora de enviar."
   },
   {
    "q": "Um SKU vende 4 un/dia, o lote leva 7 dias para chegar ao Full e a folga é de 3 dias (números de exemplo). Qual é o ponto de pedido?",
    "options": [
     "28 unidades, que é 4 x 7, sem a folga",
     "12 unidades, que é 4 x 3, só a folga",
     "40 unidades, que é 4 x (7 + 3)",
     "14 unidades, que é 4 + 7 + 3, somando tudo"
    ],
    "answer": [
     2
    ],
    "why": "Prazo do lote mais folga dá 7 + 3 = 10 dias. Com 4 vendas por dia, o ponto de pedido é 4 x 10 = 40 unidades."
   },
   {
    "q": "A venda de um SKU sobe de 6 para 9 un/dia, com prazo do lote de 5 dias e folga de 4 (números de exemplo). Qual o novo ponto de pedido?",
    "options": [
     "81 unidades, que é 9 x (5 + 4)",
     "54 unidades, o mesmo valor de antes da alta",
     "45 unidades, que é 9 x 5, sem a folga",
     "18 unidades, que é 9 + 5 + 4, somando tudo"
    ],
    "answer": [
     0
    ],
    "why": "Os dias a cobrir seguem 5 + 4 = 9, mas a venda diária subiu. O novo ponto de pedido é 9 x 9 = 81 unidades; ele acompanha o ritmo de vendas."
   }
  ]
 ],
 "gf-l8-5": [
  [
   "base",
   {
    "q": "A Shopee abriu inscrição num programa de frete e o cliente quer entrar hoje. Qual é a melhor resposta?",
    "options": [
     "Entrar hoje e ajustar o preço depois, se as vendas caírem",
     "Entrar só se o concorrente direto também tiver entrado no programa",
     "Entrar, porque programas sempre aumentam o volume sem custo extra",
     "Refazer a conta com a taxa do programa e conferir a regra vigente"
    ],
    "answer": [
     3
    ],
    "why": "O programa pode trazer taxa ou regra extra. A decisão precisa da conta de sobra por pedido com a regra vigente, e não da pressa nem do que o concorrente fez."
   },
   {
    "q": "Um pedido de R$ 100,00 tem produto R$ 45,00, comissão R$ 20,00, imposto R$ 6,00, embalagem R$ 2,00 e taxa de programa de frete R$ 4,00 (números de exemplo). Qual a sobra?",
    "options": [
     "R$ 27,00, que é a sobra sem o programa",
     "R$ 23,00, que é a sobra com o programa",
     "R$ 19,00, que desconta a taxa duas vezes",
     "R$ 29,00, que esquece de descontar o imposto"
    ],
    "answer": [
     1
    ],
    "why": "A conta é 100 - 45 - 20 - 6 - 2 - 4 = 23. Os R$ 27,00 seriam a sobra sem o programa, então a taxa tira R$ 4,00 de cada pedido."
   },
   {
    "q": "O cliente pede o Full da Shopee. Qual é o nome da ideia e o cuidado principal?",
    "options": [
     "Fulfillment: a plataforma guarda e envia, e a conta de giro continua valendo",
     "Coleta: a plataforma busca em você, e o estoque continua só com o vendedor",
     "Ponto de entrega: o vendedor leva o pacote, e não existe custo de armazenagem",
     "Programa de frete: a plataforma ajuda no frete, e o giro do estoque não importa"
    ],
    "answer": [
     0
    ],
    "why": "O fulfillment da Shopee é a versão dela do Full: a plataforma guarda e envia. Por isso a mesma conta de giro, margem e armazenagem vale por lá."
   }
  ]
 ],
 "gf-l8-6": [
  [
   "base",
   {
    "q": "Qual caminho a matriz sugere para um SKU de curva A, leve e que gira rápido?",
    "options": [
     "Places, porque curva A deve sempre ser levada a uma agência",
     "Coleta, porque a transportadora é o caminho mais barato para qualquer SKU",
     "Full, depois de confirmar na conta que a armazenagem não come a margem",
     "Flex, porque produto leve é sempre indicado para entrega própria"
    ],
    "answer": [
     2
    ],
    "why": "Giro rápido e faturamento alto fazem do Full o primeiro candidato, desde que a conta de armazenagem feche. Os outros caminhos entram por volume, região e rotina."
   },
   {
    "q": "Um SKU leve vende 3 unidades por mês, e a seller mora perto de uma agência. Qual encaixe tende a ser melhor?",
    "options": [
     "Full, porque poucas vendas são o melhor perfil para guardar estoque",
     "Flex, porque entrega própria compensa para qualquer volume de pedidos",
     "Coleta, porque a transportadora busca na porta mesmo sem despacho diário",
     "Places, porque o volume é baixo e a agência fica perto"
    ],
    "answer": [
     3
    ],
    "why": "Poucas vendas, produto leve e agência perto formam o perfil do Places. O Full pede giro para pagar a armazenagem, e Flex e Coleta pedem rotina de despacho."
   },
   {
    "q": "Um SKU de giro médio, leve, com vários pedidos despachados todo dia. O que a matriz sugere?",
    "options": [
     "Places, porque a agência atende bem a qualquer volume diário",
     "Coleta, porque a rotina diária combina com a busca na porta",
     "Full, porque giro médio sempre compensa a armazenagem do estoque",
     "Flex, porque produto leve só pode ser entregue de forma própria"
    ],
    "answer": [
     1
    ],
    "why": "Despacho diário com vários pedidos é o perfil da Coleta: a transportadora passa e busca tudo de uma vez. Giro só médio não garante que o Full pague a armazenagem."
   }
  ]
 ]
});

/* Versões dos quizzes da trilha "Fiscal sem medo". A cada "tentar de novo" o aluno recebe outra versão. */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
 "gf-l6-1": [
  [
   "base",
   {
    "q": "O contador pediu dados para avaliar se o regime de um cliente ainda faz sentido. O que você leva?",
    "options": [
     "Uma decisão de regime já pronta, comunicada ao cliente como definitiva e sem revisão",
     "Faturamento, margem por produto e mix de vendas, organizados numa planilha clara",
     "Só o número de anúncios ativos, porque o regime depende da quantidade de produtos",
     "O ranking de reputação da conta, pois o regime muda conforme a cor do termômetro"
    ],
    "answer": [
     1
    ],
    "why": "O contador decide com dados. Você leva faturamento, margem e mix de produtos. Quantidade de anúncios e reputação não definem regime."
   },
   {
    "q": "Qual frase descreve melhor o que é regime tributário?",
    "options": [
     "O tipo de produto que a empresa tem permissão para vender dentro do marketplace",
     "O formato jurídico da empresa, como ter um sócio só ou vários sócios no CNPJ",
     "O código de 8 dígitos que classifica cada produto que o seller vende na conta",
     "A forma como a empresa calcula e paga os impostos, o que muda a sobra de cada venda"
    ],
    "answer": [
     3
    ],
    "why": "Regime é a regra do imposto. Tipo de empresa é o formato jurídico, CNAE é a atividade e NCM é o código do produto."
   },
   {
    "q": "Qual afirmação sobre regimes está ERRADA?",
    "options": [
     "O regime com menor imposto no exemplo é sempre o ideal, e você pode trocá-lo sozinho",
     "Limites de faturamento mudam, por isso se confere o valor vigente na documentação oficial",
     "CNAE e regime são coisas diferentes: um é a atividade, o outro é a regra do imposto",
     "O mesmo produto pode ter sobra diferente por venda quando o regime da empresa muda"
    ],
    "answer": [
     0
    ],
    "why": "Quem avalia e decide a troca de regime é o contador, olhando regras, prazos e custos. O menor imposto de um exemplo não decide nada sozinho."
   }
  ]
 ],
 "gf-l6-2": [
  [
   "base",
   {
    "q": "Uma loja de Minas Gerais vendeu para um cliente dentro de Minas. Qual primeiro dígito do CFOP é esperado?",
    "options": [
     "6, porque toda venda feita em marketplace é tratada como venda para outro estado",
     "1, porque o cliente é quem recebe a mercadoria e a nota passa a ser dele",
     "5, porque é saída de mercadoria dentro do próprio estado de quem vende",
     "2, porque a mercadoria sai da loja e entra no estoque da transportadora"
    ],
    "answer": [
     2
    ],
    "why": "Dígito 5 é saída dentro do estado e 6 é saída para outro estado. Os dígitos 1 e 2 são de entrada."
   },
   {
    "q": "O que o CFOP informa em uma nota fiscal?",
    "options": [
     "O motivo da operação, como venda ou devolução, e se ela é dentro ou fora do estado",
     "A classificação do produto em 8 dígitos, usada para calcular o imposto da mercadoria",
     "A chave de acesso de 44 dígitos que identifica a nota dentro da Sefaz do estado",
     "O regime tributário no qual o seller está enquadrado na data da emissão da nota"
    ],
    "answer": [
     0
    ],
    "why": "O CFOP tem 4 dígitos: o primeiro mostra a direção e a rota, e os outros mostram o tipo de operação. A classificação do produto é o NCM."
   },
   {
    "q": "Você suspeita que a nota de um pedido saiu com CFOP errado. Qual é a melhor atitude?",
    "options": [
     "Cancelar a nota por conta própria e emitir outra com o CFOP que ele acha certo",
     "Avisar o seller que o CFOP está errado e que o contador só precisa assinar",
     "Esperar o fechamento do mês, quando o próprio contador provavelmente achar o erro",
     "Enviar ao contador o número do pedido e o print da nota, pedindo a confirmação"
    ],
    "answer": [
     3
    ],
    "why": "Você leva a dúvida com provas (pedido e print) e pergunta. Quem decide e corrige a nota é o contador do cliente."
   }
  ]
 ],
 "gf-l6-3": [
  [
   "base",
   {
    "q": "Um produto importado está com origem marcada como nacional. Qual é o risco?",
    "options": [
     "Imposto calculado errado na nota e problema numa possível fiscalização",
     "Só o frete muda, porque a origem influencia apenas o peso cobrado no envio",
     "Nenhum, já que o marketplace corrige a origem sozinho antes de emitir a nota",
     "O produto sai do catálogo, mas a nota e o imposto continuam corretos no ERP"
    ],
    "answer": [
     0
    ],
    "why": "Origem entra no cálculo do imposto e na nota. Marcar importado como nacional gera imposto torto e risco em fiscalização."
   },
   {
    "q": "Um seller do Simples Nacional tem CST do regime normal em todos os produtos. O que está estranho?",
    "options": [
     "Nada, pois CST e CSOSN são o mesmo código com nomes diferentes em cada estado",
     "O Simples usa CSOSN, então o código está trocado e a nota pode ser rejeitada",
     "Falta o CEST, que substitui o CSOSN quando o seller está no Simples Nacional",
     "O correto seria usar o NCM no lugar, já que ele define a situação do ICMS"
    ],
    "answer": [
     1
    ],
    "why": "CST é do regime normal e CSOSN é do Simples Nacional. Misturar os dois pode rejeitar a nota ou calcular imposto errado."
   },
   {
    "q": "De onde deve vir o NCM de um produto novo no cadastro?",
    "options": [
     "Do anúncio do concorrente que vende o mesmo produto mais barato no marketplace",
     "Do NCM do último produto cadastrado, que costuma ser da mesma categoria",
     "Do fornecedor, da nota de compra ou do contador, com a fonte registrada",
     "De uma busca rápida por palavra parecida, sem precisar guardar a fonte"
    ],
    "answer": [
     2
    ],
    "why": "NCM tem fonte oficial: fornecedor, nota de compra ou contador. Concorrente e busca solta são só pistas e nunca provas."
   }
  ]
 ],
 "gf-l6-4": [
  [
   "base",
   {
    "q": "(números de exemplo) Preço R$ 100, produto R$ 45, comissão R$ 14, frete R$ 12, imposto R$ 8. O DIFAL de R$ 3 foi esquecido. Qual é a sobra real?",
    "options": [
     "R$ 21,00: a conta anterior, sem o DIFAL que ficou de fora",
     "R$ 15,00: o DIFAL é descontado duas vezes do preço",
     "R$ 18,00: o DIFAL também sai da sobra do seller",
     "R$ 24,00: a conta soma o DIFAL em vez de subtrair"
    ],
    "answer": [
     2
    ],
    "why": "100 − 45 − 14 − 12 − 8 − 3 = 18. Os R$ 21 eram a sobra planejada sem o DIFAL; o imposto esquecido sai da margem."
   },
   {
    "q": "Qual afirmação sobre imposto “por dentro” e “por fora” está certa?",
    "options": [
     "Por dentro já está incluído no preço; por fora é somado ao valor do produto",
     "Por dentro é somado ao preço do produto; por fora já vem incluído no valor da venda",
     "Os dois são sempre somados ao preço, só mudando o nome da linha na nota fiscal",
     "Os dois já estão embutidos no preço, e só o IPI aparece como linha separada"
    ],
    "answer": [
     0
    ],
    "why": "Por dentro o imposto sai do próprio preço (ICMS). Por fora ele soma por cima (IPI) e o total da nota sobe."
   },
   {
    "q": "Um seller vai vender para outro estado. O que você faz antes de definir o preço mínimo?",
    "options": [
     "Usa o mesmo percentual da venda dentro do estado, só para simplificar a conta",
     "Pergunta ao contador como entram a rota, o ST e o DIFAL naquele produto",
     "Deixa o imposto fora do preço mínimo e ajusta tudo só no fechamento do mês",
     "Copia a alíquota do concorrente que já vende para o mesmo estado de destino"
    ],
    "answer": [
     1
    ],
    "why": "A rota muda alíquota, ST e DIFAL. Quem confirma os percentuais é o contador; copiar concorrente ou ajustar depois joga o prejuízo para o fechamento."
   }
  ]
 ],
 "gf-l6-5": [
  [
   "base",
   {
    "q": "Onde costuma ficar a regra de CFOP padrão que o emissor usa nas notas?",
    "options": [
     "No extrato do marketplace, junto com as tarifas e os repasses de cada pedido",
     "No campo de título e de descrição do anúncio, que o comprador consegue ler",
     "Na ficha técnica do produto, que o marketplace preenche sozinho a cada venda",
     "Nas regras do ERP ou emissor, definidas junto com o contador do cliente"
    ],
    "answer": [
     3
    ],
    "why": "As regras de imposto e CFOP moram no ERP ou emissor. Extrato, título e ficha técnica não guardam dado fiscal de nota."
   },
   {
    "q": "O certificado digital do CNPJ, necessário para assinar a nota, fica configurado em qual lugar?",
    "options": [
     "No emissor, faturador ou ERP que gera e assina a NF-e",
     "No cadastro do produto, ao lado do NCM e da origem da mercadoria",
     "No extrato de repasses do marketplace, junto da data de cada pagamento",
     "Na ficha técnica do anúncio, para o comprador conferir a nota depois"
    ],
    "answer": [
     0
    ],
    "why": "Quem assina a NF-e é o emissor, faturador ou ERP, com o certificado do CNPJ. O cadastro do produto guarda NCM, CEST e origem."
   },
   {
    "q": "Qual afirmação sobre o mapa “dado fiscal e onde ele mora” está ERRADA?",
    "options": [
     "Dado sem dono, que ninguém cuida, vai para a lista de pendências do contador",
     "NCM, CEST e origem moram no cadastro do produto e seguem depois para a nota",
     "Se o dado está certo em um sistema, ele se corrige sozinho nos outros sem conferência",
     "Nomes de telas mudam entre sistemas, então se confirma na documentação oficial"
    ],
    "answer": [
     2
    ],
    "why": "Cada sistema guarda a sua parte, e o erro viaja pela cadeia. Por isso o mapa serve para saber quem confere cada dado."
   }
  ],
  [
   "base",
   {
    "q": "(números de exemplo) Venda de R$ 80, comissão R$ 12, tarifa R$ 5, frete R$ 10 e retenção R$ 1. Qual deve ser o repasse?",
    "options": [
     "R$ 53,00: venda menos comissão, tarifa e frete, sem a retenção",
     "R$ 52,00: venda menos comissão, tarifa, frete e retenção",
     "R$ 62,00: venda menos comissão, tarifa e retenção, sem o frete",
     "R$ 57,00: venda menos comissão, frete e retenção, sem a tarifa"
    ],
    "answer": [
     1
    ],
    "why": "80 − 12 − 5 − 10 − 1 = 52. As outras respostas esquecem um dos descontos do extrato."
   },
   {
    "q": "O que é conciliação?",
    "options": [
     "Conferir se pedido, nota emitida e repasse recebido contam a mesma história",
     "Pedir ao marketplace que reduza a comissão depois que o repasse é pago ao seller",
     "Emitir uma nota nova para cada devolução que aparece no extrato do mês",
     "Somar as vendas do mês para saber em qual faixa de regime o seller cai"
    ],
    "answer": [
     0
    ],
    "why": "Conciliar é cruzar pedido, nota e extrato para achar diferenças. Comissão, nova nota e faixa de regime são outros assuntos."
   },
   {
    "q": "No extrato aparece um desconto sem nome claro. Qual é o seu primeiro passo?",
    "options": [
     "Ignorar o desconto, porque o marketplace sempre cobra o valor correto sem erro",
     "Editar a nota fiscal do pedido para o valor ficar igual ao repasse pago",
     "Subir o preço do anúncio até a diferença desaparecer do extrato do mês",
     "Cruzar o pedido, o extrato e a nota, e registrar a diferença encontrada"
    ],
    "answer": [
     3
    ],
    "why": "Desconto sem nome é pista de retenção, tarifa ou devolução. Cruzar e registrar vem primeiro; o contador entra nas dúvidas. Nota não se edita para bater com repasse."
   }
  ]
 ],
 "gf-l6-6": [
  [
   "base",
   {
    "q": "(números de exemplo) Custo + frete = R$ 36, comissão 10%, margem alvo 20%. Imposto do regime A: 10%. Do regime B: 22%. Qual vence?",
    "options": [
     "Regime A vence: preço mínimo de R$ 60, contra R$ 75 do regime B",
     "Regime B vence: preço mínimo de R$ 60, contra R$ 75 do regime A",
     "Regime A vence: preço mínimo de R$ 50,40, contra R$ 54,72 do regime B",
     "Os regimes empatam, pois a comissão e a margem são iguais nos dois"
    ],
    "answer": [
     0
    ],
    "why": "A: 36 ÷ (1 − 0,10 − 0,10 − 0,20) = 36 ÷ 0,60 = 60. B: 36 ÷ 0,48 = 75. Vence o menor preço mínimo. Somar percentuais ao custo é erro de conta."
   },
   {
    "q": "Por que o regime que vence na simulação não é decisão final?",
    "options": [
     "Porque a simulação nunca considera o custo do produto nem a comissão do canal",
     "Porque você só pode simular um regime por vez em cada conta de teste",
     "Trocar de regime tem regras, prazos e custos, e a decisão é do contador",
     "Porque o regime vencedor muda sozinho a cada venda feita no marketplace"
    ],
    "answer": [
     2
    ],
    "why": "A simulação mostra o impacto no preço, mas a troca envolve regras, prazos e outros custos. Quem avalia é o contador do cliente."
   },
   {
    "q": "O contador passou as alíquotas de dois regimes. Qual é o próximo passo da simulação?",
    "options": [
     "Escolher o regime de menor alíquota e avisar o seller de que a troca está feita",
     "Calcular o preço mínimo nos dois, com mesmo custo e margem, e comparar em R$",
     "Calcular o preço mínimo só no regime atual, pois o outro não afeta o cliente",
     "Mudar a margem alvo de cada regime até os dois preços ficarem iguais"
    ],
    "answer": [
     1
    ],
    "why": "Para comparar de forma justa, só o imposto muda: custo, comissão, frete e margem ficam iguais. A decisão do regime continua com o contador."
   }
  ],
  [
   "base",
   {
    "q": "(números de exemplo) Produto R$ 80, frete e seguro R$ 10, impostos R$ 30, despachante e taxas R$ 10. Qual é o custo final no estoque?",
    "options": [
     "R$ 80,00: só o preço do produto no exterior, sem os demais custos",
     "R$ 90,00: produto mais frete, deixando impostos e taxas de fora",
     "R$ 120,00: tudo menos o despachante e as taxas da importação",
     "R$ 130,00: soma de tudo que foi pago para nacionalizar"
    ],
    "answer": [
     3
    ],
    "why": "80 + 10 + 30 + 10 = 130. Esse é o custo que entra na precificação, não só o preço de fábrica."
   },
   {
    "q": "O que é custo de nacionalização?",
    "options": [
     "O imposto que o marketplace cobra sobre a venda de produtos de origem nacional",
     "O custo de armazenar o estoque nacional no centro de distribuição do marketplace",
     "Tudo que se paga para o importado chegar e poder ser vendido no Brasil",
     "A margem extra que o seller coloca em produtos fabricados dentro do Brasil"
    ],
    "answer": [
     2
    ],
    "why": "Nacionalização reúne impostos, frete, seguro, despachante e taxas até a mercadoria chegar ao estoque pronta para vender."
   },
   {
    "q": "O seller precificou o importado só com o valor pago no exterior. O que costuma acontecer?",
    "options": [
     "A margem some, porque frete, impostos e taxas ficaram fora do custo do produto",
     "A margem aumenta, já que esses custos são pagos depois pelo marketplace",
     "Nada muda, pois os custos de importação não entram no preço do produto",
     "O preço fica correto, mas a DI precisa ser refeita antes da próxima venda"
    ],
    "answer": [
     0
    ],
    "why": "O custo de verdade é o final no estoque. Usar só o preço de fábrica esconde frete, impostos e taxas, e a margem prevista não existe."
   }
  ]
 ]
});

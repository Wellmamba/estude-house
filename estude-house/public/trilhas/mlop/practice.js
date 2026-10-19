/* Versões dos quizzes da trilha "Operação no Mercado Livre". A cada "tentar de novo" o aluno recebe outra versão. */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
 "gf-l3-1": [
  [
   "base",
   {
    "q": "O cliente só tem o login dele e quer que você opere a conta. O que você orienta?",
    "options": [
     "Usar o login do dono, já que a conta é dele e ele autorizou, desde que a senha seja forte e longa",
     "Criar um usuário para você, com as permissões da sua função, em vez de usar o login do dono",
     "Passar o login do dono para o time inteiro, assim qualquer pessoa resolve o que precisar na hora",
     "Usar o login do dono só em horários combinados e trocar a senha todo mês, sem criar outros acessos"
    ],
    "answer": [
     1
    ],
    "why": "O acesso de usuário dá só as permissões da função e pode ser retirado a qualquer momento. Login compartilhado tira o controle do dono da conta."
   },
   {
    "q": "Uma pessoa saiu da equipe do cliente, mas continua na lista de usuários da conta. O que fazer?",
    "options": [
     "Nada, porque sem a senha atual ela já perdeu o acesso e a lista é só um registro antigo da conta",
     "Esperar a revisão do fim do ano para limpar a lista de uma vez, junto com os outros acessos",
     "Remover o acesso dela no mesmo dia e conferir o que mais ela tinha permissão para ver e mudar",
     "Trocar só o e-mail dela na lista por um genérico do time, mantendo as mesmas permissões que ela tinha"
    ],
    "answer": [
     2
    ],
    "why": "Quem saiu do time perde o acesso no mesmo dia. Usuário esquecido na lista continua sendo uma porta aberta pra conta."
   },
   {
    "q": "Qual prática de acesso à conta está de acordo com a aula?",
    "options": [
     "Dar acesso total para toda a equipe, para ninguém depender do dono da conta quando precisar de algo",
     "Manter um login único compartilhado, desde que ele fique salvo só no grupo interno do time",
     "Liberar o financeiro para o atendimento, assim ele resolve reembolso e dúvida de saldo sem esperar",
     "Dar a cada pessoa só o acesso que a função exige e revisar a lista de usuários de tempos em tempos"
    ],
    "answer": [
     3
    ],
    "why": "Acesso mínimo por função reduz risco, e a revisão periódica pega usuário que já não deveria estar ali."
   }
  ]
 ],
 "gf-l3-2": [
  [
   "base",
   {
    "q": "Uma conta teve 9 vendas com problema em 300 pedidos (números de exemplo). Qual é a taxa de problema e como ler?",
    "options": [
     "9 ÷ 300 = 3%: é a proporção de problemas sobre as vendas, e é ela que mostra a saúde da conta",
     "9 problemas é o que importa: a conta é avaliada pelo total de erros, e não pela proporção de vendas",
     "300 ÷ 9 = 33%: a taxa se calcula dividindo as vendas pelos problemas e, quanto maior, melhor",
     "9 ÷ 300 = 0,3%: basta mover a vírgula uma casa, então a conta está longe de qualquer risco"
    ],
    "answer": [
     0
    ],
    "why": "A taxa é problemas divididos por vendas: 9 ÷ 300 = 0,03, ou seja, 3%. É a proporção que importa, não o número solto de erros."
   },
   {
    "q": "Qual afirmação sobre reputação está ERRADA?",
    "options": [
     "Ela é uma proporção entre as vendas com problema e as vendas totais no período avaliado",
     "Conta pequena sente mais cada problema do que uma conta com grande volume de pedidos",
     "Reclamação, atraso de despacho e cancelamento feito por você pesam no resultado final",
     "Só vale o número de problemas, então 5 erros pesam igual em 100 e em 1.000 vendas"
    ],
    "answer": [
     3
    ],
    "why": "Reputação é proporção. Cinco problemas em 100 vendas dão 5%, e em 1.000 vendas dão 0,5%, então não pesam igual."
   },
   {
    "q": "Duas lojas têm 4 problemas cada (números de exemplo): a loja X vendeu 80 pedidos e a loja Y, 800. Qual está mais pressionada?",
    "options": [
     "A loja Y, porque 800 pedidos geram mais trabalho para o ML conferir e mais risco de erro",
     "A loja X: 4 em 80 dá 5%, enquanto a loja Y fica em 0,5% com os mesmos 4 problemas",
     "As duas igualmente, porque ambas somam 4 problemas e a proporção não entra na conta",
     "A loja X: 4 em 80 dá 50%, enquanto a loja Y fica em 5% com os mesmos 4 problemas"
    ],
    "answer": [
     1
    ],
    "why": "4 ÷ 80 = 0,05, ou 5%. Já 4 ÷ 800 = 0,005, ou 0,5%. Mesmo número de erros, taxa dez vezes maior na loja pequena."
   }
  ],
  [
   "base",
   {
    "q": "A conta está no verde, mas o número de cancelamentos por falta de estoque sobe a cada semana. O que fazer?",
    "options": [
     "Achar a causa do estoque furado e corrigir a sincronização agora, antes que a reputação mude de cor",
     "Esperar o termômetro mudar de cor, porque só então o ML considera o problema e vale a pena agir",
     "Subir o preço dos anúncios para vender menos e diminuir a chance de faltar produto no estoque",
     "Trocar a foto principal dos anúncios, já que cancelamento é sinal de que o cliente não gostou"
    ],
    "answer": [
     0
    ],
    "why": "Cancelamento por falta de estoque pesa na reputação. Corrigir a causa enquanto a cor ainda está boa é mais barato do que recuperar depois."
   },
   {
    "q": "Qual atitude representa agir cedo, antes de a cor da reputação cair?",
    "options": [
     "Revisar a reputação só no fechamento do mês, junto com o relatório geral de vendas da conta",
     "Esperar o aviso do ML sobre queda de cor para então montar um plano de correção da conta",
     "Concentrar o esforço em Ads (anúncios pagos), já que mais vendas diluem qualquer problema",
     "Olhar os indicadores toda semana e agir no primeiro sinal de piora, mesmo com a conta no verde"
    ],
    "answer": [
     3
    ],
    "why": "Acompanhar toda semana permite ver a tendência. Quem espera o aviso ou a revisão mensal descobre o problema tarde."
   },
   {
    "q": "A conta estava no verde, caiu pro amarelo e ninguém olhava o termômetro. Qual foi o erro clássico?",
    "options": [
     "Ter vendido demais no período, já que volume alto de pedidos sempre derruba a cor da conta",
     "Ter respondido rápido demais às perguntas, o que gerou mais reclamações abertas pelos clientes",
     "Ignorar a reputação até ela cair, em vez de acompanhar a tendência toda semana e agir antes",
     "Ter pausado os anúncios no fim de semana, o que o ML penaliza com a queda imediata da cor"
    ],
    "answer": [
     2
    ],
    "why": "O erro clássico é ignorar a reputação até ela cair e derrubar as vendas junto. Vender mais ou responder rápido não derruba a cor."
   }
  ]
 ],
 "gf-l3-3": [
  [
   "base",
   {
    "q": "O cliente diz que o produto chegou com defeito e as fotos dele confirmam. O defeito veio da fábrica. O que fazer?",
    "options": [
     "Contestar a reclamação, porque o defeito de fábrica não é culpa sua e o ML sempre aceita esse argumento",
     "Ceder rápido, com troca ou reembolso, porque o erro foi seu e ceder custa menos que perder reputação",
     "Pedir ao cliente que arque com o frete da devolução, já que o produto foi aberto e usado por ele",
     "Ignorar a mensagem por alguns dias para ver se o cliente desiste da reclamação sem a sua resposta"
    ],
    "answer": [
     1
    ],
    "why": "Quando o erro é seu e o cliente tem prova, o melhor é ceder rápido. Brigar custa mais e ainda arranha a reputação."
   },
   {
    "q": "Qual situação indica que vale mais defender sua posição, com educação e provas?",
    "options": [
     "Você não tem registro nenhum do envio, mas acredita que o pacote chegou certinho ao cliente",
     "O item enviado foi outro por engano, mas o cliente demorou para avisar e já passou algum tempo",
     "O anúncio informava a medida correta, você tem a conversa guardada e o cliente só mudou de ideia",
     "O produto chegou quebrado por embalagem fraca, e o cliente mandou fotos claras do dano sofrido"
    ],
    "answer": [
     2
    ],
    "why": "Defender faz sentido quando o anúncio estava certo e você tem prova. Nos outros casos o erro foi seu ou você não tem como sustentar."
   },
   {
    "q": "Uma reclamação vale R$ 90,00 de reembolso e R$ 18,00 de frete de volta (números de exemplo). Você não tem prova. Qual caminho custa menos?",
    "options": [
     "Ceder logo e receber o produto de volta: perde só os R$ 18,00 do frete de devolução",
     "Brigar mesmo sem prova, porque o custo seria sempre os R$ 18,00 de frete, seja qual for o resultado",
     "Brigar sem prova: se perder, o custo é de R$ 90,00 e o frete de volta já está incluído nesse valor",
     "Ceder logo: o custo é de R$ 108,00, porque tudo o que sai da conta nesse caso é somado de uma vez"
    ],
    "answer": [
     0
    ],
    "why": "Cedendo, você perde R$ 18,00. Brigando sem prova e perdendo, devolve R$ 90,00 e ainda paga R$ 18,00: R$ 108,00, fora a reputação."
   }
  ],
  [
   "base",
   {
    "q": "Qual abertura de mensagem para um cliente irritado segue o tom firme e humano?",
    "options": [
     "Já expliquei no anúncio que o prazo era esse, então não sei por que você está reclamando agora",
     "Peço mil desculpas por absolutamente tudo e farei qualquer coisa que você pedir, de verdade mesmo",
     "Infelizmente isso acontece com todos os vendedores e não depende de mim, então só resta esperar",
     "Entendi o que aconteceu e sinto pelo transtorno. Vou resolver hoje e te aviso quando estiver feito"
    ],
    "answer": [
     3
    ],
    "why": "A abertura boa acolhe, assume o problema e promete uma ação com prazo. As outras acusam, exageram ou jogam a culpa pra fora."
   },
   {
    "q": "Um cliente exige reembolso por algo que não foi falha sua. Qual resposta mantém firmeza sem perder o respeito?",
    "options": [
     "Entendo a sua situação. Pelo que o anúncio informa, não consigo reembolsar, mas posso explicar as opções",
     "Não vou reembolsar, o anúncio está claro e a responsabilidade é inteiramente sua por ter comprado assim",
     "Reembolso feito, sem problema nenhum! Peço desculpa por tudo, mesmo sem entender bem o que aconteceu aqui",
     "Vamos ver o que dá pra fazer, mas pode demorar bastante e não sei dizer se vai ter alguma solução"
    ],
    "answer": [
     0
    ],
    "why": "Firme é manter a posição com fatos; humano é reconhecer a situação do cliente e oferecer caminhos. As outras opções acusam, cedem sem motivo ou enrolam."
   },
   {
    "q": "Qual passo da resposta ideal falta em: “Sinto muito, vamos ver o que acontece e depois te falo”?",
    "options": [
     "Acolher o cliente, pois a mensagem não demonstra nenhuma empatia pelo problema relatado por ele",
     "Oferecer uma solução com prazo, pois a mensagem não diz o que será feito nem até quando",
     "Agradecer ao final, pois sem agradecimento a mensagem não pode ser considerada profissional",
     "Citar as regras do anúncio, pois toda resposta precisa começar defendendo a posição do vendedor"
    ],
    "answer": [
     1
    ],
    "why": "A mensagem acolhe, mas não diz o que será feito nem até quando. Sem solução e prazo, ela não é firme."
   }
  ]
 ],
 "gf-l3-4": [
  [
   "base",
   {
    "q": "O anúncio está ativo, mas o produto acabou há dois dias e ainda entram vendas. O que fazer primeiro?",
    "options": [
     "Manter ativo para não perder o ranking e repor o estoque depois, resolvendo os pedidos conforme der",
     "Reduzir o preço para aproveitar o interesse e vender o que sobrou antes de reabastecer o estoque",
     "Pausar o anúncio, tratar os pedidos já feitos com o cliente e corrigir a baixa de estoque",
     "Apagar o anúncio de vez, pois pausar mantém as vendas abertas e pode atrapalhar a reputação"
    ],
    "answer": [
     2
    ],
    "why": "Pausar para as novas vendas impossíveis, falar com quem já comprou e consertar a baixa de estoque limita o dano e evita repetir o erro."
   },
   {
    "q": "Qual causa tem mais relação com cancelamento por falta de estoque?",
    "options": [
     "Etiqueta impressa com o código ilegível, que impede a leitura do pedido na hora da coleta",
     "Estoque do sistema diferente do físico, por falta de baixa automática a cada venda feita",
     "Embalagem grande demais para o produto, o que aumenta o custo do frete cobrado do vendedor",
     "Foto principal com fundo diferente do padrão, o que reduz o interesse do cliente na compra"
    ],
    "answer": [
     1
    ],
    "why": "Quando o sistema mostra saldo que não existe, a venda entra e o produto não está lá. Sincronizar o estoque é a prevenção."
   },
   {
    "q": "Um cliente comprou, mas seu estoque físico não tem o item. Qual comunicação é a melhor?",
    "options": [
     "Não responder até conseguir o produto, para evitar falar com o cliente sem ter uma solução pronta",
     "Dizer que o pacote já foi despachado e que o atraso é culpa da transportadora, ganhando tempo",
     "Mandar um produto de outro modelo sem avisar, esperando que ele não perceba a diferença no uso",
     "Avisar logo, assumir o erro e oferecer o cancelamento com reembolso ou um novo prazo, se ele topar"
    ],
    "answer": [
     3
    ],
    "why": "Transparência cedo preserva a confiança. Esconder, culpar a transportadora ou trocar sem avisar só piora a reclamação."
   }
  ],
  [
   "base",
   {
    "q": "Marque todas: o que ajuda a manter a etiqueta e a embalagem sem problema?",
    "options": [
     "Colar a etiqueta lisa, sem dobrar nem cobrir o código com fita",
     "Usar uma caixa bem maior que o produto, para garantir proteção",
     "Escolher a embalagem pelo tamanho do produto e proteger contra batida",
     "Cadastrar peso e medidas aproximados, sem pesar o pacote real",
     "Reaproveitar etiqueta de outro pedido para ganhar tempo na expedição"
    ],
    "answer": [
     0,
     2
    ],
    "multi": true,
    "why": "Etiqueta lisa e legível permite a leitura do código, e embalagem na medida protege sem aumentar peso e frete. Peso estimado e etiqueta reaproveitada causam erro."
   },
   {
    "q": "Marque todas: o que está certo sobre atrasos de despacho?",
    "options": [
     "Só importam se o cliente reclamar, porque o ML não olha o prazo",
     "Eles pesam na reputação, junto com reclamações e cancelamentos",
     "Não afetam a visibilidade do anúncio, apenas a nota do atendimento",
     "Costumam vir de estoque desatualizado, etiqueta tardia ou falta de equipe"
    ],
    "answer": [
     1,
     3
    ],
    "multi": true,
    "why": "Atraso de despacho pesa na reputação, que mexe na visibilidade. As causas mais comuns são estoque desatualizado, etiqueta tardia e falta de gente pra separar."
   },
   {
    "q": "Marque todas: o que fazer quando um pedido vai atrasar?",
    "options": [
     "Avisar o cliente antes que ele pergunte, com um novo prazo claro",
     "Esperar o cliente reclamar para só então explicar o que aconteceu",
     "Despachar sem etiqueta para sair no prazo e arrumar depois no pacote",
     "Oferecer a opção de cancelar e devolver o valor, se ele preferir"
    ],
    "answer": [
     0,
     3
    ],
    "multi": true,
    "why": "Avisar antes e oferecer o cancelamento com reembolso dá controle ao cliente. Esperar reclamação ou despachar sem etiqueta piora o caso."
   }
  ]
 ],
 "gf-l3-5": [
  [
   "base",
   {
    "q": "O que o registro de marca no INPI oferece ao vendedor, segundo a aula?",
    "options": [
     "Prova de que a marca é dele e base para denunciar cópias e para pedir a Loja Oficial",
     "Entrada automática na Loja Oficial, sem precisar de análise nenhuma por parte do Mercado Livre",
     "Visibilidade garantida no topo da busca, independentemente da reputação e do preço do anúncio",
     "Isenção das tarifas do Mercado Livre em todas as vendas da marca, enquanto o registro estiver válido"
    ],
    "answer": [
     0
    ],
    "why": "O registro prova que a marca é do vendedor e abre caminho para proteção e Loja Oficial. Ele não garante entrada automática, topo da busca nem isenção de tarifa."
   },
   {
    "q": "Qual afirmação sobre Loja Oficial está ERRADA?",
    "options": [
     "É uma vitrine da marca no ML, com página própria e selo que reforça a confiança",
     "As exigências e os prazos mudam, então é preciso conferir os requisitos vigentes",
     "Quem não tem reputação nem marca registrada entra automaticamente ao pedir a vitrine",
     "O registro da marca ajuda a abrir caminho para ela e a proteger contra cópias"
    ],
    "answer": [
     2
    ],
    "why": "A Loja Oficial passa por análise e os requisitos mudam. Pedir a vitrine sem marca registrada nem reputação não garante entrada."
   },
   {
    "q": "O cliente tem a marca registrada e quer proteger o nome contra cópias no ML. Qual é o próximo passo?",
    "options": [
     "Esperar aparecer a primeira cópia para só então reunir documentos e conferir as regras do ML",
     "Reunir os documentos que provam a marca e conferir no ML os requisitos vigentes para a proteção",
     "Pedir ao ML que registre a marca no INPI, já que a plataforma cuida de todo o processo oficial",
     "Trocar o nome da marca nos anúncios por um genérico, evitando assim ser alvo de cópia no futuro"
    ],
    "answer": [
     1
    ],
    "why": "Com o registro em mãos, o passo seguinte é juntar a documentação e conferir os requisitos vigentes. Esperar a cópia aparecer só atrasa a proteção."
   }
  ],
  [
   "base",
   {
    "q": "As vendas caíram. O termômetro continua verde, mas o estoque dos três itens mais vendidos acabou. Onde está a causa mais provável?",
    "options": [
     "Reputação, porque o verde ainda pode esconder um problema grave de visibilidade em todos os anúncios",
     "Preço do concorrente, que sempre explica qualquer queda de vendas sem precisar olhar o estoque",
     "Fotos dos anúncios, que perdem qualidade sozinhas quando o produto fica muito tempo parado",
     "Estoque: sem produto nos itens que mais vendem, o anúncio sai de cena e as vendas caem junto"
    ],
    "answer": [
     3
    ],
    "why": "Sem estoque nos itens campeões, as vendas caem mesmo com a reputação boa. Por isso a auditoria olha pedidos e estoque, e não só o termômetro."
   },
   {
    "q": "Por que checar reputação e operação antes de mexer em título, Ads ou preço?",
    "options": [
     "São as causas mais comuns de perda de exposição e as mais rápidas de verificar no painel",
     "Porque título, Ads e preço nunca influenciam a visibilidade de um anúncio dentro do ML",
     "Porque a reputação é a única coisa que você consegue enxergar dentro da conta",
     "Porque o cliente só aceita mudanças em anúncio depois que a reputação estiver no verde"
    ],
    "answer": [
     0
    ],
    "why": "Reputação e operação derrubam a exposição e são rápidas de checar. Mexer em título, Ads ou preço sem diagnóstico é chute."
   },
   {
    "q": "Na matriz de impacto x esforço, qual ação você faz primeiro na auditoria?",
    "options": [
     "Registro de marca, que tem alto impacto mas exige bastante esforço e prazo para ficar pronto",
     "Reorganizar a ordem das fotos de um anúncio, que tem baixo impacto e baixo esforço de execução",
     "Corrigir os atrasos de despacho, que têm alto impacto e pedem pouco esforço para resolver",
     "Refazer todas as fotos de todos os anúncios, que pedem muito esforço e trazem impacto médio"
    ],
    "answer": [
     2
    ],
    "why": "O que está no alto e à esquerda da matriz, alto impacto com pouco esforço, vem primeiro. Corrigir atrasos se encaixa nisso."
   }
  ]
 ]
});

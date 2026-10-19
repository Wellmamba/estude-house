const M = "gf-m14";
export default [
  /* ---------------- Aula 1: Comunicação clara e escrita ---------------- */
  {
    id: "gf-m14-01", module: M, topic: "Estrutura de 4 passos",
    q: "Qual é a ordem da estrutura de mensagem que a aula ensina pra falar com o cliente?",
    options: [
      "O que fazemos, contexto, o que precisamos do cliente e, por último, o que aconteceu",
      "O que aconteceu, o pedido de desculpas, o que fazemos e o que precisamos do cliente",
      "Contexto, o que aconteceu, o que fazemos e o que precisamos do cliente, nessa ordem",
      "Contexto, o que precisamos do cliente, o que aconteceu e, por fim, o que fazemos"
    ],
    answer: [2],
    why: "A ordem é contexto, o que aconteceu, o que fazemos e o que precisamos do cliente. Assim quem lê entende a situação, vê a ação e chega ao fim sabendo o que precisa fazer."
  },
  {
    id: "gf-m14-02", module: M, topic: "Mensagem confusa",
    q: "Um colega vai mandar ao cliente: “Oi! O ACOS subiu e o GMV caiu. Qualquer coisa me chama.” Qual é o principal problema?",
    options: [
      "Tem jargão sem tradução e não diz o que a equipe fará nem o que o cliente precisa fazer",
      "É curta demais e deveria trazer a planilha completa com todas as abas para o cliente conferir",
      "É informal demais e deveria ter um “Prezado” no começo, para o texto soar mais profissional",
      "Fala de queda sem pedir desculpas antes, e o pedido de desculpas é o que deixa a mensagem clara"
    ],
    answer: [0],
    why: "Faltam a tradução dos termos (ACOS e GMV), a ação da equipe e o pedido ao cliente. Curta não é o problema: texto curto e direto é o objetivo da aula."
  },
  {
    id: "gf-m14-03", module: M, topic: "Qual canal usar",
    q: "O cliente aprovou um combinado importante por mensagem rápida. Segundo a aula, qual é o melhor passo seguinte?",
    options: [
      "Deixar assim mesmo, porque a mensagem rápida já serve como registro de qualquer combinado",
      "Esperar a próxima reunião do mês pra falar do combinado, mesmo que ele precise ser feito antes",
      "Mandar a planilha completa por mensagem, para o cliente conferir o combinado sozinho depois",
      "Confirmar por e-mail, com assunto claro, o que foi combinado, quem faz e até quando"
    ],
    answer: [3],
    why: "Mensagem rápida serve pra aviso curto. O que precisa ficar registrado vai por e-mail, com assunto claro, dono e prazo, pra ninguém lembrar diferente depois."
  },
  {
    id: "gf-m14-04", module: M, topic: "Assunto de e-mail",
    q: "Qual destes assuntos de e-mail segue o que a aula ensina?",
    options: [
      "Atualização importante sobre a sua conta no marketplace",
      "Vendas caíram 18% (exemplo): confirme a reposição até quinta",
      "Urgente!!! Preciso muito falar com você sobre a conta hoje",
      "Relatório anexo, favor verificar e retornar quando puder"
    ],
    answer: [1],
    why: "O assunto bom diz o tema e o que você precisa do cliente. “Atualização”, “Urgente!!!” e “Relatório anexo” são vagos: ninguém sabe o que fazer ao ler."
  },
  {
    id: "gf-m14-05", module: M, topic: "Ata de reunião",
    q: "Quais itens uma boa ata de reunião deve trazer? Marque todas as corretas.",
    options: [
      "As decisões, escritas em frases curtas",
      "O responsável por cada tarefa combinada",
      "A transcrição de cada fala de cada pessoa",
      "O prazo de entrega de cada tarefa",
      "A opinião pessoal sobre o cliente e a equipe"
    ],
    answer: [0, 1, 3],
    why: "A ata registra decisões, responsáveis e prazos, mais o próximo encontro. Transcrição completa e opinião pessoal não ajudam ninguém a agir depois da reunião."
  },
  {
    id: "gf-m14-06", module: M, topic: "Texto curto",
    q: "Sobre escrever pro cliente, qual afirmação está ERRADA?",
    options: [
      "Escrever “18% a menos” é melhor que escrever “caiu muito”, porque o número informa mais",
      "Termo técnico novo deve vir traduzido entre parênteses, mesmo que o cliente já ouça a palavra",
      "Quanto mais termos técnicos o texto tiver, mais o cliente confia na análise e menos pergunta",
      "A mensagem deve terminar com o próximo passo e a data, pra o cliente saber o que fazer"
    ],
    answer: [2],
    why: "Jargão sem tradução afasta o leitor e gera ligação de dúvida. As outras três afirmações são regras do texto curto: número antes de adjetivo, tradução e fecho com data."
  },

  /* ---------------- Aula 2: Contar a história do dado ---------------- */
  {
    id: "gf-m14-07", module: M, topic: "ROAS de equilíbrio",
    q: "A margem antes do Ads é 25% (números de exemplo). Qual é o ROAS de equilíbrio e o que ele significa?",
    options: [
      "ROAS 4, pois 1 ÷ 0,25 = 4: abaixo disso o Ads dá prejuízo",
      "ROAS 25, pois a margem em porcentagem já é o próprio ROAS",
      "ROAS 0,25, pois o equilíbrio é igual à margem em decimal",
      "ROAS 2,5, pois 0,25 × 10 = 2,5 é o empate do Ads"
    ],
    answer: [0],
    why: "O ROAS de equilíbrio é 1 dividido pela margem: 1 ÷ 0,25 = 4. Com ROAS abaixo de 4, cada R$ 1 de Ads traz menos margem do que custa."
  },
  {
    id: "gf-m14-08", module: M, topic: "Calcular o ROAS",
    q: "O Ads gastou R$ 800 e trouxe R$ 3.200 em vendas (números de exemplo). Qual é o ROAS?",
    options: [
      "ROAS 25, pois 800 ÷ 3.200 × 100 = 25",
      "ROAS 0,25, pois 800 ÷ 3.200 = 0,25",
      "ROAS 2.400, pois 3.200 − 800 = 2.400",
      "ROAS 4, pois 3.200 ÷ 800 = 4"
    ],
    answer: [3],
    why: "ROAS é a venda com Ads dividida pelo gasto com Ads: 3.200 ÷ 800 = 4. Cada R$ 1 de Ads trouxe R$ 4 em vendas. A conta invertida (800 ÷ 3.200) dá o ACOS, 25%."
  },
  {
    id: "gf-m14-09", module: M, topic: "Ler a tendência",
    q: "A margem é 20%, então o equilíbrio é ROAS 5. O ROAS das últimas semanas foi 6,0, 5,5, 4,8 e 4,2 (números de exemplo). Qual leitura está certa?",
    options: [
      "Está tudo bem, porque o ROAS ainda é maior que 4 e, portanto, o Ads segue lucrando",
      "O ROAS cruzou o equilíbrio na terceira semana e a tendência é de queda, então o Ads já perde dinheiro",
      "O ROAS está caindo, mas só importa o valor da primeira semana, porque é o que mostra o potencial",
      "O ROAS caiu menos de 2 pontos, então não vale mencionar a queda ao cliente neste relatório"
    ],
    answer: [1],
    why: "O equilíbrio é 5. Na terceira semana o ROAS (4,8) ficou abaixo dele e a queda continua. Tendência é isso: o número, o limite e a direção juntos."
  },
  {
    id: "gf-m14-10", module: M, topic: "Planilha sem história",
    q: "Seu colega vai mandar só a planilha do mês e escrever “qualquer dúvida, me chama”. O que você sugere?",
    options: [
      "Mandar a planilha, porque o cliente quer ver todos os números e tirar as próprias conclusões",
      "Trocar a planilha por um print do painel, que é mais rápido de abrir no celular do cliente",
      "Mandar só o ROAS e o total de vendas, pra não abrir discussão sobre os outros números",
      "Escrever um texto curto contando o que os números significam e o que fazemos, com a planilha como anexo"
    ],
    answer: [3],
    why: "Esse é o erro clássico do eixo: mandar planilha sem contar o que ela significa. A história (número, motivo, ação) vai no texto, e a planilha serve de apoio."
  },
  {
    id: "gf-m14-11", module: M, topic: "Gestão de expectativa",
    q: "Ao alinhar expectativa com o cliente, o que deve entrar na conversa? Marque todas as corretas.",
    options: [
      "O resultado que esperamos alcançar",
      "A garantia de que o resultado vai acontecer",
      "O prazo realista pra ver os primeiros sinais",
      "Um prazo mais curto, pra fechar o combinado",
      "Os riscos que podem atrapalhar o plano"
    ],
    answer: [0, 2, 4],
    why: "Alinhamento honesto traz resultado esperado, prazo realista e riscos. Garantir resultado ou encurtar prazo pra agradar vira quebra de promessa depois."
  },
  {
    id: "gf-m14-12", module: M, topic: "Causa da queda",
    q: "Vendas caíram 12% no mês. Na árvore de causas da aula, qual pergunta pertence ao ramo da conversão?",
    options: [
      "O Ads perdeu verba durante o mês?",
      "O preço do anúncio subiu no período?",
      "As visitas aos anúncios caíram?",
      "Um anúncio campeão ficou sem estoque?"
    ],
    answer: [1],
    why: "Conversão é a parte dos visitantes que compram, e preço e concorrente mexem nela. Verba de Ads e visitas são tráfego, e falta de estoque é outro ramo."
  },

  /* ---------------- Aula 3: Negociação, conflito e feedback ---------------- */
  {
    id: "gf-m14-13", module: M, topic: "Conduzir o cliente",
    q: "O cliente pede 15% de desconto em todos os anúncios pra vender mais, mas a margem de hoje é só 10%. Qual é a melhor condução?",
    options: [
      "Aceitar o pedido, porque a conta é do cliente e ele sabe o que é melhor pro negócio dele",
      "Recusar o pedido sem discutir, porque desconto grande sempre derruba a margem e a reputação",
      "Dizer que vai pensar e voltar só depois do fim do mês, quando já tiver os números fechados",
      "Simular o desconto, mostrar quanto sobra por venda e propor um teste pequeno, com prazo e acompanhamento"
    ],
    answer: [3],
    why: "Conduzir é mostrar o dado, recomendar com motivo e propor um passo seguro. Obedecer sem pensar ou recusar sem mostrar a conta tira a chance de o cliente decidir bem."
  },
  {
    id: "gf-m14-14", module: M, topic: "Sobra com desconto",
    q: "Preço R$ 100, custo R$ 55, comissão e imposto de 20% do preço e frete de R$ 15 (números de exemplo). Qual é a sobra por venda com 10% de desconto?",
    options: [
      "R$ 6,00, pois 95 − 55 − 19 − 15 = 6",
      "R$ 2,00, pois 90 − 55 − 18 − 15 = 2",
      "R$ 0,00, pois 90 − 55 − 20 − 15 = 0",
      "R$ 10,00, pois a sobra não muda com o desconto"
    ],
    answer: [1],
    why: "Com 10% de desconto o preço é R$ 90, e a comissão e o imposto de 20% caem pra R$ 18. Sobra: 90 − 55 − 18 − 15 = R$ 2. Sem desconto eram R$ 10."
  },
  {
    id: "gf-m14-15", module: M, topic: "Decisão do cliente",
    q: "Você mostrou a simulação, mas o cliente decidiu baixar o preço mesmo assim. O que você faz?",
    options: [
      "Registra por escrito o risco que apontou, executa o que ele decidiu e acompanha os números",
      "Se recusa a mexer no preço até ele concordar com a sua recomendação, para proteger a conta",
      "Executa em silêncio e, se der prejuízo, mostra depois a conta pra provar que você tinha razão",
      "Avisa o cliente que, a partir de agora, a Mamba deixa de ser responsável pelos resultados da conta"
    ],
    answer: [0],
    why: "A decisão é do cliente e o alerta é seu. Deixar o risco registrado, executar e acompanhar protege a relação sem esconder a sua opinião."
  },
  {
    id: "gf-m14-16", module: M, topic: "Conversa difícil",
    q: "Qual é a ordem dos 5 passos de uma conversa difícil, segundo a aula?",
    options: [
      "Escutar, rebater, resolver, registrar e pedir desculpas ao fim",
      "Resumir, escutar, respirar, registrar e só depois resolver",
      "Respirar, escutar, resumir, resolver e registrar por escrito",
      "Respirar, resolver, escutar, resumir e registrar por escrito"
    ],
    answer: [2],
    why: "Primeiro respire pra não responder no calor, depois escute e resuma o que entendeu. Só então proponha a solução e registre por escrito."
  },
  {
    id: "gf-m14-17", module: M, topic: "Dar feedback",
    q: "Sobre dar feedback a um colega, qual afirmação está ERRADA?",
    options: [
      "Descrever o fato, sem rótulo, é melhor que dizer que a pessoa “sempre erra”",
      "Mostrar o efeito do erro no cliente ou no time ajuda a pessoa a entender a importância",
      "Combinar o prazo e o jeito de acompanhar fecha a conversa e evita repetir o problema",
      "O feedback deve ser dado em público, para todo o time aprender junto com o erro"
    ],
    answer: [3],
    why: "Feedback que ajuda é dado em particular, com calma, e com fato, efeito, pedido e combinado. Exposição pública faz a pessoa se defender, e não mudar."
  },
  {
    id: "gf-m14-18", module: M, topic: "Assumir o erro",
    q: "Você percebe que mandou um número errado no relatório, e o cliente ainda não notou. O que fazer?",
    options: [
      "Esperar o cliente perguntar, porque corrigir sozinho só chama atenção pro erro e pode gerar dúvida",
      "Assumir o erro, corrigir o relatório e avisar o cliente e o líder o quanto antes",
      "Corrigir o número no próximo relatório do mês, sem comentar nada sobre a versão anterior",
      "Culpar a fonte do dado e pedir que o cliente ignore a versão anterior, sem dar mais detalhes"
    ],
    answer: [1],
    why: "Erro seu: assuma, corrija e avise. Esconder ou culpar outro destrói a confiança, e o cliente acaba descobrindo de qualquer jeito."
  },

  /* ---------------- Aula 4: Rotina, liderança e ética ---------------- */
  {
    id: "gf-m14-19", module: M, topic: "Cadência da conta",
    q: "Quais itens a aula coloca na leitura SEMANAL da conta? Marque todas as corretas.",
    options: [
      "Vendas e Ads (anúncios pagos) da semana",
      "Anúncios em risco de perder venda",
      "Pedidos e perguntas que chegam no dia",
      "A revisão do preço dos produtos",
      "Reunião mensal de alinhamento com ata"
    ],
    answer: [0, 1, 3],
    why: "A leitura semanal olha vendas, Ads, preço e anúncios em risco. Pedidos e perguntas são da rotina diária, e a reunião com ata é da cadência mensal."
  },
  {
    id: "gf-m14-20", module: M, topic: "Calcular o TACOS",
    q: "Ads de R$ 600, vendas com Ads de R$ 3.000 e vendas da loja toda de R$ 12.000 (números de exemplo). Qual é o TACOS?",
    options: [
      "TACOS 5%, pois 600 ÷ 12.000 = 0,05",
      "TACOS 20%, pois 600 ÷ 3.000 = 0,20",
      "TACOS 25%, pois 3.000 ÷ 12.000 = 0,25",
      "TACOS 5, pois 3.000 ÷ 600 = 5"
    ],
    answer: [0],
    why: "TACOS é o gasto de Ads dividido pelo total vendido da loja toda: 600 ÷ 12.000 = 5%. Dividir pelas vendas com Ads dá o ACOS (20%), e a divisão inversa dá o ROAS (5)."
  },
  {
    id: "gf-m14-21", module: M, topic: "Delegar tarefa",
    q: "Você vai passar a atualização do relatório semanal pra uma pessoa nova no time. O que faz?",
    options: [
      "Passa a tarefa com um “faz isso aí” e só olha o resultado quando o cliente reclamar",
      "Pede pra ela descobrir o formato sozinha, porque aprende mais errando do que com exemplo",
      "Explica o objetivo e o prazo, mostra um exemplo pronto e combina uma checagem no meio",
      "Faz o relatório você mesmo nas primeiras semanas, pra evitar qualquer erro com o cliente"
    ],
    answer: [2],
    why: "Delegar bem é passar objetivo, prazo, exemplo e um ponto de checagem. A responsabilidade final continua sendo sua, e por isso você acompanha."
  },
  {
    id: "gf-m14-22", module: M, topic: "Formar novos colegas",
    q: "Qual é a sequência dos 4 degraus pra formar um colega, segundo a aula?",
    options: [
      "Ensina, vê, faz junto e faz sozinho",
      "Vê, faz sozinho, faz junto e ensina",
      "Faz junto, vê, ensina e faz sozinho",
      "Vê, faz junto, faz sozinho e ensina"
    ],
    answer: [3],
    why: "Primeiro a pessoa vê, depois faz junto, depois faz sozinha com revisão e, por fim, ensina outra pessoa. Ensinar é o degrau mais alto."
  },
  {
    id: "gf-m14-23", module: M, topic: "Dados do cliente",
    q: "Você quer usar o relatório de um cliente real num treinamento interno. Qual é o cuidado certo?",
    options: [
      "Usar o relatório como está, porque o treinamento é interno e todo mundo da Mamba é de confiança",
      "Anonimizar o nome e os dados que identificam o cliente antes de usar o material",
      "Mandar o relatório completo por mensagem pro grupo da turma, pra todos conseguirem abrir",
      "Pedir que cada aluno anote os dados do cliente em um caderno pessoal pra estudar depois"
    ],
    answer: [1],
    why: "Dado de cliente só circula com quem precisa saber. Em estudo, treino e exemplo, anonimize antes. O grupo de mensagem e o caderno pessoal espalham o dado."
  },
  {
    id: "gf-m14-24", module: M, topic: "Teste do cliente leigo",
    q: "Pelo check de saída do módulo, quando um relatório pode ser considerado bom?",
    options: [
      "Quando traz todas as abas e gráficos possíveis, mostrando o quanto a equipe analisou a conta",
      "Quando o líder aprova o formato, mesmo que o cliente precise ligar pra entender o texto",
      "Quando o cliente leigo entende o relatório sem ligar pra tirar dúvida",
      "Quando usa os termos técnicos da plataforma, mesmo sem traduzir, para mostrar domínio do tema"
    ],
    answer: [2],
    why: "O relatório é bom se o cliente leigo entende sozinho: texto curto, jargão traduzido, ação e pedido claros. Volume de dados ou jargão não substituem isso."
  }
];

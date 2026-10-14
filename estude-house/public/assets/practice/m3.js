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

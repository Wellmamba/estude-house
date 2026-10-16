/* MODELO DE TRILHA — conteúdo.
   Como usar: copie esta pasta para public/trilhas/<nome-da-trilha>/ e troque "modelo" / "mod-" pelo seu nome.
   Guia completo: COMO-ADICIONAR-TRILHA.md (na raiz do projeto).

   Regras de ids (importante):
   - ids de módulos, aulas e prova final são ÚNICOS em todo o site. Use um prefixo da trilha (aqui: "mod-").
   - depois de publicada, não mude os ids (o progresso dos alunos é guardado por id).

   Formato Stories: cada bloco = 1 card de tela cheia. Veja GUIA-STORIES.md (limites e tom).
   Tipos de bloco: hook (1º, obrigatório), big, p, list, callout, steps, compare, say, jargon, conta, video, ruler, quiz, shot, find, sim, recap (último, obrigatório).
   (Este modelo é só um esqueleto: uma aula real tem 10 a 24 cards.)
   Confira com: node scripts/check-stories.mjs public/trilhas/<trilha>/content.js */
(window.TRILHAS = window.TRILHAS || []).push({
  id: "modelo",                       // sem espaços nem acentos; aparece no endereço (#/t/modelo)
  finalScope: "final-modelo",         // id da prova final desta trilha
  title: "Nome da trilha",
  tag: "Ferramenta",                  // etiqueta do card: Ferramenta, Mercado Livre, Atendimento...
  tagline: "Uma frase que aparece no card do menu de trilhas.",
  subtitle: "Uma frase que aparece no topo da página da trilha.",
  // finalSize: 30,                   // opcional: quantas questões a prova final sorteia (padrão 30; precisa bater com o manifest.mjs)
  modules: [
    {
      id: "mod-m1", n: 1,
      title: "Primeiro módulo",
      tagline: "O que este módulo ensina, em uma linha.",
      outcome: "O que a pessoa consegue fazer depois do módulo.",
      lessons: [
        {
          id: "mod-l1-1", title: "Primeira aula", minutes: 8,
          goal: "O que a pessoa consegue fazer ao final desta aula.",
          blocks: [
            { t: "hook", emoji: "🚀", title: "Título que dá vontade de abrir", text: "Em uma frase: o que a pessoa leva dessa aula." },
            { t: "big", html: "A ideia central em uma frase curta, com a <b>palavra-chave</b> em destaque." },
            { t: "jargon", term: "SIGLA", means: "O que é, em português claro, numa frase.", ex: "Exemplo do dia a dia, curto." },
            { t: "conta", title: "Conta real", rows: [["Preço", "R$ 100,00"], ["Custo", "R$ 60,00", "neg"], ["Taxa", "R$ 15,00", "neg"]], total: ["Sobra", "R$ 25,00"], note: "Os números precisam fechar." },
            { t: "list", title: "Os três pontos", items: ["Primeiro ponto", "Segundo ponto", "Terceiro ponto"] },
            { t: "callout", tone: "dica", title: "Dica", html: "Use <b>dica</b>, <b>atencao</b>, <b>exemplo</b> ou <b>regra</b> em tone." },
            { t: "quiz", q: "Pergunta de fixação da aula?", options: [
              "Alternativa errada, mas parecida com a certa no tamanho do texto",
              "Alternativa certa, escrita com o mesmo tamanho das outras opções",
              "Outra alternativa errada, também com o texto no mesmo tamanho",
              "Mais uma alternativa errada, com o texto do mesmo tamanho também",
            ], answer: [1], why: "Explicação de por que a alternativa certa está certa." },
            { t: "recap", items: ["Primeira coisa pra guardar", "Segunda coisa pra guardar", "Terceira coisa pra guardar"] },
          ],
        },
        {
          id: "mod-l1-2", title: "Segunda aula", minutes: 8,
          goal: "O que a pessoa consegue fazer ao final desta aula.",
          blocks: [
            { t: "hook", emoji: "🎯", title: "Segunda aula", text: "O que a pessoa leva dessa aula." },
            { t: "p", title: "Um texto curto", html: "Até 48 palavras por card." },
            { t: "recap", items: ["Ponto um", "Ponto dois", "Ponto três"] },
          ],
        },
      ],
    },
  ],
});

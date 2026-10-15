/* MODELO DE TRILHA — versões dos quizzes das aulas.
   Cada quiz de uma aula precisa de 3 versões ou mais: a cada "tentar de novo" o aluno recebe outra.
   "base" = o quiz que está escrito na própria aula. Uma lista por quiz, na ordem em que aparecem na aula.
   Aulas sem quiz não entram aqui; aulas com 2 quizzes têm 2 listas. */
window.PRATICA = window.PRATICA || {};
Object.assign(window.PRATICA, {
  "mod-l1-1": [[
    "base",
    {
      q: "Outra forma de perguntar a mesma coisa?",
      options: [
        "Alternativa errada, mas parecida com a certa no tamanho do texto",
        "Alternativa certa, escrita com o mesmo tamanho das outras opções",
        "Outra alternativa errada, também com o texto no mesmo tamanho",
        "Mais uma alternativa errada, com o texto do mesmo tamanho também",
      ],
      answer: [1],
      why: "Explicação de por que a alternativa certa está certa, em uma ou duas frases.",
    },
    {
      q: "Uma terceira versão da pergunta?",
      options: [
        "Alternativa errada, mas parecida com a certa no tamanho do texto",
        "Outra alternativa errada, também com o texto no mesmo tamanho",
        "Mais uma alternativa errada, com o texto do mesmo tamanho também",
        "Alternativa certa, escrita com o mesmo tamanho das outras opções",
      ],
      answer: [3],
      why: "Explicação de por que a alternativa certa está certa, em uma ou duas frases.",
    },
  ]],
});

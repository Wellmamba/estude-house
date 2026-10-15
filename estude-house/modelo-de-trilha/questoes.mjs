// MODELO DE TRILHA — banco de questões das PROVAS (fica em netlify/functions/lib/questions/<nome>.mjs).
// Para cada módulo: pelo menos 14 questões (a prova sorteia 12). Para a prova final: pelo menos 6 questões exclusivas
// (module = "final-modelo"); o resto da final vem sorteado dos módulos da trilha.
// Dica: faça 20 ou mais por módulo, para o aluno que repete a prova não ver sempre as mesmas.
// answer com 1 número = escolha única; com 2 ou mais = "marque todas" (tudo ou nada).
// As alternativas devem ter tamanho parecido: a certa não pode ser a mais longa nem a mais curta.
export default [
  {
    id: "mod-m1-01", module: "mod-m1", topic: "Tema da questão",
    q: "Enunciado da questão?",
    options: [
      "Alternativa errada, mas parecida com a certa no tamanho do texto.",
      "Alternativa certa, escrita com o mesmo tamanho das outras opções.",
      "Outra alternativa errada, também com o texto no mesmo tamanho.",
      "Mais uma alternativa errada, com o texto do mesmo tamanho também.",
    ],
    answer: [1],
    why: "Explicação que o aluno lê depois da prova (só aparece com mais de 90%).",
  },
  // ... mais questões com ids mod-m1-02, mod-m1-03 ...
  // ... questões da final: { id: "final-modelo-01", module: "final-modelo", ... }
];

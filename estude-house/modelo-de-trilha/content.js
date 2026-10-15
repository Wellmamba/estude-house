/* MODELO DE TRILHA — conteúdo.
   Como usar: copie esta pasta para public/trilhas/<nome-da-trilha>/ e troque "modelo" / "mod-" pelo seu nome.
   Guia completo: COMO-ADICIONAR-TRILHA.md (na raiz do projeto).

   Regras de ids (importante):
   - ids de módulos, aulas e prova final são ÚNICOS em todo o site. Use um prefixo da trilha (aqui: "mod-").
   - depois de publicada, não mude os ids (o progresso dos alunos é guardado por id).

   Tipos de bloco: p, h, list, callout, video, steps, compare, say, term, ruler, quiz, shot, find, sim. */
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
            { t: "p", html: "Texto da aula. Pode usar <strong>negrito</strong> e <em>itálico</em>." },
            { t: "h", text: "Um subtítulo" },
            { t: "list", items: ["Primeiro ponto", "Segundo ponto"] },
            { t: "callout", tone: "dica", title: "Dica", html: "Use <strong>dica</strong>, <strong>atencao</strong> ou <strong>exemplo</strong> em tone." },
            { t: "video", id: "ID_DO_VIDEO_NO_YOUTUBE", title: "Título do vídeo", dur: "5:00", note: "O que olhar no vídeo." },
            { t: "quiz", q: "Pergunta de fixação da aula?", options: [
              "Alternativa errada, mas parecida com a certa no tamanho do texto",
              "Alternativa certa, escrita com o mesmo tamanho das outras opções",
              "Outra alternativa errada, também com o texto no mesmo tamanho",
              "Mais uma alternativa errada, com o texto do mesmo tamanho também",
            ], answer: [1], why: "Explicação de por que a alternativa certa está certa." },
          ],
        },
        {
          id: "mod-l1-2", title: "Segunda aula", minutes: 8,
          goal: "O que a pessoa consegue fazer ao final desta aula.",
          blocks: [
            { t: "p", html: "Texto da segunda aula." },
          ],
        },
      ],
    },
  ],
});

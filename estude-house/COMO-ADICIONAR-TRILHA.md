# Como subir novos conteúdos no Estude House

O site abre num **menu de trilhas**. Cada trilha é um treinamento completo (módulos, aulas, quizzes, provas e certificado próprios). A PriceBot é a primeira. Cada nova trilha vira um card novo no menu, com o mesmo login dos alunos.

O progresso é separado por trilha: reprovar na final de uma trilha zera só ela, e cada trilha emite o próprio certificado.

---

## O caminho mais simples (recomendado)

Você manda o material para o Claude e ele devolve o projeto pronto. Para isso, reúna:

1. **Nome e objetivo da trilha** e para quem ela é (assessor novo, seller, time comercial...).
2. **Os temas**: uma lista de módulos e, dentro de cada um, as aulas. Pode ser uma lista simples.
3. **Os vídeos**: links do YouTube de cada aula (se houver).
4. **Os prints do sistema**, se a trilha ensina uma ferramenta (para virar "telas clicáveis", como na PriceBot).
5. **Textos, apresentações, regras e exemplos** que devem aparecer nas aulas (pode ser PDF, doc ou planilha).
6. **O que a prova deve cobrar**: o que o aluno precisa saber de cabeça ao final.

Com isso o Claude escreve as aulas, os quizzes, as questões das provas e devolve um `.zip`. Depois é só publicar (próxima seção).

---

## Formato das aulas: Stories

Toda aula é um **stories**: cada bloco de `blocks` vira um card de tela cheia (celular e PC). O aluno toca, desliza ou usa as setas. Quiz, simulação e "ache o erro" travam o avanço até serem respondidos.

- Tom: Gen Z, direto, frases curtas, todo termo técnico traduzido na hora (bloco `jargon`) e conteúdo difícil em doses pequenas com **conta de exemplo** (bloco `conta`).
- Blocos novos: `hook` (capa, obrigatório no início), `big` (frase de impacto), `jargon`, `conta`, `recap` (resumo, obrigatório no fim). `p` e `list` aceitam `title`. O bloco `h` não existe mais.
- Blocos visuais (gráficos, fluxos, tabelas, telas com pinos, simuladores com sliders): `chart`, `flow`, `table`, `tree`, `timeline`, `stairs`, `anno`, `lab`. Formatos e exemplos em **GUIA-GRADE-DE-FORMACAO.md**; `--require-visual` no verificador exige pelo menos um por aula.
- Cada aula: 10 a 24 cards, 2 a 8 minutos.
- Regras completas, limites de palavras e exemplos: **GUIA-STORIES.md**.
- Conferir antes de publicar: `node scripts/check-stories.mjs public/trilhas/<trilha>/content.js` (ou `npm run stories`).

Mande o material do jeito que estiver (texto, transcrição, apresentação): o Claude dissolve em stories seguindo o guia.

---

## Como publicar o que o Claude devolver

Os passos são os mesmos de sempre, no GitHub pelo navegador:

1. Abra o repositório no GitHub e clique em **Add file → Upload files**.
2. Abra o zip no computador e **arraste o conteúdo** dele (não a pasta `estude-house` em si).
3. Escreva uma mensagem, por exemplo "Nova trilha: Ads", e clique em **Commit changes**.
4. O Netlify publica sozinho em cerca de 1 minuto.
5. Confira em `https://SEU-SITE.netlify.app/api/health`: o campo `build` precisa mostrar a versão nova.

O que muda no repositório quando entra uma trilha:

| Onde | O que é |
| --- | --- |
| `public/trilhas/<nome>/` | **Pasta nova**: aulas, versões dos quizzes, telas e imagens da trilha |
| `netlify/functions/lib/questions/<nome>.mjs` | **Arquivo novo**: banco de questões das provas |
| `netlify/functions/lib/manifest.mjs` | Ganha a trilha na lista `TRAILS` |
| `netlify/functions/lib/questions/index.mjs` | Ganha a linha que carrega o banco novo |
| `public/index.html` | Ganha 2 ou 3 linhas `<script>` da trilha |
| `public/trilhas/proximas.js` | Perde a linha do "Em breve" dessa trilha |

Os alunos que já estudam não perdem nada: o progresso deles fica guardado por trilha.

---

## Anunciar uma trilha antes de ela ficar pronta ("Em breve")

Abra `public/trilhas/proximas.js` no GitHub (lápis de editar) e acrescente uma linha:

```js
window.PROXIMAS = [
  { tag: "Mercado Livre", title: "Ads no Mercado Livre", tagline: "Campanhas, ACOS e ROAS na prática." },
];
```

O card aparece no menu como "Em breve", sem link. Quando a trilha for publicada, apague a linha.

---

## Fazendo à mão (opcional)

Existe uma pasta de partida: `modelo-de-trilha/`. Ela **não é carregada pelo site**. Serve para copiar.

1. Copie `modelo-de-trilha/content.js` e `practice.js` para `public/trilhas/<nome>/` e troque o prefixo `mod-` (nos ids) pelo nome da sua trilha.
2. Escreva as aulas em `content.js`. Tipos de bloco: `p`, `h`, `list`, `callout`, `video`, `steps`, `compare`, `say`, `term`, `ruler`, `quiz`, `shot`, `find`, `sim`. Veja exemplos reais em `public/trilhas/pricebot/content.js`.
3. Em `practice.js`, dê **3 versões ou mais** a cada quiz de aula.
4. Copie `modelo-de-trilha/questoes.mjs` para `netlify/functions/lib/questions/<nome>.mjs` e escreva as questões.
5. Registre a trilha nos 3 lugares descritos em `modelo-de-trilha/manifest-trecho.txt`.
6. Rode `npm test` (ele confere tudo: ids, aulas, questões, versões de quiz e regras de nota).

Regras que o teste cobra:

- **ids únicos** em todo o site (módulos, aulas e prova final). Use um prefixo por trilha: `ads-m1`, `ads-l1-1`, `final-ads`.
- **Cada módulo: 14 questões ou mais** (a prova sorteia 12). Para variar de verdade, faça 20 ou mais.
- **Prova final: 6 questões exclusivas ou mais**. A final sorteia 30 (padrão), com parte vinda dos módulos da própria trilha. Dá para mudar com `finalSize` no manifesto e no `content.js`.
- **Alternativas de tamanho parecido**: a certa não pode ser a mais longa nem a mais curta.
- As regras de nota são as mesmas para todas as trilhas: até 70% refaz tudo, acima de 70% até 90% refaz só os erros, acima de 90% aprova.

---

## Perguntas comuns

**Posso mudar uma aula que já está no ar?** Pode. Troque o texto, os vídeos e as questões à vontade. Só **não mude os ids** de módulos e aulas, porque é por eles que o progresso é guardado.

**Posso tirar uma trilha do ar?** Pode: tire as 2 ou 3 linhas dela do `index.html`. O progresso dos alunos fica guardado caso ela volte.

**Dá para liberar uma trilha só para algumas pessoas?** Ainda não: todo aluno vê todas as trilhas. Se precisar, é uma melhoria pequena (trilha restrita por lista de e-mails).

**O painel de administração muda?** Passa a ter um seletor de trilha (funil, acessos, banco de questões) e, na ficha de cada pessoa, o andamento de todas as trilhas, com opção de zerar uma trilha, um módulo ou tudo.

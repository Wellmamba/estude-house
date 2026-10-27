# Tour guiado, provas avulsas e categorias de trilhas

## Tour guiado (primeiro login)
- Na **primeira vez** que a pessoa chega ao Feed, abre sozinho um passeio de ~10 passos: Feed das trilhas, Trilhas, categorias e busca, Busca, Notificações, Dúvidas e sugestões, Certificados e Minha conta. Gestores veem passos extras (novo destaque, gestão de trilhas e provas, aprovações).
- Funciona no celular e no computador. Dá para **Pular tour** (ou Esc), voltar e avançar (setas do teclado também).
- Pular ou concluir marca como visto **na conta da pessoa** (vale em qualquer aparelho). Cada pessoa vê uma vez.
- Quem já tinha conta antes desta versão também vê uma vez, no próximo acesso.
- Para rever: **Minha conta › Tour guiado › Rever o tour**.

## Provas avulsas (prova sem trilha)
Em **Gestão de trilhas › aba Provas avulsas** (precisa da permissão "trilhas").
1. **Criar nova prova** e dar um nome. Ela nasce como **rascunho** e para ninguém.
2. No editor: nome, **categoria**, descrição, **nota mínima** (50 a 100%), **questões por tentativa** (0 = todas; menor que o total = sorteio por aluno) e quando mostrar o **gabarito** (só ao ser aprovado, ou sempre).
3. Questões: uma a uma (pergunta, 2 a 6 alternativas, marque a certa; marcando mais de uma vira múltipla escolha; explicação e tema opcionais) ou **Colar várias questões**:
   ```
   1. Pergunta?
   a) alternativa
   b) alternativa certa *
   Explicação: texto (opcional)
   ```
   Linha em branco separa as questões. Também vale uma linha `Gabarito: B`. O editor salva sozinho.
4. **Escolher quem vê**: "Todos os alunos" ou "Só quem eu escolher" (lista com busca). Dá para mudar depois; quem já fez mantém o resultado.
5. **Publicar prova**. Precisa de nome e de pelo menos 3 questões completas. Quem foi liberado recebe um aviso no sino (uma vez só). **Encerrar** some para os alunos e guarda os resultados; **Reabrir** volta.
6. **Resultados**: por aluno, situação, tentativas, melhor e última nota.

Para o aluno: a prova aparece na tela de **Trilhas** (seção "Provas para você fazer", e no filtro "Só provas"). Pode repetir até passar; depois de aprovado não refaz. Se fechar a página, continua de onde parou. A correção é no servidor.
Observação: prova avulsa não dá XP nem certificado.

## Trilhas por categoria
- A **categoria** da trilha é o campo "Categoria" em **Dados da trilha** no construtor (antes "Etiqueta"). Escolha uma existente ou escreva uma nova. As trilhas nativas já têm: Ferramenta (PriceBot), Fiscal (Reforma Tributária), Formação (Grade). Sem categoria = "Geral".
- Tela de **Trilhas** (aluno e gestor): chips de categoria com a contagem, busca por nome e filtro por situação (em andamento, não iniciadas, concluídas). Sem filtro, as trilhas aparecem agrupadas por categoria; clicar numa categoria mostra só ela.
- A **Gestão de trilhas** também tem os chips de categoria e a busca.
- Provas avulsas usam o mesmo campo de categoria e aparecem junto das trilhas da categoria.

---

## Categorias 100% do gestor (build 2026-10-19-b)

**Para o aluno.** A tela *Trilhas* abre com um card por categoria (nome, quantas trilhas, progresso e as primeiras trilhas dentro). As trilhas só aparecem quando ele clica no card. Cada categoria tem endereço próprio (`#/trilhas/c/<nome>`), então o botão Voltar do navegador e o link "← nome da categoria" dentro da trilha levam de volta para ela. A busca no início procura em todas as categorias.

**Para o gestor** (menu Conteúdo → Trilhas, ou o botão *Gerenciar trilhas e categorias*):
- **Categorias** (botão ao lado de "Importar trilha"): cria, renomeia, reordena (↑ ↓) e exclui. Renomear leva as trilhas junto. Excluir devolve as trilhas ao padrão. A ordem que você define é a ordem dos cards para o aluno. Até 30 categorias, 24 caracteres cada.
- **Categoria de cada trilha**: em cada card há um seletor. Vale para as nativas (PriceBot, Reforma, BPP, Live Commerce e as da Formação Mamba), para as criadas no construtor e para as importadas (.json). Salva na hora. Para criar uma categoria nova, escolha "+ Nova categoria…" no próprio seletor.
- **Automática**: se você não escolher, a trilha usa a etiqueta que veio no arquivo (ou "Geral"). Escolhendo, a sua escolha sempre vence, mesmo se a trilha for atualizada por código depois.
- No editor da trilha, o campo Categoria também é esse seletor.
- Provas avulsas continuam com o campo de categoria delas, agora com sugestão da sua lista. Categorias vazias não aparecem para o aluno.

**Técnico.** Rotas (exigem a permissão *trilhas*): `GET/PUT admin/trails/categories` e `POST admin/trails/:id/category`. Os dados ficam no meta das trilhas (`cats.list` e `cats.map`), vão para o aluno no `/me` (`cats`) e valem para qualquer id de trilha. Testes em `test/categories.mjs`.

**Correção junto.** A lista de aulas de um módulo tinha um bloco preto atrás, por conflito de nome de CSS com um antigo feed de vídeos. A lista agora usa a classe própria `lesson-reel`.

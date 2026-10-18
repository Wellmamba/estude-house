# Tour guiado, provas avulsas e categorias de trilhas

## Tour guiado (primeiro login)
- Na **primeira vez** que a pessoa chega ao Feed, abre sozinho um passeio de ~13 passos: Feed, Destaques, Trilhas, categorias e busca, Ranking, XP, Busca, Notificações, Dúvidas e sugestões, Certificados e Minha conta. Gestores veem passos extras (novo destaque, gestão de trilhas e provas, aprovações).
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

# Comunidades por times

Cada aluno pertence a um **time**. A gestão publica no feed escolhendo **quem vê**: todos, ou só a comunidade de um time. Quem não é do time nem sabe que o post existe.

## Como usar (gestão)

1. **Cadastrar os times:** Administração > Comunidade > **Times e comunidades**. Informe nome, cor e o brasão (foto) ou uma bandeira/emoji. Cada time vira uma tag colorida nos posts. Limite: 20 times.
2. **Definir o time do aluno** (quem tem a permissão *Acessos*):
   - ao **aprovar um cadastro** (seletor ao lado de "Aprovar");
   - ao **criar um novo acesso** (campo "Time");
   - no **perfil do aluno** (bloco "Comunidade (time)"), a qualquer momento.
3. **Publicar para uma comunidade:** no compositor do feed, o campo **Quem vê** (aparece quando existe ao menos um time). Escolha o time e publique. Posts de comunidade não podem ser fixados no topo do feed geral.

4. **Foto do aluno:** no perfil do aluno (Pessoas > Acessos), botão **Cadastrar foto / Trocar foto** ao lado da foto. A imagem vai para o Cloudinary da empresa. Quem tem permissão em Acessos faz isso para alunos; só o administrador faz para a gestão.
5. **Time para adm e sub:** o campo "Comunidade (time)" do perfil serve para qualquer pessoa. Quem é da gestão e tem time ganha a tag do time nos posts e recebe o aviso das publicações da comunidade dele. A gestão continua vendo todas as comunidades.

## O que cada pessoa vê

| Quem | Feed |
|---|---|
| Aluno com time | posts para todos + posts da comunidade do **seu** time (botão "Meu time") |
| Aluno sem time | só posts para todos |
| Gestão | tudo, com filtro por comunidade (botões de cada time) |

- **Celular, aluno:** botão **Minha comunidade** no topo do feed, que abre o feed só do time. **Gestão:** botão **Comunidades** com a lista de times.
- **PC:** cartões **Comunidades** e **Tags** na lateral direita; a barra do feed fica só com Todos, Meus posts e Buscar.
- Post de comunidade **não aparece** em busca, Reels, perfil do autor, filtro por tag nem notificação para quem é de fora.
- Menções e avisos do post de comunidade chegam só a quem é do time; `@todos` fica desligado nesses posts.
- Link direto de um post de comunidade abre como "não encontrado" para quem não é do time.
- Apagar um time só é possível sem pessoas e sem posts na comunidade.

## Limites desta versão

- Só a gestão publica para uma comunidade (aluno não posta na comunidade).
- "Subir lista" de acessos não define time; use o perfil do aluno ou o cadastro individual.
- Trilhas e ranking ainda não são separados por time.

## Avisos (sino e aparelho)

| Quando | Quem recebe | Categoria nas preferências |
|---|---|---|
| A gestão publica numa comunidade | Quem é do time (aluno, adm ou sub), menos quem postou. Sino sempre; aparelho no máximo 1 a cada 10 min | Posts da minha comunidade |
| Marcação com @, comentário no seu post | A pessoa marcada ou o autor | Marcações e comentários |
| Post ou dúvida aprovada/recusada | O autor | Aprovação dos meus posts |
| Prova liberada, Reels novo, aviso do gestor | Quem tem aparelho ativo | Provas / Vídeos / Avisos |
| 09h (dia útil) | Alunos que ainda não fizeram o check-in | Lembrete de check-in |
| **14h (dia útil)** | **Todos os alunos com aparelho ativo: mensagem do dia** | **Mensagem do dia** |
| 18h (dia útil) | Alunos que podem perder a sequência | Lembrete de check-in |

Post para todos não gera aviso (só marcação com @), para não encher o sino.

### Mensagem do dia

São 42 mensagens com tom de curiosidade (em `netlify/functions/lib/daily.mjs`). Cada dia útil sai uma diferente e só repete depois de seis semanas. Exemplos: "A reforma tributária pode ser o seu tema de reunião de amanhã", "Não fique sem o check-in de hoje", "Tem Reels novo? Vai que salva o seu dia". Para trocar ou acrescentar, edite a lista (título até 70 letras, texto até 140, destino começando com `#/`). O horário e os dias estão em `netlify/functions/push-lembretes.mjs` (`schedule`, em UTC: 17h UTC = 14h de Brasília). O aluno só recebe se ativou **Avisos no aparelho** em Minha conta.

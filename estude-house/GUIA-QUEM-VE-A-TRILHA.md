# Quem vê cada trilha (atribuição)

Cada trilha tem duas formas de aparecer para os alunos:

| Modo | O que acontece |
|---|---|
| **Todos os alunos** (padrão) | Quem tem conta, inclusive quem entrar depois, vê a trilha. |
| **Só quem eu escolher** | Só os alunos marcados veem. Para os outros a trilha não existe. |

O gestor (admin ou sub-adm) sempre vê todas as trilhas. O botão **Ativa/Inativa** continua valendo por cima: trilha inativa some para todos os alunos, mesmo os escolhidos.

## Como atribuir

**Pela trilha** (o jeito principal)
1. Admin > **Gestão de trilhas**.
2. No cartão da trilha, clique em **Quem vê**.
3. Escolha *Todos os alunos* ou *Só quem eu escolher*. No segundo, use a busca (nome, @ ou e-mail), marque os alunos e use **Marcar os da lista** / **Desmarcar** para fazer em lote. Salve.

O cartão mostra o resumo, por exemplo "Só alunos escolhidos (12 de 80)".

**Pelo aluno**
Admin > **Acessos** > abra o aluno > quadro **Trilhas liberadas**. As trilhas em modo "só escolhidos" têm uma caixa para liberar ou tirar; as demais mostram "Para todos os alunos". (Quem tem a permissão *Acessos e painel* faz isso também.)

## Regras
- Quem perde o acesso **não perde o que estudou**: progresso, provas e certificado ficam guardados e voltam se a trilha for liberada de novo.
- O servidor barra aula e prova de trilha não liberada (não é só esconder). Nas trilhas criadas no construtor, o conteúdo nem é baixado por quem não tem acesso.
- As trilhas nativas (PriceBot, Reforma Tributária, BPP, Live Commerce e as 11 da Formação Mamba) têm o conteúdo em arquivos públicos do site: a atribuição esconde a trilha e bloqueia aulas e provas, mas quem souber o endereço do arquivo consegue ler o texto. Para conteúdo realmente sigiloso, use uma trilha criada no construtor.
- Modo "só escolhidos" sem ninguém marcado = trilha visível só para gestores (bom para preparar antes de lançar).
- Aluno novo entra sem nenhuma trilha em modo "só escolhidos"; é preciso atribuir.
- O painel conta só os alunos que receberam a trilha (começaram, aprovados, média de progresso).
- Quem pode mudar: administrador e sub-adm com a permissão **Trilhas**.

## Onde está no código
`netlify/functions/lib/manifest.mjs` (`trailVisibleTo`), `lib/trails.mjs` (rota `admin/trails/:id/audience`, filtro em `trails/custom`), `api.mjs` (`/me` devolve `hidden` e `restricted`; `PATCH admin/users/:id` aceita `trails`), `public/assets/builder.js` (janela "Quem vê"), `public/assets/admin.js` (quadro na página do aluno), `test/audience.mjs`.

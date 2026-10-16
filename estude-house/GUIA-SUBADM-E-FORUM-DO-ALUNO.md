# Sub-administrador e Fórum do aluno

## 1. Sub-administrador (perfil com permissões)

O **administrador** escolhe uma pessoa, muda o perfil para **Sub-administrador** e marca o que ela pode fazer.

**Como fazer**
- Admin > **Acessos** > abra a pessoa > em **Gestão do acesso**, troque o *Perfil* para *Sub-administrador*. Logo acima aparece o quadro **Permissões do sub-administrador**: marque e clique em **Salvar permissões**.
- Ou, ao criar um acesso novo (**Novo acesso**), escolha o perfil *Sub-administrador* e marque as permissões na hora.
- Na lista em massa, o perfil `sub` cria um sub-adm sem permissões (você marca depois).
- Para tirar: volte o perfil para *Aluno*. Perde tudo na hora.

**As 7 permissões**

| Permissão | Libera |
|---|---|
| Aprovações | Aprovar cadastros e posts do feed |
| Moderação | Remover posts e comentários, gerenciar tags e o filtro de palavras |
| Publicar | Publicar direto no feed, criar enquetes, fixar posts, usar @todos e gerenciar os Destaques |
| Fórum | Escrever o Fórum oficial e aprovar as dúvidas e sugestões dos alunos |
| Trilhas | Criar, editar, ativar e desativar trilhas e ver o banco de questões |
| Engajamento | Configurar XP, metas e regras |
| Acessos e painel | Ver o painel, os alunos e os registros; criar acessos de aluno e zerar progresso |

**Regras**
- O menu do sub-adm mostra só as áreas liberadas. Se ele abrir um endereço sem permissão, é levado à primeira área que pode usar. O servidor também barra (não é só esconder botão).
- Só o **administrador** muda perfis, define permissões, remove acessos e mexe em outros gestores. Sub-adm com *Acessos e painel* cuida apenas de alunos (criar, redefinir senha, desativar, zerar progresso).
- Sub-adm sem *Publicar* posta como aluno (vai para aprovação).
- Sub-adm não ganha XP, não faz check-in e não aparece no ranking.
- O master (`ADMIN_EMAILS`) é sempre administrador e não pode ser alterado.
- Mudou a permissão? Vale na próxima página que a pessoa abrir (o menu é refeito sozinho).

## 2. Fórum do aluno: dúvidas e sugestões

O aluno tem no menu **Dúvidas e sugestões**.

1. O aluno escolhe *Dúvida* ou *Sugestão*, escreve título (5 a 120 letras) e texto (10 a 2000) e envia. Até **5 envios** esperando análise por aluno. Linguagem ofensiva é barrada.
2. Chega ao gestor com permissão *Fórum* (ou admin): **Admin > Fórum > Dúvidas e sugestões dos alunos**. Um selo mostra quantos esperam.
3. O gestor decide:
   - **Aprovar**: dá para ajustar título, categoria (padrão *Dúvida* ou *Sugestão*) e texto, e escrever a resposta. Vira publicação do **fórum oficial**, que aparece na busca de todos. O aluno recebe o aviso no sino com o link.
   - **Reprovar**: com motivo. O envio volta ao aluno como **Reprovada**, mostrando o motivo. Ele pode **Ajustar e reenviar** (volta para a fila) ou apagar.
4. Envio aprovado não se edita nem se apaga (já é publicação oficial; o gestor edita no Fórum). Em **Já respondidos** o gestor vê o histórico.
5. Na Busca, quando não acha nada, o aluno vê o botão *Mandar como dúvida para o fórum*.

## 3. Check-in diário

Quando o aluno marca o check-in, o balão sai do feed (e some também se ele marcar pelo painel de XP). No dia seguinte volta.

## 4. Fórum com o manual do suporte

As 90 publicações do manual (Amazon, Mercado Livre, Shopee, TikTok Shop, Bling e Upseller) entram com **Admin > Fórum > Importar manuais para o fórum**. Detalhes em `GUIA-DESTAQUES-E-FORUM.md`.

## Onde está no código
`netlify/functions/lib/auth.mjs` (`PERMS`, `can`, `isStaff`), `api.mjs` (rotas `admin/*` com permissão por área), `lib/forum.mjs` (`forum/envios`), `public/assets/admin.js` (Acessos e permissões), `public/assets/forum.js` (telas do aluno e do gestor), `test/subadmin.mjs`.

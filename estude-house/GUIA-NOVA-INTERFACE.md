# Nova interface: Feed enxuto, menu do gestor, Reels e avisos no aparelho

Versão do site: `2026-10-18-s`. Confira em `/api/health`: o campo `build` deve mostrar essa versão e o campo `push` deve mostrar `ativo`.

## 1. O que mudou na tela

**Topo do Feed (aluno e gestor)**
- Sobrou uma linha de status: escolher o @, pendências para aprovar (gestor) e o check-in (aluno). Quando o check-in é feito, a linha some.
- A caixa de post vem fechada, em uma linha, com os botões **Curiosidade, Case, Dica e Conquista**. Tocar em um deles abre a caixa já com o tipo escolhido e um texto de apoio. O tipo aparece como uma etiqueta colorida no post.
- Os filtros (Todos + tags) ficam em uma linha que rola para o lado. Para o aluno, **Meus posts** virou um botão nessa mesma linha.
- No PC largo (1180 px ou mais) aparece uma coluna à direita: resumo do dia e metas (aluno), fila de pendências (gestor), ideias do que postar e atalho para os Reels.

**Menu do gestor**
- Os itens viraram 3 grupos que abrem e fecham: **Comunidade** (Aprovações, Fórum, Tags e moderação, Avisos), **Conteúdo** (Trilhas, Provas avulsas, Banco de questões) e **Pessoas** (Acessos, Engajamento, Logs). O grupo da tela atual abre sozinho e mostra o número de pendências mesmo fechado.
- No topo de cada tela de gestão há uma faixa de abas do mesmo grupo: dá para trocar de Aprovações para Fórum ou Tags sem abrir o menu.

**Celular**
- A barra de baixo agora é Feed, Reels, Trilhas, Ranking e Você. A busca foi para a lupa no topo.
- **Você** abre uma tela própria (conta, certificados, dúvidas, avisos no aparelho, tipo de tela, tour, sair e, para o gestor, toda a gestão em grupos), em vez do menu lateral do PC.
- Arrastar para o lado troca de aba, seguindo a ordem da barra de baixo. Não atrapalha listas que rolam para o lado, campos de texto e janelas abertas, e as bordas da tela continuam livres para o "voltar" do celular.
- O sininho **pula** enquanto houver notificação não lida e dá um toque extra quando chega uma nova. Respeita quem desligou animações no aparelho.

## 2. Reels (menu "Reels", também chamado de Engajamento)

- Mostra os vídeos dos posts publicados e dos destaques no ar **dos últimos 30 dias**, um por vez, na vertical, com play automático e sem som no começo (o som liga no ícone e fica ligado nos próximos).
- Ordem: vídeos novos (últimas 72 horas) que a pessoa ainda não viu vêm primeiro, do mais novo ao mais antigo. O resto vem embaralhado, e os já vistos por último. Se chegar vídeo novo enquanto a pessoa assiste, ele entra como o próximo.
- A lista **não acaba**: ao chegar perto do último, vem outra rodada embaralhada (sem repetir o mesmo vídeo em seguida).
- No iPhone e em celulares com economia de bateria o navegador pode bloquear o play automático. Nesse caso aparece o botão **Toque para assistir** no meio do vídeo; o som começa desligado e liga no ícone.
- Cada vídeo roda **até 30 segundos**. Se o vídeo for mais longo, ao chegar nos 30 segundos aparece um botão no meio da tela: **Ir para o post** (nos destaques: **Ver destaque**). Vídeos curtos ficam repetindo até a pessoa arrastar.
- **Hype** e **comentários** são os mesmos do post: o número é o mesmo no Feed e nos Reels, e o XP segue as mesmas regras.
- Entram vídeos enviados pelo Cloudinary e links de YouTube (inclui Shorts), Vimeo, Loom, Google Drive e arquivos mp4/webm/mov. O Drive não toca sozinho: pede um toque em "Toque para assistir". GIFs não entram.
- Vídeo horizontal aparece inteiro, com fundo desfocado, dentro do quadro vertical.
- No PC o quadro vertical fica no centro, com setas e as teclas ↑ ↓ (ou J e K), espaço para pausar e M para o som.

## 3. Avisos no PC e no celular

**Ativar (cada pessoa, em cada aparelho):** Você > Avisos neste aparelho (no PC: Minha conta > Avisos no aparelho, ou o link dentro do sininho). A pessoa toca em Ativar, permite no navegador e recebe um aviso de teste. Lá também escolhe o que quer receber.

| Aparelho | Funciona? |
|---|---|
| Computador (Chrome, Edge, Firefox) | Sim, direto no navegador |
| Android (Chrome) | Sim, direto no navegador |
| iPhone/iPad | Só com o app instalado: Safari > Compartilhar > Adicionar à Tela de Início, abrir pelo ícone e ativar. Precisa do iOS 16.4 ou mais novo |

**O que dispara aviso**
- Automáticos, na hora: marcação com @, comentário no seu post, post aprovado ou recusado, dúvida do fórum aprovada ou reprovada, prova liberada, @todos de um gestor, vídeo novo nos Reels (no máximo 1 a cada 6 horas por pessoa).
- Automáticos, por agenda (dias úteis): 09h lembrete de check-in (só para quem ainda não fez); 18h aviso de sequência em risco; segunda às 09h resumo da semana. Máximo de um de cada tipo por dia por pessoa.
- Manual: **Administração > Comunidade > Avisos**. O gestor escreve título e mensagem (há ideias prontas), escolhe a tela que abre ao tocar e quem recebe (todo o time, só alunos ou só gestores). O aviso vai para o sininho de todos e para o aparelho de quem ativou.

**Detalhes técnicos**
- As chaves de segurança (VAPID) são criadas sozinhas no primeiro uso e guardadas no Netlify Blobs. Opcional: definir `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY` e `VAPID_SUBJECT` nas variáveis do Netlify.
- O site agora é instalável (manifesto + ícones) e tem um service worker (`/sw.js`) só para receber avisos. Ele não guarda páginas em cache.
- A agenda está em `netlify/functions/push-lembretes.mjs` (cron `0 12,21 * * 1-5`, em UTC = 09h e 18h de Brasília). Depois do deploy, ela aparece em Netlify > Functions como função agendada.
- O `package.json` ganhou a biblioteca `web-push` e o `netlify.toml` a marca `external_node_modules`. O Netlify instala sozinho ao publicar.
- Se a pessoa sair da conta, o aviso daquele navegador sai junto, para não chegar para quem usa depois no mesmo aparelho.

**Se um aviso não chega:** conferir se o navegador não bloqueou (cadeado ao lado do endereço > Notificações > Permitir), se a categoria está ligada em "O que você quer receber", e se `/api/health` mostra `push: ativo`.

## 4. Notificações de comunicação e marketing que recomendo

Automáticas (já funcionam): check-in 09h, sequência em risco 18h, resumo de segunda, aprovação do post, marcação/comentário, vídeo novo, prova liberada.

Manuais, pela tela Avisos (as 5 primeiras já vêm como ideia pronta):
1. **Vídeo novo nos Reels** quando sair um conteúdo importante.
2. **Desafio da semana** (segunda): meta clara e quem bater aparece no ranking.
3. **Trilha nova liberada**, no dia em que publicar.
4. **Compartilhe um case** (quarta): pede um resultado do time.
5. **Reunião do time** com horário.
6. **Parabéns do mês**: destaque de quem mais evoluiu no ranking.
7. **Prova abrindo/fechando**: "A prova de TikTok Shop fecha sexta".

Próximas ideias (ainda não feitas): reativação de quem ficou 7 dias sem entrar, aviso de "seu post recebeu 10 hypes", e meta batida.

Boas práticas: no máximo 1 aviso manual por dia, título com até 40 letras, um único chamado para ação e horário comercial (9h a 18h).

## 5. Como fazer o aluno querer postar

- Pedir pelo formato: "Curiosidade de sexta", "Case da semana", "Dica do dia". Os botões já dão o formato; o gestor só precisa lembrar o ritual com um aviso.
- Mostrar o que acontece depois: o aluno vê "o gestor dá uma olhada rápida" e "+30 XP quando entra no Feed", recebe aviso quando é aprovado e ainda ganha o selo do tipo no post.
- Reconhecer: fixar o melhor case da semana no topo do Feed e citar o autor (@) num destaque.
- Dar retorno rápido: aprovar em até 1 dia útil. O aviso de "Posts para aprovar" aparece na faixa do Feed e na fila do gestor.
- Reels como vitrine: vídeo curto de aluno entra nos Reels depois de aprovado, com hype.

## Segurança e velocidade para 300+ pessoas (build `2026-10-18-s`)
- **Teste novo:** `node test/security.mjs` (permissões de todas as rotas de gestão, sessões, trava de senha, entradas maliciosas, cabeçalhos). Já está no `npm test`. `node test/load.mjs 300` simula 300 pessoas juntas.
- **Cache no servidor** (segundos, por instância) e **ranking** calculado uma vez por minuto e compartilhado: o ranking pode demorar até ~1 min para refletir XP novo.
- **Sessão:** trocar a senha ou desativar a conta derruba as sessões abertas. Login trava por conta (5 erros) e por endereço.
- **Cabeçalhos:** política de conteúdo (sem script de terceiros), HSTS, nosniff etc. no `netlify.toml`. Se um dia usar script/fonte de outro site, ele precisa ser liberado ali.
- **Upload:** só formatos de imagem, vídeo, áudio e documento entram no Cloudinary.
- **Arquivos do site** ficam em cache por 1 ano com `?v=BUILD`: ao mudar o BUILD (api.mjs + lib.js), rode `node scripts/stamp-version.mjs`.
- O Feed confere novidades a cada ~30 s (com variação aleatória) só com a aba aberta.

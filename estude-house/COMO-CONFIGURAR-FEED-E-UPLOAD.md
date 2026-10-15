# Feed, XP de engajamento, ranking e busca: como usar e configurar

## O que existe

- **Início (`#/`) é o feed.** Gestores (adm e master) publicam texto, foto, vídeo, arquivo ou link. O time comenta e dá **Hype** (o foguete).
- **Alunos também publicam**, mas o post fica em **Aguardando aprovação** até um gestor aprovar em **Aprovações**. Post aprovado vira XP.
- **Check-in diário** rende XP e bônus por dias seguidos.
- **Botão de XP no topo, à direita** abre o menu lateral: XP total (trilhas + engajamento), check-in, metas de hoje e da semana, como ganhar XP e últimos ganhos.
- **Ranking** (`#/ranking`): semana, mês e geral, só por XP de engajamento. Só alunos pontuam e aparecem. Gestores não ganham XP de engajamento.
- **@ (nickname):** o aluno escolhe depois de criar o perfil (aviso na Início ou em Minha conta). Único no sistema e pode trocar 1 vez a cada 7 dias.
- **Busca (barra no topo):** pessoas (nome e @), posts do feed e o conteúdo das trilhas (aulas, módulos, telas). Ignora acento e maiúscula, aceita plural, pequenos erros de digitação e termos parecidos. Gestores também encontram pessoas pelo e-mail.
- **As trilhas agora ficam em `#/trilhas`** (menu Trilhas).

## Como o gestor usa

1. **Publicar:** escreva na Início e clique em Publicar. Anexe foto/vídeo/arquivo (precisa do Cloudinary, abaixo) ou cole um link. Links do YouTube, Vimeo, Loom, Google Drive/Docs/Slides/Sheets, Canva e Figma aparecem com visualização dentro do post (clique para carregar; há "Tela cheia"). Outros links viram um cartão.
2. **Aprovar:** menu **Aprovações** (o número mostra quantos esperam). Aprovar publica e dá o XP ao aluno; Recusar pede um motivo opcional, que o aluno vê.
3. **Moderar:** gestores podem apagar qualquer post ou comentário.
4. **XP e metas:** menu **Engajamento**. Edite o XP de cada ação, o limite diário de ações que rendem XP e as metas (nome, o que conta, alvo, por dia ou por semana, XP, ativa/inativa). Dá para criar e remover metas e voltar às padrão. A mudança vale na hora.

### Valores padrão

| Ação | XP | Limite com XP por dia |
|---|---|---|
| Check-in | 10 (+2 por dia seguido, até +10) | 1 |
| Post aprovado | 30 | 2 |
| Comentário (8+ letras) | 2 | 5 |
| Hype em post de outra pessoa | 1 | 10 |

Passou do limite, a ação continua valendo para as metas, mas não rende XP (evita farmar com cliques). Metas padrão: check-in em 5 dias da semana (+40), 5 hypes no dia (+10), 5 comentários na semana (+25), 1 post aprovado na semana (+50).

Regras do aluno: no máximo 3 posts na fila de aprovação, 4 anexos por post, 2000 letras por post, 500 por comentário. Hype no próprio post é permitido, mas não rende XP.

## Upload de foto, vídeo e arquivo (Cloudinary)

Links funcionam sem configurar nada. Para **enviar arquivos** (foto, vídeo, PDF…), o sistema usa o Cloudinary, que guarda os arquivos fora do Netlify e entrega vídeo otimizado. O plano gratuito atende para começar. Sem as chaves, os botões "Foto ou vídeo" e "Arquivo" aparecem desligados e o resto continua funcionando.

1. Crie uma conta gratuita em cloudinary.com.
2. No painel (Dashboard / Programmable Media), copie **Cloud name**, **API Key** e **API Secret**.
3. No Netlify: **Site configuration → Environment variables**, crie:

| Variável | Valor |
|---|---|
| `CLOUDINARY_CLOUD_NAME` | o Cloud name |
| `CLOUDINARY_API_KEY` | a API Key |
| `CLOUDINARY_API_SECRET` | a API Secret (nunca compartilhe) |

4. Faça um novo deploy (**Deploys → Trigger deploy → Deploy site**).
5. Confira abrindo `https://SEU-SITE.netlify.app/api/health`: deve aparecer `"uploads":"cloudinary"`.

Como funciona: o navegador pede ao servidor uma assinatura (só quem está logado recebe) e envia o arquivo direto ao Cloudinary, com barra de progresso. O servidor só aceita endereços `res.cloudinary.com/<seu cloud name>/…` nos posts. Limites do plano gratuito usados pela tela: imagem e arquivo até 10 MB, vídeo até 100 MB. Num plano pago, ajuste `LIMITS` no início de `public/assets/feed.js`. Arquivos SVG não são aceitos (segurança).

## Busca: o que "parecido" significa

A busca acha palavras iguais, plural/singular, variações simples, erros de digitação e grupos de termos relacionados (por exemplo, ads, ACOS e ROAS; margem e lucro; frete e envio; cliente e seller). Não é busca por significado com inteligência artificial. O núcleo fica em `scripts/textsearch-core.js`; depois de editar rode `node scripts/sync-textsearch.mjs` (copia para o servidor e para o site) e `npm test`.

## Dados no Netlify Blobs

Stores novas: `feed` (posts, fila, config de XP), `hypes`, `comments`, `nicks`, `eng` (XP de cada aluno) e `rl` (limites de velocidade). Apagar um usuário no painel remove também o XP e o @ dele.

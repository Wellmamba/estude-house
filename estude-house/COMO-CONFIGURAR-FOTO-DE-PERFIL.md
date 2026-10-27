# Foto de perfil e envio de imagens (Cloudinary)

O sistema hoje tem três áreas: **Trilhas**, **Fórum** e **Busca**. O Início (`#/`) é o **Feed das trilhas**: de onde continuar, provas liberadas, trilhas para começar, conquistas e novidades do fórum. Não há mais posts, comentários, Hype, Reels, Destaques, ranking, check-in nem XP de engajamento.

## Foto de perfil (Cloudinary)

Links funcionam sem configurar nada. Para **enviar a foto de perfil e as imagens das aulas**, o sistema usa o Cloudinary, que guarda os arquivos fora do Netlify e entrega vídeo otimizado. O plano gratuito atende para começar. Sem as chaves, os botões "Foto ou vídeo" e "Arquivo" aparecem desligados e o resto continua funcionando.

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

Como funciona: o navegador pede ao servidor uma assinatura (só quem está logado recebe) e envia o arquivo direto ao Cloudinary, com barra de progresso. O servidor só aceita endereços `res.cloudinary.com/<seu cloud name>/…` nos posts. Limites usados pela tela: **foto sem limite prático** (reduzida sozinha), arquivo (PDF etc.) até 10 MB e vídeo ou GIF até 100 MB. **Foto grande é reduzida sozinha** no navegador antes de enviar (não trava mais por passar de 10 MB). **GIF acima de 10 MB** é enviado como vídeo curto que repete sozinho, sem som, e se comporta como GIF no feed (limite de 100 MB). Num plano pago, ajuste `LIMITS` no início de `public/assets/feed.js`. Arquivos SVG não são aceitos (segurança).

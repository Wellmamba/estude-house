# Destaques e Fórum (só para gestores)

## Destaques (a bolinha de Story)
- Ficam no topo do **Feed**, no celular e no computador. São como Stories, mas **não somem em 24 horas**.
- **Só gestor cria.** Aluno só assiste. Toque no **+ Novo** (primeira bolinha) para criar: título curto, de 1 a 20 cartões, cor de fundo e, se quiser, foto ou vídeo por cartão.
- **O anel é a foto de quem postou**, como no Instagram. Quem não tem foto aparece com as iniciais.
- **Formato Instagram**, no celular e no computador (no PC o destaque abre num quadro vertical no centro). Toque na direita para avançar, na esquerda para voltar, **segure para pausar**. Vídeo toca sozinho e, quando termina, passa para o próximo cartão. Há botões de pausa e de som.
- Foto e vídeo usam o envio do Cloudinary. Se ainda não configurou, veja `COMO-CONFIGURAR-FEED-E-UPLOAD.md`. Sem Cloudinary, dá para criar só com texto.
- **Destaque novo fica evidente**: a bolinha ganha anel dourado/rosa animado e a etiqueta "Novo", e a aba Feed mostra um número com quantos destaques o aluno ainda não viu.
- **Assistir dá XP**: 3 XP por destaque, uma única vez, ao chegar no último cartão (limite de 10 por dia). Dá para mudar em **Administração › Engajamento**. Gestor não ganha XP.
- **Gestor pode mexer num destaque que já existe** (menu de três pontos, dentro do destaque):
  - **Adicionar cartão**: coloca mais um post dentro do mesmo destaque (até 20). Quem já tinha visto volta a ver a bolinha como "Novo".
  - **Editar**: muda título, cor, ordem (sobe/desce) e o conteúdo dos cartões.
  - **Virar post do Feed**: transforma o cartão que está aberto (ou o destaque inteiro) em uma publicação normal do Feed, com o autor do destaque, e **tira do destaque**. Aceita até 4 fotos/vídeos por post.
  - **Apagar** o cartão ou o destaque.

## Fórum (lista útil dos gestores)
- Em **Administração › Fórum**. Publicação simples: título, categoria opcional e texto (até 8000 caracteres).
- **O aluno não vê o Fórum no menu.** Quando ele usa a **Busca**, as publicações cujo título, categoria ou texto batem com a pesquisa aparecem numa seção "Fórum" e ele abre para ler.
- Gestor pode editar e apagar. Apagar tira da busca de todo mundo.
- **Manuais prontos**: o botão **Importar manuais para o fórum** (no topo de Administração › Fórum) cria de uma vez **90 publicações**, uma por categoria do manual de operação do suporte técnico: Amazon (16), Mercado Livre (16), Shopee (16), TikTok Shop (16), Bling (21) e Upseller (5). Cada uma traz os passos básicos e as fontes oficiais, e o aluno encontra pela Busca (ex.: "GMV Max", "certificado digital A1", "Shopee Xpress"). Pode clicar de novo sem duplicar; se apagar uma publicação, ela não volta numa nova importação. Depois é só editar o que quiser.
- O texto do manual vem de `netlify/functions/lib/forum-manual.mjs` (gerado por `scripts/build-forum-manual.mjs` a partir dos rascunhos). Os resumos são orientações gerais: confira sempre a fonte oficial antes de aplicar num cliente.

## Trilha: liberação das aulas
- **Gestor** navega por toda a trilha, sem precisar desbloquear nada.
- **Aluno** libera a aula seguinte ao concluir a anterior. Aulas já concluídas continuam abertas. O bloqueio vale também no servidor.

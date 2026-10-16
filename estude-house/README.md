# Estude House — ambiente de estudos da Mamba Digital

Plataforma de treinamento da Mamba Digital. A primeira trilha ensina a PriceBot do zero até ensinar a ferramenta a outra pessoa: 7 módulos, 33 aulas, 13 vídeos do canal oficial (youtube.com/@pricebot), 41 quizzes e 12 simulações com números sorteados dentro das aulas, 24 telas reais do portal da PriceBot com marcações explicadas, 7 provas de módulo e uma prova final (153 questões no banco, sorteadas e embaralhadas a cada tentativa). A segunda trilha, **Reforma Tributária nos Marketplaces** (pasta `public/trilhas/rt/`), tem 4 módulos e 16 aulas: o que é a reforma, o impacto nos marketplaces, o dia a dia de quem vende no Mercado Livre e na Shopee e como orientar o cliente (88 questões de módulo e 10 exclusivas da prova final, 6 simulações com números sorteados). É conteúdo educativo, com a posição de 15/10/2026; os pontos que ainda podem mudar vêm sinalizados nas aulas. Para atualizar, edite `public/trilhas/rt/content.js`. O módulo 1 ("Conheça o sistema") ensina o portal com os prints da PriceBot, sem exercícios espalhados: ele termina com um único quiz completo da ferramenta (prova de 15 questões que sempre passa pelas 9 áreas do portal).

## Como publicar no Netlify (com Git)

1. Crie um repositório (GitHub, GitLab ou Bitbucket) e suba esta pasta inteira.
2. No Netlify: **Add new site → Import an existing project** e escolha o repositório. O `netlify.toml` já define a pasta publicada (`public`) e as Functions (`netlify/functions`). Não precisa de comando de build.
3. Em **Site configuration → Environment variables**, crie:

| Variável | Obrigatória | Para quê |
|---|---|---|
| `JWT_SECRET` | sim | Texto longo e aleatório (32+ caracteres). Assina as sessões. Se trocar, todo mundo precisa entrar de novo. |
| `ADMIN_EMAILS` | não | E-mails separados por vírgula que são administradores master. Padrão: `wellington.moreira@mambadigital.com.br`. |
| `SIGNUP_APPROVAL` | não | `off` desliga a aprovação de cadastros (cadastro entra direto). |
| `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` | não | Liga o envio de fotos, vídeos e arquivos no feed (ver `COMO-CONFIGURAR-FEED-E-UPLOAD.md`). Sem elas, só links. |
| `ALLOWED_DOMAINS` | não | Ex.: `mambadigital.com.br`. Se preenchida, só e-mails desses domínios podem se cadastrar sozinhos. Administradores criam acessos de qualquer domínio. |

4. Faça o deploy. O banco (Netlify Blobs) é ativado sozinho, sem configuração.
5. Abra o site, vá em **Criar conta** com `wellington.moreira@mambadigital.com.br` e uma senha. Esse e-mail vira administrador master automaticamente.

Importante: arrastar a pasta no Netlify Drop **não** serve, porque Functions e Blobs exigem deploy por Git (ou pela CLI `netlify deploy`).

## Como funciona

- **Cadastro e login:** nome, e-mail e senha digitada duas vezes. Senha com 8+ caracteres, letras e números. 5 erros seguidos bloqueiam o login por 10 minutos.
- **Trilha:** módulos em sequência. A prova do módulo libera quando todas as aulas estão concluídas (cada aula exige responder os quizzes). O módulo seguinte libera com a aprovação. A prova final libera após todos os módulos da trilha. O certificado, com código de verificação, sai após a final.
- **Regra das provas (corrigidas no servidor):**
  - até 70%: reprovado. Refaz as aulas do módulo e a prova (na final, a trilha inteira).
  - acima de 70% até 90%: refaz só as questões erradas, quantas vezes precisar.
  - acima de 90%: aprovado. Vê o que errou e a resposta certa, sem refazer.
- **Administração (perfil adm, igual ao master):** painel com funil, lista de acessos, criar acesso individual ou subir lista (colar nome, e-mail, senha e perfil), definir aluno ou adm, desativar, redefinir senha, zerar progresso (tudo, uma trilha ou um módulo), remover, logs com filtro e o banco de questões com gabarito. O acesso master não pode ser rebaixado, desativado ou removido.
- **Logs:** cadastro, login (inclusive falhas), aulas, provas e toda ação de administrador, com data, e-mail e IP.

## Como adicionar conteúdo

O site abre num menu de trilhas. Cada trilha é uma pasta em `public/trilhas/<nome>/`:

- `content.js`: módulos e aulas (blocos `p`, `h`, `list`, `callout`, `video`, `steps`, `compare`, `say`, `term`, `ruler`, `quiz`, `shot`, `find` e `sim`; as simulações com números sorteados ficam em `public/assets/calc.js`). Registra a trilha em `window.TRILHAS`.
- `practice.js`: versões dos quizzes das aulas (a cada "tentar de novo" o aluno recebe outra pergunta, com as alternativas embaralhadas).
- `screens.js` e `img/`: telas anotadas do sistema, quando a trilha ensina uma ferramenta.
- Questões das provas: `netlify/functions/lib/questions/<nome>.mjs`.
- Estrutura das trilhas e tamanho das provas: `netlify/functions/lib/manifest.mjs`.
- "Em breve" no menu: `public/trilhas/proximas.js`.

**Passo a passo completo, com modelo para copiar:** `COMO-ADICIONAR-TRILHA.md` e a pasta `modelo-de-trilha/`.

Depois de mudar, rode `npm test`: ele confere o banco de questões, o currículo de todas as trilhas, as telas, as simulações e as regras de aprovação. Para checar o equilíbrio de um arquivo de questões (alternativas de tamanho parecido): `node scripts/check-bank.mjs <arquivo>`.

## Aulas em formato Stories

Cada aula é uma sequência de cards de tela cheia (como stories): toque ou deslize para avançar, setas no PC, quizzes e simulações travam o avanço até serem respondidos. A página do módulo mostra as aulas como "círculos" de stories. O player fica em `public/assets/stories.js`. Tom Gen Z e limites por card estão em **GUIA-STORIES.md**; `npm run stories` confere as trilhas.

## Rodar e testar localmente

```
npm install
npm test          # 56 de regras, provas, admin e logs + 38 de feed e engajamento + 5 de conteúdo
npm run local     # http://localhost:8888, banco em memória (zera ao reiniciar)
```

## Trilha Grade de Formação e blocos visuais

A trilha **Grade de Formação Mamba** (14 módulos, 68 aulas) traz gráficos, telas desenhadas com pinos e simuladores dentro das aulas (`public/assets/viz.js` e `calc-gf.js`). Tudo explicado em **GUIA-GRADE-DE-FORMACAO.md**. Para conferir uma trilha com visuais obrigatórios: `node scripts/check-stories.mjs public/trilhas/gf/content.js --require-visual`.

## Construtor de trilhas

O gestor cria trilhas dentro da plataforma (módulos, aulas, cards, gráficos, imagens, vídeos por upload, link ou gravação, quizzes e provas) e ativa ou inativa qualquer trilha. Passo a passo em **GUIA-CONSTRUTOR-DE-TRILHAS.md**. Upload e gravação de vídeo precisam do Cloudinary.

## Várias trilhas

Todas as trilhas vivem em `window.TRILHAS` (site) e em `TRAILS` (servidor, `manifest.mjs`). O andamento é por trilha (`progress.trails[id]`): módulos em sequência, prova final e certificado próprios. Reprovar na final zera só a trilha em questão. Usuários, logs e administração são compartilhados; o painel tem seletor de trilha. O certificado de cada trilha é emitido em `#/cert/<trilha>`, e a lista de certificados fica em `#/cert`.

## Feed, XP de engajamento, ranking e busca

A Início (`#/`) é um feed no estilo rede social, com Hype (foguete), comentários, posts de alunos com aprovação do gestor, check-in diário, metas de engajamento no menu de XP (botão no topo, à direita), ranking por engajamento (`#/ranking`), @ de cada pessoa e busca em todo o sistema. As trilhas ficam em `#/trilhas`.

Upload de foto, vídeo e arquivo usa o Cloudinary (variáveis `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`); links funcionam sem nada. **Guia completo: `COMO-CONFIGURAR-FEED-E-UPLOAD.md`.**

## Destaques e Fórum
Destaques (Stories permanentes, só gestor posta, aluno assiste e ganha XP) e Fórum de listas úteis (só aparece na busca para o aluno). Veja `GUIA-DESTAQUES-E-FORUM.md`. A tela inicial agora se chama **Feed** e, no celular, tem menu inferior no estilo Instagram.

## Tags, enquetes, fixados, @, emoji, filtro e sino

- **Tags** (só gestor): **Administração → Tags e moderação** cria, renomeia, troca a cor e apaga tags (até 30). Ao publicar, o gestor escolhe a tag do post. Quem usa o feed filtra clicando na tag (`#/tag/<id>`); na busca há o seletor de tag para buscar só dentro dela. Apagar uma tag solta os posts, que continuam no feed sem tag. Aluno não cria tag.
- **Fixar** (só gestor): marque "Fixar no topo" ao publicar ou use o menu "..." do post. Até 3 posts fixados, sempre no topo da Início.
- **Enquete** (só gestor): botão "Enquete" no publicador. Pode ter várias perguntas (até 6, com 2 a 8 opções cada). Dois formatos: **Aberta** (quem votou vê o percentual) e **Vote aqui / secreta** (quem vota não vê o resultado; só o gestor vê). Cada pessoa vota uma vez por pergunta. O gestor encerra a enquete pelo menu "...".
- **@ e @todos**: ao digitar `@` aparece a lista de pessoas para marcar. `@todos` só funciona para gestor e avisa a equipe inteira (quem entrou depois não recebe avisos antigos).
- **Emoji**: botão de carinha no publicador e nos comentários.
- **Sino**: avisa quando alguém te marca, quando o gestor usa @todos, quando comentam no seu post e quando um post seu é aprovado ou recusado.
- **Filtro de ofensas**: comentários e posts de alunos com xingamento são barrados com aviso (entende "m3rda", "puuuta", "p u t a"; não bloqueia palavras comuns como "computador"). Gestores não passam pelo filtro. Em **Tags e moderação** o gestor liga/desliga o filtro, soma palavras próprias e testa frases.
- **Feed ao vivo**: quem está na Início vê o botão "Mostrar N posts novos" em até 20 segundos depois que alguém publica (ou quando o gestor aprova um post), sem precisar recarregar e sem a tela pular. A checagem só roda com a aba aberta e usa uma chamada leve (`feed/pulse`). Comentários e hypes novos aparecem ao recarregar a lista.
- **Publicador**: fica fechado (só a caixa de texto) até a pessoa clicar nele, para o feed aparecer logo abaixo.
- **Versão**: em **Minha conta → Versão do sistema** aparece a versão do site e a do servidor. Se forem diferentes, o envio ao GitHub ficou incompleto.

## Cadastro com aprovação, foto de perfil e tela Celular/PC

Novos cadastros ficam pendentes até um gestor aprovar em **Aprovações**; o gestor recebe um código de 6 dígitos, entrega à pessoa e ela digita para liberar o acesso (**COMO-FUNCIONA-A-APROVACAO.md**, sem e-mail). Há foto de perfil, GIF grande como vídeo em loop, redução automática de foto e o seletor Celular/Computador (login, menu e Minha conta). Detalhes em `COMO-CONFIGURAR-FEED-E-UPLOAD.md`.

## Desempenho e erros do Netlify Blobs

- O acesso ao Blobs (`netlify/functions/lib/db.mjs`) **nunca fica em cache** entre chamadas: o token que o Netlify entrega expira, e reaproveitá-lo causava o erro "Failed to decode token: Token expired". Cada operação (e cada nova tentativa) pede um acesso novo.
- Cada aluno só grava nas próprias chaves (progresso e tentativas), então centenas de alunos ao mesmo tempo não disputam o mesmo dado.
- O painel de administração lê usuários, progressos e logs em paralelo. Simulado com 150 alunos e 40 ms por operação no banco: Visão geral em cerca de 1 s.
- O navegador tenta de novo, até 2 vezes e com espera aleatória, leituras, login e conclusão de aula quando o servidor falha por instantes.
- **Conferir a versão no ar:** abra `https://SEU-SITE.netlify.app/api/health`. A resposta mostra `"build"` (versão do código publicada) e `"blobs"` (como o banco é acessado). Se `build` não aparecer, o site ainda está com o código antigo.
- **Reserva contra "Token expired" (opcional):** em Netlify > Site configuration > Environment variables, crie `BLOBS_SITE_ID` (o *Site ID*, em Site configuration > General > Site details) e `BLOBS_TOKEN` (um Personal Access Token criado em User settings > Applications). Com as duas, o banco usa essa credencial fixa, que não expira. Faça um novo deploy depois de criar.

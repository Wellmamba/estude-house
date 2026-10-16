# Construtor de trilhas (feito dentro da plataforma)

Agora o gestor cria e edita trilhas direto no site, sem mexer em código. O que fica pronto aparece para os alunos no mesmo player de stories e com a mesma prova, XP e certificado das trilhas que já existiam.

## Onde fica
- Menu lateral (perfil adm): **Gestão de trilhas** (`#/admin/trilhas`).
- Página **Trilhas**: o painel do gestor tem **Criar nova trilha** e **Gerenciar trilhas**.
- Cada trilha tem: chave Ativa/Inativa, **Editar**, **Ver como aluno**, **Duplicar** e **Excluir**.

## Ativar e inativar
- Vale para todas as trilhas, as antigas (PriceBot, Reforma Tributária, Grade) e as criadas aqui.
- Inativa: o aluno não vê a trilha e o servidor recusa aula e prova ("Esta trilha está inativa no momento"). O gestor continua vendo, com a etiqueta "Inativa (só gestor vê)".
- O progresso de quem já fez não se perde; ao reativar, tudo volta como estava.
- As trilhas antigas não podem ser editadas nem excluídas aqui, só ativadas e inativadas.

## Como montar
O editor tem três áreas: **estrutura** (módulos, aulas e cards), **pré-visualização no formato celular (9:16)** e **formulário do card selecionado**.

1. **Criar nova trilha**: nome, descrição e público.
2. Adicione **módulos** e, dentro deles, **aulas**. Cada aula é uma sequência de cards (stories).
3. **+ Adicionar card** abre o catálogo. Setas, duplicar e excluir ficam em cada card.
4. Cada módulo tem a **prova do módulo** (mínimo 3 questões) e a trilha tem a **prova final** (mínimo 5). Dá para colar várias questões de uma vez ("Colar várias de uma vez").
5. **Ver aula como aluno** abre o player de verdade, sem gravar progresso e sem travar o avanço.
6. **Publicar** valida tudo e mostra o que falta. Antes de publicar é rascunho: o aluno só vê a versão publicada.

O rascunho salva sozinho (1,4 s depois da última alteração) e com Ctrl+S. Há desfazer (últimas 25 alterações). Se duas pessoas editam a mesma trilha, o segundo salvamento recebe um aviso de conflito em vez de sobrescrever.

## Cards disponíveis
- **Texto e explicação:** abertura (hook), frase grande, parágrafo, lista, passo a passo, jargão, conta, comparativo, destaque (callout), "diga assim", resumo.
- **Dados:** gráfico (barras, barras horizontais, linha, rosca, empilhado, funil), tabela, fluxo, linha do tempo.
- **Mídia:** imagem, vídeo, **card livre**.
- **Avaliação:** quiz dentro da aula.

### Estilo de qualquer card
Fundo (cores prontas, degradê, cor própria ou imagem com escurecimento), fonte (Padrão, Impacto, Clássica, Máquina, Manuscrita), tamanho, cor do texto, alinhamento e posição vertical.

### Card livre (100% personalizável)
Uma tela em branco com formato à escolha (vertical, retrato, quadrado ou largo). Nela entram **textos, imagens, vídeos, formas e emojis**. Arraste para posicionar, puxe o canto para redimensionar, use as setas do teclado para ajustar fino. Cada camada tem fonte, tamanho, cor, alinhamento, rotação e fundo. Uma guia aparece ao centralizar.

### Vídeos
Três jeitos: **enviar arquivo**, **colar link** (YouTube, Vimeo, Loom, Google Drive ou arquivo mp4) ou **gravar** (câmera ou tela, até 5 minutos). A reprodução começa sozinha quando o card aparece; arquivos tentam tocar com som e, se o navegador barrar, tocam mudos com o botão "Tocar com som".

> **Envio de arquivo e gravação precisam do Cloudinary configurado** (veja `COMO-CONFIGURAR-FEED-E-UPLOAD.md`). Sem ele, o botão avisa e o gestor usa links.

## Segurança do conteúdo
O servidor limpa tudo que o gestor salva: no texto só passam negrito, itálico, sublinhado, marca-texto e quebra de linha; links só `https`; cores só em hexadecimal; fontes só as da lista; tipos de card desconhecidos são descartados. As respostas das provas nunca vão para o navegador do aluno.

## Limites
Até 60 trilhas, rascunho de até 1,8 MB. Os arquivos de mídia ficam no Cloudinary, não no rascunho.

## Para quem mantém o código
- Servidor: `netlify/functions/lib/trails.mjs` (validação, rotas `admin/trails*` e `trails/custom`, dados no Blobs `trails`). Registro de trilhas em `lib/manifest.mjs` (`TRAILS` mutável) e `lib/questions/index.mjs`.
- Navegador: `public/assets/builder.js` (editor), `builder-cards.js` (catálogo e formulários dos cards), `cards.js` (cards de imagem, vídeo e livre, estilo e vídeo com autoplay), `stories.js` (player e pré-visualização).
- **Novo tipo de card:** adicione no catálogo `CARDS` (`builder-cards.js`), em `CARD_TYPES`/`cleanBlock` (`trails.mjs`) e o desenho em `M.blockTypes`. O `npm test` falha se o construtor e o servidor ficarem fora de sincronia.
- CSS novo vai **acima** do marcador `MODO-CELULAR-BEGIN` do `app.css`; depois rode `node scripts/sync-mobile-css.mjs`.
- `BUILD` em `api.mjs` e `M.BUILD` em `lib.js` precisam ser iguais.

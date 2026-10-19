# Trilha "Live Commerce Shopee" (categoria Shopee)

Trilha de código com **17 aulas em 5 módulos**, **prova por módulo** e **prova final** (20 questões). Todos os **15 vídeos** da playlist "Central Shopee Live" (canal Shopee Brasil) entram, cada um em uma aula. Os vídeos são o "como fazer" oficial; a estratégia, os filtros e os casos são **critério de trabalho da Mamba**, e cada aula avisa isso no card.

## Estrutura

| Módulo | Aulas | Vídeos |
|---|---|---|
| 1. Live na Shopee: por que e quando | Por que live vende · Vale fazer live agora? · Afiliados e live | Consultoria Completa |
| 2. Preparar a live | Lembrete e calendário · Produtos e roteiro em blocos · Divulgar e checklist · Ambiente, equipamento e diretrizes | Lembretes, Organizar, Como criar conteúdo, Como preparar, Equipamentos, Diretrizes |
| 3. Ferramentas que geram resultado | Preço de live e cupons · Moedas (orçamento e modos) · Sorteios, enquetes, figurinhas · Moderadores e PC | Preço de Live, Cupons, Moedas, Sorteios, Enquetes, Moderadores |
| 4. Ao vivo e depois | Ler o painel ao vivo · Funil e diagnóstico · Aulão completo e chat pós-live | Performance, Treinamento Completo |
| 5. Estratégia e casos | Plano de 30 dias · 4 casos para decidir · É live ou outro caminho? | — |

A página de afiliados (shopee.com.br/m/afiliados) é a fonte da aula "Afiliados e live".

## O que a trilha ensina além de apertar botão

- **Quando fazer live:** filtro de 6 perguntas (estoque/curva A, margem, preço de live, lembrete de 7 dias, moedas, equipe) com resultado: fazer agora, preparar, esperar calendário ou outro caminho.
- **Conta de margem** do preço de live, com cupom, moedas e comissão de afiliado.
- **Orçamento de moedas** com os exemplos oficiais (100.000 moedas ≈ 1.500 pessoas; 20.000 ≈ 700), modos por meta e automático, e os erros clássicos (meta de likes, montanha-russa).
- **Painel ao vivo:** sinal → ação, e o fechamento nos minutos finais.
- **Funil de ~10%** (cliques → carrinho → pedidos) com os dois diagnósticos.
- **Plano de 30 dias** com a conta do investimento e do ponto de equilíbrio.
- **Casos** (Tênis Norte, Casa Aurora, Vila Pet, Lume Home) e a aula "É live ou outro caminho?".

Nomes de lojas e números dos exemplos são fictícios. Só os exemplos de moedas vêm dos vídeos oficiais.

## Arquivos

- `public/trilhas/live/content.js`: aulas em cards (stories).
- `public/trilhas/live/practice.js`: 3 versões de cada quiz (o aluno recebe outra a cada "tentar de novo").
- `netlify/functions/lib/questions/live-m1…m5.mjs` e `live-final.mjs`: bancos das provas.
- `netlify/functions/lib/manifest.mjs`: lista de módulos e aulas (precisa bater com o `content.js`).
- `public/index.html`: carrega `content.js` e `practice.js` da trilha.
- `test/content.mjs`: confere os 15 vídeos (todos presentes, sem repetir) e um quiz por aula.

## Como mexer

- **Categoria:** a trilha entra na categoria "Shopee" (tag da trilha). O admin pode trocar em *Gerenciar trilhas e categorias*, como em qualquer trilha de código.
- **Trocar texto ou número:** edite o card no `content.js`. Limites de tamanho: `node scripts/check-stories.mjs public/trilhas/live/content.js --require-visual`.
- **Mexer em questões:** `node scripts/check-bank.mjs <arquivo>` confere o equilíbrio das alternativas (a certa não pode se destacar pelo tamanho).
- **Telas e regras da Shopee mudam** (valores de moeda, prazos, comissão). Se a tela divergir dos vídeos, vale a tela e a Central do Vendedor. Revise os números da aula de moedas e da aula de afiliados de tempos em tempos.

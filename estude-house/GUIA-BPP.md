# Trilha Brand Protection Program (Mercado Livre)

Trilha em código (id `bpp`), build `2026-10-19-a`. 10 aulas em 3 módulos, com os **8 vídeos oficiais** da playlist "Brand Protection Program – Tutoriais" (canal Mercado Livre Brasil).

| Módulo | Aulas | Vídeo |
| --- | --- | --- |
| 1 · Conhecendo o BPP | O mapa do BPP em 2 minutos | Funcionalidades da plataforma |
| | Direitos cadastrados: sem isso, nada anda | Como cadastrar seus direitos de PI |
| 2 · Como denunciar, passo a passo | Anúncio tradicional | Como denunciar um anúncio tradicional |
| | Catálogo: três jeitos de denunciar | Como denunciar um anúncio de catálogo |
| | Anúncio agrupado e variações | Agrupado (PDP Flex) + Variações de um anúncio |
| | Sites externos que usam Mercado Pago | Como denunciar sites externos que usam Mercado Pago |
| | Denúncia recusada e canal de suporte | Como usar o canal de suporte |
| 3 · Estratégia: abrir ou não abrir? | O filtro das 6 perguntas | (sem vídeo: método da Mamba) |
| | É caso de BPP ou não? | (4 situações para o aluno se testar) |
| | Casos pra decidir | (3 casos completos com a decisão) |

## O que é oficial e o que é da Mamba
- **Como fazer** (módulos 1 e 2): vem dos vídeos oficiais (descrição e transcrição). Telas e botões do BPP mudam; se a tela divergir, vale a tela e o suporte do BPP. O vídeo do anúncio agrupado quase não tem narração, então a aula usa só o que a descrição dele afirma.
- **Estratégia e casos** (módulo 3): é critério de trabalho da Mamba, e a aula avisa isso. Não é regra do Mercado Livre nem consultoria jurídica. Lojas, marcas e números dos casos são fictícios.

## Arquivos
- `public/trilhas/bpp/content.js` (aulas) e `practice.js` (3 versões de cada quiz).
- `netlify/functions/lib/questions/bpp-m1|m2|m3|final.mjs` (provas dos módulos e final) e `manifest.mjs` (trilha `bpp`, final sorteia 15).
- `public/assets/blocks.js`: o card de vídeo aceita `channel` (antes dizia sempre "Canal oficial da PriceBot").
- `test/content.mjs` confere que os 8 vídeos continuam nas aulas.

Para só mudar um texto, edite `content.js` e rode `node scripts/check-stories.mjs public/trilhas/bpp/content.js`. A trilha entra visível para todos; para limitar a uma turma, use **Quem vê** na Gestão de trilhas.

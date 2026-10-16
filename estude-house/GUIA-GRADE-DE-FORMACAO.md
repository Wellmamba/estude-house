# Trilha "Grade de Formação Mamba"

Trilha completa de formação do assessor e do gestor de performance em marketplaces (Mercado Livre e Shopee), baseada na Grade de Formação Mamba. Tudo em formato **Stories**, com gráficos, telas desenhadas e simuladores dentro das próprias aulas.

- Arquivos: `public/trilhas/gf/content.js` (aulas), `public/trilhas/gf/practice.js` (variações dos quizzes), `netlify/functions/lib/questions/gf-m1.mjs … gf-m14.mjs` e `gf-final.mjs` (provas).
- Tamanho: **14 módulos, 68 aulas, 1.219 cards** (cerca de 8 horas de estudo).
- Provas: cada módulo tem banco de 24 questões (sorteia 12). A prova final sorteia 40 questões: algumas de cada módulo + questões exclusivas (24 no banco `gf-final`).
- Trava sequencial: aluno só abre a aula seguinte depois de concluir a anterior; admin navega livre (regra geral da plataforma).

## Módulos

1. Comece por aqui (a grade, os níveis, como estudar)
2. Base do e-commerce
3. Operação no Mercado Livre
4. Operação na Shopee
5. Anúncios que vendem
6. Fiscal sem medo (educativo; aprofunde na trilha RT)
7. Preço e financeiro
8. Logística e Full
9. Mercado, produto e concorrência
10. Promoções e campanhas
11. Ads no ML e na Shopee
12. Dados, BI e diagnóstico
13. Estratégia e plano de conta
14. Soft skills e comunicação

Cobrem os eixos A–M da grade, os níveis N0–N3 (Trainee, Assessor, Gestor de Performance, Estrategista), a imersão de 15 dias e a avaliação.

## Blocos visuais novos (`public/assets/viz.js`)

Todos funcionam como um card de tela cheia no Stories. Números sempre de exemplo.

**`chart`** — `{ t:"chart", kind, title, data, caption }`
- `bar` e `hbar`: `data:[{label,value,tone}]`, opcional `unit:"R$"|"%"|"x"`.
- `line`: `x:[…]`, `series:[{name,values,tone}]`, opcional `ymin`.
- `donut` e `stack`: `data:[{label,value,tone}]` (rosca mostra o %; `center` troca o texto do meio).
- `waterfall`: primeiro item = ponto de partida, intermediários = variações, último `{type:"total"}`.
- `funnel`: etapas com `value`; mostra o % que avança.
- `pareto` (curva ABC).
- `matrix`: `x`, `y` (nomes dos eixos), `quad:[canto sup. esq., sup. dir., inf. esq., inf. dir.]`, `points:[{label,x,y,tone}]` com x e y de 0 a 10.
- `meter`: `value`, `valueLabel`, `zones:[{label,tone,from,to}]`.
- `tone`: `gold`, `amber`, `mint`, `violet`, `pink`, `sky`, `plum`, `grey`.

**`flow`** — fluxo em passos (`items:[{icon,title,text}]`, `loop:true` fecha o ciclo).
**`table`** — `head`, `rows`, `hl` (linha em destaque).
**`tree`** — `root` e `branches:[{label,items}]` (árvore de diagnóstico).
**`timeline`** — `items:[{when,label,text,tone}]`.
**`stairs`** — escada de níveis `items:[{tag,title,text}]`.

**`anno`** — tela desenhada com pinos clicáveis: `{ t:"anno", preset, title, notes:[…] }`. Presets: `anuncio`, `nfe`, `ads`, `planilha`. O texto de cada pino vem de `notes` (na ordem dos pinos).

**`lab`** — simulador com sliders (resultado, gráfico e veredito ao vivo): `{ t:"lab", preset, title, intro, defaults:{…} }`. Presets: `preco`, `roas`, `promo`, `full`, `regime`, `cobertura`, `pe` (ponto de equilíbrio). `defaults` muda os valores iniciais dos sliders.

Para criar um preset novo de `anno` ou `lab`, copie um existente em `viz.js` (`ANNO` / `LAB_PRESETS`).

## Simuladores de treino (`public/assets/calc-gf.js`)

Bloco `sim` com `kind` novo (rodadas com números que mudam toda vez): `precomin`, `margemcontrib`, `roaseq`, `acostacos`, `promovale`, `pontoeq`, `atacado`, `cobertura`, `dre`, `fullvale`, `modalidade`, `abc`, `hipotese`, `repdiag`, `prioridade`, `adsonde`, `cfop`. Cada gerador devolve pergunta, resposta, tolerância e explicação com a conta.

## Como editar

1. Mexa em `public/trilhas/gf/content.js` (texto, cards, gráficos).
2. Confira: `node scripts/check-stories.mjs public/trilhas/gf/content.js --require-visual` (valida limites de texto, quizzes e exige visuais).
3. Mexeu em questões: `node scripts/check-bank.mjs netlify/functions/lib/questions/gf-m7.mjs`.
4. Rode `npm test` antes de publicar.
5. Se mudar módulos/aulas, atualize também `netlify/functions/lib/manifest.mjs`.

## Avisos importantes

- Valores, taxas, alíquotas e prazos nas contas e gráficos são **exemplos didáticos**. Regras de plataforma e impostos mudam: a fonte final é a documentação oficial da plataforma e o contador do cliente.
- O módulo fiscal é educativo, não é consultoria tributária.

# Formação Mamba (trilhas menores)

A antiga trilha única "Grade de Formação" foi dissolvida em **11 trilhas menores**, na categoria Formação (e Mercado Livre / Shopee nas trilhas de operação). Tudo em formato **Stories**, com gráficos, telas desenhadas e simuladores dentro das aulas.

## Quem faz o quê na Mamba
- **Assessor Estratégico**: responsável pelo desenvolvimento da estratégia da conta.
- **Gestor de Performance**: quem executa a estratégia na conta do cliente.
- São **funções com rotinas diferentes, não fases de carreira**. As duas pessoas estão no mesmo nível de conhecimento e devem dominar a mesma base. Por isso as trilhas servem às duas funções e não há níveis, trainee ou degraus.
- O conteúdo não descreve rotina detalhada de cada função além disso. Se quiser detalhar, edite a aula "Assessor e Gestor de Performance: duas funções" (`gf-l1-1`).

## As 11 trilhas

| Trilha (id) | Módulos | Aulas | Prova final |
|---|---|---|---|
| Fundamentos Mamba e e-commerce (`fund`) | 2 | 8 | 16 |
| Operação no Mercado Livre (`mlop`) | 1 | 5 | 12 |
| Operação na Shopee (`spop`) | 1 | 5 | 12 |
| Anúncios que vendem (`anuncios`) | 1 | 6 | 12 |
| Fiscal sem medo (`fiscal`) | 1 | 6 | 12 |
| Preço e financeiro (`preco`) | 1 | 6 | 12 |
| Logística e Full (`logistica`) | 1 | 6 | 12 |
| Mercado, produto e concorrência (`mercado`) | 1 | 5 | 12 |
| Promoções e Ads (`promoads`) | 2 | 9 | 20 |
| Dados, diagnóstico e plano de conta (`dados`) | 2 | 8 | 20 |
| Comunicação e rotina de trabalho (`comunic`) | 1 | 4 | 12 |

- Arquivos de cada trilha: `public/trilhas/<id>/content.js` (aulas) e `practice.js` (variações dos quizzes).
- Provas: bancos por módulo em `netlify/functions/lib/questions/gf-m1.mjs … gf-m14.mjs`; questões exclusivas das provas finais em `formacao-finais.mjs` (escopo `final-<id>`).
- Os ids de aulas (`gf-lX-Y`) e módulos (`gf-mN`) foram mantidos: o progresso já feito continua. Só os resultados da antiga prova `final-gf` ficam sem uso.
- Categorias: vêm da tag da trilha e o admin muda em "Gerenciar trilhas e categorias".
- Trava sequencial dentro de cada trilha: o aluno só abre a aula seguinte depois de concluir a anterior; admin navega livre.

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

1. Mexa em `public/trilhas/<id>/content.js` (texto, cards, gráficos).
2. Confira: `node scripts/check-stories.mjs public/trilhas/<id>/content.js --require-visual` (valida limites de texto, quizzes e exige visuais).
3. Mexeu em questões: `node scripts/check-bank.mjs netlify/functions/lib/questions/gf-m7.mjs`.
4. Rode `npm test` antes de publicar.
5. Se mudar módulos/aulas, atualize também `netlify/functions/lib/manifest.mjs`.
6. Trilha nova: veja `COMO-ADICIONAR-TRILHA.md`.

## Avisos importantes

- Valores, taxas, alíquotas e prazos nas contas e gráficos são **exemplos didáticos**. Regras de plataforma e impostos mudam: a fonte final é a documentação oficial da plataforma e o contador do cliente.
- A trilha fiscal é educativa, não é consultoria tributária.

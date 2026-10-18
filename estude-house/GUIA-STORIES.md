> Os cards também podem ser montados pelo construtor do site (`GUIA-CONSTRUTOR-DE-TRILHAS.md`), com os mesmos limites de tom e tamanho.

# Guia: reescrever aulas no formato Stories (BRYANT SHOOT · Mamba Digital)

## Contexto
O BRYANT SHOOT agora mostra cada aula como **stories**: cada bloco de `lesson.blocks` vira UM card de tela cheia no celular (390×844), que o aluno avança tocando. Toda aula nova (e toda aula reescrita) segue esse formato e a linguagem Gen Z. O conteúdo atual é a BASE: nada de inventar regra, número ou política; tudo que importa continua, só dissolvido em doses pequenas e dito de forma simples.

Público: colaboradores da Geração Z, de iniciantes (N0) a estrategistas (N3), estudando principalmente no celular. Assessores de marketplace da Mamba Digital (Mercado Livre e Shopee).

## Voz
- Linguagem atual, direta e leve. Fala com "você". Frases curtas (em média 12 palavras; nunca mais de 24).
- Pode usar: "bora", "pra", "tá", "tipo", "na real", "saca?", "de boa", "bagunça", "zerar", "rolar", "bater a meta". Pouco e natural: nada de forçar gíria, meme datado ou "mano" em toda frase. Sem ofensa, sem sarcasmo com o aluno. É um treinamento de trabalho: leve, mas profissional.
- Emoji: no máximo 1 por card, só em `hook`, `big` e `say`. Nunca em quiz, alternativas, conta ou recap.
- **Todo termo técnico é traduzido na hora** (ACOS, ROAS, NCM, Full, Flex, MLB, SKU, PMA, rebate, take rate, buybox, catálogo, alíquota, split payment…). Na primeira vez que aparece na aula: ou vira um card `jargon` (o termo grande + "em português" + exemplo), ou vem com a tradução entre parênteses: "ACOS (quanto você gasta de Ads pra cada R$ 1 vendido)". Se o termo já foi traduzido numa aula anterior do mesmo módulo, traduza de novo em poucas palavras (aluno pode entrar direto numa aula).
- Nada de leitura densa. Conteúdo difícil vem **em doses pequenas, com exemplo de conta real**: ideia (1 card) → conta com números (card `conta`) → regra de bolso (1 card).
- Sem “Prezado”, sem “conforme”, “outrossim”, “portanto”, “ademais”, “visando”, “destarte”. Sem texto de aula de faculdade.

## Tipos de card (cada item de `blocks` = 1 card) e limites (o verificador cobra)
- `{ t:"hook", emoji, title, text }` **primeiro card da aula, obrigatório**. title: 1 a 9 palavras, chamativo e claro. text: ≤ 28 palavras, diz o que a pessoa leva da aula.
- `{ t:"big", emoji, html, sub }` frase de impacto (≤ 18 palavras; `<b>` destaca a palavra-chave em dourado) + sub opcional (≤ 18). Use pra ideia central, virada, "pegadinha".
- `{ t:"p", title?, html }` texto curto: ≤ 48 palavras, frases ≤ 24 palavras. `title` opcional (≤ 8 palavras) vira o título do card.
- `{ t:"list", title?, items:[…] }` até 5 itens, cada um ≤ 15 palavras.
- `{ t:"steps", items:[{title, html}] }` até 4 passos, cada passo ≤ 26 palavras (título + texto). Mais passos? Quebre em 2 cards.
- `{ t:"compare", left:{title,tone,items}, right:{title,tone,items} }` até 4 itens por lado, ≤ 13 palavras cada. tone "good" (verde) ou "bad" (rosa).
- `{ t:"callout", tone:"dica|atencao|exemplo|regra", title, html }` ≤ 48 palavras.
- `{ t:"say", title, html }` "Fala assim com o cliente/seller": ≤ 42 palavras, entre aspas “ ”.
- `{ t:"jargon", term, means, ex, tag? }` termo traduzido na hora. term: o termo/sigla (curto, aparece GIGANTE); means: o que é em português claro (≤ 24 palavras, `<b>` permitido); ex: exemplo curto do dia a dia (≤ 26 palavras). tag opcional (padrão "Traduzindo na hora").
- `{ t:"conta", title, rows:[[rótulo, valor, "neg"|"pos"?], …], total:[rótulo, valor], note? }` conta real com números: até 7 linhas; "neg" pinta o valor de vermelho (custos, descontos), "pos" de verde. total aparece grande em dourado. **Confira a aritmética: os números têm que fechar.** Use valores plausíveis (preço R$ 89,90, comissão, frete, custo…), nunca de cliente real.
- `{ t:"recap", title?, items:[3 a 5 itens ≤ 12 palavras] }` **último card da aula, obrigatório** ("Guarda isso").
- `{ t:"quiz", q, options, answer:[i], why, multi? }` mantenha os quizzes (veja regras abaixo).
- Tipos interativos que você só **repassa** (podem ter títulos/intros/legendas reescritos no tom novo, mas o resto não muda): `sim` (kind, title, intro, rounds), `find`, `video` (id, title, dur, note), `ruler`, `shot`.
- `{ t:"term", items }` (antigo): só até 3 itens, def ≤ 24 palavras. Prefira `jargon`.
- **Não existe mais** o bloco `h` (use `title` em p/list).

Uma aula tem de **10 a 24 cards** (incluindo hook e recap), `minutes` entre 2 e 8 (≈ 20 s por card). Se a aula original era enorme, são mais cards, não cards maiores.

## Regras de preservação (o verificador compara com o original)
1. **Mesmos ids** de módulo e de aula. Título da aula novo: curto (≤ 8 palavras), claro e com cara de story ("O mapa do portal em 3 min" é ok; "Quem manda no preço" é ok). `goal`: 1 frase ≤ 22 palavras, "Saber…/Entender…/Conseguir…". Módulo: `title` ≤ 7 palavras, `tagline` ≤ 18 palavras, `outcome` 1 frase.
2. **Quizzes**: mesma quantidade, mesma ordem, mesmo nº de alternativas, mesmo `multi` e mesmo nº de respostas certas. Reescreva `q`, alternativas e `why` no tom novo, mas **o significado/gabarito continua o mesmo** (as variantes de prática dessa aula foram escritas para esse conceito). Regras de alternativas: a maior ≤ 1,45× a menor, a certa não pode ser a mais longa por mais de 15%, sem emoji. Se reordenar alternativas, atualize `answer`. Posição do quiz dentro da aula: depois da explicação do conceito que ele cobra.
3. `sim`: mesma sequência de `kind` do original. `video`: mesmos ids. `find`: mesmos. `shot`: mesma tela (`tela`); **no máximo 4 áreas por card** — divida uma tela com muitas áreas em 2–3 cards de `shot` (cada um com `title` próprio e 1 frase de `caption` ≤ 30 palavras) para que todas as áreas do original continuem aparecendo em algum card. `shot` sempre com `spots` explícito.
4. Nada de fato novo: não acrescente regras, números reais, prazos, políticas de plataforma ou comparações que o conteúdo original não tem. Pode (e deve) criar exemplos de conta com números fictícios coerentes com as regras da aula, e explicações de termos que o texto já usa. Se algo no original está incerto/volátil (principalmente na trilha de Reforma Tributária: datas "em 15/10/2026", "estimativa", "quem decide é o contador"), mantenha a ressalva.
5. Conteúdo de PriceBot: continua sendo sobre a ferramenta PriceBot; mantenha nomes de telas e botões exatamente como no original.

## Receita de uma boa aula (exemplo pronto)
Leia a aula `rt-l1-1` em public/trilhas/rt/content.js (já no formato novo): hook → ideia central (big) → lista curta → big de virada → 2 jargons → p curto → compare → callout de aviso → say → quiz → recap.
Ritmo: alterne tipos de card (não faça 5 `p` seguidos). Termine cada conceito difícil com "regra de bolso". Comece o módulo de forma que dê vontade de ver o próximo card ("Você sabe por que sua margem some? Bora ver.").

## Verificação
Depois de escrever as aulas no `content.js` da trilha, rode na raiz do projeto:
`node scripts/check-stories.mjs public/trilhas/<trilha>/content.js` (ou `npm run stories` para as trilhas atuais) e corrija até aparecer "✓ ok".
Para reescrever uma trilha já publicada sem perder quizzes/simulações, gere antes um retrato do original e use `--base retrato.json`.

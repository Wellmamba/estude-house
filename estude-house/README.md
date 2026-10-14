# Estude House — ambiente de estudos da Mamba Digital

Plataforma de treinamento da Mamba Digital. A primeira trilha ensina a PriceBot do zero até ensinar a ferramenta a outra pessoa: 7 módulos, 33 aulas, 13 vídeos do canal oficial (youtube.com/@pricebot), 41 quizzes e 12 simulações com números sorteados dentro das aulas, 24 telas reais do portal da PriceBot com marcações explicadas, 7 provas de módulo e uma prova final (153 questões no banco, sorteadas e embaralhadas a cada tentativa). O módulo 1 ("Conheça o sistema") ensina o portal com os prints da PriceBot, sem exercícios espalhados: ele termina com um único quiz completo da ferramenta (prova de 15 questões que sempre passa pelas 9 áreas do portal).

## Como publicar no Netlify (com Git)

1. Crie um repositório (GitHub, GitLab ou Bitbucket) e suba esta pasta inteira.
2. No Netlify: **Add new site → Import an existing project** e escolha o repositório. O `netlify.toml` já define a pasta publicada (`public`) e as Functions (`netlify/functions`). Não precisa de comando de build.
3. Em **Site configuration → Environment variables**, crie:

| Variável | Obrigatória | Para quê |
|---|---|---|
| `JWT_SECRET` | sim | Texto longo e aleatório (32+ caracteres). Assina as sessões. Se trocar, todo mundo precisa entrar de novo. |
| `ADMIN_EMAILS` | não | E-mails separados por vírgula que são administradores master. Padrão: `wellington.moreira@mambadigital.com.br`. |
| `ALLOWED_DOMAINS` | não | Ex.: `mambadigital.com.br`. Se preenchida, só e-mails desses domínios podem se cadastrar sozinhos. Administradores criam acessos de qualquer domínio. |

4. Faça o deploy. O banco (Netlify Blobs) é ativado sozinho, sem configuração.
5. Abra o site, vá em **Criar conta** com `wellington.moreira@mambadigital.com.br` e uma senha. Esse e-mail vira administrador master automaticamente.

Importante: arrastar a pasta no Netlify Drop **não** serve, porque Functions e Blobs exigem deploy por Git (ou pela CLI `netlify deploy`).

## Como funciona

- **Cadastro e login:** nome, e-mail e senha digitada duas vezes. Senha com 8+ caracteres, letras e números. 5 erros seguidos bloqueiam o login por 10 minutos.
- **Trilha:** módulos em sequência. A prova do módulo libera quando todas as aulas estão concluídas (cada aula exige responder os quizzes). O módulo seguinte libera com a aprovação. A prova final libera após os 7 módulos. O certificado, com código de verificação, sai após a final.
- **Regra das provas (corrigidas no servidor):**
  - até 70%: reprovado. Refaz as aulas do módulo e a prova (na final, a trilha inteira).
  - acima de 70% até 90%: refaz só as questões erradas, quantas vezes precisar.
  - acima de 90%: aprovado. Vê o que errou e a resposta certa, sem refazer.
- **Administração (perfil adm, igual ao master):** painel com funil, lista de acessos, criar acesso individual ou subir lista (colar nome, e-mail, senha e perfil), definir aluno ou adm, desativar, redefinir senha, zerar progresso (tudo ou um módulo), remover, logs com filtro e o banco de questões com gabarito. O acesso master não pode ser rebaixado, desativado ou removido.
- **Logs:** cadastro, login (inclusive falhas), aulas, provas e toda ação de administrador, com data, e-mail e IP.

## Como adicionar conteúdo

- Aulas: `public/assets/content.js` (blocos `p`, `h`, `list`, `callout`, `video`, `steps`, `compare`, `say`, `term`, `ruler`, `quiz`, `shot` e `find` para telas do portal, e `sim` para simulações com números sorteados, em `calc.js`).
- Telas do portal e áreas clicáveis: `public/assets/screens.js` (imagens em `public/assets/img/sistema/`).
- Versões dos quizzes das aulas: `public/assets/practice/m1.js` a `m6.js`. A cada "tentar de novo" o aluno recebe outra pergunta, com as alternativas embaralhadas.
- Questões: `netlify/functions/lib/questions/` (`m0` a `m6` e `final`).
- Estrutura e tamanho das provas: `netlify/functions/lib/manifest.mjs`.
- Depois de mudar, rode `npm test`: ele confere o banco de questões, o currículo, as telas, as simulações e as regras de aprovação. Para checar o equilíbrio de um arquivo de questões (alternativas de tamanho parecido): `node scripts/check-bank.mjs <arquivo>`.

## Rodar e testar localmente

```
npm install
npm test          # 44 verificações de regras, provas, admin e logs + 5 de conteúdo
npm run local     # http://localhost:8888, banco em memória (zera ao reiniciar)
```

## Próximas formações

O currículo vive em `window.CURSO`. Para uma segunda formação, o caminho é registrar outro curso (conteúdo, manifesto e banco de questões) e listar os cursos na tela inicial. A estrutura de usuários, logs e administração já é compartilhada.

## Desempenho e erros do Netlify Blobs

- O acesso ao Blobs (`netlify/functions/lib/db.mjs`) **nunca fica em cache** entre chamadas: o token que o Netlify entrega expira, e reaproveitá-lo causava o erro "Failed to decode token: Token expired". Cada operação (e cada nova tentativa) pede um acesso novo.
- Cada aluno só grava nas próprias chaves (progresso e tentativas), então centenas de alunos ao mesmo tempo não disputam o mesmo dado.
- O painel de administração lê usuários, progressos e logs em paralelo. Simulado com 150 alunos e 40 ms por operação no banco: Visão geral em cerca de 1 s.
- O navegador tenta de novo, até 2 vezes e com espera aleatória, leituras, login e conclusão de aula quando o servidor falha por instantes.

# Cadastro com aprovação e código de ativação

Não usa e-mail. Quem decide é um gestor, e quem entrega o código é o gestor.

## Passo a passo

1. A pessoa cria a conta na tela de login (nome, e-mail e senha). Ela **não entra**: aparece "Cadastro recebido, aguarde a aprovação".
2. O gestor abre **Aprovações → Cadastros novos** (o número no menu mostra quantos esperam) e clica em **Aprovar** (ou **Recusar**).
3. Ao aprovar, abre uma janela com um **código de 6 dígitos**. O gestor copia e entrega à pessoa (pessoalmente, WhatsApp, Slack).
4. A pessoa abre a tela de entrada, toca em **Tenho um código de ativação**, digita o **e-mail do cadastro** e o **código**.
5. O acesso é liberado. Ela entra com o e-mail e a senha que escolheu no cadastro.

## Regras de segurança

- O código vale **48 horas** e **só funciona uma vez**.
- Depois de **5 tentativas erradas** o código é bloqueado. O gestor gera outro.
- O código **não fica guardado** em lugar nenhum (só uma versão criptografada). Se o gestor fechar a janela sem copiar, é só usar **Gerar novo código**; o anterior deixa de valer.
- Quem ainda não ativou não consegue entrar nem aparece no ranking ou na busca.
- **Recusar** bloqueia o cadastro. O gestor pode voltar atrás e aprovar depois, ou remover o cadastro para a pessoa tentar de novo.
- Os e-mails de administrador master (`ADMIN_EMAILS`) entram direto, sem fila. Acessos criados por um gestor em **Acessos** já nascem ativos. Quem já tinha conta continua entrando normalmente.
- Limite de 8 cadastros por hora por endereço de internet, para barrar robôs.

## Desligar a aprovação (se precisar)

No Netlify, crie a variável `SIGNUP_APPROVAL` com o valor `off` e faça um novo deploy: o cadastro volta a liberar na hora. Apague a variável para religar.

## Nos logs

`cadastro_pendente`, `cadastro_aprovado`, `cadastro_novo_codigo`, `cadastro_recusado`, `cadastro_removido` e `cadastro_ativado`.

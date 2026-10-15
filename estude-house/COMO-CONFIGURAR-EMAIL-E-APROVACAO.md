# Cadastro com aprovação e e-mail de ativação: como funciona e como configurar

## Como funciona (resumo)

1. A pessoa cria a conta na tela de login. Ela **não entra**: aparece "Cadastro recebido, aguarde a aprovação".
2. O gestor abre **Aprovações → Cadastros novos** e clica em **Aprovar** (ou **Recusar**).
3. Ao aprovar, o sistema envia um **e-mail com um link e um código de 6 dígitos**. Vale **48 horas**.
4. A pessoa clica no link do e-mail (ou, na tela de login, usa **"Recebi um código de ativação"** e digita e-mail + código).
5. O acesso é ativado. Aí ela entra normalmente com o e-mail e a senha que escolheu no cadastro.

Regras de segurança:

- O link e o código são aleatórios e guardados só em forma criptografada (ninguém consegue ler no banco).
- O código aceita **5 tentativas erradas**; depois disso só o link funciona (ou o gestor reenvia).
- **Reenviar** gera um link novo e cancela o anterior. **Recusar** bloqueia o cadastro.
- Quem ainda não foi ativado não consegue entrar nem aparecer no ranking ou na busca.
- Os e-mails de administrador master (`ADMIN_EMAILS`) não passam pela aprovação. Acessos criados por um gestor em **Acessos** já nascem ativos. Quem já tinha conta antes continua entrando normalmente.
- Limite de 8 cadastros por hora por endereço de internet, para barrar robôs.

## Se o e-mail NÃO estiver configurado

Funciona do mesmo jeito, só que manual: ao clicar em **Aprovar**, abre uma janela com o **link** e o **código**, com botões de copiar. Você manda para a pessoa pelo WhatsApp ou e-mail. Dá para começar assim e configurar o e-mail depois.

## Configurar o envio de e-mail (Google, sem custo)

O sistema usa um mini-programa (Google Apps Script) na sua conta Google, que envia o e-mail pelo seu Gmail ou Google Workspace. Não precisa de serviço pago.

**Limite de envios do Google:** cerca de 100 e-mails por dia em conta Gmail comum e cerca de 1.500 por dia no Google Workspace. Para cadastros de um time, é mais que suficiente.

### Passo 1: criar o script

1. Abra **script.google.com**, logado na conta que vai enviar os e-mails (o e-mail aparece como remetente).
2. Clique em **Novo projeto**. Apague o que estiver no editor e cole o código abaixo.
3. Na linha `const SECRET`, troque o texto por uma senha longa inventada por você (20+ caracteres, letras e números). Guarde-a, você vai usar no Netlify.
4. Clique em **Salvar** (ícone de disquete). Dê o nome "Estude House e-mail".

```javascript
const SECRET = "TROQUE-POR-UMA-SENHA-LONGA-SUA";

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.secret !== SECRET) return out({ ok: false, error: "secret" });
    const to = String(d.to || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(to)) return out({ ok: false, error: "destinatario invalido" });
    MailApp.sendEmail({
      to: to,
      subject: String(d.subject || "Estude House"),
      htmlBody: String(d.html || ""),
      body: String(d.text || ""),
      name: String(d.name || "Estude House"),
    });
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
```

### Passo 2: publicar

1. Clique em **Implantar → Nova implantação**.
2. Na engrenagem, escolha o tipo **App da Web**.
3. **Executar como:** Eu (seu e-mail). **Quem pode acessar:** Qualquer pessoa.
4. Clique em **Implantar**. O Google pede autorização: **Autorizar acesso**, escolha sua conta, **Avançado → Acessar (não seguro) → Permitir**. É normal, o script é seu.
5. Copie o **URL do app da Web** (termina em `/exec`).

Seguro: mesmo com "Qualquer pessoa", só quem souber a senha do `SECRET` consegue mandar e-mail por ele.

### Passo 3: variáveis no Netlify

No Netlify: **Site configuration → Environment variables → Add a variable**.

| Variável | Valor | Obrigatória |
|---|---|---|
| `EMAIL_WEBHOOK_URL` | o URL `/exec` do passo 2 | sim |
| `EMAIL_WEBHOOK_SECRET` | a mesma senha do `SECRET` do script | sim |
| `EMAIL_FROM_NAME` | nome que aparece como remetente, ex.: Estude House | não |
| `SITE_URL` | endereço do site, ex.: `https://seu-site.netlify.app` (sem barra no final). Garante que o link do e-mail aponte para o endereço certo | recomendada |

Na variável `EMAIL_WEBHOOK_SECRET`, marque **Contains secret values**. Como o Netlify pede um valor por contexto, preencha **Production, Deploy Previews, Branch deploys e Preview Server** com a mesma senha.

### Passo 4: novo deploy e teste

1. **Deploys → Trigger deploy → Deploy site**.
2. Crie uma conta de teste com um e-mail seu (outro que não seja o master) e aprove em **Aprovações**.
3. O aviso "e-mail enviado" aparece e a mensagem chega na caixa de entrada (olhe o spam na primeira vez).

Se o envio falhar, a janela com link e código aparece junto com o motivo, e você entrega manualmente. Motivos comuns: senha diferente nos dois lados, URL que não termina em `/exec`, ou implantação com acesso diferente de "Qualquer pessoa". Se você editar o código do script depois, use **Implantar → Gerenciar implantações → editar → Nova versão**; senão o URL continua com o código antigo.

## Desligar a aprovação (se precisar)

Crie a variável `SIGNUP_APPROVAL` com o valor `off` e faça um novo deploy: voltam a valer cadastros liberados na hora. Apague a variável para religar.

## Conferência rápida

- Aprovações mostra o número de cadastros esperando no menu e na Início.
- **Acessos** lista só quem já está ativo. Quem espera ou foi recusado fica só em Aprovações; dá para remover da lista pelo botão de apagar.
- Logs registram `cadastro_pendente`, `cadastro_aprovado`, `cadastro_reenviado`, `cadastro_recusado`, `cadastro_removido` e `cadastro_ativado`.

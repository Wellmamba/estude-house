// Envio de e-mail. O Netlify não envia e-mail sozinho: usamos um "portão" no Google Apps Script
// (veja COMO-CONFIGURAR-EMAIL-E-APROVACAO.md). Variáveis: EMAIL_WEBHOOK_URL, EMAIL_WEBHOOK_SECRET e, se quiser, EMAIL_FROM_NAME.

let injected = null;
export function setMailer(fn) { injected = fn; } // usado só nos testes

export const mailerOn = () => !!(injected || (process.env.EMAIL_WEBHOOK_URL && process.env.EMAIL_WEBHOOK_SECRET));

export async function sendMail({ to, subject, html, text }) {
  if (injected) return injected({ to, subject, html, text });
  const url = process.env.EMAIL_WEBHOOK_URL, secret = process.env.EMAIL_WEBHOOK_SECRET;
  if (!url || !secret) return { ok: false, error: "O envio de e-mail ainda não foi configurado." };
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 15000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ secret, to, subject, html, text, name: process.env.EMAIL_FROM_NAME || "Estude House" }),
      redirect: "follow",
      signal: ctl.signal,
    });
    const raw = await res.text();
    let j;
    try { j = JSON.parse(raw); } catch { return { ok: false, error: "O serviço de e-mail respondeu algo inesperado. Confira se a implantação do Apps Script está com acesso para \"Qualquer pessoa\"." }; }
    return j.ok ? { ok: true } : { ok: false, error: j.error === "secret" ? "A senha do serviço de e-mail não confere (EMAIL_WEBHOOK_SECRET)." : String(j.error || "O envio falhou.").slice(0, 160) };
  } catch (e) {
    return { ok: false, error: e.name === "AbortError" ? "O serviço de e-mail demorou demais para responder." : "Não consegui falar com o serviço de e-mail." };
  } finally {
    clearTimeout(timer);
  }
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// E-mail de acesso aprovado: botão com o link e o código de 6 dígitos (valem os dois).
export function inviteMail({ name, link, code, hours }) {
  const first = esc(String(name || "").trim().split(/\s+/)[0] || "");
  const subject = "Seu acesso à Estude House foi aprovado";
  const text = [
    `Olá${first ? ", " + String(name).trim().split(/\s+/)[0] : ""}!`,
    "",
    "Seu cadastro na Estude House (Mamba Digital) foi aprovado.",
    "Para ativar o acesso, use UMA destas duas opções:",
    "",
    `1) Abra este link: ${link}`,
    `2) Ou, na tela de entrada, escolha "Tenho um código" e digite: ${code}`,
    "",
    `O link e o código valem por ${hours} horas e só funcionam uma vez.`,
    "Se você não pediu este cadastro, ignore esta mensagem.",
  ].join("\n");
  const html = `<!doctype html><html><body style="margin:0;background:#150b2b;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#f5f1ff">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
<table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px;background:#241448;border:1px solid #4a2f86;border-radius:16px;overflow:hidden">
<tr><td style="background:#552583;padding:20px 28px;font-size:22px;font-weight:bold;color:#fdb927;letter-spacing:.5px">Estude House</td></tr>
<tr><td style="padding:28px">
<p style="margin:0 0 12px;font-size:18px;font-weight:bold">Olá${first ? ", " + first : ""}! Seu acesso foi aprovado.</p>
<p style="margin:0 0 22px;line-height:1.55;color:#d9d0f2">Para ativar, clique no botão. Se preferir, use o código na tela de entrada.</p>
<p style="margin:0 0 24px"><a href="${esc(link)}" style="display:inline-block;background:#fdb927;color:#1a0f2e;text-decoration:none;font-weight:bold;padding:14px 26px;border-radius:999px">Ativar meu acesso</a></p>
<p style="margin:0 0 6px;color:#bcb0dc;font-size:14px">Seu código de ativação:</p>
<p style="margin:0 0 22px;font-size:32px;font-weight:bold;letter-spacing:8px;color:#fdb927">${esc(code)}</p>
<p style="margin:0 0 6px;color:#bcb0dc;font-size:13px;line-height:1.5">O link e o código valem por ${hours} horas e só funcionam uma vez. Se o botão não abrir, copie este endereço no navegador:<br><span style="word-break:break-all;color:#9b7bff">${esc(link)}</span></p>
<p style="margin:18px 0 0;color:#8f82b6;font-size:12px">Se você não pediu este cadastro, ignore esta mensagem.</p>
</td></tr></table></td></tr></table></body></html>`;
  return { subject, html, text };
}

// Agenda do Netlify (dias úteis, horário de Brasília):
//   09h  lembra do check-in (e, na segunda, manda o resumo da semana)
//   14h  mensagem do dia, com uma curiosidade diferente a cada dia (veja lib/daily.mjs)
//   18h  avisa quem pode perder a sequência
import * as jobs from "./lib/push-jobs.mjs";

export default async () => {
  const d = new Date();
  const utcHour = d.getUTCHours();
  const monday = d.getUTCDay() === 1;
  const out = [];
  if (utcHour < 15) { out.push(await jobs.run("checkin")); if (monday) out.push(await jobs.run("weekly")); }
  else if (utcHour < 19) out.push(await jobs.run("daily"));
  else out.push(await jobs.run("streak"));
  console.log("lembretes:", JSON.stringify(out));
  return new Response(JSON.stringify(out), { headers: { "content-type": "application/json" } });
};

export const config = { schedule: "0 12,17,21 * * 1-5" };

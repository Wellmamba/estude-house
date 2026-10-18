// Agenda do Netlify: 09h de Brasília (12h UTC) lembra do check-in (e, na segunda, manda o resumo da semana);
// 18h (21h UTC) avisa quem pode perder a sequência. Só dias úteis.
import * as jobs from "./lib/push-jobs.mjs";

export default async () => {
  const utcHour = new Date().getUTCHours();
  const monday = new Date().getUTCDay() === 1;
  const out = [];
  if (utcHour < 16) { out.push(await jobs.run("checkin")); if (monday) out.push(await jobs.run("weekly")); }
  else out.push(await jobs.run("streak"));
  console.log("lembretes:", JSON.stringify(out));
  return new Response(JSON.stringify(out), { headers: { "content-type": "application/json" } });
};

export const config = { schedule: "0 12,21 * * 1-5" };

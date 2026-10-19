// Lembretes automáticos (rodam pela agenda do Netlify, veja push-lembretes.mjs). Só vão para alunos com aviso ativo
// e que não desligaram a categoria. Cada um recebe no máximo um lembrete de cada tipo por dia.
import { store, pmap } from "./db.mjs";
import { now, dayKey, addDays } from "./clock.mjs";
import * as push from "./push.mjs";
import * as eng from "./engage.mjs";

const pm = (l, f) => pmap(l, f, 32); // 32 pessoas ao mesmo tempo (a agenda do Netlify tem 30 s)
const inv = (ts) => String(9e12 - ts).padStart(13, "0");

async function students() {
  const ids = await push.subscribedUserIds();
  const us = await store("users");
  return (await pmap(ids, (id) => us.get("u:" + id))).filter((u) => u && eng.earns(u));
}

export async function run(kind) {
  const day = dayKey();
  const list = await students();
  let people = 0;
  const give = async (u, payload, cat) => { const r = await push.sendTo(u.id, payload, { cat, throttle: 20 * 3600e3 }); if (r.sent) people++; };

  if (kind === "checkin") {
    await pm(list, async (u) => {
      const e = await eng.loadEng(u.id);
      if (e.lastCheckin === day) return;
      const s = eng.effectiveStreak(e, day);
      await give(u, {
        title: "Faça o seu check-in de hoje ⚡",
        body: s > 0 ? `Você está com ${s} ${s === 1 ? "dia" : "dias"} de sequência. Mantenha o ritmo e ganhe XP.` : "Leva 5 segundos e já rende XP. Dias seguidos dão bônus.",
        url: "/#/", tag: "checkin",
      }, "lembretes");
    });
  } else if (kind === "streak") {
    await pm(list, async (u) => {
      const e = await eng.loadEng(u.id);
      if (e.lastCheckin !== addDays(day, -1) || e.streak < 1) return;
      await give(u, {
        title: `Sua sequência de ${e.streak} ${e.streak === 1 ? "dia" : "dias"} termina hoje 🔥`,
        body: "Faça o check-in antes da meia-noite para não perder.",
        url: "/#/", tag: "streak",
      }, "lembretes");
    });
  } else if (kind === "weekly") {
    const f = await store("feed");
    const cut = `pub:${inv(now() - 7 * 864e5)}:`;
    const n = (await f.keys({ prefix: "pub:", limit: 300 })).filter((k) => k < cut).length;
    await pm(list, (u) => give(u, {
      title: "Resumo da semana 🏆",
      body: n ? `O time publicou ${n} ${n === 1 ? "post" : "posts"} nos últimos 7 dias. Veja quem lidera o ranking e comece a semana participando.` : "Semana nova no BRYANT SHOOT. Que tal abrir com um post ou uma aula?",
      url: "/#/ranking", tag: "weekly",
    }, "resumo"));
  }
  return { kind, people, considered: list.length };
}

// Reels: vídeos dos posts e dos destaques dos últimos 30 dias, num formato vertical de um por vez.
// O servidor só junta e descreve os vídeos; a ordem (novos primeiro, o resto aleatório) é feita no aparelho de cada pessoa.
import { store, pmap } from "./db.mjs";
import { now } from "./clock.mjs";
import { views } from "./social.mjs";
import * as destaques from "./destaques.mjs";
import { pickVideo } from "./videos.mjs";
export { pickVideo, videoLink } from "./videos.mjs";

export const WINDOW_DAYS = 30;
const DAY = 86400e3;
const MAX_POSTS = 120, MAX_ITEMS = 60, FRESH_HOURS = 72;

const snip = (t) => String(t || "").replace(/\s+/g, " ").trim().slice(0, 180);

export async function collect(ctx, user, t = now()) {
  const cutoff = t - WINDOW_DAYS * DAY;
  const f = await store("feed");
  const keys = await f.keys({ prefix: "pub:", limit: MAX_POSTS });
  const docs = (await pmap(keys, (k) => f.get(k))).filter((d) => d && d.status === "published" && (d.publishedAt || d.createdAt) >= cutoff);
  const withVideo = docs.map((d) => ({ d, v: pickVideo(d.media) })).filter((x) => x.v);
  const postViews = withVideo.length ? await views(ctx, withVideo.map((x) => x.d), user) : [];
  const items = withVideo.map((x, i) => {
    const p = postViews[i];
    const at = x.d.publishedAt || x.d.createdAt;
    return {
      id: "p:" + p.id, source: "post", postId: p.id, video: x.v, text: snip(p.text), author: p.author, at,
      fresh: t - at < FRESH_HOURS * 3600e3, hypes: p.hypes || 0, comments: p.comments || 0, hyped: !!p.hyped, kind: p.kind || null,
    };
  });

  /* vídeos de destaques no ar (o aluno só vê os que ainda não venceram) */
  const dst = (await destaques.recentDocs()).filter((d) => d.createdAt >= cutoff && destaques.liveNow(d, t));
  for (const d of dst) {
    for (let i = 0; i < (d.slides || []).length; i++) {
      const s = d.slides[i];
      if (s.media?.type !== "video" || /\.gif($|\?)/i.test(s.media.url || "")) continue;
      const au = await ctx.loadUser(d.authorId);
      items.push({
        id: `d:${d.id}:${i}`, source: "destaque", destaqueId: d.id, video: { type: "video", url: s.media.url }, text: snip(s.text || d.title), at: d.createdAt,
        author: au ? { id: au.id, name: au.name, nickname: au.nickname || null, avatar: au.avatar || null, role: au.role } : { id: d.authorId, name: "Gestor", nickname: null, avatar: null, role: "admin" },
        fresh: t - d.createdAt < FRESH_HOURS * 3600e3, hypes: 0, comments: 0, hyped: false, kind: null, title: d.title,
      });
      break; // um vídeo por destaque basta
    }
  }
  items.sort((a, b) => b.at - a.at);
  return items.slice(0, MAX_ITEMS);
}

export async function handle(ctx, { method, path, user }) {
  if (path === "reels" && method === "GET") {
    const items = await collect(ctx, user);
    return ctx.json({ items, days: WINDOW_DAYS, maxSeconds: 30, freshHours: FRESH_HOURS, at: now() });
  }
  return null;
}

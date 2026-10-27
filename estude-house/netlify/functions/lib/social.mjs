// Foto de perfil (Cloudinary), sino de notificações e busca no fórum.
// O Feed social, os Reels, os Destaques, as comunidades por time e o engajamento (XP/ranking) saíram do sistema:
// o foco agora é Trilhas, Fórum e Busca.
import crypto from "node:crypto";
import { store, pmap, cached, bust as dbBust } from "./db.mjs";
import { now } from "./clock.mjs";
import * as notify from "./notify.mjs";
import * as forum from "./forum.mjs";

const memo = (key, ttl, fn) => cached("s:" + key, ttl, fn);

/* ---------- envio de arquivos (Cloudinary) ---------- */
const cloud = () => ({ name: process.env.CLOUDINARY_CLOUD_NAME || "", key: process.env.CLOUDINARY_API_KEY || "", secret: process.env.CLOUDINARY_API_SECRET || "" });
export const uploadsOn = () => { const c = cloud(); return !!(c.name && c.key && c.secret); };

// Só estes tipos de arquivo entram no Cloudinary da empresa (nada de página, script ou executável).
export const UPLOAD_FORMATS = "jpg,jpeg,png,gif,webp,avif,heic,heif,bmp,tif,tiff";
function signUpload() {
  const c = cloud();
  const params = { allowed_formats: UPLOAD_FORMATS, folder: "estude-house", timestamp: Math.floor(Date.now() / 1000) };
  const toSign = Object.keys(params).sort().map((k) => `${k}=${params[k]}`).join("&");
  const signature = crypto.createHash("sha1").update(toSign + c.secret).digest("hex");
  return { cloudName: c.name, apiKey: c.key, ...params, signature, url: `https://api.cloudinary.com/v1_1/${c.name}/auto/upload` };
}

/* foto de perfil: só imagem enviada ao Cloudinary da plataforma. Vazio = sem foto. */
export function cleanImageUrl(raw, fail) {
  const v = String(raw ?? "").trim();
  if (!v) return null;
  let u;
  try { u = new URL(v); } catch { fail(400, "Foto inválida."); }
  if (v.length > 500 || u.protocol !== "https:" || u.hostname !== "res.cloudinary.com" || !u.pathname.startsWith(`/${cloud().name}/image/upload/`)) fail(400, "Foto não reconhecida. Envie pelo botão de foto.");
  return u.href;
}
export const bustPeople = () => { dbBust("s:people"); };

async function authorsFor(ctx, ids) {
  const uniq = [...new Set(ids)];
  const users = await pmap(uniq, (id) => ctx.loadUser(id));
  const map = new Map();
  uniq.forEach((id, i) => {
    const u = users[i];
    map.set(id, u ? { id: u.id, name: u.name, avatar: u.avatar || null, role: u.role } : { id, name: "Pessoa removida", avatar: null, role: "aluno" });
  });
  return map;
}

/* ---------- rotas ---------- */
export async function handle(ctx, { method, path, url, body, user }) {
  const { json, fail } = ctx;

  if (path === "feed/status" && method === "GET") return json({ uploads: uploadsOn() });
  if (path === "feed/upload-sign" && method === "POST") {
    if (!uploadsOn()) fail(503, "O envio de fotos ainda não foi configurado pela administração.");
    const rl = await store("rl");
    const key = "up:" + user.id;
    const s = (await rl.get(key)) || { n: 0, at: 0 };
    if (now() - s.at > 3600e3) { s.n = 0; s.at = now(); }
    if (++s.n > 40) fail(429, "Muitos envios seguidos. Tente de novo em alguns minutos.");
    await rl.set(key, s);
    return json(signUpload());
  }

  /* --- sino --- */
  if (path === "notifs" && method === "GET") {
    const { items } = await notify.listFor(user);
    const authors = await authorsFor(ctx, items.map((i) => i.by).filter(Boolean));
    return json({ items: items.map((i) => ({ ...i, by: i.by ? authors.get(i.by) : null })), unread: items.filter((i) => i.unread).length });
  }
  if (path === "notifs/read" && method === "POST") { await notify.markRead(user); return json({ ok: true }); }

  /* --- foto de perfil --- */
  if (path === "auth/profile" && method === "POST") {
    if (body.avatar === undefined) fail(400, "Nada para salvar.");
    let changed = false;
    const raw = String(body.avatar || "").trim();
    if (!raw) { if (user.avatar) { delete user.avatar; changed = true; } }
    else {
      if (!uploadsOn()) fail(400, "O envio de fotos ainda não está configurado.");
      const href = cleanImageUrl(raw, fail);
      if (href !== user.avatar) { user.avatar = href; changed = true; }
    }
    if (changed) { await ctx.saveUser(user); bustPeople(); }
    return json({ user: ctx.publicUser(user) });
  }

  /* --- busca: o conteúdo das trilhas é pesquisado no navegador; aqui entram o Fórum (e só ele) --- */
  if (path === "search" && method === "GET") {
    const q = String(url.searchParams.get("q") || "").slice(0, 80);
    if (q.replace(/[^\p{L}\p{N}]/gu, "").length < 2) return json({ forum: [] });
    return json({ forum: await memo("forum:" + q.toLowerCase(), 3000, () => forum.search(q)) });
  }
  return null;
}


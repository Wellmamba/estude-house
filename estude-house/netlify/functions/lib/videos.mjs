// Reconhece vídeos em anexos de posts: upload (Cloudinary) e links de YouTube, Vimeo, Loom, Drive e arquivos mp4/webm/mov.
/* Só entram links de vídeo que o navegador sabe tocar: YouTube (inclui Shorts), Vimeo, Loom, Google Drive e arquivo mp4/webm/mov. */
export function videoLink(raw) {
  let u;
  try { u = new URL(raw); } catch { return null; }
  const host = u.hostname.replace(/^www\./, "");
  const path = u.pathname;
  let m;
  if (host === "youtu.be" && (m = path.match(/^\/([\w-]{6,15})/))) return { provider: "youtube", id: m[1], short: false };
  if (/^(m\.)?youtube\.com$/.test(host)) {
    if ((m = path.match(/^\/shorts\/([\w-]{6,15})/))) return { provider: "youtube", id: m[1], short: true };
    const id = u.searchParams.get("v") || ((m = path.match(/^\/(?:embed|live)\/([\w-]{6,15})/)) && m[1]);
    if (id) return { provider: "youtube", id, short: false };
  }
  if (host === "vimeo.com" && (m = path.match(/^\/(\d+)/))) return { provider: "vimeo", id: m[1] };
  if (host === "loom.com" && (m = path.match(/^\/share\/(\w+)/))) return { provider: "loom", id: m[1] };
  if (host === "drive.google.com" && (m = path.match(/^\/file\/d\/([\w-]+)/))) return { provider: "drive", id: m[1] };
  if (/\.(mp4|webm|mov)$/i.test(path)) return { provider: "file", url: raw };
  return null;
}

export const isGif = (m) => /\.gif$/i.test(m.name || "") || /\.gif($|\?)/i.test(m.url || "");
/* devolve o primeiro vídeo aproveitável de uma lista de anexos */
export function pickVideo(media) {
  for (const m of media || []) {
    if (m.type === "video" && !isGif(m)) return { type: "video", url: m.url };
    if (m.type === "link") { const v = videoLink(m.url); if (v) return { type: "link", url: m.url, ...v }; }
  }
  return null;
}


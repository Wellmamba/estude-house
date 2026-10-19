// Servidor local sem Netlify: arquivos de public/ + a Function em /api (banco em memória).
// Uso: npm run local   →  http://localhost:8888
process.env.LOCAL_DB = "1";
process.env.JWT_SECRET ||= "segredo-local-apenas-para-testes";
import http from "node:http";
import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
const api = (await import("../netlify/functions/api.mjs")).default;
const root = join(fileURLToPath(new URL(".", import.meta.url)), "..", "public");
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".json": "application/json", ".webmanifest": "application/manifest+json", ".webm": "video/webm", ".mp4": "video/mp4" };
const port = Number(process.env.PORT) || 8888;
// Aplica os cabeçalhos do netlify.toml (inclusive a política de segurança), como o Netlify faz: assim os testes enxergam o mesmo que o navegador de verdade.
const HEADER_RULES = [];
{
  const toml = readFileSync(join(root, "..", "netlify.toml"), "utf8");
  for (const block of toml.split("[[headers]]").slice(1)) {
    const forPath = block.match(/for\s*=\s*"([^"]+)"/)?.[1];
    const values = {};
    for (const m of block.matchAll(/^\s*([A-Za-z-]+)\s*=\s*"((?:[^"\\]|\\.)*)"\s*$/gm)) if (m[1] !== "for") values[m[1]] = m[2];
    if (forPath) HEADER_RULES.push({ forPath, values });
  }
}
const headersFor = (pathname) => {
  const out = {};
  for (const r of HEADER_RULES) {
    const f = r.forPath;
    const hit = f === "/*" || f === pathname || (f.endsWith("/*") && pathname.startsWith(f.slice(0, -1)));
    if (hit) Object.assign(out, r.values);
  }
  return out;
};
http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    if (url.pathname.startsWith("/api/")) {
      const chunks = []; for await (const c of req) chunks.push(c);
      const body = chunks.length && !["GET", "HEAD"].includes(req.method) ? Buffer.concat(chunks) : undefined;
      const r = await api(new Request(url, { method: req.method, headers: req.headers, body }), {});
      res.writeHead(r.status, Object.fromEntries(r.headers)); res.end(Buffer.from(await r.arrayBuffer())); return;
    }
    let p = normalize(url.pathname).replace(/^(\.\.[/\\])+/, "");
    if (p.endsWith("/")) p += "index.html";
    const data = await readFile(join(root, p));
    res.writeHead(200, { "content-type": types[extname(p)] || "application/octet-stream", ...headersFor(url.pathname) }); res.end(data);
  } catch { res.writeHead(404); res.end("404"); }
}).listen(port, () => console.log(`BRYANT SHOOT local em http://localhost:${port}`));

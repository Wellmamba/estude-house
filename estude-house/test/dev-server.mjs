// Servidor local sem Netlify: arquivos de public/ + a Function em /api (banco em memória).
// Uso: npm run local   →  http://localhost:8888
process.env.LOCAL_DB = "1";
process.env.JWT_SECRET ||= "segredo-local-apenas-para-testes";
import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
const api = (await import("../netlify/functions/api.mjs")).default;
const root = join(fileURLToPath(new URL(".", import.meta.url)), "..", "public");
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".json": "application/json" };
const port = Number(process.env.PORT) || 8888;
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
    res.writeHead(200, { "content-type": types[extname(p)] || "application/octet-stream" }); res.end(data);
  } catch { res.writeHead(404); res.end("404"); }
}).listen(port, () => console.log(`BRYANT SHOOT local em http://localhost:${port}`));

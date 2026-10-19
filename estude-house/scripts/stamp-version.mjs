// Carimba a versão (BUILD) nos arquivos do index.html: node scripts/stamp-version.mjs
// Com a versão no endereço (/assets/app.js?v=2026-10-18-s) o navegador guarda os arquivos por um ano e só baixa de novo
// quando a versão muda. Rode sempre que mudar o BUILD (o teste de conteúdo avisa se esquecer).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const lib = fs.readFileSync(path.join(root, "public/assets/lib.js"), "utf8");
const build = lib.match(/M\.BUILD\s*=\s*"([^"]+)"/)?.[1];
if (!build) throw new Error("BUILD não encontrado em public/assets/lib.js");
const file = path.join(root, "public/index.html");
let html = fs.readFileSync(file, "utf8");
html = html.replace(/(<script src="|<link rel="stylesheet" href=")(\/(?:assets|trilhas)\/[^"?]+\.(?:js|css))(?:\?v=[^"]*)?"/g, (_, pre, url) => `${pre}${url}?v=${build}"`);
fs.writeFileSync(file, html);
console.log("index.html carimbado com a versão", build);

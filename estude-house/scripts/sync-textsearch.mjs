// Copia scripts/textsearch-core.js para o servidor e para o site. Rode depois de mexer na busca.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const core = fs.readFileSync(path.join(root, "scripts/textsearch-core.js"), "utf8");
const banner = "/* ARQUIVO GERADO por scripts/sync-textsearch.mjs a partir de scripts/textsearch-core.js. Não edite aqui. */\n";
fs.writeFileSync(path.join(root, "netlify/functions/lib/textsearch.mjs"), banner + core);
// No site vira um script comum: window.TextSearch = { norm, tokens, match, ... }
const names = [...core.matchAll(/^export (?:function|const) (\w+)/gm)].map((m) => m[1]);
const client = banner + "(function () {\n" + core.replace(/^export /gm, "") + "\n  window.TextSearch = { " + names.join(", ") + " };\n})();\n";
fs.writeFileSync(path.join(root, "public/assets/textsearch.js"), client);
console.log("busca sincronizada:", names.join(", "));

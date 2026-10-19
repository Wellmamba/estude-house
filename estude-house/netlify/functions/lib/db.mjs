// Camada de armazenamento.
// Em produção usa Netlify Blobs. Nos testes locais (LOCAL_DB=1) usa memória.

const MEM = (globalThis.__MAMBA_MEM__ ||= {});

// Só nos testes locais: conta as operações no banco e, se BLOB_LAT_MS existir, simula a demora da rede.
export const OPS = (globalThis.__MAMBA_OPS__ ||= { get: 0, set: 0, keys: 0, delete: 0 });
const lag = () => (process.env.BLOB_LAT_MS ? new Promise((r) => setTimeout(r, Number(process.env.BLOB_LAT_MS))) : null);

function memStore(name) {
  const m = (MEM[name] ||= new Map());
  return {
    async get(key) {
      OPS.get++; await lag();
      const v = m.get(key);
      return v === undefined ? null : JSON.parse(v);
    },
    async set(key, value) {
      OPS.set++; await lag();
      m.set(key, JSON.stringify(value));
    },
    async delete(key) {
      OPS.delete++; await lag();
      m.delete(key);
    },
    // Retorna chaves em ordem alfabética, depois de `after`, até `limit`.
    async keys({ prefix = "", after = "", limit = Infinity } = {}) {
      OPS.keys++; await lag();
      const all = [...m.keys()].filter((k) => k.startsWith(prefix)).sort();
      const out = [];
      for (const k of all) {
        if (after && k <= after) continue;
        out.push(k);
        if (out.length >= limit) break;
      }
      return out;
    },
  };
}

// O Netlify Blobs às vezes falha por instantes (rede, partida a frio). Tenta de novo
// até 4 vezes, com espera crescente, antes de devolver o erro.
const WAITS = [120, 350, 900];
async function retry(fn) {
  let last;
  for (let i = 0; i <= WAITS.length; i++) {
    try { return await fn(); }
    catch (e) {
      last = e;
      if (i < WAITS.length) await new Promise((r) => setTimeout(r, WAITS[i]));
    }
  }
  throw last;
}

// IMPORTANTE: o acesso ao Blobs usa um token que o Netlify entrega a CADA chamada da função
// e que expira. Guardar o "store" em cache entre chamadas (instância reaproveitada) faz a
// função usar um token vencido ("Token expired"). Por isso o store é criado de novo a cada
// operação — inclusive a cada nova tentativa —, nunca guardado.
//
// Reserva opcional: se BLOBS_SITE_ID e BLOBS_TOKEN (um Personal Access Token do Netlify) estiverem
// definidos nas variáveis de ambiente, o acesso usa essa credencial fixa, que não expira.
const explicitCreds = () =>
  process.env.BLOBS_SITE_ID && process.env.BLOBS_TOKEN
    ? { siteID: process.env.BLOBS_SITE_ID, token: process.env.BLOBS_TOKEN }
    : null;
export const blobsMode = () =>
  process.env.LOCAL_DB ? "memória (teste)" : explicitCreds() ? "credencial fixa" : "token da função (renovado a cada chamada)";

async function fresh(name) {
  const { getStore } = await import("@netlify/blobs");
  return getStore({ name, consistency: "strong", ...(explicitCreds() || {}) });
}

function blobStore(name) {
  return {
    async get(key) {
      return retry(async () => (await (await fresh(name)).get(key, { type: "json" })) ?? null);
    },
    async set(key, value) {
      await retry(async () => (await fresh(name)).setJSON(key, value));
    },
    async delete(key) {
      await retry(async () => (await fresh(name)).delete(key));
    },
    async keys({ prefix = "", after = "", limit = Infinity } = {}) {
      return retry(async () => {
        const s = await fresh(name);
        const out = [];
        for await (const page of s.list({ prefix, paginate: true })) {
          for (const b of page.blobs) if (!after || b.key > after) out.push(b.key);
          if (limit !== Infinity && out.length >= limit * 4) break;
        }
        out.sort();
        return out.slice(0, limit);
      });
    },
  };
}

export async function store(name) {
  if (process.env.LOCAL_DB) return memStore(name);
  return blobStore(name);
}

// Executa `fn` sobre a lista com no máximo `n` chamadas ao mesmo tempo (mantém a ordem).
export async function pmap(list, fn, n = 16) {
  const out = new Array(list.length);
  let i = 0;
  const worker = async () => {
    while (i < list.length) {
      const k = i++;
      out[k] = await fn(list[k], k);
    }
  };
  await Promise.all(Array.from({ length: Math.min(n, list.length) }, worker));
  return out;
}

/* ── cache de curta duração dentro da própria instância do servidor ──
   Com centenas de pessoas usando ao mesmo tempo, as mesmas leituras (quem é o usuário, a lista de posts, o ranking)
   se repetem a cada segundo. Guardar o resultado por alguns segundos tira a carga do banco.
   • pedidos iguais que chegam juntos esperam uma única leitura (sem "avalanche");
   • quem grava limpa o cache com bust(), então na mesma instância a mudança aparece na hora;
   • nos testes locais o cache fica desligado (a menos que CACHE_FORCE=1), para os testes verem sempre o dado novo. */
const CACHE = (globalThis.__MAMBA_CACHE__ ||= new Map());
export const cacheOn = () => !process.env.LOCAL_DB || !!process.env.CACHE_FORCE;
const MAX_CACHE = 4000;
export function cached(key, ttl, fn) {
  if (!ttl || !cacheOn()) return fn();
  const hit = CACHE.get(key);
  if (hit && hit.at > Date.now() - ttl) return hit.p;
  const p = Promise.resolve().then(fn);
  if (CACHE.size >= MAX_CACHE) { const first = CACHE.keys().next().value; CACHE.delete(first); }
  const entry = { at: Date.now(), p };
  CACHE.set(key, entry);
  p.catch(() => { if (CACHE.get(key) === entry) CACHE.delete(key); });
  return p;
}
export function bust(prefix = "") {
  for (const k of [...CACHE.keys()]) if (k.startsWith(prefix)) CACHE.delete(k);
}
// cópia segura: quem recebe pode mexer no objeto sem estragar o que está guardado
export const clone = (v) => (v == null ? v : structuredClone(v));

export function resetMemory() {
  CACHE.clear();
  for (const k of Object.keys(MEM)) delete MEM[k];
}

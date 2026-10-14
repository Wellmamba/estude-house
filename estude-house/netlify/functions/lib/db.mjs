// Camada de armazenamento.
// Em produção usa Netlify Blobs. Nos testes locais (LOCAL_DB=1) usa memória.

const MEM = (globalThis.__MAMBA_MEM__ ||= {});

function memStore(name) {
  const m = (MEM[name] ||= new Map());
  return {
    async get(key) {
      const v = m.get(key);
      return v === undefined ? null : JSON.parse(v);
    },
    async set(key, value) {
      m.set(key, JSON.stringify(value));
    },
    async delete(key) {
      m.delete(key);
    },
    // Retorna chaves em ordem alfabética, depois de `after`, até `limit`.
    async keys({ prefix = "", after = "", limit = Infinity } = {}) {
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

async function blobStore(name) {
  const { getStore } = await import("@netlify/blobs");
  const s = getStore({ name, consistency: "strong" });
  return {
    async get(key) {
      return (await s.get(key, { type: "json" })) ?? null;
    },
    async set(key, value) {
      await s.setJSON(key, value);
    },
    async delete(key) {
      await s.delete(key);
    },
    async keys({ prefix = "", after = "", limit = Infinity } = {}) {
      const out = [];
      for await (const page of s.list({ prefix, paginate: true })) {
        for (const b of page.blobs) out.push(b.key);
        if (out.length >= limit * 4 && limit !== Infinity) break;
      }
      out.sort();
      const filtered = after ? out.filter((k) => k > after) : out;
      return filtered.slice(0, limit);
    },
  };
}

const cache = new Map();
export async function store(name) {
  if (process.env.LOCAL_DB) return memStore(name);
  if (!cache.has(name)) cache.set(name, await blobStore(name));
  return cache.get(name);
}

export function resetMemory() {
  for (const k of Object.keys(MEM)) delete MEM[k];
}

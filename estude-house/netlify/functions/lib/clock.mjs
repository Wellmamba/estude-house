// Relógio e datas (fuso de São Paulo). Nos testes dá para trocar o relógio com setClock().
let override = null;
export const setClock = (fn) => { override = fn; };
export const now = () => (override ? override() : Date.now());

const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit" });
// "2026-10-15" (dia no horário de Brasília)
export const dayKey = (ts = now()) => fmt.format(new Date(ts));
export function addDays(key, n) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
}
// Segunda-feira da semana desse dia
export function weekKey(key = dayKey()) {
  const [y, m, d] = key.split("-").map(Number);
  const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0 = domingo
  return addDays(key, -((dow + 6) % 7));
}
export const monthKey = (key = dayKey()) => key.slice(0, 7);
export const daysOfWeek = (wk) => Array.from({ length: 7 }, (_, i) => addDays(wk, i));

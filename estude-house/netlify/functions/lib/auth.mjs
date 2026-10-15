import crypto from "node:crypto";

const SCRYPT = { N: 16384, r: 8, p: 1, keylen: 64 };
const TOKEN_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 dias

export function secret() {
  const s = process.env.JWT_SECRET || (process.env.LOCAL_DB ? "teste-local-nao-usar-em-producao" : "");
  if (!s || s.length < 16) {
    const err = new Error("JWT_SECRET não configurado (mínimo 16 caracteres). Defina em Netlify > Site configuration > Environment variables.");
    err.status = 500;
    throw err;
  }
  return s;
}

export function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 160;
}

export function emailKey(email) {
  return crypto.createHash("sha256").update(normalizeEmail(email)).digest("hex");
}

export function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const hash = crypto.scryptSync(password, salt, SCRYPT.keylen, { N: SCRYPT.N, r: SCRYPT.r, p: SCRYPT.p });
  return `scrypt$${salt.toString("hex")}$${hash.toString("hex")}`;
}

export function verifyPassword(password, stored) {
  try {
    const [algo, saltHex, hashHex] = String(stored).split("$");
    if (algo !== "scrypt") return false;
    const expected = Buffer.from(hashHex, "hex");
    const actual = crypto.scryptSync(password, Buffer.from(saltHex, "hex"), expected.length, {
      N: SCRYPT.N,
      r: SCRYPT.r,
      p: SCRYPT.p,
    });
    return crypto.timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}

const b64u = (buf) => Buffer.from(buf).toString("base64url");

export function signToken(userId) {
  const payload = b64u(JSON.stringify({ sub: userId, exp: Date.now() + TOKEN_TTL_MS }));
  const sig = crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifyToken(token) {
  if (!token || typeof token !== "string" || !token.includes(".")) return null;
  const [payload, sig] = token.split(".");
  const expected = crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (!data.exp || data.exp < Date.now()) return null;
    return data;
  } catch {
    return null;
  }
}

export function passwordProblem(password, email = "") {
  if (typeof password !== "string" || password.length < 8) return "A senha precisa ter pelo menos 8 caracteres.";
  if (password.length > 128) return "A senha pode ter no máximo 128 caracteres.";
  if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) return "Use letras e números na senha.";
  if (email && password.toLowerCase() === email.toLowerCase()) return "A senha não pode ser igual ao e-mail.";
  return null;
}

export function randomPassword() {
  const letters = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ";
  const digits = "23456789";
  let out = "";
  for (let i = 0; i < 8; i++) out += letters[crypto.randomInt(letters.length)];
  for (let i = 0; i < 3; i++) out += digits[crypto.randomInt(digits.length)];
  return out;
}

export function newId(prefix = "") {
  return prefix + crypto.randomBytes(9).toString("base64url");
}

export function certCode(userId, finishedAt) {
  const h = crypto.createHmac("sha256", secret()).update(`${userId}|${finishedAt}`).digest("hex");
  return h.slice(0, 12).toUpperCase().replace(/(.{4})(.{4})(.{4})/, "$1-$2-$3");
}

export function masterEmails() {
  const raw = process.env.ADMIN_EMAILS || "wellington.moreira@mambadigital.com.br";
  return raw.split(",").map((e) => normalizeEmail(e)).filter(Boolean);
}

export function isMaster(email) {
  return masterEmails().includes(normalizeEmail(email));
}

export function domainAllowed(email) {
  const raw = process.env.ALLOWED_DOMAINS;
  if (!raw) return true;
  const domains = raw.split(",").map((d) => d.trim().toLowerCase().replace(/^@/, "")).filter(Boolean);
  if (!domains.length) return true;
  return domains.some((d) => normalizeEmail(email).endsWith("@" + d));
}

// Conta que já pode entrar: não está desativada e não está esperando aprovação ou ativação.
export function isLive(u) {
  return !!u && u.active !== false && (!u.access || u.access === "active");
}

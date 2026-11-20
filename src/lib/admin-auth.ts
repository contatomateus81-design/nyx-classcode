import { createHmac, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "classcode_admin";
const SESSION_TTL = 12 * 60 * 60;

function signature(payload: string) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error("ADMIN_SESSION_SECRET precisa ter ao menos 32 caracteres.");
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function createAdminSession() {
  const payload = String(Math.floor(Date.now() / 1000) + SESSION_TTL);
  return { value: payload + "." + signature(payload), maxAge: SESSION_TTL, name: COOKIE_NAME };
}

export function isAdminRequest(request: NextRequest) {
  try {
    const value = request.cookies.get(COOKIE_NAME)?.value;
    if (!value) return false;
    const [payload, supplied] = value.split(".");
    if (!payload || !supplied || Number(payload) < Math.floor(Date.now() / 1000)) return false;
    const expected = signature(payload);
    const a = Buffer.from(supplied);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

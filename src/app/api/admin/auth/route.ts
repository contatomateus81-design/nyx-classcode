import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { createAdminSession, isAdminRequest } from "@/lib/admin-auth";

export const runtime = "nodejs";

function safeEqual(supplied: unknown, expected: string | undefined) {
  if (typeof supplied !== "string" || !expected) return false;
  const suppliedBuffer = Buffer.from(supplied);
  const expectedBuffer = Buffer.from(expected);
  return suppliedBuffer.length === expectedBuffer.length && timingSafeEqual(suppliedBuffer, expectedBuffer);
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    const validUsername = safeEqual(username, process.env.ADMIN_USERNAME);
    const validPassword = safeEqual(password, process.env.ADMIN_PASSWORD);
    if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "A autenticação administrativa ainda não foi configurada." }, { status: 503 });
    }
    if (!validUsername || !validPassword) {
      return NextResponse.json({ error: "Usuário ou senha incorretos." }, { status: 401 });
    }

    const session = createAdminSession();
    const response = NextResponse.json({ ok: true });
    response.cookies.set(session.name, session.value, {
      httpOnly: true, secure: process.env.NODE_ENV === "production",
      sameSite: "strict", path: "/", maxAge: session.maxAge,
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Não foi possível autenticar." }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set("classcode_admin", "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 0 });
  return response;
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ authenticated: isAdminRequest(request) });
}

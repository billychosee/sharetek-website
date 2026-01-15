import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import * as crypto from "crypto";

export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export function setCSRFCookie(response: NextResponse): string {
  const token = generateCSRFToken();

  response.cookies.set("csrf_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 3600,
  });

  return token;
}

export async function getCSRFToken(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const csrfToken = cookieStore.get("csrf_token");
    return csrfToken?.value || null;
  } catch {
    return null;
  }
}

export function getCSRFTokenFromRequest(request: NextRequest): string | null {
  try {
    const csrfToken = request.cookies.get("csrf_token");
    return csrfToken?.value || null;
  } catch {
    return null;
  }
}

export function validateCSRFToken(request: NextRequest): boolean {
  try {
    const cookieToken = request.cookies.get("csrf_token")?.value;
    const headerToken = request.headers.get("x-csrf-token");

    if (!cookieToken || !headerToken) {
      return false;
    }

    return crypto.timingSafeEqual(
      Buffer.from(cookieToken, "hex"),
      Buffer.from(headerToken, "hex")
    );
  } catch {
    return false;
  }
}

export function requireCSRFProtection(
  request: NextRequest
): NextResponse | null {
  const method = request.method.toUpperCase();

  if (!["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
    return null;
  }

  if (!validateCSRFToken(request)) {
    console.log(`CSRF validation failed for ${method} ${request.url}`);
    return NextResponse.json(
      { error: "CSRF token validation failed" },
      { status: 403 }
    );
  }

  return null;
}

export function validateAPIRequestCSRF(request: NextRequest): boolean {
  try {
    const cookieToken = request.cookies.get("csrf_token")?.value;
    const headerToken = request.headers.get("x-csrf-token");

    if (!cookieToken || !headerToken) {
      return false;
    }

    return crypto.timingSafeEqual(
      Buffer.from(cookieToken, "hex"),
      Buffer.from(headerToken, "hex")
    );
  } catch {
    return false;
  }
}

export function extractCSRFToken(request: Request): string | null {
  const headerToken = request.headers.get("x-csrf-token");
  return headerToken || null;
}

export function createClientCSRFToken(): string {
  return crypto.randomBytes(16).toString("hex");
}

export async function generateAndSetCSRFToken(
  response: NextResponse
): Promise<string> {
  const token = generateCSRFToken();

  response.cookies.set("csrf_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 3600,
  });

  return token;
}





import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: blob: https: http:;
    connect-src 'self' https://sharetek.co.za https://www.google-analytics.com;
    frame-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  response.headers.set("Content-Security-Policy", cspHeader);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  response.headers.delete("Server");

  const url = new URL(request.url);
  const suspiciousPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /eval\s*\(/gi,
    /expression\s*\(/gi,
  ];

  const urlString = url.toString().toLowerCase();
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(urlString)) {
      console.log(`Blocked suspicious request: ${urlString}`);
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  const clientIP =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "127.0.0.1";
  const rateLimitKey = `rate_limit_${clientIP}`;

  const rateLimitMap = new Map();
  const now = Date.now();
  const windowMs = 60000;
  const maxRequests = 100;

  const clientRequests = rateLimitMap.get(rateLimitKey) || [];
  const recentRequests = clientRequests.filter(
    (timestamp: number) => now - timestamp < windowMs
  );

  if (recentRequests.length >= maxRequests) {
    console.log(`Rate limit exceeded for IP: ${clientIP}`);
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  recentRequests.push(now);
  rateLimitMap.set(rateLimitKey, recentRequests);

  if (Math.random() < 0.001) {
    for (const [key, timestamps] of Array.from(rateLimitMap.entries())) {
      const recent = timestamps.filter(
        (timestamp: number) => now - timestamp < windowMs
      );
      if (recent.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, recent);
      }
    }
  }

  if (request.method === "GET") {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    const csrfToken = Array.from(array, (byte) =>
      byte.toString(16).padStart(2, "0")
    ).join("");
    const csrfCookie = `csrf_token=${csrfToken}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600`;
    response.headers.set("Set-Cookie", csrfCookie);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*|public/).*)"],
};





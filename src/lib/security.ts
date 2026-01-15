const XSS_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /eval\s*\(/gi,
  /expression\s*\(/gi,
  /<link\b[^>]*>/gi,
  /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,
  /<meta\b[^>]*>/gi,
  /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
  /<embed\b[^>]*>/gi,
  /<form\b[^>]*>/gi,
  /<input\b[^>]*>/gi,
  /<button\b[^>]*>/gi,
];

const SQL_INJECTION_PATTERNS = [
  /('|(\\x27)|(\\x22))?(\\s)*((\\*|(\\x2a))?(\\w)*)(\\s)*((\\x3b)|(\\x3d))?(\\s)*(('|(\\x27)|(\\x22))?(\\w)*)/gi,
  /(\\x27)/gi,
  /(\\x22)/gi,
  /(\\x3b)/gi,
  /(\\x3d)/gi,
  /(\\x2d)/gi,
  /(\\x2f)/gi,
];

export function sanitizeInput(input: string): string {
  if (typeof input !== "string") {
    return String(input);
  }

  let sanitized = input;

  XSS_PATTERNS.forEach((pattern) => {
    sanitized = sanitized.replace(pattern, "");
  });

  sanitized = sanitized
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, '"')
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");

  sanitized = sanitized.replace(/\0/g, "");

  return sanitized.trim();
}

export function validateInput(input: string): boolean {
  if (typeof input !== "string") {
    return false;
  }

  const isSQLSafe = !SQL_INJECTION_PATTERNS.some((pattern) =>
    pattern.test(input)
  );
  const isXSSSafe = !XSS_PATTERNS.some((pattern) => pattern.test(input));
  const isLengthSafe = input.length < 10000;

  return isSQLSafe && isXSSSafe && isLengthSafe;
}

export function sanitizeHtml(html: string): string {
  if (typeof html !== "string") {
    return "";
  }

  html = html.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );
  html = html.replace(/javascript:/gi, "");
  html = html.replace(/on\w+\s*=/gi, "");
  html = html.replace(/eval\s*\(/gi, "");

  return html;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);

    if (!["http:", "https:"].includes(urlObj.protocol)) {
      return false;
    }

    const suspiciousPatterns = [
      /javascript:/i,
      /data:/i,
      /vbscript:/i,
      /file:/i,
    ];

    return !suspiciousPatterns.some((pattern) => pattern.test(url));
  } catch {
    return false;
  }
}

export function generateSecureToken(length: number = 32): string {
  return crypto
    .getRandomValues(new Uint8Array(length))
    .reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
}

class RateLimiter {
  private requests = new Map<string, { count: number; resetTime: number }>();

  constructor(
    private windowMs: number = 60000,
    private maxRequests: number = 100
  ) {}

  check(key: string): boolean {
    const now = Date.now();
    const record = this.requests.get(key);

    if (!record || now > record.resetTime) {
      this.requests.set(key, { count: 1, resetTime: now + this.windowMs });
      return true;
    }

    if (record.count >= this.maxRequests) {
      return false;
    }

    record.count++;
    return true;
  }

  reset(key: string): void {
    this.requests.delete(key);
  }
}

export const rateLimiter = new RateLimiter();

export const securityHeaders = {
  contentSecurityPolicy:
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https:; connect-src 'self' https://sharetek.co.za https://www.google-analytics.com; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests",
  frameOptions: "DENY",
  contentTypeOptions: "nosniff",
  xssProtection: "1; mode=block",
  referrerPolicy: "strict-origin-when-cross-origin",
  strictTransportSecurity: "max-age=31536000; includeSubDomains; preload",
  permissionsPolicy: "camera=(), microphone=(), geolocation=()",
};





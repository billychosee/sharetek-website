# Security Implementation Documentation

This document outlines the comprehensive security measures implemented in the Next.js application to protect against common web vulnerabilities including XSS, CSRF, SQL injection, and other security threats.

## 🛡️ Security Headers

### Content Security Policy (CSP)

- **Location**: `next.config.ts` and `middleware.ts`
- **Purpose**: Prevents XSS attacks by restricting resource loading
- **Key Directives**:
  - `default-src 'self'`: Only allows resources from same origin
  - `script-src`: Controls script execution sources
  - `style-src`: Controls CSS loading sources
  - `img-src`: Controls image loading sources
  - `connect-src`: Controls network requests
  - `object-src 'none'`: Prevents plugin content
  - `frame-ancestors 'none'`: Prevents clickjacking

### HTTP Security Headers

1. **X-Frame-Options: DENY**
   - Prevents clickjacking attacks
   - Blocks the page from being embedded in frames

2. **X-Content-Type-Options: nosniff**
   - Prevents MIME-type sniffing
   - Ensures browser respects declared content types

3. **X-XSS-Protection: 1; mode=block**
   - Enables browser's built-in XSS protection
   - Blocks suspicious content rather than sanitizing

4. **Strict-Transport-Security**
   - Enforces HTTPS connections
   - Includes HSTS preload for maximum security

5. **Referrer-Policy: strict-origin-when-cross-origin**
   - Controls referrer information sent with requests
   - Protects user privacy

6. **Permissions-Policy**
   - Restricts access to browser features (camera, microphone, etc.)
   - Prevents unauthorized feature usage

## 🔒 XSS Protection

### Input Sanitization

- **Location**: `src/lib/security.ts`
- **Functions**:
  - `sanitizeInput()`: Removes malicious scripts and escapes HTML
  - `sanitizeHtml()`: Safe HTML content rendering
  - `validateInput()`: Checks for XSS patterns

### XSS Prevention Patterns

```typescript
const XSS_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /eval\s*\(/gi,
  /expression\s*\(/gi,
];
```

### Usage Example

```typescript
import { sanitizeInput } from '@/lib/security';

function UserInput({ input }: { input: string }) {
  const safeInput = sanitizeInput(input);
  return <div>{safeInput}</div>;
}
```

## 🔐 CSRF Protection

### Token-Based Protection

- **Location**: `src/lib/csrf.ts`
- **Features**:
  - Cryptographically secure token generation
  - HttpOnly cookies for token storage
  - Constant-time token comparison
  - Automatic token validation for state-changing operations

### Implementation

```typescript
import { generateCSRFToken, validateCSRFToken } from "@/lib/csrf";

// Generate token
const token = generateCSRFToken();

// Validate token (automatically done in middleware)
const isValid = validateCSRFToken(request);
```

### Client-Side Usage

```typescript
// Include CSRF token in requests
fetch("/api/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-csrf-token": getCsrfToken(), // Get from cookie
  },
  body: JSON.stringify(data),
});
```

## 🚦 Rate Limiting

### Basic Implementation

- **Location**: `middleware.ts`
- **Features**:
  - 100 requests per minute per IP
  - In-memory storage (consider Redis for production)
  - Automatic cleanup of expired entries

### Usage

```typescript
import { rateLimiter } from "@/lib/security";

// Check rate limit
if (!rateLimiter.check(clientIP)) {
  return new Response("Too Many Requests", { status: 429 });
}
```

## 🔍 Input Validation

### Validation Functions

```typescript
import { validateEmail, validateUrl, validateInput } from "@/lib/security";

// Email validation
if (!validateEmail(email)) {
  return "Invalid email format";
}

// URL validation
if (!validateUrl(url)) {
  return "Invalid or unsafe URL";
}

// General input validation
if (!validateInput(userInput)) {
  return "Input contains suspicious patterns";
}
```

## 🔧 Configuration Files

### next.config.ts

- Security headers configuration
- Image optimization security
- Strict mode enabled

### middleware.ts

- Additional security headers
- Rate limiting implementation
- CSRF token generation
- Suspicious request detection

### src/lib/security.ts

- Input sanitization utilities
- XSS protection functions
- Rate limiting implementation
- Security validation helpers

### src/lib/csrf.ts

- CSRF token generation and validation
- Cookie management
- Request protection middleware

## 🚨 Security Monitoring

### Suspicious Pattern Detection

The middleware automatically detects and blocks requests containing:

- Script tags
- JavaScript URLs
- Event handlers
- Eval expressions
- SQL injection patterns

### Logging

Security events are logged for monitoring:

```typescript
console.log(`Blocked suspicious request: ${urlString}`);
console.log(`Rate limit exceeded for IP: ${clientIP}`);
console.log(`CSRF validation failed for ${method} ${url}`);
```

## 🔄 Production Considerations

### Environment Variables

- Ensure `NODE_ENV=production` for secure cookie settings
- Use HTTPS in production for HSTS to take effect
- Configure proper domain settings for cookies

### Performance

- Security middleware adds minimal overhead
- Rate limiting uses efficient data structures
- Pattern matching uses optimized regex

### Monitoring

- Set up logging for security events
- Monitor rate limiting thresholds
- Track CSP violations in browser console

## 🛠️ Usage Examples

### Form Security

```typescript
import { sanitizeInput } from "@/lib/security";

export default function ContactForm() {
  const handleSubmit = async (formData: FormData) => {
    const name = sanitizeInput(formData.get("name") as string);
    const email = sanitizeInput(formData.get("email") as string);

    // Send sanitized data to API
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": getCsrfToken(),
      },
      body: JSON.stringify({ name, email }),
    });
  };
}
```

### API Route Protection

```typescript
import { NextRequest, NextResponse } from "next/server";
import { validateAPIRequestCSRF, sanitizeInput } from "@/lib/security";

export async function POST(request: NextRequest) {
  // Validate CSRF token
  if (!validateAPIRequestCSRF(request)) {
    return NextResponse.json(
      { error: "CSRF validation failed" },
      { status: 403 }
    );
  }

  // Sanitize input data
  const data = await request.json();
  const sanitizedData = sanitizeInput(data.message);

  // Process the request
  return NextResponse.json({ success: true });
}
```

## 🔍 Testing Security

### Test XSS Protection

```typescript
import { sanitizeInput } from "@/lib/security";

const maliciousInput = '<script>alert("xss")</script>';
const safeInput = sanitizeInput(maliciousInput);
// Result: <script>alert("xss")</script>
```

### Test CSRF Protection

- Make a POST request without CSRF token
- Should return 403 Forbidden
- Verify token validation in logs

## 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Content Security Policy Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- [XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

## 🆘 Security Incident Response

If you discover a security vulnerability:

1. **Do not** disclose the issue publicly
2. Contact the development team immediately
3. Provide detailed steps to reproduce
4. Allow reasonable time for fixes before public disclosure

This security implementation provides comprehensive protection against common web application vulnerabilities while maintaining performance and usability.





import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter.
// NOTE: State is per-worker-instance in serverless/edge environments (Vercel).
// This provides best-effort protection for a low-traffic site. For stricter
// guarantees, use an external store (e.g. Upstash Redis).
interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

const rateLimitMap = new Map<string, RateLimitEntry>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function proxy(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.next();
  }

  const ip = getClientIp(request);
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return NextResponse.next();
  }

  if (entry.count >= MAX_REQUESTS) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Trop de requêtes. Veuillez réessayer dans une heure ou appelez-nous au 07 66 08 27 02.",
      },
      { status: 429 }
    );
  }

  entry.count += 1;
  return NextResponse.next();
}

export const config = {
  matcher: "/api/booking",
};

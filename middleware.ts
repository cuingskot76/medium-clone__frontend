import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("next-auth.session-token");

  if (cookie) {
    return NextResponse.rewrite(new URL("/dashboard", req.nextUrl));
  }

  if (!cookie) {
    return NextResponse.rewrite(new URL("/", req.nextUrl));
  }

  if (req.nextUrl.pathname.startsWith("/dashboard") && !cookie) {
    return NextResponse.rewrite(new URL("/", req.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/dashboard"],
};

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("next-auth.session-token");
  console.log("cookie", cookie);

  // const baseUrl = req.nextUrl.pathname.startsWith("/");
  // console.log("baseUrl", baseUrl);

  // if (!cookie && req.nextUrl.pathname.startsWith("/dashboard")) {
  //   // const url = req.nextUrl.clone();
  //   // url.pathname = "/";
  //   // console.log("url", url);

  //   // Redirect to login if no cookie is set
  //   return NextResponse.rewrite(new URL("/", req.nextUrl));
  //   // return NextResponse.rewrite(url.pathname);
  // }

  if (cookie) {
    // redirect to dashboard if cookie is set
    // const url = req.nextUrl.clone();
    // url.pathname = "/dashboard";

    return NextResponse.rewrite(new URL("/dashboard", req.nextUrl));
  }

  if (!cookie) {
    // redirect to dashboard if cookie is set
    // const url = req.nextUrl.clone();
    // url.pathname = "/dashboard";

    return NextResponse.rewrite(new URL("/", req.nextUrl));
  }

  if (req.nextUrl.pathname.startsWith("/dashboard") && !cookie) {
    return NextResponse.rewrite(new URL("/", req.nextUrl));
  }

  // return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard"],
};

import { NextRequest, NextResponse } from "next/server";
import getUser from "./app/api/(auth)/getUser";

export async function proxy(request: NextRequest) {
  const user = await getUser();
  const { pathname } = new URL(request.url);
  if (!user) {
    let params: string = pathname;
    if (pathname.startsWith("/")) {
      params = pathname.slice(1);
    }
    return NextResponse.redirect(new URL(`/login?path=${params}`, request.url));
  }
  if (pathname === "/dashboard"){
    return NextResponse.redirect(new URL("/dashboard/projects", request.url))
  }
    return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

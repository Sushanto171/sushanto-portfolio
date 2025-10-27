import { NextRequest, NextResponse } from "next/server";
import getUser from "./app/api/(auth)/getUser";

export async function proxy(request: NextRequest) {
  const user = await getUser();
  if (!user) {
    const {pathname} = new URL(request.url);
    let params :string = pathname
    if( pathname.startsWith("/")){
      params = pathname.slice(1)
    }
    return NextResponse.redirect(new URL(`/login?path=${params}`, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

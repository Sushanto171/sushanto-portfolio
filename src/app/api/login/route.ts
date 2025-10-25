import { baseUrl } from "@/config/baseUrl";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const backendRes = await fetch(`${baseUrl()}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(await req.json()),
    credentials: "include",
  });
  const data = await backendRes.json();
  const setCookie = backendRes.headers.get("set-cookie");
 
  const response = NextResponse.json(data, { status: data.statusCode });
  if (setCookie) {
    response.headers.set("set-cookie", setCookie);
  }
  return response;
}

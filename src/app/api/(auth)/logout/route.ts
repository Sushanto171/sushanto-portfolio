import { backendUrl } from "@/config/baseUrl";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import getUser from "../getUser";

export async function POST() {
  try {
    await fetch(`${backendUrl}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    (await cookies()).delete("accessToken");
    (await cookies()).delete("refreshToken");

    await getUser();

    return NextResponse.json({ message: "Logged out" });
  } catch {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}

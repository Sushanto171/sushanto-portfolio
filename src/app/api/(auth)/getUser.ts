"use server";
import { backendUrl } from "@/config/baseUrl";
import { cookies } from "next/headers";

export default async function getUser() {
  const accessToken = (await cookies()).get("accessToken")?.value;
  
  if(!accessToken) return null
  const res = await fetch(`${backendUrl}/auth/me`, {
    cache: "no-store",
    credentials: "include",
    headers: { Cookie: `accessToken=${accessToken}` },
  });
  if(!res.ok) return null;
  const {data} = await res.json()
  return data 
}

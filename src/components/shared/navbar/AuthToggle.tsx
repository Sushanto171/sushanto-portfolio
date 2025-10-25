/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { IUser } from "@/types";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AuthToggle({ user }: { user: IUser | null }) {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data) {
        router.refresh();
        toast.success("Logout success!");
      }
    } catch (error: any) {
      toast.error(error.message || "Logout failed!");
    }
  };
  return (
    <>
      {!user ? (
        <Button>
          <Link href="/login" className="flex items-center gap-2">
            <LogIn /> Login
          </Link>
        </Button>
      ) : (
        <Button onClick={logoutHandler}>
          <LogOut /> Logout
        </Button>
      )}
    </>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IUser } from "@/types";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AuthToggle from "./AuthToggle";
import { INavLink } from "./Navbar";

export default function MobilMenuDrawer({
  navItems,
  user,
}: {
  navItems: INavLink[];
  user: IUser;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:text-foreground transition-colors"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <DialogTitle />
      <SheetContent side="bottom" className="p-6 rounded-t-xl">
        <nav className="flex flex-col gap-4 mt-2">
          {navItems?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              hidden={item.isHidden}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <AuthToggle user={user} />
        </nav>
        <Separator className="my-6" />
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Sushanto Kumar
        </p>
      </SheetContent>
    </Sheet>
  );
}

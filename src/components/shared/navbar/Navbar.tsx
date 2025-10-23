import { Folder, Home, Mail, User } from "lucide-react";
import Link from "next/link";
import MobilMenuDrawer from "./MobilMenuDrawer";

export const navItems = [
  { href: "#home", label: "Home", icon: <Home className="w-5 h-5" /> },
  { href: "#about", label: "About", icon: <User className="w-5 h-5" /> },
  {
    href: "#projects",
    label: "Projects",
    icon: <Folder className="w-5 h-5" />,
  },
  { href: "#contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
];
export function Navbar() {
  return (
    <>
      {/* Desktop Navbar (Top) */}
      <header className="hidden md:block sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          {/* Brand / Logo */}
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Sushanto.dev
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur-md md:hidden flex justify-center ">
        <div className="w-[90%]  flex justify-around items-center py-2 [&>*:last-child]:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-foreground transition-colors "
            >
              {item.icon}
              <span className="text-[10px] mt-1">{item.label}</span>
            </Link>
          ))}

          {/* Mobile Menu Drawer */}
          <MobilMenuDrawer />
        </div>
      </div>
    </>
  );
}

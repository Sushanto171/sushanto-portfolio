import { Code, Folder, Home, Mail, User } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";
import ContainerWrapper from "../ContainerWrapper";
import MobilMenuDrawer from "./MobilMenuDrawer";
import ResumeButton from "./ResumeButton";

export interface INavLink {
  href: string;
  label: string;
  icon: JSX.Element;
  isHidden?: boolean;
}

export async function Navbar() {
  // const user = await getUser();
  const navItems: INavLink[] = [
    { href: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { href: "/#about", label: "About", icon: <User className="w-5 h-5" /> },
    { href: "/#skills", label: "Skills", icon: <Code className="w-5 h-5" /> },
    { href: "/#projects", label: "Projects", icon: <Folder className="w-5 h-5" /> },
    { href: "/#contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ];
  // export async function Navbar() {
  //   const user = await getUser();
  //   const navItems: INavLink[] = [
  //     { href: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
  //     { href: "/about", label: "About", icon: <User className="w-5 h-5" /> },
  //     {
  //       href: "/dashboard",
  //       label: "Dashboard",
  //       icon: <LayoutDashboard className="w-5 h-5" />,
  //       isHidden: !user,
  //     },
  //     {
  //       href: "/projects",
  //       label: "Projects",
  //       icon: <Folder className="w-5 h-5" />,
  //     },
  //     { href: "/contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  //   ];

  return (
    <>
      {/* Desktop Navbar (Top) */}
      <header className="hidden md:block sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <ContainerWrapper>
          <div className="flex items-center justify-between py-6">
            {/* Brand / Logo */}
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              <span className=" hover:text-accent">Sushanto</span>.
              <span className="text-primary">dev</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  hidden={item.isHidden}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
            <ResumeButton />
            {/* <AuthToggle user={user} /> */}
          </div>
        </ContainerWrapper>
      </header>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur-md md:hidden flex justify-center ">
        <div className="w-[90%]  flex justify-around items-center py-2 [&>*:last-child]:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              hidden={item.isHidden}
              className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-foreground transition-colors "
            >
              {item.icon}
              <span className="text-[10px] mt-1">{item.label}</span>
            </Link>
          ))}

          {/* Mobile Menu Drawer */}
          <MobilMenuDrawer navItems={navItems} />
        </div>
      </div>
    </>
  );
}

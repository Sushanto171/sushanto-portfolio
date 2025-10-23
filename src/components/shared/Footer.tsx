
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand / Name */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold tracking-tight">Sushanto Kumar</h3>
            <p className="text-sm text-muted-foreground">
              Building digital experiences that make an impact.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex  flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground">
            <Link
              href="/about"
              className="hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex-1 flex justify-end gap-3">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-foreground hover:scale-105 transition-transform"
            >
              <Link href="https://github.com/yourusername" target="_blank">
                <Github className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-foreground hover:scale-105 transition-transform"
            >
              <Link href="https://linkedin.com/in/yourusername" target="_blank">
                <Linkedin className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-foreground hover:scale-105 transition-transform"
            >
              <Link href="https://twitter.com/yourusername" target="_blank">
                <Twitter className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8" />

        {/* Bottom Note */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sushanto Kumar. All rights reserved.</p>
          <p className="text-muted-foreground/80">
            Designed with ❤️ using Next.js & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}

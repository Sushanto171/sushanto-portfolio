
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createLucideIcon, Github, Linkedin, } from "lucide-react";
import ContainerWrapper from "./ContainerWrapper";
import GithubContributionsSection from "../modules/home/Github/GithubContributionsSection";
import GitBranch from "../ui/GitBranch";

const XIcon =createLucideIcon("X", [
  [
    "path",
    {
      d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      stroke: "none",
      fill: "currentColor",
    },
  ],
]);

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background mt-18">
      <ContainerWrapper>
        <GithubContributionsSection />
      <div className="py-10">
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
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
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
              <Link href="https://github.com/sushanto171" target="_blank">
                <Github className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-foreground hover:scale-105 transition-transform"
            >
              <Link href="https://linkedin.com/in/sushantokumar" target="_blank">
                <Linkedin className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-foreground hover:scale-105 transition-transform"
            >
              <Link href="https://x.com/sushanto171" target="_blank">
                <XIcon className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8" />

        {/* Bottom Note */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sushanto Kumar. All rights reserved.</p>
          <div className="flex items-center gap-3">
          <a href="https://github.com/Sushanto171/sushanto-portfolio" target="_blank" >
          <GitBranch fill="#ffffff"  />
          </a>
          <p className="text-muted-foreground/80">
            Designed with ❤️ using Next.js & shadcn/ui
          </p>
          </div>
        </div>
      </div>
      </ContainerWrapper>
    </footer>
  );
}

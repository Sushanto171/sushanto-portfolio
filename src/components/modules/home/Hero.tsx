import ContainerWrapper from "@/components/shared/ContainerWrapper";
import { MotionWrapper } from "@/components/shared/MotionWrapper";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative  py-20 overflow-hidden ">
      {/* Gradient background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-accent/10 to-background opacity-80 blur-3xl" />
      <ContainerWrapper className="flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content (wrapped in MotionWrapper) */}
        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center md:text-left"
        >
          <p className="text-sm uppercase tracking-widest text-accent font-semibold">
            👋 Hello, I’m
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Sushanto Kumar
            </span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A passionate{" "}
            <span className="font-semibold text-foreground">
              Frontend Developer
            </span>{" "}
            crafting interactive, modern, and visually appealing web
            experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              asChild
            >
              <a href="/cv/Sushanto_Kumar_CV.pdf" download>
                <Download className="mr-2 h-5 w-5" /> Download CV
              </a>
            </Button>

            <Button
              size="lg"
              className="border border-primary/30 text-primary bg-primary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" /> Contact Me
              </a>
            </Button>
          </div>
        </MotionWrapper>

        {/* Image (also wrapped in MotionWrapper) */}
        <MotionWrapper
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-0"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/40 hover:ring-accent/60 transition-all duration-500">
            <Image
              src="/sushanto.jpg"
              alt="Sushanto Kumar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </MotionWrapper>
      </ContainerWrapper>
    </section>
  );
}

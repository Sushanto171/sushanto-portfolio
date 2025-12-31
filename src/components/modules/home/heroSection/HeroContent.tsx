import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import { Fragment } from 'react';

export default function HeroContent() {
  return (
    <Fragment>
      <p className="text-xs sm:text-sm uppercase tracking-widest text-accent font-semibold">
        👋 Hello, I’m
      </p>

      <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Sushanto Kumar
        </span>
      </h1>

      <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
        I am a  <span className="font-semibold text-foreground">
          Full-Stack Engineer
        </span>{" "} building scalable, high-performance web applications with React, Node.js, and Next.js.
      </p>


      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
        <Button size="lg" asChild>
          <a href="/cv/Sushanto_Kumar_CV.pdf" download>
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </a>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
          asChild
        >
          <a href="#contact">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </a>
        </Button>
      </div>
    </Fragment>
  );
}
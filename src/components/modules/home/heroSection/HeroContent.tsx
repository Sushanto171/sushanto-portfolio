import ResumeButton from '@/components/shared/navbar/ResumeButton';
import { Fragment } from 'react';
import ContactMeButton from './ContactMeButton';

export default function HeroContent() {
  return (
    <Fragment>
       <p className="text-xs sm:text-sm uppercase tracking-widest text-accent font-semibold flex items-center gap-1">
      <span className="inline-block animate-wave text-xl">👋</span> Hello, I’m
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
        <ResumeButton />
        <ContactMeButton />
      </div>
    </Fragment>
  );
}
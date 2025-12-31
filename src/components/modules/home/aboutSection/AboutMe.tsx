import ResumeButton from "@/components/shared/navbar/ResumeButton";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Code, Rocket } from "lucide-react";
import Image from "next/image";
import ContactMeButton from "../heroSection/ContactMeButton";
import SectionHeader from "@/components/SectionHeader";

export default function AboutMe() {
  return (
    <section id="about" className="relative flex w-full flex-col md:pt-18">
      <div className="flex flex-1 flex-col ">
        {/* Section Header */}
      <SectionHeader title="About Me" />

        {/* Main Feature Content */}
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-12  w-full px-4 py-6">
            {/* Left Column: Text & Bio */}
            <div className="flex flex-col gap-8 flex-[1.5]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h1 className="text-foreground tracking-tight text-3xl font-bold leading-snug md:text-4xl md:font-black">
                    Building scalable solutions with a passion for clean code.
                  </h1>

                  <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                    Hello! I’m <span className="font-semibold text-foreground">Sushanto Chandra Sharkar</span> from Dhaka, Bangladesh. While my academic background is in BSc Botany, I discovered a passion for coding and web development along the way.
                  </p>

                  <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                    What started as curiosity quickly grew into a love for creating intuitive, dynamic, and visually engaging web experiences. I enjoy exploring new technologies and finding creative ways to turn ideas into functional, real-world projects.
                  </p>

                  <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                    I thrive on solving complex problems with clean, efficient code, building responsive applications that are both performant and user-friendly. Continuous learning drives me - I’m always experimenting with frameworks, reading tech blogs, and sharpening my skills to deliver better solutions.
                  </p>

                  <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                    Outside of coding, you’ll often find me exploring the latest in web technologies or crafting small side projects that push my creativity further.
                  </p>
                </div>


                {/* Buttons */}
                <div className="flex gap-4 pt-2 flex-wrap">
                  <ResumeButton />
                  <ContactMeButton />

                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <Card className="bg-background/50 border border-border">
                  <CardContent className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <p className="text-foreground text-lg font-bold">3+ Projects</p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Personal and academic projects demonstrating full-stack development skills.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border border-border">
                  <CardContent className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                        <Rocket className="h-5 w-5" />
                      </div>
                      <p className="text-foreground text-lg font-bold">Core Skills</p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      React, Node.js, Next.js, MongoDB, TypeScript, TailwindCSS, Postgress
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border border-border">
                  <CardContent className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                        <Code className="h-5 w-5" />
                      </div>
                      <p className="text-foreground text-lg font-bold">Learning & Growth</p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Continuously building skills, experimenting with new technologies, and completing projects.
                    </p>
                  </CardContent>
                </Card>
              </div>

            </div>

            {/* Right Column: Image */}
            <div className="flex flex-1 justify-start pt-2 lg:pt-0">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB628oqFXvOTtKshErvk4hxw7xj-Bbo3RvcP5R7h_X4PSz1YWFKOdfn1l1_JOTJzWNMZKZeQ2dPHiYdwCzAz9Kg5l_miVAJ0jsfkdAyzGhtyBqHNz-vXrnuTBote-LVVS1yqsE5iDdb7HNVY9xpZSHR2-YgFnFLPdTF6j9w-2k1w17DRBUOtK7JQqgh4CcnVOSXC-PTvM0iDqZ5QybujwXc0EGCmDyLhOG3lq40Jy0-nMDHGFqhyrH5E7DBawadhuof-JLBocigeTE"
                  alt="Professional portrait of a software engineer"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating circle */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/30 rounded-full blur-2xl z-0" />
                {/* Bottom info */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-border z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-foreground text-xs font-medium tracking-wide uppercase">
                      Open to work
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

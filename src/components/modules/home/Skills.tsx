import { MotionWrapper } from "@/components/shared/MotionWrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skillsData } from "@/constant/skills";
import Image from "next/image";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative ">
      {/* Section Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-accent/5 to-background blur-3xl opacity-60" />

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground">Tech Stacks</h2>
        <p className="text-muted-foreground mt-2">
          Technologies I use to craft digital experiences
        </p>
      </div>

      {/* Skills Grid */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"> */}
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap justify-center sm:gap-6">
        {skillsData.map((skill, index) => (
          <MotionWrapper
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 ">
              <CardContent className="flex items-center sm:justify-around gap-2 sm:gap-6">
                {/* Icon */}
                <Image
                  src={skill.icon}
                  alt={skill.label}
                  height="20"
                  width="20"
                  className="size-4 sm:size-9 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex flex-col justify-start items-start">
                  <p className="font-medium text-foreground">{skill.label}</p>

                  {/* Category Badge */}
                  <Badge
                    variant={"destructive"}
                    className="capitalize border mt-0.5 bg-muted-foreground/18 scale-80 sm:scale-90
                    text-foreground/45"
                  >
                    {skill.category}
                  </Badge>
                </div>
                {/* Skill Label */}
              </CardContent>
            </Card>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}

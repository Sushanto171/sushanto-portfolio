import ContainerWrapper from "@/components/shared/ContainerWrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Github,
  Info,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface ProjectData {
  id:number,
  title: string;
  description: string;
  thumbnail: string;
  liveLink: string;
  repoLink: string;
  features: string[];
  tags: string[];
  challenges: string[];
  learned: string[];
  slug: string;
}

interface ProjectDetailsLayoutProps {
  project: ProjectData;
}

export default function ProjectDetailsLayout({ project }: ProjectDetailsLayoutProps) {
  return (
    <main className="flex-1 py-8">
      <ContainerWrapper>
        <div className="flex flex-col gap-8">
          {/* Breadcrumbs */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/projects">Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex gap-3">
              <Button asChild>
                <a href={project.liveLink} target="_blank">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild className="hover:text-primary">
                <a href={project.repoLink} target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  Source
                </a>
              </Button>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hero Image */}
          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </Card>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left */}
            <div className="lg:col-span-2 space-y-10">
              {/* About */}
              <section className="space-y-4">
                <h3 className="flex items-center gap-2 text-xl font-bold">
                  <Info className="h-5 w-5 text-primary" />
                  About the Project
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </section>

              {/* Features */}
              <section className="space-y-5">
                <h3 className="flex items-center gap-2 text-xl font-bold">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Key Features
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature) => (
                    <Card key={feature}>
                      <CardContent className="p-4 space-y-1">
                        <h4 className="font-semibold">{feature}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Right */}
            <div className="space-y-6">
              {/* Challenges */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Technical Challenges
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {project.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Lessons */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Lessons Learned
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {project.learned.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </main>
  );
}

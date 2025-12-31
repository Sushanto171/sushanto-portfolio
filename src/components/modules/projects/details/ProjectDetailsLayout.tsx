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

export default function ProjectDetailsLayout() {
  return (
    <main className="flex-1 py-8 ">
      <ContainerWrapper>
        <div className=" flex flex-col gap-8">
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
                <BreadcrumbPage>E-Commerce Analytics</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                E-Commerce Analytics Dashboard
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A real-time dashboard for high-volume merchants to monitor sales,
                inventory, and generate automated reports.
              </p>
            </div>

            <div className="flex gap-3">
              <Button asChild>
                <a href="#" target="_blank">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  Source
                </a>
              </Button>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "D3.js",
              "Node.js",
              "PostgreSQL",
              "AWS",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Hero Image */}
          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjAtxctq2jqyel04qXY_oZ46WN8FKnDDq4ruTASDEtQu9tL31GdZ0cAN6Fi7j-GryH6mgbBQuyJTyRI7UfK_4mWhvZ8N_g2xFoEobu_GaiS_0VvwslU2xgxoCyWzdwXHEOxy1dRN9q6Lu7bRnmW9TgsBaJZE0IOAynwMae0E0jcH8s9PWd1U90X-qo65fqPginL0YXzsGv6ouQFU29Vtk_Z-SJkiF3UI-I3L8OlOKQ4EsiM9tVddP8gcR-B5Dtq1qthOqKYrYg1EI"
                alt="Project preview"
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
                  This dashboard was built to solve fragmented data workflows for
                  e-commerce merchants. Sales, inventory, and analytics data are
                  aggregated into a single system with near real-time updates.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Performance optimization was a core focus—large datasets are
                  rendered efficiently using virtualization and optimized chart
                  bindings.
                </p>
              </section>

              {/* Features */}
              <section className="space-y-5">
                <h3 className="flex items-center gap-2 text-xl font-bold">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Key Features
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Real-time Visualization",
                      desc: "Live sales and inventory updates using WebSockets.",
                    },
                    {
                      title: "Role-Based Access",
                      desc: "Secure permission layers for different user roles.",
                    },
                    {
                      title: "Automated Reports",
                      desc: "Scheduled PDF and Excel exports for stakeholders.",
                    },
                    {
                      title: "API Integrations",
                      desc: "Stripe, PayPal, and Shopify integrations.",
                    },
                  ].map((feature) => (
                    <Card key={feature.title}>
                      <CardContent className="p-4 space-y-1">
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.desc}
                        </p>
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
                    <li>
                      <strong className="block text-foreground">
                        High-density charts
                      </strong>
                      Optimized rendering for datasets exceeding 50k points.
                    </li>
                    <li>
                      <strong className="block text-foreground">
                        State consistency
                      </strong>
                      Implemented optimistic UI with cache invalidation.
                    </li>
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
                  <p className="text-sm text-muted-foreground">
                    This project strengthened my understanding of strict
                    TypeScript, SSR performance trade-offs, and scalable data
                    pipelines.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </main>
  );
}

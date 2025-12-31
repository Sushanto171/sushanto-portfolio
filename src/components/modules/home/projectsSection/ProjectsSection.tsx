import { MoveRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

// Example: You can fetch this dynamically or import from a JSON file
const projectsData = [
  {
    id: 1,
    title: "MediCamp – Medical Camp Management",
    description:
      "A full-stack platform to manage medical camps, allowing users to register and organizers to manage participants and schedules.",
    thumbnail:
      "https://res.cloudinary.com/drxi0wuoa/image/upload/v1767173969/portfolio/1767173958225-portfolio.png",
    liveLink: "https://medicamp.vercel.app",
    repoLink: "https://github.com/Sushanto171/medicamp",
    tags: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative pt-24">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Featured Projects</h2>
        </div>
        <a
          className=" flex  gap-2 hover:underline items-center text-primary hover:text-primary/70 font-medium transition-colors"
          href="https://github.com/Sushanto171?tab=repositories"
          target="_blank"
        >
         <span>View Github</span>  {" "} <MoveRight className="hover:underline" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

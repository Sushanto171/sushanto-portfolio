import SectionHeader from "@/components/SectionHeader";
import { MoveRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

// Example: You can fetch this dynamically or import from a JSON file
export const projectsData = [
  {
    "id": 3,
    "slug": "Travelynk – Social Travel & Meetup Platform",
    "title": "Travelynk – Social Travel & Meetup Platform",
    "description": "Subscription-based platform connecting travelers heading to similar destinations, enabling trip sharing, discovery of companions, and secure monetization.",
    "thumbnail": "https://res.cloudinary.com/drxi0wuoa/image/upload/v1767208764/portfolio/1767208760639-travelynk.png",
    "liveLink": "https://travelynk-mu.vercel.app",
    "repoLink": "https://github.com/Sushanto171/travelynk",
    "features": [
      "Authentication & role-based access (User/Admin)",
      "Travel plan CRUD and participant management",
      "Search & match travelers by interests and destinations",
      "Subscription & Stripe payment integration",
      "Review & rating system for trips"
    ],
    "tags": [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TailwindCSS",
      "Stripe"
    ],
    "challenges": [
      "Efficient filtering and matching algorithms",
      "Secure subscription handling"
    ],
    "learned": [
      "Type-safe backend with Prisma",
      "Stripe integration",
      "Dynamic search & matching logic"
    ],
    "createdAt": "2025-12-31T19:19:25.764Z",
    "updatedAt": "2025-12-31T19:19:25.764Z",
    "authorId": 1
  },
  {
    "id": 2,
    "slug": "Amar Taka – Digital Wallet & Financial Platform",
    "title": "Amar Taka – Digital Wallet & Financial Platform",
    "description": "A modern digital wallet and financial platform managing transactions, cash-in/out, analytics, and role-based access for Users, Agents, and Admins.",
    "thumbnail": "https://res.cloudinary.com/drxi0wuoa/image/upload/v1767208268/portfolio/1767208262769-amar-taka.png",
    "liveLink": "https://amar-taka.vercel.app/",
    "repoLink": "https://github.com/Sushanto171/amar-taka",
    "features": [
      "Role-based wallet management",
      "Transaction handling: Cash-in, Cash-out, transfers",
      "Analytics dashboards with charts",
      "Secure JWT authentication"
    ],
    "tags": [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
      "TailwindCSS"
    ],
    "challenges": [
      "Ensuring transactional consistency",
      "Implementing role-based access control"
    ],
    "learned": [
      "Mongoose transactions",
      "Redux Toolkit for state management",
      "Next.js routing and SSR"
    ],
    "createdAt": "2025-12-31T19:11:08.781Z",
    "updatedAt": "2025-12-31T19:11:08.781Z",
    "authorId": 1
  },
  {
    "id": 1,
    "slug": "MediCamp – Medical Camp Management",
    "title": "MediCamp – Medical Camp Management",
    "description": "A full-stack platform to manage medical camps, allowing users to register and organizers to manage participants and schedules.",
    "thumbnail": "https://res.cloudinary.com/drxi0wuoa/image/upload/v1767173969/portfolio/1767173958225-portfolio.png",
    "liveLink": "https://medicamp.vercel.app",
    "repoLink": "https://github.com/Sushanto171/medicamp",
    "features": [
      "JWT authentication for organizers",
      "Search camps by title, date, or location",
      "Responsive dashboard with TailwindCSS",
      "Camp participant management"
    ],
    "tags": [
      "Next.js",
      "Node.js",
      "MongoDB",
      "TailwindCSS"
    ],
    "challenges": [
      "Efficiently handling dynamic search queries",
      "Managing nested participant data with Mongoose"
    ],
    "learned": [
      "Data modeling with MongoDB and Prisma",
      "Implementing secure authentication flows"
    ],
    "createdAt": "2025-12-31T09:39:29.077Z",
    "updatedAt": "2025-12-31T09:39:29.077Z",
    "authorId": 1
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative pt-18">
      <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <SectionHeader title="Featured Projects" />
        <div>
          <a
            className=" flex  gap-2 hover:underline items-center text-primary hover:text-primary/70 font-medium transition-colors"
            href="https://github.com/Sushanto171?tab=repositories"
            target="_blank"
          >
            <span>View Github</span>  {" "} <MoveRight className="hover:underline" />
          </a>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

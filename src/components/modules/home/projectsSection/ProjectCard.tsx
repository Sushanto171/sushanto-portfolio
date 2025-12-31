import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FC } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  liveLink?: string;
  repoLink?: string;
  tags: string[];
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, thumbnail, liveLink, repoLink, tags }) => {
  return (
    <Card className="overflow-hidden pt-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border">
      <div className="relative h-48 w-full">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <CardContent className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{title}</h3>
          <div className="flex gap-2">
            {repoLink && (
              <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>

        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

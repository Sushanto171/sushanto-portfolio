import { projectsData } from '@/components/modules/home/projectsSection/ProjectsSection';
import ProjectDetailsLayout from '@/components/modules/projects/details/ProjectDetailsLayout';
// Example: You can fetch this dynamically or import from a JSON file


export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const query = decodeURIComponent(slug)
  const project = projectsData.find(p => p.slug === query)
  if (!project) return

  return (
    <ProjectDetailsLayout project={project} />
  );
}
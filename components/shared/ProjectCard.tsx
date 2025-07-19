// components/shared/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/data';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const statusColor = project.status === 'Resell available' 
    ? 'bg-accent text-white' 
    : 'bg-secondary text-white';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-2xl">
      <Link href={`/projects/${project.slug}`}>
        <div className="relative">
          <Image
            src={project.mainImage}
            alt={project.name}
            width={500}
            height={500}
            className="w-full h-100 object-cover"
          />
          <span className={`absolute top-4 right-4 px-3 py-1 text-sm font-bold rounded-full ${statusColor}`}>
            {project.status}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-2xl text-primary mb-2">{project.name}</h3>
          <p className="text-dark/80 mb-4">{project.location}</p>
          <div className="text-primary font-semibold hover:underline">
            View Details &rarr;
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
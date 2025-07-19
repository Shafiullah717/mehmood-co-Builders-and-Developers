// components/projects/ProjectDetailHeader.tsx
import { Project } from '@/data/data';

interface ProjectDetailHeaderProps {
  project: Project;
}

const ProjectDetailHeader: React.FC<ProjectDetailHeaderProps> = ({ project }) => {
  const statusColor = project.status === 'Resell available'
    ? 'bg-accent'
    : project.status === 'Ongoing'
      ? 'bg-secondary'
      : 'bg-primary'; // Or another color for Completed

  return (
    <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-0"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
          {project.name}
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-90 drop-shadow-md">
          {project.location}
        </p>
        <span className={`inline-block px-5 py-2 text-lg font-bold rounded-full shadow-lg ${statusColor} text-white`}>
          Status: {project.status}
        </span>
      </div>
    </section>
  );
};

export default ProjectDetailHeader;
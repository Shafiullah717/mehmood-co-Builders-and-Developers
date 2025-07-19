// components/projects/ProjectFeaturesDescription.tsx
import { Project } from '@/data/data';

interface ProjectFeaturesDescriptionProps {
  project: Project;
}

const ProjectFeaturesDescription: React.FC<ProjectFeaturesDescriptionProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-medium p-6">
      <h3 className="text-2xl font-bold text-primary mb-4">Description</h3>
      <p className="text-dark leading-relaxed mb-6">
        {project.description}
      </p>

      {project.features && project.features.length > 0 && (
        <>
          <h3 className="text-2xl font-bold text-primary mb-4">Key Features</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-dark list-none p-0">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center text-lg">
                <svg className="w-5 h-5 text-secondary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ProjectFeaturesDescription;
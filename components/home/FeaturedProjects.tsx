// components/home/FeaturedProjects.tsx
import { projects } from '@/data/data';
import ProjectCard from '@/components/shared/ProjectCard'; // We will create this next
import Link from 'next/link';

const FeaturedProjects = () => {
  // Show only the first 2-3 projects on the home page
  const featured = projects.slice(0, 2);

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-primary mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link href="/projects" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                View All Projects
            </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
// app/projects/[slug]/page.tsx
import { getProjectBySlug, getProjects} from '@/data/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProjectDetailHeader from '@/components/projects/ProjectDetailHeader';
import ProjectImageGallery from '@/components/projects/ProjectImageGallery';
import ProjectLocationMap from '@/components/projects/ProjectLocationMap';
import ProjectFeaturesDescription from '@/components/projects/ProjectFeaturesDescription';
import ProjectBrochureSection from '@/components/projects/ProjectBrochureSection';
import SectionHeader from '@/components/shared/SectionHeader';

// Generate static params for all project slugs at build time
export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata dynamically for each project page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; // Await the params Promise
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found - Mehmood & Co',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.name} - Mehmood & Co Builders and Developers`,
    description: project.description.substring(0, 160) + '...',
    openGraph: {
      title: `${project.name} - Mehmood & Co Builders and Developers`,
      description: project.description.substring(0, 160) + '...',
      url: `https://www.mehmoodbuilders.com/projects/${project.slug}`,
      siteName: 'Mehmood & Co Builders and Developers',
      images: [
        {
          url: project.mainImage,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
      type: 'article',
    },
  };
}

// Main page component
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await the params Promise
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound(); // Renders Next.js's default 404 page
  }

  return (
    <main className="min-h-screen bg-light text-dark">
      <ProjectDetailHeader project={project} />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery Section */}
          <div>
            <SectionHeader title="Gallery" subtitle="Visualizing Excellence" />
            <ProjectImageGallery images={project.gallery} projectName={project.name} />
          </div>

          {/* Description & Features Section */}
          <div>
            <SectionHeader title="Project Details" subtitle="Insight into the Project" />
            <ProjectFeaturesDescription project={project} />
          </div>
        </div>

        {/* Location Map */}
        <div className="mt-16 md:mt-24">
          <SectionHeader title="Location" subtitle="Find Us On The Map" />
          <ProjectLocationMap mapUrl={project.googleMapsUrl} projectName={project.name} />
        </div>

        {/* Brochure Section */}
        <div className="mt-16 md:mt-24">
          <ProjectBrochureSection brochureUrl={project.brochureUrl} projectName={project.name} />
        </div>
      </section>
    </main>
  );
}
// app/projects/page.tsx
import type { Metadata } from 'next';
import { getProjects } from '@/data/data';
import SectionHeader from '@/components/shared/SectionHeader';
import ProjectListingHero from '@/components/projects/ProjectListingHero';
import ProjectListContainer from '@/components/projects/ProjectListContainer'; // New Client Component

export const metadata: Metadata = {
  title: 'Our Projects - Mehmood & Co Builders and Developers',
  description: 'Explore completed, ongoing, and sold out projects by Mehmood & Co Builders and Developers. Discover our quality construction and land development work.',
  openGraph: {
    title: 'Our Projects - Mehmood & Co Builders and Developers',
    description: 'Explore completed, ongoing, and sold out projects by Mehmood & Co Builders and Developers. Discover our quality construction and land development work.',
    url: 'https://www.mehmoodbuilders.com/projects', // Replace with actual domain
    siteName: 'Mehmood & Co Builders and Developers',
    images: [
      {
        url: '/images/og-projects.jpg', // Placeholder image for Open Graph, create this
        width: 1200,
        height: 630,
        alt: 'Mehmood & Co Projects',
      },
    ],
    type: 'website',
  },
};

export default function ProjectsPage() {
  const allProjects = getProjects(); // Fetch all projects from data.ts (Server-side)

  // Determine unique statuses for filters
  const uniqueStatuses = Array.from(new Set(allProjects.map(p => p.status)));

  return (
    <main className="min-h-screen bg-light text-dark">
      <ProjectListingHero />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <SectionHeader
          title="Our Portfolio"
          subtitle="Showcasing Excellence in Every Project"
        />

        {/* ProjectListContainer is a client component that handles filtering and rendering */}
        <ProjectListContainer allProjects={allProjects} uniqueStatuses={uniqueStatuses} />
      </section>
    </main>
  );
}
// app/about-us/page.tsx
import type { Metadata } from 'next';
import { getAboutUsData } from '@/data/data';

import AboutHero from '@/components/about/AboutHero';
import CompanyMissionVision from '@/components/about/CompanyMissionVision';
import OwnerBio from '@/components/about/OwnerBio';
import AboutCTA from '@/components/about/AboutCTA';
import SectionHeader from '@/components/shared/SectionHeader'; // <-- Updated import path

export const metadata: Metadata = {
  title: 'About Us - Mehmood & Co Builders and Developers',
  description: 'Learn more about Mehmood & Co Builders and Developers, our mission, vision, values, and our owner Sajjid Mehmood Cheema.',
  openGraph: {
    title: 'About Us - Mehmood & Co Builders and Developers',
    description: 'Learn more about Mehmood & Co Builders and Developers, our mission, vision, values, and our owner Sajjid Mehmood Cheema.',
    url: 'https://www.mehmoodbuilders.com/about-us', // Replace with actual domain
    siteName: 'Mehmood & Co Builders and Developers',
    images: [
      {
        url: '/images/og-about.jpg', // Placeholder image for Open Graph
        width: 1200,
        height: 630,
        alt: 'About Mehmood & Co Builders and Developers',
      },
    ],
    type: 'website',
  },
};

export default function AboutUsPage() {
  const { aboutHero, missionVision, ownerBio, aboutCTA } = getAboutUsData();

  return (
    <main className="min-h-screen bg-light text-dark">
      <AboutHero data={aboutHero} />

      <section className="py-16 md:py-24 container mx-auto px-4">
        <SectionHeader title="Our Foundation" subtitle="Mission, Vision & Values" />
        <CompanyMissionVision data={missionVision} />
      </section>

      <section className="py-16 md:py-24 bg-medium/50 container mx-auto px-4">
        <SectionHeader title="Meet Our Founder" subtitle="Sajjid Mehmood Cheema" />
        <OwnerBio data={ownerBio} />
      </section>

      <section className="py-16 md:py-24">
        <AboutCTA data={aboutCTA} />
      </section>
    </main>
  );
}
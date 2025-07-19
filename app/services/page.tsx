// app/services/page.tsx
import type { Metadata } from 'next';
import { getServices } from '@/data/data';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceListingHero from '@/components/services/ServiceListingHero'; // New component
import ServiceCard from '@/components/services/ServiceCard'; // New component

export const metadata: Metadata = {
  title: 'Our Services - Mehmood & Co Builders and Developers',
  description: 'Discover the comprehensive real estate services offered by Mehmood & Co Builders and Developers, including land development, architectural planning, and construction.',
  openGraph: {
    title: 'Our Services - Mehmood & Co Builders and Developers',
    description: 'Explore our expertise in land development, architectural planning, and high-quality construction.',
    url: 'https://www.mehmoodbuilders.com/services', // Replace with actual domain
    siteName: 'Mehmood & Co Builders and Developers',
    images: [
      {
        url: '/images/og-services.jpg', // Placeholder image for Open Graph, create this
        width: 1200,
        height: 630,
        alt: 'Mehmood & Co Services',
      },
    ],
    type: 'website',
  },
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <main className="min-h-screen bg-light text-dark">
      <ServiceListingHero />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <SectionHeader
          title="Our Expertise"
          subtitle="Comprehensive Solutions for Your Real Estate Needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.length > 0 ? (
            services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))
          ) : (
            <p className="col-span-full text-center text-dark text-lg">
              No services found at the moment. Please check back later!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
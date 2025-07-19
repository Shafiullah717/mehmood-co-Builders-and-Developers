// app/services/[slug]/page.tsx
import { getServiceBySlug, getServices} from '@/data/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceDetailHero from '@/components/services/ServiceDetailHero'; // New component
import ServiceContent from '@/components/services/ServiceContent'; // New component
import ServiceProcess from '@/components/services/ServiceProcess'; // New component
import ServiceCTA from '@/components/services/ServiceCTA'; // New component
import Image from 'next/image';

// Generate static params for all service slugs at build time
export async function generateStaticParams() {
  const services = getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata dynamically for each service page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; // Await the params Promise
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found - Mehmood & Co',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.name} - Mehmood & Co Builders and Developers`,
    description: service.shortDescription + ' ' + service.longDescription.substring(0, 100) + '...', // Combined description
    openGraph: {
      title: `${service.name} - Mehmood & Co Builders and Developers`,
      description: service.shortDescription + ' ' + service.longDescription.substring(0, 100) + '...',
      url: `https://www.mehmoodbuilders.com/services/${service.slug}`, // Replace with actual domain
      siteName: 'Mehmood & Co Builders and Developers',
      images: [
        {
          url: service.mainImage, // Use service's main image for OG
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
      type: 'article', // Or 'website' if preferred
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await the params Promise
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound(); // Renders Next.js's default 404 page
  }

  return (
    <main className="min-h-screen bg-light text-dark">
      <ServiceDetailHero service={service} />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (Description & Benefits) */}
          <div className="lg:col-span-2">
            <SectionHeader title="Service Overview" subtitle={`Discover our expertise in ${service.name}`} />
            <ServiceContent service={service} />
          </div>

          {/* Service Image (Can be on the side or within content based on design) */}
          <div className="lg:col-span-1 flex justify-center items-start pt-16">
            <div className="relative w-full h-80 lg:h-[400px] rounded-lg shadow-xl overflow-hidden">
              <Image
                src={service.mainImage}
                alt={service.name}
                layout="fill"
                objectFit="cover"
                priority // Load eagerly as it's a main image on detail page
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Service Process */}
        <div className="mt-16 md:mt-24">
          <SectionHeader title="Our Process" subtitle={`How we deliver successful ${service.name} projects`} />
          <ServiceProcess processSteps={service.process} />
        </div>

        {/* Call to Action */}
        <div className="mt-16 md:mt-24">
          <ServiceCTA service={service} />
        </div>
      </section>
    </main>
  );
}
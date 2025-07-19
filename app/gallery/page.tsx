// app/gallery/page.tsx
import type { Metadata } from 'next';
import { getGalleryItems, getProjects } from '@/data/data';
import SectionHeader from '@/components/shared/SectionHeader';
import GalleryHero from '@/components/gallery/GalleryHero'; // New component
import GalleryGrid from '@/components/gallery/GalleryGrid'; // New Client Component

export const metadata: Metadata = {
  title: 'Our Gallery - Mehmood & Co Builders and Developers',
  description: 'Explore our visual portfolio of successful land development and construction projects, architectural designs, and team work.',
  openGraph: {
    title: 'Our Gallery - Mehmood & Co Builders and Developers',
    description: 'See the quality and scale of our work through our extensive image gallery.',
    url: 'https://www.mehmoodbuilders.com/gallery', // Replace with actual domain
    siteName: 'Mehmood & Co Builders and Developers',
    images: [
      {
        url: '/images/og-gallery.jpg', // Placeholder image for Open Graph, create this
        width: 1200,
        height: 630,
        alt: 'Mehmood & Co Gallery',
      },
    ],
    type: 'website',
  },
};

export default function GalleryPage() {
  const allGalleryItems = getGalleryItems();
  const projects = getProjects();

  // Dynamically get unique categories from all gallery items and project/service names
  const dynamicCategories = Array.from(new Set([
    'All', // Default category
    ...allGalleryItems.map(item => item.category), // Categories defined in galleryItems
    // Add project names as categories
    ...projects.map(project => project.name),
    // Add service names as categories (if relevant to your image categorization)
    // ...services.map(service => service.name)
  ]));

  // Ensure unique categories and desired order, remove duplicates if any from above merge
  const uniqueCategories = Array.from(new Set(dynamicCategories)).sort((a, b) => {
    if (a === 'All') return -1; // 'All' comes first
    if (b === 'All') return 1;
    return a.localeCompare(b);
  });


  return (
    <main className="min-h-screen bg-light text-dark">
      <GalleryHero />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <SectionHeader
          title="Our Visual Journey"
          subtitle="A Glimpse into Our Projects and Expertise"
        />

        {/* GalleryGrid is a client component that handles filtering and lightbox */}
        <GalleryGrid allItems={allGalleryItems} categories={uniqueCategories} />
      </section>
    </main>
  );
}
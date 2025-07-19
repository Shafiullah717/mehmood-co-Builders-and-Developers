// components/gallery/GalleryGrid.tsx
'use client';

import { useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '@/data/data';

interface GalleryGridProps {
  allItems: GalleryItem[];
  categories: string[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ allItems, categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return allItems;
    }
    return allItems.filter(item => item.category === activeCategory);
  }, [allItems, activeCategory]);

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
  }, [filteredItems]);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems]);

  // Handle keyboard navigation for lightbox
  // This effect will run when the component mounts and clean up when it unmounts
  if (typeof window !== 'undefined') { // Ensure window is defined (client-side)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    }, [isLightboxOpen, goToNext, goToPrev, closeLightbox]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState(() => { // Using useState with an initializer function for componentDidMount/WillUnmount effect
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    });
  }


  return (
    <div className="mt-12">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200
              ${activeCategory === category ? 'bg-primary text-white shadow-md' : 'bg-medium text-dark hover:bg-medium/70'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }} // Staggered animation
              className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="text-white text-lg font-semibold text-center drop-shadow-md">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-dark text-lg py-8">
            No images found for this category.
          </p>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && filteredItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark bg-opacity-90 flex items-center justify-center z-[999] p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full h-[85vh] flex flex-col justify-center items-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image container
            >
              <div className="relative w-full h-[calc(100%-60px)] md:h-[calc(100%-80px)] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={filteredItems[currentImageIndex].src}
                  alt={filteredItems[currentImageIndex].alt}
                  layout="fill"
                  objectFit="contain" // Use contain for lightbox to show full image
                  className="bg-black rounded-lg" // Background for transparent images
                />
              </div>

              <p className="text-white text-lg md:text-xl font-semibold mt-4 text-center">
                {filteredItems[currentImageIndex].title}
              </p>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-4xl p-2 rounded-full bg-dark/50 hover:bg-dark/70 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                ×
              </button>

              {/* Navigation Buttons */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={goToPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-5xl p-2 rounded-full bg-dark/50 hover:bg-dark/70 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    ‹
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-5xl p-2 rounded-full bg-dark/50 hover:bg-dark/70 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    ›
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;
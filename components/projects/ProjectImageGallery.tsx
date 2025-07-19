// components/projects/ProjectImageGallery.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectImageGalleryProps {
  images: string[];
  projectName: string;
}

const ProjectImageGallery: React.FC<ProjectImageGalleryProps> = ({ images, projectName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-medium p-4">
      {/* Main Display Image */}
      <div className="relative w-full h-80 md:h-[500px] mb-4 rounded-md overflow-hidden">
        <Image
          src={images[currentImageIndex]}
          alt={`${projectName} - Image ${currentImageIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => openLightbox(currentImageIndex)}
          priority={currentImageIndex === 0} // Prioritize first image
        />
      </div>

      {/* Thumbnails */}
      <div className="flex flex-wrap gap-3 justify-center">
        {images.map((image, index) => (
          <div
            key={image}
            className={`relative w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden cursor-pointer border-2 ${
              index === currentImageIndex ? 'border-primary shadow-md' : 'border-transparent'
            } transition-all duration-200`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <Image
              src={image}
              alt={`${projectName} thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
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
              className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            >
              <Image
                src={images[currentImageIndex]}
                alt={`${projectName} - Full Image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="contain" // Use contain for lightbox to show full image
                className="rounded-lg shadow-xl"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-4xl p-2 rounded-full bg-dark/50 hover:bg-dark/70 transition-colors z-50"
              >
                &times;
              </button>

              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl p-2 rounded-full bg-dark/50 hover:bg-dark/70 transition-colors z-50"
                  >
                    &lsaquo;
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl p-2 rounded-full bg-dark/50 hover:bg-dark/70 transition-colors z-50"
                  >
                    &rsaquo;
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

export default ProjectImageGallery;
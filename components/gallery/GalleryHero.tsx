// components/gallery/GalleryHero.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const GalleryHero: React.FC = () => {
  const galleryStats = [
    { value: '28+', label: 'Projects' },
    { value: '450+', label: 'Photos' },
    { value: '15', label: 'Videos' },
    { value: '98%', label: 'Satisfaction' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-16 pb-24 md:pt-0 md:pb-0">
      {/* Background Image with zoom effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
      >
        <Image
          src="/images/gallery/gallery-hero-bg.png"
          alt="Architectural models and blueprints on a table"
          fill
          priority
          className="object-cover brightness-[0.3]"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C6C] via-[#2D2F9C]/60 to-transparent z-0"></div>
      
      {/* Decorative floating photo corners */}
      <motion.div 
        className="absolute top-[15%] left-[10%] text-3xl md:text-4xl"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        📷
      </motion.div>
      <motion.div 
        className="absolute bottom-[25%] right-[15%] text-3xl md:text-4xl"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -15, 0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🖼️
      </motion.div>
      <motion.div 
        className="absolute top-[30%] right-[10%] text-3xl md:text-4xl"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 15, 0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🎥
      </motion.div>
      
      {/* Content Container */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full pt-10 pb-20 md:pt-0 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-4 md:mb-6"
        >
          <div className="bg-white/10 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full">
            <span className="text-[#00A14B] font-medium text-xs md:text-sm">
              VISUALIZING EXCELLENCE
            </span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-3 md:mb-4 drop-shadow-2xl"
        >
          <span className="block">Our Vision</span>
          <span className="block bg-gradient-to-r from-white via-[#EF1C1C] to-white bg-clip-text text-transparent mt-2">
            Brought to Life
          </span>
        </motion.h1>
        
        <motion.div 
          className="w-16 md:w-24 h-1 bg-[#EF1C1C] mx-auto my-4 md:my-6"
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-base md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg mb-6 md:mb-10 px-2"
        >
          Explore our extensive portfolio through photos, videos and virtual tours
        </motion.p>
        
        {/* Gallery Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          {['Photos', 'Videos', 'Virtual Tours', 'Before & After'].map((category, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(45, 47, 156, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-sm md:text-base font-medium">
                {category}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Gallery Stats */}
        <motion.div 
          className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          {galleryStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg text-center"
            >
              <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-white/80 text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Founder signature */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:transform-none flex flex-col items-center md:items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <p className="text-white/80 text-xs md:text-sm font-light">Sajjid Mehmood Cheema</p>
        <p className="text-white/60 text-[10px] md:text-xs">Founder & CEO</p>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 md:w-8 md:h-12 rounded-full border-2 border-white/40 flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"
            animate={{ y: [0, 6] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
        <p className="text-white/60 text-[10px] md:text-xs mt-1">Explore Gallery</p>
      </motion.div>
    </section>
  );
};

export default GalleryHero;
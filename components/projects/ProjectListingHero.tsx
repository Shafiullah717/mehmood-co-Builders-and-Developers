// components/projects/ProjectListingHero.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectListingHero: React.FC = () => {
  const projectTypes = [
    { name: 'Residential', count: 12, color: 'bg-[#00A14B]' },
    { name: 'Commercial', count: 8, color: 'bg-[#2D2F9C]' },
    { name: 'Land', count: 5, color: 'bg-[#EF1C1C]' },
    { name: 'Mixed-Use', count: 3, color: 'bg-[#333333]' },
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
          src="/images/projects/projects-hero-bg.png"
          alt="Mehmood & Co Projects Overview"
          fill
          priority
          className="object-cover brightness-[0.3]"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C6C] via-[#2D2F9C]/60 to-transparent z-0"></div>
      
      {/* Content Container - Adjusted for mobile */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full pt-10 pb-20 md:pt-0 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-4 md:mb-6"
        >
          <div className="bg-white/10 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full">
            <span className="text-[#00A14B] font-medium text-xs md:text-sm">
              OVER 28 SUCCESSFUL PROJECTS
            </span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-3 md:mb-4 drop-shadow-2xl"
        >
          <span className="block">Transforming Visions</span>
          <span className="block bg-gradient-to-r from-white via-[#EF1C1C] to-white bg-clip-text text-transparent mt-2">
            Into Landmarks
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
          Explore our diverse portfolio of successful projects
        </motion.p>
        
        {/* Project Type Indicators - Responsive grid */}
        <motion.div 
          className="grid grid-cols-2 md:flex flex-wrap justify-center gap-3 md:gap-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          {projectTypes.map((type, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`${type.color} w-3 h-3 rounded-full`}></div>
              <span className="text-white text-sm md:text-base">
                {type.name} <span className="text-[#00A14B]">({type.count})</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Project Stats - Positioned for mobile */}
        <motion.div 
          className="mt-8 md:mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto md:absolute md:bottom-8 md:left-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { value: '28+', label: 'Projects' },
            { value: '15', label: 'Cities' },
            { value: '98%', label: 'Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm py-2 rounded-lg">
              <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-white/80 text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Founder signature - Mobile position */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:transform-none flex flex-col items-center md:items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <p className="text-white/80 text-xs md:text-sm font-light">Sajjid Mehmood Cheema</p>
        <p className="text-white/60 text-[10px] md:text-xs">Founder & CEO</p>
      </motion.div>
      
      {/* Scroll indicator - Mobile position */}
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
        <p className="text-white/60 text-[10px] md:text-xs mt-1">Explore Projects</p>
      </motion.div>
    </section>
  );
};

export default ProjectListingHero;
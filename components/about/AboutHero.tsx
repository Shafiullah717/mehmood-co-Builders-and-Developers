// components/about/AboutHero.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface AboutHeroProps {
  data: {
    heading: string;
    subheading: string;
    backgroundImage: string;
  };
}

const AboutHero: React.FC<AboutHeroProps> = ({ data }) => {
  const { heading, subheading, backgroundImage } = data;

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-16 pb-24 md:pt-0 md:pb-0">
      {/* Background Image with subtle zoom animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
      >
        <Image
          src={backgroundImage}
          alt="About Us Hero Background - Mehmood & Co Builders and Developers"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C6C] via-[#2D2F9C]/60 to-transparent z-0"></div>
      
      {/* Decorative floating elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-white/20 rounded-full"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-10 h-10 border-2 border-white/20 rounded-lg"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-white/20 rounded-full"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-[#00A14B] font-medium text-sm md:text-base">
              BUILDING EXCELLENCE SINCE 2005
            </span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 drop-shadow-2xl"
        >
          <span className="block mb-2">{heading}</span>
          <motion.div 
            className="w-24 h-1 bg-[#EF1C1C] mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto drop-shadow-lg leading-relaxed"
        >
          {subheading}
        </motion.p>
        
        {/* Values section */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          {['Integrity', 'Quality', 'Innovation', 'Excellence'].map((value, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/20"
            >
              <span className="text-white font-medium">{value}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/40 flex justify-center p-1">
          <motion.div 
            className="w-2 h-2 bg-white rounded-full"
            animate={{ y: [0, 10] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
        <p className="text-white/60 text-xs mt-2">Our Story</p>
      </motion.div>
      
      {/* Founder signature */}
      <motion.div 
        className="absolute bottom-8 right-8 flex flex-col items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p className="text-white/80 text-sm font-light">Sajjid Mehmood Cheema</p>
        <p className="text-white/60 text-xs">Founder & CEO</p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
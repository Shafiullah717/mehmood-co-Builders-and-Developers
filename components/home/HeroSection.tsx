// components/home/HeroSection.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await controls.start({
        scale: [1, 1.02, 1],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
      });
    };
    
    sequence();
  }, [controls]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with zoom effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-home-bg.jpg"
          alt="Modern building construction site with sunset"
          fill
          priority
          className="brightness-[0.3] object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C6C] via-[#2D2F9C]/40 to-transparent z-0"></div>
      
      {/* Decorative floating elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-white/20 rounded-full"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-12 h-12 border-2 border-white/20 rounded-lg"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-white/20 rounded-full"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Content Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <div className="mb-8">
          <motion.div 
            className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 inline-block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          >
            <span className="text-[#00A14B] font-medium text-sm md:text-base">
              EST. 2005 • PAKISTAN&apos;S TRUSTED DEVELOPER {/* Changed ' to &apos; */}
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          >
            <span className="block">Mehmood & Co</span>
            <span className="block">Builders and Developers</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          >
            <div className="w-32 h-1 bg-[#EF1C1C] mx-auto my-6 rounded-full" />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-3xl mx-auto drop-shadow-lg text-white/85"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          >
            Crafting Pakistan&apos;s Future with Integrity and Excellence {/* Changed ' to &apos; */}
          </motion.p>
        </div>
        
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
        >
          <Link 
            href="/contact" 
            className="group relative bg-[#EF1C1C] hover:bg-[#EF1C1C]/90 text-white px-8 py-4 rounded-lg text-lg md:text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#EF1C1C]/30 overflow-hidden"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>
          
          <Link 
            href="/projects" 
            className="group relative bg-[#00A14B] hover:bg-[#00A14B]/90 text-white px-8 py-4 rounded-lg text-lg md:text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#00A14B]/30 overflow-hidden"
          >
            <span className="relative z-10">Explore Projects</span>
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Founder Signature */}
      <motion.div 
        className="absolute bottom-8 right-8 flex flex-col items-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="h-0.5 w-20 bg-[#EF1C1C] mb-2"></div>
        <p className="text-white/80 text-sm font-light">Sajjid Mehmood Cheema</p>
        <p className="text-white/60 text-xs">Founder & CEO</p>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
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
        <p className="text-white/60 text-xs mt-2">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
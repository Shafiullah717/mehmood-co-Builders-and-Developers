// components/about/OwnerBio.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {FaPlayCircle } from 'react-icons/fa';
import { useState } from 'react';

interface OwnerBioProps {
  data: {
    name: string;
    title: string;
    bio: string;
    photo: string;
    // signature?: string;
    // personalQuote?: string;
    achievements?: string[];
    videoUrl?: string;
  };
}

const OwnerBio: React.FC<OwnerBioProps> = ({ data }) => {
  const { name, title, bio, photo, achievements, videoUrl } = data;
  const [showVideo, setShowVideo] = useState(false);
  
  // Extract YouTube video ID for thumbnail
  const getYouTubeThumbnail = (url: string) => {
    // Updated regex to correctly extract video ID from various YouTube URL formats
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|)([\w-]{11})(?:\S+)?/;
    const match = url.match(regExp);
    const videoId = (match && match[1].length === 11) ? match[1] : null;
    // Corrected YouTube thumbnail URL format
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  const videoThumbnail = videoUrl ? getYouTubeThumbnail(videoUrl) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col md:flex-row items-center gap-8 mt-8 bg-light p-8 rounded-2xl shadow-2xl border-2 border-primary/20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full"></div>
      
      {/* Photo with enhanced styling */}
      <div className="flex-shrink-0 relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-primary">
        <Image
          src={photo}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-110 hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/30 rounded-full"></div>
      </div>
      
      {/* Content area */}
      <div className="flex-grow text-center md:text-left relative z-10">
        <div className="mb-2">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">{name}</h3>
          <p className="text-xl text-secondary font-medium">{title}</p>
          
          {/* Achievement badges */}
          {achievements && achievements.length > 0 && (
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
              {achievements.map((achievement, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {achievement}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Personal quote */}
        {/* {personalQuote && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="my-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg"
          >
            <FaQuoteLeft className="text-primary text-xl mb-2" />
            <p className="text-dark italic font-medium">{personalQuote}</p>
          </motion.div>
        )} */}
        
        {/* Bio text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-dark leading-relaxed mb-6 text-lg"
        >
          {bio}
        </motion.p>
        
        {/* Signature */}
        {/* {signature ? (
          <div className="flex items-center mt-6">
            <FaSignature className="text-primary mr-2" />
            <Image 
              src={signature} 
              alt={`${name}'s signature`} 
              width={180} 
              height={60} 
              className="object-contain"
            />
          </div>
        ) : (
          <div className="border-t-2 border-primary/20 pt-4 mt-4 w-48">
            <p className="text-primary font-signature text-2xl">{name.split(' ')[0]}</p>
          </div>
        )} */}
        
        {/* Video message section - Enhanced with thumbnail preview */}
        <div className="mt-8 pt-6 border-t border-medium/30">
          <h4 className="text-xl font-semibold text-dark mb-4 flex items-center">
            <span className="mr-2 text-primary">✦</span> 
            A Message from {name}
            <span className="ml-2 text-primary">✦</span>
          </h4>
          
          {videoUrl ? (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              {!showVideo ? (
                <div 
                  className="w-full h-full relative cursor-pointer group"
                  onClick={() => setShowVideo(true)}
                >
                  {videoThumbnail ? (
                    // Replaced <img> with <Image /> for YouTube thumbnails optimization
                    <Image
                      src={videoThumbnail}
                      alt={`Video message from ${name}`}
                      layout="fill" // Use fill to make the image cover the parent
                      objectFit="cover" // Ensure the image covers the area
                      className="transition-all duration-300 group-hover:scale-105"
                      // onError prop is not needed with next/image, it handles errors internally
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  )}
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-dark/30 flex items-center justify-center transition-all duration-300 group-hover:bg-dark/10">
                    <FaPlayCircle className="text-white text-6xl opacity-90 transition-all duration-300 transform group-hover:scale-110 group-hover:opacity-100" />
                  </div>
                  
                  {/* Play text */}
                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <p className="text-white font-medium text-lg bg-primary/80 py-1 px-4 rounded-full inline-block">
                      Play Message
                    </p>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`${videoUrl}?autoplay=1&rel=0`}
                  title={`Message from ${name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              )}
            </div>
          ) : (
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
              <p className="text-dark/80">Video message coming soon</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default OwnerBio;
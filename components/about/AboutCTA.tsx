// components/about/AboutCTA.tsx
'use client';

import Link from 'next/link'; // Import Link
import { motion } from 'framer-motion';

interface AboutCTAProps {
  data: {
    heading: string;
    description: string;
    buttons: {
      text: string;
      link: string;
      type: 'primary' | 'secondary' | 'accent'; // To map to Tailwind classes
    }[];
  };
}

const AboutCTA: React.FC<AboutCTAProps> = ({ data }) => {
  const { heading, description, buttons } = data;

  const getButtonClass = (type: 'primary' | 'secondary' | 'accent') => {
    switch (type) {
      case 'primary':
        return 'bg-primary hover:bg-primary/90';
      case 'secondary':
        return 'bg-secondary hover:bg-secondary/90';
      case 'accent':
        return 'bg-accent hover:bg-accent/90';
      default:
        return 'bg-primary hover:bg-primary/90';
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="bg-primary py-16 text-center text-white relative isolate overflow-hidden"
    >
      {/* Background overlay for visual effect */}
      <div
        className="absolute inset-0 z-[-1] bg-gradient-to-r from-primary to-primary/80"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((button, index) => (
            // FIX: Removed legacyBehavior and the <a> tag inside Link
            <Link key={index} href={button.link} passHref>
              <motion.span // Use a semantic HTML tag like span or div, or even button if it's strictly a button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-block px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 ease-in-out ${getButtonClass(button.type)} text-white shadow-lg cursor-pointer`}
              >
                {button.text}
              </motion.span>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutCTA;
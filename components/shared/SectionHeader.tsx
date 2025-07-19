// components/shared/SectionHeader.tsx
'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-extrabold text-primary mb-2">{title}</h2>
      <p className="text-lg text-secondary">{subtitle}</p>
    </motion.div>
  );
};

export default SectionHeader;
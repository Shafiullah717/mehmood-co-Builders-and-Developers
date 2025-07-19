// components/about/CompanyMissionVision.tsx
'use client';

import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaStar } from 'react-icons/fa';

interface MissionVisionProps {
  data: {
    mission: string;
    vision: string;
    values: string[];
  };
}

const CompanyMissionVision: React.FC<MissionVisionProps> = ({ data }) => {
  const { mission, vision, values } = data;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {/* Mission Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        className="bg-light p-6 rounded-lg shadow-lg border border-medium flex flex-col"
      >
        <div className="flex items-center mb-4">
          <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
            <FaBullseye className="text-primary text-xl" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
        </div>
        <p className="text-dark leading-relaxed flex-grow">{mission}</p>
      </motion.div>

      {/* Vision Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        className="bg-light p-6 rounded-lg shadow-lg border border-medium flex flex-col"
      >
        <div className="flex items-center mb-4">
          <div className="bg-secondary bg-opacity-10 p-3 rounded-full mr-4">
            <FaEye className="text-secondary text-xl" />
          </div>
          <h3 className="text-2xl font-bold text-secondary">Our Vision</h3>
        </div>
        <p className="text-dark leading-relaxed flex-grow">{vision}</p>
      </motion.div>

      {/* Core Values Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        className="bg-light p-6 rounded-lg shadow-lg border border-medium md:col-span-2 lg:col-span-1 flex flex-col"
      >
        <div className="flex items-center mb-4">
          <div className="bg-accent bg-opacity-10 p-3 rounded-full mr-4">
            <FaStar className="text-accent text-xl" />
          </div>
          <h3 className="text-2xl font-bold text-accent">Our Core Values</h3>
        </div>
        <ul className="text-dark space-y-3 flex-grow">
          {values.map((value, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
              viewport={{ once: true, margin: "-20px" }}
              className="flex items-start"
            >
              <span className="text-accent mr-2 mt-1">•</span>
              <span>{value}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default CompanyMissionVision;
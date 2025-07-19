// components/projects/ProjectBrochureSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader'; // Assuming SectionHeader is in shared
import Link from 'next/link';

interface ProjectBrochureSectionProps {
  brochureUrl: string;
  projectName: string;
}

// Reusing the BrochureModal from QuickContactFloatingWidget, but making it specific here
interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ isOpen, onClose, pdfUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark bg-opacity-75 flex items-center justify-center z-[999] p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="bg-white rounded-lg shadow-xl max-w-5xl w-full h-[90vh] flex flex-col overflow-hidden"
      >
        <div className="flex justify-between items-center p-4 border-b border-medium">
          <h2 className="text-2xl font-bold text-primary">{title}</h2>
          <button onClick={onClose} className="text-dark hover:text-accent transition-colors duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="flex-grow">
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              width="100%"
              height="100%"
              className="border-none"
              title={title}
              loading="lazy"
            ></iframe>
          ) : (
            <div className="p-4 text-center text-dark text-lg">Map not available.</div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const ProjectBrochureSection: React.FC<ProjectBrochureSectionProps> = ({ brochureUrl, projectName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-primary/10 rounded-lg shadow-lg p-6 md:p-8 text-center border border-medium">
      <SectionHeader title="Project Map" subtitle={`Download or view the detailed Map for ${projectName}`} />
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link href={brochureUrl} download={`${projectName}_Map.pdf`} className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors duration-300 shadow-md">
          Download Map
        </Link>
        <button
          onClick={openModal}
          className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-colors duration-300 shadow-md"
        >
          View Map
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <PDFViewerModal
            isOpen={isModalOpen}
            onClose={closeModal}
            pdfUrl={brochureUrl}
            title={`${projectName} Map`}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectBrochureSection;
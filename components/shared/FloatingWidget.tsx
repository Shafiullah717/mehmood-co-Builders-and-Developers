// components/shared/FloatingWidget.tsx
import Link from 'next/link';
import { companyInfo } from '@/data/data';
import { Phone, MessageCircle, FileText } from 'lucide-react';

const FloatingWidget = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-3">
      {/* WhatsApp */}
      <Link 
        href={`https://wa.me/${companyInfo.whatsapp}`} 
        target="_blank"
        className="bg-accent text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </Link>
      {/* Call */}
      <Link 
        href={`tel:${companyInfo.phone}`} 
        className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-transform hover:scale-110"
        aria-label="Call Us"
      >
        <Phone size={28} />
      </Link>
      {/* Brochure */}
      <Link 
        href="/projects" // Or a link to a general brochure PDF
        className="bg-secondary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-transform hover:scale-110"
        aria-label="View Projects"
      >
        <FileText size={28} />
      </Link>
    </div>
  );
};

export default FloatingWidget;
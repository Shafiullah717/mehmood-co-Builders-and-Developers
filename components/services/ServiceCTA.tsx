// components/services/ServiceCTA.tsx
import Link from 'next/link';
import { Service, companyInfo } from '@/data/data';

interface ServiceCTAProps {
  service: Service;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ service }) => {
  const contactLink = service.ctaLink || '/contact'; // Use specific CTA if available, else general contact
  const ctaText = service.ctaLink ? "Get a Quote" : "Discuss Your Project"; // Adjust text based on specific CTA

  return (
    <div className="bg-primary/10 rounded-lg shadow-lg p-6 md:p-8 text-center border border-medium">
      <h3 className="text-3xl font-bold text-primary mb-4">
        Ready to start your {service.name} project?
      </h3>
      <p className="text-dark/80 text-lg mb-8 max-w-2xl mx-auto">
        Contact us today to discuss your requirements and receive a personalized consultation.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href={contactLink} className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors duration-300 shadow-md">
          {ctaText}
        </Link>
        <a href={`tel:${companyInfo.phone}`} className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-300 shadow-md">
          Call Us Now
        </a>
      </div>
    </div>
  );
};

export default ServiceCTA;
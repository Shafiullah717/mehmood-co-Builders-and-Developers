// components/services/ServiceDetailHero.tsx
import { Service } from '@/data/data';
import Image from 'next/image';

interface ServiceDetailHeroProps {
  service: Service;
}

const ServiceDetailHero: React.FC<ServiceDetailHeroProps> = ({ service }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-16 pb-24 md:pt-0 md:pb-0">
      <Image
        src={service.mainImage} // Use the service's main image
        alt={service.name}
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-50" // Darken for text readability
      />
      <div className="relative z-10 p-4 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          {service.name}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          {service.shortDescription}
        </p>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
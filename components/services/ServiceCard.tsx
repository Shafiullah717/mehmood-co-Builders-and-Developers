// components/services/ServiceCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/data/data';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col">
      <Link href={`/services/${service.slug}`} className="block h-full">
        <div className="p-6 flex flex-col items-center text-center">
          {/* Icon */}
          {service.icon && (
            <div className="mb-4 w-20 h-20 relative">
              <Image
                src={service.icon}
                alt={`${service.name} icon`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          )}
          {/* Service Name */}
          <h3 className="text-2xl font-bold text-primary mb-3">{service.name}</h3>
          {/* Short Description */}
          <p className="text-dark/80 text-base mb-6 flex-grow">
            {service.shortDescription}
          </p>
          {/* Learn More Button */}
          <div className="text-secondary font-semibold text-lg hover:underline transition-colors duration-200">
            Learn More &rarr;
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
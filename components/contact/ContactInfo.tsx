import { companyInfo } from '@/data/data';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <MapPin size={28} />,
      label: "Office Address",
      value: companyInfo.address,
      href: companyInfo.googleMapsLocation,
      isExternal: true,
    },
    {
      icon: <Phone size={28} />,
      label: "Phone",
      value: companyInfo.phone,
      href: `tel:${companyInfo.phone}`,
      isExternal: false,
    },
    {
      icon: <Mail size={28} />,
      label: "Email",
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
      isExternal: false,
    },
    {
      icon: <MessageCircle size={28} />,
      label: "WhatsApp",
      value: companyInfo.phone,
      href: `https://wa.me/${companyInfo.whatsapp}`,
      isExternal: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactItems.map((item, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl border border-medium p-6 shadow-sm transition-all
                    hover:shadow-md hover:border-primary/30 flex items-start group"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center
                          group-hover:bg-primary/20 transition-colors">
            <div className="text-primary">
              {item.icon}
            </div>
          </div>
          
          <div className="ml-4 flex-1 min-w-0">
            <h3 className="text-lg font-bold text-dark">{item.label}</h3>
            <Link
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
              rel={item.isExternal ? "noopener noreferrer" : ""}
              className="mt-1 block text-gray-600 hover:text-secondary transition-colors break-words
                         truncate md:whitespace-normal"
            >
              {item.value}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
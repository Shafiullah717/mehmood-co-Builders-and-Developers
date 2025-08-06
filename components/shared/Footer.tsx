// components/shared/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { companyInfo } from '@/data/data';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Social media links
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Branding Section */}
        <div className="lg:col-span-2">
          <div className="flex items-start mb-4">
            {/* Logo Container - Replace with actual logo */}
            <div className="bg-white p-2 rounded-lg mr-4 flex-shrink-0">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/logo.png" // Update with your logo path
                  alt={`${companyInfo.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{companyInfo.name}</h3>
              <p className="text-medium max-w-lg">Building dreams into reality with a legacy of trust and excellence in construction and development.</p>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="bg-primary-light p-2 rounded-full hover:bg-secondary transition-colors duration-300"
                >
                  <social.icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-secondary inline-block">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="flex items-center group hover:text-secondary transition-colors duration-300">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="flex items-center group hover:text-secondary transition-colors duration-300">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/services" className="flex items-center group hover:text-secondary transition-colors duration-300">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center group hover:text-secondary transition-colors duration-300">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-secondary inline-block">Get in Touch</h3>
          <ul className="space-y-4">
            <li className="flex">
              <div className="flex-shrink-0 mt-1">
                <MapPin size={20} className="text-secondary mr-3" />
              </div>
              <span className="hover:text-secondary transition-colors duration-300">{companyInfo.address}</span>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 mt-1">
                <Mail size={20} className="text-secondary mr-3" />
              </div>
              <a 
                href={`mailto:${companyInfo.email}`} 
                className="hover:text-secondary transition-colors duration-300"
              >
                {companyInfo.email}
              </a>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 mt-1">
                <Phone size={20} className="text-secondary mr-3" />
              </div>
              <a 
                href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} 
                className="hover:text-secondary transition-colors duration-300"
              >
                {companyInfo.phone}
              </a>
            </li>
          </ul>
          
          {/* Call to Action */}
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center transition-colors duration-300"
            >
              Schedule Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-primary-light pt-6 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-medium text-center md:text-left">
              &copy; {currentYear} {companyInfo.name}. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-medium">
                Design and develop by{' '}
                <a 
                  href="https://muhammadshafiullah.space/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-secondary hover:underline transition-all"
                >
                  Shafiullah
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
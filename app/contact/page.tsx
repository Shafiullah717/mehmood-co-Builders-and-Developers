// app/contact/page.tsx
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import LocationMap from '@/components/contact/LocationMap';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Mehmood & Co',
  description: 'Get in touch with Mehmood & Co for inquiries about our projects and services.',
};

const companyInfo = {
  phone: '+923003113748', // Replace with your actual phone number if needed
};

export default function ContactPage() {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <div className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <div className="flex justify-center items-center text-white text-lg">
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            <ChevronRight size={20} className="mx-2" />
            <span className="text-secondary">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 -mt-12 md:-mt-20 relative">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-1 bg-secondary mr-4"></div>
                <h2 className="text-2xl font-semibold text-primary">Send Us a Message</h2>
              </div>
              <ContactForm />
            </div>
            
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-1 bg-secondary mr-4"></div>
                <h2 className="text-2xl font-semibold text-primary">Our Information</h2>
              </div>
              <ContactInfo />
              
              <div className="mt-12">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-1 bg-secondary mr-4"></div>
                  <h2 className="text-2xl font-semibold text-primary">Business Hours</h2>
                </div>
                <div className="bg-light rounded-lg p-6 border border-medium">
                  <div className="flex justify-between py-3 border-b border-medium">
                    <span className="font-medium text-dark">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-medium">
                    <span className="font-medium text-dark">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="font-medium text-dark">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Location</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg border border-medium">
          <LocationMap />
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-primary rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-light max-w-2xl mx-auto mb-8">
            Contact us today to discuss your real estate needs. Our team is ready to assist you with any inquiries.
          </p>
          <Link 
            href="tel:+923003113748" 
            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Call Now: {companyInfo.phone}
          </Link>
        </div>
      </div>
    </div>
  );
}
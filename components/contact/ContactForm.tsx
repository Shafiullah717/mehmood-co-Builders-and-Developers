/// components/contact/ContactForm.tsx
"use client";
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircleIcon, EnvelopeIcon, UserIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // Remember to replace "YOUR_FORMSPREE_ID" with your actual Formspree ID

  if (state.succeeded) {
    return (
      <div className="bg-secondary/10 border-l-4 border-secondary rounded-lg p-6 max-w-2xl mx-auto">
        <div className="flex items-start">
          <CheckCircleIcon className="h-12 w-12 text-secondary flex-shrink-0 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-secondary mb-2">Message Sent Successfully!</h3>
            <p className="text-dark">
              Thank you for contacting <span className="font-semibold">Mehmood & Co Builders and Developers</span>. 
              Our team will get back to you within 24 hours.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 bg-secondary hover:bg-secondary/90 text-white px-5 py-2 rounded-md transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6 bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto border border-medium"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserIcon className="h-5 w-5 text-medium" />
            </div>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="John Smith"
              className="mt-1 block w-full pl-10 pr-3 py-3 bg-white border border-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            />
          </div>
          <ValidationError 
            prefix="Name" 
            field="name" 
            errors={state.errors} 
            className="text-accent text-sm mt-1 block" 
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <EnvelopeIcon className="h-5 w-5 text-medium" />
            </div>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              className="mt-1 block w-full pl-10 pr-3 py-3 bg-white border border-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            />
          </div>
          <ValidationError 
            prefix="Email" 
            field="email" 
            errors={state.errors} 
            className="text-accent text-sm mt-1 block" 
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="relative">
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">Your Message</label>
        <div className="relative">
          <div className="absolute top-3 left-3">
            <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-medium" />
          </div>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="How can we help you?"
            className="mt-1 block w-full pl-10 pr-3 py-3 bg-white border border-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          />
        </div>
        <ValidationError 
          prefix="Message" 
          field="message" 
          errors={state.errors} 
          className="text-accent text-sm mt-1 block" 
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-md text-lg font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 disabled:bg-medium transition-all duration-300"
        >
          {state.submitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
      
      {/* This line has been correctly escaped with &apos; */}
      <p className="text-center text-sm text-medium mt-4">
        We&apos;ll respond to your inquiry within 24 business hours
      </p>
    </form>
  );
}
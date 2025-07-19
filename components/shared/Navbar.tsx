// components/shared/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-md shadow-xl' 
          : 'bg-primary shadow-md'
      }`}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <Link href="/" className="relative group flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                  <Image
                    src="/images/logo.png"
                    alt="Mehmood & Co Logo"
                    width={100}
                    height={100}
                    className="relative rounded-full border-2 border-white/20 group-hover:border-secondary/50 transition-all duration-300"
                  />
                </div>
                {/* <span className="text-white font-bold text-xl hidden md:block">
                  Mehmood & Co
                </span> */}
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      pathname === link.href
                        ? 'text-white'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className="text-base font-medium relative">
                      {link.name}
                      {pathname === link.href && (
                        <motion.div 
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                          layoutId="activeLink"
                        />
                      )}
                      {pathname !== link.href && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-transparent group-hover:bg-secondary/50 transition-all duration-300" />
                      )}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="relative w-10 h-10 flex items-center justify-center text-white focus:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <div className="w-6 h-6 relative">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 8, backgroundColor: '#EF1C1C' } : { rotate: 0, y: 0, backgroundColor: '#FFFFFF' }}
                    className="absolute top-0 left-0 w-full h-0.5 transform origin-center transition-colors"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute top-3 left-0 w-full h-0.5 bg-white"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -8, backgroundColor: '#EF1C1C' } : { rotate: 0, y: 0, backgroundColor: '#FFFFFF' }}
                    className="absolute top-6 left-0 w-full h-0.5 transform origin-center transition-colors"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { duration: 0.4, ease: "easeInOut" }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
              className="md:hidden bg-primary/98 backdrop-blur-lg border-t border-white/10 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                          pathname === link.href
                            ? 'bg-secondary text-white font-semibold'
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        <span className="text-lg font-medium">{link.name}</span>
                        {pathname === link.href && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-accent" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import FloatingWidget from '@/components/shared/FloatingWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mehmood & Co Builders and Developers',
  description:
    'Leading construction and land development company in Pakistan, owned by Sajjid Mehmood Cheema.',
  icons: {
    icon: '/favicon.ico', // Default favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon fallback for older browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#2D2F9C" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <FloatingWidget />
        <Footer />
      </body>
    </html>
  );
}

'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans text-white bg-black overflow-hidden">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
} 
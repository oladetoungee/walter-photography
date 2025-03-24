'use client';

import HeroSection from '@/components/home/HeroSection';
import FeaturedImageSection from '@/components/home/FeaturedImageSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import ServicesSection from '@/components/home/ServicesSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="font-sans text-white bg-black overflow-hidden">
 
      <HeroSection />
      {/* <FeaturedImageSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection /> */}

    </div>
  );
}

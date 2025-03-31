'use client';

import HeroSection from '@/components/home/HeroSection';
import FeaturedImageSection from '@/components/home/FeaturedImageSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import ServicesSection from '@/components/home/ServicesSection';
import ContactSection from '@/components/home/ContactSection';
import TestimonialSection from '@/components/home/TestimonialSection';

export default function Home() {
  return (
    <div className="font-sans text-white  overflow-hidden">
 
      <HeroSection />
      <FeaturedImageSection />
      <PortfolioSection />
      <TestimonialSection />
      <ServicesSection />
      <ContactSection />

    </div>
  );
}

'use client';

import { HeroSection } from '@/components/shared/hero-section';
import { featuredImages } from '@/data/images';
import { ContactContent } from '@/components/contact/contact-content';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <HeroSection 
        image={featuredImages.abstract}
        title="Let's Connect"
        description="Your vision, our expertise. Let's create something extraordinary together."
      />

      <ContactContent />
    </div>
  );
} 
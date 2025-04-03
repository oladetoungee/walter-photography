'use client';

import { HeroSection } from '@/components/ui/HeroSection';
import { featuredImages } from '@/data/images';
import { ContentContent } from '@/components/contact/content-content';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <HeroSection 
        image={featuredImages.abstract}
        title="Let's Connect"
        description="Your vision, our expertise. Let's create something extraordinary together."
      />

      <ContentContent />
    </div>
  );
} 
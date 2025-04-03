'use client';

import ServicesSection from '@/components/home/ServicesSection';
import { TeamSection, StorySection, AchievementSection, PhilosophySection } from '@/components/about';
import { CallToAction } from '@/components/shared/call-to-action';
import { HeroSection } from '@/components/shared/hero-section';
import { images } from '@/data/images';

export default function AboutPage() {
  return (
    <div className="min-h-screen ">
      <HeroSection 
        image={images.documentary1}
        title="About Walter"
        description="Learn about Walter Jeremiah, the man behind the lens"
      />
      <section className="max-w-7xl mx-auto px-8 py-20">
        <StorySection />
        <TeamSection />
        <ServicesSection />
        <AchievementSection />
        <PhilosophySection />
        <CallToAction />
      </section>
    </div>
  );
} 
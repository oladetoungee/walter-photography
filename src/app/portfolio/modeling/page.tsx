'use client';

import { motion } from 'framer-motion';
import { images } from '@/data/images';
import { HeroSection } from '@/components/shared/hero-section';
import { CallToAction } from '@/components/shared/call-to-action';

export default function Modeling() {
  const allImages = Object.entries(images).map(([key, url]) => ({
    id: key,
    url: url
  }));

  return (
    <div>
      <HeroSection
        image={images.portrait1}
        title="Modeling Gallery"
        description="Fashion, beauty, and editorial photography"
      />
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.url}
                  alt={`Modeling ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </div>
  );
} 
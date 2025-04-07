'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { images, featuredImages } from '../../data/images';
import LazyImage from '../ui/LazyImage';
import { PageHeader } from '../shared/PageHead';

interface Testimonial {
  id: number;
  image: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: featuredImages.urbanNight,
    name: "Sarah Anderson",
    role: "Creative Director",
    company: "Design Studio NYC",
    testimonial: "Working with Walter has transformed our brand's visual identity. His eye for detail and ability to capture authentic moments is unparalleled."
  },
  {
    id: 2,
    image: featuredImages.portrait,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Innovate Labs",
    testimonial: "The quality and creativity of the photography exceeded our expectations. Each shot tells a compelling story."
  },
  {
    id: 3,
    image: featuredImages.abstract,
    name: "Emma Thompson",
    role: "Art Director",
    company: "Creative Minds",
    testimonial: "Walter's unique perspective brings a fresh dimension to every project. His work has become integral to our brand storytelling."
  },
  {
    id: 4,
    image: featuredImages.streetLife,
    name: "David Rodriguez",
    role: "CEO",
    company: "Urban Lifestyle",
    testimonial: "The authenticity captured in each photograph has helped us connect with our audience on a deeper level."
  },
  {
    id: 5,
    image: featuredImages.archLines,
    name: "Lisa Park",
    role: "Brand Manager",
    company: "Modern Spaces",
    testimonial: "Walter's architectural photography has elevated our property presentations to new heights."
  },
  {
    id: 6,
    image: featuredImages.natureMood,
    name: "James Wilson",
    role: "Editor in Chief",
    company: "Nature Magazine",
    testimonial: "His ability to capture the essence of natural moments is remarkable. Every shot tells a powerful story."
  },
  {
    id: 7,
    image: featuredImages.urbanNight,
    name: "Alexandra Lee",
    role: "Events Director",
    company: "City Events Co.",
    testimonial: "The way Walter captures the energy and atmosphere of our events is simply magical."
  },
  {
    id: 8,
    image: featuredImages.shadowArt,
    name: "Robert Taylor",
    role: "Gallery Owner",
    company: "Modern Art Space",
    testimonial: "Walter's artistic vision brings a unique perspective to every project. His work has been a cornerstone of our exhibitions."
  },
  {
    id: 9,
    image: featuredImages.natureMood,
    name: "Maria Garcia",
    role: "Creative Producer",
    company: "Visual Stories",
    testimonial: "The depth and emotion captured in Walter's photography has brought our campaigns to life."
  },
  {
    id: 10,
    image: featuredImages.timeless,
    name: "Thomas Wright",
    role: "Fashion Director",
    company: "Style Magazine",
    testimonial: "Walter's eye for composition and timing is exceptional. He consistently delivers beyond expectations."
  }
];

export default function TestimonialSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="overflow-hidden mt-8">
      <div className="max-w-7xl px-6">
       <PageHeader title="Our Clients" description="Trusted by industry leaders" /> 
        {/* Client Images Row */}
        <div className="relative h-full flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] h-full cursor-pointer"
              animate={{
                y: hoveredIndex !== null ? 
                  (hoveredIndex === index ? -20 : 
                   Math.sin((index - hoveredIndex) * 0.5) * 30) : 0,
                rotateY: hoveredIndex !== null ?
                  Math.sin((index - hoveredIndex) * 0.5) * 15 : 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedId(item.id)}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="w-full h-full rounded-lg overflow-hidden"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              >
                <LazyImage
                  src={item.image}
                  alt={item.name}
                  aspectRatio="aspect-[2/5]"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Selected Testimonial Modal */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 "
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-neutral-900 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Testimonial Content */}
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="aspect-square">
                    <LazyImage
                      src={testimonials.find(t => t.id === selectedId)?.image || ''}
                      alt="Client"
                      aspectRatio="aspect-square"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-light mb-2">
                        {testimonials.find(t => t.id === selectedId)?.name}
                      </h3>
                      <p className="text-gray-400 mb-1">
                        {testimonials.find(t => t.id === selectedId)?.role}
                      </p>
                      <p className="text-gray-400 mb-6">
                        {testimonials.find(t => t.id === selectedId)?.company}
                      </p>
                      <p className="text-lg leading-relaxed">
                        {testimonials.find(t => t.id === selectedId)?.testimonial}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 
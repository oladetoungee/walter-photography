'use client';

import { motion } from 'framer-motion';
import { images, featuredImages } from '@/utils/images';

const services = [
  {
    title: "Documentary",
    description: "From social documentaries to corporate storytelling, we bring narratives to life through our lens. Each frame tells a story, each moment preserved in time.",
    image: featuredImages.urbanNight,
    expertise: "Social Documentation • Corporate Stories • Cultural Events"
  },
  {
    title: "Product",
    description: "Professional product photography that makes your items stand out. Perfect lighting, precise composition, and attention to detail.",
    image: featuredImages.shadowArt,
    expertise: "E-commerce • Product Catalogs • Lifestyle Products"
  },
  {
    title: "Brand",
    description: "Comprehensive photography solutions that align with your brand identity. We help you tell your story visually.",
    image: featuredImages.natureMood,
    expertise: "Brand Identity • Marketing Materials • Campaign Shoots"
  },
  {
    title: "Events",
    description: "From corporate gatherings to intimate celebrations, we capture the energy and emotion of every event.",
    image: featuredImages.archLines,
    expertise: "Corporate Events • Conferences • Private Functions"
  },
  {
    title: "Portrait",
    description: "Individual and group portraits that reveal character and capture essence. Natural, studio, or location shoots.",
    image: featuredImages.portrait,
    expertise: "Professional Headshots • Fashion Portraits • Family Sessions"
  },
  {
    title: "Architecture",
    description: "Interior and exterior architectural photography that highlights the beauty and function of spaces.",
    image: featuredImages.streetLife,
    expertise: "Interior Design • Real Estate • Commercial Spaces"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive photography solutions tailored to your unique vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative aspect-[3/4]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
              </div>

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-light mb-6">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                </div>
                <p className="text-sm text-gray-400 font-light">{service.expertise}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
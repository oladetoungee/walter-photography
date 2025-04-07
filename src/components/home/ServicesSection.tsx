'use client';

import { motion } from 'framer-motion';
import LazyImage from '../ui/LazyImage';
import { PageHeader } from '../shared/PageHead';
import { services } from '@/data/services';


export default function ServicesSection() {
  return (
    <section className="mt-16">
      <div className="max-w-7xl mx-auto px-4">
          <PageHeader title="Services" description="Comprehensive photography solutions tailored to your unique vision" />
       

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

              <div className="absolute inset-0 overflow-hidden">
                <LazyImage
                  src={service.image}
                  alt={service.title}
                  aspectRatio="aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
              </div>

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-light mb-6 text-white opacity-80">{service.title}</h3>
                  <p className="text-gray-300 text-xs mb-6">{service.description}</p>
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
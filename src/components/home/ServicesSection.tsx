'use client';

import { motion } from 'framer-motion';
import { Camera, Users, Video } from 'lucide-react';

const services = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Documentary",
    description: "Capturing real stories and authentic moments"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Portraits",
    description: "Professional portrait photography for individuals and groups"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Events",
    description: "Comprehensive coverage of special occasions"
  }
];

export default function ServicesSection() {
  return (
    <section className="services-section py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light mb-4">Our Services</h2>
          <p className="text-gray-400">Comprehensive photography solutions for every need</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card p-6 bg-black/50 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-light mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
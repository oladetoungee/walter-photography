'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Camera, Award, Globe, Users } from 'lucide-react';
import { images } from '@/utils/images';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="font-sans text-white bg-black overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('${images.hero}')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-light mb-4">About Walter</h1>
            <p className="text-xl text-gray-300">A journey through the lens</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-light">The Story Behind the Lens</h2>
              <p className="text-gray-300 leading-relaxed">
                Walter Brown's journey into photography began in the bustling streets of Toronto, where he discovered his passion for capturing the raw essence of human stories. His early work focused on street photography, documenting the daily lives of city dwellers and their untold stories.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Over the years, Walter has evolved into a versatile photographer, mastering various genres while maintaining his signature documentary style. His work has been featured in numerous exhibitions and publications, earning him recognition in the international photography community.
              </p>
            </div>
            <motion.div 
              className="relative h-[400px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src={images.documentary1}
                alt="Walter's Journey"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-4">Our Values</h2>
            <p className="text-gray-400">The principles that guide our work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8" />,
                title: "Authenticity",
                description: "We believe in capturing genuine moments that tell real stories."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                description: "Every shot is crafted with precision and artistic vision."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Diversity",
                description: "Our work celebrates the rich tapestry of human experience."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-black/50 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-light mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-4">Our Team</h2>
            <p className="text-gray-400">Meet the people behind the lens</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Walter Brown",
                role: "Lead Photographer",
                image: images.portrait1
              },
              {
                name: "Sarah Chen",
                role: "Creative Director",
                image: images.portrait2
              },
              {
                name: "Michael Rodriguez",
                role: "Technical Director",
                image: images.portrait3
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                  <h3 className="text-2xl font-light mb-2">{member.name}</h3>
                  <p className="text-sm tracking-wider">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-6">Ready to Start Your Journey?</h2>
            <p className="text-gray-400 mb-8">
              Let's create something extraordinary together. Contact us to discuss your photography needs.
            </p>
            <motion.a
              href="/contact"
              className="inline-block py-4 px-8 bg-white text-black font-light tracking-wider hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
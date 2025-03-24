'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function FeaturedImageSection() {
  useEffect(() => {
    // Image reveal animation
    gsap.from(".image-reveal", {
      scrollTrigger: {
        trigger: ".image-section",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      duration: 1.5,
      opacity: 0,
      scale: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="image-section relative h-screen overflow-hidden">
      <motion.div 
        className="image-reveal absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/dn2oenkss/image/upload/v1725532806/samples/people/kitchen-bar.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light mb-4">Capturing Life's Moments</h2>
          <p className="text-xl text-gray-300">Through the lens of experience</p>
        </motion.div>
      </div>
    </section>
  );
} 
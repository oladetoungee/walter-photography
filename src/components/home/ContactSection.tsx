'use client';

import { motion } from 'framer-motion';
import { ContactForm } from "@/components/contact/ContactForm"

export default function ContactSection() {
  return (
    <section className="contact-section py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light mb-4">Let's Talk</h2>
          <p className="text-gray-400">Start your photography journey with us</p>
        </motion.div>

          <ContactForm />       
      </div>
    </section>
  );
} 
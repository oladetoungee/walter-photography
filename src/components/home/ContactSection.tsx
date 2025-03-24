'use client';

import { motion } from 'framer-motion';

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

        <motion.form 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
            />
          </div>
          <textarea 
            placeholder="Your Message" 
            rows={4}
            className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
          />
          <button 
            type="submit"
            className="w-full py-4 px-8 bg-white text-black font-light tracking-wider hover:bg-gray-200 transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
} 
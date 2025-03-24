'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { images } from '@/utils/images';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('${images.contact}')`,
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
            <h1 className="text-5xl font-light mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">Let's create something together</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Email',
                content: 'contact@walterphotography.com',
                link: 'mailto:contact@walterphotography.com'
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Phone',
                content: '+1 (555) 123-4567',
                link: 'tel:+15551234567'
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Location',
                content: 'Toronto, Canada',
                link: 'https://maps.google.com'
              }
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                className="group p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 text-white group-hover:text-gray-300 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-light mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.content}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-4">Send Us a Message</h2>
            <p className="text-gray-400">We'd love to hear from you</p>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
                required
              />
            </div>
            <input
              type="tel"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
              required
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

      {/* Social Media */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-4">Follow Us</h2>
            <p className="text-gray-400">Stay connected with our latest work</p>
          </motion.div>

          <div className="flex justify-center space-x-8">
            {[
              { icon: <Instagram className="w-6 h-6" />, href: '#' },
              { icon: <Facebook className="w-6 h-6" />, href: '#' },
              { icon: <Twitter className="w-6 h-6" />, href: '#' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
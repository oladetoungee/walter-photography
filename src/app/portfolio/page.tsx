'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Camera, Users, Video, Image as ImageIcon } from 'lucide-react';
import { images } from '@/utils/images';

const categories = [
  {
    title: 'Portraits',
    description: 'Capturing the essence of individuals and groups',
    image: images.portrait1,
    href: '/portfolio/portraits',
    icon: <Users className="w-8 h-8" />
  },
  {
    title: 'Documentary',
    description: 'Telling stories through authentic moments',
    image: images.documentary1,
    href: '/portfolio/documentary',
    icon: <Camera className="w-8 h-8" />
  },
  {
    title: 'Events',
    description: 'Preserving special moments and celebrations',
    image: images.event1,
    href: '/portfolio/events',
    icon: <Video className="w-8 h-8" />
  },
  {
    title: 'Modeling',
    description: 'Professional fashion and modeling photography',
    image: images.modeling1,
    href: '/portfolio/modeling',
    icon: <ImageIcon className="w-8 h-8" />
  }
];

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/dn2oenkss/image/upload/v1725532806/samples/people/kitchen-bar.jpg')",
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
            <h1 className="text-5xl font-light mb-4">Portfolio</h1>
            <p className="text-xl text-gray-300">Explore our collection of moments</p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={category.href}>
                  <div className="group relative overflow-hidden rounded-lg">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                      <div className="mb-4">{category.icon}</div>
                      <h3 className="text-3xl font-light mb-2">{category.title}</h3>
                      <p className="text-gray-300 text-center max-w-md mx-auto px-4">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
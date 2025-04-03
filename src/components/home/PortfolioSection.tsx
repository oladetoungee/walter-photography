'use client';

import { motion } from 'framer-motion';
import { images } from '@/utils/images';
import LazyImage from '../ui/LazyImage';

const portfolioItems = [
  {
    img: images.bride1,
    title: "Metropolitan Echoes",
    category: "Urban",
    year: "2024"
  },
  {
    img: images.bride2,
    title: "Human Stories",
    category: "Portrait",
    year: "2024"
  },
  {
    img: images.bride3,
    title: "Abstract Realities",
    category: "Abstract",
    year: "2023"
  },
  {
    img: images.bride4,
    title: "Street Poetry",
    category: "Documentary",
    year: "2024"
  },
  {
    img: images.portrait1,
    title: "Urban Geometry",
    category: "Architecture",
    year: "2023"
  },
  {
    img: images.portrait2,
    title: "Natural Harmony",
    category: "Nature",
    year: "2024"
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-2xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-light mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-light mb-2">Some of Our Works</h2>
          <p className="text-gray-400 text-xs">A collection of moments captured in time</p>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative group"
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0 
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              {/* Background Div with details */}
              <div 
                className='absolute top-12 left-8 w-full h-full bg-neutral-900 bg-opacity-70 transition-transform duration-500 
                group-hover:translate-x-0 flex flex-col justify-end pb-2 pr-4'
              >
                <div className="text-right text-gray-400">
                  <h3 className="text-sm">{item.title}</h3>
                  <p className="text-xs">{item.category} | {item.year}</p>
                </div>
              </div>
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden">
                <LazyImage
                  src={item.img}
                  alt={item.title}
                  aspectRatio="aspect-[4/5]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
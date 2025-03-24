'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import gsap from 'gsap';

const portfolioItems = [
  {
    img: "https://res.cloudinary.com/dn2oenkss/image/upload/v1725532805/samples/ecommerce/analog-classic.jpg",
    title: "Urban Stories",
    category: "Documentary"
  },
  {
    img: "https://res.cloudinary.com/dn2oenkss/image/upload/v1725532806/samples/people/jazz.jpg",
    title: "Jazz Nights",
    category: "Portrait"
  },
  {
    img: "https://res.cloudinary.com/dn2oenkss/image/upload/v1725532807/samples/food/spices.jpg",
    title: "Cultural Heritage",
    category: "Documentary"
  },
  {
    img: "https://res.cloudinary.com/dn2oenkss/image/upload/v1725532805/samples/food/dessert.jpg",
    title: "Sweet Moments",
    category: "Food"
  },
  {
    img: "https://res.cloudinary.com/dn2oenkss/image/upload/v1725532806/samples/people/kitchen-bar.jpg",
    title: "Kitchen Tales",
    category: "Documentary"
  },
  {
    img: "https://res.cloudinary.com/dn2oenkss/image/upload/v1725532807/samples/food/spices.jpg",
    title: "Spice of Life",
    category: "Food"
  }
];

export default function PortfolioSection() {
  useEffect(() => {
    // Portfolio items animation
    gsap.from(".portfolio-item", {
      scrollTrigger: {
        trigger: ".portfolio-section",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      duration: 1.2,
      opacity: 0,
      y: 100,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="portfolio-section py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light mb-4">Some of Our Works</h2>
          <p className="text-gray-400">A collection of moments captured in time</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              className="portfolio-item group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                <p className="text-sm tracking-wider">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
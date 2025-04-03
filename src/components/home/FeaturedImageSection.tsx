'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { featuredImages } from '@/utils/images';

gsap.registerPlugin(ScrollTrigger);

interface ImageContent {
  image: string;
  title: string;
  description: string;
  category: string;
}

const imageContents: ImageContent[] = [
  {
    image: featuredImages.urbanNight,
    title: "Urban Symphony",
    description: "Where city lights dance with human stories, creating a visual melody of metropolitan life",
    category: "Urban Documentary"
  },
  {
    image: featuredImages.shadowArt,
    title: "Silent Narratives",
    description: "In the shadows of time, every frame whispers a story waiting to be told",
    category: "Fine Art"
  },
  {
    image: featuredImages.natureMood,
    title: "Natural Harmony",
    description: "Where nature's palette meets human creativity in perfect balance",
    category: "Environmental"
  },
  {
    image: featuredImages.archLines,
    title: "Architectural Poetry",
    description: "Lines and light intertwine to create visual verses of modern design",
    category: "Architecture"
  },
  {
    image: featuredImages.portrait,
    title: "Human Canvas",
    description: "Every face tells a story, every expression paints a thousand words",
    category: "Portrait"
  },
  {
    image: featuredImages.streetLife,
    title: "Urban Rhythms",
    description: "The heartbeat of city life captured in moments of pure authenticity",
    category: "Street Photography"
  },
  {
    image: featuredImages.culture,
    title: "Cultural Tapestry",
    description: "Weaving stories of tradition and modernity into visual narratives",
    category: "Cultural"
  },
  {
    image: featuredImages.motion,
    title: "Mood & Motion",
    description: "Where emotion meets movement in a dance of light and shadow",
    category: "Motion"
  },
  {
    image: featuredImages.abstract,
    title: "Abstract Realities",
    description: "Transforming ordinary moments into extraordinary visual experiences",
    category: "Abstract"
  },
  {
    image: featuredImages.timeless,
    title: "Timeless Moments",
    description: "Capturing the essence of time in frames that transcend generations",
    category: "Timeless"
  }
];

const preloadImages = (imageContents: ImageContent[]) => {
  imageContents.forEach(({ image }) => {
    const img = new Image();
    img.src = image;
  });
};

export default function FeaturedImageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % imageContents.length);
  }, []);

  // Preload images
  useEffect(() => {
    preloadImages(imageContents);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Delay GSAP animation until after the first slide has loaded
  useEffect(() => {
    if (animationTriggered) return;
    
    // Give some time for the first slide to appear before animating
    const timeout = setTimeout(() => {
      gsap.from(".featured-section", {
        scrollTrigger: {
          trigger: ".featured-section",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        duration: 1.5,
        opacity: 0,
        scale: 0.95,
        ease: "power3.out",
      });
      setAnimationTriggered(true);
    }, 100); // Small delay to ensure first slide shows

    return () => clearTimeout(timeout);
  }, [animationTriggered]);

  const pageVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      rotateY: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className="featured-section relative h-screen overflow-hidden bg-black perspective-1000">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={pageVariants}
          initial={false}
          animate="center"
          exit="exit"
          transition={{
            rotateY: { type: "spring", stiffness: 100, damping: 20 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
          className="absolute inset-0 origin-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={imageContents[currentIndex].image}
              alt={imageContents[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
            <motion.div
              className="text-center max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="inline-block text-sm tracking-wider text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {imageContents[currentIndex].category}
              </motion.span>
              <motion.h2
                className="text-5xl md:text-7xl font-light mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {imageContents[currentIndex].title}
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {imageContents[currentIndex].description}
              </motion.p>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setDirection(-1);
                  setCurrentIndex((prev) => (prev - 1 + imageContents.length) % imageContents.length);
                }}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setDirection(1);
                  setCurrentIndex((prev) => (prev + 1) % imageContents.length);
                }}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-8 right-8 flex space-x-2">
              {imageContents.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  isBackground?: boolean;
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = 'aspect-square',
  isBackground = false 
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(true);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoading(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  if (isBackground) {
    return (
      <div 
        ref={imageRef}
        className={`absolute inset-0 w-full h-full ${className}`}
      >
        {/* Loading Skeleton */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-neutral-800 animate-pulse"
          />
        )}

        {/* Actual Image */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: isLoading ? 0 : 1
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    );
  }

  return (
    <div 
      ref={imageRef}
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-neutral-800 animate-pulse"
        />
      )}

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
} 
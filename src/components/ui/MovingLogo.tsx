'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MovingLogoProps {
  src: string;
  className?: string;
}

export default function MovingLogo({ src, className }: MovingLogoProps) {
  return (
    <div className="overflow-hidden bg-transparent w-full">
      <motion.div
        animate={{
          x: ["-100%", "0%", "100%"],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
        className={className}
      >
        <Image 
          src={src} 
          alt="Walter Logo" 
          width={400} 
          height={150} 
          className="object-contain"
        />
      </motion.div>
    </div>
  );
} 
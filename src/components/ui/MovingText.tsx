'use client';

import { motion } from 'framer-motion';

interface MovingTextProps {
  text: string;
  className?: string;
}

export default function MovingText({ text, className }: MovingTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.h1
        className={className}
        animate={{
          x: ["-100%", "0%", "100%"],
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {text}
      </motion.h1>
    </div>
  );
} 
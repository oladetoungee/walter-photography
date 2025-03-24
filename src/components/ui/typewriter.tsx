'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


type TypewriterProps = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
};

const Typewriter = ({ text, speed = 50, delay = 1000, className }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let index = 0;

    const type = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1)); // Show the next character
        index++;
        timeout = setTimeout(type, speed);
      }
    };

    // Start typing after the specified delay
    timeout = setTimeout(type, delay);

    return () => {
      clearTimeout(timeout); // Clear the timeout when the component unmounts
    };
  }, [text, speed, delay]);

  return (
    <div className='md:h-12 h-24'>
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
      </motion.div>
    </div>
  );
};

export default Typewriter;

import { motion } from "framer-motion"

interface HeroSectionProps {
  image: string;
  title: string;
  description: string;
}

export const HeroSection = ({ 
  image, 
  title, 
  description
}: HeroSectionProps) => {
    return (
        <section className="relative h-[70vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${image}')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-gray-300">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-light mb-4">{title}</h1>
            <p className="text-xl">{description}</p>
          </motion.div>
        </div>
      </section>
    )
}
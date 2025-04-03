import { motion } from "framer-motion";


export const PageHeader = ({title, description}: {title: string, description: string}) => {
  return (
    <motion.div 
    className="text-center mb-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
      <h1 className="text-4xl font-light mb-2 text-white opacity-80">{title}</h1>
      <p className="text-gray-400">{description}</p>
      </motion.div>
  );
};
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { images } from '@/utils/images';

const projects = [
  {
    id: 1,
    title: 'Urban Portraits',
    category: 'individual',
    image: images.portrait1,
    description: 'Capturing the essence of city life through individual portraits'
  },
  {
    id: 2,
    title: 'Family Moments',
    category: 'family',
    image: images.portrait2,
    description: 'Preserving precious family memories'
  },
  {
    id: 3,
    title: 'Corporate Headshots',
    category: 'corporate',
    image: images.portrait3,
    description: 'Professional headshots for business professionals'
  },
  {
    id: 4,
    title: 'Street Portraits',
    category: 'individual',
    image: images.documentary1,
    description: 'Capturing the stories of strangers on the street'
  },
  {
    id: 5,
    title: 'Wedding Portraits',
    category: 'family',
    image: images.event1,
    description: 'Beautiful portraits from special wedding moments'
  },
  {
    id: 6,
    title: 'Team Portraits',
    category: 'corporate',
    image: images.team1,
    description: 'Group portraits for corporate teams'
  }
];

const categories = ['all', 'individual', 'family', 'corporate'];

export default function Portraits() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/dn2oenkss/image/upload/v1725532806/samples/people/jazz.jpg')",
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
            <h1 className="text-5xl font-light mb-4">Portrait Photography</h1>
            <p className="text-xl text-gray-300">Capturing the essence of people</p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-2 rounded-full text-sm tracking-wider transition-colors ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="group relative overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                      <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                      <p className="text-sm tracking-wider text-center max-w-md mx-auto px-4">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full mx-4"
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-[600px] object-cover rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-light mb-2">{selectedProject.title}</h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 
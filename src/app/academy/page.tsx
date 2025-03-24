'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Book, Users, Award, Clock, Calendar } from 'lucide-react';
import { images } from '@/utils/images';

const courses = [
  {
    id: 1,
    title: 'Fundamentals of Photography',
    description: 'Learn the basics of photography, including camera settings, composition, and lighting.',
    duration: '8 weeks',
    schedule: 'Tuesdays & Thursdays',
    price: '$499',
    level: 'Beginner',
    image: images.academy1
  },
  {
    id: 2,
    title: 'Advanced Portrait Photography',
    description: 'Master the art of portrait photography with advanced lighting techniques and posing.',
    duration: '10 weeks',
    schedule: 'Mondays & Wednesdays',
    price: '$699',
    level: 'Advanced',
    image: images.portrait1
  },
  {
    id: 3,
    title: 'Documentary Photography',
    description: 'Learn to tell compelling stories through your lens with documentary photography techniques.',
    duration: '12 weeks',
    schedule: 'Fridays',
    price: '$799',
    level: 'Intermediate',
    image: images.documentary1
  }
];

export default function Academy() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

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
            <h1 className="text-5xl font-light mb-4">Photography Academy</h1>
            <p className="text-xl text-gray-300">Learn from the best in the industry</p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-4">Our Courses</h2>
            <p className="text-gray-400">Choose the perfect course for your journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-gray-900 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      {course.schedule}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-light">{course.price}</span>
                    <button
                      className="px-6 py-2 bg-white text-black text-sm tracking-wider hover:bg-gray-200 transition-colors"
                      onClick={() => setSelectedCourse(course)}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-4">Register for a Course</h2>
            <p className="text-gray-400">Start your photography journey today</p>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
                required
              />
            </div>
            <input
              type="tel"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
              required
            />
            <select
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
              required
            >
              <option value="">Select a Course</option>
              {courses.map((course) => (
                <option key={course.id} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full p-4 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full py-4 px-8 bg-white text-black font-light tracking-wider hover:bg-gray-200 transition-colors"
            >
              Submit Registration
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
} 
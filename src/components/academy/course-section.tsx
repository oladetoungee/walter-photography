import { PageHeader } from "../shared/PageHead";
import { courses } from "@/data/course";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from 'react';

interface CourseSectionProps {
  scrollToForm: () => void;
}

export const CourseSection = ({ scrollToForm }: CourseSectionProps) => {

    return (
        <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <PageHeader title="Our Courses" description="Choose the perfect course for your journey" />
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
                    <Button
                      variant="outline"
                      onClick={() => scrollToForm()}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}
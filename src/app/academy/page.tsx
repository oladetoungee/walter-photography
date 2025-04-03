'use client';

import { images } from '@/data/images';
import { AcademyForm } from '@/components/academy/AcademyForm';
import { HeroSection } from '@/components/shared/hero-section';
import { courses } from '@/data/course';
import { useRef } from 'react';
import { CourseSection } from '@/components/academy/course-section';

export default function Academy() {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSection
        image={images.documentary1}
        title="Walter Academy"
        description="Learn from the best in the industry"
      />
      <CourseSection scrollToForm={scrollToForm} />
 
      <AcademyForm courses={courses} formRef={formRef} />
    </div>
  );
} 
import { images } from "@/data/images";

export const courses = [
    {
      id: 1,
      title: 'Fundamentals of Photography',
      description: 'Learn the basics of photography, including camera settings, composition, and lighting.',
      duration: '8 weeks',
      schedule: 'Tuesdays & Thursdays',
      price: '$499',
      level: 'Beginner',
      image: images.documentary1
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
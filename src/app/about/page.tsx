'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { Camera, Award, Globe, Users } from 'lucide-react';
import { images, featuredImages } from '@/utils/images';
import ServicesSection from '@/components/home/ServicesSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={featuredImages.urbanNight}
            alt="Walter Jeremiah in action"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light mb-4">About Walter</h1>
            <p className="text-xl text-gray-300">Capturing Life's Extraordinary Moments</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-light mb-6">The Story Behind the Lens</h2>
            <p className="text-gray-300">
              With over 15 years of experience in documentary and portrait photography, I've dedicated my life to capturing the authentic essence of human experiences. My journey began in the streets of Vancouver, where I discovered my passion for storytelling through images.
            </p>
            <p className="text-gray-300">
              Every photograph I take is a celebration of life's genuine moments - from intimate family portraits to grand cultural events. My approach combines technical precision with artistic intuition, allowing me to create images that resonate with depth and emotion.
            </p>
            <p className="text-gray-300">
              Born and raised in Vancouver's vibrant art scene, I was influenced by the city's diverse cultural landscape from an early age. My formal training at the Vancouver Institute of Photography laid the foundation for my technical expertise, while my travels across 40+ countries have shaped my unique perspective on visual storytelling.
            </p>
            <p className="text-gray-300">
              Throughout my career, I've had the privilege of working with renowned publications, including National Geographic and Vogue, documenting stories that matter. My work has been featured in international exhibitions and has earned recognition from the World Photography Organisation.
            </p>
          </div>
          <div className="relative h-[600px]">
            <Image
              src={featuredImages.portrait}
              alt="Walter Jeremiah Portrait"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-light mb-12 text-center">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-[300px] mb-6">
                <Image
                  src={featuredImages.shadowArt}
                  alt="Sarah Chen"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl mb-2">Sarah Chen</h3>
              <p className="text-gray-400 mb-2">Lead Photographer</p>
              <p className="text-gray-300">
                Specializing in portrait and fashion photography, Sarah brings over a decade of experience from New York's fashion industry.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-[300px] mb-6">
                <Image
                  src={featuredImages.natureMood}
                  alt="Marcus Rodriguez"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl mb-2">Marcus Rodriguez</h3>
              <p className="text-gray-400 mb-2">Creative Director</p>
              <p className="text-gray-300">
                With a background in fine arts and cinematography, Marcus ensures every project tells a compelling visual story.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-[300px] mb-6">
                <Image
                  src={featuredImages.archLines}
                  alt="Emma Thompson"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl mb-2">Emma Thompson</h3>
              <p className="text-gray-400 mb-2">Documentary Specialist</p>
              <p className="text-gray-300">
                Emmy-nominated documentarian bringing authenticity and depth to our storytelling projects.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <ServicesSection />
        {/* Achievements Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-light mb-12 text-center">Recognition & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="relative h-[200px] mb-4">
                  <Image
                    src={featuredImages.urbanNight}
                    alt="World Photography Awards"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl mb-2">World Photography Awards</h3>
                <p className="text-gray-300">First Place in Documentary Category, 2023</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="relative h-[200px] mb-4">
                  <Image
                    src={featuredImages.natureMood}
                    alt="National Geographic"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl mb-2">National Geographic</h3>
                <p className="text-gray-300">Featured Photographer, 2022</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="relative h-[200px] mb-4">
                  <Image
                    src={featuredImages.shadowArt}
                    alt="International Photography Festival"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl mb-2">International Photography Festival</h3>
                <p className="text-gray-300">Best Portfolio Award, 2021</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="relative h-[200px] mb-4">
                  <Image
                    src={featuredImages.archLines}
                    alt="Vancouver Art Gallery"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl mb-2">Vancouver Art Gallery</h3>
                <p className="text-gray-300">Solo Exhibition "Urban Stories", 2023</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="relative h-[200px] mb-4">
                  <Image
                    src={featuredImages.portrait}
                    alt="Photography Excellence"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl mb-2">Photography Excellence</h3>
                <p className="text-gray-300">Lifetime Achievement Award, 2022</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="relative h-[200px] mb-4">
                  <Image
                    src={featuredImages.streetLife}
                    alt="Published Works"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl mb-2">Published Works</h3>
                <p className="text-gray-300">Featured in over 50 international publications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-light mb-12 text-center">My Photography Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-lg">
              <div className="relative h-[250px] mb-6">
                <Image
                  src={featuredImages.culture}
                  alt="Authenticity First"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl mb-4">Authenticity First</h3>
              <p className="text-gray-300">
                I believe in capturing genuine moments and real emotions. Every image should tell an authentic story that stands the test of time.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
              <div className="relative h-[250px] mb-6">
                <Image
                  src={featuredImages.motion}
                  alt="Technical Excellence"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl mb-4">Technical Excellence</h3>
              <p className="text-gray-300">
                Mastering the technical aspects of photography allows me to focus on what truly matters - the story and emotion in each frame.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
              <div className="relative h-[250px] mb-6">
                <Image
                  src={featuredImages.abstract}
                  alt="Artistic Vision"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl mb-4">Artistic Vision</h3>
              <p className="text-gray-300">
                I see photography as an art form that bridges reality and emotion, creating visual narratives that speak to the soul.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
    

        {/* Call to Action */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-light mb-6">Let's Create Something Beautiful Together</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you're looking to capture a special moment, tell your story, or create stunning visual content, I'm here to help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors rounded-full"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
} 
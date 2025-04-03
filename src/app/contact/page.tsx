'use client';

import Image from 'next/image';
import { images, featuredImages } from '@/utils/images';
import { ContactForm } from "@/components/contact/ContactForm"

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-[40vh] w-full">
        <Image
          src={featuredImages.abstract}
          alt="Contact Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Let's Connect</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Your vision, our expertise. Let's create something extraordinary together.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Context and Images */}
            <div className="space-y-12">
              <div>
                <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
                <p className="text-gray-600 text-sm mb-8">
                  Whether you're planning a wedding, need professional portraits, or want to capture 
                  special moments in your life, I'm here to help bring your vision to life.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={images.documentary1}
                      alt="Portrait Photography"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={images.bride1}
                      alt="Wedding Photography"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-300 p-4 text-sm rounded-lg">
            
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Professional photography with a personal touch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Years of experience in various photography styles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Customized packages to suit your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Quick response time and clear communication</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-black p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
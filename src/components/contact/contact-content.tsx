import { ContactForm } from "./ContactForm"
import { PageHeader } from "../shared/PageHead"
import { images } from "@/data/images"
import Image from "next/image"

export const ContactContent = () => {
    return (
        <div className="container mx-auto py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <PageHeader title="Get in Touch" description="Whether you're planning a wedding, need professional portraits, or want to capture special moments in your life, I'm here to help bring your vision to life." />
          <div className="grid lg:grid-cols-2 gap-16 items-start mt-16">
            <div className="space-y-12">
              <div className="grid grid-cols-2 gap-4">
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
              <div className="bg-neutral-900 p-6 rounded-lg">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-white mr-2">✓</span>
                    <span className="text-sm">Professional photography with a personal touch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">✓</span>
                    <span className="text-sm">Years of experience in various photography styles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">✓</span>
                    <span className="text-sm">Customized packages to suit your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">✓</span>
                    <span className="text-sm">Quick response time and clear communication</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-900 p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>    
    )
}
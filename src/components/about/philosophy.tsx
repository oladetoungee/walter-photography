import { featuredImages } from "@/data/images"
import Image from "next/image"
import { PageHeader } from "../shared/PageHead"

export const PhilosophySection = () => {
    return (
        <div className="mt-20">
        <PageHeader title="My Photography Philosophy" description="Every image should tell an authentic story that stands the test of time." />
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
         <h3 className="text-xl mb-2 text-white opacity-80">Authenticity First</h3>
            <p>
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
         <h3 className="text-xl mb-2 text-white opacity-80">Technical Excellence</h3>
            <p>
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
         <h3 className="text-xl mb-2 text-white opacity-80">Artistic Vision</h3>
            <p>
              I see photography as an art form that bridges reality and emotion, creating visual narratives that speak to the soul.
            </p>
          </div>
        </div>
      </div>
    )
}
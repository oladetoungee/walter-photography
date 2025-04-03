import { featuredImages } from "@/data/images"
import Image from "next/image"
export const StorySection = () => {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-light mb-6 text-white opacity-80">The Story Behind the Lens</h2>
          <p className="text-sm ">
            With over 15 years of experience in documentary and portrait photography, I've dedicated my life to capturing the authentic essence of human experiences. My journey began in the streets of Nigeria, where I discovered my passion for storytelling through images.
          </p>
          <p className="text-sm">
            Every photograph I take is a celebration of life's genuine moments - from intimate family portraits to grand cultural events. My approach combines technical precision with artistic intuition, allowing me to create images that resonate with depth and emotion.
          </p>
          <p className="text-sm">
            Born and raised in Nigeria's vibrant art scene, I was influenced by the city's diverse cultural landscape from an early age. My formal training at the Nigeria Institute of Photography laid the foundation for my technical expertise, while my travels across 40+ countries have shaped my unique perspective on visual storytelling.
          </p>
          <p className="text-sm">
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
    )
}
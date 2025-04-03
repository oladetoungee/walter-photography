import { featuredImages } from '@/data/images';
import Image from 'next/image';
import { PageHeader } from '../shared/PageHead';
export const TeamSection = () => {
    return (
        <div className="m-24">
      <PageHeader title="Meet the Team" description="Our team of photographers and filmmakers are dedicated to capturing your story" />
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
            <p className="text-xs">
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
            <p className="text-xs">
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
            <p className="text-xs">
              Emmy-nominated documentarian bringing authenticity and depth to our storytelling projects.
            </p>
          </div>
        </div>
      </div>
    )
}
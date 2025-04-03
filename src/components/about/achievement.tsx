import { featuredImages } from "@/data/images"
import Image from "next/image"
import { PageHeader } from "../shared/PageHead"

    export const AchievementSection = () => {
    return (
        <div className="mt-32">
       <PageHeader title="Recognition & Achievements" description="A collection of awards and recognitions that highlight our commitment to excellence." />
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
              <h3 className="text-xl mb-2 text-white opacity-80">World Photography Awards</h3>
              <p className="">First Place in Documentary Category, 2023</p>
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
              <h3 className="text-xl mb-2 text-white opacity-80">National Geographic</h3>
              <p className="">Featured Photographer, 2022</p>
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
              <h3 className="text-xl mb-2 text-white opacity-80">International Photography Festival</h3>
              <p className="">Best Portfolio Award, 2021</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="relative h-[200px] mb-4">
                <Image
                  src={featuredImages.archLines}
                  alt="Nigeria Art Gallery"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl mb-2 text-white opacity-80">Nigeria Art Gallery</h3>
              <p className="">Solo Exhibition "Urban Stories", 2023</p>
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
              <h3 className="text-xl mb-2 text-white opacity-80">Photography Excellence</h3>
              <p className="">Lifetime Achievement Award, 2022</p>
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
              <h3 className="text-xl mb-2 text-white opacity-80">Published Works</h3>
              <p className="">Featured in over 50 international publications</p>
            </div>
          </div>
        </div>
      </div>
    )
}
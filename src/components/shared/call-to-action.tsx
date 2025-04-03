import { PageHeader } from "./PageHead"

export const CallToAction = () => {
    return (
        <div className="mt-32 text-center">
       <PageHeader title="Let's Create Something Beautiful Together" description="Whether you're looking to capture a special moment, tell your story, or create stunning visual content, I'm here to help bring your vision to life." />
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors rounded-full"
          >
            Get in Touch
          </a>
        </div>
    )
}
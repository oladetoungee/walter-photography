'use client';

import MovingLogo from '../ui/MovingLogo';

export default function HeroSection() {
    return (
        <section className="hero-section relative flex flex-col justify-center space-y-8 md:space-y-12 lg:space-y-16 min-h-[100vh] bg-black text-white">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dn2oenkss/image/upload/v1742993618/walter-bg_w9srwx.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-black bg-opacity-50" />

            {/* Content Container */}
            <div className="relative z-20">
                {/* Moving Logo */}
                <div className="flex items-center justify-center overflow-hidden">
                    <MovingLogo 
                        src="https://res.cloudinary.com/dn2oenkss/image/upload/v1742993619/walter-logo_rsxjcf.png"
                        className="w-full md:w-[600px] lg:w-[800px]"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row justify-between items-start px-4 sm:px-6 md:px-12 space-y-8 md:space-y-0 md:space-x-8">
                   
          
                 {/* Branding Section - Left */}
                    <div className="max-w-lg w-full md:w-auto">
                        <h4 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2">Walter</h4>
                        <p className="text-xs sm:text-sm md:text-xs text-gray-300 leading-relaxed">
                            The Walter Brand embodies the essence of visual storytelling, capturing moments that transcend time and space. Walter's lens reveals the extraordinary in the ordinary, creating narratives that resonate with the soul. Each frame tells a story that lingers in memory, evoking emotions that words often fail to express.
                        </p>
                    </div>

                    {/* Stats Section - Right */}
                    <div className="grid grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-4 sm:gap-x-6 text-right md:text-left w-full md:w-auto">
                        {[
                            { label: "Years of Experience", value: "2019-2025" },
                            { label: "Sector", value: "Photography" },
                            { label: "Location", value: "Canada" },
                            { label: "Deliverables", value: "Sophistication" },
                        ].map((item, index) => (
                            <div key={index} className="space-y-1">
                                <p className="text-xs sm:text-sm text-gray-400">{item.label}</p>
                                <p className="text-xs font-light">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

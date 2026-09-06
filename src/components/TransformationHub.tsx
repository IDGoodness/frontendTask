import React from "react";
import Image from "next/image";
import Link from "next/link";

const transformationBenefits = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

// Purple Lightning Bolt Icon for Transformation Hub
function LightningIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#501339] flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
    </svg>
  );
}

export default function TransformationHub() {
  return (
    <section
      id="transformation-hub"
      className="w-full bg-white py-12 sm:py-16 lg:py-20"
      aria-labelledby="transformation-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft Peach/Rose Card Container */}
        <div className="bg-[#FDECEB] rounded-lg sm:rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm">
          
          {/* Header & Subtitle */}
          <div className="space-y-2 mb-6">
            <p className="text-xs sm:text-sm font-semibold text-[#2563EB] tracking-wide italic">
              Learning With Our CEO:
            </p>
            <h2
              id="transformation-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#501339] tracking-tight italic"
            >
              Transformation Hub With Jite Newton
            </h2>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-gray-800 mb-8 font-normal">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event offers
            invaluable insights and strategies for personal and professional
            growth. Whether you&apos;re seeking to advance your career or enhance
            your leadership skills, the Transformation Hub provides a
            transformative learning experience to unlock your full potential and
            drive success in your endeavours.
          </p>

          {/* Bottom Grid: Image on Left, Pills Grid + Button on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Container */}
            <div className="lg:col-span-6 w-full">
              <div className="relative w-full h-[240px] sm:h-[300px] md:h-[340px] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                <Image
                  src="/assets/transform.jpg"
                  alt="Young professionals exploring transformative technology and leadership"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Side: 2-Column Benefits Grid & CTA */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {transformationBenefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-gray-800 shadow-xs border border-gray-100/60 transition-transform hover:-translate-y-0.5"
                  >
                    <LightningIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div>
                <Link
                  href="#transformation"
                  className="inline-flex items-center gap-2 bg-[#501339] hover:bg-[#651848] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#501339] focus:ring-offset-2"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

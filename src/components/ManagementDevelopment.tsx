import React from "react";
import Image from "next/image";

const benefits = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

// Lightning Bolt Icon
function LightningIcon() {
  return (
    <svg
      className="w-4 h-4 text-white flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
    </svg>
  );
}

export default function ManagementDevelopment() {
  return (
    <section
      id="management-development"
      className="w-full bg-white py-12 sm:py-16 lg:py-20"
      aria-labelledby="mdp-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Wine Container Card */}
        <div className="bg-[#2D0B23] rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Mobile Title (visible above the image on mobile) */}
            <div className="block md:hidden md:col-span-12">
              <h2
                id="mdp-heading-mobile"
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug"
              >
                Management Development Program
              </h2>
            </div>

            {/* Left Column: Image */}
            <div className="md:col-span-5 w-full">
              <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden bg-[#3d1332] shadow-md">
                <Image
                  src="/assets/manage.jpg"
                  alt="Management team reviewing project goals together in a modern office"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </div>

            {/* Right Column: Title (Desktop), Descriptions & Benefit Pills */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-5 lg:space-y-6">
              {/* Desktop Title (hidden on mobile) */}
              <h2
                id="mdp-heading"
                className="hidden md:block text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug"
              >
                Management Development Program
              </h2>

              {/* Description Paragraphs */}
              <div className="space-y-3.5 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-white/90 font-normal">
                <p>
                  Tobams Group offers a comprehensive Management Development
                  Program designed to equip corporate organisations with the
                  high-performing leaders they need to thrive.
                </p>
                <p>
                  Our program includes workshops, seminars, coaching sessions,
                  online courses, and experiential learning opportunities designed
                  to improve leadership, strategic thinking, communication, and
                  other essential managerial competencies for corporate
                  organisations.
                </p>
              </div>

              {/* Benefit Pills Stack */}
              <div className="flex flex-col gap-2.5 sm:gap-3 pt-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-[#825476]/50 border border-white/10 rounded-lg sm:rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-white transition-colors hover:bg-[#825476]/65"
                  >
                    <LightningIcon />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

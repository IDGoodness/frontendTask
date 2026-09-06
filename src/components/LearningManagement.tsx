import React from "react";
import Image from "next/image";
import Link from "next/link";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function LearningManagement() {
  return (
    <section
      id="learning-management"
      className="w-full bg-[#EBE4EB] py-12 sm:py-16 md:py-20 lg:py-24"
      aria-labelledby="lms-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Heading (visible on mobile only) */}
        <div className="block md:hidden mb-8">
          <h2
            id="lms-heading-mobile"
            className="text-2xl sm:text-3xl font-bold text-[#501339] tracking-tight"
          >
            Learning Management System
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Circular Image */}
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-md flex-shrink-0 aspect-square">
              <Image
                src="/assets/learning.jpg"
                alt="Professionals collaborating and smiling in modern office"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 352px, 420px"
              />
            </div>
          </div>

          {/* Right Column: Title (Desktop), Content Card & Button */}
          <div className="md:col-span-7 flex flex-col space-y-6">
            {/* Desktop Heading (hidden on mobile) */}
            <h2
              id="lms-heading"
              className="hidden md:block text-2xl sm:text-3xl lg:text-4xl font-bold text-[#501339] tracking-tight"
            >
              Learning Management System
            </h2>

            {/* Info Card */}
            <div className="bg-[#DFCEDF] rounded-md p-6 sm:p-7 md:p-8 space-y-5 text-gray-900 shadow-sm">
              <p className="text-xs sm:text-sm lg:text-[15px] leading-relaxed text-gray-800">
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey. From
                technical courses covering the latest programming languages and
                development frameworks to soft skills training in leadership,
                effective communication and project management, TG Academy offers
                a wide range of courses to cater to diverse learning needs. With
                accessible and interactive learning materials, individuals can
                enhance their skills and stay ahead in today&apos;s competitive
                tech landscape.
              </p>

              <div>
                <h3 className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#501339] mb-3">
                  Some of our courses include:
                </h3>

                {/* Courses Bullets Grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4 text-xs sm:text-sm text-gray-800">
                  {courses.map((course) => (
                    <li key={course} className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-gray-800 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="#courses"
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
    </section>
  );
}

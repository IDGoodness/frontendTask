import React from "react";
import Link from "next/link";

export default function AccelerationCTA() {
  return (
    <section className="w-full bg-white py-10 sm:py-14" aria-label="Acceleration CTA">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#501339] rounded-md sm:rounded-md p-8 sm:p-10 md:p-12 text-center text-white shadow-md">
          {/* Desktop Heading */}
          <h2 className="hidden sm:block text-lg sm:text-xl md:text-2xl font-semibold max-w-5xl mx-auto leading-relaxed">
            Want to accelerate professional growth and development at your
            organisation? <br className="hidden md:inline" />
            See how we can help.
          </h2>

          {/* Mobile Heading */}
          <p className="block sm:hidden text-sm sm:text-base leading-relaxed max-w-md mx-auto font-medium">
            Don&apos;t just dream it—let&apos;s build it! Click now and start
            your project with Tobams Group. Your journey to digital excellence
            begins here.
          </p>

          {/* CTA Button */}
          <div className="mt-6 sm:mt-7">
            <Link
              href="#book-consultation"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#501339] font-medium text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#501339]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";

export default function PreFooterCTA() {
  return (
    <section className="w-full bg-[#1F0819] text-white py-10 sm:py-12" aria-label="Call to action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Text Content */}
          <div className="space-y-1.5">
            <p className="text-xs sm:text-sm text-white/80 font-normal">
              Ready to be a part of something extraordinary?
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
              Let&apos;s work together to create a difference
            </h2>
          </div>

          {/* Action Button */}
          <div className="flex-shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-[#501339] hover:bg-[#651848] text-white text-xs sm:text-sm font-medium px-7 py-3 rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#EE4857] focus:ring-offset-2 focus:ring-offset-[#1F0819]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-black">
      {/* Hero Background Image */}
      <Image
        src="/assets/hero.jpg"
        alt="hero alt"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-black/65 bg-gradient-to-b from-black/75 via-black/60 to-black/80"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-center flex flex-col items-center">
        {/* Category Pill Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/95 bg-white/10 backdrop-blur-sm shadow-sm mb-5">
          WHAT WE DO
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-tight max-w-3xl mb-4">
          Training and Development
        </h1>

        {/* Hero Subtitle */}
        <p className="text-white/85 text-sm sm:text-base md:text-lg mx-auto leading-relaxed sm:leading-normal mb-8 font-normal">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        {/* CTA Button */}
        <Link
          href="#book-consultation"
          className="inline-flex items-center justify-center bg-[#501339] hover:bg-[#651848] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#EE4857] focus:ring-offset-2 focus:ring-offset-black"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}

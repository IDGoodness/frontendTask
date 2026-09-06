"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    avatar: "/assets/avatar1.png",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    id: 2,
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    avatar: "/assets/avatar2.png",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    id: 3,
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    avatar: "/assets/avatar3.png",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    avatar: "/assets/avatar4.jpg",
    quote:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Reorder testimonials array for infinite cyclic display
  const displayItems = [
    ...testimonials.slice(startIndex),
    ...testimonials.slice(0, startIndex),
  ];

  return (
    <section
      id="testimonials"
      className="w-full bg-[#C4C4C44D] py-14 sm:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading */}
        <div className="text-center">
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight"
          >
            Testimonials
          </h2>
        </div>

        {/* Testimonial Cards Carousel Container */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayItems.slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                className={`bg-white rounded-xl p-6 sm:p-7 border-l-[3px] border-l-[#EE4857] shadow-xs flex flex-col justify-between transition-all duration-300 ${
                  idx === 0
                    ? "block"
                    : idx === 1
                      ? "hidden md:flex"
                      : "hidden lg:flex"
                }`}
              >
                <div>
                  {/* Top Author Row */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 bg-amber-100">
                      <Image
                        src={item.avatar}
                        alt={`Photo of ${item.name}`}
                        fill
                        className="object-cover object-center"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-normal">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    {item.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Arrow Navigation Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FDECEB] hover:bg-[#FCDCDC] text-[#EE4857] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#EE4857]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FDECEB] hover:bg-[#FCDCDC] text-[#EE4857] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#EE4857]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

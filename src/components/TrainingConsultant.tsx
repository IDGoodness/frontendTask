import React from "react";
import Link from "next/link";

const features = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function TrainingConsultant() {
  return (
    <section
      id="training-the-consultant"
      className="w-full bg-[#EBE4EB] py-14 sm:py-18 lg:py-22"
      aria-labelledby="consultant-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-7">
        
        {/* Title & Subheading */}
        <div className="space-y-2">
          <h2
            id="consultant-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#501339] tracking-tight"
          >
            Training The Consultant
          </h2>
          <p className="text-xs sm:text-sm md:text-[15px] font-semibold text-[#501339]">
            Maximise Your Potential as a Certified Trainer:
          </p>
        </div>

        {/* Intro Description */}
        <p className="text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-gray-800 font-normal max-w-6xl">
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified training
          consultant. Learn from professionals in the field, immerse yourself in a
          thorough curriculum, and hone your training methods through interactive
          workshops. Participating in our program will enable you to gain
          expertise in diverse courses while also developing the abilities to
          mentor and encourage others in their career advancement.
        </p>

        {/* Dark Purple Features Card */}
        <div className="bg-[#501339] rounded-sm sm:rounded-md p-6 sm:p-8 md:p-10 text-white shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Link
            href="#consultant"
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
    </section>
  );
}

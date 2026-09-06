import React from "react";
import Image from "next/image";

interface ProgramItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
}

const programs: ProgramItem[] = [
  {
    id: "corporate-trainings",
    title: "Corporate Trainings",
    description:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    bullets: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
    imageSrc: "/assets/one.jpg",
    imageAlt:
      "Corporate training session with presenter showing presentation to team members",
    imageOnLeft: false,
  },
  {
    id: "personalised-individual-training",
    title: "Personalised Individual Training",
    description:
      "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    bullets: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
    imageSrc: "/assets/two.jpg",
    imageAlt:
      "Woman listening attentively during a personalized training seminar",
    imageOnLeft: true,
  },
  {
    id: "capacity-development",
    title: "Capacity Development",
    description:
      "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    bullets: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
    imageSrc: "/assets/three.jpg",
    imageAlt:
      "Team collaborating around a whiteboard flipchart during a capacity development workshop",
    imageOnLeft: false,
  },
];

// 4-pointed Sparkle / Star Icon used as bullets
function SparkleIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-[#501339] flex-shrink-0 mt-0.5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export default function TrainingPrograms() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24" aria-label="Training Programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-28">
        {programs.map((program) => (
          <div
            key={program.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            {/* Mobile Title (visible at the very top of each item on mobile) */}
            <div className="block md:hidden md:col-span-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                {program.title}
              </h3>
            </div>

            {/* Image Block */}
            <div
              className={`md:col-span-6 w-full ${
                program.imageOnLeft ? "md:order-1" : "md:order-2"
              }`}
            >
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] rounded-[5px] rounded-tl-[15px] sm:rounded-tl-[40px] lg:rounded-tl-[40px] overflow-hidden shadow-sm bg-gray-100">
                <Image
                  src={program.imageSrc}
                  alt={program.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content Text Block */}
            <div
              className={`md:col-span-6 flex flex-col justify-center space-y-4 lg:space-y-5 ${
                program.imageOnLeft ? "md:order-2" : "md:order-1"
              }`}
            >
              {/* Desktop Title (hidden on mobile) */}
              <h3 className="hidden md:block text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm lg:text-[15px] leading-relaxed text-gray-700">
                {program.description}
              </p>

              {/* Bullets List */}
              <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-gray-800">
                {program.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <SparkleIcon />
                    <span className="font-normal">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

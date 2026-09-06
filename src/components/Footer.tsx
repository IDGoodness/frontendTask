import React from "react";
import Image from "next/image";
import Link from "next/link";

const whatWeDoLinks = [
  { label: "Sustainability Services", href: "#" },
  { label: "Strategy Planning and Implementation", href: "#" },
  { label: "Tech Talent Solutions", href: "#" },
  { label: "Training and Development", href: "#" },
  { label: "IT Consulting Services", href: "#" },
  { label: "Social Impact", href: "#" },
  { label: "Talent Recruitment", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Our Founder", href: "#" },
  { label: "Business Model", href: "#" },
  { label: "The Team", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Blog", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Testimonials", href: "#" },
];

const solutionLinks = [
  { label: "Tobams Group Academy", href: "#" },
  { label: "Help a Tech Talent", href: "#" },
  { label: "Campus Ambassadors Program", href: "#" },
  { label: "Join Our Platform", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book a Consultation", href: "#" },
  { label: "Join Our Slack Community", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#180514] text-white pt-16 pb-10 border-t border-white/10" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        
        {/* Top Section: Brand Info + 3 Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Logo, Bio & Social Icons */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-[#EE4857] rounded">
              <div className="relative w-44 h-14">
                <Image
                  src="/assets/logo.png"
                  alt="Tobams Group Logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                  sizes="176px"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm font-normal">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in talent
              acquisition, internships, and skill development with a global
              perspective.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white text-[#180514] flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#EE4857]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.74c-.95 0-1.72.77-1.72 1.72 0 .95.77 1.72 1.72 1.72.95 0 1.72-.77 1.72-1.72 0-.95-.77-1.72-1.72-1.72Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white text-[#180514] flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#EE4857]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-8 h-8 rounded-full bg-white text-[#180514] flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#EE4857]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
              What We Do
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              {whatWeDoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Solution */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
              Solution
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Middle Card: Registered Offices & Contact Information */}
        <div className="bg-[#240C1F] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-white/5 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Registered Offices Block (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                Registered Offices
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-[13px] text-gray-300 leading-relaxed">
                {/* UK Address */}
                <div className="space-y-1">
                  <p className="text-[#EE4857] font-semibold text-xs sm:text-sm">
                    United Kingdom
                  </p>
                  <p>07451196 (Registered by Company House)</p>
                  <p>
                    Vine Cottages, 215 North Street, Romford, Essex, United
                    Kingdom, RM1 4QA
                  </p>
                </div>

                {/* Nigeria Address */}
                <div className="space-y-1">
                  <p className="text-[#EE4857] font-semibold text-xs sm:text-sm">
                    Nigeria
                  </p>
                  <p>
                    RC 1048722 (Registered by the Corporate Affairs Commission)
                  </p>
                  <p>4, Muaz Close, Angwar-Rimi</p>
                </div>
              </div>
            </div>

            {/* Contact Information Block (4 Cols) */}
            <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-white/10 lg:pl-8">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                Contact Information
              </h3>

              <div className="space-y-3 text-xs sm:text-[13px] text-gray-300">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-[#EE4857] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <a
                    href="mailto:theteam@tobamsgroup.com"
                    className="hover:text-white transition-colors"
                  >
                    theteam@tobamsgroup.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-[#EE4857] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <a
                    href="tel:+447886600748"
                    className="hover:text-white transition-colors"
                  >
                    +447886600748
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>Copyright © Tobams Group, 2024. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="#terms"
              className="hover:text-white transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="#privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#cookies"
              className="hover:text-white transition-colors"
            >
              Cookies Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

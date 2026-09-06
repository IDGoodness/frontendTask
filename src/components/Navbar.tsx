"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about", hasDropdown: true, isActive: true },
  { label: "What We Do", href: "#what-we-do", hasDropdown: true },
  { label: "Jobs", href: "#jobs", hasDropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "TG Academy", href: "#tg-academy" },
  { label: "Strategic Partnership", href: "#strategic-partnership" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book a Consultation", href: "#book-consultation" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white z-50 relative">
      {/* Top Header Row (Desktop & Mobile Top Bar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#501339] rounded-md">
            <div className="relative w-40 h-12 sm:w-48 sm:h-14 lg:w-52 lg:h-15">
              <Image
                src="/assets/logo.png"
                alt="Tobams Group Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 208px"
              />
            </div>
          </Link>

          {/* Desktop Top Right CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Account Button */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-2.5 bg-[#40122E] hover:bg-[#52183c] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#40122E] focus:ring-offset-2"
                aria-label="User Account Menu"
              >
                <svg
                  className="w-5 h-5 text-white/90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 9a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                </svg>
                <span>Account</span>
                <svg
                  className="w-4 h-4 text-white/80 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Take Assessment Button */}
            <Link
              href="#assessment"
              className="bg-[#EE4857] hover:bg-[#d83c4b] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EE4857] focus:ring-offset-2"
            >
              Take Assessment
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-800 hover:text-[#501339] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#501339]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="4"
                    strokeWidth={2}
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 9h10M7 12h10M7 15h10"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links Row */}
      <nav
        className="hidden md:block border-t border-gray-150"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-6 lg:gap-8 py-3.5 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 py-1 transition-colors relative focus:outline-none focus:ring-2 focus:ring-[#501339] rounded ${
                    item.isActive
                      ? "text-[#501339] font-semibold after:absolute after:-bottom-[15px] after:left-0 after:right-0 after:h-[2px] after:bg-[#501339]"
                      : "text-gray-700 hover:text-[#501339]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <svg
                      className="w-3.5 h-3.5 text-current opacity-80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-lg">
          <nav aria-label="Mobile Navigation">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                      item.isActive
                        ? "bg-purple-50 text-[#501339] font-semibold"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#501339]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <svg
                        className="w-4 h-4 opacity-70"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-[#40122E] text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm"
            >
              <svg
                className="w-5 h-5 text-white/90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 9a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
              </svg>
              <span>Account</span>
            </button>

            <Link
              href="#assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#EE4857] text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm"
            >
              Take Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import PinkOaksLogo from "./PinkOaksLogo";

interface NavbarProps {
  onOpenEnquire: (title?: string) => void;
}

export default function Navbar({ onOpenEnquire }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Homepage", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#FBF8F4]/95 border-b border-[#E88CA4]/20 shadow-xs"
          : "py-5 bg-[#FBF8F4]/80 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Left */}
        <a href="#hero" className="flex items-center gap-2 focus:outline-none">
          <PinkOaksLogo size="sm" />
        </a>

        {/* Links Center (Poppins font per brand specs) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-xs tracking-widest uppercase font-medium text-[#241C20] hover:text-[#C74B66] transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Single CTA Button Right */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onOpenEnquire("General Enquiry")}
            className="px-6 py-2.5 bg-[#C74B66] hover:bg-[#8E2F47] text-[#FBF8F4] font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors shadow-xs"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={() => onOpenEnquire("Mobile Enquiry")}
            className="px-4 py-2 bg-[#C74B66] text-[#FBF8F4] font-sans text-[11px] font-medium uppercase tracking-wider rounded-md"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#241C20] hover:text-[#C74B66] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF8F4] border-b border-[#E88CA4]/20 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm font-medium uppercase tracking-widest text-[#241C20] hover:text-[#C74B66]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

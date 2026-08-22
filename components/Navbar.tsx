"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PinkOaksLogo from "./PinkOaksLogo";

interface NavbarProps {
  onOpenEnquire: (title?: string) => void;
}

export default function Navbar({ onOpenEnquire }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Homepage", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 bg-[#E8E1D3] ${
        isScrolled
          ? "border-b border-[#C15F70]/25 shadow-xs"
          : "border-b border-[#C15F70]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-2 focus:outline-none">
          <PinkOaksLogo size="sm" />
        </Link>

        {/* Real Dedicated Routes Center */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors relative py-1 ${
                  isActive
                    ? "text-[#C15F70] font-semibold"
                    : "text-[#241C20] hover:text-[#C15F70]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C15F70] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Single CTA Button Right */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onOpenEnquire("General Enquiry")}
            className="px-6 py-2.5 bg-[#C15F70] hover:bg-[#A34A5A] text-[#E8E1D3] font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors shadow-xs"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={() => onOpenEnquire("Mobile Enquiry")}
            className="px-4 py-2 bg-[#C15F70] text-[#E8E1D3] font-sans text-[11px] font-medium uppercase tracking-wider rounded-md"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#241C20] hover:text-[#C15F70] focus:outline-none"
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
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-[#E8E1D3] border-b border-[#C15F70]/20 px-6 py-6 space-y-4 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm font-medium uppercase tracking-widest text-[#241C20] hover:text-[#C15F70]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

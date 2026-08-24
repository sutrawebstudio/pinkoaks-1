"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PinkOaksLogo from "./PinkOaksLogo";
import Button from "./ui/Button";

interface NavbarProps {
  onOpenEnquire: (title?: string) => void;
}

export default function Navbar({ onOpenEnquire }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        isScrolled
          ? "bg-[#E8E1D3]/95 backdrop-blur-md border-b border-[#C15F70]/25 shadow-sm"
          : "bg-[#E8E1D3]/90 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        {/* Logo Left */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E8E1D3]"
        >
          <PinkOaksLogo size="sm" />
        </Link>

        {/* Real Dedicated Routes Center */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-xs tracking-widest uppercase font-semibold transition-colors relative py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] ${
                  isActive
                    ? "text-[#C15F70]"
                    : "text-[#241C20]/90 hover:text-[#C15F70]"
                }`}
                aria-current={isActive ? "page" : undefined}
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
          <Button
            variant="primary"
            onClick={() => onOpenEnquire("General Enquiry")}
          >
            Enquire Now
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <Button
            variant="primary"
            onClick={() => onOpenEnquire("Mobile Enquiry")}
            className="!min-h-[38px] !px-3.5 !py-1.5 !text-[11px]"
          >
            Enquire
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-[#241C20] hover:text-[#C15F70] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] rounded-lg touch-manipulation cursor-pointer"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-[72px] left-0 right-0 bg-[#E8E1D3] border-b border-[#C15F70]/25 px-6 py-6 space-y-4 shadow-xl"
          role="dialog"
          aria-label="Mobile Navigation Menu"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-sans text-sm font-semibold uppercase tracking-widest py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] ${
                  isActive ? "text-[#C15F70]" : "text-[#241C20] hover:text-[#C15F70]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}


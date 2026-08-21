"use client";

import Image from "next/image";
import PinkOaksLogo from "./PinkOaksLogo";
import PinkBlossomIcon from "./PinkBlossomIcon";

interface FooterProps {
  onOpenEnquire: (title?: string) => void;
}

export default function Footer({ onOpenEnquire }: FooterProps) {
  return (
    <footer className="bg-[#2E3D2A] text-[#E8E2D5] pt-16 pb-12 border-t border-[#B78D4A]/40 relative overflow-hidden">
      
      {/* 3. Secondary Texture: Jaali screen lattice pattern repeating background (opacity 0.05) */}
      <div className="absolute inset-0 z-0 opacity-5 mix-blend-overlay pointer-events-none select-none">
        <Image
          src="/images/detail-jali.jpg"
          alt="Jaali Screen Texture"
          fill
          className="object-cover"
        />
      </div>

      {/* Blossom Sprig Motif Accent: Bottom-right corner (opacity 0.10) */}
      <div className="absolute bottom-6 right-6 opacity-10 pointer-events-none select-none z-0 hidden md:block">
        <PinkBlossomIcon size={240} className="text-[#C94F6D]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E8E2D5]/15">
          
          {/* Brand Info Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-block bg-[#E8E2D5] p-4 rounded-xl shadow-xs">
              <PinkOaksLogo size="sm" />
            </div>

            <p className="font-sans text-xs text-[#E8E2D5]/85 font-light leading-relaxed max-w-sm">
              Established in 1990, Pink Oaks Properties is the first real estate company in Jaipur to have earned ISO certification. Crafting homes rooted in heritage, elegance, and peace.
            </p>

            {/* Supporting Blossom Detail Thumbnail */}
            <div className="flex items-center space-x-3 pt-1">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#A3B18A]/50">
                <Image
                  src="/images/detail-blossom.jpg"
                  alt="Jaipur Blossom Detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-[11px] font-sans text-[#E8E2D5]/80">
                <span className="font-serif font-medium text-[#E8E2D5] block">Soft Pink Blossom Heritage</span>
                <span>Crafted for real Indian families</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[#E8E2D5]/30 hover:border-[#C94F6D] text-[#E8E2D5] hover:text-[#C94F6D] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[#E8E2D5]/30 hover:border-[#C94F6D] text-[#E8E2D5] hover:text-[#C94F6D] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919772297772"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[#E8E2D5]/30 hover:border-[#C94F6D] text-[#E8E2D5] hover:text-[#C94F6D] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 1: Work With Us */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#A3B18A]">
              Work With Us
            </h4>
            <ul className="space-y-2.5 font-sans text-xs font-light text-[#E8E2D5]/85">
              <li>
                <button onClick={() => onOpenEnquire("Footer Enquire")} className="hover:text-[#C94F6D] transition-colors">
                  Enquire
                </button>
              </li>
              <li>
                <button onClick={() => onOpenEnquire("Footer Site Visit")} className="hover:text-[#C94F6D] transition-colors">
                  Schedule A Site Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Know Us */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#A3B18A]">
              Know Us
            </h4>
            <ul className="space-y-2.5 font-sans text-xs font-light text-[#E8E2D5]/85">
              <li><a href="/about" className="hover:text-[#C94F6D] transition-colors">About Us</a></li>
              <li><a href="/leadership" className="hover:text-[#C94F6D] transition-colors">Leadership</a></li>
              <li><a href="/about" className="hover:text-[#C94F6D] transition-colors">Sustainability</a></li>
              <li><a href="#plans" className="hover:text-[#C94F6D] transition-colors">Architectural Design</a></li>
            </ul>
          </div>

          {/* Col 3: Projects & Media */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#A3B18A]">
              Projects &amp; Media
            </h4>
            <ul className="space-y-2.5 font-sans text-xs font-light text-[#E8E2D5]/85">
              <li><a href="#overview" className="hover:text-[#C94F6D] transition-colors">Residential</a></li>
              <li><a href="#plans" className="hover:text-[#C94F6D] transition-colors">Plotted &amp; Commercial</a></li>
              <li><a href="#overview" className="hover:text-[#C94F6D] transition-colors">In The News</a></li>
              <li><a href="#overview" className="hover:text-[#C94F6D] transition-colors">Press Release</a></li>
            </ul>
          </div>

        </div>

        {/* Brand Book Footer Sign-off */}
        <div className="pt-8 text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <PinkBlossomIcon className="w-4 h-4 text-[#C94F6D]" />
          </div>
          <div className="font-serif text-sm text-[#E8E2D5]/90 tracking-widest">
            Pink Oaks &nbsp;·&nbsp; Jaipur &nbsp;·&nbsp; <span className="font-script text-base text-[#C94F6D]">Live Rooted</span>
          </div>
          <p className="font-sans text-[11px] text-[#E8E2D5]/60 font-light">
            Copyright © 2026 Pink Oaks Properties &nbsp;·&nbsp; Disclaimer &nbsp;·&nbsp; Sitemap
          </p>
        </div>

      </div>
    </footer>
  );
}

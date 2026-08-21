"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PinkOaksLogo from "./PinkOaksLogo";
import PinkBlossomIcon from "./PinkBlossomIcon";

interface HeroProps {
  onOpenEnquire: (title?: string) => void;
}

export default function Hero({ onOpenEnquire }: HeroProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Pink Oaks · Bani Park, Jaipur",
          text: "Luxury 3, 3+ Utility & 4 BHK Residences in Bani Park, Jaipur.",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share failed:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#241C20] overflow-hidden min-h-[90vh] flex items-center">
      
      {/* Cinematic Full-Bleed Background Video with Poster Fallback (Round 4) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero.jpg"
          className="w-full h-full object-cover opacity-60 scale-105 transform duration-1000"
        >
          <source src="/videos/hero-architecture.mp4" type="video/mp4" />
        </video>
        {/* Dark Scrim Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#241C20]/90 via-[#241C20]/70 to-[#241C20]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241C20] via-transparent to-[#241C20]/40" />
      </div>

      {/* Subtle Flower Watermark Background */}
      <div className="absolute top-12 right-12 opacity-10 pointer-events-none select-none z-1">
        <PinkBlossomIcon size={360} className="text-[#C15F70]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8 text-[#E8E1D3]"
          >
            {/* Tagline moment with 5-petal flower motif accent */}
            <div className="flex items-center space-x-2.5 border-b border-[#B78D4A]/40 pb-4 max-w-xs">
              <span className="font-script text-3xl sm:text-4xl text-[#C15F70]">Live</span>
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.2em] uppercase text-[#E8E1D3]">
                ROOTED.
              </span>
              <PinkBlossomIcon className="w-4 h-4 text-[#C15F70] ml-1" />
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#E8E1D3] leading-[1.12]">
                A Private Floor Above The City.
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#E8E1D3]/85 font-light leading-relaxed max-w-xl">
                Where timeless architecture meets modern indulgence in Bani Park, Jaipur. Designed for true sanctuary and lifelong family harmony.
              </p>
            </div>

            {/* Key Pricing & Specs Banner */}
            <div className="bg-[#241C20]/80 backdrop-blur-sm border-l-2 border-[#C15F70] p-4 sm:p-5 rounded-r-md border border-[#C15F70]/20">
              <div className="font-serif text-xl sm:text-2xl font-semibold text-[#C15F70]">
                INR 1.98 Cr. onwards
              </div>
              <div className="font-sans text-xs sm:text-sm font-medium text-[#E8E1D3]/90 tracking-wide mt-1">
                Possession June 2026 &nbsp;·&nbsp; 3, 3+ Utility &amp; 4 BHK
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenEnquire("Schedule a Site Visit")}
                className="px-7 py-3.5 bg-[#C15F70] hover:bg-[#A34A5A] text-[#E8E1D3] font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors shadow-sm"
              >
                Schedule a Visit
              </button>

              <a
                href="#emi-calculator"
                className="px-6 py-3.5 border border-[#E8E1D3]/40 text-[#E8E1D3] hover:bg-[#E8E1D3]/10 font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors"
              >
                EMI Calculator
              </a>

              <div className="flex items-center space-x-2">
                <a
                  href="https://wa.me/919772297772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 border border-[#E8E1D3]/30 text-[#C15F70] hover:bg-[#E8E1D3]/10 rounded-md transition-colors"
                  title="WhatsApp Us"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </a>

                <a
                  href="tel:+919772297772"
                  className="p-3.5 border border-[#E8E1D3]/30 text-[#C15F70] hover:bg-[#E8E1D3]/10 rounded-md transition-colors"
                  title="Call Us (+91 9772297772)"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>

                <button
                  onClick={handleShare}
                  className="p-3.5 border border-[#E8E1D3]/30 text-[#C15F70] hover:bg-[#E8E1D3]/10 rounded-md transition-colors"
                  title="Share Project"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 100-5.367 3 3 0 000 5.367zm0 8a3 3 0 100-5.367 3 3 0 000 5.367z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Supporting Family Lifestyle Preview Card */}
            <div className="pt-3 flex items-center gap-3.5 border-t border-[#E8E1D3]/15">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#C15F70]/40">
                <Image
                  src="/images/family-living.jpg"
                  alt="Multi-generational family living"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs">
                <span className="font-serif font-semibold text-[#E8E1D3] block">
                  Built for Multi-Generational Families
                </span>
                <span className="font-sans font-light text-[#E8E1D3]/75 text-[11px]">
                  Private floors, sprawling balconies &amp; quiet sanctuaries
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Prominent Hero Card Lockup (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C15F70]/30 aspect-[4/3] min-h-[380px] lg:min-h-[440px]">
              <Image
                src="/images/hero.jpg"
                alt="Pink Oaks Luxury Architecture"
                fill
                priority
                className="object-cover"
              />
              
              {/* Holding Card for Logo (Brand Book Rule) */}
              <div className="absolute top-6 left-6 z-10">
                <PinkOaksLogo variant="holding-card" size="sm" />
              </div>

              {/* RERA Badge Bottom Right */}
              <div className="absolute bottom-4 right-4 bg-[#241C20]/90 backdrop-blur-xs px-3.5 py-1.5 rounded-md border border-[#B78D4A]/40 text-[10px] font-sans font-medium uppercase tracking-widest text-[#E8E1D3] shadow-xs">
                RERA: RAJ/P/2025/3489
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

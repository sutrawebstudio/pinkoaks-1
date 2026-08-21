"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PinkOaksLogo from "./PinkOaksLogo";

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
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 bg-[#FBF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Content (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Tagline moment */}
            <div className="flex items-baseline space-x-2 border-b border-[#B78D4A]/25 pb-4 max-w-xs">
              <span className="font-script text-3xl sm:text-4xl text-[#C74B66]">Live</span>
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.2em] uppercase text-[#241C20]">
                ROOTED.
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#241C20] leading-[1.15]">
                A Private Floor Above The City.
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#241C20]/80 font-light leading-relaxed max-w-xl">
                Where timeless architecture meets modern indulgence in Bani Park, Jaipur. Designed for true sanctuary and lifelong family harmony.
              </p>
            </div>

            {/* Key Pricing & Specs Banner */}
            <div className="bg-[#F8ECEF] border-l-2 border-[#C74B66] p-4 sm:p-5 rounded-r-md">
              <div className="font-serif text-lg sm:text-xl font-semibold text-[#C74B66]">
                INR 1.98 Cr. onwards
              </div>
              <div className="font-sans text-xs sm:text-sm font-medium text-[#241C20]/90 tracking-wide mt-1">
                Possession June 2026 &nbsp;·&nbsp; 3, 3+ Utility &amp; 4 BHK
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenEnquire("Schedule a Site Visit")}
                className="px-6 py-3.5 bg-[#C74B66] hover:bg-[#8E2F47] text-[#FBF8F4] font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors shadow-xs"
              >
                Schedule a Visit
              </button>

              <a
                href="#emi-calculator"
                className="px-5 py-3.5 border border-[#C74B66] text-[#C74B66] hover:bg-[#F8ECEF] font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors"
              >
                EMI Calculator
              </a>

              <div className="flex items-center space-x-2">
                <a
                  href="https://wa.me/919772297772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 border border-[#E88CA4]/40 text-[#C74B66] hover:bg-[#F8ECEF] rounded-md transition-colors"
                  title="WhatsApp Us"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </a>

                <a
                  href="tel:+919772297772"
                  className="p-3.5 border border-[#E88CA4]/40 text-[#C74B66] hover:bg-[#F8ECEF] rounded-md transition-colors"
                  title="Call Us (+91 9772297772)"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>

                <button
                  onClick={handleShare}
                  className="p-3.5 border border-[#E88CA4]/40 text-[#C74B66] hover:bg-[#F8ECEF] rounded-md transition-colors"
                  title="Share Project"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 100-5.367 3 3 0 000 5.367zm0 8a3 3 0 100-5.367 3 3 0 000 5.367z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Prominent Hero Photograph (6 cols = 50% width desktop grid) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xs border border-[#E88CA4]/30 aspect-[4/3] min-h-[380px] lg:min-h-[460px]">
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
              <div className="absolute bottom-4 right-4 bg-[#FBF8F4]/95 backdrop-blur-xs px-3.5 py-1.5 rounded-md border border-[#B78D4A]/30 text-[10px] font-sans font-medium uppercase tracking-widest text-[#241C20] shadow-xs">
                RERA: RAJ/P/2025/3489
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

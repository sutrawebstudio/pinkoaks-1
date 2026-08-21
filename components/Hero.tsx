"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PinkOaksLogo from "./PinkOaksLogo";
import PinkBlossomIcon from "./PinkBlossomIcon";
import { Sparkles, MapPin, Calendar, Home, ArrowRight, Share2, Phone } from "lucide-react";

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
    <section id="hero" className="py-6 sm:py-8 lg:py-12 bg-[#E8E1D3]">
      {/* Single Unified Frame Container (Round 6) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C15F70]/35 bg-[#241C20] p-8 sm:p-12 lg:p-16 min-h-[85vh] flex items-center">
          
          {/* Full-Bleed Background Video / Poster inside the Frame */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/hero.jpg"
              className="w-full h-full object-cover opacity-45 scale-105 transform duration-1000"
            >
              <source src="/videos/hero-architecture.mp4" type="video/mp4" />
            </video>
            {/* Scrim Overlay inside Frame */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#241C20]/95 via-[#241C20]/80 to-[#241C20]/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241C20] via-transparent to-[#241C20]/60" />
          </div>

          {/* Faint Flower Watermark */}
          <div className="absolute top-10 right-10 opacity-10 pointer-events-none select-none z-1">
            <PinkBlossomIcon size={380} className="text-[#C15F70]" />
          </div>

          {/* Single Unified Content Stack Inside Frame */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 text-[#E8E1D3]"
            >
              {/* Logo Holding Card inside Frame Top Left */}
              <div className="w-fit">
                <PinkOaksLogo variant="holding-card" size="md" />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center space-x-2 bg-[#E8E1D3]/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C15F70]/40 text-xs font-sans font-medium text-[#E8E1D3]">
                  <MapPin className="w-3.5 h-3.5 text-[#C15F70]" />
                  <span>Bani Park, Jaipur</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-[#C15F70]/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C15F70]/50 text-xs font-sans font-medium text-[#C15F70]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Low Density Enclave</span>
                </div>
              </div>

              {/* Tagline */}
              <div className="flex items-center space-x-3 border-b border-[#B78D4A]/40 pb-4 max-w-sm">
                <span className="font-script text-3xl sm:text-4xl text-[#C15F70]">Live</span>
                <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.25em] uppercase text-[#E8E1D3]">
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
                  Where timeless architecture meets modern indulgence in Bani Park. Designed for true sanctuary and lifelong family harmony.
                </p>
              </div>

              {/* Key Investment Strip */}
              <div className="bg-[#241C20]/80 backdrop-blur-md border-l-4 border-[#C15F70] p-5 rounded-r-xl border border-[#C15F70]/30 shadow-xl flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#B78D4A] block">
                    Starting Investment
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#C15F70] mt-0.5">
                    INR 1.98 Cr. <span className="text-xs font-sans font-light text-[#E8E1D3]/70">onwards*</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-[#E8E1D3]/20 hidden sm:block" />
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-sans text-[#E8E1D3]/90">
                    <Calendar className="w-3.5 h-3.5 text-[#9CAA8C]" />
                    <span>Possession June 2026</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-sans text-[#E8E1D3]/90">
                    <Home className="w-3.5 h-3.5 text-[#A9C4D4]" />
                    <span>3, 3+ Utility &amp; 4 BHK Floor Residences</span>
                  </div>
                </div>
              </div>

              {/* Actions Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenEnquire("Schedule a Site Visit")}
                  className="px-7 py-3.5 bg-[#C15F70] hover:bg-[#A34A5A] text-[#E8E1D3] font-sans text-xs font-medium uppercase tracking-widest rounded-lg transition-all shadow-md hover:shadow-lg flex items-center space-x-2 group"
                >
                  <span>Schedule a Visit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#emi-calculator"
                  className="px-6 py-3.5 border border-[#E8E1D3]/40 text-[#E8E1D3] hover:bg-[#E8E1D3]/10 font-sans text-xs font-medium uppercase tracking-widest rounded-lg transition-colors"
                >
                  EMI Calculator
                </a>

                <div className="flex items-center space-x-2">
                  <a
                    href="https://wa.me/919772297772"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 border border-[#E8E1D3]/30 text-[#C15F70] hover:bg-[#E8E1D3]/10 rounded-lg transition-colors"
                    aria-label="WhatsApp Us"
                  >
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                  </a>

                  <a
                    href="tel:+919772297772"
                    className="p-3.5 border border-[#E8E1D3]/30 text-[#C15F70] hover:bg-[#E8E1D3]/10 rounded-lg transition-colors"
                    aria-label="Call Sales"
                  >
                    <Phone className="w-4 h-4" />
                  </a>

                  <button
                    onClick={handleShare}
                    className="p-3.5 border border-[#E8E1D3]/30 text-[#C15F70] hover:bg-[#E8E1D3]/10 rounded-lg transition-colors"
                    aria-label="Share Project"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Framed Building Photo Feature (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C15F70]/40 aspect-[4/3] min-h-[360px] lg:min-h-[420px] group">
                <Image
                  src="/images/hero.jpg"
                  alt="Pink Oaks Luxury Architecture"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* RERA Badge Bottom Right */}
                <div className="absolute bottom-4 right-4 bg-[#241C20]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#B78D4A]/50 text-[10px] font-sans font-medium uppercase tracking-widest text-[#E8E1D3] shadow-md">
                  RERA: RAJ/P/2025/3489
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

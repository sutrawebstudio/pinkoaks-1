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
    <section id="hero" className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 bg-[#241C20] overflow-hidden min-h-[92vh] flex items-center justify-center">
      
      {/* Cinematic Full-Bleed Background Video & High-Res Photo Fallback */}
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
        {/* Dark Scrim Overlay for Centered Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#241C20]/90 via-[#241C20]/75 to-[#241C20]/95" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#241C20]/50 to-[#241C20]/90" />
      </div>

      {/* Decorative Flower Watermark Background (Centered) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none select-none z-1">
        <PinkBlossomIcon size={560} className="text-[#C15F70]" />
      </div>

      {/* Single Unified Centered Frame (Round 6) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-[#E8E1D3] flex flex-col items-center w-full"
        >
          {/* Logo Holding Card Centered (Brand Book Specification) */}
          <div className="shadow-2xl shadow-black/50">
            <PinkOaksLogo variant="holding-card" size="md" />
          </div>

          {/* Location & Tagline Pill Bar (Centered) */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center space-x-2 bg-[#E8E1D3]/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C15F70]/40 text-xs font-sans font-medium text-[#E8E1D3]">
              <MapPin className="w-3.5 h-3.5 text-[#C15F70]" />
              <span>Bani Park, Jaipur</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-[#C15F70]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C15F70]/50 text-xs font-sans font-medium text-[#C15F70]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Low Density Enclave</span>
            </div>
          </div>

          {/* Tagline Moment Centered ("Live ROOTED.") */}
          <div className="flex items-center justify-center space-x-3 border-b border-[#B78D4A]/40 pb-4 w-full max-w-sm">
            <span className="font-script text-3xl sm:text-4xl text-[#C15F70]">Live</span>
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.25em] uppercase text-[#E8E1D3]">
              ROOTED.
            </span>
            <PinkBlossomIcon className="w-4 h-4 text-[#C15F70] ml-1" />
          </div>

          {/* Main Headline Centered */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#E8E1D3] leading-[1.12]">
              A Private Floor Above The City.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#E8E1D3]/85 font-light leading-relaxed max-w-2xl mx-auto">
              Where timeless Rajasthani architecture meets modern indulgence in the heart of Bani Park. Designed for true sanctuary and lifelong family harmony.
            </p>
          </div>

          {/* Key Pricing & Specs Banner Centered */}
          <div className="bg-[#241C20]/80 backdrop-blur-md border border-[#C15F70]/30 p-5 rounded-2xl shadow-xl flex flex-wrap items-center justify-center gap-6 max-w-2xl w-full border-t-2 border-t-[#C15F70]">
            <div className="text-center sm:text-left">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#B78D4A] block">
                Starting Investment
              </span>
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#C15F70] mt-0.5">
                INR 1.98 Cr. <span className="text-xs font-sans font-light text-[#E8E1D3]/70">onwards*</span>
              </div>
            </div>
            <div className="h-10 w-px bg-[#E8E1D3]/20 hidden sm:block" />
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs font-sans text-[#E8E1D3]/90">
                <Calendar className="w-3.5 h-3.5 text-[#9CAA8C]" />
                <span>Possession June 2026</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs font-sans text-[#E8E1D3]/90">
                <Home className="w-3.5 h-3.5 text-[#A9C4D4]" />
                <span>3, 3+ Utility &amp; 4 BHK Floor Residences</span>
              </div>
            </div>
          </div>

          {/* Quick Actions Bar Centered */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenEnquire("Schedule a Site Visit")}
              className="px-8 py-3.5 bg-[#C15F70] hover:bg-[#A34A5A] text-[#E8E1D3] font-sans text-xs font-medium uppercase tracking-widest rounded-lg transition-all shadow-md hover:shadow-lg flex items-center space-x-2 group"
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

          {/* RERA Badge & Family Lifestyle Preview Pill Centered */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 border-t border-[#E8E1D3]/15 w-full max-w-xl">
            <div className="flex items-center space-x-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-[#C15F70]/40 shadow-xs">
                <Image
                  src="/images/family-living.jpg"
                  alt="Multi-generational family living"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-sans font-light text-[#E8E1D3]/80 text-xs">
                Built for Multi-Generational Indian Families
              </span>
            </div>
            <span className="text-[#E8E1D3]/30 hidden sm:inline">·</span>
            <div className="bg-[#241C20]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#B78D4A]/50 text-[10px] font-sans font-medium uppercase tracking-widest text-[#E8E1D3]">
              RERA: RAJ/P/2025/3489
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PinkOaksLogo from "./PinkOaksLogo";
import PinkBlossomIcon from "./PinkBlossomIcon";
import { Sparkles, MapPin, Calendar, Home, ArrowRight, Share2, Phone } from "lucide-react";

interface HeroProps {
  onOpenEnquire: (title?: string) => void;
}

export default function Hero({ onOpenEnquire }: HeroProps) {
  const [currentScene, setCurrentScene] = useState<number>(0);

  const heroScenes = [
    { type: "video", src: "/videos/hero-architecture.mp4", poster: "/images/hero.jpg", alt: "Pink Oaks Exterior" },
    { type: "image", src: "/images/family-living.jpg", alt: "Family Living Room Sanctuary" },
    { type: "image", src: "/images/gallery-drawing.jpg", alt: "Sunlit Drawing Room" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev: number) => (prev + 1) % heroScenes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroScenes.length]);

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
    <section id="hero" className="relative pt-[92px] pb-[24px] lg:pt-[104px] lg:pb-[32px] bg-[#241C20] overflow-hidden min-h-screen lg:min-h-[100vh] lg:max-h-[920px] flex items-center">
      
      {/* Round 11: Crossfading Scene Carousel with Slow Continuous Ambient Zoom (100% -> 106%) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroScenes.map((scene, idx) => (
          <motion.div
            key={scene.src}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: currentScene === idx ? 0.45 : 0,
              scale: currentScene === idx ? 1.06 : 1,
            }}
            transition={{
              opacity: { duration: 1, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" },
            }}
            className="absolute inset-0 w-full h-full"
          >
            {scene.type === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={scene.poster}
                className="w-full h-full object-cover"
              >
                <source src={scene.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={scene.src}
                alt={scene.alt}
                fill
                className="object-cover"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Layer 2: Soft Blurred Cherry Blossom Texture */}
      <div className="absolute inset-0 z-1 opacity-10 mix-blend-soft-light pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/detail-blossom.jpg"
          alt="Cherry Blossom Texture"
          fill
          className="object-cover scale-110 blur-xs"
        />
      </div>

      {/* Layer 3: Secondary Jaali (Crafted Lattice) Pattern Overlay */}
      <div className="absolute inset-0 z-2 opacity-5 mix-blend-overlay pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/detail-jali.jpg"
          alt="Jaali Screen Texture"
          fill
          className="object-cover"
        />
      </div>

      {/* Blossom Watermark Motif Accent */}
      <div className="absolute top-8 right-8 opacity-10 pointer-events-none select-none z-3 max-w-full overflow-hidden">
        <PinkBlossomIcon size={320} className="text-[#C15F70]" />
      </div>

      {/* Layer 4: Dark Scrim Overlay for WCAG AA Text Contrast */}
      <div className="absolute inset-0 z-4 bg-gradient-to-r from-[#241C20]/95 via-[#241C20]/80 to-[#241C20]/45" />
      <div className="absolute inset-0 z-4 bg-gradient-to-t from-[#241C20] via-transparent to-[#241C20]/50" />

      {/* Layer 5: Foreground Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[64px] relative z-10 w-full">
        {/* Column Gap: 48px–64px between left text & right image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-[56px] items-center">
          
          {/* Left Editorial Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-[#E8E1D3]"
          >
            {/* Location & Tagline Pill Badges Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center bg-[#E8E1D3]/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C15F70]/40 text-[11px] font-sans font-medium text-[#E8E1D3]">
                <span>Bani Park, Jaipur</span>
              </div>
              <div className="inline-flex items-center bg-[#C15F70]/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C15F70]/50 text-[11px] font-sans font-medium text-[#C15F70]">
                <span>Low Density Enclave</span>
              </div>
            </div>

            {/* Tagline moment */}
            <div className="flex items-center space-x-3 border-b border-[#B78D4A]/40 pb-2.5 max-w-xs mt-3">
              <span className="font-script text-2xl sm:text-3xl text-[#C15F70]">Live</span>
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-[0.25em] uppercase text-[#E8E1D3]">
                ROOTED.
              </span>
              <PinkBlossomIcon className="w-3.5 h-3.5 text-[#C15F70] ml-1" />
            </div>

            {/* Heading Font-Size Clamp (2.2rem to 3.2rem) for 2 lines max */}
            <div className="mt-[24px]">
              <h1 className="font-serif text-[clamp(2.2rem,3.6vw,3.2rem)] font-semibold tracking-tight text-[#E8E1D3] leading-[1.12]">
                A Private Floor Above The City.
              </h1>
            </div>

            {/* Subheading */}
            <div className="mt-[16px]">
              <p className="font-sans text-sm sm:text-base text-[#E8E1D3]/85 font-light leading-relaxed max-w-xl">
                Where timeless Rajasthani architecture meets modern indulgence in the heart of Bani Park. Crafted for true sanctuary and lifelong family harmony.
              </p>
            </div>

            {/* Price Box */}
            <div className="mt-[20px] bg-[#241C20]/80 backdrop-blur-md border-l-4 border-[#C15F70] p-4 sm:p-5 rounded-r-xl border border-[#C15F70]/30 shadow-lg flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#B78D4A] block">
                  Starting Investment
                </span>
                <div className="font-serif text-xl sm:text-2xl font-semibold text-[#C15F70] mt-0.5">
                  INR 1.98 Cr. <span className="text-xs font-sans font-light text-[#E8E1D3]/70">onwards*</span>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="h-8 w-px bg-[#E8E1D3]/25 hidden sm:block mx-1" />

              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs font-sans text-[#E8E1D3]/90">
                  <span>RERA:</span>
                  <span className="font-semibold text-[#C15F70]">RAJ/P/2025/3489</span>
                </div>
                <div className="text-[10px] font-sans text-[#E8E1D3]/70 font-light">
                  Possession: June 2026
                </div>
              </div>
            </div>

            {/* Main Action Bar */}
            <div className="mt-[24px] flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenEnquire("Hero Sales Spec Sheet")}
                className="px-7 py-3.5 bg-[#C15F70] hover:bg-[#A34A5A] text-[#E8E1D3] font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-lg shadow-sm transition-all duration-300 flex items-center space-x-2"
              >
                <span>Request Brochure</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenEnquire("Hero Site Visit")}
                className="px-6 py-3.5 border border-[#C15F70]/40 text-[#E8E1D3] hover:bg-[#C15F70]/15 rounded-lg transition-colors font-sans text-xs sm:text-sm font-medium uppercase tracking-wider flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-[#C15F70]" />
                <span>Schedule Visit</span>
              </button>

              {/* Contact Icons Row: Unified to brand pink (#C15F70) in circular outline containers */}
              <div className="flex items-center space-x-2 ml-1">
                <a
                  href="https://wa.me/919772297772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#C15F70]/40 text-[#C15F70] hover:bg-[#C15F70]/15 rounded-full transition-colors"
                  aria-label="WhatsApp Us"
                >
                  <svg className="w-4 h-4 fill-[#C15F70]" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </a>

                <a
                  href="tel:+919772297772"
                  className="p-3 border border-[#C15F70]/40 text-[#C15F70] hover:bg-[#C15F70]/15 rounded-full transition-colors"
                  aria-label="Call Sales"
                >
                  <Phone className="w-4 h-4 text-[#C15F70]" />
                </a>

                <button
                  onClick={handleShare}
                  className="p-3 border border-[#C15F70]/40 text-[#C15F70] hover:bg-[#C15F70]/15 rounded-full transition-colors"
                  aria-label="Share Project"
                >
                  <Share2 className="w-4 h-4 text-[#C15F70]" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Property Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative my-[16px] lg:my-[24px]"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C15F70]/40 aspect-[4/3] min-h-[340px] lg:min-h-[400px] max-h-[440px] group">
              <Image
                src="/images/hero.jpg"
                alt="Pink Oaks Luxury Architecture"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Logo Holding Card Overlay (16px inset) */}
              <div className="absolute top-4 left-4 z-10 shadow-lg">
                <PinkOaksLogo variant="holding-card" size="sm" />
              </div>

              {/* RERA Badge Overlay (16px inset) */}
              <div className="absolute bottom-4 right-4 bg-[#241C20]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#B78D4A]/50 text-[10px] font-sans font-medium uppercase tracking-widest text-[#E8E1D3] shadow-md">
                RERA: RAJ/P/2025/3489
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

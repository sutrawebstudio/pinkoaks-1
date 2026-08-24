"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PinkOaksLogo from "./PinkOaksLogo";
import PinkBlossomIcon from "./PinkBlossomIcon";
import Button from "./ui/Button";
import { ArrowRight, Calendar, Phone, Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenEnquire: (title?: string) => void;
}

export default function Hero({ onOpenEnquire }: HeroProps) {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Pink Oaks Bani Park Jaipur",
          text: "Discover luxury single-floor residences at Pink Oaks, Bani Park, Jaipur.",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled or failed", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Project link copied to clipboard!");
    }
  };

  return (
    <section
      aria-label="Hero Section"
      className="relative min-h-[90vh] bg-[#241C20] flex items-center justify-center pt-[104px] pb-16 lg:pt-[132px] lg:pb-20 overflow-hidden"
    >
      {/* Background Jaipur Watermark Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.04]">
        <PinkBlossomIcon size={640} className="text-[#C15F70]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-[56px] items-center">
          
          {/* Left Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: isReducedMotion ? 0 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: isReducedMotion ? 0 : 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7 text-[#E8E1D3]"
          >
            {/* Badges Bar */}
            <motion.div
              initial={{ opacity: 0, x: isReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isReducedMotion ? 0 : 0.5, delay: isReducedMotion ? 0 : 0.1 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="inline-flex items-center bg-[#E8E1D3]/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C15F70]/40 text-[11px] font-sans font-medium text-[#E8E1D3]">
                <span>Bani Park, Jaipur</span>
              </div>
              <div className="inline-flex items-center bg-[#C15F70]/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C15F70]/50 text-[11px] font-sans font-medium text-[#C15F70]">
                <span>Low Density Enclave</span>
              </div>
            </motion.div>

            {/* Tagline moment */}
            <motion.div
              initial={{ opacity: 0, x: isReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isReducedMotion ? 0 : 0.5, delay: isReducedMotion ? 0 : 0.18 }}
              className="flex items-center space-x-3 border-b border-[#B78D4A]/40 pb-2.5 max-w-xs mt-3"
            >
              <span className="font-script text-2xl sm:text-3xl text-[#C15F70]">Live</span>
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-[0.25em] uppercase text-[#E8E1D3]">
                ROOTED.
              </span>
              <PinkBlossomIcon className="w-3.5 h-3.5 text-[#C15F70] ml-1" />
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: isReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isReducedMotion ? 0 : 0.5, delay: isReducedMotion ? 0 : 0.26 }}
              className="mt-[24px]"
            >
              <h1 className="font-serif text-[clamp(2.2rem,3.6vw,3.2rem)] font-semibold tracking-tight text-[#E8E1D3] leading-[1.12]">
                A Private Floor Above The City.
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, x: isReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isReducedMotion ? 0 : 0.5, delay: isReducedMotion ? 0 : 0.34 }}
              className="mt-[16px]"
            >
              <p className="font-sans text-sm sm:text-base text-[#E8E1D3]/85 font-light leading-relaxed max-w-xl">
                Where timeless Rajasthani architecture meets modern indulgence in the heart of Bani Park. Crafted for true sanctuary and lifelong family harmony.
              </p>
            </motion.div>

            {/* Price Box */}
            <motion.div
              initial={{ opacity: 0, x: isReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isReducedMotion ? 0 : 0.5, delay: isReducedMotion ? 0 : 0.42 }}
              className="mt-[20px] bg-[#241C20]/80 backdrop-blur-md border-l-4 border-[#C15F70] p-4 sm:p-5 rounded-r-xl border border-[#C15F70]/30 shadow-lg flex flex-wrap items-center justify-between gap-3"
            >
              <div>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#B78D4A] block">
                  Starting Investment
                </span>
                <div className="font-serif text-xl sm:text-2xl font-semibold text-[#C15F70] mt-0.5">
                  INR 1.98 Cr. <span className="text-xs font-sans font-light text-[#E8E1D3]/70">onwards*</span>
                </div>
              </div>

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
            </motion.div>

            {/* Main Action Bar */}
            <motion.div
              initial={{ opacity: 0, x: isReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isReducedMotion ? 0 : 0.5, delay: isReducedMotion ? 0 : 0.5 }}
              className="mt-[24px] flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button
                variant="primary"
                onClick={() => onOpenEnquire("Hero Sales Spec Sheet")}
                className="!text-xs sm:!text-sm"
              >
                <span>Request Brochure</span>
                <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
              </Button>

              <Button
                variant="secondary"
                onClick={() => onOpenEnquire("Hero Site Visit")}
                className="!text-xs sm:!text-sm"
              >
                <Calendar className="w-4 h-4 text-[#C15F70] mr-2 inline-block" aria-hidden="true" />
                <span>Schedule Visit</span>
              </Button>

              {/* Contact Icons Row */}
              <div className="flex items-center space-x-2 ml-1">
                <a
                  href="https://wa.me/919772297772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#C15F70]/40 text-[#C15F70] hover:bg-[#C15F70]/15 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] min-h-[44px] min-w-[44px] inline-flex items-center justify-center touch-manipulation cursor-pointer"
                  aria-label="WhatsApp Us"
                >
                  <svg className="w-4 h-4 fill-[#C15F70]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </a>

                <a
                  href="tel:+919772297772"
                  className="p-3 border border-[#C15F70]/40 text-[#C15F70] hover:bg-[#C15F70]/15 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] min-h-[44px] min-w-[44px] inline-flex items-center justify-center touch-manipulation cursor-pointer"
                  aria-label="Call Sales"
                >
                  <Phone className="w-4 h-4 text-[#C15F70]" aria-hidden="true" />
                </a>

                <button
                  onClick={handleShare}
                  className="p-3 border border-[#C15F70]/40 text-[#C15F70] hover:bg-[#C15F70]/15 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] min-h-[44px] min-w-[44px] inline-flex items-center justify-center touch-manipulation cursor-pointer"
                  aria-label="Share Project"
                >
                  <Share2 className="w-4 h-4 text-[#C15F70]" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Property Image Column */}
          <motion.div
            initial={{ opacity: 0, x: isReducedMotion ? 0 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: isReducedMotion ? 0 : 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 relative mt-4 lg:mt-[36px] mb-4 lg:mb-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C15F70]/40 aspect-[4/3] min-h-[340px] lg:min-h-[400px] max-h-[440px] group">
              <Image
                src="/images/hero.jpg"
                alt="Pink Oaks Luxury Architecture in Bani Park, Jaipur"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Logo Holding Card Overlay */}
              <div className="absolute top-4 left-4 z-10 shadow-lg">
                <PinkOaksLogo variant="holding-card" size="sm" />
              </div>

              {/* RERA Badge Overlay */}
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


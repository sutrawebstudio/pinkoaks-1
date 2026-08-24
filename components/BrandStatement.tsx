"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";
import { motion } from "framer-motion";

export default function BrandStatement() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <section id="overview" className="py-20 lg:py-32 bg-[#E8E1D3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="01" title="Core Brand Philosophy" icon="leaf" />

        {/* Editorial Heading & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          <ScrollReveal className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#241C20] leading-tight">
              Rooted in Jaipur Heritage. <br className="hidden sm:inline" />
              Crafted for Modern Tranquility.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-5 space-y-4">
            <p className="font-sans text-base text-[#241C20]/80 font-light leading-relaxed">
              Pink Oaks is Jaipur’s first ISO-certified real estate development company. We craft living spaces where traditional Rajasthani architectural wisdom seamlessly aligns with contemporary luxury.
            </p>
            <div className="pt-2 flex items-center space-x-4 text-xs font-sans font-medium uppercase tracking-widest text-[#B78D4A]">
              <span>Established 1990</span>
              <span>•</span>
              <span>ISO 9001:2015 Certified</span>
            </div>
          </ScrollReveal>

        </div>

        {/* Emotional & Craft Beat: Hand-Carved Jaipur Jali & Sunlit Living Photography */}
        <div className="relative rounded-2xl overflow-hidden border border-[#C15F70]/20 shadow-xs bg-[#F5EEE6]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            
            {/* ELEMENT C: Left Sunlit Living Room Photo (Scroll-Triggered Swipe IN from LEFT to RIGHT) */}
            <motion.div
              initial={{ opacity: 0, x: isReducedMotion ? 0 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: isReducedMotion ? 0 : 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-7 relative aspect-[16/10] min-h-[340px]"
            >
              <Image
                src="/images/family-living.jpg"
                alt="Pink Oaks Family Living Moment"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right: Jaipur Jali Craft & Text (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-[#F5EEE6] flex flex-col justify-center space-y-6 h-full">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#9CAA8C]" />
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#33422F] font-semibold">
                    Jaipur Craft Heritage
                  </span>
                </div>
                <span className="font-script text-3xl text-[#C15F70] block">Live Rooted</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241C20] leading-snug">
                  Handcrafted Stone &amp; Sunlit Courtyards
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#241C20]/80 font-light leading-relaxed">
                  Inspired by Rajasthani jali lattice work and natural stone masonry, creating breathable spaces designed for true sanctuary and family harmony.
                </p>
              </div>

              {/* Craft Highlights List */}
              <div className="pt-4 border-t border-[#C15F70]/20 space-y-3 font-sans text-xs text-[#241C20]/85">
                <div className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C15F70] shrink-0" />
                  <span className="font-medium">Carved Stone Jali Lattice &amp; Natural Airflow</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B78D4A] shrink-0" />
                  <span className="font-medium">Honed Jaipur Sandstone &amp; Thermal Balance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#33422F] shrink-0" />
                  <span className="font-medium">Expansive Sunlit Balconies for Multi-Gen Living</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

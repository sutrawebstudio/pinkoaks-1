"use client";

import Image from "next/image";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";
import PinkBlossomIcon from "./PinkBlossomIcon";

export default function BrandStatement() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#E8E1D3] relative overflow-hidden">
      
      {/* Background Placement Pattern: Small blossom motif top-left corner */}
      <div className="absolute top-6 left-6 opacity-10 pointer-events-none select-none z-0 hidden md:block">
        <PinkBlossomIcon size={260} className="text-[#C94F6D]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="01" title="Philosophy & Craft Heritage" icon="flower" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Main Statement Left (7 cols) */}
          <ScrollReveal className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#241C20] leading-tight">
              A Private Floor Above The City.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#241C20]/80 font-light leading-relaxed">
              Where timeless architecture meets modern indulgence in the heart of Jaipur. Every detail, from the grand façade to the finest finishes, is crafted to reflect elegance, exclusivity, and sophistication.
            </p>
            <p className="font-sans text-base text-[#241C20]/75 font-light leading-relaxed">
              20+ World-Class Amenities — from tranquil rooftop lounges to private leisure zones and holistic wellness spaces — designed to elevate your every day into an experience of pure luxury.
            </p>
          </ScrollReveal>

          {/* Vastu Harmony Box Right */}
          <ScrollReveal delay={0.15} className="lg:col-span-5 bg-[#F5EEE6] border border-[#C94F6D]/25 rounded-2xl p-8 space-y-4 shadow-xs">
            <div className="flex items-center space-x-3" id="vastu">
              <svg className="w-5 h-5 text-[#C94F6D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m9-9H3" />
              </svg>
              <h3 className="font-serif text-xl font-semibold text-[#241C20]">
                Vastu Compliant Architecture
              </h3>
            </div>
            <p className="font-sans text-sm text-[#241C20]/80 font-light leading-relaxed">
              This property has been thoughtfully crafted and refined to ensure complete Vastu compliance, incorporating advanced measures such as Manjusha Installation, Bar Chart Balancing, Structural Balancing, and Energy Flow Optimisation. Every detail has been aligned to promote harmony, positivity, and prosperity.
            </p>
            <div className="pt-2 flex items-center justify-between text-xs font-sans font-medium uppercase tracking-widest text-[#2E3D2A]">
              <span>Energy Flow Optimised</span>
              <span className="text-[#A3B18A]">Jaipur Heritage</span>
            </div>
          </ScrollReveal>

        </div>

        {/* Emotional & Craft Beat */}
        <ScrollReveal delay={0.25} className="relative rounded-2xl overflow-hidden border border-[#C94F6D]/20 shadow-xs bg-[#F5EEE6]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            
            {/* Left: Sunlit Living Room Photo (7 cols) */}
            <div className="lg:col-span-7 relative aspect-[16/10] min-h-[340px]">
              <Image
                src="/images/family-living.jpg"
                alt="Pink Oaks Family Living Moment"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Jaipur Jali Craft & Text (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-5 bg-[#F5EEE6] flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#A3B18A]" />
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#2E3D2A] font-semibold">
                    Jaipur Craft Heritage
                  </span>
                </div>
                <span className="font-script text-3xl text-[#C94F6D] block">Live Rooted</span>
                <h3 className="font-serif text-2xl font-semibold text-[#241C20] leading-snug">
                  Handcrafted Stone &amp; Sunlit Courtyards
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#241C20]/75 font-light leading-relaxed">
                  Inspired by Rajasthani jali lattice work and natural stone masonry, creating breathable spaces for multi-generational families.
                </p>
              </div>

              {/* Jali Detail Thumbnail */}
              <div className="pt-3 border-t border-[#C94F6D]/20 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#A3B18A]/40">
                  <Image
                    src="/images/detail-jali.jpg"
                    alt="Carved Stone Jali Lattice"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-serif text-xs font-semibold text-[#241C20] block">
                    Carved Stone Jali Lattice
                  </span>
                  <span className="font-sans text-[10px] text-[#A9C4D8] font-medium block">
                    Natural Micro-Climate Cooling
                  </span>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

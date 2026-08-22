"use client";

import Image from "next/image";
import { Compass } from "lucide-react";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";

export default function BrandStatement() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#E8E1D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="01" title="Philosophy & Craft Heritage" />

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
              20+ World-Class Amenities — from rooftop gardens and private home theaters to yoga studios and dedicated storage facilities — designed specifically for multi-generational family comfort in Bani Park.
            </p>
          </ScrollReveal>

          {/* Vastu Harmony Box Right (5 cols, Forest Green & Sage accent) */}
          <ScrollReveal delay={0.15} className="lg:col-span-5 bg-[#F5EEE6] border border-[#C15F70]/25 rounded-xl p-8 space-y-4 shadow-xs">
            <div className="flex items-center space-x-3" id="vastu">
              <Compass className="w-5 h-5 text-[#C15F70] stroke-[1.5]" />
              <h3 className="font-serif text-xl font-semibold text-[#241C20]">
                Vastu Compliant Architecture
              </h3>
            </div>
            <p className="font-sans text-sm text-[#241C20]/80 font-light leading-relaxed">
              This property has been thoughtfully crafted and refined to ensure complete Vastu compliance, incorporating advanced measures such as Manjusha Installation, Bar Chart Balancing, Structural Balancing, and Energy Flow Optimisation. Every detail has been aligned to promote harmony, positivity, and prosperity.
            </p>
            <div className="pt-2 flex items-center justify-between text-xs font-sans font-medium uppercase tracking-widest text-[#33422F]">
              <span>Energy Flow Optimised</span>
              <span className="text-[#9CAA8C]">Jaipur Heritage</span>
            </div>
          </ScrollReveal>

        </div>

        {/* Emotional & Craft Beat: Hand-Carved Jaipur Jali & Sunlit Living Photography */}
        <ScrollReveal delay={0.25} className="relative rounded-2xl overflow-hidden border border-[#C15F70]/20 shadow-xs bg-[#F5EEE6]">
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
        </ScrollReveal>

      </div>
    </section>
  );
}

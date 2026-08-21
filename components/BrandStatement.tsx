"use client";

import Image from "next/image";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";

export default function BrandStatement() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#FBF8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="01" title="Philosophy & Architecture" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Main Statement Left */}
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
          <ScrollReveal delay={0.15} className="lg:col-span-5 bg-[#F8ECEF] border border-[#E88CA4]/30 rounded-xl p-8 space-y-4">
            <div className="flex items-center space-x-3" id="vastu">
              <svg className="w-5 h-5 text-[#C74B66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m9-9H3" />
              </svg>
              <h3 className="font-serif text-xl font-semibold text-[#241C20]">
                Vastu Compliant Architecture
              </h3>
            </div>
            <p className="font-sans text-sm text-[#241C20]/80 font-light leading-relaxed">
              This property has been thoughtfully crafted and refined to ensure complete Vastu compliance, incorporating advanced measures such as Manjusha Installation, Bar Chart Balancing, Structural Balancing, and Energy Flow Optimisation. Every detail has been aligned to promote harmony, positivity, and prosperity.
            </p>
            <div className="pt-2 text-xs font-sans font-medium uppercase tracking-widest text-[#B78D4A]">
              Harmonized for Jaipur Living
            </div>
          </ScrollReveal>

        </div>

        {/* Emotional Anchor: Genuine Family-in-Home Lifestyle Photography Beat */}
        <ScrollReveal delay={0.25} className="relative rounded-2xl overflow-hidden border border-[#E88CA4]/25 shadow-xs bg-[#F8ECEF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-8 relative aspect-[16/9] min-h-[320px]">
              <Image
                src="/images/family-living.jpg"
                alt="Pink Oaks Family Living Moment"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-4 p-8 sm:p-10 space-y-4 bg-[#F8ECEF]">
              <span className="font-script text-3xl text-[#C74B66]">Live Rooted</span>
              <h3 className="font-serif text-2xl font-semibold text-[#241C20] leading-snug">
                Designed for Lifelong Family Harmony
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#241C20]/75 font-light leading-relaxed">
                Generous sunlit balconies, quiet reading nooks, and expansive living rooms where generations gather in warmth.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

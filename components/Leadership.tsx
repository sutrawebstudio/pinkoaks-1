"use client";

import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-[#F5EEE6] border-y border-[#C15F70]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number */}
        <SectionDivider number="02" title="Leadership & Heritage" icon="leaf" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (slide-left reveal) */}
          <ScrollReveal variant="slide-left" duration={0.8} className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20] leading-tight">
              Built on Three Decades of Uncompromising Trust.
            </h2>
            <p className="font-sans text-base text-[#241C20]/80 font-light leading-relaxed">
              Established in 1990, Pink Oaks Properties is the first real estate company in Jaipur to have earned ISO certification. Over thirty-five years, our leadership has maintained a single focus: creating homes that endure in quality, beauty, and emotional warmth.
            </p>
            <p className="font-sans text-sm text-[#241C20]/75 font-light leading-relaxed">
              We approach every development not as a speculative build, but as an enduring sanctuary for families who seek peace, harmony, and lasting value in Bani Park.
            </p>
          </ScrollReveal>

          {/* Right Column (slide-right reveal) */}
          <ScrollReveal variant="slide-right" duration={0.8} delay={0.2} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#E8E1D3] p-6 rounded-xl border border-[#C15F70]/25 space-y-2 shadow-xs">
              <span className="font-serif text-3xl font-semibold text-[#C15F70]">1990</span>
              <h3 className="font-sans text-sm font-medium text-[#241C20] uppercase tracking-wider">
                ISO Certified Pioneer
              </h3>
              <p className="font-sans text-xs text-[#241C20]/70 font-light">
                First real estate developer in Jaipur with verified international quality standards.
              </p>
            </div>

            <div className="bg-[#E8E1D3] p-6 rounded-xl border border-[#C15F70]/25 space-y-2 shadow-xs">
              <span className="font-serif text-3xl font-semibold text-[#C15F70]">35+ Yrs</span>
              <h3 className="font-sans text-sm font-medium text-[#241C20] uppercase tracking-wider">
                Bani Park Legacy
              </h3>
              <p className="font-sans text-xs text-[#241C20]/70 font-light">
                Over three decades of delivering landmark residential projects on schedule.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

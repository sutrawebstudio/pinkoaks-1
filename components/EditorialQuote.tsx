"use client";

import ScrollReveal from "./ui/ScrollReveal";

export default function EditorialQuote() {
  return (
    <section className="py-24 sm:py-32 bg-[#F8ECEF] border-y border-[#B78D4A]/25 relative overflow-hidden">
      {/* Background Watermark Leaf Motif */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none">
        <svg className="w-96 h-96 text-[#C74B66]" viewBox="0 0 24 28" fill="currentColor">
          <path d="M12 1C12 1 14.5 4.5 16.5 6C18.5 7.5 21 7 21.5 9.5C22 12 19.5 13.5 19.5 15.5C19.5 17.5 21 19.5 19.5 21.5C18 23.5 15.5 22.5 13.5 24.5C12.5 25.5 12 27 12 27C12 27 11.5 25.5 10.5 24.5C8.5 22.5 6 23.5 4.5 21.5C3 19.5 4.5 17.5 4.5 15.5C4.5 13.5 2 12 2.5 9.5C3 7 5.5 7.5 7.5 6C9.5 4.5 12 1 12 1Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        <ScrollReveal>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#B78D4A] block mb-4">
            The Pink Oaks Monograph
          </span>
          <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#241C20] leading-[1.2] tracking-tight">
            “What You See Is <span className="text-[#C74B66] font-normal italic">What You Live.</span>”
          </blockquote>
          <p className="font-sans text-sm sm:text-base text-[#241C20]/75 font-light mt-6 max-w-xl leading-relaxed">
            Architecture at Pink Oaks is not designed for brochures. Every balcony depth, sun path, and Manjusha installation is harmonized for real families residing in Bani Park.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

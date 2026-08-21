"use client";

import Image from "next/image";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";
import PinkBlossomIcon from "./PinkBlossomIcon";

export default function Neighbourhood() {
  const landmarks = [
    { category: "Spiritual", name: "Radha Dhamodar Ji Temple", distance: "100m" },
    { category: "Education", name: "Children Academy School", distance: "200m" },
    { category: "Parks & Greenery", name: "Madho Singh Park (Circle)", distance: "500m" },
    { category: "Healthcare", name: "Govt. Satellite Hospital", distance: "500m" },
    { category: "Fuel & Service", name: "Petrol Pump", distance: "500m" },
    { category: "Transit", name: "Central Bus Stand", distance: "500m" },
    { category: "Administrative", name: "Jaipur Collectorate", distance: "1.0km" },
    { category: "Cinema", name: "Space Cinema", distance: "1.0km" },
    { category: "Shopping", name: "Ganpati Plaza", distance: "1.2km" },
    { category: "Transit", name: "Jaipur Railway Station", distance: "2.0km" },
    { category: "Hospitality", name: "Rajputana Sheraton", distance: "2.0km" },
    { category: "Shopping", name: "Triton Mall", distance: "4.0km" },
  ];

  return (
    <section id="location" className="py-20 lg:py-32 bg-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider with Flower Motif Accent */}
        <SectionDivider number="09" title="Prime Location & Connectivity" icon="flower" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <ScrollReveal className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
              Bani Park, Jaipur
            </h2>
            <p className="font-sans text-base text-[#241C20]/75 font-light mt-2">
              Address: D-169, Bhrigu Marg, Bani Park, Jaipur — connected to heritage, culture, and modern infrastructure.
            </p>
          </ScrollReveal>

          {/* Landscaping / Park Family Lifestyle Preview Card */}
          <ScrollReveal delay={0.1} className="lg:col-span-5 bg-[#F5EEE6] p-4 rounded-xl border border-[#9CAA8C]/40 flex items-center space-x-4">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-[#9CAA8C]/50">
              <Image
                src="/images/family-park.jpg"
                alt="Family walking in Madho Singh Park"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-serif text-xs font-semibold text-[#241C20] block">
                Madho Singh Park &amp; Greenery
              </span>
              <span className="font-sans text-[11px] text-[#33422F] font-medium block mt-0.5">
                500m from your doorstep
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Map & Distance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Distance Matrix */}
          <ScrollReveal className="lg:col-span-6 bg-[#F5EEE6] border border-[#C15F70]/25 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#C15F70]/20 pb-3">
                <h3 className="font-serif text-xl font-semibold text-[#241C20]">
                  Proximity Matrix
                </h3>
                <PinkBlossomIcon className="w-4 h-4 text-[#C15F70]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1 mt-4">
                {landmarks.map((item) => (
                  <div
                    key={item.name}
                    className="bg-[#E8E1D3] p-3 rounded-lg border border-[#C15F70]/15 flex justify-between items-center text-xs"
                  >
                    <div className="flex items-start space-x-2">
                      <PinkBlossomIcon className="w-3 h-3 text-[#C15F70] mt-1 shrink-0" />
                      <div>
                        <span className="block font-sans text-[9px] uppercase tracking-wider text-[#B78D4A] font-medium">
                          {item.category}
                        </span>
                        <span className="font-sans text-xs text-[#241C20] font-medium block">
                          {item.name}
                        </span>
                      </div>
                    </div>
                    <span className="font-serif text-xs font-semibold text-[#C15F70] bg-[#F5EEE6] px-2 py-1 rounded shrink-0 ml-2 border border-[#C15F70]/20">
                      {item.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#C15F70]/20 flex items-center justify-between text-xs font-sans text-[#241C20]/70">
              <span>Bhrigu Marg, Bani Park</span>
              <span className="font-medium text-[#C15F70]">Jaipur, Rajasthan 302016</span>
            </div>
          </ScrollReveal>

          {/* Right Google Maps Embed */}
          <ScrollReveal delay={0.15} className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#C15F70]/30 bg-[#F5EEE6] relative min-h-[400px] h-[420px] lg:h-full flex flex-col">
            <iframe
              title="Pink Oaks Location Map"
              src="https://maps.google.com/maps?q=D-169+Bhrigu+Marg,+Bani+Park,+Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 min-h-[400px] rounded-2xl bg-[#E8E1D3]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay Location Badge */}
            <div className="absolute top-4 left-4 z-10 bg-[#E8E1D3]/95 backdrop-blur-xs px-4 py-2 rounded-lg border border-[#C15F70]/30 shadow-xs flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C15F70]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-sans text-xs font-medium text-[#241C20]">Pink Oaks · Bani Park</span>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

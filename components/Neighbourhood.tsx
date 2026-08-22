"use client";

import { useState } from "react";
import Image from "next/image";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";
import PinkBlossomIcon from "./PinkBlossomIcon";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export default function Neighbourhood() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = ["All", "Spiritual & Parks", "Transit & Travel", "Shopping & Health"];

  const landmarks = [
    { category: "Spiritual & Parks", name: "Radha Dhamodar Ji Temple", distance: "100m" },
    { category: "Shopping & Health", name: "Children Academy School", distance: "200m" },
    { category: "Spiritual & Parks", name: "Madho Singh Park (Circle)", distance: "500m" },
    { category: "Shopping & Health", name: "Govt. Satellite Hospital", distance: "500m" },
    { category: "Transit & Travel", name: "Central Bus Stand", distance: "500m" },
    { category: "Transit & Travel", name: "Petrol Pump", distance: "500m" },
    { category: "Shopping & Health", name: "Jaipur Collectorate", distance: "1.0km" },
    { category: "Shopping & Health", name: "Space Cinema", distance: "1.0km" },
    { category: "Shopping & Health", name: "Ganpati Plaza", distance: "1.2km" },
    { category: "Transit & Travel", name: "Jaipur Railway Station", distance: "2.0km" },
    { category: "Spiritual & Parks", name: "Rajputana Sheraton", distance: "2.0km" },
    { category: "Shopping & Health", name: "Triton Mall", distance: "4.0km" },
  ];

  const filteredLandmarks =
    selectedFilter === "All"
      ? landmarks
      : landmarks.filter((l) => l.category === selectedFilter);

  return (
    <section id="location" className="py-20 lg:py-32 bg-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="09" title="Prime Location & Connectivity" icon="flower" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <ScrollReveal className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#241C20]">
              Bani Park, Jaipur
            </h2>
            <p className="font-sans text-base text-[#241C20]/75 font-light mt-2 max-w-xl">
              Address: D-169, Bhrigu Marg, Bani Park, Jaipur — connected to heritage, culture, and modern infrastructure.
            </p>
          </ScrollReveal>

          {/* Landscaping / Park Family Lifestyle Preview Card */}
          <ScrollReveal delay={0.1} className="lg:col-span-5 bg-[#F5EEE6] p-4 rounded-xl border border-[#9CAA8C]/40 flex items-center space-x-4 shadow-xs">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-[#9CAA8C]/50">
              <Image
                src="/images/family-park.jpg"
                alt="Family walking in Madho Singh Park"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-serif text-sm font-semibold text-[#241C20] block">
                Madho Singh Park &amp; Greenery
              </span>
              <span className="font-sans text-xs text-[#33422F] font-medium block mt-0.5">
                500m from your doorstep
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Map & Distance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Distance Matrix */}
          <ScrollReveal className="lg:col-span-6 bg-[#F5EEE6] border border-[#C15F70]/25 rounded-xl p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-[#C15F70]/20 pb-4">
                <div className="flex items-center space-x-2">
                  <Navigation className="w-5 h-5 text-[#C15F70]" />
                  <h3 className="font-serif text-xl font-semibold text-[#241C20]">
                    Proximity Matrix
                  </h3>
                </div>
                <PinkBlossomIcon className="w-4 h-4 text-[#C15F70]" />
              </div>

              {/* Filter Pills */}
              <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-4">
                {categories.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-3 py-1 rounded-full text-[10px] font-sans font-medium uppercase tracking-wider transition-all whitespace-nowrap ${
                      selectedFilter === filter
                        ? "bg-[#C15F70] text-[#E8E1D3]"
                        : "bg-[#E8E1D3] text-[#241C20]/75 hover:bg-[#E8E1D3]/80 border border-[#C15F70]/20"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[340px] overflow-y-auto pr-1">
                {filteredLandmarks.map((item) => (
                  <div
                    key={item.name}
                    className="bg-[#E8E1D3] p-3 rounded-lg border border-[#C15F70]/15 flex justify-between items-center text-xs hover:border-[#C15F70]/30 transition-colors"
                  >
                    <div className="flex items-start space-x-2">
                      <PinkBlossomIcon className="w-3 h-3 text-[#C15F70] mt-1 shrink-0" />
                      <div>
                        <span className="block font-sans text-[9px] uppercase tracking-wider text-[#B78D4A] font-semibold">
                          {item.category}
                        </span>
                        <span className="font-sans text-xs text-[#241C20] font-medium block">
                          {item.name}
                        </span>
                      </div>
                    </div>
                    <span className="font-serif text-xs font-semibold text-[#C15F70] bg-[#F5EEE6] px-2.5 py-1 rounded-md shrink-0 ml-2 border border-[#C15F70]/20">
                      {item.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#C15F70]/20 flex items-center justify-between text-xs font-sans text-[#241C20]/70">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-[#C15F70]" />
                <span>Bhrigu Marg, Bani Park</span>
              </span>
              <span className="font-semibold text-[#C15F70]">Jaipur, Rajasthan 302016</span>
            </div>
          </ScrollReveal>

          {/* Right Google Maps Embed */}
          <ScrollReveal delay={0.15} className="lg:col-span-6 rounded-xl overflow-hidden border border-[#C15F70]/30 bg-[#F5EEE6] relative min-h-[400px] h-[440px] lg:h-full flex flex-col shadow-xs">
            <iframe
              title="Pink Oaks Location Map"
              src="https://maps.google.com/maps?q=D-169+Bhrigu+Marg,+Bani+Park,+Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 min-h-[400px] rounded-2xl bg-[#E8E1D3]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay Location Badge */}
            <div className="absolute top-4 left-4 z-10 bg-[#E8E1D3]/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#C15F70]/30 shadow-xs flex items-center justify-between w-[calc(100%-2rem)]">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#C15F70]" />
                <span className="font-sans text-xs font-semibold text-[#241C20]">Pink Oaks · Bani Park</span>
              </div>
              <a
                href="https://maps.google.com/?q=D-169+Bhrigu+Marg+Bani+Park+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-sans text-[#C15F70] hover:underline flex items-center space-x-1 font-medium"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

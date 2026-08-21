"use client";

import Image from "next/image";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";
import PinkBlossomIcon from "./PinkBlossomIcon";

interface UnitConfigurationsProps {
  onOpenEnquire: (title?: string) => void;
}

export default function UnitConfigurations({ onOpenEnquire }: UnitConfigurationsProps) {
  const units = [
    {
      code: "Unit A",
      type: "3 BHK Residence",
      description:
        "An exquisite design offering perfect harmony of space and privacy. Ideal for modern families preferring expansive, breathable layouts.",
      builtUp: "1675 sq.ft",
      saleArea: "2321 sq.ft",
      image: "/images/plan-typical.jpg",
      tags: ["3 Bedrooms", "3 Balconies", "Vastu Compliant"],
    },
    {
      code: "Unit B",
      type: "4 BHK Residence",
      description:
        "Boasting a thoughtfully crafted interior, Unit B ensures maximum natural light and ventilation, providing a serene master suite sanctuary.",
      builtUp: "1935 sq.ft",
      saleArea: "2680 sq.ft",
      image: "/images/gallery-bedroom.jpg",
      tags: ["4 Bedrooms", "Master Suite", "Dual Lounge"],
    },
    {
      code: "Unit C",
      type: "3 BHK Residence",
      description:
        "Designed for the ultimate luxury experience, Unit C features premium drawing room spaces blending elegance with everyday functionality.",
      builtUp: "1620 sq.ft",
      saleArea: "2240 sq.ft",
      image: "/images/gallery-drawing.jpg",
      tags: ["3 Bedrooms", "Private Utility", "Garden View"],
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F5EEE6] border-y border-[#C15F70]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="06" title="Unit Layouts & Sizes" icon="flower" />

        <ScrollReveal className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
            Unit Configurations
          </h2>
          <p className="font-sans text-base text-[#241C20]/75 font-light mt-2">
            Tailored 3 BHK, 3 BHK + Utility, and 4 BHK residential floorplan options.
          </p>
        </ScrollReveal>

        {/* Photo-Forward Unit Cards Grid with Corner Blossom Accents & Stagger Delay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {units.map((unit, idx) => (
            <ScrollReveal key={unit.code} delay={idx * 0.2}>
              <div className="relative bg-[#E8E1D3] rounded-2xl border border-[#C15F70]/25 overflow-hidden flex flex-col justify-between h-full shadow-xs hover:border-[#C15F70]/40 transition-colors">
                
                {/* Signature Corner Flower Accent (Round 4) */}
                <div className="absolute top-3 right-3 z-10 bg-[#E8E1D3]/90 backdrop-blur-xs p-1.5 rounded-full border border-[#C15F70]/30 shadow-xs">
                  <PinkBlossomIcon className="w-3.5 h-3.5 text-[#C15F70]" />
                </div>

                {/* Flat/Apartment Interior Photo Thumbnail (Never Parking/Mechanical) */}
                <div className="relative aspect-[4/3] bg-[#F5EEE6] border-b border-[#C15F70]/20 overflow-hidden">
                  <Image
                    src={unit.image}
                    alt={`${unit.code} ${unit.type}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#E8E1D3]/95 backdrop-blur-xs px-3 py-1 rounded border border-[#C15F70]/30 text-xs font-serif font-semibold text-[#C15F70]">
                    {unit.code}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#241C20]/85 text-[#E8E1D3] px-2.5 py-0.5 rounded text-[10px] font-sans font-medium uppercase tracking-wider">
                    {unit.type}
                  </div>
                </div>

                {/* Specs & Description */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="font-sans text-xs text-[#241C20]/80 font-light leading-relaxed">
                      {unit.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {unit.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#F5EEE6] border border-[#C15F70]/25 text-[#C15F70] text-[10px] font-sans font-medium rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specs Box */}
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#C15F70]/20">
                    <div className="bg-[#F5EEE6] p-2.5 rounded border border-[#C15F70]/20">
                      <span className="block font-sans text-[9px] uppercase tracking-wider text-[#B78D4A] font-medium">
                        Built-up
                      </span>
                      <span className="font-serif text-sm font-semibold text-[#241C20]">
                        {unit.builtUp}
                      </span>
                    </div>

                    <div className="bg-[#F5EEE6] p-2.5 rounded border border-[#C15F70]/20">
                      <span className="block font-sans text-[9px] uppercase tracking-wider text-[#B78D4A] font-medium">
                        Saleable Area
                      </span>
                      <span className="font-serif text-sm font-semibold text-[#241C20]">
                        {unit.saleArea}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenEnquire(`Unit Enquiry - ${unit.code} (${unit.type})`)}
                    className="w-full py-3 bg-[#C15F70] hover:bg-[#A34A5A] text-[#E8E1D3] font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors shadow-xs"
                  >
                    Enquire Now
                  </button>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

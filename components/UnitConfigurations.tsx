"use client";

import Image from "next/image";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";

interface UnitConfigurationsProps {
  onOpenEnquire: (title?: string) => void;
}

export default function UnitConfigurations({ onOpenEnquire }: UnitConfigurationsProps) {
  const units = [
    {
      code: "Unit A",
      type: "3 BHK Residence",
      description:
        "An exquisite design offering perfect harmony of space and privacy. Ideal for modern families preferring expansive layouts.",
      builtUp: "1675 sq.ft",
      saleArea: "2321 sq.ft",
      image: "/images/plan-typical.jpg",
      tags: ["3 Bedrooms", "3 Balconies", "Vastu Compliant"],
    },
    {
      code: "Unit B",
      type: "4 BHK Residence",
      description:
        "Boasting a thoughtfully crafted interior, Unit B ensures maximum natural light and ventilation, providing a tranquil sanctuary.",
      builtUp: "1935 sq.ft",
      saleArea: "2680 sq.ft",
      image: "/images/plan-stilt.jpg",
      tags: ["4 Bedrooms", "Master Suite", "Dual Lounge"],
    },
    {
      code: "Unit C",
      type: "3 BHK Residence",
      description:
        "Designed for the ultimate luxury experience, Unit C features premium spaces blending elegance with everyday functionality.",
      builtUp: "1620 sq.ft",
      saleArea: "2240 sq.ft",
      image: "/images/plan-basement.jpg",
      tags: ["3 Bedrooms", "Private Utility", "Garden View"],
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F8ECEF] border-y border-[#E88CA4]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="06" title="Unit Layouts & Sizes" />

        <ScrollReveal className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
            Unit Configurations
          </h2>
          <p className="font-sans text-base text-[#241C20]/75 font-light mt-2">
            Tailored 3 BHK, 3 BHK + Utility, and 4 BHK residential floorplan options.
          </p>
        </ScrollReveal>

        {/* Photo-Forward Unit Cards Grid (Differentiated from Pricing) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {units.map((unit, idx) => (
            <ScrollReveal key={unit.code} delay={idx * 0.1}>
              <div className="bg-[#FBF8F4] rounded-xl border border-[#E88CA4]/25 overflow-hidden flex flex-col justify-between h-full shadow-xs hover:border-[#C74B66]/40 transition-colors">
                
                {/* Photo Thumbnail */}
                <div className="relative aspect-[4/3] bg-[#F8ECEF] border-b border-[#E88CA4]/20">
                  <Image
                    src={unit.image}
                    alt={unit.code}
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute top-3 left-3 bg-[#FBF8F4]/90 backdrop-blur-xs px-3 py-1 rounded border border-[#C74B66]/30 text-xs font-serif font-semibold text-[#C74B66]">
                    {unit.code}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#241C20]/80 text-[#FBF8F4] px-2.5 py-0.5 rounded text-[10px] font-sans font-medium uppercase tracking-wider">
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
                          className="px-2.5 py-1 bg-[#F8ECEF] border border-[#E88CA4]/30 text-[#C74B66] text-[10px] font-sans font-medium rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specs Box */}
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#E88CA4]/20">
                    <div className="bg-[#F8ECEF] p-2.5 rounded border border-[#E88CA4]/20">
                      <span className="block font-sans text-[9px] uppercase tracking-wider text-[#B78D4A] font-medium">
                        Built-up
                      </span>
                      <span className="font-serif text-sm font-semibold text-[#241C20]">
                        {unit.builtUp}
                      </span>
                    </div>

                    <div className="bg-[#F8ECEF] p-2.5 rounded border border-[#E88CA4]/20">
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
                    className="w-full py-3 bg-[#C74B66] hover:bg-[#8E2F47] text-[#FBF8F4] font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors shadow-xs"
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

"use client";

import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";
import PinkBlossomIcon from "./PinkBlossomIcon";
import { Check, ArrowRight } from "lucide-react";

interface PricingProps {
  onOpenEnquire: (title?: string) => void;
}

export default function Pricing({ onOpenEnquire }: PricingProps) {
  const priceTiers = [
    {
      type: "3 BHK Residence",
      price: "₹1.98 Cr",
      period: "onwards*",
      size: "1675 sq.ft Built-up / 2321 sq.ft Sale",
      highlights: ["Spacious Living & Dining", "Full Vastu Compliance", "Expansive Balconies", "Rooftop Access"],
      featured: false,
    },
    {
      type: "3 BHK + Utility",
      price: "₹2.58 Cr",
      period: "onwards*",
      size: "1620 – 1675 sq.ft Built-up / 2240 sq.ft Sale",
      highlights: ["Dedicated Utility & Maid Room", "Dual Sun Balconies", "Optimal Sun Orientation", "2 Covered Parking Bays"],
      featured: true,
    },
    {
      type: "4 BHK Luxury Residence",
      price: "₹4.01 Cr",
      period: "onwards*",
      size: "1935 sq.ft Built-up / 2680 sq.ft Sale",
      highlights: ["Master Suite & Grand Lounge", "Exclusive Floor Privacy", "Premium Marble Finishes", "3 Covered Parking Bays"],
      featured: false,
    },
  ];

  return (
    <section id="price" className="py-20 lg:py-32 bg-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="07" title="Investment & Pricing" icon="flower" />

        <ScrollReveal className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#241C20]">
            Transparent Pricing Structure
          </h2>
          <p className="font-sans text-base text-[#241C20]/75 font-light mt-2 max-w-xl">
            Possession targeted for June 2026. Schedule a site visit to view complete payment schedules.
          </p>
        </ScrollReveal>

        {/* Comparison Table / Cards Grid with Featured Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {priceTiers.map((tier, idx) => (
            <ScrollReveal key={tier.type} delay={idx * 0.15} className="h-full">
              <div
                className={`relative rounded-2xl p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between h-full ${
                  tier.featured
                    ? "bg-[#F5EEE6] border-[#C15F70] shadow-md ring-1 ring-[#C15F70]/50"
                    : "bg-[#E8E1D3] border-[#C15F70]/25 shadow-xs hover:border-[#C15F70]/40"
                }`}
              >
                {/* Signature Corner Flower Accent */}
                <div className="absolute top-4 right-4 z-10 bg-[#E8E1D3]/90 backdrop-blur-xs p-1.5 rounded-full border border-[#C15F70]/30 shadow-xs">
                  <PinkBlossomIcon className="w-3.5 h-3.5 text-[#C15F70]" />
                </div>

                {tier.featured && (
                  <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#C15F70] text-[#E8E1D3] text-[9px] font-sans font-semibold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-xs">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6 pt-2">
                  <div>
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B78D4A]">
                      {tier.type}
                    </span>
                    <div className="flex items-baseline space-x-2 mt-2">
                      <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#C15F70]">
                        {tier.price}
                      </span>
                      <span className="font-sans text-xs font-light text-[#241C20]/70">
                        {tier.period}
                      </span>
                    </div>
                    <span className="font-sans text-xs text-[#241C20]/60 font-medium block mt-1">
                      {tier.size}
                    </span>
                  </div>

                  <div className="h-px bg-[#C15F70]/20" />

                  <ul className="space-y-3">
                    {tier.highlights.map((item) => (
                      <li key={item} className="flex items-start space-x-3 font-sans text-xs text-[#241C20]/80 font-light">
                        <div className="p-1 rounded-full bg-[#C15F70]/15 text-[#C15F70] shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenEnquire(`Pricing Enquiry - ${tier.type}`)}
                  className={`w-full py-3.5 font-sans text-xs font-medium uppercase tracking-widest rounded-lg transition-colors mt-8 flex items-center justify-center space-x-2 ${
                    tier.featured
                      ? "bg-[#C15F70] hover:bg-[#A34A5A] text-[#E8E1D3] shadow-xs"
                      : "border border-[#C15F70] text-[#C15F70] hover:bg-[#F5EEE6]"
                  }`}
                >
                  <span>Request Cost Sheet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="font-sans text-xs text-[#241C20]/60 font-light italic">
            GST, AMC, IFMS &amp; other charges additional*
          </p>
        </div>

      </div>
    </section>
  );
}

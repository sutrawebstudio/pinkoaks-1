"use client";

import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";
import PinkBlossomIcon from "./PinkBlossomIcon";

interface PricingProps {
  onOpenEnquire: (title?: string) => void;
}

export default function Pricing({ onOpenEnquire }: PricingProps) {
  const priceTiers = [
    {
      type: "3 BHK Residence",
      price: "₹1.98 Cr",
      period: "onwards",
      size: "1675 sq.ft Built-up / 2321 sq.ft Sale",
      highlights: ["Spacious Living & Dining", "Full Vastu Compliance", "Expansive Balconies", "Rooftop Access"],
      featured: false,
    },
    {
      type: "3 BHK + Utility",
      price: "₹2.58 Cr",
      period: "onwards",
      size: "1620 – 1675 sq.ft Built-up / 2240 sq.ft Sale",
      highlights: ["Dedicated Utility & Maid Room", "Dual Sun Balconies", "Optimal Sun Orientation", "2 Covered Parking Bays"],
      featured: true,
    },
    {
      type: "4 BHK Luxury Residence",
      price: "₹4.01 Cr",
      period: "onwards",
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
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
            Transparent Pricing Structure
          </h2>
          <p className="font-sans text-base text-[#241C20]/75 font-light mt-2">
            Possession targeted for June 2026. Schedule a site visit to view complete payment schedules.
          </p>
        </ScrollReveal>

        {/* Comparison Table / Strip Layout with Stagger Delay & Corner Flower Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {priceTiers.map((tier, idx) => (
            <ScrollReveal key={tier.type} delay={idx * 0.15} className="h-full">
              <div
                className={`relative rounded-2xl p-8 sm:p-10 border border-[#C15F70]/30 shadow-xs flex flex-col justify-between h-full ${
                  tier.featured ? "bg-[#F5EEE6]" : "bg-[#E8E1D3]"
                }`}
              >
                {/* Signature Corner Flower Accent (Round 4) */}
                <div className="absolute top-4 right-4 z-10 bg-[#E8E1D3]/90 backdrop-blur-xs p-1.5 rounded-full border border-[#C15F70]/30 shadow-xs">
                  <PinkBlossomIcon className="w-3.5 h-3.5 text-[#C15F70]" />
                </div>

                {tier.featured && (
                  <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#C15F70] text-[#E8E1D3] text-[9px] font-sans font-medium uppercase tracking-widest px-3 py-1 rounded-md shadow-xs">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6 pt-2">
                  <div>
                    <span className="font-sans text-xs font-medium uppercase tracking-widest text-[#B78D4A]">
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
                      <li key={item} className="flex items-center space-x-3 font-sans text-xs text-[#241C20]/80 font-light">
                        <PinkBlossomIcon className="w-3.5 h-3.5 text-[#C15F70] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenEnquire(`Pricing Enquiry - ${tier.type}`)}
                  className={`w-full py-3.5 font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors mt-8 ${
                    tier.featured
                      ? "bg-[#C15F70] hover:bg-[#A34A5A] text-[#E8E1D3] shadow-xs"
                      : "border border-[#C15F70] text-[#C15F70] hover:bg-[#F5EEE6]"
                  }`}
                >
                  Request Cost Sheet
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

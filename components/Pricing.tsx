"use client";

import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";

interface PricingProps {
  onOpenEnquire: (title?: string) => void;
}

export default function Pricing({ onOpenEnquire }: PricingProps) {
  const priceTiers = [
    {
      type: "3 BHK Residence",
      price: "₹1.98 Cr",
      period: "onwards",
      size: "1550 – 1615 sq.ft",
      highlights: ["Spacious Living & Dining", "Full Vastu Compliance", "Expansive Balconies", "Rooftop Access"],
      featured: false,
    },
    {
      type: "3 BHK + Utility",
      price: "₹2.58 Cr",
      period: "onwards",
      size: "1615 – 1880 sq.ft",
      highlights: ["Dedicated Utility & Maid Room", "Dual Sun Balconies", "Optimal Sun Orientation", "2 Covered Parking Bays"],
      featured: true,
    },
    {
      type: "4 BHK Luxury Residence",
      price: "₹4.01 Cr",
      period: "onwards",
      size: "1880 – 2635 sq.ft",
      highlights: ["Master Suite & Grand Lounge", "Exclusive Floor Privacy", "Premium Marble Finishes", "3 Covered Parking Bays"],
      featured: false,
    },
  ];

  return (
    <section id="price" className="py-20 lg:py-32 bg-[#FBF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="07" title="Investment & Pricing" />

        <ScrollReveal className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
            Transparent Pricing Structure
          </h2>
          <p className="font-sans text-base text-[#241C20]/75 font-light mt-2">
            Possession targeted for June 2026. Schedule a site visit to view complete payment schedules.
          </p>
        </ScrollReveal>

        {/* Comparison Table / Strip Layout (Differentiated from Photo Unit Cards) */}
        <ScrollReveal>
          <div className="bg-[#F8ECEF] border border-[#E88CA4]/30 rounded-2xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E88CA4]/30">
              {priceTiers.map((tier) => (
                <div
                  key={tier.type}
                  className={`p-8 sm:p-10 flex flex-col justify-between space-y-8 ${
                    tier.featured ? "bg-[#FBF8F4] relative" : "bg-[#F8ECEF]"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute top-0 right-0 bg-[#C74B66] text-[#FBF8F4] text-[9px] font-sans font-medium uppercase tracking-widest px-3 py-1 rounded-bl">
                      Most Popular
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <span className="font-sans text-xs font-medium uppercase tracking-widest text-[#B78D4A]">
                        {tier.type}
                      </span>
                      <div className="flex items-baseline space-x-2 mt-2">
                        <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#C74B66]">
                          {tier.price}
                        </span>
                        <span className="font-sans text-xs font-light text-[#241C20]/70">
                          {tier.period}
                        </span>
                      </div>
                      <span className="font-sans text-xs text-[#241C20]/60 font-medium block mt-1">
                        Sale Area: {tier.size}
                      </span>
                    </div>

                    <div className="h-px bg-[#E88CA4]/25" />

                    <ul className="space-y-3">
                      {tier.highlights.map((item) => (
                        <li key={item} className="flex items-center space-x-3 font-sans text-xs text-[#241C20]/80 font-light">
                          <svg className="w-4 h-4 text-[#C74B66] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onOpenEnquire(`Pricing Enquiry - ${tier.type}`)}
                    className={`w-full py-3.5 font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors ${
                      tier.featured
                        ? "bg-[#C74B66] hover:bg-[#8E2F47] text-[#FBF8F4] shadow-xs"
                        : "border border-[#C74B66] text-[#C74B66] hover:bg-[#F8ECEF]"
                    }`}
                  >
                    Request Cost Sheet
                  </button>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

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

"use client";

import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";

export default function Neighbourhood() {
  const landmarks = [
    { category: "Spiritual", name: "Radha Dhamodar Ji Temple", distance: "100m" },
    { category: "Education", name: "Children Academy School", distance: "200m" },
    { category: "Parks & Recreation", name: "Madho Singh Park (Circle)", distance: "500m" },
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
    <section id="location" className="py-20 lg:py-32 bg-[#FBF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="09" title="Prime Location & Connectivity" />

        <ScrollReveal className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
            Bani Park, Jaipur
          </h2>
          <p className="font-sans text-base text-[#241C20]/75 font-light mt-2">
            Address: D-169, Bhrigu Marg, Bani Park, Jaipur — connected to heritage, culture, and modern infrastructure.
          </p>
        </ScrollReveal>

        {/* Map & Distance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Distance Matrix */}
          <ScrollReveal className="lg:col-span-6 bg-[#F8ECEF] border border-[#E88CA4]/25 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#241C20] border-b border-[#E88CA4]/20 pb-3">
                Proximity Matrix
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1 mt-4">
                {landmarks.map((item) => (
                  <div
                    key={item.name}
                    className="bg-[#FBF8F4] p-3 rounded-lg border border-[#E88CA4]/20 flex justify-between items-center text-xs"
                  >
                    <div>
                      <span className="block font-sans text-[9px] uppercase tracking-wider text-[#B78D4A] font-medium">
                        {item.category}
                      </span>
                      <span className="font-sans text-xs text-[#241C20] font-medium block">
                        {item.name}
                      </span>
                    </div>
                    <span className="font-serif text-xs font-semibold text-[#C74B66] bg-[#F8ECEF] px-2 py-1 rounded shrink-0 ml-2">
                      {item.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E88CA4]/20 flex items-center justify-between text-xs font-sans text-[#241C20]/70">
              <span>Bhrigu Marg, Bani Park</span>
              <span className="font-medium text-[#C74B66]">Jaipur, Rajasthan 302016</span>
            </div>
          </ScrollReveal>

          {/* Right Google Maps Embed with Light Ivory/Rose Wrapper */}
          <ScrollReveal delay={0.15} className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#E88CA4]/30 bg-[#F8ECEF] relative min-h-[400px] h-[420px] lg:h-full flex flex-col">
            <iframe
              title="Pink Oaks Location Map"
              src="https://maps.google.com/maps?q=D-169+Bhrigu+Marg,+Bani+Park,+Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 min-h-[400px] rounded-2xl bg-[#FBF8F4]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay Location Badge */}
            <div className="absolute top-4 left-4 z-10 bg-[#FBF8F4]/95 backdrop-blur-xs px-4 py-2 rounded-lg border border-[#E88CA4]/30 shadow-xs flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C74B66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

"use client";

import { motion } from "framer-motion";

interface DownloadsProps {
  onOpenEnquire: (title?: string) => void;
}

export default function Downloads({ onOpenEnquire }: DownloadsProps) {
  return (
    <section id="download" className="py-20 bg-[#F8ECEF] border-y border-[#E88CA4]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FBF8F4] border border-[#E88CA4]/30 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center md:text-left">
            <span className="font-sans text-xs font-medium uppercase tracking-widest text-[#B78D4A]">
              Documentation &amp; Floor Plans
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241C20]">
              Download Pink Oaks Project E-Brochure
            </h2>
            <p className="font-sans text-sm text-[#241C20]/75 font-light max-w-xl">
              Gain access to detailed unit dimensions, architectural specifications, material finishes, and complete Vastu compliance guidelines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="/pink-oaks-brochure.pdf"
              download
              onClick={(e) => {
                // If PDF doesn't exist yet, open lead modal
                onOpenEnquire("Brochure Download");
              }}
              className="px-6 py-3.5 bg-[#C74B66] hover:bg-[#8E2F47] text-[#FBF8F4] font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors text-center"
            >
              Download Brochure (PDF)
            </a>

            <button
              onClick={() => onOpenEnquire("Schedule Site Visit - Downloads Section")}
              className="px-6 py-3.5 border border-[#C74B66] text-[#C74B66] hover:bg-[#F8ECEF] font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors"
            >
              Request Site Visit
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

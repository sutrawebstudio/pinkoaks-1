"use client";

import Button from "./ui/Button";
import ScrollReveal from "./ui/ScrollReveal";

interface DownloadsProps {
  onOpenEnquire: (title?: string) => void;
}

export default function Downloads({ onOpenEnquire }: DownloadsProps) {
  return (
    <section id="download" className="py-20 bg-[#F5EEE6] border-y border-[#C15F70]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#E8E1D3] border border-[#C15F70]/30 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            
            <div className="space-y-3 text-center md:text-left">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B78D4A]">
                Documentation &amp; Floor Plans
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241C20]">
                Download Pink Oaks Project E-Brochure
              </h2>
              <p className="font-sans text-sm text-[#241C20]/80 font-light max-w-xl">
                Gain access to detailed unit dimensions, architectural specifications, material finishes, and complete Vastu compliance guidelines.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button
                variant="primary"
                onClick={() => onOpenEnquire("Brochure Download")}
              >
                Download Brochure (PDF)
              </Button>

              <Button
                variant="outline"
                onClick={() => onOpenEnquire("Schedule Site Visit - Downloads Section")}
              >
                Request Site Visit
              </Button>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


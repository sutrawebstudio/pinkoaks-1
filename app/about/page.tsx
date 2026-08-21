"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/ui/SectionDivider";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";
import EnquireForm from "@/components/EnquireForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  const awardsList = [
    {
      title: "Joint Winner - Outstanding Companies, Real Estate Category",
      organization: "Asia Money Outstanding Company Poll - 2023",
    },
    {
      title: "Winner - DEI Champion - LGBTQIA+, Non-Tech",
      organization: "Aon NASSCOM DEI Champions Award 2023",
    },
    {
      title: "Winner - CSR in Real Estate Category",
      organization: "Golden Peacock Award 2022",
    },
  ];

  return (
    <main className="min-h-screen bg-[#E8E1D3] text-[#241C20] pt-[72px]">
      {/* Primary Top Site Nav ONLY */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-[55vh] min-h-[320px] flex items-center justify-center border-b border-[#C15F70]/20 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Pink Oaks Web Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#241C20]/45" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#E8E1D3] drop-shadow-md">
            About Us
          </h1>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="font-sans text-xs text-[#241C20]/60 font-light uppercase tracking-wider">
          Home &gt; Know Us &gt; About Us
        </p>
      </div>

      {/* About Pinkoaks Section (Verbatim Live Site Copy) */}
      <section id="about" className="py-16 sm:py-24 bg-[#E8E1D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionDivider number="01" title="About Pinkoaks" icon="leaf" className="justify-center" />
          
          <ScrollReveal variant="fade-up" duration={0.8} className="space-y-6 mt-8 font-sans text-sm sm:text-base text-[#241C20]/85 font-light leading-relaxed">
            <p className="font-medium text-[#241C20]">
              At Pinkoaks, we are driven by a singular purpose, Crafting Joy.
            </p>
            <p>
              Over 100,000 families have found a home with us, making GPL India&apos;s largest residential developer by both value and volume of homes sold. As part of the Pinkoaks Industries Group, we combine a 129-year legacy of trust and excellence with a forward-looking vision to shape the future of urban India.
            </p>
            <p>
              Our approach is anchored in four core principles: thoughtful design, sustainability, thriving communities, and uncompromising quality. This commitment has earned us global recognition, including being ranked the No. 1 real estate company worldwide on both the Dow Jones Sustainability Index and the Global Real Estate Sustainability Benchmark as of December 2025.
            </p>
            <p>
              At the heart of our journey is our team a diverse, driven collective united by purpose and ambition. Together, we are not just building homes, but shaping communities and skylines that will endure for generations.
            </p>
            <p className="italic text-[#C15F70] font-normal pt-2">
              Pinkoaks has received over 500 awards and recognitions, including Developer of the Year at the GRI India Awards, the Porter Prize, and recognition as India&apos;s Most Trusted Real Estate Brand.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Purpose Section (Verbatim Live Site Copy) */}
      <section id="purpose" className="py-16 sm:py-24 bg-[#F5EEE6] border-y border-[#C15F70]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionDivider number="02" title="Our Purpose" icon="flower" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8">
            <ScrollReveal variant="slide-left" duration={0.8} className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C15F70]/30 shadow-xs">
              <Image
                src="/images/family-living.jpg"
                alt="Family at Pinkoaks"
                fill
                className="object-cover"
              />
            </ScrollReveal>

            <ScrollReveal variant="slide-right" duration={0.8} delay={0.2} className="lg:col-span-6 space-y-6 font-sans text-sm sm:text-base text-[#241C20]/85 font-light leading-relaxed">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241C20]">
                Crafting spaces that spark joy, one community, one family, one home at a time.
              </h3>
              <p>
                The joy we bring to neighbourhoods, to families and our customers is what drives our purpose forward. It has always been at the forefront of everything we do, and every business decision we make. We constantly strive to work in harmony with all our stakeholders to achieve this shared goal of &apos;Creating Customer Joy&apos;.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recognized By The Best Section (Verbatim Live Site Copy) */}
      <section id="awards" className="py-16 sm:py-24 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B78D4A] block mb-3">
            Recognized By The Best
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-[#241C20] max-w-3xl mx-auto mb-12">
            “Pinkoaks has received over 400 awards and recognitions in the recent years.”
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awardsList.map((award, idx) => (
              <ScrollReveal key={award.title} delay={idx * 0.15}>
                <div className="bg-[#F5EEE6] p-8 rounded-2xl border border-[#C15F70]/25 h-full flex flex-col justify-between space-y-4 shadow-xs text-left">
                  <div className="text-3xl">🏆</div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-base font-semibold text-[#241C20]">
                      {award.title}
                    </h4>
                    <p className="font-sans text-xs text-[#241C20]/60 font-light">
                      {award.organization}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquire Form */}
      <section className="py-16 sm:py-24 bg-[#F5EEE6] border-t border-[#C15F70]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquireForm title="Get in Touch with Pinkoaks" />
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenEnquire={handleOpenEnquire} />

      {/* Lead Capture Modal */}
      <EnquireModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </main>
  );
}

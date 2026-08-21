"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/ui/SectionDivider";
import EditorialQuote from "@/components/EditorialQuote";
import EnquireForm from "@/components/EnquireForm";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PinkBlossomIcon from "@/components/PinkBlossomIcon";
import { Trophy, Award, Heart, ShieldCheck, Sparkles, Building2 } from "lucide-react";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  const corePrinciples = [
    { title: "Thoughtful Design", desc: "Spacious layouts crafted for natural light, ventilation, and family comfort.", icon: Sparkles },
    { title: "Sustainability", desc: "Ranked No. 1 worldwide on the Dow Jones Sustainability Index (Dec 2025).", icon: ShieldCheck },
    { title: "Thriving Communities", desc: "Over 100,000 families united by shared values and enduring spaces.", icon: Building2 },
    { title: "Uncompromising Quality", desc: "129-year group legacy of trust, precision, and craftsmanship.", icon: Heart },
  ];

  const awards = [
    {
      title: "Joint Winner - Outstanding Companies, Real Estate Category",
      organization: "Asia Money Outstanding Company Poll - 2023",
      icon: Trophy,
    },
    {
      title: "Winner - DEI Champion - LGBTQIA+, Non-Tech",
      organization: "Aon NASSCOM DEI Champions Award 2023",
      icon: Award,
    },
    {
      title: "Winner - CSR in Real Estate Category",
      organization: "Golden Peacock Award 2022",
      icon: Trophy,
    },
  ];

  return (
    <main className="min-h-screen bg-[#E8E1D3] text-[#241C20] pt-[72px]">
      {/* Primary Top Site Nav ONLY */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Hero Banner Header */}
      <section className="py-20 lg:py-28 bg-[#F5EEE6] border-b border-[#C15F70]/20 relative overflow-hidden">
        <div className="absolute top-8 right-12 opacity-[0.06] pointer-events-none select-none">
          <PinkBlossomIcon size={320} className="text-[#C15F70]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <div className="text-[11px] font-sans font-medium uppercase tracking-widest text-[#B78D4A] mb-3">
              Home &nbsp;&gt;&nbsp; Know Us &nbsp;&gt;&nbsp; About Us
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#241C20] leading-tight">
              About Pinkoaks
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#C15F70] italic font-normal mt-4">
              “At Pinkoaks, we are driven by a singular purpose — Crafting Joy.”
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main About Text Section (Verbatim Content) */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="01" title="About Pinkoaks" icon="leaf" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Paragraph Content */}
            <ScrollReveal variant="slide-left" duration={0.8} className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20] leading-tight">
                India&apos;s Largest &amp; Most Trusted Residential Developer.
              </h2>
              
              <div className="space-y-4 font-sans text-base text-[#241C20]/80 font-light leading-relaxed">
                <p>
                  Over 100,000 families have found a home with us, making GPL India&apos;s largest residential developer by both value and volume of homes sold. As part of the Pinkoaks Industries Group, we combine a 129-year legacy of trust and excellence with a forward-looking vision to shape the future of urban India.
                </p>
                <p>
                  Our approach is anchored in four core principles: thoughtful design, sustainability, thriving communities, and uncompromising quality. This commitment has earned us global recognition, including being ranked the No. 1 real estate company worldwide on both the Dow Jones Sustainability Index and the Global Real Estate Sustainability Benchmark as of December 2025.
                </p>
                <p>
                  At the heart of our journey is our team — a diverse, driven collective united by purpose and ambition. Together, we are not just building homes, but shaping communities and skylines that will endure for generations.
                </p>
                <p className="font-medium text-[#241C20]">
                  Pinkoaks has received over 500 awards and recognitions, including Developer of the Year at the GRI India Awards, the Porter Prize, and recognition as India&apos;s Most Trusted Real Estate Brand.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature Photo Card */}
            <ScrollReveal variant="slide-right" duration={0.8} delay={0.2} className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#C15F70]/30 aspect-[4/5] shadow-xs">
                <Image
                  src="/images/family-brand-statement.jpg"
                  alt="Family joy at Pinkoaks"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#E8E1D3]/95 backdrop-blur-xs p-5 rounded-xl border border-[#C15F70]/25">
                  <span className="font-serif text-base font-semibold text-[#241C20] block">
                    Over 100,000+ Happy Families
                  </span>
                  <span className="font-sans text-xs text-[#241C20]/75 font-light block">
                    129-Year Group Legacy of Excellence
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20 lg:py-28 bg-[#F5EEE6] border-y border-[#C15F70]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="02" title="Our Purpose" icon="flower" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Photo Left */}
            <ScrollReveal variant="slide-left" duration={0.8} className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#C15F70]/30 aspect-square shadow-xs">
                <Image
                  src="/images/family-living.jpg"
                  alt="Family Living at Pinkoaks"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Purpose Text Right */}
            <ScrollReveal variant="slide-right" duration={0.8} delay={0.2} className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20] leading-tight">
                “Crafting spaces that spark joy, one community, one family, one home at a time.”
              </h2>
              <p className="font-sans text-base text-[#241C20]/80 font-light leading-relaxed">
                The joy we bring to neighbourhoods, to families and our customers is what drives our purpose forward. It has always been at the forefront of everything we do, and every business decision we make. We constantly strive to work in harmony with all our stakeholders to achieve this shared goal of &lsquo;Creating Customer Joy&rsquo;.
              </p>
            </ScrollReveal>

          </div>

          {/* Core Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {corePrinciples.map((principle, idx) => {
              const IconComponent = principle.icon;
              return (
                <ScrollReveal key={principle.title} delay={idx * 0.15}>
                  <div className="bg-[#E8E1D3] p-8 rounded-2xl border border-[#C15F70]/25 h-full flex flex-col justify-between space-y-4 shadow-xs">
                    <div className="p-3 bg-[#F5EEE6] border border-[#C15F70]/25 rounded-xl w-fit text-[#C15F70]">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-semibold text-[#241C20]">
                        {principle.title}
                      </h3>
                      <p className="font-sans text-xs text-[#241C20]/75 font-light leading-relaxed">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Recognized By The Best (Awards Section) */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="03" title="Recognized By The Best" icon="leaf" />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20] leading-tight">
              “Pinkoaks has received over 400 awards and recognitions in recent years.”
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, idx) => {
              const IconComp = award.icon;
              return (
                <ScrollReveal key={award.title} delay={idx * 0.15}>
                  <div className="bg-[#F5EEE6] p-8 rounded-2xl border border-[#C15F70]/25 h-full flex flex-col justify-between space-y-6 shadow-xs relative">
                    <div className="p-3 bg-[#E8E1D3] border border-[#C15F70]/25 rounded-xl w-fit text-[#B78D4A]">
                      <IconComp className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-serif text-lg font-semibold text-[#241C20]">
                        {award.title}
                      </h4>
                      <p className="font-sans text-xs text-[#241C20]/70 font-light">
                        {award.organization}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Monograph Quote */}
      <EditorialQuote />

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
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

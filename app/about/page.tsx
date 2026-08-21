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
import { Award, Heart, ShieldCheck, Trophy, Sparkles } from "lucide-react";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  const corePrinciples = [
    {
      title: "Thoughtful Design",
      description: "Crafting single-floor residential layouts with natural light, cross-ventilation, and private balcony space for every family.",
      icon: Sparkles,
    },
    {
      title: "Sustainability Leader",
      description: "Ranked #1 real estate company globally on the Dow Jones Sustainability Index & Global Real Estate Sustainability Benchmark.",
      icon: ShieldCheck,
    },
    {
      title: "Thriving Communities",
      description: "Creating vibrant, safe, and holistic urban neighborhoods that foster multi-generational family well-being.",
      icon: Heart,
    },
    {
      title: "Uncompromising Quality",
      description: "Backed by a 129-year legacy of trust and ISO-certified engineering standards across 100,000+ happy homes.",
      icon: Award,
    },
  ];

  const awardsList = [
    {
      title: "Joint Winner – Outstanding Companies",
      subtitle: "Real Estate Category",
      organization: "Asia Money Outstanding Company Poll 2023",
    },
    {
      title: "Winner – DEI Champion",
      subtitle: "LGBTQIA+, Non-Tech",
      organization: "Aon NASSCOM DEI Champions Award 2023",
    },
    {
      title: "Winner – CSR in Real Estate",
      subtitle: "Excellence & Impact",
      organization: "Golden Peacock Award 2022",
    },
    {
      title: "Developer of the Year",
      subtitle: "National Real Estate",
      organization: "GRI India Awards & Porter Prize",
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
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#B78D4A] block mb-3">
              Home &gt; Know Us &gt; About Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#241C20] leading-tight max-w-4xl">
              Driven by a Singular Purpose — Crafting Joy.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#241C20]/80 font-light mt-6 max-w-3xl leading-relaxed">
              Over 100,000 families have found a home with us. Combining a 129-year legacy of trust and excellence with a forward-looking vision to shape the future of urban India.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* About Pinkoaks Narrative */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="01" title="About Pinkoaks" icon="leaf" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <ScrollReveal variant="slide-left" duration={0.8} className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20] leading-tight">
                India&apos;s Most Trusted Real Estate Developer
              </h2>
              <p className="font-sans text-base text-[#241C20]/85 font-light leading-relaxed">
                At Pinkoaks, we are driven by a singular purpose: <strong className="font-medium text-[#C15F70]">Crafting Joy</strong>. Over 100,000 families have found a home with us, making GPL India&apos;s largest residential developer by both value and volume of homes sold.
              </p>
              <p className="font-sans text-sm text-[#241C20]/80 font-light leading-relaxed">
                Our approach is anchored in four core principles: thoughtful design, sustainability, thriving communities, and uncompromising quality. This commitment has earned us global recognition, including being ranked the No. 1 real estate company worldwide on both the Dow Jones Sustainability Index and the Global Real Estate Sustainability Benchmark as of December 2025.
              </p>
              <p className="font-sans text-sm text-[#241C20]/80 font-light leading-relaxed">
                Established in 1990, Pink Oaks Properties is the first real estate company to have ISO certification. At the heart of our journey is our team — a diverse, driven collective united by purpose and ambition. Together, we are not just building homes, but shaping communities and skylines that will endure for generations.
              </p>
            </ScrollReveal>

            {/* Right Photo Feature: Jaipur Jali Craft */}
            <ScrollReveal variant="slide-right" duration={0.8} delay={0.2} className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#C15F70]/30 aspect-[4/3] shadow-xs">
                <Image
                  src="/images/detail-jali.jpg"
                  alt="Carved Stone Jali Architecture in Jaipur"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#E8E1D3]/95 backdrop-blur-xs p-4 rounded-xl border border-[#C15F70]/25">
                  <span className="font-serif text-sm font-semibold text-[#241C20] block">
                    Hand-Carved Jaipur Jali Architecture
                  </span>
                  <span className="font-sans text-xs text-[#241C20]/75 font-light block">
                    Over 500 Awards &amp; Global Sustainability Recognition
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Our Purpose & Core Principles */}
      <section className="py-20 lg:py-28 bg-[#F5EEE6] border-y border-[#C15F70]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="02" title="Our Purpose & Pillars" icon="flower" />

          <div className="max-w-3xl mb-12">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B78D4A]">
              Our Guiding Purpose
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20] mt-2">
              “Crafting spaces that spark joy — one community, one family, one home at a time.”
            </h2>
            <p className="font-sans text-sm text-[#241C20]/75 font-light mt-3">
              The joy we bring to neighbourhoods, to families and our customers is what drives our purpose forward. It has always been at the forefront of everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePrinciples.map((principle, idx) => {
              const IconComp = principle.icon;
              return (
                <ScrollReveal key={principle.title} delay={idx * 0.15}>
                  <div className="bg-[#E8E1D3] p-8 rounded-2xl border border-[#C15F70]/25 h-full flex flex-col justify-between space-y-4 shadow-xs">
                    <div className="p-3 bg-[#F5EEE6] border border-[#C15F70]/25 rounded-xl w-fit text-[#C15F70]">
                      <IconComp className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-semibold text-[#241C20]">
                        {principle.title}
                      </h3>
                      <p className="font-sans text-xs text-[#241C20]/75 font-light leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="03" title="Recognitions & Awards" icon="leaf" />

          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
              Over 500 Awards &amp; Recognitions Worldwide
            </h2>
            <p className="font-sans text-sm text-[#241C20]/75 font-light mt-2">
              Recognized as Developer of the Year, the Porter Prize, and India&apos;s Most Trusted Real Estate Brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awardsList.map((award, idx) => (
              <ScrollReveal key={award.title} delay={idx * 0.15}>
                <div className="bg-[#F5EEE6] p-8 rounded-2xl border border-[#C15F70]/25 h-full flex flex-col justify-between space-y-4 shadow-xs">
                  <div className="p-2.5 bg-[#E8E1D3] border border-[#C15F70]/25 rounded-xl w-fit text-[#C15F70]">
                    <Trophy className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-base font-semibold text-[#241C20]">
                      {award.title}
                    </h3>
                    <p className="font-sans text-xs font-medium text-[#C15F70]">
                      {award.subtitle}
                    </p>
                    <p className="font-sans text-[11px] text-[#241C20]/70 font-light pt-1">
                      {award.organization}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Monograph Pull-Quote Band */}
      <EditorialQuote />

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquireForm title="Schedule a Personal Visit &amp; Experience Crafting Joy" />
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

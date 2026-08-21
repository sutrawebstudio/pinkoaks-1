"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/ui/SectionDivider";
import Leadership from "@/components/Leadership";
import EnquireForm from "@/components/EnquireForm";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PinkBlossomIcon from "@/components/PinkBlossomIcon";
import { Award, ShieldCheck, Clock, Building } from "lucide-react";

export default function LeadershipPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  const timelineMilestones = [
    {
      year: "1990",
      title: "ISO 9001 Certification",
      description: "Became Jaipur's first real estate development firm to earn verified international ISO quality standards.",
      icon: Award,
    },
    {
      year: "2005",
      title: "Bani Park Heritage Focus",
      description: "Pioneered low-density luxury floor plan layouts specifically tailored for Bani Park's elite families.",
      icon: Building,
    },
    {
      year: "2018",
      title: "Eco & Vastu Integration",
      description: "Incorporated advanced Vastu energy flow optimization and eco-friendly rain water harvesting systems.",
      icon: ShieldCheck,
    },
    {
      year: "2026",
      title: "Pink Oaks Flagship",
      description: "Delivering an 11-storey low-density landmark luxury residence with possession targeted for June 2026.",
      icon: Clock,
    },
  ];

  return (
    <main className="min-h-screen bg-[#E8E1D3] text-[#241C20] pt-[72px]">
      {/* Primary Top Site Nav ONLY */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Page Header */}
      <section className="py-20 lg:py-28 bg-[#F5EEE6] border-b border-[#C15F70]/20 relative overflow-hidden">
        <div className="absolute top-8 right-12 opacity-[0.06] pointer-events-none select-none">
          <PinkBlossomIcon size={320} className="text-[#C15F70]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C15F70]" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#B78D4A]">
                Leadership &amp; Heritage
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#241C20] leading-tight max-w-4xl">
              Three Decades of Vision, Integrity, and Quality.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#241C20]/80 font-light mt-6 max-w-2xl leading-relaxed">
              Our leadership team brings thirty-five years of unblemished execution to Bani Park, creating homes that endure in beauty, structural integrity, and emotional value.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Leadership Component */}
      <Leadership />

      {/* Timeline Milestones Grid */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="03" title="Leadership Milestones" icon="flower" />

          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
              A History Defined by Firsts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineMilestones.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal key={item.year} delay={idx * 0.15}>
                  <div className="bg-[#F5EEE6] p-8 rounded-2xl border border-[#C15F70]/25 h-full flex flex-col justify-between space-y-4 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl font-semibold text-[#C15F70]">
                        {item.year}
                      </span>
                      <div className="p-2.5 bg-[#E8E1D3] border border-[#C15F70]/25 rounded-xl text-[#C15F70]">
                        <IconComp className="w-5 h-5 stroke-[1.5]" />
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-[#241C20]">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-[#241C20]/75 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Feature Photo Section */}
      <section className="py-16 bg-[#F5EEE6] border-y border-[#C15F70]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#C15F70]/30 shadow-xs">
              <Image
                src="/images/family-living.jpg"
                alt="Multi-generational family living at Pink Oaks"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-5 space-y-4 p-4">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B78D4A]">
                The Leadership Pledge
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241C20]">
                “We build every floor as if our own family were to live in it.”
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#241C20]/80 font-light leading-relaxed">
                From structural concrete grading to acoustic insulation between floors, every specification is personally reviewed by our senior engineering leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Leadership Contact Form Section */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquireForm title="Connect Directly with Pink Oaks Leadership" />
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

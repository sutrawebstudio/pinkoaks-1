"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/ui/SectionDivider";
import EnquireForm from "@/components/EnquireForm";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PinkBlossomIcon from "@/components/PinkBlossomIcon";
import { UserCheck, ShieldCheck, Award } from "lucide-react";

export default function LeadershipPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  const leaders = [
    {
      name: "Dinesh Sanghavi",
      title: "Chairperson Designate",
      organization: "Pinkoaks Industries Group",
      bio: "Guiding Pinkoaks Industries Group with visionary leadership, upholding a 129-year legacy of trust, excellence, and ethical urban transformation across India.",
      image: "/images/family-brand-statement.jpg",
      icon: Award,
    },
    {
      name: "Sparsh Agarwal",
      title: "Managing Director & Chief Executive Officer",
      organization: "Pink Oaks Properties",
      bio: "Spearheading execution, strategic growth, and customer joy. Driving Pinkoaks to become India's largest residential developer by value and volume of homes sold.",
      image: "/images/family-living.jpg",
      icon: UserCheck,
    },
    {
      name: "Sutapa Banerjee",
      title: "Independent Director",
      organization: "Pink Oaks Board of Directors",
      bio: "Advancing environmental stewardship, corporate governance, and DEI initiatives across all residential developments and stakeholder engagements.",
      image: "/images/family-park.jpg",
      icon: ShieldCheck,
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
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#B78D4A] block mb-3">
              Home &gt; Know Us &gt; Leadership
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#241C20] leading-tight max-w-4xl">
              Guided by Integrity, Vision, and Excellence.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#241C20]/80 font-light mt-6 max-w-2xl leading-relaxed">
              Meet the visionary leadership team steering Pink Oaks Properties — building homes that endure for generations while shaping India&apos;s urban landscape.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership Directory Section */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="01" title="Executive Leadership" icon="flower" />

          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
              Board of Directors &amp; Executive Leadership
            </h2>
            <p className="font-sans text-sm text-[#241C20]/75 font-light mt-2">
              Combining decades of industry expertise, financial prudence, and architectural innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => {
              const LeaderIcon = leader.icon;
              return (
                <ScrollReveal key={leader.name} delay={idx * 0.15}>
                  <div className="bg-[#F5EEE6] rounded-2xl border border-[#C15F70]/25 overflow-hidden flex flex-col justify-between h-full shadow-xs hover:border-[#C15F70] transition-colors">
                    
                    {/* Leader Photo */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#C15F70]/20">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-[#E8E1D3]/90 backdrop-blur-xs p-2 rounded-full border border-[#C15F70]/30 shadow-xs text-[#C15F70]">
                        <LeaderIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Leader Information */}
                    <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#B78D4A]">
                          {leader.organization}
                        </span>
                        <h3 className="font-serif text-2xl font-semibold text-[#241C20]">
                          {leader.name}
                        </h3>
                        <p className="font-sans text-xs font-medium text-[#C15F70]">
                          {leader.title}
                        </p>
                      </div>

                      <p className="font-sans text-xs text-[#241C20]/80 font-light leading-relaxed pt-2 border-t border-[#C15F70]/15">
                        {leader.bio}
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Leadership Legacy Section */}
      <section className="py-20 lg:py-28 bg-[#F5EEE6] border-y border-[#C15F70]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="02" title="Our Heritage of Trust" icon="leaf" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal variant="slide-left" duration={0.8} className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20] leading-tight">
                Established in 1990 — First ISO-Certified Developer
              </h2>
              <p className="font-sans text-base text-[#241C20]/85 font-light leading-relaxed">
                Pink Oaks Properties is the first real estate company in Jaipur to have earned ISO certification. Over thirty-five years, our leadership has maintained a single focus: creating homes that endure in quality, beauty, and emotional warmth.
              </p>
              <p className="font-sans text-sm text-[#241C20]/80 font-light leading-relaxed">
                We approach every development not as a speculative build, but as an enduring sanctuary for families who seek peace, harmony, and lasting value in Bani Park.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" duration={0.8} delay={0.2} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#E8E1D3] p-6 rounded-xl border border-[#C15F70]/25 space-y-2 shadow-xs">
                <span className="font-serif text-3xl font-semibold text-[#C15F70]">1990</span>
                <h3 className="font-sans text-sm font-medium text-[#241C20] uppercase tracking-wider">
                  ISO Certified Pioneer
                </h3>
                <p className="font-sans text-xs text-[#241C20]/70 font-light">
                  First real estate developer in Jaipur with verified international quality standards.
                </p>
              </div>

              <div className="bg-[#E8E1D3] p-6 rounded-xl border border-[#C15F70]/25 space-y-2 shadow-xs">
                <span className="font-serif text-3xl font-semibold text-[#C15F70]">35+ Yrs</span>
                <h3 className="font-sans text-sm font-medium text-[#241C20] uppercase tracking-wider">
                  Bani Park Legacy
                </h3>
                <p className="font-sans text-xs text-[#241C20]/70 font-light">
                  Over three decades of delivering landmark residential projects on schedule.
                </p>
              </div>
            </ScrollReveal>

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

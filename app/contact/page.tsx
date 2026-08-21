"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/ui/SectionDivider";
import Neighbourhood from "@/components/Neighbourhood";
import EnquireForm from "@/components/EnquireForm";
import Footer from "@/components/Footer";
import EnquireModal from "@/components/EnquireModal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PinkBlossomIcon from "@/components/PinkBlossomIcon";
import { MapPin, Phone, MessageSquare, Clock, Mail, Car, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  const contactChannels = [
    {
      title: "Direct Sales Line",
      value: "+91 9772297772",
      description: "Call our Bani Park sales office directly for immediate assistance.",
      href: "tel:+919772297772",
      icon: Phone,
    },
    {
      title: "WhatsApp Direct",
      value: "+91 9772297772",
      description: "Instant response for brochure requests, cost sheets, and floor plans.",
      href: "https://wa.me/919772297772",
      icon: MessageSquare,
    },
    {
      title: "Site Office Address",
      value: "D-169, Bhrigu Marg",
      description: "Bani Park, Jaipur, Rajasthan 302016. Open 7 days a week.",
      href: "https://maps.google.com/?q=D-169+Bhrigu+Marg+Bani+Park+Jaipur",
      icon: MapPin,
    },
    {
      title: "Sales Operating Hours",
      value: "9:00 AM – 7:00 PM IST",
      description: "Available daily including weekends for private site visits.",
      href: "#contact-form",
      icon: Clock,
    },
  ];

  const siteVisitBenefits = [
    {
      title: "Private Escorted Tour",
      description: "Explore the sample floor layouts, stilt lobby, and view the actual Bani Park neighborhood vistas.",
      icon: Car,
    },
    {
      title: "Architecture & Vastu Briefing",
      description: "Review Manjusha installation blueprints and energy flow orientation with our architectural team.",
      icon: ShieldCheck,
    },
    {
      title: "Cost Sheet & EMI Consultation",
      description: "Get transparent breakdown of payment plans, GST, AMC, IFMS, and customized home loan options.",
      icon: Mail,
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
                Contact &amp; Site Visit
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#241C20] leading-tight max-w-4xl">
              Visit Pink Oaks at Bani Park, Jaipur.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#241C20]/80 font-light mt-6 max-w-2xl leading-relaxed">
              Located at D-169, Bhrigu Marg, Bani Park. Schedule your private site walkthrough or connect with our sales advisory team today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Direct Contact Channels Grid */}
      <section className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="01" title="Direct Communication Channels" icon="leaf" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactChannels.map((channel, idx) => {
              const IconComp = channel.icon;
              return (
                <ScrollReveal key={channel.title} delay={idx * 0.15}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="bg-[#F5EEE6] p-8 rounded-2xl border border-[#C15F70]/25 h-full flex flex-col justify-between space-y-4 hover:border-[#C15F70] transition-colors shadow-xs group block"
                  >
                    <div className="p-3 bg-[#E8E1D3] border border-[#C15F70]/25 rounded-xl w-fit text-[#C15F70] group-hover:bg-[#C15F70] group-hover:text-[#E8E1D3] transition-colors">
                      <IconComp className="w-5 h-5 stroke-[1.5]" />
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#B78D4A]">
                        {channel.title}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-[#241C20] group-hover:text-[#C15F70] transition-colors">
                        {channel.value}
                      </h3>
                      <p className="font-sans text-xs text-[#241C20]/75 font-light leading-relaxed">
                        {channel.description}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Location Map & Neighborhood Details */}
      <Neighbourhood />

      {/* Site Visit Assistance Benefits */}
      <section className="py-20 lg:py-28 bg-[#F5EEE6] border-y border-[#C15F70]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="02" title="Site Visit Experience" icon="flower" />

          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
              What to Expect During Your Private Visit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteVisitBenefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <ScrollReveal key={benefit.title} delay={idx * 0.15}>
                  <div className="bg-[#E8E1D3] p-8 rounded-2xl border border-[#C15F70]/25 h-full flex flex-col justify-between space-y-4 shadow-xs">
                    <div className="p-3 bg-[#F5EEE6] border border-[#C15F70]/25 rounded-xl w-fit text-[#C15F70]">
                      <BenefitIcon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-semibold text-[#241C20]">
                        {benefit.title}
                      </h3>
                      <p className="font-sans text-xs text-[#241C20]/75 font-light leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Direct Contact Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-[#E8E1D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquireForm title="Book Your Private Site Visit &amp; Schedule" />
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

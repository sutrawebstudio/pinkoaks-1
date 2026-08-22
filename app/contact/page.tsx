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
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#E8E1D3] text-[#241C20] pt-[72px]">
      {/* Primary Top Site Nav ONLY */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Page Hero Header */}
      <section className="py-16 lg:py-24 bg-[#F5EEE6] border-b border-[#C15F70]/20 relative overflow-hidden">
        <div className="absolute top-8 right-12 opacity-[0.06] pointer-events-none select-none">
          <PinkBlossomIcon size={320} className="text-[#C15F70]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <div className="text-[11px] font-sans font-medium uppercase tracking-widest text-[#B78D4A] mb-3">
              Home &nbsp;&gt;&nbsp; Contact Us
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#241C20]">
              Get in Touch
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#241C20]/80 font-light mt-4 max-w-2xl mx-auto leading-relaxed">
              Reach out to our dedicated advisory team for project details, site walkthroughs, and customized cost sheets.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Contact Grid Section */}
      <section className="pt-16 pb-8 lg:pt-20 lg:pb-12 bg-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionDivider number="01" title="Contact & Office Locations" icon="leaf" />

          {/* 12-col Grid: Left 4 Contact Cards (Balanced 2x2 Grid) | Right Enquire Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-8">
            
            {/* Contact Details Left (5 cols, 2-col nested grid for cards) */}
            <ScrollReveal variant="slide-left" duration={0.8} className="lg:col-span-5 flex flex-col justify-between space-y-4">
              
              {/* Corporate Office */}
              <div className="bg-[#F5EEE6] p-6 sm:p-7 rounded-xl border border-[#C15F70]/25 shadow-xs space-y-2">
                <div className="flex items-center space-x-3 text-[#C15F70]">
                  <Building className="w-5 h-5 stroke-[1.5]" />
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#241C20]">Corporate Office</h4>
                </div>
                <p className="font-sans text-xs text-[#241C20]/80 font-light leading-relaxed">
                  Pink Oaks Properties Limited<br />
                  Pink Oaks One, 5th Floor,<br />
                  Pirojshanagar, Eastern Express Highway,<br />
                  Vikhroli (East), Mumbai - 400 079
                </p>
              </div>

              {/* Site & Sales Office */}
              <div className="bg-[#F5EEE6] p-6 sm:p-7 rounded-xl border border-[#C15F70]/25 shadow-xs space-y-2">
                <div className="flex items-center space-x-3 text-[#C15F70]">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#241C20]">Site &amp; Sales Office</h4>
                </div>
                <p className="font-sans text-xs text-[#241C20]/80 font-light leading-relaxed">
                  Pink Oaks, D-169, Bhrigu Marg,<br />
                  Bani Park, Jaipur, Rajasthan 302016
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-[#F5EEE6] p-6 sm:p-7 rounded-xl border border-[#C15F70]/25 shadow-xs space-y-3">
                <div className="flex items-center space-x-3 text-[#C15F70]">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#241C20]">Contact Details</h4>
                </div>
                <div className="space-y-2 font-sans text-xs text-[#241C20]/85">
                  <div className="flex items-center justify-between">
                    <span className="font-light">Phone:</span>
                    <a href="tel:+919772297772" className="font-medium text-[#C15F70] hover:underline">
                      +91 97722 97772
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-light">Email:</span>
                    <a href="mailto:info@pinkoaks.com" className="font-medium text-[#C15F70] hover:underline">
                      info@pinkoaks.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-[#F5EEE6] p-6 sm:p-7 rounded-xl border border-[#C15F70]/25 shadow-xs space-y-2">
                <div className="flex items-center space-x-3 text-[#C15F70]">
                  <Clock className="w-5 h-5 stroke-[1.5]" />
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#241C20]">Working Hours</h4>
                </div>
                <p className="font-sans text-xs text-[#241C20]/80 font-light leading-relaxed">
                  Monday - Friday: 9:30 AM - 6:30 PM<br />
                  Saturday - Sunday: Site Visit Appointments Available
                </p>
              </div>

            </ScrollReveal>

            {/* Direct Form Right Column */}
            <ScrollReveal variant="slide-right" duration={0.8} delay={0.2} className="lg:col-span-7 h-full">
              <div className="bg-[#F5EEE6] p-8 sm:p-10 rounded-xl border border-[#C15F70]/30 shadow-xs h-full flex flex-col justify-between">
                <EnquireForm title="Send us a message" />
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* Interactive Google Map Section (Seamless Transition) */}
      <Neighbourhood />

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

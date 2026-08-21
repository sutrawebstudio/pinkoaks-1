"use client";

import { useState, useId } from "react";
import { motion } from "framer-motion";

interface EnquireFormProps {
  title?: string;
  onSuccess?: () => void;
}

export default function EnquireForm({
  title = "Get in Touch",
  onSuccess,
}: EnquireFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bhk, setBhk] = useState("3 BHK");
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nameInputId = useId();
  const emailInputId = useId();
  const phoneInputId = useId();
  const bhkSelectId = useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert("Please accept the authorization consent to proceed.");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API lead capture
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  return (
    <div id="contact" className="bg-[#FBF8F4] border border-[#E88CA4]/30 rounded-2xl p-6 sm:p-10 space-y-6">
      
      <div className="border-b border-[#E88CA4]/20 pb-4">
        <span className="font-sans text-xs font-medium uppercase tracking-widest text-[#B78D4A]">
          Direct Connection
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241C20] mt-1">
          {title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#241C20]/75 font-light mt-1">
          Speak with our representative directly at <a href="tel:+919772297772" className="font-medium text-[#C74B66] underline">+91 9772297772</a> or submit your details below.
        </p>
      </div>

      {submitted ? (
        <div className="bg-[#F8ECEF] border border-[#C74B66]/30 p-6 rounded-xl text-center space-y-2">
          <svg className="w-10 h-10 text-[#C74B66] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h4 className="font-serif text-xl font-semibold text-[#241C20]">Thank You</h4>
          <p className="font-sans text-xs text-[#241C20]/80 font-light">
            Your enquiry has been received. Our sales team from Pink Oaks, Bani Park will reach out to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={nameInputId} className="block font-sans text-xs font-medium text-[#241C20] mb-1">
                Full Name *
              </label>
              <input
                id={nameInputId}
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rajesh Sharma"
                className="w-full px-4 py-2.5 bg-[#FBF8F4] border border-[#E88CA4]/30 rounded-md font-sans text-xs text-[#241C20] focus:outline-none focus:border-[#C74B66]"
              />
            </div>

            <div>
              <label htmlFor={emailInputId} className="block font-sans text-xs font-medium text-[#241C20] mb-1">
                Email Address *
              </label>
              <input
                id={emailInputId}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rajesh@example.com"
                className="w-full px-4 py-2.5 bg-[#FBF8F4] border border-[#E88CA4]/30 rounded-md font-sans text-xs text-[#241C20] focus:outline-none focus:border-[#C74B66]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={phoneInputId} className="block font-sans text-xs font-medium text-[#241C20] mb-1">
                Phone Number (+91) *
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-[#F8ECEF] border border-r-0 border-[#E88CA4]/30 rounded-l-md font-sans text-xs text-[#241C20] font-medium">
                  +91
                </span>
                <input
                  id={phoneInputId}
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9772297772"
                  className="w-full px-4 py-2.5 bg-[#FBF8F4] border border-[#E88CA4]/30 rounded-r-md font-sans text-xs text-[#241C20] focus:outline-none focus:border-[#C74B66]"
                />
              </div>
            </div>

            <div>
              <label htmlFor={bhkSelectId} className="block font-sans text-xs font-medium text-[#241C20] mb-1">
                Preferred Configuration
              </label>
              <select
                id={bhkSelectId}
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#FBF8F4] border border-[#E88CA4]/30 rounded-md font-sans text-xs text-[#241C20] focus:outline-none focus:border-[#C74B66]"
              >
                <option value="3 BHK">3 BHK Residence</option>
                <option value="3 BHK + Utility">3 BHK + Utility</option>
                <option value="4 BHK">4 BHK Luxury Residence</option>
              </select>
            </div>
          </div>

          {/* Consent Checkbox (Exact required copy per prompt) */}
          <div className="flex items-start space-x-3 pt-2">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 accent-[#C74B66]"
            />
            <label htmlFor="consent" className="font-sans text-[11px] text-[#241C20]/75 font-light leading-snug cursor-pointer">
              I authorize Pink Oaks and its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-[#C74B66] hover:bg-[#8E2F47] text-[#FBF8F4] font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors shadow-xs"
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      )}

    </div>
  );
}

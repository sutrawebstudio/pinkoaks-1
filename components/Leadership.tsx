"use client";

import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-[#F8ECEF] border-y border-[#E88CA4]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number */}
        <div className="flex items-center space-x-4 mb-8">
          <span className="font-serif text-sm font-semibold tracking-widest text-[#B78D4A] uppercase">
            02 &nbsp;/&nbsp; Leadership &amp; Heritage
          </span>
          <div className="h-px bg-[#B78D4A]/30 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20] leading-tight">
              Built on Three Decades of Uncompromising Trust.
            </h2>
            <p className="font-sans text-base text-[#241C20]/80 font-light leading-relaxed">
              Established in 1990, Pink Oaks Properties is the first real estate company in Jaipur to have earned ISO certification. Over thirty-five years, our leadership has maintained a single focus: creating homes that endure in quality, beauty, and emotional warmth.
            </p>
            <p className="font-sans text-sm text-[#241C20]/75 font-light leading-relaxed">
              We approach every development not as a speculative build, but as an enduring sanctuary for families who seek peace, harmony, and lasting value in Bani Park.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-[#FBF8F4] p-6 rounded-xl border border-[#E88CA4]/20 space-y-2">
              <span className="font-serif text-3xl font-semibold text-[#C74B66]">1990</span>
              <h3 className="font-sans text-sm font-medium text-[#241C20] uppercase tracking-wider">
                ISO Certified Pioneer
              </h3>
              <p className="font-sans text-xs text-[#241C20]/70 font-light">
                First real estate developer in Jaipur with verified international quality standards.
              </p>
            </div>

            <div className="bg-[#FBF8F4] p-6 rounded-xl border border-[#E88CA4]/20 space-y-2">
              <span className="font-serif text-3xl font-semibold text-[#C74B66]">35+ Yrs</span>
              <h3 className="font-sans text-sm font-medium text-[#241C20] uppercase tracking-wider">
                Bani Park Legacy
              </h3>
              <p className="font-sans text-xs text-[#241C20]/70 font-light">
                Over three decades of delivering landmark residential projects on schedule.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

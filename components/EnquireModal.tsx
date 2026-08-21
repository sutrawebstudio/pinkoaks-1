"use client";

import { motion, AnimatePresence } from "framer-motion";
import EnquireForm from "./EnquireForm";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function EnquireModal({
  isOpen,
  onClose,
  title = "Enquire Now",
}: EnquireModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#241C20]/80 backdrop-blur-xs flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-lg w-full bg-[#FBF8F4] rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-[#241C20]/60 hover:text-[#C74B66] focus:outline-none"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-2 sm:p-4">
              <EnquireForm title={title} onSuccess={onClose} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

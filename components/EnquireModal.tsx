"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquireForm from "./EnquireForm";
import { X } from "lucide-react";

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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#241C20]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative max-w-lg w-full bg-[#FBF8F4] rounded-2xl shadow-2xl overflow-hidden my-auto border border-[#C15F70]/30"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 min-h-[44px] min-w-[44px] p-2.5 inline-flex items-center justify-center text-[#241C20]/70 hover:text-[#C15F70] hover:bg-[#C15F70]/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] touch-manipulation cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5 stroke-[2]" aria-hidden="true" />
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


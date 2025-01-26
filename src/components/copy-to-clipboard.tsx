"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyToClipboard({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch (error) {
      console.error("Error copying to clipboard", error);
    } finally {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <button
      aria-label="Copy code snippet"
      className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-white rounded-sm transition-all"
      onClick={copyToClipboard}
    >
      <MotionConfig
        transition={{ duration: 0.25, type: "spring", bounce: 0.15 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="checkmark"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Check className="w-4 h-4" />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Copy size={14} />
            </motion.span>
          )}
        </AnimatePresence>
      </MotionConfig>
    </button>
  );
}

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

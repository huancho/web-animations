'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export default function CopyButton() {
  const [isCopied, setIsCopied] = useState(true);

  const handleCopy = () => {
    setIsCopied(false);
    setTimeout(() => {
      setIsCopied(true);
    }, 1000);
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <button
      className="cursor-pointer text-foreground/60 border border-[#2c2c2c] rounded-md h-9 w-9 flex items-center justify-center hover:text-foreground/80 transition-colors duration-150"
      onClick={handleCopy}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isCopied ? (
          <motion.span
            key="copy"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Copy className="size-4" />
          </motion.span>
        ) : (
          <motion.span
            key="check"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Check className="size-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

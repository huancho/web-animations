'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';

const buttonContent = {
  idle: 'Send me a login link',
  loading: <LoaderCircle className="size-4 animate-spin" />,
  success: 'Login link sent!',
};

export default function SendLinkButton() {
  const [buttonState, setButtonState] = useState<
    'idle' | 'loading' | 'success'
  >('idle');

  const handleClick = () => {
    setButtonState('loading');
    setTimeout(() => {
      setButtonState('success');
    }, 1750);
    setTimeout(() => {
      setButtonState('idle');
    }, 3500);
  };
  return (
    <button
      className="relative overflow-hidden bg-blue-500 text-white font-medium h-9 w-40 rounded-lg text-sm flex items-center justify-center cursor-pointer hover:bg-blue-500/90 transition-colors duration-150"
      onClick={handleClick}
      disabled={buttonState !== 'idle'}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={buttonState}
          transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
          initial={{ translateY: -25, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: 25, opacity: 0 }}
        >
          {buttonContent[buttonState]}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

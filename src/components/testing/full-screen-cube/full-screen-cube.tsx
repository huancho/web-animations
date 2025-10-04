'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FullScreenCube() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-10 relative">
      <motion.div
        className="bg-yellow-500 w-10 inset-0 z-50"
        style={{
          position: isOpen ? 'fixed' : 'relative',
          width: isOpen ? '100%' : '40px',
          height: isOpen ? '100%' : '40px',
        }}
        layout
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
}

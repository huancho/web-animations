'use client';
import { motion } from 'motion/react';
import { useRef } from 'react';

export default function BallDrag() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="relative bg-[#1c1c1c] rounded-lg overflow-hidden border border-[#2c2c2c] w-full h-56 p-4"
    >
      <motion.div
        className="w-10 h-10 bg-foreground rounded-full cursor-grab"
        drag
        dragConstraints={ref}
      />
    </div>
  );
}

'use client';

import './image-reveal.css';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'motion/react';
import { RotateCw } from 'lucide-react';

export default function ImageReveal() {
  const [key, setKey] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-150px' });
  const handleReset = () => {
    setKey((prev) => prev + 1);
  };
  return (
    <div ref={ref} className="relative w-full overflow-hidden rounded-lg">
      <button
        onClick={handleReset}
        className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/30 rounded-lg p-2 cursor-pointer transition-color duration-150 ease-out"
      >
        <RotateCw className="w-4 h-4" />
      </button>

      <div className="flex h-full items-center overflow-hidden">
        <Image
          key={key}
          src="/palm-trees.webp"
          alt="palm trees landscape image"
          width={1920}
          height={1280}
          className={`${isInView ? 'image-reveal' : 'image-hidden'}`}
        />
      </div>
    </div>
  );
}

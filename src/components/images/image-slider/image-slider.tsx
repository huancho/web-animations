'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

export default function ImageSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateFromX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      updateFromX(e.clientX);
    };

    const handleGlobalMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);
  }, [updateFromX]);

  // Touch support
  const handleTouchStart = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging.current) return;
      updateFromX(e.touches[0].clientX);
    },
    [updateFromX]
  );

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);
  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-lg touch-none"
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex h-full items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/car-yellow.webp"
            alt="car riding between palm trees"
            width={1920}
            height={1278}
            style={{ color: 'transparent' }}
          />
        </div>
        <div
          style={{
            clipPath: `inset(0px ${100 - sliderPosition}% 0px 0px)`,
            willChange: 'clip-path',
          }}
        >
          <Image
            src="/car-blue.webp"
            alt="car riding between palm trees"
            width={1920}
            height={1278}
            style={{ color: 'transparent' }}
          />
        </div>
        <button
          aria-label="Drag to compare"
          className="absolute inset-y-0 z-10 flex h-full w-4 cursor-ew-resize outline-none focus-visible:shadow-focus-ring-button md:w-2.5 translate-x-[-20%] md:translate-x-[-33%]"
          style={{
            left: `${sliderPosition}%`,
            willChange: 'left',
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="h-full w-1.5 bg-white/20 transition-colors hover:bg-white/50"></div>
        </button>
      </div>
    </div>
  );
}

'use client';

import { Trash } from 'lucide-react';

export default function HoldDeleteButton() {
  return (
    <button
      className="relative group active:scale-97"
      style={{
        transition: 'scale 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <div className="flex items-center gap-2 h-9 px-4 bg-foreground text-background rounded-full cursor-pointer">
        <Trash className="size-4" /> Hold to Delete
      </div>
      <div
        className="[clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-200 group-active:duration-[1500ms] group-active:[clip-path:inset(0_0_0_0)] ease-linear
        absolute top-0 left-0 flex items-center gap-2 h-9 px-4 bg-[#FFDBDC] text-[#E5484D] rounded-full cursor-pointer"
      >
        <Trash className="size-4" /> Hold to Delete
      </div>
    </button>
  );
}

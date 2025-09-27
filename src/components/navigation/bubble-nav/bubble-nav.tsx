'use client';

import { ChartSpline, LayoutDashboard, Settings, User } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

const bubbleNavItems = [
  {
    label: 'Dashboard',
    icon: <LayoutDashboard className="size-4" />,
  },
  {
    label: 'Profile',
    icon: <User className="size-4" />,
  },
  {
    label: 'Settings',
    icon: <Settings className="size-4" />,
  },
  {
    label: 'Reports',
    icon: <ChartSpline className="size-4" />,
  },
];

export default function BubbleNav() {
  const [activeTab, setActiveTab] = useState(bubbleNavItems[0].label);
  const containerRef = useRef<HTMLUListElement>(null);
  const activeTabElementRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (activeTab && container) {
      const activeTabElement = activeTabElementRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;
        container.style.clipPath = `inset(0 ${Number(
          100 - (clipRight / container.offsetWidth) * 100
        ).toFixed()}% 0 ${Number(
          (clipLeft / container.offsetWidth) * 100
        ).toFixed()}% round 17px)`;
      }
    }
  }, [activeTab, activeTabElementRef, containerRef]);

  return (
    <div className="relative">
      <ul className="flex gap-2">
        {bubbleNavItems.map((item) => (
          <li key={item.label}>
            <button
              className="flex items-center gap-2 cursor-pointer px-4 h-9"
              onClick={() => setActiveTab(item.label)}
              ref={activeTab === item.label ? activeTabElementRef : null}
            >
              {item.icon}
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <ul
        ref={containerRef}
        className="flex gap-2 absolute bottom-0 left-0 bg-blue-500"
        style={{
          transition: 'clip-path 0.25s ease',
          clipPath: 'inset(0px 75% 0px 0% round 17px)',
        }}
      >
        {bubbleNavItems.map((item) => (
          <li key={item.label}>
            <button
              className="flex items-center gap-2 cursor-pointer text-black px-4 h-9"
              onClick={() => {
                setActiveTab(item.label);
              }}
            >
              {item.icon}
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

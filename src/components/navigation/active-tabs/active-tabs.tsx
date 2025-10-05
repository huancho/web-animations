'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const TABS = ['About', 'Services', 'Blog', 'Contact'];

export default function ActiveTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div>
      <ul className="flex gap-2">
        {TABS.map((tab) => (
          <motion.li
            key={tab}
            className={`relative cursor-pointer px-2 py-1 text-sm outline-none transition-colors duration-200 ${
              activeTab === tab ? 'text-gray-200' : 'text-gray-400'
            }`}
            onMouseOver={() => setActiveTab(tab)}
            layout
          >
            {activeTab === tab ? (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 rounded-lg bg-white/15"
              />
            ) : null}

            <span>{tab}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

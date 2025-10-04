'use client';

import { useState } from 'react';
import './theme-switch.css';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('dark');
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="relative w-full h-40">
      <div
        className={`absolute top-0 left-0 flex items-start flex-col space-y-1 bg-[#1c1c1c] p-4 rounded-lg border border-[#2c2c2c] ${
          theme === 'dark' ? 'z-10 clipPathReveal' : 'z-0'
        }`}
      >
        <h3 className="font-medium">This is a theme switch</h3>
        <p>
          Switch between themes with a smooth transition effect. Whether you
          prefer the clarity of light mode or the comfort of dark mode, we've
          got you covered.
        </p>
        <button
          className="mt-1 h-9 px-4 bg-foreground text-background rounded-lg cursor-pointer"
          onClick={handleThemeSwitch}
        >
          Switch Theme
        </button>
      </div>
      <div
        className={`absolute top-0 left-0 flex items-start flex-col space-y-1 bg-foreground p-4 rounded-lg border border-[#2c2c2c] text-background ${
          theme === 'dark' ? 'z-0 ' : 'z-10 clipPathReveal'
        }`}
      >
        <h3 className="font-medium">This is a theme switch</h3>
        <p>
          Switch between themes with a smooth transition effect. Whether you
          prefer the clarity of light mode or the comfort of dark mode, we've
          got you covered.
        </p>
        <button
          className="mt-1 h-9 px-4 bg-background text-foreground rounded-lg cursor-pointer"
          onClick={handleThemeSwitch}
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}

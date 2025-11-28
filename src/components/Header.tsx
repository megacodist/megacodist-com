"use client"; // Required for onClick events

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Logo from "@/../public/megacodist.svg";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch (wait for component to mount on client)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same height to prevent layout shift
    return <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800" />;
  }

  return (
    <header className="h-16 px-4 flex items-center justify-between bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      
      {/* 1. LOGO (Left) */}
      <Link href="/" aria-label="Home">
        {/* Import and use the SVG as a React component so it's not hardcoded here */}
        <Logo className="w-8 h-8 text-current fill-current" />
      </Link>

      {/* Right Side Group */}
      <div className="flex items-center gap-4">
        
        {/* 2. ABOUT BUTTON (Next to switcher) */}
        <Link href="/about" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="About">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
             {/* PASTE YOUR ABOUT ICON SVG PATH HERE */}
             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        </Link>

        {/* 3. THEME SWITCHER (Rightmost) */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            // Light Mode Icon (Sun) - Shows when currently Dark
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-yellow-400">
               {/* PASTE YOUR SUN SVG PATH HERE */}
               <circle cx="12" cy="12" r="5" />
               <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            // Dark Mode Icon (Moon) - Shows when currently Light
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-gray-600">
               {/* PASTE YOUR MOON SVG PATH HERE */}
               <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
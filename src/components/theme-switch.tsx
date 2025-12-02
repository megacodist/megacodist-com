"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { SvgMoon, SvgSun } from "@/components/svgs";


export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="w-14 h-8 bg-gray-200 rounded-full animate-pulse" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <label className="flex cursor-pointer gap-2 items-center">
      {/* Sun Icon */}
      <SvgSun className="m3-icon-m animate-spin-slow"/>

      {/* DaisyUI Toggle */}
      <input
        type="checkbox"
        className="toggle toggle-primary theme-controller"
        // We handle state manually via next-themes
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        aria-label="Toggle Dark Mode"
      />

      {/* Moon Icon */}
      <SvgMoon className="m3-icon-m animate-spin-slow"/>
    </label>
  );
}
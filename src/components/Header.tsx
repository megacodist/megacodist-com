"use client"; // Required for onClick events

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import ThemeSwitch from "./theme-switch";

import { SvgHomePage, SvgMegacodist, SvgLicense } from "@/components/svgs";


export default function Header() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch (wait for component to mount on client)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same height to prevent layout shift.
    // The height is based on the default DaisyUI navbar height.
    return <header className="navbar h-16" />;
  }

  return (
    <header className="navbar sticky top-0 z-50">
      <div className="navbar-start">
        {/* The Home Page */}
        <Link href="/" className="m3-icon-button"
          aria-label="Go to the Home page">
          <SvgHomePage className="m3-icon-m" />
        </Link>

        {/* Megacodist Logo */}
        <Link href="/about" className="m3-icon-button"
          aria-label="About Megacodist">
          <SvgMegacodist className="m3-icon-m" />
        </Link>
      </div>

      {/* Right Side Group */}
      <div className="navbar-end">
        <Link href="/license" className="m3-icon-button"
          aria-label="Go to the License page">
          <SvgLicense className="m3-icon-m"/>
        </Link>

        <ThemeSwitch />
      </div>
    </header>
  );
}
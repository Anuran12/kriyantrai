"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
  duration: 1.0,        // Reduced from 1.2 for faster response
  lerp: 0.1,            // Higher = more responsive, Lower = "heavier"/smoother
  wheelMultiplier: 1.0, // Ensures 1:1 scroll feel
  smoothWheel: true,
  syncTouch: false,     // Keeps native touch feel on mobile (highly recommended)
});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}

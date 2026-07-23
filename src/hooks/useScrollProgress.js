import { useEffect, useState } from "react";

/**
 * Tracks how far the reader has scrolled through the document (0–1) and
 * which section id is currently most in view. Drives the pipeline rail's
 * traveling pulse and the header's active nav state.
 */
export function useScrollProgress(sectionIds) {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, ratio)));

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActiveId(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(measure);
        ticking = true;
      }
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  return { progress, activeId };
}

import { useEffect, useState } from "react";

/**
 * Types out a list of { text } lines one character at a time, one line
 * after another — used once, on load, for the hero terminal. Falls back
 * to showing everything instantly under prefers-reduced-motion.
 */
export function useTypewriter(lines, { speed = 22, lineDelay = 260 } = {}) {
  const [renderedLines, setRenderedLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setRenderedLines(lines.map((l) => l.text));
      setDone(true);
      return;
    }

    let cancelled = false;
    const output = lines.map(() => "");

    async function play() {
      for (let i = 0; i < lines.length; i++) {
        const full = lines[i].text;
        for (let c = 1; c <= full.length; c++) {
          if (cancelled) return;
          output[i] = full.slice(0, c);
          setRenderedLines([...output]);
          await wait(speed);
        }
        await wait(lineDelay);
      }
      if (!cancelled) setDone(true);
    }

    play();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { renderedLines, done };
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

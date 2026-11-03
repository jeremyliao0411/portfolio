"use client";

import { useEffect, useRef, useState } from "react";

// Hero moment: a scatter of noisy points settles into one clear trend, then the
// fitted line draws. Abstract on purpose — no axes or numbers, so it never reads
// as a real dataset. Reduced motion shows the settled state.
const W = 560, H = 420, N = 72;

function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r = rng(20261102);
const POINTS = Array.from({ length: N }, (_, i) => {
  const fx = 56 + (i / (N - 1)) * (W - 112) + (r() - 0.5) * 10;
  const fy = H - 70 - (fx - 56) * 0.52 + (r() - 0.5) * 2 * (22 + r() * 18);
  return {
    sx: 24 + r() * (W - 48), sy: 24 + r() * (H - 48),
    fx, fy, size: 2.4 + r() * 2.2, delay: r() * 0.35,
  };
});
const LINE = { x1: 48, y1: H - 66, x2: W - 48, y2: H - 66 - (W - 96) * 0.52 };
const LINE_LEN = Math.hypot(LINE.x2 - LINE.x1, LINE.y2 - LINE.y1);

const ease = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const mix = (a, b, t) => a + (b - a) * t;

export default function SignalChart() {
  const [t, setT] = useState(0); // 0 = scattered, 1 = settled
  const [line, setLine] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setT(1); setLine(1); return; }
    let start;
    const DUR = 2200, HOLD = 500, LINE_DUR = 1100;
    const tick = (now) => {
      if (start === undefined) start = now;
      const e = now - start - HOLD;
      setT(Math.max(0, Math.min(1, e / DUR)));
      setLine(Math.max(0, Math.min(1, (e - DUR * 0.7) / LINE_DUR)));
      if (e < DUR * 0.7 + LINE_DUR) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="signal" role="img" aria-label="Illustration: scattered points settling into one clear upward trend">
      <defs>
        <linearGradient id="sig-line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.2" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="1" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="24" x2={W - 24} y1={H * f} y2={H * f} className="signal-grid" />
      ))}
      {POINTS.map((p, i) => {
        const k = ease(Math.max(0, Math.min(1, (t - p.delay) / (1 - p.delay))));
        return (
          <circle
            key={i}
            cx={mix(p.sx, p.fx, k)}
            cy={mix(p.sy, p.fy, k)}
            r={p.size}
            fill={k > 0.98 ? "var(--accent)" : "var(--dot)"}
            fillOpacity={mix(0.55, 0.9, k)}
          />
        );
      })}
      <line
        {...LINE}
        stroke="url(#sig-line)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={LINE_LEN}
        strokeDashoffset={LINE_LEN * (1 - ease(line))}
      />
      <circle cx={LINE.x2} cy={LINE.y2} r="6" className="signal-end" style={{ opacity: line >= 1 ? 1 : 0 }} />
    </svg>
  );
}

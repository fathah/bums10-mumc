"use client";

import { useEffect, useState } from "react";

/*
  Ambient layer rendered once behind the whole page: drifting motes of
  light (spores / dust caught in a shaft of jungle light) plus a fixed
  vignette. Particles are generated after mount so SSR and client agree.
*/

type Mote = {
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
};

export default function Atmosphere() {
  const [motes, setMotes] = useState<Mote[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;
    const count = window.innerWidth < 640 ? 18 : 34;
    const next: Mote[] = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      delay: Math.random() * 16,
      duration: 14 + Math.random() * 16,
      drift: (Math.random() - 0.5) * 80,
      opacity: 0.15 + Math.random() * 0.5,
    }));
    setMotes(next);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* deep canopy glow that breathes */}
      <div className="absolute left-1/2 top-[34%] h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,150,96,0.16),transparent_65%)] animate-pulse-glow" />

      {motes.map((m, i) => (
        <span
          key={i}
          className="absolute bottom-[-10px] rounded-full bg-gold-bright"
          style={{
            left: `${m.left}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            opacity: m.opacity,
            boxShadow: "0 0 6px rgba(236,212,154,0.6)",
            animation: `mote-rise ${m.duration}s linear ${m.delay}s infinite`,
            // @ts-expect-error custom property
            "--drift": `${m.drift}px`,
          }}
        />
      ))}

      <style>{`
        @keyframes mote-rise {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          10%  { opacity: var(--mote-op, 0.5); }
          90%  { opacity: var(--mote-op, 0.5); }
          100% { transform: translateY(-110vh) translateX(var(--drift)); opacity: 0; }
        }
      `}</style>

      {/* frame vignette darkening the edges, mirroring the poster border */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(3,5,4,0.9)_100%)]" />
    </div>
  );
}

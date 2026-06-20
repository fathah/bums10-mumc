"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

/* The gate opens on June 24, 2026 at 6:00 PM. */
const TARGET = new Date("2026-06-24T18:00:00").getTime();

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(): Parts {
  const ms = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export default function Countdown() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff());
    const id = setInterval(() => setParts(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: [string, number][] = [
    ["Days", parts?.days ?? 0],
    ["Hours", parts?.hours ?? 0],
    ["Minutes", parts?.minutes ?? 0],
    ["Seconds", parts?.seconds ?? 0],
  ];

  return (
    <section className="section-shell relative px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow text-[0.7rem] sm:text-xs">The Gate Opens In</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {units.map(([label, value]) => (
              <div
                key={label}
                className="relative flex flex-col items-center justify-center border border-gold-dim/40 bg-stone/30 px-3 py-6 backdrop-blur-sm sm:py-8"
              >
                {/* carved corner ticks */}
                <span className="absolute left-2 top-2 h-2 w-2 border-l border-t border-gold/50" />
                <span className="absolute right-2 top-2 h-2 w-2 border-r border-t border-gold/50" />
                <span className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-gold/50" />
                <span className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-gold/50" />

                <span className="foil font-[family-name:var(--font-display)] text-4xl font-bold tabular-nums sm:text-6xl">
                  {parts ? String(value).padStart(2, "0") : "--"}
                </span>
                <span className="eyebrow mt-3 text-[0.55rem] sm:text-[0.65rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

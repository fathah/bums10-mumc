"use client";

import { motion } from "motion/react";
import { ChevronsDown } from "lucide-react";
import PortalRing from "./PortalRing";
import Foliage from "./Foliage";
import Divider from "./Divider";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay: 0.2 + i * 0.18 },
  }),
};

export default function Hero() {
  return (
    <section className="section-shell relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* atmospheric backdrop — low opacity, fades at top and bottom to merge
          into the page so there's no hard seam against the next section */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 [mask-image:linear-gradient(to_bottom,transparent,#000_18%,#000_60%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_18%,#000_60%,transparent)]"
          style={{ backgroundImage: "url('/bg.png')" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-abyss" />
      </div>

      <PortalRing />
      <Foliage />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <motion.p
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="eyebrow text-[0.65rem] sm:text-sm"
        >
          The Expedition Society Presents
        </motion.p>

        <motion.h1
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
          className="foil mt-6 font-[family-name:var(--font-display)] text-6xl font-semibold leading-[0.9] tracking-tight sm:text-8xl lg:text-9xl"
        >
          VORAKAI&nbsp;26
        </motion.h1>

        <motion.div
          custom={2}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-7 w-full"
        >
          <Divider label="The Lost Epoch" />
        </motion.div>

        <motion.p
          custom={3}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-md text-lg italic leading-relaxed text-parchment-dim sm:text-xl"
        >
          A threshold has opened for the new arrivals. Cross it, and the lost
          epoch is yours to claim.
        </motion.p>

        <motion.a
          custom={4}
          variants={rise}
          initial="hidden"
          animate="show"
          href="#invitation"
          className="group mt-10 inline-flex items-center gap-3 border border-gold/40 bg-gold/[0.04] px-8 py-3.5 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-gold-bright transition-colors duration-300 hover:border-gold hover:bg-gold/10"
        >
          Enter the Gate
        </motion.a>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ChevronsDown
          className="animate-scroll-cue text-gold/70"
          size={22}
          strokeWidth={1.5}
        />
      </div>
    </section>
  );
}

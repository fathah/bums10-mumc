/*
  The Signature: a buried stone gate. Concentric carved rings rotate at
  different speeds around a dark threshold, with the expedition's name
  inscribed along the outermost band — the portal to The Lost Epoch.
*/
export default function PortalRing() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[150vw] max-w-[860px] -translate-x-1/2 -translate-y-1/2 sm:w-[90vh]"
      aria-hidden
    >
      {/* threshold glow at the centre */}
      <div className="absolute inset-[26%] rounded-full bg-[radial-gradient(circle,rgba(150,120,60,0.18),transparent_70%)] animate-pulse-glow" />

      {/* outer inscribed band */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full animate-spin-slow [transform-origin:center]"
      >
        <defs>
          <path
            id="ringPath"
            d="M200,200 m-178,0 a178,178 0 1,1 356,0 a178,178 0 1,1 -356,0"
          />
        </defs>
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="var(--gold-dim)"
          strokeWidth="0.6"
          opacity="0.5"
        />
        <circle
          cx="200"
          cy="200"
          r="166"
          fill="none"
          stroke="var(--gold-dim)"
          strokeWidth="0.6"
          opacity="0.5"
        />
        <text
          fill="var(--gold)"
          fontSize="13"
          letterSpacing="6"
          style={{
            fontFamily: "var(--font-display), serif",
            textTransform: "uppercase",
          }}
          opacity="0.7"
        >
          <textPath href="#ringPath" startOffset="0">
            · VORAKAI · THE LOST EPOCH · MMXXVI · AN EXPEDITION BEGINS ·
            VORAKAI · THE LOST EPOCH ·
          </textPath>
        </text>
      </svg>

      {/* middle notched band, counter-rotating */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-[12%] h-[76%] w-[76%] animate-spin-reverse [transform-origin:center]"
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="var(--gold-dim)"
          strokeWidth="1"
          strokeDasharray="2 14"
          opacity="0.8"
        />
        <circle
          cx="200"
          cy="200"
          r="135"
          fill="none"
          stroke="var(--gold-dim)"
          strokeWidth="0.5"
          opacity="0.4"
        />
        {Array.from({ length: 24 }).map((_, i) => {
          // round to keep SSR/client output byte-identical (no hydration drift)
          const r = (n: number) => Math.round(n * 100) / 100;
          const a = (i / 24) * Math.PI * 2;
          const x1 = r(200 + Math.cos(a) * 150);
          const y1 = r(200 + Math.sin(a) * 150);
          const x2 = r(200 + Math.cos(a) * 142);
          const y2 = r(200 + Math.sin(a) * 142);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--gold)"
              strokeWidth="0.8"
              opacity="0.5"
            />
          );
        })}
      </svg>

      {/* innermost ring framing the dark threshold */}
      <div className="absolute inset-[28%] rounded-full border border-gold-dim/40" />
      <div className="absolute inset-[31%] rounded-full border border-gold/20 animate-spin-slow" />
    </div>
  );
}

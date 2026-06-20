/*
  Jungle overgrowth creeping in from the corners — layered leaf silhouettes
  in deep canopy green, echoing the framed foliage of the invitation.
  Pure decoration; static and lightweight.
*/

function LeafCluster({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c3322" />
          <stop offset="100%" stopColor="#070f0a" />
        </linearGradient>
        <linearGradient id="leafEdge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f4d33" />
          <stop offset="100%" stopColor="#10201400" />
        </linearGradient>
      </defs>
      {/* broad monstera-style leaf */}
      <path
        d="M8 8C70 6 132 28 168 78c28 39 26 92 8 114-6-44-30-86-66-116C82 64 44 40 8 36V8Z"
        fill="url(#leaf)"
        stroke="url(#leafEdge)"
        strokeWidth="1.5"
      />
      <path
        d="M14 14c40 8 78 32 104 66"
        stroke="#33543a"
        strokeWidth="1"
        opacity="0.6"
      />
      {/* slender fronds */}
      <path
        d="M2 60c46 2 92 26 120 70 14 22 18 46 14 62-10-40-36-78-72-104C58 74 30 64 2 64V60Z"
        fill="url(#leaf)"
        opacity="0.92"
      />
      <path
        d="M40 2c18 30 22 64 12 100"
        stroke="#2a4831"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export default function Foliage() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden>
      <LeafCluster className="absolute -left-6 -top-6 h-40 w-40 sm:h-64 sm:w-64 opacity-90" />
      <LeafCluster className="absolute -right-6 -top-6 h-40 w-40 sm:h-64 sm:w-64 -scale-x-100 opacity-90" />
      <LeafCluster className="absolute -bottom-6 -left-6 h-44 w-44 sm:h-72 sm:w-72 -scale-y-100 opacity-95" />
      <LeafCluster className="absolute -bottom-6 -right-6 h-44 w-44 sm:h-72 sm:w-72 -scale-100 opacity-95" />
    </div>
  );
}

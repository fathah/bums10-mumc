/*
  Ornamental divider lifted from the invitation: an engraved sight-glyph
  flanked by tapering arrows. Reused as the page's structural punctuation.
*/
export default function Divider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 text-gold">
      <span className="hairline w-16 sm:w-24" aria-hidden />
      <Arrow className="rotate-180" />
      {label ? (
        <span className="eyebrow text-[0.6rem] sm:text-xs whitespace-nowrap px-1">
          {label}
        </span>
      ) : (
        <Glyph />
      )}
      <Arrow />
      <span className="hairline w-16 sm:w-24" aria-hidden />
    </div>
  );
}

function Glyph() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1" />
      <path
        d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="34"
      height="10"
      viewBox="0 0 34 10"
      fill="none"
      aria-hidden
      className={`shrink-0 ${className}`}
    >
      <path d="M0 5h26" stroke="currentColor" strokeWidth="1" />
      <path
        d="M26 1.5 33 5l-7 3.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

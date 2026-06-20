import { CalendarDays, MapPin, Compass, type LucideIcon } from "lucide-react";
import Divider from "./Divider";
import Reveal from "./Reveal";

type Detail = {
  icon: LucideIcon;
  label: string;
  value: string;
  sub: string;
};

const details: Detail[] = [
  {
    icon: CalendarDays,
    label: "When",
    value: "June 24, 2026",
    sub: "Doors at 8:00 AM",
  },
  {
    icon: MapPin,
    label: "Where",
    value: "The 4th Dimension",
    sub: "The threshold venue",
  },
  {
    icon: Compass,
    label: "Who",
    value: "First-Year Explorers",
    sub: "The new arrivals of VORAKAI",
  },
];

export default function Details() {
  return (
    <section className="section-shell relative px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <Divider label="The Coordinates" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {details.map(({ icon: Icon, label, value, sub }, i) => (
            <Reveal key={label} delay={i * 0.12}>
              <article className="group relative h-full overflow-hidden border border-gold-dim/40 bg-gradient-to-b from-stone/40 to-abyss/60 px-7 py-10 text-center transition-colors duration-500 hover:border-gold/60">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,162,74,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Icon
                  className="mx-auto text-gold"
                  size={30}
                  strokeWidth={1.4}
                />
                <p className="eyebrow mt-6 text-[0.6rem]">{label}</p>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-parchment sm:text-[1.65rem]">
                  {value}
                </h3>
                <p className="mt-3 text-base italic text-parchment-dim">
                  {sub}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Divider from "./Divider";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="section-shell relative px-6 pb-20 pt-8 text-center">
      <Reveal>
        <p className="foil font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          VORAKAI&nbsp;26
        </p>
        <p className="eyebrow mt-4 text-[0.6rem]">The Lost Epoch</p>

        <div className="mx-auto mt-8 max-w-xs">
          <Divider />
        </div>

        <p className="mt-8 text-sm italic text-parchment-dim">
          Cross the threshold. The epoch remembers those who arrive.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-parchment-dim/70">
          MMXXVI · An Expedition Begins
        </p>

        <p className="mt-10 text-[0.65rem] tracking-wide text-parchment-dim/50">
          Powered by{" "}
          <a
            href="https://fathaaah.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/70 transition-colors hover:text-gold"
          >
            fathaaah.com
          </a>
        </p>
      </Reveal>
    </footer>
  );
}

import Divider from "./Divider";
import Reveal from "./Reveal";

export default function Invitation() {
  return (
    <section
      id="invitation"
      className="section-shell relative px-6 py-28 sm:py-36"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Reveal>
          <Divider />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mt-10 text-[0.7rem] leading-loose sm:text-sm">
            You are invited
            <br />
            to join us for
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="foil mt-8 font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
            Fresher&rsquo;s
            <br />
            Party
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-lg text-lg italic leading-relaxed text-parchment-dim sm:text-xl">
            Every legend needs a beginning. This is yours — a night to step out
            of the crowd and into the story of VORAKAI. Bring your nerve; the
            rest, we&rsquo;ll supply.
          </p>
        </Reveal>

        <Reveal delay={0.4} className="mt-12 w-full">
          <Divider />
        </Reveal>
      </div>
    </section>
  );
}

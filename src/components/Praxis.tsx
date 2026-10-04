import { praxis } from "../content/praxis";

/**
 * The one bounded object on the site.
 *
 * Every other section is open on the page, separated by hairlines. PRAXIS gets
 * a panel with a brass top edge because it is the only thing here that is a
 * separate institution with its own address: the border is doing the work of
 * saying "this continues somewhere else", not decorating.
 *
 * Built from the same primitives as everything else (mono labels, tabular
 * values, hairline rows) so the weight comes from containment, not from a new
 * visual language.
 */

/** Inline rather than a glyph: U+2197 is outside the subset we ship. */
function Outbound() {
  return (
    <svg
      viewBox="0 0 10 10"
      width="9"
      height="9"
      aria-hidden="true"
      style={{ flex: "none", marginBottom: "1px" }}
    >
      <path
        d="M2.6 7.4 7.4 2.6M3.4 2.6h4v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Praxis() {
  return (
    <article
      className="flex flex-col gap-7 border border-t-2 p-[clamp(1.35rem,3.6vw,2.35rem)]"
      style={{
        background: "var(--paper-2)",
        borderColor: "var(--rule-2)",
        borderTopColor: "var(--brass)",
      }}
    >
      <header className="flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
          <h2 className="u-display m-0 text-[clamp(1.5rem,3.6vw,2.05rem)] [font-stretch:122%]">
            {praxis.name}
          </h2>
          <span
            className="u-label leading-snug normal-case"
            style={{ color: "var(--ink-2)" }}
          >
            {praxis.full}
          </span>
        </div>

        <p
          className="m-0 max-w-[40ch] text-[clamp(1.02rem,2.2vw,1.2rem)] leading-[1.35]"
          style={{ color: "var(--brass)" }}
        >
          {praxis.tagline}
        </p>
      </header>

      <p className="m-0 max-w-[62ch] text-[16px]">{praxis.line}</p>

      <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
        {praxis.facts.map((f) => (
          <div key={f.label} className="flex flex-col gap-1.5">
            {/* --ink-3 is tuned for the page ground; on the lifted panel it
                drops to 4.3:1, so labels in here step up a stop. */}
            <dt className="u-label" style={{ color: "var(--ink-2)" }}>
              {f.label}
            </dt>
            <dd
              className="tnum m-0 font-mono text-[11.5px] leading-snug"
              style={{ color: "var(--ink)" }}
            >
              {f.value}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="m-0 flex list-none flex-col p-0">
        {praxis.does.map((d) => (
          <li
            key={d}
            className="max-w-[64ch] border-t py-3 text-[15px] first:border-t-0 first:pt-0"
            style={{ borderColor: "var(--rule-2)" }}
          >
            {d}
          </li>
        ))}
      </ul>

      <div>
        <a
          href={praxis.href}
          className="inline-flex items-baseline gap-2 rounded-[2px] px-5 py-3 font-mono text-[10.5px] tracking-[0.1em] uppercase no-underline transition-colors duration-200"
          style={{ background: "var(--ink)", color: "var(--paper)" }}
        >
          {praxis.display}
          <Outbound />
        </a>
      </div>
    </article>
  );
}

/**
 * The compact form for the home page. The full panel lives on Research; here
 * PRAXIS is evidence of initiative, so it gets a paragraph and two links
 * rather than a second object competing with the research threads.
 */
export function PraxisStrip() {
  return (
    <div
      className="flex flex-col gap-3 border-t pt-5 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-x-8"
      style={{ borderColor: "var(--brass)" }}
    >
      <span className="u-label" style={{ color: "var(--brass)" }}>
        {praxis.name}
      </span>
      <div className="flex flex-col items-start gap-2.5">
        <p className="m-0 max-w-[62ch] text-[15.5px]">
          {praxis.full}. I founded the group in February 2026 and lead it: original
          studies, preregistered, with null results published. Faculty sponsor,{" "}
          {praxis.facts.find((f) => f.label === "Sponsor")?.value}.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <a href="/research/#praxis" className="u-hit font-mono text-[10.5px] tracking-[0.08em] uppercase">
            What the group runs
          </a>
          <a href={praxis.href} className="u-hit font-mono text-[10.5px] tracking-[0.08em] uppercase">
            {praxis.display}
          </a>
        </div>
      </div>
    </div>
  );
}

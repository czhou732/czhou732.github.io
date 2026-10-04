import { Page, Section, SectionHead } from "../components/Page";
import { Benchmark } from "../components/Benchmark";
import { Praxis } from "../components/Praxis";
import { publications, research, software } from "../content/cv";
import { threads } from "../content/profile";

const STATUS: Record<string, string> = {
  preprint: "Preprint",
  "in-prep": "In preparation",
  presented: "Talk / poster",
};

export function Research() {
  return (
    <Page current="/research/">
      <Section first>
        <div className="flex flex-col gap-5">
          <h1 className="u-display m-0 max-w-[22ch] text-[clamp(1.7rem,3.1vw,2.2rem)]">
            Reward learning, and whether you can measure it from outside the skull.
          </h1>
          <p className="u-measure m-0">
            Three positions, one question. Below: the benchmark that motivates all
            of it, then the projects, then everything written or presented.
          </p>
        </div>
        <Benchmark />
      </Section>

      {threads.map((t) => {
        const entry = research.find((r) => r.org.includes(t.lab.split(" · ")[0])) ??
          research.find((r) => t.lab.startsWith(r.org.split(" ")[0]));
        return (
          <Section key={t.key} id={t.key}>
            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-[9rem_1fr]">
              <div className="flex flex-col gap-1.5">
                <span
                  className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase"
                  style={{ color: "var(--ink)" }}
                >
                  {t.title}
                </span>
                <span className="u-label leading-snug">{t.lab}</span>
              </div>
              <div className="flex flex-col gap-4">
                <p className="m-0 max-w-[62ch] text-[17px]">{t.line}</p>
                {entry && (
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {entry.points.map((p) => (
                      <li
                        key={p}
                        className="max-w-[64ch] border-t pt-3 text-[15.5px] first:border-t-0 first:pt-0"
                        style={{ borderColor: "var(--rule-2)" }}
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Section>
        );
      })}

      {/* The group the voice stream is run out of. */}
      <Section id="praxis">
        <Praxis />
      </Section>

      <Section id="software">
        <SectionHead>Software</SectionHead>
        {software.map((s) => (
          <div key={s.name} className="grid gap-x-8 gap-y-3 sm:grid-cols-[9rem_1fr]">
            <div className="flex flex-col gap-1.5">
              <a
                href={s.href}
                className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase"
              >
                {s.name}
              </a>
              <span className="u-label tnum leading-snug">{s.dates}</span>
            </div>
            <div className="flex flex-col gap-3">
              <p className="m-0 max-w-[64ch] text-[16px]">{s.line}</p>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="max-w-[64ch] border-t pt-3 text-[15.5px] first:border-t-0 first:pt-0"
                    style={{ borderColor: "var(--rule-2)" }}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Section>

      <Section id="publications">
        <SectionHead>Manuscripts and presentations</SectionHead>
        <ol className="m-0 flex list-none flex-col p-0">
          {publications.map((p, i) => (
            <li
              key={`${p.title}-${i}`}
              className="grid gap-x-8 gap-y-2 border-t py-5 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]"
              style={{ borderColor: "var(--rule-2)" }}
            >
              <div className="flex flex-col gap-1">
                <span className="u-label tnum" style={{ color: "var(--ink-2)" }}>
                  {p.year}
                </span>
                <span className="u-label leading-snug">{STATUS[p.status]}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="m-0 max-w-[62ch] text-[16.5px]" style={{ color: "var(--ink)" }}>
                  {p.href ? <a href={p.href}>{p.title}</a> : p.title}
                </p>
                <p className="u-label m-0 normal-case">
                  {p.authors} · {p.venue}
                  {p.doi ? ` · doi ${p.doi}` : ""}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </Page>
  );
}

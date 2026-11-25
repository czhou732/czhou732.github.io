import { Page, Section, SectionHead } from "../components/Page";
import { Cite } from "../components/Cite";
import { ResultsTable } from "../components/ResultsTable";
import { Praxis } from "../components/Praxis";
import { KIND_LABEL, publications, research, software } from "../content/cv";
import type { RefKind } from "../content/cv";
import { threads } from "../content/profile";

const KINDS: RefKind[] = ["preprint", "open-science", "in-prep", "presented"];

export function Research() {
  return (
    <Page current="/research/">
      <Section first>
        <div className="flex flex-col gap-5">
          <h1 className="u-display m-0 max-w-[22ch] text-[clamp(1.7rem,3.1vw,2.2rem)]">
            Research
          </h1>
          <p className="u-measure m-0">
            Table 1 gives the numbers behind the figure on the{" "}
            <a href="/#benchmark">home page</a>. Projects, software and publications
            follow.
          </p>
        </div>
        <ResultsTable />
        <Cite />
      </Section>

      {threads.map((t) => {
        const entry = research.find((r) => r.thread === t.key);
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
              <span className="u-label leading-snug">{s.tags}</span>
            </div>
            <div className="flex flex-col gap-3">
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

      {KINDS.map((k) => (
        <Section key={k} id={k === "preprint" ? "publications" : k}>
          <SectionHead>{KIND_LABEL[k]}</SectionHead>
          <ol className="m-0 flex list-none flex-col p-0">
            {publications
              .filter((p) => p.kind === k)
              .map((p, i) => (
                <li
                  key={`${p.title}-${i}`}
                  className="grid gap-x-8 gap-y-2 border-t py-5 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]"
                  style={{ borderColor: "var(--rule-2)" }}
                >
                  <span className="u-label tnum" style={{ color: "var(--ink-2)" }}>
                    {p.year}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <p className="m-0 max-w-[62ch] text-[16.5px]" style={{ color: "var(--ink)" }}>
                      {p.href ? <a href={p.href}>{p.title}</a> : p.title}
                      {p.descriptor ? ` ${p.descriptor}` : ""}
                    </p>
                    <p className="u-label m-0 normal-case">
                      {p.authors} · {p.venue}
                      {p.doi ? ` · doi ${p.doi}` : p.href ? ` · ${p.href.replace("https://", "")}` : ""}
                    </p>
                  </div>
                </li>
              ))}
          </ol>
        </Section>
      ))}
    </Page>
  );
}

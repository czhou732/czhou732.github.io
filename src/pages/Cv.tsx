import { Page, Section, SectionHead, SHELL } from "../components/Page";
import {
  education,
  interests,
  honors,
  KIND_LABEL,
  publications,
  research,
  service,
  skills,
  software,
  type Entry,
  type RefKind,
} from "../content/cv";

const KINDS: RefKind[] = ["preprint", "open-science", "in-prep", "presented"];
import { profile } from "../content/profile";

/** The CV opens like a printed page: a heavy rule, then the person. The portrait
    is an ink halftone, so it takes the same ink as the type. */
function Masthead() {
  return (
    <div className={`${SHELL} pt-[clamp(2.5rem,6vw,4rem)] pb-[clamp(0.5rem,2vw,1rem)]`}>
      <div
        className="flex flex-col gap-6 border-t-2 pt-6 sm:flex-row sm:items-center sm:gap-10"
        style={{ borderColor: "var(--ink)" }}
      >
        <div className="duo h-[132px] w-[132px] shrink-0 rounded-[2px] sm:h-[168px] sm:w-[168px]">
          <img
            src="/portrait.webp"
            width={512}
            height={512}
            alt="Portrait of Chengdong (Peter) Zhou"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="u-display m-0 max-w-[18ch] text-[clamp(1.8rem,3.4vw,2.5rem)]">
            {profile.name}
          </h1>
          <p className="m-0 max-w-[54ch] text-[18px] leading-[1.55]" style={{ color: "var(--ink-2)" }}>
            Department of Psychology, University of Southern California
          </p>
          <p className="u-label m-0">
            {profile.contact.email} · Los Angeles, CA
          </p>
        </div>
      </div>
    </div>
  );
}

function Rail({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="u-label tnum" style={{ color: "var(--ink-2)" }}>
        {label}
      </span>
      {sub && <span className="u-label leading-snug">{sub}</span>}
    </div>
  );
}

function Row({ e }: { e: Entry }) {
  return (
    <div
      className="grid gap-x-8 gap-y-3 border-t py-6 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_1fr]"
      style={{ borderColor: "var(--rule-2)" }}
    >
      <Rail label={e.dates} sub={e.where} />
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-1">
          <h3 className="m-0 text-[1.02rem] font-semibold tracking-[-0.008em]">
            {e.role}
          </h3>
          <p className="m-0 text-[15.5px]" style={{ color: "var(--ink-2)" }}>
            {e.org}
          </p>
          {e.meta && <p className="u-label m-0 normal-case leading-relaxed">{e.meta}</p>}
        </div>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {e.points.map((p) => (
            <li key={p} className="max-w-[64ch] text-[15.5px]">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Cv() {
  return (
    <Page current="/cv/">
      <Masthead />

      <Section first>
        <SectionHead>Education</SectionHead>
        <div className="flex flex-col">
          {education.map((ed) => (
            <div
              key={ed.school}
              className="grid gap-x-8 gap-y-3 border-t py-6 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_1fr]"
              style={{ borderColor: "var(--rule-2)" }}
            >
              <Rail label={ed.dates} sub={ed.where} />
              <div className="flex flex-col gap-1.5">
                <h3 className="m-0 text-[1.02rem] font-semibold tracking-[-0.008em]">
                  {ed.school}
                </h3>
                <p className="m-0 text-[15.5px]" style={{ color: "var(--ink-2)" }}>
                  {ed.degree}
                </p>
                <p className="u-label m-0 normal-case">{ed.points.join(" · ")}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead>Research interests</SectionHead>
        <dl className="m-0 flex flex-col">
          {interests.map((it) => (
            <div
              key={it.label}
              className="grid gap-x-8 gap-y-1 border-t py-4 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_1fr]"
              style={{ borderColor: "var(--rule-2)" }}
            >
              <dt className="u-label" style={{ color: "var(--ink-2)" }}>
                {it.label}
              </dt>
              <dd className="m-0 max-w-[62ch] text-[16px]" style={{ color: "var(--ink)" }}>
                {it.text}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <SectionHead>Research experience</SectionHead>
        <div className="flex flex-col">
          {research.map((e) => (
            <Row key={e.role + e.org} e={e} />
          ))}
        </div>
        <p className="m-0">
          <a href="/research/" className="u-hit font-mono text-[10.5px] tracking-[0.08em] uppercase">
            More on the Research page
          </a>
        </p>
      </Section>

      {KINDS.map((k) => (
        <Section key={k} id={k === "preprint" ? "publications" : k}>
          <SectionHead>{KIND_LABEL[k]}</SectionHead>
          {/* Reference-list form: hanging indent, authors first, link last. */}
          <ol className="m-0 flex list-none flex-col gap-4 p-0">
            {publications
              .filter((p) => p.kind === k)
              .map((p) => (
                <li
                  key={p.title + p.year}
                  className="max-w-[68ch] pl-[1.75rem] text-[15.5px] leading-relaxed [text-indent:-1.75rem]"
                >
                  <span style={{ color: "var(--ink)" }}>{p.authors}</span> ({p.year}).{" "}
                  <span style={{ color: "var(--ink)" }}>{p.title}</span>
                  {p.descriptor ? ` ${p.descriptor}` : ""}. {p.venue}.
                  {p.href && (
                    <>
                      {" "}
                      <a href={p.href}>{p.doi ? `https://doi.org/${p.doi}` : p.href}</a>
                    </>
                  )}
                </li>
              ))}
          </ol>
        </Section>
      ))}

      <Section id="software">
        <SectionHead>Research software</SectionHead>
        <div className="flex flex-col">
          {software.map((s) => (
            <Row
              key={s.name}
              e={{ role: s.name, org: s.tags, dates: s.dates, points: s.points }}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead>Fellowships and awards</SectionHead>
        <dl className="m-0 flex flex-col">
          {honors.map((h) => (
            <div
              key={h.name}
              className="grid gap-x-8 gap-y-1 border-t py-4 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_1fr]"
              style={{ borderColor: "var(--rule-2)" }}
            >
              <dt className="u-label tnum" style={{ color: "var(--ink-2)" }}>
                {h.year}
              </dt>
              <dd className="m-0 flex max-w-[62ch] flex-col gap-0.5 text-[15.5px]" style={{ color: "var(--ink)" }}>
                <span>{h.name}</span>
                {h.note && (
                  <span className="u-label normal-case leading-relaxed">{h.note}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <SectionHead>Clinical and service experience</SectionHead>
        <div className="flex flex-col">
          {service.map((e) => (
            <Row key={e.role + e.org} e={e} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead>Skills</SectionHead>
        <dl className="m-0 flex flex-col">
          {skills.map((s) => (
            <div
              key={s.group}
              className="grid gap-x-8 gap-y-1 border-t py-4 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_1fr]"
              style={{ borderColor: "var(--rule-2)" }}
            >
              <dt className="u-label" style={{ color: "var(--ink-2)" }}>
                {s.group}
              </dt>
              <dd className="m-0 max-w-[62ch] text-[15.5px]">{s.items}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </Page>
  );
}

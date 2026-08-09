import { Page, Section, SectionHead, SHELL } from "../components/Page";
import {
  certifications,
  education,
  honors,
  research,
  service,
  skills,
  type Entry,
} from "../content/cv";
import { profile } from "../content/profile";

/** The scroll's one committed region: ink field, paper type, once. */
function Masthead() {
  return (
    <div style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <div className={`${SHELL} py-[clamp(2.5rem,6vw,4rem)]`}>
        <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:gap-10">
          {/* Full colour, no grayscale-until-hover: that trick hides the
              subject and only pays off for people using a mouse. */}
          <img
            src="/portrait.webp"
            width={512}
            height={512}
            alt="Portrait of Chengdong (Peter) Zhou"
            className="w-[132px] shrink-0 rounded-[3px] sm:w-[176px]"
            style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
          />
        <div className="flex flex-col gap-5">
          <h1
            className="u-display m-0 max-w-[18ch] text-[clamp(1.8rem,3.4vw,2.5rem)]"
            style={{ color: "var(--paper)" }}
          >
            {profile.name}
          </h1>
          <p
            className="m-0 max-w-[54ch] text-[17px]"
            style={{ color: "var(--paper)", opacity: 0.82 }}
          >
            Computational psychiatry. Reward learning, anhedonia, and multimodal
            biomarkers of psychiatric state — acoustic prosody, MEG, fMRI — plus
            accessible and inclusive research design.
          </p>
          <p
            className="m-0 font-mono text-[10.5px] tracking-[0.08em] uppercase"
            style={{ color: "var(--paper)", opacity: 0.7 }}
          >
            {profile.contact.email} · Los Angeles, CA
          </p>
        </div>
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
        <SectionHead>Honors and awards</SectionHead>
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
              <dd className="m-0 max-w-[62ch] text-[15.5px]" style={{ color: "var(--ink)" }}>
                {h.name}
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
          <a href="/research/" className="font-mono text-[10.5px] tracking-[0.08em] uppercase">
            Publications and software
          </a>
        </p>
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

      <Section>
        <SectionHead>Clinical and service</SectionHead>
        <div className="flex flex-col">
          {service.map((e) => (
            <Row key={e.role + e.org} e={e} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead>Training and certifications</SectionHead>
        <ul className="m-0 flex list-none flex-col p-0">
          {certifications.map((c) => (
            <li
              key={c}
              className="max-w-[62ch] border-t py-3.5 text-[15.5px] first:border-t-0 first:pt-0"
              style={{ borderColor: "var(--rule-2)" }}
            >
              {c}
            </li>
          ))}
        </ul>
      </Section>
    </Page>
  );
}

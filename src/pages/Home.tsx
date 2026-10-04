import type React from "react";
import { Page, Section, SectionHead } from "../components/Page";
import { Benchmark } from "../components/Benchmark";
import { PraxisStrip } from "../components/Praxis";
import { profile, threads } from "../content/profile";
import { essays } from "../content/essays";
import { syllabus } from "../content/praxis";
import { publications, software } from "../content/cv";

export function Home() {
  const selected = [
    {
      kicker: software[0].dates,
      title: software[0].name,
      line: software[0].line,
      href: software[0].href,
      cta: "ClinicalWhisper on GitHub",
    },
    {
      kicker: syllabus.dates,
      title: syllabus.title,
      line: syllabus.line,
      href: syllabus.href,
      cta: `${syllabus.papers} papers, ${syllabus.modules} modules`,
    },
  ];

  return (
    <Page current="/">
      {/* The question. Name small, question large. */}
      <Section first id="benchmark">
        <div className="flex flex-col gap-4">
          {/* Sized so the question holds two lines from 1024px up.
              42px is the measured 3-line threshold at full container width. */}
          <h1 className="u-display rise m-0 text-[clamp(1.5rem,3.3vw,2.3rem)]">
            {profile.question}
          </h1>

          <p className="rise m-0 max-w-[54ch] text-[17.5px]" style={{ "--i": 1 } as React.CSSProperties}>
            In our preregistered benchmark it matched the scan:{" "}
            <span className="tnum" style={{ color: "var(--ink)" }}>
              0.63
            </span>{" "}
            AUC against{" "}
            <span className="tnum" style={{ color: "var(--ink)" }}>
              0.58
            </span>
            . Neither cleared the bar convincingly.
          </p>

          <div className="rise flex flex-wrap items-baseline gap-x-3 gap-y-1" style={{ "--i": 2 } as React.CSSProperties}>
            <span className="u-label" style={{ color: "var(--ink-2)" }}>
              {profile.name}
            </span>
            {profile.standing.map((s) => (
              <span key={s} className="flex items-baseline gap-3">
                <span aria-hidden="true" className="u-label" style={{ color: "var(--brass)" }}>
                  ·
                </span>
                <span className="u-label">{s}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="rise flex flex-wrap gap-2.5" style={{ "--i": 3 } as React.CSSProperties}>
          <a
            href={publications[0].href}
            className="rounded-[2px] px-5 py-3 font-mono text-[10.5px] tracking-[0.1em] uppercase no-underline transition-colors duration-200"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Read the preprint
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="rounded-[2px] border px-5 py-3 font-mono text-[10.5px] tracking-[0.1em] uppercase no-underline transition-colors duration-200"
            style={{ borderColor: "var(--rule)", color: "var(--ink)" }}
          >
            Email me
          </a>
        </div>

        <div className="rise" style={{ "--i": 4 } as React.CSSProperties}>
          <Benchmark />
        </div>
      </Section>

      {/* Three angles on one question. */}
      <Section id="threads">
        <div className="flex flex-col gap-5">
          <SectionHead>Three labs, one question, three angles on it.</SectionHead>
          <p className="u-measure m-0">{profile.throughline}</p>
        </div>

        <dl className="m-0 flex flex-col">
          {threads.map((t) => (
            <div
              key={t.key}
              className="row-hover grid grid-cols-[5.5rem_1fr] gap-x-5 gap-y-1.5 border-t py-5 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr] sm:gap-x-8"
              style={{ borderColor: "var(--rule-2)" }}
            >
              <dt className="flex flex-col gap-1.5">
                <span
                  className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase"
                  style={{ color: "var(--ink)" }}
                >
                  {t.title}
                </span>
                <span className="u-label leading-snug">{t.lab}</span>
              </dt>
              <dd className="m-0 flex flex-col items-start gap-2">
                <p className="m-0 max-w-[58ch] text-[15.5px]">{t.line}</p>
                {/* Unique link text: three links reading "Detail" are
                    meaningless to anyone listing links out of context. */}
                <a href={t.href} className="u-hit font-mono text-[10.5px] tracking-[0.08em] uppercase">
                  Read the {t.title.toLowerCase()} work
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Two objects, not cards: a repo and a preprint. */}
      <Section id="work">
        <SectionHead>What exists so far</SectionHead>
        <ol className="m-0 flex list-none flex-col p-0">
          {selected.map((s) => (
            <li
              key={s.title}
              className="row-hover grid gap-x-8 gap-y-3 border-t py-6 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]"
              style={{ borderColor: "var(--rule-2)" }}
            >
              <span className="u-label tnum" style={{ color: "var(--ink-2)" }}>
                {s.kicker}
              </span>
              <div className="flex flex-col items-start gap-2.5">
                <h3 className="m-0 max-w-[46ch] text-[1.06rem] leading-snug font-semibold tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="m-0 max-w-[62ch] text-[15.5px]">{s.line}</p>
                <a href={s.href} className="u-hit font-mono text-[10.5px] tracking-[0.08em] uppercase">
                  {s.cta}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* The group, as a strip: the full panel is on Research. */}
      <Section id="praxis">
        <PraxisStrip />
      </Section>

      {/* Writing, led by real sentences rather than summaries. */}
      <Section id="writing">
        <SectionHead>Writing</SectionHead>
        <ol className="m-0 flex list-none flex-col p-0">
          {essays.slice(0, 3).map((e) => (
            <li
              key={e.slug}
              className="row-hover grid gap-x-8 gap-y-3 border-t py-6 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]"
              style={{ borderColor: "var(--rule-2)" }}
            >
              <span className="u-label tnum" style={{ color: "var(--ink-2)" }}>
                {e.date}
              </span>
              <div className="flex flex-col items-start gap-3">
                <blockquote
                  className="m-0 max-w-[54ch] border-l-2 pl-5 text-[17.5px] leading-[1.55]"
                  style={{ borderColor: "var(--brass)", color: "var(--ink)" }}
                >
                  {e.pull}
                </blockquote>
                <a
                  href={`/writing/${e.slug}/`}
                  className="u-hit font-mono text-[10.5px] tracking-[0.08em] uppercase"
                >
                  {e.title}
                </a>
              </div>
            </li>
          ))}
        </ol>
        <p className="m-0">
          <a href="/writing/" className="u-hit font-mono text-[10.5px] tracking-[0.08em] uppercase">
            All four essays
          </a>
        </p>
      </Section>
    </Page>
  );
}

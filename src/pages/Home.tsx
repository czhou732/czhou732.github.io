import type React from "react";
import { Page, Section, SectionHead } from "../components/Page";
import { Benchmark } from "../components/Benchmark";
import { Methods, ReadBeforeCiting } from "../components/Caveats";
import { FootMark, Footnotes, Row, Side } from "../components/Margin";
import { profile, threads } from "../content/profile";
import { essays } from "../content/essays";
import { praxis, syllabus } from "../content/praxis";
import { permutations } from "../content/findings";
import { publications, software } from "../content/cv";

const stagger = (i: number) => ({ "--i": i }) as React.CSSProperties;

type Ref = {
  key: string;
  authors: string;
  year: string;
  title: string;
  venue: string;
  tags: { label: string; href: string }[];
};

/** Reference-list form. Everything here is read from the content files. */
function selectedWork(): Ref[] {
  const preprint = publications[0];
  const cw = software[0];
  return [
    {
      key: "preprint",
      authors: preprint.authors,
      year: preprint.year,
      title: preprint.title,
      venue: preprint.venue,
      tags: [
        { label: "DOI", href: preprint.href! },
        { label: "BibTeX", href: "/research/#cite" },
        { label: "OSF", href: profile.contact.osf },
      ],
    },
    {
      key: "clinicalwhisper",
      authors: "Zhou, C.",
      year: "2026",
      title: "ClinicalWhisper: a local-first pipeline for clinical interview audio",
      venue: "Open-source software, MIT licence. Zenodo 10.5281/zenodo.20559786",
      tags: [
        { label: "GitHub", href: cw.href },
        { label: "DOI", href: "https://doi.org/10.5281/zenodo.20559786" },
      ],
    },
    {
      key: "syllabus",
      authors: "Zhou, C.",
      year: "2026",
      title: syllabus.title,
      venue: `${syllabus.papers} papers, ${syllabus.modules} modules, ${syllabus.license}. Zenodo ${syllabus.doi}`,
      tags: [
        { label: "GitHub", href: syllabus.href },
        { label: "DOI", href: syllabus.doiHref },
      ],
    },
  ];
}

export function Home() {
  const refs = selectedWork();

  return (
    <Page current="/">
      {/* The question, a one-paragraph Summary, and the status in the margin. */}
      <Section first id="benchmark">
        <Row
          side={
            <Side label="Status">
              <p className="m-0" style={{ color: "var(--ink-2)" }}>
                Preprint on bioRxiv, not peer reviewed. Preregistered at{" "}
                <a href={profile.contact.osf}>osf.io/bsvrj</a> before the data were analysed.
              </p>
            </Side>
          }
        >
          {/* Sized so the question holds four lines at 375px and two or three at desktop. */}
          <h1 className="u-display rise m-0 max-w-[22ch] text-[clamp(1.5rem,4.2vw,2.55rem)] [font-stretch:112%]">
            {profile.question}
          </h1>

          <div className="rise flex flex-wrap items-baseline gap-x-3 gap-y-1" style={stagger(1)}>
            <span className="u-label" style={{ color: "var(--ink-2)" }}>
              {profile.name}
            </span>
            {profile.standing.map((s) => (
              <span key={s} className="flex items-baseline gap-3">
                <span aria-hidden="true" className="u-label" style={{ color: "var(--accent)" }}>
                  ·
                </span>
                <span className="u-label">{s}</span>
              </span>
            ))}
          </div>

          <div
            className="rise flex flex-col gap-2.5 border-t-2 pt-3"
            style={{ borderColor: "var(--ink)", ...stagger(2) }}
          >
            <span className="u-label" style={{ color: "var(--ink-2)" }}>
              Summary
            </span>
            <p className="m-0 max-w-[60ch] text-[19px] leading-[1.6]" style={{ color: "var(--ink)" }}>
              In our preregistered benchmark, voice reached{" "}
              <span className="tnum">{permutations.voice.auc.toFixed(2)}</span> AUC and the scan{" "}
              <span className="tnum">{permutations.bold.auc.toFixed(2)}</span>. Voice cleared
              chance by a narrow margin and the scan did not.
              <FootMark n={1} />
            </p>
          </div>

          <div className="rise flex flex-wrap gap-2.5" style={stagger(3)}>
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
        </Row>

        <Row side={<ReadBeforeCiting />}>
          <div className="rise" style={stagger(4)}>
            <Benchmark />
          </div>
          <Methods />
        </Row>
      </Section>

      {/* Three angles on one question. */}
      <Section id="threads" signal={1}>
        <Row
          side={
            <Side label="Why three">
              <p className="m-0" style={{ color: "var(--ink-2)" }}>
                Not spread thin. Three angles on one question, triangulating.
              </p>
            </Side>
          }
        >
          <SectionHead>Three labs, one question, three angles on it.</SectionHead>
          <p
            className="m-0 max-w-[40ch] text-[clamp(1.2rem,2.4vw,1.45rem)] leading-[1.45] font-semibold"
            style={{ color: "var(--ink)" }}
          >
            {profile.throughline}
          </p>

          <dl className="m-0 mt-2 flex flex-col">
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
                  <p className="m-0 max-w-[58ch] text-[17px] leading-[1.6]">{t.line}</p>
                  <a href={t.href} className="u-hit font-mono text-[10.5px] tracking-[0.08em] uppercase">
                    Read the {t.title.toLowerCase()} work
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Row>
      </Section>

      {/* Reference-list form: what exists, cited like it would be elsewhere. */}
      <Section id="work" signal={2}>
        <Row
          side={
            <Side label={praxis.name}>
              <p className="m-0" style={{ color: "var(--ink-2)" }}>
                I founded and lead PRAXIS, an undergraduate research group at USC. Faculty
                sponsor, Dr. Laurent Itti.{" "}
                <a href="/research/#praxis">What the group runs</a>, or{" "}
                <a href={praxis.href}>{praxis.display}</a>.
              </p>
            </Side>
          }
        >
          <SectionHead>Selected work</SectionHead>
          <ol className="m-0 flex list-none flex-col gap-4 p-0">
            {refs.map((r) => (
              <li
                key={r.key}
                className="max-w-[66ch] pl-[1.75rem] text-[16px] leading-[1.6] [text-indent:-1.75rem]"
              >
                <span style={{ color: "var(--ink)" }}>{r.authors}</span> ({r.year}).{" "}
                <i style={{ color: "var(--ink)" }}>{r.title}.</i> {r.venue}.
                <span className="ml-2 inline-flex gap-2 [text-indent:0]">
                  {r.tags.map((t) => (
                    <a
                      key={t.label}
                      href={t.href}
                      className="rounded-[2px] border px-1.5 py-0.5 font-mono text-[10px] tracking-[0.08em] uppercase no-underline"
                      style={{ borderColor: "var(--rule)" }}
                    >
                      {t.label}
                    </a>
                  ))}
                </span>
              </li>
            ))}
          </ol>
        </Row>
      </Section>

      {/* Writing, led by real sentences rather than summaries. */}
      <Section id="writing" signal={3}>
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
                  className="m-0 max-w-[54ch] border-l-2 pl-5 text-[19px] leading-[1.55] italic"
                  style={{ borderColor: "var(--accent)", color: "var(--ink)" }}
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

      <Section>
        <Row>
          <Footnotes
            items={[
              <>
                Permutation <i>p</i> = {permutations.voice.p} for voice (
                {permutations.voice.model.toLowerCase()}) and {permutations.bold.p} for fMRI (
                {permutations.bold.model.toLowerCase()}), both uncorrected. The 95% intervals
                overlap and the two are statistically non-inferior to each other, which is a
                statement about how modest both are.
              </>,
            ]}
          />
        </Row>
      </Section>
    </Page>
  );
}

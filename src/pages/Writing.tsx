import { Page, Section } from "../components/Page";
import { Prose } from "../components/Prose";
import { essays, essayBySlug } from "../content/essays";

export function Writing() {
  return (
    <Page current="/writing/">
      <Section first>
        <div className="flex flex-col gap-5">
          <h1 className="u-display m-0 max-w-[20ch] text-[clamp(1.7rem,3.1vw,2.2rem)]">
            Four essays, written in one semester.
          </h1>
          <p className="u-measure m-0">
            Two on the things I study from the outside — how ketamine gets
            reported, how attention gets sold. Two on the San Gabriel Valley,
            which is where I am from and the reason I think about who gets
            counted.
          </p>
        </div>
      </Section>

      <Section>
        <ol className="m-0 flex list-none flex-col p-0">
          {essays.map((e) => (
            <li
              key={e.slug}
              className="grid gap-x-8 gap-y-4 border-t py-8 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]"
              style={{ borderColor: "var(--rule-2)" }}
            >
              <div className="flex flex-col gap-1">
                <span className="u-label tnum" style={{ color: "var(--ink-2)" }}>
                  {e.date}
                </span>
                <span className="u-label tnum leading-snug">
                  {e.words.toLocaleString()} words
                </span>
              </div>

              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col gap-1.5">
                  <h2 className="m-0 text-[1.35rem] leading-tight font-semibold tracking-[-0.018em] [font-stretch:108%]">
                    <a href={`/writing/${e.slug}/`} className="no-underline">
                      {e.title}
                    </a>
                  </h2>
                  <p className="u-label m-0 normal-case">{e.subtitle}</p>
                </div>

                {/* A real sentence from the piece, at reading scale. */}
                <blockquote
                  className="m-0 max-w-[56ch] border-l-2 pl-5 text-[18px] leading-[1.55]"
                  style={{ borderColor: "var(--accent)", color: "var(--ink)" }}
                >
                  {e.pull}
                </blockquote>

                <a
                  href={`/writing/${e.slug}/`}
                  className="font-mono text-[10.5px] tracking-[0.08em] uppercase"
                >
                  Read {e.title}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </Page>
  );
}

export function EssayPage({ slug }: { slug: string }) {
  const essay = essayBySlug(slug);
  if (!essay) throw new Error(`Unknown essay: ${slug}`);

  return (
    <Page current="/writing/">
      <Section first>
        <div className="flex flex-col gap-5">
          <h1 className="u-display m-0 max-w-[24ch] text-[clamp(1.7rem,3.2vw,2.3rem)]">
            {essay.title}
          </h1>
          <p className="m-0 max-w-[54ch] text-[18px]" style={{ color: "var(--ink-2)" }}>
            {essay.subtitle}
          </p>
          <p className="u-label m-0 tnum normal-case">
            {essay.date} · {essay.words.toLocaleString()} words · WRIT 340,
            University of Southern California
          </p>
        </div>
      </Section>

      <Section>
        <Prose body={essay.body} />
        <p className="m-0 pt-2">
          <a
            href="/writing/"
            className="font-mono text-[10.5px] tracking-[0.08em] uppercase"
          >
            All essays
          </a>
        </p>
      </Section>
    </Page>
  );
}

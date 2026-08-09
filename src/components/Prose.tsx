/**
 * Renders an essay body. The markdown these files use is deliberately tiny:
 * blank-line-separated paragraphs, "## " for a section heading, and "FIG: "
 * for a figure caption. No parser dependency for three constructs.
 */
export function Prose({ body }: { body: string }) {
  const blocks = body.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-6 mb-0 max-w-[34ch] text-[1.18rem] leading-snug font-semibold tracking-[-0.014em] [font-stretch:106%]"
            >
              {block.slice(3)}
            </h2>
          );
        }
        if (block.startsWith("FIG: ")) {
          return (
            <figcaption
              key={i}
              className="m-0 max-w-[62ch] border-l-2 pl-4 font-mono text-[11.5px] leading-relaxed"
              style={{ borderColor: "var(--rule)", color: "var(--ink-3)" }}
            >
              {block.slice(5)}
            </figcaption>
          );
        }
        return (
          <p key={i} className="m-0 max-w-[68ch] text-[17px] leading-[1.72]">
            {block}
          </p>
        );
      })}
    </div>
  );
}

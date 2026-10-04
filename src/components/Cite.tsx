import { useRef, useState } from "react";
import { publications } from "../content/cv";

const pub = publications[0];

/** Built from cv.ts so the BibTeX cannot disagree with the reference list. */
const BIBTEX = `@article{zhou2026crossmodal,
  author  = {${pub.authors.replace(/, & /g, ", ").replace(/\., /g, ". and ").replace(/\. and &/g, ". and")}},
  title   = {${pub.title}},
  journal = {bioRxiv},
  year    = {${pub.year}},
  doi     = {${pub.doi}},
  note    = {Preprint, not peer reviewed}
}`;

/**
 * Cite block. The reference is plain text first; the copy button is an
 * enhancement, and it falls back to selecting the text when the clipboard API
 * is refused.
 */
export function Cite() {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const preRef = useRef<HTMLPreElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  async function copy() {
    const pre = preRef.current;
    try {
      await navigator.clipboard.writeText(BIBTEX);
      setState("copied");
    } catch {
      if (pre) {
        const r = document.createRange();
        r.selectNodeContents(pre);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(r);
      }
      setState("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 4000);
  }

  return (
    <div id="cite" className="flex scroll-mt-24 flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="u-label" style={{ color: "var(--ink-2)" }}>
          Cite the preprint
        </span>
        <button
          type="button"
          onClick={copy}
          className="cursor-pointer border px-3 py-2 font-mono text-[10.5px] tracking-[0.1em] uppercase"
          style={{ borderColor: "var(--rule)", color: "var(--ink)", background: "transparent", borderRadius: 2 }}
        >
          {state === "copied" ? "Copied" : state === "failed" ? "Press Cmd/Ctrl+C" : "Copy BibTeX"}
        </button>
        <span role="status" className="sr-only">
          {state === "copied" ? "BibTeX copied" : state === "failed" ? "Selected. Press Command or Control C to copy." : ""}
        </span>
      </div>
      <pre
        ref={preRef}
        className="m-0 overflow-x-auto border p-4 font-mono text-[11.5px] leading-relaxed"
        style={{ borderColor: "var(--rule-2)", background: "var(--paper-2)", color: "var(--ink-2)", borderRadius: 2 }}
      >
        <code>{BIBTEX}</code>
      </pre>
    </div>
  );
}

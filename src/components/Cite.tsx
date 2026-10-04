import { useRef, useState } from "react";

const BIBTEX = `@article{zhou2026crossmodal,
  author  = {Zhou, C. and Wu, M. and Xiang, Y. and Itti, L.},
  title   = {Cross-Modal Benchmarking of Acoustic Prosody and Ventral Striatal
             BOLD for Depression-Related Anhedonia Classification: A
             Pre-Registered Study with the ClinicalWhisper Pipeline},
  journal = {bioRxiv},
  year    = {2026},
  doi     = {10.64898/2026.06.08.728970},
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
    setTimeout(() => setState("idle"), 2200);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="u-label" style={{ color: "var(--ink-2)" }}>
          Cite the preprint
        </span>
        <button
          type="button"
          onClick={copy}
          className="cursor-pointer border px-3 py-2 font-mono text-[10.5px] tracking-[0.1em] uppercase"
          style={{ borderColor: "var(--rule)", color: "var(--ink)", background: "transparent", borderRadius: 2 }}
          aria-live="polite"
        >
          {state === "copied" ? "Copied" : state === "failed" ? "Press Cmd/Ctrl+C" : "Copy BibTeX"}
        </button>
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

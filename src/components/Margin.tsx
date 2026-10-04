import type { ReactNode } from "react";

/**
 * Paper-site layout: a reading column and a margin for sidenotes. Wide screens
 * put the note beside its paragraph; narrow ones fold it underneath, so
 * nothing is lost on a phone.
 */
export function Row({ children, side }: { children: ReactNode; side?: ReactNode }) {
  return (
    <div className="grid gap-x-14 gap-y-4 lg:grid-cols-[minmax(0,38rem)_minmax(0,15rem)] lg:items-start">
      <div className="flex min-w-0 flex-col gap-[clamp(1.1rem,2.6vw,1.6rem)]">{children}</div>
      {side}
    </div>
  );
}

export function Side({ label, children }: { label: string; children: ReactNode }) {
  return (
    <aside
      aria-label={label}
      className="flex flex-col gap-1.5 border-t pt-2.5 text-[14px] leading-[1.55] lg:mt-2"
      style={{ borderColor: "var(--rule)", color: "var(--ink-3)" }}
    >
      <span className="u-label" style={{ color: "var(--ink-2)" }}>
        {label}
      </span>
      {children}
    </aside>
  );
}

export function FootMark({ n }: { n: number }) {
  return (
    <sup className="fn-mark">
      <a href={`#fn-${n}`} id={`fnref-${n}`} className="no-underline" aria-label={`Footnote ${n}`}>
        {n}
      </a>
    </sup>
  );
}

export function Footnotes({ items }: { items: ReactNode[] }) {
  return (
    <ol
      className="m-0 flex max-w-[60ch] list-none flex-col gap-1.5 border-t p-0 pt-3 text-[14px] leading-[1.55]"
      style={{ borderColor: "var(--rule)", color: "var(--ink-3)" }}
    >
      {items.map((n, i) => (
        <li key={i} id={`fn-${i + 1}`} className="scroll-mt-24">
          <sup className="fn-mark mr-1.5" style={{ marginLeft: 0 }}>
            {i + 1}
          </sup>
          {n}{" "}
          <a href={`#fnref-${i + 1}`} aria-label="Back to text" className="no-underline">
            ↩
          </a>
        </li>
      ))}
    </ol>
  );
}

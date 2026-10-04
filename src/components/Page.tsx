import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { SignalRule } from "./SignalRule";
import { profile } from "../content/profile";

const BUILD_MONTH = __BUILD_MONTH__;

export const SHELL = "mx-auto max-w-[74rem] px-[clamp(1.15rem,5vw,4rem)]";

/** Section heading. No eyebrow above it: the heading is the label. */
export function SectionHead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`m-0 max-w-[26ch] text-[clamp(1.3rem,2.5vw,1.72rem)] leading-[1.14] font-semibold tracking-[-0.02em] [font-stretch:108%] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Section({
  id,
  children,
  first = false,
  signal,
}: {
  id?: string;
  children: ReactNode;
  first?: boolean;
  /** Seed for a signal rule drawn in place of the hairline above this section. */
  signal?: number;
}) {
  const rule = first ? "" : signal !== undefined ? "reveal relative" : "reveal border-t";
  return (
    <section
      id={id}
      className={`${SHELL} scroll-mt-24 py-[clamp(2.5rem,6vw,4rem)] ${rule}`}
      style={first || signal !== undefined ? undefined : { borderColor: "var(--rule-2)" }}
    >
      {signal !== undefined && <SignalRule seed={signal} />}
      <div className="flex flex-col gap-[clamp(1.5rem,3.5vw,2.4rem)]">{children}</div>
    </section>
  );
}

function Footer() {
  const c = profile.contact;
  const links = [
    { label: "Email", href: `mailto:${c.email}`, text: c.email },
    { label: "GitHub", href: c.github, text: "github.com/czhou732" },
    { label: "LinkedIn", href: c.linkedin, text: "linkedin.com/in/chengdong-zhou" },
    { label: "OSF", href: c.osf, text: "osf.io/bsvrj" },
  ];

  return (
    <footer
      className={`${SHELL} border-t py-[clamp(2.5rem,6vw,4rem)]`}
      style={{ borderColor: "var(--rule)" }}
    >
      <div className="flex flex-col gap-8">
        <SectionHead>Get in touch by email. I read all of it.</SectionHead>

        <dl className="m-0 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {links.map((l) => (
            <div key={l.label} className="flex flex-col gap-1">
              <dt className="u-label">{l.label}</dt>
              <dd className="m-0">
                <a href={l.href} className="text-[15px]">
                  {l.text}
                </a>
              </dd>
            </div>
          ))}
        </dl>

        <p className="u-label m-0 max-w-[52ch] leading-relaxed normal-case">
          {profile.name} · Los Angeles · Updated {BUILD_MONTH}
        </p>
      </div>
    </footer>
  );
}

export function Page({
  current,
  children,
}: {
  current: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="laidbg" aria-hidden="true" />
      <a href="#main" className="u-skip">
        Skip to content
      </a>
      <Nav current={current} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

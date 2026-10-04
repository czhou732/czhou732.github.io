import { profile } from "../content/profile";
import { praxis } from "../content/praxis";

/**
 * `Home` is hidden below 640px: the C·Z wordmark already goes home, and
 * dropping the duplicate is what buys PRAXIS its room on a phone.
 */
const ROUTES = [
  { label: "Home", href: "/", narrow: false },
  { label: "Research", href: "/research/", narrow: true },
  { label: "Writing", href: "/writing/", narrow: true },
  { label: "CV", href: "/cv/", narrow: true },
];

/**
 * Single line at every width, never a second row. Five destinations, which is
 * inside the working-memory limit, so there is no hamburger and no dropdown.
 *
 * PRAXIS is last and leaves the site, so it is set off by a rule and carries an
 * arrow: a nav item that navigates away should say so before it is clicked.
 */
export function Nav({ current = "/" }: { current?: string }) {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b backdrop-blur-[14px]"
      style={{
        borderColor: "var(--rule-2)",
        background: "color-mix(in srgb, var(--paper) 88%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-[74rem] items-center justify-between gap-6 px-[clamp(1.15rem,5vw,4rem)] py-3.5">
        <a
          href="/"
          aria-label="Home"
          className="-my-3 py-3 pr-3 font-mono text-[11px] font-medium tracking-[0.22em] uppercase no-underline"
          style={{ color: "var(--ink)" }}
        >
          {profile.initials}
        </a>

        {/* Gap floor is set by the 320px case: five items plus the divider
            only clear that width once the gaps drop below 0.85rem. */}
        <div className="flex items-center gap-[clamp(0.6rem,2.4vw,1.6rem)]">
          {ROUTES.map((r) => {
            const active = r.href === current;
            return (
              <a
                key={r.href}
                href={r.href}
                aria-current={active ? "page" : undefined}
                className={`-mx-1.5 -my-3 border-b px-1.5 pt-3 pb-3 font-mono text-[11px] tracking-[0.05em] no-underline transition-colors duration-200 hover:text-[color:var(--ink)] ${
                  r.narrow ? "" : "hidden sm:inline"
                }`}
                style={{
                  color: active ? "var(--ink)" : "var(--ink-3)",
                  borderColor: active ? "var(--brass)" : "transparent",
                }}
              >
                {r.label}
              </a>
            );
          })}

          <span
            aria-hidden="true"
            className="h-3.5 w-px"
            style={{ background: "var(--rule)" }}
          />

          <a
            href={praxis.href}
            className="-mx-1.5 -my-3 flex items-center gap-1 border-b px-1.5 pt-3 pb-3 font-mono text-[11px] font-medium tracking-[0.05em] no-underline"
            style={{ color: "var(--brass)", borderColor: "transparent" }}
          >
            {praxis.name}
            {/* Inline: U+2197 is outside the font subset we ship. */}
            <svg viewBox="0 0 10 10" width="8" height="8" aria-hidden="true" style={{ flex: "none" }}>
              <path
                d="M2.6 7.4 7.4 2.6M3.4 2.6h4v4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="square"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

import { profile } from "../content/profile";

const ROUTES = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research/" },
  { label: "Writing", href: "/writing/" },
  { label: "CV", href: "/cv/" },
];

/**
 * Single line at every width, never a second row. Four destinations, which is
 * inside the working-memory limit, so there is no hamburger and no dropdown.
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
          className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase no-underline"
          style={{ color: "var(--ink)" }}
        >
          {profile.initials}
        </a>

        <div className="flex items-center gap-[clamp(0.85rem,2.4vw,1.6rem)]">
          {ROUTES.map((r) => {
            const active = r.href === current;
            return (
              <a
                key={r.href}
                href={r.href}
                aria-current={active ? "page" : undefined}
                className="border-b pb-0.5 font-mono text-[11px] tracking-[0.05em] no-underline"
                style={{
                  color: active ? "var(--ink)" : "var(--ink-3)",
                  borderColor: active ? "var(--brass)" : "transparent",
                }}
              >
                {r.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

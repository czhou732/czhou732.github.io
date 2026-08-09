/**
 * Essays, written for WRIT 340 (Advanced Writing for the Social Sciences,
 * Prof. Carroll-Adler) in Spring 2026 and transcribed from the originals.
 *
 * Bodies live as markdown beside this file and are imported raw at build
 * time, so the prose stays editable as prose.
 */

const bodies = import.meta.glob("./essays/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export type Essay = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  sort: string;
  words: number;
  /** A real sentence from the piece, not a summary of it. */
  pull: string;
  body: string;
};

function bodyFor(slug: string): string {
  const key = `./essays/${slug}.md`;
  const raw = bodies[key];
  if (!raw) throw new Error(`Missing essay body: ${key}`);
  return raw;
}

function countWords(s: string): number {
  return s
    .split(/\n\n+/)
    .filter((b) => !b.startsWith("## ") && !b.startsWith("FIG: "))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

const meta = [
  {
    slug: "economics-of-attention",
    title: "The Economics of Attention",
    subtitle: "Architecture, fragmentation, and radicalization",
    date: "May 2026",
    sort: "2026-05-04",
    pull: "I tried an experiment last month. I opened Instagram and attempted to look at the first post on the screen without scrolling.",
  },
  {
    slug: "plasticity-paradox",
    title: "The Plasticity Paradox",
    subtitle: "Ethical concerns with ketamine treatment for depression",
    date: "May 2026",
    sort: "2026-05-07",
    pull: "So here is the question nobody seems to be asking: what is the patient doing during those 72 hours?",
  },
  {
    slug: "the-626",
    title: "The 626",
    subtitle: "How the San Gabriel Valley built belonging, and what it costs",
    date: "March 2026",
    sort: "2026-03-19",
    pull: "The same density that makes the SGV feel like home also traps people inside it.",
  },
  {
    slug: "third-spaces",
    title: "Third Spaces in the San Gabriel Valley",
    subtitle: "Dim sum halls, boba shops, and Oldenburg",
    date: "March 2026",
    sort: "2026-03-12",
    pull: "You are not just hanging out. You are hanging out in Chinese.",
  },
];

export const essays: Essay[] = meta
  .map((m) => {
    const body = bodyFor(m.slug);
    return { ...m, body, words: countWords(body) };
  })
  .sort((a, b) => (a.sort < b.sort ? 1 : -1));

export function essayBySlug(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}

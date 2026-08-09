/**
 * PRAXIS — the group he founded and leads.
 *
 * The group has its own site at uscpraxis.org. This file is the pointer to it,
 * not a second copy of it: everything here is a short fact or a link outward,
 * so the two sites cannot drift into disagreeing about the roster or the
 * programme. Facts reconciled against cv.ts research[0].
 */

export const praxis = {
  name: "PRAXIS",
  full: "Psychiatry Research, Analytics & eXperimental Innovation Society",
  tagline: "From theory into tools that reach patients.",

  href: "https://uscpraxis.org",
  display: "uscpraxis.org",

  /** Two sentences, his own framing: built to publish, not to practise. */
  line:
    "An undergraduate research group at USC working where machine learning meets clinical mental health. I founded it in February 2026 and lead it: we run original studies, preregister them, and publish what we find including the results that come back null.",

  /** Short values only. This block reads as an instrument panel, not prose. */
  facts: [
    { label: "Founded", value: "Feb 2026" },
    { label: "Host", value: "USC Dornsife" },
    { label: "Sponsor", value: "Dr. Laurent Itti" },
    { label: "My role", value: "Founder, project lead" },
  ],

  /** What the group actually runs. Each line is a thing with a schedule. */
  does: [
    "Original research applying machine learning to clinical populations, preregistered on OSF before the data are touched.",
    "A twenty-paper journal-club curriculum taking undergraduates through reinforcement learning and active inference.",
    "A biweekly speaker series, including researchers from the NIMH.",
    "Open-source code and computational psychiatry resources, so the methods can be checked by anyone who wants to check them.",
  ],
} as const;

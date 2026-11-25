/**
 * PRAXIS: the group he founded and leads.
 *
 * The group has its own site at uscpraxis.org. This file is the pointer to it,
 * not a second copy of it: everything here is a short fact or a link outward,
 * so the two sites cannot drift into disagreeing about the roster or the
 * programme. Facts reconciled against cv.ts research[0].
 */

export const praxis = {
  name: "PRAXIS",
  full: "Psychiatry Research, Analytics & eXperimental Innovation Society",

  href: "https://uscpraxis.org",
  display: "uscpraxis.org",

  /** Plain facts only (Peter, 2026-11-25: no taglines or AI-style framing). */
  line:
    "An undergraduate computational psychiatry research group at USC. I founded it in February 2026 and direct it.",

  /** Short values only. This block reads as an instrument panel, not prose. */
  facts: [
    { label: "Founded", value: "Feb 2026" },
    { label: "Registration", value: "Planned, Spring 2027" },
    { label: "Sponsor", value: "Dr. Laurent Itti" },
    { label: "My role", value: "Founder, director" },
  ],

  /** What the group actually runs. Each line is a thing with a schedule. */
  does: [
    "Original research applying machine learning to clinical populations, preregistered on OSF before the data are touched.",
    "A biweekly journal club on a curated twenty-paper syllabus, from the founding papers of the field through to algorithmic bias.",
    "A speaker series with researchers from USC, NIMH, Stanford, Yale, and Emory.",
    "Open-source code and teaching materials, published on GitHub and Zenodo.",
  ],
} as const;

/**
 * The curriculum, kept beside PRAXIS because it is a PRAXIS programme rather
 * than a personal side project.
 *
 * Counts are load-bearing: the repo README, the Zenodo record, the PRAXIS
 * syllabus page and this file all state twenty papers across five modules. If
 * the curriculum changes, all four move together or the claim stops checking
 * out for anyone who follows the link.
 */
export const syllabus = {
  title: "Computational Psychiatry: An Undergraduate Syllabus",
  papers: 20,
  modules: 5,
  dates: "Jun 2026 – present",

  href: "https://github.com/comp-psych/comp-psych-syllabus",
  display: "comp-psych/comp-psych-syllabus",
  doi: "10.5281/zenodo.20559875",
  doiHref: "https://doi.org/10.5281/zenodo.20559875",
  license: "CC BY 4.0",

  line: "The curriculum PRAXIS runs, curated to take an undergraduate from the founding papers of the field through reinforcement learning, Bayesian models of psychosis, and biomarker methodology to algorithmic bias in clinical prediction. Every reading is linked to its publisher record, English and Simplified Chinese, citable by DOI.",
} as const;

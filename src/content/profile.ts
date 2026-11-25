/**
 * Single source of truth for identity and contact.
 * Every page reads from here so the CV and the home page cannot drift apart.
 */

export const profile = {
  name: "Chengdong (Peter) Zhou",
  shortName: "Peter Zhou",
  initials: "C·Z",

  /** The first viewport is this sentence. Everything else is evidence. */
  question:
    "Can a five-minute voice recording detect anhedonia as accurately as a $500 brain scan?",

  /** Mono metadata line under the question. */
  standing: ["USC ’27", "NIH UGSP Scholar", "Los Angeles"],

  /**
   * The accessibility throughline, stated once, above the three threads.
   * It makes the argument without naming a family member's health: Peter chose the lighter wording on 2026-10-04. The personal story
   * belongs in statements and essays, where he controls the framing.
   */
  throughline:
    "Psychiatry still measures how people feel mostly by asking them, often on forms a blind patient cannot fill out. I work on measures that lean less on the patient narrating their own symptoms, starting with the voice.",

  contact: {
    email: "czhou732@usc.edu",
    emailAlt: "czpeterzhou@gmail.com",
    github: "https://github.com/czhou732",
    linkedin: "https://linkedin.com/in/chengdong-zhou",
    osf: "https://osf.io/4d6ey",
  },
} as const;

export type Thread = {
  key: string;
  title: string;
  lab: string;
  line: string;
  href: string;
};

/**
 * The three research threads. Lines are CV facts (Peter, 2026-11-25: plain wording).
 */
export const threads: Thread[] = [
  {
    key: "model",
    title: "Model",
    lab: "SAND Lab · USC",
    line: "In a Rescorla-Wagner simulation of anhedonia, lower choice consistency cut earned reward far more than a lower learning rate (28.5% vs. 3.1%).",
    href: "/research/#model",
  },
  {
    key: "signal",
    title: "Signal",
    lab: "iLab · USC Viterbi",
    line: "ClinicalWhisper, an open-source pipeline that analyzes clinical interview audio on the local machine, and a preregistered benchmark of voice against fMRI for anhedonia.",
    href: "/research/#signal",
  },
  {
    key: "circuit",
    title: "Circuit",
    lab: "NIMH · Experimental Therapeutics",
    line: "Lempel-Ziv complexity of source-localized MEG in 57 patients with depression; in exploratory analyses, insula broadband complexity tracked MADRS severity.",
    href: "/research/#circuit",
  },
];

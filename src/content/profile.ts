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
    osf: "https://osf.io/bsvrj",
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
 * Three angles on one question. His own framing: not spread thin, triangulating.
 */
export const threads: Thread[] = [
  {
    key: "model",
    title: "Model",
    lab: "Read Lab · USC",
    line: "A Rescorla-Wagner simulation of how anhedonia breaks reward learning: choices that stop following learned value cost far more than slower learning.",
    href: "/research/#model",
  },
  {
    key: "signal",
    title: "Signal",
    lab: "Itti Lab · USC Viterbi",
    line: "Whether that collapse is audible. An open-source pipeline that pulls acoustic biomarkers out of clinical interviews without the audio ever leaving the room.",
    href: "/research/#signal",
  },
  {
    key: "circuit",
    title: "Circuit",
    lab: "NIMH · Experimental Therapeutics",
    line: "What the circuit is doing while it happens. MEG source localization and Lempel-Ziv signal complexity in the insula, explored as a correlate of suicidal thoughts.",
    href: "/research/#circuit",
  },
];

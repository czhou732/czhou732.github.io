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
   * Public narrative approved: father's blindness, first-gen / SGV.
   */
  throughline:
    "My father has been legally blind from retinal atrophy since childhood, and his vision keeps getting worse. He cannot fill out a visual analog scale, which is how most of psychiatry still measures how a person feels. I build instruments that do not require the patient to be a reliable narrator of their own symptoms.",

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
    line: "A Rescorla-Wagner simulation of how reward learning collapses when the dopaminergic learning rate falls and effort stops being worth spending.",
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

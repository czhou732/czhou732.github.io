/**
 * Transcribed from Chengdong_Zhou_CV.docx, version of 2026-11-20
 * (vault: 05_Academics/Admin/Profession). Where the site and the CV disagree,
 * the CV wins; change the docx first, then this file.
 * The Research and CV pages both read from here so they cannot drift apart.
 *
 * Ford Foundation Predoctoral is deliberately absent: its final cohort was
 * 2024 and the programme is discontinued.
 */

export type Entry = {
  role: string;
  org: string;
  where?: string;
  dates: string;
  meta?: string;
  /** Which home-page thread this entry belongs under on Research. */
  thread?: "model" | "signal" | "circuit";
  points: string[];
};

export type Education = {
  school: string;
  where: string;
  dates: string;
  degree: string;
  points: string[];
};

export const education: Education[] = [
  {
    school: "University of Southern California",
    where: "Los Angeles, CA",
    dates: "Expected May 2027",
    degree: "Bachelor of Arts in Psychology",
    points: ["GPA 3.72 / 4.00"],
  },
  {
    school: "Arizona State University",
    where: "Barrett, The Honors College · Tempe, AZ",
    dates: "Aug 2023 – June 2025",
    degree: "Bachelor of Arts in Psychology (transferred to USC)",
    points: ["GPA 3.84 / 4.00"],
  },
];

/** Verbatim from the CV's two Research Interests lines. */
export const interests = [
  {
    label: "Conceptual",
    text: "Anhedonia and reward learning; whether task, brain, voice and daily-life measures of the same symptom agree, and why they diverge; prediction errors in depression.",
  },
  {
    label: "Methodological",
    text: "Computational modeling (reinforcement learning); multimodal measurement and its within-person reliability (speech and acoustic analysis, fMRI, MEG); machine learning; open-source research software.",
  },
];

export const honors: { year: string; name: string; note?: string }[] = [
  { year: "2026 – 2027", name: "NIH Undergraduate Scholarship Program (UGSP) Scholar" },
  { year: "2026 – 2027", name: "Commissioner Michael L. Williams Endowed Scholar" },
  {
    year: "Spring 2026",
    name: "Phi Beta Kappa, Epsilon of California",
    note: "Inducted junior year as a transfer student",
  },
  {
    year: "Summer 2026",
    name: "NIH Summer Internship Program (SIP)",
    note: "NIMH Experimental Therapeutics & Pathophysiology Branch; Mentors: Dr. Mark Kvarta & Dr. Samika Kumar; Branch Chief: Dr. Carlos Zarate",
  },
  {
    year: "Summer 2026",
    name: "Dornsife Experiential Learning Award",
    note: "Travel to the Computational Psychiatry Conference",
  },
  {
    year: "Spring 2024 – Spring 2026",
    name: "Dean’s List, five consecutive semesters (ASU and USC)",
  },
];

export const research: Entry[] = [
  {
    role: "Incoming NIH Summer Intern (UGSP)",
    org: "National Institutes of Health",
    where: "Bethesda, MD",
    dates: "Summer 2027",
    meta: "NIH Undergraduate Scholarship Program",
    points: [
      "Planned 10-week research placement as a UGSP Scholar; invited back by the NIMH ETPB lab.",
    ],
  },
  {
    role: "Founder & Director",
    org: "PRAXIS (Psychiatry Research, Analytics & eXperimental Innovation Society)",
    where: "Los Angeles, CA",
    dates: "Feb 2026 – present",
    meta: "Faculty Sponsor: Dr. Laurent Itti · Student organization registration planned (Spring 2027)",
    points: [
      "Founded and lead an undergraduate computational psychiatry research group (three officers, five research members) studying whether voice can serve as a passive, scalable measure of depression-related anhedonia (reduced pleasure and motivation), which clinicians now assess mainly by self-report.",
      // CREDIT CHECK (open question to Peter, 2026-11-25): the 4d6ey study was
      // run by the founding members, not the current team. Verbatim from the CV.
      "Pre-registered the group’s study (OSF; osf.io/4d6ey) and coordinated an analysis pipeline spanning acoustic analysis, self-report, and fMRI, built on ClinicalWhisper (see Research Software).",
      "Run a speaker series with researchers from USC, NIMH, Stanford, Yale, and Emory, and a biweekly journal club using an open-source syllabus I curated (20 papers; see Open Science). Website: uscpraxis.org.",
    ],
  },
  {
    role: "Undergraduate Research Assistant (paid, part-time)",
    org: "iLab (PI: Dr. Laurent Itti)",
    thread: "signal",
    where: "USC Viterbi School of Engineering",
    dates: "Oct 2025 – present",
    meta: "NIH-funded position",
    points: [
      "Designed and deployed a fully accessible survey pipeline using Qualtrics logic flows and custom scripting, ensuring WCAG compliance and collecting 493 responses from blind and visually impaired adults (224 retained after quality control and identity verification).",
      "First author of a manuscript in preparation comparing what 224 blind and low-vision adults need with what 43 products and 68 recent research papers offer; moving safely is a top need, yet only 5 of 43 products fully cover it.",
      "Led a pre-registered benchmark of acoustic prosody versus ventral-striatal fMRI for anhedonia classification, resulting in a first-author bioRxiv preprint (2026).",
      "Coordinate and moderate IRB-approved Zoom focus groups with blind and visually impaired adults (pilot May 2026; weekly tier-based sessions in Fall 2026); designed a mandatory Zoom pre-screening step after the pilot lost half its time to connection problems. Findings will inform live prototype testing of the AI assistive device.",
    ],
  },
  {
    role: "NIH Summer Intern",
    org: "NIMH Experimental Therapeutics & Pathophysiology Branch",
    thread: "circuit",
    where: "National Institutes of Health, Bethesda, MD",
    dates: "May 2026 – Aug 2026",
    meta: "Mentors: Dr. Mark Kvarta & Dr. Samika Kumar",
    points: [
      "Built a Lempel-Ziv complexity pipeline for source-localized MEG data from 57 patients with major depressive disorder (MNE-Python on NIH Biowulf, SWARM-parallelized), testing broadband and six frequency bands at the right subgenual ACC and right anterior insula.",
      "Exploratory analyses (not corrected for multiple comparisons) linked insula broadband complexity to MADRS severity and insula delta-band complexity to a suicidal-thoughts factor.",
      "Analyses contribute to a planned multimodal NIMH study (see Manuscripts in Preparation).",
    ],
  },
  {
    role: "Directed Research Student",
    org: "SAND Lab, Social Affective Neuroscience of Decision-making (PI: Dr. Stephen Read)",
    thread: "model",
    where: "USC Department of Psychology",
    dates: "Oct 2025 – May 2026",
    meta: "PSYC 490X Independent Research",
    points: [
      "Built a Rescorla-Wagner reinforcement learning simulation with self-derived parameters (α = dopaminergic learning rate; β = inverse temperature, how strongly learned values drive choice), modeling how reward-learning dynamics collapse under anhedonia. Simulations showed that lower choice consistency cut earned reward far more than a lower learning rate (28.5% vs. 3.1%).",
      "Developed a formal parameter framework mapping circuit-level variables (LHb-VTA pathway) to RL parameters and their behavioral predictions, and simulated circuit-level treatment effects (ketamine, pramipexole, rTMS, psilocybin).",
      "Synthesized literature on the LHb-VTA pathway and mTOR signaling to support hypothesis generation for studies on rapid-acting antidepressants (e.g., ketamine).",
    ],
  },
];

/** CV sections, in the CV's order. */
export type RefKind = "preprint" | "open-science" | "in-prep" | "presented";

export type Publication = {
  authors: string;
  year: string;
  title: string;
  /** Bracketed descriptor, APA style, e.g. "[Pre-registration]". */
  descriptor?: string;
  venue: string;
  kind: RefKind;
  href?: string;
  doi?: string;
};

export const KIND_LABEL: Record<RefKind, string> = {
  preprint: "Preprints",
  "open-science": "Open science",
  "in-prep": "Manuscripts in preparation",
  presented: "Conference presentations",
};

const FOUR = "Zhou, C., Wu, M., Xiang, Y., & Itti, L.";
const BENCH =
  "Cross-Modal Benchmarking of Acoustic Prosody and Ventral Striatal BOLD for Depression-Related Anhedonia Classification";
const DOPA =
  "The dopaminergic voice: Acoustic prosody vs. ventral striatal BOLD activation for anhedonia classification";

export const publications: Publication[] = [
  {
    authors: "Zhou, C., & Yu, J.",
    year: "2026",
    title: "ClinicalWhisper: A privacy-first local pipeline for multimodal clinical speech analysis",
    descriptor: "[To be submitted to the Journal of Open Source Software]",
    venue: "Zenodo",
    kind: "preprint",
    doi: "10.5281/zenodo.24286718",
    href: "https://doi.org/10.5281/zenodo.24286718",
  },
  {
    authors: FOUR,
    year: "2026",
    title: `${BENCH}: A Pre-Registered Study with the ClinicalWhisper Pipeline`,
    venue: "bioRxiv",
    kind: "preprint",
    doi: "10.64898/2026.06.08.728970",
    href: "https://doi.org/10.64898/2026.06.08.728970",
  },
  {
    authors: "Zhou, C., et al.",
    year: "2026",
    title:
      "The dopaminergic voice: Cross-modal benchmarking of acoustic prosody and ventral striatal BOLD for anhedonia classification",
    descriptor: "[Pre-registration]",
    venue: "OSF",
    kind: "open-science",
    href: "https://osf.io/4d6ey",
  },
  {
    authors: "Zhou, C.",
    year: "2026",
    title:
      "Does voice track emotion prediction errors or mood level? An exploratory n-of-1 intensive longitudinal pilot",
    descriptor: "[Pre-registration]",
    venue: "OSF",
    kind: "open-science",
    href: "https://osf.io/ja4ng",
  },
  {
    authors: "Zhou, C.",
    year: "2026",
    title: "Computational psychiatry: An undergraduate syllabus",
    descriptor: "[Curated syllabus, 20 papers]",
    venue: "Zenodo",
    kind: "open-science",
    doi: "10.5281/zenodo.20559875",
    href: "https://doi.org/10.5281/zenodo.20559875",
  },
  {
    authors: "Zhou, C.",
    year: "2026",
    title:
      "anhedonia-rl-simulation: A Rescorla-Wagner framework for dissociating consummatory and motivational anhedonia (Version 1.0.0)",
    descriptor: "[Computer software]",
    venue: "Zenodo",
    kind: "open-science",
    doi: "10.5281/zenodo.20559790",
    href: "https://doi.org/10.5281/zenodo.20559790",
  },
  {
    authors: "Zhou, C., et al.",
    year: "in preparation",
    title: "Shared needs, scattered solutions: AI visual assistance for blind and low-vision adults",
    descriptor: "[working title]",
    venue: "Manuscript in preparation",
    kind: "in-prep",
  },
  {
    authors: "Kumar, S., et al. (including Zhou, C., middle author)",
    year: "in preparation",
    title:
      "Multimodal NIMH study of resting-state MEG with sleep and circadian measures in depression",
    descriptor: "[manuscript not yet titled]",
    venue: "MEG analyses complete; sleep and circadian analyses ongoing",
    kind: "in-prep",
  },
  {
    authors: "Zhou, C., Kumar, S., Gilbert, J., Zarate, C., Jr., Ballard, E., & Kvarta, M.",
    year: "2026, August",
    title: "Characterizing suicidality using band-specific resting-state MEG neural complexity",
    venue: "Poster presented at NIH Summer Poster Day, Bethesda, MD",
    kind: "presented",
  },
  {
    authors: FOUR,
    year: "2026, July",
    title: BENCH,
    venue:
      "Poster presented at the Computational Psychiatry Conference (CPC), Yale University, New Haven, CT",
    kind: "presented",
  },
  {
    authors: FOUR,
    year: "2026, May",
    title: DOPA,
    venue:
      "Poster presented by M. Wu and Y. Xiang at the California Neurotechnology Conference, Berkeley, CA",
    kind: "presented",
  },
  {
    authors: FOUR,
    year: "2026, April",
    title: DOPA,
    venue: "Poster presented at the 27th USC Undergraduate Symposium, Los Angeles, CA",
    kind: "presented",
  },
  {
    authors: "Zhou, C.",
    year: "2025, November",
    title: "Attentive AI visual aid for persons with visual impairment",
    venue:
      "Poster presented at The Undergraduate Research Symposium, Trojan Research Association, Los Angeles, CA",
    kind: "presented",
  },
];

/** The bioRxiv preprint: the home page, the BibTeX block and Fig. 1 cite it. */
export const biorxiv = publications.find((p) => p.doi === "10.64898/2026.06.08.728970")!;
/** The n-of-1 preregistration. Design only: the study is blind until analysis. */
export const nofOne = publications.find((p) => p.href === "https://osf.io/ja4ng")!;
/** The ClinicalWhisper software paper. */
export const cwPaper = publications.find((p) => p.doi === "10.5281/zenodo.24286718")!;

export const software = [
  {
    name: "ClinicalWhisper",
    tags: "Python, NLP, Automation",
    dates: "Jan 2026 – present",
    href: "https://github.com/czhou732/Clinical-Whisper-Pipeline",
    doi: "10.5281/zenodo.20559786",
    points: [
      "Engineered a local-first pipeline for sensitive clinical interview audio: joint transcription and diarization (MOSS-Transcribe-Diarize), acoustic features (OpenSMILE eGeMAPSv02), and local LLM scoring (Llama-3-8B).",
      "On held-out test sentences, its de-identification step caught 98% of identifiers, compared with 89% for OpenMed and 74% for Presidio.",
      "Designed for fully on-device processing so audio, transcripts, and results never leave the machine, supporting IRB data-privacy requirements; LLM scores are documented as not yet clinically validated.",
      "Open-sourced on GitHub (Zenodo DOI: 10.5281/zenodo.20559786); software paper on Zenodo (see Preprints). First-author preprint on bioRxiv (10.64898/2026.06.08.728970): pre-registered comparison of acoustic prosody vs. ventral-striatal fMRI for anhedonia classification (n = 142; voice AUC 0.61 pre-registered, 0.63 with a larger feature set; fMRI at chance).",
      "Evaluated a public voice depression model (Kintsugi DAM 3.1) on released scores from 7,034 people; its score tracked low mood about twice as strongly as anhedonia (exploratory).",
    ],
  },
];

export const skills = [
  {
    group: "Programming",
    items: "Python (scikit-learn, pandas, NumPy), Bash/Shell, Git/GitHub, LaTeX/Overleaf",
  },
  {
    group: "Machine learning & modeling",
    items: "Reinforcement-learning simulation (Rescorla-Wagner), classification (logistic regression, random forest, gradient-boosted trees), cross-validation and permutation testing",
  },
  {
    group: "Speech & audio",
    items: "Acoustic feature extraction (OpenSMILE eGeMAPS), on-device transcription and diarization (ClinicalWhisper)",
  },
  {
    group: "Neuroimaging",
    items: "MEG signal-complexity analysis (virtual electrodes, band-pass/Hilbert envelope, Lempel-Ziv complexity)",
  },
  {
    group: "LLMs & HPC",
    items: "Local LLM inference (Ollama, MLX); high-performance computing (NIH Biowulf, Slurm)",
  },
  {
    group: "Statistics & research tools",
    items: "SPSS (GLM, ANOVA, regression), Qualtrics (scaled deployment), OSF (pre-registration), iSTAR (IRB); CITI certified in human subjects research and Responsible Conduct of Research",
  },
  { group: "Languages", items: "English (native/fluent), Mandarin (native), Spanish (intermediate)" },
];

export const service: Entry[] = [
  {
    role: "Crisis Counselor",
    org: "Crisis Text Line",
    dates: "Feb 2024 – present",
    points: [
      "Supported 200+ texters in crisis over 200+ volunteer hours via SMS; typically 2 concurrent conversations and about 5 texters per shift.",
    ],
  },
  {
    role: "High-Impact Academic Tutor",
    org: "Step Up Tutoring",
    dates: "Sep 2025 – Mar 2026",
    points: [
      "Delivered weekly one-on-one tutoring to underserved students; designed personalized, data-informed lesson plans to boost reading and math comprehension.",
    ],
  },
  {
    role: "Registered Behavior Technician (RBT)",
    org: "Kyo",
    dates: "Aug 2024 – Oct 2024",
    points: [
      "Implemented ABA interventions (DTT/NET) for children with autism spectrum disorder; tracked behavioral data and documented goal mastery.",
    ],
  },
  {
    role: "Summer Camp Counselor",
    org: "The H.E.A.R.T. Center",
    dates: "Summer 2024",
    points: [
      "Facilitated social-emotional learning for 30+ neurodivergent children; managed behavioral de-escalation.",
    ],
  },
];

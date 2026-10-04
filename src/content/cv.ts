/**
 * Transcribed from Chengdong_Zhou_CV.docx, version of 2026-09-16
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
  points: string[];
};

export type Education = {
  school: string;
  where: string;
  dates: string;
  degree: string;
  points: string[];
  coursework?: string;
};

export const education: Education[] = [
  {
    school: "University of Southern California",
    where: "Los Angeles, CA",
    dates: "Expected May 2027",
    degree: "B.A. Psychology",
    points: [
      "GPA 3.72 / 4.00",
      "Phi Beta Kappa, Epsilon of California — inducted Spring 2026, junior year, as a transfer student",
    ],
    coursework:
      "Behavioral Neuroscience, Statistics (PSYC 274L), Psychological Disorders, Experimental Research Methods (PSYC 314), Origins of the Mind, Neural Network Models (PSYC 450, in progress), Directed Research (PSYC 490X)",
  },
  {
    school: "Arizona State University",
    where: "Barrett, The Honors College · Tempe, AZ",
    dates: "Aug 2023 – Jun 2025",
    degree: "B.A. Psychology (transferred to USC)",
    points: ["GPA 3.84 / 4.00", "Dean’s List, Spring 2024 – Spring 2025"],
  },
];

/** Verbatim from the CV's Research Interests line. */
export const interests =
  "Computational psychiatry; reward learning, anhedonia, and dopaminergic dysfunction; reinforcement-learning models of mood and motivation; multimodal biomarkers of psychiatric states (acoustic prosody, MEG/fMRI); neural oscillations and translational mechanisms of rapid-acting antidepressants; accessible and inclusive research design.";

export const honors = [
  { year: "2026–27", name: "NIH Undergraduate Scholarship Program (UGSP) Scholar" },
  { year: "2026–27", name: "Commissioner Michael L. Williams Endowed Scholar" },
  { year: "2026", name: "Phi Beta Kappa, Epsilon of California" },
  {
    year: "2026",
    name: "NIH Summer Internship Program Fellow — NIMH Experimental Therapeutics & Pathophysiology Branch",
  },
  { year: "2026", name: "Dornsife Experiential Learning Award" },
  { year: "2024–25", name: "Dean’s List, Arizona State University (Spring 2024 – Spring 2025)" },
];

export const research: Entry[] = [
  {
    role: "Founder & Project Lead",
    org: "PRAXIS",
    where: "University of Southern California",
    dates: "Feb 2026 – present",
    meta: "Psychiatry Research, Analytics & eXperimental Innovation Society · Faculty sponsor: Dr. Laurent Itti",
    points: [
      "Founded and led an undergraduate computational neuroscience research group investigating acoustic biomarkers of depression through the dopaminergic reward system.",
      "Preregistered the study on the Open Science Framework (osf.io/bsvrj) and coordinated a multi-stream analysis pipeline spanning acoustic analysis, self-report, and fMRI.",
      "Public launch in Fall 2026 with three officers, a speaker series with researchers from USC, NIMH, Stanford, Yale, and Emory, and a biweekly journal club.",
      "Developed ClinicalWhisper, an open-source, on-device clinical speech analysis pipeline used across the group’s research streams.",
    ],
  },
  {
    role: "NIH Summer Intern",
    org: "NIMH Experimental Therapeutics & Pathophysiology Branch",
    where: "National Institutes of Health, Bethesda, MD",
    dates: "May 2026 – Aug 2026",
    meta: "Mentors: Dr. Mark Kvarta & Dr. Samika Kumar · Branch Chief: Dr. Carlos Zarate",
    points: [
      "Built a Lempel-Ziv complexity pipeline for source-localized MEG data from 57 patients with major depressive disorder (MNE-Python on NIH Biowulf, SWARM-parallelized), testing broadband and six frequency bands at the right subgenual ACC and right anterior insula.",
      "Exploratory analyses, not corrected for multiple comparisons, linked insula broadband complexity to MADRS severity and insula delta-band complexity to a suicidal-thoughts factor. The work contributes to a planned multimodal NIMH study (manuscript in preparation; middle author).",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "iLab, Visual & Computational Neuroscience",
    where: "USC Viterbi School of Engineering",
    dates: "Oct 2025 – present",
    meta: "PI: Dr. Laurent Itti · Paid, part-time, NIH-funded",
    points: [
      "Designed and deployed a fully accessible survey pipeline using Qualtrics logic flows and custom scripting, ensuring WCAG compliance and collecting 493 responses from blind and visually impaired adults (291 retained after a two-stage quality-control filter).",
      "First author of a review paper in preparation on vision-based assistive technology, informed by the survey, with collaborators at Penn State University.",
      "Led a pre-registered benchmark of acoustic prosody versus ventral-striatal fMRI for anhedonia classification, resulting in a first-author bioRxiv preprint (2026).",
      "Coordinate and moderate IRB-approved Zoom focus groups with blind and visually impaired adults (pilot May 2026; monthly tier-based sessions in Fall 2026). Findings will inform live prototype testing of the AI assistive device.",
    ],
  },
  {
    role: "Directed Research Fellow",
    org: "Depression, Neurobiology, and Social Cognition Lab",
    where: "USC Department of Psychology",
    dates: "Oct 2025 – present",
    meta: "PI: Dr. Stephen Read · PSYC 490X",
    points: [
      "Built a Rescorla-Wagner reinforcement learning simulation with self-derived parameters (α as dopaminergic learning rate, β as volitional effort in the inverse temperature), modelling how reward learning collapses under anhedonia.",
      "Developed a formal parameter framework mapping circuit-level variables (LHb-VTA pathway) to RL parameters and their behavioural predictions, and simulated circuit-level treatment effects (ketamine, pramipexole, rTMS).",
      "Synthesised literature on the LHb-VTA pathway and mTOR signalling to support hypothesis generation for studies on rapid-acting antidepressants such as ketamine.",
    ],
  },
];

/**
 * Teaching. Kept separate from research because PhD committees read it as a
 * separate axis, and because designing a curriculum is a different claim from
 * running a study.
 */
export const teaching: Entry[] = [
  {
    role: "Curriculum designer and journal-club lead",
    org: "PRAXIS — Computational Psychiatry",
    where: "University of Southern California",
    dates: "Jun 2026 – present",
    meta: "Computational Psychiatry: An Undergraduate Syllabus · CC BY 4.0 · doi 10.5281/zenodo.20559875",
    points: [
      "Designed a twenty-paper, five-module curriculum taking undergraduates from the founding papers of computational psychiatry through reinforcement learning, Bayesian models of psychosis, and biomarker methodology to algorithmic bias in clinical prediction.",
      // Adopted and scheduled, not yet delivered: the first cohort runs Fall
      // 2026. Say "adopted", not "runs", until there is a cohort to point at.
      "Adopted as the PRAXIS journal-club curriculum for Fall 2026, running as nine sessions across the semester.",
      "Published open access under CC BY 4.0 with a Zenodo DOI. Every reading is linked to its publisher record and exportable as BibTeX taken from that record rather than typed by hand.",
      "Released bilingually in English and Simplified Chinese to lower the entry cost for students reading the literature in a second language.",
    ],
  },
];

export type Publication = {
  authors: string;
  year: string;
  title: string;
  venue: string;
  status: "preprint" | "in-prep" | "presented";
  href?: string;
  doi?: string;
};

const FOUR = "Zhou, C., Wu, M., Xiang, Y., & Itti, L.";
const BENCH =
  "Cross-Modal Benchmarking of Acoustic Prosody and Ventral Striatal BOLD for Depression-Related Anhedonia Classification";

export const publications: Publication[] = [
  {
    authors: FOUR,
    year: "2026",
    title: `${BENCH}: A Pre-Registered Study with the ClinicalWhisper Pipeline`,
    venue: "bioRxiv preprint, not peer reviewed",
    status: "preprint",
    doi: "10.64898/2026.06.08.728970",
    href: "https://doi.org/10.64898/2026.06.08.728970",
  },
  {
    authors: "Zhou, C., et al.",
    year: "In preparation",
    title:
      "Vision-based assistive devices: A review informed by a survey of blind and visually impaired users [working title]",
    venue: "Manuscript in preparation, first author",
    status: "in-prep",
  },
  {
    authors: FOUR,
    year: "Jul 2026",
    title: BENCH,
    venue: "Poster, Computational Psychiatry Conference, Yale University",
    status: "presented",
  },
  {
    authors: "Zhou, C., Kumar, S., Gilbert, J., Zarate, C., Jr., Ballard, E., & Kvarta, M.",
    year: "Aug 2026",
    title: "Characterizing suicidality using band-specific resting-state MEG neural complexity",
    venue: "Poster, NIH Summer Poster Day, Bethesda, MD",
    status: "presented",
  },
  {
    authors: "Zhou, C.",
    year: "Apr 2026",
    title:
      "The dopaminergic voice: Acoustic prosody vs. ventral striatal BOLD activation for anhedonia classification",
    venue: "Poster, 27th USC Undergraduate Symposium",
    status: "presented",
  },
  {
    authors: "Zhou, C.",
    year: "Nov 2025",
    title: "Attentive AI visual aid for persons with visual impairment",
    venue: "Poster, Trojan Research Association Undergraduate Research Symposium",
    status: "presented",
  },
];

export const software = [
  {
    name: "ClinicalWhisper",
    dates: "Jan 2026 – present",
    href: "https://github.com/czhou732/Clinical-Whisper-Pipeline",
    line: "Local-first pipeline for sensitive clinical interview audio: joint transcription and diarization, OpenSMILE eGeMAPSv02 acoustic features, and local LLM scoring that is documented as not yet clinically validated.",
    points: [
      "Designed for fully on-device processing, so audio, transcripts, and results never leave the machine, supporting IRB data-privacy requirements.",
      "Open-sourced on GitHub (Zenodo DOI 10.5281/zenodo.20559786). Used across the PRAXIS research streams and installed by researchers in the Rutledge Lab at Yale for evaluation on long clinical interviews.",
    ],
  },
];

export const skills = [
  {
    group: "Programming",
    items: "Python (scikit-learn, pandas, NumPy), Bash/Shell, Git/GitHub, LaTeX/Overleaf",
  },
  {
    group: "Modelling",
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
  { group: "LLMs & HPC", items: "Local LLM inference (Ollama, MLX); NIH Biowulf, Slurm" },
  {
    group: "Statistics & tools",
    items: "SPSS (GLM, ANOVA, regression), Qualtrics (scaled deployment), OSF (pre-registration), iSTAR (IRB)",
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
    role: "Registered Behavior Technician",
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

export const certifications = [
  "Responsible Conduct of Research — USC (CITI Program)",
  "Social-Behavioral Human Subjects Research — USC (CITI Program)",
  "Nonviolent Crisis Intervention, Blue Card — Crisis Prevention Institute",
  "Certified Personal Trainer (NASM-CPT) — National Academy of Sports Medicine",
];

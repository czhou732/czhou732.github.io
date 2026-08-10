/**
 * Transcribed from Chengdong_Zhou_CV.docx (vault: 05_Academics/Admin/Profession).
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

export const education = [
  {
    school: "University of Southern California",
    where: "Los Angeles, CA",
    dates: "Expected May 2027",
    degree: "B.A. Psychology, Neuroscience & Clinical focus",
    points: [
      "GPA 3.92 / 4.00",
      "Phi Beta Kappa, Epsilon of California — inducted Spring 2026, junior year",
    ],
  },
  {
    school: "Arizona State University",
    where: "Barrett, The Honors College · Tempe, AZ",
    dates: "Aug 2023 – Jun 2025",
    degree: "B.A. Psychology (transferred to USC)",
    points: ["GPA 3.84 / 4.00", "Dean’s List, Spring 2024 – Fall 2025"],
  },
];

export const honors = [
  { year: "2026–27", name: "NIH Undergraduate Scholarship Program (UGSP) Scholar" },
  { year: "2026–27", name: "Commissioner Michael L. Williams Endowed Scholar" },
  { year: "2026", name: "Phi Beta Kappa, Epsilon of California" },
  {
    year: "2026",
    name: "NIH Summer Internship Program Fellow — NIMH Experimental Therapeutics & Pathophysiology Branch",
  },
  { year: "2026", name: "Dornsife Experiential Learning Award" },
  { year: "2024–25", name: "Dean’s List, Arizona State University" },
];

export const research: Entry[] = [
  {
    role: "Founder & Project Lead",
    org: "PRAXIS",
    where: "University of Southern California",
    dates: "Feb 2026 – present",
    meta: "Psychiatry Research, Analytics & eXperimental Innovation Society · Faculty sponsor: Dr. Laurent Itti",
    points: [
      "Founded and lead an undergraduate computational neuroscience group investigating acoustic biomarkers of depression through the dopaminergic reward system.",
      "Preregistered the study on OSF (osf.io/4d6ey) and coordinated a multi-stream pipeline spanning acoustic analysis, self-report, and fMRI.",
      "Recruited and manage two undergraduate research assistants across the acoustic and neuroimaging streams.",
      "Built ClinicalWhisper, the open-source air-gapped transcription pipeline the group runs on sensitive clinical interviews.",
    ],
  },
  {
    role: "NIH Summer Intern",
    org: "NIMH Experimental Therapeutics & Pathophysiology Branch",
    where: "National Institutes of Health, Bethesda, MD",
    dates: "May 2026 – present",
    meta: "PIs: Dr. Mark Kvarta & Dr. Samika Kumar",
    points: [
      "Building source-localization pipelines for resting-state MEG analyses of mood-disorder neural biomarkers.",
      "Working on gamma-band spectral power and signal complexity in the insula as candidate markers of suicidal ideation.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Visual & Computational Neuroscience Lab",
    where: "USC Viterbi School of Engineering",
    dates: "Oct 2025 – present",
    meta: "PI: Dr. Laurent Itti",
    points: [
      "Designed and deployed a fully accessible survey pipeline in Qualtrics with custom scripting, WCAG compliant, enabling participation from 291 visually impaired respondents.",
      "First-authoring a review paper on AI-based visual assistive technology proposing a composable AI primitives framework, with collaborators at Penn State.",
      "Analysed the NSF and NIH funding landscape to identify deployment and sustainability pathways for AI visual aids.",
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
      "Developed a formal framework mapping LHb-VTA circuit variables to RL parameters and their behavioural predictions, now the central analytical contribution to the lab’s review manuscript.",
      "Synthesised literature on the LHb-VTA pathway and mTOR signalling to support hypothesis generation on rapid-acting antidepressants.",
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
      "Runs as the PRAXIS journal club across the fall semester, and is the reading sequence new members are trained on.",
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
  status: "published" | "in-prep" | "presented";
  href?: string;
  doi?: string;
};

export const publications: Publication[] = [
  {
    authors: "Zhou, C.",
    year: "2026",
    title:
      "Cross-Modal Benchmarking of Acoustic Prosody and Ventral Striatal BOLD for Depression-Related Anhedonia Classification",
    venue: "bioRxiv",
    status: "published",
    doi: "10.64898/2026.06.08.728970",
    href: "https://doi.org/10.64898/2026.06.08.728970",
  },
  {
    authors: "Zhou, C., et al.",
    year: "In preparation",
    title:
      "Composable AI primitives for visual assistive devices: A needs-based review informed by 291 blind and visually impaired users",
    venue: "Manuscript in preparation",
    status: "in-prep",
  },
  {
    authors: "Zhou, C.",
    year: "Jul 2026",
    title:
      "Cross-Modal Benchmarking of Acoustic Prosody and Ventral Striatal BOLD for Depression-Related Anhedonia Classification",
    venue: "Computational Psychiatry Conference, Yale University",
    status: "presented",
  },
  {
    authors: "Zhou, C.",
    year: "Apr 2026",
    title:
      "The dopaminergic voice: Acoustic prosody vs. ventral striatal BOLD activation for anhedonia classification",
    venue: "27th USC Undergraduate Symposium",
    status: "presented",
  },
  {
    authors: "Zhou, C.",
    year: "Nov 2025",
    title: "Attentive AI visual aid for persons with visual impairment",
    venue: "Trojan Research Association Undergraduate Symposium",
    status: "presented",
  },
];

export const software = [
  {
    name: "ClinicalWhisper",
    dates: "Jan 2026 – present",
    href: "https://github.com/czhou732/Clinical-Whisper-Pipeline",
    line: "Local-first, air-gapped clinical interview transcription and speech-biomarker pipeline. Whisper for transcription, pyannote for diarisation, OpenSMILE for eGeMAPS features.",
    points: [
      "Architected fully air-gapped so audio never leaves the machine, meeting IRB and HIPAA constraints.",
      "Open-sourced; in use across PRAXIS research streams and adopted externally by the Rutledge Lab at Yale in August 2026.",
    ],
  },
];

export const skills = [
  {
    group: "Programming",
    items: "Python (PyTorch, scikit-learn, pandas, NumPy), R (tidyverse, ggplot2), Bash, Git, LaTeX",
  },
  {
    group: "Modelling",
    items: "Reinforcement-learning models, deep learning, classification and feature selection, SHAP, parameter sensitivity analysis",
  },
  { group: "Speech & audio", items: "OpenSMILE, librosa, Whisper, pyannote" },
  { group: "Neuroimaging", items: "MNE-Python source localisation, fMRI, BIDS-compliant pipelines" },
  { group: "LLMs & HPC", items: "Local air-gapped inference (Ollama, DeepSeek), NIH Biowulf, Slurm" },
  { group: "Research tools", items: "SPSS, Qualtrics, OSF preregistration, iSTAR IRB" },
  { group: "Languages", items: "English (fluent), Mandarin (native), Spanish (intermediate)" },
];

export const service: Entry[] = [
  {
    role: "Crisis Counselor",
    org: "Crisis Text Line",
    dates: "Feb 2024 – present",
    points: [
      "De-escalated psychological crises for 200+ texters over SMS, managing 5–10 concurrent high-stakes conversations per shift.",
    ],
  },
  {
    role: "High-Impact Academic Tutor",
    org: "Step Up Tutoring",
    dates: "Sep 2025 – Mar 2026",
    points: [
      "Weekly one-to-one tutoring for underserved students, with personalised data-informed lesson plans.",
    ],
  },
  {
    role: "Registered Behavior Technician",
    org: "Kyo",
    dates: "Aug 2024 – Oct 2024",
    points: [
      "Delivered ABA interventions (DTT and NET) for children with autism spectrum disorder; tracked behavioural data and documented goal mastery.",
    ],
  },
  {
    role: "Summer Camp Counselor",
    org: "The H.E.A.R.T. Center",
    dates: "Summer 2024",
    points: [
      "Facilitated social-emotional learning for 30+ neurodivergent children and managed behavioural de-escalation.",
    ],
  },
];

export const certifications = [
  "Responsible Conduct of Research — USC (CITI Program)",
  "Social-Behavioral Human Subjects Research — USC (CITI Program)",
  "Nonviolent Crisis Intervention, Blue Card — Crisis Prevention Institute",
  "Certified Personal Trainer (NASM-CPT) — National Academy of Sports Medicine",
];

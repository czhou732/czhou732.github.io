/**
 * The preregistered two-stream benchmark (osf.io/bsvrj).
 *
 * SOURCE OF TRUTH: the manuscript itself —
 *   ~/Research/Labs/NSG/Dopaminergic_Voice/main.tex
 *   Stream A primary: Table 1 (tab:stream_a_results), lines 205–215
 *   Stream B:         Results §, line 315
 *   Stream B CIs:     Stream_B/classification_results.json (pre-fMRIPrep run)
 *
 * These are the PRIMARY preregistered numbers: participant speech only, after
 * pyannote diarization. Do not substitute the numbers in
 * Results/Stream_A/classification_results.json — that file is the exploratory
 * full-interview sensitivity run (OSF §5.5, no diarization) and reports a
 * higher 0.651, which is not the preregistered result.
 */

export type Estimate = {
  model: string;
  auc: number;
  lo: number;
  hi: number;
};

export type Stream = {
  key: "voice" | "bold";
  label: string;
  caption: string;
  detail: string;
  n: number;
  estimates: Estimate[];
};

export const benchmark: { streams: Stream[]; chance: number } = {
  chance: 0.5,
  streams: [
    {
      key: "voice",
      label: "VOICE",
      caption: "Voice",
      detail: "eGeMAPSv02, diarized participant speech · DAIC-WOZ",
      n: 142,
      estimates: [
        { model: "Random forest", auc: 0.63, lo: 0.507, hi: 0.74 },
        { model: "Gradient boosted", auc: 0.621, lo: 0.497, hi: 0.734 },
        { model: "Logistic regression", auc: 0.558, lo: 0.448, hi: 0.674 },
      ],
    },
    {
      key: "bold",
      label: "fMRI",
      caption: "fMRI",
      detail: "Nucleus accumbens BOLD, BART · ds000030",
      n: 234,
      estimates: [
        { model: "Logistic regression", auc: 0.58, lo: 0.509, hi: 0.655 },
        { model: "Random forest", auc: 0.523, lo: 0.451, hi: 0.599 },
        { model: "Gradient boosted", auc: 0.518, lo: 0.448, hi: 0.596 },
      ],
    },
  ],
};

/** Permutation tests on each stream's best model, 1,000 label permutations. */
export const permutations = {
  voice: { model: "Random forest", auc: 0.63, p: ".049", cleared: true },
  bold: { model: "Logistic regression", auc: 0.58, p: ".057", cleared: false },
};

/**
 * Caveats that travel with the figure. The comparison is only honest with
 * these on the page, and the manuscript leads with them too.
 */
export const caveats = [
  "The voice result is borderline: p = .049 uncorrected, and it does not survive Bonferroni correction for three classifiers (α/3 = .017).",
  "Independent cohorts and different anhedonia instruments (PHQ-8 items 1–2 vs Chapman), so this is a benchmark across datasets, not a within-subject comparison.",
  "Both streams overfit heavily (train AUC 1.0, gap > 0.35) on 447 features and 32 positive cases. Stream B is also pipeline-dependent: fMRIPrep 23.x gives 0.45, below chance.",
];

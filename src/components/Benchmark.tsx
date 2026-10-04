import { useEffect, useRef, useState } from "react";
import { benchmark, caveats, permutations } from "../content/findings";

/**
 * The authored asset under the question, and the site's only motion.
 *
 * It answers the headline directly: two streams, three classifiers each,
 * point estimate with a 95% bootstrap CI, against the chance line. Real
 * numbers from the preregistered run, not an illustration of one.
 *
 * SVG rather than canvas: six rows of real text nodes read correctly at any
 * zoom. Assistive tech gets a generated table (DataTable) instead of a picture.
 */

const AXIS_LO = 0.30;
const AXIS_HI = 0.80;
const TICKS = [0.3, 0.4, 0.5, 0.6, 0.7, 0.8];

const ROW_H = 30;
const TOP = 42;          // headroom for the CHANCE label
const LABEL_W = 152;
const VALUE_W = 54;      // fixed right-hand column, forest-plot convention

const rows = benchmark.streams.flatMap((s) =>
  s.estimates.map((e) => ({ ...e, stream: s.key, streamLabel: s.label })),
);

const HEIGHT = TOP + rows.length * ROW_H + 34;

const fmt = (v: number) => v.toFixed(2);

/**
 * The accessible version of the figure, generated from the same data as the
 * drawing so the two cannot disagree. The SVG itself is hidden from assistive
 * tech (role="img" would flatten it to one label anyway) and this table takes
 * its place.
 */
function DataTable() {
  return (
    <table className="sr-only">
      <caption>
        AUC-ROC with 95 percent bootstrap confidence interval for each
        classifier, against a chance level of {fmt(benchmark.chance)}. The best
        voice model reached {fmt(permutations.voice.auc)} (permutation p ={" "}
        {permutations.voice.p}, not significant after Bonferroni correction)
        and the best fMRI model {fmt(permutations.bold.auc)} (p ={" "}
        {permutations.bold.p}). Both are modest and neither dominates the other.
      </caption>
      <thead>
        <tr>
          <th scope="col">Stream</th>
          <th scope="col">Classifier</th>
          <th scope="col">AUC</th>
          <th scope="col">95% CI</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={`${r.stream}-${r.model}`}>
            <th scope="row">{r.streamLabel}</th>
            <td>{r.model}</td>
            <td>{fmt(r.auc)}</td>
            <td>
              {fmt(r.lo)} to {fmt(r.hi)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Benchmark() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(880);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      if (w) setWidth(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const compact = width < 560;
  const labelW = compact ? 92 : LABEL_W;
  const plotW = Math.max(140, width - labelW - VALUE_W);
  const xc = (v: number) =>
    labelW + ((v - AXIS_LO) / (AXIS_HI - AXIS_LO)) * plotW;
  const valueX = width - 2;

  return (
    <figure className="m-0 flex flex-col gap-3">
      <div ref={wrapRef} className="w-full">
        <svg
          width="100%"
          viewBox={`0 0 ${width} ${HEIGHT}`}
          aria-hidden="true"
          focusable="false"
          style={{ display: "block", overflow: "visible" }}
        >
          {/* The reveal is pure CSS (.bm-draw). The resting state is the
              finished figure, so no-JS, SSR, print and reduced motion all
              get the whole chart. */}
          <g className="bm-draw">
            {/* Axis ticks */}
            {TICKS.map((t) => (
              <g key={t}>
                <line
                  x1={xc(t)}
                  x2={xc(t)}
                  y1={TOP - 10}
                  y2={TOP + rows.length * ROW_H}
                  stroke="var(--rule-2)"
                  strokeWidth="1"
                />
                <text
                  x={xc(t)}
                  y={TOP + rows.length * ROW_H + 18}
                  textAnchor="middle"
                  fill="var(--ink-3)"
                  style={{
                    font: '500 10.5px var(--font-mono)',
                    letterSpacing: "0.06em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {t.toFixed(1)}
                </text>
              </g>
            ))}

            {/* Chance */}
            <line
              x1={xc(benchmark.chance)}
              x2={xc(benchmark.chance)}
              y1={TOP - 18}
              y2={TOP + rows.length * ROW_H}
              stroke="var(--ink)"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.55"
            />
            <text
              x={xc(benchmark.chance)}
              y={TOP - 24}
              textAnchor="middle"
              fill="var(--ink-2)"
              style={{
                font: '500 10px var(--font-mono)',
                letterSpacing: "0.12em",
              }}
            >
              CHANCE
            </text>

            {/* Estimates */}
            {rows.map((r, i) => {
              const y = TOP + i * ROW_H + ROW_H / 2;
              const voice = r.stream === "voice";
              const color = voice ? "var(--brass)" : "var(--ink)";
              const first =
                i === 0 || rows[i - 1].stream !== r.stream;
              return (
                <g key={`${r.stream}-${r.model}`}>
                  {first && (
                    <text
                      x="0"
                      y={y - 1}
                      fill="var(--ink)"
                      style={{
                        font: '600 11px var(--font-mono)',
                        letterSpacing: "0.1em",
                      }}
                    >
                      {r.streamLabel}
                    </text>
                  )}
                  <text
                    x={first ? (compact ? 56 : 62) : 0}
                    y={y + (first ? 0 : -1)}
                    fill="var(--ink-3)"
                    style={{
                      font: '400 10px var(--font-mono)',
                      letterSpacing: "0.04em",
                    }}
                  >
                    {compact ? r.model.split(" ")[0] : r.model}
                  </text>

                  {/* 95% CI */}
                  <line
                    x1={xc(r.lo)}
                    x2={xc(r.hi)}
                    y1={y - 5}
                    y2={y - 5}
                    stroke={color}
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                  {[r.lo, r.hi].map((v) => (
                    <line
                      key={v}
                      x1={xc(v)}
                      x2={xc(v)}
                      y1={y - 10}
                      y2={y}
                      stroke={color}
                      strokeWidth="1.5"
                      opacity="0.8"
                    />
                  ))}
                  {/* Point estimate */}
                  <circle cx={xc(r.auc)} cy={y - 5} r="4" fill={color} />
                  <text
                    x={valueX}
                    y={y - 1}
                    textAnchor="end"
                    fill={voice ? "var(--brass)" : "var(--ink-2)"}
                    style={{
                      font: '500 10.5px var(--font-mono)',
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {r.auc.toFixed(2)}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
        <DataTable />
      </div>

      <p
        className="m-0 max-w-[76ch] text-[13.5px] leading-relaxed"
        style={{ color: "var(--ink-2)" }}
      >
        Voice cleared chance, barely ({permutations.voice.model.toLowerCase()},
        AUC <span className="tnum">{permutations.voice.auc.toFixed(2)}</span>,
        permutation <span className="tnum">p&nbsp;=&nbsp;{permutations.voice.p}</span>).
        Ventral striatal BOLD did not (
        {permutations.bold.model.toLowerCase()}, AUC{" "}
        <span className="tnum">{permutations.bold.auc.toFixed(2)}</span>,{" "}
        <span className="tnum">p&nbsp;=&nbsp;{permutations.bold.p}</span>). The
        two are statistically non-inferior to each other, which is a statement
        about how modest both are.
      </p>

      <figcaption
        className="m-0 max-w-[76ch] font-mono text-[11px] leading-relaxed"
        style={{ color: "var(--ink-3)" }}
      >
        Fig. — AUC-ROC with 95% bootstrap CI, stratified 5-fold CV. Primary
        preregistered analysis.{" "}
        {benchmark.streams
          .map(
            (st) =>
              `${st.caption}: ${st.detail}, n=${st.n}${
                st.screened ? ` of ${st.screened} screened` : ""
              }`,
          )
          .join(". ")}
        . {caveats.join(" ")} Preregistered at{" "}
        <a href="https://osf.io/bsvrj">osf.io/bsvrj</a>.
      </figcaption>
    </figure>
  );
}

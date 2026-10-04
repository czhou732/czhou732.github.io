import { benchmark, permutations } from "../content/findings";

const fmt = (v: number) => v.toFixed(2);

/**
 * Table 1 as a real table. The figure on the home page is the argument; this
 * is the same data in the form a reviewer will actually check, so the numbers
 * come from findings.ts and cannot drift from the drawing.
 */
export function ResultsTable() {
  const best = {
    voice: permutations.voice,
    bold: permutations.bold,
  };

  return (
    <figure className="m-0 flex flex-col gap-3">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left text-[14.5px]">
          <caption className="sr-only">
            Table 1. Classification of anhedonia, AUC-ROC with 95 percent bootstrap CI.
          </caption>
          <thead>
            <tr className="u-label" style={{ borderTop: "2px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
              <th scope="col" className="py-2.5 pr-4 font-medium">Stream</th>
              <th scope="col" className="py-2.5 pr-4 font-medium">Classifier</th>
              <th scope="col" className="py-2.5 pr-4 text-right font-medium">AUC</th>
              <th scope="col" className="py-2.5 pr-4 text-right font-medium">95% CI</th>
              <th scope="col" className="py-2.5 text-right font-medium">Permutation <span className="normal-case">p</span></th>
            </tr>
          </thead>
          <tbody>
            {benchmark.streams.flatMap((st, si) =>
              st.estimates.map((e, i) => {
                const last = si === benchmark.streams.length - 1 && i === st.estimates.length - 1;
                const isBest = e.model === best[st.key].model;
                return (
                  <tr
                    key={`${st.key}-${e.model}`}
                    className="tnum border-b"
                    style={{
                      borderColor: "var(--rule-2)",
                      borderBottom: last ? "2px solid var(--ink)" : undefined,
                      color: isBest ? "var(--ink)" : "var(--ink-2)",
                    }}
                  >
                    {i === 0 && (
                      <th
                        scope="rowgroup"
                        rowSpan={st.estimates.length}
                        className="py-2.5 pr-4 text-left align-top font-normal"
                      >
                        <span className="flex flex-col">
                          <span className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: "var(--ink)" }}>
                            {st.label}
                          </span>
                          <span className="u-label normal-case">n = {st.n}</span>
                        </span>
                      </th>
                    )}
                    <td className="py-2.5 pr-4">{e.model}</td>
                    <td className="py-2.5 pr-4 text-right font-mono text-[13px]">{fmt(e.auc)}</td>
                    <td className="py-2.5 pr-4 text-right font-mono text-[13px]">
                      {fmt(e.lo)} to {fmt(e.hi)}
                    </td>
                    <td className="py-2.5 text-right font-mono text-[13px]">
                      {isBest ? `.${best[st.key].p.replace(".", "")}` : ""}
                    </td>
                  </tr>
                );
              }),
            )}
          </tbody>
        </table>
      </div>
      <figcaption
        className="m-0 max-w-[76ch] font-mono text-[11px] leading-relaxed"
        style={{ color: "var(--ink-3)" }}
      >
        <b style={{ color: "var(--ink-2)", fontWeight: 600 }}>Table 1</b> Primary
        preregistered analysis. Permutation p for each stream's best model only,
        1,000 label permutations, uncorrected. Chance AUC = {fmt(benchmark.chance)}.
      </figcaption>
    </figure>
  );
}

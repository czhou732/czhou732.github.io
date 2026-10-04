import { benchmark, keyCaveats, methodCaveats } from "../content/findings";
import { Side } from "./Margin";

/** The two caveats a skimmer must see, set in the margin beside Figure 1. */
export function ReadBeforeCiting() {
  return (
    <Side label="Read before citing">
      {keyCaveats.map((c) => (
        <p key={c} className="m-0" style={{ color: "var(--ink-2)" }}>
          {c}
        </p>
      ))}
    </Side>
  );
}

/** Everything else, one click away rather than gone. */
export function Methods() {
  return (
    <details className="bm-details max-w-[66ch]">
      <summary className="u-label cursor-pointer" style={{ color: "var(--ink-2)" }}>
        Datasets, methods and remaining caveat
      </summary>
      <p className="m-0 mt-3 text-[14.5px] leading-relaxed" style={{ color: "var(--ink-3)" }}>
        {benchmark.streams
          .map(
            (st) =>
              `${st.caption}: ${st.detail}, n=${st.n}${
                st.screened ? ` of ${st.screened} screened` : ""
              }`,
          )
          .join(". ")}
        . {methodCaveats.join(" ")}
      </p>
    </details>
  );
}

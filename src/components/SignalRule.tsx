/**
 * A thin EEG-style trace used in place of a hairline between sections.
 * Decorative and generated, not a recording: aria-hidden, and the seed makes
 * the server and client render the identical path.
 */
function lcg(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function trace(seed: number): string {
  const r = lcg(11 + seed * 7);
  const W = 1000;
  const mid = 15;
  const bursts: [number, number][] = [
    [r() * 250 + 80, 70 + r() * 60],
    [r() * 250 + 450, 60 + r() * 90],
    [r() * 180 + 760, 50 + r() * 50],
  ];
  const pts: string[] = [];
  for (let x = 0; x <= W; x += 2) {
    let env = 0;
    for (const [c, w] of bursts) {
      const d = (x - c) / w;
      env += Math.exp(-d * d);
    }
    const y =
      mid +
      (r() - 0.5) * 1.4 +
      Math.sin(x * 0.55 + seed) * env * 9 * (0.6 + r() * 0.5) +
      Math.sin(x * 0.18) * env * 3;
    pts.push(`${x === 0 ? "M" : "L"}${x} ${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

export function SignalRule({ seed = 0 }: { seed?: number }) {
  return (
    <div className="sig" aria-hidden="true">
      <svg viewBox="0 0 1000 30" preserveAspectRatio="none" focusable="false">
        <path d={trace(seed)} />
      </svg>
    </div>
  );
}

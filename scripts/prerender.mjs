/**
 * Static prerender. Renders every route to real HTML so the page has content
 * before JavaScript runs: the whole point for search indexing and for LCP.
 *
 * Run after `vite build` (client) and `vite build --ssr` (server).
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const serverEntry = pathToFileURL(join(root, "dist-server", "entry-server.js")).href;

const { allRoutes, render } = await import(serverEntry);
const template = readFileSync(join(dist, "index.html"), "utf8");

function escapeAttr(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

let count = 0;
for (const route of allRoutes()) {
  const html = template
    .replace("<!--app-->", render(route.path))
    .replace("<!--title-->", escapeHtml(route.title))
    .replace("<!--description-->", escapeAttr(route.description));

  const outDir = route.path === "/" ? dist : join(dist, route.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  count += 1;
  console.log(`  ${route.path.padEnd(34)} ${(html.length / 1024).toFixed(1)} kB`);
}

// GitHub Pages must not run Jekyll over the build.
writeFileSync(join(dist, ".nojekyll"), "");
rmSync(join(root, "dist-server"), { recursive: true, force: true });

console.log(`\nPrerendered ${count} routes.`);

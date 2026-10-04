import type { ReactElement } from "react";
import { Home } from "./pages/Home";
import { Research } from "./pages/Research";
import { Writing, EssayPage } from "./pages/Writing";
import { Cv } from "./pages/Cv";
import { essays } from "./content/essays";
import { profile } from "./content/profile";
import { praxis } from "./content/praxis";

export type Route = {
  path: string;
  title: string;
  description: string;
  element: ReactElement;
};

const NAME = profile.name;

export const routes: Route[] = [
  {
    path: "/",
    title: NAME,
    description:
      "Computational psychiatry at USC. Open-source instruments that measure psychiatric state from speech, circuit activity, and reward-learning models.",
    element: <Home />,
  },
  {
    path: "/research/",
    title: `Research | ${NAME}`,
    description:
      "Reward-learning models, acoustic biomarkers of anhedonia, MEG markers of suicidal ideation, and the ClinicalWhisper pipeline. Publications and preprints.",
    element: <Research />,
  },
  {
    path: "/writing/",
    title: `Writing | ${NAME}`,
    description:
      "Essays on ketamine reporting, the attention economy, and the San Gabriel Valley.",
    element: <Writing />,
  },
  ...essays.map((e) => ({
    path: `/writing/${e.slug}/`,
    title: `${e.title} | ${NAME}`,
    description: `${e.subtitle}. ${e.pull}`,
    element: <EssayPage slug={e.slug} />,
  })),
  {
    path: "/cv/",
    title: `CV | ${NAME}`,
    description: `Curriculum vitae for ${NAME}: education, honors, research experience, publications, skills, and service.`,
    element: <Cv />,
  },
];

/**
 * Static shortlinks. These are not React routes: the prerender writes each one
 * as a standalone meta-refresh page, so chengdongzhou.com/praxis is a stable
 * address that can be printed on a slide and repointed from one file here.
 */
export type Redirect = { path: string; to: string; label: string };

export const redirects: Redirect[] = [
  { path: "/praxis/", to: praxis.href, label: praxis.full },
];

export function routeFor(pathname: string): Route {
  const p = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return routes.find((r) => r.path === p) ?? routes[0];
}

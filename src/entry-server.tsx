import { renderToString } from "react-dom/server";
import { routes, redirects, type Route, type Redirect } from "./routes";

export function allRoutes(): Route[] {
  return routes;
}

export function allRedirects(): Redirect[] {
  return redirects;
}

export function render(path: string): string {
  const route = routes.find((r) => r.path === path);
  if (!route) throw new Error(`No route for ${path}`);
  return renderToString(route.element);
}

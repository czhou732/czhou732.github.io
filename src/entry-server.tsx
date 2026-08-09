import { renderToString } from "react-dom/server";
import { routes, type Route } from "./routes";

export function allRoutes(): Route[] {
  return routes;
}

export function render(path: string): string {
  const route = routes.find((r) => r.path === path);
  if (!route) throw new Error(`No route for ${path}`);
  return renderToString(route.element);
}

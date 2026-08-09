import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import "./styles/theme.css";
import { routeFor } from "./routes";

const el = document.getElementById("root")!;
const app = <StrictMode>{routeFor(window.location.pathname).element}</StrictMode>;

// Prerendered HTML is present in production; dev serves an empty shell.
if (el.hasChildNodes()) hydrateRoot(el, app);
else createRoot(el).render(app);

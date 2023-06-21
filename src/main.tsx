import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.querySelector("#root") as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
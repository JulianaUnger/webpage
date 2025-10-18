import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
if (!container) {
  // Helpful debug so we never get a silent failure again
  throw new Error("Root element #root not found. Check public/index.html.");
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

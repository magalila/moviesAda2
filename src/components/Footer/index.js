import React from "react";
import { createRoot } from "react";
import "./index.css";
import App from "./App.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import reportWebVitals from "./reportWebVitals.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorkerRegistration.register();
reportWebVitals();

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./Root.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);

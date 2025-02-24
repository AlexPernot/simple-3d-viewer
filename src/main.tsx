import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const container = document.getElementById("vision_3d_viewer")!;

createRoot(container).render(
  <StrictMode>
    <App
      modelUrl={container.getAttribute("data-model-url")!}
      envUrl={container.getAttribute("data-env-url")!}
    />
  </StrictMode>,
);

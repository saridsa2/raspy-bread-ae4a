import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

function AppWithTitle() {
  React.useEffect(() => {
    document.title = "Operation Sindhoor";
  }, []);
  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWithTitle />
  </StrictMode>,
);

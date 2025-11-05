import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const pendingRedirect = sessionStorage.getItem("simbora:redirect");

if (pendingRedirect) {
  sessionStorage.removeItem("simbora:redirect");
  try {
    const url = new URL(pendingRedirect);
    const nextPath = url.pathname + url.search + url.hash;
    window.history.replaceState(null, "", nextPath || "/");
  } catch (error) {
    console.warn("Failed to restore redirect path:", error);
  }
}

createRoot(document.getElementById("root")!).render(<App />);

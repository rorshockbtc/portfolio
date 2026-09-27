import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Suppress extraneous unhandled errors from browser extensions (e.g. MetaMask, Web3 injection)
if (typeof window !== "undefined") {
  window.addEventListener("unhandledrejection", (event) => {
    const reason = event.reason?.message || String(event.reason || "");
    if (
      reason.toLowerCase().includes("metamask") ||
      reason.toLowerCase().includes("ethereum") ||
      reason.toLowerCase().includes("wallet") ||
      reason.toLowerCase().includes("extension")
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });

  window.addEventListener("error", (event) => {
    const msg = event.message || "";
    const filename = event.filename || "";
    if (
      msg.toLowerCase().includes("metamask") ||
      msg.toLowerCase().includes("ethereum") ||
      filename.includes("chrome-extension://") ||
      filename.includes("moz-extension://")
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Get the root element from your HTML
const rootElement = document.getElementById("root");

// Create a root and render the application
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

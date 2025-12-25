import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LandingPage from "./App2.jsx";
import LandingPages from "./home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingPages />
  </StrictMode>
);

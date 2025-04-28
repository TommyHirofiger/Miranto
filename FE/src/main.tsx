import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InterestCalculator from "./components/InterestCalculator/InterestCalculator.tsx";
import SavingBook from "./components/SavingBook/SavingBook.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InterestCalculator />
    <SavingBook />
  </StrictMode>
);

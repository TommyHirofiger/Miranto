import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InterestCalculator from "./components/InterestCalculator/InterestCalculator.tsx";
import SavingRecordProvider from "./contexts/SavingRecordContext.tsx";
import RecordForm from "./components/RecordForm/RecordForm.tsx";
import SavingBook from "./components/SavingBook/SavingBook.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InterestCalculator />
    <SavingRecordProvider>
      <RecordForm />
      <SavingBook />
    </SavingRecordProvider>
  </StrictMode>
);

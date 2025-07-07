import { createContext, useContext, useState } from "react";
import { fetchRecords } from "../api/recordApi";

export type SavingRecord = {
  date: string;
  principal: string;
  rate: string;
};

export type SavedRecord = {
  userId: string;
  recordId: string;
  date: string;
  principal: string;
  rate: string;
};

type SavingRecordContextType = {
  savedRecords: SavedRecord[];
  fetchSavedRecords: (userId: string) => Promise<void>;
};

const SavingRecordContext = createContext<SavingRecordContextType | undefined>(
  undefined
);

export const useSavingRecordContext = () => {
  const context = useContext(SavingRecordContext);
  if (!context)
    throw new Error("useSavingRecord must be used within SavingRecordProvider");
  return context;
};

const SavingRecordProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [savedRecords, setSavedRecords] = useState<SavedRecord[]>([]);

  const fetchSavedRecords = async (userId: string) => {
    const res = await fetchRecords(userId);
    setSavedRecords(res);
  };

  return (
    <SavingRecordContext.Provider value={{ savedRecords, fetchSavedRecords }}>
      {children}
    </SavingRecordContext.Provider>
  );
};

export default SavingRecordProvider;

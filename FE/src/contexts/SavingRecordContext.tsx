import { createContext, useContext, useState } from "react";

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
  savingRecord: SavingRecord[];
  addRecord: (record: SavingRecord) => void;
  setSavingRecord: (records: SavingRecord[]) => void;
  savedRecord: SavedRecord[];
  setSavedRecord: (records: SavedRecord[]) => void;
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
  const [savingRecord, setSavingRecord] = useState<SavingRecord[]>([]);
  const [savedRecord, setSavedRecord] = useState<SavedRecord[]>([]);

  const addRecord = (record: SavingRecord) => {
    return setSavingRecord([...savingRecord, record]);
  };

  return (
    <SavingRecordContext.Provider
      value={{ savingRecord, addRecord, setSavingRecord, savedRecord, setSavedRecord }}
    >
      {children}
    </SavingRecordContext.Provider>
  );
};

export default SavingRecordProvider;

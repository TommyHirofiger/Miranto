import { SavedRecord } from "../contexts/SavingRecordContext";
import { apiClient } from "./client";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchRecords = async (userId: string): Promise<SavedRecord[]> => {
  const data = await apiClient<SavedRecord[]>(
    `${BASE_URL}/records?userId=${userId}`
  );
  const sortedData = [...data].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (dateA !== dateB) return dateA - dateB;

    return a.recordId.localeCompare(b.recordId);
  });
  return sortedData;
};

export const postRecord = async (
  userId: string,
  formData: { date: string; principal: string; rate: string }
) => {
  const data = await apiClient(`${BASE_URL}/records`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      ...formData,
    }),
  });
  return data;
};

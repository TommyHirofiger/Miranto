import { useState } from "react";
import {
  useSavingRecordContext,
  SavingRecord,
} from "../../contexts/SavingRecordContext";

const RecordForm: React.FC = () => {
  const { savingRecord, addRecord } = useSavingRecordContext();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [formData, setFormData] = useState<SavingRecord>({
    date: "",
    principal: "",
    rate: "",
  });

  const handleAddRecord = () => {
    if (!formData.date || !formData.principal || !formData.rate) {
      setErrorMessage("入力に誤りがあります");
      return;
    }

    addRecord(formData);
    setFormData({
      date: "",
      principal: "",
      rate: "",
    });
    setErrorMessage("");
  };

  return (
    <>
      <div>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      <div>
        <input
          type="number"
          value={formData.principal}
          onChange={(e) =>
            setFormData({ ...formData, principal: e.target.value })
          }
        />
        円
      </div>
      <div>
        <input
          type="number"
          value={formData.rate}
          onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
        />
        %
      </div>
      <div>
        <button onClick={handleAddRecord}>登録</button>
      </div>
      {errorMessage && (
        <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
      )}
    </>
  );
};

export default RecordForm;

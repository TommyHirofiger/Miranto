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

  const handleAddRecord = async () => {
    const principal = parseFloat(formData.principal);
    if (isNaN(principal) || principal < 0) {
      setErrorMessage("金額は0以上の数字を入力してください");
      return;
    }

    const rate = formData.rate.trim();

    // 小数第3位を含んでいたらエラーにする
    const rateValid = /^\d+(\.\d{1,2})?$/.test(rate) && parseFloat(rate) >= 0;

    if (!rateValid) {
      setErrorMessage("利率は0以上の数値で、小数点以下2桁までにしてください");
      return;
    }

    if (!formData.date || !formData.principal || !formData.rate) {
      setErrorMessage("入力に誤りがあります");
      return;
    }

    addRecord(formData);
    await fetch("http://localhost:3000/recors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "test123",
        ...formData,
      }),
    });
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
          min="0"
          onChange={(e) =>
            setFormData({ ...formData, principal: e.target.value })
          }
        />
        円
      </div>
      <div>
        <input
          type="number"
          step="0.01"
          value={formData.rate}
          min="0"
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

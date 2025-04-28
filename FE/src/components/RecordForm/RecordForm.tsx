import { useState } from "react";

type SavingRecord = {
  date: string;
  principal: string;
  rate: string;
};

const RecordForm: React.FC = () => {
  const [savingRecord, setSavingRecord] = useState<SavingRecord[]>([]);
  const [formData, setFormData] = useState<SavingRecord>({
    date: "",
    principal: "",
    rate: "",
  });

  const handleAddRecord = () => {
    setSavingRecord([...savingRecord, formData]);
    console.log(savingRecord[0]);
  };

  return (
    <>
      <div>
        <input
          type="date"
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      <div>
        <input
          type="number"
          onChange={(e) =>
            setFormData({ ...formData, principal: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
        />
      </div>
      <div>
        <button onClick={handleAddRecord}>登録</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>記載日</th>
            <th>金額（円）</th>
            <th>利率（%）</th>
          </tr>
        </thead>
        <tbody>
          {savingRecord.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.principal}</td>
              <td>{record.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RecordForm;

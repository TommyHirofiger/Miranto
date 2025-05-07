import { useMemo } from "react";
import { useSavingRecordContext } from "../../contexts/SavingRecordContext";

const SavingBook: React.FC = () => {
  const { savingRecord } = useSavingRecordContext();
  const totalAmmount = useMemo(() => {
    return savingRecord.reduce((sum, record) => {
      const years = Math.floor(
        (new Date().getTime() - new Date(record.date).getTime()) /
          (1000 * 60 * 60 * 24 * 365)
      );
      const principal = parseFloat(record.principal);
      const rate = parseFloat(record.rate) / 100;
      const nowValue: number = principal * Math.pow(1 + rate, years);
      return Math.floor(sum + nowValue);
    }, 0);
  }, [savingRecord]);

  return (
    <>
      <h2>貯金管理表</h2>
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
      <h3>現在の合計金額：{totalAmmount}円</h3>
    </>
  );
};

export default SavingBook;

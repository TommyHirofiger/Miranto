import { useSavingRecordContext} from "../../contexts/SavingRecordContext";

const SavingBook: React.FC = () => {
    const {savingRecord, } = useSavingRecordContext();

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
    </>
  );
};

export default SavingBook;

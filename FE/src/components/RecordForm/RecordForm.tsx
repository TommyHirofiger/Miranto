import { useState } from "react";


const RecordForm: React.FC = () => {
  const [date, setDate] = useState<string>();
  const [principal, setPrincipal] = useState<string>("");
  const [rate, setRate] = useState<string>("");

  return (
    <>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDate(e.target.value)
          }
        />
      </div>
      <div>
        <input
          type="number"
          value={principal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrincipal(e.target.value)
          }
        />
      </div>
      <div>
        <input
          type="number"
          value={rate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRate(e.target.value)
          }
        />
      </div>
      <h3>{date}:{principal}:{rate}</h3>
    </>
  );
};

export default RecordForm;

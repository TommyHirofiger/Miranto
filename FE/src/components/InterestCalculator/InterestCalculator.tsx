// src/components/InterestCalculator.tsx
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// 金利計算結果の型を定義
type Result = {
  year: string;
  amount: number;
};

const InterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);

  const handleCalculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;

    if (isNaN(p) || isNaN(r)) {
      alert("金額と金利には数値を入力してください。");
      return;
    }

    const newResults: Result[] = [];

    for (let year = 1; year <= 20; year++) {
      const amount = p * Math.pow(1 + r, year);
      newResults.push({
        year: `${year}年`,
        amount: parseFloat(amount.toFixed(2)),
      });
    }

    setResults(newResults);
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "700px", margin: "0 auto" }}>
      <h2>金利計算ツール</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          金額（円）：
          <input
            type="number"
            value={principal}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrincipal(e.target.value)
            }
            style={{ marginLeft: "1rem" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          年利（％）：
          <input
            type="number"
            value={rate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRate(e.target.value)
            }
            style={{ marginLeft: "1rem" }}
          />
        </label>
      </div>

      <button onClick={handleCalculate}>計算</button>

      {results.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <h3>試算結果</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={results}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis
                tickFormatter={(value: number) => `${value.toLocaleString()}円`}
              />
              <Tooltip
                formatter={(value: number) => `${value.toLocaleString()} 円`}
              />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default InterestCalculator;

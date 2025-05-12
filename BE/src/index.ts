import express from "express";
import AWS from "aws-sdk";

const app = express();
const port = 3000;

app.use(express.json());

// DynamoDB Local 用の設定
const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: "localhost",
  endpoint: "http://localhost:8000",
  accessKeyId: "fakeMyKeyId", // DynamoDB LocalではダミーでOK
  secretAccessKey: "fakeSecretAccessKey",
});

// 動作確認用ルート
app.get("/", (_req, res) => {
  res.send("Hello from Saving API!");
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});

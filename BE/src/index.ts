import express from "express";
import cors from "cors";
import recordRouter from "./routes/record";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/records", recordRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

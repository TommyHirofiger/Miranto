import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { dynamoDb } from "../lib/db";

const router = express.Router();

const recordRouter = router.post("/", async (req: Request, res: any) => {
  const { userId, date, principal, rate } = req.body;

  if (!userId || !date || !principal || !rate) {
    return res.status(400).json({ error: "Missing required fields !!" });
  }

  const item = {
    userId,
    recordId: uuidv4(),
    date,
    principal,
    rate,
  };

  try {
    await dynamoDb.send(
      new PutCommand({
        TableName: "SavingRecords",
        Item: item,
      })
    );

    res.status(200).json({ message: "Record Saved!", item });
  } catch (error) {
    res.status(500).json({ error: "Failed to save record", detail: error });
  }
});

export default recordRouter;

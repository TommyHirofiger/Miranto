import { Request } from "express";
import * as recordServices from "../services/recordServices";

export const postRecord = async (req: Request, res: any) => {
  const { userId, date, principal, rate } = req.body;

  if (!userId || !date || !principal || !rate) {
    return res.status(400).json({ error: "Missing required fields !!" });
  }

  try {
    const item = await recordServices.createRecord({
      userId,
      date,
      principal,
      rate,
    });
    res.status(201).json({ message: "Record Saved!", item });
  } catch (error) {
    res.status(500).json({ error: "Failed to save record", detail: error });
  }
};

export const getRecord = async (req: Request, res: any) => {
  const userId = req.body.userId;

  if (!userId) {
    return res.status(400).json({ error: "Missing userId !!" });
  }

  try {
    const item = await recordServices.fetchRecord(userId);
    res.status(201).json({ message: "Get a list is succeeded!!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to get record", detail: error });
  }
};

import express from "express";
import { postRecord, getRecord } from "../controllers/recordController";

const router = express.Router();

router.post("/", postRecord);
router.get("/", getRecord);

export default router;

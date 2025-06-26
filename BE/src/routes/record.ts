import express from "express";
import { postRecord } from "../controllers/recordController";

const router = express.Router();

router.post("/", postRecord);

export default router;

import { Router } from "express";
import * as diaryServices from "../services/diaryServices";
import { toNewDiaryEntry } from "../utils/toNewDiaryEntry";

const router = Router();

router.get("/", (_req, res) => {
  res.json(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const diary = diaryServices.findById(Number(id));
  return diary ? res.json(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    diaryServices.addDiary(newDiaryEntry);
    res.json(newDiaryEntry);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

export default router;

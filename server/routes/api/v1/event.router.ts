import { Router } from "express";
import {
  default as Event,
  default as event,
} from "../../../models/event.model";
const router = Router();

router.get("/", async (req, res) => {
  const foundEvents = await event.find();
  res.status(200).send(foundEvents);
});

router.post("/add-event", async (req, res) => {
  const newEvent = new Event({
    titre: req.body.titre,
    description: req.body.description,
    date: req.body.date,
  });
  await newEvent.save();
  res.status(200).send();
});

export default router;

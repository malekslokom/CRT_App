import Router from "express";
import AuthRouter from "./auth.router";
import EventRouter from "./event.router";
import VolontaireRouter from "./volontaire.router";
const router = Router();

router.use("/auth", AuthRouter);
router.use("/volontaire/add", VolontaireRouter);
router.use("/events", EventRouter);

export default router;

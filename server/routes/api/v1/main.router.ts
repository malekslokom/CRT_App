import Router from "express";
import AuthRouter from "./auth.router";
import EmailRouter from "./email.router";
import EventRouter from "./event.router";
import PushRouter from "./push.router";
import VolontaireRouter from "./volontaire.router";
const router = Router();

router.use("/auth", AuthRouter);
router.use("/volontaire/add", VolontaireRouter);
router.use("/events", EventRouter);
router.use("/emails", EmailRouter);
router.use("/push-notifications", PushRouter);

export default router;

import  Router  from "express";
import AuthRouter from "./auth.router";
import VolontaireRouter from "./volontaire.router";
const router = Router();

router.use("/auth", AuthRouter);
router.use("/volontaire/add", VolontaireRouter);
export default router;

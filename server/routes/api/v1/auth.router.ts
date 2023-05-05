import { Router, Request } from "express";
import user from "../../../models/user.model";

const router = Router();

//router.get('/',async(req,res)=>res.send("welcome"));
router.post("/",async(req,res)=>{
 
    const foundUser= await user.findOne({username:req.body.username,password:req.body.password});
    console.log(foundUser);
    if (!foundUser) res.status(400).send();
    else{
        res.status(200).send(foundUser);
    }

})
export default router;

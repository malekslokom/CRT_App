import { Router, Request } from "express";
import user from "../../../models/user.model";

const router = Router();

router.post("/",async(req,res)=>{
 
    const newUser=new user (req.body);
    await newUser.save();
    res.status(201).send();
    console.log("add");

})

export default router;
import express from "express";
const app=express();
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
app.use(bodyParser.json());

import apiRouter from "./routes/api/api.router";
app.use("/api", apiRouter);
console.log("aAAAAAAaaaa");
mongoose.connect('mongodb+srv://slokom:slokom@cluster0.iplteci.mongodb.net/CRT?retryWrites=true&w=majority', 
    {useNewUrlParser: true,useUnifiedTopology:true}).then(()=>console.log("connected")).catch((err)=>console.log(`erreur de connection ${err}`));
app.set("port",process.env.PORT || 3000);
app.listen(app.get("port"),()=>console.log(`Port est  ${app.get("port")}`));
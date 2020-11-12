import express from "express";
const app=express();
import bodyParser from 'body-parser';
//import mongoose, { Mongoose } from 'mongoose';
//import user from './models/user.model';

app.use(bodyParser.json());

app.set("port",process.env.PORT || 5000);
app.listen(app.get("port"),()=>console.log(`Port est  ${app.get("port")}`));
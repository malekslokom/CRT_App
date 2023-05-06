import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(bodyParser.json());

import apiRouter from "./routes/api/api.router";
app.use("/api", apiRouter);
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://slokom:slokom@cluster0.iplteci.mongodb.net/CRT?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("connected"))
  .catch((err) => console.log(`erreur de connection ${err}`));
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log(`Port est  ${app.get("port")}`));

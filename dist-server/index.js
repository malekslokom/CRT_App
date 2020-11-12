"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var body_parser_1 = __importDefault(require("body-parser"));
//import mongoose, { Mongoose } from 'mongoose';
//import user from './models/user.model';
app.use(body_parser_1.default.json());
app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), function () { return console.log("Port est  " + app.get("port")); });

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
app.use(body_parser_1.default.json());
var api_router_1 = __importDefault(require("./routes/api/api.router"));
app.use("/api", api_router_1.default);
console.log("aAAAAAAaaaa");
mongoose_1.default.connect('mongodb+srv://slokom:slokom@cluster0.iplteci.mongodb.net/CRT?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(function () { return console.log("connected"); }).catch(function (err) { return console.log("erreur de connection " + err); });
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function () { return console.log("Port est  " + app.get("port")); });

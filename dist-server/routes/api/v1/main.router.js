"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_router_1 = __importDefault(require("./auth.router"));
var event_router_1 = __importDefault(require("./event.router"));
var push_router_1 = __importDefault(require("./push.router"));
var volontaire_router_1 = __importDefault(require("./volontaire.router"));
var email_router_1 = __importDefault(require("./email.router"));
var router = express_1.default();
router.use("/auth", auth_router_1.default);
router.use("/volontaire/add", volontaire_router_1.default);
router.use("/events", event_router_1.default);
<<<<<<< HEAD
router.use("/emails", email_router_1.default);
=======
router.use("/push-notifications", push_router_1.default);
>>>>>>> 7689def (WIP)
exports.default = router;

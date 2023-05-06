"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    nom: String,
    prenom: String,
    username: String,
    password: String,
    CIN: String,
    numeroVolontaire: String,
    desc: String,
    dateNaiss: String,
    blood: String,
    adresse: String,
    sexe: String,
    email: String,
    phone: String,
    facebookUrl: String,
    instagramUrl: String,
    linkedinUrl: String,
    twiterUrl: String,
    MembreDepuis: String,
    Attestation: String,
    paye: String,
    subscriptionEndpoint: String,
});
exports.default = mongoose_1.default.model("User", UserSchema);

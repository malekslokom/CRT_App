import Mongoose from "mongoose";

const UserSchema: Mongoose.Schema = new Mongoose.Schema({
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

export interface IUser extends Mongoose.Document {
  nom?: String;
  prenom?: String;
  username?: String;
  password?: String;
  CIN?: String;
  numeroVolontaire?: String;
  desc?: String;
  dateNaiss?: String;
  blood?: String;
  adresse?: String;
  sexe?: String;
  email?: String;
  phone?: String;
  facebookUrl?: String;
  instagramUrl?: String;
  linkedinUrl?: String;
  twiterUrl?: String;
  MembreDepuis?: String;
  Attestation?: String;
  paye?: String;
  subscriptionEndpoint?: String;
}

export default Mongoose.model<IUser>("User", UserSchema);

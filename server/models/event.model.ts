import Mongoose from "mongoose";

const EventSchema: Mongoose.Schema = new Mongoose.Schema({
  titre: String,
  description: String,
  date: String,
});

export interface IUser extends Mongoose.Document {
  titre?: String;
  description?: String;
  date?: String;
}

export default Mongoose.model<IUser>("Event", EventSchema);

import { model, Schema } from "mongoose";

const PatientSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  surgeryHistory: String,
  illnessHistory: String,
});
const patient = model("Patient", PatientSchema);
export default patient;

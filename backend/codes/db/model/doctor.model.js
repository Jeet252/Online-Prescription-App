import { model, Schema } from "mongoose";

const DoctorSchema = new Schema({
  name: String,
  experience: Number,
  email: String,
  phone: String,
  specialty: String,
});
const doctor = model("Doctor", DoctorSchema);
export default doctor;

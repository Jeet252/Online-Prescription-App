import mongoose, { model, Schema } from "mongoose";

const PrescriptionSchema = new Schema({
  careTaken: String,
  medicine: String,
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
});
const prescription = model("Prescription", PrescriptionSchema);
export default prescription;

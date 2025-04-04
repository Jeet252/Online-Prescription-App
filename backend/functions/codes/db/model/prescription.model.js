import mongoose, { model, Schema } from "mongoose";

const PrescriptionSchema = new Schema({
  careTaken: String,
  medicine: String,
  prescribeTo: { type: mongoose.Schema.Types.ObjectId, ref: "Consultation" },
});
const prescription = model("Prescription", PrescriptionSchema);
export default prescription;

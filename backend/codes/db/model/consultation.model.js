import mongoose, { model, Schema } from "mongoose";

const ConsultationSchema = new Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  transaction_id: String,
  currentIllness: String,
  diabtics: String,
  allergy: String,
  other: String,
});
const consultation = model("Consultation", ConsultationSchema);
export default consultation;

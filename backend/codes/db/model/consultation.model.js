import mongoose, { model, Schema } from "mongoose";

const ConsultationSchema = new Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  transaction_id: String,
  currentIllness: String,
  diabtics: String,
  allergy: String,
  other: String,
});
const consultation = model("Consultation", ConsultationSchema);
export default consultation;

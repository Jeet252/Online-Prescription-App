import Patient from "../db/model/patient.model.js";
import Doctor from "../db/model/doctor.model.js";
import ConsultationSchema from "../db/model/consultation.model.js";
import PrescriptionSchema from "../db/model/prescription.model.js";

const signupPatient = async (req, res) => {
  try {
    const { name, age, email, phone, surgeryHistory, illnessHistory } =
      req.body;
    const patientCreated = await Patient.create({
      name,
      age,
      email,
      phone,
      surgeryHistory,
      illnessHistory,
    });
    res.status(201).json({
      msg: "patient is successfull created",
      userId: patientCreated.name.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const signupDoctor = async (req, res) => {
  try {
    const { name, experience, email, phone, specialty } = req.body;
    const doctorCreated = await Doctor.create({
      name,
      experience,
      email,
      phone,
      specialty,
    });
    const doctorExist = await Doctor.find({ email: email, phone: phone });
    if (doctorExist) {
      return res.status(404).json({
        msg: "email or phone is already exist in database try to signin or use different credential",
      });
    }
    res.status(201).json({
      msg: "doctor is successfull created",
      userId: doctorCreated.name.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const signinPatient = async (req, res) => {
  try {
    const { email } = req.body;
    const patientExist = await Patient.find({
      email,
    });
    res.status(201).json({
      msg: "patient is find",
      userId: patientExist,
    });
  } catch (error) {
    console.log(error);
  }
};

const signinDoctor = async (req, res) => {
  try {
    const { email } = req.body;
    const doctorExist = await Doctor.find({
      email,
    });
    if (!doctorExist) {
      return res.status(404).json({
        msg: "doctor " + email + " is not found",
        data: await Doctor.find(),
      });
    }
    return res.status(200).send(doctorExist);
  } catch (error) {
    console.log(error);
  }
};

const consultation = async (req, res) => {
  try {
    const { transaction_id, currentIllness, diabtics, allergy, other } =
      req.body;
    const consultationCreated = await ConsultationSchema.create({
      transaction_id,
      currentIllness,
      diabtics,
      allergy,
      other,
    });
    res.status(201).json({
      msg: "consultation is successfull created",
      consultationCreated,
    });
  } catch (error) {
    console.log(error);
  }
};

const prescription = async (req, res) => {
  try {
    const { medicine, careTaken } = req.body;
    const prescriptionCreated = await PrescriptionSchema.create({
      medicine,
      careTaken,
    });
    res.status(201).json({
      msg: "prescription is successfull created",
      prescriptionCreated,
    });
  } catch (error) {
    console.log(error);
  }
};

const doctorlist = async (req, res) => {
  try {
    const DoctorList = await Doctor.find({});
    return res.status(200).send(DoctorList);
  } catch (error) {
    console.log(error);
  }
};

const patientlist = async (req, res) => {
  try {
    const PatientList = await Patient.find({});
    return res.status(200).send(PatientList);
  } catch (error) {
    console.log(error);
  }
};

export default {
  signupPatient,
  signinPatient,
  signupDoctor,
  signinDoctor,
  consultation,
  prescription,
  doctorlist,
  patientlist,
};

import Patient from "../db/model/patient.model.js";
import Doctor from "../db/model/doctor.model.js";
import ConsultationSchema from "../db/model/consultation.model.js";
import PrescriptionSchema from "../db/model/prescription.model.js";

const signupPatient = async (req, res) => {
  try {
    const { name, age, email, phone, surgeryHistory, illnessHistory } =
      req.body;
    const isExist = await Patient.find({ email: email, phone: phone });
    if (isExist) {
      return res.status(409).json({ msg: "email or phone is already exist" });
    }
    const patientCreated = await Patient.create({
      name,
      age,
      email,
      phone,
      surgeryHistory,
      illnessHistory,
    });
    return res.status(201).json({
      msg: "patient is successfull created",
      userId: patientCreated._id,
    });
  } catch (error) {
    console.log(error, "something wrong is with api");
  }
};

const signupDoctor = async (req, res) => {
  try {
    const { name, experience, email, phone, specialty } = req.body;
    const isExist = await Doctor.find({ email: email, phone: phone });

    if (isExist) {
      return res.status(409).json({ msg: "email or phone is already exist" });
    }

    const doctorCreated = await Doctor.create({
      name,
      experience,
      email,
      phone,
      specialty,
    });

    return res.status(201).json({
      msg: "doctor is successfull created",
      userId: doctorCreated._id,
    });
  } catch (error) {
    console.log(error);
  }
};

const signinPatient = async (req, res) => {
  try {
    const { email } = req.body;
    const isExist = await Patient.findOne({
      email,
    });
    if (isExist) {
      return res.status(200).json({
        msg: "patient is found",
        userId: isExist,
      });
    } else {
      return res.status(403).json({ msg: "email doesn't exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

const signinDoctor = async (req, res) => {
  try {
    const { email } = req.body;
    const isExist = await Doctor.findOne({
      email,
    });
    if (isExist) {
      return res.status(200).json({
        msg: "doctor is found",
        userId: isExist,
      });
    } else {
      return res.status(403).json({ msg: "email doesn't exist" });
    }
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

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Patient from "../db/model/patient.model.js";
import Doctor from "../db/model/doctor.model.js";
import ConsultationSchema from "../db/model/consultation.model.js";
import PrescriptionSchema from "../db/model/prescription.model.js";
import cloudinary from "cloudinary";
import deleteFolder from "./deleteFnction/deleteFolder.js";

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const signupPatient = async (req, res) => {
  try {
    const { name, age, email, phone, surgeryHistory, illnessHistory } =
      req.body;
    const profilePhoto = req.file;

    const isExist = await Patient.findOne({
      $or: [{ email: email }, { phone: phone }],
    });
    if (isExist[0]) {
      return res.status(409).json({
        msg: `Email or phone already exists`,
      });
    }

    // Upload the profile photo to Cloudinary
    let profilePhotoUrl = null;
    if (profilePhoto) {
      const uploadResult = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "onlinePrescriptionPlatform/patientProfilePhoto",
      });
      profilePhotoUrl = uploadResult.secure_url;
    }

    // Create the patient record
    const patientCreated = await Patient.create({
      name,
      age,
      email,
      phone,
      surgeryHistory,
      illnessHistory,
      profilePhoto: profilePhotoUrl,
    });

    return res.status(201).json({
      msg: "Patient successfully created",
      userId: patientCreated._id,
    });
  } catch (error) {
    console.log(error, "Something went wrong with the API");
    res.status(500).json({ msg: "Server error" });
  }
};

const signupDoctor = async (req, res) => {
  try {
    const { name, experience, email, phone, specialty } = req.body;
    const profilePhoto = req.file;
    const isExist = await Doctor.find({
      $or: [{ email: email }, { phone: phone }],
    });

    if (isExist[0]) {
      return res.status(409).json({ msg: "email or phone is already exist" });
    }
    let profilePhotoUrl = null;
    if (profilePhoto) {
      const uploadResult = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "onlinePrescriptionPlatform/doctorProfilePhoto",
      });
      profilePhotoUrl = uploadResult.secure_url;
      deleteFolder(req.file.path);
    }

    const doctorCreated = await Doctor.create({
      name,
      experience,
      email,
      phone,
      specialty,
      profilePhoto: profilePhotoUrl,
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

const consultationCreation = async (req, res) => {
  try {
    const {
      patientId,
      doctorId,
      transaction_id,
      currentIllness,
      diabtics,
      allergy,
      other,
    } = req.body;
    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      return res.status(401).send(patientId);
    }

    const consultationCreated = await ConsultationSchema.create({
      patientId: mongoose.Types.ObjectId.createFromHexString(patientId),
      doctorId: mongoose.Types.ObjectId.createFromHexString(doctorId),
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
    // console.log();
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

// no changes needed in doctorlist
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
    const { doctorId } = req.body;
    const patientList = await ConsultationSchema.find({ doctorId: doctorId })
      .populate("patientId")
      .populate("doctorId");
    if (!patientList.length) {
      return res.status(200).send({ msg: "Currently there is no patient" });
    } else {
      return res.status(200).send(patientList);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error" });
  }
};

const findData = async (req, res) => {
  try {
    const { id } = req.body;
    const data = await Doctor.findOne({ _id: id });
    return res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error" });
  }
};
export default {
  signupPatient,
  signinPatient,
  signupDoctor,
  signinDoctor,
  consultationCreation,
  prescription,
  doctorlist,
  patientlist,
  findData,
};

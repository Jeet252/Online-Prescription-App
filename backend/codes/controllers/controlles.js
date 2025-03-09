import Patient from "../db/model/patient.model.js";
import Doctor from "../db/model/doctor.model.js";

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

export default { signupPatient, signinPatient, signupDoctor, signinDoctor };

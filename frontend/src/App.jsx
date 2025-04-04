import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import DoctorSignIn from "./screens/DoctorSignIn";
import DoctorSignUp from "./screens/DoctorSignUp";
import PatientSignIn from "./screens/PatientSignIn";
import PatientSignUp from "./screens/PatientSignUp";
import PatientHome from "./screens/PatientHome";
import DoctorHome from "./screens/DoctorHome";
import ConsultationForm from "./screens/ConsultationForm";
import PrescriptionForm from "./screens/PrescriptionForm";
import PdfScreen from "./screens/PdfScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/signin" element={<DoctorSignIn />} />
        <Route path="/doctor/signup" element={<DoctorSignUp />} />
        <Route path="/patient/signin" element={<PatientSignIn />} />
        <Route path="/patient/signup" element={<PatientSignUp />} />
        <Route path="/patient/home" element={<PatientHome />} />
        <Route path="/doctor/home" element={<DoctorHome />} />
        <Route path="/prescriptionform" element={<PrescriptionForm />} />
        <Route path="/consulationform" element={<ConsultationForm />} />

        <Route path="/pdf" element={<PdfScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

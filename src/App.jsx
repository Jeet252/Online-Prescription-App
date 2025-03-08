import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import DoctorSignIn from "./screens/DoctorSignIn";
import DoctorSignUp from "./screens/DoctorSignUp";
import PatientSignIn from "./screens/PatientSignIn";
import PatientSignUp from "./screens/PatientSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/signin" element={<DoctorSignIn />} />
        <Route path="/doctor/signup" element={<DoctorSignUp />} />
        <Route path="/patient/signin" element={<PatientSignIn />} />
        <Route path="/patient/signup" element={<PatientSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

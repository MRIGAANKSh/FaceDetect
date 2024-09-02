import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar1 from "./Components/navbar/Navbar1";
import LoginSignUp from "./Components/login/login";
import FaceDetection from "./Components/scndpage/scnd2";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar1 /> {/* Navbar remains consistent across pages */}
      <Routes>
        <Route path="/" element={<LoginSignUp />} /> {/* Default to Login/SignUp */}
        <Route path="login-signup" element={<LoginSignUp />} />
        <Route path="face-detect" element={<FaceDetection />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProfileProvider } from "./controllers/ProfileContext.jsx";
import RegistrationForm from "../src/components/Register.jsx";
import Login from "../src/components/login.jsx";
import Profile from "../src/components/profile.jsx";

function App() {
  return (
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ProfileProvider>
  );
}

export default App;

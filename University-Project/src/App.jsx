import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import ApplicantDashboard from "./pages/ApplicantDashboard";
import LoginPage from "./pages/LoginPage";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/staff-dashboard" element={<StaffDashboard />} />
            <Route path="/applicant-dashboard" element={<ApplicantDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
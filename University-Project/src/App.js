import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import ApplicantDashboard from "./pages/ApplicantDashboard";
import ResetPassword from "./pages/ResetPassword";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/staff-dashboard" component={StaffDashboard} />
        <Route path="/applicant-dashboard" component={ApplicantDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
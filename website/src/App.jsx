import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PersonalDetailsForm from "./components/pdf";
import HealthDetailsForm from "./components/hdf";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalDetailsForm />} />
      <Route path="/health-details" element={<HealthDetailsForm />} />
    </Routes>
  );
};

export default App;

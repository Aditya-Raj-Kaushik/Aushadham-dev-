import React, { useState } from "react";
import PersonalDetails from "./components/PersonalDetailForm";
import HealthDetails from "./components/HealthDetailForm";

const App = () => {
  const [step, setStep] = useState(1); 
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full bg-white shadow-md py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-green-700">Aushadham</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700">Home</a>
            <a href="#" className="text-gray-700">Doctors</a>
            <a href="#" className="text-gray-700">Hospitals</a>
            <a href="#" className="text-gray-700">About Us</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow w-full max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Get Started</h2>
        <p className="text-gray-600 mb-6">
          Add your details now so that it's quicker to book your appointment later.
        </p>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between mb-6">
            <div className={`flex-1 text-center ${step === 1 ? "text-green-600" : "text-gray-400"}`}>
              <p className="font-medium">1</p>
              <p className="text-sm">Personal details</p>
            </div>
            <div className={`flex-1 text-center ${step === 2 ? "text-green-600" : "text-gray-400"}`}>
              <p className="font-medium">2</p>
              <p className="text-sm">Health details</p>
            </div>
          </div>
          {step === 1 && <PersonalDetails nextStep={nextStep} />}
          {step === 2 && <HealthDetails prevStep={prevStep} />}
        </div>
      </main>
    </div>
  );
};

export default App;

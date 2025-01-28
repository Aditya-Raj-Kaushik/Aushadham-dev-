import { useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import ProgressBar from "../components/ProgressBar";

export default function ProfileSetup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    dob: "",
    email: "",
    gender: "",
    address: "",
    occupation: "",
    emergencyContact: "",
    healthIssues: [],
    medication: "",
    allergies: "",
  });

  const stepFields = {
    1: ["fullName", "phoneNumber", "dob", "email", "gender", "address", "occupation", "emergencyContact"],
    2: ["healthIssues", "medication", "allergies"],
  };

  const totalFields = Object.keys(formData).length;
  const completedFields = Object.values(formData).filter((value) =>
    Array.isArray(value) ? value.length > 0 : value !== ""
  ).length;
  const progress = (completedFields / totalFields) * 100;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "healthIssues") {
      setFormData((prevData) => ({
        ...prevData,
        healthIssues: checked
          ? [...prevData.healthIssues, value]
          : prevData.healthIssues.filter((issue) => issue !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: type === "checkbox" ? (checked ? value : "") : value });
    }
  };

  const validateForm = () => {
    return stepFields[step].every((field) => {
      const value = formData[field];
      return Array.isArray(value) ? value.length > 0 : value !== "";
    });
  };

  const handleNext = () => {
    if (validateForm()) {
      setStep(step + 1);
    } else {
      alert("Please fill all fields before proceeding.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5FAF5] flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900">Let's Get Started</h1>
        <p className="text-gray-600 mb-6">
          Add your details now so that it's quicker to book your appointment later.
        </p>

        <ProgressBar progress={progress} />

        {step === 1 ? (
          <div className="grid grid-cols-2 gap-6">
            <Input label="Full Name" name="fullName" placeholder="Enter your name" onChange={handleChange} />
            <Input label="Phone Number" name="phoneNumber" placeholder="+91 9493153405" onChange={handleChange} />
            <Input label="Date of Birth" name="dob" type="date" placeholder="DD/MM/YYYY" onChange={handleChange} />
            <Input label="Email ID" name="email" placeholder="Enter your email" onChange={handleChange} />
            <Select label="Gender" name="gender" options={["Select Gender", "Male", "Female", "Other"]} onChange={handleChange} />
            <Input label="Postal Address" name="address" placeholder="Enter your address" onChange={handleChange} />
            <Input label="Occupation" name="occupation" placeholder="Enter your occupation" onChange={handleChange} />
            <Input label="Emergency Contact Number" name="emergencyContact" placeholder="Enter emergency contact" onChange={handleChange} />
          </div>
        ) : (
          <div className="grid gap-6">
            <div>
              <p className="font-semibold text-gray-900">Select your present health issues</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Diabetes", "Gastritis", "High Blood Pressure", "Low Blood Pressure"].map((issue) => (
                  <Checkbox key={issue} label={issue} name="healthIssues" value={issue} onChange={handleChange} />
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Are you on medication?</p>
              <div className="flex gap-6 mt-2">
                <Checkbox label="Yes" name="medication" value="Yes" onChange={handleChange} />
                <Checkbox label="No" name="medication" value="No" onChange={handleChange} />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Do you have any allergies?</p>
              <div className="flex gap-6 mt-2">
                <Checkbox label="Yes" name="allergies" value="Yes" onChange={handleChange} />
                <Checkbox label="No" name="allergies" value="No" onChange={handleChange} />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="border border-gray-600 text-gray-600 px-6 py-2 rounded-lg"
            >
              Back
            </button>
          )}
          <button
            onClick={step === 1 ? handleNext : () => alert("Form submitted!")}
            className={`bg-green-600 text-white px-6 py-2 rounded-lg ${!validateForm() && "opacity-50 cursor-not-allowed"}`}
            disabled={!validateForm()}
          >
            {step === 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

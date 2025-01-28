import { useState } from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Checkbox } from "../components/Checkbox";
import { ProgressBar } from "../components/ProgressBar";

export default function ProfileSetup() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#F5FAF5] flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900">Let's Get Started</h1>
        <p className="text-gray-600 mb-6">
          Add your details now so that it's quicker to book your appointment later.
        </p>

        {/* Progress Bar */}
        <ProgressBar step={step} />

        {step === 1 ? (
          <div className="grid grid-cols-2 gap-6">
            <Input label="Full Name" placeholder="Buragana Uday Kumar" />
            <Input label="Phone Number" placeholder="+91 9493153405" />
            <Input label="Date of Birth" type="date" placeholder="DD/MM/YYYY" />
            <Input label="Email ID" placeholder="Aushadam" />
            <Select label="Gender" options={["Select Gender", "Male", "Female", "Other"]} />
            <Input label="Postal Address" placeholder="Aushadam" />
            <Input label="Occupation" placeholder="Aushadam" />
            <Input label="Emergency Contact Number" placeholder="Aushadam" />
          </div>
        ) : (
          <div className="grid gap-6">
            <div>
              <p className="font-semibold text-gray-900">Select your present health issues</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Diabetes", "Gastritis", "High Blood Pressure", "Low Blood Pressure"].map((issue) => (
                  <Checkbox key={issue} label={issue} />
                ))}
                <button className="text-green-600 border border-green-600 px-3 py-1 rounded-lg">Add more</button>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Are you on medication?</p>
              <div className="flex gap-6 mt-2">
                <Checkbox label="Yes" />
                <Checkbox label="No" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Do you have any allergies?</p>
              <div className="flex gap-6 mt-2">
                <Checkbox label="Yes" />
                <Checkbox label="No" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Select your Lifestyle Habits</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Yoga", "Exercises", "Meditation", "Smoking", "Alcohol consumption"].map((habit) => (
                  <Checkbox key={habit} label={habit} />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} className="border border-gray-600 text-gray-600 px-6 py-2 rounded-lg">Back</button>
          )}
          <button onClick={() => setStep(step < 2 ? step + 1 : step)} className="bg-green-600 text-white px-6 py-2 rounded-lg">
            {step === 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

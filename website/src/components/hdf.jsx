import React, { useState } from "react";

const HealthDetailsForm = () => {
  const [formData, setFormData] = useState({
    presentHealthIssues: [],
    pastHealthIssues: [],
    onMedication: "",
    medicalPrescriptions: null,
    hasAllergies: "",
    allergyTypes: [],
    familyMedicalHistory: [],
    lifestyleHabits: [],
    vaccinations: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e) => {
    setFormData({
      ...formData,
      medicalPrescriptions: e.target.files[0],
    });
  };

  const handleSelectChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleAddMore = (field, value) => {
    if (value && !formData[field].includes(value)) {
      setFormData({
        ...formData,
        [field]: [...formData[field], value],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Health Details Form Data:", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Let's Get Started</h1>
        <p className="text-gray-600 mb-6">
          Add your details now so that it's quicker to book your appointment later.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Select your present health issues</label>
            <div className="flex flex-wrap gap-2">
              {["Diabetes", "Gastritis", "High Blood Pressure", "Low Blood Pressure"].map(
                (issue, index) => (
                  <button
                    key={index}
                    type="button"
                    className="px-4 py-2 bg-gray-200 rounded-lg"
                    onClick={() => handleAddMore("presentHealthIssues", issue)}
                  >
                    {issue}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Select your past health issues</label>
            <div className="flex flex-wrap gap-2">
              {["Diabetes", "Gastritis", "High Blood Pressure", "Low Blood Pressure"].map(
                (issue, index) => (
                  <button
                    key={index}
                    type="button"
                    className="px-4 py-2 bg-gray-200 rounded-lg"
                    onClick={() => handleAddMore("pastHealthIssues", issue)}
                  >
                    {issue}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Are you currently on medication?</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="onMedication"
                  value="Yes"
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="onMedication"
                  value="No"
                  onChange={handleInputChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Upload your present medical prescriptions (if any)
            </label>
            <input
              type="file"
              name="medicalPrescriptions"
              onChange={handleFileUpload}
              className="block w-full text-gray-700 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Do you have any allergies?</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="hasAllergies"
                  value="Yes"
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="hasAllergies"
                  value="No"
                  onChange={handleInputChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Mention your type of allergies</label>
            <input
              type="text"
              name="allergyTypes"
              placeholder="Enter allergies"
              onBlur={(e) => handleAddMore("allergyTypes", e.target.value)}
              className="block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Family Medical History</label>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Relation"
                className="w-1/3 px-4 py-2 border rounded-lg"
                onBlur={(e) =>
                  handleAddMore("familyMedicalHistory", {
                    relation: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="History"
                className="w-2/3 px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Select your lifestyle habits</label>
            <div className="flex flex-wrap gap-2">
              {["Yoga", "Exercises", "Meditation", "Smoking", "Alcohol consumption"].map(
                (habit, index) => (
                  <button
                    key={index}
                    type="button"
                    className="px-4 py-2 bg-gray-200 rounded-lg"
                    onClick={() => handleAddMore("lifestyleHabits", habit)}
                  >
                    {habit}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Did you take any vaccination? If yes, please select one from below
            </label>
            <input
              type="text"
              name="vaccinations"
              placeholder="Enter vaccines"
              onBlur={(e) => handleAddMore("vaccinations", e.target.value)}
              className="block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-500"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Edit
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthDetailsForm;

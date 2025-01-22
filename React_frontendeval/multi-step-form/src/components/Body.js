import React, { useState } from "react";

const Body = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");

  const validation = () => {
    switch (step) {
      case 1:
        if (name.trim() === "") {
          setError("Please enter your name.");
          return false;
        }
        break;
      case 2:
        if (email.trim() === "") {
          setError("Please enter your email.");
          return false;
        }
        break;
      case 3:
        if (date.trim() === "") {
          setError("Please enter your date of birth.");
          return false;
        }
        break;
      case 4:
        if (password.trim() === "") {
          setError("Please enter your password.");
          return false;
        }
        break;
      default:
        return true;
    }
    setError(""); // Clear error if validation passes
    return true;
  };

  const handleNext = () => {
    if (validation()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (validation()) {
      setAlert("Form has been submitted successfully.");
      setSubmit(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-md">
        {!submit ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-5">
              Step {step} of 4
            </h2>
            {step === 1 && (
              <div className="space-y-4">
                <label className="block text-left font-medium text-gray-700">
                  Name
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  className="w-full bg-blue-500 text-white py-2 rounded-lg"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <label className="block text-left font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="flex justify-between">
                  <button
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <label className="block text-left font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="flex justify-between">
                  <button
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <label className="block text-left font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="flex justify-between">
                  <button
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded-lg"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              {alert}
            </h2>
            <p className="text-gray-700">Here are your details:</p>
            <ul className="text-left mt-4 space-y-2">
              <li>
                <span className="font-medium">Name:</span> {name}
              </li>
              <li>
                <span className="font-medium">Email:</span> {email}
              </li>
              <li>
                <span className="font-medium">Date of Birth:</span> {date}
              </li>
              <li>
                <span className="font-medium">Password:</span> {password}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;

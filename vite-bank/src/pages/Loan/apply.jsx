import React, { useState } from "react";
import axios from "axios"; // Make sure axios is installed in your project
import toast from "react-hot-toast";

const LoanApplication = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [duration, setDuration] = useState(""); // Added duration as an example
  const userId = 1; // Assuming user_id is 1, replace with actual user ID as needed

  // Purpose options for the loan
  const purposeOptions = [
    "Education",
    "House",
    "Small Business",
    "Medical",
    "Car Loan",
    "Home Improvement",
    "Debt Consolidation",
    "Vacation",
    "Wedding",
    "Personal Expenses",
  ];

  // Handler for submitting the loan application
  const applyLoanHandler = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/loans/apply", // Use full URL if CORS is needed
        {
          user_id: userId, // Include user_id
          amount: loanAmount,
          duration: duration,
          purpose: purpose, // Update to duration instead of purpose
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      //console.log("Loan application submitted:", response.data);
      toast.success("Load applied successfully");
    } catch (error) {
      console.error("Error applying for loan:", error);
    }
  };

  return (
    <div className="flex h-full justify-center items-center min-h-[75vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Apply for Loan</h2>
        <form onSubmit={applyLoanHandler} className="space-y-4">
          <input
            type="number"
            placeholder="Loan Amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          >
            <option value="">Select Purpose of Loan</option>
            {purposeOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Duration in months"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanApplication;

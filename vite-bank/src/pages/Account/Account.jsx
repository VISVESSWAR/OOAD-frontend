import React, { useState } from "react";
import axios from "axios";

const Account = () => {
  const [userId] = useState(8);
  const [accountType, setAccountType] = useState("Savings"); // Default to Savings account
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/accounts/apply",
        {
          user_id: userId,
          account_type: accountType,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data.message || "Error creating account");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Apply for an Account
      </h2>
      <form onSubmit={handleSubmit}>
        {/* User ID */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="userId"
          >
            User ID
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Account Type */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="accountType"
          >
            Account Type
          </label>
          <select
            id="accountType"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="Savings">Savings</option>
            <option value="Current">Current</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Apply
        </button>
      </form>

      {/* Message Display */}
      {message && (
        <div className="mt-4 text-center">
          <p className="text-green-500 font-semibold">{message}</p>
        </div>
      )}
    </div>
  );
};

export default Account;

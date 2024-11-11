import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure you have axios installed

const AccountDetails = () => {
  const [accounts, setAccounts] = useState([]); // State for storing account data
  const [loading, setLoading] = useState(true); // State for loading state
  const [error, setError] = useState(null); // State for error handling
  const [filter, setFilter] = useState("All"); // State for filter (All, Current, Savings)

  // Fetch account details for user_id: 1 when the component mounts
  useEffect(() => {
    // Replace with your backend API URL
    const fetchAccountDetails = async () => {
      try {
        // Make GET request to fetch account details
        const response = await axios.get(
          "http://localhost:5000/api/accounts/user/8" // Ensure this endpoint matches your backend
        );
        setAccounts(response.data); // Set accounts details in state
        setLoading(false);
      } catch (err) {
        setError("Error fetching account details");
        setLoading(false); // Set loading state to false after error
      }
    };

    fetchAccountDetails();
  }, []); // Empty array ensures this effect runs once when the component mounts

  // Handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value); // Update the filter state with selected option
  };

  // Filter accounts based on selected filter (Current, Savings, or All)
  const filteredAccounts = accounts.filter((account) => {
    if (filter === "All") {
      return true; // Return all accounts if "All" is selected
    }
    return account.account_type === filter; // Filter by account type
  });

  // Render loading state or error state
  if (loading) {
    return (
      <div className="text-center text-xl">Loading account details...</div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 text-xl">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Account Details
      </h2>

      {/* Filter Dropdown */}
      <div className="mb-6 text-center">
        <label
          htmlFor="accountTypeFilter"
          className="text-lg font-medium text-gray-700 mr-2"
        >
          Filter by Account Type:
        </label>
        <select
          id="accountTypeFilter"
          value={filter}
          onChange={handleFilterChange}
          className="p-2 rounded-md border border-gray-300 text-gray-700 bg-white"
        >
          <option value="All">All Accounts</option>
          <option value="Current">Current Account</option>
          <option value="Savings">Savings Account</option>
        </select>
      </div>

      {filteredAccounts.length > 0 ? (
        filteredAccounts.map((account) => (
          <div
            key={account.id}
            className="bg-white p-8 rounded-lg shadow-lg mb-6 border border-gray-300 hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700">
                  Account Number
                </h3>
                <p className="text-xl text-gray-900">
                  {account.account_number}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">
                  Account Type
                </h3>
                <p className="text-xl text-gray-900">{account.account_type}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700">Balance</h3>
              <p className="text-xl text-gray-900">{account.balance}</p>
            </div>

            <div className="flex justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700">
                  Created At
                </h3>
                <p className="text-xl text-gray-900">
                  {new Date(account.created_at).toLocaleDateString()}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700">
                  Updated At
                </h3>
                <p className="text-xl text-gray-900">
                  {new Date(account.updated_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600 text-xl">No accounts found.</p>
      )}
    </div>
  );
};

export default AccountDetails;

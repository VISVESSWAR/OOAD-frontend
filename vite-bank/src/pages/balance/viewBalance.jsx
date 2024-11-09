import { useEffect, useState } from "react";

const ViewBalance = () => {
  const [balance, setBalance] = useState(null); // Initialize balance state
  const [loading, setLoading] = useState(true); // Loading state for balance fetch

  // Fetch balance from API or context when component mounts
  useEffect(() => {
    const fetchBalance = async () => {
      setLoading(true);
      try {
        // Replace this with actual API call
        const response = await fetch("/api/user/balance"); // Example API endpoint
        const data = await response.json();
        setBalance(data.balance); // Set balance state
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="flex h-full justify-center items-center min-h-[50vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Account Balance</h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <p className="text-center text-4xl font-semibold text-green-600">
            ${balance !== null ? balance.toFixed(2) : "Unavailable"}
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewBalance;

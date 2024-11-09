import { useState } from "react";

const ApplyCard = () => {
  const [cardType, setCardType] = useState("credit"); // Default to credit card
  const [applying, setApplying] = useState(false);
  const [message, setMessage] = useState("");

  const submitApplication = async (e) => {
    e.preventDefault();
    setApplying(true);
    setMessage("");

    try {
      // Replace with actual API endpoint to apply for a card
      const response = await fetch("/api/apply-card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cardType }),
      });

      if (response.ok) {
        setMessage(`Your ${cardType} card application has been submitted!`);
      } else {
        setMessage("Failed to submit the application. Try again.");
      }
    } catch (error) {
      console.error("Application error:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setApplying(false);
    }
  };

  return (
    <div className="flex h-full justify-center items-center min-h-[75vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Apply for Card</h2>
        <form onSubmit={submitApplication} className="w-full">
          <div className="mb-4">
            <label htmlFor="cardType" className="block text-gray-700">
              Choose Card Type
            </label>
            <select
              id="cardType"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={applying}
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
          >
            {applying ? "Submitting..." : "Apply"}
          </button>
          {message && (
            <p className="text-center mt-4 text-green-600 font-semibold">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ApplyCard;

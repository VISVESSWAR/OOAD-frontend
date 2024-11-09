import { useState } from "react";

const LoanApplication = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [purpose, setPurpose] = useState("");

  const applyLoanHandler = (e) => {
    e.preventDefault();
    console.log(`Loan applied for amount ${loanAmount} with purpose: ${purpose}`);
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
          <input
            type="text"
            placeholder="Purpose of Loan"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <button type="submit" className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanApplication;

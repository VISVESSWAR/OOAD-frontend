import { useState } from "react";

const TransactionHistory = () => {
  const [transactions] = useState([
    { id: 1, date: "2024-10-01", description: "Deposit", amount: "$500" },
    { id: 2, date: "2024-10-10", description: "Withdrawal", amount: "$200" },
  ]);

  return (
    <div className="flex h-full justify-center items-center min-h-[75vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Transaction History</h2>
        <ul className="space-y-3">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="flex justify-between bg-gray-50 p-3 rounded-lg shadow">
              <span>{transaction.date}</span>
              <span>{transaction.description}</span>
              <span>{transaction.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;

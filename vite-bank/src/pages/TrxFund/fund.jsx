import { useState } from "react";

const TransferFunds = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [balance, setBalance] = useState(10000);  // Example balance
  const minBalance = 500;

  const submitHandler = (e) => {
    e.preventDefault();
    if (balance - amount < minBalance) {
      alert("Insufficient balance to complete the transaction.");
    } else {
      setBalance((prev) => prev - amount);
      console.log(`Transferred ${amount} to ${recipient}`);
    }
  };

  return (
    <div className="flex h-full justify-center items-center min-h-[75vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Transfer Funds</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <input
            type="text"
            placeholder="Recipient Account or UPI"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <button type="submit" className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Transfer
          </button>
        </form>
        <p className="text-gray-600 mt-4">Current Balance: ${balance}</p>
      </div>
    </div>
  );
};

export default TransferFunds;

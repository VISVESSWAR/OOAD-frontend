import { useState } from "react";

const AccountManagement = () => {
  const [account, setAccount] = useState({
    accountNumber: "123456789",
    accountType: "Savings",
    balance: "$10,000",
  });

  return (
    <div className="flex h-full justify-center items-center min-h-[75vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Account Details</h2>
        <div className="space-y-4">
          <p><strong>Account Number:</strong> {account.accountNumber}</p>
          <p><strong>Account Type:</strong> {account.accountType}</p>
          <p><strong>Balance:</strong> {account.balance}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;

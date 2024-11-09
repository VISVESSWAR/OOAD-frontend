import { useState } from "react";

const AdminRequests = () => {
  const [loanRequests] = useState([{ id: 1, user: "JohnDoe", amount: 5000 }]);
  const [cardRequests] = useState([{ id: 1, user: "JaneSmith", type: "Credit Card" }]);

  const handleLoanApproval = (id) => {
    console.log(`Loan request ${id} approved.`);
  };

  const handleCardApproval = (id) => {
    console.log(`Card request ${id} approved.`);
  };

  return (
    <div className="flex h-full justify-center items-center min-h-[75vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Requests</h2>
        <h3 className="text-xl font-semibold mt-4">Loan Requests</h3>
        <ul className="space-y-3">
          {loanRequests.map((request) => (
            <li key={request.id} className="flex justify-between bg-gray-50 p-3 rounded-lg shadow">
              <span>{request.user} - ${request.amount}</span>
              <button
                onClick={() => handleLoanApproval(request.id)}
                className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mt-4">Card Requests</h3>
        <ul className="space-y-3">
          {cardRequests.map((request) => (
            <li key={request.id} className="flex justify-between bg-gray-50 p-3 rounded-lg shadow">
              <span>{request.user} - {request.type}</span>
              <button
                onClick={() => handleCardApproval(request.id)}
                className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminRequests;

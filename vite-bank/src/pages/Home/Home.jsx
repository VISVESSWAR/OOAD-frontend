import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserData } from "../../context/UserContext.jsx"; // Assuming UserData contains role info

const Dashboard = () => {
  const role="user"; // Assume 'role' is either "user" or "admin"

  return (
    <div className="flex h-full justify-center items-center min-h-[75vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Dashboard</h2>
        <p className="text-gray-600 text-center mb-6">Welcome to your banking dashboard.</p>
        
        {/* Display User Dashboard Options */}
        {role === "user" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <Link to="/add" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Add Account
            </Link>
            <Link to="/account" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Account Details
            </Link>
            <Link to="/transactions" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Transaction History
            </Link>
            <Link to="/transfer" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Transfer Funds
            </Link>
            <Link to="/beneficiary" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Add Beneficiary
            </Link>
            <Link to="/balance" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              View Balance
            </Link>
            <Link to="/apply-loan" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Apply for Loan
            </Link>
            <Link to="/apply-card" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Apply for Credit/Debit Card
            </Link>
            <Link to="/settings" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Profile & Security Settings
            </Link>
            <Link to="/update" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Update Info
            </Link>
          </div>
        )}

        {/* Display Admin Dashboard Options */}
        {role === "admin" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/manage-users" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Manage Users
            </Link>
            <Link to="/loan-requests" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Loan Approvals
            </Link>
            <Link to="/card-requests" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Card Approvals
            </Link>
            <Link to="/view-transactions" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              View All Transactions
            </Link>
            <Link to="/reports" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Generate Reports
            </Link>
            <Link to="/dispatch-card" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Dispatch Credit/Debit Card
            </Link>
            <Link to="/revoke-loan" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Revoke Loan Request
            </Link>
            <Link to="/settings" className="bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700">
              Admin Settings
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

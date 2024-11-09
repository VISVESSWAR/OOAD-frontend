import { useState } from "react";

const AddBeneficiary = () => {
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");

  const addBeneficiaryHandler = (e) => {
    e.preventDefault();
    console.log(`Beneficiary ${beneficiaryName} added.`);
  };

  return (
    <div className="flex h-full justify-center items-center min-h-[75vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Beneficiary</h2>
        <form onSubmit={addBeneficiaryHandler} className="space-y-4">
          <input
            type="text"
            placeholder="Beneficiary Name"
            value={beneficiaryName}
            onChange={(e) => setBeneficiaryName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <input
            type="text"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <input
            type="text"
            placeholder="IFSC Code"
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <button type="submit" className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Add Beneficiary
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBeneficiary;

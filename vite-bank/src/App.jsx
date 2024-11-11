//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import "./App.css";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Footer from "./components/Footer/Footer";
import { UserData } from "./context/UserContext.jsx";
import ProfileSettings from "./pages/ProfileAndSettings/profileAndSetting.jsx";
import TransferFunds from "./pages/TrxFund/fund.jsx";
import TransactionHistory from "./pages/TransactionHistory/trxhistory.jsx";
import AccountManagement from "./pages/AccountManagement/accManagement.jsx";
import LoanApplication from "./pages/Loan/apply.jsx";
import AdminRequests from "./pages/Loan/adminLoan.jsx";
import AddBeneficiary from "./pages/Beneficiary/beneficiary.jsx";
import Dashboard from "./pages/Home/Home.jsx";
import ViewBalance from "./pages/balance/viewBalance.jsx";
import ApplyCard from "./pages/card/cdcard.jsx";
import UpdateProfile from "./pages/UpdateDetails/updateDetails.jsx";
import Account from "./pages/Account/Account.jsx";
import AccountDetails from "./pages/Account/AccountDetails.jsx";

function App() {
  const { isAuth, user, loading } = UserData();
  //console.log("user:", user, isAuth);
  return (
    <>
      <BrowserRouter>
        <Header isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Account />} />
          <Route path="account" element={<AccountDetails />} />
          <Route path="/transactions" element={<TransactionHistory />} />
          <Route path="/transfer" element={<TransferFunds />} />
          <Route path="/settings" element={<ProfileSettings />} />
          <Route path="/apply-loan" element={<LoanApplication />} />
          <Route path="/apply-card" element={<ApplyCard />} />
          <Route path="/approve" element={<AdminRequests />} />
          <Route path="/loan" element={<LoanApplication />} />
          <Route path="/balance" element={<ViewBalance />} />
          <Route path="/update" element={<UpdateProfile />} />
          <Route path="/beneficiary" element={<AddBeneficiary />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

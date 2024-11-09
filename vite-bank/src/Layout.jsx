import React from "react";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout({isAuth}) {
  return (
    <main className="flex flex-col grow justify-center items-center min-w-screen w-full min-h-screen h-full">
      <Header isAuth={isAuth}/>
      <Outlet/>
      <Footer />
    </main>
  );
}

export default Layout;

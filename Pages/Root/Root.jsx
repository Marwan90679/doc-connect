import React from "react";
import Navbar from "../../src/Components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../src/Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="plus-jakarta-sans bg-[#EFEFEF] min-h-screen flex flex-col">
      <Navbar />
      
      <div className="min-h-[calc(100vh-250px)]">
        <Outlet />
        <ToastContainer />
      </div>
      
      <Footer />
    </div>
  );
};

export default Root;

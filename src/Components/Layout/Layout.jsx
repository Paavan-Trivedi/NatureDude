import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className=" flex">
      <Navbar></Navbar>
      <div className="lg:w-[75%] lg:ms-[25%] md:w-[100%] md:ms-[0%] md:mt-[10vh] w-[100%] ms-[0%] mt-[10vh] lg:mt-0  px-1 ">
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;

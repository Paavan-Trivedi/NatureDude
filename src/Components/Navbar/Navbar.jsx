import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faTimes,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

import Data from "../../Data/ProductData.json";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className=" bg-[#e6c4c4] lg:h-[100vh] lg:w-[25%] md:h-[10vh] md:w-[100%] h-[10vh] w-[100%] lg:block md:flex flex justify-content-between align-items-center fixed lg:overflow-y-auto scroll-smooth overflow-visible z-[99]">
      <div className="  border-b-4 border-[#7DAF19]   lg:block hidden pb-0  ">
        <img src="/images/logo.png" className=" h-[20vh]" alt="logo"></img>
      </div>
      <div className="  lg:pb-10 pb-0 lg:hidden md:block block ">
        <img src="/images/logo.png" className=" h-[10vh]" alt="logo"></img>
      </div>
      <div className="  lg:hidden block px-4 relative z-1">
        <FontAwesomeIcon
          className=" text-[20px] "
          icon={toggle ? faTimes : faBars}
          onClick={handleToggle}
        />
      </div>
      <div
        className={`${
          toggle ? "block" : "d-none"
        }  absolute top-0 right-0  w-[80%] h-[100vh] bg-[#e6c4c4be] backdrop-blur-sm   pt-12 `}
      >
        <div className=" flex flex-col justify-center align-items-center gap-4 py-3 boredr border-b-4 border-[#7DAF19] pb-10">
          <Link
            to="/"
            className=" text-[#674422] active:text-[#db5b5b]  text-decoration-none"
          >
            Home
          </Link>
          <Link
            to="/WhyUs"
            className=" text-[#674422] active:text-[brown] hover:text-[brown] text-decoration-none"
          >
            Why Us?
          </Link>
          <div
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <Link
              to="/Product"
              className=" text-[#674422] active:text-[brown] hover:text-[brown] text-decoration-none"
            >
              Product Category
              <FontAwesomeIcon icon={faCaretDown} className="ms-1" />
            </Link>
            {showDropdown && (
              <div
                className="absolute md:left-[37%]  md:top-[32%] top-[19%] left-[22%] h-[290px] overflow-x-auto mt-2 w-[200px]  p-2 bg-[#f7f2f2e6] backdrop:bg-transparent rounded shadow"
                style={{ scrollbarWidth: "none" }}
              >
                {/* Your dropdown content here */}
                <ul>
                  {Data.map((product, index) => (
                    <Link
                      key={index}
                      to={`/Product/${product.product_name}`}
                      className=" p-2 ps-0 hover:text-[#b44343] "
                    >
                      {product.product_name}
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link
            to="/Blog"
            className=" text-[#674422] active:text-[brown] hover:text-[brown] text-decoration-none"
          >
            Blog
          </Link>
          <Link
            to="/AboutUs"
            className=" text-[#674422] active:text-[brown] hover:text-[rgb(165,42,42)] text-decoration-none"
          >
            About Us
          </Link>
          <Link
            to="/ContactUs"
            className=" text-[#674422] active:text-[brown] hover:text-[brown] text-decoration-none"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex justify-center gap-4 text-[#674422] py-3 border-b-4 border-[#7DAF19] pb-10">
          <a href="#" className="text-[#674422]" target="_blank">
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          </a>
          <a href="#" className="text-[#674422]" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a href="#" className="text-[#674422]" target="_blank">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
          <a href="#" className="text-[#674422]" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <div className=" md:hidden lg:block hidden">
        <div className=" flex flex-col justify-center align-items-center gap-4 py-3 boredr border-b-4 border-[#7DAF19] pb-10">
          <Link
            to="/"
            className=" text-[#674422] active:text-[#db5b5b]  text-decoration-none"
          >
            Home
          </Link>
          <Link
            to="/WhyUs"
            className=" text-[#674422] active:text-[brown] hover:text-[brown] text-decoration-none"
          >
            Why Us?
          </Link>
          <div
            className=" relative"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <Link
              to="/Product"
              className=" text-[#674422]  active:text-[brown] hover:text-[brown] text-decoration-none"
            >
              Product Category
              <FontAwesomeIcon icon={faCaretDown} className="ms-1" />
            </Link>
            {showDropdown && (
              <div
                className="absolute right-[-30px] top-4  h-[290px] overflow-x-auto mt-2 w-[200px]  p-2 bg-[#f7f2f2e6] backdrop:bg-transparent rounded shadow"
                style={{ scrollbarWidth: "none" }}
              >
                {/* Your dropdown content here */}
                <ul>
                  {Data.map((product, index) => (
                    <Link
                    
                      to={`/Product/${product.product_name}`}
                    
                      className=" nav-link p-2 ps-0 hover:text-[red]"
                      key={index}
                    >
                      {product.product_name}
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link
            to="/Blog"
            className=" text-[#674422] active:text-[brown] hover:text-[brown] text-decoration-none"
          >
            Blog
          </Link>
          <Link
            to="/AboutUs"
            className=" text-[#674422] active:text-[brown] hover:text-[rgb(165,42,42)] text-decoration-none"
          >
            About Us
          </Link>
          <Link
            to="/ContactUs"
            className=" text-[#674422] active:text-[brown] hover:text-[brown] text-decoration-none"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex justify-center gap-4 text-[#674422] py-3 border-b-4 border-[#7DAF19] pb-10">
          <a href="#" className="text-[#674422]" target="_blank">
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          </a>
          <a href="#" className="text-[#674422]" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a href="#" className="text-[#674422]" target="_blank">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
          <a href="#" className="text-[#674422]" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

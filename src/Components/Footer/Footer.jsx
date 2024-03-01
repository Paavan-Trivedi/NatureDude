import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <>
      <div className=" row  justify-center items-center  border border-b border-[white] w-[100%] bg-black py-4 m-0">
        <div className=" col-lg-4 col-md-4 col-12 align-self-start  flex flex-col justify-center align-items-center gap-6 ">
          <img className=" h-[200px] w-[200px]" src="/images/Footer/FooterLogo.png" alt="" />
          <div className="flex  gap-4 text-[#4C180A] py-2">
              <a href="#" className="text-[#7DAF19]" target="_blank">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </a>
              <a href="#" className="text-[#7DAF19]" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </a>
              <a href="#" className="text-[#7DAF19]" target="_blank">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </a>
              <a href="#" className="text-[#7DAF19]" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
              </a>
            </div>
        </div>
        <div className="col-lg-8 col-md-8 col-12  row justify-center ">
          <div className="col-6 ">
            <h3 className="border-b-4 w-[150px] text-center border-[#7DAF19] text-white">
              About Us
            </h3>
            <p className="text-white">
              Bringing India's Finest <br /> to the World: Your Global FMCG
              Partner.
            </p>
            
          </div>
          <div className="col-6">
            <h3 className="border-b-4 w-[150px] text-center border-[#7DAF19] text-white">
              Address
            </h3>
            <div className="flex gap-2">
              <i
                class="fa-solid fa-location-dot fa-xl mt-3"
                style={{ color: "#ffffff" }}
              ></i>
              <p className="text-white">
                {" "}
                <b>Nature Dude</b>
                <br />
                Plot No. F-46/22-B, <br />
                Raghuveer Industrial Park,
                <br /> Ruvapari Road,
                <br /> Bhavnagar - 364001,
                <br /> Gujarat, India.
              </p>
            </div>
          </div>
          <div className=" col-6">
            <h3 className="border-b-4 w-[150px] text-center border-[#7DAF19] text-white">
              Contact
            </h3>
            <div className="flex gap-1">
              <i
                class="fa-solid fa-phone fa-xl   mt-4"
                style={{ color: "#ffffff" }}
              ></i>
              <div className="m-[0rem] flex flex-col">
                <a className="m-[0rem] flex flex-col text-white text-decoration-none" href="tel:9724743444">
                  +91 9724743444
                </a>
                <a className="m-[0rem] flex flex-col text-white text-decoration-none" href="tel:518 692 4500">
                  +1 518 692 4500
                </a>
              </div>
            </div>
            <div className="flex mt-3 gap-2 ">
              <i
                class="fa-solid fa-envelope fa-xl mt-3"
                style={{ color: "#ffffff" }}
              ></i>
              <a className="justify-center mt-1 text-white items-center text-decoration-none" href="mailto:info@naturedude.in">
                info@naturedude.in
              </a>
            </div>
          </div>
          <div className=" col-6">
            <h3 className="border-b-4 text-center w-[150px] text-white border-[rgb(125,175,25)]">
              Quick Links
            </h3>
            <ul className="list-none flex flex-col gap-2 text-white">
              <Link to="/" className=" nav-link">Home</Link>
              <Link to="/WhyUs" className=" nav-link">Why Us?</Link>
              <Link to="/Product" className=" nav-link">Product Category</Link>
              <Link to="/Blog" className=" nav-link">Blog</Link>
              <Link to="/AboutUs" className=" nav-link">About Us</Link>
              <Link to="/ContactUs" className=" nav-link">Contact Us</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-black text-[white] h-[60px] py-3 text-center">
        <p>Nature Dude @{CurrentYear} All Rights Reserved </p>
      </div>
    </>
  );
};

export default Footer;

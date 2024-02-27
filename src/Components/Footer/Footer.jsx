import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <>
      <div className=" flex flex-col justify-center items-center pt-2 h-[500px] w-[100%] bg-black">
        <div className="  h-[150px] w-[150px]">
          <img src="./images/Footer/FooterLogo.png" alt="" />
        </div>
        <div className="grid grid-cols-4 py-4 justify-center ">
          <div className="px-3">
            <h3 className="border-b-4 w-[150px] border-[#7DAF19] text-white">
              About Us
            </h3>
            <p className="text-white">
              Bringing India's Finest <br /> to the World: Your Global FMCG
              Partner.
            </p>
            <div className="flex  gap-4 text-[#674422] py-2">
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
          <div>
            <h3 className="border-b-4 w-[150px] border-[#7DAF19] text-white">
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
          <div>
            <h3 className="border-b-4 w-[150px] border-[#7DAF19] text-white">
              Contact
            </h3>
            <div className="flex gap-1">
              <i
                class="fa-solid fa-phone fa-xl   mt-4"
                style={{ color: "#ffffff" }}
              ></i>
              <div className="m-[0rem] flex flex-col">
                <p className="m-[0rem] flex flex-col text-white">
                  +91 9724743444
                </p>
                <p className="m-[0rem] flex flex-col text-white">
                  +1 518 692 4500
                </p>
              </div>
            </div>
            <div className="flex mt-3 gap-2 ">
              <i
                class="fa-solid fa-envelope fa-xl mt-3"
                style={{ color: "#ffffff" }}
              ></i>
              <p className="justify-center mt-1 text-white items-center">
                info@naturedude.in
              </p>
            </div>
          </div>
          <div>
            <h3 className="border-b-4 w-[170px] text-white border-[#7DAF19]">
              Quick Links
            </h3>
            <ul className="list-none flex flex-col gap-2 text-white">
              <li>Home</li>
              <li>Why Us?</li>
              <li>Product Category</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Contact Us</li>
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

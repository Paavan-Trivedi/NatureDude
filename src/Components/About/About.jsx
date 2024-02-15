import React from "react";
import Layout from "../Layout/Layout";
import ExportProductsImg from "../../assets/deliverytruck.jpg";
const About = () => {
  return (
    <Layout>
      <div className="flex flex-col py-5 justify-center items-center">
        <div className="flex flex-col justify-between  w-[1000px] h-[500px] border-8 border-tl rounded-tr-[100px] rounded-bl-[100px] border-dashed">
          <div className="w-[150px] bg-transparent absolute  h-[150px] border-l-amber-950 border-t-amber-950 border-t-[25px] border-l-[25px]"></div>
          <div className="flex justify-center items-center">
            <h1 className="text-lime-800">About Us</h1>
          </div>

          <div className=" flex justify-center items-center">
            <div className="w-[500px] relative flex px-8 justify-start items-center">
              <img src={ExportProductsImg} alt="" />
            </div>
            <div className="w-[400px]  relative h-[350px]  flex flex-col justify-center items-center">
              <h3 className="text-left w-[400px] text-amber-950 ">
                Welcome to Nature Dude
              </h3>
              <p>
                Nature Dude stands as a prominent aggregator platform catering
                to the diverse needs of importers and exporters across the
                globe. As a secure and dynamic platform, we specialise in
                bridging the gap between foreign and domestic markets, fostering
                robust networks for various brands on a global scale. Our
                unwavering commitment revolves around providing top-notch
                merchandise, enhancing customer loyalty, and delivering expert
                consultations to establish a formidable global presence in the
                realm of international trade.
              </p>
            </div>
          </div>
          <div className=" flex  justify-end  items-end">
            <div className="w-[150px] bg-transparent absolute   h-[150px] border-r-lime-800 border-b-lime-800 border-r-[25px] border-b-[25px]"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

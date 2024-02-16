import React from "react";
import Layout from "../Layout/Layout";
import ExportProductsImg from "../../assets/deliverytruck.jpg";
const About = () => {
  const AboutData = [
    {
      id: 1,
      title: "Comprehensive Solutions",
      text: "At Nature Dude, we pride ourselves on offering end-to-end solutions for your commercial development. From cultivating relationships with farmers and manufacturers to collaborating with distributors and importers, we ensure a seamless supply and distribution process.",
    },
    {
      id: 2,
      title: "International Trading Expertise",
      text: "Navigating the intricacies of globally scaled business can be challenging. Our team of experienced consultants at Nature Dude is dedicated to guiding you through every step of the import and export journey. This includes a meticulous selection of suppliers, skilful negotiation of contracts, establishment of convenient delivery terms, optimisation of carriers and routes, efficient customs clearance, storage solutions, and targeted distribution strategies.",
    },
    {
      id: 3,
      title: "Market Resilience",
      text: "We understand the potential hurdles of entering new markets. Our quality consultants work tirelessly to prevent hostility from new markets and ensure your brand is embraced, rather than rejected. This proactive approach helps build a strong customer base, fostering long-term success in international trade.",
    },
    {
      id: 4,
      title: "Stability for Buyers and Sellers",
      text: "Our overarching goal in the global trade market is to create a stable and reliable platform for both Buyers and Sellers. Nature Dude ensures a mutually beneficial environment for all parties involved by fostering trust, transparency, and efficiency.",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col py-5 justify-center items-center">
        <div className="flex flex-col   w-[1000px] h-[500px]  ">
          <div className="flex justify-center items-center">
            <h1 className="text-lime-800">About Us</h1>
          </div>

          <div className=" flex justify-center  items-center">
            <div className="w-[500px] relative flex px-8  items-center">
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
        </div>
        <div className="grid grid-cols-2 gap-5 py-6">
          {AboutData.map((item) => (
            <div className="flex flex-col justify-between  w-[400px] h-[500px] border-4 border-lime-800 border-tl rounded-tr-[100px] rounded-bl-[100px] border-dashed">
              <div className="w-[150px] bg-transparent absolute  h-[150px] border-l-amber-950 border-t-amber-950 border-t-[15px] border-l-[15px]"></div>
              <div className="flex pt-5 justify-center items-center">
                <h4 className="text-lime-800">{item.title}</h4>
              </div>

              <div className=" flex justify-center items-center">
                <div className="w-[300px]  relative h-[150px]  flex flex-col justify-center items-center">
                  <p>{item.text}</p>
                </div>
              </div>
              <div className=" flex   justify-end  items-end">
                <div className="w-[150px] bg-transparent absolute   h-[150px] border-r-lime-800 border-b-lime-800 border-r-[15px] border-b-[15px]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;

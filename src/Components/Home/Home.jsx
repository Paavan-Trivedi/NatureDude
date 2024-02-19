import React from "react";
import Navbar from "../Navbar/Navbar";
import Layout from "../Layout/Layout";
import Slider from "../Functionality/Slider/Slider";
import Service from "../../Data/ServiceCapability.json";
import { ProductSlider } from "../Functionality/Slider/Slider";
import { CertificationsSlider } from "../Functionality/Slider/Slider";

const Home = () => {
  const Service_data = Service;
  console.log(Service_data);
  return (
    <Layout>
      <Slider></Slider>
      <div className=" my-16">
        <h2 className=" text-[red] text-center mb-5">Service Capability</h2>
        <div className=" flex flex-wrap justify-content-center align-items-center gap-3 ">
          {Service &&
            Service.map((item, index) => (
              <div
                className=" hover:bg-[#ec5555] d-flex rounded  flex-column justify-content-center gap-4 align-items-center h-[200px] w-[250px] border-[1px] border-[black] "
                key={index}
              >
                <img src={item.icon} className="h-[15%] w-[13%]"></img>
                <h4>{item.name}</h4>
              </div>
            ))}
        </div>
      </div>
      <ProductSlider></ProductSlider>

      <div className=" my-32">
        <div className=" flex flex-wrap justify-content-center align-items-center gap-3">
          <div className=" bg-[#f6d8d8]  flex flex-col justify-between align-items-center gap-5  border rounded p-3 h-[350px] w-[300px]">
            <div className=" flex justify-center">
              <img
                className="h-[50px] w-[50px]"
                src="images/Sincerity.png"
              ></img>
            </div>

            <div>
              <h3 className=" text-center">Sincerity</h3>
              <p className=" text-center">
                Sincerity & seriousness is our major philosophy. We deliver what
                we promise - with superior assistance & meet deadlines in the
                stipulated time.
              </p>
            </div>
          </div>
          <div className=" bg-[#f6d8d8] rounded flex flex-col justify-between align-items-center gap-5  border p-3 h-[350px] w-[300px]">
            <div className=" flex justify-center">
              <img
                className="h-[50px] w-[50px]"
                src="images/binoculars.png"
              ></img>
            </div>

            <div>
              <h3 className=" text-center">Customer Centric Approach</h3>
              <p className=" text-center">
                We help our clientele to improve their competitiveness in the
                global trade markets, to enhance the quality of products thanks
                to local culture and experience.
              </p>
            </div>
          </div>
          <div className=" bg-[#f6d8d8] rounded flex flex-col justify-between align-items-center gap-5  border p-3 h-[350px] w-[300px]">
            <div className=" flex justify-center">
              <img
                className="h-[50px] w-[50px]"
                src="images/handshake.png"
              ></img>
            </div>

            <div>
              <h3 className=" text-center">Commitment</h3>
              <p className=" text-center">
                To establish & to continually develop human relationships aimed
                to build accessible markets, safer & more open to cultural
                exchange.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CertificationsSlider></CertificationsSlider>
    </Layout>
  );
};

export default Home;

import React from "react";
import Navbar from "../Navbar/Navbar";
import Layout from "../Layout/Layout";
import Slider, { TestimonialsSlider } from "../Functionality/Slider/Slider";
import Service from "../../Data/ServiceCapability.json";
import { ProductSlider } from "../Functionality/Slider/Slider";
import { CertificationsSlider } from "../Functionality/Slider/Slider";

const Home = () => {
  const Service_data = Service;
  console.log(Service_data);
  return (
    <Layout>
      <Slider></Slider>
      <div className=" poppins my-16">
        <h2 className="text-[#7DAF19] text-center mb-5">Service Capability</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-center max-w-[70%] md:ml-48 md:h-[400px]">
          {Service &&
            Service.map((item, index) => (
              <div
                className={`hover:bg-[#FAEADD] d-flex rounded flex-column justify-content-center gap-4 align-items-center w-[250px] h-[200px] xl:h-[200px] xl:w-[250px] lg:h-[200px] lg:w-[250px] md:h-[180px] md:w-[200px] border-[1px] border-[black]`}
                key={index}
                style={{
                  position: index >= 3 ? "relative" : "static",
                  top: index >= 3 ? "60%" : "auto",
                  left: index >= 3 ? "75%" : "auto",
                  transform: index >= 3 ? "translate(-30%, -50%)" : "none",
                }}
              >
                <img
                  src={item.icon}
                  className="h-[15%] w-[13%]"
                  alt={item.name}
                />
                <h4>{item.name}</h4>
              </div>
            ))}
        </div>
      </div>
      <ProductSlider></ProductSlider>

      <div className=" poppins my-32">
        <div className=" flex flex-wrap justify-content-center align-items-center gap-3">
          <div className=" bg-[#FAEADD]  flex flex-col justify-between align-items-center gap-5  border rounded p-3 h-[350px] w-[300px]">
            <div className=" flex justify-center">
              <img
                className="h-[50px] w-[50px]"
                src="images/Sincerity.png"
              ></img>
            </div>

            <div>
              <h3 className=" text-center">Sincerity</h3>
              <p className="  text-[#674422] text-center">
                Sincerity & seriousness is our major philosophy. We deliver what
                we promise - with superior assistance & meet deadlines in the
                stipulated time.
              </p>
            </div>
          </div>
          <div className=" bg-[#FAEADD] rounded flex flex-col justify-between align-items-center gap-5  border p-3 h-[350px] w-[300px]">
            <div className=" flex justify-center">
              <img
                className="h-[50px] w-[50px]"
                src="images/binoculars.png"
              ></img>
            </div>

            <div>
              <h3 className=" text-center">Customer Centric Approach</h3>
              <p className=" text-[#674422] text-center">
                We help our clientele to improve their competitiveness in the
                global trade markets, to enhance the quality of products thanks
                to local culture and experience.
              </p>
            </div>
          </div>
          <div className=" bg-[#FAEADD] rounded flex flex-col justify-between align-items-center gap-5  border p-3 h-[350px] w-[300px]">
            <div className=" flex justify-center">
              <img
                className="h-[50px] w-[50px]"
                src="images/handshake.png"
              ></img>
            </div>

            <div>
              <h3 className=" text-center">Commitment</h3>
              <p className=" text-[#674422] text-center">
                To establish & to continually develop human relationships aimed
                to build accessible markets, safer & more open to cultural
                exchange.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSlider></TestimonialsSlider>
      <CertificationsSlider></CertificationsSlider>
    </Layout>
  );
};

export default Home;

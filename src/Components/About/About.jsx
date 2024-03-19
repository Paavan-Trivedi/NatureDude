import React,{useEffect} from "react";
import Layout from "../Layout/Layout";
import ExportProductsImg from "../../assets/deliverytruck.jpg";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  const AboutData = [
    {
      id: 1,
      title: "Comprehensive Solutions",
      text: "At Nature Dude, we pride ourselves on offering end-to-end solutions for your commercial development. From cultivating relationships with farmers and manufacturers to collaborating with distributors and importers, we ensure a seamless supply and distribution process.",
    },
    {
      id: 2,
      title: "Market Resilience",
      text: "We understand the potential hurdles of entering new markets. Our quality consultants work tirelessly to prevent hostility from new markets and ensure your brand is embraced, rather than rejected. This proactive approach helps build a strong customer base, fostering long-term success in international trade.",
    },
    {
      id: 3,
      title: "Stability for Buyers and Sellers",
      text: "Our overarching goal in the global trade market is to create a stable and reliable platform for both Buyers and Sellers. Nature Dude ensures a mutually beneficial environment for all parties involved by fostering trust, transparency, and efficiency.",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div class="flex flex-col poppins pb-5 justify-center items-center">
        <div className="w-full bg-[#FAEADD] h-[30vh] flex rounded-b justify-center align-items-center">
          <div className=" text-center flex flex-col justify-center align-items-center">
            <h2 className="text-[#7DAF19]">About Us</h2>
            <div className=" text-[#4C180A] flex">
              <Link className="nav-link " to="/">
                Home{" "}
              </Link>{" "}
              /{" "}
              <p className="nav-link " to="/AboutUs">
                About Us
              </p>
            </div>
          </div>
        </div>
        <div class="xl:flex md:flex-col lg:flex flex-col py-5 mt-5 border-4 border-r-lime-800 border-b-lime-800 border-l-amber-950 border-t-amber-950 rounded-3xl shadow-2xl   md:w-[77%] lg:w-[80%] xl:w-[90%]  md:h-[750px] lg:h-[750px] xl:h-[500px] w-[300px] h-[900px] ">
          <div class=" xl:flex   justify-between p-4 items-center">
            <div class=" md:w-[530px] relative flex border-4 border-gray-900 items-center">
              <img
                src={ExportProductsImg}
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div class="w-full xl:w-[50%] relative h-[350px] flex flex-col justify-center items-center">
              <h3 class="text-left w-full text-[#674422] text-xl md:text-2xl md:mt-[25px] mt-[300px]">
                Welcome to Nature Dude
              </h3>
              <p class="w-full  text-base text-[#4C180A]">
                Nature Dude stands as a prominent aggregator platform catering
                to the diverse needs of importers and exporters across the
                globe. As a secure and dynamic platform, we specialize in
                bridging the gap between foreign and domestic markets, fostering
                robust networks for various brands on a global scale.
                <p class="py-2">
                  Our unwavering commitment revolves around providing top-notch
                  merchandise, enhancing customer loyalty, and delivering expert
                  consultations to establish a formidable global presence in the
                  realm of international trade.
                </p>
              </p>
            </div>
          </div>
        </div>

        <div class="w-[80%] md:py-5 md:px-5 xl:py-5 xl:px-5 lg:py-5 lg:px-5">
          <p class="font-bold text-[#7DAF19] text-2xl md:text-4xl xl:text-4xl lg:text-4xl ">
            Why Choose Nature Dude for Your Global Trade Endeavors?
          </p>
          <p class="text-lg font-semibold text-[#4C180A] w-full md:w-[90%]">
            Fast-moving consumer goods make for an ideal choice for export trade
            owing to their easy delivery and reasonably low prices and wide
            range of products under a single domain. Such fast-moving consumer
            products are in hot demand, making the global trend a perfect
            choice.
          </p>
          <p class="text-lg font-semibold text-[#4C180A] w-full md:w-[90%]">
            Nature Dude aims to provide the proper forum to connect foreign
            trade between buyers and sellers, lowering the gap between consumer
            product demands and supplies. These consumer goods involve products
            from some of the country's leading producers, Like, Gulab Oils,
            Hajoori Beverages, Satvam, Sheetal Foods, Auzat, etc.
          </p>
        </div>

        <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 py-7">
          {AboutData.map((item) => (
            <div class="flex flex-col justify-between w-[300px]  h-[450px] border-[2px] border-lime-800 border-tl rounded-tr-[100px] rounded-bl-[100px]  mx-auto">
              <div class="w-[150px] bg-transparent absolute h-[150px] border-l-amber-950 border-t-amber-950 border-t-[15px] border-l-[15px]"></div>
              <div class="flex pt-5 justify-center items-center">
                <h4 class="text-[#7DAF19] w-[200px] text-2xl font-bold text-center">
                  {item.title}
                </h4>
              </div>

              <div class="flex justify-center items-center">
                <div class="w-[250px] text-[15px] relative h-[150px] text-[#674422] flex flex-col justify-center items-center">
                  <p>{item.text}</p>
                </div>
              </div>
              <div class="flex justify-end items-end">
                {/* <div class="w-[150px] bg-transparent absolute h-[150px] border-r-lime-800 border-b-lime-800 border-r-[15px] border-b-[15px]"></div> */}
              </div>
            </div>
          ))}
        </div>

        <div class="flex flex-col justify-between xl:w-[700px] xl:h-[300px] md:w-[700px] md:h-[300px] lg:w-[700px] lg:h-[300px] w-[300px] h-[550px] border-[2px] border-lime-800 border-tl rounded-tr-[100px] rounded-bl-[100px]  mx-auto">
          <div class="w-[150px] bg-transparent absolute h-[150px] border-l-amber-950 border-t-amber-950 border-t-[15px] border-l-[15px]"></div>
          <div class="flex pt-4 justify-center items-center">
            <h4 class="text-[#7DAF19] w-[500px] text-2xl font-bold text-center">
              International Trading Expertise
            </h4>
          </div>

          <div class="flex justify-center items-center">
            <div class="w-[500px] text-base relative h-[150px] text-[#674422] flex flex-col justify-center items-center">
              <p>
                Navigating the intricacies of globally scaled business can be
                challenging. Our team of experienced consultants at Nature Dude
                is dedicated to guiding you through every step of the import and
                export journey. This includes a meticulous selection of
                suppliers, skillful negotiation of contracts, establishment of
                convenient delivery terms, optimization of carriers and routes,
                efficient customs clearance, storage solutions, and targeted
                distribution strategies.
              </p>
            </div>
          </div>
          <div class="flex justify-end items-end">
            {/* <div class="w-[150px] bg-transparent absolute h-[150px] border-r-lime-800 border-b-lime-800 border-r-[15px] border-b-[15px]"></div> */}
          </div>
        </div>

        <div class="w-full md:w-[80%] py-5 px-5">
          <p class="text-lg font-semibold text-[#4C180A] ">
            In essence, Nature Dude is not just an international trading
            company; it is your strategic partner in navigating the complexities
            of global commerce. Join us on a journey towards stability, growth,
            and success in the ever-evolving landscape of international trade.
          </p>
        </div>

        <h2 class="poppinsBold text-4xl text-[#7DAF19]">Our Team</h2>

        <div class="home-container grid xl:flex md:flex lg:flex h-[900px] xl:h-[500px] lg:h-[500px] md:h-[500px] justify-center items-center grid-cols-1 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 xl:gap-5 lg:gap-5 md:gap-5">
          <div class="profile-card ">
            <div class="img">
              <img
                src="./images/Profile/Anmol.jpg"
                alt="Anmol Shah"
                class="  object-cover"
              />
            </div>
            <div class="caption">
              <h3>Anmol Shah</h3>
              <p>Managing Director</p>
              <div class="social-links">
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div class="profile-card">
            <div class="img">
              <img
                src="./images/Profile/JaspalBhai.jpeg"
                alt="JaspalSinh Gohil"
                class="  object-cover"
              />
            </div>
            <div class="caption">
              <h3>JaspalSinh Gohil</h3>
              <p>Founding Partner</p>
              <div class="social-links">
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

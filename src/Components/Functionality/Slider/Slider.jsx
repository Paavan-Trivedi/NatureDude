import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
  EffectFade,
  EffectCube,
} from "swiper/modules";
import Products from "../../../Data/ProductData.json";
import TestimonialsData from "../../../Data/Testimonials.json";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import ButtonComp from "../../ButtonComp";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ContactUs");
  };
  const handleClick2 = () => {
    navigate("/Blog");
  };
  const handleClick3 = () => {
    navigate("/AboutUs");
  };
  const handleClick4 = () => {
    navigate("/WhyUs");
  };
  return (
    <Swiper
      // install Swiper modules
      // effect={'cube'}
      // grabCursor={true}
      // cubeEffect={{
      //   shadow: true,
      //   slideShadows: true,
      //   shadowOffset: 20,
      //   shadowScale: 0.94,
      // }}
      style={{
        backgroundImage: "url(images/slider-bg.jpg)",
        backgroundSize: "contain",
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      A11y={true}
      // onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      className="h-[70vh] mb-5 bg-[]  "
      speed={1000}
      loopPreventsSliding={true}
    >
      <SwiperSlide className=" h-full w-full">
        <div
          style={{
            backgroundImage: "url(images/Main-Products/WhyUS.jpg)",
            backgroundSize: "cover",
          }}
          className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center"
        >
          {/* <div className=" col-12 col-lg-6 text-start order-lg-0 order-1 leading-[18px]">
            <p className=" text-[#7DAF19] text-[32px]">We Provide</p>
            <h1>
              {" "}
              Consultations To{" "}
              <span className=" underline text-[#7DAF19]">Establish</span> A
              Strong
              <br /> Global Presence{" "}
            </h1>
          </div> */}
          {/* <div className=" col-12 col-lg-6 flex justify-center order-lg-1 order-0">
            <img
              className=" md:w-[200px] md:h-[200px] lg:h-[350px] lg:w-[350px] h-[150px] w-[150px]  object-cover rounded-full "
              src="images/Footer/FooterBack.png"
            ></img>
          </div> */}
          <div
            onClick={handleClick4}
            className="flex justify-start ml-28 items-center h-full py-5"
          >
            <ButtonComp Bname={"Why Us"} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className=" h-full w-full">
        <div
          style={{
            backgroundImage: "url(images/Main-Products/AboutUs.jpg)",
            backgroundSize: "cover",
          }}
          className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center"
        >
          {/* <div className=" col-12 col-lg-6 text-start order-lg-0 order-1 leading-[18px]">
            <p className=" text-[#7DAF19] text-[32px]">We Are</p>
            <h1>
              {" "}
              Leading Aggregator{" "}
              <span className=" underline text-[#7DAF19]">Platform</span> For
              Importers
              <br />
              And Exporters{" "}
            </h1>
          </div> */}
          {/* <div className=" col-12 col-lg-6 flex justify-center order-lg-1 order-0">
            <img
              className=" md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] h-[150px] w-[150px]  object-cover rounded-full "
              src="images/Footer/FooterBack.png"
            ></img>
          </div> */}
          <div
            onClick={handleClick3}
            className="flex justify-start ml-28 items-center h-full py-5"
          >
            <ButtonComp Bname={"About Us"} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className=" h-full w-full">
        <div
          style={{
            backgroundImage: "url(images/Main-Products/Blogs.jpg)",
            backgroundSize: "cover",
          }}
          className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center"
        >
          {/* <div className=" col-12 col-lg-6 text-start order-lg-0 order-1 leading-[18px]">
            <p className=" text-[#7DAF19] text-[32px]">Delivering</p>
            <h1>
              Quality <span className=" underline text-[#7DAF19]">Product</span>{" "}
              Around
              <br /> The World{" "}
            </h1>
          </div> */}
          {/* <div className=" col-12 col-lg-6 flex justify-center order-lg-1 order-0">
            <img
              className=" md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] h-[150px] w-[150px]  object-cover rounded-full "
              src="images/Footer/FooterBack.png"
            ></img>
          </div> */}
          <div
            onClick={handleClick2}
            className="flex justify-center  items-center h-full py-5"
          >
            <ButtonComp Bname={"Blogs"} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className=" h-full w-full">
        <div
          style={{
            backgroundImage: "url(images/Main-Products/prod1.jpeg)",
            backgroundSize: "cover",
          }}
          className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center"
        >
          {/* <div className=" col-12 col-lg-6 text-start order-lg-0 order-1 leading-[18px]">
            <p className=" text-[#7DAF19] text-[32px]">Delivering</p>
            <h1>
              Quality <span className=" underline text-[#7DAF19]">Product</span>{" "}
              Around
              <br /> The World{" "}
            </h1>
          </div> */}
          {/* <div className=" col-12 col-lg-6 flex justify-center order-lg-1 order-0">
            <img
              className=" md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] h-[150px] w-[150px]  object-cover rounded-full "
              src="images/Footer/FooterBack.png"
            ></img>
          </div> */}
          <div
            onClick={handleClick}
            className="flex justify-end mr-28 items-center h-full py-5"
          >
            <ButtonComp Bname={"Contact Us"} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export const ProductSlider = () => {
  const Data = Products;

  const [spp, setSpp] = useState(1);
  return (
    <div className="my-32">
      <h2 className="text-[#7DAF19] mb-5 text-center">Our Products</h2>
      <div className="lg:hidden md:hidden block">
        {" "}
        {/* Render only on small screens */}
        <Swiper
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCoverflow,
          ]}
          slidesPerView={1}
          // onSlideChange={(swiper) => handleSlideChange(swiper)}
          loop={true}
          className="h-[50vh] w-[70%] mx-auto mb-5"
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loopPreventsSliding={true}
        >
          {Products.map((item, index) => (
            <SwiperSlide
              key={index}
              className="h-full w-full bg-[#FAEADD] border-4 border-[#7DAF19]"
            >
              <div className="h-full w-[100%] m-0 p-0 row justify-content-center align-items-center bg-[#ffffff58] offset-10">
                <img
                  className="h-[80%] w-[30%] object-cover"
                  src={item.image}
                  alt={item.product_name}
                />
                <div className="  text-center">
                  <h3 className="text-[#674422]">{item.product_name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:block md:block">
        {" "}
        {/* Render only on medium and large screens */}
        <Swiper
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCoverflow,
          ]}
          slidesPerView={3}
          // onSlideChange={(swiper) => handleSlideChange(swiper)}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="h-[70vh] w-[100%] mb-5"
          speed={1000}
          loopPreventsSliding={true}
        >
          {Products.map((item, index) => (
            <SwiperSlide
              key={index}
              className="h-full w-full bg-[#FAEADD] border-2 border-[#7DAF19]"
            >
              <div className="h-full w-[100%] m-0 p-0 row justify-content-center align-items-center bg-[#ffffff58] offset-10">
                <img
                  className="h-[80%] w-[30%] object-cover"
                  src={item.image}
                  alt={item.product_name}
                />
                <div className="text-center">
                  <h3>{item.product_name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export const TestimonialsSlider = () => {
  const [widthscreen, setWidthScreen] = useState(screen.width);

  return (
    <div className="poppins my-16 ">
      <h2 className=" text-[#7DAF19] mb-5  text-center">Testimonials</h2>
      <Swiper
        // install Swiper modules
        // effect={'coverflow'}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        style={{
          // backgroundImage: "url(images/product-bg.png)",
          backgroundSize: "contain",
        }}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCoverflow,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        A11y={true}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        className="h-[80vh] lg:w-[60%] md:w-[60%] w-[100%]  mb-5 bg-[] "
        // lg:h-[80vh] md:h-[80vh] h-[25vh]
        speed={1000}
        loopPreventsSliding={true}
      >
        {TestimonialsData &&
          TestimonialsData.map((item, index) => (
            <SwiperSlide className="swiperslide h-full " key={index}>
              <div className=" h-full w-[100%]  m-0 p-0 absolute row justify-content-center align-items-center  offset-10">
                {/* <img
                className="h-[80%] w-[30%]  object-contain "
                src="images/fssai.avif"
              ></img> */}
                <p className=" ">{item.review}</p>
                <h3 className=" absolute lg:right-[-8%] md:right-[-8%] right-[-2%] lg:bottom-[-40%] md:bottom-[-45%] bottom-[-45%] text-[#ddb88c]">
                  {item.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export const CertificationsSlider = () => {
  return (
    <div className="my-16 ">
      <h2 className=" text-[#7DAF19] mb-5 text-center">Certifications</h2>
      <Swiper
        // install Swiper modules
        // effect={'coverflow'}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        style={{
          backgroundImage: "url(images/product-bg.png)",
          backgroundSize: "contain",
        }}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCoverflow,
        ]}
        // spaceBetween={50}
        slidesPerView={3}
        // navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        A11y={true}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        className="lg:h-[80vh] md:h-[80vh] h-[25vh]   mb-5 bg-[] "
        speed={1000}
        loopPreventsSliding={true}
      >
        <SwiperSlide className=" h-full w-full  border">
          <div className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center bg-[#ffffff58] offset-10">
            <img
              className="h-[80%] w-[30%]  object-contain "
              src="images/fssai.avif"
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-full w-full  border">
          <div className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center bg-[#ffffff58] offset-10">
            <img
              className="h-[80%] w-[50%]  object-contain "
              src="images/spices_board.png"
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-full w-full border">
          <div className=" h-full w-[90%] m-0 p-0 row justify-content-center align-items-center bg-[#ffffff58] offset-10">
            <img
              className="h-[80%] w-[30%]  object-contain "
              src="images/apeda.png"
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-full w-full  border">
          <div className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center bg-[#ffffff58] offset-10">
            <img
              className="h-[80%] w-[30%]  object-contain "
              src="images/fssai.avif"
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-full w-full  border">
          <div className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center bg-[#ffffff58] offset-10">
            <img
              className="h-[80%] w-[50%]  object-contain "
              src="images/spices_board.png"
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" h-full w-full border">
          <div className=" h-full w-[90%] m-0 p-0 row justify-content-center align-items-center bg-[#ffffff58] offset-10">
            <img
              className="h-[80%] w-[30%]  object-contain "
              src="images/apeda.png"
            ></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

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

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/scrollbar";

export default () => {
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
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      className="h-[70vh] mb-5 bg-[]  "
      speed={1000}
      loopPreventsSliding={true}
    >
      <SwiperSlide className=" h-full w-full">
        <div className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center">
          <div className=" col-12 col-lg-6 text-start order-lg-0 order-1 leading-[18px]">
            <p className=" text-[red] text-[32px]">We Provide</p>
            <h1>
              {" "}
              Consultations To{" "}
              <span className=" underline text-[red]">Establish</span> A Strong
              <br /> Global Presence{" "}
            </h1>
          </div>
          <div className=" col-12 col-lg-6 flex justify-center order-lg-1 order-0">
            <img
              className=" md:w-[200px] md:h-[200px] lg:h-[350px] lg:w-[350px] h-[150px] w-[150px]  object-cover rounded-full "
              src="images/home-slide-1.png"
            ></img>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className=" h-full w-full">
        <div className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center">
          <div className=" col-12 col-lg-6 text-start order-lg-0 order-1 leading-[18px]">
            <p className=" text-[red] text-[32px]">We Are</p>
            <h1>
              {" "}
              Leading Aggregator{" "}
              <span className=" underline text-[red]">Platform</span> For
              Importers
              <br />
              And Exporters{" "}
            </h1>
          </div>
          <div className=" col-12 col-lg-6 flex justify-center order-lg-1 order-0">
            <img
              className=" md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] h-[150px] w-[150px]  object-cover rounded-full "
              src="images/home-slide-2.png"
            ></img>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className=" h-full w-full">
        <div className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center">
          <div className=" col-12 col-lg-6 text-start order-lg-0 order-1 leading-[18px]">
            <p className=" text-[red] text-[32px]">Delivering</p>
            <h1>
              Quality <span className=" underline text-[red]">Product</span>{" "}
              Around
              <br /> The World{" "}
            </h1>
          </div>
          <div className=" col-12 col-lg-6 flex justify-center order-lg-1 order-0">
            <img
              className=" md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] h-[150px] w-[150px]  object-cover rounded-full "
              src="images/home-slide-3.png"
            ></img>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export const ProductSlider = () => {
  const Data = Products;
  return (
    <div className="my-16 ">
      <h2 className=" text-[red] mb-5 text-center">Our Products</h2>
      <Swiper
        // install Swiper modules
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
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
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        A11y={true}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        className="lg:h-[80vh] mb-5 "
        speed={1000}
        loopPreventsSliding={true}
      >
        {Data &&
          Data.map((item, index) => (
            <SwiperSlide
              className=" h-full w-full bg-[#e6c4c4] border"
              key={index}
            >
              <div className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center bg-[#ffffff58] offset-10">
                <img
                  className="h-[80%] w-[30%]  object-cover "
                  src={item.image}
                ></img>
                <div className=" text-center">
                  <h3>{item.product_name}</h3>
                </div>
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
      <h2 className=" text-[red] mb-5 text-center">Certifications</h2>
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
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        A11y={true}
        onSwiper={(swiper) => console.log(swiper)}
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

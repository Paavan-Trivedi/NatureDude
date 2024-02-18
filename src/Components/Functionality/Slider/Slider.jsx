import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      style={{backgroundImage: 'url(images/slider-bg.jpg)',backgroundSize:"contain"}}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      // spaceBetween={50}
      // slidesPerView={1}
      // navigation
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      A11y={true}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
   
      className="h-[70vh] mb-5 bg-[] "
      speed={1000}
      loopPreventsSliding={true}
    >
      <SwiperSlide className=" h-full w-full" >
        <div  className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center">
          <div className=" col-12 col-lg-6 text-start order-lg-0 order-1 leading-[18px]">
            <p className=" text-[red] text-[32px]">We Provide</p>
            <h1> Consultations To <span className=" underline text-[red]">Establish</span> A Strong<br/> Global Presence </h1>

          </div>
          <div className=" col-12 col-lg-6 flex justify-center order-lg-1 order-0">
          <img
            className=" md:w-[200px] md:h-[200px] lg:h-[350px] lg:w-[350px] h-[150px] w-[150px]  object-cover rounded-full "
            src="images/home-slide-1.png"
          ></img></div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide className=" h-full w-full">
        <div  className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center">
        <div className=" col-12 col-lg-6 text-start order-lg-0 order-1 leading-[18px]">
            <p className=" text-[red] text-[32px]">We Are</p>
            <h1>  Leading Aggregator <span className=" underline text-[red]">Platform</span>  For Importers<br/>And Exporters </h1>

          </div>
          <div className=" col-12 col-lg-6 flex justify-center order-lg-1 order-0">
          <img
            className=" md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] h-[150px] w-[150px]  object-cover rounded-full "
            src="images/home-slide-2.png"
          ></img></div>
        </div>
      </SwiperSlide>
  
      <SwiperSlide className=" h-full w-full">
        <div  className=" h-full w-[100%] m-0 p-0 row justify-content-center align-items-center">
        <div className=" col-12 col-lg-6 text-start order-lg-0 order-1 leading-[18px]">
            <p className=" text-[red] text-[32px]">Delivering</p>
            <h1>Quality <span className=" underline text-[red]">Product</span>  Around<br/> The World </h1>

          </div>
          <div className=" col-12 col-lg-6 flex justify-center order-lg-1 order-0">
          <img
            className=" md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] h-[150px] w-[150px]  object-cover rounded-full "
            src="images/home-slide-3.png"
          ></img></div>
        </div>
      </SwiperSlide>
    
    
    </Swiper>
  );
};


import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarrouselImg from "./cards/CarrouselImg";

export default function Carrousel({ data }) {
  return (
    <div className="">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={2}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <CarrouselImg url_img={item.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

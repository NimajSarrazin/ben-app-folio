import React from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CardCarrouselItem } from "../CardCarrouselItem";
SwiperCore.use([Pagination]);

export default function CardSwiper({ title, data }) {
  return (
    <div className="mb-12">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
          element: ".swiper-pagination bg-red-800",
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="experience-single relative">
              <div className="p-4">
                <div className="w-0 h-0 border-b-2 border-gray-900 border-opacity-100 border-solid transform translate-y-[-50%] translate-x-[-50%] -rotate-45 absolute top-0 left-1/2"></div>
                <CardCarrouselItem
                  year={item.year}
                  years={item.years}
                  job={item.job}
                  content={item.content}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination bg-red-800"></div>
    </div>
  );
}

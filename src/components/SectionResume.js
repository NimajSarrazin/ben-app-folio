import React from "react";
import TitleSection from "./TitleSection";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide, autoplay } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CardCarrouselItem } from "./cards/CardCarrouselItem";

SwiperCore.use([Pagination]);

const items = [
  {
    year: "2018",
    job: "Job 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2019",
    job: "Job 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2020",
    job: "Job 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2021",
    job: "Job 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function SectionResume() {
  return (
    <div className="bg-[#151515]">
      <TitleSection title="My Resume" icon="your-icon.svg" />
      <div className="flex justify-center items-center">
        <div className="w-full max-w-[800px] mx-4 py-10">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 0 }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-[#222]">
                  <CardCarrouselItem
                    year={item.year}
                    job={item.job}
                    content={item.content}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

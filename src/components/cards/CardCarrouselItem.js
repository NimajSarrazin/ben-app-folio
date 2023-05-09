import React from "react";

export const CardCarrouselItem = ({ year, job, content }) => {
  return (
    <div className="swiper-slide">
      <h3>{year}</h3>
      <h4>{job}</h4>
      <p>{content}</p>
    </div>
  );
};

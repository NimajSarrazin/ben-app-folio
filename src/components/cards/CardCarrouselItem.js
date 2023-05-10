import React from "react";

export const CardCarrouselItem = ({ year, job, content, years }) => {
  return (
    <div className="text-base">
      <h3 className="text-[#ff5d56] font-normal">{year} - {years}</h3>
      <h4 className="text-white font-medium mb-10">{job}</h4>
      <p className="text-[#707070]">{content}</p>
    </div>
  );
};

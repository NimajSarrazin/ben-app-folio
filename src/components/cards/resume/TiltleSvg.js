import React from 'react'
import { iconsSvg } from "@/data/DataResume";

export default function TiltleSvg({title}) {
  return (
    <h3 className="flex items-center text-white font-normal text-lg bg-[#ff5d56] uppercase p-3 w-48 mb-12">
      <i className="mr-3">{iconsSvg[0].icon} </i>
      {title}
    </h3>
  );
}

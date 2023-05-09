import React from "react";


export default function TitleSection({ title, description }) {
  return (
    <div className="container text-center relative py-10 pb-20">
      <p className="text-[#ff5d56] text-4xl font-berkshire md:text-5xl lg:text-7xl">
        {title}
      </p>
      <p className="text-[#707070] text-sm md:text-md lg:text-xl">
        {description}
      </p>
      <div className="flex space-x-1 justify-center mt-4">
        <div className="w-2 h-2 rounded-full bg-red-500 lg:h-8 lg:w-8"></div>
        <div className="w-2 h-2 rounded-full bg-red-500 lg:h-8 lg:w-8"></div>
        <div className="w-2 h-2 rounded-full bg-red-500 lg:h-8 lg:w-8"></div>
        <div className="w-2 h-2 rounded-full bg-red-500 lg:h-8 lg:w-8"></div>
      </div>
    </div>
  );
}

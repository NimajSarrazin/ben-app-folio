import React from "react";



export default function TitleSection({ title, description }) {
  return (
    <div className="text-center relative py-10 pb-20">
      <p className="text-[#ff5d56] text-4xl font-berkshire">
        {title}
      </p>
      <p className="text-[#707070] text-sm mb-10 md:text-md lg:text-xl">
        {description}
      </p>
      <div className="flex space-x-1 justify-center mt-4">
        <div className="w-2 h-2 rounded-full bg-red-500 lg:h-4 lg:w-4"></div>
        <div className="w-2 h-2 rounded-full bg-red-500 lg:h-4 lg:w-4"></div>
        <div className="w-2 h-2 rounded-full bg-red-500 lg:h-4 lg:w-4"></div>
        <div className="w-2 h-2 rounded-full bg-red-500 lg:h-4 lg:w-4"></div>
      </div>
    </div>
  );
}

import React from "react";

export default function TitleSection({ title, description }) {
  return (
    <div className="container text-center relative py-10">
      <p className="text-[#ff5d56] text-lg font-Berkshire mb-4 md:text-2xl">{title}</p>
      <p className="text-[#707070] text-sm">{description}</p>
      <div className="flex space-x-1 justify-center mt-4">
        <div class="w-2 h-2 rounded-full bg-red-500"></div>
        <div class="w-2 h-2 rounded-full bg-red-500"></div>
        <div class="w-2 h-2 rounded-full bg-red-500"></div>
        <div class="w-2 h-2 rounded-full bg-red-500"></div>
      </div>
    </div>
  );
}

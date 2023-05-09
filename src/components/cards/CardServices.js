import { Dataservices } from "@/data/DataServices";
import React from "react";

export default function CardServices() {
  return (
    <div className="pb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {Dataservices.map((service, index) => (
        <div
          key={index}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#222] dark:border-[#333] text-center lg:p-16"
        >
          <div>{service.icon}</div>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {service.title}
          </h3>
          <p className="mb-3 font-normal text-[#707070]">{service.content}</p>
        </div>
      ))}
    </div>
  );
}

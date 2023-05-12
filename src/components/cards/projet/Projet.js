import React, { useState } from "react";
import Link from "next/link";

export default function Projet({
  img,
  title,
  extract,
  slug,
  posts,
  createdAT,
}) {
  return (
    <Link href={`post/${slug}`}>
      <div>
        <div className="py-10">
          <div className="relative">
            <img
              src={img}
              alt={title}
              className="object-cover w-full h-40 sm:h-56 md:h-64  cursor-pointer"
            />
            <div className="absolute bottom-0 left-3 group-hover:block"></div>
          </div>
          <div className="hover:text-gray-600">
            <p className="mt-2 font-bold text-lg ">{title}</p>
            <p className="mt-2 text-sm md:text-base text-[#707070]">
              {extract} {createdAT}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

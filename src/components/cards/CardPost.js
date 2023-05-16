import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import CardComment from "./CardComment";

export default function CardPost({ url_img, title, content, createdAt, post }) {
  return (
    <div>
      <div className="xl:w-full">
        <img
          src={url_img}
          alt={title}
          className="w-full md:w-1/2 h-auto pb-10"
        />
        <div
        >
          <p className="text-xl text-center text-gray-950 pb-5">{createdAt}</p>
          <h2 className="text-2xl font-semibold text-gray-700 pb-4">{title}</h2>
          <div className="pb-10">{documentToReactComponents(content)}</div>
          {/* <CardComment /> */}
        </div>
      </div>
    </div>
  );
}

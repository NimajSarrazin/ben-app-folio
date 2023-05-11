import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import CardComment from "./CardComment";
import Layout from "@/layout/Layout";

export default function CardPost({ url_img, title, content, createdAt, post }) {
  return (
    <div className="lg:w-2/3">
      <img
        src={url_img}
        alt={title}
        className="w-full md:w-1/2 h-auto pb-10"
      />
      <p className="text-xl text-center text-gray-300 pb-5">{createdAt}</p>
      <h2 className="text-2xl font-semibold text-gray-700 pb-4">{title}</h2>
      <div className="pb-10">{documentToReactComponents(content)}</div>
      {/* <CardComment /> */}
    </div>
  ); 
}

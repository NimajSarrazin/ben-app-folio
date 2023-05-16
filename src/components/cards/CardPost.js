import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import CardComment from "./CardComment";


export default function CardPost({
  url_img,
  title,
  content,
  createdAt,
  projetImg,
  post,
  stack,
}) {
  return (
    <div className="">
      <div className="">
        <div className="pb-10">
          <img src={url_img} alt={title} className=" h-auto shadow-2xl" />
        </div>
        <p className="text-xl text-center text-gray-950 pb-5">
          Projet réalisé le: <strong>{createdAt}</strong>
        </p>
        <div className="md:flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 pb-4">
              {title}
            </h2>
            <div className="pb-10 max-w-xs lg:max-w-xl">
              {documentToReactComponents(content)}
            </div>
          </div>
          <div className="">{documentToReactComponents(stack)}</div>
          <div>{projetImg}</div>
          {/* <CardComment /> */}
        </div>
      </div>
    </div>
  );
}

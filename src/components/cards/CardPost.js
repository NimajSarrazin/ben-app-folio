import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { motion } from "framer-motion";
import CardComment from "./CardComment";

export default function CardPost({ url_img, title, content, createdAt, post }) {
  return (
    <div>
      <div className=" xl:w-full">
        <motion.img
          src={url_img}
          alt={title}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full md:w-1/2 h-auto pb-10"
        />
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-xl text-center text-gray-300 pb-5">{createdAt}</p>
          <h2 className="text-2xl font-semibold text-gray-700 pb-4">{title}</h2>
          <div className="pb-10">{documentToReactComponents(content)}</div>
          {/* <CardComment /> */}
        </motion.div>
      </div>
    </div>
  );
}

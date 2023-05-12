import React from "react";
import { BiSearch } from "react-icons/bi";
import CardCategories from "./CardCategories";
import { motion } from "framer-motion";
export default function CardAsidePost() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      className="w-full lg:w-2/5 xl:w-full pt-8 lg:pt-1 "
    >
      <form>
        <div className="flex items-center relative pb-10">
          <input
            type="text"
            placeholder="Type a keyword and hit enter"
            className="w-full text-md px-3 py-2 0 text-gray-500 rounded-md border border-black ring-2 ring-gray-300 placeholder-gray-400"
          />
          <div className="absolute right-1  ">
            <BiSearch className="text-gray-800 w-5 h-5" />
          </div>
        </div>
      </form>
      <div className="">
        <h2 className="text-black text-xl font-black">Categories</h2>
        <CardCategories />
      </div>
    </motion.aside>
  );
}

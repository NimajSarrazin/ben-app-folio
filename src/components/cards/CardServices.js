import { Dataservices } from "@/data/DataServices";
import { motion } from "framer-motion";
import React from "react";



export default function CardServices() {
  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pb-32 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:gap-y-14 "
    >
      {Dataservices.map((service, index) => (
        <motion.div
          variants={itemVariants}
          key={index}
          className="max-w-sm p-6 bg-[#222] border border-gray-200 rounded-lg shadow dark:border-[#333] text-center lg:p-10 xl:max-w-md relative group overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 border-l-2 border-r-2 border-transparent transition-all duration-300 group-hover:border-red-500"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 border-t-2 border-b-2 border-transparent transition-all duration-300 group-hover:border-red-500"></div>
          <div className="relative z-10 mb-5">{service.icon}</div>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {service.title}
          </h3>
          <p className="mb-3 font-normal text-[#707070]">{service.content}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

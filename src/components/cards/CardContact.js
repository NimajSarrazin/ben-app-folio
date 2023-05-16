import { DataContact } from "@/data/dataContact";
import { motion } from "framer-motion";
import React from "react";
import { InView } from "react-intersection-observer";

export default function CardContact() {
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-10 -mb-52 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:gap-y-14 "
    >
      {DataContact.map((contact, index) => (
        <InView triggerOnce key={index}>
          {({ inView, ref }) => (
            <motion.div
              variants={itemVariants}
              key={index}
              animate={inView ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#222] dark:border-[#333] text-center lg:p-3 xl:max-w-md relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 border-l-2 border-r-2 border-transparent transition-all duration-300 group-hover:border-red-500"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 border-t-2 border-b-2 border-transparent transition-all duration-300 group-hover:border-red-500"></div>
              <div className="relative z-10"></div>
              <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {contact.title}
              </h3>
              <div className={contact.containerClass}></div>
              <p className="mb-3 font-normal text-[#707070]">
                {contact.content}
              </p>
            </motion.div>
          )}
        </InView>
      ))}
    </motion.div>
  );
}

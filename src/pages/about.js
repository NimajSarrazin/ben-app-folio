import TitleSection from "@/components/TitleSection";
import CardAbout from "@/components/cards/CardAbout";
import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export default function About() {
  return (
    <div className="bg-[#111] py-20" id="about">
      <div className="container">
        <TitleSection
          title="About Me"
          description="Professional Profile - There is All About Me"
        />
        <div className="relative grid grid-cols-1 gap-10 md:flex lg:flex">
          {/* Ajout de la bibliohtèque de InView de react-intersection-observer pour que l'animation de framer-motion s'active uniquement quand j'arrive à la section */}
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.img
                src="/img/about.jpg"
                alt=""
                initial={{ opacity: 0, x: -400 }}
                animate={
                  inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }
                }
                transition={{ duration: 2 }}
                className="w-full md:w-1/2 lg:w-1/3 xl:1/2"
                ref={ref}
              />
            )}
          </InView>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                initial={{ opacity: 0, y: 400 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 400 }}
                transition={{ duration: 1.5 }}
                className="mt-10 relative"
                ref={ref}
              >
                <h3 className="relative mb-8 pb-5 text-xl text-white md:text-3xl lg:text-5xl ">
                  I'm Benjamin Sarrazin
                  <span className="w-10 h-1 bg-[#ff5d56] absolute left-0 bottom-0"></span>
                </h3>
                <p className="text-[#707070] lg:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus assumenda, voluptas nostrum quasi eaque modi
                  voluptatibus sed enim rem? Itaque veritatis eligendi, magnam
                  doloremque vitae temporibus quae error odit.
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus assumenda, voluptas nostrum quasi eaque modi
                  voluptatibus sed enim rem? Itaque veritatis eligendi, magnam
                  doloremque vitae temporibus quae error odit.
                </p>
                <CardAbout />
              </motion.div>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
}

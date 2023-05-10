import TitleSection from "@/components/TitleSection";
import CardAbout from "@/components/cards/CardAbout";
import React from "react";

export default function About() {
  return (
    <div className="bg-[#111] py-20" id="about">
      <div className="container">
        <TitleSection
          title="About Me"
          description="Professional Profile - There is All About Me"
        />
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2">
          <img
            src="/img/about.jpg"
            alt=""
            className="w-full"
          />
          <div className="mt-10 relative">
            <h3 className="relative mb-8 pb-5 text-xl text-white md:text-3xl lg:text-5xl ">
              I'm Benjamin Sarrazin
              <span className="w-10 h-1 bg-[#ff5d56] absolute left-0 bottom-0"></span>
            </h3>
            <p className="text-[#707070] lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus assumenda, voluptas nostrum quasi eaque modi
              voluptatibus sed enim rem? Itaque veritatis eligendi, magnam
              doloremque vitae temporibus quae error odit.<br/> 
              Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Doloribus assumenda, voluptas
              nostrum quasi eaque modi voluptatibus sed enim rem? Itaque
              veritatis eligendi, magnam doloremque vitae temporibus quae error
              odit.
            </p>
            <CardAbout />
          </div>
        </div>
      </div>
    </div>
  );
}

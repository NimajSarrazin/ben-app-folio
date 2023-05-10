import React from "react";
import TitleSection from "./TitleSection";
import "swiper/css/autoplay";
import CardSwiper from "./cards/resume/CardSwiper";
import { educationItems, experienceItems, iconsSvg } from "@/data/DataResume";
import TiltleSvg from "./cards/resume/TiltleSvg";
import CardSkills from "./cards/resume/CardSkills";
import CardFunFacts from "./cards/resume/CardFunFacts";

export default function SectionResume() {
  return (
    <div className="bg-[#111]" id="resume">
      <div className="container">
        <TitleSection
          title="My Resume"
          description="Lorem ipsum dolor sit amet"
        />
        <div className="flex justify-center items-center">
          <div className="container w-full py-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <TiltleSvg title="experience" />
              <CardSwiper title="Experience" data={experienceItems} />
              <CardSkills />
            </div>
            <div>
              <TiltleSvg title="education" />
              <CardSwiper title="Education" data={educationItems} />
              <CardFunFacts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

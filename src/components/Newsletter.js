import React from "react";
import TitleSection from "./TitleSection";
import CardNewsLetters from "./cards/CardNewsLetters";
import Carrousel from "./Carrousel";
import { Language } from "@/data/DataResume";

export default function Newsletter() {
  return (
    <div className="bg-[#111]">
      <div className="container">
        <TitleSection
          title="Sig up for Newsletter"
          description="Join our subscribers list to get the latest news updates and special offers."
        />
        <div className="pb-24">
          <CardNewsLetters />
          <Carrousel data={Language} />
        </div>
      </div>
    </div>
  );
}

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
          title="S'inscrire à la  Newsletter"
          description="- Pour restez informé inscrivez-vous à notre newsletter dès maintenant -"
        />
        <div className="pb-24">
          <CardNewsLetters />
          <Carrousel data={Language} />
        </div>
      </div>
    </div>
  );
}

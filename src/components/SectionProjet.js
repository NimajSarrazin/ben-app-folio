import React from "react";
import TitleSection from "./TitleSection";
import CardProjet from "./cards/resume/CardProjet";
import Projets from "./cards/projet/Projets";

export default function SectionProjet({ posts }) {
  console.log(posts);
  return (
    <section className="bg-[#151515] h-screen " id="projet">
      <div className="">
        <TitleSection
          title="Projet"
          description="See my Works - Lorem ipsum dolor"
        />
      </div>
    </section>
  );
}

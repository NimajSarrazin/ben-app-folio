import React from "react";
import TiltleSvg from "./TiltleSvg";
import { GiCharacter } from "react-icons/gi";

export default function CardFunFacts() {
  const funFactsData = [
    { label: "Client content", value: 0 },
    { label: "Récompenses", value: 0 },
    { label: "Travaux fini", value: 9 },
    { label: "Note", value: 0 },
  ];

  return (
    <section>
      <div>
        <TiltleSvg title="Fun Fact" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  lg:gap-10">
        {funFactsData.map((fact, index) => (
          <div
            key={index}
            className="bg-[#222] border-[#333] border relative mb-8 h-20 pt-3 pl-20 lg:pl-20 xl:w-10/12"
          >
            <div className="text-5xl text-[#ff5d56] mb-3 w-20 h-20 absolute top-0 left-0 flex justify-center items-center border border-[#333]">
              <GiCharacter />
            </div>
            <h3 className="md:text-xl xl:text-2xl text-white font-bold m-0 text-center">
              {fact.value}
            </h3>
            <p className="text-[#707070] text-center">{fact.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

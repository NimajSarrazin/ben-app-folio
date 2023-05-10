import React from "react";
import TiltleSvg from "./TiltleSvg";
import { BiStar } from "react-icons/bi";

export default function CardSkills() {
  const skills = [
    { name: "HTML 5", stars: 5 },
    { name: "PHP", stars: 3 },
    { name: "Symfony", stars: 3 },
    { name: "React", stars: 3 },
    { name: "Next.js", stars: 3 },
    { name: "JavaScript", stars: 2 },
  ];

  const renderStars = (count) => {
    return Array(count).fill(<BiStar />);
  };

  return (
    <section className="">
      <div>
        <TiltleSvg title="My Skills" />
      </div>
      <div className="flex justify-between mb-7 w-full lg:text-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 p-6">
          <aside className="text-white">
            <ul>
              <li className="uppercase mb-4 tracking-wider">
                HTML 5
                <div className="flex text-xl text-[#ff5d56]">
                  {renderStars(skills[0].stars)}
                </div>
              </li>
              <li className="uppercase mb-4 tracking-wider">
                PHP
                <div className="flex text-xl text-[#ff5d56]">
                  {renderStars(skills[1].stars)}
                </div>
              </li>
              <li className="uppercase mb-4 tracking-wider">
                Symfony
                <div className="flex text-xl text-[#ff5d56]">
                  {renderStars(skills[3].stars)}
                </div>
              </li>
            </ul>
          </aside>
          <div className="text-white">
            <ul>
              {skills.slice(3).map((skill, index) => (
                <li key={index} className="uppercase mb-4 tracking-wider">
                  {skill.name}
                  <div className="flex text-xl text-[#ff5d56]">
                    {renderStars(skill.stars)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

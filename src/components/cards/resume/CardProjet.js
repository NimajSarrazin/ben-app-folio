import React from "react";

export default function CardProjet() {
  const projects = [
    { id: 1, label: "ALL", color: "[#ff5d56]"},
    { id: 2, label: "Nextjs", color: "[#222]", textColor: "[#707070]" },
    { id: 3, label: "React", color: "[#222]", textColor: "[#707070]" },
    { id: 4, label: "Symfony", color: "[#222]", textColor: "[#707070]" },
    { id: 5, label: "Php", color: "[#222]", textColor: "[#707070]" },
  ];

  return (
    <div className="w-full">
      <div className="mb-12">
        <ul className="list-none flex justify-center space-x-3 mb-12 text-white">
          {projects.map((project,index) => (
            <li key={project.id}>
              <span
                className={`bg-${project.color} text-${project.textColor}   border-[#333] border p-2 px-5`}
              >
                {project.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

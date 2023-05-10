import React, { useEffect, useState } from "react";

export default function Menu() {
  const projects = [
    { id: 1, label: "ALL", color: "[#ff5d56]" },
    { id: 2, label: "Nextjs", color: "[#222]", textColor: "[#707070]" },
    { id: 3, label: "React", color: "[#222]", textColor: "[#707070]" },
    { id: 4, label: "Symfony", color: "[#222]", textColor: "[#707070]" },
    { id: 5, label: "Php", color: "[#222]", textColor: "[#707070]" },
  ];

  const [selectedProjectId, setSelectedProjectId] = useState(1);

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(projectId);
  };
  const style = "white";

  return (
    <div className="">
      <div className="mb-12">
        <ul className="list-none flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project) => (
            <li key={project.id} className="mb-3">
              <span
                onClick={() => handleProjectClick(project.id)}
                className={`bg-${
                  selectedProjectId === project.id ? "red" : project.color
                } text-${
                  selectedProjectId === project.id ? style : project.textColor
                } border-[#333] border p-2 px-5 cursor-pointer`}
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

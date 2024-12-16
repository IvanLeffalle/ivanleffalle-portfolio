import React, { useState } from "react";
import {
  DiNodejsSmall,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiCss3,
} from "react-icons/di"; // Ensure these are installed
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Chamber of Dentists - Website",
    description:
      "Developed a responsive website using HTML, CSS, and JavaScript with modern UI design.",
    links: {
      site: "https://ivanleffalle.github.io/wdd231/chamber/index.html",
      github: "https://github.com/IvanLeffalle/wdd231/tree/main/chamber",
    },
    technologies: [
      { name: "HTML5", icon: <DiHtml5 className="text-customAccent" /> },
      { name: "CSS", icon: <DiCss3 className="text-customAccent" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-customAccent" />,
      },
      { name: "GitHub", icon: <DiGithubBadge className="text-customAccent" /> },
    ],
  },
  {
    title: "Family Dental Website",
    description: "UI for frontend development using Html and Bootstrap.",
    links: {
      site: "https://ivanleffalle.github.io/DrLeffalle.com.ar/",
      github: "https://github.com/IvanLeffalle/wdd231/tree/main/chamber",
    },
    technologies: [
      { name: "HTML5", icon: <DiHtml5 className="text-customAccent" /> },
      { name: "CSS", icon: <DiCss3 className="text-customAccent" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-customAccent" />,
      },
      { name: "GitHub", icon: <DiGithubBadge className="text-customAccent" /> },
    ],
  },
  {
    title: "Journal App",
    description: "CSE210 project showcasing abstraction concepts in C#.",
    links: {
      site: "#",
      github:
        "https://github.com/IvanLeffalle/cse210-projects/tree/main/prove/Develop02",
    },
    technologies: [
      { name: "C#", icon: <DiNodejsSmall className="text-customAccent" /> },
    ],
  },
  {
    title: "Scriptures App",
    description:
      "Demonstrated encapsulation principles in this CSE210 project.",
    links: {
      site: "#",
      github:
        "https://github.com/IvanLeffalle/cse210-projects/tree/main/prove/Develop03",
    },
    technologies: [
      { name: "C#", icon: <DiNodejsSmall className="text-customAccent" /> },
    ],
  },
  {
    title: "Mindfulness App",
    description: "Explored inheritance in this CSE210 mindfulness application.",
    links: {
      site: "#",
      github:
        "https://github.com/IvanLeffalle/cse210-projects/tree/main/prove/Develop05",
    },
    technologies: [
      { name: "C#", icon: <DiNodejsSmall className="text-customAccent" /> },
    ],
  },
  {
    title: "Goals App",
    description: "Illustrated polymorphism in a goal-setting CSE210 project.",
    links: {
      site: "#",
      github:
        "https://github.com/IvanLeffalle/cse210-projects/tree/main/prove/Develop06",
    },
    technologies: [
      { name: "C#", icon: <DiNodejsSmall className="text-customAccent" /> },
    ],
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-[1200px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
        Other Interesting Projects{" "}
      </h2>
      {/* Updated grid container */}
      <div
        className="md:grid md:gap-8 items-center align-middle flex flex-col gap-8"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div
              className={`flex flex-col md:min-h-[300px] md:w-auto w-[100%] justify-between bg-gray-800/40 transition duration-300 p-6 rounded-lg shadow-md`}
            >
              <h3 className="text-xl font-semibold text-gray-200 border-customAccent mb-4 pb-2 border-b-[1px]">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-[16px]">
                {project.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-gray-200 text-[13px]">
                      <span>- </span>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 mt-4 justify-end">
                <a
                  href={project.links.github}
                  className="px-2 py-2 rounded-lg hover:bg-slate-700 transition duration-300 flex "
                >
                  <AiOutlineGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

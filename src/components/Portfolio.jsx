import React, { useState } from "react";
import {
  DiNodejsSmall,
  DiMongodb,
  DiReact,
  DiGithubBadge,
  DiWordpress,
  DiHtml5,
  DiJavascript1,
  DiFirebase,
  DiCss3,
} from "react-icons/di"; // Ensure these are installed
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import project1 from "../assets/images/weather-app.webp";
import project2 from "../assets/images/alelivestidos.webp";
import project3 from "../assets/images/TitheApp.webp";
import project4 from "../assets/images/gruposapucai.webp";

const projects = [
  {
    img: project1,
    title: "Weather App",
    description: "UI for frontend development using Html Css, and Javascript.",
    links: {
      site: "https://ivanleffalle.github.io/wdd231/weather/index.html",
      github: "#",
    },
    technologies: [
      { name: "Html5 ", icon: <DiHtml5 className="text-customAccent" /> },
      {
        name: "CSS",
        icon: <DiCss3 className="text-customAccent" />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-customAccent" />,
      },
      { name: "GitHub", icon: <DiGithubBadge className="text-customAccent" /> },
    ],
  },
  {
    img: project2,
    title: "Aleli Vestidos - Ecommerce",
    description: "A fullstack application built with Nextjs and MongoDB.",
    links: {
      site: "https://www.alelivestidos.com.ar/",
      github: "#",
    },
    technologies: [
      {
        name: "Node Js",
        icon: <DiNodejsSmall className="text-customAccent" />,
      },
      { name: "MongoDB", icon: <DiMongodb className="text-customAccent" /> },
      { name: "React", icon: <DiReact className="text-customAccent" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-customAccent" /> },
    ],
  },
  {
    img: project3,
    title: "Tithe App",
    description:
      "React Native Android application developed with Expo to help users keep track of their sales.",
    links: {
      site: "https://github.com/IvanLeffalle/tithe-app",
      github: "https://github.com/IvanLeffalle/tithe-app",
    },
    technologies: [
      {
        name: "Node Js",
        icon: <DiNodejsSmall className="text-customAccent" />,
      },
      { name: "Firebase", icon: <DiFirebase className="text-customAccent" /> },
      { name: "React-Native", icon: <DiReact className="text-customAccent" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-customAccent" /> },
    ],
  },
  {
    img: project4,
    title: "Grupo Sapucai - Website",
    description:
      "A modern and visually appealing website crafted using Elementor in WordPress.",
    links: {
      site: "https://gruposapucai.com/",
      github: "#",
    },
    technologies: [
      {
        name: "Wordpress",
        icon: <DiWordpress className="text-customAccent" />,
      },
    ],
  },
];

export const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-[1200px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Projects</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row hover:bg-gray-800/40  hover:rounded-lg transition duration-300 hover:border-customAccent hover:border-2 hover:border-opacity-50 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              opacity:
                hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1, // Dim others
            }}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-start">
              <h3 className="text-2xl font-semibold text-gray-200 border-customAccent mb-4 pb-2 border-b-[1px] ">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-gray-200 text-[13px]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                    transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                    transition duration-300 flex items-center"
                >
                  <AiOutlineGithub className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

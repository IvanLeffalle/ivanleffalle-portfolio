import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experiences = [
  {
    company: 'eAssist dental Solutions',
    period: 'Oct. 2023 - Present',
    description: 'Managed ticketing system to track, prioritize, and resolve an average of 30+ customer cases weekly.',
  },
  {
    company: 'Vistum Web',
    period: 'Feb. 2023 - Oct. 2023',
    description: 'Designed and developed responsive websites using WordPress, leveraging tools like Elementor to create user-friendly and visually appealing layouts.',
  },
];

export const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto md:my-20" id="experience" >
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">Experience</h1>
      <motion.div
        className="space-y-8 relative"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Timeline Line */}
        <motion.div
          className="absolute left-6 top-0 bottom-0 w-[1px] bg-customAccent"
          variants={{
            hidden: { height: 0 },
            visible: { height: '100%', transition: { duration: 1 } },
          }}
        />

        {/* Experience Items */}
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              className="relative flex items-start space-x-6"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              {/* Dot */}
              <div className="w-4 h-[1px] bg-customAccent relative z-10 mt-20"></div>

              {/* Content */}
              <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-800/40">
                <h2 className="text-gray-100 text-2xl font-semibold">{experience.company}</h2>
                <p className="text-gray-300">{experience.period}</p>
                <p className="text-gray-400 mt-4">{experience.description}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

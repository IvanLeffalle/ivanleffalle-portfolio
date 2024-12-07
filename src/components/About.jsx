import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di"
import Reveal from "./Reveal"

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
      { name: 'Sass', icon: <DiSass className='text-pink-600' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
    ],
  },
  {
    category: 'Fullstack',
    technologies: [
      { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
      { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
      { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
    ],
  },
]

export const About = () => {
  return (
    <div className="max-w-[850px] p-6 md:my-20 mx-auto flex flex-col justify-center text-gray-200 pb-8 md:py-12" id="about">
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 md:text-start text-center ">About<span> Me</span></h2>
        <p className="md:text-start text-center mb-8">
          Hello! My name is Ivan, my journey into tech has been anything but traditional, but it’s been an exciting one. It all started with my<span> background as a dentist</span> , where I developed strong analytical and problem-solving skills. However, my curiosity and love for innovation led me to explore the world of technology.<br />
          <br /> Fast-forward to today, I’ve transitioned from dentistry to IT and now to software development. Along the way, I’ve earned a certificate in<span> Web and Computer Programming</span>, and I’m currently pursuing a degree in Software Development at <span>BYU-Idaho</span>.<br /><br />
          I’m also enthusiastic about embracing change and continuous learning. Moving between industries has taught me the value of adaptability, resilience, and having a growth mindset, which I bring to every project I work on.<br /><br />
          Here are a few technologies I’ve been working with recently:<br />
          <br />
          <div className="flex flex-row gap-10 tracking-wider md:justify-start justify-center">
            <ul className="text-[13px]">
              <li className="mb-2 "><span>-</span>  JavaScript <br /></li>
              <li className="mb-2"><span>-</span>  Python<br /></li>
              <li className="mb-2"><span>-</span>  React<br /></li>
              <li className="mb-2"><span>-</span> Next.js<br /></li>
            </ul>
            <ul className="text-[13px]">
              <li className="mb-2 "><span>-</span>  Tailwind CSS<br /></li>
              <li className="mb-2"><span>-</span> Firebase<br /></li>
              <li className="mb-2"><span>-</span> MongoDB<br /><br /></li>
            </ul>
          </div>
        </p >
      </Reveal >
    </div >
  )
}


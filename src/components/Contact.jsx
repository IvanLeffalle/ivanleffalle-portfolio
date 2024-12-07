import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

export const Contact = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto" id="contact">
      <Reveal>
        <div className="grid md:grid-col place-items-center mt-20">
          <div className="text-gray-300 my-3">
            <h3 className="text-4xl text-gray-200 font-bold text-center mb-12">Get In <span>Touch</span></h3>
            <p className="text-center leading-7 w-11/12 mx-auto mb-12">
              Whether you have a project in mind, need technical assistance, or simply want to connect, I’m here to help! Feel free to reach out—let’s collaborate and build something amazing together.
            </p>
          </div>
          <a href="mailto:ivanmleffalle@gmail.com" target="_blank"
          >
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="z-10 cursor-pointer font-bold text-customAccent md:w-auto p-4 border mb-1
                                     border-customAccent rounded-xl"
            >
              npm say hello          </motion.button>

          </a>




        </div>

      </Reveal>
    </div>
  )
}


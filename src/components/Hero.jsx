import React from "react";
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineMail,
    AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";


export const Hero = () => {
    return (
        <div className=" max-w-[1200px] mx-auto relative h-[100vh] flex flex-col justify-center p-6">
            <div className="grid place-items-start ">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}

                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className=" md:text-2xl text-2xl tracking-tight mb-4 text-customAccent"
                    >Hi, this is
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="md:text-7xl text-5xl tracking-tight mb-4"
                    >
                        <span className="text-gray-200 text-clamp-lg font-bold">IVAN LEFFALLE<span className="text-">.</span></span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-10"
                    >
                        <span className=" text-gray-400 text-clamp-lg ">Building solutions.
                        </span>
                    </motion.p>
                    <motion.div className="flex flex-row ">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-gray-200 md:text-3xl text-lg tracking-tight mb-4 mr-4"
                        >
                            <ul className="flex flex-col md:gap-5 gap-2 ">
                                <li>
                                    Developer
                                </li>
                                <li>
                                    Dentist
                                </li>
                                <li>
                                    Husband
                                </li>
                                <li>
                                    Father
                                </li>

                            </ul>
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className=" items-center gap-6 border-customAccent border-l-[1px] pl-4 md:mb-0"
                        >
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 1 }}
                                className="text-gray-300 md:leading-10 max-w-[300px] md:max-w-[500px] md:text-2xl text-sm mb-6  "
                            >
                                Dedicated full-stack developer with a strong foundation in building dynamic, user-friendly applications.                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 1.5 }}
                                className="flex flex-row items-center gap-4 md:gap-6 my-4 md:mb-0 "
                            >
                                <a
                                    href="/ivan-leffalle-cv.pdf"
                                    download="ivan-leffalle-cv.pdf"
                                    aria-label="Download Ivan Leffalle's CV"
                                    className="block"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                                        className="z-10 cursor-pointer font-bold text-customAccent md:text-[16px] text-[08px] md:w-auto p-2 md-p-4 border border-customAccent rounded-xl"
                                    >
                                        Download CV
                                    </motion.button>
                                </a>


                                <div className="flex md:gap-6 gap-4 flex-row text-xl md:text-6xl text-customAccent z-20">
                                    <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/IvanLeffalle" className=" cursor-pointer">
                                        <AiOutlineGithub />
                                    </motion.a>

                                    <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/leffalleivan/">
                                        <AiOutlineLinkedin />
                                    </motion.a>

                                    <motion.a whileHover={{ scale: 1.2 }} href="mailto:ivanmleffalle@gmail.com">
                                        <AiOutlineMail />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </motion.div>

            </div >


        </div >
    )
}


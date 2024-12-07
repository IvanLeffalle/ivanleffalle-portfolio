import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import logo from '../assets/images/logo.png'
export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }

    return (
        <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-10 px-[50px] max-w-[1200px]'>
            <div className='mx-auto  flex justify-between text-gray-200 text-xl items-center px-12 h-20'>
                <a href="#">
                    <img src={logo} alt="Logo" className="w-20 h-20" />
                </a>

                <ul className='hidden md:flex gap-12 z-10 cursor-pointer '>
                    <li className="hover:text-customAccent transition duration-300">
                        <Link to="portfolio" smooth={true} offset={50} duration={500} activeClass="text-customAccent"
                            spy={true} >Projects</Link></li>
                    <li className="hover:text-customAccent transition duration-300">

                        <Link to="about" smooth={true} offset={50} duration={500} activeClass="text-customAccent" spy={true}>About</Link>
                    </li>
                    <li className='hover:text-customAccent transition duration-300'>
                        <Link to="experience" smooth={true} offset={50} duration={500} activeClass="text-customAccent" spy={true}>Experience</Link>
                    </li>
                    <li className='hover:text-customAccent transition duration-300'>
                        <Link to="contact" smooth={true} offset={50} duration={500} activeClass="text-customAccent" spy={true} >Contact</Link>
                    </li>
                </ul>

                <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <motion.div
                    initial={false}
                    animate={nav ? 'open' : 'closed'}
                    variants={menuVariants}
                    className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'
                >
                    <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
                        <li><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500} activeClass="text-customAccent" spy={true}>About</Link></li>
                        <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500} activeClass="text-customAccent" spy={true}>Projects</Link></li>
                        <li><Link to="experience" onClick={closeNav} smooth={true} offset={50} duration={500} activeClass="text-customAccent" spy={true}>Experience</Link></li>
                        <li><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500} activeClass="text-customAccent" spy={true}>Contact</Link></li>
                    </ul>


                </motion.div>



            </div>
        </div>
    )
}


'use client'

import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import '/styles/headerstyle.css'


type HeaderProps = {}

export default function Header({ }: HeaderProps) {
    const [socialHovered, setSocialHovered] = useState(-1);
    const socialIconColor = 'rgb(208,210,216)'
    const socialIconHoverColor = 'rgb(255,239,156)'

    const [menuOpen, setMenuOpen] = useState(false);

    const menuCardRef = useRef(null);

    const animationControls = useAnimation();

    useEffect(() => {
        if (menuOpen) {
            animationControls.start("visible");
        }
        else {
            animationControls.start("hidden");
        }
    }, [menuOpen]);

    return (
        <header className='sticky top-0 p-5 flex flex-row items-center justify-between max-w-7xl mx-auto z-20'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>
                <SocialIcon url='#contact' network='email' fgColor={socialHovered == 0 ? socialIconHoverColor : socialIconColor} bgColor='transparent'
                    onMouseEnter={() => setSocialHovered(0)}
                    onMouseLeave={() => setSocialHovered(-1)} />
                <SocialIcon url='https://www.github.com/rush1dan' target='_blank' fgColor={socialHovered == 1 ? socialIconHoverColor : socialIconColor} bgColor='transparent'
                    onMouseEnter={() => setSocialHovered(1)}
                    onMouseLeave={() => setSocialHovered(-1)} />
                <SocialIcon url='https://www.linkedin.com/in/rush1dan' target='_blank' fgColor={socialHovered == 2 ? socialIconHoverColor : socialIconColor} bgColor='transparent'
                    onMouseEnter={() => setSocialHovered(2)}
                    onMouseLeave={() => setSocialHovered(-1)} />
                <SocialIcon url='https://www.youtube.com/@rush1dan' target='_blank' fgColor={socialHovered == 3 ? socialIconHoverColor : socialIconColor} bgColor='transparent'
                    onMouseEnter={() => setSocialHovered(3)}
                    onMouseLeave={() => setSocialHovered(-1)} />
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='hidden md:flex flex-row items-center justify-center md:space-x-8 lg:space-x-14'>
                <Link href="#about" className='nav-button'>About</Link>
                <Link href="#skills" className='nav-button'>Skills</Link>
                <Link href="#projects" className='nav-button'>Projects</Link>
                <Link href="#contact" className='nav-button'>Contact</Link>
            </motion.div>

            {/* Hamburger Icon */}
            <button className={`block hamburger md:hidden focus:outline-none ${menuOpen ? 'open' : ''}`}
                onClick={(e) => setMenuOpen(!menuOpen)}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <motion.div ref={menuCardRef}
                    className={`absolute flex flex-col items-center justify-center py-8 mt-10 space-y-8 font-bold bg-cardBGColor mx-auto w-[75%] 
                self-center left-6 right-6 shadow-stone-900 shadow-lg rounded-md ${menuOpen ? '' : 'pointer-events-none'}`}
                    variants={{
                        hidden: {
                            opacity: 0,
                            translateY: -500
                        },
                        visible: {
                            opacity: 1,
                            translateY: 0
                        },
                    }}
                    initial="hidden"
                    animate={animationControls}
                    transition={{ duration: 0.5, ease: 'circOut' }}>
                    <Link href="#about" className="menu-link" onClick={(e) => setMenuOpen(false)}>About</Link>
                    <Link href="#skills" className="menu-link" onClick={(e) => setMenuOpen(false)}>Skills</Link>
                    <Link href="#projects" className="menu-link" onClick={(e) => setMenuOpen(false)}>Projects</Link>
                    <Link href="#contact" className="menu-link" onClick={(e) => setMenuOpen(false)}>Contact</Link>
                </motion.div>
            </div>
        </header >
    )
}
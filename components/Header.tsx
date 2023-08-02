'use client'

import React from 'react'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'


type Props = {}

export default function Header({ }: Props) {
    const [socialHovered, setSocialHovered] = useState(0);
    const socialIconColor = 'rgb(208,210,216)'
    const socialIconHoverColor = 'rgb(255,239,156)'

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
        </header>
    )
}
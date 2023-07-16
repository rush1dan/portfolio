'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'


type Props = {}

export default function Header({ }: Props) {
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
                <SocialIcon url='https://www.facebook.com' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://www.youtube.com' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://www.instagram.com' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://www.twitter.com' fgColor='gray' bgColor='transparent' />
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
                className='hidden md:flex flex-row items-center justify-center'>
                <Link href="#about" className='nav-button'><span className='nav-heading'>About</span></Link>
                <Link href="#skills" className='nav-button'><span className='nav-heading'>Skills</span></Link>
                <Link href="#projects" className='nav-button'><span className='nav-heading'>Projects</span></Link>
                <Link href="#contact" className='nav-button'><span className='nav-heading'>Contact</span></Link>
            </motion.div>
        </header>
    )
}
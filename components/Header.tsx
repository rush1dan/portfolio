'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'


type Props = {}

export default function Header({ }: Props) {
    return (
        <header className=' sticky top-0 p-5 flex flex-row items-center justify-between max-w-7xl mx-auto z-20'>
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
                className=' cursor-pointer flex flex-row items-center'>
                <SocialIcon network='email' fgColor='gray' bgColor='transparent' />
                <p className='uppercase text-sm text-gray-400 hidden md:inline-flex'>Get In Touch</p>
            </motion.div>
        </header>
    )
}
'use client'

import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["A Game Developer.", "A Software Engineer.", "An avid learner."],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div>
            <div className=' flex flex-col-reverse items-center justify-center space-y-10 
            md:flex-row md:space-x-16'>
                <div className='flex flex-col items-center justify-center space-y-2 md:w-64'>
                    <h1 className=' text-2xl'>
                        <span>Hi, I'm <span className=' font-semibold'>Rushidan</span>, </span>
                    </h1>
                    <div>
                        <h2 className=' inline-block font-bold text-2xl'>{text}</h2>
                        <Cursor cursorBlinking={true} cursorColor='#777777' />
                    </div>
                </div>
                <div></div>
                <div>
                    <Image src={'/dp.png'} alt='profile picture' width={256} height={256} priority />
                </div>
            </div>
        </div>
    )
}
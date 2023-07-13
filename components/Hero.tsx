'use client'

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
            <div className='flex flex-col-reverse items-center justify-center space-y-10 mt-32
            md:flex-row md:space-x-2 md:mt-40 lg:space-x-12'>
                <div className='flex flex-col items-center justify-center space-y-2 md:w-[24rem] lg:w-[32rem]'>
                    <h1>
                        <span className='text-2xl md:text-3xl lg:text-4xl'>Hi, I'm <span className='font-semibold text-3xl text-[rgb(255,239,156)] md:text-4xl lg:text-5xl'>Rushidan</span>, </span>
                    </h1>
                    <div>
                        <h2 className='inline-block font-bold text-2xl md:text-3xl lg:text-5xl'>{text}</h2>
                        <span className='text-2xl md:text-3xl lg:text-5xl'>
                            <Cursor cursorBlinking={true} cursorColor='#777777' />
                        </span>
                    </div>
                </div>
                <div></div>
                <div className='dp-div'>
                    <div className='glow1'>
                        <div className="glow2">
                            <div>
                                <img src="dp.jpg" alt="profile picture" className='dp' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function HomePage({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["A Software Engineer.", "A Game Developer.", "An avid learner."],
        loop: true,
        delaySpeed: 2000
    })

    const [dpLoaded, setDpLoaded] = useState(false)

    return (
        <div className='h-[calc(100vh-5.5rem)] snap-center relative'>
            {/* Hero flex container */}
            <div className='flex flex-col-reverse items-center justify-center space-y-10 
            md:flex-row md:space-x-2 lg:space-x-12 absolute w-full md:top-[45%] top-[50%] -translate-y-1/2'>

                {/* Self Description */}
                <div className='flex flex-col items-center justify-center space-y-2 md:w-[24rem] lg:w-[32rem] md:mt-4'>

                    {/* Introduction */}
                    <h1>
                        <span className='text-2xl md:text-3xl lg:text-4xl'>Hi, I&apos;m <span className='font-semibold text-3xl text-accentColor md:text-4xl lg:text-5xl'>Rushidan</span>, </span>
                    </h1>

                    {/* What I Do */}
                    <div>
                        <h2 className='inline-block font-bold text-2xl md:text-3xl lg:text-5xl'>{text}</h2>
                        <span className='text-2xl md:text-3xl lg:text-5xl'>
                            <Cursor cursorBlinking={true} cursorColor='#777777' />
                        </span>
                    </div>

                    {/* Resume/Contact */}
                    <div className="flex flex-row gap-x-8 pt-6">
                        <Link href="https://drive.google.com/file/d/10bnOKXtcn5pe1CYQiLR_14BtdXWJwjcq/view?usp=sharing" target='_blank' className='uppercase tracking-[0.15em] bg-transparent hover:bg-[rgb(255,239,156,0.75)] px-3 py-3 font-semibold rounded-lg border-4 border-accentColor text-accentColor text-lg'>
                            Resume
                        </Link>
                        <Link href="#contact" className='uppercase bg-transparent hover:bg-[rgb(255,239,156,0.75)] px-3 py-3 font-semibold rounded-lg border-4 border-accentColor text-accentColor text-lg'>
                            Contact
                        </Link>
                    </div>
                </div>

                <div></div>

                {/* Profile picture */}
                <div className='dp-div'>
                    <div className={`glow1 ${dpLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                        <div className="glow2">
                            <div>
                                <Image src="/dp.jpg" alt="profile picture" fill onLoad={() => setDpLoaded(true)} className='dp'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
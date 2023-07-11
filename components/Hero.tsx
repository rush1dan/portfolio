'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["a Game Developer.", "a Software Engineer.", "an avid learner."],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div>
            <h1 className=' text-2xl'>
                <span>Hi, I'm <span className=' font-semibold'>Rushidan</span>, </span>
                <span className=' font-bold'>{text}</span>
                <Cursor cursorBlinking={true} cursorColor='#777777' />
            </h1>
        </div>
    )
}
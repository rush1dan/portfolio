'use client'

import { Player,} from '@lottiefiles/react-lottie-player'
import React from 'react'
import Skill from '@/components/Skill'

type Props = {}

export default function Skills({ }: Props) {

  const skillIconDirectory = "skillicons/"

  const frontEndSkillList = [
    ["html5-original.svg", "HTML"],
    ["css3-original.svg", "CSS"],
    ["tailwindcss-plain.svg", "TailwindCSS"],
    ["javascript-original.svg", "JavaScript"],
    ["typescript-original.svg", "TypeScript"],
    ["react-original.svg", "React"],
    ["redux-original.svg", "Redux"],
    ["flutter-original.svg", "Flutter"]
  ]
  const backEndSkillList = []
  const gameDevSkillList = []
  const languageSkillList = []

  return (
    <div className='h-screen snap-center bg-gradient-radial from-[rgb(54,54,54)] from-5% to-[rgb(36,36,36)] to-70%'>
      {/* Lottie animation */}
      <div className='h-full flex flex-row items-center justify-around space-x-96 max-w-7xl'>     
        <Player
          autoplay
          loop
          src="developer_lottie.json"
          style={{ height: "300px", width: "300px" }} 
        ></Player>
        <Skill iconSrc='skillicons/javascript-original.svg' altText='JavaScript'/>
      </div>
    </div>
  )
}
'use client'

import { Player, } from '@lottiefiles/react-lottie-player'
import React from 'react'
import Skill from '@/components/Skill'
import SkillCategory from '@/components/SkillCategory'
import HeadingLine from '@/components/HeadingLine'

type Props = {}

export default function Skills({ }: Props) {
  // [iconSrc, iconAltText, hoverIconSrc, hoverIconAltText, hoverTitle]

  const frontEndSkillList = ["html", "css", "tailwindcss", "javascript", "typescript", "react", "redux", "flutter"]
  const backEndSkillList = ["nodejs", "expressjs", "mongodb", "dotnetcore", "microsoft-sql-server", "nextjs"]
  const gameDevSkillList = ["unity", "blender"]
  const languageSkillList = ["cpp", "csharp", "python"]

  return (
    <div className='h-screen snap-center bg-gradient-radial from-[rgb(54,54,54)] from-5% to-[rgb(36,36,36)] to-70%'>
      <HeadingLine 
        heading='SKILLS'
        marginPadding='mt-32'
        lineWidth='w-[30vw]'
      />
      {/* Main Flex Container */}
      <div className='h-full flex flex-row items-center justify-center space-x-40'>
        
        {/* Lottie animation */}
        <Player
          autoplay
          loop
          src="developer_lottie.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
        
        {/* Skill flex container */}
        <div className='flex flex-col space-y-24'>
          <SkillCategory category='Front End' skillList={frontEndSkillList} />
          <SkillCategory category='Back End' skillList={backEndSkillList} />
          <SkillCategory category='Game Dev' skillList={gameDevSkillList} />
          <SkillCategory category='Languages' skillList={languageSkillList} />
        </div>
      </div>
    </div>
  )
}
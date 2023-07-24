'use client'

import { Player, } from '@lottiefiles/react-lottie-player'
import React from 'react'
import Skill from '@/components/Skill'
import SkillCategory from '@/components/SkillCategory'

type Props = {}

export default function Skills({ }: Props) {

  const skillIconDirectory = "skillicons/"

  const frontEndSkillList = [
    ["html5.svg", "HTML"],
    ["css3.svg", "CSS"],
    ["tailwindcss.svg", "TailwindCSS"],
    ["javascript.svg", "JavaScript"],
    ["typescript.svg", "TypeScript"],
    ["react.svg", "React"],
    ["redux.svg", "Redux"],
    ["flutter.svg", "Flutter"]
  ]
  const backEndSkillList = [
    ["nodejs.svg", "NodeJS"],
    ["expressjs.svg", "ExpressJS"],
    ["mongodb.svg", "MongoDB"],
    ["dotnetcore.svg", ".Net Core"],
    ["microsoft-sql-server.svg", "MS Sql Server"],
    ["nextjs.svg"]
  ]
  const gameDevSkillList = [
    ["unity_white.svg", "Unity"],
    ["blender.svg", "Blender"]
  ]
  const languageSkillList = [
    ["cpp.svg", "C++"],
    ["csharp.svg", "C#"],
    ["python.svg", "Python"]
  ]

  return (
    <div className='h-screen snap-center bg-gradient-radial from-[rgb(54,54,54)] from-5% to-[rgb(36,36,36)] to-70%'>
      {/* Main Flex Container */}
      <div className='h-full flex flex-row items-center justify-center space-x-48'>
        
        {/* Lottie animation */}
        <Player
          autoplay
          loop
          src="developer_lottie.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
        
        {/* Skill flex container */}
        <div className='flex flex-col space-y-24'>
          <SkillCategory category='Front End' skillIconDir={skillIconDirectory} skillList={frontEndSkillList} />
          <SkillCategory category='Back End' skillIconDir={skillIconDirectory} skillList={backEndSkillList} />
          <SkillCategory category='Game Dev' skillIconDir={skillIconDirectory} skillList={gameDevSkillList} />
          <SkillCategory category='Languages' skillIconDir={skillIconDirectory} skillList={languageSkillList} />
        </div>
      </div>
    </div>
  )
}
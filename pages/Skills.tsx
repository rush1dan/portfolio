'use client'

import { Player, } from '@lottiefiles/react-lottie-player'
import React from 'react'
import Skill from '@/components/Skill'
import SkillCategory from '@/components/SkillCategory'

type Props = {}

export default function Skills({ }: Props) {

  const skillIconDirectory = "skillicons/"
  const skillHoverIconDirectory = "skillicons/withTitle/"

  // [iconSrc, iconAltText, hoverIconSrc, hoverIconAltText, hoverTitle]

  const frontEndSkillList = [
    ["html5.svg", "HTML", "html5.svg", "HTML", ""],
    ["css3.svg", "CSS", "css3.svg", "CSS", ""],
    ["tailwindcss.svg", "TailwindCSS", "tailwindcss.svg", "TailwindCSS", ""],
    ["javascript.svg", "JavaScript", "javascript.svg", "JavaScript", "JavaScript"],
    ["typescript.svg", "TypeScript", "typescript.svg", "TypeScript", "TypeScript"],
    ["react.svg", "React", "react.svg", "React", ""],
    ["redux.svg", "Redux", "redux.svg", "Redux", "Redux"],
    ["flutter.svg", "Flutter", "flutter.svg", "Flutter", "Flutter"]
  ]
  const backEndSkillList = [
    ["nodejs.svg", "NodeJS", "nodejs.svg", "NodeJS", ""],
    ["expressjs.svg", "ExpressJS", "expressjs.svg", "ExpressJS", ""],
    ["mongodb.svg", "MongoDB", "mongodb.svg", "MongoDB", ""],
    ["dotnetcore.svg", ".NET Core", "dotnetcore.svg", ".NET Core", ".NET Core"],
    ["microsoft-sql-server.svg", "MS Sql Server", "microsoft-sql-server.svg", "MS Sql Server", ""],
    ["nextjs.svg", "NextJS", "nextjs.svg", "NextJS", ""]
  ]
  const gameDevSkillList = [
    ["unity_white.svg", "Unity", "unity_black.svg", "Unity", ""],
    ["blender.svg", "Blender", "blender.svg", "Blender", ""]
  ]
  const languageSkillList = [
    ["cpp.svg", "C++", "cpp.svg", "C++", "C++"],
    ["csharp.svg", "C#", "csharp.svg", "C#", "C#"],
    ["python.svg", "Python", "python.svg", "Python", ""]
  ]

  return (
    <div className='h-screen snap-center bg-gradient-radial from-[rgb(54,54,54)] from-5% to-[rgb(36,36,36)] to-70%'>
      <div className="relative">
        <div className="absolute mt-24 w-full h-14">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className='absolute origin-left -translate-x-4 -scale-x-100 h-[1px] bg-slate-300 w-[30vw] inline-block top-1/2 -translate-y-1/2'> 

            </div>
            <p className="text-3xl text-gray-600 font-semibold inline">SKILLS</p>
            <div className='absolute origin-left translate-x-4 h-[1px] bg-slate-300 w-[30vw] inline-block top-1/2 -translate-y-1/2'> 

            </div>
          </div>
        </div>
      </div>
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
          <SkillCategory category='Front End' skillIconDir={skillIconDirectory} skillHoverIconDir={skillHoverIconDirectory} skillList={frontEndSkillList} />
          <SkillCategory category='Back End' skillIconDir={skillIconDirectory} skillHoverIconDir={skillHoverIconDirectory} skillList={backEndSkillList} />
          <SkillCategory category='Game Dev' skillIconDir={skillIconDirectory} skillHoverIconDir={skillHoverIconDirectory} skillList={gameDevSkillList} />
          <SkillCategory category='Languages' skillIconDir={skillIconDirectory} skillHoverIconDir={skillHoverIconDirectory} skillList={languageSkillList} />
        </div>
      </div>
    </div>
  )
}
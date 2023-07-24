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
    ["dotnetcore.svg", ".Net Core", "dotnetcore.svg", ".Net Core", ".Net Core"],
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
          <SkillCategory category='Front End' skillIconDir={skillIconDirectory} skillHoverIconDir={skillHoverIconDirectory} skillList={frontEndSkillList} />
          <SkillCategory category='Back End' skillIconDir={skillIconDirectory} skillHoverIconDir={skillHoverIconDirectory} skillList={backEndSkillList} />
          <SkillCategory category='Game Dev' skillIconDir={skillIconDirectory} skillHoverIconDir={skillHoverIconDirectory} skillList={gameDevSkillList} />
          <SkillCategory category='Languages' skillIconDir={skillIconDirectory} skillHoverIconDir={skillHoverIconDirectory} skillList={languageSkillList} />
        </div>
      </div>
    </div>
  )
}
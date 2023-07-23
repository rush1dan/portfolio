'use client'

import { Player, } from '@lottiefiles/react-lottie-player'
import React from 'react'
import Skill from '@/components/Skill'
import SkillCategory from '@/components/SkillCategory'

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
  const backEndSkillList = [
    ["nodejs-original.svg", "NodeJS"],
    ["mongodb-original-wordmark.svg", "MongoDB"],
    ["dotnetcore-original.svg", ".Net Core"],
    ["microsoft-sql-server-logo-svgrepo-com.svg", "MS Sql Server"],
    ["nextjs-original.svg"]
  ]
  const gameDevSkillList = [
    ["Unity_2021.svg", "Unity"],
    ["blender-original.svg", "Blender"]
  ]
  const languageSkillList = [
    ["cpp3-svgrepo-com.svg", "C++"],
    ["csharp-original.svg", "C#"],
    ["python-original.svg", "Python"]
  ]

  return (
    <div className='h-screen snap-center bg-gradient-radial from-[rgb(54,54,54)] from-5% to-[rgb(36,36,36)] to-70%'>
      {/* Lottie animation */}
      <div className='h-full flex flex-row items-center justify-around max-w-7xl'>
        <Player
          autoplay
          loop
          src="developer_lottie.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
        <div className='flex flex-col w-1/2'>
          <SkillCategory category='Front End' skillIconDir={skillIconDirectory} skillList={frontEndSkillList} />
          <SkillCategory category='Back End' skillIconDir={skillIconDirectory} skillList={backEndSkillList} />
          <SkillCategory category='Game Dev' skillIconDir={skillIconDirectory} skillList={gameDevSkillList} />
          <SkillCategory category='Languages' skillIconDir={skillIconDirectory} skillList={languageSkillList} />
        </div>
      </div>
    </div>
  )
}
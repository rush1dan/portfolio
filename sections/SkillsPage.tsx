'use client'

import React from 'react'
import SkillCategory from '@/components/SkillCategory'
import HeadingLine from '@/components/HeadingLine'
import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import Lottie from 'react-lottie-player'
import developer_lottie_json from '../public/developer_lottie.json'
import { PageProps } from '@/app/page'

type SkillsPageProps = {} & PageProps

export default function SkillsPage({ isMobile, mediaQueries }: SkillsPageProps) {

    const frontEndSkillList = ["html", "css", "tailwindcss", "nextjs", "react", "redux"]
    const backEndSkillList = ["nodejs", "mongodb", "socketio", "fastapi", "django", "postgresql", "dotnetcore", "microsoft-sql-server", "redis", "rabbitmq"]
    const opsSkillList = ["docker", "kubernetes", "nginx"]
    const gameDevSkillList = ["unity", "blender"]
    const languageSkillList = ["cpp", "csharp", "python", "javascript", "typescript"]

    return (
        <AnimateOnView Component={SkillsPageContent} otherProps={{ frontEndSkillList, backEndSkillList, opsSkillList, gameDevSkillList, languageSkillList }}
        isMobile={isMobile} mediaQueries={mediaQueries} />
    )
}

function SkillsPageContent({ animationControls, otherProps, isMobile, mediaQueries }: AnimateableComponentProps)
{
    const lottieSize: string = mediaQueries?.xl ? '300px' : (mediaQueries?.lg ? '250px' : (mediaQueries?.md ? '250px' : (mediaQueries?.thin ? '200px' : '150px')));

    return (
        <div className='w-screen py-24 bg-gradient-radial from-[rgb(54,54,54)] from-5% to-[rgb(36,36,36)] to-70%'>
            <HeadingLine
                animationControls={animationControls}
                heading='SKILLS'
                lineWidth='w-[30vw]'
            />
            {/* Main Flex Container */}
            <div className='pt-20 h-full flex flex-col xl:flex-row items-center justify-center 2xl:space-x-40 xl:space-x-12 xl:space-y-0 space-y-8'>

                {/* Lottie animation */}
                <Lottie
                    play
                    loop
                    animationData={developer_lottie_json}
                    segments={[0, 90]}
                    style={{ height: `${lottieSize}`, width: `${lottieSize}` }}
                />

                {/* Skill flex container */}
                <div className='flex flex-col xl:space-y-16 space-y-10'>
                    <SkillCategory category='Front End' skillList={otherProps.frontEndSkillList} mediaQuery={mediaQueries!} animationControls={animationControls} />
                    <SkillCategory category='Back End' skillList={otherProps.backEndSkillList} mediaQuery={mediaQueries!} animationControls={animationControls} />
                    <SkillCategory category='Ops' skillList={otherProps.opsSkillList} mediaQuery={mediaQueries!} animationControls={animationControls} />
                    <SkillCategory category='Game Dev' skillList={otherProps.gameDevSkillList} mediaQuery={mediaQueries!} animationControls={animationControls} />
                    <SkillCategory category='Languages' skillList={otherProps.languageSkillList} mediaQuery={mediaQueries!} animationControls={animationControls} />
                </div>
            </div>
        </div>
    )
}
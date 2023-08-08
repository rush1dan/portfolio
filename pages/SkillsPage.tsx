'use client'

import { Player, } from '@lottiefiles/react-lottie-player'
import React from 'react'
import SkillCategory from '@/components/SkillCategory'
import HeadingLine from '@/components/HeadingLine'
import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import { MediaQuery } from '@/myutils/defaultMediaQueries'

type SkillsPageProps = MediaQuery & {

}

export default function SkillsPage({ mediaQuery }: SkillsPageProps) {
    // [iconSrc, iconAltText, hoverIconSrc, hoverIconAltText, hoverTitle]

    const frontEndSkillList = ["html", "css", "tailwindcss", "javascript", "typescript", "react", "redux", "flutter"]
    const backEndSkillList = ["nodejs", "expressjs", "mongodb", "dotnetcore", "microsoft-sql-server", "nextjs"]
    const gameDevSkillList = ["unity", "blender"]
    const languageSkillList = ["cpp", "csharp", "python"]

    return (
        <AnimateOnView Component={SkillsPageContent} mediaQuery={mediaQuery} otherProps={{ frontEndSkillList, backEndSkillList, gameDevSkillList, languageSkillList }} />
    )
}

function SkillsPageContent({ animationControls, mediaQuery, otherProps }: AnimateableComponentProps)
{
    const lottieSize: string = mediaQuery?.xl ? '300px' : (mediaQuery?.lg ? '250px' : (mediaQuery?.md ? '250px' : '200px'));

    return (
        <div className='h-screen snap-center bg-gradient-radial from-[rgb(54,54,54)] from-5% to-[rgb(36,36,36)] to-70%'>
            <HeadingLine
                animationControls={animationControls}
                heading='SKILLS'
                marginPadding='mt-32'
                lineWidth='w-[30vw]'
            />
            {/* Main Flex Container */}
            <div className='pt-20 h-full flex flex-col xl:flex-row items-center justify-center 2xl:space-x-40 xl:space-x-12 xl:space-y-0 space-y-8'>

                {/* Lottie animation */}
                <Player
                    autoplay
                    loop
                    src="developer_lottie.json"
                    style={{ height: `${lottieSize}`, width: `${lottieSize}` }}
                ></Player>

                {/* Skill flex container */}
                <div className='flex flex-col xl:space-y-24 space-y-10'>
                    <SkillCategory category='Front End' skillList={otherProps.frontEndSkillList} mediaQuery={mediaQuery} animationControls={animationControls} />
                    <SkillCategory category='Back End' skillList={otherProps.backEndSkillList} mediaQuery={mediaQuery} animationControls={animationControls} />
                    <SkillCategory category='Game Dev' skillList={otherProps.gameDevSkillList} mediaQuery={mediaQuery} animationControls={animationControls} />
                    <SkillCategory category='Languages' skillList={otherProps.languageSkillList} mediaQuery={mediaQuery} animationControls={animationControls} />
                </div>
            </div>
        </div>
    )
}
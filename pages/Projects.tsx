import React from 'react'
import HeadingLine from '@/components/HeadingLine'
import ProjectCard from '@/components/ProjectCard'

type Props = {}

export default function Projects({ }: Props) {
    return (
        <div className='h-screen snap-center'>
            <div className="h-[13%]"></div>
            <div className="flex flex-col items-center justify-start spacing-y-12 h-[87%]">
                <div className="h-1/2 w-full">
                    <HeadingLine
                        heading='PROJECTS'
                        marginPadding=''
                        lineWidth='w-[10vw]'
                    />
                    <div className="h-12"></div>
                    <div className="w-full flex flex-row items-center justify-center">
                        <ProjectCard />
                    </div>
                </div>
                <div className="h-1/2 w-full">
                    <HeadingLine
                        heading='GAMES'
                        marginPadding=''
                        lineWidth='w-[10vw]'
                    />
                </div>
            </div>
        </div>
    )
}